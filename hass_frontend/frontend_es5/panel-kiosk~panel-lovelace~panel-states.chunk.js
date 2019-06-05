(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-kiosk~panel-lovelace~panel-states"],{

/***/ "./src/cards/ha-media_player-card.js":
/*!*******************************************!*\
  !*** ./src/cards/ha-media_player-card.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_progress_paper_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-progress/paper-progress */ "./node_modules/@polymer/paper-progress/paper-progress.js");
/* harmony import */ var _polymer_paper_styles_element_styles_paper_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/element-styles/paper-material-styles */ "./node_modules/@polymer/paper-styles/element-styles/paper-material-styles.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/hass-media-player-model */ "./src/util/hass-media-player-model.js");
/* harmony import */ var _data_media_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/media-player */ "./src/data/media-player.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style\n        include=\"paper-material-styles iron-flex iron-flex-alignment iron-positioning\"\n      >\n        :host {\n          @apply --paper-material-elevation-1;\n          display: block;\n          position: relative;\n          font-size: 0px;\n          border-radius: 2px;\n        }\n\n        .banner {\n          position: relative;\n          background-color: white;\n          border-top-left-radius: 2px;\n          border-top-right-radius: 2px;\n        }\n\n        .banner:before {\n          display: block;\n          content: \"\";\n          width: 100%;\n          /* removed .25% from 16:9 ratio to fix YT black bars */\n          padding-top: 56%;\n          transition: padding-top 0.8s;\n        }\n\n        .banner.no-cover {\n          background-position: center center;\n          background-image: url(/static/images/card_media_player_bg.png);\n          background-repeat: no-repeat;\n          background-color: var(--primary-color);\n        }\n\n        .banner.content-type-music:before {\n          padding-top: 100%;\n        }\n\n        .banner.content-type-game:before {\n          padding-top: 100%;\n        }\n\n        .banner.no-cover:before {\n          padding-top: 88px;\n        }\n\n        .banner > .cover {\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n\n          border-top-left-radius: 2px;\n          border-top-right-radius: 2px;\n\n          background-position: center center;\n          background-size: cover;\n          transition: opacity 0.8s;\n          opacity: 1;\n        }\n\n        .banner.is-off > .cover {\n          opacity: 0;\n        }\n\n        .banner > .caption {\n          @apply --paper-font-caption;\n\n          position: absolute;\n          left: 0;\n          right: 0;\n          bottom: 0;\n\n          background-color: rgba(0, 0, 0, var(--dark-secondary-opacity));\n\n          padding: 8px 16px;\n\n          font-size: 14px;\n          font-weight: 500;\n          color: white;\n\n          transition: background-color 0.5s;\n        }\n\n        .banner.is-off > .caption {\n          background-color: initial;\n        }\n\n        .banner > .caption .title {\n          @apply --paper-font-common-nowrap;\n          font-size: 1.2em;\n          margin: 8px 0 4px;\n        }\n\n        .progress {\n          width: 100%;\n          height: var(--paper-progress-height, 4px);\n          margin-top: calc(-1 * var(--paper-progress-height, 4px));\n          --paper-progress-active-color: var(--accent-color);\n          --paper-progress-container-color: rgba(200, 200, 200, 0.5);\n        }\n\n        .controls {\n          position: relative;\n          @apply --paper-font-body1;\n          padding: 8px;\n          border-bottom-left-radius: 2px;\n          border-bottom-right-radius: 2px;\n          background-color: var(--paper-card-background-color, white);\n        }\n\n        .controls paper-icon-button {\n          width: 44px;\n          height: 44px;\n        }\n\n        .playback-controls {\n          direction: ltr;\n        }\n\n        paper-icon-button {\n          opacity: var(--dark-primary-opacity);\n        }\n\n        paper-icon-button[disabled] {\n          opacity: var(--dark-disabled-opacity);\n        }\n\n        paper-icon-button.primary {\n          width: 56px !important;\n          height: 56px !important;\n          background-color: var(--primary-color);\n          color: white;\n          border-radius: 50%;\n          padding: 8px;\n          transition: background-color 0.5s;\n        }\n\n        paper-icon-button.primary[disabled] {\n          background-color: rgba(0, 0, 0, var(--dark-disabled-opacity));\n        }\n\n        [invisible] {\n          visibility: hidden !important;\n        }\n      </style>\n\n      <div\n        class$=\"[[computeBannerClasses(playerObj, _coverShowing, _coverLoadError)]]\"\n      >\n        <div class=\"cover\" id=\"cover\"></div>\n\n        <div class=\"caption\">\n          [[_computeStateName(stateObj)]]\n          <div class=\"title\">[[computePrimaryText(localize, playerObj)]]</div>\n          [[playerObj.secondaryTitle]]<br />\n        </div>\n      </div>\n\n      <paper-progress\n        max=\"[[stateObj.attributes.media_duration]]\"\n        value=\"[[playbackPosition]]\"\n        hidden$=\"[[computeHideProgress(playerObj)]]\"\n        class=\"progress\"\n      ></paper-progress>\n\n      <div class=\"controls layout horizontal justified\">\n        <paper-icon-button\n          icon=\"hass:power\"\n          on-click=\"handleTogglePower\"\n          invisible$=\"[[computeHidePowerButton(playerObj)]]\"\n          class=\"self-center secondary\"\n        ></paper-icon-button>\n\n        <div class=\"playback-controls\">\n          <paper-icon-button\n            icon=\"hass:skip-previous\"\n            invisible$=\"[[!playerObj.supportsPreviousTrack]]\"\n            disabled=\"[[playerObj.isOff]]\"\n            on-click=\"handlePrevious\"\n          ></paper-icon-button>\n          <paper-icon-button\n            class=\"primary\"\n            icon=\"[[computePlaybackControlIcon(playerObj)]]\"\n            invisible$=\"[[!computePlaybackControlIcon(playerObj)]]\"\n            disabled=\"[[playerObj.isOff]]\"\n            on-click=\"handlePlaybackControl\"\n          ></paper-icon-button>\n          <paper-icon-button\n            icon=\"hass:skip-next\"\n            invisible$=\"[[!playerObj.supportsNextTrack]]\"\n            disabled=\"[[playerObj.isOff]]\"\n            on-click=\"handleNext\"\n          ></paper-icon-button>\n        </div>\n\n        <paper-icon-button\n          icon=\"hass:dots-vertical\"\n          on-click=\"handleOpenMoreInfo\"\n          class=\"self-center secondary\"\n        ></paper-icon-button>\n      </div>\n    "]);

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */

