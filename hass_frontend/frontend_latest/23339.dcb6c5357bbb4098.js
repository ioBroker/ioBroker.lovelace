export const __webpack_ids__=["23339"];export const __webpack_modules__={72099:function(t,i,e){e.d(i,{U:()=>n});const n=t=>`/api/image_proxy/${t.entity_id}?token=${t.attributes.access_token}&state=${t.state}`},69773:function(t,i,e){e.r(i),e.d(i,{HuiPictureCard:()=>y});var n=e(44249),a=e(72621),o=e(57243),s=e(15093),c=e(35359),h=e(20552),r=e(82393),_=e(73850),d=(e(54977),e(72099)),g=e(3967),u=e(1617),f=e(5684),l=e(93331),m=e(62577);let y=(0,n.Z)([(0,s.Mo)("hui-picture-card")],(function(t,i){class n extends i{constructor(...i){super(...i),t(this)}}return{F:n,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([e.e("46379"),e.e("24199"),e.e("41258"),e.e("27506"),e.e("99287"),e.e("78823"),e.e("85567"),e.e("87471"),e.e("51995")]).then(e.bind(e,82634)),document.createElement("hui-picture-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(){return{type:"picture",image:"https://demo.home-assistant.io/stub_config/t-shirt-promo.png"}}},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 5}},{kind:"method",key:"setConfig",value:function(t){if(!t||!t.image&&!t.image_entity)throw new Error("Image required");this._config={tap_action:{action:"more-info"},...t}}},{kind:"method",key:"shouldUpdate",value:function(t){if(!this._config||(0,l.SN)(this,t))return!0;if(this._config.image_entity&&t.has("hass")){const i=t.get("hass");if(!i||i.states[this._config.image_entity]!==this.hass.states[this._config.image_entity])return!0}return!1}},{kind:"method",key:"updated",value:function(t){if((0,a.Z)(n,"updated",this,3)([t]),!this._config||!this.hass)return;const i=t.get("hass"),e=t.get("_config");i&&e&&i.themes===this.hass.themes&&e.theme===this._config.theme||(0,r.R)(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return o.Ld;let t;if(this._config.image_entity&&(t=this.hass.states[this._config.image_entity],!t))return o.dy`<hui-warning> ${(0,m.i)(this.hass,this._config.image_entity)} </hui-warning>`;let i=this._config.image;if(this._config.image_entity){switch((0,_.M)(this._config.image_entity)){case"image":i=(0,d.U)(t);break;case"person":t.attributes.entity_picture&&(i=t.attributes.entity_picture)}}return o.dy` <ha-card @action="${this._handleAction}" .actionHandler="${(0,g.K)({hasHold:(0,f._)(this._config.hold_action),hasDoubleClick:(0,f._)(this._config.double_tap_action)})}" tabindex="${(0,h.o)((0,f._)(this._config.tap_action)||this._config.image_entity?"0":void 0)}" class="${(0,c.$)({clickable:Boolean(this._config.image_entity&&!this._config.tap_action||this._config.tap_action&&"none"!==this._config.tap_action.action||this._config.hold_action&&"none"!==this._config.hold_action.action||this._config.double_tap_action&&"none"!==this._config.double_tap_action.action)})}"> <img alt="${(0,h.o)(this._config.alt_text||t?.attributes.friendly_name)}" src="${this.hass.hassUrl(i)}"> </ha-card> `}},{kind:"field",static:!0,key:"styles",value:()=>o.iv`ha-card{overflow:hidden;height:100%}ha-card.clickable{cursor:pointer}img{display:block;width:100%}`},{kind:"method",key:"_handleAction",value:function(t){(0,u.G)(this,this.hass,this._config,t.detail.action)}}]}}),o.oi)}};
//# sourceMappingURL=23339.dcb6c5357bbb4098.js.map