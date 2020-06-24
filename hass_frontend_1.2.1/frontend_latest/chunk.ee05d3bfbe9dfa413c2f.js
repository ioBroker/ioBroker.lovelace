/*! For license information please see chunk.ee05d3bfbe9dfa413c2f.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[136,159],{122:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));i(4),i(141);var n=i(83),r=i(2);const o={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(e){n.b._downHandler.call(this,e),this.pressed&&this.ensureRipple(e)},ensureRipple:function(e){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var t=this._rippleContainer||this.root;if(t&&Object(r.a)(t).appendChild(this._ripple),e){var i=Object(r.a)(this._rippleContainer||this),n=Object(r.a)(e).rootTarget;i.deepContains(n)&&this._ripple.uiDownAction(e)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(e){this.hasRipple()&&(this._ripple.noink=e)}}},137:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));i(4);var n=i(83),r=i(44);const o=[n.a,r.a,{hostAttributes:{role:"option",tabindex:"0"}}]},140:function(e,t,i){"use strict";i(4),i(51);var n=i(170),r=i(5),o=i(3);Object(r.a)({_template:o.a`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,is:"paper-listbox",behaviors:[n.a],hostAttributes:{role:"listbox"}})},141:function(e,t,i){"use strict";i(4);var n=i(42),r=i(5),o=i(2),s=i(3),a={distance:function(e,t,i,n){var r=e-i,o=t-n;return Math.sqrt(r*r+o*o)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function c(e){this.element=e,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}function l(e){this.element=e,this.color=window.getComputedStyle(e).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),Object(o.a)(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}c.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(e,t){var i=a.distance(e,t,0,0),n=a.distance(e,t,this.width,0),r=a.distance(e,t,0,this.height),o=a.distance(e,t,this.width,this.height);return Math.max(i,n,r,o)}},l.MAX_RADIUS=300,l.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var e;return this.mouseDownStart?(e=a.now()-this.mouseDownStart,this.mouseUpStart&&(e-=this.mouseUpElapsed),e):0},get mouseUpElapsed(){return this.mouseUpStart?a.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var e=this.containerMetrics.width*this.containerMetrics.width,t=this.containerMetrics.height*this.containerMetrics.height,i=1.1*Math.min(Math.sqrt(e+t),l.MAX_RADIUS)+5,n=1.1-i/l.MAX_RADIUS*.2,r=this.mouseInteractionSeconds/n,o=i*(1-Math.pow(80,-r));return Math.abs(o)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var e=.3*this.mouseUpElapsedSeconds,t=this.opacity;return Math.max(0,Math.min(e,t))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,l.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,l.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new c(this.element)},draw:function(){var e,t,i;this.wave.style.opacity=this.opacity,e=this.radius/(this.containerMetrics.size/2),t=this.xNow-this.containerMetrics.width/2,i=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+t+"px, "+i+"px)",this.waveContainer.style.transform="translate3d("+t+"px, "+i+"px, 0)",this.wave.style.webkitTransform="scale("+e+","+e+")",this.wave.style.transform="scale3d("+e+","+e+",1)"},downAction:function(e){var t=this.containerMetrics.width/2,i=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=a.now(),this.center?(this.xStart=t,this.yStart=i,this.slideDistance=a.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=e?e.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=e?e.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=t,this.yEnd=i,this.slideDistance=a.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(e){this.isMouseDown&&(this.mouseUpStart=a.now())},remove:function(){Object(o.a)(Object(o.a)(this.waveContainer).parentNode).removeChild(this.waveContainer)}},Object(r.a)({_template:s.a`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:"paper-ripple",behaviors:[n.a],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){11==Object(o.a)(this).parentNode.nodeType?this.keyEventTarget=Object(o.a)(this).getOwnerRoot().host:this.keyEventTarget=Object(o.a)(this).parentNode;var e=this.keyEventTarget;this.listen(e,"up","uiUpAction"),this.listen(e,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var e=0;e<this.ripples.length;++e)if(!this.ripples[e].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async((function(){this.upAction()}),1)},uiDownAction:function(e){this.noink||this.downAction(e)},downAction:function(e){this.holdDown&&this.ripples.length>0||(this.addRipple().downAction(e),this._animating||(this._animating=!0,this.animate()))},uiUpAction:function(e){this.noink||this.upAction(e)},upAction:function(e){this.holdDown||(this.ripples.forEach((function(t){t.upAction(e)})),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor="",this.fire("transitionend")},addRipple:function(){var e=new l(this);return Object(o.a)(this.$.waves).appendChild(e.waveContainer),this.$.background.style.backgroundColor=e.color,this.ripples.push(e),this._setAnimating(!0),e},removeRipple:function(e){var t=this.ripples.indexOf(e);t<0||(this.ripples.splice(t,1),e.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var e,t;for(e=0;e<this.ripples.length;++e)(t=this.ripples[e]).draw(),this.$.background.style.opacity=t.outerOpacity,t.isOpacityFullyDecayed&&!t.isRestingAtMaxRadius&&this.removeRipple(t);this.shouldKeepAnimating||0!==this.ripples.length?window.requestAnimationFrame(this._boundAnimate):this.onAnimationComplete()}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(e,t){void 0!==t&&(e?this.downAction():this.upAction())}})},150:function(e,t,i){"use strict";i(153);var n=i(0);i(136);const r=window;"customIconsets"in r||(r.customIconsets={});const o=r.customIconsets;const s=i(157);var a=i(112);const c=new a.a("hass-icon-db","mdi-icon-store"),l=["mdi","hass","hassio","hademo"];let d=[];var h=i(85);function p(e){var t,i=b(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function u(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function f(e){return e.decorators&&e.decorators.length}function m(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function y(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function b(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}const g={};Object(a.c)("_version",c).then(e=>{e?e!==s.version&&Object(a.b)(c).then(()=>Object(a.d)("_version",s.version,c)):Object(a.d)("_version",s.version,c)});const _=Object(h.a)(()=>(async e=>{const t=Object.keys(e),i=await Promise.all(Object.values(e));c._withIDBStore("readwrite",n=>{i.forEach((i,r)=>{Object.entries(i).forEach(([e,t])=>{n.put(t,e)}),delete e[t[r]]})})})(g),2e3),w={};!function(e,t,i,n){var r=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var r=t.placement;if(t.kind===n&&("static"===r||"prototype"===r)){var o="static"===r?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var n=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],n=[],r={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,r)}),this),e.forEach((function(e){if(!f(e))return i.push(e);var t=this.decorateElement(e,r);i.push(t.element),i.push.apply(i,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:i,finishers:n};var o=this.decorateConstructor(i,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,i){var n=t[e.placement];if(!i&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var i=[],n=[],r=e.decorators,o=r.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,r[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);i.push.apply(i,l)}}return{element:e,finishers:n,extras:i}},decorateConstructor:function(e,t){for(var i=[],n=t.length-1;n>=0;n--){var r=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(r)||r);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?v(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=b(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:n,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:y(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=y(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var n=(0,t[i])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}();if(n)for(var o=0;o<n.length;o++)r=n[o](r);var s=t((function(e){r.initializeInstanceElements(e,a.elements)}),i),a=r.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var r,o=e[n];if("method"===o.kind&&(r=t.find(i)))if(m(o.descriptor)||m(r.descriptor)){if(f(o)||f(r))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");r.descriptor=o.descriptor}else{if(f(o)){if(f(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");r.decorators=o.decorators}u(o,r)}else t.push(o)}return t}(s.d.map(p)),e);r.initializeClassElements(s.F,a.elements),r.runClassFinishers(s.F,a.finishers)}([Object(n.d)("ha-icon")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(n.h)()],key:"icon",value:void 0},{kind:"field",decorators:[Object(n.h)()],key:"_path",value:void 0},{kind:"field",decorators:[Object(n.h)()],key:"_viewBox",value:void 0},{kind:"field",decorators:[Object(n.h)()],key:"_legacy",value:()=>!1},{kind:"method",key:"updated",value:function(e){e.has("icon")&&(this._path=void 0,this._viewBox=void 0,this._loadIcon())}},{kind:"method",key:"render",value:function(){return this.icon?this._legacy?n.f`<iron-icon .icon=${this.icon}></iron-icon>`:n.f`<ha-svg-icon
      .path=${this._path}
      .viewBox=${this._viewBox}
    ></ha-svg-icon>`:n.f``}},{kind:"method",key:"_loadIcon",value:async function(){if(!this.icon)return;const[e,t]=this.icon.split(":",2);if(!e||!t)return;if(!l.includes(e)){if(e in o){const i=o[e];return void(i&&this._setCustomPath(i(t)))}return void(this._legacy=!0)}if(this._legacy=!1,t in w)return void(this._path=w[t]);let i;try{i=await(e=>new Promise((t,i)=>{if(d.push([e,t,i]),d.length>1)return;const n=[];c._withIDBStore("readonly",e=>{for(const[t,i]of d)n.push([i,e.get(t)]);d=[]}).then(()=>{for(const[e,t]of n)e(t.result)}).catch(()=>{for(const[,,e]of d)e();d=[]})}))(t)}catch(a){i=void 0}if(i)return this._path=i,void(w[t]=i);const n=(e=>{let t;for(const i of s.parts){if(void 0!==i.start&&e<i.start)break;t=i}return t.file})(t);if(n in g)return void this._setPath(g[n],t);const r=fetch(`/static/mdi/${n}.json`).then(e=>e.json());g[n]=r,this._setPath(r,t),_()}},{kind:"method",key:"_setCustomPath",value:async function(e){const t=await e;this._path=t.path,this._viewBox=t.viewBox}},{kind:"method",key:"_setPath",value:async function(e,t){const i=await e;this._path=i[t],w[t]=i[t]}},{kind:"get",static:!0,key:"styles",value:function(){return n.c`
      :host {
        fill: currentcolor;
      }
    `}}]}}),n.a)},151:function(e,t,i){"use strict";i(4),i(52),i(155);var n=i(5),r=i(3),o=i(137);Object(n.a)({_template:r.a`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[o.a]})},155:function(e,t,i){"use strict";i(52),i(60),i(51),i(59);const n=document.createElement("template");n.setAttribute("style","display: none;"),n.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(n.content)},157:function(e){e.exports=JSON.parse('{"version":"4.9.95","parts":[{"file":"ac96ae39d5ca52d23a4ca3d8c6efd5817270091d"},{"start":"alarm-o","file":"d561c36273559890cb6dd9ff93c52f65ebd813c1"},{"start":"arrow-decision-o","file":"c9b7511d0d2534fd6eb9a2d4096ae2d6986c5437"},{"start":"basket-","file":"bc336f888b18158e39d0bf49be0f4c6159b9cc85"},{"start":"blur","file":"119bbb7a5c295866fca20bccb3f56815ad7b9a3d"},{"start":"bus-d","file":"cb82b14ed371a8b31c33d1e86221168c88a2daa1"},{"start":"card-s","file":"c696f5a7ff858eed9b0360a22afa93a4e149f281"},{"start":"circle-slice-7","file":"0aa03086dceff355dce1a5fd76b655532d1ce106"},{"start":"comment-t","file":"b80a4774f52c2c2a5e4239cc559281cb5a46541e"},{"start":"cursor-m","file":"689ebae34d4c444f2ac79c845935f6a39d9cb55e"},{"start":"door-closed-","file":"e3d51e324319d10fd3e55ac99e0748aa4e5055ee"},{"start":"eraser-","file":"42a1c8b700556b7e088be85381b9ac492be31732"},{"start":"file-pdf-o","file":"6c687283fbb6d8413dccbaac610e5e91917d0197"},{"start":"folder-alert-","file":"8be2f984e49a6eaa69a04fd95bd805b3331d94ae"},{"start":"gamepad-circle-l","file":"986ac139fe53bb8be3fedc1ee88af3d7d3e5d53e"},{"start":"google-p","file":"dafb98730fb6f5fcb84b8b94daa920f839d40489"},{"start":"help-network-","file":"a9beb4f10e3575df275e888c1160fc0c1f479a6e"},{"start":"je","file":"df7feb02fe5538edfabb04344646a7318b595259"},{"start":"layers-ou","file":"d8a4c48654c6d31621b08d77a32a5960d64b010c"},{"start":"map-marker-radius-","file":"912daef373e4d5f510836a3b5d195046dfba22c2"},{"start":"music-","file":"cdd1042da2ee7f986e1b035f47901990602c2396"},{"start":"ou","file":"e0ca7b494b7d522f697b00bf83ef596485c7bb98"},{"start":"phone-paused-","file":"93595e945f217083b66408535f56938cb236e91a"},{"start":"qual","file":"d225ac5378ccb48ee4228521f7325526bec0ebd9"},{"start":"safe-square-","file":"bb47adffdf4b9ae3bdcddf438611375c79b73e22"},{"start":"shield-h","file":"344afc4666d56ca2265ec5b8e693b326350c8fcc"},{"start":"source-repository-","file":"369429d8708392e396580146ef6b5b29bdc980a2"},{"start":"table-p","file":"20834d5f95635fd28910309cbdf72cd5249db156"},{"start":"tow","file":"475e7121d81fbc25c95af2cf38622d5192dc005c"},{"start":"vibrate-","file":"56507ed6d56716b4e846f901e9d980a7cdb56555"},{"start":"weather-su","file":"22359538f304ca383bbc4401af6207227c68e4ec"},{"start":"zodiac-li","file":"ad46cd3ed385233a41d3bda8b2975dfcf14a02a3"}]}')},161:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));i(4);var n=i(65),r=i(66);const o={properties:{checked:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_checkedChanged"},toggles:{type:Boolean,value:!0,reflectToAttribute:!0},value:{type:String,value:"on",observer:"_valueChanged"}},observers:["_requiredChanged(required)"],created:function(){this._hasIronCheckedElementBehavior=!0},_getValidity:function(e){return this.disabled||!this.required||this.checked},_requiredChanged:function(){this.required?this.setAttribute("aria-required","true"):this.removeAttribute("aria-required")},_checkedChanged:function(){this.active=this.checked,this.fire("iron-change")},_valueChanged:function(){void 0!==this.value&&null!==this.value||(this.value="on")}},s=[n.a,r.a,o];var a=i(98),c=i(122);const l={_checkedChanged:function(){o._checkedChanged.call(this),this.hasRipple()&&(this.checked?this._ripple.setAttribute("checked",""):this._ripple.removeAttribute("checked"))},_buttonStateChanged:function(){c.a._buttonStateChanged.call(this),this.disabled||this.isAttached&&(this.checked=this.active)}},d=[a.a,s,l]},162:function(e,t,i){"use strict";i(4),i(51);var n=i(161),r=i(98),o=i(5),s=i(3),a=i(77);const c=s.a`<style>
  :host {
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    --calculated-paper-checkbox-size: var(--paper-checkbox-size, 18px);
    /* -1px is a sentinel for the default and is replaced in \`attached\`. */
    --calculated-paper-checkbox-ink-size: var(--paper-checkbox-ink-size, -1px);
    @apply --paper-font-common-base;
    line-height: 0;
    -webkit-tap-highlight-color: transparent;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:focus) {
    outline: none;
  }

  .hidden {
    display: none;
  }

  #checkboxContainer {
    display: inline-block;
    position: relative;
    width: var(--calculated-paper-checkbox-size);
    height: var(--calculated-paper-checkbox-size);
    min-width: var(--calculated-paper-checkbox-size);
    margin: var(--paper-checkbox-margin, initial);
    vertical-align: var(--paper-checkbox-vertical-align, middle);
    background-color: var(--paper-checkbox-unchecked-background-color, transparent);
  }

  #ink {
    position: absolute;

    /* Center the ripple in the checkbox by negative offsetting it by
     * (inkWidth - rippleWidth) / 2 */
    top: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    left: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    width: var(--calculated-paper-checkbox-ink-size);
    height: var(--calculated-paper-checkbox-ink-size);
    color: var(--paper-checkbox-unchecked-ink-color, var(--primary-text-color));
    opacity: 0.6;
    pointer-events: none;
  }

  #ink:dir(rtl) {
    right: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    left: auto;
  }

  #ink[checked] {
    color: var(--paper-checkbox-checked-ink-color, var(--primary-color));
  }

  #checkbox {
    position: relative;
    box-sizing: border-box;
    height: 100%;
    border: solid 2px;
    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
    border-radius: 2px;
    pointer-events: none;
    -webkit-transition: background-color 140ms, border-color 140ms;
    transition: background-color 140ms, border-color 140ms;

    -webkit-transition-duration: var(--paper-checkbox-animation-duration, 140ms);
    transition-duration: var(--paper-checkbox-animation-duration, 140ms);
  }

  /* checkbox checked animations */
  #checkbox.checked #checkmark {
    -webkit-animation: checkmark-expand 140ms ease-out forwards;
    animation: checkmark-expand 140ms ease-out forwards;

    -webkit-animation-duration: var(--paper-checkbox-animation-duration, 140ms);
    animation-duration: var(--paper-checkbox-animation-duration, 140ms);
  }

  @-webkit-keyframes checkmark-expand {
    0% {
      -webkit-transform: scale(0, 0) rotate(45deg);
    }
    100% {
      -webkit-transform: scale(1, 1) rotate(45deg);
    }
  }

  @keyframes checkmark-expand {
    0% {
      transform: scale(0, 0) rotate(45deg);
    }
    100% {
      transform: scale(1, 1) rotate(45deg);
    }
  }

  #checkbox.checked {
    background-color: var(--paper-checkbox-checked-color, var(--primary-color));
    border-color: var(--paper-checkbox-checked-color, var(--primary-color));
  }

  #checkmark {
    position: absolute;
    width: 36%;
    height: 70%;
    border-style: solid;
    border-top: none;
    border-left: none;
    border-right-width: calc(2/15 * var(--calculated-paper-checkbox-size));
    border-bottom-width: calc(2/15 * var(--calculated-paper-checkbox-size));
    border-color: var(--paper-checkbox-checkmark-color, white);
    -webkit-transform-origin: 97% 86%;
    transform-origin: 97% 86%;
    box-sizing: content-box; /* protect against page-level box-sizing */
  }

  #checkmark:dir(rtl) {
    -webkit-transform-origin: 50% 14%;
    transform-origin: 50% 14%;
  }

  /* label */
  #checkboxLabel {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    padding-left: var(--paper-checkbox-label-spacing, 8px);
    white-space: normal;
    line-height: normal;
    color: var(--paper-checkbox-label-color, var(--primary-text-color));
    @apply --paper-checkbox-label;
  }

  :host([checked]) #checkboxLabel {
    color: var(--paper-checkbox-label-checked-color, var(--paper-checkbox-label-color, var(--primary-text-color)));
    @apply --paper-checkbox-label-checked;
  }

  #checkboxLabel:dir(rtl) {
    padding-right: var(--paper-checkbox-label-spacing, 8px);
    padding-left: 0;
  }

  #checkboxLabel[hidden] {
    display: none;
  }

  /* disabled state */

  :host([disabled]) #checkbox {
    opacity: 0.5;
    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
  }

  :host([disabled][checked]) #checkbox {
    background-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled]) #checkboxLabel  {
    opacity: 0.65;
  }

  /* invalid state */
  #checkbox.invalid:not(.checked) {
    border-color: var(--paper-checkbox-error-color, var(--error-color));
  }
