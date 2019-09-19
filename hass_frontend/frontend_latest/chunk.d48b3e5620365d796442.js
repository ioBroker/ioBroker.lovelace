/*! For license information please see chunk.d48b3e5620365d796442.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[55],{108:function(e,t,i){"use strict";i(45),i(47);var o=i(6),n=i(2),s=i(4),c=i(5);Object(o.a)({_template:s.a`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:c.a.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&Object(n.a)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,Object(n.a)(this.root).appendChild(this._img))}})},169:function(e,t,i){"use strict";i.d(t,"a",function(){return s});i(108);const o=customElements.get("iron-icon");let n=!1;class s extends o{listen(e,t,o){super.listen(e,t,o),n||"mdi"!==this._iconsetName||(n=!0,i.e(50).then(i.bind(null,230)))}}customElements.define("ha-icon",s)},187:function(e,t,i){"use strict";i.d(t,"a",function(){return o});const o=(e,t,i=!1)=>{let o;return function(...n){const s=this,c=i&&!o;clearTimeout(o),o=setTimeout(()=>{o=null,i||e.apply(s,n)},t),c&&e.apply(s,n)}}},209:function(e,t,i){"use strict";i.d(t,"b",function(){return o}),i.d(t,"a",function(){return n});const o=(e,t)=>e<t?-1:e>t?1:0,n=(e,t)=>o(e.toLowerCase(),t.toLowerCase())},369:function(e,t,i){"use strict";i.r(t);var o=i(3),n=i(0),s=(i(84),i(187)),c=i(13);const r=(e,t)=>e.callApi("POST","config/config_entries/flow",{handler:t}),a=(e,t)=>e.callApi("GET",`config/config_entries/flow/${t}`),l=(e,t,i)=>e.callApi("POST",`config/config_entries/flow/${t}`,i),d=(e,t)=>e.callApi("DELETE",`config/config_entries/flow/${t}`),h=e=>e.sendMessagePromise({type:"config_entries/flow/progress"}),p=(e,t)=>e.subscribeEvents(Object(s.a)(()=>h(e).then(e=>t.setState(e,!0)),500,!0),"config_entry_discovered"),g=e=>Object(c.h)(e,"_configFlowProgress",h,p);var b=i(58),u=i(18);const f=()=>Promise.all([i.e(2),i.e(3),i.e(4),i.e(5),i.e(15)]).then(i.bind(null,366));var _=i(209);const m=f,w=(e,t)=>((e,t,i)=>{Object(u.a)(e,"show-dialog",{dialogTag:"dialog-data-entry-flow",dialogImport:f,dialogParams:Object.assign({},t,{flowConfig:i})})})(e,t,{loadDevicesAndAreas:!0,getFlowHandlers:e=>(e=>e.callApi("GET","config/config_entries/flow_handlers"))(e).then(t=>t.sort((t,i)=>Object(_.a)(e.localize(`component.${t}.config.title`),e.localize(`component.${i}.config.title`)))),createFlow:r,fetchFlow:a,handleFlowStep:l,deleteFlow:d,renderAbortDescription(e,t){const i=Object(b.b)(e.localize,`component.${t.handler}.config.abort.${t.reason}`,t.description_placeholders);return i?n.e`
            <ha-markdown allowsvg .content=${i}></ha-markdown>
          `:""},renderShowFormStepHeader:(e,t)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.title`),renderShowFormStepDescription(e,t){const i=Object(b.b)(e.localize,`component.${t.handler}.config.step.${t.step_id}.description`,t.description_placeholders);return i?n.e`
            <ha-markdown allowsvg .content=${i}></ha-markdown>
          `:""},renderShowFormStepFieldLabel:(e,t,i)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.data.${i.name}`),renderShowFormStepFieldError:(e,t,i)=>e.localize(`component.${t.handler}.config.error.${i}`),renderExternalStepHeader:(e,t)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.title`),renderExternalStepDescription(e,t){const i=Object(b.b)(e.localize,`component.${t.handler}.config.${t.step_id}.description`,t.description_placeholders);return n.e`
        <p>
          ${e.localize("ui.panel.config.integrations.config_flow.external_step.description")}
        </p>
        ${i?n.e`
              <ha-markdown allowsvg .content=${i}></ha-markdown>
            `:""}
      `},renderCreateEntryDescription(e,t){const i=Object(b.b)(e.localize,`component.${t.handler}.config.create_entry.${t.description||"default"}`,t.description_placeholders);return n.e`
        ${i?n.e`
              <ha-markdown allowsvg .content=${i}></ha-markdown>
            `:""}
        <p>Created config for ${t.title}.</p>
      `}});i(169);let v=class extends n.a{constructor(){super(...arguments),this.clickable=!1}render(){return n.e`
      <div class="icon">
        <iron-icon .icon=${this.icon}></iron-icon>
        ${this.badgeIcon?n.e`
              <ha-icon class="badge" .icon=${this.badgeIcon}></ha-icon>
            `:""}
      </div>
      <div class="title">${this.title}</div>
    `}static get styles(){return n.c`
      :host {
        display: inline-flex;
        flex-direction: column;
        text-align: center;
        color: var(--primary-text-color);
      }

      :host([clickable]) {
        color: var(--primary-text-color);
      }

      .icon {
        position: relative;
        margin: 0 auto 8px;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        border: 1px solid var(--secondary-text-color);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      :host([clickable]) .icon {
        border-color: var(--primary-color);
        border-width: 2px;
      }

      .badge {
        position: absolute;
        color: var(--primary-color);
        bottom: -5px;
        right: -5px;
        background-color: white;
        border-radius: 50%;
        width: 18px;
        display: block;
        height: 18px;
      }

      .title {
        min-height: 2.3em;
      }
    `}};o.b([Object(n.f)()],v.prototype,"icon",void 0),o.b([Object(n.f)()],v.prototype,"title",void 0),o.b([Object(n.f)()],v.prototype,"badgeIcon",void 0),o.b([Object(n.f)({type:Boolean,reflect:!0})],v.prototype,"clickable",void 0),v=o.b([Object(n.d)("integration-badge")],v);var y=i(111);let $=class extends n.a{connectedCallback(){super.connectedCallback(),this._unsubEvents=((e,t)=>g(e.connection).subscribe(t))(this.hass,e=>{this._discovered=e})}disconnectedCallback(){super.disconnectedCallback(),this._unsubEvents&&(this._unsubEvents(),this._unsubEvents=void 0)}render(){if(!this._entries||!this._discovered)return n.e``;const e=[...this._entries.map(e=>{const t=this.hass.localize(`component.${e.domain}.config.title`);return[t,n.e`
            <integration-badge
              .title=${t}
              icon="hass:check"
            ></integration-badge>
          `]}),...this._discovered.map(e=>{const t=((e,t)=>{const i=t.context.title_placeholders||{},o=Object.keys(i);if(0===o.length)return e(`component.${t.handler}.config.title`);const n=[];return o.forEach(e=>{n.push(e),n.push(i[e])}),e(`component.${t.handler}.config.flow_title`,...n)})(this.hass.localize,e);return[t,n.e`
            <button .flowId=${e.flow_id} @click=${this._continueFlow}>
              <integration-badge
                clickable
                .title=${t}
                icon="hass:plus"
              ></integration-badge>
            </button>
          `]})].sort((e,t)=>Object(_.b)(e[0],t[0])).map(e=>e[1]);return n.e`
      <p>
        ${this.onboardingLocalize("ui.panel.page-onboarding.integration.intro")}
      </p>
      <div class="badges">
        ${e}
        <button @click=${this._createFlow}>
          <integration-badge
            clickable
            title=${this.onboardingLocalize("ui.panel.page-onboarding.integration.more_integrations")}
            icon="hass:dots-horizontal"
          ></integration-badge>
        </button>
      </div>
      <div class="footer">
        <mwc-button @click=${this._finish}>
          ${this.onboardingLocalize("ui.panel.page-onboarding.integration.finish")}
        </mwc-button>
      </div>
    `}firstUpdated(e){super.firstUpdated(e),m(),this._loadConfigEntries(),i.e(77).then(i.t.bind(null,337,7))}_createFlow(){w(this,{dialogClosedCallback:()=>{this._loadConfigEntries(),g(this.hass.connection).refresh()}})}_continueFlow(e){w(this,{continueFlowId:e.currentTarget.flowId,dialogClosedCallback:()=>{this._loadConfigEntries(),g(this.hass.connection).refresh()}})}async _loadConfigEntries(){const e=await(e=>e.callApi("GET","config/config_entries/entry"))(this.hass);this._entries=e.filter(e=>"met"!==e.domain)}async _finish(){const e=await Object(y.c)(this.hass,{client_id:Object(c.f)()});Object(u.a)(this,"onboarding-step",{type:"integration",result:e})}static get styles(){return n.c`
      .badges {
        margin-top: 24px;
      }
      .badges > * {
        width: 24%;
        min-width: 90px;
        margin-bottom: 24px;
      }
      button {
        display: inline-block;
        cursor: pointer;
        padding: 0;
        border: 0;
        background: 0;
        font: inherit;
      }
      .footer {
        text-align: right;
      }
    `}};o.b([Object(n.f)()],$.prototype,"hass",void 0),o.b([Object(n.f)()],$.prototype,"onboardingLocalize",void 0),o.b([Object(n.f)()],$.prototype,"_entries",void 0),o.b([Object(n.f)()],$.prototype,"_discovered",void 0),$=o.b([Object(n.d)("onboarding-integrations")],$)}}]);
//# sourceMappingURL=chunk.d48b3e5620365d796442.js.map