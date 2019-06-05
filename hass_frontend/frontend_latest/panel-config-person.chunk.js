(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-config-person"],{

/***/ "./node_modules/@polymer/paper-styles/element-styles/paper-material-styles.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@polymer/paper-styles/element-styles/paper-material-styles.js ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _shadow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shadow.js */ "./node_modules/@polymer/paper-styles/shadow.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
Material design:
[Cards](https://www.google.com/design/spec/components/cards.html)

Shared styles that you can apply to an element to renders two shadows on top
of each other,that create the effect of a lifted piece of paper.

Example:

    <custom-style>
      <style is="custom-style" include="paper-material-styles"></style>
    </custom-style>

    <div class="paper-material" elevation="1">
      ... content ...
    </div>

@group Paper Elements
@demo demo/index.html
*/



const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`
<dom-module id="paper-material-styles">
  <template>
    <style>
      html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      .paper-material {
        @apply --paper-material;
      }
      .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }

      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */
      :host {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material) {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]) {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]) {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]) {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]) {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`;
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);

/***/ }),

/***/ "./src/common/string/compare.ts":
/*!**************************************!*\
  !*** ./src/common/string/compare.ts ***!
  \**************************************/
/*! exports provided: compare, caseInsensitiveCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caseInsensitiveCompare", function() { return caseInsensitiveCompare; });
const compare = (a, b) => {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
};
const caseInsensitiveCompare = (a, b) => compare(a.toLowerCase(), b.toLowerCase());

/***/ }),

/***/ "./src/data/person.ts":
/*!****************************!*\
  !*** ./src/data/person.ts ***!
  \****************************/
/*! exports provided: fetchPersons, createPerson, updatePerson, deletePerson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPersons", function() { return fetchPersons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPerson", function() { return createPerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePerson", function() { return updatePerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePerson", function() { return deletePerson; });
const fetchPersons = hass => hass.callWS({
  type: "person/list"
});
const createPerson = (hass, values) => hass.callWS(Object.assign({
  type: "person/create"
}, values));
const updatePerson = (hass, personId, updates) => hass.callWS(Object.assign({
  type: "person/update",
  person_id: personId
}, updates));
const deletePerson = (hass, personId) => hass.callWS({
  type: "person/delete",
  person_id: personId
});

/***/ }),

/***/ "./src/data/user.ts":
/*!**************************!*\
  !*** ./src/data/user.ts ***!
  \**************************/
/*! exports provided: SYSTEM_GROUP_ID_ADMIN, SYSTEM_GROUP_ID_USER, SYSTEM_GROUP_ID_READ_ONLY, fetchUsers, createUser, updateUser, deleteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_GROUP_ID_ADMIN", function() { return SYSTEM_GROUP_ID_ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_GROUP_ID_USER", function() { return SYSTEM_GROUP_ID_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_GROUP_ID_READ_ONLY", function() { return SYSTEM_GROUP_ID_READ_ONLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
const SYSTEM_GROUP_ID_ADMIN = "system-admin";
const SYSTEM_GROUP_ID_USER = "system-users";
const SYSTEM_GROUP_ID_READ_ONLY = "system-read-only";
const fetchUsers = async hass => hass.callWS({
  type: "config/auth/list"
});
const createUser = async (hass, name) => hass.callWS({
  type: "config/auth/create",
  name
});
const updateUser = async (hass, userId, params) => hass.callWS(Object.assign({}, params, {
  type: "config/auth/update",
  user_id: userId
}));
const deleteUser = async (hass, userId) => hass.callWS({
  type: "config/auth/delete",
  user_id: userId
});

/***/ }),