var HaMediaPlayerCard =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaMediaPlayerCard, _LocalizeMixin);

  function HaMediaPlayerCard() {
    _classCallCheck(this, HaMediaPlayerCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaMediaPlayerCard).apply(this, arguments));
  }

  _createClass(HaMediaPlayerCard, [{
    key: "playerObjChanged",
    value: function () {
      var _playerObjChanged = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(playerObj, oldPlayerObj) {
        var _this = this;

        var picture, oldPicture, _ref, contentType, content;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (playerObj.isPlaying && playerObj.showProgress) {
                  if (!this._positionTracking) {
                    this._positionTracking = setInterval(function () {
                      return _this.updatePlaybackPosition();
                    }, 1000);
                  }
                } else if (this._positionTracking) {
                  clearInterval(this._positionTracking);
                  this._positionTracking = null;
                }

                if (playerObj.showProgress) {
                  this.updatePlaybackPosition();
                }

                picture = playerObj.stateObj.attributes.entity_picture;
                oldPicture = oldPlayerObj && oldPlayerObj.stateObj.attributes.entity_picture;

                if (!(picture !== oldPicture && !picture)) {
                  _context.next = 7;
                  break;
                }

                this.$.cover.style.backgroundImage = "";
                return _context.abrupt("return");

              case 7:
                if (!(picture === oldPicture)) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return");

              case 9:
                if (!(picture.substr(0, 1) !== "/")) {
                  _context.next = 14;
                  break;
                }

                this._coverShowing = true;
                this._coverLoadError = false;
                this.$.cover.style.backgroundImage = "url(".concat(picture, ")");
                return _context.abrupt("return");

              case 14:
                _context.prev = 14;
                _context.next = 17;
                return Object(_data_media_player__WEBPACK_IMPORTED_MODULE_7__["fetchMediaPlayerThumbnailWithCache"])(this.hass, playerObj.stateObj.entity_id);

              case 17:
                _ref = _context.sent;
                contentType = _ref.content_type;
                content = _ref.content;
                this._coverShowing = true;
                this._coverLoadError = false;
                this.$.cover.style.backgroundImage = "url(data:".concat(contentType, ";base64,").concat(content, ")");
                _context.next = 30;
                break;

              case 25:
                _context.prev = 25;
                _context.t0 = _context["catch"](14);
                this._coverShowing = false;
                this._coverLoadError = true;
                this.$.cover.style.backgroundImage = "";

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[14, 25]]);
      }));

      function playerObjChanged(_x, _x2) {
        return _playerObjChanged.apply(this, arguments);
      }

      return playerObjChanged;
    }()
  }, {
    key: "updatePlaybackPosition",
    value: function updatePlaybackPosition() {
      this.playbackPosition = this.playerObj.currentProgress;
    }
  }, {
    key: "computeBannerClasses",
    value: function computeBannerClasses(playerObj, coverShowing, coverLoadError) {
      var cls = "banner";

      if (playerObj.isOff || playerObj.isIdle) {
        cls += " is-off no-cover";
      } else if (!playerObj.stateObj.attributes.entity_picture || coverLoadError || !coverShowing) {
        cls += " no-cover";
      } else if (playerObj.stateObj.attributes.media_content_type === "music") {
        cls += " content-type-music";
      } else if (playerObj.stateObj.attributes.media_content_type === "game") {
        cls += " content-type-game";
      }

      return cls;
    }
  }, {
    key: "computeHideProgress",
    value: function computeHideProgress(playerObj) {
      return !playerObj.showProgress;
    }
  }, {
    key: "computeHidePowerButton",
    value: function computeHidePowerButton(playerObj) {
      return playerObj.isOff ? !playerObj.supportsTurnOn : !playerObj.supportsTurnOff;
    }
  }, {
    key: "computePlayerObj",
    value: function computePlayerObj(hass, stateObj) {
      return new _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_6__["default"](hass, stateObj);
    }
  }, {
    key: "computePrimaryText",
    value: function computePrimaryText(localize, playerObj) {
      return playerObj.primaryTitle || localize("state.media_player.".concat(playerObj.stateObj.state)) || localize("state.default.".concat(playerObj.stateObj.state)) || playerObj.stateObj.state;
    }
  }, {
    key: "computePlaybackControlIcon",
    value: function computePlaybackControlIcon(playerObj) {
      if (playerObj.isPlaying) {
        return playerObj.supportsPause ? "hass:pause" : "hass:stop";
      }

      if (playerObj.hasMediaControl || playerObj.isOff || playerObj.isIdle) {
        if (playerObj.hasMediaControl && playerObj.supportsPause && !playerObj.isPaused) {
          return "hass:play-pause";
        }

        return playerObj.supportsPlay ? "hass:play" : null;
      }

      return "";
    }
  }, {
    key: "_computeStateName",
    value: function _computeStateName(stateObj) {
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["default"])(stateObj);
    }
  }, {
    key: "handleNext",
    value: function handleNext(ev) {
      ev.stopPropagation();
      this.playerObj.nextTrack();
    }
  }, {
    key: "handleOpenMoreInfo",
    value: function handleOpenMoreInfo(ev) {
      ev.stopPropagation();
      this.fire("hass-more-info", {
        entityId: this.stateObj.entity_id
      });
    }
  }, {
    key: "handlePlaybackControl",
    value: function handlePlaybackControl(ev) {
      ev.stopPropagation();
      this.playerObj.mediaPlayPause();
    }
  }, {
    key: "handlePrevious",
    value: function handlePrevious(ev) {
      ev.stopPropagation();
      this.playerObj.previousTrack();
    }
  }, {
    key: "handleTogglePower",
    value: function handleTogglePower(ev) {
      ev.stopPropagation();
      this.playerObj.togglePower();
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        playerObj: {
          type: Object,
          computed: "computePlayerObj(hass, stateObj)",
          observer: "playerObjChanged"
        },
        playbackControlIcon: {
          type: String,
          computed: "computePlaybackControlIcon(playerObj)"
        },
        playbackPosition: Number,
        _coverShowing: {
          type: Boolean,
          value: false
        },
        _coverLoadError: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return HaMediaPlayerCard;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"])));

customElements.define("ha-media_player-card", HaMediaPlayerCard);

/***/ }),

