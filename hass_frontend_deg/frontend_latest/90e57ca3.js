/*! For license information please see 90e57ca3.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[55682],{14166:(t,i,e)=>{e.d(i,{W:()=>a});var n=function(){return n=Object.assign||function(t){for(var i,e=1,n=arguments.length;e<n;e++)for(var a in i=arguments[e])Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);return t},n.apply(this,arguments)};function a(t,i,e){void 0===i&&(i=Date.now()),void 0===e&&(e={});var a=n(n({},o),e||{}),r=(+t-+i)/1e3;if(Math.abs(r)<a.second)return{value:Math.round(r),unit:"second"};var s=r/60;if(Math.abs(s)<a.minute)return{value:Math.round(s),unit:"minute"};var p=r/3600;if(Math.abs(p)<a.hour)return{value:Math.round(p),unit:"hour"};var l=r/86400;if(Math.abs(l)<a.day)return{value:Math.round(l),unit:"day"};var h=new Date(t),u=new Date(i),m=h.getFullYear()-u.getFullYear();if(Math.round(Math.abs(m))>0)return{value:Math.round(m),unit:"year"};var c=12*m+h.getMonth()-u.getMonth();if(Math.round(Math.abs(c))>0)return{value:Math.round(c),unit:"month"};var d=r/604800;return{value:Math.round(d),unit:"week"}}var o={second:45,minute:45,hour:22,day:5}},49075:(t,i,e)=>{e.d(i,{S:()=>r,B:()=>s});e(94604);var n=e(51644),a=e(26110),o=e(84938);const r={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(t){t&&this.ensureRipple(),this.hasRipple()&&(this._ripple.holdDown=t)},_createRipple:function(){var t=o.o._createRipple();return t.id="ink",t.setAttribute("center",""),t.classList.add("circle"),t}},s=[n.P,a.a,o.o,r]},84938:(t,i,e)=>{e.d(i,{o:()=>o});e(94604),e(60748);var n=e(51644),a=e(87156);const o={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(t){n.$._downHandler.call(this,t),this.pressed&&this.ensureRipple(t)},ensureRipple:function(t){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var i=this._rippleContainer||this.root;if(i&&(0,a.vz)(i).appendChild(this._ripple),t){var e=(0,a.vz)(this._rippleContainer||this),n=(0,a.vz)(t).rootTarget;e.deepContains(n)&&this._ripple.uiDownAction(t)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(t){this.hasRipple()&&(this._ripple.noink=t)}}},25782:(t,i,e)=>{e(94604),e(65660),e(47686),e(97968);var n=e(9672),a=e(50856),o=e(33760);(0,n.k)({_template:a.d`
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
`,is:"paper-icon-item",behaviors:[o.U]})},54444:(t,i,e)=>{e(94604);var n=e(9672),a=e(87156),o=e(50856);(0,n.k)({_template:o.d`
    <style>
      :host {
        display: block;
        position: absolute;
        outline: none;
        z-index: 1002;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        cursor: default;
      }

      #tooltip {
        display: block;
        outline: none;
        @apply --paper-font-common-base;
        font-size: 10px;
        line-height: 1;
        background-color: var(--paper-tooltip-background, #616161);
        color: var(--paper-tooltip-text-color, white);
        padding: 8px;
        border-radius: 2px;
        @apply --paper-tooltip;
      }

      @keyframes keyFrameScaleUp {
        0% {
          transform: scale(0.0);
        }
        100% {
          transform: scale(1.0);
        }
      }

      @keyframes keyFrameScaleDown {
        0% {
          transform: scale(1.0);
        }
        100% {
          transform: scale(0.0);
        }
      }

      @keyframes keyFrameFadeInOpacity {
        0% {
          opacity: 0;
        }
        100% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameFadeOutOpacity {
        0% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        100% {
          opacity: 0;
        }
      }

      @keyframes keyFrameSlideDownIn {
        0% {
          transform: translateY(-2000px);
          opacity: 0;
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameSlideDownOut {
        0% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(-2000px);
          opacity: 0;
        }
      }

      .fade-in-animation {
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameFadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .fade-out-animation {
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 0ms);
        animation-name: keyFrameFadeOutOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-up-animation {
        transform: scale(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameScaleUp;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-down-animation {
        transform: scale(1);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameScaleDown;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation {
        transform: translateY(-2000px);
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownIn;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation-out {
        transform: translateY(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownOut;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .cancel-animation {
        animation-delay: -30s !important;
      }

      /* Thanks IE 10. */

      .hidden {
        display: none !important;
      }
    </style>

    <div id="tooltip" class="hidden">
      <slot></slot>
    </div>
