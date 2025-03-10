export const __webpack_ids__=["16912"];export const __webpack_modules__={95975:function(t,e,i){i.a(t,(async function(t,e){try{var n=i(44249),a=i(72621),o=i(74760),s=i(57243),r=i(15093),c=i(94947),d=i(87733),l=t([c]);c=(l.then?(await l)():l)[0];(0,n.Z)([(0,r.Mo)("ha-relative-time")],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"datetime",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"capitalize",value:()=>!1},{kind:"field",key:"_interval",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)(i,"disconnectedCallback",this,3)([]),this._clearInterval()}},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)(i,"connectedCallback",this,3)([]),this.datetime&&this._startInterval()}},{kind:"method",key:"createRenderRoot",value:function(){return this}},{kind:"method",key:"firstUpdated",value:function(t){(0,a.Z)(i,"firstUpdated",this,3)([t]),this._updateRelative()}},{kind:"method",key:"update",value:function(t){(0,a.Z)(i,"update",this,3)([t]),this._updateRelative()}},{kind:"method",key:"_clearInterval",value:function(){this._interval&&(window.clearInterval(this._interval),this._interval=void 0)}},{kind:"method",key:"_startInterval",value:function(){this._clearInterval(),this._interval=window.setInterval((()=>this._updateRelative()),6e4)}},{kind:"method",key:"_updateRelative",value:function(){if(this.datetime){const t="string"==typeof this.datetime?(0,o.D)(this.datetime):this.datetime,e=(0,c.G)(t,this.hass.locale);this.innerHTML=this.capitalize?(0,d.f)(e):e}else this.innerHTML=this.hass.localize("ui.components.relative_time.never")}}]}}),s.fl);e()}catch(t){e(t)}}))},58968:function(t,e,i){i.d(e,{MV:()=>d,Wg:()=>r,Xk:()=>s,aT:()=>n,b_:()=>o,yP:()=>c});const n=(t,e)=>t.callApi("POST","tts_get_url",e),a="media-source://tts/",o=t=>t.startsWith(a),s=t=>t.substring(19),r=(t,e,i)=>t.callWS({type:"tts/engine/list",language:e,country:i}),c=(t,e)=>t.callWS({type:"tts/engine/get",engine_id:e}),d=(t,e,i)=>t.callWS({type:"tts/engine/voices",engine_id:e,language:i})},3967:function(t,e,i){i.d(e,{K:()=>l});var n=i(57243),a=i(45779),o=i(36522),s=i(48045),r=i(79291);class c extends HTMLElement{constructor(...t){super(...t),this.holdTime=500,this.timer=void 0,this.held=!1,this.cancelled=!1,this.dblClickTimeout=void 0}connectedCallback(){Object.assign(this.style,{position:"fixed",width:r.T?"100px":"50px",height:r.T?"100px":"50px",transform:"translate(-50%, -50%) scale(0)",pointerEvents:"none",zIndex:"999",background:"var(--primary-color)",display:null,opacity:"0.2",borderRadius:"50%",transition:"transform 180ms ease-in-out"}),["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{this.cancelled=!0,this.timer&&(this._stopAnimation(),clearTimeout(this.timer),this.timer=void 0)}),{passive:!0})}))}bind(t,e={}){t.actionHandler&&(0,s.v)(e,t.actionHandler.options)||(t.actionHandler?(t.removeEventListener("touchstart",t.actionHandler.start),t.removeEventListener("touchend",t.actionHandler.end),t.removeEventListener("touchcancel",t.actionHandler.end),t.removeEventListener("mousedown",t.actionHandler.start),t.removeEventListener("click",t.actionHandler.end),t.removeEventListener("keydown",t.actionHandler.handleKeyDown)):t.addEventListener("contextmenu",(t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1})),t.actionHandler={options:e},e.disabled||(t.actionHandler.start=t=>{let i,n;this.cancelled=!1,t.touches?(i=t.touches[0].clientX,n=t.touches[0].clientY):(i=t.clientX,n=t.clientY),e.hasHold&&(this.held=!1,this.timer=window.setTimeout((()=>{this._startAnimation(i,n),this.held=!0}),this.holdTime))},t.actionHandler.end=t=>{if("touchcancel"===t.type||"touchend"===t.type&&this.cancelled)return;const i=t.target;t.cancelable&&t.preventDefault(),e.hasHold&&(clearTimeout(this.timer),this._stopAnimation(),this.timer=void 0),e.hasHold&&this.held?(0,o.B)(i,"action",{action:"hold"}):e.hasDoubleClick?"click"===t.type&&t.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,(0,o.B)(i,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,(0,o.B)(i,"action",{action:"double_tap"})):(0,o.B)(i,"action",{action:"tap"})},t.actionHandler.handleKeyDown=t=>{["Enter"," "].includes(t.key)&&t.currentTarget.actionHandler.end(t)},t.addEventListener("touchstart",t.actionHandler.start,{passive:!0}),t.addEventListener("touchend",t.actionHandler.end),t.addEventListener("touchcancel",t.actionHandler.end),t.addEventListener("mousedown",t.actionHandler.start,{passive:!0}),t.addEventListener("click",t.actionHandler.end),t.addEventListener("keydown",t.actionHandler.handleKeyDown)))}_startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,transform:"translate(-50%, -50%) scale(1)"})}_stopAnimation(){Object.assign(this.style,{left:null,top:null,transform:"translate(-50%, -50%) scale(0)"})}}customElements.define("action-handler",c);const d=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler"))return t.querySelector("action-handler");const e=document.createElement("action-handler");return t.appendChild(e),e})();i&&i.bind(t,e)},l=(0,a.XM)(class extends a.Xe{update(t,[e]){return d(t.element,e),n.Jb}render(t){}})},5684:function(t,e,i){function n(t){return void 0!==t&&"none"!==t.action}function a(t){return!t.tap_action||n(t.tap_action)||n(t.hold_action)||n(t.double_tap_action)}i.d(e,{_:()=>n,q:()=>a})},93331:function(t,e,i){i.d(e,{G2:()=>r,SN:()=>a,Wh:()=>c});i(9359),i(52924);var n=i(29401);function a(t,e){if(e.has("_config"))return!0;if(!e.has("hass"))return!1;const i=e.get("hass");return!i||(i.connected!==t.hass.connected||i.themes!==t.hass.themes||i.locale!==t.hass.locale||i.localize!==t.hass.localize||i.formatEntityState!==t.hass.formatEntityState||i.formatEntityAttributeName!==t.hass.formatEntityAttributeName||i.formatEntityAttributeValue!==t.hass.formatEntityAttributeValue||i.config.state!==t.hass.config.state)}function o(t,e,i){return t.states[i]!==e.states[i]}function s(t,e,i){const n=t.entities[i],a=e.entities[i];return n?.display_precision!==a?.display_precision}function r(t,e){if(a(t,e))return!0;if(!e.has("hass"))return!1;const i=e.get("hass"),n=t.hass;return o(i,n,t._config.entity)||s(i,n,t._config.entity)}function c(t,e){if(a(t,e))return!0;if(!e.has("hass"))return!1;const i=e.get("hass"),r=t.hass;return(0,n.A)(t._config.entities,!1).some((t=>"entity"in t&&(o(i,r,t.entity)||s(i,r,t.entity))))}},8069:function(t,e,i){i.a(t,(async function(t,e){try{var n=i(44249),a=i(72621),o=i(57243),s=i(15093),r=i(35359),c=i(20552),d=i(73358),l=i(90122),h=i(73850),u=i(47194),f=i(5460),v=i(95975),p=i(3967),m=i(1617),y=i(5684),g=i(62577),_=t([f,v]);[f,v]=_.then?(await _)():_;(0,n.Z)([(0,s.Mo)("hui-generic-entity-row")],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"config",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:"secondary-text"})],key:"secondaryText",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:"hide-name",type:Boolean})],key:"hideName",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({attribute:"catch-interaction",type:Boolean})],key:"catchInteraction",value:void 0},{kind:"method",key:"render",value:function(){if(!this.hass||!this.config)return o.Ld;const t=this.config.entity?this.hass.states[this.config.entity]:void 0;if(!t)return o.dy` <hui-warning> ${(0,g.i)(this.hass,this.config.entity)} </hui-warning> `;const e=(0,h.M)(this.config.entity),i=(0,y.q)(this.config),n=this.secondaryText||this.config.secondary_info,a=this.config.name??(0,u.C)(t);return o.dy` <state-badge class="${(0,r.$)({pointer:i})}" .hass="${this.hass}" .stateObj="${t}" .overrideIcon="${this.config.icon}" .overrideImage="${this.config.image}" .stateColor="${this.config.state_color}" @action="${this._handleAction}" .actionHandler="${(0,p.K)({hasHold:(0,y._)(this.config.hold_action),hasDoubleClick:(0,y._)(this.config.double_tap_action)})}" tabindex="${(0,c.o)(!this.config.tap_action||(0,y._)(this.config.tap_action)?"0":void 0)}"></state-badge> ${this.hideName?o.Ld:o.dy`<div class="info ${(0,r.$)({pointer:i,"text-content":!n})}" @action="${this._handleAction}" .actionHandler="${(0,p.K)({hasHold:(0,y._)(this.config.hold_action),hasDoubleClick:(0,y._)(this.config.double_tap_action)})}" .title="${a}"> ${this.config.name||(0,u.C)(t)} ${n?o.dy` <div class="secondary"> ${this.secondaryText||("entity-id"===this.config.secondary_info?t.entity_id:"last-changed"===this.config.secondary_info?o.dy` <ha-relative-time .hass="${this.hass}" .datetime="${t.last_changed}" capitalize></ha-relative-time> `:"last-updated"===this.config.secondary_info?o.dy` <ha-relative-time .hass="${this.hass}" .datetime="${t.last_updated}" capitalize></ha-relative-time> `:"last-triggered"===this.config.secondary_info?t.attributes.last_triggered?o.dy` <ha-relative-time .hass="${this.hass}" .datetime="${t.attributes.last_triggered}" capitalize></ha-relative-time> `:this.hass.localize("ui.panel.lovelace.cards.entities.never_triggered"):"position"===this.config.secondary_info&&void 0!==t.attributes.current_position?`${this.hass.localize("ui.card.cover.position")}: ${t.attributes.current_position}`:"tilt-position"===this.config.secondary_info&&void 0!==t.attributes.current_tilt_position?`${this.hass.localize("ui.card.cover.tilt_position")}: ${t.attributes.current_tilt_position}`:"brightness"===this.config.secondary_info&&t.attributes.brightness?o.dy`${Math.round(t.attributes.brightness/255*100)} %`:"")} </div> `:""} </div>`} ${this.catchInteraction??!d.AF.includes(e)?o.dy`<div class="text-content value ${(0,r.$)({pointer:i})}" @action="${this._handleAction}" .actionHandler="${(0,p.K)({hasHold:(0,y._)(this.config.hold_action),hasDoubleClick:(0,y._)(this.config.double_tap_action)})}"> <div class="state"><slot></slot></div> </div>`:o.dy`<slot></slot>`} `}},{kind:"method",key:"updated",value:function(t){(0,a.Z)(i,"updated",this,3)([t]),(0,l.X)(this,"no-secondary",!this.secondaryText&&!this.config?.secondary_info)}},{kind:"method",key:"_handleAction",value:function(t){(0,m.G)(this,this.hass,this.config,t.detail.action)}},{kind:"field",static:!0,key:"styles",value:()=>o.iv`:host{display:flex;align-items:center;flex-direction:row}.info{padding-left:16px;padding-right:8px;padding-inline-start:16px;padding-inline-end:8px;flex:1 1 30%}.info,.info>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.flex ::slotted(*){margin-left:8px;margin-inline-start:8px;margin-inline-end:initial;min-width:0}.flex ::slotted([slot=secondary]){margin-left:0;margin-inline-start:0;margin-inline-end:initial}.secondary,ha-relative-time{color:var(--secondary-text-color)}state-badge{flex:0 0 40px}.pointer{cursor:pointer}.state{text-align:var(--float-end)}.value{direction:ltr}`}]}}),o.oi);e()}catch(t){e(t)}}))},62577:function(t,e,i){i.d(e,{i:()=>r});var n=i(44249),a=i(94277),o=i(57243),s=i(15093);i(99426);const r=(t,e)=>t.config.state!==a.UE?t.localize("ui.panel.lovelace.warning.entity_not_found",{entity:e||"[empty]"}):t.localize("ui.panel.lovelace.warning.starting");(0,n.Z)([(0,s.Mo)("hui-warning")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"method",key:"render",value:function(){return o.dy`<ha-alert alert-type="warning"><slot></slot></ha-alert> `}}]}}),o.oi)},79291:function(t,e,i){i.d(e,{T:()=>n});const n="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}};
//# sourceMappingURL=16912.033e0dbc19f35487.js.map