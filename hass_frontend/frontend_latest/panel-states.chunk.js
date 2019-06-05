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




class HaBadgesCard extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        ha-state-label-badge {
          display: inline-block;
          margin-bottom: var(--ha-state-label-badge-margin-bottom, 16px);
        }
      </style>
      <template is="dom-repeat" items="[[states]]">
        <ha-state-label-badge
          hass="[[hass]]"
          state="[[item]]"
        ></ha-state-label-badge>
      </template>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      states: Array
    };
  }

}

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







const UPDATE_INTERVAL = 10000; // ms

/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */

class HaCameraCard extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="paper-material-styles">
        :host {
          @apply --paper-material-elevation-1;
          display: block;
          position: relative;
          font-size: 0px;
          border-radius: 2px;
          cursor: pointer;
          min-height: 48px;
          line-height: 0;
        }
        .camera-feed {
          width: 100%;
          height: auto;
          border-radius: 2px;
        }
        .caption {
          @apply --paper-font-common-nowrap;
          position: absolute;
          left: 0px;
          right: 0px;
          bottom: 0px;
          border-bottom-left-radius: 2px;
          border-bottom-right-radius: 2px;

          background-color: rgba(0, 0, 0, 0.3);
          padding: 16px;

          font-size: 16px;
          font-weight: 500;
          line-height: 16px;
          color: white;
        }
      </style>

      <template is="dom-if" if="[[cameraFeedSrc]]">
        <img
          src="[[cameraFeedSrc]]"
          class="camera-feed"
          alt="[[_computeStateName(stateObj)]]"
          on-load="_imageLoaded"
          on-error="_imageError"
        />
      </template>
      <div class="caption">
        [[_computeStateName(stateObj)]]
        <template is="dom-if" if="[[!imageLoaded]]">
          ([[localize('ui.card.camera.not_available')]])
        </template>
      </div>
    `;
  }

  static get properties() {
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

  ready() {
    super.ready();
    this.addEventListener("click", () => this.cardTapped());
  }

  connectedCallback() {
    super.connectedCallback();
    this.timer = setInterval(() => this.updateCameraFeedSrc(), UPDATE_INTERVAL);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.timer);
  }

  _imageLoaded() {
    this.imageLoaded = true;
  }

  _imageError() {
    this.imageLoaded = false;
  }

  cardTapped() {
    this.fire("hass-more-info", {
      entityId: this.stateObj.entity_id
    });
  }

  async updateCameraFeedSrc() {
    this.cameraFeedSrc = await Object(_data_camera__WEBPACK_IMPORTED_MODULE_6__["fetchThumbnailUrlWithCache"])(this.hass, this.stateObj.entity_id);
  }

  _computeStateName(stateObj) {
    return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__["default"])(stateObj);
  }

}

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










class HaCardChooser extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {
  static get properties() {
    return {
      cardData: {
        type: Object,
        observer: "cardDataChanged"
      }
    };
  }

  _updateCard(newData) {
    Object(_common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_8__["default"])(this, "HA-" + newData.cardType.toUpperCase() + "-CARD", newData);
  }

  createObserver() {
    this._updatesAllowed = false;
    this.observer = new IntersectionObserver(entries => {
      if (!entries.length) return;

      if (entries[0].isIntersecting) {
        this.style.height = "";

        if (this._detachedChild) {
          this.appendChild(this._detachedChild);
          this._detachedChild = null;
        }

        this._updateCard(this.cardData); // Don't use 'newData' as it might have changed.


        this._updatesAllowed = true;
      } else {
        // Set the card to be 48px high. Otherwise if the card is kept as 0px height then all
        // following cards would trigger the observer at once.
        const offsetHeight = this.offsetHeight;
        this.style.height = `${offsetHeight || 48}px`;

        if (this.lastChild) {
          this._detachedChild = this.lastChild;
          this.removeChild(this.lastChild);
        }

        this._updatesAllowed = false;
      }
    });
    this.observer.observe(this);
  }

  cardDataChanged(newData) {
    if (!newData) return; // ha-entities-card is exempt from observer as it doesn't load heavy resources.
    // and usually doesn't load external resources (except for entity_picture).

    const eligibleToObserver = window.IntersectionObserver && newData.cardType !== "entities";

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

}

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













class HaEntitiesCard extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="iron-flex"></style>
      <style>
        ha-card {
          padding: 16px;
        }
        .states {
          margin: -4px 0;
        }
        .state {
          padding: 4px 0;
        }
        .header {
          @apply --paper-font-headline;
          /* overwriting line-height +8 because entity-toggle can be 40px height,
           compensating this with reduced padding */
          line-height: 40px;
          color: var(--primary-text-color);
          padding: 4px 0 12px;
        }
        .header .name {
          @apply --paper-font-common-nowrap;
        }
        ha-entity-toggle {
          margin-left: 16px;
        }
        .more-info {
          cursor: pointer;
        }
      </style>

      <ha-card>
        <template is="dom-if" if="[[title]]">
          <div
            class$="[[computeTitleClass(groupEntity)]]"
            on-click="entityTapped"
          >
            <div class="flex name">[[title]]</div>
            <template is="dom-if" if="[[showGroupToggle(groupEntity, states)]]">
              <ha-entity-toggle
                hass="[[hass]]"
                state-obj="[[groupEntity]]"
              ></ha-entity-toggle>
            </template>
          </div>
        </template>
        <div class="states">
          <template
            is="dom-repeat"
            items="[[states]]"
            on-dom-change="addTapEvents"
          >
            <div class$="[[computeStateClass(item)]]">
              <state-card-content
                hass="[[hass]]"
                class="state-card"
                state-obj="[[item]]"
              ></state-card-content>
            </div>
          </template>
        </div>
      </ha-card>
    `;
  }

  static get properties() {
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

  constructor() {
    super(); // We need to save a single bound function reference to ensure the event listener
    // can identify it properly.

    this.entityTapped = this.entityTapped.bind(this);
  }

  computeTitle(states, groupEntity, localize) {
    if (groupEntity) {
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__["default"])(groupEntity).trim();
    }

    const domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__["default"])(states[0]);
    return localize && localize(`domain.${domain}`) || domain.replace(/_/g, " ");
  }

  computeTitleClass(groupEntity) {
    let classes = "header horizontal layout center ";

    if (groupEntity) {
      classes += "more-info";
    }

    return classes;
  }

  computeStateClass(stateObj) {
    return Object(_common_entity_state_more_info_type__WEBPACK_IMPORTED_MODULE_8__["default"])(stateObj) !== "hidden" ? "state more-info" : "state";
  }

  addTapEvents() {
    const cards = this.root.querySelectorAll(".state");
    cards.forEach(card => {
      if (card.classList.contains("more-info")) {
        card.addEventListener("click", this.entityTapped);
      } else {
        card.removeEventListener("click", this.entityTapped);
      }
    });
  }

  entityTapped(ev) {
    const item = this.root.querySelector("dom-repeat").itemForElement(ev.target);
    let entityId;

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

  showGroupToggle(groupEntity, states) {
    if (!groupEntity || !states || groupEntity.attributes.control === "hidden" || groupEntity.state !== "on" && groupEntity.state !== "off") {
      return false;
    } // Only show if we can toggle 2+ entities in group


    let canToggleCount = 0;

    for (let i = 0; i < states.length; i++) {
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

}

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








/*
 * @appliesMixin LocalizeMixin
 */

class HaPersistentNotificationCard extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          @apply --paper-font-body1;
        }
        ha-markdown {
          display: block;
          padding: 0 16px;
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
        }
        ha-markdown p:first-child {
          margin-top: 0;
        }
        ha-markdown p:last-child {
          margin-bottom: 0;
        }
        ha-markdown a {
          color: var(--primary-color);
        }
        ha-markdown img {
          max-width: 100%;
        }
        mwc-button {
          margin: 8px;
        }
      </style>

      <ha-card header="[[computeTitle(stateObj)]]">
        <ha-markdown content="[[stateObj.attributes.message]]"></ha-markdown>
        <mwc-button on-click="dismissTap"
          >[[localize('ui.card.persistent_notification.dismiss')]]</mwc-button
        >
      </ha-card>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object
    };
  }

  computeTitle(stateObj) {
    return stateObj.attributes.title || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["default"])(stateObj);
  }

  dismissTap(ev) {
    ev.preventDefault();
    this.hass.callService("persistent_notification", "dismiss", {
      notification_id: Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_7__["default"])(this.stateObj.entity_id)
    });
  }

}

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







