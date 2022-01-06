"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[81855],{55422:(e,t,r)=>{r.a(e,(async e=>{r.d(t,{jV:()=>l,sS:()=>u,rM:()=>h,tf:()=>y});var i=r(49706),n=r(58831),o=r(29171),a=r(56007),s=e([o]);o=(s.then?await s:s)[0];const c="ui.components.logbook.messages",l=["proximity","sensor"],d={},u=async(e,t,r)=>{const i=await e.loadBackendTranslation("device_class");return p(e,i,await m(e,t,void 0,void 0,void 0,r))},h=async(e,t,r,i,n)=>{const o=await e.loadBackendTranslation("device_class");return p(e,o,await f(e,t,r,i,n))},p=(e,t,r)=>{for(const i of r){const r=e.states[i.entity_id];i.state&&r&&(i.message=v(e,t,i.state,r,(0,n.M)(i.entity_id)))}return r},f=async(e,t,r,i,n)=>{const o="*";i||(i=o);const a=`${t}${r}`;if(d[a]||(d[a]={}),i in d[a])return d[a][i];if(i!==o&&d[a]["*"]){return(await d[a]["*"]).filter((e=>e.entity_id===i))}return d[a][i]=m(e,t,r,i!==o?i:void 0,n).then((e=>e.reverse())),d[a][i]},m=async(e,t,r,i,n,o)=>{const a=new URLSearchParams;return r&&a.append("end_time",r),i&&a.append("entity",i),n&&a.append("entity_matches_only",""),o&&a.append("context_id",o),e.callApi("GET",`logbook/${t}?${a.toString()}`)},y=(e,t)=>{d[`${e}${t}`]={}},v=(e,t,r,n,s)=>{switch(s){case"device_tracker":case"person":return"not_home"===r?t(`${c}.was_away`):"home"===r?t(`${c}.was_at_home`):t(`${c}.was_at_state`,"state",r);case"sun":return t("above_horizon"===r?`${c}.rose`:`${c}.set`);case"binary_sensor":{const e=r===i.uo,o=r===i.lC,a=n.attributes.device_class;switch(a){case"battery":if(e)return t(`${c}.was_low`);if(o)return t(`${c}.was_normal`);break;case"connectivity":if(e)return t(`${c}.was_connected`);if(o)return t(`${c}.was_disconnected`);break;case"door":case"garage_door":case"opening":case"window":if(e)return t(`${c}.was_opened`);if(o)return t(`${c}.was_closed`);break;case"lock":if(e)return t(`${c}.was_unlocked`);if(o)return t(`${c}.was_locked`);break;case"plug":if(e)return t(`${c}.was_plugged_in`);if(o)return t(`${c}.was_unplugged`);break;case"presence":if(e)return t(`${c}.was_at_home`);if(o)return t(`${c}.was_away`);break;case"safety":if(e)return t(`${c}.was_unsafe`);if(o)return t(`${c}.was_safe`);break;case"cold":case"gas":case"heat":case"moisture":case"motion":case"occupancy":case"power":case"problem":case"smoke":case"sound":case"vibration":if(e)return t(`${c}.detected_device_class`,{device_class:t(`component.binary_sensor.device_class.${a}`)});if(o)return t(`${c}.cleared_device_class`,{device_class:t(`component.binary_sensor.device_class.${a}`)});break;case"tamper":if(e)return t(`${c}.detected_tampering`);if(o)return t(`${c}.cleared_tampering`)}break}case"cover":switch(r){case"open":return t(`${c}.was_opened`);case"opening":return t(`${c}.is_opening`);case"closing":return t(`${c}.is_closing`);case"closed":return t(`${c}.was_closed`)}break;case"lock":if("unlocked"===r)return t(`${c}.was_unlocked`);if("locked"===r)return t(`${c}.was_locked`)}return r===i.uo?t(`${c}.turned_on`):r===i.lC?t(`${c}.turned_off`):a.V_.includes(r)?t(`${c}.became_unavailable`):e.localize(`${c}.changed_to_state`,"state",n?(0,o.D)(t,n,e.locale,r):r)}}))},97740:(e,t,r)=>{r.a(e,(async e=>{var t=r(196),i=r(37500),n=r(26767),o=r(5701),a=r(84982),s=r(228),c=r(49706),l=r(12198),d=r(49684),u=r(25516),h=r(47181),p=r(58831),f=r(87744),m=(r(3143),r(31206),r(42952)),y=r(11654),v=e([d,l,m]);function k(){k=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!b(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=x(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:$(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=$(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function _(e){var t,r=x(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function g(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function b(e){return e.decorators&&e.decorators.length}function w(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function $(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function x(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}[d,l,m]=v.then?await v:v;!function(e,t,r,i){var n=k();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(w(o.descriptor)||w(n.descriptor)){if(b(o)||b(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(b(o)){if(b(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}g(o,n)}else t.push(o)}return t}(a.d.map(_)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,n.M)("ha-logbook")],(function(e,r){return{F:class extends r{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.C)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.C)({attribute:!1})],key:"userIdToName",value:()=>({})},{kind:"field",decorators:[(0,o.C)({attribute:!1})],key:"traceContexts",value:()=>({})},{kind:"field",decorators:[(0,o.C)({attribute:!1})],key:"entries",value:()=>[]},{kind:"field",decorators:[(0,o.C)({type:Boolean,attribute:"narrow"})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,o.C)({attribute:"rtl",type:Boolean})],key:"_rtl",value:()=>!1},{kind:"field",decorators:[(0,o.C)({type:Boolean,attribute:"virtualize",reflect:!0})],key:"virtualize",value:()=>!1},{kind:"field",decorators:[(0,o.C)({type:Boolean,attribute:"no-icon"})],key:"noIcon",value:()=>!1},{kind:"field",decorators:[(0,o.C)({type:Boolean,attribute:"no-name"})],key:"noName",value:()=>!1},{kind:"field",decorators:[(0,o.C)({type:Boolean,attribute:"relative-time"})],key:"relativeTime",value:()=>!1},{kind:"field",decorators:[(0,u.i)(".container")],key:"_savedScrollPos",value:void 0},{kind:"method",key:"shouldUpdate",value:function(e){const t=e.get("hass"),r=void 0===t||t.locale!==this.hass.locale;return e.has("entries")||e.has("traceContexts")||r}},{kind:"method",key:"updated",value:function(e){const t=e.get("hass");void 0!==t&&t.language===this.hass.language||(this._rtl=(0,f.HE)(this.hass))}},{kind:"method",key:"render",value:function(){var e;return null!==(e=this.entries)&&void 0!==e&&e.length?i.dy`
      <div
        class="container ha-scrollbar ${(0,s.$)({narrow:this.narrow,rtl:this._rtl,"no-name":this.noName,"no-icon":this.noIcon})}"
        @scroll=${this._saveScrollPos}
      >
        ${this.virtualize?(0,t.AR)({items:this.entries,layout:t.bW,renderItem:(e,t)=>this._renderLogbookItem(e,t)}):this.entries.map(((e,t)=>this._renderLogbookItem(e,t)))}
      </div>
    `:i.dy`
        <div class="container no-entries" .dir=${(0,f.$3)(this._rtl)}>
          ${this.hass.localize("ui.components.logbook.entries_not_found")}
        </div>
      `}},{kind:"method",key:"_renderLogbookItem",value:function(e,t){if(void 0===t)return i.dy``;const r=this.entries[t-1],n=e.entity_id?this.hass.states[e.entity_id]:void 0,o=e.context_user_id&&this.userIdToName[e.context_user_id],a=e.entity_id?(0,p.M)(e.entity_id):e.domain;return i.dy`
      <div class="entry-container">
        ${0===t||null!=e&&e.when&&null!=r&&r.when&&new Date(e.when).toDateString()!==new Date(r.when).toDateString()?i.dy`
              <h4 class="date">
                ${(0,l.p6)(new Date(e.when),this.hass.locale)}
              </h4>
            `:i.dy``}

        <div class="entry ${(0,s.$)({"no-entity":!e.entity_id})}">
          <div class="icon-message">
            ${this.noIcon?"":i.dy`
                  <state-badge
                    .hass=${this.hass}
                    .overrideIcon=${e.icon}
                    .overrideImage=${c.iY.has(a)?"":(null==n?void 0:n.attributes.entity_picture_local)||(null==n?void 0:n.attributes.entity_picture)}
                    .stateObj=${n}
                    .stateColor=${!1}
                  ></state-badge>
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
                ${o?` ${this.hass.localize("ui.components.logbook.by")} ${o}`:e.context_event_type?"call_service"===e.context_event_type?` ${this.hass.localize("ui.components.logbook.by_service")}\n                  ${e.context_domain}.${e.context_service}`:e.context_entity_id===e.entity_id?` ${this.hass.localize("ui.components.logbook.by")}\n                  ${e.context_name?e.context_name:e.context_event_type}`:i.dy` ${this.hass.localize("ui.components.logbook.by")}
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
                  >${(0,d.Vu)(new Date(e.when),this.hass.locale)}</span
                >
                -
                <ha-relative-time
                  .hass=${this.hass}
                  .datetime=${e.when}
                  capitalize
                ></ha-relative-time>
                ${"automation"===e.domain&&e.context_id in this.traceContexts?i.dy`
                      -
                      <a
                        href=${`/config/automation/trace/${this.traceContexts[e.context_id].item_id}?run_id=${this.traceContexts[e.context_id].run_id}`}
                        @click=${this._close}
                        >${this.hass.localize("ui.components.logbook.show_trace")}</a
                      >
                    `:""}
              </div>
            </div>
          </div>
        </div>
      </div>
    `}},{kind:"method",decorators:[(0,a.h)({passive:!0})],key:"_saveScrollPos",value:function(e){this._savedScrollPos=e.target.scrollTop}},{kind:"method",key:"_entityClicked",value:function(e){const t=e.currentTarget.entityId;t&&(e.preventDefault(),e.stopPropagation(),(0,h.B)(this,"hass-more-info",{entityId:t}))}},{kind:"method",key:"_close",value:function(){setTimeout((()=>(0,h.B)(this,"closed")),500)}},{kind:"get",static:!0,key:"styles",value:function(){return[y.Qx,y.$c,i.iv`
        :host([virtualize]) {
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

        .secondary a {
          color: var(--secondary-text-color);
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

        state-badge {
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

        .container {
          max-height: var(--logbook-max-height);
        }

        :host([virtualize]) .container {
          height: 100%;
        }

        .narrow .entry {
          line-height: 1.5;
          padding: 8px;
        }

        .narrow .icon-message state-badge {
          margin-left: 0;
        }
      `]}}]}}),i.oi)}))}}]);
//# sourceMappingURL=4b724330.js.map