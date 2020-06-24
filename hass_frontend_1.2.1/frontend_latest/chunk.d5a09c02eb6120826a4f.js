/*! For license information please see chunk.d5a09c02eb6120826a4f.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[193],{160:function(t,i,e){"use strict";e.d(i,"a",(function(){return u}));const n=Symbol("Comlink.proxy"),a=Symbol("Comlink.endpoint"),o=Symbol("Comlink.releaseProxy"),s=Symbol("Comlink.thrown"),r=t=>"object"==typeof t&&null!==t||"function"==typeof t,l=new Map([["proxy",{canHandle:t=>r(t)&&t[n],serialize(t){const{port1:i,port2:e}=new MessageChannel;return function t(i,e=self){e.addEventListener("message",(function a(o){if(!o||!o.data)return;const{id:r,type:l,path:u}=Object.assign({path:[]},o.data),p=(o.data.argumentList||[]).map(f);let d;try{const e=u.slice(0,-1).reduce((t,i)=>t[i],i),a=u.reduce((t,i)=>t[i],i);switch(l){case 0:d=a;break;case 1:e[u.slice(-1)[0]]=f(o.data.value),d=!0;break;case 2:d=a.apply(e,p);break;case 3:d=function(t){return Object.assign(t,{[n]:!0})}(new a(...p));break;case 4:{const{port1:e,port2:n}=new MessageChannel;t(i,n),d=function(t,i){return c.set(t,i),t}(e,[e])}break;case 5:d=void 0}}catch(y){d={value:y,[s]:0}}Promise.resolve(d).catch(t=>({value:t,[s]:0})).then(t=>{const[i,n]=m(t);e.postMessage(Object.assign(Object.assign({},i),{id:r}),n),5===l&&(e.removeEventListener("message",a),h(e))})})),e.start&&e.start()}(t,i),[e,[e]]},deserialize:t=>(t.start(),u(t))}],["throw",{canHandle:t=>r(t)&&s in t,serialize({value:t}){let i;return i=t instanceof Error?{isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:{isError:!1,value:t},[i,[]]},deserialize(t){if(t.isError)throw Object.assign(new Error(t.value.message),t.value);throw t.value}}]]);function h(t){(function(t){return"MessagePort"===t.constructor.name})(t)&&t.close()}function u(t,i){return function t(i,e=[],n=function(){}){let s=!1;const r=new Proxy(n,{get(n,a){if(p(s),a===o)return()=>y(i,{type:5,path:e.map(t=>t.toString())}).then(()=>{h(i),s=!0});if("then"===a){if(0===e.length)return{then:()=>r};const t=y(i,{type:0,path:e.map(t=>t.toString())}).then(f);return t.then.bind(t)}return t(i,[...e,a])},set(t,n,a){p(s);const[o,r]=m(a);return y(i,{type:1,path:[...e,n].map(t=>t.toString()),value:o},r).then(f)},apply(n,o,r){p(s);const l=e[e.length-1];if(l===a)return y(i,{type:4}).then(f);if("bind"===l)return t(i,e.slice(0,-1));const[h,u]=d(r);return y(i,{type:2,path:e.map(t=>t.toString()),argumentList:h},u).then(f)},construct(t,n){p(s);const[a,o]=d(n);return y(i,{type:3,path:e.map(t=>t.toString()),argumentList:a},o).then(f)}});return r}(t,[],i)}function p(t){if(t)throw new Error("Proxy has been released and is not useable")}function d(t){const i=t.map(m);return[i.map(t=>t[0]),(e=i.map(t=>t[1]),Array.prototype.concat.apply([],e))];var e}const c=new WeakMap;function m(t){for(const[i,e]of l)if(e.canHandle(t)){const[n,a]=e.serialize(t);return[{type:3,name:i,value:n},a]}return[{type:0,value:t},c.get(t)||[]]}function f(t){switch(t.type){case 3:return l.get(t.name).deserialize(t.value);case 0:return t.value}}function y(t,i,e){return new Promise(n=>{const a=new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-");t.addEventListener("message",(function i(e){e.data&&e.data.id&&e.data.id===a&&(t.removeEventListener("message",i),n(e.data))})),t.start&&t.start(),t.postMessage(Object.assign({id:a},i),e)})}},235:function(t,i,e){"use strict";e.d(i,"a",(function(){return S}));var n=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,a="[^\\s]+",o=/\[([^]*?)\]/gm;function s(t,i){for(var e=[],n=0,a=t.length;n<a;n++)e.push(t[n].substr(0,i));return e}var r=function(t){return function(i,e){var n=e[t].map((function(t){return t.toLowerCase()})).indexOf(i.toLowerCase());return n>-1?n:null}};function l(t){for(var i=[],e=1;e<arguments.length;e++)i[e-1]=arguments[e];for(var n=0,a=i;n<a.length;n++){var o=a[n];for(var s in o)t[s]=o[s]}return t}var h=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],u=["January","February","March","April","May","June","July","August","September","October","November","December"],p=s(u,3),d={dayNamesShort:s(h,3),dayNames:h,monthNamesShort:p,monthNames:u,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},c=l({},d),m=function(t,i){for(void 0===i&&(i=2),t=String(t);t.length<i;)t="0"+t;return t},f={D:function(t){return String(t.getDate())},DD:function(t){return m(t.getDate())},Do:function(t,i){return i.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return m(t.getDay())},ddd:function(t,i){return i.dayNamesShort[t.getDay()]},dddd:function(t,i){return i.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return m(t.getMonth()+1)},MMM:function(t,i){return i.monthNamesShort[t.getMonth()]},MMMM:function(t,i){return i.monthNames[t.getMonth()]},YY:function(t){return m(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return m(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return m(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return m(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return m(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return m(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return m(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return m(t.getMilliseconds(),3)},a:function(t,i){return t.getHours()<12?i.amPm[0]:i.amPm[1]},A:function(t,i){return t.getHours()<12?i.amPm[0].toUpperCase():i.amPm[1].toUpperCase()},ZZ:function(t){var i=t.getTimezoneOffset();return(i>0?"-":"+")+m(100*Math.floor(Math.abs(i)/60)+Math.abs(i)%60,4)},Z:function(t){var i=t.getTimezoneOffset();return(i>0?"-":"+")+m(Math.floor(Math.abs(i)/60),2)+":"+m(Math.abs(i)%60,2)}},y=function(t){return+t-1},g=[null,"[1-9]\\d?"],_=[null,a],b=["isPm",a,function(t,i){var e=t.toLowerCase();return e===i.amPm[0]?0:e===i.amPm[1]?1:null}],v=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var i=(t+"").match(/([+-]|\d\d)/gi);if(i){var e=60*+i[1]+parseInt(i[2],10);return"+"===i[0]?e:-e}return 0}],w=(r("monthNamesShort"),r("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"}),S=function(t,i,e){if(void 0===i&&(i=w.default),void 0===e&&(e={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var a=[];i=(i=w[i]||i).replace(o,(function(t,i){return a.push(i),"@@@"}));var s=l(l({},c),e);return(i=i.replace(n,(function(i){return f[i](t,s)}))).replace(/@@@/g,(function(){return a.shift()}))}},242:function(t,i,e){"use strict";e(4);var n=e(5),a=e(2),o=e(3);Object(n.a)({_template:o.a`
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
`,is:"paper-tooltip",hostAttributes:{role:"tooltip",tabindex:-1},properties:{for:{type:String,observer:"_findTarget"},manualMode:{type:Boolean,value:!1,observer:"_manualModeChanged"},position:{type:String,value:"bottom"},fitToVisibleBounds:{type:Boolean,value:!1},offset:{type:Number,value:14},marginTop:{type:Number,value:14},animationDelay:{type:Number,value:500,observer:"_delayChange"},animationEntry:{type:String,value:""},animationExit:{type:String,value:""},animationConfig:{type:Object,value:function(){return{entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]}}},_showing:{type:Boolean,value:!1}},listeners:{webkitAnimationEnd:"_onAnimationEnd"},get target(){var t=Object(a.a)(this).parentNode,i=Object(a.a)(this).getOwnerRoot();return this.for?Object(a.a)(i).querySelector("#"+this.for):t.nodeType==Node.DOCUMENT_FRAGMENT_NODE?i.host:t},attached:function(){this._findTarget()},detached:function(){this.manualMode||this._removeListeners()},playAnimation:function(t){"entry"===t?this.show():"exit"===t&&this.hide()},cancelAnimation:function(){this.$.tooltip.classList.add("cancel-animation")},show:function(){if(!this._showing){if(""===Object(a.a)(this).textContent.trim()){for(var t=!0,i=Object(a.a)(this).getEffectiveChildNodes(),e=0;e<i.length;e++)if(""!==i[e].textContent.trim()){t=!1;break}if(t)return}this._showing=!0,this.$.tooltip.classList.remove("hidden"),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.updatePosition(),this._animationPlaying=!0,this.$.tooltip.classList.add(this._getAnimationType("entry"))}},hide:function(){if(this._showing){if(this._animationPlaying)return this._showing=!1,void this._cancelAnimation();this._onAnimationFinish(),this._showing=!1,this._animationPlaying=!0}},updatePosition:function(){if(this._target&&this.offsetParent){var t=this.offset;14!=this.marginTop&&14==this.offset&&(t=this.marginTop);var i,e,n=this.offsetParent.getBoundingClientRect(),a=this._target.getBoundingClientRect(),o=this.getBoundingClientRect(),s=(a.width-o.width)/2,r=(a.height-o.height)/2,l=a.left-n.left,h=a.top-n.top;switch(this.position){case"top":i=l+s,e=h-o.height-t;break;case"bottom":i=l+s,e=h+a.height+t;break;case"left":i=l-o.width-t,e=h+r;break;case"right":i=l+a.width+t,e=h+r}this.fitToVisibleBounds?(n.left+i+o.width>window.innerWidth?(this.style.right="0px",this.style.left="auto"):(this.style.left=Math.max(0,i)+"px",this.style.right="auto"),n.top+e+o.height>window.innerHeight?(this.style.bottom=n.height-h+t+"px",this.style.top="auto"):(this.style.top=Math.max(-n.top,e)+"px",this.style.bottom="auto")):(this.style.left=i+"px",this.style.top=e+"px")}},_addListeners:function(){this._target&&(this.listen(this._target,"mouseenter","show"),this.listen(this._target,"focus","show"),this.listen(this._target,"mouseleave","hide"),this.listen(this._target,"blur","hide"),this.listen(this._target,"tap","hide")),this.listen(this.$.tooltip,"animationend","_onAnimationEnd"),this.listen(this,"mouseenter","hide")},_findTarget:function(){this.manualMode||this._removeListeners(),this._target=this.target,this.manualMode||this._addListeners()},_delayChange:function(t){500!==t&&this.updateStyles({"--paper-tooltip-delay-in":t+"ms"})},_manualModeChanged:function(){this.manualMode?this._removeListeners():this._addListeners()},_cancelAnimation:function(){this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add("hidden")},_onAnimationFinish:function(){this._showing&&(this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add(this._getAnimationType("exit")))},_onAnimationEnd:function(){this._animationPlaying=!1,this._showing||(this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.add("hidden"))},_getAnimationType:function(t){if("entry"===t&&""!==this.animationEntry)return this.animationEntry;if("exit"===t&&""!==this.animationExit)return this.animationExit;if(this.animationConfig[t]&&"string"==typeof this.animationConfig[t][0].name){if(this.animationConfig[t][0].timing&&this.animationConfig[t][0].timing.delay&&0!==this.animationConfig[t][0].timing.delay){var i=this.animationConfig[t][0].timing.delay;"entry"===t?this.updateStyles({"--paper-tooltip-delay-in":i+"ms"}):"exit"===t&&this.updateStyles({"--paper-tooltip-delay-out":i+"ms"})}return this.animationConfig[t][0].name}},_removeListeners:function(){this._target&&(this.unlisten(this._target,"mouseenter","show"),this.unlisten(this._target,"focus","show"),this.unlisten(this._target,"mouseleave","hide"),this.unlisten(this._target,"blur","hide"),this.unlisten(this._target,"tap","hide")),this.unlisten(this.$.tooltip,"animationend","_onAnimationEnd"),this.unlisten(this,"mouseenter","hide")}})},477:function(t,i,e){"use strict";e(4),e(52);var n=e(5),a=e(2),o=e(3),s=e(77);Object(n.a)({_template:o.a`
    <style>
      :host {
        position: fixed;
        top: -120px;
        right: 0;
        bottom: -120px;
        left: 0;

        visibility: hidden;

        transition-property: visibility;
      }

      :host([opened]) {
        visibility: visible;
      }

      :host([persistent]) {
        width: var(--app-drawer-width, 256px);
      }

      :host([persistent][position=left]) {
        right: auto;
      }

      :host([persistent][position=right]) {
        left: auto;
      }

      #contentContainer {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;

        width: var(--app-drawer-width, 256px);
        padding: var(--app-drawer-content-padding, 120px 0);

        transition-property: -webkit-transform;
        transition-property: transform;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);

        background-color: #FFF;

        @apply --app-drawer-content-container;
      }

      #contentContainer[persistent] {
        width: 100%;
      }

      #contentContainer[position=right] {
        right: 0;
        left: auto;

        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }

      #contentContainer[swipe-open]::after {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 100%;

        visibility: visible;

        width: 20px;

        content: '';
      }

      #contentContainer[swipe-open][position=right]::after {
        right: 100%;
        left: auto;
      }

      #contentContainer[opened] {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      #scrim {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        transition-property: opacity;
        -webkit-transform: translateZ(0);
        transform:  translateZ(0);

        opacity: 0;
        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));
      }

      #scrim.visible {
        opacity: 1;
      }

      :host([no-transition]) #contentContainer {
        transition-property: none;
      }
    </style>

    <div id="scrim" on-click="close"></div>

    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari
    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->
    <div id="contentContainer" opened\$="[[opened]]" persistent\$="[[persistent]]" position\$="[[position]]" swipe-open\$="[[swipeOpen]]">
      <slot></slot>
    </div>
`,is:"app-drawer",properties:{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},persistent:{type:Boolean,value:!1,reflectToAttribute:!0},transitionDuration:{type:Number,value:200},align:{type:String,value:"left"},position:{type:String,readOnly:!0,reflectToAttribute:!0},swipeOpen:{type:Boolean,value:!1,reflectToAttribute:!0},noFocusTrap:{type:Boolean,value:!1},disableSwipe:{type:Boolean,value:!1}},observers:["resetLayout(position, isAttached)","_resetPosition(align, isAttached)","_styleTransitionDuration(transitionDuration)","_openedPersistentChanged(opened, persistent)"],_translateOffset:0,_trackDetails:null,_drawerState:0,_boundEscKeydownHandler:null,_firstTabStop:null,_lastTabStop:null,attached:function(){Object(s.a)(this,(function(){this._boundEscKeydownHandler=this._escKeydownHandler.bind(this),this.addEventListener("keydown",this._tabKeydownHandler.bind(this)),this.listen(this,"track","_track"),this.setScrollDirection("y")})),this.fire("app-reset-layout")},detached:function(){document.removeEventListener("keydown",this._boundEscKeydownHandler)},open:function(){this.opened=!0},close:function(){this.opened=!1},toggle:function(){this.opened=!this.opened},getWidth:function(){return this._savedWidth||this.$.contentContainer.offsetWidth},_isRTL:function(){return"rtl"===window.getComputedStyle(this).direction},_resetPosition:function(){switch(this.align){case"start":return void this._setPosition(this._isRTL()?"right":"left");case"end":return void this._setPosition(this._isRTL()?"left":"right")}this._setPosition(this.align)},_escKeydownHandler:function(t){27===t.keyCode&&(t.preventDefault(),this.close())},_track:function(t){if(!this.persistent&&!this.disableSwipe)switch(t.preventDefault(),t.detail.state){case"start":this._trackStart(t);break;case"track":this._trackMove(t);break;case"end":this._trackEnd(t)}},_trackStart:function(t){this._drawerState=this._DRAWER_STATE.TRACKING;var i=this.$.contentContainer.getBoundingClientRect();this._savedWidth=i.width,"left"===this.position?this._translateOffset=i.left:this._translateOffset=i.right-window.innerWidth,this._trackDetails=[],this._styleTransitionDuration(0),this.style.visibility="visible"},_trackMove:function(t){this._translateDrawer(t.detail.dx+this._translateOffset),this._trackDetails.push({dx:t.detail.dx,timeStamp:Date.now()})},_trackEnd:function(t){var i=t.detail.dx+this._translateOffset,e=this.getWidth(),n="left"===this.position?i>=0||i<=-e:i<=0||i>=e;if(!n){var a=this._trackDetails;if(this._trackDetails=null,this._flingDrawer(t,a),this._drawerState===this._DRAWER_STATE.FLINGING)return}var o=e/2;t.detail.dx<-o?this.opened="right"===this.position:t.detail.dx>o&&(this.opened="left"===this.position),n?this.debounce("_resetDrawerState",this._resetDrawerState):this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration),this._styleTransitionDuration(this.transitionDuration),this._resetDrawerTranslate(),this.style.visibility=""},_calculateVelocity:function(t,i){for(var e,n=Date.now(),a=n-100,o=0,s=i.length-1;o<=s;){var r=o+s>>1,l=i[r];l.timeStamp>=a?(e=l,s=r-1):o=r+1}return e?(t.detail.dx-e.dx)/(n-e.timeStamp||1):0},_flingDrawer:function(t,i){var e=this._calculateVelocity(t,i);if(!(Math.abs(e)<this._MIN_FLING_THRESHOLD)){this._drawerState=this._DRAWER_STATE.FLINGING;var n,a=t.detail.dx+this._translateOffset,o=this.getWidth(),s="left"===this.position,r=e>0;n=!r&&s?-(a+o):r&&!s?o-a:-a,r?(e=Math.max(e,this._MIN_TRANSITION_VELOCITY),this.opened="left"===this.position):(e=Math.min(e,-this._MIN_TRANSITION_VELOCITY),this.opened="right"===this.position);var l=this._FLING_INITIAL_SLOPE*n/e;this._styleTransitionDuration(l),this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION),this._resetDrawerTranslate(),this.debounce("_resetDrawerState",this._resetDrawerState,l)}},_styleTransitionDuration:function(t){this.style.transitionDuration=t+"ms",this.$.contentContainer.style.transitionDuration=t+"ms",this.$.scrim.style.transitionDuration=t+"ms"},_styleTransitionTimingFunction:function(t){this.$.contentContainer.style.transitionTimingFunction=t,this.$.scrim.style.transitionTimingFunction=t},_translateDrawer:function(t){var i=this.getWidth();"left"===this.position?(t=Math.max(-i,Math.min(t,0)),this.$.scrim.style.opacity=1+t/i):(t=Math.max(0,Math.min(t,i)),this.$.scrim.style.opacity=1-t/i),this.translate3d(t+"px","0","0",this.$.contentContainer)},_resetDrawerTranslate:function(){this.$.scrim.style.opacity="",this.transform("",this.$.contentContainer)},_resetDrawerState:function(){var t=this._drawerState;t===this._DRAWER_STATE.FLINGING&&(this._styleTransitionDuration(this.transitionDuration),this._styleTransitionTimingFunction(""),this.style.visibility=""),this._savedWidth=null,this.opened?this._drawerState=this.persistent?this._DRAWER_STATE.OPENED_PERSISTENT:this._DRAWER_STATE.OPENED:this._drawerState=this._DRAWER_STATE.CLOSED,t!==this._drawerState&&(this._drawerState===this._DRAWER_STATE.OPENED?(this._setKeyboardFocusTrap(),document.addEventListener("keydown",this._boundEscKeydownHandler),document.body.style.overflow="hidden"):(document.removeEventListener("keydown",this._boundEscKeydownHandler),document.body.style.overflow=""),t!==this._DRAWER_STATE.INIT&&this.fire("app-drawer-transitioned"))},resetLayout:function(){this.fire("app-reset-layout")},_setKeyboardFocusTrap:function(){if(!this.noFocusTrap){var t=['a[href]:not([tabindex="-1"])','area[href]:not([tabindex="-1"])','input:not([disabled]):not([tabindex="-1"])','select:not([disabled]):not([tabindex="-1"])','textarea:not([disabled]):not([tabindex="-1"])','button:not([disabled]):not([tabindex="-1"])','iframe:not([tabindex="-1"])','[tabindex]:not([tabindex="-1"])','[contentEditable=true]:not([tabindex="-1"])'].join(","),i=Object(a.a)(this).querySelectorAll(t);i.length>0?(this._firstTabStop=i[0],this._lastTabStop=i[i.length-1]):(this._firstTabStop=null,this._lastTabStop=null);var e=this.getAttribute("tabindex");e&&parseInt(e,10)>-1?this.focus():this._firstTabStop&&this._firstTabStop.focus()}},_tabKeydownHandler:function(t){if(!this.noFocusTrap){this._drawerState===this._DRAWER_STATE.OPENED&&9===t.keyCode&&(t.shiftKey?this._firstTabStop&&Object(a.a)(t).localTarget===this._firstTabStop&&(t.preventDefault(),this._lastTabStop.focus()):this._lastTabStop&&Object(a.a)(t).localTarget===this._lastTabStop&&(t.preventDefault(),this._firstTabStop.focus()))}},_openedPersistentChanged:function(t,i){this.toggleClass("visible",t&&!i,this.$.scrim),this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration)},_MIN_FLING_THRESHOLD:.2,_MIN_TRANSITION_VELOCITY:1.2,_FLING_TIMING_FUNCTION:"cubic-bezier(0.667, 1, 0.667, 1)",_FLING_INITIAL_SLOPE:1.5,_DRAWER_STATE:{INIT:0,OPENED:1,OPENED_PERSISTENT:2,CLOSED:3,TRACKING:4,FLINGING:5}})}}]);
//# sourceMappingURL=chunk.d5a09c02eb6120826a4f.js.map