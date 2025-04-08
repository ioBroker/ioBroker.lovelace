export const __webpack_ids__=["305"];export const __webpack_modules__={75101:function(e,i,t){t.d(i,{DJ:()=>n,RQ:()=>o,iJ:()=>a,pB:()=>s});t(9359),t(56475),t(1331);const n=(e,i,t)=>{const n={type:"config_entries/subscribe"};return t&&t.type&&(n.type_filter=t.type),e.connection.subscribeMessage((e=>i(e)),n)},s=(e,i)=>{const t={};return i&&(i.type&&(t.type_filter=i.type),i.domain&&(t.domain=i.domain)),e.callWS({type:"config_entries/get",...t})},o=(e,i)=>e.callWS({type:"config_entries/get_single",entry_id:i}),a=(e,i)=>e.callApi("DELETE",`config/config_entries/entry/${i}`)},15681:function(e,i,t){t.d(i,{D4:()=>r,D7:()=>h,Ky:()=>a,V3:()=>p,XO:()=>d,d4:()=>l,oi:()=>c});var n=t(62212),s=t(22381);const o={"HA-Frontend-Base":`${location.protocol}//${location.host}`},a=(e,i,t)=>e.callApi("POST","config/config_entries/flow",{handler:i,show_advanced_options:Boolean(e.userData?.showAdvanced),entry_id:t},o),r=(e,i)=>e.callApi("GET",`config/config_entries/flow/${i}`,void 0,o),d=(e,i,t)=>e.callApi("POST",`config/config_entries/flow/${i}`,t,o),c=(e,i)=>e.callApi("DELETE",`config/config_entries/flow/${i}`),l=(e,i)=>e.callApi("GET","config/config_entries/flow_handlers"+(i?`?type=${i}`:"")),h=e=>e.sendMessagePromise({type:"config_entries/flow/progress"}),u=(e,i)=>e.subscribeEvents((0,s.D)((()=>h(e).then((e=>i.setState(e,!0)))),500,!0),"config_entry_discovered"),p=(e,i)=>{return(t=e.connection,(0,n._)(t,"_configFlowProgress",h,u)).subscribe(i);var t}},6736:function(e,i,t){t.d(i,{f:()=>a});var n=t(44249),s=t(72621),o=(t(9359),t(52924),t(15093));const a=e=>(0,n.Z)(null,(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,s.Z)(t,"connectedCallback",this,3)([]),this._checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,s.Z)(t,"disconnectedCallback",this,3)([]),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if((0,s.Z)(t,"updated",this,3)([e]),e.has("hass"))this._checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const i of e.keys())if(this.hassSubscribeRequiredHostProps.includes(i))return void this._checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"_checkSubscribed",value:function(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&!this.hassSubscribeRequiredHostProps?.some((e=>void 0===this[e]))&&(this.__unsubs=this.hassSubscribe())}}]}}),e)},69543:function(e,i,t){var n=t(44249),s=t(72621),o=(t(92745),t(9359),t(56475),t(31526),t(70104),t(92519),t(42179),t(89256),t(24931),t(88463),t(57449),t(19814),t(57243)),a=t(15093),r=t(72344),d=t(36522),c=t(1416),l=(t(59826),t(75101)),h=t(15681),u=t(57816);var p=t(6736),f=t(88238);(0,n.Z)([(0,a.Mo)("integration-badge")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,a.Cb)()],key:"domain",value:void 0},{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"title",value:void 0},{kind:"field",decorators:[(0,a.Cb)({attribute:"dark-optimized-icon",type:Boolean})],key:"darkOptimizedIcon",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({attribute:!1,type:Boolean,reflect:!0})],key:"clickable",value:()=>!1},{kind:"method",key:"render",value:function(){return o.dy` <div class="icon"> <img alt="" src="${(0,f.X1)({domain:this.domain,type:"icon",darkOptimized:this.darkOptimizedIcon})}" crossorigin="anonymous" referrerpolicy="no-referrer"> </div> <div class="title">${this.title}</div> `}},{kind:"field",static:!0,key:"styles",value:()=>o.iv`:host{display:inline-flex;flex-direction:column;text-align:center;color:var(--primary-text-color)}img{max-width:100%;max-height:100%}.icon{position:relative;margin:0 auto 8px;height:40px;width:40px;display:flex;align-items:center;justify-content:center}.title{min-height:2.3em;word-break:break-word}`}]}}),o.oi);var g=t(17409);const b=new Set(["google_translate","hassio","met","radio_browser","rpi_power","shopping_list","sun"]);(0,n.Z)([(0,a.Mo)("onboarding-integrations")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"onboardingLocalize",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_entries",value:()=>[]},{kind:"field",decorators:[(0,a.SB)()],key:"_discoveredDomains",value:void 0},{kind:"method",key:"hassSubscribe",value:function(){return[(0,h.V3)(this.hass,(e=>{this._discoveredDomains=new Set(e.filter((e=>!b.has(e.handler))).map((e=>e.handler))),this.hass.loadBackendTranslation("title",Array.from(this._discoveredDomains))})),(0,l.DJ)(this.hass,(e=>{let i=!1;const t=[],n=new Set;if(e.forEach((e=>{if(null===e.type||"added"===e.type){if(b.has(e.entry.domain))return;t.push(e.entry),n.add(e.entry.domain),null===e.type&&(i=!0)}else if("removed"===e.type)this._entries=this._entries.filter((i=>i.entry_id!==e.entry.entry_id));else if("updated"===e.type){if(b.has(e.entry.domain))return;const i=e.entry;this._entries=this._entries.map((e=>e.entry_id===i.entry_id?i:e))}})),!t.length&&!i)return;this.hass.loadBackendTranslation("title",Array.from(n));const s=i?[]:this._entries;this._entries=[...s,...t]}),{type:["device","hub","service"]})]}},{kind:"method",key:"render",value:function(){if(!this._discoveredDomains)return o.Ld;let e=new Set;this._entries.forEach((i=>{e.add(i.domain)})),e=new Set([...e,...this._discoveredDomains]);let i=[];for(const t of e.values())i.push([t,(0,u.Lh)(this.hass.localize,t)]);i=i.sort(((e,i)=>(0,c.$K)(e[0],i[0],this.hass.locale.language)));const t=i.length;return 0===t?o.dy` <div class="all-set-icon">🎉</div> <h1> ${this.onboardingLocalize("ui.panel.page-onboarding.integration.all_set")} </h1> <p> ${this.onboardingLocalize("ui.panel.page-onboarding.integration.lets_start")} </p> <div class="footer"> <ha-button unelevated @click="${this._finish}"> ${this.onboardingLocalize("ui.panel.page-onboarding.integration.finish")} </ha-button> </div> `:(i.length>12&&(i=i.slice(0,11)),o.dy` <h1> ${this.onboardingLocalize("ui.panel.page-onboarding.integration.header")} </h1> <p> ${this.onboardingLocalize("ui.panel.page-onboarding.integration.intro")} </p> <div class="badges"> ${i.map((([e,i])=>o.dy`<integration-badge .domain="${e}" .title="${i}" .darkOptimizedIcon="${this.hass.themes?.darkMode}"></integration-badge>`))} ${t>i.length?o.dy`<div class="more"> ${this.onboardingLocalize("ui.panel.page-onboarding.integration.more_integrations",{count:t-i.length})} </div>`:o.Ld} </div> <div class="footer"> <ha-button unelevated @click="${this._finish}"> ${this.onboardingLocalize("ui.panel.page-onboarding.integration.finish")} </ha-button> </div> `)}},{kind:"method",key:"firstUpdated",value:function(e){(0,s.Z)(t,"firstUpdated",this,3)([e]),this.hass.loadBackendTranslation("title"),this._scanUSBDevices()}},{kind:"method",key:"_scanUSBDevices",value:async function(){var e;(0,r.p)(this.hass,"usb")&&await(e=this.hass,e.callWS({type:"usb/scan"}))}},{kind:"method",key:"_finish",value:async function(){(0,d.B)(this,"onboarding-step",{type:"integration"})}},{kind:"get",static:!0,key:"styles",value:function(){return[g.I,o.iv`.badges{margin-top:24px;display:grid;grid-template-columns:repeat(auto-fill,minmax(106px,1fr));row-gap:24px}.more{display:flex;justify-content:center;align-items:center;height:100%}.all-set-icon{font-size:64px;text-align:center}`]}}]}}),(0,p.f)(o.oi))},88238:function(e,i,t){t.d(i,{X1:()=>n,u4:()=>s,zC:()=>o});const n=e=>`https://brands.home-assistant.io/${e.brand?"brands/":""}${e.useFallback?"_/":""}${e.domain}/${e.darkOptimized?"dark_":""}${e.type}.png`,s=e=>e.split("/")[4],o=e=>e.startsWith("https://brands.home-assistant.io/")}};
//# sourceMappingURL=305.857e7dda91a0f7f1.js.map