class HaPlantCard extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        .banner {
          display: flex;
          align-items: flex-end;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          padding-top: 12px;
        }
        .has-plant-image .banner {
          padding-top: 30%;
        }
        .header {
          @apply --paper-font-headline;
          line-height: 40px;
          padding: 8px 16px;
        }
        .has-plant-image .header {
          font-size: 16px;
          font-weight: 500;
          line-height: 16px;
          padding: 16px;
          color: white;
          width: 100%;
          background: rgba(0, 0, 0, var(--dark-secondary-opacity));
        }
        .content {
          display: flex;
          justify-content: space-between;
          padding: 16px 32px 24px 32px;
        }
        .has-plant-image .content {
          padding-bottom: 16px;
        }
        ha-icon {
          color: var(--paper-item-icon-color);
          margin-bottom: 8px;
        }
        .attributes {
          cursor: pointer;
        }
        .attributes div {
          text-align: center;
        }
        .problem {
          color: var(--google-red-500);
          font-weight: bold;
        }
        .uom {
          color: var(--secondary-text-color);
        }
      </style>

      <ha-card
        class$="[[computeImageClass(stateObj.attributes.entity_picture)]]"
      >
        <div
          class="banner"
          style="background-image:url([[stateObj.attributes.entity_picture]])"
        >
          <div class="header">[[computeTitle(stateObj)]]</div>
        </div>
        <div class="content">
          <template
            is="dom-repeat"
            items="[[computeAttributes(stateObj.attributes)]]"
          >
            <div class="attributes" on-click="attributeClicked">
              <div>
                <ha-icon
                  icon="[[computeIcon(item, stateObj.attributes.battery)]]"
                ></ha-icon>
              </div>
              <div
                class$="[[computeAttributeClass(stateObj.attributes.problem, item)]]"
              >
                [[computeValue(stateObj.attributes, item)]]
              </div>
              <div class="uom">
                [[computeUom(stateObj.attributes.unit_of_measurement_dict,
                item)]]
              </div>
            </div>
          </template>
        </div>
      </ha-card>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      config: Object
    };
  }

  constructor() {
    super();
    this.sensors = {
      moisture: "hass:water",
      temperature: "hass:thermometer",
      brightness: "hass:white-balance-sunny",
      conductivity: "hass:emoticon-poop",
      battery: "hass:battery"
    };
  }

  computeTitle(stateObj) {
    return this.config && this.config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__["default"])(stateObj);
  }

  computeAttributes(data) {
    return Object.keys(this.sensors).filter(key => key in data);
  }

  computeIcon(attr, batLvl) {
    const icon = this.sensors[attr];

    if (attr === "battery") {
      if (batLvl <= 5) {
        return `${icon}-alert`;
      }

      if (batLvl < 95) {
        return `${icon}-${Math.round(batLvl / 10 - 0.01) * 10}`;
      }
    }

    return icon;
  }

  computeValue(attributes, attr) {
    return attributes[attr];
  }

  computeUom(dict, attr) {
    return dict[attr] || "";
  }

  computeAttributeClass(problem, attr) {
    return problem.indexOf(attr) === -1 ? "" : "problem";
  }

  computeImageClass(entityPicture) {
    return entityPicture ? "has-plant-image" : "";
  }

  attributeClicked(ev) {
    this.fire("hass-more-info", {
      entityId: this.stateObj.attributes.sensors[ev.model.item]
    });
  }

}

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










 // mapping domain to size of the card.

