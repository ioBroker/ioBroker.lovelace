(self.webpackJsonp=self.webpackJsonp||[]).push([[90],{118:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var a=s(9),r=s(18);const i=Object(a.a)(e=>(class extends e{fire(e,t,s){return s=s||{},Object(r.a)(s.node||this,e,t,s)}}))},175:function(e,t,s){"use strict";var a=s(9);t.a=Object(a.a)(e=>(class extends e{static get properties(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}__computeLocalize(e){return e}}))},177:function(e,t,s){"use strict";var a=s(4),r=s(0);class i extends r.a{static get styles(){return r.c`
      :host {
        background: var(
          --ha-card-background,
          var(--paper-card-background-color, white)
        );
        border-radius: var(--ha-card-border-radius, 2px);
        box-shadow: var(
          --ha-card-box-shadow,
          0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 1px 5px 0 rgba(0, 0, 0, 0.12),
          0 3px 1px -2px rgba(0, 0, 0, 0.2)
        );
        color: var(--primary-text-color);
        display: block;
        transition: all 0.3s ease-out;
        position: relative;
      }

      .card-header,
      :host ::slotted(.card-header) {
        color: var(--ha-card-header-color, --primary-text-color);
        font-family: var(--ha-card-header-font-family, inherit);
        font-size: var(--ha-card-header-font-size, 24px);
        letter-spacing: -0.012em;
        line-height: 32px;
        padding: 24px 16px 16px;
        display: block;
      }

      :host ::slotted(.card-content:not(:first-child)),
      slot:not(:first-child)::slotted(.card-content) {
        padding-top: 0px;
        margin-top: -8px;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
      }
    `}render(){return r.f`
      ${this.header?r.f`
            <div class="card-header">${this.header}</div>
          `:r.f``}
      <slot></slot>
    `}}Object(a.b)([Object(r.g)()],i.prototype,"header",void 0),customElements.define("ha-card",i)},179:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));s(109);const a=customElements.get("iron-icon");let r=!1;class i extends a{listen(e,t,a){super.listen(e,t,a),r||"mdi"!==this._iconsetName||(r=!0,s.e(70).then(s.bind(null,216)))}}customElements.define("ha-icon",i)},232:function(e,t,s){"use strict";var a=s(4),r=s(14),i=s(74);s(239);const n=customElements.get("mwc-fab");let c=class extends n{render(){const e={"mdc-fab--mini":this.mini,"mdc-fab--exited":this.exited,"mdc-fab--extended":this.extended},t=""!==this.label&&this.extended;return r.g`
      <button
        .ripple="${Object(i.a)()}"
        class="mdc-fab ${Object(r.d)(e)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label||this.icon}"
      >
        ${t&&this.showIconAtEnd?this.label:""}
        ${this.icon?r.g`
              <ha-icon .icon=${this.icon}></ha-icon>
            `:""}
        ${t&&!this.showIconAtEnd?this.label:""}
      </button>
    `}};c=Object(a.b)([Object(r.f)("ha-fab")],c)},241:function(e,t,s){"use strict";s(109);var a=s(179);customElements.define("ha-icon-next",class extends a.a{connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.icon="ltr"===window.getComputedStyle(this).direction?"hass:chevron-right":"hass:chevron-left"},100)}})},250:function(e,t,s){"use strict";var a=s(9),r=s(99);t.a=Object(a.a)(e=>(class extends e{navigate(...e){Object(r.a)(this,...e)}}))},338:function(e,t,s){"use strict";s.d(t,"a",(function(){return a})),s.d(t,"b",(function(){return r})),s.d(t,"d",(function(){return i})),s.d(t,"e",(function(){return n})),s.d(t,"c",(function(){return c}));const a="system-admin",r="system-users",i=async e=>e.callWS({type:"config/auth/list"}),n=async(e,t,s)=>e.callWS(Object.assign(Object.assign({},s),{type:"config/auth/update",user_id:t})),c=async(e,t)=>e.callWS({type:"config/auth/delete",user_id:t})},411:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var a=s(48);const r=(e,t)=>Object(a.a)(e,{message:t.localize("ui.common.successfully_saved")})},733:function(e,t,s){"use strict";s.r(t);s(234);var a=s(12),r=s(22),i=s(3),n=s(30),c=s(250),o=(s(143),s(181),s(152),s(241),s(177),s(232),s(175)),d=s(118),u=s(96);let l=!1;customElements.define("ha-config-user-picker",class extends(Object(d.a)(Object(c.a)(Object(o.a)(n.a)))){static get template(){return i.a`
      <style>
        ha-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
        }
        ha-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }
        ha-fab[rtl] {
          right: auto;
          left: 16px;
        }
        ha-fab[rtl][is-wide] {
          bottom: 24px;
          right: auto;
          left: 24px;
        }

        ha-card {
          max-width: 600px;
          margin: 16px auto;
          overflow: hidden;
        }
        a {
          text-decoration: none;
          color: var(--primary-text-color);
        }
      </style>

      <hass-subpage header="[[localize('ui.panel.config.users.picker.title')]]">
        <ha-card>
          <template is="dom-repeat" items="[[users]]" as="user">
            <a href="[[_computeUrl(user)]]">
              <paper-item>
                <paper-item-body two-line>
                  <div>[[_withDefault(user.name, 'Unnamed User')]]</div>
                  <div secondary="">
                    [[_computeGroup(localize, user)]]
                    <template is="dom-if" if="[[user.system_generated]]">
                      - System Generated
                    </template>
                  </div>
                </paper-item-body>
                <ha-icon-next></ha-icon-next>
              </paper-item>
            </a>
          </template>
        </ha-card>

        <ha-fab
          is-wide$="[[isWide]]"
          icon="hass:plus"
          title="[[localize('ui.panel.config.users.picker.add_user')]]"
          on-click="_addUser"
          rtl$="[[rtl]]"
        ></ha-fab>
      </hass-subpage>
    `}static get properties(){return{hass:Object,users:Array,rtl:{type:Boolean,reflectToAttribute:!0,computed:"_computeRTL(hass)"}}}connectedCallback(){super.connectedCallback(),l||(l=!0,this.fire("register-dialog",{dialogShowEvent:"show-add-user",dialogTag:"ha-dialog-add-user",dialogImport:()=>Promise.all([s.e(1),s.e(34)]).then(s.bind(null,711))}))}_withDefault(e,t){return e||t}_computeUrl(e){return`/config/users/${e.id}`}_computeGroup(e,t){return e(`groups.${t.group_ids[0]}`)}_computeRTL(e){return Object(u.a)(e)}_addUser(){this.fire("show-add-user",{hass:this.hass,dialogClosedCallback:async({userId:e})=>{this.fire("reload-users"),e&&this.navigate(`/config/users/${e}`)}})}});var h=s(4),p=s(0),b=s(630),m=(s(85),s(56)),f=s(18),g=s(99),_=s(338),x=s(411);const y=[_.b,_.a];let v=class extends p.a{render(){const e=this.hass,t=this.user;return e&&t?p.f`
      <hass-subpage
        .header=${e.localize("ui.panel.config.users.editor.caption")}
      >
        <ha-card .header=${this._name}>
          <table class="card-content">
            <tr>
              <td>ID</td>
              <td>${t.id}</td>
            </tr>
            <tr>
              <td>Owner</td>
              <td>${t.is_owner}</td>
            </tr>
            <tr>
              <td>Group</td>
              <td>
                <select
                  @change=${this._handleGroupChange}
                  .value=${Object(b.a)(this.updateComplete.then(()=>t.group_ids[0]))}
                >
                  ${y.map(t=>p.f`
                      <option value=${t}>
                        ${e.localize(`groups.${t}`)}
                      </option>
                    `)}
                </select>
              </td>
            </tr>
            ${t.group_ids[0]===_.b?p.f`
                  <tr>
                    <td colspan="2" class="user-experiment">
                      The users group is a work in progress. The user will be
                      unable to administer the instance via the UI. We're still
                      auditing all management API endpoints to ensure that they
                      correctly limit access to administrators.
                    </td>
                  </tr>
                `:""}

            <tr>
              <td>Active</td>
              <td>${t.is_active}</td>
            </tr>
            <tr>
              <td>System generated</td>
              <td>${t.system_generated}</td>
            </tr>
          </table>

          <div class="card-actions">
            <mwc-button @click=${this._handleRenameUser}>
              ${e.localize("ui.panel.config.users.editor.rename_user")}
            </mwc-button>
            <mwc-button
              class="warning"
              @click=${this._deleteUser}
              .disabled=${t.system_generated}
            >
              ${e.localize("ui.panel.config.users.editor.delete_user")}
            </mwc-button>
            ${t.system_generated?p.f`
                  Unable to remove system generated users.
                `:""}
          </div>
        </ha-card>
      </hass-subpage>
    `:p.f``}get _name(){return this.user&&(this.user.name||"Unnamed user")}async _handleRenameUser(e){e.currentTarget.blur();const t=prompt("New name?",this.user.name);if(null!==t&&t!==this.user.name)try{await Object(_.e)(this.hass,this.user.id,{name:t}),Object(f.a)(this,"reload-users")}catch(s){alert(`User rename failed: ${s.message}`)}}async _handleGroupChange(e){const t=e.currentTarget,s=t.value;try{await Object(_.e)(this.hass,this.user.id,{group_ids:[s]}),Object(x.a)(this,this.hass),Object(f.a)(this,"reload-users")}catch(a){alert(`Group update failed: ${a.message}`),t.value=this.user.group_ids[0]}}async _deleteUser(e){if(confirm(`Are you sure you want to delete ${this._name}`)){try{await Object(_.c)(this.hass,this.user.id)}catch(t){return void alert(t.code)}Object(f.a)(this,"reload-users"),Object(g.a)(this,"/config/users")}else e.target.blur()}static get styles(){return[m.a,p.c`
        .card-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        ha-card {
          max-width: 600px;
          margin: 0 auto 16px;
        }
        hass-subpage ha-card:first-of-type {
          direction: ltr;
        }
        table {
          width: 100%;
        }
        td {
          vertical-align: top;
        }
        .user-experiment {
          padding: 8px 0;
        }
      `]}};Object(h.b)([Object(p.g)()],v.prototype,"hass",void 0),Object(h.b)([Object(p.g)()],v.prototype,"user",void 0),v=Object(h.b)([Object(p.d)("ha-user-editor")],v);customElements.define("ha-config-users",class extends(Object(c.a)(n.a)){static get template(){return i.a`
      <app-route
        route="[[route]]"
        pattern="/:user"
        data="{{_routeData}}"
      ></app-route>

      <template is="dom-if" if='[[_equals(_routeData.user, "picker")]]'>
        <ha-config-user-picker
          hass="[[hass]]"
          users="[[_users]]"
        ></ha-config-user-picker>
      </template>
      <template
        is="dom-if"
        if='[[!_equals(_routeData.user, "picker")]]'
        restamp
      >
        <ha-user-editor
          hass="[[hass]]"
          user="[[_computeUser(_users, _routeData.user)]]"
        ></ha-user-editor>
      </template>
    `}static get properties(){return{hass:Object,route:{type:Object,observer:"_checkRoute"},_routeData:Object,_user:{type:Object,value:null},_users:{type:Array,value:null}}}ready(){super.ready(),this._loadData(),this.addEventListener("reload-users",()=>this._loadData())}_handlePickUser(e){this._user=e.detail.user}_checkRoute(e){Object(f.a)(this,"iron-resize"),this._debouncer=r.a.debounce(this._debouncer,a.d.after(0),()=>{""===e.path&&this.navigate(`${e.prefix}/picker`,!0)})}_computeUser(e,t){return e&&e.filter(e=>e.id===t)[0]}_equals(e,t){return e===t}async _loadData(){this._users=await Object(_.d)(this.hass)}})}}]);
//# sourceMappingURL=chunk.75bb96378808f6ca7367.js.map