/***/ "./src/cards/ha-weather-card.js":
/*!**************************************!*\
  !*** ./src/cards/ha-weather-card.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          cursor: pointer;\n        }\n\n        .content {\n          padding: 0 20px 20px;\n        }\n\n        ha-icon {\n          color: var(--paper-item-icon-color);\n        }\n\n        .header {\n          font-family: var(--paper-font-headline_-_font-family);\n          -webkit-font-smoothing: var(\n            --paper-font-headline_-_-webkit-font-smoothing\n          );\n          font-size: var(--paper-font-headline_-_font-size);\n          font-weight: var(--paper-font-headline_-_font-weight);\n          letter-spacing: var(--paper-font-headline_-_letter-spacing);\n          line-height: var(--paper-font-headline_-_line-height);\n          text-rendering: var(\n            --paper-font-common-expensive-kerning_-_text-rendering\n          );\n          opacity: var(--dark-primary-opacity);\n          padding: 24px 16px 16px;\n          display: flex;\n          align-items: baseline;\n        }\n\n        .name {\n          margin-left: 16px;\n          font-size: 16px;\n          color: var(--secondary-text-color);\n        }\n\n        :host([rtl]) .name {\n          margin-left: 0px;\n          margin-right: 16px;\n        }\n\n        .now {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          flex-wrap: wrap;\n        }\n\n        .main {\n          display: flex;\n          align-items: center;\n          margin-right: 32px;\n        }\n\n        :host([rtl]) .main {\n          margin-right: 0px;\n        }\n\n        .main ha-icon {\n          --iron-icon-height: 72px;\n          --iron-icon-width: 72px;\n          margin-right: 8px;\n        }\n\n        :host([rtl]) .main ha-icon {\n          margin-right: 0px;\n        }\n\n        .main .temp {\n          font-size: 52px;\n          line-height: 1em;\n          position: relative;\n        }\n\n        :host([rtl]) .main .temp {\n          direction: ltr;\n          margin-right: 28px;\n        }\n\n        .main .temp span {\n          font-size: 24px;\n          line-height: 1em;\n          position: absolute;\n          top: 4px;\n        }\n\n        .measurand {\n          display: inline-block;\n        }\n\n        :host([rtl]) .measurand {\n          direction: ltr;\n        }\n\n        .forecast {\n          margin-top: 16px;\n          display: flex;\n          justify-content: space-between;\n        }\n\n        .forecast div {\n          flex: 0 0 auto;\n          text-align: center;\n        }\n\n        .forecast .icon {\n          margin: 4px 0;\n          text-align: center;\n        }\n\n        :host([rtl]) .forecast .temp {\n          direction: ltr;\n        }\n\n        .weekday {\n          font-weight: bold;\n        }\n\n        .attributes,\n        .templow,\n        .precipitation {\n          color: var(--secondary-text-color);\n        }\n\n        :host([rtl]) .precipitation {\n          direction: ltr;\n        }\n      </style>\n      <ha-card>\n        <div class=\"header\">\n          [[computeState(stateObj.state, localize)]]\n          <div class=\"name\">[[computeName(stateObj)]]</div>\n        </div>\n        <div class=\"content\">\n          <div class=\"now\">\n            <div class=\"main\">\n              <template is=\"dom-if\" if=\"[[showWeatherIcon(stateObj.state)]]\">\n                <ha-icon icon=\"[[getWeatherIcon(stateObj.state)]]\"></ha-icon>\n              </template>\n              <div class=\"temp\">\n                [[stateObj.attributes.temperature]]<span\n                  >[[getUnit('temperature')]]</span\n                >\n              </div>\n            </div>\n            <div class=\"attributes\">\n              <template\n                is=\"dom-if\"\n                if=\"[[_showValue(stateObj.attributes.pressure)]]\"\n              >\n                <div>\n                  [[localize('ui.card.weather.attributes.air_pressure')]]:\n                  <span class=\"measurand\">\n                    [[stateObj.attributes.pressure]] [[getUnit('air_pressure')]]\n                  </span>\n                </div>\n              </template>\n              <template\n                is=\"dom-if\"\n                if=\"[[_showValue(stateObj.attributes.humidity)]]\"\n              >\n                <div>\n                  [[localize('ui.card.weather.attributes.humidity')]]:\n                  <span class=\"measurand\"\n                    >[[stateObj.attributes.humidity]] %</span\n                  >\n                </div>\n              </template>\n              <template\n                is=\"dom-if\"\n                if=\"[[_showValue(stateObj.attributes.wind_speed)]]\"\n              >\n                <div>\n                  [[localize('ui.card.weather.attributes.wind_speed')]]:\n                  <span class=\"measurand\">\n                    [[getWindSpeed(stateObj.attributes.wind_speed)]]\n                  </span>\n                  [[getWindBearing(stateObj.attributes.wind_bearing, localize)]]\n                </div>\n              </template>\n            </div>\n          </div>\n          <template is=\"dom-if\" if=\"[[forecast]]\">\n            <div class=\"forecast\">\n              <template is=\"dom-repeat\" items=\"[[forecast]]\">\n                <div>\n                  <div class=\"weekday\">\n                    [[computeDate(item.datetime)]]<br />\n                    <template is=\"dom-if\" if=\"[[!_showValue(item.templow)]]\">\n                      [[computeTime(item.datetime)]]\n                    </template>\n                  </div>\n                  <template is=\"dom-if\" if=\"[[_showValue(item.condition)]]\">\n                    <div class=\"icon\">\n                      <ha-icon\n                        icon=\"[[getWeatherIcon(item.condition)]]\"\n                      ></ha-icon>\n                    </div>\n                  </template>\n                  <div class=\"temp\">\n                    [[item.temperature]] [[getUnit('temperature')]]\n                  </div>\n                  <template is=\"dom-if\" if=\"[[_showValue(item.templow)]]\">\n                    <div class=\"templow\">\n                      [[item.templow]] [[getUnit('temperature')]]\n                    </div>\n                  </template>\n                  <template is=\"dom-if\" if=\"[[_showValue(item.precipitation)]]\">\n                    <div class=\"precipitation\">\n                      [[item.precipitation]] [[getUnit('precipitation')]]\n                    </div>\n                  </template>\n                </div>\n              </template>\n            </div>\n          </template>\n        </div>\n      </ha-card>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









/*
 * @appliesMixin LocalizeMixin
 */

