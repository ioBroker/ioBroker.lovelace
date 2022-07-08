"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[63681],{42141:(e,i,t)=>{function r(e){return void 0===e||Array.isArray(e)?e:[e]}t.d(i,{r:()=>r})},60033:(e,i,t)=>{t(44577);var r=t(37500),n=t(33310),s=t(14516),a=t(47181),o=t(58831),d=t(85415),c=t(57066),l=t(57292),h=t(74186),p=t(73826);t(77576);function u(){u=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,i){["method","field"].forEach((function(t){i.forEach((function(i){i.kind===t&&"own"===i.placement&&this.defineClassElement(e,i)}),this)}),this)},initializeClassElements:function(e,i){var t=e.prototype;["method","field"].forEach((function(r){i.forEach((function(i){var n=i.placement;if(i.kind===r&&("static"===n||"prototype"===n)){var s="static"===n?e:t;this.defineClassElement(s,i)}}),this)}),this)},defineClassElement:function(e,i){var t=i.descriptor;if("field"===i.kind){var r=i.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,i.key,t)},decorateClass:function(e,i){var t=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!m(e))return t.push(e);var i=this.decorateElement(e,n);t.push(i.element),t.push.apply(t,i.extras),r.push.apply(r,i.finishers)}),this),!i)return{elements:t,finishers:r};var s=this.decorateConstructor(t,i);return r.push.apply(r,s.finishers),s.finishers=r,s},addElementPlacement:function(e,i,t){var r=i[e.placement];if(!t&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,i){for(var t=[],r=[],n=e.decorators,s=n.length-1;s>=0;s--){var a=i[e.placement];a.splice(a.indexOf(e.key),1);var o=this.fromElementDescriptor(e),d=this.toElementFinisherExtras((0,n[s])(o)||o);e=d.element,this.addElementPlacement(e,i),d.finisher&&r.push(d.finisher);var c=d.extras;if(c){for(var l=0;l<c.length;l++)this.addElementPlacement(c[l],i);t.push.apply(t,c)}}return{element:e,finishers:r,extras:t}},decorateConstructor:function(e,i){for(var t=[],r=i.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,i[r])(n)||n);if(void 0!==s.finisher&&t.push(s.finisher),void 0!==s.elements){e=s.elements;for(var a=0;a<e.length-1;a++)for(var o=a+1;o<e.length;o++)if(e[a].key===e[o].key&&e[a].placement===e[o].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:t}},fromElementDescriptor:function(e){var i={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(i,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(i.initializer=e.initializer),i},toElementDescriptors:function(e){var i;if(void 0!==e)return(i=e,function(e){if(Array.isArray(e))return e}(i)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(i)||function(e,i){if(e){if("string"==typeof e)return g(e,i);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?g(e,i):void 0}}(i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var i=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),i}),this)},toElementDescriptor:function(e){var i=String(e.kind);if("method"!==i&&"field"!==i)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+i+'"');var t=k(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:i,key:t,placement:r,descriptor:Object.assign({},n)};return"field"!==i?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:_(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var i={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(i,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),i},toClassDescriptor:function(e){var i=String(e.kind);if("class"!==i)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+i+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var t=_(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:t}},runClassFinishers:function(e,i){for(var t=0;t<i.length;t++){var r=(0,i[t])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,i,t){if(void 0!==e[i])throw new TypeError(t+" can't have a ."+i+" property.")}};return e}function f(e){var i,t=k(e.key);"method"===e.kind?i={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?i={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?i={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(i={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:i};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function v(e,i){void 0!==e.descriptor.get?i.descriptor.get=e.descriptor.get:i.descriptor.set=e.descriptor.set}function m(e){return e.decorators&&e.decorators.length}function y(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function _(e,i){var t=e[i];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+i+"' to be a function");return t}function k(e){var i=function(e,i){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,i||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(e)}(e,"string");return"symbol"==typeof i?i:String(i)}function g(e,i){(null==i||i>e.length)&&(i=e.length);for(var t=0,r=new Array(i);t<i;t++)r[t]=e[t];return r}const b=e=>r.dy`<mwc-list-item
  .twoline=${!!e.area}
