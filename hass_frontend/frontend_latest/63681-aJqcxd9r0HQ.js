"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[63681],{32594:(e,i,t)=>{t.d(i,{U:()=>a});const a=e=>e.stopPropagation()},60033:(e,i,t)=>{var a=t(17463),s=(t(44577),t(68144)),d=t(79932),n=t(14516),o=t(47181),c=t(58831),l=t(85415),r=t(57066),h=t(57292),u=t(74186),v=t(73826);t(77576);const p=e=>s.dy`<mwc-list-item .twoline="${!!e.area}"> <span>${e.name}</span> <span slot="secondary">${e.area}</span> </mwc-list-item>`;(0,a.Z)([(0,d.Mo)("ha-device-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"devices",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"areas",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"entities",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Array,attribute:"exclude-devices"})],key:"excludeDevices",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_opened",value:void 0},{kind:"field",decorators:[(0,d.IO)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_init",value:()=>!1},{kind:"field",key:"_getDevices",value(){return(0,n.Z)(((e,i,t,a,s,d,n,o,r)=>{if(!e.length)return[{id:"no_devices",area:"",name:this.hass.localize("ui.components.device-picker.no_devices")}];let u={};(a||s||d||o)&&(u=(0,h.pI)(t));const v={};for(const e of i)v[e.area_id]=e;let p=e.filter((e=>e.id===this.value||!e.disabled_by));a&&(p=p.filter((e=>{const i=u[e.id];return!(!i||!i.length)&&u[e.id].some((e=>a.includes((0,c.M)(e.entity_id))))}))),s&&(p=p.filter((e=>{const i=u[e.id];return!i||!i.length||t.every((e=>!s.includes((0,c.M)(e.entity_id))))}))),r&&(p=p.filter((e=>!r.includes(e.id)))),d&&(p=p.filter((e=>{const i=u[e.id];return!(!i||!i.length)&&u[e.id].some((e=>{const i=this.hass.states[e.entity_id];return!!i&&(i.attributes.device_class&&d.includes(i.attributes.device_class))}))}))),o&&(p=p.filter((e=>{const i=u[e.id];return!(!i||!i.length)&&i.some((e=>{const i=this.hass.states[e.entity_id];return!!i&&o(i)}))}))),n&&(p=p.filter((e=>e.id===this.value||n(e))));const _=p.map((e=>({id:e.id,name:(0,h.jL)(e,this.hass,u[e.id]),area:e.area_id&&v[e.area_id]?v[e.area_id].name:this.hass.localize("ui.components.device-picker.no_area")})));return _.length?1===_.length?_:_.sort(((e,i)=>(0,l.$)(e.name||"",i.name||"",this.hass.locale.language))):[{id:"no_devices",area:"",name:this.hass.localize("ui.components.device-picker.no_match")}]}))}},{kind:"method",key:"open",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.open())}},{kind:"method",key:"focus",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.focus())}},{kind:"method",key:"hassSubscribe",value:function(){return[(0,h.q4)(this.hass.connection,(e=>{this.devices=e})),(0,r.sG)(this.hass.connection,(e=>{this.areas=e})),(0,u.LM)(this.hass.connection,(e=>{this.entities=e}))]}},{kind:"method",key:"updated",value:function(e){(!this._init&&this.devices&&this.areas&&this.entities||this._init&&e.has("_opened")&&this._opened)&&(this._init=!0,this.comboBox.items=this._getDevices(this.devices,this.areas,this.entities,this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.excludeDevices))}},{kind:"method",key:"render",value:function(){return s.dy` <ha-combo-box .hass="${this.hass}" .label="${void 0===this.label&&this.hass?this.hass.localize("ui.components.device-picker.device"):this.label}" .value="${this._value}" .helper="${this.helper}" .renderer="${p}" .disabled="${this.disabled}" .required="${this.required}" item-value-path="id" item-label-path="name" @opened-changed="${this._openedChanged}" @value-changed="${this._deviceChanged}"></ha-combo-box> `}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_deviceChanged",value:function(e){e.stopPropagation();let i=e.detail.value;"no_devices"===i&&(i=""),i!==this._value&&this._setValue(i)}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_setValue",value:function(e){this.value=e,setTimeout((()=>{(0,o.B)(this,"value-changed",{value:e}),(0,o.B)(this,"change")}),0)}}]}}),(0,v.f)(s.oi))},68101:(e,i,t)=>{var a=t(17463),s=(t(44577),t(68144)),d=t(79932),n=t(83448),o=t(14516),c=t(47181),l=t(58831),r=t(57066),h=t(57292),u=t(26765);t(77576),t(10983),t(52039);const v=e=>s.dy`<mwc-list-item class="${(0,n.$)({"add-new":"add_new"===e.area_id})}"> ${e.name} </mwc-list-item>`;(0,a.Z)([(0,d.Mo)("ha-area-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,attribute:"no-add"})],key:"noAdd",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Array,attribute:"exclude-areas"})],key:"excludeAreas",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_opened",value:void 0},{kind:"field",decorators:[(0,d.IO)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_suggestion",value:void 0},{kind:"field",key:"_init",value:()=>!1},{kind:"method",key:"open",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.open())}},{kind:"method",key:"focus",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.focus())}},{kind:"field",key:"_getAreas",value(){return(0,o.Z)(((e,i,t,a,s,d,n,o,c,r)=>{if(!e.length)return[{area_id:"no_areas",name:this.hass.localize("ui.components.area-picker.no_areas"),picture:null,aliases:[]}];let u,v,p={};(a||s||d||n||o)&&(p=(0,h.R6)(t),u=i,v=t.filter((e=>e.area_id)),a&&(u=u.filter((e=>{const i=p[e.id];return!(!i||!i.length)&&p[e.id].some((e=>a.includes((0,l.M)(e.entity_id))))})),v=v.filter((e=>a.includes((0,l.M)(e.entity_id))))),s&&(u=u.filter((e=>{const i=p[e.id];return!i||!i.length||t.every((e=>!s.includes((0,l.M)(e.entity_id))))})),v=v.filter((e=>!s.includes((0,l.M)(e.entity_id))))),d&&(u=u.filter((e=>{const i=p[e.id];return!(!i||!i.length)&&p[e.id].some((e=>{const i=this.hass.states[e.entity_id];return!!i&&(i.attributes.device_class&&d.includes(i.attributes.device_class))}))})),v=v.filter((e=>{const i=this.hass.states[e.entity_id];return i.attributes.device_class&&d.includes(i.attributes.device_class)}))),n&&(u=u.filter((e=>n(e)))),o&&(u=u.filter((e=>{const i=p[e.id];return!(!i||!i.length)&&p[e.id].some((e=>{const i=this.hass.states[e.entity_id];return!!i&&o(i)}))})),v=v.filter((e=>{const i=this.hass.states[e.entity_id];return!!i&&o(i)}))));let _,m=e;var k;(u&&(_=u.filter((e=>e.area_id)).map((e=>e.area_id))),v)&&(_=(null!==(k=_)&&void 0!==k?k:[]).concat(v.filter((e=>e.area_id)).map((e=>e.area_id))));return _&&(m=e.filter((e=>_.includes(e.area_id)))),r&&(m=m.filter((e=>!r.includes(e.area_id)))),m.length||(m=[{area_id:"no_areas",name:this.hass.localize("ui.components.area-picker.no_match"),picture:null,aliases:[]}]),c?m:[...m,{area_id:"add_new",name:this.hass.localize("ui.components.area-picker.add_new"),picture:null,aliases:[]}]}))}},{kind:"method",key:"updated",value:function(e){if(!this._init&&this.hass||this._init&&e.has("_opened")&&this._opened){this._init=!0;const e=this._getAreas(Object.values(this.hass.areas),Object.values(this.hass.devices),Object.values(this.hass.entities),this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd,this.excludeAreas);this.comboBox.items=e,this.comboBox.filteredItems=e}}},{kind:"method",key:"render",value:function(){var e;return s.dy` <ha-combo-box .hass="${this.hass}" .helper="${this.helper}" item-value-path="area_id" item-id-path="area_id" item-label-path="name" .value="${this.value}" .disabled="${this.disabled}" .required="${this.required}" .label="${void 0===this.label&&this.hass?this.hass.localize("ui.components.area-picker.area"):this.label}" .placeholder="${this.placeholder?null===(e=this.hass.areas[this.placeholder])||void 0===e?void 0:e.name:void 0}" .renderer="${v}" @filter-changed="${this._filterChanged}" @opened-changed="${this._openedChanged}" @value-changed="${this._areaChanged}"> </ha-combo-box> `}},{kind:"method",key:"_filterChanged",value:function(e){var i;const t=e.detail.value;if(!t)return void(this.comboBox.filteredItems=this.comboBox.items);const a=null===(i=this.comboBox.items)||void 0===i?void 0:i.filter((e=>e.name.toLowerCase().includes(t.toLowerCase())));this.noAdd||0!==(null==a?void 0:a.length)?this.comboBox.filteredItems=a:(this._suggestion=t,this.comboBox.filteredItems=[{area_id:"add_new_suggestion",name:this.hass.localize("ui.components.area-picker.add_new_sugestion",{name:this._suggestion}),picture:null}])}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_areaChanged",value:function(e){e.stopPropagation();let i=e.detail.value;"no_areas"===i&&(i=""),["add_new_suggestion","add_new"].includes(i)?(e.target.value=this._value,(0,u.D9)(this,{title:this.hass.localize("ui.components.area-picker.add_dialog.title"),text:this.hass.localize("ui.components.area-picker.add_dialog.text"),confirmText:this.hass.localize("ui.components.area-picker.add_dialog.add"),inputLabel:this.hass.localize("ui.components.area-picker.add_dialog.name"),defaultValue:"add_new_suggestion"===i?this._suggestion:void 0,confirm:async e=>{if(e)try{const i=await(0,r.Lo)(this.hass,{name:e}),t=[...Object.values(this.hass.areas),i];this.comboBox.filteredItems=this._getAreas(t,Object.values(this.hass.devices),Object.values(this.hass.entities),this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd,this.excludeAreas),await this.updateComplete,await this.comboBox.updateComplete,this._setValue(i.area_id)}catch(e){(0,u.Ys)(this,{title:this.hass.localize("ui.components.area-picker.add_dialog.failed_create_area"),text:e.message})}},cancel:()=>{this._setValue(void 0),this._suggestion=void 0}})):i!==this._value&&this._setValue(i)}},{kind:"method",key:"_setValue",value:function(e){this.value=e,setTimeout((()=>{(0,c.B)(this,"value-changed",{value:e}),(0,c.B)(this,"change")}),0)}}]}}),s.oi)},16235:(e,i,t)=>{var a=t(17463),s=t(68144),d=t(79932);(0,a.Z)([(0,d.Mo)("ha-input-helper-text")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"method",key:"render",value:function(){return s.dy`<slot></slot>`}},{kind:"field",static:!0,key:"styles",value:()=>s.iv`:host{display:block;color:var(--mdc-text-field-label-ink-color,rgba(0,0,0,.6));font-size:.75rem;padding-left:16px;padding-right:16px}`}]}}),s.oi)},63681:(e,i,t)=>{var a=t(17463),s=(t(33829),t(67182)),d=(t(14271),t(99608),t(68144)),n=t(79932),o=t(83448),c=t(76680),l=t(47181),r=t(32594),h=t(58831),u=t(91741),v=t(84627),p=t(57292);t(60033),t(74535),t(68101),t(10983),t(16235),t(52039);const _="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";(0,a.Z)([(0,n.Mo)("ha-target-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"value",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"addOnTop",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_addMode",value:void 0},{kind:"field",decorators:[(0,n.IO)("#input")],key:"_inputElement",value:void 0},{kind:"field",decorators:[(0,n.IO)(".add-container",!0)],key:"_addContainer",value:void 0},{kind:"field",key:"_opened",value:()=>!1},{kind:"method",key:"render",value:function(){return this.addOnTop?d.dy` ${this._renderChips()} ${this._renderItems()} `:d.dy` ${this._renderItems()} ${this._renderChips()} `}},{kind:"method",key:"_renderItems",value:function(){var e,i,t;return d.dy` <div class="mdc-chip-set items"> ${null!==(e=this.value)&&void 0!==e&&e.area_id?(0,c.r)(this.value.area_id).map((e=>{const i=this.hass.areas[e];return this._renderChip("area_id",e,(null==i?void 0:i.name)||e,void 0,"M12.5 7C12.5 5.89 13.39 5 14.5 5H18C19.1 5 20 5.9 20 7V9.16C18.84 9.57 18 10.67 18 11.97V14H12.5V7M6 11.96V14H11.5V7C11.5 5.89 10.61 5 9.5 5H6C4.9 5 4 5.9 4 7V9.15C5.16 9.56 6 10.67 6 11.96M20.66 10.03C19.68 10.19 19 11.12 19 12.12V15H5V12C5 10.9 4.11 10 3 10S1 10.9 1 12V17C1 18.1 1.9 19 3 19V21H5V19H19V21H21V19C22.1 19 23 18.1 23 17V12C23 10.79 21.91 9.82 20.66 10.03Z")})):""} ${null!==(i=this.value)&&void 0!==i&&i.device_id?(0,c.r)(this.value.device_id).map((e=>{const i=this.hass.devices[e];return this._renderChip("device_id",e,i?(0,p.jL)(i,this.hass):e,void 0,"M3 6H21V4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H7V18H3V6M13 12H9V13.78C8.39 14.33 8 15.11 8 16C8 16.89 8.39 17.67 9 18.22V20H13V18.22C13.61 17.67 14 16.88 14 16S13.61 14.33 13 13.78V12M11 17.5C10.17 17.5 9.5 16.83 9.5 16S10.17 14.5 11 14.5 12.5 15.17 12.5 16 11.83 17.5 11 17.5M22 8H16C15.5 8 15 8.5 15 9V19C15 19.5 15.5 20 16 20H22C22.5 20 23 19.5 23 19V9C23 8.5 22.5 8 22 8M21 18H17V10H21V18Z")})):""} ${null!==(t=this.value)&&void 0!==t&&t.entity_id?(0,c.r)(this.value.entity_id).map((e=>{const i=this.hass.states[e];return this._renderChip("entity_id",e,i?(0,u.C)(i):e,i)})):""} </div> `}},{kind:"method",key:"_renderChips",value:function(){return d.dy` <div class="mdc-chip-set add-container"> <div class="mdc-chip area_id add" .type="${"area_id"}" @click="${this._showPicker}"> <div class="mdc-chip__ripple"></div> <ha-svg-icon class="mdc-chip__icon mdc-chip__icon--leading" .path="${_}"></ha-svg-icon> <span role="gridcell"> <span role="button" tabindex="0" class="mdc-chip__primary-action"> <span class="mdc-chip__text">${this.hass.localize("ui.components.target-picker.add_area_id")}</span> </span> </span> </div> <div class="mdc-chip device_id add" .type="${"device_id"}" @click="${this._showPicker}"> <div class="mdc-chip__ripple"></div> <ha-svg-icon class="mdc-chip__icon mdc-chip__icon--leading" .path="${_}"></ha-svg-icon> <span role="gridcell"> <span role="button" tabindex="0" class="mdc-chip__primary-action"> <span class="mdc-chip__text">${this.hass.localize("ui.components.target-picker.add_device_id")}</span> </span> </span> </div> <div class="mdc-chip entity_id add" .type="${"entity_id"}" @click="${this._showPicker}"> <div class="mdc-chip__ripple"></div> <ha-svg-icon class="mdc-chip__icon mdc-chip__icon--leading" .path="${_}"></ha-svg-icon> <span role="gridcell"> <span role="button" tabindex="0" class="mdc-chip__primary-action"> <span class="mdc-chip__text">${this.hass.localize("ui.components.target-picker.add_entity_id")}</span> </span> </span> </div> ${this._renderPicker()} </div> ${this.helper?d.dy`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""} `}},{kind:"method",key:"_showPicker",value:function(e){this._addMode=e.currentTarget.type}},{kind:"method",key:"_renderChip",value:function(e,i,t,a,s){return d.dy` <div class="mdc-chip ${(0,o.$)({[e]:!0})}"> ${s?d.dy`<ha-svg-icon class="mdc-chip__icon mdc-chip__icon--leading" .path="${s}"></ha-svg-icon>`:""} ${a?d.dy`<ha-state-icon class="mdc-chip__icon mdc-chip__icon--leading" .state="${a}"></ha-state-icon>`:""} <span role="gridcell"> <span role="button" tabindex="0" class="mdc-chip__primary-action"> <span class="mdc-chip__text">${t}</span> </span> </span> ${"entity_id"===e?"":d.dy`<span role="gridcell"> <ha-icon-button class="expand-btn mdc-chip__icon mdc-chip__icon--trailing" tabindex="-1" role="button" .label="${this.hass.localize("ui.components.target-picker.expand")}" .path="${"M18.17,12L15,8.83L16.41,7.41L21,12L16.41,16.58L15,15.17L18.17,12M5.83,12L9,15.17L7.59,16.59L3,12L7.59,7.42L9,8.83L5.83,12Z"}" hideTooltip .id="${i}" .type="${e}" @click="${this._handleExpand}"></ha-icon-button> <simple-tooltip class="expand" animation-delay="0">${this.hass.localize(`ui.components.target-picker.expand_${e}`)}</simple-tooltip> </span>`} <span role="gridcell"> <ha-icon-button class="mdc-chip__icon mdc-chip__icon--trailing" tabindex="-1" role="button" .label="${this.hass.localize("ui.components.target-picker.remove")}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" hideTooltip .id="${i}" .type="${e}" @click="${this._handleRemove}"></ha-icon-button> <simple-tooltip animation-delay="0">${this.hass.localize(`ui.components.target-picker.remove_${e}`)}</simple-tooltip> </span> </div> `}},{kind:"method",key:"_renderPicker",value:function(){var e,i,t;return this._addMode?d.dy`<mwc-menu-surface open .anchor="${this._addContainer}" @closed="${this._onClosed}" @opened="${this._onOpened}" @opened-changed="${this._openedChanged}" @input="${r.U}">${"area_id"===this._addMode?d.dy` <ha-area-picker .hass="${this.hass}" id="input" .type="${"area_id"}" .label="${this.hass.localize("ui.components.target-picker.add_area_id")}" no-add .deviceFilter="${this.deviceFilter}" .entityFilter="${this.entityFilter}" .includeDeviceClasses="${this.includeDeviceClasses}" .includeDomains="${this.includeDomains}" .excludeAreas="${(0,c.r)(null===(e=this.value)||void 0===e?void 0:e.area_id)}" @value-changed="${this._targetPicked}" @click="${this._preventDefault}"></ha-area-picker> `:"device_id"===this._addMode?d.dy` <ha-device-picker .hass="${this.hass}" id="input" .type="${"device_id"}" .label="${this.hass.localize("ui.components.target-picker.add_device_id")}" .deviceFilter="${this.deviceFilter}" .entityFilter="${this.entityFilter}" .includeDeviceClasses="${this.includeDeviceClasses}" .includeDomains="${this.includeDomains}" .excludeDevices="${(0,c.r)(null===(i=this.value)||void 0===i?void 0:i.device_id)}" @value-changed="${this._targetPicked}" @click="${this._preventDefault}"></ha-device-picker> `:d.dy` <ha-entity-picker .hass="${this.hass}" id="input" .type="${"entity_id"}" .label="${this.hass.localize("ui.components.target-picker.add_entity_id")}" .entityFilter="${this.entityFilter}" .includeDeviceClasses="${this.includeDeviceClasses}" .includeDomains="${this.includeDomains}" .excludeEntities="${(0,c.r)(null===(t=this.value)||void 0===t?void 0:t.entity_id)}" @value-changed="${this._targetPicked}" @click="${this._preventDefault}" allow-custom-entity></ha-entity-picker> `}</mwc-menu-surface>`:d.Ld}},{kind:"method",key:"_targetPicked",value:function(e){if(e.stopPropagation(),!e.detail.value)return;const i=e.detail.value,t=e.currentTarget;("entity_id"!==t.type||(0,v.T)(i))&&(t.value="",this.value&&this.value[t.type]&&(0,c.r)(this.value[t.type]).includes(i)||(0,l.B)(this,"value-changed",{value:this.value?{...this.value,[t.type]:this.value[t.type]?[...(0,c.r)(this.value[t.type]),i]:i}:{[t.type]:i}}))}},{kind:"method",key:"_handleExpand",value:function(e){const i=e.currentTarget,t=[],a=[];if("area_id"===i.type)Object.values(this.hass.devices).forEach((e=>{var a;e.area_id!==i.id||null!==(a=this.value.device_id)&&void 0!==a&&a.includes(e.id)||!this._deviceMeetsFilter(e)||t.push(e.id)})),Object.values(this.hass.entities).forEach((e=>{var t;e.area_id!==i.id||null!==(t=this.value.entity_id)&&void 0!==t&&t.includes(e.entity_id)||!this._entityRegMeetsFilter(e)||a.push(e.entity_id)}));else{if("device_id"!==i.type)return;Object.values(this.hass.entities).forEach((e=>{var t;e.device_id!==i.id||null!==(t=this.value.entity_id)&&void 0!==t&&t.includes(e.entity_id)||!this._entityRegMeetsFilter(e)||a.push(e.entity_id)}))}let s=this.value;a.length&&(s=this._addItems(s,"entity_id",a)),t.length&&(s=this._addItems(s,"device_id",t)),s=this._removeItem(s,i.type,i.id),(0,l.B)(this,"value-changed",{value:s})}},{kind:"method",key:"_handleRemove",value:function(e){const i=e.currentTarget;(0,l.B)(this,"value-changed",{value:this._removeItem(this.value,i.type,i.id)})}},{kind:"method",key:"_addItems",value:function(e,i,t){return{...e,[i]:e[i]?(0,c.r)(e[i]).concat(t):t}}},{kind:"method",key:"_removeItem",value:function(e,i,t){const a=(0,c.r)(e[i]).filter((e=>String(e)!==t));if(a.length)return{...e,[i]:a};const s={...e};return delete s[i],Object.keys(s).length?s:void 0}},{kind:"method",key:"_onClosed",value:function(e){e.stopPropagation(),e.target.open=!0}},{kind:"method",key:"_onOpened",value:async function(){var e,i;this._addMode&&(await(null===(e=this._inputElement)||void 0===e?void 0:e.focus()),await(null===(i=this._inputElement)||void 0===i?void 0:i.open()),this._opened=!0)}},{kind:"method",key:"_openedChanged",value:function(e){this._opened&&!e.detail.value&&(this._opened=!1,this._addMode=void 0)}},{kind:"method",key:"_preventDefault",value:function(e){e.preventDefault()}},{kind:"method",key:"_deviceMeetsFilter",value:function(e){const i=Object.values(this.hass.entities).filter((i=>i.device_id===e.id));if(this.includeDomains){if(!i||!i.length)return!1;if(!i.some((e=>this.includeDomains.includes((0,h.M)(e.entity_id)))))return!1}if(this.includeDeviceClasses){if(!i||!i.length)return!1;if(!i.some((e=>{const i=this.hass.states[e.entity_id];return!!i&&(i.attributes.device_class&&this.includeDeviceClasses.includes(i.attributes.device_class))})))return!1}return!(this.deviceFilter&&!this.deviceFilter(e))&&!(this.entityFilter&&!i.some((e=>{const i=this.hass.states[e.entity_id];return!!i&&this.entityFilter(i)})))}},{kind:"method",key:"_entityRegMeetsFilter",value:function(e){if(e.entity_category)return!1;if(this.includeDomains&&!this.includeDomains.includes((0,h.M)(e.entity_id)))return!1;if(this.includeDeviceClasses){const i=this.hass.states[e.entity_id];if(!i)return!1;if(!i.attributes.device_class||!this.includeDeviceClasses.includes(i.attributes.device_class))return!1}if(this.entityFilter){const i=this.hass.states[e.entity_id];if(!i)return!1;if(!this.entityFilter(i))return!1}return!0}},{kind:"get",static:!0,key:"styles",value:function(){return d.iv`${(0,d.$m)(s)} .mdc-chip{color:var(--primary-text-color)}.items{z-index:2}.mdc-chip-set{padding:4px 0}.mdc-chip.add{color:rgba(0,0,0,.87)}.add-container{position:relative;display:inline-flex}.mdc-chip:not(.add){cursor:default}.mdc-chip ha-icon-button{--mdc-icon-button-size:24px;display:flex;align-items:center;outline:0}.mdc-chip ha-icon-button ha-svg-icon{border-radius:50%;background:var(--secondary-text-color)}.mdc-chip__icon.mdc-chip__icon--trailing{width:16px;height:16px;--mdc-icon-size:14px;color:var(--secondary-text-color);margin-inline-start:4px!important;margin-inline-end:-4px!important;direction:var(--direction)}.mdc-chip__icon--leading{display:flex;align-items:center;justify-content:center;--mdc-icon-size:20px;border-radius:50%;padding:6px;margin-left:-14px!important;margin-inline-start:-14px!important;margin-inline-end:4px!important;direction:var(--direction)}.expand-btn{margin-right:0}.mdc-chip.area_id:not(.add){border:2px solid #fed6a4;background:var(--card-background-color)}.mdc-chip.area_id.add,.mdc-chip.area_id:not(.add) .mdc-chip__icon--leading{background:#fed6a4}.mdc-chip.device_id:not(.add){border:2px solid #a8e1fb;background:var(--card-background-color)}.mdc-chip.device_id.add,.mdc-chip.device_id:not(.add) .mdc-chip__icon--leading{background:#a8e1fb}.mdc-chip.entity_id:not(.add){border:2px solid #d2e7b9;background:var(--card-background-color)}.mdc-chip.entity_id.add,.mdc-chip.entity_id:not(.add) .mdc-chip__icon--leading{background:#d2e7b9}.mdc-chip:hover{z-index:5}simple-tooltip.expand{min-width:200px}:host([disabled]) .mdc-chip{opacity:var(--light-disabled-opacity);pointer-events:none}mwc-menu-surface{--mdc-menu-min-width:100%}ha-area-picker,ha-device-picker,ha-entity-picker{display:block;width:100%}`}}]}}),d.oi)},26765:(e,i,t)=>{t.d(i,{D9:()=>c,Ys:()=>n,g7:()=>o});var a=t(47181);const s=()=>Promise.all([t.e(28597),t.e(52154),t.e(1281)]).then(t.bind(t,1281)),d=(e,i,t)=>new Promise((d=>{const n=i.cancel,o=i.confirm;(0,a.B)(e,"show-dialog",{dialogTag:"dialog-box",dialogImport:s,dialogParams:{...i,...t,cancel:()=>{d(!(null==t||!t.prompt)&&null),n&&n()},confirm:e=>{d(null==t||!t.prompt||e),o&&o(e)}}})})),n=(e,i)=>d(e,i),o=(e,i)=>d(e,i,{confirmation:!0}),c=(e,i)=>d(e,i,{prompt:!0})},73826:(e,i,t)=>{t.d(i,{f:()=>o});var a=t(17463),s=t(34541),d=t(47838),n=t(79932);const o=e=>(0,a.Z)(null,(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,s.Z)((0,d.Z)(t.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,s.Z)((0,d.Z)(t.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if((0,s.Z)((0,d.Z)(t.prototype),"updated",this).call(this,e),e.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const i of e.keys())if(this.hassSubscribeRequiredHostProps.includes(i))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var e;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(e=this.hassSubscribeRequiredHostProps)&&void 0!==e&&e.some((e=>void 0===this[e]))||(this.__unsubs=this.hassSubscribe())}}]}}),e)}}]);
//# sourceMappingURL=63681-aJqcxd9r0HQ.js.map