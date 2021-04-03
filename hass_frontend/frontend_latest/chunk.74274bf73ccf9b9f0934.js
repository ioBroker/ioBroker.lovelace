/*! For license information please see chunk.74274bf73ccf9b9f0934.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[76],{44285:(e,t,i)=>{"use strict";i(65233);var r=i(9672),o=i(50856),n=i(42687);(0,r.k)({_template:o.d`
    <style>
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }

      #baseURIAnchor {
        display: none;
      }

      #sizedImgDiv {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        display: none;
      }

      #img {
        display: block;
        width: var(--iron-image-width, auto);
        height: var(--iron-image-height, auto);
      }

      :host([sizing]) #sizedImgDiv {
        display: block;
      }

      :host([sizing]) #img {
        display: none;
      }

      #placeholder {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        background-color: inherit;
        opacity: 1;

        @apply --iron-image-placeholder;
      }

      #placeholder.faded-out {
        transition: opacity 0.5s linear;
        opacity: 0;
      }
    </style>

    <a id="baseURIAnchor" href="#"></a>
    <div id="sizedImgDiv" role="img" hidden$="[[_computeImgDivHidden(sizing)]]" aria-hidden$="[[_computeImgDivARIAHidden(alt)]]" aria-label$="[[_computeImgDivARIALabel(alt, src)]]"></div>
    <img id="img" alt$="[[alt]]" hidden$="[[_computeImgHidden(sizing)]]" crossorigin$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">
    <div id="placeholder" hidden$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>
`,is:"iron-image",properties:{src:{type:String,value:""},alt:{type:String,value:null},crossorigin:{type:String,value:null},preventLoad:{type:Boolean,value:!1},sizing:{type:String,value:null,reflectToAttribute:!0},position:{type:String,value:"center"},preload:{type:Boolean,value:!1},placeholder:{type:String,value:null,observer:"_placeholderChanged"},fade:{type:Boolean,value:!1},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1},width:{observer:"_widthChanged",type:Number,value:null},height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){this.$.img.src===this._resolveSrc(this.src)&&(this._setLoading(!1),this._setLoaded(!0),this._setError(!1))},_imgOnError:function(){this.$.img.src===this._resolveSrc(this.src)&&(this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",this._setLoading(!1),this._setLoaded(!1),this._setError(!0))},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){return null!==this.alt?this.alt:""===this.src?"":this._resolveSrc(this.src).replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(e,t){var i=this._resolveSrc(e);i!==this._resolvedSrc&&(this._resolvedSrc="",this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",""===e||t?(this._setLoading(!1),this._setLoaded(!1),this._setError(!1)):(this._resolvedSrc=i,this.$.img.src=this._resolvedSrc,this.$.sizedImgDiv.style.backgroundImage='url("'+this._resolvedSrc+'")',this._setLoading(!0),this._setLoaded(!1),this._setError(!1)))},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?'url("'+this.placeholder+'")':""},_transformChanged:function(){var e=this.$.sizedImgDiv.style,t=this.$.placeholder.style;e.backgroundSize=t.backgroundSize=this.sizing,e.backgroundPosition=t.backgroundPosition=this.sizing?this.position:"",e.backgroundRepeat=t.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(e){var t=(0,n.Kk)(e,this.$.baseURIAnchor.href);return t.length>=2&&"/"===t[0]&&"/"!==t[1]&&(t=(location.origin||location.protocol+"//"+location.host)+t),t}})},52003:(e,t,i)=>{"use strict";i.d(t,{F:()=>r,C:()=>o});const r=async(e,t,r=!1)=>{if(!e.parentNode)throw new Error("Cannot setup Leaflet map on disconnected element");const o=(await i.e(6085).then(i.t.bind(i,70208,23))).default;o.Icon.Default.imagePath="/static/images/leaflet/images/",r&&await i.e(7716).then(i.t.bind(i,27716,23));const s=o.map(e),a=document.createElement("link");a.setAttribute("href","/static/images/leaflet/leaflet.css"),a.setAttribute("rel","stylesheet"),e.parentNode.appendChild(a),s.setView([52.3731339,4.8903147],13);return[s,o,n(o,Boolean(t)).addTo(s)]},o=(e,t,i,r)=>(t.removeLayer(i),(i=n(e,r)).addTo(t),i),n=(e,t)=>e.tileLayer(`https://{s}.basemaps.cartocdn.com/${t?"dark_all":"light_all"}/{z}/{x}/{y}${e.Browser.retina?"@2x.png":".png"}`,{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",minZoom:0,maxZoom:20})},73589:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});const r=e=>{const t=parseFloat(e);if(isNaN(t))throw new Error(`${e} is not a number`);return t};function o(e){if(!e)return null;try{if(e.endsWith("%"))return{w:100,h:r(e.substr(0,e.length-1))};const t=e.replace(":","x").split("x");return 0===t.length?null:1===t.length?{w:r(t[0]),h:1}:{w:r(t[0]),h:r(t[1])}}catch(e){}return null}},11052:(e,t,i)=>{"use strict";i.d(t,{I:()=>n});var r=i(76389),o=i(47181);const n=(0,r.o)((e=>class extends e{fire(e,t,i){return i=i||{},(0,o.B)(i.node||this,e,t,i)}}))},60076:(e,t,i)=>{"use strict";i.r(t);var r=i(15652),o=i(81471),n=i(52003),s=i(58831),a=i(22311),l=i(91741),c=i(38346),d=i(73589),h=(i(22098),i(10983),i(58763)),u=(i(73085),i(15688)),f=i(54845),p=i(90271);function m(){m=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var o=t.placement;if(t.kind===r&&("static"===o||"prototype"===o)){var n="static"===o?e:i;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!v(e))return i.push(e);var t=this.decorateElement(e,o);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var n=this.decorateConstructor(i,t);return r.push.apply(r,n.finishers),n.finishers=r,n},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],o=e.decorators,n=o.length-1;n>=0;n--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[n])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var o=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[r])(o)||o);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){e=n.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?w(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=b(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:i,placement:r,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:k(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=k(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function g(e){var t,i=b(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function y(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function v(e){return e.decorators&&e.decorators.length}function _(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function k(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function b(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function E(e,t,i){return(E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(i):o.value}})(e,t,i||e)}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,i,r){var o=m();if(r)for(var n=0;n<r.length;n++)o=r[n](o);var s=t((function(e){o.initializeInstanceElements(e,a.elements)}),i),a=o.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},r=0;r<e.length;r++){var o,n=e[r];if("method"===n.kind&&(o=t.find(i)))if(_(n.descriptor)||_(o.descriptor)){if(v(n)||v(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(v(n)){if(v(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}y(n,o)}else t.push(n)}return t}(s.d.map(g)),e);o.initializeClassElements(s.F,a.elements),o.runClassFinishers(s.F,a.finishers)}([(0,r.Mo)("hui-map-card")],(function(e,t){class m extends t{constructor(...t){super(...t),e(this)}}return{F:m,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([i.e(9543),i.e(8374),i.e(6087),i.e(4507),i.e(4535),i.e(6902),i.e(7424)]).then(i.bind(i,44446)),document.createElement("hui-map-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,i){return{type:"map",entities:(0,u.j)(e,2,t,i,["device_tracker"])}}},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"isPanel",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)()],key:"_history",value:void 0},{kind:"field",key:"_date",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"_config",value:void 0},{kind:"field",key:"_configEntities",value:void 0},{kind:"field",key:"Leaflet",value:void 0},{kind:"field",key:"_leafletMap",value:void 0},{kind:"field",key:"_tileLayer",value:void 0},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"field",key:"_debouncedResizeListener",value(){return(0,c.D)((()=>{this.isConnected&&this._leafletMap&&this._leafletMap.invalidateSize()}),250,!1)}},{kind:"field",key:"_mapItems",value:()=>[]},{kind:"field",key:"_mapZones",value:()=>[]},{kind:"field",key:"_mapPaths",value:()=>[]},{kind:"field",key:"_colorDict",value:()=>({})},{kind:"field",key:"_colorIndex",value:()=>0},{kind:"field",key:"_colors",value:()=>["#0288D1","#00AA00","#984ea3","#00d2d5","#ff7f00","#af8d00","#7f80cd","#b3e900","#c42e60","#a65628","#f781bf","#8dd3c7"]},{kind:"method",key:"setConfig",value:function(e){var t;if(!e)throw new Error("Error in card configuration.");if(!(null===(t=e.entities)||void 0===t?void 0:t.length)&&!e.geo_location_sources)throw new Error("Either entities or geo_location_sources must be specified");if(e.entities&&!Array.isArray(e.entities))throw new Error("Entities need to be an array");if(e.geo_location_sources&&!Array.isArray(e.geo_location_sources))throw new Error("Geo_location_sources needs to be an array");this._config=e,this._configEntities=e.entities?(0,p.A)(e.entities):[],this._cleanupHistory()}},{kind:"method",key:"getCardSize",value:function(){var e;if(!(null===(e=this._config)||void 0===e?void 0:e.aspect_ratio))return 7;const t=(0,d.Z)(this._config.aspect_ratio),i=t&&t.w>0&&t.h>0?`${(100*t.h/t.w).toFixed(2)}`:"100";return 1+Math.floor(Number(i)/25)||3}},{kind:"method",key:"connectedCallback",value:function(){E(C(m.prototype),"connectedCallback",this).call(this),this._attachObserver(),this.hasUpdated&&this.loadMap()}},{kind:"method",key:"disconnectedCallback",value:function(){E(C(m.prototype),"disconnectedCallback",this).call(this),this._leafletMap&&(this._leafletMap.remove(),this._leafletMap=void 0,this.Leaflet=void 0),this._resizeObserver&&this._resizeObserver.unobserve(this._mapEl)}},{kind:"method",key:"render",value:function(){return this._config?r.dy`
      <ha-card id="card" .header=${this._config.title}>
        <div id="root">
          <div
            id="map"
            class=${(0,o.$)({dark:!0===this._config.dark_mode})}
          ></div>
          <ha-icon-button
            @click=${this._fitMap}
            tabindex="0"
            icon="hass:image-filter-center-focus"
            title="Reset focus"
          ></ha-icon-button>
        </div>
      </ha-card>
    `:r.dy``}},{kind:"method",key:"shouldUpdate",value:function(e){if(!e.has("hass")||e.size>1)return!0;const t=e.get("hass");if(!t||!this._configEntities)return!0;if(t.themes.darkMode!==this.hass.themes.darkMode)return!0;for(const e of this._configEntities)if(t.states[e.entity]!==this.hass.states[e.entity])return!0;return!1}},{kind:"method",key:"firstUpdated",value:function(e){E(C(m.prototype),"firstUpdated",this).call(this,e),this.isConnected&&this.loadMap();const t=this.shadowRoot.getElementById("root");if(!this._config||this.isPanel||!t)return;if(this._attachObserver(),!this._config.aspect_ratio)return void(t.style.paddingBottom="100%");const i=(0,d.Z)(this._config.aspect_ratio);t.style.paddingBottom=i&&i.w>0&&i.h>0?`${(100*i.h/i.w).toFixed(2)}%`:t.style.paddingBottom="100%"}},{kind:"method",key:"updated",value:function(e){var t,i;if((e.has("hass")||e.has("_history"))&&(this._drawEntities(),this._fitMap()),e.has("hass")){const t=e.get("hass");t&&t.themes.darkMode!==this.hass.themes.darkMode&&this._replaceTileLayer()}if(e.has("_config")&&void 0!==e.get("_config")&&this.updateMap(e.get("_config")),(null===(t=this._config)||void 0===t?void 0:t.hours_to_show)&&(null===(i=this._configEntities)||void 0===i?void 0:i.length)){const t=6e4;(e.has("_config")||Date.now()-this._date.getTime()>=t)&&this._getHistory()}}},{kind:"get",key:"_mapEl",value:function(){return this.shadowRoot.getElementById("map")}},{kind:"method",key:"loadMap",value:async function(){var e;[this._leafletMap,this.Leaflet,this._tileLayer]=await(0,n.F)(this._mapEl,null!==(e=this._config.dark_mode)&&void 0!==e?e:this.hass.themes.darkMode),this._drawEntities(),this._leafletMap.invalidateSize(),this._fitMap()}},{kind:"method",key:"_replaceTileLayer",value:function(){var e;const t=this._leafletMap,i=this._config,r=this.Leaflet;t&&i&&r&&this._tileLayer&&(this._tileLayer=(0,n.C)(r,t,this._tileLayer,null!==(e=this._config.dark_mode)&&void 0!==e?e:this.hass.themes.darkMode))}},{kind:"method",key:"updateMap",value:function(e){const t=this._leafletMap,i=this._config,r=this.Leaflet;t&&i&&r&&this._tileLayer&&(this._config.dark_mode!==e.dark_mode&&this._replaceTileLayer(),i.entities===e.entities&&i.geo_location_sources===e.geo_location_sources||this._drawEntities(),t.invalidateSize(),this._fitMap())}},{kind:"method",key:"_fitMap",value:function(){if(!(this._leafletMap&&this.Leaflet&&this._config&&this.hass))return;const e=this._config.default_zoom;if(0===this._mapItems.length)return void this._leafletMap.setView(new this.Leaflet.LatLng(this.hass.config.latitude,this.hass.config.longitude),e||14);const t=this.Leaflet.featureGroup(this._mapItems).getBounds();this._leafletMap.fitBounds(t.pad(.5)),e&&this._leafletMap.getZoom()>e&&this._leafletMap.setZoom(e)}},{kind:"method",key:"_getColor",value:function(e){let t;return this._colorDict[e]?t=this._colorDict[e]:(t=this._colors[this._colorIndex],this._colorIndex=(this._colorIndex+1)%this._colors.length,this._colorDict[e]=t),t}},{kind:"method",key:"_drawEntities",value:function(){const e=this.hass,t=this._leafletMap,i=this._config,r=this.Leaflet;if(!(e&&t&&i&&r))return;this._mapItems&&this._mapItems.forEach((e=>e.remove()));const o=this._mapItems=[];this._mapZones&&this._mapZones.forEach((e=>e.remove()));const n=this._mapZones=[];this._mapPaths&&this._mapPaths.forEach((e=>e.remove()));const c=this._mapPaths=[],d=this._configEntities.concat();if(i.geo_location_sources){const t=i.geo_location_sources.includes("all");for(const r of Object.keys(e.states)){const o=e.states[r];"geo_location"===(0,s.M)(r)&&(t||i.geo_location_sources.includes(o.attributes.source))&&d.push({entity:r})}}if(this._config.hours_to_show&&this._history)for(const e of this._history){if((null==e?void 0:e.length)<=1)continue;const t=e[0].entity_id,i=e.reduce(((e,t)=>{const i=t.attributes.latitude,r=t.attributes.longitude;return i&&r&&e.push([i,r]),e}),[]);for(let e=0;e<i.length-1;e++){const o=.2+e*(.8/(i.length-2));c.push(r.circleMarker(i[e],{radius:3,color:this._getColor(t),opacity:o,interactive:!1}));const n=[i[e],i[e+1]];c.push(r.polyline(n,{color:this._getColor(t),opacity:o,interactive:!1}))}}for(const t of d){const i=t.entity,s=e.states[i];if(!s)continue;const c=(0,l.C)(s),{latitude:d,longitude:h,passive:u,icon:f,radius:p,entity_picture:m,gps_accuracy:g}=s.attributes;if(!d||!h)continue;if("zone"===(0,a.N)(s)){if(u)continue;let e="";if(f){const t=document.createElement("ha-icon");t.setAttribute("icon",f),e=t.outerHTML}else{const t=document.createElement("span");t.innerHTML=c,e=t.outerHTML}n.push(r.marker([d,h],{icon:r.divIcon({html:e,iconSize:[24,24],className:this._config.dark_mode?"dark":!1===this._config.dark_mode?"light":""}),interactive:!1,title:c})),n.push(r.circle([d,h],{interactive:!1,color:"#FF9800",radius:p}));continue}const y=c.split(" ").map((e=>e[0])).join("").substr(0,3);o.push(r.marker([d,h],{icon:r.divIcon({html:`\n              <ha-entity-marker\n                entity-id="${i}"\n                entity-name="${y}"\n                entity-picture="${m||""}"\n                entity-color="${this._getColor(i)}"\n              ></ha-entity-marker>\n            `,iconSize:[48,48],className:""}),title:(0,l.C)(s)})),g&&o.push(r.circle([d,h],{interactive:!1,color:this._getColor(i),radius:g}))}this._mapItems.forEach((e=>t.addLayer(e))),this._mapZones.forEach((e=>t.addLayer(e))),this._mapPaths.forEach((e=>t.addLayer(e)))}},{kind:"method",key:"_attachObserver",value:async function(){this._resizeObserver||(await(0,f.P)(),this._resizeObserver=new ResizeObserver(this._debouncedResizeListener)),this._resizeObserver.observe(this)}},{kind:"method",key:"_getHistory",value:async function(){if(this._date=new Date,!this._configEntities)return;const e=this._configEntities.map((e=>e.entity)).join(","),t=new Date,i=new Date;i.setHours(t.getHours()-this._config.hours_to_show);const r=await(0,h.vq)(this.hass,e,i,t,!1,!1,!1);r.length<1||(this._history=r)}},{kind:"method",key:"_cleanupHistory",value:function(){if(this._history)if(this._config.hours_to_show<=0)this._history=void 0;else{var e;const t=null===(e=this._configEntities)||void 0===e?void 0:e.map((e=>e.entity));this._history=this._history.reduce(((e,i)=>{const r=i[0].entity_id;return(null==t?void 0:t.includes(r))&&e.push(i),e}),[])}}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`
      ha-card {
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      #map {
        z-index: 0;
        border: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: inherit;
      }

      ha-icon-button {
        position: absolute;
        top: 75px;
        left: 3px;
        outline: none;
      }

      #root {
        position: relative;
      }

      :host([ispanel]) #root {
        height: 100%;
      }

      .dark {
        color: #ffffff;
      }

      .light {
        color: #000000;
      }
    `}}]}}),r.oi)},73085:(e,t,i)=>{"use strict";i(44285);var r=i(50856),o=i(28426),n=i(11052);class s extends((0,n.I)(o.H3)){static get template(){return r.d`
      <style include="iron-positioning"></style>
      <style>
        .marker {
          position: relative;
          display: block;
          margin: 0 auto;
          width: 2.5em;
          text-align: center;
          height: 2.5em;
          line-height: 2.5em;
          font-size: 1.5em;
          border-radius: 50%;
          border: 0.1em solid var(--ha-marker-color, var(--primary-color));
          color: var(--primary-text-color);
          background-color: var(--card-background-color);
        }
        iron-image {
          border-radius: 50%;
        }
      </style>

      <div class="marker" style$="border-color:{{entityColor}}">
        <template is="dom-if" if="[[entityName]]">[[entityName]]</template>
        <template is="dom-if" if="[[entityPicture]]">
          <iron-image
            sizing="cover"
            class="fit"
            src="[[entityPicture]]"
          ></iron-image>
        </template>
      </div>
    `}static get properties(){return{hass:{type:Object},entityId:{type:String,value:""},entityName:{type:String,value:null},entityPicture:{type:String,value:null},entityColor:{type:String,value:null}}}ready(){super.ready(),this.addEventListener("click",(e=>this.badgeTap(e)))}badgeTap(e){e.stopPropagation(),this.entityId&&this.fire("hass-more-info",{entityId:this.entityId})}}customElements.define("ha-entity-marker",s)}}]);
//# sourceMappingURL=chunk.74274bf73ccf9b9f0934.js.map