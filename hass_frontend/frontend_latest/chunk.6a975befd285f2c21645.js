/*! For license information please see chunk.6a975befd285f2c21645.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[42],{267:function(e,t,a){"use strict";var i=a(3),o=a(14),d=a(74);a(272);const s=customElements.get("mwc-fab");let r=class extends s{render(){const e={"mdc-fab--mini":this.mini,"mdc-fab--exited":this.exited,"mdc-fab--extended":this.extended},t=""!==this.label&&this.extended;return o.g`
      <button
        .ripple="${Object(d.a)()}"
        class="mdc-fab ${Object(o.d)(e)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label||this.icon}"
      >
        ${t&&this.showIconAtEnd?this.label:""}
        ${this.icon?o.g`
              <ha-icon .icon=${this.icon}></ha-icon>
            `:""}
        ${t&&!this.showIconAtEnd?this.label:""}
      </button>
    `}};r=i.b([Object(o.f)("ha-fab")],r)},268:function(e,t,a){"use strict";var i=a(3),o=a(11),d=a(0),s=a(18);a(108),a(92),a(107),a(84);let r=class extends d.a{render(){return o.g`
      <div class="search-container">
        <paper-input
          autofocus
          label="Search"
          .value=${this.filter}
          @value-changed=${this._filterInputChanged}
        >
          <iron-icon
            icon="hass:magnify"
            slot="prefix"
            class="prefix"
          ></iron-icon>
          ${this.filter&&o.g`
              <paper-icon-button
                slot="suffix"
                class="suffix"
                @click=${this._clearSearch}
                icon="hass:close"
                alt="Clear"
                title="Clear"
              ></paper-icon-button>
            `}
        </paper-input>
      </div>
    `}async _filterChanged(e){Object(s.a)(this,"value-changed",{value:String(e)})}async _filterInputChanged(e){this._filterChanged(e.target.value)}async _clearSearch(){this._filterChanged("")}static get styles(){return d.c`
      paper-input {
        flex: 1 1 auto;
        margin: 0 16px;
      }
      .search-container {
        display: inline-flex;
        width: 100%;
        align-items: center;
      }
      .prefix {
        margin: 8px;
      }
    `}};i.b([Object(d.f)()],r.prototype,"filter",void 0),r=i.b([Object(d.d)("search-input")],r)},367:function(e,t,a){"use strict";a.r(t);var i=a(3),o=a(0),d=a(71),s=a(121),r=(a(267),a(176),a(195),a(169),a(283)),c=a(76);const l={CELL:"mdc-data-table__cell",CELL_NUMERIC:"mdc-data-table__cell--numeric",CONTENT:"mdc-data-table__content",HEADER_ROW:"mdc-data-table__header-row",HEADER_ROW_CHECKBOX:"mdc-data-table__header-row-checkbox",ROOT:"mdc-data-table",ROW:"mdc-data-table__row",ROW_CHECKBOX:"mdc-data-table__row-checkbox",ROW_SELECTED:"mdc-data-table__row--selected"},n={ARIA_SELECTED:"aria-selected",DATA_ROW_ID_ATTR:"data-row-id",HEADER_ROW_CHECKBOX_SELECTOR:`.${l.HEADER_ROW_CHECKBOX}`,ROW_CHECKBOX_SELECTOR:`.${l.ROW_CHECKBOX}`,ROW_SELECTED_SELECTOR:`.${l.ROW_SELECTED}`,ROW_SELECTOR:`.${l.ROW}`};class h extends c.a{static get defaultAdapter(){return{addClassAtRowIndex:()=>void 0,getRowCount:()=>0,getRowElements:()=>[],getRowIdAtIndex:()=>"",getRowIndexByChildElement:()=>0,getSelectedRowCount:()=>0,isCheckboxAtRowIndexChecked:()=>!1,isHeaderRowCheckboxChecked:()=>!1,isRowsSelectable:()=>!1,notifyRowSelectionChanged:()=>void 0,notifySelectedAll:()=>void 0,notifyUnselectedAll:()=>void 0,registerHeaderRowCheckbox:()=>void 0,registerRowCheckboxes:()=>void 0,removeClassAtRowIndex:()=>void 0,setAttributeAtRowIndex:()=>void 0,setHeaderRowCheckboxChecked:()=>void 0,setHeaderRowCheckboxIndeterminate:()=>void 0,setRowCheckboxCheckedAtIndex:()=>void 0}}constructor(e){super(Object.assign({},h.defaultAdapter,e))}layout(){this.adapter_.isRowsSelectable()&&(this.adapter_.registerHeaderRowCheckbox(),this.adapter_.registerRowCheckboxes(),this.setHeaderRowCheckboxState_())}async layoutAsync(){this.adapter_.isRowsSelectable()&&(await this.adapter_.registerHeaderRowCheckbox(),await this.adapter_.registerRowCheckboxes(),this.setHeaderRowCheckboxState_())}getRows(){return this.adapter_.getRowElements()}setSelectedRowIds(e){for(let t=0;t<this.adapter_.getRowCount();t++){const a=this.adapter_.getRowIdAtIndex(t);let i=!1;a&&e.indexOf(a)>=0&&(i=!0),this.adapter_.setRowCheckboxCheckedAtIndex(t,i),this.selectRowAtIndex_(t,i)}this.setHeaderRowCheckboxState_()}getSelectedRowIds(){const e=[];for(let t=0;t<this.adapter_.getRowCount();t++)this.adapter_.isCheckboxAtRowIndexChecked(t)&&e.push(this.adapter_.getRowIdAtIndex(t));return e}handleHeaderRowCheckboxChange(){const e=this.adapter_.isHeaderRowCheckboxChecked();for(let t=0;t<this.adapter_.getRowCount();t++)this.adapter_.setRowCheckboxCheckedAtIndex(t,e),this.selectRowAtIndex_(t,e);e?this.adapter_.notifySelectedAll():this.adapter_.notifyUnselectedAll()}handleRowCheckboxChange(e){const t=this.adapter_.getRowIndexByChildElement(e.target);if(-1===t)return;const a=this.adapter_.isCheckboxAtRowIndexChecked(t);this.selectRowAtIndex_(t,a),this.setHeaderRowCheckboxState_();const i=this.adapter_.getRowIdAtIndex(t);this.adapter_.notifyRowSelectionChanged({rowId:i,rowIndex:t,selected:a})}setHeaderRowCheckboxState_(){this.adapter_.getSelectedRowCount()===this.adapter_.getRowCount()?(this.adapter_.setHeaderRowCheckboxChecked(!0),this.adapter_.setHeaderRowCheckboxIndeterminate(!1)):0===this.adapter_.getSelectedRowCount()?(this.adapter_.setHeaderRowCheckboxIndeterminate(!1),this.adapter_.setHeaderRowCheckboxChecked(!1)):(this.adapter_.setHeaderRowCheckboxIndeterminate(!0),this.adapter_.setHeaderRowCheckboxChecked(!1))}selectRowAtIndex_(e,t){t?(this.adapter_.addClassAtRowIndex(e,l.ROW_SELECTED),this.adapter_.setAttributeAtRowIndex(e,n.ARIA_SELECTED,"true")):(this.adapter_.removeClassAtRowIndex(e,l.ROW_SELECTED),this.adapter_.setAttributeAtRowIndex(e,n.ARIA_SELECTED,"false"))}}var b=a(14),_=(a(268),a(334),a(293));const m=customElements.get("mwc-checkbox");let p=class extends m{firstUpdated(){super.firstUpdated(),this.style.setProperty("--mdc-theme-secondary","var(--primary-color)")}static get styles(){return[_.a,o.c`
        .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)
          ~ .mdc-checkbox__background {
          border-color: rgba(var(--rgb-primary-text-color), 0.54);
        }
      `]}};p=i.b([Object(o.d)("ha-checkbox")],p);var g=a(18);let u=class extends b.a{constructor(){super(...arguments),this.columns={},this.data=[],this.selectable=!1,this.id="id",this.mdcFoundationClass=h,this._filterable=!1,this._headerChecked=!1,this._headerIndeterminate=!1,this._checkedRows=[],this._filter="",this._sortDirection=null,this._filterSortData=Object(s.a)((e,t,a,i,o)=>o?this._memSortData(this._memFilterData(e,t,a),t,i,o):this._memFilterData(e,t,a)),this._memFilterData=Object(s.a)((e,t,a)=>{if(!a)return e;const i=a.toUpperCase();return e.filter(e=>Object.entries(t).some(t=>{const[a,o]=t;return!(!o.filterable||!(o.filterKey?e[a][o.filterKey]:e[a]).toUpperCase().includes(i))}))}),this._memSortData=Object(s.a)((e,t,a,i)=>{const o=[...e],d=t[i];return o.sort((e,t)=>{let o=1;"desc"===a&&(o=-1);let s=d.filterKey?e[i][d.filterKey]:e[i],r=d.filterKey?t[i][d.filterKey]:t[i];return"string"==typeof s&&(s=s.toUpperCase()),"string"==typeof r&&(r=r.toUpperCase()),s<r?-1*o:s>r?1*o:0})})}updated(e){if(super.updated(e),e.has("columns")){this._filterable=Object.values(this.columns).some(e=>e.filterable);for(const e in this.columns)if(this.columns[e].direction){this._sortDirection=this.columns[e].direction,this._sortColumn=e;break}}}render(){return b.g`
      ${this._filterable?b.g`
            <search-input
              @value-changed=${this._handleSearchChange}
            ></search-input>
          `:""}
      <div class="mdc-data-table">
        <table class="mdc-data-table__table">
          <thead>
            <tr class="mdc-data-table__header-row">
              ${this.selectable?b.g`
                    <th
                      class="mdc-data-table__header-cell mdc-data-table__header-cell--checkbox"
                      role="columnheader"
                      scope="col"
                    >
                      <ha-checkbox
                        id="header-checkbox"
                        class="mdc-data-table__row-checkbox"
                        @change=${this._handleHeaderRowCheckboxChange}
                        .indeterminate=${this._headerIndeterminate}
                        .checked=${this._headerChecked}
                      >
                      </ha-checkbox>
                    </th>
                  `:""}
              ${Object.entries(this.columns).map(e=>{const[t,a]=e,i=t===this._sortColumn,o={"mdc-data-table__cell--numeric":Boolean(a.type&&"numeric"===a.type),sortable:Boolean(a.sortable),"not-sorted":Boolean(a.sortable&&!i)};return b.g`
                  <th
                    class="mdc-data-table__header-cell ${Object(b.d)(o)}"
                    role="columnheader"
                    scope="col"
                    @click=${this._handleHeaderClick}
                    data-column-id="${t}"
                  >
                    ${a.sortable?b.g`
                          <ha-icon
                            .icon=${i&&"desc"===this._sortDirection?"hass:arrow-down":"hass:arrow-up"}
                          ></ha-icon>
                        `:""}
                    <span>${a.title}</span>
                  </th>
                `})}
            </tr>
          </thead>
          <tbody class="mdc-data-table__content">
            ${Object(r.a)(this._filterSortData(this.data,this.columns,this._filter,this._sortDirection,this._sortColumn),e=>e[this.id],e=>b.g`
                <tr
                  data-row-id="${e[this.id]}"
                  @click=${this._handleRowClick}
                  class="mdc-data-table__row"
                >
                  ${this.selectable?b.g`
                        <td
                          class="mdc-data-table__cell mdc-data-table__cell--checkbox"
                        >
                          <ha-checkbox
                            class="mdc-data-table__row-checkbox"
                            @change=${this._handleRowCheckboxChange}
                            .checked=${this._checkedRows.includes(e[this.id])}
                          >
                          </ha-checkbox>
                        </td>
                      `:""}
                  ${Object.entries(this.columns).map(t=>{const[a,i]=t;return b.g`
                      <td
                        class="mdc-data-table__cell ${Object(b.d)({"mdc-data-table__cell--numeric":Boolean(i.type&&"numeric"===i.type)})}"
                      >
                        ${i.template?i.template(e[a]):e[a]}
                      </td>
                    `})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}createAdapter(){return{addClassAtRowIndex:(e,t)=>{this.rowElements[e].classList.add(t)},getRowCount:()=>this.data.length,getRowElements:()=>this.rowElements,getRowIdAtIndex:e=>this._getRowIdAtIndex(e),getRowIndexByChildElement:e=>Array.prototype.indexOf.call(this.rowElements,e.closest("tr")),getSelectedRowCount:()=>this._checkedRows.length,isCheckboxAtRowIndexChecked:e=>this._checkedRows.includes(this._getRowIdAtIndex(e)),isHeaderRowCheckboxChecked:()=>this._headerChecked,isRowsSelectable:()=>!0,notifyRowSelectionChanged:()=>void 0,notifySelectedAll:()=>void 0,notifyUnselectedAll:()=>void 0,registerHeaderRowCheckbox:()=>void 0,registerRowCheckboxes:()=>void 0,removeClassAtRowIndex:(e,t)=>{this.rowElements[e].classList.remove(t)},setAttributeAtRowIndex:(e,t,a)=>{this.rowElements[e].setAttribute(t,a)},setHeaderRowCheckboxChecked:e=>{this._headerChecked=e},setHeaderRowCheckboxIndeterminate:e=>{this._headerIndeterminate=e},setRowCheckboxCheckedAtIndex:(e,t)=>{this._setRowChecked(this._getRowIdAtIndex(e),t)}}}_getRowIdAtIndex(e){return this.rowElements[e].getAttribute("data-row-id")}_handleHeaderClick(e){const t=e.target.closest("th").getAttribute("data-column-id");this.columns[t].sortable&&(this._sortDirection&&this._sortColumn===t?"asc"===this._sortDirection?this._sortDirection="desc":this._sortDirection=null:this._sortDirection="asc",this._sortColumn=null===this._sortDirection?void 0:t,Object(g.a)(this,"sorting-changed",{column:t,direction:this._sortDirection}))}_handleHeaderRowCheckboxChange(){this._headerChecked=this._headerCheckbox.checked,this._headerIndeterminate=this._headerCheckbox.indeterminate,this.mdcFoundation.handleHeaderRowCheckboxChange()}_handleRowCheckboxChange(e){const t=e.target,a=t.closest("tr").getAttribute("data-row-id");this._setRowChecked(a,t.checked),this.mdcFoundation.handleRowCheckboxChange(e)}_handleRowClick(e){const t=e.target.closest("tr").getAttribute("data-row-id");Object(g.a)(this,"row-click",{id:t},{bubbles:!1})}_setRowChecked(e,t){if(t&&!this._checkedRows.includes(e))this._checkedRows=[...this._checkedRows,e];else if(!t){const t=this._checkedRows.indexOf(e);-1!==t&&this._checkedRows.splice(t,1)}Object(g.a)(this,"selection-changed",{id:e,selected:t})}_handleSearchChange(e){this._filter=e.detail.value}static get styles(){return b.e`
      /* default mdc styles, colors changed, without checkbox styles */

      .mdc-data-table__content {
        font-family: Roboto, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 400;
        letter-spacing: 0.0178571429em;
        text-decoration: inherit;
        text-transform: inherit;
      }

      .mdc-data-table {
        background-color: var(--card-background-color);
        border-radius: 4px;
        border-width: 1px;
        border-style: solid;
        border-color: rgba(var(--rgb-primary-text-color), 0.12);
        display: inline-flex;
        flex-direction: column;
        box-sizing: border-box;
        overflow-x: auto;
      }

      .mdc-data-table__row--selected {
        background-color: rgba(var(--rgb-primary-color), 0.04);
      }

      .mdc-data-table__row {
        border-top-color: rgba(var(--rgb-primary-text-color), 0.12);
      }

      .mdc-data-table__row {
        border-top-width: 1px;
        border-top-style: solid;
      }

      .mdc-data-table__row:not(.mdc-data-table__row--selected):hover {
        background-color: rgba(var(--rgb-primary-text-color), 0.04);
      }

      .mdc-data-table__header-cell {
        color: var(--primary-text-color);
      }

      .mdc-data-table__cell {
        color: var(--primary-text-color);
      }

      .mdc-data-table__header-row {
        height: 56px;
      }

      .mdc-data-table__row {
        height: 52px;
      }

      .mdc-data-table__cell,
      .mdc-data-table__header-cell {
        padding-right: 16px;
        padding-left: 16px;
      }

      .mdc-data-table__header-cell--checkbox,
      .mdc-data-table__cell--checkbox {
        /* @noflip */
        padding-left: 16px;
        /* @noflip */
        padding-right: 0;
      }
      [dir="rtl"] .mdc-data-table__header-cell--checkbox,
      .mdc-data-table__header-cell--checkbox[dir="rtl"],
      [dir="rtl"] .mdc-data-table__cell--checkbox,
      .mdc-data-table__cell--checkbox[dir="rtl"] {
        /* @noflip */
        padding-left: 0;
        /* @noflip */
        padding-right: 16px;
      }

      .mdc-data-table__table {
        width: 100%;
        border: 0;
        white-space: nowrap;
        border-collapse: collapse;
      }

      .mdc-data-table__cell {
        font-family: Roboto, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 400;
        letter-spacing: 0.0178571429em;
        text-decoration: inherit;
        text-transform: inherit;
      }

      .mdc-data-table__cell--numeric {
        text-align: right;
      }
      [dir="rtl"] .mdc-data-table__cell--numeric,
      .mdc-data-table__cell--numeric[dir="rtl"] {
        /* @noflip */
        text-align: left;
      }

      .mdc-data-table__header-cell {
        font-family: Roboto, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-size: 0.875rem;
        line-height: 1.375rem;
        font-weight: 500;
        letter-spacing: 0.0071428571em;
        text-decoration: inherit;
        text-transform: inherit;
        text-align: left;
      }
      [dir="rtl"] .mdc-data-table__header-cell,
      .mdc-data-table__header-cell[dir="rtl"] {
        /* @noflip */
        text-align: right;
      }

      .mdc-data-table__header-cell--numeric {
        text-align: right;
      }
      [dir="rtl"] .mdc-data-table__header-cell--numeric,
      .mdc-data-table__header-cell--numeric[dir="rtl"] {
        /* @noflip */
        text-align: left;
      }

      /* custom from here */

      .mdc-data-table {
        display: block;
      }
      .mdc-data-table__header-cell {
        overflow: hidden;
      }
      .mdc-data-table__header-cell.sortable {
        cursor: pointer;
      }
      .mdc-data-table__header-cell.not-sorted:not(.mdc-data-table__cell--numeric)
        span {
        position: relative;
        left: -24px;
      }
      .mdc-data-table__header-cell.not-sorted > * {
        transition: left 0.2s ease 0s;
      }
      .mdc-data-table__header-cell.not-sorted ha-icon {
        left: -36px;
      }
      .mdc-data-table__header-cell.not-sorted:not(.mdc-data-table__cell--numeric):hover
        span {
        left: 0px;
      }
      .mdc-data-table__header-cell:hover.not-sorted ha-icon {
        left: 0px;
      }
    `}};i.b([Object(b.i)({type:Object})],u.prototype,"columns",void 0),i.b([Object(b.i)({type:Array})],u.prototype,"data",void 0),i.b([Object(b.i)({type:Boolean})],u.prototype,"selectable",void 0),i.b([Object(b.i)({type:String})],u.prototype,"id",void 0),i.b([Object(b.j)(".mdc-data-table")],u.prototype,"mdcRoot",void 0),i.b([Object(b.k)(".mdc-data-table__row")],u.prototype,"rowElements",void 0),i.b([Object(b.j)("#header-checkbox")],u.prototype,"_headerCheckbox",void 0),i.b([Object(b.i)({type:Boolean})],u.prototype,"_filterable",void 0),i.b([Object(b.i)({type:Boolean})],u.prototype,"_headerChecked",void 0),i.b([Object(b.i)({type:Boolean})],u.prototype,"_headerIndeterminate",void 0),i.b([Object(b.i)({type:Array})],u.prototype,"_checkedRows",void 0),i.b([Object(b.i)({type:String})],u.prototype,"_filter",void 0),i.b([Object(b.i)({type:String})],u.prototype,"_sortColumn",void 0),i.b([Object(b.i)({type:String})],u.prototype,"_sortDirection",void 0),u=i.b([Object(b.f)("ha-data-table")],u);var w=a(167),x=a(119),f=a(93);const C=["zone"],R=(e,t)=>{if("call-service"!==t.action||!t.service_data||!t.service_data.entity_id)return;let a=t.service_data.entity_id;Array.isArray(a)||(a=[a]);for(const i of a)e.add(i)},k=(e,t)=>{"string"!=typeof t?(t.entity&&e.add(t.entity),t.camera_image&&e.add(t.camera_image),t.tap_action&&R(e,t.tap_action),t.hold_action&&R(e,t.hold_action)):e.add(t)},y=(e,t)=>{t.entity&&k(e,t.entity),t.entities&&t.entities.forEach(t=>k(e,t)),t.card&&y(e,t.card),t.cards&&t.cards.forEach(t=>y(e,t)),t.elements&&t.elements.forEach(t=>y(e,t)),t.badges&&t.badges.forEach(t=>k(e,t))},v=(e,t)=>{const a=(e=>{const t=new Set;return e.views.forEach(e=>y(t,e)),t})(t);return Object.keys(e.states).filter(e=>!a.has(e)&&!C.includes(e.split(".",1)[0])).sort()};var E=a(258);a.d(t,"HuiUnusedEntities",function(){return O});let O=class extends o.a{constructor(){super(...arguments),this._unusedEntities=[],this._selectedEntities=[],this._columns=Object(s.a)(e=>{const t={entity:{title:"Entity",sortable:!0,filterable:!0,filterKey:"friendly_name",direction:"asc",template:e=>o.e`
          <div @click=${this._handleEntityClicked} style="cursor: pointer;">
            <state-badge
              .hass=${this.hass}
              .stateObj=${e}
            ></state-badge>
            ${e.friendly_name}
          </div>
        `}};return e?t:(t.entity_id={title:"Entity id",sortable:!0,filterable:!0},t.domain={title:"Domain",sortable:!0,filterable:!0},t.last_changed={title:"Last Changed",type:"numeric",sortable:!0,template:e=>o.e`
        <ha-relative-time
          .hass=${this.hass}
          .datetime=${e}
        ></ha-relative-time>
      `},t)})}get _config(){return this.lovelace.config}updated(e){super.updated(e),e.has("lovelace")&&this._getUnusedEntities()}render(){return this.hass&&this.lovelace?"storage"===this.lovelace.mode&&!1===this.lovelace.editMode?o.e``:o.e`
      <ha-card header="Unused entities">
        <div class="card-content">
          These are the entities that you have available, but are not in your
          Lovelace UI yet.
          ${"storage"===this.lovelace.mode?o.e`
                <br />Select the entities you want to add to a card and then
                click the add card button.
              `:""}
        </div>
      </ha-card>
      <ha-data-table
        .columns=${this._columns(this.narrow)}
        .data=${this._unusedEntities.map(e=>{const t=this.hass.states[e];return{entity_id:e,entity:Object.assign({},t,{friendly_name:Object(w.a)(t)}),domain:Object(x.a)(e),last_changed:t.last_changed}})}
        .id=${"entity_id"}
        .selectable=${"storage"===this.lovelace.mode}
        @selection-changed=${this._handleSelectionChanged}
      ></ha-data-table>
      ${"storage"===this.lovelace.mode?o.e`
            <ha-fab
              class="${Object(d.a)({rtl:Object(f.a)(this.hass)})}"
              icon="hass:plus"
              label="${this.hass.localize("ui.panel.lovelace.editor.edit_card.add")}"
              @click="${this._selectView}"
            ></ha-fab>
          `:""}
    `:o.e``}_getUnusedEntities(){this.hass&&this.lovelace&&(this._selectedEntities=[],this._unusedEntities=v(this.hass,this._config))}_handleSelectionChanged(e){const t=e.detail,a=t.id;if(t.selected)this._selectedEntities.push(a);else{const e=this._selectedEntities.indexOf(a);-1!==e&&this._selectedEntities.splice(e,1)}}_handleEntityClicked(e){const t=e.target.closest("tr").getAttribute("data-row-id");Object(g.a)(this,"hass-more-info",{entityId:t})}_selectView(){var e,t;e=this,t={lovelace:this.lovelace,viewSelectedCallback:e=>this._addCard(e)},Object(g.a)(e,"show-dialog",{dialogTag:"hui-dialog-select-view",dialogImport:()=>a.e(26).then(a.bind(null,362)),dialogParams:t})}_addCard(e){Object(E.a)(this,{lovelace:this.lovelace,path:[e],entities:this._selectedEntities})}static get styles(){return o.c`
      :host {
        background: var(--lovelace-background);
        padding: 16px;
      }
      ha-fab {
        position: sticky;
        float: right;
        bottom: 16px;
        z-index: 1;
      }
      ha-fab.rtl {
        float: left;
      }
      ha-card {
        margin-bottom: 16px;
      }
    `}};i.b([Object(o.f)()],O.prototype,"lovelace",void 0),i.b([Object(o.f)()],O.prototype,"hass",void 0),i.b([Object(o.f)()],O.prototype,"narrow",void 0),i.b([Object(o.f)()],O.prototype,"_unusedEntities",void 0),O=i.b([Object(o.d)("hui-unused-entities")],O)}}]);
//# sourceMappingURL=chunk.6a975befd285f2c21645.js.map