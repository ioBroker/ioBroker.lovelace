(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{710:function(t,e,s){"use strict";s.r(e);var i=s(5);s(445);const n=["zone"],a=(t,e)=>{if("call-service"!==e.action||!e.service_data||!e.service_data.entity_id)return;let s=e.service_data.entity_id;Array.isArray(s)||(s=[s]);for(const e of s)t.add(e)},r=(t,e)=>{"string"!=typeof e?(e.entity&&t.add(e.entity),e.camera_image&&t.add(e.camera_image),e.tap_action&&a(t,e.tap_action),e.hold_action&&a(t,e.hold_action)):t.add(e)},o=(t,e)=>{e.entity&&r(t,e.entity),e.entities&&e.entities.forEach(e=>r(t,e)),e.card&&o(t,e.card),e.cards&&e.cards.forEach(e=>o(t,e)),e.badges&&e.badges.forEach(e=>r(t,e))},c=(t,e)=>{const s=(t=>{const e=new Set;return t.views.forEach(t=>o(e,t)),e})(e);return Object.keys(t.states).filter(t=>!s.has(t)&&!n.includes(t.split(".",1)[0])).sort()};var d=s(343),h=s(172);s.d(e,"HuiUnusedEntities",function(){return _});class _ extends i.a{constructor(...t){super(...t),this._hass=void 0,this._config=void 0,this._elements=void 0}static get properties(){return{_hass:{},_config:{}}}set hass(t){if(this._hass=t,this._elements)for(const t of this._elements)t.hass=this._hass;else this._createElements()}setConfig(t){this._config=t,this._createElements()}render(){return this._config&&this._hass?i.e`
      ${this.renderStyle()}
      <div id="root">${this._elements}</div>
    `:i.e``}renderStyle(){return i.e`
      <style>
        #root {
          padding: 4px;
          display: flex;
          flex-wrap: wrap;
        }
        hui-entities-card {
          max-width: 400px;
          padding: 4px;
          flex: 1 auto;
        }
      </style>
    `}_createElements(){if(!this._hass)return;const t={};c(this._hass,this._config).forEach(e=>{const s=Object(h.a)(e);s in t||(t[s]=[]),t[s].push(e)}),this._elements=Object.keys(t).sort().map(e=>{const s=Object(d.a)({type:"entities",title:this._hass.localize(`domain.${e}`)||e,entities:t[e].map(t=>({entity:t,secondary_info:"entity-id"})),show_header_toggle:!1});return s.hass=this._hass,s})}}customElements.define("hui-unused-entities",_)}}]);