var HaWeatherCard =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaWeatherCard, _LocalizeMixin);

  _createClass(HaWeatherCard, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        config: Object,
        stateObj: Object,
        forecast: {
          type: Array,
          computed: "computeForecast(stateObj.attributes.forecast)"
        },
        rtl: {
          type: Boolean,
          reflectToAttribute: true,
          computed: "_computeRTL(hass)"
        }
      };
    }
  }]);

  function HaWeatherCard() {
    var _this;

    _classCallCheck(this, HaWeatherCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HaWeatherCard).call(this));
    _this.cardinalDirections = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];
    _this.weatherIcons = {
      "clear-night": "hass:weather-night",
      cloudy: "hass:weather-cloudy",
      fog: "hass:weather-fog",
      hail: "hass:weather-hail",
      lightning: "hass:weather-lightning",
      "lightning-rainy": "hass:weather-lightning-rainy",
      partlycloudy: "hass:weather-partlycloudy",
      pouring: "hass:weather-pouring",
      rainy: "hass:weather-rainy",
      snowy: "hass:weather-snowy",
      "snowy-rainy": "hass:weather-snowy-rainy",
      sunny: "hass:weather-sunny",
      windy: "hass:weather-windy",
      "windy-variant": "hass:weather-windy-variant"
    };
    return _this;
  }

  _createClass(HaWeatherCard, [{
    key: "ready",
    value: function ready() {
      this.addEventListener("click", this._onClick);

      _get(_getPrototypeOf(HaWeatherCard.prototype), "ready", this).call(this);
    }
  }, {
    key: "_onClick",
    value: function _onClick() {
      this.fire("hass-more-info", {
        entityId: this.stateObj.entity_id
      });
    }
  }, {
    key: "computeForecast",
    value: function computeForecast(forecast) {
      return forecast && forecast.slice(0, 5);
    }
  }, {
    key: "getUnit",
    value: function getUnit(measure) {
      var lengthUnit = this.hass.config.unit_system.length || "";

      switch (measure) {
        case "air_pressure":
          return lengthUnit === "km" ? "hPa" : "inHg";

        case "length":
          return lengthUnit;

        case "precipitation":
          return lengthUnit === "km" ? "mm" : "in";

        default:
          return this.hass.config.unit_system[measure] || "";
      }
    }
  }, {
    key: "computeState",
    value: function computeState(state, localize) {
      return localize("state.weather.".concat(state)) || state;
    }
  }, {
    key: "computeName",
    value: function computeName(stateObj) {
      return this.config && this.config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__["default"])(stateObj);
    }
  }, {
    key: "showWeatherIcon",
    value: function showWeatherIcon(condition) {
      return condition in this.weatherIcons;
    }
  }, {
    key: "getWeatherIcon",
    value: function getWeatherIcon(condition) {
      return this.weatherIcons[condition];
    }
  }, {
    key: "windBearingToText",
    value: function windBearingToText(degree) {
      var degreenum = parseInt(degree);

      if (isFinite(degreenum)) {
        return this.cardinalDirections[((degreenum + 11.25) / 22.5 | 0) % 16];
      }

      return degree;
    }
  }, {
    key: "getWindSpeed",
    value: function getWindSpeed(speed) {
      return "".concat(speed, " ").concat(this.getUnit("length"), "/h");
    }
  }, {
    key: "getWindBearing",
    value: function getWindBearing(bearing, localize) {
      if (bearing != null) {
        var cardinalDirection = this.windBearingToText(bearing);
        return "(".concat(localize("ui.card.weather.cardinal_direction.".concat(cardinalDirection.toLowerCase())) || cardinalDirection, ")");
      }

      return "";
    }
  }, {
    key: "_showValue",
    value: function _showValue(item) {
      return typeof item !== "undefined" && item !== null;
    }
  }, {
    key: "computeDate",
    value: function computeDate(data) {
      var date = new Date(data);
      return date.toLocaleDateString(this.hass.language, {
        weekday: "short"
      });
    }
  }, {
    key: "computeTime",
    value: function computeTime(data) {
      var date = new Date(data);
      return date.toLocaleTimeString(this.hass.language, {
        hour: "numeric"
      });
    }
  }, {
    key: "_computeRTL",
    value: function _computeRTL(hass) {
      return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__["computeRTL"])(hass);
    }
  }]);

  return HaWeatherCard;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"])));

