/*! For license information please see 69642.5e08cfde957b5fa8.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["69642"],{20130:function(e,t,n){var i=n(61701),a=n(72621),s=(n(71695),n(47021),n(39785)),o=n(52876),r=n(50778),c=n(57243),l=n(5111);let d,u,h,f=e=>e;(0,i.Z)([(0,r.Mo)("ha-fab")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"method",key:"firstUpdated",value:function(e){(0,a.Z)(n,"firstUpdated",this,3)([e]),this.style.setProperty("--mdc-theme-secondary","var(--primary-color)")}},{kind:"field",static:!0,key:"styles",value(){return[o.W,(0,c.iv)(d||(d=f`:host .mdc-fab--extended .mdc-fab__icon{margin-inline-start:-8px;margin-inline-end:12px;direction:var(--direction)}:disabled{--mdc-theme-secondary:var(--disabled-text-color);pointer-events:none}`)),"rtl"===l.E.document.dir?(0,c.iv)(u||(u=f`:host .mdc-fab--extended .mdc-fab__icon{direction:rtl}`)):(0,c.iv)(h||(h=f``))]}}]}}),s._)},279:function(e,t,n){n.d(t,{Qc:()=>l,Xr:()=>c,zJ:()=>r});n(19083),n(71695),n(9359),n(31526),n(92519),n(42179),n(89256),n(24931),n(88463),n(57449),n(19814),n(47021);const i=["zone","persistent_notification"],a=(e,t)=>{var n,i,a,s,o,r,c,l;if(!("call-service"===t.action&&(null!==(n=t.target)&&void 0!==n&&n.entity_id||null!==(i=t.service_data)&&void 0!==i&&i.entity_id||null!==(a=t.data)&&void 0!==a&&a.entity_id)))return;let d=null!==(s=null!==(o=null===(r=t.service_data)||void 0===r?void 0:r.entity_id)&&void 0!==o?o:null===(c=t.data)||void 0===c?void 0:c.entity_id)&&void 0!==s?s:null===(l=t.target)||void 0===l?void 0:l.entity_id;Array.isArray(d)||(d=[d]);for(const u of d)e.add(u)},s=(e,t)=>{t&&("string"!=typeof t?(t.entity&&e.add(t.entity),t.camera_image&&e.add(t.camera_image),t.tap_action&&a(e,t.tap_action),t.hold_action&&a(e,t.hold_action)):e.add(t))},o=(e,t)=>{t.entity&&s(e,t.entity),t.entities&&Array.isArray(t.entities)&&t.entities.forEach((t=>s(e,t))),t.card&&o(e,t.card),t.cards&&Array.isArray(t.cards)&&t.cards.forEach((t=>o(e,t))),t.elements&&Array.isArray(t.elements)&&t.elements.forEach((t=>o(e,t))),t.badges&&Array.isArray(t.badges)&&t.badges.forEach((t=>s(e,t))),t.sections&&Array.isArray(t.sections)&&t.sections.forEach((t=>o(e,t)))},r=e=>{const t=new Set;return e.views.forEach((e=>{o(t,e)})),t},c=(e,t)=>{const n=new Set;for(const a of Object.keys(e.states))t.has(a)||i.includes(a.split(".",1)[0])||n.add(a);return n},l=(e,t)=>{const n=r(t);return c(e,n)}},53380:function(e,t,n){n.d(t,{f:()=>s});n(71695),n(40251),n(47021);var i=n(36522);const a=()=>Promise.all([n.e("35671"),n.e("2142"),n.e("29570"),n.e("65505"),n.e("8795"),n.e("71588"),n.e("92139"),n.e("32146"),n.e("31241"),n.e("47399"),n.e("68581"),n.e("63055"),n.e("70147"),n.e("44251"),n.e("65005"),n.e("60487"),n.e("1466"),n.e("38326"),n.e("80809"),n.e("70639"),n.e("92368"),n.e("39043"),n.e("37457"),n.e("80312"),n.e("96827")]).then(n.bind(n,22958)),s=(e,t)=>{(0,i.B)(e,"show-dialog",{dialogTag:"hui-dialog-suggest-card",dialogImport:a,dialogParams:t})}},74941:function(e,t,n){n.d(t,{i:()=>a});n(71695),n(40251),n(47021);var i=n(36522);const a=(e,t)=>{(0,i.B)(e,"show-dialog",{dialogTag:"hui-dialog-select-view",dialogImport:()=>Promise.all([n.e("97983"),n.e("41258"),n.e("35671"),n.e("7010"),n.e("5851")]).then(n.bind(n,67271)),dialogParams:t})}},39507:function(e,t,n){n.a(e,(async function(e,i){try{n.r(t),n.d(t,{HuiUnusedEntities:()=>w});var a=n(61701),s=n(72621),o=(n(71695),n(61893),n(9359),n(70104),n(47021),n(57243)),r=n(50778),c=n(35359),l=n(73850),d=n(47194),u=(n(20130),n(37583),n(279)),h=n(71971),f=n(53380),v=n(74941),g=n(20526),p=e([h]);h=(p.then?(await p)():p)[0];let y,m,b,k,_=e=>e;const E="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";let w=(0,a.Z)([(0,r.Mo)("hui-unused-entities")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"lovelace",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"narrow",value(){return!1}},{kind:"field",decorators:[(0,r.SB)()],key:"_unusedEntities",value(){return[]}},{kind:"field",decorators:[(0,r.SB)()],key:"_selectedEntities",value(){return[]}},{kind:"get",key:"_config",value:function(){return this.lovelace.config}},{kind:"method",key:"updated",value:function(e){(0,s.Z)(n,"updated",this,3)([e]),e.has("lovelace")&&this._getUnusedEntities()}},{kind:"method",key:"render",value:function(){return this.hass&&this.lovelace?"storage"===this.lovelace.mode&&!1===this.lovelace.editMode?o.Ld:(0,o.dy)(y||(y=_` <div class="container"> ${0} <hui-entity-picker-table .hass="${0}" .narrow="${0}" .entities="${0}" @selected-changed="${0}"></hui-entity-picker-table> </div> <div class="fab ${0}"> <ha-fab .label="${0}" extended @click="${0}"> <ha-svg-icon slot="icon" .path="${0}"></ha-svg-icon> </ha-fab> </div> `),this.narrow?"":(0,o.dy)(m||(m=_` <ha-card header="${0}"> <div class="card-content"> ${0} ${0} </div> </ha-card> `),this.hass.localize("ui.panel.lovelace.unused_entities.title"),this.hass.localize("ui.panel.lovelace.unused_entities.available_entities"),"storage"===this.lovelace.mode?(0,o.dy)(b||(b=_` <br>${0} `),this.hass.localize("ui.panel.lovelace.unused_entities.select_to_add")):""),this.hass,this.narrow,this._unusedEntities.map((e=>{const t=this.hass.states[e];return{icon:"",entity_id:e,stateObj:t,name:t?(0,d.C)(t):"Unavailable",domain:(0,l.M)(e),last_changed:null==t?void 0:t.last_changed}})),this._handleSelectedChanged,(0,c.$)({selected:this._selectedEntities.length}),this.hass.localize("ui.panel.lovelace.editor.edit_card.add"),this._addToLovelaceView,E):o.Ld}},{kind:"method",key:"_getUnusedEntities",value:function(){if(!this.hass||!this.lovelace)return;this._selectedEntities=[];const e=(0,u.Qc)(this.hass,this._config);this._unusedEntities=[...e].sort()}},{kind:"method",key:"_handleSelectedChanged",value:function(e){this._selectedEntities=e.detail.selectedEntities}},{kind:"method",key:"_addToLovelaceView",value:function(){const e=(0,g.VG)(this.hass.states,this._selectedEntities,{}),t=(0,g.lY)(this._selectedEntities,{});1!==this.lovelace.config.views.length?(0,v.i)(this,{lovelaceConfig:this.lovelace.config,allowDashboardChange:!1,viewSelectedCallback:(n,i,a)=>{(0,f.f)(this,{lovelaceConfig:this.lovelace.config,saveConfig:this.lovelace.saveConfig,path:[a],entities:this._selectedEntities,cardConfig:e,sectionConfig:t})}}):(0,f.f)(this,{lovelaceConfig:this.lovelace.config,saveConfig:this.lovelace.saveConfig,path:[0],entities:this._selectedEntities,cardConfig:e,sectionConfig:t})}},{kind:"field",static:!0,key:"styles",value(){return(0,o.iv)(k||(k=_`:host{overflow:hidden}.container{display:flex;flex-direction:column;height:100%}ha-card{--ha-card-box-shadow:none;--ha-card-border-radius:0}hui-entity-picker-table{flex-grow:1}.fab{position:sticky;float:var(--float-end);right:calc(16px + env(safe-area-inset-right));bottom:calc(16px + env(safe-area-inset-bottom));inset-inline-end:calc(16px + env(safe-area-inset-right));inset-inline-start:initial;z-index:1}ha-fab{position:relative;bottom:calc(-80px - env(safe-area-inset-bottom));transition:bottom .3s}.fab.selected ha-fab{bottom:0}`))}}]}}),o.oi);i()}catch(y){i(y)}}))},75351:function(e,t,n){n.d(t,{Ud:()=>h});n(63721),n(52247),n(71695),n(52805),n(43451),n(9359),n(70104),n(48136),n(19423),n(40251),n(69235),n(12385),n(19134),n(5740),n(11740),n(46692),n(47021);const i=Symbol("Comlink.proxy"),a=Symbol("Comlink.endpoint"),s=Symbol("Comlink.releaseProxy"),o=Symbol("Comlink.finalizer"),r=Symbol("Comlink.thrown"),c=e=>"object"==typeof e&&null!==e||"function"==typeof e,l=new Map([["proxy",{canHandle:e=>c(e)&&e[i],serialize(e){const{port1:t,port2:n}=new MessageChannel;return d(e,t),[n,[n]]},deserialize(e){return e.start(),h(e)}}],["throw",{canHandle:e=>c(e)&&r in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function d(e,t=globalThis,n=["*"]){t.addEventListener("message",(function a(s){if(!s||!s.data)return;if(!function(e,t){for(const n of e){if(t===n||"*"===n)return!0;if(n instanceof RegExp&&n.test(t))return!0}return!1}(n,s.origin))return void console.warn(`Invalid origin '${s.origin}' for comlink proxy`);const{id:c,type:l,path:h}=Object.assign({path:[]},s.data),f=(s.data.argumentList||[]).map(_);let v;try{const t=h.slice(0,-1).reduce(((e,t)=>e[t]),e),n=h.reduce(((e,t)=>e[t]),e);switch(l){case"GET":v=n;break;case"SET":t[h.slice(-1)[0]]=_(s.data.value),v=!0;break;case"APPLY":v=n.apply(t,f);break;case"CONSTRUCT":v=function(e){return Object.assign(e,{[i]:!0})}(new n(...f));break;case"ENDPOINT":{const{port1:t,port2:n}=new MessageChannel;d(e,n),v=function(e,t){return b.set(e,t),e}(t,[t])}break;case"RELEASE":v=void 0;break;default:return}}catch(g){v={value:g,[r]:0}}Promise.resolve(v).catch((e=>({value:e,[r]:0}))).then((n=>{const[i,s]=k(n);t.postMessage(Object.assign(Object.assign({},i),{id:c}),s),"RELEASE"===l&&(t.removeEventListener("message",a),u(t),o in e&&"function"==typeof e[o]&&e[o]())})).catch((e=>{const[n,i]=k({value:new TypeError("Unserializable return value"),[r]:0});t.postMessage(Object.assign(Object.assign({},n),{id:c}),i)}))})),t.start&&t.start()}function u(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function h(e,t){const n=new Map;return e.addEventListener("message",(function(e){const{data:t}=e;if(!t||!t.id)return;const i=n.get(t.id);if(i)try{i(t)}finally{n.delete(t.id)}})),y(e,n,[],t)}function f(e){if(e)throw new Error("Proxy has been released and is not useable")}function v(e){return E(e,new Map,{type:"RELEASE"}).then((()=>{u(e)}))}const g=new WeakMap,p="FinalizationRegistry"in globalThis&&new FinalizationRegistry((e=>{const t=(g.get(e)||0)-1;g.set(e,t),0===t&&v(e)}));function y(e,t,n=[],i=function(){}){let o=!1;const r=new Proxy(i,{get(i,a){if(f(o),a===s)return()=>{!function(e){p&&p.unregister(e)}(r),v(e),t.clear(),o=!0};if("then"===a){if(0===n.length)return{then:()=>r};const i=E(e,t,{type:"GET",path:n.map((e=>e.toString()))}).then(_);return i.then.bind(i)}return y(e,t,[...n,a])},set(i,a,s){f(o);const[r,c]=k(s);return E(e,t,{type:"SET",path:[...n,a].map((e=>e.toString())),value:r},c).then(_)},apply(i,s,r){f(o);const c=n[n.length-1];if(c===a)return E(e,t,{type:"ENDPOINT"}).then(_);if("bind"===c)return y(e,t,n.slice(0,-1));const[l,d]=m(r);return E(e,t,{type:"APPLY",path:n.map((e=>e.toString())),argumentList:l},d).then(_)},construct(i,a){f(o);const[s,r]=m(a);return E(e,t,{type:"CONSTRUCT",path:n.map((e=>e.toString())),argumentList:s},r).then(_)}});return function(e,t){const n=(g.get(t)||0)+1;g.set(t,n),p&&p.register(e,t,e)}(r,e),r}function m(e){const t=e.map(k);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const b=new WeakMap;function k(e){for(const[t,n]of l)if(n.canHandle(e)){const[i,a]=n.serialize(e);return[{type:"HANDLER",name:t,value:i},a]}return[{type:"RAW",value:e},b.get(e)||[]]}function _(e){switch(e.type){case"HANDLER":return l.get(e.name).deserialize(e.value);case"RAW":return e.value}}function E(e,t,n,i){return new Promise((a=>{const s=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");t.set(s,a),e.start&&e.start(),e.postMessage(Object.assign({id:s},n),i)}))}}}]);
//# sourceMappingURL=69642.5e08cfde957b5fa8.js.map