(self.webpackJsonp=self.webpackJsonp||[]).push([[90],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(9),a=n(18);const s=Object(r.a)(e=>(class extends e{fire(e,t,n){return n=n||{},Object(a.a)(n.node||this,e,t,n)}}))},175:function(e,t,n){"use strict";var r=n(9);t.a=Object(r.a)(e=>(class extends e{static get properties(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}__computeLocalize(e){return e}}))},177:function(e,t,n){"use strict";var r,a,s,i,c=n(0),o=n(1),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(c.d)(t,e),Object.defineProperty(t,"styles",{get:function(){return Object(o.c)(r||(r=Object(c.f)(["\n      :host {\n        background: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        border-radius: var(--ha-card-border-radius, 2px);\n        box-shadow: var(\n          --ha-card-box-shadow,\n          0 2px 2px 0 rgba(0, 0, 0, 0.14),\n          0 1px 5px 0 rgba(0, 0, 0, 0.12),\n          0 3px 1px -2px rgba(0, 0, 0, 0.2)\n        );\n        color: var(--primary-text-color);\n        display: block;\n        transition: all 0.3s ease-out;\n        position: relative;\n      }\n\n      .card-header,\n      :host ::slotted(.card-header) {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        padding: 24px 16px 16px;\n        display: block;\n      }\n\n      :host ::slotted(.card-content:not(:first-child)),\n      slot:not(:first-child)::slotted(.card-content) {\n        padding-top: 0px;\n        margin-top: -8px;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n      }\n    "],["\n      :host {\n        background: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        border-radius: var(--ha-card-border-radius, 2px);\n        box-shadow: var(\n          --ha-card-box-shadow,\n          0 2px 2px 0 rgba(0, 0, 0, 0.14),\n          0 1px 5px 0 rgba(0, 0, 0, 0.12),\n          0 3px 1px -2px rgba(0, 0, 0, 0.2)\n        );\n        color: var(--primary-text-color);\n        display: block;\n        transition: all 0.3s ease-out;\n        position: relative;\n      }\n\n      .card-header,\n      :host ::slotted(.card-header) {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        padding: 24px 16px 16px;\n        display: block;\n      }\n\n      :host ::slotted(.card-content:not(:first-child)),\n      slot:not(:first-child)::slotted(.card-content) {\n        padding-top: 0px;\n        margin-top: -8px;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n      }\n    "])))},enumerable:!0,configurable:!0}),t.prototype.render=function(){return Object(o.f)(i||(i=Object(c.f)(["\n      ","\n      <slot></slot>\n    "],["\n      ","\n      <slot></slot>\n    "])),this.header?Object(o.f)(a||(a=Object(c.f)(['\n            <div class="card-header">',"</div>\n          "],['\n            <div class="card-header">',"</div>\n          "])),this.header):Object(o.f)(s||(s=Object(c.f)([""],[""]))))},Object(c.c)([Object(o.g)()],t.prototype,"header",void 0),t}(o.a);customElements.define("ha-card",d)},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=(n(109),customElements.get("iron-icon")),s=!1,i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.d)(t,e),t.prototype.listen=function(t,r,a){e.prototype.listen.call(this,t,r,a),s||"mdi"!==this._iconsetName||(s=!0,n.e(70).then(n.bind(null,215)))},t}(a);customElements.define("ha-icon",i)},232:function(e,t,n){"use strict";var r,a,s=n(0),i=n(14),c=n(74);n(239),function(e){function t(){return null!==e&&e.apply(this,arguments)||this}Object(s.d)(t,e),t.prototype.render=function(){var e={"mdc-fab--mini":this.mini,"mdc-fab--exited":this.exited,"mdc-fab--extended":this.extended},t=""!==this.label&&this.extended;return Object(i.g)(a||(a=Object(s.f)(['\n      <button\n        .ripple="','"\n        class="mdc-fab ','"\n        ?disabled="','"\n        aria-label="','"\n      >\n        ',"\n        ","\n        ","\n      </button>\n    "],['\n      <button\n        .ripple="','"\n        class="mdc-fab ','"\n        ?disabled="','"\n        aria-label="','"\n      >\n        ',"\n        ","\n        ","\n      </button>\n    "])),Object(c.a)(),Object(i.d)(e),this.disabled,this.label||this.icon,t&&this.showIconAtEnd?this.label:"",this.icon?Object(i.g)(r||(r=Object(s.f)(["\n              <ha-icon .icon=","></ha-icon>\n            "],["\n              <ha-icon .icon=","></ha-icon>\n            "])),this.icon):"",t&&!this.showIconAtEnd?this.label:"")},t=Object(s.c)([Object(i.f)("ha-fab")],t)}(customElements.get("mwc-fab"))},241:function(e,t,n){"use strict";var r=n(0),a=(n(109),function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.d)(t,e),t.prototype.connectedCallback=function(){var t=this;e.prototype.connectedCallback.call(this),setTimeout((function(){t.icon="ltr"===window.getComputedStyle(t).direction?"hass:chevron-right":"hass:chevron-left"}),100)},t}(n(179).a));customElements.define("ha-icon-next",a)},250:function(e,t,n){"use strict";var r=n(9),a=n(99);t.a=Object(r.a)(e=>(class extends e{navigate(...e){Object(a.a)(this,...e)}}))},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return o}));var r=n(0),a="system-admin",s="system-users",i=function(e){return Object(r.b)(void 0,void 0,void 0,(function(){return Object(r.e)(this,(function(t){return[2,e.callWS({type:"config/auth/list"})]}))}))},c=function(e,t,n){return Object(r.b)(void 0,void 0,void 0,(function(){return Object(r.e)(this,(function(a){return[2,e.callWS(Object(r.a)(Object(r.a)({},n),{type:"config/auth/update",user_id:t}))]}))}))},o=function(e,t){return Object(r.b)(void 0,void 0,void 0,(function(){return Object(r.e)(this,(function(n){return[2,e.callWS({type:"config/auth/delete",user_id:t})]}))}))}},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(48),a=function(e,t){return Object(r.a)(e,{message:t.localize("ui.common.successfully_saved")})}},737:function(e,t,n){"use strict";n.r(t);n(234);var r=n(12),a=n(22),s=n(4),i=n(30),c=n(250),o=(n(143),n(181),n(152),n(241),n(177),n(232),n(175)),d=n(118),u=n(96);let l=!1;customElements.define("ha-config-user-picker",class extends(Object(d.a)(Object(c.a)(Object(o.a)(i.a)))){static get template(){return s.a`
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
    `}static get properties(){return{hass:Object,users:Array,rtl:{type:Boolean,reflectToAttribute:!0,computed:"_computeRTL(hass)"}}}connectedCallback(){super.connectedCallback(),l||(l=!0,this.fire("register-dialog",{dialogShowEvent:"show-add-user",dialogTag:"ha-dialog-add-user",dialogImport:()=>Promise.all([n.e(1),n.e(34)]).then(n.bind(null,711))}))}_withDefault(e,t){return e||t}_computeUrl(e){return`/config/users/${e.id}`}_computeGroup(e,t){return e(`groups.${t.group_ids[0]}`)}_computeRTL(e){return Object(u.a)(e)}_addUser(){this.fire("show-add-user",{hass:this.hass,dialogClosedCallback:async({userId:e})=>{this.fire("reload-users"),e&&this.navigate(`/config/users/${e}`)}})}});var p,h,b,f,m,g,v=n(0),j=n(1),x=n(630),O=(n(85),n(56)),y=n(18),_=n(99),w=n(338),k=n(411),U=[w.b,w.a];!function(e){function t(){return null!==e&&e.apply(this,arguments)||this}Object(v.d)(t,e),t.prototype.render=function(){var e=this.hass,t=this.user;return e&&t?Object(j.f)(m||(m=Object(v.f)(["\n      <hass-subpage\n        .header=","\n      >\n        <ha-card .header=",'>\n          <table class="card-content">\n            <tr>\n              <td>ID</td>\n              <td>',"</td>\n            </tr>\n            <tr>\n              <td>Owner</td>\n              <td>","</td>\n            </tr>\n            <tr>\n              <td>Group</td>\n              <td>\n                <select\n                  @change=","\n                  .value=","\n                >\n                  ","\n                </select>\n              </td>\n            </tr>\n            ","\n\n            <tr>\n              <td>Active</td>\n              <td>","</td>\n            </tr>\n            <tr>\n              <td>System generated</td>\n              <td>",'</td>\n            </tr>\n          </table>\n\n          <div class="card-actions">\n            <mwc-button @click=',">\n              ",'\n            </mwc-button>\n            <mwc-button\n              class="warning"\n              @click=',"\n              .disabled=","\n            >\n              ","\n            </mwc-button>\n            ","\n          </div>\n        </ha-card>\n      </hass-subpage>\n    "],["\n      <hass-subpage\n        .header=","\n      >\n        <ha-card .header=",'>\n          <table class="card-content">\n            <tr>\n              <td>ID</td>\n              <td>',"</td>\n            </tr>\n            <tr>\n              <td>Owner</td>\n              <td>","</td>\n            </tr>\n            <tr>\n              <td>Group</td>\n              <td>\n                <select\n                  @change=","\n                  .value=","\n                >\n                  ","\n                </select>\n              </td>\n            </tr>\n            ","\n\n            <tr>\n              <td>Active</td>\n              <td>","</td>\n            </tr>\n            <tr>\n              <td>System generated</td>\n              <td>",'</td>\n            </tr>\n          </table>\n\n          <div class="card-actions">\n            <mwc-button @click=',">\n              ",'\n            </mwc-button>\n            <mwc-button\n              class="warning"\n              @click=',"\n              .disabled=","\n            >\n              ","\n            </mwc-button>\n            ","\n          </div>\n        </ha-card>\n      </hass-subpage>\n    "])),e.localize("ui.panel.config.users.editor.caption"),this._name,t.id,t.is_owner,this._handleGroupChange,Object(x.a)(this.updateComplete.then((function(){return t.group_ids[0]}))),U.map((function(t){return Object(j.f)(h||(h=Object(v.f)(["\n                      <option value=",">\n                        ","\n                      </option>\n                    "],["\n                      <option value=",">\n                        ","\n                      </option>\n                    "])),t,e.localize("groups."+t))})),t.group_ids[0]===w.b?Object(j.f)(b||(b=Object(v.f)(['\n                  <tr>\n                    <td colspan="2" class="user-experiment">\n                      The users group is a work in progress. The user will be\n                      unable to administer the instance via the UI. We\'re still\n                      auditing all management API endpoints to ensure that they\n                      correctly limit access to administrators.\n                    </td>\n                  </tr>\n                '],['\n                  <tr>\n                    <td colspan="2" class="user-experiment">\n                      The users group is a work in progress. The user will be\n                      unable to administer the instance via the UI. We\'re still\n                      auditing all management API endpoints to ensure that they\n                      correctly limit access to administrators.\n                    </td>\n                  </tr>\n                ']))):"",t.is_active,t.system_generated,this._handleRenameUser,e.localize("ui.panel.config.users.editor.rename_user"),this._deleteUser,t.system_generated,e.localize("ui.panel.config.users.editor.delete_user"),t.system_generated?Object(j.f)(f||(f=Object(v.f)(["\n                  Unable to remove system generated users.\n                "],["\n                  Unable to remove system generated users.\n                "]))):""):Object(j.f)(p||(p=Object(v.f)([""],[""])))},Object.defineProperty(t.prototype,"_name",{get:function(){return this.user&&(this.user.name||"Unnamed user")},enumerable:!0,configurable:!0}),t.prototype._handleRenameUser=function(e){return Object(v.b)(this,void 0,void 0,(function(){var t,n;return Object(v.e)(this,(function(r){switch(r.label){case 0:if(e.currentTarget.blur(),null===(t=prompt("New name?",this.user.name))||t===this.user.name)return[2];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,Object(w.e)(this.hass,this.user.id,{name:t})];case 2:return r.sent(),Object(y.a)(this,"reload-users"),[3,4];case 3:return n=r.sent(),alert("User rename failed: "+n.message),[3,4];case 4:return[2]}}))}))},t.prototype._handleGroupChange=function(e){return Object(v.b)(this,void 0,void 0,(function(){var t,n,r;return Object(v.e)(this,(function(a){switch(a.label){case 0:t=e.currentTarget,n=t.value,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Object(w.e)(this.hass,this.user.id,{group_ids:[n]})];case 2:return a.sent(),Object(k.a)(this,this.hass),Object(y.a)(this,"reload-users"),[3,4];case 3:return r=a.sent(),alert("Group update failed: "+r.message),t.value=this.user.group_ids[0],[3,4];case 4:return[2]}}))}))},t.prototype._deleteUser=function(e){return Object(v.b)(this,void 0,void 0,(function(){var t;return Object(v.e)(this,(function(n){switch(n.label){case 0:if(!confirm("Are you sure you want to delete "+this._name))return e.target.blur(),[2];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,Object(w.c)(this.hass,this.user.id)];case 2:return n.sent(),[3,4];case 3:return t=n.sent(),alert(t.code),[2];case 4:return Object(y.a)(this,"reload-users"),Object(_.a)(this,"/config/users"),[2]}}))}))},Object.defineProperty(t,"styles",{get:function(){return[O.a,Object(j.c)(g||(g=Object(v.f)(["\n        .card-actions {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n        }\n        ha-card {\n          max-width: 600px;\n          margin: 0 auto 16px;\n        }\n        hass-subpage ha-card:first-of-type {\n          direction: ltr;\n        }\n        table {\n          width: 100%;\n        }\n        td {\n          vertical-align: top;\n        }\n        .user-experiment {\n          padding: 8px 0;\n        }\n      "],["\n        .card-actions {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n        }\n        ha-card {\n          max-width: 600px;\n          margin: 0 auto 16px;\n        }\n        hass-subpage ha-card:first-of-type {\n          direction: ltr;\n        }\n        table {\n          width: 100%;\n        }\n        td {\n          vertical-align: top;\n        }\n        .user-experiment {\n          padding: 8px 0;\n        }\n      "])))]},enumerable:!0,configurable:!0}),Object(v.c)([Object(j.g)()],t.prototype,"hass",void 0),Object(v.c)([Object(j.g)()],t.prototype,"user",void 0),t=Object(v.c)([Object(j.d)("ha-user-editor")],t)}(j.a);customElements.define("ha-config-users",class extends(Object(c.a)(i.a)){static get template(){return s.a`
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
    `}static get properties(){return{hass:Object,route:{type:Object,observer:"_checkRoute"},_routeData:Object,_user:{type:Object,value:null},_users:{type:Array,value:null}}}ready(){super.ready(),this._loadData(),this.addEventListener("reload-users",()=>this._loadData())}_handlePickUser(e){this._user=e.detail.user}_checkRoute(e){Object(y.a)(this,"iron-resize"),this._debouncer=a.a.debounce(this._debouncer,r.d.after(0),()=>{""===e.path&&this.navigate(`${e.prefix}/picker`,!0)})}_computeUser(e,t){return e&&e.filter(e=>e.id===t)[0]}_equals(e,t){return e===t}async _loadData(){this._users=await Object(w.d)(this.hass)}})}}]);
//# sourceMappingURL=chunk.178a2d1b4989d89457f3.js.map