customElements.define("ha-weather-card", HaWeatherCard);

/***/ }),

/***/ "./src/common/entity/extract_views.ts":
/*!********************************************!*\
  !*** ./src/common/entity/extract_views.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return extractViews; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/common/const.ts");

// Return an ordered array of available views
function extractViews(entities) {
  var views = [];
  Object.keys(entities).forEach(function (entityId) {
    var entity = entities[entityId];

    if (entity.attributes.view) {
      views.push(entity);
    }
  });
  views.sort(function (view1, view2) {
    if (view1.entity_id === _const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_VIEW_ENTITY_ID"]) {
      return -1;
    }

    if (view2.entity_id === _const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_VIEW_ENTITY_ID"]) {
      return 1;
    }

    return view1.attributes.order - view2.attributes.order;
  });
  return views;
}

/***/ }),

/***/ "./src/common/entity/get_group_entities.ts":
/*!*************************************************!*\
  !*** ./src/common/entity/get_group_entities.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getGroupEntities; });
function getGroupEntities(entities, group) {
  var result = {};
  group.attributes.entity_id.forEach(function (entityId) {
    var entity = entities[entityId];

    if (entity) {
      result[entity.entity_id] = entity;
    }
  });
  return result;
}

/***/ }),

/***/ "./src/common/entity/get_view_entities.ts":
/*!************************************************!*\
  !*** ./src/common/entity/get_view_entities.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getViewEntities; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _get_group_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get_group_entities */ "./src/common/entity/get_group_entities.ts");


// Return an object containing all entities that the view will show
// including embedded groups.
function getViewEntities(entities, view) {
  var viewEntities = {};
  view.attributes.entity_id.forEach(function (entityId) {
    var entity = entities[entityId];

    if (entity && !entity.attributes.hidden) {
      viewEntities[entity.entity_id] = entity;

      if (Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(entity.entity_id) === "group") {
        var groupEntities = Object(_get_group_entities__WEBPACK_IMPORTED_MODULE_1__["default"])(entities, entity);
        Object.keys(groupEntities).forEach(function (grEntityId) {
          var grEntity = groupEntities[grEntityId];

          if (!grEntity.attributes.hidden) {
            viewEntities[grEntityId] = grEntity;
          }
        });
      }
    }
  });
  return viewEntities;
}

/***/ }),

/***/ "./src/common/entity/split_by_groups.ts":
/*!**********************************************!*\
  !*** ./src/common/entity/split_by_groups.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return splitByGroups; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");

// Split a collection into a list of groups and a 'rest' list of ungrouped
// entities.
// Returns { groups: [], ungrouped: {} }
function splitByGroups(entities) {
  var groups = [];
  var ungrouped = {};
  Object.keys(entities).forEach(function (entityId) {
    var entity = entities[entityId];

    if (Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(entityId) === "group") {
      groups.push(entity);
    } else {
      ungrouped[entityId] = entity;
    }
  });
  groups.forEach(function (group) {
    return group.attributes.entity_id.forEach(function (entityId) {
      delete ungrouped[entityId];
    });
  });
  return {
    groups: groups,
    ungrouped: ungrouped
  };
}

/***/ }),

