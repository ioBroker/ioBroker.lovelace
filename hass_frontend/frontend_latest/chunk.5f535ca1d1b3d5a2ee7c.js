(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[1855],{5435:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});const i=[60,60,24,7],n=["second","minute","hour","day"];function o(e,t,r={}){let o=((r.compareTime||new Date).getTime()-e.getTime())/1e3;const a=o>=0?"past":"future";o=Math.abs(o);let s=Math.round(o);if(0===s)return t("ui.components.relative_time.just_now");let l="week";for(let c=0;c<i.length;c++){if(s<i[c]){l=n[c];break}o/=i[c],s=Math.round(o)}return t(!1===r.includeTense?"ui.components.relative_time.duration."+l:`ui.components.relative_time.${a}_duration.${l}`,"count",s)}},32075:(e,t,r)=>{"use strict";var i=r(87156),n=r(28426),o=r(5435),a=r(1265);class s extends((0,a.Z)(n.H3)){static get properties(){return{hass:Object,datetime:{type:String,observer:"datetimeChanged"},datetimeObj:{type:Object,observer:"datetimeObjChanged"},parsedDateTime:Object}}constructor(){super(),this.updateRelative=this.updateRelative.bind(this)}connectedCallback(){super.connectedCallback(),this.updateInterval=setInterval(this.updateRelative,6e4)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.updateInterval)}datetimeChanged(e){this.parsedDateTime=e?new Date(e):null,this.updateRelative()}datetimeObjChanged(e){this.parsedDateTime=e,this.updateRelative()}updateRelative(){const e=(0,i.vz)(this);this.parsedDateTime?e.innerHTML=(0,o.Z)(this.parsedDateTime,this.localize):e.innerHTML=this.localize("ui.components.relative_time.never")}}customElements.define("ha-relative-time",s)},55422:(e,t,r)=>{"use strict";r.d(t,{jV:()=>l,rM:()=>d,tf:()=>h});var i=r(49706),n=r(58831),o=r(29171),a=r(56007);const s="ui.components.logbook.messages",l=["proximity","sensor"],c={},d=async(e,t,r,i,o)=>{const a=await u(e,t,r,i,o);for(const s of a){const t=e.states[s.entity_id];s.state&&t&&(s.message=f(e,s.state,t,(0,n.M)(s.entity_id)))}return a},u=async(e,t,r,i,n)=>{const o="*";i||(i=o);const a=`${t}${r}`;if(c[a]||(c[a]={}),c[a][i])return c[a][i];if(i!==o&&c[a]["*"]){return(await c[a]["*"]).filter((e=>e.entity_id===i))}return c[a][i]=p(e,t,r,i!==o?i:void 0,n).then((e=>e.reverse())),c[a][i]},p=async(e,t,r,i,n)=>{const o=`logbook/${t}?end_time=${r}${i?"&entity="+i:""}${n?"&entity_matches_only":""}`;return e.callApi("GET",o)},h=(e,t)=>{c[`${e}${t}`]={}},f=(e,t,r,n)=>{switch(n){case"device_tracker":case"person":return"not_home"===t?e.localize(s+".was_away"):e.localize(s+".was_at_state","state",t);case"sun":return"above_horizon"===t?e.localize(s+".rose"):e.localize(s+".set");case"binary_sensor":{const n=t===i.uo,o=t===i.lC,a=r.attributes.device_class;switch(a){case"battery":if(n)return e.localize(s+".was_low");if(o)return e.localize(s+".was_normal");break;case"connectivity":if(n)return e.localize(s+".was_connected");if(o)return e.localize(s+".was_disconnected");break;case"door":case"garage_door":case"opening":case"window":if(n)return e.localize(s+".was_opened");if(o)return e.localize(s+".was_closed");break;case"lock":if(n)return e.localize(s+".was_unlocked");if(o)return e.localize(s+".was_locked");break;case"plug":if(n)return e.localize(s+".was_plugged_in");if(o)return e.localize(s+".was_unplugged");break;case"presence":if(n)return e.localize(s+".was_at_home");if(o)return e.localize(s+".was_away");break;case"safety":if(n)return e.localize(s+".was_unsafe");if(o)return e.localize(s+".was_safe");break;case"cold":case"gas":case"heat":case"colightld":case"moisture":case"motion":case"occupancy":case"power":case"problem":case"smoke":case"sound":case"vibration":if(n)return e.localize(s+".detected_device_class","device_class",a);if(o)return e.localize(s+".cleared_device_class","device_class",a)}break}case"cover":return"open"===t?e.localize(s+".was_opened"):e.localize(s+".was_closed");case"lock":if("unlocked"===t)return e.localize(s+".was_unlocked");if("locked"===t)return e.localize(s+".was_locked")}return t===i.uo?e.localize(s+".turned_on"):t===i.lC?e.localize(s+".turned_off"):a.V_.includes(t)?e.localize(s+".became_unavailable"):e.localize(s+".changed_to_state","state",r?(0,o.D)(e.localize,r,e.language,t):t)}},97740:(e,t,r)=>{"use strict";var i=r(15652),n=r(81471),o=r(55755),a=r(12198),s=r(49684),l=r(25516),c=r(47181),d=r(58831),u=r(76151),p=r(87744),h=(r(31206),r(16509),r(32075),r(11654));function f(){f=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!y(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=k(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:g(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=g(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function m(e){var t,r=k(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function v(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function y(e){return e.decorators&&e.decorators.length}function b(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function g(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function k(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=f();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(b(o.descriptor)||b(n.descriptor)){if(y(o)||y(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(y(o)){if(y(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}v(o,n)}else t.push(o)}return t}(a.d.map(m)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,i.Mo)("ha-logbook")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"userIdToName",value:()=>({})},{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"entries",value:()=>[]},{kind:"field",decorators:[(0,i.Cb)({type:Boolean,attribute:"narrow"})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,i.Cb)({attribute:"rtl",type:Boolean})],key:"_rtl",value:()=>!1},{kind:"field",decorators:[(0,i.Cb)({type:Boolean,attribute:"virtualize",reflect:!0})],key:"virtualize",value:()=>!1},{kind:"field",decorators:[(0,i.Cb)({type:Boolean,attribute:"no-icon"})],key:"noIcon",value:()=>!1},{kind:"field",decorators:[(0,i.Cb)({type:Boolean,attribute:"no-name"})],key:"noName",value:()=>!1},{kind:"field",decorators:[(0,i.Cb)({type:Boolean,attribute:"relative-time"})],key:"relativeTime",value:()=>!1},{kind:"field",decorators:[(0,l.i)(".container")],key:"_savedScrollPos",value:void 0},{kind:"method",key:"shouldUpdate",value:function(e){const t=e.get("hass"),r=void 0===t||t.language!==this.hass.language;return e.has("entries")||r}},{kind:"method",key:"updated",value:function(e){const t=e.get("hass");void 0!==t&&t.language===this.hass.language||(this._rtl=(0,p.HE)(this.hass))}},{kind:"method",key:"render",value:function(){var e;return(null===(e=this.entries)||void 0===e?void 0:e.length)?i.dy`
      <div
        class="container ${(0,n.$)({narrow:this.narrow,rtl:this._rtl,"no-name":this.noName,"no-icon":this.noIcon})}"
        @scroll=${this._saveScrollPos}
      >
        ${this.virtualize?(0,o.AR)({items:this.entries,renderItem:(e,t)=>this._renderLogbookItem(e,t)}):this.entries.map(((e,t)=>this._renderLogbookItem(e,t)))}
      </div>
    `:i.dy`
        <div class="container no-entries" .dir=${(0,p.$3)(this._rtl)}>
          ${this.hass.localize("ui.components.logbook.entries_not_found")}
        </div>
      `}},{kind:"method",key:"_renderLogbookItem",value:function(e,t){var r;if(void 0===t)return i.dy``;const o=this.entries[t-1],l=e.entity_id?this.hass.states[e.entity_id]:void 0,c=e.context_user_id&&this.userIdToName[e.context_user_id];return i.dy`
      <div class="entry-container">
        ${0===t||(null==e?void 0:e.when)&&(null==o?void 0:o.when)&&new Date(e.when).toDateString()!==new Date(o.when).toDateString()?i.dy`
              <h4 class="date">
                ${(0,a.p)(new Date(e.when),this.hass.language)}
              </h4>
            `:i.dy``}

        <div class="entry ${(0,n.$)({"no-entity":!e.entity_id})}">
          <div class="icon-message">
            ${this.noIcon?"":i.dy`
                  <ha-icon
                    .icon=${null!==(r=e.icon)&&void 0!==r?r:(0,u.K)(e.entity_id?(0,d.M)(e.entity_id):e.domain,l,e.state)}
                  ></ha-icon>
                `}
            <div class="message-relative_time">
              <div class="message">
                ${this.noName?"":i.dy`<a
                      href="#"
                      @click=${this._entityClicked}
                      .entityId=${e.entity_id}
                      ><span class="name">${e.name}</span></a
                    >`}
                ${e.message}
                ${c?` ${this.hass.localize("ui.components.logbook.by")} ${c}`:e.context_event_type?"call_service"===e.context_event_type?` ${this.hass.localize("ui.components.logbook.by_service")}\n                  ${e.context_domain}.${e.context_service}`:e.context_entity_id===e.entity_id?` ${this.hass.localize("ui.components.logbook.by")}\n                  ${e.context_name?e.context_name:e.context_event_type}`:i.dy` ${this.hass.localize("ui.components.logbook.by")}
                      <a
                        href="#"
                        @click=${this._entityClicked}
                        .entityId=${e.context_entity_id}
                        class="name"
                        >${e.context_entity_id_name}</a
                      >`:""}
              </div>
              <div class="secondary">
                <span
                  >${(0,s.V)(new Date(e.when),this.hass.language)}</span
                >
                -
                <ha-relative-time
                  .hass=${this.hass}
                  .datetime=${e.when}
                ></ha-relative-time>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}},{kind:"method",decorators:[(0,i.hO)({passive:!0})],key:"_saveScrollPos",value:function(e){this._savedScrollPos=e.target.scrollTop}},{kind:"method",key:"_entityClicked",value:function(e){const t=e.currentTarget.entityId;t&&(e.preventDefault(),e.stopPropagation(),(0,c.B)(this,"hass-more-info",{entityId:t}))}},{kind:"get",static:!0,key:"styles",value:function(){return[h.Qx,i.iv`
        :host {
          display: block;
          height: 100%;
        }

        .rtl {
          direction: ltr;
        }

        .entry-container {
          width: 100%;
        }

        .entry {
          display: flex;
          width: 100%;
          line-height: 2em;
          padding: 8px 16px;
          box-sizing: border-box;
          border-top: 1px solid var(--divider-color);
        }

        .entry.no-entity,
        .no-name .entry {
          cursor: default;
        }

        .entry:hover {
          background-color: rgba(var(--rgb-primary-text-color), 0.04);
        }

        .narrow:not(.no-icon) .time {
          margin-left: 32px;
        }

        .message-relative_time {
          display: flex;
          flex-direction: column;
        }

        .secondary {
          font-size: 12px;
          line-height: 1.7;
        }

        .date {
          margin: 8px 0;
          padding: 0 16px;
        }

        .narrow .date {
          padding: 0 8px;
        }

        .rtl .date {
          direction: rtl;
        }

        .icon-message {
          display: flex;
          align-items: center;
        }

        .no-entries {
          text-align: center;
          color: var(--secondary-text-color);
        }

        ha-icon {
          margin-right: 16px;
          flex-shrink: 0;
          color: var(--state-icon-color);
        }

        .message {
          color: var(--primary-text-color);
        }

        .no-name .message:first-letter {
          text-transform: capitalize;
        }

        a {
          color: var(--primary-color);
        }

        .uni-virtualizer-host {
          display: block;
          position: relative;
          contain: strict;
          height: 100%;
          overflow: auto;
        }

        .uni-virtualizer-host > * {
          box-sizing: border-box;
        }

        .narrow .entry {
          line-height: 1.5;
          padding: 8px;
        }

        .narrow .icon-message ha-icon {
          margin-left: 0;
        }
      `]}}]}}),i.oi)}}]);
//# sourceMappingURL=chunk.5f535ca1d1b3d5a2ee7c.js.map