(self.webpackJsonp=self.webpackJsonp||[]).push([[27],{360:function(e,t,a){"use strict";a.r(t),a.d(t,"HuiEmptyStateCard",function(){return n});var s=a(3),c=a(0);a(177);let n=class extends c.a{getCardSize(){return 2}setConfig(e){}render(){return this.hass?c.e`
      <ha-card
        .header="${this.hass.localize("ui.panel.lovelace.cards.empty_state.title")}"
      >
        <div class="card-content">
          ${this.hass.localize("ui.panel.lovelace.cards.empty_state.no_devices")}
        </div>
        <div class="card-actions">
          <a href="/config/integrations">
            <mwc-button>
              ${this.hass.localize("ui.panel.lovelace.cards.empty_state.go_to_integrations_page")}
            </mwc-button>
          </a>
        </div>
      </header-card>
    `:c.e``}static get styles(){return c.c`
      .content {
        margin-top: -1em;
        padding: 16px;
      }

      .card-actions a {
        text-decoration: none;
      }

      mwc-button {
        margin-left: -8px;
      }
    `}};s.b([Object(c.f)()],n.prototype,"hass",void 0),n=s.b([Object(c.d)("hui-empty-state-card")],n)}}]);
//# sourceMappingURL=chunk.f116fbcef63c16b8c48c.js.map