/***/ "./src/panels/config/ha-config-section.js":
/*!************************************************!*\
  !*** ./src/panels/config/ha-config-section.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");




class HaConfigSection extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style include="iron-flex ha-style">
        .content {
          padding: 28px 20px 0;
          max-width: 1040px;
          margin: 0 auto;
        }

        .header {
          @apply --paper-font-display1;
          opacity: var(--dark-primary-opacity);
        }

        .together {
          margin-top: 32px;
        }

        .intro {
          @apply --paper-font-subhead;
          width: 100%;
          max-width: 400px;
          margin-right: 40px;
          opacity: var(--dark-primary-opacity);
        }

        .panel {
          margin-top: -24px;
        }

        .panel ::slotted(*) {
          margin-top: 24px;
          display: block;
        }

        .narrow.content {
          max-width: 640px;
        }
        .narrow .together {
          margin-top: 20px;
        }
        .narrow .header {
          @apply --paper-font-headline;
        }
        .narrow .intro {
          font-size: 14px;
          padding-bottom: 20px;
          margin-right: 0;
          max-width: 500px;
        }
      </style>
      <div class$="[[computeContentClasses(isWide)]]">
        <div class="header"><slot name="header"></slot></div>
        <div class$="[[computeClasses(isWide)]]">
          <div class="intro"><slot name="introduction"></slot></div>
          <div class="panel flex-auto"><slot></slot></div>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      narrow: {
        type: Boolean
      },
      isWide: {
        type: Boolean,
        value: false
      }
    };
  }

  computeContentClasses(isWide) {
    var classes = "content ";
    return isWide ? classes : classes + "narrow";
  }

  computeClasses(isWide) {
    var classes = "together layout ";
    return classes + (isWide ? "horizontal" : "vertical narrow");
  }

}

customElements.define("ha-config-section", HaConfigSection);

/***/ }),

/***/ "./src/panels/config/person/ha-config-person.ts":
/*!******************************************************!*\
  !*** ./src/panels/config/person/ha-config-person.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_fab_paper_fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-fab/paper-fab */ "./node_modules/@polymer/paper-fab/paper-fab.js");
/* harmony import */ var _data_person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/person */ "./src/data/person.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _show_dialog_person_detail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./show-dialog-person-detail */ "./src/panels/config/person/show-dialog-person-detail.ts");
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/user */ "./src/data/user.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














