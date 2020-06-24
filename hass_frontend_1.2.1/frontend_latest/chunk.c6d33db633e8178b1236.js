/*! For license information please see chunk.c6d33db633e8178b1236.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[188],{216:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var r=i(8),o=i(12);const n=Object(r.a)(e=>class extends e{fire(e,t,i){return i=i||{},Object(o.a)(i.node||this,e,t,i)}})},336:function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"a",(function(){return o}));const r=async(e,t=!1,r=!1)=>{if(!e.parentNode)throw new Error("Cannot setup Leaflet map on disconnected element");const n=(await i.e(154).then(i.t.bind(null,393,7))).default;n.Icon.Default.imagePath="/static/images/leaflet/images/",r&&await i.e(155).then(i.t.bind(null,394,7));const s=n.map(e),a=document.createElement("link");return a.setAttribute("href","/static/images/leaflet/leaflet.css"),a.setAttribute("rel","stylesheet"),e.parentNode.appendChild(a),s.setView([52.3731339,4.8903147],13),o(n,t).addTo(s),[s,n]},o=(e,t)=>e.tileLayer(`https://{s}.basemaps.cartocdn.com/${t?"dark_all":"light_all"}/{z}/{x}/{y}${e.Browser.retina?"@2x.png":".png"}`,{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",minZoom:0,maxZoom:20})},362:function(e,t,i){"use strict";i(4);var r=i(5),o=i(3),n=i(17);Object(r.a)({_template:o.a`
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
`,is:"iron-image",properties:{src:{type:String,value:""},alt:{type:String,value:null},crossorigin:{type:String,value:null},preventLoad:{type:Boolean,value:!1},sizing:{type:String,value:null,reflectToAttribute:!0},position:{type:String,value:"center"},preload:{type:Boolean,value:!1},placeholder:{type:String,value:null,observer:"_placeholderChanged"},fade:{type:Boolean,value:!1},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1},width:{observer:"_widthChanged",type:Number,value:null},height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){this.$.img.src===this._resolveSrc(this.src)&&(this._setLoading(!1),this._setLoaded(!0),this._setError(!1))},_imgOnError:function(){this.$.img.src===this._resolveSrc(this.src)&&(this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",this._setLoading(!1),this._setLoaded(!1),this._setError(!0))},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){return null!==this.alt?this.alt:""===this.src?"":this._resolveSrc(this.src).replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(e,t){var i=this._resolveSrc(e);i!==this._resolvedSrc&&(this._resolvedSrc="",this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",""===e||t?(this._setLoading(!1),this._setLoaded(!1),this._setError(!1)):(this._resolvedSrc=i,this.$.img.src=this._resolvedSrc,this.$.sizedImgDiv.style.backgroundImage='url("'+this._resolvedSrc+'")',this._setLoading(!0),this._setLoaded(!1),this._setError(!1)))},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?'url("'+this.placeholder+'")':""},_transformChanged:function(){var e=this.$.sizedImgDiv.style,t=this.$.placeholder.style;e.backgroundSize=t.backgroundSize=this.sizing,e.backgroundPosition=t.backgroundPosition=this.sizing?this.position:"",e.backgroundRepeat=t.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(e){var t=Object(n.c)(e,this.$.baseURIAnchor.href);return t.length>=2&&"/"===t[0]&&"/"!==t[1]&&(t=(location.origin||location.protocol+"//"+location.host)+t),t}})},399:function(e,t,i){"use strict";i(362);var r=i(3),o=i(30),n=i(216);class s extends(Object(n.a)(o.a)){static get template(){return r.a`
      <style include="iron-positioning"></style>
      <style>
        .marker {
          vertical-align: top;
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
          color: rgb(76, 76, 76);
          background-color: white;
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
    `}static get properties(){return{hass:{type:Object},entityId:{type:String,value:""},entityName:{type:String,value:null},entityPicture:{type:String,value:null},entityColor:{type:String,value:null}}}ready(){super.ready(),this.addEventListener("click",e=>this.badgeTap(e))}badgeTap(e){e.stopPropagation(),this.entityId&&this.fire("hass-more-info",{entityId:this.entityId})}}customElements.define("ha-entity-marker",s)},437:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));const r=e=>{const t=parseFloat(e);if(isNaN(t))throw new Error(e+" is not a number");return t};function o(e){if(!e)return null;try{if(e.endsWith("%"))return{w:100,h:r(e.substr(0,e.length-1))};const t=e.replace(":","x").split("x");return 0===t.length?null:1===t.length?{w:r(t[0]),h:1}:{w:r(t[0]),h:r(t[1])}}catch(t){}return null}},902:function(e,t,i){"use strict";i.r(t);i(181);var r=i(0),o=i(50),n=i(336),s=i(152),a=i(217),l=i(206),c=i(85),d=i(437),h=i(346),u=(i(399),i(269)),f=i(321),p=(i(208),i(367));function m(e){var t,i=b(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function g(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function y(e){return e.decorators&&e.decorators.length}function v(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function _(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function b(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function w(e,t,i){return(w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(i):o.value}})(e,t,i||e)}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,i,r){var o=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var o=t.placement;if(t.kind===r&&("static"===o||"prototype"===o)){var n="static"===o?e:i;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!y(e))return i.push(e);var t=this.decorateElement(e,o);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var n=this.decorateConstructor(i,t);return r.push.apply(r,n.finishers),n.finishers=r,n},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],o=e.decorators,n=o.length-1;n>=0;n--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[n])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var o=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[r])(o)||o);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){e=n.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?k(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=b(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:i,placement:r,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:_(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=_(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}();if(r)for(var n=0;n<r.length;n++)o=r[n](o);var s=t((function(e){o.initializeInstanceElements(e,a.elements)}),i),a=o.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},r=0;r<e.length;r++){var o,n=e[r];if("method"===n.kind&&(o=t.find(i)))if(v(n.descriptor)||v(o.descriptor)){if(y(n)||y(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(y(n)){if(y(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}g(n,o)}else t.push(n)}return t}(s.d.map(m)),e);o.initializeClassElements(s.F,a.elements),o.runClassFinishers(s.F,a.finishers)}([Object(r.d)("hui-map-card")],(function(e,t){class m extends t{constructor(...t){super(...t),e(this)}}return{F:m,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([i.e(4),i.e(5),i.e(149),i.e(22),i.e(77)]).then(i.bind(null,869)),document.createElement("hui-map-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,i){return{type:"map",entities:Object(u.a)(e,2,t,i,["device_tracker"])}}},{kind:"field",decorators:[Object(r.h)()],key:"hass",value:void 0},{kind:"field",decorators:[Object(r.h)({type:Boolean,reflect:!0})],key:"isPanel",value:()=>!1},{kind:"field",decorators:[Object(r.h)({type:Boolean,reflect:!0})],key:"editMode",value:()=>!1},{kind:"field",decorators:[Object(r.h)()],key:"_history",value:void 0},{kind:"field",key:"_date",value:void 0},{kind:"field",decorators:[Object(r.h)()],key:"_config",value:void 0},{kind:"field",key:"_configEntities",value:void 0},{kind:"field",key:"Leaflet",value:void 0},{kind:"field",key:"_leafletMap",value:void 0},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"field",key:"_debouncedResizeListener",value(){return Object(c.a)(()=>{this.isConnected&&this._leafletMap&&this._leafletMap.invalidateSize()},250,!1)}},{kind:"field",key:"_mapItems",value:()=>[]},{kind:"field",key:"_mapZones",value:()=>[]},{kind:"field",key:"_mapPaths",value:()=>[]},{kind:"field",key:"_colorDict",value:()=>({})},{kind:"field",key:"_colorIndex",value:()=>0},{kind:"field",key:"_colors",value:()=>["#0288D1","#00AA00","#984ea3","#00d2d5","#ff7f00","#af8d00","#7f80cd","#b3e900","#c42e60","#a65628","#f781bf","#8dd3c7"]},{kind:"method",key:"setConfig",value:function(e){if(!e)throw new Error("Error in card configuration.");if(!e.entities&&!e.geo_location_sources)throw new Error("Either entities or geo_location_sources must be defined");if(e.entities&&!Array.isArray(e.entities))throw new Error("Entities need to be an array");if(e.geo_location_sources&&!Array.isArray(e.geo_location_sources))throw new Error("Geo_location_sources needs to be an array");this._config=e,this._configEntities=e.entities?Object(f.a)(e.entities):[],this._cleanupHistory()}},{kind:"method",key:"getCardSize",value:function(){var e;if(!(null===(e=this._config)||void 0===e?void 0:e.aspect_ratio))return 5;const t=Object(d.a)(this._config.aspect_ratio),i=t&&t.w>0&&t.h>0?""+(100*t.h/t.w).toFixed(2):"100";return 1+Math.floor(Number(i)/25)||3}},{kind:"method",key:"connectedCallback",value:function(){w(E(m.prototype),"connectedCallback",this).call(this),this._attachObserver(),this.hasUpdated&&this.loadMap()}},{kind:"method",key:"disconnectedCallback",value:function(){w(E(m.prototype),"disconnectedCallback",this).call(this),this._leafletMap&&(this._leafletMap.remove(),this._leafletMap=void 0,this.Leaflet=void 0),this._resizeObserver&&this._resizeObserver.unobserve(this._mapEl)}},{kind:"method",key:"render",value:function(){return this._config?r.f`
      <ha-card id="card" .header=${this._config.title}>
        <div id="root">
          <div
            id="map"
            class=${Object(o.a)({dark:!0===this._config.dark_mode})}
          ></div>
          <ha-icon-button
            @click=${this._fitMap}
            tabindex="0"
            icon="hass:image-filter-center-focus"
            title="Reset focus"
          ></ha-icon-button>
        </div>
      </ha-card>
    `:r.f``}},{kind:"method",key:"shouldUpdate",value:function(e){if(!e.has("hass")||e.size>1)return!0;const t=e.get("hass");if(!t||!this._configEntities)return!0;for(const i of this._configEntities)if(t.states[i.entity]!==this.hass.states[i.entity])return!0;return!1}},{kind:"method",key:"firstUpdated",value:function(e){w(E(m.prototype),"firstUpdated",this).call(this,e),this.isConnected&&this.loadMap();const t=this.shadowRoot.getElementById("root");if(!this._config||this.isPanel||!t)return;if(this._attachObserver(),!this._config.aspect_ratio)return void(t.style.paddingBottom="100%");const i=Object(d.a)(this._config.aspect_ratio);t.style.paddingBottom=i&&i.w>0&&i.h>0?(100*i.h/i.w).toFixed(2)+"%":t.style.paddingBottom="100%"}},{kind:"method",key:"updated",value:function(e){var t;if((e.has("hass")||e.has("_history"))&&(this._drawEntities(),this._fitMap()),e.has("_config")&&void 0!==e.get("_config")&&this.updateMap(e.get("_config")),this._config.hours_to_show&&(null===(t=this._configEntities)||void 0===t?void 0:t.length)){const t=6e4;(e.has("_config")||Date.now()-this._date.getTime()>=t)&&this._getHistory()}}},{kind:"get",key:"_mapEl",value:function(){return this.shadowRoot.getElementById("map")}},{kind:"method",key:"loadMap",value:async function(){[this._leafletMap,this.Leaflet]=await Object(n.b)(this._mapEl,void 0!==this._config&&!0===this._config.dark_mode),this._drawEntities(),this._leafletMap.invalidateSize(),this._fitMap()}},{kind:"method",key:"updateMap",value:function(e){const t=this._leafletMap,i=this._config,r=this.Leaflet;t&&i&&r&&(i.dark_mode!==e.dark_mode&&Object(n.a)(r,!0===i.dark_mode).addTo(t),i.entities===e.entities&&i.geo_location_sources===e.geo_location_sources||this._drawEntities(),t.invalidateSize(),this._fitMap())}},{kind:"method",key:"_fitMap",value:function(){if(!(this._leafletMap&&this.Leaflet&&this._config&&this.hass))return;const e=this._config.default_zoom;if(0===this._mapItems.length)return void this._leafletMap.setView(new this.Leaflet.LatLng(this.hass.config.latitude,this.hass.config.longitude),e||14);const t=this.Leaflet.featureGroup(this._mapItems).getBounds();this._leafletMap.fitBounds(t.pad(.5)),e&&this._leafletMap.getZoom()>e&&this._leafletMap.setZoom(e)}},{kind:"method",key:"_getColor",value:function(e){let t;return this._colorDict[e]?t=this._colorDict[e]:(t=this._colors[this._colorIndex],this._colorIndex=(this._colorIndex+1)%this._colors.length,this._colorDict[e]=t),t}},{kind:"method",key:"_drawEntities",value:function(){const e=this.hass,t=this._leafletMap,i=this._config,r=this.Leaflet;if(!(e&&t&&i&&r))return;this._mapItems&&this._mapItems.forEach(e=>e.remove());const o=this._mapItems=[];this._mapZones&&this._mapZones.forEach(e=>e.remove());const n=this._mapZones=[];this._mapPaths&&this._mapPaths.forEach(e=>e.remove());const c=this._mapPaths=[],d=this._configEntities.concat();if(i.geo_location_sources){const t=i.geo_location_sources.includes("all");for(const r of Object.keys(e.states)){const o=e.states[r];"geo_location"===Object(s.a)(r)&&(t||i.geo_location_sources.includes(o.attributes.source))&&d.push({entity:r})}}if(this._config.hours_to_show&&this._history)for(const s of this._history){if((null==s?void 0:s.length)<=1)continue;const e=s[0].entity_id,t=s.reduce((e,t)=>{const i=t.attributes.latitude,r=t.attributes.longitude;return i&&r&&e.push([i,r]),e},[]);for(let i=0;i<t.length-1;i++){const o=.2+i*(.8/(t.length-2));c.push(r.circleMarker(t[i],{radius:3,color:this._getColor(e),opacity:o,interactive:!1}));const n=[t[i],t[i+1]];c.push(r.polyline(n,{color:this._getColor(e),opacity:o,interactive:!1}))}}for(const s of d){const t=s.entity,i=e.states[t];if(!i)continue;const c=Object(l.a)(i),{latitude:d,longitude:h,passive:u,icon:f,radius:p,entity_picture:m,gps_accuracy:g}=i.attributes;if(!d||!h)continue;if("zone"===Object(a.a)(i)){if(u)continue;let e="";if(f){const t=document.createElement("ha-icon");t.setAttribute("icon",f),e=t.outerHTML}else{const t=document.createElement("span");t.innerHTML=c,e=t.outerHTML}n.push(r.marker([d,h],{icon:r.divIcon({html:e,iconSize:[24,24],className:!0===this._config.dark_mode?"dark":"light"}),interactive:!1,title:c})),n.push(r.circle([d,h],{interactive:!1,color:"#FF9800",radius:p}));continue}const y=c.split(" ").map(e=>e[0]).join("").substr(0,3);o.push(r.marker([d,h],{icon:r.divIcon({html:`\n              <ha-entity-marker\n                entity-id="${t}"\n                entity-name="${y}"\n                entity-picture="${m||""}"\n                entity-color="${this._getColor(t)}"\n              ></ha-entity-marker>\n            `,iconSize:[48,48],className:""}),title:Object(l.a)(i)})),g&&o.push(r.circle([d,h],{interactive:!1,color:this._getColor(t),radius:g}))}this._mapItems.forEach(e=>t.addLayer(e)),this._mapZones.forEach(e=>t.addLayer(e)),this._mapPaths.forEach(e=>t.addLayer(e))}},{kind:"method",key:"_attachObserver",value:async function(){this._resizeObserver||(await Object(p.a)(),this._resizeObserver=new ResizeObserver(this._debouncedResizeListener)),this._resizeObserver.observe(this)}},{kind:"method",key:"_getHistory",value:async function(){if(this._date=new Date,!this._configEntities)return;const e=this._configEntities.map(e=>e.entity).join(","),t=new Date,i=new Date;i.setHours(t.getHours()-this._config.hours_to_show);const r=await Object(h.c)(this.hass,e,i,t,!1,!1,!1);r.length<1||(this._history=r)}},{kind:"method",key:"_cleanupHistory",value:function(){if(this._history)if(this._config.hours_to_show<=0)this._history=void 0;else{var e;const t=null===(e=this._configEntities)||void 0===e?void 0:e.map(e=>e.entity);this._history=this._history.reduce((e,i)=>{const r=i[0].entity_id;return(null==t?void 0:t.includes(r))&&e.push(i),e},[])}}},{kind:"get",static:!0,key:"styles",value:function(){return r.c`
      :host([ispanel]) ha-card {
        width: 100%;
        height: 100%;
      }

      :host([ispanel][editMode]) ha-card {
        height: calc(100% - 51px);
      }

      ha-card {
        overflow: hidden;
      }

      #map {
        z-index: 0;
        border: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fafaf8;
      }

      #map.dark {
        background: #090909;
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
    `}}]}}),r.a)}}]);
//# sourceMappingURL=chunk.c6d33db633e8178b1236.js.map