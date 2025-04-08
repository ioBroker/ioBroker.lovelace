"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["53403"],{279:function(e,t,i){i.d(t,{Qc:()=>c,Xr:()=>o,zJ:()=>d});i(19083),i(71695),i(9359),i(31526),i(92519),i(42179),i(89256),i(24931),i(88463),i(57449),i(19814),i(47021);const a=["zone","persistent_notification"],s=(e,t)=>{var i,a,s,r,n,d,o,c;if(!("call-service"===t.action&&(null!==(i=t.target)&&void 0!==i&&i.entity_id||null!==(a=t.service_data)&&void 0!==a&&a.entity_id||null!==(s=t.data)&&void 0!==s&&s.entity_id)))return;let l=null!==(r=null!==(n=null===(d=t.service_data)||void 0===d?void 0:d.entity_id)&&void 0!==n?n:null===(o=t.data)||void 0===o?void 0:o.entity_id)&&void 0!==r?r:null===(c=t.target)||void 0===c?void 0:c.entity_id;Array.isArray(l)||(l=[l]);for(const h of l)e.add(h)},r=(e,t)=>{t&&("string"!=typeof t?(t.entity&&e.add(t.entity),t.camera_image&&e.add(t.camera_image),t.tap_action&&s(e,t.tap_action),t.hold_action&&s(e,t.hold_action)):e.add(t))},n=(e,t)=>{t.entity&&r(e,t.entity),t.entities&&Array.isArray(t.entities)&&t.entities.forEach((t=>r(e,t))),t.card&&n(e,t.card),t.cards&&Array.isArray(t.cards)&&t.cards.forEach((t=>n(e,t))),t.elements&&Array.isArray(t.elements)&&t.elements.forEach((t=>n(e,t))),t.badges&&Array.isArray(t.badges)&&t.badges.forEach((t=>r(e,t))),t.sections&&Array.isArray(t.sections)&&t.sections.forEach((t=>n(e,t)))},d=e=>{const t=new Set;return e.views.forEach((e=>{n(t,e)})),t},o=(e,t)=>{const i=new Set;for(const s of Object.keys(e.states))t.has(s)||a.includes(s.split(".",1)[0])||i.add(s);return i},c=(e,t)=>{const i=d(t);return o(e,i)}},3054:function(e,t,i){i.a(e,(async function(e,t){try{var a=i(61701),s=(i(63721),i(19083),i(71695),i(61893),i(9359),i(56475),i(70104),i(19423),i(40251),i(19134),i(61006),i(47706),i(47021),i(41298)),r=i(57243),n=i(50778),d=i(35359),o=i(69634),c=i(94571),l=i(27486),h=i(68958),p=i(36522),u=i(1416),y=i(17170),v=(i(36841),i(96194)),m=i(17951),g=i(279),f=i(62037),k=i(32817),_=i(33873),w=e([y,f,k]);[y,f,k]=w.then?(await w)():w;let b,E,C,x,$,z,S,A,R,L,j,B,O=e=>e;(0,a.Z)([(0,n.Mo)("hui-card-picker")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"suggestedCards",value:void 0},{kind:"field",decorators:[(0,h.t)({key:"dashboardCardClipboard",state:!0,subscribe:!0,storage:"sessionStorage"})],key:"_clipboard",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_cards",value(){return[]}},{kind:"field",key:"lovelace",value:void 0},{kind:"field",key:"cardPicked",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_filter",value(){return""}},{kind:"field",decorators:[(0,n.SB)()],key:"_width",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_height",value:void 0},{kind:"field",key:"_unusedEntities",value:void 0},{kind:"field",key:"_usedEntities",value:void 0},{kind:"method",key:"focus",value:async function(){const e=this.renderRoot.querySelector("search-input");e?e.focus():(await this.updateComplete,this.focus())}},{kind:"field",key:"_filterCards",value(){return(0,l.Z)(((e,t)=>{if(!t)return e;let i=e.map((e=>e.card));const a={keys:["type","name","description"],isCaseSensitive:!1,minMatchCharLength:Math.min(t.length,2),threshold:.2,ignoreDiacritics:!0},r=new s.Z(i,a);return i=r.search(t).map((e=>e.item)),e.filter((e=>i.includes(e.card)))}))}},{kind:"field",key:"_suggestedCards",value(){return(0,l.Z)((e=>e.filter((e=>e.card.isSuggested))))}},{kind:"field",key:"_customCards",value(){return(0,l.Z)((e=>e.filter((e=>e.card.isCustom&&!e.card.isSuggested))))}},{kind:"field",key:"_otherCards",value(){return(0,l.Z)((e=>e.filter((e=>!e.card.isSuggested&&!e.card.isCustom))))}},{kind:"method",key:"render",value:function(){if(!(this.hass&&this.lovelace&&this._unusedEntities&&this._usedEntities))return r.Ld;const e=this._suggestedCards(this._cards),t=this._otherCards(this._cards),i=this._customCards(this._cards);return(0,r.dy)(b||(b=O` <search-input .hass="${0}" .filter="${0}" @value-changed="${0}" .label="${0}"></search-input> <div id="content" style="${0}"> ${0} <div class="cards-container"> <div class="card manual" @click="${0}" .config="${0}"> <div class="card-header"> ${0} </div> <div class="preview description"> ${0} </div> <ha-ripple></ha-ripple> </div> </div> </div> `),this.hass,this._filter,this._handleSearchChange,this.hass.localize("ui.panel.lovelace.editor.edit_card.search_cards"),(0,o.V)({width:this._width?`${this._width}px`:"auto",height:this._height?`${this._height}px`:"auto"}),this._filter?(0,r.dy)(E||(E=O`<div class="cards-container"> ${0} </div>`),this._filterCards(this._cards,this._filter).map((e=>e.element))):(0,r.dy)(C||(C=O` <div class="cards-container"> ${0} ${0} ${0} </div> <div class="cards-container"> ${0} ${0} </div> <div class="cards-container"> ${0} ${0} </div> `),e.length>0?(0,r.dy)(x||(x=O` <div class="cards-container-header"> ${0} </div> `),this.hass.localize("ui.panel.lovelace.editor.card.generic.suggested_cards")):r.Ld,this._renderClipboardCard(),e.map((e=>e.element)),e.length>0?(0,r.dy)($||($=O` <div class="cards-container-header"> ${0} </div> `),this.hass.localize("ui.panel.lovelace.editor.card.generic.other_cards")):r.Ld,t.map((e=>e.element)),i.length>0?(0,r.dy)(z||(z=O` <div class="cards-container-header"> ${0} </div> `),this.hass.localize("ui.panel.lovelace.editor.card.generic.custom_cards")):r.Ld,i.map((e=>e.element))),this._cardPicked,{type:""},this.hass.localize("ui.panel.lovelace.editor.card.generic.manual"),this.hass.localize("ui.panel.lovelace.editor.card.generic.manual_description"))}},{kind:"method",key:"shouldUpdate",value:function(e){const t=e.get("hass");return!t||t.locale!==this.hass.locale}},{kind:"method",key:"firstUpdated",value:function(){if(!this.hass||!this.lovelace)return;const e=(0,g.zJ)(this.lovelace),t=(0,g.Xr)(this.hass,e);this._usedEntities=[...e].filter((e=>this.hass.states[e]&&!(0,v.rk)(this.hass.states[e].state))),this._unusedEntities=[...t].filter((e=>this.hass.states[e]&&!(0,v.rk)(this.hass.states[e].state))),this._loadCards()}},{kind:"method",key:"_loadCards",value:function(){let e=_.C.map((e=>{var t;return Object.assign({name:this.hass.localize(`ui.panel.lovelace.editor.card.${e.type}.name`),description:this.hass.localize(`ui.panel.lovelace.editor.card.${e.type}.description`),isSuggested:(null===(t=this.suggestedCards)||void 0===t?void 0:t.includes(e.type))||!1},e)}));e=e.sort(((e,t)=>{var i;return e.isSuggested&&!t.isSuggested?-1:!e.isSuggested&&t.isSuggested?1:(0,u.$K)(e.name||e.type,t.name||t.type,null===(i=this.hass)||void 0===i?void 0:i.language)})),m.kb.length>0&&(e=e.concat(m.kb.map((e=>({type:e.type,name:e.name,description:e.description,showElement:e.preview,isCustom:!0}))).sort(((e,t)=>{var i;return(0,u.$K)(e.name||e.type,t.name||t.type,null===(i=this.hass)||void 0===i?void 0:i.language)})))),this._cards=e.map((e=>({card:e,element:(0,r.dy)(S||(S=O`${0}`),(0,c.C)(this._renderCardElement(e),(0,r.dy)(A||(A=O` <div class="card spinner"> <ha-spinner></ha-spinner> </div> `))))})))}},{kind:"method",key:"_renderClipboardCard",value:function(){return this._clipboard?(0,r.dy)(R||(R=O` ${0}`),(0,c.C)(this._renderCardElement({type:this._clipboard.type,showElement:!0,isCustom:!1,name:this.hass.localize("ui.panel.lovelace.editor.card.generic.paste"),description:`${this.hass.localize("ui.panel.lovelace.editor.card.generic.paste_description",{type:this._clipboard.type})}`},this._clipboard),(0,r.dy)(L||(L=O` <div class="card spinner"> <ha-spinner></ha-spinner> </div> `)))):r.Ld}},{kind:"method",key:"_handleSearchChange",value:function(e){const t=e.detail.value;if(t){if(!this._width||!this._height){const e=this.shadowRoot.getElementById("content");if(e&&!this._width){const t=e.clientWidth;t&&(this._width=t)}if(e&&!this._height){const t=e.clientHeight;t&&(this._height=t)}}}else this._width=void 0,this._height=void 0;this._filter=t}},{kind:"method",key:"_cardPicked",value:function(e){const t=e.currentTarget.config;(0,p.B)(this,"config-changed",{config:t})}},{kind:"method",key:"_tryCreateCardElement",value:function(e){const t=(0,f.l$)(e);return t.hass=this.hass,t.addEventListener("ll-rebuild",(i=>{i.stopPropagation(),this._rebuildCard(t,e)}),{once:!0}),t}},{kind:"method",key:"_rebuildCard",value:function(e,t){let i;try{i=this._tryCreateCardElement(t)}catch(a){return}e.parentElement&&e.parentElement.replaceChild(i,e)}},{kind:"method",key:"_renderCardElement",value:async function(e,t){let{type:i}=e;const{showElement:a,isCustom:s,name:n,description:o}=e,c=s?(0,m.cs)(i):void 0;let l;s&&(i=`${m.Qo}${i}`);let h=null!=t?t:{type:i};if(this.hass&&this.lovelace&&(t||(h=await(0,k.U)(this.hass,i,this._unusedEntities,this._usedEntities)),a))try{l=this._tryCreateCardElement(h)}catch(p){l=void 0}return l&&(l.tabIndex=-1),(0,r.dy)(j||(j=O` <div class="card" tabindex="0"> <div class="overlay" @click="${0}" .config="${0}"></div> <div class="card-header"> ${0} </div> <div class="preview ${0}"> ${0} </div> <ha-ripple></ha-ripple> </div> `),this._cardPicked,h,c?c.name||c.type:n,(0,d.$)({description:!l||"HUI-ERROR-CARD"===l.tagName}),l&&"HUI-ERROR-CARD"!==l.tagName?l:c?c.description||this.hass.localize("ui.panel.lovelace.editor.cardpicker.no_description"):o)}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,r.iv)(B||(B=O`search-input{display:block;--mdc-shape-small:var(--card-picker-search-shape);margin:var(--card-picker-search-margin);position:sticky;top:0;z-index:10;background-color:var(--ha-dialog-surface-background,var(--mdc-theme-surface,#fff))}.cards-container-header{font-size:16px;font-weight:500;padding:12px 8px;margin:0;grid-column:1/-1;position:sticky;top:56px;z-index:1;background:linear-gradient(90deg,var(--ha-dialog-surface-background,var(--mdc-theme-surface,#fff)) 0%,#ffffff00 80%)}.cards-container{display:grid;grid-gap:8px 8px;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));margin-top:20px}.card{height:100%;max-width:500px;display:flex;flex-direction:column;border-radius:var(--ha-card-border-radius,12px);background:var(--primary-background-color,#fafafa);cursor:pointer;position:relative;overflow:hidden;border:var(--ha-card-border-width,1px) solid var(--ha-card-border-color,var(--divider-color))}.card-header{color:var(--ha-card-header-color,var(--primary-text-color));font-family:var(--ha-card-header-font-family, inherit);font-size:16px;font-weight:700;letter-spacing:-.012em;line-height:20px;padding:12px 16px;display:block;text-align:center}.preview{pointer-events:none;margin:20px;flex-grow:1;display:flex;align-items:center;justify-content:center}.preview>:first-child{display:block;width:100%}.description{text-align:center}.spinner{align-items:center;justify-content:center}.overlay{position:absolute;width:100%;height:100%;z-index:1;box-sizing:border-box;border-radius:var(--ha-card-border-radius,12px)}.manual{max-width:none;grid-column:1/-1}.icon{position:absolute;top:8px;right:8px inset-inline-start: 8px;inset-inline-end:8px;border-radius:50%;--mdc-icon-size:16px;line-height:16px;box-sizing:border-box;color:var(--text-primary-color);padding:4px}.icon.custom{background:var(--warning-color)}`))]}}]}}),r.oi);t()}catch(b){t(b)}}))},32817:function(e,t,i){i.a(e,(async function(e,a){try{i.d(t,{U:()=>n});i(19423),i(40251);var s=i(62037),r=e([s]);s=(r.then?(await r)():r)[0];const n=async(e,t,i,a)=>{let r={type:t};const n=await(0,s.Do)(t);if(n&&n.getStubConfig){const t=await n.getStubConfig(e,i,a);r=Object.assign(Object.assign({},r),t)}return r};a()}catch(n){a(n)}}))},33873:function(e,t,i){i.d(t,{C:()=>a});const a=[{type:"alarm-panel",showElement:!0},{type:"button",showElement:!0},{type:"calendar",showElement:!0},{type:"clock",showElement:!0},{type:"entities",showElement:!0},{type:"entity",showElement:!0},{type:"gauge",showElement:!0},{type:"glance",showElement:!0},{type:"history-graph",showElement:!0},{type:"statistics-graph",showElement:!1},{type:"statistic",showElement:!0},{type:"humidifier",showElement:!0},{type:"light",showElement:!0},{type:"map",showElement:!0},{type:"markdown",showElement:!0},{type:"media-control",showElement:!0},{type:"picture",showElement:!0},{type:"picture-elements",showElement:!0},{type:"picture-entity",showElement:!0},{type:"picture-glance",showElement:!0},{type:"plant-status",showElement:!0},{type:"sensor",showElement:!0},{type:"thermostat",showElement:!0},{type:"weather-forecast",showElement:!0},{type:"area",showElement:!0},{type:"tile",showElement:!0},{type:"conditional"},{type:"entity-filter"},{type:"grid"},{type:"horizontal-stack"},{type:"iframe"},{type:"logbook"},{type:"vertical-stack"},{type:"todo-list"},{type:"heading",showElement:!0}]}}]);
//# sourceMappingURL=53403.e4a9b8b10914b117.js.map