`,is:"paper-tooltip",hostAttributes:{role:"tooltip",tabindex:-1},properties:{for:{type:String,observer:"_findTarget"},manualMode:{type:Boolean,value:!1,observer:"_manualModeChanged"},position:{type:String,value:"bottom"},fitToVisibleBounds:{type:Boolean,value:!1},offset:{type:Number,value:14},marginTop:{type:Number,value:14},animationDelay:{type:Number,value:500,observer:"_delayChange"},animationEntry:{type:String,value:""},animationExit:{type:String,value:""},animationConfig:{type:Object,value:function(){return{entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]}}},_showing:{type:Boolean,value:!1}},listeners:{webkitAnimationEnd:"_onAnimationEnd"},get target(){var t=(0,a.vz)(this).parentNode,i=(0,a.vz)(this).getOwnerRoot();return this.for?(0,a.vz)(i).querySelector("#"+this.for):t.nodeType==Node.DOCUMENT_FRAGMENT_NODE?i.host:t},attached:function(){this._findTarget()},detached:function(){this.manualMode||this._removeListeners()},playAnimation:function(t){"entry"===t?this.show():"exit"===t&&this.hide()},cancelAnimation:function(){this.$.tooltip.classList.add("cancel-animation")},show:function(){if(!this._showing){if(""===(0,a.vz)(this).textContent.trim()){for(var t=!0,i=(0,a.vz)(this).getEffectiveChildNodes(),e=0;e<i.length;e++)if(""!==i[e].textContent.trim()){t=!1;break}if(t)return}this._showing=!0,this.$.tooltip.classList.remove("hidden"),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.updatePosition(),this._animationPlaying=!0,this.$.tooltip.classList.add(this._getAnimationType("entry"))}},hide:function(){if(this._showing){if(this._animationPlaying)return this._showing=!1,void this._cancelAnimation();this._onAnimationFinish(),this._showing=!1,this._animationPlaying=!0}},updatePosition:function(){if(this._target&&this.offsetParent){var t=this.offset;14!=this.marginTop&&14==this.offset&&(t=this.marginTop);var i,e,n=this.offsetParent.getBoundingClientRect(),a=this._target.getBoundingClientRect(),o=this.getBoundingClientRect(),r=(a.width-o.width)/2,s=(a.height-o.height)/2,p=a.left-n.left,l=a.top-n.top;switch(this.position){case"top":i=p+r,e=l-o.height-t;break;case"bottom":i=p+r,e=l+a.height+t;break;case"left":i=p-o.width-t,e=l+s;break;case"right":i=p+a.width+t,e=l+s}this.fitToVisibleBounds?(n.left+i+o.width>window.innerWidth?(this.style.right="0px",this.style.left="auto"):(this.style.left=Math.max(0,i)+"px",this.style.right="auto"),n.top+e+o.height>window.innerHeight?(this.style.bottom=n.height-l+t+"px",this.style.top="auto"):(this.style.top=Math.max(-n.top,e)+"px",this.style.bottom="auto")):(this.style.left=i+"px",this.style.top=e+"px")}},_addListeners:function(){this._target&&(this.listen(this._target,"mouseenter","show"),this.listen(this._target,"focus","show"),this.listen(this._target,"mouseleave","hide"),this.listen(this._target,"blur","hide"),this.listen(this._target,"tap","hide")),this.listen(this.$.tooltip,"animationend","_onAnimationEnd"),this.listen(this,"mouseenter","hide")},_findTarget:function(){this.manualMode||this._removeListeners(),this._target=this.target,this.manualMode||this._addListeners()},_delayChange:function(t){500!==t&&this.updateStyles({"--paper-tooltip-delay-in":t+"ms"})},_manualModeChanged:function(){this.manualMode?this._removeListeners():this._addListeners()},_cancelAnimation:function(){this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add("hidden")},_onAnimationFinish:function(){this._showing&&(this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add(this._getAnimationType("exit")))},_onAnimationEnd:function(){this._animationPlaying=!1,this._showing||(this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.add("hidden"))},_getAnimationType:function(t){if("entry"===t&&""!==this.animationEntry)return this.animationEntry;if("exit"===t&&""!==this.animationExit)return this.animationExit;if(this.animationConfig[t]&&"string"==typeof this.animationConfig[t][0].name){if(this.animationConfig[t][0].timing&&this.animationConfig[t][0].timing.delay&&0!==this.animationConfig[t][0].timing.delay){var i=this.animationConfig[t][0].timing.delay;"entry"===t?this.updateStyles({"--paper-tooltip-delay-in":i+"ms"}):"exit"===t&&this.updateStyles({"--paper-tooltip-delay-out":i+"ms"})}return this.animationConfig[t][0].name}},_removeListeners:function(){this._target&&(this.unlisten(this._target,"mouseenter","show"),this.unlisten(this._target,"focus","show"),this.unlisten(this._target,"mouseleave","hide"),this.unlisten(this._target,"blur","hide"),this.unlisten(this._target,"tap","hide")),this.unlisten(this.$.tooltip,"animationend","_onAnimationEnd"),this.unlisten(this,"mouseenter","hide")}})},3239:(t,i,e)=>{function n(t){if(!t||"object"!=typeof t)return t;if("[object Date]"==Object.prototype.toString.call(t))return new Date(t.getTime());if(Array.isArray(t))return t.map(n);var i={};return Object.keys(t).forEach((function(e){i[e]=n(t[e])})),i}e.d(i,{Z:()=>n})},93217:(t,i,e)=>{e.d(i,{Ud:()=>u});const n=Symbol("Comlink.proxy"),a=Symbol("Comlink.endpoint"),o=Symbol("Comlink.releaseProxy"),r=Symbol("Comlink.thrown"),s=t=>"object"==typeof t&&null!==t||"function"==typeof t,p=new Map([["proxy",{canHandle:t=>s(t)&&t[n],serialize(t){const{port1:i,port2:e}=new MessageChannel;return l(t,i),[e,[e]]},deserialize:t=>(t.start(),u(t))}],["throw",{canHandle:t=>s(t)&&r in t,serialize({value:t}){let i;return i=t instanceof Error?{isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:{isError:!1,value:t},[i,[]]},deserialize(t){if(t.isError)throw Object.assign(new Error(t.value.message),t.value);throw t.value}}]]);function l(t,i=self){i.addEventListener("message",(function e(a){if(!a||!a.data)return;const{id:o,type:s,path:p}=Object.assign({path:[]},a.data),u=(a.data.argumentList||[]).map(g);let m;try{const i=p.slice(0,-1).reduce(((t,i)=>t[i]),t),e=p.reduce(((t,i)=>t[i]),t);switch(s){case"GET":m=e;break;case"SET":i[p.slice(-1)[0]]=g(a.data.value),m=!0;break;case"APPLY":m=e.apply(i,u);break;case"CONSTRUCT":m=function(t){return Object.assign(t,{[n]:!0})}(new e(...u));break;case"ENDPOINT":{const{port1:i,port2:e}=new MessageChannel;l(t,e),m=function(t,i){return y.set(t,i),t}(i,[i])}break;case"RELEASE":m=void 0;break;default:return}}catch(t){m={value:t,[r]:0}}Promise.resolve(m).catch((t=>({value:t,[r]:0}))).then((t=>{const[n,a]=f(t);i.postMessage(Object.assign(Object.assign({},n),{id:o}),a),"RELEASE"===s&&(i.removeEventListener("message",e),h(i))}))})),i.start&&i.start()}function h(t){(function(t){return"MessagePort"===t.constructor.name})(t)&&t.close()}function u(t,i){return c(t,[],i)}function m(t){if(t)throw new Error("Proxy has been released and is not useable")}function c(t,i=[],e=function(){}){let n=!1;const r=new Proxy(e,{get(e,a){if(m(n),a===o)return()=>v(t,{type:"RELEASE",path:i.map((t=>t.toString()))}).then((()=>{h(t),n=!0}));if("then"===a){if(0===i.length)return{then:()=>r};const e=v(t,{type:"GET",path:i.map((t=>t.toString()))}).then(g);return e.then.bind(e)}return c(t,[...i,a])},set(e,a,o){m(n);const[r,s]=f(o);return v(t,{type:"SET",path:[...i,a].map((t=>t.toString())),value:r},s).then(g)},apply(e,o,r){m(n);const s=i[i.length-1];if(s===a)return v(t,{type:"ENDPOINT"}).then(g);if("bind"===s)return c(t,i.slice(0,-1));const[p,l]=d(r);return v(t,{type:"APPLY",path:i.map((t=>t.toString())),argumentList:p},l).then(g)},construct(e,a){m(n);const[o,r]=d(a);return v(t,{type:"CONSTRUCT",path:i.map((t=>t.toString())),argumentList:o},r).then(g)}});return r}function d(t){const i=t.map(f);return[i.map((t=>t[0])),(e=i.map((t=>t[1])),Array.prototype.concat.apply([],e))];var e}const y=new WeakMap;function f(t){for(const[i,e]of p)if(e.canHandle(t)){const[n,a]=e.serialize(t);return[{type:"HANDLER",name:i,value:n},a]}return[{type:"RAW",value:t},y.get(t)||[]]}function g(t){switch(t.type){case"HANDLER":return p.get(t.name).deserialize(t.value);case"RAW":return t.value}}function v(t,i,e){return new Promise((n=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");t.addEventListener("message",(function i(e){e.data&&e.data.id&&e.data.id===a&&(t.removeEventListener("message",i),n(e.data))})),t.start&&t.start(),t.postMessage(Object.assign({id:a},i),e)}))}}}]);
//# sourceMappingURL=90e57ca3.js.map