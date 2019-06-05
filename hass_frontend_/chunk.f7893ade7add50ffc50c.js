/*! For license information please see chunk.f7893ade7add50ffc50c.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{187:function(e,a,t){"use strict";var i=t(3),r=t(21);t(88);customElements.define("ha-config-section",class extends r.a{static get template(){return i.a`
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
    `}static get properties(){return{hass:{type:Object},narrow:{type:Boolean},isWide:{type:Boolean,value:!1}}}computeContentClasses(e){return e?"content ":"content narrow"}computeClasses(e){return"together layout "+(e?"horizontal":"vertical narrow")}})},227:function(e,a,t){"use strict";a.a=((e,a)=>e<a?-1:e>a?1:0)},228:function(e,a,t){"use strict";t(4),t(45),t(101),t(175),t(55),t(43);var i=t(52),r=t(34),s=t(63);const n={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var e=1;this.disabled?e=0:this.active||this.pressed?e=4:this.receivedFocusFromKeyboard&&(e=3),this._setElevation(e)},_computeKeyboardClass:function(e){this.toggleClass("keyboard-focus",e)},_spaceKeyDownHandler:function(e){i.b._spaceKeyDownHandler.call(this,e),this.hasRipple()&&this.getRipple().ripples.length<1&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(e){i.b._spaceKeyUpHandler.call(this,e),this.hasRipple()&&this._ripple.uiUpAction()}},o=[i.a,r.a,s.a,n];var p=t(6);const c=t(3).a`
  <style include="paper-material-styles">
    :host {
      @apply --layout-vertical;
      @apply --layout-center-center;

      background: var(--paper-fab-background, var(--accent-color));
      border-radius: 50%;
      box-sizing: border-box;
      color: var(--text-primary-color);
      cursor: pointer;
      height: 56px;
      min-width: 0;
      outline: none;
      padding: 16px;
      position: relative;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      width: 56px;
      z-index: 0;

      /* NOTE: Both values are needed, since some phones require the value \`transparent\`. */
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-tap-highlight-color: transparent;

      @apply --paper-fab;
    }

    [hidden] {
      display: none !important;
    }

    :host([mini]) {
      width: 40px;
      height: 40px;
      padding: 8px;

      @apply --paper-fab-mini;
    }

    :host([disabled]) {
      color: var(--paper-fab-disabled-text, var(--paper-grey-500));
      background: var(--paper-fab-disabled-background, var(--paper-grey-300));

      @apply --paper-fab-disabled;
    }

    iron-icon {
      @apply --paper-fab-iron-icon;
    }

    span {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;

      @apply --paper-fab-label;
    }

    :host(.keyboard-focus) {
      background: var(--paper-fab-keyboard-focus-background, var(--paper-pink-900));
    }

    :host([elevation="1"]) {
      @apply --paper-material-elevation-1;
    }

    :host([elevation="2"]) {
      @apply --paper-material-elevation-2;
    }

    :host([elevation="3"]) {
      @apply --paper-material-elevation-3;
    }

    :host([elevation="4"]) {
      @apply --paper-material-elevation-4;
    }

    :host([elevation="5"]) {
      @apply --paper-material-elevation-5;
    }
  </style>

  <iron-icon id="icon" hidden\$="{{!_computeIsIconFab(icon, src)}}" src="[[src]]" icon="[[icon]]"></iron-icon>
  <span hidden\$="{{_computeIsIconFab(icon, src)}}">{{label}}</span>
