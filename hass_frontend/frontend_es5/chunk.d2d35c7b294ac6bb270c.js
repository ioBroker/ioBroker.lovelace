/*! For license information please see chunk.d2d35c7b294ac6bb270c.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[101],{118:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var a=i(9),r=i(18);const s=Object(a.a)(t=>(class extends t{fire(t,e,i){return i=i||{},Object(r.a)(i.node||this,t,e,i)}}))},175:function(t,e,i){"use strict";var a=i(9);e.a=Object(a.a)(t=>(class extends t{static get properties(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}__computeLocalize(t){return t}}))},176:function(t,e,i){"use strict";var a=i(188);e.a=function(t){return void 0===t.attributes.friendly_name?Object(a.a)(t.entity_id).replace(/_/g," "):t.attributes.friendly_name||""}},179:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var a=i(0),r=(i(109),customElements.get("iron-icon")),s=!1,n=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(a.d)(e,t),e.prototype.listen=function(e,a,r){t.prototype.listen.call(this,e,a,r),s||"mdi"!==this._iconsetName||(s=!0,i.e(70).then(i.bind(null,215)))},e}(r);customElements.define("ha-icon",n)},180:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var a=i(121);function r(t){return Object(a.a)(t.entity_id)}},188:function(t,e,i){"use strict";function a(t){return t.substr(t.indexOf(".")+1)}i.d(e,"a",(function(){return a}))},255:function(t,e,i){"use strict";i(5);var a=i(6),r=i(4),s=i(20);Object(a.a)({_template:r.a`
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
`,is:"iron-image",properties:{src:{type:String,value:""},alt:{type:String,value:null},crossorigin:{type:String,value:null},preventLoad:{type:Boolean,value:!1},sizing:{type:String,value:null,reflectToAttribute:!0},position:{type:String,value:"center"},preload:{type:Boolean,value:!1},placeholder:{type:String,value:null,observer:"_placeholderChanged"},fade:{type:Boolean,value:!1},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1},width:{observer:"_widthChanged",type:Number,value:null},height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){this.$.img.src===this._resolveSrc(this.src)&&(this._setLoading(!1),this._setLoaded(!0),this._setError(!1))},_imgOnError:function(){this.$.img.src===this._resolveSrc(this.src)&&(this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",this._setLoading(!1),this._setLoaded(!1),this._setError(!0))},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){return null!==this.alt?this.alt:""===this.src?"":this._resolveSrc(this.src).replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(t,e){var i=this._resolveSrc(t);i!==this._resolvedSrc&&(this._resolvedSrc="",this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",""===t||e?(this._setLoading(!1),this._setLoaded(!1),this._setError(!1)):(this._resolvedSrc=i,this.$.img.src=this._resolvedSrc,this.$.sizedImgDiv.style.backgroundImage='url("'+this._resolvedSrc+'")',this._setLoading(!0),this._setLoaded(!1),this._setError(!1)))},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?'url("'+this.placeholder+'")':""},_transformChanged:function(){var t=this.$.sizedImgDiv.style,e=this.$.placeholder.style;t.backgroundSize=e.backgroundSize=this.sizing,t.backgroundPosition=e.backgroundPosition=this.sizing?this.position:"",t.backgroundRepeat=e.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(t){var e=Object(s.c)(t,this.$.baseURIAnchor.href);return e.length>=2&&"/"===e[0]&&"/"!==e[1]&&(e=(location.origin||location.protocol+"//"+location.host)+e),e}})},294:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"a",(function(){return s}));var a=i(0),r=function(t,e){return void 0===e&&(e=!1),Object(a.b)(void 0,void 0,void 0,(function(){var r,n,o;return Object(a.e)(this,(function(a){switch(a.label){case 0:if(!t.parentNode)throw new Error("Cannot setup Leaflet map on disconnected element");return[4,i.e(124).then(i.t.bind(null,367,7))];case 1:return(r=a.sent()).Icon.Default.imagePath="/static/images/leaflet/images/",n=r.map(t),(o=document.createElement("link")).setAttribute("href","/static/images/leaflet/leaflet.css"),o.setAttribute("rel","stylesheet"),t.parentNode.appendChild(o),n.setView([52.3731339,4.8903147],13),s(r,e).addTo(n),[2,[n,r]]}}))}))},s=function(t,e){return t.tileLayer("https://{s}.basemaps.cartocdn.com/"+(e?"dark_all":"light_all")+"/{z}/{x}/{y}"+(t.Browser.retina?"@2x.png":".png"),{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",minZoom:0,maxZoom:20})}},402:function(t,e,i){"use strict";i(255);var a=i(4),r=i(30),s=i(118);customElements.define("ha-entity-marker",class extends(Object(s.a)(r.a)){static get template(){return a.a`
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
          border: 0.1em solid
            var(--ha-marker-color, var(--default-primary-color));
          color: rgb(76, 76, 76);
          background-color: white;
        }
        iron-image {
          border-radius: 50%;
        }
      </style>

      <div class="marker">
        <template is="dom-if" if="[[entityName]]"
          >[[entityName]]</template
        >
        <template is="dom-if" if="[[entityPicture]]">
          <iron-image
            sizing="cover"
            class="fit"
            src="[[entityPicture]]"
          ></iron-image>
        </template>
      </div>
    `}static get properties(){return{hass:{type:Object},entityId:{type:String,value:""},entityName:{type:String,value:null},entityPicture:{type:String,value:null}}}ready(){super.ready(),this.addEventListener("click",t=>this.badgeTap(t))}badgeTap(t){t.stopPropagation(),this.entityId&&this.fire("hass-more-info",{entityId:this.entityId})}})},673:function(t,e,i){"use strict";i.r(e);i(150);var a=i(4),r=i(30),s=(i(129),i(179),i(402),i(180)),n=i(176),o=i(175),l=i(294);customElements.define("ha-panel-map",class extends(Object(o.a)(r.a)){static get template(){return a.a`
      <style include="ha-style">
        #map {
          height: calc(100% - 64px);
          width: 100%;
          z-index: 0;
        }
      </style>

      <app-toolbar>
        <ha-menu-button hass="[[hass]]" narrow="[[narrow]]"></ha-menu-button>
        <div main-title>[[localize('panel.map')]]</div>
      </app-toolbar>

      <div id="map"></div>
    `}static get properties(){return{hass:{type:Object,observer:"drawEntities"},narrow:Boolean}}connectedCallback(){super.connectedCallback(),this.loadMap()}async loadMap(){[this._map,this.Leaflet]=await Object(l.b)(this.$.map),this.drawEntities(this.hass),this._map.invalidateSize(),this.fitMap()}disconnectedCallback(){this._map&&this._map.remove()}fitMap(){var t;0===this._mapItems.length?this._map.setView(new this.Leaflet.LatLng(this.hass.config.latitude,this.hass.config.longitude),14):(t=new this.Leaflet.latLngBounds(this._mapItems.map(t=>t.getLatLng())),this._map.fitBounds(t.pad(.5)))}drawEntities(t){var e=this._map;if(e){this._mapItems&&this._mapItems.forEach((function(t){t.remove()}));var i=this._mapItems=[];Object.keys(t.states).forEach(a=>{var r=t.states[a],o=Object(n.a)(r);if(!(r.attributes.hidden&&"zone"!==Object(s.a)(r)||"home"===r.state)&&"latitude"in r.attributes&&"longitude"in r.attributes){var l;if("zone"===Object(s.a)(r)){if(r.attributes.passive)return;var c="";if(r.attributes.icon){const t=document.createElement("ha-icon");t.setAttribute("icon",r.attributes.icon),c=t.outerHTML}else c=o;return l=this.Leaflet.divIcon({html:c,iconSize:[24,24],className:""}),i.push(this.Leaflet.marker([r.attributes.latitude,r.attributes.longitude],{icon:l,interactive:!1,title:o}).addTo(e)),void i.push(this.Leaflet.circle([r.attributes.latitude,r.attributes.longitude],{interactive:!1,color:"#FF9800",radius:r.attributes.radius}).addTo(e))}var d=r.attributes.entity_picture||"",u=o.split(" ").map((function(t){return t.substr(0,1)})).join("");l=this.Leaflet.divIcon({html:"<ha-entity-marker entity-id='"+r.entity_id+"' entity-name='"+u+"' entity-picture='"+d+"'></ha-entity-marker>",iconSize:[45,45],className:""}),i.push(this.Leaflet.marker([r.attributes.latitude,r.attributes.longitude],{icon:l,title:Object(n.a)(r)}).addTo(e)),r.attributes.gps_accuracy&&i.push(this.Leaflet.circle([r.attributes.latitude,r.attributes.longitude],{interactive:!1,color:"#0288D1",radius:r.attributes.gps_accuracy}).addTo(e))}})}}})}}]);
//# sourceMappingURL=chunk.d2d35c7b294ac6bb270c.js.map