"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[3143],{56949:(t,e,a)=>{a.d(e,{q:()=>i});var r=a(56007);const i=t=>{if(r.V_.includes(t.state))return t.state;const e=t.entity_id.split(".")[0];let a=t.state;return"climate"===e&&(a=t.attributes.hvac_action),a}},52797:(t,e,a)=>{a.d(e,{N:()=>r});const r=a(37500).iv`
  ha-state-icon[data-domain="alert"][data-state="on"],
  ha-state-icon[data-domain="automation"][data-state="on"],
  ha-state-icon[data-domain="binary_sensor"][data-state="on"],
  ha-state-icon[data-domain="calendar"][data-state="on"],
  ha-state-icon[data-domain="camera"][data-state="streaming"],
  ha-state-icon[data-domain="cover"][data-state="open"],
  ha-state-icon[data-domain="device_tracker"][data-state="home"],
  ha-state-icon[data-domain="fan"][data-state="on"],
  ha-state-icon[data-domain="humidifier"][data-state="on"],
  ha-state-icon[data-domain="light"][data-state="on"],
  ha-state-icon[data-domain="input_boolean"][data-state="on"],
  ha-state-icon[data-domain="lock"][data-state="unlocked"],
  ha-state-icon[data-domain="media_player"][data-state="on"],
  ha-state-icon[data-domain="media_player"][data-state="paused"],
  ha-state-icon[data-domain="media_player"][data-state="playing"],
  ha-state-icon[data-domain="remote"][data-state="on"],
  ha-state-icon[data-domain="script"][data-state="on"],
  ha-state-icon[data-domain="sun"][data-state="above_horizon"],
  ha-state-icon[data-domain="switch"][data-state="on"],
  ha-state-icon[data-domain="timer"][data-state="active"],
  ha-state-icon[data-domain="vacuum"][data-state="cleaning"],
  ha-state-icon[data-domain="group"][data-state="on"],
  ha-state-icon[data-domain="group"][data-state="home"],
  ha-state-icon[data-domain="group"][data-state="open"],
  ha-state-icon[data-domain="group"][data-state="locked"],
  ha-state-icon[data-domain="group"][data-state="problem"] {
    color: var(--paper-item-icon-active-color, #fdd835);
  }

  ha-state-icon[data-domain="climate"][data-state="cooling"] {
    color: var(--cool-color, var(--state-climate-cool-color));
  }

  ha-state-icon[data-domain="climate"][data-state="heating"] {
    color: var(--heat-color, var(--state-climate-heat-color));
  }

  ha-state-icon[data-domain="climate"][data-state="drying"] {
    color: var(--dry-color, var(--state-climate-dry-color));
  }

  ha-state-icon[data-domain="alarm_control_panel"] {
    color: var(--alarm-color-armed, var(--label-badge-red));
  }
  ha-state-icon[data-domain="alarm_control_panel"][data-state="disarmed"] {
    color: var(--alarm-color-disarmed, var(--label-badge-green));
  }
  ha-state-icon[data-domain="alarm_control_panel"][data-state="pending"],
  ha-state-icon[data-domain="alarm_control_panel"][data-state="arming"] {
    color: var(--alarm-color-pending, var(--label-badge-yellow));
    animation: pulse 1s infinite;
  }
  ha-state-icon[data-domain="alarm_control_panel"][data-state="triggered"] {
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

  ha-state-icon[data-domain="plant"][data-state="problem"] {
    color: var(--state-icon-error-color);
  }

  /* Color the icon if unavailable */
  ha-state-icon[data-state="unavailable"] {
    color: var(--state-unavailable-color);
  }
`},43426:(t,e,a)=>{a.d(e,{U:()=>r});const r=async(t,e,a,r,i,...o)=>{let n=r[t];n||(n=r[t]={});const s=n[i];if(s)return s;const c=a(r,i,...o);return n[i]=c,c.then((()=>setTimeout((()=>{n[i]=void 0}),e)),(()=>{n[i]=void 0})),c}},3143:(t,e,a)=>{var r=a(37500),i=a(33310),o=a(51346),n=a(70483),s=a(56949),c=a(58831),l=a(22311),d=a(52797),h=a(89439);a(87037);function u(){u=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(a){e.forEach((function(e){e.kind===a&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var a=t.prototype;["method","field"].forEach((function(r){e.forEach((function(e){var i=e.placement;if(e.kind===r&&("static"===i||"prototype"===i)){var o="static"===i?t:a;this.defineClassElement(o,e)}}),this)}),this)},defineClassElement:function(t,e){var a=e.descriptor;if("field"===e.kind){var r=e.initializer;a={enumerable:a.enumerable,writable:a.writable,configurable:a.configurable,value:void 0===r?void 0:r.call(t)}}Object.defineProperty(t,e.key,a)},decorateClass:function(t,e){var a=[],r=[],i={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,i)}),this),t.forEach((function(t){if(!m(t))return a.push(t);var e=this.decorateElement(t,i);a.push(e.element),a.push.apply(a,e.extras),r.push.apply(r,e.finishers)}),this),!e)return{elements:a,finishers:r};var o=this.decorateConstructor(a,e);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(t,e,a){var r=e[t.placement];if(!a&&-1!==r.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");r.push(t.key)},decorateElement:function(t,e){for(var a=[],r=[],i=t.decorators,o=i.length-1;o>=0;o--){var n=e[t.placement];n.splice(n.indexOf(t.key),1);var s=this.fromElementDescriptor(t),c=this.toElementFinisherExtras((0,i[o])(s)||s);t=c.element,this.addElementPlacement(t,e),c.finisher&&r.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],e);a.push.apply(a,l)}}return{element:t,finishers:r,extras:a}},decorateConstructor:function(t,e){for(var a=[],r=e.length-1;r>=0;r--){var i=this.fromClassDescriptor(t),o=this.toClassDescriptor((0,e[r])(i)||i);if(void 0!==o.finisher&&a.push(o.finisher),void 0!==o.elements){t=o.elements;for(var n=0;n<t.length-1;n++)for(var s=n+1;s<t.length;s++)if(t[n].key===t[s].key&&t[n].placement===t[s].placement)throw new TypeError("Duplicated element ("+t[n].key+")")}}return{elements:t,finishers:a}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){var e;if(void 0!==t)return(e=t,function(t){if(Array.isArray(t))return t}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return g(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?g(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var a=b(t.key),r=String(t.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var i=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var o={kind:e,key:a,placement:r,descriptor:Object.assign({},i)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=t.initializer),o},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:y(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var a=y(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:a}},runClassFinishers:function(t,e){for(var a=0;a<e.length;a++){var r=(0,e[a])(t);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");t=r}}return t},disallowProperty:function(t,e,a){if(void 0!==t[e])throw new TypeError(a+" can't have a ."+e+" property.")}};return t}function p(t){var e,a=b(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===t.kind?"field":"method",key:a,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(r.decorators=t.decorators),"field"===t.kind&&(r.initializer=t.value),r}function f(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function m(t){return t.decorators&&t.decorators.length}function v(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function y(t,e){var a=t[e];if(void 0!==a&&"function"!=typeof a)throw new TypeError("Expected '"+e+"' to be a function");return a}function b(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var r=a.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}function k(t,e,a){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,a){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(a):i.value}},k(t,e,a||t)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}let _=function(t,e,a,r){var i=u();if(r)for(var o=0;o<r.length;o++)i=r[o](i);var n=e((function(t){i.initializeInstanceElements(t,s.elements)}),a),s=i.decorateClass(function(t){for(var e=[],a=function(t){return"method"===t.kind&&t.key===o.key&&t.placement===o.placement},r=0;r<t.length;r++){var i,o=t[r];if("method"===o.kind&&(i=e.find(a)))if(v(o.descriptor)||v(i.descriptor)){if(m(o)||m(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(m(o)){if(m(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}f(o,i)}else e.push(o)}return e}(n.d.map(p)),t);return i.initializeClassElements(n.F,s.elements),i.runClassFinishers(n.F,s.finishers)}(null,(function(t,e){class a extends e{constructor(...e){super(...e),t(this)}}return{F:a,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"overrideIcon",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"overrideImage",value:void 0},{kind:"field",decorators:[(0,i.Cb)({type:Boolean})],key:"stateColor",value:void 0},{kind:"field",decorators:[(0,i.Cb)({type:Boolean,reflect:!0,attribute:"icon"})],key:"_showIcon",value:()=>!0},{kind:"field",decorators:[(0,i.SB)()],key:"_iconStyle",value:()=>({})},{kind:"method",key:"render",value:function(){const t=this.stateObj;if(!t&&!this.overrideIcon&&!this.overrideImage)return r.dy`<div class="missing">
        <ha-svg-icon .path=${"M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z"}></ha-svg-icon>
      </div>`;if(!this._showIcon)return r.dy``;const e=t?(0,l.N)(t):void 0;return r.dy`<ha-state-icon
      style=${(0,n.V)(this._iconStyle)}
      data-domain=${(0,o.o)(this.stateColor||"light"===e&&!1!==this.stateColor?e:void 0)}
      data-state=${t?(0,s.q)(t):""}
      .icon=${this.overrideIcon}
      .state=${t}
    ></ha-state-icon>`}},{kind:"method",key:"willUpdate",value:function(t){if(k(w(a.prototype),"willUpdate",this).call(this,t),!t.has("stateObj")&&!t.has("overrideImage")&&!t.has("overrideIcon"))return;const e=this.stateObj,r={},i={backgroundImage:""};if(this._showIcon=!0,e&&void 0===this.overrideImage)if(!e.attributes.entity_picture_local&&!e.attributes.entity_picture||this.overrideIcon){if("on"===e.state&&(!1!==this.stateColor&&e.attributes.rgb_color&&(r.color=`rgb(${e.attributes.rgb_color.join(",")})`),e.attributes.brightness&&!1!==this.stateColor)){const t=e.attributes.brightness;if("number"!=typeof t){const a=`Type error: state-badge expected number, but type of ${e.entity_id}.attributes.brightness is ${typeof t} (${t})`;console.warn(a)}r.filter=`brightness(${(t+245)/5}%)`}}else{let t=e.attributes.entity_picture_local||e.attributes.entity_picture;this.hass&&(t=this.hass.hassUrl(t)),"camera"===(0,c.M)(e.entity_id)&&(t=(0,h.Ch)(t,80,80)),i.backgroundImage=`url(${t})`,this._showIcon=!1}else if(this.overrideImage){let t=this.overrideImage;this.hass&&(t=this.hass.hassUrl(t)),i.backgroundImage=`url(${t})`,this._showIcon=!1}this._iconStyle=r,Object.assign(this.style,i)}},{kind:"get",static:!0,key:"styles",value:function(){return[d.N,r.iv`
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
        ha-state-icon {
          transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;
        }
        .missing {
          color: #fce588;
        }
      `]}}]}}),r.oi);customElements.define("state-badge",_)},89439:(t,e,a)=>{if(a.d(e,{sF:()=>o,qW:()=>n,kU:()=>s,jU:()=>c,Ch:()=>l,nk:()=>d,i4:()=>h,Lr:()=>p,tb:()=>f,Xn:()=>m,Mw:()=>v,B:()=>b,zj:()=>g}),98818!=a.j)var r=a(43426);var i=a(22814);const o=98818!=a.j?[1,2,3,4,6,8]:null,n=2,s="hls",c="web_rtc",l=(t,e,a)=>`${t}&width=${e}&height=${a}`,d=t=>`/api/camera_proxy_stream/${t.entity_id}?token=${t.attributes.access_token}`,h=async(t,e,a,i)=>{const o=await(0,r.U)("_cameraTmbUrl",9e3,u,t,e);return l(o,a,i)},u=async(t,e)=>{const a=await(0,i.iI)(t,`/api/camera_proxy/${e}`);return t.hassUrl(a.path)},p=async(t,e,a)=>{const r={type:"camera/stream",entity_id:e};a&&(r.format=a);const i=await t.callWS(r);return i.url=t.hassUrl(i.url),i},f=(t,e,a)=>t.callWS({type:"camera/web_rtc_offer",entity_id:e,offer:a}),m=(t,e)=>t.callWS({type:"camera/get_prefs",entity_id:e}),v=(t,e,a)=>t.callWS({type:"camera/update_prefs",entity_id:e,...a}),y="media-source://camera/",b=t=>t.startsWith(y),g=t=>t.substring(y.length)}}]);
//# sourceMappingURL=ea14916a.js.map