(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[6169],{6169:(e,t,r)=>{"use strict";r.r(t);var s=r(15652),i=r(50467),o=r(99476);class n extends o.p{static async getConfigElement(){return await Promise.all([r.e(5009),r.e(2955),r.e(8161),r.e(9543),r.e(8374),r.e(9494),r.e(6051),r.e(3098),r.e(4618),r.e(9033),r.e(3300),r.e(3304),r.e(6087),r.e(6133),r.e(6321),r.e(4507),r.e(6966),r.e(1480),r.e(7482),r.e(7984),r.e(4535),r.e(8101),r.e(6902),r.e(8331),r.e(3902),r.e(167),r.e(2231),r.e(2979),r.e(3022),r.e(2382)]).then(r.bind(r,22382)),document.createElement("hui-grid-card-editor")}async getCardSize(){if(!this._cards||!this._config)return 0;if(this.square)return this._cards.length/this.columns*2;const e=[];for(const t of this._cards)e.push((0,i.N)(t));const t=await Promise.all(e);return Math.max(...t)*(this._cards.length/this.columns)}get columns(){var e;return(null===(e=this._config)||void 0===e?void 0:e.columns)||3}get square(){var e;return!1!==(null===(e=this._config)||void 0===e?void 0:e.square)}setConfig(e){super.setConfig(e),this.style.setProperty("--grid-card-column-count",String(this.columns)),this.toggleAttribute("square",this.square)}static get styles(){return[super.sharedStyles,s.iv`
        #root {
          display: grid;
          grid-template-columns: repeat(
            var(--grid-card-column-count, ${3}),
            minmax(0, 1fr)
          );
          grid-gap: var(--grid-card-gap, 8px);
        }
        :host([square]) #root {
          grid-auto-rows: 1fr;
        }
        :host([square]) #root::before {
          content: "";
          width: 0;
          padding-bottom: 100%;
          grid-row: 1 / 1;
          grid-column: 1 / 1;
        }

        :host([square]) #root > *:first-child {
          grid-row: 1 / 1;
          grid-column: 1 / 1;
        }
      `]}}customElements.define("hui-grid-card",n)}}]);
//# sourceMappingURL=chunk.0bd3ac6203de70b9c4cf.js.map