const DOMAINS_WITH_CARD = {
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

const PRIORITY = {
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

const getPriority = domain => domain in PRIORITY ? PRIORITY[domain] : 100;

const sortPriority = (domainA, domainB) => domainA.priority - domainB.priority;

const entitySortBy = (entityA, entityB) => {
  const nameA = (entityA.attributes.friendly_name || entityA.entity_id).toLowerCase();
  const nameB = (entityB.attributes.friendly_name || entityB.entity_id).toLowerCase();

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  return 0;
};

const iterateDomainSorted = (collection, func) => {
  Object.keys(collection).map(key => collection[key]).sort(sortPriority).forEach(domain => {
    domain.states.sort(entitySortBy);
    func(domain);
  });
};

class HaCards extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="iron-flex iron-flex-factors"></style>
      <style>
        :host {
          display: block;
          padding: 4px 4px 0;
          transform: translateZ(0);
          position: relative;
        }

        .badges {
          font-size: 85%;
          text-align: center;
          padding-top: 16px;
        }

        .column {
          max-width: 500px;
          overflow-x: hidden;
        }

        ha-card-chooser {
          display: block;
          margin: 4px 4px 8px;
        }

        @media (max-width: 500px) {
          :host {
            padding-left: 0;
            padding-right: 0;
          }

          ha-card-chooser {
            margin-left: 0;
            margin-right: 0;
          }
        }

        @media (max-width: 599px) {
          .column {
            max-width: 600px;
          }
        }
      </style>

      <div id="main">
        <template is="dom-if" if="[[cards.badges.length]]">
          <div class="badges">
            <template is="dom-if" if="[[cards.demo]]">
              <ha-demo-badge></ha-demo-badge>
            </template>

            <ha-badges-card
              states="[[cards.badges]]"
              hass="[[hass]]"
            ></ha-badges-card>
          </div>
        </template>

        <div class="horizontal layout center-justified">
          <template is="dom-repeat" items="[[cards.columns]]" as="column">
            <div class="column flex-1">
              <template is="dom-repeat" items="[[column]]" as="card">
                <ha-card-chooser card-data="[[card]]"></ha-card-chooser>
              </template>
            </div>
          </template>
        </div>
      </div>
    `;
  }

  static get properties() {
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

  static get observers() {
    return ["updateCards(columns, states, viewVisible, orderedGroupEntities)"];
  }

  updateCards(columns, states, viewVisible, orderedGroupEntities) {
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

    this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_2__["Debouncer"].debounce(this._debouncer, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(10), () => {
      // Things might have changed since it got scheduled.
      if (this.viewVisible) {
        this.cards = this.computeCards(columns, states, orderedGroupEntities);
      }
    });
  }

  emptyCards() {
    return {
      demo: false,
      badges: [],
      columns: []
    };
  }

  computeCards(columns, states, orderedGroupEntities) {
    const hass = this.hass;
    const cards = this.emptyCards();
    const entityCount = [];

    for (let i = 0; i < columns; i++) {
      cards.columns.push([]);
      entityCount.push(0);
    } // Find column with < 5 entities, else column with lowest count


    function getIndex(size) {
      let minIndex = 0;

      for (let i = 0; i < entityCount.length; i++) {
        if (entityCount[i] < 5) {
          minIndex = i;
          break;
        }

        if (entityCount[i] < entityCount[minIndex]) {
          minIndex = i;
        }
      }

      entityCount[minIndex] += size;
      return minIndex;
    }

    function addEntitiesCard(name, entities, groupEntity) {
      if (entities.length === 0) return;
      const owncard = [];
      const other = [];
      let size = 0;
      entities.forEach(entity => {
        const domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__["default"])(entity);

        if (domain in DOMAINS_WITH_CARD && !entity.attributes.custom_ui_state_card) {
          owncard.push(entity);
          size += DOMAINS_WITH_CARD[domain];
        } else {
          other.push(entity);
          size++;
        }
      }); // Add 1 to the size if we're rendering entities card

      size += other.length > 0;
      const curIndex = getIndex(size);

      if (other.length > 0) {
        cards.columns[curIndex].push({
          hass: hass,
          cardType: "entities",
          states: other,
          groupEntity: groupEntity || false
        });
      }

      owncard.forEach(entity => {
        cards.columns[curIndex].push({
          hass: hass,
          cardType: Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__["default"])(entity),
          stateObj: entity
        });
      });
    }

    const splitted = Object(_common_entity_split_by_groups__WEBPACK_IMPORTED_MODULE_9__["default"])(states);

    if (orderedGroupEntities) {
      splitted.groups.sort((gr1, gr2) => orderedGroupEntities[gr1.entity_id] - orderedGroupEntities[gr2.entity_id]);
    } else {
      splitted.groups.sort((gr1, gr2) => gr1.attributes.order - gr2.attributes.order);
    }

    const badgesColl = {};
    const beforeGroupColl = {};
    const afterGroupedColl = {};
    Object.keys(splitted.ungrouped).forEach(key => {
      const state = splitted.ungrouped[key];
      const domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__["default"])(state);

      if (domain === "a") {
        cards.demo = true;
        return;
      }

      const priority = getPriority(domain);
      let coll;

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
      Object.keys(badgesColl).map(key => badgesColl[key]).forEach(domain => {
        cards.badges.push.apply(cards.badges, domain.states);
      });
      cards.badges.sort((e1, e2) => orderedGroupEntities[e1.entity_id] - orderedGroupEntities[e2.entity_id]);
    } else {
      iterateDomainSorted(badgesColl, domain => {
        cards.badges.push.apply(cards.badges, domain.states);
      });
    }

    iterateDomainSorted(beforeGroupColl, domain => {
      addEntitiesCard(domain.domain, domain.states);
    });
    splitted.groups.forEach(groupState => {
      const entities = Object(_common_entity_get_group_entities__WEBPACK_IMPORTED_MODULE_10__["default"])(states, groupState);
      addEntitiesCard(groupState.entity_id, Object.keys(entities).map(key => entities[key]), groupState);
    });
    iterateDomainSorted(afterGroupedColl, domain => {
      addEntitiesCard(domain.domain, domain.states);
    }); // Remove empty columns

    cards.columns = cards.columns.filter(val => val.length > 0);
    return cards;
  }

}

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




class HaDemoBadge extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        :host {
          --ha-label-badge-color: #dac90d;
        }
      </style>

      <ha-label-badge
        icon="hass:emoticon"
        label="Demo"
        description=""
      ></ha-label-badge>
    `;
  }

}

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