/***/ "./src/components/entity/ha-state-label-badge.ts":
/*!*******************************************************!*\
  !*** ./src/components/entity/ha-state-label-badge.ts ***!
  \*******************************************************/
/*! exports provided: HaStateLabelBadge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaStateLabelBadge", function() { return HaStateLabelBadge; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/entity/domain_icon */ "./src/common/entity/domain_icon.ts");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");
/* harmony import */ var _common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/entity/timer_time_remaining */ "./src/common/entity/timer_time_remaining.ts");
/* harmony import */ var _common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/datetime/seconds_to_duration */ "./src/common/datetime/seconds_to_duration.ts");
/* harmony import */ var _ha_label_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ha-label-badge */ "./src/components/ha-label-badge.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      :host {\n        cursor: pointer;\n      }\n\n      ha-label-badge {\n        --ha-label-badge-color: var(--label-badge-red, #df4c1e);\n      }\n      ha-label-badge.has-unit_of_measurement {\n        --ha-label-badge-label-text-transform: none;\n      }\n\n      ha-label-badge.binary_sensor,\n      ha-label-badge.updater {\n        --ha-label-badge-color: var(--label-badge-blue, #039be5);\n      }\n\n      .red {\n        --ha-label-badge-color: var(--label-badge-red, #df4c1e);\n      }\n\n      .blue {\n        --ha-label-badge-color: var(--label-badge-blue, #039be5);\n      }\n\n      .green {\n        --ha-label-badge-color: var(--label-badge-green, #0da035);\n      }\n\n      .yellow {\n        --ha-label-badge-color: var(--label-badge-yellow, #f4b400);\n      }\n\n      .grey {\n        --ha-label-badge-color: var(--label-badge-grey, var(--paper-grey-500));\n      }\n\n      .warning {\n        --ha-label-badge-color: var(--label-badge-yellow, #fce588);\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <ha-label-badge\n        class=\"", "\"\n        .value=\"", "\"\n        .icon=\"", "\"\n        .image=\"", "\"\n        .label=\"", "\"\n        .description=\"", "\"\n      ></ha-label-badge>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        <ha-label-badge\n          class=\"warning\"\n          label=\"", "\"\n          icon=\"hass:alert\"\n          description=\"", "\"\n        ></ha-label-badge>\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { "static": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }











