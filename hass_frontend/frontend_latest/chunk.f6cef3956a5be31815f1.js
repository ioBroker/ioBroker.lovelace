/*! For license information please see chunk.f6cef3956a5be31815f1.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[145],{177:function(e,t,a){"use strict";var s=a(4),i=a(0);class r extends i.a{static get styles(){return i.c`
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
    `}render(){return i.f`
      ${this.header?i.f`
            <div class="card-header">${this.header}</div>
          `:i.f``}
      <slot></slot>
    `}}Object(s.b)([Object(i.g)()],r.prototype,"header",void 0),customElements.define("ha-card",r)},187:function(e,t,a){"use strict";a(5),a(68),a(151);var s=a(6),i=a(3),r=a(126);const o=i.a`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer layer-1">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-2">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-3">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-4">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;o.setAttribute("strip-whitespace",""),Object(s.a)({_template:o,is:"paper-spinner",behaviors:[r.a]})},740:function(e,t,a){"use strict";a.r(t);var s=a(4),i=a(0),r=a(56);a(187),a(177);const o=e=>e.callWS({type:"system_health/info"}),c=(e,t)=>"homeassistant"===e?-1:"homeassistant"===t?1:e<t?-1:t<e?1:0;customElements.define("system-health-card",class extends i.a{static get properties(){return{hass:{},_info:{}}}render(){if(!this.hass)return;const e=[];if(this._info){const t=Object.keys(this._info).sort(c);for(const a of t){const t=[];for(const e of Object.keys(this._info[a]).sort())t.push(i.f`
            <tr>
              <td>${e}</td>
              <td>${this._info[a][e]}</td>
            </tr>
          `);"homeassistant"!==a&&e.push(i.f`
              <h3>${this.hass.localize(`domain.${a}`)||a}</h3>
            `),e.push(i.f`
          <table>
            ${t}
          </table>
        `)}}else e.push(i.f`
          <div class="loading-container">
            <paper-spinner active></paper-spinner>
          </div>
        `);return i.f`
      <ha-card header="System Health">
        <div class="card-content">${e}</div>
      </ha-card>
    `}firstUpdated(e){super.firstUpdated(e),this._fetchInfo()}async _fetchInfo(){try{if(!this.hass.config.components.includes("system_health"))throw new Error;this._info=await o(this.hass)}catch(e){this._info={system_health:{error:"System Health component is not loaded. Add 'system_health:' to configuration.yaml"}}}}static get styles(){return i.c`
      table {
        width: 100%;
      }

      td:first-child {
        width: 33%;
      }

      .loading-container {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}});const l="latest",n="20190918.0",d="states";class h extends i.a{render(){const e=this.hass,t=window.CUSTOM_UI_LIST||[],a=localStorage.defaultPage===d&&"states"===d?"/lovelace":"/states",s=localStorage.defaultPage===d&&"states"===d?"Go to the Lovelace UI":"Go to the states UI",r=`${localStorage.defaultPage===d?"Remove":"Set"} ${d} as default page on this device`;return i.f`
      <div class="about">
        <p class="version">
          <a href="https://embed.windy.com/embed2.html?lat=32.487&lon=-84.023&zoom=5&level=surface&overlay=rain&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=32.487&detailLon=--84.023&metricWind=default&metricTemp=default&radarRange=-1" target="_blank"
            ><img
              src="/static/icons/favicon-192x192.png"
              height="192"
              alt="ioBroker logo"
          /></a>
          <br />
          ioBroker<br />
          ${e.config.version}
        </p>
        <p>
          Path to configuration.yaml: ${e.config.config_dir}
        </p>
        <p class="develop">
          <a
            href="https://www.home-assistant.io/developers/credits/"
            target="_blank"
          >
            Developed by a bunch of awesome people.
          </a>
        </p>
        <p>
          Published under the Apache 2.0 license<br />
          Source:
          <a
            href="https://github.com/home-assistant/home-assistant"
            target="_blank"
            >server</a
          >
          &mdash;
          <a
            href="https://github.com/home-assistant/home-assistant-polymer"
            target="_blank"
            >frontend-ui</a
          >
        </p>
        <p>
          Built using
          <a href="https://www.python.org">Python 3</a>,
          <a href="https://www.polymer-project.org" target="_blank">Polymer</a>,
          Icons by
          <a href="https://www.google.com/design/icons/" target="_blank"
            >Google</a
          >
          and
          <a href="https://MaterialDesignIcons.com" target="_blank"
            >MaterialDesignIcons.com</a
          >.
        </p>
        <p>
          Frontend version: ${n} - ${l}
          ${t.length>0?i.f`
                <div>
                  Custom UIs:
                  ${t.map(e=>i.f`
                      <div>
                        <a href="${e.url}" target="_blank"> ${e.name}</a>:
                        ${e.version}
                      </div>
                    `)}
                </div>
              `:""}
        </p>
        <p>
          <a href="${a}">${s}</a><br />
          <mwc-button @click="${this._toggleDefaultPage}" raised>
            ${r}
          </mwc-button>
        </p>
      </div>
      <div class="content">
        <system-health-card .hass=${this.hass}></system-health-card>
      </div>
    `}firstUpdated(e){super.firstUpdated(e);const t=(window.CUSTOM_UI_LIST||[]).length;setTimeout(()=>{(window.CUSTOM_UI_LIST||[]).length!==t.length&&this.requestUpdate()},1e3)}_toggleDefaultPage(){localStorage.defaultPage===d?delete localStorage.defaultPage:localStorage.defaultPage=d,this.requestUpdate()}static get styles(){return[r.a,i.c`
        :host {
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
        }

        .content {
          direction: ltr;
        }

        .about {
          text-align: center;
          line-height: 2em;
        }

        .version {
          @apply --paper-font-headline;
        }

        .develop {
          @apply --paper-font-subhead;
        }

        .about a {
          color: var(--dark-primary-color);
        }

        system-health-card {
          display: block;
          max-width: 600px;
          margin: 0 auto;
          padding-bottom: 16px;
        }
      `]}}Object(s.b)([Object(i.g)()],h.prototype,"hass",void 0),customElements.define("developer-tools-info",h)}}]);
//# sourceMappingURL=chunk.f6cef3956a5be31815f1.js.map