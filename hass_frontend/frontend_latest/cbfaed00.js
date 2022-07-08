"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[89173],{89173:(t,a,s)=>{s.a(t,(async t=>{s.r(a);var r=s(37500),e=s(50467),i=s(99476),n=t([i]);i=(n.then?await n:n)[0];class o extends i.p{async getCardSize(){if(!this._cards)return 0;const t=[];for(const a of this._cards)t.push((0,e.N)(a));const a=await Promise.all(t);return Math.max(...a)}static get styles(){return[super.sharedStyles,r.iv`
        #root {
          display: flex;
          height: 100%;
        }
        #root > * {
          flex: 1 1 0;
          margin: var(
            --horizontal-stack-card-margin,
            var(--stack-card-margin, 0 4px)
          );
          min-width: 0;
        }
        #root > *:first-child {
          margin-left: 0;
        }
        #root > *:last-child {
          margin-right: 0;
        }
      `]}}customElements.define("hui-horizontal-stack-card",o)}))}}]);
//# sourceMappingURL=cbfaed00.js.map