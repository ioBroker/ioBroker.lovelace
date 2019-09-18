/*! For license information please see chunk.cc082678121e214a8e68.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[75],{109:function(t,e,n){"use strict";n(45),n(47);var i=n(6),o=n(1),c=n(3),r=n(5);Object(i.a)({_template:c.a`
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
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:r.a.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&Object(o.a)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,Object(o.a)(this.root).appendChild(this._img))}})},179:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(109);const i=customElements.get("iron-icon");let o=!1;class c extends i{listen(t,e,i){super.listen(t,e,i),o||"mdi"!==this._iconsetName||(o=!0,n.e(70).then(n.bind(null,216)))}}customElements.define("ha-icon",c)},196:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i=(t,e,n=!1)=>{let i;return function(...o){const c=this,r=n&&!i;clearTimeout(i),i=setTimeout(()=>{i=null,n||t.apply(c,o)},e),r&&t.apply(c,o)}}},198:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o}));const i=(t,e)=>t<e?-1:t>e?1:0,o=(t,e)=>i(t.toLowerCase(),e.toLowerCase())},299:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return r}));const i=t=>t.callApi("GET","config/config_entries/entry"),o=(t,e)=>t.callApi("DELETE",`config/config_entries/entry/${e}`),c=(t,e)=>t.callWS({type:"config_entries/system_options/list",entry_id:e}),r=(t,e,n)=>t.callWS(Object.assign({type:"config_entries/system_options/update",entry_id:e},n))},308:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return r})),n.d(e,"f",(function(){return s})),n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return p})),n.d(e,"h",(function(){return g})),n.d(e,"g",(function(){return b}));var i=n(196),o=n(13);const c=(t,e)=>t.callApi("POST","config/config_entries/flow",{handler:e}),r=(t,e)=>t.callApi("GET",`config/config_entries/flow/${e}`),s=(t,e,n)=>t.callApi("POST",`config/config_entries/flow/${e}`,n),a=(t,e)=>t.callApi("DELETE",`config/config_entries/flow/${e}`),l=t=>t.callApi("GET","config/config_entries/flow_handlers"),d=t=>t.sendMessagePromise({type:"config_entries/flow/progress"}),h=(t,e)=>t.subscribeEvents(Object(i.a)(()=>d(t).then(t=>e.setState(t,!0)),500,!0),"config_entry_discovered"),p=t=>Object(o.h)(t,"_configFlowProgress",d,h),g=(t,e)=>p(t.connection).subscribe(e),b=(t,e)=>{const n=e.context.title_placeholders||{},i=Object.keys(n);if(0===i.length)return t(`component.${e.handler}.config.title`);const o=[];return i.forEach(t=>{o.push(t),o.push(n[t])}),t(`component.${e.handler}.config.flow_title`,...o)}},361:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));var i=n(18);const o=()=>Promise.all([n.e(1),n.e(2),n.e(6),n.e(7),n.e(29)]).then(n.bind(null,475)),c=(t,e,n)=>{Object(i.a)(t,"show-dialog",{dialogTag:"dialog-data-entry-flow",dialogImport:o,dialogParams:Object.assign(Object.assign({},e),{flowConfig:n})})}},407:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return l}));var i=n(308),o=n(0),c=n(58),r=n(361),s=n(198);const a=r.a,l=(t,e)=>Object(r.b)(t,e,{loadDevicesAndAreas:!0,getFlowHandlers:t=>Object(i.d)(t).then(e=>e.sort((e,n)=>Object(s.a)(t.localize(`component.${e}.config.title`),t.localize(`component.${n}.config.title`)))),createFlow:i.a,fetchFlow:i.c,handleFlowStep:i.f,deleteFlow:i.b,renderAbortDescription(t,e){const n=Object(c.b)(t.localize,`component.${e.handler}.config.abort.${e.reason}`,e.description_placeholders);return n?o.f`
            <ha-markdown allowsvg .content=${n}></ha-markdown>
          `:""},renderShowFormStepHeader:(t,e)=>t.localize(`component.${e.handler}.config.step.${e.step_id}.title`),renderShowFormStepDescription(t,e){const n=Object(c.b)(t.localize,`component.${e.handler}.config.step.${e.step_id}.description`,e.description_placeholders);return n?o.f`
            <ha-markdown allowsvg .content=${n}></ha-markdown>
          `:""},renderShowFormStepFieldLabel:(t,e,n)=>t.localize(`component.${e.handler}.config.step.${e.step_id}.data.${n.name}`),renderShowFormStepFieldError:(t,e,n)=>t.localize(`component.${e.handler}.config.error.${n}`),renderExternalStepHeader:(t,e)=>t.localize(`component.${e.handler}.config.step.${e.step_id}.title`),renderExternalStepDescription(t,e){const n=Object(c.b)(t.localize,`component.${e.handler}.config.${e.step_id}.description`,e.description_placeholders);return o.f`
        <p>
          ${t.localize("ui.panel.config.integrations.config_flow.external_step.description")}
        </p>
        ${n?o.f`
              <ha-markdown allowsvg .content=${n}></ha-markdown>
            `:""}
      `},renderCreateEntryDescription(t,e){const n=Object(c.b)(t.localize,`component.${e.handler}.config.create_entry.${e.description||"default"}`,e.description_placeholders);return o.f`
        ${n?o.f`
              <ha-markdown allowsvg .content=${n}></ha-markdown>
            `:""}
        <p>Created config for ${e.title}.</p>
      `}})},750:function(t,e,n){"use strict";n.r(e);var i=n(4),o=n(0),c=(n(85),n(407)),r=n(299),s=n(198);n(179);let a=class extends o.a{constructor(){super(...arguments),this.clickable=!1}render(){return o.f`
      <div class="icon">
        <iron-icon .icon=${this.icon}></iron-icon>
        ${this.badgeIcon?o.f`
              <ha-icon class="badge" .icon=${this.badgeIcon}></ha-icon>
            `:""}
      </div>
      <div class="title">${this.title}</div>
    `}static get styles(){return o.c`
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
    `}};Object(i.b)([Object(o.g)()],a.prototype,"icon",void 0),Object(i.b)([Object(o.g)()],a.prototype,"title",void 0),Object(i.b)([Object(o.g)()],a.prototype,"badgeIcon",void 0),Object(i.b)([Object(o.g)({type:Boolean,reflect:!0})],a.prototype,"clickable",void 0),a=Object(i.b)([Object(o.d)("integration-badge")],a);var l=n(18),d=n(112),h=n(13),p=n(308);let g=class extends o.a{connectedCallback(){super.connectedCallback(),this._unsubEvents=Object(p.h)(this.hass,t=>{this._discovered=t})}disconnectedCallback(){super.disconnectedCallback(),this._unsubEvents&&(this._unsubEvents(),this._unsubEvents=void 0)}render(){if(!this._entries||!this._discovered)return o.f``;const t=[...this._entries.map(t=>{const e=this.hass.localize(`component.${t.domain}.config.title`);return[e,o.f`
            <integration-badge
              .title=${e}
              icon="hass:check"
            ></integration-badge>
          `]}),...this._discovered.map(t=>{const e=Object(p.g)(this.hass.localize,t);return[e,o.f`
            <button .flowId=${t.flow_id} @click=${this._continueFlow}>
              <integration-badge
                clickable
                .title=${e}
                icon="hass:plus"
              ></integration-badge>
            </button>
          `]})].sort((t,e)=>Object(s.b)(t[0],e[0])).map(t=>t[1]);return o.f`
      <p>
        ${this.onboardingLocalize("ui.panel.page-onboarding.integration.intro")}
      </p>
      <div class="badges">
        ${t}
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
    `}firstUpdated(t){super.firstUpdated(t),Object(c.a)(),this._loadConfigEntries(),n.e(130).then(n.t.bind(null,667,7))}_createFlow(){Object(c.b)(this,{dialogClosedCallback:()=>{this._loadConfigEntries(),Object(p.e)(this.hass.connection).refresh()}})}_continueFlow(t){Object(c.b)(this,{continueFlowId:t.currentTarget.flowId,dialogClosedCallback:()=>{this._loadConfigEntries(),Object(p.e)(this.hass.connection).refresh()}})}async _loadConfigEntries(){const t=await Object(r.b)(this.hass);this._entries=t.filter(t=>"met"!==t.domain)}async _finish(){const t=await Object(d.c)(this.hass,{client_id:Object(h.f)()});Object(l.a)(this,"onboarding-step",{type:"integration",result:t})}static get styles(){return o.c`
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
    `}};Object(i.b)([Object(o.g)()],g.prototype,"hass",void 0),Object(i.b)([Object(o.g)()],g.prototype,"onboardingLocalize",void 0),Object(i.b)([Object(o.g)()],g.prototype,"_entries",void 0),Object(i.b)([Object(o.g)()],g.prototype,"_discovered",void 0),g=Object(i.b)([Object(o.d)("onboarding-integrations")],g)}}]);
//# sourceMappingURL=chunk.cc082678121e214a8e68.js.map