</style>

<div id="checkboxContainer">
  <div id="checkbox" class$="[[_computeCheckboxClass(checked, invalid)]]">
    <div id="checkmark" class$="[[_computeCheckmarkClass(checked)]]"></div>
  </div>
</div>

<div id="checkboxLabel"><slot></slot></div>`;c.setAttribute("strip-whitespace",""),Object(o.a)({_template:c,is:"paper-checkbox",behaviors:[n.a],hostAttributes:{role:"checkbox","aria-checked":!1,tabindex:0},properties:{ariaActiveAttribute:{type:String,value:"aria-checked"}},attached:function(){Object(a.a)(this,(function(){if("-1px"===this.getComputedStyleValue("--calculated-paper-checkbox-ink-size").trim()){var e=this.getComputedStyleValue("--calculated-paper-checkbox-size").trim(),t="px",i=e.match(/[A-Za-z]+$/);null!==i&&(t=i[0]);var n=parseFloat(e),r=8/3*n;"px"===t&&(r=Math.floor(r))%2!=n%2&&r++,this.updateStyles({"--paper-checkbox-ink-size":r+t})}}))},_computeCheckboxClass:function(e,t){var i="";return e&&(i+="checked "),t&&(i+="invalid"),i},_computeCheckmarkClass:function(e){return e?"":"hidden"},_createRipple:function(){return this._rippleContainer=this.$.checkboxContainer,r.b._createRipple.call(this)}})},181:function(e,t,i){"use strict";i(138);var n=i(0);i(150);function r(e){var t,i=l(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function o(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function s(e){return e.decorators&&e.decorators.length}function a(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function c(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function l(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}!function(e,t,i,n){var h=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var r=t.placement;if(t.kind===n&&("static"===r||"prototype"===r)){var o="static"===r?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var n=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],n=[],r={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,r)}),this),e.forEach((function(e){if(!s(e))return i.push(e);var t=this.decorateElement(e,r);i.push(t.element),i.push.apply(i,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:i,finishers:n};var o=this.decorateConstructor(i,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,i){var n=t[e.placement];if(!i&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var i=[],n=[],r=e.decorators,o=r.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,r[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);i.push.apply(i,l)}}return{element:e,finishers:n,extras:i}},decorateConstructor:function(e,t){for(var i=[],n=t.length-1;n>=0;n--){var r=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(r)||r);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?d(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=l(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:n,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:c(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=c(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var n=(0,t[i])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}();if(n)for(var p=0;p<n.length;p++)h=n[p](h);var u=t((function(e){h.initializeInstanceElements(e,f.elements)}),i),f=h.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===c.key&&e.placement===c.placement},n=0;n<e.length;n++){var r,c=e[n];if("method"===c.kind&&(r=t.find(i)))if(a(c.descriptor)||a(r.descriptor)){if(s(c)||s(r))throw new ReferenceError("Duplicated methods ("+c.key+") can't be decorated.");r.descriptor=c.descriptor}else{if(s(c)){if(s(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+c.key+").");r.decorators=c.decorators}o(c,r)}else t.push(c)}return t}(u.d.map(r)),e);h.initializeClassElements(u.F,f.elements),h.runClassFinishers(u.F,f.finishers)}([Object(n.d)("ha-icon-button")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(n.h)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[Object(n.h)({type:String})],key:"icon",value:()=>""},{kind:"field",decorators:[Object(n.h)({type:String})],key:"label",value:()=>""},{kind:"method",key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open",delegatesFocus:!0})}},{kind:"method",key:"render",value:function(){return n.f`
      <mwc-icon-button .label=${this.label} .disabled=${this.disabled}>
        <ha-icon .icon=${this.icon}></ha-icon>
      </mwc-icon-button>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return n.c`
      :host {
        display: inline-block;
        outline: none;
      }
      :host([disabled]) {
        pointer-events: none;
      }
      mwc-icon-button {
        --mdc-theme-on-primary: currentColor;
        --mdc-theme-text-disabled-on-light: var(--disabled-text-color);
      }
      ha-icon {
        --ha-icon-display: inline;
      }
    `}}]}}),n.a)},182:function(e,t,i){"use strict";i(4),i(52),i(59),i(155);var n=i(5),r=i(3),o=i(137);Object(n.a)({_template:r.a`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,is:"paper-icon-item",behaviors:[o.a]})},208:function(e,t,i){"use strict";var n=i(0);function r(e){var t,i=l(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function o(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function s(e){return e.decorators&&e.decorators.length}function a(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function c(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function l(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}!function(e,t,i,n){var h=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var r=t.placement;if(t.kind===n&&("static"===r||"prototype"===r)){var o="static"===r?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var n=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],n=[],r={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,r)}),this),e.forEach((function(e){if(!s(e))return i.push(e);var t=this.decorateElement(e,r);i.push(t.element),i.push.apply(i,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:i,finishers:n};var o=this.decorateConstructor(i,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,i){var n=t[e.placement];if(!i&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var i=[],n=[],r=e.decorators,o=r.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,r[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);i.push.apply(i,l)}}return{element:e,finishers:n,extras:i}},decorateConstructor:function(e,t){for(var i=[],n=t.length-1;n>=0;n--){var r=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(r)||r);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?d(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=l(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:n,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:c(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=c(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var n=(0,t[i])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}();if(n)for(var p=0;p<n.length;p++)h=n[p](h);var u=t((function(e){h.initializeInstanceElements(e,f.elements)}),i),f=h.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===c.key&&e.placement===c.placement},n=0;n<e.length;n++){var r,c=e[n];if("method"===c.kind&&(r=t.find(i)))if(a(c.descriptor)||a(r.descriptor)){if(s(c)||s(r))throw new ReferenceError("Duplicated methods ("+c.key+") can't be decorated.");r.descriptor=c.descriptor}else{if(s(c)){if(s(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+c.key+").");r.decorators=c.decorators}o(c,r)}else t.push(c)}return t}(u.d.map(r)),e);h.initializeClassElements(u.F,f.elements),h.runClassFinishers(u.F,f.finishers)}([Object(n.d)("ha-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(n.h)()],key:"header",value:void 0},{kind:"field",decorators:[Object(n.h)({type:Boolean,reflect:!0})],key:"outlined",value:()=>!1},{kind:"get",static:!0,key:"styles",value:function(){return n.c`
      :host {
        background: var(
          --ha-card-background,
          var(--paper-card-background-color, white)
        );
        border-radius: var(--ha-card-border-radius, 4px);
        box-shadow: var(
          --ha-card-box-shadow,
          0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.14),
          0px 1px 3px 0px rgba(0, 0, 0, 0.12)
        );
        color: var(--primary-text-color);
        display: block;
        transition: all 0.3s ease-out;
        position: relative;
      }

      :host([outlined]) {
        box-shadow: none;
        border-width: 1px;
        border-style: solid;
        border-color: var(
          --ha-card-border-color,
          var(--divider-color, #e0e0e0)
        );
      }

      .card-header,
      :host ::slotted(.card-header) {
        color: var(--ha-card-header-color, --primary-text-color);
        font-family: var(--ha-card-header-font-family, inherit);
        font-size: var(--ha-card-header-font-size, 24px);
        letter-spacing: -0.012em;
        line-height: 32px;
        padding: 24px 16px 16px;
        display: block;
      }

      :host ::slotted(.card-content:not(:first-child)),
      slot:not(:first-child)::slotted(.card-content) {
        padding-top: 0px;
        margin-top: -8px;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
      }
    `}},{kind:"method",key:"render",value:function(){return n.f`
      ${this.header?n.f` <div class="card-header">${this.header}</div> `:n.f``}
      <slot></slot>
    `}}]}}),n.a)},212:function(e,t,i){"use strict";var n=i(8);t.a=Object(n.a)(e=>class extends e{static get properties(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}__computeLocalize(e){return e}})},214:function(e,t,i){"use strict";i(4),i(52),i(51),i(59);var n=i(5),r=i(3);Object(n.a)({_template:r.a`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,is:"paper-item-body"})},240:function(e,t,i){"use strict";i(45);var n=i(53);const r=document.createElement("template");r.setAttribute("style","display: none;"),r.innerHTML=`<dom-module id="ha-style">\n  <template>\n    <style>\n    ${n.b.cssText}\n    </style>\n  </template>\n</dom-module>`,document.head.appendChild(r.content)},247:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));const n=(e,t)=>e&&-1!==e.config.components.indexOf(t)},277:function(e,t,i){"use strict";i(4),i(52);var n=i(5),r=i(2),o=i(3),s=i(169);Object(n.a)({_template:o.a`
    <style>
      :host {
        display: block;
        /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
        position: relative;
        z-index: 0;
      }

      #wrapper ::slotted([slot=header]) {
        @apply --layout-fixed-top;
        z-index: 1;
      }

      #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) {
        height: 100%;
      }

      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {
        position: absolute;
      }

      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) #wrapper #contentContainer {
        @apply --layout-fit;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
        position: relative;
      }

      :host([fullbleed]) {
        @apply --layout-vertical;
        @apply --layout-fit;
      }

      :host([fullbleed]) #wrapper,
      :host([fullbleed]) #wrapper #contentContainer {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
      }

      @media print {
        :host([has-scrolling-region]) #wrapper #contentContainer {
          overflow-y: visible;
        }
      }

    </style>

    <div id="wrapper" class="initializing">
      <slot id="headerSlot" name="header"></slot>

      <div id="contentContainer">
        <slot></slot>
      </div>
    </div>
`,is:"app-header-layout",behaviors:[s.a],properties:{hasScrollingRegion:{type:Boolean,value:!1,reflectToAttribute:!0}},observers:["resetLayout(isAttached, hasScrollingRegion)"],get header(){return Object(r.a)(this.$.headerSlot).getDistributedNodes()[0]},_updateLayoutStates:function(){var e=this.header;if(this.isAttached&&e){this.$.wrapper.classList.remove("initializing"),e.scrollTarget=this.hasScrollingRegion?this.$.contentContainer:this.ownerDocument.documentElement;var t=e.offsetHeight;this.hasScrollingRegion?(e.style.left="",e.style.right=""):requestAnimationFrame(function(){var t=this.getBoundingClientRect(),i=document.documentElement.clientWidth-t.right;e.style.left=t.left+"px",e.style.right=i+"px"}.bind(this));var i=this.$.contentContainer.style;e.fixed&&!e.condenses&&this.hasScrollingRegion?(i.marginTop=t+"px",i.paddingTop=""):(i.paddingTop=t+"px",i.marginTop="")}}})},320:function(e,t,i){"use strict";var n=i(0);i(110),i(345),i(285),i(181);function r(e){var t,i=l(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function o(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function s(e){return e.decorators&&e.decorators.length}function a(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function c(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function l(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}!function(e,t,i,n){var h=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var r=t.placement;if(t.kind===n&&("static"===r||"prototype"===r)){var o="static"===r?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var n=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],n=[],r={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,r)}),this),e.forEach((function(e){if(!s(e))return i.push(e);var t=this.decorateElement(e,r);i.push(t.element),i.push.apply(i,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:i,finishers:n};var o=this.decorateConstructor(i,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,i){var n=t[e.placement];if(!i&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var i=[],n=[],r=e.decorators,o=r.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,r[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);i.push.apply(i,l)}}return{element:e,finishers:n,extras:i}},decorateConstructor:function(e,t){for(var i=[],n=t.length-1;n>=0;n--){var r=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(r)||r);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?d(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=l(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:n,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:c(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=c(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var n=(0,t[i])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}();if(n)for(var p=0;p<n.length;p++)h=n[p](h);var u=t((function(e){h.initializeInstanceElements(e,f.elements)}),i),f=h.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===c.key&&e.placement===c.placement},n=0;n<e.length;n++){var r,c=e[n];if("method"===c.kind&&(r=t.find(i)))if(a(c.descriptor)||a(r.descriptor)){if(s(c)||s(r))throw new ReferenceError("Duplicated methods ("+c.key+") can't be decorated.");r.descriptor=c.descriptor}else{if(s(c)){if(s(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+c.key+").");r.decorators=c.decorators}o(c,r)}else t.push(c)}return t}(u.d.map(r)),e);h.initializeClassElements(u.F,f.elements),h.runClassFinishers(u.F,f.finishers)}([Object(n.d)("ha-button-menu")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(n.h)()],key:"corner",value:()=>"TOP_START"},{kind:"field",decorators:[Object(n.i)("mwc-menu")],key:"_menu",value:void 0},{kind:"method",key:"render",value:function(){return n.f`
      <div @click=${this._handleClick}>
        <slot name="trigger"></slot>
      </div>
      <mwc-menu .corner=${this.corner}>
        <slot></slot>
      </mwc-menu>
    `}},{kind:"method",key:"_handleClick",value:function(){this._menu.anchor=this,this._menu.show()}},{kind:"get",static:!0,key:"styles",value:function(){return n.c`
      :host {
        display: inline-block;
        position: relative;
      }
    `}}]}}),n.a)},345:function(e,t,i){"use strict";function n(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s}var r,o,s=i(0),a=(i(334),{ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"}),c={CLOSED_EVENT:"MDCMenuSurface:closed",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},l={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67};!function(e){e[e.BOTTOM=1]="BOTTOM",e[e.CENTER=2]="CENTER",e[e.RIGHT=4]="RIGHT",e[e.FLIP_RTL=8]="FLIP_RTL"}(r||(r={})),function(e){e[e.TOP_LEFT=0]="TOP_LEFT",e[e.TOP_RIGHT=4]="TOP_RIGHT",e[e.BOTTOM_LEFT=1]="BOTTOM_LEFT",e[e.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",e[e.TOP_START=8]="TOP_START",e[e.TOP_END=12]="TOP_END",e[e.BOTTOM_START=9]="BOTTOM_START",e[e.BOTTOM_END=13]="BOTTOM_END"}(o||(o={}));var d=function(e,t){return(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)};var h=function(){return(h=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function p(e){var t="function"==typeof Symbol&&Symbol.iterator,i=t&&e[t],n=0;if(i)return i.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}var u,f=i(88),m=function(e){function t(i){var n=e.call(this,h(h({},t.defaultAdapter),i))||this;return n.isOpen_=!1,n.isQuickOpen_=!1,n.isHoistedElement_=!1,n.isFixedPosition_=!1,n.openAnimationEndTimerId_=0,n.closeAnimationEndTimerId_=0,n.animationRequestId_=0,n.anchorCorner_=o.TOP_START,n.originCorner_=o.TOP_START,n.anchorMargin_={top:0,right:0,bottom:0,left:0},n.position_={x:0,y:0},n}return function(e,t){function i(){this.constructor=e}d(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return a},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return c},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return l},enumerable:!0,configurable:!0}),Object.defineProperty(t,"Corner",{get:function(){return o},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var e=t.cssClasses,i=e.ROOT,n=e.OPEN;if(!this.adapter_.hasClass(i))throw new Error(i+" class required in root element.");this.adapter_.hasClass(n)&&(this.isOpen_=!0)},t.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId_),clearTimeout(this.closeAnimationEndTimerId_),cancelAnimationFrame(this.animationRequestId_)},t.prototype.setAnchorCorner=function(e){this.anchorCorner_=e},t.prototype.flipCornerHorizontally=function(){this.originCorner_=this.originCorner_^r.RIGHT},t.prototype.setAnchorMargin=function(e){this.anchorMargin_.top=e.top||0,this.anchorMargin_.right=e.right||0,this.anchorMargin_.bottom=e.bottom||0,this.anchorMargin_.left=e.left||0},t.prototype.setIsHoisted=function(e){this.isHoistedElement_=e},t.prototype.setFixedPosition=function(e){this.isFixedPosition_=e},t.prototype.setAbsolutePosition=function(e,t){this.position_.x=this.isFinite_(e)?e:0,this.position_.y=this.isFinite_(t)?t:0},t.prototype.setQuickOpen=function(e){this.isQuickOpen_=e},t.prototype.isOpen=function(){return this.isOpen_},t.prototype.open=function(){var e=this;this.isOpen_||(this.adapter_.saveFocus(),this.isQuickOpen_?(this.isOpen_=!0,this.adapter_.addClass(t.cssClasses.OPEN),this.dimensions_=this.adapter_.getInnerDimensions(),this.autoPosition_(),this.adapter_.notifyOpen()):(this.adapter_.addClass(t.cssClasses.ANIMATING_OPEN),this.animationRequestId_=requestAnimationFrame((function(){e.adapter_.addClass(t.cssClasses.OPEN),e.dimensions_=e.adapter_.getInnerDimensions(),e.autoPosition_(),e.openAnimationEndTimerId_=setTimeout((function(){e.openAnimationEndTimerId_=0,e.adapter_.removeClass(t.cssClasses.ANIMATING_OPEN),e.adapter_.notifyOpen()}),l.TRANSITION_OPEN_DURATION)})),this.isOpen_=!0))},t.prototype.close=function(e){var i=this;void 0===e&&(e=!1),this.isOpen_&&(this.isQuickOpen_?(this.isOpen_=!1,e||this.maybeRestoreFocus_(),this.adapter_.removeClass(t.cssClasses.OPEN),this.adapter_.removeClass(t.cssClasses.IS_OPEN_BELOW),this.adapter_.notifyClose()):(this.adapter_.addClass(t.cssClasses.ANIMATING_CLOSED),requestAnimationFrame((function(){i.adapter_.removeClass(t.cssClasses.OPEN),i.adapter_.removeClass(t.cssClasses.IS_OPEN_BELOW),i.closeAnimationEndTimerId_=setTimeout((function(){i.closeAnimationEndTimerId_=0,i.adapter_.removeClass(t.cssClasses.ANIMATING_CLOSED),i.adapter_.notifyClose()}),l.TRANSITION_CLOSE_DURATION)})),this.isOpen_=!1,e||this.maybeRestoreFocus_()))},t.prototype.handleBodyClick=function(e){var t=e.target;this.adapter_.isElementInContainer(t)||this.close()},t.prototype.handleKeydown=function(e){var t=e.keyCode;("Escape"===e.key||27===t)&&this.close()},t.prototype.autoPosition_=function(){var e;this.measurements_=this.getAutoLayoutMeasurements_();var i=this.getOriginCorner_(),n=this.getMenuSurfaceMaxHeight_(i),o=this.hasBit_(i,r.BOTTOM)?"bottom":"top",s=this.hasBit_(i,r.RIGHT)?"right":"left",a=this.getHorizontalOriginOffset_(i),c=this.getVerticalOriginOffset_(i),d=this.measurements_,h=d.anchorSize,p=d.surfaceSize,u=((e={})[s]=a,e[o]=c,e);h.width/p.width>l.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(s="center"),(this.isHoistedElement_||this.isFixedPosition_)&&this.adjustPositionForHoistedElement_(u),this.adapter_.setTransformOrigin(s+" "+o),this.adapter_.setPosition(u),this.adapter_.setMaxHeight(n?n+"px":""),this.hasBit_(i,r.BOTTOM)||this.adapter_.addClass(t.cssClasses.IS_OPEN_BELOW)},t.prototype.getAutoLayoutMeasurements_=function(){var e=this.adapter_.getAnchorDimensions(),t=this.adapter_.getBodyDimensions(),i=this.adapter_.getWindowDimensions(),n=this.adapter_.getWindowScroll();return e||(e={top:this.position_.y,right:this.position_.x,bottom:this.position_.y,left:this.position_.x,width:0,height:0}),{anchorSize:e,bodySize:t,surfaceSize:this.dimensions_,viewportDistance:{top:e.top,right:i.width-e.right,bottom:i.height-e.bottom,left:e.left},viewportSize:i,windowScroll:n}},t.prototype.getOriginCorner_=function(){var e,i,n=this.originCorner_,o=this.measurements_,s=o.viewportDistance,a=o.anchorSize,c=o.surfaceSize,l=t.numbers.MARGIN_TO_EDGE;this.hasBit_(this.anchorCorner_,r.BOTTOM)?(e=s.top-l+a.height+this.anchorMargin_.bottom,i=s.bottom-l-this.anchorMargin_.bottom):(e=s.top-l+this.anchorMargin_.top,i=s.bottom-l+a.height-this.anchorMargin_.top),!(i-c.height>0)&&e>=i&&(n=this.setBit_(n,r.BOTTOM));var d,h,p=this.adapter_.isRtl(),u=this.hasBit_(this.anchorCorner_,r.FLIP_RTL),f=this.hasBit_(this.anchorCorner_,r.RIGHT),m=!1;(m=p&&u?!f:f)?(d=s.left+a.width+this.anchorMargin_.right,h=s.right-this.anchorMargin_.right):(d=s.left+this.anchorMargin_.left,h=s.right+a.width-this.anchorMargin_.left);var y=d-c.width>0,b=h-c.width>0,v=this.hasBit_(n,r.FLIP_RTL)&&this.hasBit_(n,r.RIGHT);return b&&v&&p||!y&&v?n=this.unsetBit_(n,r.RIGHT):(y&&m&&p||y&&!m&&f||!b&&d>=h)&&(n=this.setBit_(n,r.RIGHT)),n},t.prototype.getMenuSurfaceMaxHeight_=function(e){var i=this.measurements_.viewportDistance,n=0,o=this.hasBit_(e,r.BOTTOM),s=this.hasBit_(this.anchorCorner_,r.BOTTOM),a=t.numbers.MARGIN_TO_EDGE;return o?(n=i.top+this.anchorMargin_.top-a,s||(n+=this.measurements_.anchorSize.height)):(n=i.bottom-this.anchorMargin_.bottom+this.measurements_.anchorSize.height-a,s&&(n-=this.measurements_.anchorSize.height)),n},t.prototype.getHorizontalOriginOffset_=function(e){var t=this.measurements_.anchorSize,i=this.hasBit_(e,r.RIGHT),n=this.hasBit_(this.anchorCorner_,r.RIGHT);if(i){var o=n?t.width-this.anchorMargin_.left:this.anchorMargin_.right;return this.isHoistedElement_||this.isFixedPosition_?o-(this.measurements_.viewportSize.width-this.measurements_.bodySize.width):o}return n?t.width-this.anchorMargin_.right:this.anchorMargin_.left},t.prototype.getVerticalOriginOffset_=function(e){var t=this.measurements_.anchorSize,i=this.hasBit_(e,r.BOTTOM),n=this.hasBit_(this.anchorCorner_,r.BOTTOM);return i?n?t.height-this.anchorMargin_.top:-this.anchorMargin_.bottom:n?t.height+this.anchorMargin_.bottom:this.anchorMargin_.top},t.prototype.adjustPositionForHoistedElement_=function(e){var t,i,n=this.measurements_,r=n.windowScroll,o=n.viewportDistance,s=Object.keys(e);try{for(var a=p(s),c=a.next();!c.done;c=a.next()){var l=c.value,d=e[l]||0;d+=o[l],this.isFixedPosition_||("top"===l?d+=r.y:"bottom"===l?d-=r.y:"left"===l?d+=r.x:d-=r.x),e[l]=d}}catch(h){t={error:h}}finally{try{c&&!c.done&&(i=a.return)&&i.call(a)}finally{if(t)throw t.error}}},t.prototype.maybeRestoreFocus_=function(){var e=this.adapter_.isFocused(),t=document.activeElement&&this.adapter_.isElementInContainer(document.activeElement);(e||t)&&this.adapter_.restoreFocus()},t.prototype.hasBit_=function(e,t){return Boolean(e&t)},t.prototype.setBit_=function(e,t){return e|t},t.prototype.unsetBit_=function(e,t){return e^t},t.prototype.isFinite_=function(e){return"number"==typeof e&&isFinite(e)},t}(f.a),y=m;var b=i(86),v=i(219),g=i(92),_=i(50);const w={TOP_LEFT:o.TOP_LEFT,TOP_RIGHT:o.TOP_RIGHT,BOTTOM_LEFT:o.BOTTOM_LEFT,BOTTOM_RIGHT:o.BOTTOM_RIGHT,TOP_START:o.TOP_START,TOP_END:o.TOP_END,BOTTOM_START:o.BOTTOM_START,BOTTOM_END:o.BOTTOM_END};class k extends b.a{constructor(){super(...arguments),this.mdcFoundationClass=y,this.absolute=!1,this.fullwidth=!1,this.fixed=!1,this.x=null,this.y=null,this.quick=!1,this.open=!1,this.corner="TOP_START",this.anchor=null,this.previouslyFocused=null,this.previousAnchor=null,this.onBodyClickBound=()=>{}}render(){const e={"mdc-menu-surface--fixed":this.fixed,"mdc-menu-surface--fullwidth":this.fullwidth};return s.f`
      <div
          class="mdc-menu-surface ${Object(_.a)(e)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`}createAdapter(){return Object.assign(Object.assign({},Object(b.b)(this.mdcRoot)),{hasAnchor:()=>!!this.anchor,notifyClose:()=>{const e=new CustomEvent("closed",{bubbles:!0,composed:!0});this.open=!1,this.mdcRoot.dispatchEvent(e)},notifyOpen:()=>{const e=new CustomEvent("opened",{bubbles:!0,composed:!0});this.open=!0,this.mdcRoot.dispatchEvent(e)},isElementInContainer:()=>!1,isRtl:()=>!!this.mdcRoot&&"rtl"===getComputedStyle(this.mdcRoot).direction,setTransformOrigin:e=>{const t=this.mdcRoot;if(!t)return;const i=function(e,t){if(void 0===t&&(t=!1),void 0===u||t){var i=e.document.createElement("div");u="transform"in i.style?"transform":"webkitTransform"}return u}(window)+"-origin";t.style.setProperty(i,e)},isFocused:()=>Object(g.c)(this),saveFocus:()=>{const e=Object(g.b)(),t=e.length;t||(this.previouslyFocused=null),this.previouslyFocused=e[t-1]},restoreFocus:()=>{this.previouslyFocused&&"focus"in this.previouslyFocused&&this.previouslyFocused.focus()},getInnerDimensions:()=>{const e=this.mdcRoot;return e?{width:e.offsetWidth,height:e.offsetHeight}:{width:0,height:0}},getAnchorDimensions:()=>{const e=this.anchor;return e?e.getBoundingClientRect():null},getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:e=>{const t=this.mdcRoot;t&&(t.style.left="left"in e?e.left+"px":"",t.style.right="right"in e?e.right+"px":"",t.style.top="top"in e?e.top+"px":"",t.style.bottom="bottom"in e?e.bottom+"px":"")},setMaxHeight:e=>{const t=this.mdcRoot;t&&(t.style.maxHeight=e)}})}onKeydown(e){this.mdcFoundation&&this.mdcFoundation.handleKeydown(e)}onBodyClick(e){-1===e.composedPath().indexOf(this)&&this.close()}registerBodyClick(){this.onBodyClickBound=this.onBodyClick.bind(this),document.body.addEventListener("click",this.onBodyClickBound,{passive:!0,capture:!0})}deregisterBodyClick(){document.body.removeEventListener("click",this.onBodyClickBound)}close(){this.open=!1}show(){this.open=!0}}n([Object(s.i)(".mdc-menu-surface")],k.prototype,"mdcRoot",void 0),n([Object(s.i)("slot")],k.prototype,"slotElement",void 0),n([Object(s.h)({type:Boolean}),Object(v.a)((function(e){this.mdcFoundation&&!this.fixed&&this.mdcFoundation.setIsHoisted(e)}))],k.prototype,"absolute",void 0),n([Object(s.h)({type:Boolean})],k.prototype,"fullwidth",void 0),n([Object(s.h)({type:Boolean}),Object(v.a)((function(e){this.mdcFoundation&&!this.absolute&&this.mdcFoundation.setIsHoisted(e)}))],k.prototype,"fixed",void 0),n([Object(s.h)({type:Number}),Object(v.a)((function(e){this.mdcFoundation&&null!==this.y&&null!==e&&(this.mdcFoundation.setAbsolutePosition(e,this.y),this.mdcFoundation.setAnchorMargin({left:e,top:this.y,right:-e,bottom:this.y}))}))],k.prototype,"x",void 0),n([Object(s.h)({type:Number}),Object(v.a)((function(e){this.mdcFoundation&&null!==this.x&&null!==e&&(this.mdcFoundation.setAbsolutePosition(this.x,e),this.mdcFoundation.setAnchorMargin({left:this.x,top:e,right:-this.x,bottom:e}))}))],k.prototype,"y",void 0),n([Object(s.h)({type:Boolean}),Object(v.a)((function(e){this.mdcFoundation&&this.mdcFoundation.setQuickOpen(e)}))],k.prototype,"quick",void 0),n([Object(s.h)({type:Boolean,reflect:!0}),Object(v.a)((function(e,t){this.mdcFoundation&&(e?this.mdcFoundation.open():void 0!==t&&this.mdcFoundation.close())}))],k.prototype,"open",void 0),n([Object(s.h)({type:String}),Object(v.a)((function(e){this.mdcFoundation&&(e?this.mdcFoundation.setAnchorCorner(w[e]):this.mdcFoundation.setAnchorCorner(o.TOP_START))}))],k.prototype,"corner",void 0);const E=s.c`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{border-radius:var(--mdc-shape-medium, 4px);z-index:var(--mdc-menu-z-index, 8)}`;let x=class extends k{};x.styles=E,x=n([Object(s.d)("mwc-menu-surface")],x);var O,T={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},A={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list",SELECTED_EVENT:"MDCMenu:selected"},C={FOCUS_ROOT_INDEX:-1};!function(e){e[e.NONE=0]="NONE",e[e.LIST_ROOT=1]="LIST_ROOT",e[e.FIRST_ITEM=2]="FIRST_ITEM",e[e.LAST_ITEM=3]="LAST_ITEM"}(O||(O={}));var S=function(e,t){return(S=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)};var I=function(){return(I=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var D=i(310),P=function(e){function t(i){var n=e.call(this,I(I({},t.defaultAdapter),i))||this;return n.closeAnimationEndTimerId_=0,n.defaultFocusState_=O.LIST_ROOT,n}return function(e,t){function i(){this.constructor=e}S(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return T},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return A},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return C},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){this.closeAnimationEndTimerId_&&clearTimeout(this.closeAnimationEndTimerId_),this.adapter_.closeSurface()},t.prototype.handleKeydown=function(e){var t=e.key,i=e.keyCode;("Tab"===t||9===i)&&this.adapter_.closeSurface(!0)},t.prototype.handleItemAction=function(e){var t=this,i=this.adapter_.getElementIndex(e);i<0||(this.adapter_.notifySelected({index:i}),this.adapter_.closeSurface(),this.closeAnimationEndTimerId_=setTimeout((function(){var i=t.adapter_.getElementIndex(e);t.adapter_.isSelectableItemAtIndex(i)&&t.setSelectedIndex(i)}),m.numbers.TRANSITION_CLOSE_DURATION))},t.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState_){case O.FIRST_ITEM:this.adapter_.focusItemAtIndex(0);break;case O.LAST_ITEM:this.adapter_.focusItemAtIndex(this.adapter_.getMenuItemCount()-1);break;case O.NONE:break;default:this.adapter_.focusListRoot()}},t.prototype.setDefaultFocusState=function(e){this.defaultFocusState_=e},t.prototype.setSelectedIndex=function(e){if(this.validatedIndex_(e),!this.adapter_.isSelectableItemAtIndex(e))throw new Error("MDCMenuFoundation: No selection group at specified index.");var t=this.adapter_.getSelectedSiblingOfItemAtIndex(e);t>=0&&(this.adapter_.removeAttributeFromElementAtIndex(t,A.ARIA_CHECKED_ATTR),this.adapter_.removeClassFromElementAtIndex(t,T.MENU_SELECTED_LIST_ITEM)),this.adapter_.addClassToElementAtIndex(e,T.MENU_SELECTED_LIST_ITEM),this.adapter_.addAttributeToElementAtIndex(e,A.ARIA_CHECKED_ATTR,"true")},t.prototype.setEnabled=function(e,t){this.validatedIndex_(e),t?(this.adapter_.removeClassFromElementAtIndex(e,D.a.LIST_ITEM_DISABLED_CLASS),this.adapter_.addAttributeToElementAtIndex(e,A.ARIA_DISABLED_ATTR,"false")):(this.adapter_.addClassToElementAtIndex(e,D.a.LIST_ITEM_DISABLED_CLASS),this.adapter_.addAttributeToElementAtIndex(e,A.ARIA_DISABLED_ATTR,"true"))},t.prototype.validatedIndex_=function(e){var t=this.adapter_.getMenuItemCount();if(!(e>=0&&e<t))throw new Error("MDCMenuFoundation: No list item at specified index.")},t}(f.a);i(209);class R extends b.a{constructor(){super(...arguments),this.mdcFoundationClass=P,this.listElement_=null,this.anchor=null,this.open=!1,this.quick=!1,this.wrapFocus=!1,this.innerRole="menu",this.corner="TOP_START",this.x=null,this.y=null,this.absolute=!1,this.multi=!1,this.activatable=!1,this.fixed=!1,this.forceGroupSelection=!1,this.fullwidth=!1,this.defaultFocus="LIST_ROOT",this._listUpdateComplete=null}get listElement(){return this.listElement_||(this.listElement_=this.renderRoot.querySelector("mwc-list")),this.listElement_}get items(){const e=this.listElement;return e?e.items:[]}get index(){const e=this.listElement;return e?e.index:-1}get selected(){const e=this.listElement;return e?e.selected:null}render(){const e="menu"===this.innerRole?"menuitem":"option";return s.f`
      <mwc-menu-surface
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          .open=${this.open}
          .quick=${this.quick}
          .corner=${this.corner}
          .x=${this.x}
          .y=${this.y}
          .absolute=${this.absolute}
          .fixed=${this.fixed}
          .fullwidth=${this.fullwidth}
          class="mdc-menu mdc-menu-surface"
          @closed=${this.onClosed}
          @opened=${this.onOpened}
          @keydown=${this.onKeydown}>
        <mwc-list
          rootTabbable
          .innerRole=${this.innerRole}
          .multi=${this.multi}
          class="mdc-list"
          .itemRoles=${e}
          .wrapFocus=${this.wrapFocus}
          .activatable=${this.activatable}
          @action=${this.onAction}>
        <slot></slot>
      </mwc-list>
    </mwc-menu-surface>`}createAdapter(){return{addClassToElementAtIndex:(e,t)=>{const i=this.listElement;if(!i)return;const n=i.items[e];n&&("mdc-menu-item--selected"===t?this.forceGroupSelection&&!n.selected&&i.toggle(e,!0):n.classList.add(t))},removeClassFromElementAtIndex:(e,t)=>{const i=this.listElement;if(!i)return;const n=i.items[e];n&&("mdc-menu-item--selected"===t?n.selected&&i.toggle(e,!1):n.classList.remove(t))},addAttributeToElementAtIndex:(e,t,i)=>{const n=this.listElement;if(!n)return;const r=n.items[e];r&&r.setAttribute(t,i)},removeAttributeFromElementAtIndex:(e,t)=>{const i=this.listElement;if(!i)return;const n=i.items[e];n&&n.removeAttribute(t)},elementContainsClass:(e,t)=>e.classList.contains(t),closeSurface:()=>{this.open=!1},getElementIndex:e=>{const t=this.listElement;return t?t.items.indexOf(e):-1},notifySelected:()=>{},getMenuItemCount:()=>{const e=this.listElement;return e?e.items.length:0},focusItemAtIndex:e=>{const t=this.listElement;if(!t)return;const i=t.items[e];i&&i.focus()},focusListRoot:()=>{this.listElement&&this.listElement.focus()},getSelectedSiblingOfItemAtIndex:e=>{const t=this.listElement;if(!t)return-1;const i=t.items[e];if(!i||!i.group)return-1;for(let n=0;n<t.items.length;n++){if(n===e)continue;const r=t.items[n];if(r.selected&&r.group===i.group)return n}return-1},isSelectableItemAtIndex:e=>{const t=this.listElement;if(!t)return!1;const i=t.items[e];return!!i&&i.hasAttribute("group")}}}onKeydown(e){this.mdcFoundation&&this.mdcFoundation.handleKeydown(e)}onAction(e){const t=this.listElement;if(this.mdcFoundation&&t){const i=e.detail.index,n=t.items[i];n&&this.mdcFoundation.handleItemAction(n)}}onOpened(){this.open=!0,this.mdcFoundation&&this.mdcFoundation.handleMenuSurfaceOpened()}onClosed(){this.open=!1}async _getUpdateComplete(){await this._listUpdateComplete,await super._getUpdateComplete()}async firstUpdated(){super.firstUpdated();const e=this.listElement;e&&(this._listUpdateComplete=e.updateComplete,await this._listUpdateComplete)}select(e){const t=this.listElement;t&&t.select(e)}close(){this.open=!1}show(){this.open=!0}layout(e=!0){const t=this.listElement;t&&t.layout(e)}}n([Object(s.i)(".mdc-menu")],R.prototype,"mdcRoot",void 0),n([Object(s.i)("slot")],R.prototype,"slotElement",void 0),n([Object(s.h)({type:Object})],R.prototype,"anchor",void 0),n([Object(s.h)({type:Boolean,reflect:!0})],R.prototype,"open",void 0),n([Object(s.h)({type:Boolean})],R.prototype,"quick",void 0),n([Object(s.h)({type:Boolean})],R.prototype,"wrapFocus",void 0),n([Object(s.h)({type:String})],R.prototype,"innerRole",void 0),n([Object(s.h)({type:String})],R.prototype,"corner",void 0),n([Object(s.h)({type:Number})],R.prototype,"x",void 0),n([Object(s.h)({type:Number})],R.prototype,"y",void 0),n([Object(s.h)({type:Boolean})],R.prototype,"absolute",void 0),n([Object(s.h)({type:Boolean})],R.prototype,"multi",void 0),n([Object(s.h)({type:Boolean})],R.prototype,"activatable",void 0),n([Object(s.h)({type:Boolean})],R.prototype,"fixed",void 0),n([Object(s.h)({type:Boolean})],R.prototype,"forceGroupSelection",void 0),n([Object(s.h)({type:Boolean})],R.prototype,"fullwidth",void 0),n([Object(s.h)({type:String}),Object(v.a)((function(e){this.mdcFoundation&&this.mdcFoundation.setDefaultFocusState(O[e])}))],R.prototype,"defaultFocus",void 0);const B=s.c`mwc-list ::slotted([mwc-list-item]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}mwc-list{max-width:var(--mdc-menu-max-width, auto);min-width:var(--mdc-menu-min-width, auto)}`;let j=class extends R{};j.styles=B,j=n([Object(s.d)("mwc-menu")],j)},42:function(e,t,i){"use strict";i.d(t,"a",(function(){return m}));i(4);var n={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},r={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},o={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},s=/[a-z0-9*]/,a=/U\+/,c=/^arrow/,l=/^space(bar)?/,d=/^escape$/;function h(e,t){var i="";if(e){var n=e.toLowerCase();" "===n||l.test(n)?i="space":d.test(n)?i="esc":1==n.length?t&&!s.test(n)||(i=n):i=c.test(n)?n.replace("arrow",""):"multiply"==n?"*":n}return i}function p(e,t){return e.key?h(e.key,t):e.detail&&e.detail.key?h(e.detail.key,t):(i=e.keyIdentifier,o="",i&&(i in n?o=n[i]:a.test(i)?(i=parseInt(i.replace("U+","0x"),16),o=String.fromCharCode(i).toLowerCase()):o=i.toLowerCase()),o||function(e){var t="";return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?"f"+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):r[e]),t}(e.keyCode)||"");var i,o}function u(e,t){return p(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function f(e){return e.trim().split(" ").map((function(e){return function(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce((function(e,t){var i=t.split(":"),n=i[0],r=i[1];return n in o?(e[o[n]]=!0,e.hasModifiers=!0):(e.key=n,e.event=r||"keydown"),e}),{combo:e.split(":").shift()})}(e)}))}const m={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var i=f(t),n=0;n<i.length;++n)if(u(i[n],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map((function(e){return e.keyBindings}));return-1===e.indexOf(this.keyBindings)&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach((function(e){for(var t in e)this._addKeyBinding(t,e[t])}),this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort((function(e,t){var i=e[0].hasModifiers;return i===t[0].hasModifiers?0:i?-1:1}))},_addKeyBinding:function(e,t){f(e).forEach((function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,t])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(e){var t=this._keyBindings[e],i=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,i]),this.keyEventTarget.addEventListener(e,i)}),this)},_unlistenKeyEventListeners:function(){for(var e,t,i,n;this._boundKeyHandlers.length;)t=(e=this._boundKeyHandlers.pop())[0],i=e[1],n=e[2],t.removeEventListener(i,n)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var i=0;i<e.length;i++){var n=e[i][0],r=e[i][1];if(u(n,t)&&(this._triggerKeyHandler(n,r,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,i){var n=Object.create(e);n.keyboardEvent=i;var r=new CustomEvent(e.event,{detail:n,cancelable:!0});this[t].call(this,r),r.defaultPrevented&&i.preventDefault()}}},44:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));i(4),i(2);const n={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){this._setFocused("focus"===e.type)},_disabledChanged:function(e,t){this.setAttribute("aria-disabled",e?"true":"false"),this.style.pointerEvents=e?"none":"",e?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}}},480:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i(12);const r=()=>Promise.all([i.e(0),i.e(57)]).then(i.bind(null,709)),o=e=>{Object(n.a)(e,"show-dialog",{dialogTag:"ha-voice-command-dialog",dialogImport:r,dialogParams:{}})}},83:function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"a",(function(){return s}));i(4),i(44);var n=i(42),r=i(2);const o={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(e){this._detectKeyboardFocus(e),e||this._setPressed(!1)},_detectKeyboardFocus:function(e){this._setReceivedFocusFromKeyboard(!this.pointerDown&&e)},_userActivate:function(e){this.active!==e&&(this.active=e,this.fire("change"))},_downHandler:function(e){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(e){var t=e.detail.keyboardEvent,i=Object(r.a)(t).localTarget;this.isLightDescendant(i)||(t.preventDefault(),t.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(e){var t=e.detail.keyboardEvent,i=Object(r.a)(t).localTarget;this.isLightDescendant(i)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async((function(){this.click()}),1)},_pressedChanged:function(e){this._changedButtonState()},_ariaActiveAttributeChanged:function(e,t){t&&t!=e&&this.hasAttribute(t)&&this.removeAttribute(t)},_activeChanged:function(e,t){this.toggles?this.setAttribute(this.ariaActiveAttribute,e?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},s=[n.a,o]},878:function(e,t,i){"use strict";i.r(t);i(277),i(300),i(187),i(162),i(181),i(76),i(182),i(151),i(214),i(140),i(285),i(320);var n=i(3),r=i(30),o=i(247),s=(i(208),i(163),i(480)),a=i(212);i(240);class c extends(Object(a.a)(r.a)){static get template(){return n.a`
      <style include="ha-style">
        :host {
          height: 100%;
        }
        app-toolbar paper-listbox {
          width: 150px;
        }
        app-toolbar paper-item {
          cursor: pointer;
        }
        .content {
          padding-bottom: 32px;
          max-width: 600px;
          margin: 0 auto;
        }
        paper-icon-item {
          border-top: 1px solid var(--divider-color);
        }
        paper-icon-item:first-child {
          border-top: 0;
        }
        paper-checkbox {
          padding: 11px;
        }
        paper-input {
          --paper-input-container-underline: {
            display: none;
          }
          --paper-input-container-underline-focus: {
            display: none;
          }
          position: relative;
          top: 1px;
        }
        .tip {
          padding: 24px;
          text-align: center;
          color: var(--secondary-text-color);
        }
      </style>

      <app-header-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-menu-button
              hass="[[hass]]"
              narrow="[[narrow]]"
            ></ha-menu-button>
            <div main-title>[[localize('panel.shopping_list')]]</div>

            <ha-icon-button
              hidden$="[[!conversation]]"
              aria-label="Start conversation"
              icon="hass:microphone"
              on-click="_showVoiceCommandDialog"
            ></ha-icon-button>
            <ha-button-menu corner="BOTTOM_START">
              <ha-icon-button
                icon="hass:dots-vertical"
                label="Menu"
                slot="trigger"
              >
              </ha-icon-button>
              <mwc-list-item on-click="_clearCompleted">
                [[localize('ui.panel.shopping-list.clear_completed')]]
              </mwc-list-item>
            </ha-button-menu>
          </app-toolbar>
        </app-header>

        <div class="content">
          <ha-card>
            <paper-icon-item on-focus="_focusRowInput">
              <ha-icon-button
                slot="item-icon"
                icon="hass:plus"
                on-click="_addItem"
              ></ha-icon-button>
              <paper-item-body>
                <paper-input
                  id="addBox"
                  placeholder="[[localize('ui.panel.shopping-list.add_item')]]"
                  on-keydown="_addKeyPress"
                  no-label-float
                ></paper-input>
              </paper-item-body>
            </paper-icon-item>

            <template is="dom-repeat" items="[[items]]">
              <paper-icon-item>
                <paper-checkbox
                  slot="item-icon"
                  checked="{{item.complete}}"
                  on-click="_itemCompleteTapped"
                  tabindex="0"
                ></paper-checkbox>
                <paper-item-body>
                  <paper-input
                    id="editBox"
                    no-label-float
                    value="[[item.name]]"
                    on-change="_saveEdit"
                  ></paper-input>
                </paper-item-body>
              </paper-icon-item>
            </template>
          </ha-card>
          <div class="tip" hidden$="[[!conversation]]">
            [[localize('ui.panel.shopping-list.microphone_tip')]]
          </div>
        </div>
      </app-header-layout>
    `}static get properties(){return{hass:Object,narrow:Boolean,conversation:{type:Boolean,computed:"_computeConversation(hass)"},items:{type:Array,value:[]}}}connectedCallback(){super.connectedCallback(),this._fetchData=this._fetchData.bind(this),this.hass.connection.subscribeEvents(this._fetchData,"shopping_list_updated").then(function(e){this._unsubEvents=e}.bind(this)),this._fetchData()}disconnectedCallback(){super.disconnectedCallback(),this._unsubEvents&&this._unsubEvents()}_fetchData(){this.hass.callApi("get","shopping_list").then(function(e){e.reverse(),this.items=e}.bind(this))}_itemCompleteTapped(e){e.stopPropagation(),this.hass.callApi("post","shopping_list/item/"+e.model.item.id,{complete:e.target.checked}).catch(()=>this._fetchData())}_addItem(e){this.hass.callApi("post","shopping_list/item",{name:this.$.addBox.value}).catch(()=>this._fetchData()),this.$.addBox.value="",e&&setTimeout(()=>this.$.addBox.focus(),10)}_addKeyPress(e){13===e.keyCode&&this._addItem()}_computeConversation(e){return Object(o.a)(e,"conversation")}_showVoiceCommandDialog(){Object(s.a)(this)}_saveEdit(e){const{index:t,item:i}=e.model,n=e.target.value;n!==i.name&&(this.set(["items",t,"name"],n),this.hass.callApi("post","shopping_list/item/"+i.id,{name:n}).catch(()=>this._fetchData()))}_clearCompleted(){this.hass.callApi("POST","shopping_list/clear_completed")}}customElements.define("ha-panel-shopping-list",c)},98:function(e,t,i){"use strict";i.d(t,"b",(function(){return s})),i.d(t,"a",(function(){return a}));i(4);var n=i(83),r=i(44),o=i(122);const s={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(e){e&&this.ensureRipple(),this.hasRipple()&&(this._ripple.holdDown=e)},_createRipple:function(){var e=o.a._createRipple();return e.id="ink",e.setAttribute("center",""),e.classList.add("circle"),e}},a=[n.a,r.a,o.a,s]}}]);
//# sourceMappingURL=chunk.ee05d3bfbe9dfa413c2f.js.map