>
  <span>${e.name}</span>
  <span slot="secondary">${e.area}</span>
</mwc-list-item>`;!function(e,i,t,r){var n=u();if(r)for(var s=0;s<r.length;s++)n=r[s](n);var a=i((function(e){n.initializeInstanceElements(e,o.elements)}),t),o=n.decorateClass(function(e){for(var i=[],t=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},r=0;r<e.length;r++){var n,s=e[r];if("method"===s.kind&&(n=i.find(t)))if(y(s.descriptor)||y(n.descriptor)){if(m(s)||m(n))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");n.descriptor=s.descriptor}else{if(m(s)){if(m(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");n.decorators=s.decorators}v(s,n)}else i.push(s)}return i}(a.d.map(f)),e);n.initializeClassElements(a.F,o.elements),n.runClassFinishers(a.F,o.finishers)}([(0,n.Mo)("ha-device-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"devices",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"areas",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"entities",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_opened",value:void 0},{kind:"field",decorators:[(0,n.IO)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_init",value:()=>!1},{kind:"field",key:"_getDevices",value(){return(0,s.Z)(((e,i,t,r,n,s,a)=>{if(!e.length)return[{id:"no_devices",area:"",name:this.hass.localize("ui.components.device-picker.no_devices")}];const c={};if(r||n||s)for(const e of t)e.device_id&&(e.device_id in c||(c[e.device_id]=[]),c[e.device_id].push(e));const h={};for(const e of i)h[e.area_id]=e;let p=e.filter((e=>e.id===this.value||!e.disabled_by));r&&(p=p.filter((e=>{const i=c[e.id];return!(!i||!i.length)&&c[e.id].some((e=>r.includes((0,o.M)(e.entity_id))))}))),n&&(p=p.filter((e=>{const i=c[e.id];return!i||!i.length||t.every((e=>!n.includes((0,o.M)(e.entity_id))))}))),s&&(p=p.filter((e=>{const i=c[e.id];return!(!i||!i.length)&&c[e.id].some((e=>{const i=this.hass.states[e.entity_id];return!!i&&(i.attributes.device_class&&s.includes(i.attributes.device_class))}))}))),a&&(p=p.filter((e=>e.id===this.value||a(e))));const u=p.map((e=>({id:e.id,name:(0,l.jL)(e,this.hass,c[e.id]),area:e.area_id&&h[e.area_id]?h[e.area_id].name:this.hass.localize("ui.components.device-picker.no_area")})));return u.length?1===u.length?u:u.sort(((e,i)=>(0,d.$)(e.name||"",i.name||""))):[{id:"no_devices",area:"",name:this.hass.localize("ui.components.device-picker.no_match")}]}))}},{kind:"method",key:"open",value:function(){var e;null===(e=this.comboBox)||void 0===e||e.open()}},{kind:"method",key:"focus",value:function(){var e;null===(e=this.comboBox)||void 0===e||e.focus()}},{kind:"method",key:"hassSubscribe",value:function(){return[(0,l.q4)(this.hass.connection,(e=>{this.devices=e})),(0,c.sG)(this.hass.connection,(e=>{this.areas=e})),(0,h.LM)(this.hass.connection,(e=>{this.entities=e}))]}},{kind:"method",key:"updated",value:function(e){(!this._init&&this.devices&&this.areas&&this.entities||e.has("_opened")&&this._opened)&&(this._init=!0,this.comboBox.items=this._getDevices(this.devices,this.areas,this.entities,this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter))}},{kind:"method",key:"render",value:function(){return this.devices&&this.areas&&this.entities?r.dy`
      <ha-combo-box
        .hass=${this.hass}
        .label=${void 0===this.label&&this.hass?this.hass.localize("ui.components.device-picker.device"):this.label}
        .value=${this._value}
        .helper=${this.helper}
        .renderer=${b}
        .disabled=${this.disabled}
        .required=${this.required}
        item-value-path="id"
        item-label-path="name"
        @opened-changed=${this._openedChanged}
        @value-changed=${this._deviceChanged}
      ></ha-combo-box>
    `:r.dy``}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_deviceChanged",value:function(e){e.stopPropagation();let i=e.detail.value;"no_devices"===i&&(i=""),i!==this._value&&this._setValue(i)}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_setValue",value:function(e){this.value=e,setTimeout((()=>{(0,a.B)(this,"value-changed",{value:e}),(0,a.B)(this,"change")}),0)}}]}}),(0,p.f)(r.oi))},63681:(e,i,t)=>{var r=t(67182),n=(t(51187),t(54444),t(37500)),s=t(33310),a=t(8636),o=t(47181),d=t(42141),c=t(58831),l=t(91741),h=t(57066),p=t(57292),u=t(74186),f=t(73826);t(60033),t(74535),t(68101),t(10983),t(16235),t(52039);function v(){v=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,i){["method","field"].forEach((function(t){i.forEach((function(i){i.kind===t&&"own"===i.placement&&this.defineClassElement(e,i)}),this)}),this)},initializeClassElements:function(e,i){var t=e.prototype;["method","field"].forEach((function(r){i.forEach((function(i){var n=i.placement;if(i.kind===r&&("static"===n||"prototype"===n)){var s="static"===n?e:t;this.defineClassElement(s,i)}}),this)}),this)},defineClassElement:function(e,i){var t=i.descriptor;if("field"===i.kind){var r=i.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,i.key,t)},decorateClass:function(e,i){var t=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!_(e))return t.push(e);var i=this.decorateElement(e,n);t.push(i.element),t.push.apply(t,i.extras),r.push.apply(r,i.finishers)}),this),!i)return{elements:t,finishers:r};var s=this.decorateConstructor(t,i);return r.push.apply(r,s.finishers),s.finishers=r,s},addElementPlacement:function(e,i,t){var r=i[e.placement];if(!t&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,i){for(var t=[],r=[],n=e.decorators,s=n.length-1;s>=0;s--){var a=i[e.placement];a.splice(a.indexOf(e.key),1);var o=this.fromElementDescriptor(e),d=this.toElementFinisherExtras((0,n[s])(o)||o);e=d.element,this.addElementPlacement(e,i),d.finisher&&r.push(d.finisher);var c=d.extras;if(c){for(var l=0;l<c.length;l++)this.addElementPlacement(c[l],i);t.push.apply(t,c)}}return{element:e,finishers:r,extras:t}},decorateConstructor:function(e,i){for(var t=[],r=i.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,i[r])(n)||n);if(void 0!==s.finisher&&t.push(s.finisher),void 0!==s.elements){e=s.elements;for(var a=0;a<e.length-1;a++)for(var o=a+1;o<e.length;o++)if(e[a].key===e[o].key&&e[a].placement===e[o].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:t}},fromElementDescriptor:function(e){var i={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(i,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(i.initializer=e.initializer),i},toElementDescriptors:function(e){var i;if(void 0!==e)return(i=e,function(e){if(Array.isArray(e))return e}(i)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(i)||function(e,i){if(e){if("string"==typeof e)return w(e,i);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?w(e,i):void 0}}(i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var i=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),i}),this)},toElementDescriptor:function(e){var i=String(e.kind);if("method"!==i&&"field"!==i)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+i+'"');var t=b(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:i,key:t,placement:r,descriptor:Object.assign({},n)};return"field"!==i?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:g(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var i={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(i,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),i},toClassDescriptor:function(e){var i=String(e.kind);if("class"!==i)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+i+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var t=g(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:t}},runClassFinishers:function(e,i){for(var t=0;t<i.length;t++){var r=(0,i[t])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,i,t){if(void 0!==e[i])throw new TypeError(t+" can't have a ."+i+" property.")}};return e}function m(e){var i,t=b(e.key);"method"===e.kind?i={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?i={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?i={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(i={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:i};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function y(e,i){void 0!==e.descriptor.get?i.descriptor.get=e.descriptor.get:i.descriptor.set=e.descriptor.set}function _(e){return e.decorators&&e.decorators.length}function k(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function g(e,i){var t=e[i];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+i+"' to be a function");return t}function b(e){var i=function(e,i){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,i||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(e)}(e,"string");return"symbol"==typeof i?i:String(i)}function w(e,i){(null==i||i>e.length)&&(i=e.length);for(var t=0,r=new Array(i);t<i;t++)r[t]=e[t];return r}const C="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";!function(e,i,t,r){var n=v();if(r)for(var s=0;s<r.length;s++)n=r[s](n);var a=i((function(e){n.initializeInstanceElements(e,o.elements)}),t),o=n.decorateClass(function(e){for(var i=[],t=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},r=0;r<e.length;r++){var n,s=e[r];if("method"===s.kind&&(n=i.find(t)))if(k(s.descriptor)||k(n.descriptor)){if(_(s)||_(n))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");n.descriptor=s.descriptor}else{if(_(s)){if(_(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");n.decorators=s.decorators}y(s,n)}else i.push(s)}return i}(a.d.map(m)),e);n.initializeClassElements(a.F,o.elements),n.runClassFinishers(a.F,o.finishers)}([(0,s.Mo)("ha-target-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"value",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"entityRegFilter",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"horizontal",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_areas",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_devices",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_entities",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_addMode",value:void 0},{kind:"field",decorators:[(0,s.IO)("#input")],key:"_inputElement",value:void 0},{kind:"method",key:"hassSubscribe",value:function(){return[(0,h.sG)(this.hass.connection,(e=>{const i={};for(const t of e)i[t.area_id]=t;this._areas=i})),(0,p.q4)(this.hass.connection,(e=>{const i={};for(const t of e)i[t.id]=t;this._devices=i})),(0,u.LM)(this.hass.connection,(e=>{this._entities=e}))]}},{kind:"method",key:"render",value:function(){return this._areas&&this._devices&&this._entities?n.dy`
      ${this.horizontal?n.dy`
            <div class="horizontal-container">
              ${this._renderChips()} ${this._renderPicker()}
            </div>
            ${this._renderItems()}
          `:n.dy`
            <div>
              ${this._renderItems()} ${this._renderPicker()}
              ${this._renderChips()}
            </div>
          `}
    `:n.dy``}},{kind:"method",key:"_renderItems",value:function(){var e,i,t;return n.dy`
      <div class="mdc-chip-set items">
        ${null!==(e=this.value)&&void 0!==e&&e.area_id?(0,d.r)(this.value.area_id).map((e=>{const i=this._areas[e];return this._renderChip("area_id",e,(null==i?void 0:i.name)||e,void 0,"M12.5 7C12.5 5.89 13.39 5 14.5 5H18C19.1 5 20 5.9 20 7V9.16C18.84 9.57 18 10.67 18 11.97V14H12.5V7M6 11.96V14H11.5V7C11.5 5.89 10.61 5 9.5 5H6C4.9 5 4 5.9 4 7V9.15C5.16 9.56 6 10.67 6 11.96M20.66 10.03C19.68 10.19 19 11.12 19 12.12V15H5V12C5 10.9 4.11 10 3 10S1 10.9 1 12V17C1 18.1 1.9 19 3 19V21H5V19H19V21H21V19C22.1 19 23 18.1 23 17V12C23 10.79 21.91 9.82 20.66 10.03Z")})):""}
        ${null!==(i=this.value)&&void 0!==i&&i.device_id?(0,d.r)(this.value.device_id).map((e=>{const i=this._devices[e];return this._renderChip("device_id",e,i?(0,p.jL)(i,this.hass):e,void 0,"M3 6H21V4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H7V18H3V6M13 12H9V13.78C8.39 14.33 8 15.11 8 16C8 16.89 8.39 17.67 9 18.22V20H13V18.22C13.61 17.67 14 16.88 14 16S13.61 14.33 13 13.78V12M11 17.5C10.17 17.5 9.5 16.83 9.5 16S10.17 14.5 11 14.5 12.5 15.17 12.5 16 11.83 17.5 11 17.5M22 8H16C15.5 8 15 8.5 15 9V19C15 19.5 15.5 20 16 20H22C22.5 20 23 19.5 23 19V9C23 8.5 22.5 8 22 8M21 18H17V10H21V18Z")})):""}
        ${null!==(t=this.value)&&void 0!==t&&t.entity_id?(0,d.r)(this.value.entity_id).map((e=>{const i=this.hass.states[e];return this._renderChip("entity_id",e,i?(0,l.C)(i):e,i)})):""}
      </div>
    `}},{kind:"method",key:"_renderChips",value:function(){return n.dy`
      <div class="mdc-chip-set">
        <div
          class="mdc-chip area_id add"
          .type=${"area_id"}
          @click=${this._showPicker}
        >
          <div class="mdc-chip__ripple"></div>
          <ha-svg-icon
            class="mdc-chip__icon mdc-chip__icon--leading"
            .path=${C}
          ></ha-svg-icon>
          <span role="gridcell">
            <span role="button" tabindex="0" class="mdc-chip__primary-action">
              <span class="mdc-chip__text"
                >${this.hass.localize("ui.components.target-picker.add_area_id")}</span
              >
            </span>
          </span>
        </div>
        <div
          class="mdc-chip device_id add"
          .type=${"device_id"}
          @click=${this._showPicker}
        >
          <div class="mdc-chip__ripple"></div>
          <ha-svg-icon
            class="mdc-chip__icon mdc-chip__icon--leading"
            .path=${C}
          ></ha-svg-icon>
          <span role="gridcell">
            <span role="button" tabindex="0" class="mdc-chip__primary-action">
              <span class="mdc-chip__text"
                >${this.hass.localize("ui.components.target-picker.add_device_id")}</span
              >
            </span>
          </span>
        </div>
        <div
          class="mdc-chip entity_id add"
          .type=${"entity_id"}
          @click=${this._showPicker}
        >
          <div class="mdc-chip__ripple"></div>
          <ha-svg-icon
            class="mdc-chip__icon mdc-chip__icon--leading"
            .path=${C}
          ></ha-svg-icon>
          <span role="gridcell">
            <span role="button" tabindex="0" class="mdc-chip__primary-action">
              <span class="mdc-chip__text"
                >${this.hass.localize("ui.components.target-picker.add_entity_id")}</span
              >
            </span>
          </span>
        </div>
      </div>
      ${this.helper?n.dy`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""}
    `}},{kind:"method",key:"_showPicker",value:async function(e){this._addMode=e.currentTarget.type,await this.updateComplete,setTimeout((()=>{var e,i;null===(e=this._inputElement)||void 0===e||e.open(),null===(i=this._inputElement)||void 0===i||i.focus()}),0)}},{kind:"method",key:"_renderChip",value:function(e,i,t,r,s){return n.dy`
      <div
        class="mdc-chip ${(0,a.$)({[e]:!0})}"
      >
        ${s?n.dy`<ha-svg-icon
              class="mdc-chip__icon mdc-chip__icon--leading"
              .path=${s}
            ></ha-svg-icon>`:""}
        ${r?n.dy`<ha-state-icon
              class="mdc-chip__icon mdc-chip__icon--leading"
              .state=${r}
            ></ha-state-icon>`:""}
        <span role="gridcell">
          <span role="button" tabindex="0" class="mdc-chip__primary-action">
            <span class="mdc-chip__text">${t}</span>
          </span>
        </span>
        ${"entity_id"===e?"":n.dy` <span role="gridcell">
              <ha-icon-button
                class="expand-btn mdc-chip__icon mdc-chip__icon--trailing"
                tabindex="-1"
                role="button"
                .label=${this.hass.localize("ui.components.target-picker.expand")}
                .path=${"M18.17,12L15,8.83L16.41,7.41L21,12L16.41,16.58L15,15.17L18.17,12M5.83,12L9,15.17L7.59,16.59L3,12L7.59,7.42L9,8.83L5.83,12Z"}
                hideTooltip
                .id=${i}
                .type=${e}
                @click=${this._handleExpand}
              ></ha-icon-button>
              <paper-tooltip class="expand" animation-delay="0"
                >${this.hass.localize(`ui.components.target-picker.expand_${e}`)}</paper-tooltip
              >
            </span>`}
        <span role="gridcell">
          <ha-icon-button
            class="mdc-chip__icon mdc-chip__icon--trailing"
            tabindex="-1"
            role="button"
            .label=${this.hass.localize("ui.components.target-picker.expand")}
            .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
            hideTooltip
            .id=${i}
            .type=${e}
            @click=${this._handleRemove}
          ></ha-icon-button>
          <paper-tooltip animation-delay="0"
            >${this.hass.localize(`ui.components.target-picker.remove_${e}`)}</paper-tooltip
          >
        </span>
      </div>
    `}},{kind:"method",key:"_renderPicker",value:function(){switch(this._addMode){case"area_id":return n.dy`
          <ha-area-picker
            .hass=${this.hass}
            id="input"
            .type=${"area_id"}
            .label=${this.hass.localize("ui.components.target-picker.add_area_id")}
            no-add
            .deviceFilter=${this.deviceFilter}
            .entityFilter=${this.entityRegFilter}
            .includeDeviceClasses=${this.includeDeviceClasses}
            .includeDomains=${this.includeDomains}
            @value-changed=${this._targetPicked}
          ></ha-area-picker>
        `;case"device_id":return n.dy`
          <ha-device-picker
            .hass=${this.hass}
            id="input"
            .type=${"device_id"}
            .label=${this.hass.localize("ui.components.target-picker.add_device_id")}
            .deviceFilter=${this.deviceFilter}
            .entityFilter=${this.entityRegFilter}
            .includeDeviceClasses=${this.includeDeviceClasses}
            .includeDomains=${this.includeDomains}
            @value-changed=${this._targetPicked}
          ></ha-device-picker>
        `;case"entity_id":return n.dy`
          <ha-entity-picker
            .hass=${this.hass}
            id="input"
            .type=${"entity_id"}
            .label=${this.hass.localize("ui.components.target-picker.add_entity_id")}
            .entityFilter=${this.entityFilter}
            .includeDeviceClasses=${this.includeDeviceClasses}
            .includeDomains=${this.includeDomains}
            @value-changed=${this._targetPicked}
            allow-custom-entity
          ></ha-entity-picker>
        `}return n.dy``}},{kind:"method",key:"_targetPicked",value:function(e){if(e.stopPropagation(),!e.detail.value)return;const i=e.detail.value,t=e.currentTarget;t.value="",this._addMode=void 0,(0,o.B)(this,"value-changed",{value:this.value?{...this.value,[t.type]:this.value[t.type]?[...(0,d.r)(this.value[t.type]),i]:i}:{[t.type]:i}})}},{kind:"method",key:"_handleExpand",value:function(e){const i=e.currentTarget,t=[],r=[];if("area_id"===i.type)Object.values(this._devices).forEach((e=>{var r;e.area_id!==i.id||null!==(r=this.value.device_id)&&void 0!==r&&r.includes(e.id)||!this._deviceMeetsFilter(e)||t.push(e.id)})),this._entities.forEach((e=>{var t;e.area_id!==i.id||null!==(t=this.value.entity_id)&&void 0!==t&&t.includes(e.entity_id)||!this._entityRegMeetsFilter(e)||r.push(e.entity_id)}));else{if("device_id"!==i.type)return;this._entities.forEach((e=>{var t;e.device_id!==i.id||null!==(t=this.value.entity_id)&&void 0!==t&&t.includes(e.entity_id)||!this._entityRegMeetsFilter(e)||r.push(e.entity_id)}))}let n=this.value;r.length&&(n=this._addItems(n,"entity_id",r)),t.length&&(n=this._addItems(n,"device_id",t)),n=this._removeItem(n,i.type,i.id),(0,o.B)(this,"value-changed",{value:n})}},{kind:"method",key:"_handleRemove",value:function(e){const i=e.currentTarget;(0,o.B)(this,"value-changed",{value:this._removeItem(this.value,i.type,i.id)})}},{kind:"method",key:"_addItems",value:function(e,i,t){return{...e,[i]:e[i]?(0,d.r)(e[i]).concat(t):t}}},{kind:"method",key:"_removeItem",value:function(e,i,t){const r=(0,d.r)(e[i]).filter((e=>String(e)!==t));if(r.length)return{...e,[i]:r};const n={...e};return delete n[i],Object.keys(n).length?n:void 0}},{kind:"method",key:"_deviceMeetsFilter",value:function(e){var i;const t=null===(i=this._entities)||void 0===i?void 0:i.filter((i=>i.device_id===e.id));if(this.includeDomains){if(!t||!t.length)return!1;if(!t.some((e=>this.includeDomains.includes((0,c.M)(e.entity_id)))))return!1}if(this.includeDeviceClasses){if(!t||!t.length)return!1;if(!t.some((e=>{const i=this.hass.states[e.entity_id];return!!i&&(i.attributes.device_class&&this.includeDeviceClasses.includes(i.attributes.device_class))})))return!1}return!this.deviceFilter||this.deviceFilter(e)}},{kind:"method",key:"_entityRegMeetsFilter",value:function(e){if(e.entity_category)return!1;if(this.includeDomains&&!this.includeDomains.includes((0,c.M)(e.entity_id)))return!1;if(this.includeDeviceClasses){const i=this.hass.states[e.entity_id];if(!i)return!1;if(!i.attributes.device_class||!this.includeDeviceClasses.includes(i.attributes.device_class))return!1}return!this.entityRegFilter||this.entityRegFilter(e)}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`
      ${(0,n.$m)(r)}
      .horizontal-container {
        display: flex;
        flex-wrap: wrap;
        min-height: 56px;
        align-items: center;
      }
      .mdc-chip {
        color: var(--primary-text-color);
      }
      .items {
        z-index: 2;
      }
      .mdc-chip-set {
        padding: 4px 0;
      }
      .mdc-chip.add {
        color: rgba(0, 0, 0, 0.87);
      }
      .mdc-chip:not(.add) {
        cursor: default;
      }
      .mdc-chip ha-icon-button {
        --mdc-icon-button-size: 24px;
        display: flex;
        align-items: center;
        outline: none;
      }
      .mdc-chip ha-icon-button ha-svg-icon {
        border-radius: 50%;
        background: var(--secondary-text-color);
      }
      .mdc-chip__icon.mdc-chip__icon--trailing {
        width: 16px;
        height: 16px;
        --mdc-icon-size: 14px;
        color: var(--secondary-text-color);
        margin-inline-start: 4px !important;
        margin-inline-end: -4px !important;
        direction: var(--direction);
      }
      .mdc-chip__icon--leading {
        display: flex;
        align-items: center;
        justify-content: center;
        --mdc-icon-size: 20px;
        border-radius: 50%;
        padding: 6px;
        margin-left: -14px !important;
        margin-inline-start: -14px !important;
        margin-inline-end: 4px !important;
        direction: var(--direction);
      }
      .expand-btn {
        margin-right: 0;
      }
      .mdc-chip.area_id:not(.add) {
        border: 2px solid #fed6a4;
        background: var(--card-background-color);
      }
      .mdc-chip.area_id:not(.add) .mdc-chip__icon--leading,
      .mdc-chip.area_id.add {
        background: #fed6a4;
      }
      .mdc-chip.device_id:not(.add) {
        border: 2px solid #a8e1fb;
        background: var(--card-background-color);
      }
      .mdc-chip.device_id:not(.add) .mdc-chip__icon--leading,
      .mdc-chip.device_id.add {
        background: #a8e1fb;
      }
      .mdc-chip.entity_id:not(.add) {
        border: 2px solid #d2e7b9;
        background: var(--card-background-color);
      }
      .mdc-chip.entity_id:not(.add) .mdc-chip__icon--leading,
      .mdc-chip.entity_id.add {
        background: #d2e7b9;
      }
      .mdc-chip:hover {
        z-index: 5;
      }
      paper-tooltip.expand {
        min-width: 200px;
      }
      :host([disabled]) .mdc-chip {
        opacity: var(--light-disabled-opacity);
        pointer-events: none;
      }
    `}}]}}),(0,f.f)(n.oi))},57066:(e,i,t)=>{t.d(i,{Lo:()=>a,IO:()=>o,qv:()=>d,sG:()=>h,TD:()=>p,Dl:()=>u});var r=t(97330),n=t(85415),s=t(38346);const a=(e,i)=>e.callWS({type:"config/area_registry/create",...i}),o=(e,i,t)=>e.callWS({type:"config/area_registry/update",area_id:i,...t}),d=(e,i)=>e.callWS({type:"config/area_registry/delete",area_id:i}),c=e=>e.sendMessagePromise({type:"config/area_registry/list"}).then((e=>e.sort(((e,i)=>(0,n.$)(e.name,i.name))))),l=(e,i)=>e.subscribeEvents((0,s.D)((()=>c(e).then((e=>i.setState(e,!0)))),500,!0),"area_registry_updated"),h=(e,i)=>(0,r.B)("_areaRegistry",c,l,e,i),p=e=>{const i={};for(const t of e)t.area_id&&(t.area_id in i||(i[t.area_id]=[]),i[t.area_id].push(t));return i},u=e=>{const i={};for(const t of e)t.area_id&&(t.area_id in i||(i[t.area_id]=[]),i[t.area_id].push(t));return i}},57292:(e,i,t)=>{t.d(i,{jL:()=>o,t1:()=>d,dl:()=>c,q4:()=>p,Wg:()=>u,pI:()=>f});var r=t(97330),n=t(91741);if(32143==t.j)var s=t(85415);var a=t(38346);const o=(e,i,t)=>e.name_by_user||e.name||t&&((e,i)=>{for(const t of i||[]){const i="string"==typeof t?t:t.entity_id,r=e.states[i];if(r)return(0,n.C)(r)}})(i,t)||i.localize("ui.panel.config.devices.unnamed_device","type",i.localize(`ui.panel.config.devices.type.${e.entry_type||"device"}`)),d=(e,i,t)=>e.callWS({type:"config/device_registry/update",device_id:i,...t}),c=(e,i,t)=>e.callWS({type:"config/device_registry/remove_config_entry",device_id:i,config_entry_id:t}),l=e=>e.sendMessagePromise({type:"config/device_registry/list"}),h=(e,i)=>e.subscribeEvents((0,a.D)((()=>l(e).then((e=>i.setState(e,!0)))),500,!0),"device_registry_updated"),p=(e,i)=>(0,r.B)("_dr",l,h,e,i),u=e=>e.sort(((e,i)=>(0,s.f)(e.name||"",i.name||""))),f=e=>{const i={};for(const t of e)t.device_id&&(t.device_id in i||(i[t.device_id]=[]),i[t.device_id].push(t));return i}},74186:(e,i,t)=>{t.d(i,{eD:()=>o,Mw:()=>d,vA:()=>c,L3:()=>l,Nv:()=>h,z3:()=>p,hg:()=>u,LM:()=>v,_V:()=>m});var r=t(97330);if(32143==t.j)var n=t(91741);if(32143==t.j)var s=t(85415);var a=t(38346);const o=(e,i)=>i.find((i=>e.states[i.entity_id]&&"battery"===e.states[i.entity_id].attributes.device_class)),d=(e,i)=>i.find((i=>e.states[i.entity_id]&&"battery_charging"===e.states[i.entity_id].attributes.device_class)),c=(e,i)=>{if(i.name)return i.name;const t=e.states[i.entity_id];return t?(0,n.C)(t):i.entity_id},l=(e,i)=>e.callWS({type:"config/entity_registry/get",entity_id:i}),h=(e,i,t)=>e.callWS({type:"config/entity_registry/update",entity_id:i,...t}),p=(e,i)=>e.callWS({type:"config/entity_registry/remove",entity_id:i}),u=e=>e.sendMessagePromise({type:"config/entity_registry/list"}),f=(e,i)=>e.subscribeEvents((0,a.D)((()=>u(e).then((e=>i.setState(e,!0)))),500,!0),"entity_registry_updated"),v=(e,i)=>(0,r.B)("_entityRegistry",u,f,e,i),m=e=>e.sort(((e,i)=>(0,s.f)(e.name||"",i.name||"")))}}]);
//# sourceMappingURL=0189dfe8.js.map