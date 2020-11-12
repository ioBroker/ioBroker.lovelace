(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[1927],{49706:(e,t,a)=>{"use strict";a.d(t,{Rb:()=>r,Zy:()=>s,h2:()=>o,PS:()=>i,l:()=>n,ht:()=>c,f0:()=>l,tj:()=>d,uo:()=>h,lC:()=>u,Kk:()=>f,ot:()=>p,gD:()=>m,a1:()=>b,AZ:()=>g});const r="hass:bookmark",s={alert:"hass:alert",alexa:"hass:amazon-alexa",air_quality:"hass:air-filter",automation:"hass:robot",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:cog",conversation:"hass:text-to-speech",counter:"hass:counter",device_tracker:"hass:account",fan:"hass:fan",google_assistant:"hass:google-assistant",group:"hass:google-circles-communities",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:toggle-switch-outline",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:form-textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",persistent_notification:"hass:bell",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:palette",script:"hass:script-text",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer-outline",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weather:"hass:weather-cloudy",zone:"hass:map-marker-radius"},o={current:"hass:current-ac",energy:"hass:flash",humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",power_factor:"hass:angle-acute",signal_strength:"hass:wifi",timestamp:"hass:clock",voltage:"hass:sine-wave"},i=["climate","cover","configurator","input_select","input_number","input_text","lock","media_player","scene","script","timer","vacuum","water_heater"],n=["alarm_control_panel","automation","camera","climate","configurator","counter","cover","fan","group","humidifier","input_datetime","light","lock","media_player","person","script","sun","timer","vacuum","water_heater","weather"],c=["input_number","input_select","input_text","scene"],l=["camera","configurator","scene"],d=["closed","locked","off"],h="on",u="off",f=new Set(["fan","input_boolean","light","switch","group","automation","humidifier"]),p="°C",m="°F",b="group.default_view",g=["ff0029","66a61e","377eb8","984ea3","00d2d5","ff7f00","af8d00","7f80cd","b3e900","c42e60","a65628","f781bf","8dd3c7","bebada","fb8072","80b1d3","fdb462","fccde5","bc80bd","ffed6f","c4eaff","cf8c00","1b9e77","d95f02","e7298a","e6ab02","a6761d","0097ff","00d067","f43600","4ba93b","5779bb","927acc","97ee3f","bf3947","9f5b00","f48758","8caed6","f2b94f","eff26e","e43872","d9b100","9d7a00","698cff","d9d9d9","00d27e","d06800","009f82","c49200","cbe8ff","fecddf","c27eb6","8cd2ce","c4b8d9","f883b0","a49100","f48800","27d0df","a04a9b"]},44634:(e,t,a)=>{"use strict";a.d(t,{M:()=>r});const r=(e,t)=>{const a=Number(e.state),r=t&&"on"===t.state;if(isNaN(a))return"hass:battery-unknown";let s="hass:battery";const o=10*Math.round(a/10);return r&&a>10?s+="-charging-"+o:r?s+="-outline":a<=5?s+="-alert":a>5&&a<95&&(s+="-"+o),s}},56949:(e,t,a)=>{"use strict";a.d(t,{q:()=>r});const r=e=>{const t=e.entity_id.split(".")[0];let a=e.state;return"climate"===t&&(a=e.attributes.hvac_action),a}},27269:(e,t,a)=>{"use strict";a.d(t,{p:()=>r});const r=e=>e.substr(e.indexOf(".")+1)},91741:(e,t,a)=>{"use strict";a.d(t,{C:()=>s});var r=a(27269);const s=e=>void 0===e.attributes.friendly_name?(0,r.p)(e.entity_id).replace(/_/g," "):e.attributes.friendly_name||""},76151:(e,t,a)=>{"use strict";a.d(t,{K:()=>o});var r=a(49706);var s=a(44634);const o=(e,t,a)=>{const o=void 0!==a?a:null==t?void 0:t.state;switch(e){case"alarm_control_panel":switch(o){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return((e,t)=>{const a="off"===e;switch(null==t?void 0:t.attributes.device_class){case"battery":return a?"hass:battery":"hass:battery-outline";case"battery_charging":return a?"hass:battery":"hass:battery-charging";case"cold":return a?"hass:thermometer":"hass:snowflake";case"connectivity":return a?"hass:server-network-off":"hass:server-network";case"door":return a?"hass:door-closed":"hass:door-open";case"garage_door":return a?"hass:garage":"hass:garage-open";case"power":return a?"hass:power-plug-off":"hass:power-plug";case"gas":case"problem":case"safety":case"smoke":return a?"hass:check-circle":"hass:alert-circle";case"heat":return a?"hass:thermometer":"hass:fire";case"light":return a?"hass:brightness-5":"hass:brightness-7";case"lock":return a?"hass:lock":"hass:lock-open";case"moisture":return a?"hass:water-off":"hass:water";case"motion":return a?"hass:walk":"hass:run";case"occupancy":return a?"hass:home-outline":"hass:home";case"opening":return a?"hass:square":"hass:square-outline";case"plug":return a?"hass:power-plug-off":"hass:power-plug";case"presence":return a?"hass:home-outline":"hass:home";case"sound":return a?"hass:music-note-off":"hass:music-note";case"vibration":return a?"hass:crop-portrait":"hass:vibrate";case"window":return a?"hass:window-closed":"hass:window-open";default:return a?"hass:radiobox-blank":"hass:checkbox-marked-circle"}})(o,t);case"cover":return((e,t)=>{const a="closed"!==e;switch(null==t?void 0:t.attributes.device_class){case"garage":switch(e){case"opening":return"hass:arrow-up-box";case"closing":return"hass:arrow-down-box";case"closed":return"hass:garage";default:return"hass:garage-open"}case"gate":switch(e){case"opening":case"closing":return"hass:gate-arrow-right";case"closed":return"hass:gate";default:return"hass:gate-open"}case"door":return a?"hass:door-open":"hass:door-closed";case"damper":return a?"hass:circle":"hass:circle-slice-8";case"shutter":switch(e){case"opening":return"hass:arrow-up-box";case"closing":return"hass:arrow-down-box";case"closed":return"hass:window-shutter";default:return"hass:window-shutter-open"}case"blind":case"curtain":switch(e){case"opening":return"hass:arrow-up-box";case"closing":return"hass:arrow-down-box";case"closed":return"hass:blinds";default:return"hass:blinds-open"}case"window":switch(e){case"opening":return"hass:arrow-up-box";case"closing":return"hass:arrow-down-box";case"closed":return"hass:window-closed";default:return"hass:window-open"}}switch(e){case"opening":return"hass:arrow-up-box";case"closing":return"hass:arrow-down-box";case"closed":return"hass:window-closed";default:return"hass:window-open"}})(o,t);case"humidifier":return a&&"off"===a?"hass:air-humidifier-off":"hass:air-humidifier";case"lock":return"unlocked"===o?"hass:lock-open":"hass:lock";case"media_player":return"playing"===o?"hass:cast-connected":"hass:cast";case"zwave":switch(o){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}case"sensor":{const e=(e=>{const t=null==e?void 0:e.attributes.device_class;if(t&&t in r.h2)return r.h2[t];if("battery"===t)return e?(0,s.M)(e):"hass:battery";const a=null==e?void 0:e.attributes.unit_of_measurement;return a===r.ot||a===r.gD?"hass:thermometer":void 0})(t);if(e)return e;break}case"input_datetime":if(!(null==t?void 0:t.attributes.has_date))return"hass:clock";if(!t.attributes.has_time)return"hass:calendar"}return e in r.Zy?r.Zy[e]:(console.warn("Unable to find icon for domain "+e+" ("+t+")"),r.Rb)}},36145:(e,t,a)=>{"use strict";a.d(t,{M:()=>i});var r=a(49706),s=a(58831),o=a(76151);const i=e=>e?e.attributes.icon?e.attributes.icon:(0,o.K)((0,s.M)(e.entity_id),e):r.Rb},52797:(e,t,a)=>{"use strict";a.d(t,{N:()=>r});const r=a(15652).iv`
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
  ha-icon[data-domain="script"][data-state="running"],
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
`},3143:(e,t,a)=>{"use strict";var r=a(15652),s=a(49629),o=a(79865),i=a(56949),n=a(22311),c=a(36145),l=a(52797);a(16509);function d(){d=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(a){t.forEach((function(t){t.kind===a&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var a=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var s=t.placement;if(t.kind===r&&("static"===s||"prototype"===s)){var o="static"===s?e:a;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var a=t.descriptor;if("field"===t.kind){var r=t.initializer;a={enumerable:a.enumerable,writable:a.writable,configurable:a.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,a)},decorateClass:function(e,t){var a=[],r=[],s={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,s)}),this),e.forEach((function(e){if(!f(e))return a.push(e);var t=this.decorateElement(e,s);a.push(t.element),a.push.apply(a,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:a,finishers:r};var o=this.decorateConstructor(a,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,a){var r=t[e.placement];if(!a&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var a=[],r=[],s=e.decorators,o=s.length-1;o>=0;o--){var i=t[e.placement];i.splice(i.indexOf(e.key),1);var n=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,s[o])(n)||n);e=c.element,this.addElementPlacement(e,t),c.finisher&&r.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);a.push.apply(a,l)}}return{element:e,finishers:r,extras:a}},decorateConstructor:function(e,t){for(var a=[],r=t.length-1;r>=0;r--){var s=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(s)||s);if(void 0!==o.finisher&&a.push(o.finisher),void 0!==o.elements){e=o.elements;for(var i=0;i<e.length-1;i++)for(var n=i+1;n<e.length;n++)if(e[i].key===e[n].key&&e[i].placement===e[n].placement)throw new TypeError("Duplicated element ("+e[i].key+")")}}return{elements:e,finishers:a}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?g(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var a=b(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var s=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:a,placement:r,descriptor:Object.assign({},s)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(s,"get","The property descriptor of a field descriptor"),this.disallowProperty(s,"set","The property descriptor of a field descriptor"),this.disallowProperty(s,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:m(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var a=m(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:a}},runClassFinishers:function(e,t){for(var a=0;a<t.length;a++){var r=(0,t[a])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,a){if(void 0!==e[t])throw new TypeError(a+" can't have a ."+t+" property.")}};return e}function h(e){var t,a=b(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:a,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function u(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function f(e){return e.decorators&&e.decorators.length}function p(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function m(e,t){var a=e[t];if(void 0!==a&&"function"!=typeof a)throw new TypeError("Expected '"+t+"' to be a function");return a}function b(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}let v=function(e,t,a,r){var s=d();if(r)for(var o=0;o<r.length;o++)s=r[o](s);var i=t((function(e){s.initializeInstanceElements(e,n.elements)}),a),n=s.decorateClass(function(e){for(var t=[],a=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var s,o=e[r];if("method"===o.kind&&(s=t.find(a)))if(p(o.descriptor)||p(s.descriptor)){if(f(o)||f(s))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");s.descriptor=o.descriptor}else{if(f(o)){if(f(s))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");s.decorators=o.decorators}u(o,s)}else t.push(o)}return t}(i.d.map(h)),e);return s.initializeClassElements(i.F,n.elements),s.runClassFinishers(i.F,n.finishers)}(null,(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"overrideIcon",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"overrideImage",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"stateColor",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0,attribute:"icon"})],key:"_showIcon",value:()=>!0},{kind:"field",decorators:[(0,r.sz)()],key:"_iconStyle",value:()=>({})},{kind:"method",key:"render",value:function(){const e=this.stateObj;if(!e)return r.dy`<div class="missing">
        <ha-icon icon="hass:alert"></ha-icon>
      </div>`;if(!this._showIcon)return r.dy``;const t=(0,n.N)(e);return r.dy`
      <ha-icon
        style=${(0,o.V)(this._iconStyle)}
        data-domain=${(0,s.o)(this.stateColor||"light"===t&&!1!==this.stateColor?t:void 0)}
        data-state=${(0,i.q)(e)}
        .icon=${this.overrideIcon||(0,c.M)(e)}
      ></ha-icon>
    `}},{kind:"method",key:"updated",value:function(e){if(!e.has("stateObj")||!this.stateObj)return;const t=this.stateObj,a={},r={backgroundImage:""};if(this._showIcon=!0,t)if((t.attributes.entity_picture_local||t.attributes.entity_picture)&&!this.overrideIcon||this.overrideImage){let e=this.overrideImage||t.attributes.entity_picture_local||t.attributes.entity_picture;this.hass&&(e=this.hass.hassUrl(e)),r.backgroundImage=`url(${e})`,this._showIcon=!1}else if("on"===t.state){if(t.attributes.hs_color&&!1!==this.stateColor){const e=t.attributes.hs_color[0],r=t.attributes.hs_color[1];r>10&&(a.color=`hsl(${e}, 100%, ${100-r/2}%)`)}if(t.attributes.brightness&&!1!==this.stateColor){const e=t.attributes.brightness;if("number"!=typeof e){const a=`Type error: state-badge expected number, but type of ${t.entity_id}.attributes.brightness is ${typeof e} (${e})`;console.warn(a)}a.filter=`brightness(${(e+245)/5}%)`}}this._iconStyle=a,Object.assign(this.style,r)}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`
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
    `}}]}}),r.oi);customElements.define("state-badge",v)}}]);
//# sourceMappingURL=chunk.2c4df98b6e21ee6356f0.js.map