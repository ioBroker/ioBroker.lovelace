"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[95993],{31811:(e,t,i)=>{i.a(e,(async(e,t)=>{try{var a=i(17463),s=i(68144),o=i(79932),n=i(95664),r=i(70843),d=i(11654),l=(i(46583),e([n]));n=(l.then?(await l)():l)[0];(0,a.Z)([(0,o.Mo)("ha-attributes")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:"extra-filters"})],key:"extraFilters",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_expanded",value:()=>!1},{kind:"method",key:"render",value:function(){if(!this.stateObj)return s.Ld;const e=this.computeDisplayAttributes(r.w.concat(this.extraFilters?this.extraFilters.split(","):[]));return 0===e.length?s.Ld:s.dy` <ha-expansion-panel .header="${this.hass.localize("ui.components.attributes.expansion_header")}" outlined @expanded-will-change="${this.expandedChanged}"> <div class="attribute-container"> ${this._expanded?s.dy` ${e.map((e=>s.dy` <div class="data-entry"> <div class="key"> ${(0,n.S)(this.hass.localize,this.stateObj,this.hass.entities,e)} </div> <div class="value"> ${(0,n.a)(this.hass.localize,this.stateObj,this.hass.locale,this.hass.entities,e)} </div> </div> `))} `:""} </div> </ha-expansion-panel> ${this.stateObj.attributes.attribution?s.dy` <div class="attribution"> ${this.stateObj.attributes.attribution} </div> `:""} `}},{kind:"get",static:!0,key:"styles",value:function(){return[d.Qx,s.iv`.attribute-container{margin-bottom:8px;direction:ltr}.data-entry{display:flex;flex-direction:row;justify-content:space-between}.data-entry .value{max-width:60%;overflow-wrap:break-word;text-align:right}.key{flex-grow:1}.attribution{color:var(--secondary-text-color);text-align:center;margin-top:16px}pre{font-family:inherit;font-size:inherit;margin:0px;overflow-wrap:break-word;white-space:pre-line}hr{border-color:var(--divider-color);border-bottom:none;margin:16px 0}`]}},{kind:"method",key:"computeDisplayAttributes",value:function(e){return this.stateObj?Object.keys(this.stateObj.attributes).filter((t=>-1===e.indexOf(t))):[]}},{kind:"method",key:"expandedChanged",value:function(e){this._expanded=e.detail.expanded}}]}}),s.oi);t()}catch(e){t(e)}}))},46583:(e,t,i)=>{var a=i(17463),s=i(34541),o=i(47838),n=i(68144),r=i(79932),d=i(83448),l=i(47181),h=i(96151);i(52039);const c="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z";(0,a.Z)([(0,r.Mo)("ha-expansion-panel")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"expanded",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"outlined",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"leftChevron",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"secondary",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_showContent",value(){return this.expanded}},{kind:"field",decorators:[(0,r.IO)(".container")],key:"_container",value:void 0},{kind:"method",key:"render",value:function(){return n.dy` <div class="top ${(0,d.$)({expanded:this.expanded})}"> <div id="summary" @click="${this._toggleContainer}" @keydown="${this._toggleContainer}" @focus="${this._focusChanged}" @blur="${this._focusChanged}" role="button" tabindex="0" aria-expanded="${this.expanded}" aria-controls="sect1"> ${this.leftChevron?n.dy` <ha-svg-icon .path="${c}" class="summary-icon ${(0,d.$)({expanded:this.expanded})}"></ha-svg-icon> `:""} <slot name="header"> <div class="header"> ${this.header} <slot class="secondary" name="secondary">${this.secondary}</slot> </div> </slot> ${this.leftChevron?"":n.dy` <ha-svg-icon .path="${c}" class="summary-icon ${(0,d.$)({expanded:this.expanded})}"></ha-svg-icon> `} </div> <slot name="icons"></slot> </div> <div class="container ${(0,d.$)({expanded:this.expanded})}" @transitionend="${this._handleTransitionEnd}" role="region" aria-labelledby="summary" aria-hidden="${!this.expanded}" tabindex="-1"> ${this._showContent?n.dy`<slot></slot>`:""} </div> `}},{kind:"method",key:"willUpdate",value:function(e){(0,s.Z)((0,o.Z)(i.prototype),"willUpdate",this).call(this,e),e.has("expanded")&&this.expanded&&(this._showContent=this.expanded,setTimeout((()=>{this.expanded&&(this._container.style.overflow="initial")}),300))}},{kind:"method",key:"_handleTransitionEnd",value:function(){this._container.style.removeProperty("height"),this._container.style.overflow=this.expanded?"initial":"hidden",this._showContent=this.expanded}},{kind:"method",key:"_toggleContainer",value:async function(e){if(e.defaultPrevented)return;if("keydown"===e.type&&"Enter"!==e.key&&" "!==e.key)return;e.preventDefault();const t=!this.expanded;(0,l.B)(this,"expanded-will-change",{expanded:t}),this._container.style.overflow="hidden",t&&(this._showContent=!0,await(0,h.y)());const i=this._container.scrollHeight;this._container.style.height=`${i}px`,t||setTimeout((()=>{this._container.style.height="0px"}),0),this.expanded=t,(0,l.B)(this,"expanded-changed",{expanded:this.expanded})}},{kind:"method",key:"_focusChanged",value:function(e){this.shadowRoot.querySelector(".top").classList.toggle("focused","focus"===e.type)}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`:host{display:block}.top{display:flex;align-items:center;border-radius:var(--ha-card-border-radius,12px)}.top.expanded{border-bottom-left-radius:0px;border-bottom-right-radius:0px}.top.focused{background:var(--input-fill-color)}:host([outlined]){box-shadow:none;border-width:1px;border-style:solid;border-color:var(--ha-card-border-color,var(--divider-color,#e0e0e0));border-radius:var(--ha-card-border-radius,12px)}.summary-icon{margin-left:8px}:host([leftchevron]) .summary-icon{margin-left:0;margin-right:8px}#summary{flex:1;display:flex;padding:var(--expansion-panel-summary-padding,0 8px);min-height:48px;align-items:center;cursor:pointer;overflow:hidden;font-weight:500;outline:0}.summary-icon{transition:transform 150ms cubic-bezier(.4,0,.2,1);direction:var(--direction)}.summary-icon.expanded{transform:rotate(180deg)}.header,::slotted([slot=header]){flex:1}.container{padding:var(--expansion-panel-content-padding,0 8px);overflow:hidden;transition:height .3s cubic-bezier(.4,0,.2,1);height:0px}.container.expanded{height:auto}.secondary{display:block;color:var(--secondary-text-color);font-size:12px}`}}]}}),n.oi)},13786:(e,t,i)=>{var a=i(17463),s=i(34541),o=i(47838),n=i(68144),r=i(79932);const d=e=>e.tileLayer("https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}"+(e.Browser.retina?"@2x.png":".png"),{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",minZoom:0,maxZoom:20});var l=i(22311),h=i(91741),c=i(44281),u=(i(10983),i(47501)),p=i(47181);let y=(0,a.Z)(null,(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:"entity-id"})],key:"entityId",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:"entity-name"})],key:"entityName",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:"entity-picture"})],key:"entityPicture",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:"entity-color"})],key:"entityColor",value:void 0},{kind:"method",key:"render",value:function(){return n.dy` <div class="marker" style="${(0,u.V)({"border-color":this.entityColor})}" @click="${this._badgeTap}"> ${this.entityPicture?n.dy`<div class="entity-picture" style="${(0,u.V)({"background-image":`url(${this.entityPicture})`})}"></div>`:this.entityName} </div> `}},{kind:"method",key:"_badgeTap",value:function(e){e.stopPropagation(),this.entityId&&(0,p.B)(this,"hass-more-info",{entityId:this.entityId})}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`.marker{display:flex;justify-content:center;align-items:center;box-sizing:border-box;overflow:hidden;width:48px;height:48px;font-size:var(--ha-marker-font-size,1.5em);border-radius:50%;border:1px solid var(--ha-marker-color,var(--primary-color));color:var(--primary-text-color);background-color:var(--card-background-color)}.entity-picture{background-size:cover;height:100%;width:100%}`}}]}}),n.oi);customElements.define("ha-entity-marker",y);const f=e=>"string"==typeof e?e:e.entity_id;(0,a.Z)([(0,r.Mo)("ha-map")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"entities",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"paths",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"layers",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"autoFit",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"renderPassive",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"interactiveZones",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"fitZones",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"darkMode",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"zoom",value:()=>14},{kind:"field",decorators:[(0,r.SB)()],key:"_loaded",value:()=>!1},{kind:"field",key:"leafletMap",value:void 0},{kind:"field",key:"Leaflet",value:void 0},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"field",key:"_mapItems",value:()=>[]},{kind:"field",key:"_mapZones",value:()=>[]},{kind:"field",key:"_mapPaths",value:()=>[]},{kind:"method",key:"connectedCallback",value:function(){(0,s.Z)((0,o.Z)(a.prototype),"connectedCallback",this).call(this),this._loadMap(),this._attachObserver()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,s.Z)((0,o.Z)(a.prototype),"disconnectedCallback",this).call(this),this.leafletMap&&(this.leafletMap.remove(),this.leafletMap=void 0,this.Leaflet=void 0),this._loaded=!1,this._resizeObserver&&this._resizeObserver.unobserve(this)}},{kind:"method",key:"update",value:function(e){var t,i,n,r;if((0,s.Z)((0,o.Z)(a.prototype),"update",this).call(this,e),!this._loaded)return;const d=e.get("hass");if(e.has("_loaded")||e.has("entities"))this._drawEntities();else if(this._loaded&&d&&this.entities)for(const e of this.entities)if(d.states[f(e)]!==this.hass.states[f(e)]){this._drawEntities();break}if((e.has("_loaded")||e.has("paths"))&&this._drawPaths(),(e.has("_loaded")||e.has("layers"))&&this._drawLayers(e.get("layers")),(e.has("_loaded")||(e.has("entities")||e.has("layers"))&&this.autoFit)&&this.fitMap(),e.has("zoom")&&this.leafletMap.setZoom(this.zoom),!e.has("darkMode")&&(!e.has("hass")||d&&(null===(t=d.themes)||void 0===t?void 0:t.darkMode)===(null===(i=this.hass.themes)||void 0===i?void 0:i.darkMode)))return;const l=null!==(n=this.darkMode)&&void 0!==n?n:null===(r=this.hass.themes)||void 0===r?void 0:r.darkMode;this.shadowRoot.getElementById("map").classList.toggle("dark",l)}},{kind:"method",key:"_loadMap",value:async function(){var e;let t=this.shadowRoot.getElementById("map");t||(t=document.createElement("div"),t.id="map",this.shadowRoot.append(t));const a=null!==(e=this.darkMode)&&void 0!==e?e:this.hass.themes.darkMode;[this.leafletMap,this.Leaflet]=await(async e=>{if(!e.parentNode)throw new Error("Cannot setup Leaflet map on disconnected element");const t=(await i.e(70208).then(i.t.bind(i,70208,23))).default;t.Icon.Default.imagePath="/static/images/leaflet/images/";const a=t.map(e),s=document.createElement("link");return s.setAttribute("href","/static/images/leaflet/leaflet.css"),s.setAttribute("rel","stylesheet"),e.parentNode.appendChild(s),a.setView([52.3731339,4.8903147],13),[a,t,d(t).addTo(a)]})(t),this.shadowRoot.getElementById("map").classList.toggle("dark",a),this._loaded=!0}},{kind:"method",key:"fitMap",value:function(){var e,t;if(!this.leafletMap||!this.Leaflet||!this.hass)return;if(!(this._mapItems.length||null!==(e=this.layers)&&void 0!==e&&e.length))return void this.leafletMap.setView(new this.Leaflet.LatLng(this.hass.config.latitude,this.hass.config.longitude),this.zoom);let i=this.Leaflet.latLngBounds(this._mapItems?this._mapItems.map((e=>e.getLatLng())):[]);var a;this.fitZones&&(null===(a=this._mapZones)||void 0===a||a.forEach((e=>{i.extend("getBounds"in e?e.getBounds():e.getLatLng())})));null===(t=this.layers)||void 0===t||t.forEach((e=>{i.extend("getBounds"in e?e.getBounds():e.getLatLng())})),this.layers||(i=i.pad(.5)),this.leafletMap.fitBounds(i,{maxZoom:this.zoom})}},{kind:"method",key:"_drawLayers",value:function(e){if(e&&e.forEach((e=>e.remove())),!this.layers)return;const t=this.leafletMap;this.layers.forEach((e=>{t.addLayer(e)}))}},{kind:"method",key:"_drawPaths",value:function(){const e=this.hass,t=this.leafletMap,i=this.Leaflet;if(!e||!t||!i)return;if(this._mapPaths.length&&(this._mapPaths.forEach((e=>e.remove())),this._mapPaths=[]),!this.paths)return;const a=getComputedStyle(this).getPropertyValue("--dark-primary-color");this.paths.forEach((e=>{let s,o;e.gradualOpacity&&(s=e.gradualOpacity/(e.points.length-2),o=1-e.gradualOpacity);for(let t=0;t<e.points.length-1;t++){const n=e.gradualOpacity?o+t*s:void 0;this._mapPaths.push(i.circleMarker(e.points[t].point,{radius:3,color:e.color||a,opacity:n,fillOpacity:n,interactive:!0}).bindTooltip(e.points[t].tooltip,{direction:"top"})),this._mapPaths.push(i.polyline([e.points[t].point,e.points[t+1].point],{color:e.color||a,opacity:n,interactive:!1}))}const n=e.points.length-1;if(n>=0){const t=e.gradualOpacity?o+n*s:void 0;this._mapPaths.push(i.circleMarker(e.points[n].point,{radius:3,color:e.color||a,opacity:t,fillOpacity:t,interactive:!0}).bindTooltip(e.points[n].tooltip,{direction:"top"}))}this._mapPaths.forEach((e=>t.addLayer(e)))}))}},{kind:"method",key:"_drawEntities",value:function(){var e;const t=this.hass,i=this.leafletMap,a=this.Leaflet;if(!t||!i||!a)return;if(this._mapItems.length&&(this._mapItems.forEach((e=>e.remove())),this._mapItems=[]),this._mapZones.length&&(this._mapZones.forEach((e=>e.remove())),this._mapZones=[]),!this.entities)return;const s=getComputedStyle(this),o=s.getPropertyValue("--accent-color"),n=s.getPropertyValue("--secondary-text-color"),r=s.getPropertyValue("--dark-primary-color"),d=(null!==(e=this.darkMode)&&void 0!==e?e:this.hass.themes.darkMode)?"dark":"light";for(const e of this.entities){const i=t.states[f(e)];if(!i)continue;const s=(0,h.C)(i),{latitude:c,longitude:u,passive:p,icon:y,radius:m,entity_picture:v,gps_accuracy:k}=i.attributes;if(!c||!u)continue;if("zone"===(0,l.N)(i)){if(p&&!this.renderPassive)continue;let e="";if(y){const t=document.createElement("ha-icon");t.setAttribute("icon",y),e=t.outerHTML}else{const t=document.createElement("span");t.innerHTML=s,e=t.outerHTML}this._mapZones.push(a.marker([c,u],{icon:a.divIcon({html:e,iconSize:[24,24],className:d}),interactive:this.interactiveZones,title:s})),this._mapZones.push(a.circle([c,u],{interactive:!1,color:p?n:o,radius:m}));continue}const b=s.split(" ").map((e=>e[0])).join("").substr(0,3);this._mapItems.push(a.marker([c,u],{icon:a.divIcon({html:`\n              <ha-entity-marker\n                entity-id="${f(e)}"\n                entity-name="${b}"\n                entity-picture="${v?this.hass.hassUrl(v):""}"\n                ${"string"!=typeof e?`entity-color="${e.color}"`:""}\n              ></ha-entity-marker>\n            `,iconSize:[48,48],className:""}),title:(0,h.C)(i)})),k&&this._mapItems.push(a.circle([c,u],{interactive:!1,color:r,radius:k}))}this._mapItems.forEach((e=>i.addLayer(e))),this._mapZones.forEach((e=>i.addLayer(e)))}},{kind:"method",key:"_attachObserver",value:async function(){this._resizeObserver||(await(0,c.j)(),this._resizeObserver=new ResizeObserver((()=>{var e;null===(e=this.leafletMap)||void 0===e||e.invalidateSize({debounceMoveend:!0})}))),this._resizeObserver.observe(this)}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`:host{display:block;height:300px}#map{height:100%}#map.dark{background:#090909;--map-filter:invert(0.9) hue-rotate(170deg) grayscale(0.7)}#map:active{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.light{color:#000}.dark{color:#fff}.leaflet-tile-pane{filter:var(--map-filter)}.dark .leaflet-bar a{background-color:var(--card-background-color,#1c1c1c);color:#fff}.leaflet-marker-draggable{cursor:move!important}.leaflet-edit-resize{border-radius:50%;cursor:nesw-resize!important}.named-icon{display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;color:var(--primary-text-color)}.leaflet-pane{z-index:0!important}.leaflet-bottom,.leaflet-control,.leaflet-top{z-index:1!important}.leaflet-tooltip{padding:8px;font-size:90%;background:rgba(80,80,80,.9)!important;color:#fff!important;border-radius:4px;box-shadow:none!important}`}}]}}),n.fl)},70843:(e,t,i)=>{i.d(t,{w:()=>a});const a=["entity_id","assumed_state","attribution","custom_ui_more_info","custom_ui_state_card","device_class","editable","emulated_hue_name","emulated_hue","entity_picture","friendly_name","haaska_hidden","haaska_name","icon","initial_state","last_reset","restored","state_class","supported_features","unit_of_measurement"]},45841:(e,t,i)=>{i.d(t,{$H:()=>o,Bf:()=>n,Pc:()=>h,fT:()=>l,vp:()=>r,zt:()=>s});var a=i(83849);const s=e=>e.callWS({type:"zone/list"}),o=(e,t)=>e.callWS({type:"zone/create",...t}),n=(e,t,i)=>e.callWS({type:"zone/update",zone_id:t,...i}),r=(e,t)=>e.callWS({type:"zone/delete",zone_id:t});let d;const l=e=>{d=e,(0,a.c)("/config/zone/new")},h=()=>{const e=d;return d=void 0,e}},95993:(e,t,i)=>{i.a(e,(async(e,a)=>{try{i.r(t);var s=i(17463),o=(i(14271),i(68144)),n=i(79932),r=i(14516),d=i(47181),l=i(31811),h=(i(13786),i(45841)),c=e([l]);l=(c.then?(await c)():c)[0];(0,s.Z)([(0,n.Mo)("more-info-person")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"stateObj",value:void 0},{kind:"field",key:"_entityArray",value:()=>(0,r.Z)((e=>[e]))},{kind:"method",key:"render",value:function(){var e;return this.hass&&this.stateObj?o.dy` ${this.stateObj.attributes.latitude&&this.stateObj.attributes.longitude?o.dy` <ha-map .hass="${this.hass}" .entities="${this._entityArray(this.stateObj.entity_id)}" autoFit></ha-map> `:""} ${null!==(e=this.hass.user)&&void 0!==e&&e.is_admin&&"not_home"===this.stateObj.state&&this.stateObj.attributes.latitude&&this.stateObj.attributes.longitude?o.dy` <div class="actions"> <mwc-button @click="${this._handleAction}"> ${this.hass.localize("ui.dialogs.more_info_control.person.create_zone")} </mwc-button> </div> `:""} <ha-attributes .hass="${this.hass}" .stateObj="${this.stateObj}" extra-filters="id,user_id,editable,device_trackers"></ha-attributes> `:o.Ld}},{kind:"method",key:"_handleAction",value:function(){(0,h.fT)({latitude:this.stateObj.attributes.latitude,longitude:this.stateObj.attributes.longitude}),(0,d.B)(this,"hass-more-info",{entityId:null})}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`.flex{display:flex;justify-content:space-between}.actions{margin:8px 0;text-align:right}ha-map{margin-top:16px;margin-bottom:16px}`}}]}}),o.oi);a()}catch(e){a(e)}}))}}]);
//# sourceMappingURL=95993-2G-UOgHpA-I.js.map