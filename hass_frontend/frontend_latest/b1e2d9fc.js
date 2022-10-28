"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[11866],{24734:(e,t,r)=>{r.d(t,{B:()=>n});var i=r(47181);const n=(e,t)=>{(0,i.B)(e,"show-dialog",{dialogTag:"dialog-media-player-browse",dialogImport:()=>Promise.all([r.e(29563),r.e(98985),r.e(24103),r.e(88278),r.e(6294),r.e(85084),r.e(78874),r.e(9874),r.e(26695),r.e(77576),r.e(29925),r.e(31742),r.e(3143),r.e(16023),r.e(74535),r.e(49165),r.e(43937),r.e(57454)]).then(r.bind(r,52809)),dialogParams:t})}},11866:(e,t,r)=>{r.r(t),r.d(t,{HuiMediaControlCard:()=>D});r(62744);var i=r(37500),n=r(33310),o=r(8636),a=r(70483),s=r(62877),l=r(47181),c=r(91741),d=r(40095),h=r(67794),u=r.n(h),p=r(74790);const f=!1;u()._pipeline.generator.register("default",(e=>{e.sort(((e,t)=>t.population-e.population));const t=e[0];let r;const i=new Map,n=(e,r)=>(i.has(e)||i.set(e,(0,p.$o)(t.rgb,r)),i.get(e)>4.5);for(let t=1;t<e.length&&void 0===r;t++){if(n(e[t].hex,e[t].rgb)){f,r=e[t].rgb;break}const i=e[t];f;for(let o=t+1;o<e.length;o++){const t=e[o],a=Math.abs(i.rgb[0]-t.rgb[0])+Math.abs(i.rgb[1]-t.rgb[1])+Math.abs(i.rgb[2]-t.rgb[2]);if(!(a>150)&&n(t.hex,t.rgb)){f,r=t.rgb;break}}}return void 0===r&&(r=t.getYiq()<200?[255,255,255]:[0,0,0]),{foreground:new t.constructor(r,0),background:t}}));var m=r(38346),g=(r(22098),r(10983),r(87037),r(24734)),v=r(56007),y=r(69371),b=r(15688),k=r(53658),_=r(54845),w=(r(9829),r(75502));function E(){E=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!P(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?$(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=z(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:A(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=A(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function x(e){var t,r=z(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function C(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function P(e){return e.decorators&&e.decorators.length}function O(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function A(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function z(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function j(e,t,r){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}},j(e,t,r||e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}let D=function(e,t,r,i){var n=E();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(O(o.descriptor)||O(n.descriptor)){if(P(o)||P(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(P(o)){if(P(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}C(o,n)}else t.push(o)}return t}(a.d.map(x)),e);return n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,n.Mo)("hui-media-control-card")],(function(e,t){class h extends t{constructor(...t){super(...t),e(this)}}return{F:h,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([r.e(29563),r.e(98985),r.e(24103),r.e(88278),r.e(6294),r.e(78874),r.e(77576),r.e(74535),r.e(72)]).then(r.bind(r,52105)),document.createElement("hui-media-control-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,r){return{type:"media-control",entity:(0,b.j)(e,1,t,r,["media_player"])[0]||""}}},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_foregroundColor",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_backgroundColor",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_narrow",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_veryNarrow",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_cardHeight",value:()=>0},{kind:"field",decorators:[(0,n.IO)("mwc-linear-progress")],key:"_progressBar",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_marqueeActive",value:()=>!1},{kind:"field",key:"_progressInterval",value:void 0},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(e){if(!e.entity||"media_player"!==e.entity.split(".")[0])throw new Error("Specify an entity from within the media_player domain");this._config=e}},{kind:"method",key:"connectedCallback",value:function(){if(j(S(h.prototype),"connectedCallback",this).call(this),this.updateComplete.then((()=>this._attachObserver())),!this.hass||!this._config)return;const e=this._stateObj;e&&!this._progressInterval&&this._showProgressBar&&"playing"===e.state&&(this._progressInterval=window.setInterval((()=>this._updateProgressBar()),1e3))}},{kind:"method",key:"disconnectedCallback",value:function(){this._progressInterval&&(clearInterval(this._progressInterval),this._progressInterval=void 0),this._resizeObserver&&this._resizeObserver.disconnect()}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return i.dy``;const e=this._stateObj;if(!e)return i.dy`
        <hui-warning>
          ${(0,w.i)(this.hass,this._config.entity)}
        </hui-warning>
      `;const t={"background-image":this._image?`url(${this.hass.hassUrl(this._image)})`:"none",width:`${this._cardHeight}px`,"background-color":this._backgroundColor||""},r={"background-image":`linear-gradient(to right, ${this._backgroundColor}, ${this._backgroundColor+"00"})`,width:`${this._cardHeight}px`},n=e.state,s="off"===n,l=v.V_.includes(n)||"off"===n&&!(0,d.e)(e,y.rv),h=!this._image,u=(0,y.xt)(e,!1),p=u&&(!this._veryNarrow||s||"idle"===n||"on"===n),f=(0,y.Mj)(e),m=(0,y.WL)(e.attributes.media_title);return i.dy`
      <ha-card>
        <div
          class="background ${(0,o.$)({"no-image":h,off:s||l,unavailable:l})}"
        >
          <div
            class="color-block"
            style=${(0,a.V)({"background-color":this._backgroundColor||""})}
          ></div>
          <div
            class="no-img"
            style=${(0,a.V)({"background-color":this._backgroundColor||""})}
          ></div>
          <div class="image" style=${(0,a.V)(t)}></div>
          ${h?"":i.dy`
                <div
                  class="color-gradient"
                  style=${(0,a.V)(r)}
                ></div>
              `}
        </div>
        <div
          class="player ${(0,o.$)({"no-image":h,narrow:this._narrow&&!this._veryNarrow,off:s||l,"no-progress":this._veryNarrow||!this._showProgressBar,"no-controls":!p})}"
          style=${(0,a.V)({color:this._foregroundColor||""})}
        >
          <div class="top-info">
            <div class="icon-name">
              <ha-state-icon class="icon" .state=${e}></ha-state-icon>
              <div>
                ${this._config.name||(0,c.C)(this.hass.states[this._config.entity])}
              </div>
            </div>
            <div>
              <ha-icon-button
                .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}
                .label=${this.hass.localize("ui.panel.lovelace.cards.show_more_info")}
                class="more-info"
                @click=${this._handleMoreInfo}
              ></ha-icon-button>
            </div>
          </div>
          ${!l&&(f||m||p)?i.dy`
                <div>
                  <div class="title-controls">
                    ${f||m?i.dy`
                          <div class="media-info">
                            <hui-marquee
                              .text=${m||f}
                              .active=${this._marqueeActive}
                              @mouseover=${this._marqueeMouseOver}
                              @mouseleave=${this._marqueeMouseLeave}
                            ></hui-marquee>
                            ${m?f:""}
                          </div>
                        `:""}
                    ${p?i.dy`
                          <div class="controls">
                            ${u.map((e=>i.dy`
                                <ha-icon-button
                                  .label=${this.hass.localize(`ui.card.media_player.${e.action}`)}
                                  .path=${e.icon}
                                  action=${e.action}
                                  @click=${this._handleClick}
                                >
                                </ha-icon-button>
                              `))}
                            ${(0,d.e)(e,y.pu)?i.dy`
                                  <ha-icon-button
                                    class="browse-media"
                                    .label=${this.hass.localize("ui.card.media_player.browse_media")}
                                    .path=${"M4,6H2V20A2,2 0 0,0 4,22H18V20H4V6M20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M12,14.5V5.5L18,10L12,14.5Z"}
                                    @click=${this._handleBrowseMedia}
                                  ></ha-icon-button>
                                `:""}
                          </div>
                        `:""}
                  </div>
                  ${this._showProgressBar?i.dy`
                        <mwc-linear-progress
                          determinate
                          style=${(0,a.V)({"--mdc-theme-primary":this._foregroundColor||"var(--accent-color)",cursor:(0,d.e)(e,y.xh)?"pointer":"initial"})}
                          @click=${this._handleSeek}
                        >
                        </mwc-linear-progress>
                      `:""}
                </div>
              `:""}
        </div>
      </ha-card>
    `}},{kind:"method",key:"shouldUpdate",value:function(e){return(0,k.G)(this,e)}},{kind:"method",key:"firstUpdated",value:function(){this._attachObserver()}},{kind:"method",key:"willUpdate",value:function(e){var t,r;if(j(S(h.prototype),"willUpdate",this).call(this,e),this.hasUpdated||this._measureCard(),!this._config||!this.hass||!e.has("_config")&&!e.has("hass"))return;if(!this._stateObj)return this._progressInterval&&(clearInterval(this._progressInterval),this._progressInterval=void 0),this._foregroundColor=void 0,void(this._backgroundColor=void 0);const i=e.get("hass"),n=(null==i||null===(t=i.states[this._config.entity])||void 0===t?void 0:t.attributes.entity_picture_local)||(null==i||null===(r=i.states[this._config.entity])||void 0===r?void 0:r.attributes.entity_picture);if(!this._image)return this._foregroundColor=void 0,void(this._backgroundColor=void 0);this._image!==n&&this._setColors()}},{kind:"method",key:"updated",value:function(e){if(!this._config||!this.hass||!this._stateObj||!e.has("_config")&&!e.has("hass"))return;const t=this._stateObj,r=e.get("hass"),i=e.get("_config");r&&i&&r.themes===this.hass.themes&&i.theme===this._config.theme||(0,s.R)(this,this.hass.themes,this._config.theme),this._updateProgressBar(),!this._progressInterval&&this._showProgressBar&&"playing"===t.state?this._progressInterval=window.setInterval((()=>this._updateProgressBar()),1e3):!this._progressInterval||this._showProgressBar&&"playing"===t.state||(clearInterval(this._progressInterval),this._progressInterval=void 0)}},{kind:"get",key:"_image",value:function(){if(!this.hass||!this._config)return;const e=this._stateObj;return e?e.attributes.entity_picture_local||e.attributes.entity_picture:void 0}},{kind:"get",key:"_showProgressBar",value:function(){if(!this.hass||!this._config||this._narrow)return!1;const e=this._stateObj;return!!e&&(("playing"===e.state||"paused"===e.state)&&"media_duration"in e.attributes&&"media_position"in e.attributes)}},{kind:"method",key:"_measureCard",value:function(){const e=this.shadowRoot.querySelector("ha-card");e&&(this._narrow=e.offsetWidth<350,this._veryNarrow=e.offsetWidth<300,this._cardHeight=e.offsetHeight)}},{kind:"method",key:"_attachObserver",value:async function(){this._resizeObserver||(await(0,_.P)(),this._resizeObserver=new ResizeObserver((0,m.D)((()=>this._measureCard()),250,!1)));const e=this.shadowRoot.querySelector("ha-card");e&&this._resizeObserver.observe(e)}},{kind:"method",key:"_handleMoreInfo",value:function(){(0,l.B)(this,"hass-more-info",{entityId:this._config.entity})}},{kind:"method",key:"_handleBrowseMedia",value:function(){(0,g.B)(this,{action:"play",entityId:this._config.entity,mediaPickedCallback:e=>(0,y.qV)(this.hass,this._config.entity,e.item.media_content_id,e.item.media_content_type)})}},{kind:"method",key:"_handleClick",value:function(e){(0,y.kr)(this.hass,this._stateObj,e.currentTarget.getAttribute("action"))}},{kind:"method",key:"_updateProgressBar",value:function(){var e;this._progressBar&&null!==(e=this._stateObj)&&void 0!==e&&e.attributes.media_duration&&(this._progressBar.progress=(0,y.rs)(this._stateObj)/this._stateObj.attributes.media_duration)}},{kind:"get",key:"_stateObj",value:function(){return this.hass.states[this._config.entity]}},{kind:"method",key:"_handleSeek",value:function(e){const t=this._stateObj;if(!(0,d.e)(t,y.xh))return;const r=this._progressBar.offsetWidth,i=e.offsetX/r,n=this._stateObj.attributes.media_duration*i;this.hass.callService("media_player","media_seek",{entity_id:this._config.entity,seek_position:n})}},{kind:"method",key:"_setColors",value:async function(){if(this._image)try{const{foreground:e,background:t}=await((e,t=16)=>new(u())(e,{colorCount:t}).getPalette().then((({foreground:e,background:t})=>({background:t,foreground:e}))))(this.hass.hassUrl(this._image));this._backgroundColor=t.hex,this._foregroundColor=e.hex}catch(e){console.error("Error getting Image Colors",e),this._foregroundColor=void 0,this._backgroundColor=void 0}}},{kind:"method",key:"_marqueeMouseOver",value:function(){this._marqueeActive||(this._marqueeActive=!0)}},{kind:"method",key:"_marqueeMouseLeave",value:function(){this._marqueeActive&&(this._marqueeActive=!1)}},{kind:"get",static:!0,key:"styles",value:function(){return i.iv`
      ha-card {
        overflow: hidden;
        height: 100%;
      }

      .background {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        transition: filter 0.8s;
      }

      .color-block {
        background-color: var(--primary-color);
        transition: background-color 0.8s;
        width: 100%;
      }

      .color-gradient {
        position: absolute;
        background-image: linear-gradient(
          to right,
          var(--primary-color),
          transparent
        );
        height: 100%;
        right: 0;

        opacity: 1;
        transition: width 0.8s, opacity 0.8s linear 0.8s;
      }

      .image {
        background-color: var(--primary-color);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        right: 0;
        height: 100%;
        opacity: 1;
        transition: width 0.8s, background-image 0.8s, background-color 0.8s,
          background-size 0.8s, opacity 0.8s linear 0.8s;
      }

      .no-image .image {
        opacity: 0;
      }

      .no-img {
        background-color: var(--primary-color);
        background-size: initial;
        background-repeat: no-repeat;
        background-position: center center;
        padding-bottom: 0;
        position: absolute;
        right: 0;
        height: 100%;
        background-image: url("/static/images/card_media_player_bg.png");
        width: 50%;
        transition: opacity 0.8s, background-color 0.8s;
      }

      .off .image,
      .off .color-gradient {
        opacity: 0;
        transition: opacity 0s, width 0.8s;
        width: 0;
      }

      .unavailable .no-img,
      .background:not(.off):not(.no-image) .no-img {
        opacity: 0;
      }

      .player {
        position: relative;
        padding: 16px;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: var(--text-primary-color);
        transition-property: color, padding;
        transition-duration: 0.4s;
      }

      .controls {
        padding: 8px 8px 8px 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: padding, color;
        transition-duration: 0.4s;
        margin-left: -12px;
        margin-inline-start: -12px;
        margin-inline-end: initial;
        padding-inline-start: 0;
        padding-inline-end: 8px;
        direction: ltr;
      }

      .controls > div {
        display: flex;
        align-items: center;
      }

      .controls ha-icon-button {
        --mdc-icon-button-size: 44px;
        --mdc-icon-size: 30px;
      }

      ha-icon-button[action="media_play"],
      ha-icon-button[action="media_play_pause"],
      ha-icon-button[action="media_pause"],
      ha-icon-button[action="media_stop"],
      ha-icon-button[action="turn_on"],
      ha-icon-button[action="turn_off"] {
        --mdc-icon-button-size: 56px;
        --mdc-icon-size: 40px;
      }

      ha-icon-button.browse-media {
        position: absolute;
        right: 4px;
        --mdc-icon-size: 24px;
      }

      .top-info {
        display: flex;
        justify-content: space-between;
      }

      .icon-name {
        display: flex;
        height: fit-content;
        align-items: center;
      }

      .icon-name ha-state-icon {
        padding-right: 8px;
        padding-inline-start: initial;
        padding-inline-end: 8px;
        direction: var(--direction);
      }

      .more-info {
        position: absolute;
        top: 4px;
        right: 4px;
        inset-inline-start: initial;
        inset-inline-end: 4px;
        direction: var(--direction);
      }

      .media-info {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      hui-marquee {
        font-size: 1.2em;
        margin: 0px 0 4px;
      }

      .title-controls {
        padding-top: 16px;
      }

      mwc-linear-progress {
        width: 100%;
        margin-top: 4px;
        --mdc-linear-progress-buffer-color: rgba(200, 200, 200, 0.5);
      }

      .no-image .controls {
        padding: 0;
      }

      .off.background {
        filter: grayscale(1);
      }

      .narrow .controls,
      .no-progress .controls {
        padding-bottom: 0;
      }

      .narrow ha-icon-button {
        --mdc-icon-button-size: 40px;
        --mdc-icon-size: 28px;
      }

      .narrow ha-icon-button[action="media_play"],
      .narrow ha-icon-button[action="media_play_pause"],
      .narrow ha-icon-button[action="media_pause"],
      .narrow ha-icon-button[action="turn_on"] {
        --mdc-icon-button-size: 50px;
        --mdc-icon-size: 36px;
      }

      .narrow ha-icon-button.browse-media {
        --mdc-icon-size: 24px;
      }

      .no-progress.player:not(.no-controls) {
        padding-bottom: 0px;
      }
    `}}]}}),i.oi)},9829:(e,t,r)=>{var i=r(37500),n=r(33310);function o(){o=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!l(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=h(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:d(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=d(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function a(e){var t,r=h(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function s(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function l(e){return e.decorators&&e.decorators.length}function c(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function d(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function h(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function p(e,t,r){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}},p(e,t,r||e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}!function(e,t,r,i){var n=o();if(i)for(var d=0;d<i.length;d++)n=i[d](n);var h=t((function(e){n.initializeInstanceElements(e,u.elements)}),r),u=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(c(o.descriptor)||c(n.descriptor)){if(l(o)||l(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(l(o)){if(l(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}s(o,n)}else t.push(o)}return t}(h.d.map(a)),e);n.initializeClassElements(h.F,u.elements),n.runClassFinishers(h.F,u.finishers)}([(0,n.Mo)("hui-marquee")],(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,n.Cb)()],key:"text",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"active",value:void 0},{kind:"field",decorators:[(0,n.Cb)({reflect:!0,type:Boolean,attribute:"animating"})],key:"_animating",value:()=>!1},{kind:"method",key:"firstUpdated",value:function(e){p(f(r.prototype),"firstUpdated",this).call(this,e),this.addEventListener("mouseover",(()=>this.classList.add("hovering")),{capture:!0}),this.addEventListener("mouseout",(()=>this.classList.remove("hovering")))}},{kind:"method",key:"updated",value:function(e){p(f(r.prototype),"updated",this).call(this,e),e.has("text")&&this._animating&&(this._animating=!1),e.has("active")&&this.active&&this.offsetWidth<this.scrollWidth&&(this._animating=!0)}},{kind:"method",key:"render",value:function(){return this.text?i.dy`
      <div class="marquee-inner" @animationiteration=${this._onIteration}>
        <span>${this.text}</span>
        ${this._animating?i.dy` <span>${this.text}</span> `:""}
      </div>
    `:i.dy``}},{kind:"method",key:"_onIteration",value:function(){this.active||(this._animating=!1)}},{kind:"get",static:!0,key:"styles",value:function(){return i.iv`
      :host {
        display: flex;
        position: relative;
        align-items: center;
        height: 1.2em;
        contain: strict;
      }

      .marquee-inner {
        position: absolute;
        left: 0;
        right: 0;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      :host(.hovering) .marquee-inner {
        text-overflow: initial;
        overflow: initial;
      }

      :host([animating]) .marquee-inner {
        left: initial;
        right: initial;
        animation: marquee 10s linear infinite;
      }

      :host([animating]) .marquee-inner span {
        padding-right: 16px;
      }

      @keyframes marquee {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `}}]}}),i.oi)}}]);
//# sourceMappingURL=b1e2d9fc.js.map