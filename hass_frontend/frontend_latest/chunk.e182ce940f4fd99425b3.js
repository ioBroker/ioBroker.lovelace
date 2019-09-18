/*! For license information please see chunk.e182ce940f4fd99425b3.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[43],{181:function(e,t,i){"use strict";i(5),i(45),i(42),i(54);var a=i(6),s=i(3);Object(a.a)({_template:s.a`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,is:"paper-item-body"})},185:function(e,t,i){"use strict";i(5),i(45),i(54),i(145);var a=i(6),s=i(3),n=i(120);Object(a.a)({_template:s.a`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,is:"paper-icon-item",behaviors:[n.a]})},186:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return o}));i(5);var a=i(87),s=i(1);const n={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(e,t){t&&(e?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(e){this.closingReason=this.closingReason||{},this.closingReason.confirmed=e},_onDialogClick:function(e){for(var t=Object(s.a)(e).path,i=0,a=t.indexOf(this);i<a;i++){var n=t[i];if(n.hasAttribute&&(n.hasAttribute("dialog-dismiss")||n.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(n.hasAttribute("dialog-confirm")),this.close(),e.stopPropagation();break}}}},o=[a.a,n]},190:function(e,t,i){"use strict";var a=i(4),s=(i(108),i(93),i(185),i(181),i(211),i(124)),n=(i(184),i(176)),o=i(0),l=i(18);const c=(e,t,i)=>{e.firstElementChild||(e.innerHTML='\n      <style>\n        paper-icon-item {\n          margin: -10px;\n          padding: 0;\n        }\n      </style>\n      <paper-icon-item>\n        <state-badge state-obj="[[item]]" slot="item-icon"></state-badge>\n        <paper-item-body two-line="">\n          <div class=\'name\'>[[_computeStateName(item)]]</div>\n          <div secondary>[[item.entity_id]]</div>\n        </paper-item-body>\n      </paper-icon-item>\n    '),e.querySelector("state-badge").stateObj=i.item,e.querySelector(".name").textContent=Object(n.a)(i.item),e.querySelector("[secondary]").textContent=i.item.entity_id};class r extends o.a{constructor(){super(...arguments),this._getStates=Object(s.a)((e,t,i)=>{let a=[];if(!e)return[];let s=Object.keys(e.states);return t&&(s=s.filter(e=>e.substr(0,e.indexOf("."))===t)),a=s.sort().map(t=>e.states[t]),i&&(a=a.filter(e=>e.entity_id===this.value||i(e))),a})}updated(e){super.updated(e),e.has("hass")&&!this._opened&&(this._hass=this.hass)}render(){const e=this._getStates(this._hass,this.domainFilter,this.entityFilter);return o.f`
      <vaadin-combo-box-light
        item-value-path="entity_id"
        item-label-path="entity_id"
        .items=${e}
        .value=${this._value}
        .allowCustomValue=${this.allowCustomEntity}
        .renderer=${c}
        @opened-changed=${this._openedChanged}
        @value-changed=${this._valueChanged}
      >
        <paper-input
          .autofocus=${this.autofocus}
          .label=${void 0===this.label&&this._hass?this._hass.localize("ui.components.entity.entity-picker.entity"):this.label}
          .value=${this._value}
          .disabled=${this.disabled}
          class="input"
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
        >
          ${this.value?o.f`
                <paper-icon-button
                  aria-label="Clear"
                  slot="suffix"
                  class="clear-button"
                  icon="hass:close"
                  no-ripple
                >
                  Clear
                </paper-icon-button>
              `:""}
          ${e.length>0?o.f`
                <paper-icon-button
                  aria-label="Show entities"
                  slot="suffix"
                  class="toggle-button"
                  .icon=${this._opened?"hass:menu-up":"hass:menu-down"}
                >
                  Toggle
                </paper-icon-button>
              `:""}
        </paper-input>
      </vaadin-combo-box-light>
    `}get _value(){return this.value||""}_openedChanged(e){this._opened=e.detail.value}_valueChanged(e){e.detail.value!==this._value&&(this.value=e.detail.value,setTimeout(()=>{Object(l.a)(this,"value-changed",{value:this.value}),Object(l.a)(this,"change")},0))}static get styles(){return o.c`
      paper-input > paper-icon-button {
        width: 24px;
        height: 24px;
        padding: 2px;
        color: var(--secondary-text-color);
      }
      [hidden] {
        display: none;
      }
    `}}Object(a.b)([Object(o.g)({type:Boolean})],r.prototype,"autofocus",void 0),Object(a.b)([Object(o.g)({type:Boolean})],r.prototype,"disabled",void 0),Object(a.b)([Object(o.g)({type:Boolean,attribute:"allow-custom-entity"})],r.prototype,"allowCustomEntity",void 0),Object(a.b)([Object(o.g)()],r.prototype,"hass",void 0),Object(a.b)([Object(o.g)()],r.prototype,"label",void 0),Object(a.b)([Object(o.g)()],r.prototype,"value",void 0),Object(a.b)([Object(o.g)({attribute:"domain-filter"})],r.prototype,"domainFilter",void 0),Object(a.b)([Object(o.g)()],r.prototype,"entityFilter",void 0),Object(a.b)([Object(o.g)({type:Boolean})],r.prototype,"_opened",void 0),Object(a.b)([Object(o.g)()],r.prototype,"_hass",void 0),customElements.define("ha-entity-picker",r)},191:function(e,t,i){"use strict";i(5),i(45),i(42),i(54),i(86);const a=document.createElement("template");a.setAttribute("style","display: none;"),a.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(a.content)},193:function(e,t,i){"use strict";i(5),i(191);var a=i(122),s=i(186),n=i(6),o=i(3);Object(n.a)({_template:o.a`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[s.a,a.a],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}})},194:function(e,t,i){"use strict";i(193);var a=i(72),s=i(1),n=i(127);const o={getTabbableNodes:function(e){var t=[];return this._collectTabbableNodes(e,t)?n.a._sortByTabIndex(t):t},_collectTabbableNodes:function(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!n.a._isVisible(e))return!1;var i,a=e,o=n.a._normalizedTabIndex(a),l=o>0;o>=0&&t.push(a),i="content"===a.localName||"slot"===a.localName?Object(s.a)(a).getDistributedNodes():Object(s.a)(a.shadowRoot||a.root||a).children;for(var c=0;c<i.length;c++)l=this._collectTabbableNodes(i[c],t)||l;return l}},l=customElements.get("paper-dialog"),c={get _focusableNodes(){return o.getTabbableNodes(this)}};customElements.define("ha-paper-dialog",class extends(Object(a.b)([c],l)){})},205:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));const a=i(0).f`
  <style>
    paper-toggle-button {
      padding-top: 16px;
    }
    .side-by-side {
      display: flex;
    }
    .side-by-side > * {
      flex: 1;
      padding-right: 4px;
    }
    .suffix {
      margin: 0 8px;
    }
  </style>
`},208:function(e,t,i){"use strict";i(5),i(45),i(42);var a=i(186),s=i(6),n=i(3);Object(s.a)({_template:n.a`
    <style>

      :host {
        display: block;
        @apply --layout-relative;
      }

      :host(.is-scrolled:not(:first-child))::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      .scrollable {
        padding: 0 24px;

        @apply --layout-scroll;
        @apply --paper-dialog-scrollable;
      }

      .fit {
        @apply --layout-fit;
      }
    </style>

    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">
      <slot></slot>
    </div>
`,is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget(),this.classList.add("no-padding")},attached:function(){this._ensureTarget(),requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",this.scrollTarget.scrollTop>0),this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight),this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement,this.dialogElement&&this.dialogElement.behaviors&&this.dialogElement.behaviors.indexOf(a.b)>=0?(this.dialogElement.sizingTarget=this.scrollTarget,this.scrollTarget.classList.remove("fit")):this.dialogElement&&this.scrollTarget.classList.add("fit")}})},238:function(e,t,i){"use strict";var a=i(4),s=i(0),n=(i(85),i(18));let o=class extends s.a{render(){const e=["Backend-selected","default"].concat(Object.keys(this.hass.themes.themes).sort());return s.f`
      <paper-dropdown-menu
        label="Theme"
        dynamic-align
        @value-changed="${this._changed}"
      >
        <paper-listbox
          slot="dropdown-content"
          .selected="${this.value}"
          attr-for-selected="theme"
        >
          ${e.map(e=>s.f`
              <paper-item theme="${e}">${e}</paper-item>
            `)}
        </paper-listbox>
      </paper-dropdown-menu>
    `}static get styles(){return s.c`
      paper-dropdown-menu {
        width: 100%;
      }
    `}_changed(e){this.hass&&""!==e.target.value&&(this.value=e.target.value,Object(n.a)(this,"theme-changed"))}};Object(a.b)([Object(s.g)()],o.prototype,"value",void 0),Object(a.b)([Object(s.g)()],o.prototype,"hass",void 0),o=Object(a.b)([Object(s.d)("hui-theme-select-editor")],o)},248:function(e,t,i){"use strict";var a=i(4),s=i(0),n=(i(108),i(18));i(190);let o=class extends s.a{render(){return this.entities?s.f`
      <h3>Entities</h3>
      <div class="entities">
        ${this.entities.map((e,t)=>s.f`
            <div class="entity">
              <ha-entity-picker
                .hass="${this.hass}"
                .value="${e.entity}"
                .index="${t}"
                @change="${this._valueChanged}"
                allow-custom-entity
              ></ha-entity-picker>
              <paper-icon-button
                title="Move entity down"
                icon="hass:arrow-down"
                .index="${t}"
                @click="${this._entityDown}"
                ?disabled="${t===this.entities.length-1}"
              ></paper-icon-button>
              <paper-icon-button
                title="Move entity up"
                icon="hass:arrow-up"
                .index="${t}"
                @click="${this._entityUp}"
                ?disabled="${0===t}"
              ></paper-icon-button>
            </div>
          `)}
        <ha-entity-picker
          .hass="${this.hass}"
          @change="${this._addEntity}"
        ></ha-entity-picker>
      </div>
    `:s.f``}_addEntity(e){const t=e.target;if(""===t.value)return;const i=this.entities.concat({entity:t.value});t.value="",Object(n.a)(this,"entities-changed",{entities:i})}_entityUp(e){const t=e.target,i=this.entities.concat();[i[t.index-1],i[t.index]]=[i[t.index],i[t.index-1]],Object(n.a)(this,"entities-changed",{entities:i})}_entityDown(e){const t=e.target,i=this.entities.concat();[i[t.index+1],i[t.index]]=[i[t.index],i[t.index+1]],Object(n.a)(this,"entities-changed",{entities:i})}_valueChanged(e){const t=e.target,i=this.entities.concat();""===t.value?i.splice(t.index,1):i[t.index]=Object.assign(Object.assign({},i[t.index]),{entity:t.value}),Object(n.a)(this,"entities-changed",{entities:i})}static get styles(){return s.c`
      .entities {
        padding-left: 20px;
      }
      .entity {
        display: flex;
        align-items: flex-end;
      }
      .entity ha-entity-picker {
        flex-grow: 1;
      }
    `}};Object(a.b)([Object(s.g)()],o.prototype,"hass",void 0),Object(a.b)([Object(s.g)()],o.prototype,"entities",void 0),o=Object(a.b)([Object(s.d)("hui-entity-editor")],o)},300:function(e,t,i){"use strict";function a(e){return e.map(e=>"string"==typeof e?{entity:e}:e)}i.d(t,"a",(function(){return a}))},729:function(e,t,i){"use strict";i.r(t);var a=i(4),s=i(0),n=(i(187),i(243),i(276),i(108),i(194),i(85),i(208),i(56)),o=(i(248),i(93),i(207),i(18)),l=i(205);i(238);const c=e=>{const t="àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;",i=new RegExp(t.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(i,e=>"aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(t.indexOf(e))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")};let r=class extends s.a{constructor(){super(...arguments),this._suggestedPath=!1}get _path(){return this._config&&this._config.path||""}get _title(){return this._config&&this._config.title||""}get _icon(){return this._config&&this._config.icon||""}get _theme(){return this._config?this._config.theme||"Backend-selected":""}get _panel(){return this._config&&this._config.panel||!1}set config(e){this._config=e}render(){return this.hass?s.f`
      ${l.a}
      <div class="card-config">
        <paper-input
          label="Title"
          .value=${this._title}
          .configValue=${"title"}
          @value-changed=${this._valueChanged}
          @blur=${this._handleTitleBlur}
        ></paper-input>
        <paper-input
          label="Icon"
          .value=${this._icon}
          .configValue=${"icon"}
          @value-changed=${this._valueChanged}
        ></paper-input>
        <paper-input
          label="URL Path"
          .value=${this._path}
          .configValue=${"path"}
          @value-changed=${this._valueChanged}
        ></paper-input>
        <hui-theme-select-editor
          .hass=${this.hass}
          .value=${this._theme}
          .configValue=${"theme"}
          @theme-changed=${this._valueChanged}
        ></hui-theme-select-editor>
        <paper-toggle-button
          ?checked=${!1!==this._panel}
          .configValue=${"panel"}
          @change=${this._valueChanged}
          >Panel Mode?</paper-toggle-button
        >
      </div>
    `:s.f``}_valueChanged(e){const t=e.currentTarget;if(this[`_${t.configValue}`]===t.value)return;let i;t.configValue&&(i=Object.assign(Object.assign({},this._config),{[t.configValue]:void 0!==t.checked?t.checked:t.value})),Object(o.a)(this,"view-config-changed",{config:i})}_handleTitleBlur(e){if(!this.isNew||this._suggestedPath||this._config.path||!e.currentTarget.value)return;const t=Object.assign(Object.assign({},this._config),{path:c(e.currentTarget.value)});Object(o.a)(this,"view-config-changed",{config:t})}};Object(a.b)([Object(s.g)()],r.prototype,"hass",void 0),Object(a.b)([Object(s.g)()],r.prototype,"isNew",void 0),Object(a.b)([Object(s.g)()],r.prototype,"_config",void 0),r=Object(a.b)([Object(s.d)("hui-view-editor")],r);var d=i(300),h=i(99),p=i(304);let g=class extends s.a{constructor(){super(),this._saving=!1,this._curTabIndex=0}async showDialog(){if(null==this._dialog&&await this.updateComplete,void 0===this.viewIndex)this._config={},this._badges=[],this._cards=[];else{const e=this.lovelace.config.views[this.viewIndex],{cards:t,badges:i}=e,s=Object(a.d)(e,["cards","badges"]);this._config=s,this._badges=i?Object(d.a)(i):[],this._cards=t}this._dialog.open()}get _dialog(){return this.shadowRoot.querySelector("ha-paper-dialog")}render(){let e;switch(this._curTab){case"tab-settings":e=s.f`
          <hui-view-editor
            .isNew=${void 0===this.viewIndex}
            .hass="${this.hass}"
            .config="${this._config}"
            @view-config-changed="${this._viewConfigChanged}"
          ></hui-view-editor>
        `;break;case"tab-badges":e=s.f`
          <hui-entity-editor
            .hass="${this.hass}"
            .entities="${this._badges}"
            @entities-changed="${this._badgesChanged}"
          ></hui-entity-editor>
        `;break;case"tab-cards":e=s.f`
          Cards
        `}return s.f`
      <ha-paper-dialog with-backdrop>
        <h2>
          ${this.hass.localize("ui.panel.lovelace.editor.edit_view.header")}
        </h2>
        <paper-tabs
          scrollable
          hide-scroll-buttons
          .selected="${this._curTabIndex}"
          @selected-item-changed="${this._handleTabSelected}"
        >
          <paper-tab id="tab-settings">Settings</paper-tab>
          <paper-tab id="tab-badges">Badges</paper-tab>
        </paper-tabs>
        <paper-dialog-scrollable> ${e} </paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          ${void 0!==this.viewIndex?s.f`
                <paper-icon-button
                  class="delete"
                  title="Delete"
                  icon="hass:delete"
                  @click="${this._delete}"
                ></paper-icon-button>
              `:""}
          <mwc-button @click="${this._closeDialog}"
            >${this.hass.localize("ui.common.cancel")}</mwc-button
          >
          <mwc-button
            ?disabled="${!this._config||this._saving}"
            @click="${this._save}"
          >
            <paper-spinner
              ?active="${this._saving}"
              alt="Saving"
            ></paper-spinner>
            ${this.hass.localize("ui.common.save")}</mwc-button
          >
        </div>
      </ha-paper-dialog>
    `}async _delete(){if(this._cards&&this._cards.length>0)alert("You can't delete a view that has cards in it. Remove the cards first.");else if(confirm("Are you sure you want to delete this view?"))try{await this.lovelace.saveConfig(Object(p.d)(this.lovelace.config,this.viewIndex)),this._closeDialog(),Object(h.a)(this,"/lovelace/0")}catch(e){alert(`Deleting failed: ${e.message}`)}}async _resizeDialog(){await this.updateComplete,Object(o.a)(this._dialog,"iron-resize")}_closeDialog(){this._curTabIndex=0,this.lovelace=void 0,this._config={},this._badges=[],this._dialog.close()}_handleTabSelected(e){e.detail.value&&(this._curTab=e.detail.value.id,this._resizeDialog())}async _save(){if(!this._config)return;if(!this._isConfigChanged())return void this._closeDialog();this._saving=!0;const e=Object.assign({cards:this._cards,badges:this._badges.map(e=>e.entity)},this._config),t=this.lovelace;try{await t.saveConfig(this._creatingView?Object(p.b)(t.config,e):Object(p.g)(t.config,this.viewIndex,e)),this._closeDialog()}catch(i){alert(`Saving failed: ${i.message}`)}finally{this._saving=!1}}_viewConfigChanged(e){e.detail&&e.detail.config&&(this._config=e.detail.config)}_badgesChanged(e){this._badges&&this.hass&&e.detail&&e.detail.entities&&(this._badges=e.detail.entities)}_isConfigChanged(){return this._creatingView||JSON.stringify(this._config)!==JSON.stringify(this.lovelace.config.views[this.viewIndex])}get _creatingView(){return void 0===this.viewIndex}static get styles(){return[n.b,s.c`
        @media all and (max-width: 450px), all and (max-height: 500px) {
          /* overrule the ha-style-dialog max-height on small screens */
          ha-paper-dialog {
            max-height: 100%;
            height: 100%;
          }
        }
        @media all and (min-width: 660px) {
          ha-paper-dialog {
            width: 650px;
          }
        }
        ha-paper-dialog {
          max-width: 650px;
        }
        paper-tabs {
          --paper-tabs-selection-bar-color: var(--primary-color);
          text-transform: uppercase;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        mwc-button paper-spinner {
          width: 14px;
          height: 14px;
          margin-right: 20px;
        }
        paper-icon-button.delete {
          margin-right: auto;
          color: var(--secondary-text-color);
        }
        paper-spinner {
          display: none;
        }
        paper-spinner[active] {
          display: block;
        }
        .hidden {
          display: none;
        }
        .error {
          color: #ef5350;
          border-bottom: 1px solid #ef5350;
        }
      </style>
    `]}};Object(a.b)([Object(s.g)()],g.prototype,"lovelace",void 0),Object(a.b)([Object(s.g)()],g.prototype,"viewIndex",void 0),Object(a.b)([Object(s.g)()],g.prototype,"hass",void 0),Object(a.b)([Object(s.g)()],g.prototype,"_config",void 0),Object(a.b)([Object(s.g)()],g.prototype,"_badges",void 0),Object(a.b)([Object(s.g)()],g.prototype,"_cards",void 0),Object(a.b)([Object(s.g)()],g.prototype,"_saving",void 0),Object(a.b)([Object(s.g)()],g.prototype,"_curTab",void 0),g=Object(a.b)([Object(s.d)("hui-edit-view")],g),i.d(t,"HuiDialogEditView",(function(){return u}));let u=class extends s.a{async showDialog(e){this._params=e,await this.updateComplete,this.shadowRoot.children[0].showDialog()}render(){return this._params?s.f`
      <hui-edit-view
        .hass="${this.hass}"
        .lovelace="${this._params.lovelace}"
        .viewIndex="${this._params.viewIndex}"
      >
      </hui-edit-view>
    `:s.f``}};Object(a.b)([Object(s.g)()],u.prototype,"hass",void 0),Object(a.b)([Object(s.g)()],u.prototype,"_params",void 0),u=Object(a.b)([Object(s.d)("hui-dialog-edit-view")],u)}}]);
//# sourceMappingURL=chunk.e182ce940f4fd99425b3.js.map