(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[3525],{24734:(e,t,r)=>{"use strict";r.d(t,{B:()=>o});var i=r(47181);const o=(e,t)=>{(0,i.B)(e,"show-dialog",{dialogTag:"dialog-media-player-browse",dialogImport:()=>Promise.all([r.e(8161),r.e(1041),r.e(3967),r.e(1657),r.e(7724),r.e(2613),r.e(9799),r.e(6294),r.e(839),r.e(8251),r.e(4535),r.e(5397),r.e(5220)]).then(r.bind(r,52809)),dialogParams:t})}},13525:(e,t,r)=>{"use strict";r.r(t),r.d(t,{HuiMediaControlCard:()=>L});r(25230);var i=r(68546),o=(r(85481),r(50424)),n=r(55358),a=r(76666),s=r(92483),c=r(62877),l=r(47181),d=r(91741),h=r(36145),u=r(40095),p=r(67794),f=r.n(p),m=r(74790);const v=!1;f()._pipeline.generator.register("default",(e=>{e.sort(((e,t)=>t.population-e.population));const t=e[0];let r;const i=new Map,o=(e,r)=>(i.has(e)||i.set(e,(0,m.$)(t.rgb,r)),i.get(e)>4.5);for(let t=1;t<e.length&&void 0===r;t++){if(o(e[t].hex,e[t].rgb)){v,r=e[t].rgb;break}const i=e[t];v;for(let n=t+1;n<e.length;n++){const t=e[n],a=Math.abs(i.rgb[0]-t.rgb[0])+Math.abs(i.rgb[1]-t.rgb[1])+Math.abs(i.rgb[2]-t.rgb[2]);if(!(a>150)&&o(t.hex,t.rgb)){v,r=t.rgb;break}}}return void 0===r&&(r=t.getYiq()<200?[255,255,255]:[0,0,0]),{foreground:new t.constructor(r,0),background:t}}));var g=r(38346),y=(r(22098),r(16509),r(10983),r(52039),r(24734)),b=r(56007),k=r(69371),_=r(15688),w=r(53658),E=r(54845);function x(){x=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var o=t.placement;if(t.kind===i&&("static"===o||"prototype"===o)){var n="static"===o?e:r;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!O(e))return r.push(e);var t=this.decorateElement(e,o);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var n=this.decorateConstructor(r,t);return i.push.apply(i,n.finishers),n.finishers=i,n},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],o=e.decorators,n=o.length-1;n>=0;n--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,o[n])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var o=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[i])(o)||o);if(void 0!==n.finisher&&r.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=$(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:r,placement:i,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:S(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=S(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function C(e){var t,r=$(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function P(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function O(e){return e.decorators&&e.decorators.length}function z(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function S(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function $(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function j(e,t,r){return(j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,r,i){var o=x();if(i)for(var n=0;n<i.length;n++)o=i[n](o);var a=t((function(e){o.initializeInstanceElements(e,s.elements)}),r),s=o.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},i=0;i<e.length;i++){var o,n=e[i];if("method"===n.kind&&(o=t.find(r)))if(z(n.descriptor)||z(o.descriptor)){if(O(n)||O(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(O(n)){if(O(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}P(n,o)}else t.push(n)}return t}(a.d.map(C)),e);o.initializeClassElements(a.F,s.elements),o.runClassFinishers(a.F,s.finishers)}([(0,n.Mo)("hui-marquee")],(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,n.Cb)()],key:"text",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"active",value:void 0},{kind:"field",decorators:[(0,n.Cb)({reflect:!0,type:Boolean,attribute:"animating"})],key:"_animating",value:()=>!1},{kind:"method",key:"firstUpdated",value:function(e){j(D(r.prototype),"firstUpdated",this).call(this,e),this.addEventListener("mouseover",(()=>this.classList.add("hovering")),{capture:!0}),this.addEventListener("mouseout",(()=>this.classList.remove("hovering")))}},{kind:"method",key:"updated",value:function(e){j(D(r.prototype),"updated",this).call(this,e),e.has("text")&&this._animating&&(this._animating=!1),e.has("active")&&this.active&&this.offsetWidth<this.scrollWidth&&(this._animating=!0)}},{kind:"method",key:"render",value:function(){return this.text?o.dy`
      <div class="marquee-inner" @animationiteration=${this._onIteration}>
        <span>${this.text}</span>
        ${this._animating?o.dy` <span>${this.text}</span> `:""}
      </div>
    `:o.dy``}},{kind:"method",key:"_onIteration",value:function(){this.active||(this._animating=!1)}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`
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
    `}}]}}),o.oi);var I=r(75502);function T(){T=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var o=t.placement;if(t.kind===i&&("static"===o||"prototype"===o)){var n="static"===o?e:r;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!M(e))return r.push(e);var t=this.decorateElement(e,o);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var n=this.decorateConstructor(r,t);return i.push.apply(i,n.finishers),n.finishers=i,n},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],o=e.decorators,n=o.length-1;n>=0;n--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,o[n])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var o=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[i])(o)||o);if(void 0!==n.finisher&&r.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?N(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=U(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:r,placement:i,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:R(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=R(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function B(e){var t,r=U(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function q(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function M(e){return e.decorators&&e.decorators.length}function F(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function R(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function U(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function V(e,t,r){return(V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}let L=function(e,t,r,i){var o=T();if(i)for(var n=0;n<i.length;n++)o=i[n](o);var a=t((function(e){o.initializeInstanceElements(e,s.elements)}),r),s=o.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},i=0;i<e.length;i++){var o,n=e[i];if("method"===n.kind&&(o=t.find(r)))if(F(n.descriptor)||F(o.descriptor)){if(M(n)||M(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(M(n)){if(M(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}q(n,o)}else t.push(n)}return t}(a.d.map(B)),e);return o.initializeClassElements(a.F,s.elements),o.runClassFinishers(a.F,s.finishers)}([(0,n.Mo)("hui-media-control-card")],(function(e,t){class p extends t{constructor(...t){super(...t),e(this)}}return{F:p,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([r.e(5009),r.e(2955),r.e(8161),r.e(1041),r.e(1657),r.e(4268),r.e(3098),r.e(1422),r.e(4535),r.e(2105)]).then(r.bind(r,52105)),document.createElement("hui-media-control-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,r){return{type:"media-control",entity:(0,_.j)(e,1,t,r,["media_player"])[0]||""}}},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_foregroundColor",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_backgroundColor",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_narrow",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_veryNarrow",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_cardHeight",value:()=>0},{kind:"field",decorators:[(0,n.IO)("paper-progress")],key:"_progressBar",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_marqueeActive",value:()=>!1},{kind:"field",key:"_progressInterval",value:void 0},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(e){if(!e.entity||"media_player"!==e.entity.split(".")[0])throw new Error("Specify an entity from within the media_player domain");this._config=e}},{kind:"method",key:"connectedCallback",value:function(){if(V(H(p.prototype),"connectedCallback",this).call(this),this.updateComplete.then((()=>this._attachObserver())),!this.hass||!this._config)return;const e=this._stateObj;e&&!this._progressInterval&&this._showProgressBar&&"playing"===e.state&&(this._progressInterval=window.setInterval((()=>this._updateProgressBar()),1e3))}},{kind:"method",key:"disconnectedCallback",value:function(){this._progressInterval&&(clearInterval(this._progressInterval),this._progressInterval=void 0),this._resizeObserver&&this._resizeObserver.disconnect()}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return o.dy``;const e=this._stateObj;if(!e)return o.dy`
        <hui-warning>
          ${(0,I.i)(this.hass,this._config.entity)}
        </hui-warning>
      `;const t={"background-image":this._image?`url(${this.hass.hassUrl(this._image)})`:"none",width:`${this._cardHeight}px`,"background-color":this._backgroundColor||""},r={"background-image":`linear-gradient(to right, ${this._backgroundColor}, ${this._backgroundColor+"00"})`,width:`${this._cardHeight}px`},n=e.state,c="off"===n,l=b.V_.includes(n)||"off"===n&&!(0,u.e)(e,k.rv),p=!this._image,f=(0,k.xt)(e),m=f&&(!this._veryNarrow||c||"idle"===n||"on"===n),v=(0,k.Mj)(e);return o.dy`
      <ha-card>
        <div
          class="background ${(0,a.$)({"no-image":p,off:c||l,unavailable:l})}"
        >
          <div
            class="color-block"
            style=${(0,s.V)({"background-color":this._backgroundColor||""})}
          ></div>
          <div
            class="no-img"
            style=${(0,s.V)({"background-color":this._backgroundColor||""})}
          ></div>
          <div class="image" style=${(0,s.V)(t)}></div>
          ${p?"":o.dy`
                <div
                  class="color-gradient"
                  style=${(0,s.V)(r)}
                ></div>
              `}
        </div>
        <div
          class="player ${(0,a.$)({"no-image":p,narrow:this._narrow&&!this._veryNarrow,off:c||l,"no-progress":this._veryNarrow||!this._showProgressBar,"no-controls":!m})}"
          style=${(0,s.V)({color:this._foregroundColor||""})}
        >
          <div class="top-info">
            <div class="icon-name">
              <ha-icon class="icon" .icon=${(0,h.M)(e)}></ha-icon>
              <div>
                ${this._config.name||(0,d.C)(this.hass.states[this._config.entity])}
              </div>
            </div>
            <div>
              <ha-icon-button
                icon="hass:dots-vertical"
                class="more-info"
                @click=${this._handleMoreInfo}
              ></ha-icon-button>
            </div>
          </div>
          ${!l&&(v||e.attributes.media_title||m)?o.dy`
                <div>
                  <div class="title-controls">
                    ${v||e.attributes.media_title?o.dy`
                          <div class="media-info">
                            <hui-marquee
                              .text=${e.attributes.media_title||v}
                              .active=${this._marqueeActive}
                              @mouseover=${this._marqueeMouseOver}
                              @mouseleave=${this._marqueeMouseLeave}
                            ></hui-marquee>
                            ${e.attributes.media_title?v:""}
                          </div>
                        `:""}
                    ${m?o.dy`
                          <div class="controls">
                            ${f.map((e=>o.dy`
                                <ha-icon-button
                                  .title=${this.hass.localize(`ui.card.media_player.${e.action}`)}
                                  .icon=${e.icon}
                                  action=${e.action}
                                  @click=${this._handleClick}
                                ></ha-icon-button>
                              `))}
                            ${(0,u.e)(e,k.pu)?o.dy`
                                  <mwc-icon-button
                                    class="browse-media"
                                    .title=${this.hass.localize("ui.card.media_player.browse_media")}
                                    @click=${this._handleBrowseMedia}
                                    ><ha-svg-icon
                                      .path=${i.hBf}
                                    ></ha-svg-icon
                                  ></mwc-icon-button>
                                `:""}
                          </div>
                        `:""}
                  </div>
                  ${this._showProgressBar?o.dy`
                        <paper-progress
                          .max=${e.attributes.media_duration}
                          style=${(0,s.V)({"--paper-progress-active-color":this._foregroundColor||"var(--accent-color)",cursor:(0,u.e)(e,k.xh)?"pointer":"initial"})}
                          @click=${this._handleSeek}
                        ></paper-progress>
                      `:""}
                </div>
              `:""}
        </div>
      </ha-card>
    `}},{kind:"method",key:"shouldUpdate",value:function(e){return(0,w.G)(this,e)}},{kind:"method",key:"firstUpdated",value:function(){this._attachObserver()}},{kind:"method",key:"willUpdate",value:function(e){var t,r;if(V(H(p.prototype),"willUpdate",this).call(this,e),this.hasUpdated||this._measureCard(),!this._config||!this.hass||!e.has("_config")&&!e.has("hass"))return;if(!this._stateObj)return this._progressInterval&&(clearInterval(this._progressInterval),this._progressInterval=void 0),this._foregroundColor=void 0,void(this._backgroundColor=void 0);const i=e.get("hass"),o=(null==i||null===(t=i.states[this._config.entity])||void 0===t?void 0:t.attributes.entity_picture_local)||(null==i||null===(r=i.states[this._config.entity])||void 0===r?void 0:r.attributes.entity_picture);if(!this._image)return this._foregroundColor=void 0,void(this._backgroundColor=void 0);this._image!==o&&this._setColors()}},{kind:"method",key:"updated",value:function(e){if(!this._config||!this.hass||!this._stateObj||!e.has("_config")&&!e.has("hass"))return;const t=this._stateObj,r=e.get("hass"),i=e.get("_config");r&&i&&r.themes===this.hass.themes&&i.theme===this._config.theme||(0,c.R)(this,this.hass.themes,this._config.theme),this._updateProgressBar(),!this._progressInterval&&this._showProgressBar&&"playing"===t.state?this._progressInterval=window.setInterval((()=>this._updateProgressBar()),1e3):!this._progressInterval||this._showProgressBar&&"playing"===t.state||(clearInterval(this._progressInterval),this._progressInterval=void 0)}},{kind:"get",key:"_image",value:function(){if(!this.hass||!this._config)return;const e=this._stateObj;return e?e.attributes.entity_picture_local||e.attributes.entity_picture:void 0}},{kind:"get",key:"_showProgressBar",value:function(){if(!this.hass||!this._config||this._narrow)return!1;const e=this._stateObj;return!!e&&(("playing"===e.state||"paused"===e.state)&&"media_duration"in e.attributes&&"media_position"in e.attributes)}},{kind:"method",key:"_measureCard",value:function(){const e=this.shadowRoot.querySelector("ha-card");e&&(this._narrow=e.offsetWidth<350,this._veryNarrow=e.offsetWidth<300,this._cardHeight=e.offsetHeight)}},{kind:"method",key:"_attachObserver",value:async function(){this._resizeObserver||(await(0,E.P)(),this._resizeObserver=new ResizeObserver((0,g.D)((()=>this._measureCard()),250,!1)));const e=this.shadowRoot.querySelector("ha-card");e&&this._resizeObserver.observe(e)}},{kind:"method",key:"_handleMoreInfo",value:function(){(0,l.B)(this,"hass-more-info",{entityId:this._config.entity})}},{kind:"method",key:"_handleBrowseMedia",value:function(){(0,y.B)(this,{action:"play",entityId:this._config.entity,mediaPickedCallback:e=>this._playMedia(e.item.media_content_id,e.item.media_content_type)})}},{kind:"method",key:"_playMedia",value:function(e,t){this.hass.callService("media_player","play_media",{entity_id:this._config.entity,media_content_id:e,media_content_type:t})}},{kind:"method",key:"_handleClick",value:function(e){const t=e.currentTarget.getAttribute("action");this.hass.callService("media_player",t,{entity_id:this._config.entity})}},{kind:"method",key:"_updateProgressBar",value:function(){this._progressBar&&(this._progressBar.value=(0,k.rs)(this._stateObj))}},{kind:"get",key:"_stateObj",value:function(){return this.hass.states[this._config.entity]}},{kind:"method",key:"_handleSeek",value:function(e){const t=this._stateObj;if(!(0,u.e)(t,k.xh))return;const r=this.shadowRoot.querySelector("paper-progress").offsetWidth,i=e.offsetX/r,o=e.currentTarget.max*i;this.hass.callService("media_player","media_seek",{entity_id:this._config.entity,seek_position:o})}},{kind:"method",key:"_setColors",value:async function(){if(this._image)try{const{foreground:e,background:t}=await((e,t=16)=>new(f())(e,{colorCount:t}).getPalette().then((({foreground:e,background:t})=>({background:t,foreground:e}))))(this._image);this._backgroundColor=t.hex,this._foregroundColor=e.hex}catch(e){console.error("Error getting Image Colors",e),this._foregroundColor=void 0,this._backgroundColor=void 0}}},{kind:"method",key:"_marqueeMouseOver",value:function(){this._marqueeActive||(this._marqueeActive=!0)}},{kind:"method",key:"_marqueeMouseLeave",value:function(){this._marqueeActive&&(this._marqueeActive=!1)}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`
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

      mwc-icon-button.browse-media {
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

      .icon-name ha-icon {
        padding-right: 8px;
      }

      .more-info {
        position: absolute;
        top: 4px;
        right: 4px;
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

      paper-progress {
        width: 100%;
        height: var(--paper-progress-height, 4px);
        margin-top: 4px;
        border-radius: calc(var(--paper-progress-height, 4px) / 2);
        --paper-progress-container-color: rgba(200, 200, 200, 0.5);
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
    `}}]}}),o.oi)}}]);
//# sourceMappingURL=chunk.edb690a1462e0d29e4c9.js.map