`;c.setAttribute("strip-whitespace",""),Object(p.a)({_template:c,is:"paper-fab",behaviors:[o],properties:{src:{type:String,value:""},icon:{type:String,value:""},mini:{type:Boolean,value:!1,reflectToAttribute:!0},label:{type:String,observer:"_labelChanged"}},_labelChanged:function(){this.setAttribute("aria-label",this.label)},_computeIsIconFab:function(e,a){return e.length>0||a.length>0}})},251:function(e,a,t){"use strict";t.d(a,"c",function(){return i}),t.d(a,"a",function(){return r}),t.d(a,"d",function(){return s}),t.d(a,"b",function(){return n});const i=e=>e.callWS({type:"config/area_registry/list"}),r=(e,a)=>e.callWS(Object.assign({type:"config/area_registry/create"},a)),s=(e,a,t)=>e.callWS(Object.assign({type:"config/area_registry/update",area_id:a},t)),n=(e,a)=>e.callWS({type:"config/area_registry/delete",area_id:a})},649:function(e,a,t){"use strict";t.r(a);var i=t(5),r=(t(135),t(173),t(167),t(228),t(251)),s=(t(145),t(150),t(227)),n=(t(187),t(33));const o=()=>Promise.all([t.e(0),t.e(1),t.e(102),t.e(14)]).then(t.bind(null,691)),p=(e,a)=>{Object(n.a)(e,"show-dialog",{dialogTag:"dialog-area-registry-detail",dialogImport:o,dialogParams:a})};var c=t(66),l=t(102);customElements.define("ha-config-area-registry",class extends i.a{constructor(...e){super(...e),this.hass=void 0,this.isWide=void 0,this._items=void 0}static get properties(){return{hass:{},isWide:{},_items:{}}}render(){return this.hass&&void 0!==this._items?i.e`
      <hass-subpage
        header="${this.hass.localize("ui.panel.config.area_registry.caption")}"
      >
        <ha-config-section .isWide=${this.isWide}>
          <span slot="header">
            ${this.hass.localize("ui.panel.config.area_registry.picker.header")}
          </span>
          <span slot="introduction">
            ${this.hass.localize("ui.panel.config.area_registry.picker.introduction")}
            <p>
              ${this.hass.localize("ui.panel.config.area_registry.picker.introduction2")}
            </p>
            <a href="/config/integrations/dashboard">
              ${this.hass.localize("ui.panel.config.area_registry.picker.integrations_page")}
            </a>
          </span>
          <paper-card>
            ${this._items.map(e=>i.e`
                <paper-item @click=${this._openEditEntry} .entry=${e}>
                  <paper-item-body>
                    ${e.name}
                  </paper-item-body>
                </paper-item>
              `)}
            ${0===this._items.length?i.e`
                  <div class="empty">
                    ${this.hass.localize("ui.panel.config.area_registry.no_areas")}
                    <mwc-button @click=${this._createArea}>
                      ${this.hass.localize("ui.panel.config.area_registry.create_area")}
                    </mwc-button>
                  </div>
                `:i.e``}
          </paper-card>
        </ha-config-section>
      </hass-subpage>

      <paper-fab
        ?is-wide=${this.isWide}
        icon="hass:plus"
        title="${this.hass.localize("ui.panel.config.area_registry.create_area")}"
        @click=${this._createArea}
        class="${Object(c.a)({rtl:Object(l.a)(this.hass)})}"
      ></paper-fab>
    `:i.e`
        <hass-loading-screen></hass-loading-screen>
      `}firstUpdated(e){super.firstUpdated(e),this._fetchData(),o()}async _fetchData(){this._items=(await Object(r.c)(this.hass)).sort((e,a)=>Object(s.a)(e.name,a.name))}_createArea(){this._openDialog()}_openEditEntry(e){const a=e.currentTarget.entry;this._openDialog(a)}_openDialog(e){p(this,{entry:e,createEntry:async e=>{const a=await Object(r.a)(this.hass,e);this._items=this._items.concat(a).sort((e,a)=>Object(s.a)(e.name,a.name))},updateEntry:async a=>{const t=await Object(r.d)(this.hass,e.area_id,a);this._items=this._items.map(a=>a===e?t:a)},removeEntry:async()=>{if(!confirm("Are you sure you want to delete this area?\n\nAll devices in this area will become unassigned."))return!1;try{return await Object(r.b)(this.hass,e.area_id),this._items=this._items.filter(a=>a!==e),!0}catch(e){return!1}}})}static get styles(){return i.c`
      a {
        color: var(--primary-color);
      }
      paper-card {
        display: block;
        max-width: 600px;
        margin: 16px auto;
      }
      .empty {
        text-align: center;
      }
      paper-item {
        cursor: pointer;
        padding-top: 4px;
        padding-bottom: 4px;
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

      paper-fab.rtl {
        right: auto;
        left: 16px;
      }

      paper-fab[is-wide].rtl {
        bottom: 24px;
        right: auto;
        left: 24px;
      }
    `}})}}]);
//# sourceMappingURL=chunk.f7893ade7add50ffc50c.js.map