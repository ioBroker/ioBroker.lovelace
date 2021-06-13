/*! For license information please see chunk.d47987280e3a4c6b5ce1.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[8090,1127],{14114:(t,i,e)=>{"use strict";e.d(i,{P:()=>n});const n=t=>(i,e)=>{if(i.constructor._observers){if(!i.constructor.hasOwnProperty("_observers")){const t=i.constructor._observers;i.constructor._observers=new Map,t.forEach(((t,e)=>i.constructor._observers.set(e,t)))}}else{i.constructor._observers=new Map;const t=i.updated;i.updated=function(i){t.call(this,i),i.forEach(((t,i)=>{const e=this.constructor._observers.get(i);void 0!==e&&e.call(this,this[i],t)}))}}i.constructor._observers.set(e,t)}},63207:(t,i,e)=>{"use strict";e(65660),e(15112);var n=e(9672),o=e(87156),a=e(50856),s=e(65233);(0,n.k)({_template:a.d`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:s.XY.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var i=(t||"").split(":");this._iconName=i.pop(),this._iconsetName=i.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&(0,o.vz)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,(0,o.vz)(this.root).appendChild(this._img))}})},15112:(t,i,e)=>{"use strict";e.d(i,{P:()=>o});e(65233);var n=e(9672);class o{constructor(t){o[" "](t),this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}get value(){var t=this.type,i=this.key;if(t&&i)return o.types[t]&&o.types[t][i]}set value(t){var i=this.type,e=this.key;i&&e&&(i=o.types[i]=o.types[i]||{},null==t?delete i[e]:i[e]=t)}get list(){if(this.type){var t=o.types[this.type];return t?Object.keys(t).map((function(t){return a[this.type][t]}),this):[]}}byKey(t){return this.key=t,this.value}}o[" "]=function(){},o.types={};var a=o.types;(0,n.k)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,i,e){var n=new o({type:t,key:i});return void 0!==e&&e!==n.value?n.value=e:this.value!==n.value&&(this.value=n.value),n},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new o({type:this.type,key:t}).value}})},54444:(t,i,e)=>{"use strict";e(65233);var n=e(9672),o=e(87156),a=e(50856);(0,n.k)({_template:a.d`
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
`,is:"paper-tooltip",hostAttributes:{role:"tooltip",tabindex:-1},properties:{for:{type:String,observer:"_findTarget"},manualMode:{type:Boolean,value:!1,observer:"_manualModeChanged"},position:{type:String,value:"bottom"},fitToVisibleBounds:{type:Boolean,value:!1},offset:{type:Number,value:14},marginTop:{type:Number,value:14},animationDelay:{type:Number,value:500,observer:"_delayChange"},animationEntry:{type:String,value:""},animationExit:{type:String,value:""},animationConfig:{type:Object,value:function(){return{entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]}}},_showing:{type:Boolean,value:!1}},listeners:{webkitAnimationEnd:"_onAnimationEnd"},get target(){var t=(0,o.vz)(this).parentNode,i=(0,o.vz)(this).getOwnerRoot();return this.for?(0,o.vz)(i).querySelector("#"+this.for):t.nodeType==Node.DOCUMENT_FRAGMENT_NODE?i.host:t},attached:function(){this._findTarget()},detached:function(){this.manualMode||this._removeListeners()},playAnimation:function(t){"entry"===t?this.show():"exit"===t&&this.hide()},cancelAnimation:function(){this.$.tooltip.classList.add("cancel-animation")},show:function(){if(!this._showing){if(""===(0,o.vz)(this).textContent.trim()){for(var t=!0,i=(0,o.vz)(this).getEffectiveChildNodes(),e=0;e<i.length;e++)if(""!==i[e].textContent.trim()){t=!1;break}if(t)return}this._showing=!0,this.$.tooltip.classList.remove("hidden"),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.updatePosition(),this._animationPlaying=!0,this.$.tooltip.classList.add(this._getAnimationType("entry"))}},hide:function(){if(this._showing){if(this._animationPlaying)return this._showing=!1,void this._cancelAnimation();this._onAnimationFinish(),this._showing=!1,this._animationPlaying=!0}},updatePosition:function(){if(this._target&&this.offsetParent){var t=this.offset;14!=this.marginTop&&14==this.offset&&(t=this.marginTop);var i,e,n=this.offsetParent.getBoundingClientRect(),o=this._target.getBoundingClientRect(),a=this.getBoundingClientRect(),s=(o.width-a.width)/2,r=(o.height-a.height)/2,l=o.left-n.left,u=o.top-n.top;switch(this.position){case"top":i=l+s,e=u-a.height-t;break;case"bottom":i=l+s,e=u+o.height+t;break;case"left":i=l-a.width-t,e=u+r;break;case"right":i=l+o.width+t,e=u+r}this.fitToVisibleBounds?(n.left+i+a.width>window.innerWidth?(this.style.right="0px",this.style.left="auto"):(this.style.left=Math.max(0,i)+"px",this.style.right="auto"),n.top+e+a.height>window.innerHeight?(this.style.bottom=n.height-u+t+"px",this.style.top="auto"):(this.style.top=Math.max(-n.top,e)+"px",this.style.bottom="auto")):(this.style.left=i+"px",this.style.top=e+"px")}},_addListeners:function(){this._target&&(this.listen(this._target,"mouseenter","show"),this.listen(this._target,"focus","show"),this.listen(this._target,"mouseleave","hide"),this.listen(this._target,"blur","hide"),this.listen(this._target,"tap","hide")),this.listen(this.$.tooltip,"animationend","_onAnimationEnd"),this.listen(this,"mouseenter","hide")},_findTarget:function(){this.manualMode||this._removeListeners(),this._target=this.target,this.manualMode||this._addListeners()},_delayChange:function(t){500!==t&&this.updateStyles({"--paper-tooltip-delay-in":t+"ms"})},_manualModeChanged:function(){this.manualMode?this._removeListeners():this._addListeners()},_cancelAnimation:function(){this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add("hidden")},_onAnimationFinish:function(){this._showing&&(this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add(this._getAnimationType("exit")))},_onAnimationEnd:function(){this._animationPlaying=!1,this._showing||(this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.add("hidden"))},_getAnimationType:function(t){if("entry"===t&&""!==this.animationEntry)return this.animationEntry;if("exit"===t&&""!==this.animationExit)return this.animationExit;if(this.animationConfig[t]&&"string"==typeof this.animationConfig[t][0].name){if(this.animationConfig[t][0].timing&&this.animationConfig[t][0].timing.delay&&0!==this.animationConfig[t][0].timing.delay){var i=this.animationConfig[t][0].timing.delay;"entry"===t?this.updateStyles({"--paper-tooltip-delay-in":i+"ms"}):"exit"===t&&this.updateStyles({"--paper-tooltip-delay-out":i+"ms"})}return this.animationConfig[t][0].name}},_removeListeners:function(){this._target&&(this.unlisten(this._target,"mouseenter","show"),this.unlisten(this._target,"focus","show"),this.unlisten(this._target,"mouseleave","hide"),this.unlisten(this._target,"blur","hide"),this.unlisten(this._target,"tap","hide")),this.unlisten(this.$.tooltip,"animationend","_onAnimationEnd"),this.unlisten(this,"mouseenter","hide")}})},68928:(t,i,e)=>{"use strict";e.d(i,{WU:()=>k});var n=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,o="[1-9]\\d?",a="\\d\\d",s="[^\\s]+",r=/\[([^]*?)\]/gm;function l(t,i){for(var e=[],n=0,o=t.length;n<o;n++)e.push(t[n].substr(0,i));return e}var u=function(t){return function(i,e){var n=e[t].map((function(t){return t.toLowerCase()})).indexOf(i.toLowerCase());return n>-1?n:null}};function h(t){for(var i=[],e=1;e<arguments.length;e++)i[e-1]=arguments[e];for(var n=0,o=i;n<o.length;n++){var a=o[n];for(var s in a)t[s]=a[s]}return t}var m=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],p=["January","February","March","April","May","June","July","August","September","October","November","December"],c=l(p,3),d={dayNamesShort:l(m,3),dayNames:m,monthNamesShort:c,monthNames:p,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},y=h({},d),f=function(t,i){for(void 0===i&&(i=2),t=String(t);t.length<i;)t="0"+t;return t},g={D:function(t){return String(t.getDate())},DD:function(t){return f(t.getDate())},Do:function(t,i){return i.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return f(t.getDay())},ddd:function(t,i){return i.dayNamesShort[t.getDay()]},dddd:function(t,i){return i.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return f(t.getMonth()+1)},MMM:function(t,i){return i.monthNamesShort[t.getMonth()]},MMMM:function(t,i){return i.monthNames[t.getMonth()]},YY:function(t){return f(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return f(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return f(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return f(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return f(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return f(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return f(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return f(t.getMilliseconds(),3)},a:function(t,i){return t.getHours()<12?i.amPm[0]:i.amPm[1]},A:function(t,i){return t.getHours()<12?i.amPm[0].toUpperCase():i.amPm[1].toUpperCase()},ZZ:function(t){var i=t.getTimezoneOffset();return(i>0?"-":"+")+f(100*Math.floor(Math.abs(i)/60)+Math.abs(i)%60,4)},Z:function(t){var i=t.getTimezoneOffset();return(i>0?"-":"+")+f(Math.floor(Math.abs(i)/60),2)+":"+f(Math.abs(i)%60,2)}},v=function(t){return+t-1},_=[null,o],b=[null,s],M=["isPm",s,function(t,i){var e=t.toLowerCase();return e===i.amPm[0]?0:e===i.amPm[1]?1:null}],w=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var i=(t+"").match(/([+-]|\d\d)/gi);if(i){var e=60*+i[1]+parseInt(i[2],10);return"+"===i[0]?e:-e}return 0}],S=(u("monthNamesShort"),u("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"}),k=function(t,i,e){if(void 0===i&&(i=S.default),void 0===e&&(e={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var o=[];i=(i=S[i]||i).replace(r,(function(t,i){return o.push(i),"@@@"}));var a=h(h({},y),e);return(i=i.replace(n,(function(i){return g[i](t,a)}))).replace(/@@@/g,(function(){return o.shift()}))}},98626:(t,i,e)=>{"use strict";function n(t){return new Promise(((i,e)=>{t.oncomplete=t.onsuccess=()=>i(t.result),t.onabort=t.onerror=()=>e(t.error)}))}function o(t,i){const e=indexedDB.open(t);e.onupgradeneeded=()=>e.result.createObjectStore(i);const o=n(e);return(t,e)=>o.then((n=>e(n.transaction(i,t).objectStore(i))))}let a;function s(){return a||(a=o("keyval-store","keyval")),a}function r(t,i=s()){return i("readonly",(i=>n(i.get(t))))}function l(t,i,e=s()){return e("readwrite",(e=>(e.put(i,t),n(e.transaction))))}function u(t=s()){return t("readwrite",(t=>(t.clear(),n(t.transaction))))}e.d(i,{ZH:()=>u,MT:()=>o,U2:()=>r,RV:()=>n,t8:()=>l})},76666:(t,i,e)=>{"use strict";e.d(i,{$:()=>n.$});var n=e(81471)},82816:(t,i,e)=>{"use strict";e.d(i,{o:()=>n.o});var n=e(49629)}}]);
//# sourceMappingURL=chunk.d47987280e3a4c6b5ce1.js.map