var HaStateLabelBadge = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-state-label-badge")], function (_initialize, _LitElement) {
  var HaStateLabelBadge =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(HaStateLabelBadge, _LitElement2);

    function HaStateLabelBadge() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HaStateLabelBadge);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaStateLabelBadge)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HaStateLabelBadge;
  }(_LitElement);

  return {
    F: HaStateLabelBadge,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "state",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_timerTimeRemaining",
      value: void 0
    }, {
      kind: "field",
      key: "_connected",
      value: void 0
    }, {
      kind: "field",
      key: "_updateRemaining",
      value: void 0
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(HaStateLabelBadge.prototype), "connectedCallback", this).call(this);

        this._connected = true;
        this.startInterval(this.state);
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(HaStateLabelBadge.prototype), "disconnectedCallback", this).call(this);

        this._connected = false;
        this.clearInterval();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _classMap;

        var state = this.state;

        if (!state) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), this.hass.localize("state_badge.default.error"), this.hass.localize("state_badge.default.entity_not_found"));
        }

        var domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_3__["default"])(state);
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])((_classMap = {}, _defineProperty(_classMap, domain, true), _defineProperty(_classMap, "has-unit_of_measurement", "unit_of_measurement" in state.attributes), _classMap)), this._computeValue(domain, state), this._computeIcon(domain, state), state.attributes.entity_picture, this._computeLabel(domain, state, this._timerTimeRemaining), Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__["default"])(state));
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProperties) {
        var _this2 = this;

        _get(_getPrototypeOf(HaStateLabelBadge.prototype), "firstUpdated", this).call(this, changedProperties);

        this.addEventListener("click", function (ev) {
          ev.stopPropagation();

          if (_this2.state) {
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(_this2, "hass-more-info", {
              entityId: _this2.state.entity_id
            });
          }
        });
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(HaStateLabelBadge.prototype), "updated", this).call(this, changedProperties);

        if (this._connected && changedProperties.has("state")) {
          this.startInterval(this.state);
        }
      }
    }, {
      kind: "method",
      key: "_computeValue",
      value: function _computeValue(domain, state) {
        switch (domain) {
          case "binary_sensor":
          case "device_tracker":
          case "updater":
          case "sun":
          case "alarm_control_panel":
          case "timer":
            return null;

          case "sensor":
          default:
            return state.state === "unknown" ? "-" : this.hass.localize("component.".concat(domain, ".state.").concat(state.state)) || state.state;
        }
      }
    }, {
      kind: "method",
      key: "_computeIcon",
      value: function _computeIcon(domain, state) {
        if (state.state === "unavailable") {
          return null;
        }

        switch (domain) {
          case "alarm_control_panel":
            if (state.state === "pending") {
              return "hass:clock-fast";
            }

            if (state.state === "armed_away") {
              return "hass:nature";
            }

            if (state.state === "armed_home") {
              return "hass:home-variant";
            }

            if (state.state === "armed_night") {
              return "hass:weather-night";
            }

            if (state.state === "armed_custom_bypass") {
              return "hass:shield-home";
            }

            if (state.state === "triggered") {
              return "hass:alert-circle";
            } // state == 'disarmed'


            return Object(_common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_5__["default"])(domain, state.state);

          case "binary_sensor":
          case "device_tracker":
          case "updater":
          case "person":
            return Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_6__["default"])(state);

          case "sun":
            return state.state === "above_horizon" ? Object(_common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_5__["default"])(domain) : "hass:brightness-3";

          case "timer":
            return state.state === "active" ? "hass:timer" : "hass:timer-off";

          default:
            return null;
        }
      }
    }, {
      kind: "method",
      key: "_computeLabel",
      value: function _computeLabel(domain, state, _timerTimeRemaining) {
        if (state.state === "unavailable" || ["device_tracker", "alarm_control_panel", "person"].includes(domain)) {
          // Localize the state with a special state_badge namespace, which has variations of
          // the state translations that are truncated to fit within the badge label. Translations
          // are only added for device_tracker, alarm_control_panel and person.
          return this.hass.localize("state_badge.".concat(domain, ".").concat(state.state)) || this.hass.localize("state_badge.default.".concat(state.state)) || state.state;
        }

        if (domain === "timer") {
          return Object(_common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_8__["default"])(_timerTimeRemaining);
        }

        return state.attributes.unit_of_measurement || null;
      }
    }, {
      kind: "method",
      key: "clearInterval",
      value: function (_clearInterval) {
        function clearInterval() {
          return _clearInterval.apply(this, arguments);
        }

        clearInterval.toString = function () {
          return _clearInterval.toString();
        };

        return clearInterval;
      }(function () {
        if (this._updateRemaining) {
          clearInterval(this._updateRemaining);
          this._updateRemaining = undefined;
        }
      })
    }, {
      kind: "method",
      key: "startInterval",
      value: function startInterval(stateObj) {
        var _this3 = this;

        this.clearInterval();

        if (stateObj && Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_3__["default"])(stateObj) === "timer") {
          this.calculateTimerRemaining(stateObj);

          if (stateObj.state === "active") {
            this._updateRemaining = window.setInterval(function () {
              return _this3.calculateTimerRemaining(_this3.state);
            }, 1000);
          }
        }
      }
    }, {
      kind: "method",
      key: "calculateTimerRemaining",
      value: function calculateTimerRemaining(stateObj) {
        this._timerTimeRemaining = Object(_common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_7__["default"])(stateObj);
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3());
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/components/ha-label-badge.ts":
/*!******************************************!*\
  !*** ./src/components/ha-label-badge.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-icon */ "./src/components/ha-icon.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        .badge-container {\n          display: inline-block;\n          text-align: center;\n          vertical-align: top;\n        }\n        .label-badge {\n          position: relative;\n          display: block;\n          margin: 0 auto;\n          width: var(--ha-label-badge-size, 2.5em);\n          text-align: center;\n          height: var(--ha-label-badge-size, 2.5em);\n          line-height: var(--ha-label-badge-size, 2.5em);\n          font-size: var(--ha-label-badge-font-size, 1.5em);\n          border-radius: 50%;\n          border: 0.1em solid var(--ha-label-badge-color, var(--primary-color));\n          color: var(--label-badge-text-color, rgb(76, 76, 76));\n\n          white-space: nowrap;\n          background-color: var(--label-badge-background-color, white);\n          background-size: cover;\n          transition: border 0.3s ease-in-out;\n        }\n        .label-badge .value {\n          font-size: 90%;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        .label-badge .value.big {\n          font-size: 70%;\n        }\n        .label-badge .label {\n          position: absolute;\n          bottom: -1em;\n          /* Make the label as wide as container+border. (parent_borderwidth / font-size) */\n          left: -0.2em;\n          right: -0.2em;\n          line-height: 1em;\n          font-size: 0.5em;\n        }\n        .label-badge .label span {\n          box-sizing: border-box;\n          max-width: 100%;\n          display: inline-block;\n          background-color: var(--ha-label-badge-color, var(--primary-color));\n          color: var(--ha-label-badge-label-color, white);\n          border-radius: 1em;\n          padding: 9% 16% 8% 16%; /* mostly apitalized text, not much descenders => bit more top margin */\n          font-weight: 500;\n          overflow: hidden;\n          text-transform: uppercase;\n          text-overflow: ellipsis;\n          transition: background-color 0.3s ease-in-out;\n          text-transform: var(--ha-label-badge-label-text-transform, uppercase);\n        }\n        .label-badge .label.big span {\n          font-size: 90%;\n          padding: 10% 12% 7% 12%; /* push smaller text a bit down to center vertically */\n        }\n        .badge-container .title {\n          margin-top: 1em;\n          font-size: var(--ha-label-badge-title-font-size, 0.9em);\n          width: var(--ha-label-badge-title-width, 5em);\n          font-weight: var(--ha-label-badge-title-font-weight, 400);\n          overflow: hidden;\n          text-overflow: ellipsis;\n          line-height: normal;\n        }\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n              <div class=\"title\">", "</div>\n            "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n                <div\n                  class=\"", "\"\n                >\n                  <span>", "</span>\n                </div>\n              "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n                  <span>", "</span>\n                "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n                  <ha-icon .icon=\"", "\"></ha-icon>\n                "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <div class=\"badge-container\">\n        <div class=\"label-badge\" id=\"badge\">\n          <div\n            class=\"", "\"\n          >\n            ", "\n            ", "\n          </div>\n          ", "\n        </div>\n        ", "\n      </div>\n    "]);

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var HaLabelBadge =
/*#__PURE__*/
function (_LitElement) {
  _inherits(HaLabelBadge, _LitElement);

  function HaLabelBadge() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HaLabelBadge);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaLabelBadge)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "value", void 0);

    _defineProperty(_assertThisInitialized(_this), "icon", void 0);

    _defineProperty(_assertThisInitialized(_this), "label", void 0);

    _defineProperty(_assertThisInitialized(_this), "description", void 0);

    _defineProperty(_assertThisInitialized(_this), "image", void 0);

    return _this;
  }

  _createClass(HaLabelBadge, [{
    key: "render",
    value: function render() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({
        value: true,
        big: Boolean(this.value && this.value.length > 4)
      }), this.icon && !this.value && !this.image ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), this.icon) : "", this.value && !this.image ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3(), this.value) : "", this.label ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4(), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({
        label: true,
        big: this.label.length > 5
      }), this.label) : "", this.description ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject5(), this.description) : "");
    }
  }, {
    key: "updated",
    value: function updated(changedProperties) {
      _get(_getPrototypeOf(HaLabelBadge.prototype), "updated", this).call(this, changedProperties);

      if (changedProperties.has("image")) {
        this.shadowRoot.getElementById("badge").style.backgroundImage = this.image ? "url(".concat(this.image, ")") : "";
      }
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        value: {},
        icon: {},
        label: {},
        description: {},
        image: {}
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject6())];
    }
  }]);

  return HaLabelBadge;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