/*
 * @polymerMixin
 * @appliesMixin EventsMixin
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
  navigate(...args) {
    Object(_common_navigate__WEBPACK_IMPORTED_MODULE_1__["navigate"])(this, ...args);
  }

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






















const DEFAULT_VIEW_ENTITY_ID = "group.default_view";
const ALWAYS_SHOW_DOMAIN = ["persistent_notification", "configurator"];
/*
 * @appliesMixin EventsMixin
 * @appliesMixin NavigateMixin
 */

class PartialCards extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_21__["EventsMixin"])(Object(_mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_20__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style include="iron-flex iron-positioning ha-style">
        :host {
          -ms-user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
        }

        ha-app-layout {
          min-height: 100%;
          background-color: var(--secondary-background-color, #e5e5e5);
        }

        iron-pages {
          height: 100%;
        }

        paper-tabs {
          margin-left: 12px;
          --paper-tabs-selection-bar-color: var(--text-primary-color, #fff);
          text-transform: uppercase;
        }
      </style>
      <app-route
        route="{{route}}"
        pattern="/:view"
        data="{{routeData}}"
        active="{{routeMatch}}"
      ></app-route>
      <ha-app-layout id="layout">
        <app-header effects="waterfall" condenses="" fixed="" slot="header">
          <app-toolbar>
            <ha-menu-button></ha-menu-button>
            <div main-title="">
              [[computeTitle(views, defaultView, locationName)]]
            </div>
            <ha-start-voice-button hass="[[hass]]"></ha-start-voice-button>
          </app-toolbar>

          <div sticky="" hidden$="[[areTabsHidden(views, showTabs)]]">
            <paper-tabs
              scrollable=""
              selected="[[currentView]]"
              attr-for-selected="data-entity"
              on-iron-activate="handleViewSelected"
            >
              <paper-tab data-entity="" on-click="scrollToTop">
                <template is="dom-if" if="[[!defaultView]]">
                  Home
                </template>
                <template is="dom-if" if="[[defaultView]]">
                  <template is="dom-if" if="[[defaultView.attributes.icon]]">
                    <ha-icon
                      title$="[[_computeStateName(defaultView)]]"
                      icon="[[defaultView.attributes.icon]]"
                    ></ha-icon>
                  </template>
                  <template is="dom-if" if="[[!defaultView.attributes.icon]]">
                    [[_computeStateName(defaultView)]]
                  </template>
                </template>
              </paper-tab>
              <template is="dom-repeat" items="[[views]]">
                <paper-tab
                  data-entity$="[[item.entity_id]]"
                  on-click="scrollToTop"
                >
                  <template is="dom-if" if="[[item.attributes.icon]]">
                    <ha-icon
                      title$="[[_computeStateName(item)]]"
                      icon="[[item.attributes.icon]]"
                    ></ha-icon>
                  </template>
                  <template is="dom-if" if="[[!item.attributes.icon]]">
                    [[_computeStateName(item)]]
                  </template>
                </paper-tab>
              </template>
            </paper-tabs>
          </div>
        </app-header>

        <iron-pages
          attr-for-selected="data-view"
          selected="[[currentView]]"
          selected-attribute="view-visible"
        >
          <ha-cards
            data-view=""
            states="[[viewStates]]"
            columns="[[_columns]]"
            hass="[[hass]]"
            panel-visible="[[panelVisible]]"
            ordered-group-entities="[[orderedGroupEntities]]"
          ></ha-cards>

          <template is="dom-repeat" items="[[views]]">
            <ha-cards
              data-view$="[[item.entity_id]]"
              states="[[viewStates]]"
              columns="[[_columns]]"
              hass="[[hass]]"
              panel-visible="[[panelVisible]]"
              ordered-group-entities="[[orderedGroupEntities]]"
            ></ha-cards>
          </template>
        </iron-pages>
      </ha-app-layout>
    `;
  }

  static get properties() {
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

  static get observers() {
    return ["_updateColumns(narrow, hass.dockedSidebar)"];
  }

  ready() {
    this._updateColumns = this._updateColumns.bind(this);
    this.mqls = [300, 600, 900, 1200].map(width => matchMedia(`(min-width: ${width}px)`));
    super.ready();
  }

  connectedCallback() {
    super.connectedCallback();
    this.mqls.forEach(mql => mql.addListener(this._updateColumns));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.mqls.forEach(mql => mql.removeListener(this._updateColumns));
  }

  _updateColumns() {
    const matchColumns = this.mqls.reduce((cols, mql) => cols + mql.matches, 0); // Do -1 column if the menu is docked and open

    this._columns = Math.max(1, matchColumns - (!this.narrow && this.hass.dockedSidebar));
  }

  areTabsHidden(views, showTabs) {
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


  scrollToTop() {
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

  handleViewSelected(ev) {
    const view = ev.detail.item.getAttribute("data-entity") || null;

    if (view !== this.currentView) {
      let path = "/states";

      if (view) {
        path += "/" + view;
      }

      this.navigate(path);
    }
  }

  _computeCurrentView(hass, routeMatch, routeData) {
    if (!routeMatch) return "";

    if (!hass.states[routeData.view] || !hass.states[routeData.view].attributes.view) {
      return "";
    }

    return routeData.view;
  }

  computeTitle(views, defaultView, locationName) {
    return views && views.length > 0 && !defaultView && locationName === "Home" || !locationName ? "ioBroker" : locationName;
  }

  _computeStateName(stateObj) {
    return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_17__["default"])(stateObj);
  }

  _computeLocationName(hass) {
    return Object(_common_config_location_name__WEBPACK_IMPORTED_MODULE_19__["default"])(hass);
  }

  hassChanged(hass) {
    if (!hass) return;
    const views = Object(_common_entity_extract_views__WEBPACK_IMPORTED_MODULE_15__["default"])(hass.states);
    let defaultView = null; // If default view present, it's in first index.

    if (views.length > 0 && views[0].entity_id === DEFAULT_VIEW_ENTITY_ID) {
      defaultView = views.shift();
    }

    this.setProperties({
      views,
      defaultView
    });
  }

  isView(currentView, defaultView) {
    return (currentView || defaultView) && this.hass.states[currentView || DEFAULT_VIEW_ENTITY_ID];
  }

  _defaultViewFilter(hass, entityId) {
    // Filter out hidden
    return !hass.states[entityId].attributes.hidden;
  }

  _computeDefaultViewStates(hass, entityIds) {
    const states = {};
    entityIds.filter(this._defaultViewFilter.bind(null, hass)).forEach(entityId => {
      states[entityId] = hass.states[entityId];
    });
    return states;
  }
  /*
    Compute the states to show for current view.
     Will make sure we always show entities from ALWAYS_SHOW_DOMAINS domains.
  */


  computeViewStates(currentView, hass, defaultView) {
    const entityIds = Object.keys(hass.states); // If we base off all entities, only have to filter out hidden

    if (!this.isView(currentView, defaultView)) {
      return this._computeDefaultViewStates(hass, entityIds);
    }

    let states;

    if (currentView) {
      states = Object(_common_entity_get_view_entities__WEBPACK_IMPORTED_MODULE_16__["default"])(hass.states, hass.states[currentView]);
    } else {
      states = Object(_common_entity_get_view_entities__WEBPACK_IMPORTED_MODULE_16__["default"])(hass.states, hass.states[DEFAULT_VIEW_ENTITY_ID]);
    } // Make sure certain domains are always shown.


    entityIds.forEach(entityId => {
      const state = hass.states[entityId];

      if (ALWAYS_SHOW_DOMAIN.includes(Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_18__["default"])(state))) {
        states[entityId] = state;
      }
    });
    return states;
  }
  /*
    Compute the ordered list of groups for this view
  */


  computeOrderedGroupEntities(currentView, hass, defaultView) {
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

}

customElements.define("ha-panel-states", PartialCards);

/***/ })

}]);
//# sourceMappingURL=panel-states.chunk.js.map