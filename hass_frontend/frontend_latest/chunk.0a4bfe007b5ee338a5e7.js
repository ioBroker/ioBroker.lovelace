(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{720:function(e,t,s){"use strict";s.r(t);var i=s(1);s(451);const n=["zone"],a=(e,t)=>{if("call-service"!==t.action||!t.service_data||!t.service_data.entity_id)return;let s=t.service_data.entity_id;Array.isArray(s)||(s=[s]);for(const i of s)e.add(i)},r=(e,t)=>{"string"!=typeof t?(t.entity&&e.add(t.entity),t.camera_image&&e.add(t.camera_image),t.tap_action&&a(e,t.tap_action),t.hold_action&&a(e,t.hold_action)):e.add(t)},o=(e,t)=>{t.entity&&r(e,t.entity),t.entities&&t.entities.forEach(t=>r(e,t)),t.card&&o(e,t.card),t.cards&&t.cards.forEach(t=>o(e,t)),t.elements&&t.elements.forEach(t=>o(e,t)),t.badges&&t.badges.forEach(t=>r(e,t))},c=(e,t)=>{const s=(e=>{const t=new Set;return e.views.forEach(e=>o(t,e)),t})(t);return Object.keys(e.states).filter(e=>!s.has(e)&&!n.includes(e.split(".",1)[0])).sort()};var d=s(348),h=s(173);function l(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.d(t,"HuiUnusedEntities",function(){return _});class _ extends i.a{constructor(...e){super(...e),l(this,"_hass",void 0),l(this,"_config",void 0),l(this,"_elements",void 0)}static get properties(){return{_hass:{},_config:{}}}set hass(e){if(this._hass=e,this._elements)for(const t of this._elements)t.hass=this._hass;else this._createElements()}setConfig(e){this._config=e,this._createElements()}render(){return this._config&&this._hass?i.e`
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
    `}_createElements(){if(!this._hass)return;const e={};c(this._hass,this._config).forEach(t=>{const s=Object(h.a)(t);s in e||(e[s]=[]),e[s].push(t)}),this._elements=Object.keys(e).sort().map(t=>{const s=Object(d.a)({type:"entities",title:this._hass.localize(`domain.${t}`)||t,entities:e[t].map(e=>({entity:e,secondary_info:"entity-id"})),show_header_toggle:!1});return s.hass=this._hass,s})}}customElements.define("hui-unused-entities",_)}}]);