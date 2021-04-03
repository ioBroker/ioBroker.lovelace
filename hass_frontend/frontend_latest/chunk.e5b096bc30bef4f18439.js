(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[1927],{44634:(e,t,r)=>{"use strict";r.d(t,{M:()=>a});const a=(e,t)=>{const r=Number(e.state),a=t&&"on"===t.state;let s="hass:battery";if(isNaN(r))return"off"===e.state?s+="-full":"on"===e.state?s+="-alert":s+="-unknown",s;const o=10*Math.round(r/10);return a&&r>10?s+=`-charging-${o}`:a?s+="-outline":r<=5?s+="-alert":r>5&&r<95&&(s+=`-${o}`),s}},56949:(e,t,r)=>{"use strict";r.d(t,{q:()=>a});const a=e=>{const t=e.entity_id.split(".")[0];let r=e.state;return"climate"===t&&(r=e.attributes.hvac_action),r}},27269:(e,t,r)=>{"use strict";r.d(t,{p:()=>a});const a=e=>e.substr(e.indexOf(".")+1)},91741:(e,t,r)=>{"use strict";r.d(t,{C:()=>s});var a=r(27269);const s=e=>void 0===e.attributes.friendly_name?(0,a.p)(e.entity_id).replace(/_/g," "):e.attributes.friendly_name||""},82943:(e,t,r)=>{"use strict";r.d(t,{m2:()=>a,q_:()=>s,ow:()=>o});const a=(e,t)=>{const r="closed"!==e;switch(null==t?void 0:t.attributes.device_class){case"garage":switch(e){case"opening":return"hass:arrow-up-box";case"closing":return"hass:arrow-down-box";case"closed":return"hass:garage";default:return"hass:garage-open"}case"gate":switch(e){case"opening":case"closing":return"hass:gate-arrow-right";case"closed":return"hass:gate";default:return"hass:gate-open"}case"door":return r?"hass:door-open":"hass:door-closed";case"damper":return r?"hass:circle":"hass:circle-slice-8";case"shutter":switch(e){case"opening":return"hass:arrow-up-box";case"closing":return"hass:arrow-down-box";case"closed":return"hass:window-shutter";default:return"hass:window-shutter-open"}case"blind":case"curtain":case"shade":switch(e){case"opening":return"hass:arrow-up-box";case"closing":return"hass:arrow-down-box";case"closed":return"hass:blinds";default:return"hass:blinds-open"}case"window":switch(e){case"opening":return"hass:arrow-up-box";case"closing":return"hass:arrow-down-box";case"closed":return"hass:window-closed";default:return"hass:window-open"}}switch(e){case"opening":return"hass:arrow-up-box";case"closing":return"hass:arrow-down-box";case"closed":return"hass:window-closed";default:return"hass:window-open"}},s=e=>{switch(e.attributes.device_class){case"awning":case"door":case"gate":return"hass:arrow-expand-horizontal";default:return"hass:arrow-up"}},o=e=>{switch(e.attributes.device_class){case"awning":case"door":case"gate":return"hass:arrow-collapse-horizontal";default:return"hass:arrow-down"}}},16023:(e,t,r)=>{"use strict";r.d(t,{K:()=>i});var a=r(49706);var s=r(82943),o=r(44634);const i=(e,t,r)=>{const i=void 0!==r?r:null==t?void 0:t.state;switch(e){case"alarm_control_panel":switch(i){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return((e,t)=>{const r="off"===e;switch(null==t?void 0:t.attributes.device_class){case"battery":return r?"hass:battery":"hass:battery-outline";case"battery_charging":return r?"hass:battery":"hass:battery-charging";case"cold":return r?"hass:thermometer":"hass:snowflake";case"connectivity":return r?"hass:server-network-off":"hass:server-network";case"door":return r?"hass:door-closed":"hass:door-open";case"garage_door":return r?"hass:garage":"hass:garage-open";case"power":return r?"hass:power-plug-off":"hass:power-plug";case"gas":case"problem":case"safety":case"smoke":return r?"hass:check-circle":"hass:alert-circle";case"heat":return r?"hass:thermometer":"hass:fire";case"light":return r?"hass:brightness-5":"hass:brightness-7";case"lock":return r?"hass:lock":"hass:lock-open";case"moisture":return r?"hass:water-off":"hass:water";case"motion":return r?"hass:walk":"hass:run";case"occupancy":return r?"hass:home-outline":"hass:home";case"opening":return r?"hass:square":"hass:square-outline";case"plug":return r?"hass:power-plug-off":"hass:power-plug";case"presence":return r?"hass:home-outline":"hass:home";case"sound":return r?"hass:music-note-off":"hass:music-note";case"vibration":return r?"hass:crop-portrait":"hass:vibrate";case"window":return r?"hass:window-closed":"hass:window-open";default:return r?"hass:radiobox-blank":"hass:checkbox-marked-circle"}})(i,t);case"cover":return(0,s.m2)(i,t);case"humidifier":return r&&"off"===r?"hass:air-humidifier-off":"hass:air-humidifier";case"lock":return"unlocked"===i?"hass:lock-open":"hass:lock";case"media_player":return"playing"===i?"hass:cast-connected":"hass:cast";case"zwave":switch(i){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}case"sensor":{const e=(e=>{const t=null==e?void 0:e.attributes.device_class;if(t&&t in a.h2)return a.h2[t];if("battery"===t)return e?(0,o.M)(e):"hass:battery";const r=null==e?void 0:e.attributes.unit_of_measurement;return r===a.ot||r===a.gD?"hass:thermometer":void 0})(t);if(e)return e;break}case"input_datetime":if(!(null==t?void 0:t.attributes.has_date))return"hass:clock";if(!t.attributes.has_time)return"hass:calendar";break;case"sun":return"above_horizon"===(null==t?void 0:t.state)?a.Zy[e]:"hass:weather-night"}return e in a.Zy?a.Zy[e]:(console.warn("Unable to find icon for domain "+e+" ("+t+")"),a.Rb)}},36145:(e,t,r)=>{"use strict";r.d(t,{M:()=>i});var a=r(49706),s=r(58831),o=r(16023);const i=e=>e?e.attributes.icon?e.attributes.icon:(0,o.K)((0,s.M)(e.entity_id),e):a.Rb},52797:(e,t,r)=>{"use strict";r.d(t,{N:()=>a});const a=r(15652).iv`
  ha-icon[data-domain="alert"][data-state="on"],
  ha-icon[data-domain="automation"][data-state="on"],
  ha-icon[data-domain="binary_sensor"][data-state="on"],
  ha-icon[data-domain="calendar"][data-state="on"],
  ha-icon[data-domain="camera"][data-state="streaming"],
  ha-icon[data-domain="cover"][data-state="open"],
  ha-icon[data-domain="fan"][data-state="on"],
  ha-icon[data-domain="humidifier"][data-state="on"],
  ha-icon[data-domain="light"][data-state="on"],
  ha-icon[data-domain="input_boolean"][data-state="on"],
  ha-icon[data-domain="lock"][data-state="unlocked"],
  ha-icon[data-domain="media_player"][data-state="on"],
  ha-icon[data-domain="media_player"][data-state="paused"],
  ha-icon[data-domain="media_player"][data-state="playing"],
  ha-icon[data-domain="script"][data-state="on"],
  ha-icon[data-domain="sun"][data-state="above_horizon"],
  ha-icon[data-domain="switch"][data-state="on"],
  ha-icon[data-domain="timer"][data-state="active"],
  ha-icon[data-domain="vacuum"][data-state="cleaning"],
  ha-icon[data-domain="group"][data-state="on"],
  ha-icon[data-domain="group"][data-state="home"],
  ha-icon[data-domain="group"][data-state="open"],
  ha-icon[data-domain="group"][data-state="locked"],
  ha-icon[data-domain="group"][data-state="problem"] {
    color: var(--paper-item-icon-active-color, #fdd835);
  }

  ha-icon[data-domain="climate"][data-state="cooling"] {
    color: var(--cool-color, #2b9af9);
  }

  ha-icon[data-domain="climate"][data-state="heating"] {
    color: var(--heat-color, #ff8100);
  }

  ha-icon[data-domain="climate"][data-state="drying"] {
    color: var(--dry-color, #efbd07);
  }

  ha-icon[data-domain="alarm_control_panel"] {
    color: var(--alarm-color-armed, var(--label-badge-red));
  }

  ha-icon[data-domain="alarm_control_panel"][data-state="disarmed"] {
    color: var(--alarm-color-disarmed, var(--label-badge-green));
  }

  ha-icon[data-domain="alarm_control_panel"][data-state="pending"],
  ha-icon[data-domain="alarm_control_panel"][data-state="arming"] {
    color: var(--alarm-color-pending, var(--label-badge-yellow));
    animation: pulse 1s infinite;
  }

  ha-icon[data-domain="alarm_control_panel"][data-state="triggered"] {
    color: var(--alarm-color-triggered, var(--label-badge-red));
    animation: pulse 1s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  ha-icon[data-domain="plant"][data-state="problem"],
  ha-icon[data-domain="zwave"][data-state="dead"] {
    color: var(--error-state-color, #db4437);
  }

  /* Color the icon if unavailable */
  ha-icon[data-state="unavailable"] {
    color: var(--state-icon-unavailable-color);
  }
`},3143:(e,t,r)=>{"use strict";var a=r(15652),s=r(49629),o=r(79865),i=r(56949),n=r(22311),c=r(36145),l=r(52797);r(16509);function d(){d=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(a){t.forEach((function(t){var s=t.placement;if(t.kind===a&&("static"===s||"prototype"===s)){var o="static"===s?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var a=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===a?void 0:a.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],a=[],s={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,s)}),this),e.forEach((function(e){if(!p(e))return r.push(e);var t=this.decorateElement(e,s);r.push(t.element),r.push.apply(r,t.extras),a.push.apply(a,t.finishers)}),this),!t)return{elements:r,finishers:a};var o=this.decorateConstructor(r,t);return a.push.apply(a,o.finishers),o.finishers=a,o},addElementPlacement:function(e,t,r){var a=t[e.placement];if(!r&&-1!==a.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");a.push(e.key)},decorateElement:function(e,t){for(var r=[],a=[],s=e.decorators,o=s.length-1;o>=0;o--){var i=t[e.placement];i.splice(i.indexOf(e.key),1);var n=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,s[o])(n)||n);e=c.element,this.addElementPlacement(e,t),c.finisher&&a.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:a,extras:r}},decorateConstructor:function(e,t){for(var r=[],a=t.length-1;a>=0;a--){var s=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[a])(s)||s);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var i=0;i<e.length-1;i++)for(var n=i+1;n<e.length;n++)if(e[i].key===e[n].key&&e[i].placement===e[n].placement)throw new TypeError("Duplicated element ("+e[i].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=v(e.key),a=String(e.placement);if("static"!==a&&"prototype"!==a&&"own"!==a)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+a+'"');var s=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:a,descriptor:Object.assign({},s)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(s,"get","The property descriptor of a field descriptor"),this.disallowProperty(s,"set","The property descriptor of a field descriptor"),this.disallowProperty(s,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:m(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=m(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var a=(0,t[r])(e);if(void 0!==a){if("function"!=typeof a)throw new TypeError("Finishers must return a constructor.");e=a}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function h(e){var t,r=v(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var a={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(a.decorators=e.decorators),"field"===e.kind&&(a.initializer=e.value),a}function u(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function p(e){return e.decorators&&e.decorators.length}function f(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function m(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function v(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}let g=function(e,t,r,a){var s=d();if(a)for(var o=0;o<a.length;o++)s=a[o](s);var i=t((function(e){s.initializeInstanceElements(e,n.elements)}),r),n=s.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},a=0;a<e.length;a++){var s,o=e[a];if("method"===o.kind&&(s=t.find(r)))if(f(o.descriptor)||f(s.descriptor)){if(p(o)||p(s))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");s.descriptor=o.descriptor}else{if(p(o)){if(p(s))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");s.decorators=o.decorators}u(o,s)}else t.push(o)}return t}(i.d.map(h)),e);return s.initializeClassElements(i.F,n.elements),s.runClassFinishers(i.F,n.finishers)}(null,(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"overrideIcon",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"overrideImage",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"stateColor",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean,reflect:!0,attribute:"icon"})],key:"_showIcon",value:()=>!0},{kind:"field",decorators:[(0,a.sz)()],key:"_iconStyle",value:()=>({})},{kind:"method",key:"render",value:function(){const e=this.stateObj;if(!e&&!this.overrideIcon&&!this.overrideImage)return a.dy`<div class="missing">
        <ha-icon icon="hass:alert"></ha-icon>
      </div>`;if(!this._showIcon)return a.dy``;const t=e?(0,n.N)(e):void 0;return a.dy`
      <ha-icon
        style=${(0,o.V)(this._iconStyle)}
        data-domain=${(0,s.o)(this.stateColor||"light"===t&&!1!==this.stateColor?t:void 0)}
        data-state=${e?(0,i.q)(e):""}
        .icon=${this.overrideIcon||(e?(0,c.M)(e):"")}
      ></ha-icon>
    `}},{kind:"method",key:"updated",value:function(e){if(!e.has("stateObj")&&!e.has("overrideImage")&&!e.has("overrideIcon"))return;const t=this.stateObj,r={},a={backgroundImage:""};if(this._showIcon=!0,t){if((t.attributes.entity_picture_local||t.attributes.entity_picture)&&!this.overrideIcon||this.overrideImage){let e=this.overrideImage||t.attributes.entity_picture_local||t.attributes.entity_picture;this.hass&&(e=this.hass.hassUrl(e)),a.backgroundImage=`url(${e})`,this._showIcon=!1}else if("on"===t.state){if(t.attributes.hs_color&&!1!==this.stateColor){const e=t.attributes.hs_color[0],a=t.attributes.hs_color[1];a>10&&(r.color=`hsl(${e}, 100%, ${100-a/2}%)`)}if(t.attributes.brightness&&!1!==this.stateColor){const e=t.attributes.brightness;if("number"!=typeof e){const r=`Type error: state-badge expected number, but type of ${t.entity_id}.attributes.brightness is ${typeof e} (${e})`;console.warn(r)}r.filter=`brightness(${(e+245)/5}%)`}}}else if(this.overrideImage){let e=this.overrideImage;this.hass&&(e=this.hass.hassUrl(e)),a.backgroundImage=`url(${e})`,this._showIcon=!1}this._iconStyle=r,Object.assign(this.style,a)}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`
      :host {
        position: relative;
        display: inline-block;
        width: 40px;
        color: var(--paper-item-icon-color, #44739e);
        border-radius: 50%;
        height: 40px;
        text-align: center;
        background-size: cover;
        line-height: 40px;
        vertical-align: middle;
        box-sizing: border-box;
      }
      :host(:focus) {
        outline: none;
      }
      :host(:not([icon]):focus) {
        border: 2px solid var(--divider-color);
      }
      :host([icon]:focus) {
        background: var(--divider-color);
      }
      ha-icon {
        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;
      }
      .missing {
        color: #fce588;
      }

      ${l.N}
    `}}]}}),a.oi);customElements.define("state-badge",g)}}]);
//# sourceMappingURL=chunk.e5b096bc30bef4f18439.js.map