customElements.define("ha-label-badge", HaLabelBadge);

/***/ }),

/***/ "./src/components/ha-start-voice-button.js":
/*!*************************************************!*\
  !*** ./src/components/ha-start-voice-button.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <paper-icon-button\n        icon=\"hass:microphone\"\n        hidden$=\"[[!canListen]]\"\n        on-click=\"handleListenClick\"\n      ></paper-icon-button>\n    "]);

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
 * @appliesMixin EventsMixin
 */

var HaStartVoiceButton =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaStartVoiceButton, _EventsMixin);

  function HaStartVoiceButton() {
    _classCallCheck(this, HaStartVoiceButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaStartVoiceButton).apply(this, arguments));
  }

  _createClass(HaStartVoiceButton, [{
    key: "computeCanListen",
    value: function computeCanListen(hass) {
      return "webkitSpeechRecognition" in window && Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__["default"])(hass, "conversation");
    }
  }, {
    key: "handleListenClick",
    value: function handleListenClick() {
      Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "show-dialog", {
        dialogImport: function dialogImport() {
          return __webpack_require__.e(/*! import() | voice-command-dialog */ "voice-command-dialog").then(__webpack_require__.bind(null, /*! ../dialogs/ha-voice-command-dialog */ "./src/dialogs/ha-voice-command-dialog.js"));
        },
        dialogTag: "ha-voice-command-dialog"
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
        hass: {
          type: Object,
          value: null
        },
        canListen: {
          type: Boolean,
          computed: "computeCanListen(hass)",
          notify: true
        }
      };
    }
  }]);

  return HaStartVoiceButton;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("ha-start-voice-button", HaStartVoiceButton);

/***/ }),

/***/ "./src/data/media-player.ts":
/*!**********************************!*\
  !*** ./src/data/media-player.ts ***!
  \**********************************/
/*! exports provided: SUPPORT_PAUSE, SUPPORT_NEXT_TRACK, SUPPORTS_PLAY, OFF_STATES, fetchMediaPlayerThumbnailWithCache, fetchMediaPlayerThumbnail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_PAUSE", function() { return SUPPORT_PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_NEXT_TRACK", function() { return SUPPORT_NEXT_TRACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORTS_PLAY", function() { return SUPPORTS_PLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OFF_STATES", function() { return OFF_STATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMediaPlayerThumbnailWithCache", function() { return fetchMediaPlayerThumbnailWithCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMediaPlayerThumbnail", function() { return fetchMediaPlayerThumbnail; });
/* harmony import */ var _common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util/time-cache-function-promise */ "./src/common/util/time-cache-function-promise.ts");

var SUPPORT_PAUSE = 1;
var SUPPORT_NEXT_TRACK = 32;
var SUPPORTS_PLAY = 16384;
var OFF_STATES = ["off", "idle"];
var fetchMediaPlayerThumbnailWithCache = function fetchMediaPlayerThumbnailWithCache(hass, entityId) {
  return Object(_common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_0__["timeCachePromiseFunc"])("_media_playerTmb", 9000, fetchMediaPlayerThumbnail, hass, entityId);
};
var fetchMediaPlayerThumbnail = function fetchMediaPlayerThumbnail(hass, entityId) {
  return hass.callWS({
    type: "media_player_thumbnail",
    entity_id: entityId
  });
};

/***/ })

}]);
//# sourceMappingURL=panel-kiosk~panel-lovelace~panel-states.chunk.js.map