class HaConfigPerson extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "hass", void 0);

    _defineProperty(this, "isWide", void 0);

    _defineProperty(this, "_storageItems", void 0);

    _defineProperty(this, "_configItems", void 0);

    _defineProperty(this, "_usersLoad", void 0);
  }

  static get properties() {
    return {
      hass: {},
      isWide: {},
      _storageItems: {},
      _configItems: {}
    };
  }

  render() {
    if (!this.hass || this._storageItems === undefined || this._configItems === undefined) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <hass-loading-screen></hass-loading-screen>
      `;
    }

    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <hass-subpage header="Persons">
        <ha-config-section .isWide=${this.isWide}>
          <span slot="header">Persons</span>
          <span slot="introduction">
            Here you can define each person of interest in ioBroker.
            ${this._configItems.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <p>
                    Note: persons configured via configuration.yaml cannot be
                    edited via the UI.
                  </p>
                ` : ""}
          </span>
          <ha-card class="storage">
            ${this._storageItems.map(entry => {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <paper-item @click=${this._openEditEntry} .entry=${entry}>
                  <paper-item-body>
                    ${entry.name}
                  </paper-item-body>
                </paper-item>
              `;
    })}
            ${this._storageItems.length === 0 ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <div class="empty">
                    Looks like you have not created any persons yet.
                    <mwc-button @click=${this._createPerson}>
                      CREATE PERSON</mwc-button
                    >
                  </div>
                ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``}
          </ha-card>
          ${this._configItems.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <ha-card header="Configuration.yaml persons">
                  ${this._configItems.map(entry => {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      <paper-item>
                        <paper-item-body>
                          ${entry.name}
                        </paper-item-body>
                      </paper-item>
                    `;
    })}
                </ha-card>
              ` : ""}
        </ha-config-section>
      </hass-subpage>

      <paper-fab
        ?is-wide=${this.isWide}
        icon="hass:plus"
        title="Create Area"
        @click=${this._createPerson}
      ></paper-fab>
    `;
  }

  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);

    this._fetchData();

    Object(_show_dialog_person_detail__WEBPACK_IMPORTED_MODULE_10__["loadPersonDetailDialog"])();
  }

  async _fetchData() {
    this._usersLoad = Object(_data_user__WEBPACK_IMPORTED_MODULE_11__["fetchUsers"])(this.hass);
    const personData = await Object(_data_person__WEBPACK_IMPORTED_MODULE_4__["fetchPersons"])(this.hass);
    this._storageItems = personData.storage.sort((ent1, ent2) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_8__["compare"])(ent1.name, ent2.name));
    this._configItems = personData.config.sort((ent1, ent2) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_8__["compare"])(ent1.name, ent2.name));
  }

  _createPerson() {
    this._openDialog();
  }

  _openEditEntry(ev) {
    const entry = ev.currentTarget.entry;

    this._openDialog(entry);
  }

  _allowedUsers(users, currentPerson) {
    const used = new Set();

    for (const coll of [this._configItems, this._storageItems]) {
      for (const pers of coll) {
        if (pers.user_id) {
          used.add(pers.user_id);
        }
      }
    }

    const currentUserId = currentPerson ? currentPerson.user_id : undefined;
    return users.filter(user => user.id === currentUserId || !used.has(user.id));
  }

  async _openDialog(entry) {
    const users = await this._usersLoad;
    Object(_show_dialog_person_detail__WEBPACK_IMPORTED_MODULE_10__["showPersonDetailDialog"])(this, {
      entry,
      users: this._allowedUsers(users, entry),
      createEntry: async values => {
        const created = await Object(_data_person__WEBPACK_IMPORTED_MODULE_4__["createPerson"])(this.hass, values);
        this._storageItems = this._storageItems.concat(created).sort((ent1, ent2) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_8__["compare"])(ent1.name, ent2.name));
      },
      updateEntry: async values => {
        const updated = await Object(_data_person__WEBPACK_IMPORTED_MODULE_4__["updatePerson"])(this.hass, entry.id, values);
        this._storageItems = this._storageItems.map(ent => ent === entry ? updated : ent);
      },
      removeEntry: async () => {
        if (!confirm(`Are you sure you want to delete this person?

All devices belonging to this person will become unassigned.`)) {
          return false;
        }

        try {
          await Object(_data_person__WEBPACK_IMPORTED_MODULE_4__["deletePerson"])(this.hass, entry.id);
          this._storageItems = this._storageItems.filter(ent => ent !== entry);
          return true;
        } catch (err) {
          return false;
        }
      }
    });
  }

  static get styles() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      a {
        color: var(--primary-color);
      }
      ha-card {
        max-width: 600px;
        margin: 16px auto;
        overflow: hidden;
      }
      .empty {
        text-align: center;
        padding: 8px;
      }
      paper-item {
        padding-top: 4px;
        padding-bottom: 4px;
      }
      ha-card.storage paper-item {
        cursor: pointer;
      }
      paper-fab {
        position: fixed;
        bottom: 16px;
        right: 16px;
        z-index: 1;
      }

      paper-fab[is-wide] {
        bottom: 24px;
        right: 24px;
      }
    `;
  }

}

customElements.define("ha-config-person", HaConfigPerson);

/***/ }),

/***/ "./src/panels/config/person/show-dialog-person-detail.ts":
/*!***************************************************************!*\
  !*** ./src/panels/config/person/show-dialog-person-detail.ts ***!
  \***************************************************************/
/*! exports provided: loadPersonDetailDialog, showPersonDetailDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPersonDetailDialog", function() { return loadPersonDetailDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPersonDetailDialog", function() { return showPersonDetailDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadPersonDetailDialog = () => Promise.all(/*! import() | person-detail-dialog */[__webpack_require__.e("vendors~area-registry-detail-dialog~entity-registry-detail-dialog~more-info-dialog~panel-config-auto~8d022d61"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"), __webpack_require__.e("vendors~area-registry-detail-dialog~entity-registry-detail-dialog~more-info-dialog~panel-config-auto~58812f3e"), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-~60eddf8d"), __webpack_require__.e("vendors~dialog-config-flow~ha-sidebar~more-info-dialog~onboarding-core-config~panel-calendar~panel-c~e05044eb"), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-~704fb8c7"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-customize~panel-con~cb9ef179"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-script~panel-kiosk~~500bf1bb"), __webpack_require__.e("vendors~person-detail-dialog"), __webpack_require__.e("hui-alarm-panel-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-edi~530c088e"), __webpack_require__.e(0), __webpack_require__.e("person-detail-dialog")]).then(__webpack_require__.bind(null, /*! ./dialog-person-detail */ "./src/panels/config/person/dialog-person-detail.ts"));
const showPersonDetailDialog = (element, systemLogDetailParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-person-detail",
    dialogImport: loadPersonDetailDialog,
    dialogParams: systemLogDetailParams
  });
};

/***/ })

}]);
//# sourceMappingURL=panel-config-person.chunk.js.map