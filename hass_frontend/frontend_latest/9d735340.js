"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[26136],{26136:(t,a,s)=>{s.a(t,(async t=>{s.r(a);var r=s(37500),e=s(50467),i=s(99476),n=t([i]);i=(n.then?await n:n)[0];class c extends i.p{async getCardSize(){if(!this._cards)return 0;const t=[];for(const a of this._cards)t.push((0,e.N)(a));return(await Promise.all(t)).reduce(((t,a)=>t+a),0)}static get styles(){return[super.sharedStyles,r.iv`
        #root {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        #root > * {
          margin: var(
            --vertical-stack-card-margin,
            var(--stack-card-margin, 4px 0)
          );
        }
        #root > *:first-child {
          margin-top: 0;
        }
        #root > *:last-child {
          margin-bottom: 0;
        }
      `]}}customElements.define("hui-vertical-stack-card",c)}))}}]);
//# sourceMappingURL=9d735340.js.map