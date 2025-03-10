"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["49554"],{91480:function(e,t,i){i.d(t,{F:()=>a});i(52247),i(71695),i(9359),i(70104),i(40251),i(47021);const a=async e=>{if(!e.parentNode)throw new Error("Cannot setup Leaflet map on disconnected element");const t=(await Promise.resolve().then(i.t.bind(i,94010,23))).default;t.Icon.Default.imagePath="/static/images/leaflet/images/",await i.e("56834").then(i.t.bind(i,69376,23));const a=t.map(e),s=document.createElement("link");s.setAttribute("href","/static/images/leaflet/leaflet.css"),s.setAttribute("rel","stylesheet"),e.parentNode.appendChild(s);const r=document.createElement("link");r.setAttribute("href","/static/images/leaflet/MarkerCluster.css"),r.setAttribute("rel","stylesheet"),e.parentNode.appendChild(r),a.setView([52.3731339,4.8903147],13);return[a,t,o(t).addTo(a)]},o=e=>e.tileLayer("https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}"+(e.Browser.retina?"@2x.png":".png"),{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",minZoom:0,maxZoom:20})},44435:function(e,t,i){i.d(t,{k:()=>o});var a=i(94010);class o extends a.Marker{constructor(e,t,i){super(e,i),this.decorationLayer=void 0,this.decorationLayer=t}onAdd(e){var t;return super.onAdd(e),null===(t=this.decorationLayer)||void 0===t||t.addTo(e),this}onRemove(e){var t;return null===(t=this.decorationLayer)||void 0===t||t.remove(),super.onRemove(e)}}},14502:function(e,t,i){i.a(e,(async function(e,t){try{var a=i(61701),o=(i(71695),i(47021),i(57243)),s=i(50778),r=i(69634),n=i(36522),l=i(51223),d=e([l]);l=(d.then?(await d)():d)[0];let c,h,u,p,m=e=>e,f=(0,a.Z)(null,(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:"entity-id",reflect:!0})],key:"entityId",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:"entity-name"})],key:"entityName",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:"entity-picture"})],key:"entityPicture",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:"entity-color"})],key:"entityColor",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:"show-icon",type:Boolean})],key:"showIcon",value(){return!1}},{kind:"method",key:"render",value:function(){var e;return(0,o.dy)(c||(c=m` <div class="marker ${0}" style="${0}" @click="${0}"> ${0} </div> `),this.entityPicture?"picture":"",(0,r.V)({"border-color":this.entityColor}),this._badgeTap,this.entityPicture?(0,o.dy)(h||(h=m`<div class="entity-picture" style="${0}"></div>`),(0,r.V)({"background-image":`url(${this.entityPicture})`})):this.showIcon&&this.entityId?(0,o.dy)(u||(u=m`<ha-state-icon .hass="${0}" .stateObj="${0}"></ha-state-icon>`),this.hass,null===(e=this.hass)||void 0===e?void 0:e.states[this.entityId]):this.entityName)}},{kind:"method",key:"_badgeTap",value:function(e){e.stopPropagation(),this.entityId&&(0,n.B)(this,"hass-more-info",{entityId:this.entityId})}},{kind:"field",static:!0,key:"styles",value(){return(0,o.iv)(p||(p=m`.marker{display:flex;justify-content:center;text-align:center;align-items:center;box-sizing:border-box;width:48px;height:48px;font-size:var(--ha-marker-font-size, 1.5em);border-radius:var(--ha-marker-border-radius,50%);border:1px solid var(--ha-marker-color,var(--primary-color));color:var(--primary-text-color);background-color:var(--card-background-color)}.marker.picture{overflow:hidden}.entity-picture{background-size:cover;height:100%;width:100%}`))}}]}}),o.oi);customElements.define("ha-entity-marker",f),t()}catch(c){t(c)}}))},65986:function(e,t,i){i.a(e,(async function(e,t){try{var a=i(61701),o=i(72621),s=i(31948),r=(i(71695),i(92745),i(9359),i(31526),i(70104),i(40251),i(47021),i(16444)),n=i(57243),l=i(50778),d=i(36522),c=i(64214),h=i(33570),u=i(91480),p=i(59847),m=i(47194),f=i(79291),y=(i(23334),i(14502)),k=i(44435),v=e([s,y,c,h]);[s,y,c,h]=v.then?(await v)():v;let g,b=e=>e;const _=e=>"string"==typeof e?e:e.entity_id;(0,a.Z)([(0,l.Mo)("ha-map")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"entities",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"paths",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"layers",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"clickable",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)({attribute:"auto-fit",type:Boolean})],key:"autoFit",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)({attribute:"render-passive",type:Boolean})],key:"renderPassive",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)({attribute:"interactive-zones",type:Boolean})],key:"interactiveZones",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)({attribute:"fit-zones",type:Boolean})],key:"fitZones",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)({attribute:"theme-mode",type:String})],key:"themeMode",value(){return"auto"}},{kind:"field",decorators:[(0,l.Cb)({type:Number})],key:"zoom",value(){return 14}},{kind:"field",decorators:[(0,l.Cb)({attribute:"cluster-markers",type:Boolean})],key:"clusterMarkers",value(){return!0}},{kind:"field",decorators:[(0,l.SB)()],key:"_loaded",value(){return!1}},{kind:"field",key:"leafletMap",value:void 0},{kind:"field",key:"Leaflet",value:void 0},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"field",key:"_mapItems",value(){return[]}},{kind:"field",key:"_mapFocusItems",value(){return[]}},{kind:"field",key:"_mapZones",value(){return[]}},{kind:"field",key:"_mapFocusZones",value(){return[]}},{kind:"field",key:"_mapCluster",value:void 0},{kind:"field",key:"_mapPaths",value(){return[]}},{kind:"field",key:"_clickCount",value(){return 0}},{kind:"method",key:"connectedCallback",value:function(){(0,o.Z)(i,"connectedCallback",this,3)([]),this._loadMap(),this._attachObserver()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,o.Z)(i,"disconnectedCallback",this,3)([]),this.leafletMap&&(this.leafletMap.remove(),this.leafletMap=void 0,this.Leaflet=void 0),this._loaded=!1,this._resizeObserver&&this._resizeObserver.unobserve(this)}},{kind:"method",key:"update",value:function(e){var t,a;if((0,o.Z)(i,"update",this,3)([e]),!this._loaded)return;let s=!1;const r=e.get("hass");if(e.has("_loaded")||e.has("entities"))this._drawEntities(),s=!0;else if(this._loaded&&r&&this.entities)for(const i of this.entities)if(r.states[_(i)]!==this.hass.states[_(i)]){this._drawEntities(),s=!0;break}e.has("clusterMarkers")&&this._drawEntities(),(e.has("_loaded")||e.has("paths"))&&this._drawPaths(),(e.has("_loaded")||e.has("layers"))&&(this._drawLayers(e.get("layers")),s=!0),(e.has("_loaded")||this.autoFit&&s)&&this.fitMap(),e.has("zoom")&&this.leafletMap.setZoom(this.zoom),(e.has("themeMode")||e.has("hass")&&(!r||(null===(t=r.themes)||void 0===t?void 0:t.darkMode)!==(null===(a=this.hass.themes)||void 0===a?void 0:a.darkMode)))&&this._updateMapStyle()}},{kind:"get",key:"_darkMode",value:function(){return"dark"===this.themeMode||"auto"===this.themeMode&&Boolean(this.hass.themes.darkMode)}},{kind:"method",key:"_updateMapStyle",value:function(){const e=this.renderRoot.querySelector("#map");e.classList.toggle("clickable",this.clickable),e.classList.toggle("dark",this._darkMode),e.classList.toggle("forced-dark","dark"===this.themeMode),e.classList.toggle("forced-light","light"===this.themeMode)}},{kind:"field",key:"_loading",value(){return!1}},{kind:"method",key:"_loadMap",value:async function(){if(this._loading)return;let e=this.shadowRoot.getElementById("map");e||(e=document.createElement("div"),e.id="map",this.shadowRoot.append(e)),this._loading=!0;try{[this.leafletMap,this.Leaflet]=await(0,u.F)(e),this._updateMapStyle(),this.leafletMap.on("click",(e=>{0===this._clickCount&&setTimeout((()=>{1===this._clickCount&&(0,d.B)(this,"map-clicked",{location:[e.latlng.lat,e.latlng.lng]}),this._clickCount=0}),250),this._clickCount++})),this._loaded=!0}finally{this._loading=!1}}},{kind:"method",key:"fitMap",value:function(e){var t,i,a,o;if(!this.leafletMap||!this.Leaflet||!this.hass)return;if(!(this._mapFocusItems.length||this._mapFocusZones.length||null!==(t=this.layers)&&void 0!==t&&t.length))return void this.leafletMap.setView(new this.Leaflet.LatLng(this.hass.config.latitude,this.hass.config.longitude),(null==e?void 0:e.zoom)||this.zoom);let s=this.Leaflet.latLngBounds(this._mapFocusItems?this._mapFocusItems.map((e=>e.getLatLng())):[]);null===(i=this._mapFocusZones)||void 0===i||i.forEach((e=>{s.extend("getBounds"in e?e.getBounds():e.getLatLng())})),null===(a=this.layers)||void 0===a||a.forEach((e=>{s.extend("getBounds"in e?e.getBounds():e.getLatLng())})),s=s.pad(null!==(o=null==e?void 0:e.pad)&&void 0!==o?o:.5),this.leafletMap.fitBounds(s,{maxZoom:(null==e?void 0:e.zoom)||this.zoom})}},{kind:"method",key:"fitBounds",value:function(e,t){var i;if(!this.leafletMap||!this.Leaflet||!this.hass)return;const a=this.Leaflet.latLngBounds(e).pad(null!==(i=null==t?void 0:t.pad)&&void 0!==i?i:.5);this.leafletMap.fitBounds(a,{maxZoom:(null==t?void 0:t.zoom)||this.zoom})}},{kind:"method",key:"_drawLayers",value:function(e){if(e&&e.forEach((e=>e.remove())),!this.layers)return;const t=this.leafletMap;this.layers.forEach((e=>{t.addLayer(e)}))}},{kind:"method",key:"_computePathTooltip",value:function(e,t){let i;return i=e.fullDatetime?(0,c.o0)(t.timestamp,this.hass.locale,this.hass.config):(0,r.z)(t.timestamp)?(0,h.Vu)(t.timestamp,this.hass.locale,this.hass.config):(0,h.xO)(t.timestamp,this.hass.locale,this.hass.config),`${e.name}<br>${i}`}},{kind:"method",key:"_drawPaths",value:function(){const e=this.hass,t=this.leafletMap,i=this.Leaflet;if(!e||!t||!i)return;if(this._mapPaths.length&&(this._mapPaths.forEach((e=>e.remove())),this._mapPaths=[]),!this.paths)return;const a=getComputedStyle(this).getPropertyValue("--dark-primary-color");this.paths.forEach((e=>{let o,s;e.gradualOpacity&&(o=e.gradualOpacity/(e.points.length-2),s=1-e.gradualOpacity);for(let t=0;t<e.points.length-1;t++){const r=e.gradualOpacity?s+t*o:void 0;this._mapPaths.push(i.circleMarker(e.points[t].point,{radius:f.T?8:3,color:e.color||a,opacity:r,fillOpacity:r,interactive:!0}).bindTooltip(this._computePathTooltip(e,e.points[t]),{direction:"top"})),this._mapPaths.push(i.polyline([e.points[t].point,e.points[t+1].point],{color:e.color||a,opacity:r,interactive:!1}))}const r=e.points.length-1;if(r>=0){const t=e.gradualOpacity?s+r*o:void 0;this._mapPaths.push(i.circleMarker(e.points[r].point,{radius:f.T?8:3,color:e.color||a,opacity:t,fillOpacity:t,interactive:!0}).bindTooltip(this._computePathTooltip(e,e.points[r]),{direction:"top"}))}this._mapPaths.forEach((e=>t.addLayer(e)))}))}},{kind:"method",key:"_drawEntities",value:function(){const e=this.hass,t=this.leafletMap,i=this.Leaflet;if(!e||!t||!i)return;if(this._mapItems.length&&(this._mapItems.forEach((e=>e.remove())),this._mapItems=[],this._mapFocusItems=[]),this._mapZones.length&&(this._mapZones.forEach((e=>e.remove())),this._mapZones=[],this._mapFocusZones=[]),this._mapCluster&&(this._mapCluster.remove(),this._mapCluster=void 0),!this.entities)return;const a=getComputedStyle(this),o=a.getPropertyValue("--accent-color"),s=a.getPropertyValue("--secondary-text-color"),r=a.getPropertyValue("--dark-primary-color"),n=this._darkMode?"dark":"light";for(const l of this.entities){const t=e.states[_(l)];if(!t)continue;const a="string"!=typeof l?l.name:void 0,d=null!=a?a:(0,m.C)(t),{latitude:c,longitude:h,passive:u,icon:f,radius:y,entity_picture:v,gps_accuracy:g}=t.attributes;if(!c||!h)continue;if("zone"===(0,p.N)(t)){if(u&&!this.renderPassive)continue;let e="";if(f){const t=document.createElement("ha-icon");t.setAttribute("icon",f),e=t.outerHTML}else{const t=document.createElement("span");t.innerHTML=d,e=t.outerHTML}const t=i.circle([c,h],{interactive:!1,color:u?s:o,radius:y}),a=new k.k([c,h],t,{icon:i.divIcon({html:e,iconSize:[24,24],className:n}),interactive:this.interactiveZones,title:d});this._mapZones.push(a),!this.fitZones||"string"!=typeof l&&!1===l.focus||this._mapFocusZones.push(t);continue}const b="string"!=typeof l&&"state"===l.label_mode?this.hass.formatEntityState(t):null!=a?a:d.split(" ").map((e=>e[0])).join("").substr(0,3),C=document.createElement("ha-entity-marker");C.hass=this.hass,C.showIcon="string"!=typeof l&&"icon"===l.label_mode,C.entityId=_(l),C.entityName=b,C.entityPicture=!v||"string"!=typeof l&&l.label_mode?"":this.hass.hassUrl(v),"string"!=typeof l&&(C.entityColor=l.color);const M=new k.k([c,h],void 0,{icon:i.divIcon({html:C,iconSize:[48,48],className:""}),title:d});"string"!=typeof l&&!1===l.focus||this._mapFocusItems.push(M),g&&(M.decorationLayer=i.circle([c,h],{interactive:!1,color:r,radius:g})),this._mapItems.push(M)}this.clusterMarkers?(this._mapCluster=i.markerClusterGroup({showCoverageOnHover:!1,removeOutsideVisibleBounds:!1,maxClusterRadius:40}),this._mapCluster.addLayers(this._mapItems),t.addLayer(this._mapCluster)):this._mapItems.forEach((e=>t.addLayer(e))),this._mapZones.forEach((e=>t.addLayer(e)))}},{kind:"method",key:"_attachObserver",value:async function(){this._resizeObserver||(this._resizeObserver=new ResizeObserver((()=>{var e;null===(e=this.leafletMap)||void 0===e||e.invalidateSize({debounceMoveend:!0})}))),this._resizeObserver.observe(this)}},{kind:"field",static:!0,key:"styles",value(){return(0,n.iv)(g||(g=b`:host{display:block;height:300px}#map{height:100%}#map.clickable{cursor:pointer}#map.dark{background:#090909}#map.forced-dark{color:#fff;--map-filter:invert(0.9) hue-rotate(170deg) brightness(1.5) contrast(1.2) saturate(0.3)}#map.forced-light{background:#fff;color:#000;--map-filter:invert(0)}#map.clickable:active,#map:active{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.leaflet-tile-pane{filter:var(--map-filter)}.dark .leaflet-bar a{background-color:#1c1c1c;color:#fff}.dark .leaflet-bar a:hover{background-color:#313131}.leaflet-marker-draggable{cursor:move!important}.leaflet-edit-resize{border-radius:50%;cursor:nesw-resize!important}.named-icon{display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;color:var(--primary-text-color)}.leaflet-pane{z-index:0!important}.leaflet-bottom,.leaflet-control,.leaflet-top{z-index:1!important}.leaflet-tooltip{padding:8px;font-size:90%;background:rgba(80,80,80,.9)!important;color:#fff!important;border-radius:4px;box-shadow:none!important;text-align:center}.marker-cluster div{background-clip:padding-box;background-color:var(--primary-color);border:3px solid rgba(var(--rgb-primary-color),.2);width:32px;height:32px;border-radius:20px;text-align:center;color:var(--text-primary-color);font-size:14px}.marker-cluster span{line-height:30px}`))}}]}}),n.fl);t()}catch(g){t(g)}}))}}]);
//# sourceMappingURL=49554.85edb32a8885ca39.js.map