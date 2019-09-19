/*! For license information please see chunk.6994a0e42ef1f1967d33.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[56],Array(64).concat([function(t,e,i){"use strict";i.d(e,"c",function(){return a}),i.d(e,"b",function(){return s}),i.d(e,"a",function(){return n});const a=`${location.protocol}//${location.host}`,s=(t,e)=>t.callWS({type:"auth/sign_path",path:e}),n=()=>fetch("/auth/providers",{credentials:"same-origin"})},,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"b",function(){return n}),i.d(e,"c",function(){return r});const a=(t,e,i)=>new Promise((a,s)=>{const n=document.createElement(t);let r="src",o="body";switch(n.onload=()=>a(e),n.onerror=()=>s(e),t){case"script":n.async=!0,i&&(n.type=i);break;case"link":n.type="text/css",n.rel="stylesheet",r="href",o="head"}n[r]=e,document[o].appendChild(n)}),s=t=>a("link",t),n=t=>a("script",t),r=t=>a("script",t,"module")},,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";i.d(e,"a",function(){return a});i(5);const a={properties:{value:{type:Number,value:0,notify:!0,reflectToAttribute:!0},min:{type:Number,value:0,notify:!0},max:{type:Number,value:100,notify:!0},step:{type:Number,value:1,notify:!0},ratio:{type:Number,value:0,readOnly:!0,notify:!0}},observers:["_update(value, min, max, step)"],_calcRatio:function(t){return(this._clampValue(t)-this.min)/(this.max-this.min)},_clampValue:function(t){return Math.min(this.max,Math.max(this.min,this._calcStep(t)))},_calcStep:function(t){if(t=parseFloat(t),!this.step)return t;var e=Math.round((t-this.min)/this.step);return this.step<1?e/(1/this.step)+this.min:e*this.step+this.min},_validateValue:function(){var t=this._clampValue(this.value);return this.value=this.oldValue=isNaN(t)?this.oldValue:t,this.value!==t},_update:function(){this._validateValue(),this._setRatio(100*this._calcRatio(this.value))}}},,,,,,,function(t,e,i){"use strict";i.d(e,"a",function(){return a});const a=async(t,e)=>new Promise(i=>{const a=e(t,t=>{a(),i(t)})})},function(t,e,i){"use strict";i.d(e,"a",function(){return n});var a=i(9),s=i(18);const n=Object(a.a)(t=>(class extends t{fire(t,e,i){return i=i||{},Object(s.a)(i.node||this,t,e,i)}}))},,,,,,,function(t,e,i){"use strict";i(5);var a=i(60),s=i(61);const n={properties:{checked:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_checkedChanged"},toggles:{type:Boolean,value:!0,reflectToAttribute:!0},value:{type:String,value:"on",observer:"_valueChanged"}},observers:["_requiredChanged(required)"],created:function(){this._hasIronCheckedElementBehavior=!0},_getValidity:function(t){return this.disabled||!this.required||this.checked},_requiredChanged:function(){this.required?this.setAttribute("aria-required","true"):this.removeAttribute("aria-required")},_checkedChanged:function(){this.active=this.checked,this.fire("iron-change")},_valueChanged:function(){void 0!==this.value&&null!==this.value||(this.value="on")}},r=[a.a,s.a,n];var o=i(57),l=i(68);i.d(e,"a",function(){return h});const c={_checkedChanged:function(){n._checkedChanged.call(this),this.hasRipple()&&(this.checked?this._ripple.setAttribute("checked",""):this._ripple.removeAttribute("checked"))},_buttonStateChanged:function(){l.a._buttonStateChanged.call(this),this.disabled||this.isAttached&&(this.checked=this.active)}},h=[o.a,r,c]},function(t,e,i){var a=i(142),s=["renderMarkdown"];t.exports=function(){var t=new Worker(i.p+"85fc5402670cd61cfc0d.worker.js",{name:"[hash].worker.js"});return a(t,s),t}},,,,,,,,function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s}),i.d(e,"c",function(){return n});i(13);const a=(t,e)=>t.sendMessagePromise({type:"lovelace/config",force:e}),s=(t,e)=>t.callWS({type:"lovelace/config/save",config:e}),n=(t,e)=>t.subscribeEvents(e,"lovelace_updated")},,,,,,,,function(t,e,i){"use strict";var a=i(3),s=i(0),n=i(125),r=i.n(n),o=i(18);let l,c=class extends s.b{constructor(){super(...arguments),this.content="",this.allowSvg=!1,this._resize=()=>Object(o.a)(this,"iron-resize")}update(t){super.update(t),l||(l=r()()),this._render()}async _render(){this.innerHTML=await l.renderMarkdown(this.content,{breaks:!0,gfm:!0,tables:!0},{allowSvg:this.allowSvg}),this._resize();const t=document.createTreeWalker(this,1,null,!1);for(;t.nextNode();){const e=t.currentNode;e instanceof HTMLAnchorElement&&e.host!==document.location.host?(e.target="_blank",e.rel="noreferrer noopener"):e&&e.addEventListener("load",this._resize)}}};a.b([Object(s.f)()],c.prototype,"content",void 0),a.b([Object(s.f)({type:Boolean})],c.prototype,"allowSvg",void 0),c=a.b([Object(s.d)("ha-markdown")],c)},function(t,e){t.exports=function(t,e){var i=0,a={};t.addEventListener("message",function(e){var i=e.data;if("RPC"===i.type)if(i.id){var s=a[i.id];s&&(delete a[i.id],i.error?s[1](Object.assign(Error(i.error.message),i.error)):s[0](i.result))}else{var n=document.createEvent("Event");n.initEvent(i.method,!1,!1),n.data=i.params,t.dispatchEvent(n)}}),e.forEach(function(e){t[e]=function(){for(var s=[],n=arguments.length;n--;)s[n]=arguments[n];return new Promise(function(n,r){var o=++i;a[o]=[n,r],t.postMessage({type:"RPC",id:o,method:e,params:s})})}})}},,,function(t,e,i){"use strict";i(45),i(92),i(146),i(66);var a=i(32),s=i(60),n=i(109),r=i(57),o=i(6),l=i(36);const c=i(5).c`
  <style>
    :host {
      @apply --layout;
      @apply --layout-justified;
      @apply --layout-center;
      width: 200px;
      cursor: default;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      --paper-progress-active-color: var(--paper-slider-active-color, var(--google-blue-700));
      --paper-progress-secondary-color: var(--paper-slider-secondary-color, var(--google-blue-300));
      --paper-progress-disabled-active-color: var(--paper-slider-disabled-active-color, var(--paper-grey-400));
      --paper-progress-disabled-secondary-color: var(--paper-slider-disabled-secondary-color, var(--paper-grey-400));
      --calculated-paper-slider-height: var(--paper-slider-height, 2px);
    }

    /* focus shows the ripple */
    :host(:focus) {
      outline: none;
    }

    /**
      * NOTE(keanulee): Though :host-context is not universally supported, some pages
      * still rely on paper-slider being flipped when dir="rtl" is set on body. For full
      * compatibility, dir="rtl" must be explicitly set on paper-slider.
      */
    :dir(rtl) #sliderContainer {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    /**
      * NOTE(keanulee): This is separate from the rule above because :host-context may
      * not be recognized.
      */
    :host([dir="rtl"]) #sliderContainer {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    /**
      * NOTE(keanulee): Needed to override the :host-context rule (where supported)
      * to support LTR sliders in RTL pages.
      */
    :host([dir="ltr"]) #sliderContainer {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }

    #sliderContainer {
      position: relative;
      width: 100%;
      height: calc(30px + var(--calculated-paper-slider-height));
      margin-left: calc(15px + var(--calculated-paper-slider-height)/2);
      margin-right: calc(15px + var(--calculated-paper-slider-height)/2);
    }

    #sliderContainer:focus {
      outline: 0;
    }

    #sliderContainer.editable {
      margin-top: 12px;
      margin-bottom: 12px;
    }

    .bar-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
    }

    .ring > .bar-container {
      left: calc(5px + var(--calculated-paper-slider-height)/2);
      transition: left 0.18s ease;
    }

    .ring.expand.dragging > .bar-container {
      transition: none;
    }

    .ring.expand:not(.pin) > .bar-container {
      left: calc(8px + var(--calculated-paper-slider-height)/2);
    }

    #sliderBar {
      padding: 15px 0;
      width: 100%;
      background-color: var(--paper-slider-bar-color, transparent);
      --paper-progress-container-color: var(--paper-slider-container-color, var(--paper-grey-400));
      --paper-progress-height: var(--calculated-paper-slider-height);
    }

    .slider-markers {
      position: absolute;
      /* slider-knob is 30px + the slider-height so that the markers should start at a offset of 15px*/
      top: 15px;
      height: var(--calculated-paper-slider-height);
      left: 0;
      right: -1px;
      box-sizing: border-box;
      pointer-events: none;
      @apply --layout-horizontal;
    }

    .slider-marker {
      @apply --layout-flex;
    }
    .slider-markers::after,
    .slider-marker::after {
      content: "";
      display: block;
      margin-left: -1px;
      width: 2px;
      height: var(--calculated-paper-slider-height);
      border-radius: 50%;
      background-color: var(--paper-slider-markers-color, #000);
    }

    .slider-knob {
      position: absolute;
      left: 0;
      top: 0;
      margin-left: calc(-15px - var(--calculated-paper-slider-height)/2);
      width: calc(30px + var(--calculated-paper-slider-height));
      height: calc(30px + var(--calculated-paper-slider-height));
    }

    .transiting > .slider-knob {
      transition: left 0.08s ease;
    }

    .slider-knob:focus {
      outline: none;
    }

    .slider-knob.dragging {
      transition: none;
    }

    .snaps > .slider-knob.dragging {
      transition: -webkit-transform 0.08s ease;
      transition: transform 0.08s ease;
    }

    .slider-knob-inner {
      margin: 10px;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      background-color: var(--paper-slider-knob-color, var(--google-blue-700));
      border: 2px solid var(--paper-slider-knob-color, var(--google-blue-700));
      border-radius: 50%;

      -moz-box-sizing: border-box;
      box-sizing: border-box;

      transition-property: -webkit-transform, background-color, border;
      transition-property: transform, background-color, border;
      transition-duration: 0.18s;
      transition-timing-function: ease;
    }

    .expand:not(.pin) > .slider-knob > .slider-knob-inner {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }

    .ring > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-knob-start-color, transparent);
      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
    }

    .slider-knob-inner::before {
      background-color: var(--paper-slider-pin-color, var(--google-blue-700));
    }

    .pin > .slider-knob > .slider-knob-inner::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -13px;
      width: 26px;
      height: 26px;
      border-radius: 50% 50% 50% 0;

      -webkit-transform: rotate(-45deg) scale(0) translate(0);
      transform: rotate(-45deg) scale(0) translate(0);
    }

    .slider-knob-inner::before,
    .slider-knob-inner::after {
      transition: -webkit-transform .18s ease, background-color .18s ease;
      transition: transform .18s ease, background-color .18s ease;
    }

    .pin.ring > .slider-knob > .slider-knob-inner::before {
      background-color: var(--paper-slider-pin-start-color, var(--paper-grey-400));
    }

    .pin.expand > .slider-knob > .slider-knob-inner::before {
      -webkit-transform: rotate(-45deg) scale(1) translate(17px, -17px);
      transform: rotate(-45deg) scale(1) translate(17px, -17px);
    }

    .pin > .slider-knob > .slider-knob-inner::after {
      content: attr(value);
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -16px;
      width: 32px;
      height: 26px;
      text-align: center;
      color: var(--paper-slider-font-color, #fff);
      font-size: 10px;

      -webkit-transform: scale(0) translate(0);
      transform: scale(0) translate(0);
    }

    .pin.expand > .slider-knob > .slider-knob-inner::after {
      -webkit-transform: scale(1) translate(0, -17px);
      transform: scale(1) translate(0, -17px);
    }

    /* paper-input */
    .slider-input {
      width: 50px;
      overflow: hidden;
      --paper-input-container-input: {
        text-align: center;
        @apply --paper-slider-input-container-input;
      };
      @apply --paper-slider-input;
    }

    /* disabled state */
    #sliderContainer.disabled {
      pointer-events: none;
    }

    .disabled > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      border: 2px solid var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      -webkit-transform: scale3d(0.75, 0.75, 1);
      transform: scale3d(0.75, 0.75, 1);
    }

    .disabled.ring > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-knob-start-color, transparent);
      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
    }

    paper-ripple {
      color: var(--paper-slider-knob-color, var(--google-blue-700));
    }
  </style>

  <div id="sliderContainer" class\$="[[_getClassNames(disabled, pin, snaps, immediateValue, min, expand, dragging, transiting, editable)]]">
    <div class="bar-container">
      <paper-progress disabled\$="[[disabled]]" id="sliderBar" aria-hidden="true" min="[[min]]" max="[[max]]" step="[[step]]" value="[[immediateValue]]" secondary-progress="[[secondaryProgress]]" on-down="_bardown" on-up="_resetKnob" on-track="_bartrack" on-tap="_barclick">
      </paper-progress>
    </div>

    <template is="dom-if" if="[[snaps]]">
      <div class="slider-markers">
        <template is="dom-repeat" items="[[markers]]">
          <div class="slider-marker"></div>
        </template>
      </div>
    </template>

    <div id="sliderKnob" class="slider-knob" on-down="_knobdown" on-up="_resetKnob" on-track="_onTrack" on-transitionend="_knobTransitionEnd">
        <div class="slider-knob-inner" value\$="[[immediateValue]]"></div>
    </div>
  </div>

  <template is="dom-if" if="[[editable]]">
    <paper-input id="input" type="number" step="[[step]]" min="[[min]]" max="[[max]]" class="slider-input" disabled\$="[[disabled]]" value="[[immediateValue]]" on-change="_changeValue" on-keydown="_inputKeyDown" no-label-float>
    </paper-input>
  </template>
`;c.setAttribute("strip-whitespace",""),Object(o.a)({_template:c,is:"paper-slider",behaviors:[a.a,s.a,r.a,n.a],properties:{value:{type:Number,value:0},snaps:{type:Boolean,value:!1,notify:!0},pin:{type:Boolean,value:!1,notify:!0},secondaryProgress:{type:Number,value:0,notify:!0,observer:"_secondaryProgressChanged"},editable:{type:Boolean,value:!1},immediateValue:{type:Number,value:0,readOnly:!0,notify:!0},maxMarkers:{type:Number,value:0,notify:!0},expand:{type:Boolean,value:!1,readOnly:!0},ignoreBarTouch:{type:Boolean,value:!1},dragging:{type:Boolean,value:!1,readOnly:!0,notify:!0},transiting:{type:Boolean,value:!1,readOnly:!0},markers:{type:Array,readOnly:!0,value:function(){return[]}}},observers:["_updateKnob(value, min, max, snaps, step)","_valueChanged(value)","_immediateValueChanged(immediateValue)","_updateMarkers(maxMarkers, min, max, snaps)"],hostAttributes:{role:"slider",tabindex:0},keyBindings:{left:"_leftKey",right:"_rightKey","down pagedown home":"_decrementKey","up pageup end":"_incrementKey"},ready:function(){this.ignoreBarTouch&&Object(l.f)(this.$.sliderBar,"auto")},increment:function(){this.value=this._clampValue(this.value+this.step)},decrement:function(){this.value=this._clampValue(this.value-this.step)},_updateKnob:function(t,e,i,a,s){this.setAttribute("aria-valuemin",e),this.setAttribute("aria-valuemax",i),this.setAttribute("aria-valuenow",t),this._positionKnob(100*this._calcRatio(t))},_valueChanged:function(){this.fire("value-change",{composed:!0})},_immediateValueChanged:function(){this.dragging?this.fire("immediate-value-change",{composed:!0}):this.value=this.immediateValue},_secondaryProgressChanged:function(){this.secondaryProgress=this._clampValue(this.secondaryProgress)},_expandKnob:function(){this._setExpand(!0)},_resetKnob:function(){this.cancelDebouncer("expandKnob"),this._setExpand(!1)},_positionKnob:function(t){this._setImmediateValue(this._calcStep(this._calcKnobPosition(t))),this._setRatio(100*this._calcRatio(this.immediateValue)),this.$.sliderKnob.style.left=this.ratio+"%",this.dragging&&(this._knobstartx=this.ratio*this._w/100,this.translate3d(0,0,0,this.$.sliderKnob))},_calcKnobPosition:function(t){return(this.max-this.min)*t/100+this.min},_onTrack:function(t){switch(t.stopPropagation(),t.detail.state){case"start":this._trackStart(t);break;case"track":this._trackX(t);break;case"end":this._trackEnd()}},_trackStart:function(t){this._setTransiting(!1),this._w=this.$.sliderBar.offsetWidth,this._x=this.ratio*this._w/100,this._startx=this._x,this._knobstartx=this._startx,this._minx=-this._startx,this._maxx=this._w-this._startx,this.$.sliderKnob.classList.add("dragging"),this._setDragging(!0)},_trackX:function(t){this.dragging||this._trackStart(t);var e=this._isRTL?-1:1,i=Math.min(this._maxx,Math.max(this._minx,t.detail.dx*e));this._x=this._startx+i;var a=this._calcStep(this._calcKnobPosition(this._x/this._w*100));this._setImmediateValue(a);var s=this._calcRatio(this.immediateValue)*this._w-this._knobstartx;this.translate3d(s+"px",0,0,this.$.sliderKnob)},_trackEnd:function(){var t=this.$.sliderKnob.style;this.$.sliderKnob.classList.remove("dragging"),this._setDragging(!1),this._resetKnob(),this.value=this.immediateValue,t.transform=t.webkitTransform="",this.fire("change",{composed:!0})},_knobdown:function(t){this._expandKnob(),t.preventDefault(),this.focus()},_bartrack:function(t){this._allowBarEvent(t)&&this._onTrack(t)},_barclick:function(t){this._w=this.$.sliderBar.offsetWidth;var e=this.$.sliderBar.getBoundingClientRect(),i=(t.detail.x-e.left)/this._w*100;this._isRTL&&(i=100-i);var a=this.ratio;this._setTransiting(!0),this._positionKnob(i),a===this.ratio&&this._setTransiting(!1),this.async(function(){this.fire("change",{composed:!0})}),t.preventDefault(),this.focus()},_bardown:function(t){this._allowBarEvent(t)&&(this.debounce("expandKnob",this._expandKnob,60),this._barclick(t))},_knobTransitionEnd:function(t){t.target===this.$.sliderKnob&&this._setTransiting(!1)},_updateMarkers:function(t,e,i,a){a||this._setMarkers([]);var s=Math.round((i-e)/this.step);s>t&&(s=t),(s<0||!isFinite(s))&&(s=0),this._setMarkers(new Array(s))},_mergeClasses:function(t){return Object.keys(t).filter(function(e){return t[e]}).join(" ")},_getClassNames:function(){return this._mergeClasses({disabled:this.disabled,pin:this.pin,snaps:this.snaps,ring:this.immediateValue<=this.min,expand:this.expand,dragging:this.dragging,transiting:this.transiting,editable:this.editable})},_allowBarEvent:function(t){return!this.ignoreBarTouch||t.detail.sourceEvent instanceof MouseEvent},get _isRTL(){return void 0===this.__isRTL&&(this.__isRTL="rtl"===window.getComputedStyle(this).direction),this.__isRTL},_leftKey:function(t){this._isRTL?this._incrementKey(t):this._decrementKey(t)},_rightKey:function(t){this._isRTL?this._decrementKey(t):this._incrementKey(t)},_incrementKey:function(t){this.disabled||("end"===t.detail.key?this.value=this.max:this.increment(),this.fire("change"),t.preventDefault())},_decrementKey:function(t){this.disabled||("home"===t.detail.key?this.value=this.min:this.decrement(),this.fire("change"),t.preventDefault())},_changeValue:function(t){this.value=t.target.value,this.fire("change",{composed:!0})},_inputKeyDown:function(t){t.stopPropagation()},_createRipple:function(){return this._rippleContainer=this.$.sliderKnob,r.b._createRipple.call(this)},_focusedChanged:function(t){t&&this.ensureRipple(),this.hasRipple()&&(this._ripple.style.display=t?"":"none",this._ripple.holdDown=t)}})},function(t,e,i){"use strict";i(5),i(45),i(66);var a=i(109),s=i(6),n=i(4);Object(s.a)({_template:n.a`
    <style>
      :host {
        display: block;
        width: 200px;
        position: relative;
        overflow: hidden;
      }

      :host([hidden]), [hidden] {
        display: none !important;
      }

      #progressContainer {
        @apply --paper-progress-container;
        position: relative;
      }

      #progressContainer,
      /* the stripe for the indeterminate animation*/
      .indeterminate::after {
        height: var(--paper-progress-height, 4px);
      }

      #primaryProgress,
      #secondaryProgress,
      .indeterminate::after {
        @apply --layout-fit;
      }

      #progressContainer,
      .indeterminate::after {
        background: var(--paper-progress-container-color, var(--google-grey-300));
      }

      :host(.transiting) #primaryProgress,
      :host(.transiting) #secondaryProgress {
        -webkit-transition-property: -webkit-transform;
        transition-property: transform;

        /* Duration */
        -webkit-transition-duration: var(--paper-progress-transition-duration, 0.08s);
        transition-duration: var(--paper-progress-transition-duration, 0.08s);

        /* Timing function */
        -webkit-transition-timing-function: var(--paper-progress-transition-timing-function, ease);
        transition-timing-function: var(--paper-progress-transition-timing-function, ease);

        /* Delay */
        -webkit-transition-delay: var(--paper-progress-transition-delay, 0s);
        transition-delay: var(--paper-progress-transition-delay, 0s);
      }

      #primaryProgress,
      #secondaryProgress {
        @apply --layout-fit;
        -webkit-transform-origin: left center;
        transform-origin: left center;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        will-change: transform;
      }

      #primaryProgress {
        background: var(--paper-progress-active-color, var(--google-green-500));
      }

      #secondaryProgress {
        background: var(--paper-progress-secondary-color, var(--google-green-100));
      }

      :host([disabled]) #primaryProgress {
        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));
      }

      :host([disabled]) #secondaryProgress {
        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));
      }

      :host(:not([disabled])) #primaryProgress.indeterminate {
        -webkit-transform-origin: right center;
        transform-origin: right center;
        -webkit-animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      :host(:not([disabled])) #primaryProgress.indeterminate::after {
        content: "";
        -webkit-transform-origin: center center;
        transform-origin: center center;

        -webkit-animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      @-webkit-keyframes indeterminate-bar {
        0% {
          -webkit-transform: scaleX(1) translateX(-100%);
        }
        50% {
          -webkit-transform: scaleX(1) translateX(0%);
        }
        75% {
          -webkit-transform: scaleX(1) translateX(0%);
          -webkit-animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          -webkit-transform: scaleX(0) translateX(0%);
        }
      }

      @-webkit-keyframes indeterminate-splitter {
        0% {
          -webkit-transform: scaleX(.75) translateX(-125%);
        }
        30% {
          -webkit-transform: scaleX(.75) translateX(-125%);
          -webkit-animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
        100% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
      }

      @keyframes indeterminate-bar {
        0% {
          transform: scaleX(1) translateX(-100%);
        }
        50% {
          transform: scaleX(1) translateX(0%);
        }
        75% {
          transform: scaleX(1) translateX(0%);
          animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          transform: scaleX(0) translateX(0%);
        }
      }

      @keyframes indeterminate-splitter {
        0% {
          transform: scaleX(.75) translateX(-125%);
        }
        30% {
          transform: scaleX(.75) translateX(-125%);
          animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          transform: scaleX(.75) translateX(125%);
        }
        100% {
          transform: scaleX(.75) translateX(125%);
        }
      }
    </style>

    <div id="progressContainer">
      <div id="secondaryProgress" hidden\$="[[_hideSecondaryProgress(secondaryRatio)]]"></div>
      <div id="primaryProgress"></div>
    </div>
`,is:"paper-progress",behaviors:[a.a],properties:{secondaryProgress:{type:Number,value:0},secondaryRatio:{type:Number,value:0,readOnly:!0},indeterminate:{type:Boolean,value:!1,observer:"_toggleIndeterminate"},disabled:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_disabledChanged"}},observers:["_progressChanged(secondaryProgress, value, min, max, indeterminate)"],hostAttributes:{role:"progressbar"},_toggleIndeterminate:function(t){this.toggleClass("indeterminate",t,this.$.primaryProgress)},_transformProgress:function(t,e){var i="scaleX("+e/100+")";t.style.transform=t.style.webkitTransform=i},_mainRatioChanged:function(t){this._transformProgress(this.$.primaryProgress,t)},_progressChanged:function(t,e,i,a,s){t=this._clampValue(t),e=this._clampValue(e);var n=100*this._calcRatio(t),r=100*this._calcRatio(e);this._setSecondaryRatio(n),this._transformProgress(this.$.secondaryProgress,n),this._transformProgress(this.$.primaryProgress,r),this.secondaryProgress=t,s?this.removeAttribute("aria-valuenow"):this.setAttribute("aria-valuenow",e),this.setAttribute("aria-valuemin",i),this.setAttribute("aria-valuemax",a)},_disabledChanged:function(t){this.setAttribute("aria-disabled",t?"true":"false")},_hideSecondaryProgress:function(t){return 0===t}})},function(t,e,i){"use strict";i(5),i(42);var a=i(124),s=i(57),n=i(6),r=i(4),o=i(67);const l=r.a`<style>
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

<div id="checkboxLabel"><slot></slot></div>`;l.setAttribute("strip-whitespace",""),Object(n.a)({_template:l,is:"paper-checkbox",behaviors:[a.a],hostAttributes:{role:"checkbox","aria-checked":!1,tabindex:0},properties:{ariaActiveAttribute:{type:String,value:"aria-checked"}},attached:function(){Object(o.a)(this,function(){if("-1px"===this.getComputedStyleValue("--calculated-paper-checkbox-ink-size").trim()){var t=this.getComputedStyleValue("--calculated-paper-checkbox-size").trim(),e="px",i=t.match(/[A-Za-z]+$/);null!==i&&(e=i[0]);var a=parseFloat(t),s=8/3*a;"px"===e&&(s=Math.floor(s))%2!=a%2&&s++,this.updateStyles({"--paper-checkbox-ink-size":s+e})}})},_computeCheckboxClass:function(t,e){var i="";return t&&(i+="checked "),e&&(i+="invalid"),i},_computeCheckmarkClass:function(t){return t?"":"hidden"},_createRipple:function(){return this._rippleContainer=this.$.checkboxContainer,s.b._createRipple.call(this)}})},,,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";var a=i(215);e.a=t=>void 0===t.attributes.friendly_name?Object(a.a)(t.entity_id).replace(/_/g," "):t.attributes.friendly_name||""},function(t,e,i){"use strict";var a=i(9);e.a=Object(a.a)(t=>(class extends t{static get properties(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}__computeLocalize(t){return t}}))},function(t,e,i){"use strict";i.d(e,"a",function(){return n});i(108);const a=customElements.get("iron-icon");let s=!1;class n extends a{listen(t,e,a){super.listen(t,e,a),s||"mdi"!==this._iconsetName||(s=!0,i.e(50).then(i.bind(null,230)))}}customElements.define("ha-icon",n)},,function(t,e,i){"use strict";i(5);const a=i(4).a`
/* Most common used flex styles*/
<dom-module id="iron-flex">
  <template>
    <style>
      .layout.horizontal,
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.inline {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      }

      .layout.horizontal {
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      }

      .layout.vertical {
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }

      .layout.wrap {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .layout.no-wrap {
        -ms-flex-wrap: nowrap;
        -webkit-flex-wrap: nowrap;
        flex-wrap: nowrap;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-auto {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      }

      .flex-none {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      }
    </style>
  </template>
</dom-module>
/* Basic flexbox reverse styles */
<dom-module id="iron-flex-reverse">
  <template>
    <style>
      .layout.horizontal-reverse,
      .layout.vertical-reverse {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.horizontal-reverse {
        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      }

      .layout.vertical-reverse {
        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      }

      .layout.wrap-reverse {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      }
    </style>
  </template>
</dom-module>
/* Flexbox alignment */
<dom-module id="iron-flex-alignment">
  <template>
    <style>
      /**
       * Alignment in cross axis.
       */
      .layout.start {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.end {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      }

      .layout.baseline {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      }

      /**
       * Alignment in main axis.
       */
      .layout.start-justified {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .layout.end-justified {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      }

      .layout.around-justified {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      }

      .layout.justified {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      }

      /**
       * Self alignment.
       */
      .self-start {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      }

      .self-center {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      }

      .self-end {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      }

      .self-stretch {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      }

      .self-baseline {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      }

      /**
       * multi-line alignment in main axis.
       */
      .layout.start-aligned {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      }

      .layout.end-aligned {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      }

      .layout.center-aligned {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      }

      .layout.between-aligned {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      }

      .layout.around-aligned {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      }
    </style>
  </template>
</dom-module>
/* Non-flexbox positioning helper styles */
<dom-module id="iron-flex-factors">
  <template>
    <style>
      .flex,
      .flex-1 {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-2 {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      }

      .flex-3 {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      }

      .flex-4 {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      }

      .flex-5 {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      }

      .flex-6 {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      }

      .flex-7 {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      }

      .flex-8 {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      }

      .flex-9 {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      }

      .flex-10 {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      }

      .flex-11 {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      }

      .flex-12 {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      }
    </style>
  </template>
</dom-module>
<dom-module id="iron-positioning">
  <template>
    <style>
      .block {
        display: block;
      }

      [hidden] {
        display: none !important;
      }

      .invisible {
        visibility: hidden !important;
      }

      .relative {
        position: relative;
      }

      .fit {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      body.fullbleed {
        margin: 0;
        height: 100vh;
      }

      .scroll {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      }

      /* fixed position */
      .fixed-bottom,
      .fixed-left,
      .fixed-right,
      .fixed-top {
        position: fixed;
      }

      .fixed-top {
        top: 0;
        left: 0;
        right: 0;
      }

      .fixed-right {
        top: 0;
        right: 0;
        bottom: 0;
      }

      .fixed-bottom {
        right: 0;
        bottom: 0;
        left: 0;
      }

      .fixed-left {
        top: 0;
        bottom: 0;
        left: 0;
      }
    </style>
  </template>
</dom-module>
`;a.setAttribute("style","display: none;"),document.head.appendChild(a.content)},,,,,function(t,e,i){"use strict";var a=i(3),s=i(0),n=(i(169),i(180)),r=i(198);class o extends s.a{render(){const t=this.stateObj;return t?s.e`
      <ha-icon
        id="icon"
        data-domain=${Object(n.a)(t)}
        data-state=${t.state}
        .icon=${this.overrideIcon||Object(r.a)(t)}
      ></ha-icon>
    `:s.e``}updated(t){if(!t.has("stateObj")||!this.stateObj)return;const e=this.stateObj,i={color:"",filter:""},a={backgroundImage:""};if(e)if(e.attributes.entity_picture&&!this.overrideIcon||this.overrideImage){let t=this.overrideImage||e.attributes.entity_picture;this.hass&&(t=this.hass.hassUrl(t)),a.backgroundImage=`url(${t})`,i.display="none"}else{if(e.attributes.hs_color){const t=e.attributes.hs_color[0],a=e.attributes.hs_color[1];a>10&&(i.color=`hsl(${t}, 100%, ${100-a/2}%)`)}if(e.attributes.brightness){const t=e.attributes.brightness;if("number"!=typeof t){const i=`Type error: state-badge expected number, but type of ${e.entity_id}.attributes.brightness is ${typeof t} (${t})`;console.warn(i)}i.filter=`brightness(${(t+245)/5}%)`}}Object.assign(this._icon.style,i),Object.assign(this.style,a)}static get styles(){return s.c`
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
      }

      ha-icon {
        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;
      }

      /* Color the icon if light or sun is on */
      ha-icon[data-domain="light"][data-state="on"],
      ha-icon[data-domain="switch"][data-state="on"],
      ha-icon[data-domain="binary_sensor"][data-state="on"],
      ha-icon[data-domain="fan"][data-state="on"],
      ha-icon[data-domain="sun"][data-state="above_horizon"] {
        color: var(--paper-item-icon-active-color, #fdd835);
      }

      /* Color the icon if unavailable */
      ha-icon[data-state="unavailable"] {
        color: var(--state-icon-unavailable-color);
      }
    `}}a.b([Object(s.f)()],o.prototype,"stateObj",void 0),a.b([Object(s.f)()],o.prototype,"overrideIcon",void 0),a.b([Object(s.f)()],o.prototype,"overrideImage",void 0),a.b([Object(s.g)("ha-icon")],o.prototype,"_icon",void 0),customElements.define("state-badge",o)},function(t,e,i){"use strict";var a=i(3),s=i(0);class n extends s.a{static get styles(){return s.c`
      :host {
        background: var(
          --ha-card-background,
          var(--paper-card-background-color, white)
        );
        border-radius: var(--ha-card-border-radius, 2px);
        box-shadow: var(
          --ha-card-box-shadow,
          0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 1px 5px 0 rgba(0, 0, 0, 0.12),
          0 3px 1px -2px rgba(0, 0, 0, 0.2)
        );
        color: var(--primary-text-color);
        display: block;
        transition: all 0.3s ease-out;
        position: relative;
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
    `}render(){return s.e`
      ${this.header?s.e`
            <div class="card-header">${this.header}</div>
          `:s.e``}
      <slot></slot>
    `}}a.b([Object(s.f)()],n.prototype,"header",void 0),customElements.define("ha-card",n)},,,function(t,e,i){"use strict";i.d(e,"a",function(){return s});var a=i(119);function s(t){return Object(a.a)(t.entity_id)}},,,function(t,e,i){"use strict";i.d(e,"a",function(){return n});var a=i(118);const s={alert:"hass:alert",alexa:"hass:amazon-alexa",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",google_assistant:"hass:google-assistant",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weather:"hass:weather-cloudy",weblink:"hass:open-in-new"};function n(t,e){if(t in s)return s[t];switch(t){case"alarm_control_panel":switch(e){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return e&&"off"===e?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===e?"hass:window-closed":"hass:window-open";case"lock":return e&&"unlocked"===e?"hass:lock-open":"hass:lock";case"media_player":return e&&"off"!==e&&"idle"!==e?"hass:cast-connected":"hass:cast";case"zwave":switch(e){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+t+" ("+e+")"),a.a}}},,,,function(t,e,i){"use strict";i.d(e,"a",function(){return a});const a=(t,e,i=!1)=>{let a;return function(...s){const n=this,r=i&&!a;clearTimeout(a),a=setTimeout(()=>{a=null,i||t.apply(n,s)},e),r&&t.apply(n,s)}}},function(t,e,i){"use strict";i.d(e,"a",function(){return a});const a=(t,e)=>0!=(t.attributes.supported_features&e)},,function(t,e,i){"use strict";var a=i(180),s=i(201),n=i(236),r=i(207);e.a=(t,e,i)=>{let o;const l=Object(a.a)(e);if("binary_sensor"===l)e.attributes.device_class&&(o=t(`state.${l}.${e.attributes.device_class}.${e.state}`)),o||(o=t(`state.${l}.default.${e.state}`));else if(e.attributes.unit_of_measurement&&!["unknown","unavailable"].includes(e.state))o=e.state+" "+e.attributes.unit_of_measurement;else if("input_datetime"===l){let t;if(e.attributes.has_time)if(e.attributes.has_date)t=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day,e.attributes.hour,e.attributes.minute),o=Object(s.a)(t,i);else{const a=new Date;t=new Date(a.getFullYear(),a.getMonth(),a.getDay(),e.attributes.hour,e.attributes.minute),o=Object(r.a)(t,i)}else t=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day),o=Object(n.a)(t,i)}else o="zwave"===l?["initializing","dead"].includes(e.state)?t(`state.zwave.query_stage.${e.state}`,"query_stage",e.attributes.query_stage):t(`state.zwave.default.${e.state}`):t(`state.${l}.${e.state}`);return o||(o=t(`state.default.${e.state}`)||t(`component.${l}.state.${e.state}`)||e.state),o}},,function(t,e,i){"use strict";i(5),i(45),i(66),i(42);var a=i(124),s=i(68),n=i(6),r=i(36),o=i(4),l=i(67);const c=o.a`

    <style>
      :host {
        display: inline-block;
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-common-base;
      }

      :host([disabled]) {
        pointer-events: none;
      }

      :host(:focus) {
        outline:none;
      }

      .toggle-bar {
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 8px;
        pointer-events: none;
        opacity: 0.4;
        transition: background-color linear .08s;
        background-color: var(--paper-toggle-button-unchecked-bar-color, #000000);

        @apply --paper-toggle-button-unchecked-bar;
      }

      .toggle-button {
        position: absolute;
        top: -3px;
        left: 0;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.6);
        transition: -webkit-transform linear .08s, background-color linear .08s;
        transition: transform linear .08s, background-color linear .08s;
        will-change: transform;
        background-color: var(--paper-toggle-button-unchecked-button-color, var(--paper-grey-50));

        @apply --paper-toggle-button-unchecked-button;
      }

      .toggle-button.dragging {
        -webkit-transition: none;
        transition: none;
      }

      :host([checked]:not([disabled])) .toggle-bar {
        opacity: 0.5;
        background-color: var(--paper-toggle-button-checked-bar-color, var(--primary-color));

        @apply --paper-toggle-button-checked-bar;
      }

      :host([disabled]) .toggle-bar {
        background-color: #000;
        opacity: 0.12;
      }

      :host([checked]) .toggle-button {
        -webkit-transform: translate(16px, 0);
        transform: translate(16px, 0);
      }

      :host([checked]:not([disabled])) .toggle-button {
        background-color: var(--paper-toggle-button-checked-button-color, var(--primary-color));

        @apply --paper-toggle-button-checked-button;
      }

      :host([disabled]) .toggle-button {
        background-color: #bdbdbd;
        opacity: 1;
      }

      .toggle-ink {
        position: absolute;
        top: -14px;
        left: -14px;
        right: auto;
        bottom: auto;
        width: 48px;
        height: 48px;
        opacity: 0.5;
        pointer-events: none;
        color: var(--paper-toggle-button-unchecked-ink-color, var(--primary-text-color));

        @apply --paper-toggle-button-unchecked-ink;
      }

      :host([checked]) .toggle-ink {
        color: var(--paper-toggle-button-checked-ink-color, var(--primary-color));

        @apply --paper-toggle-button-checked-ink;
      }

      .toggle-container {
        display: inline-block;
        position: relative;
        width: 36px;
        height: 14px;
        /* The toggle button has an absolute position of -3px; The extra 1px
        /* accounts for the toggle button shadow box. */
        margin: 4px 1px;
      }

      .toggle-label {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        padding-left: var(--paper-toggle-button-label-spacing, 8px);
        pointer-events: none;
        color: var(--paper-toggle-button-label-color, var(--primary-text-color));
      }

      /* invalid state */
      :host([invalid]) .toggle-bar {
        background-color: var(--paper-toggle-button-invalid-bar-color, var(--error-color));
      }

      :host([invalid]) .toggle-button {
        background-color: var(--paper-toggle-button-invalid-button-color, var(--error-color));
      }

      :host([invalid]) .toggle-ink {
        color: var(--paper-toggle-button-invalid-ink-color, var(--error-color));
      }
    </style>

    <div class="toggle-container">
      <div id="toggleBar" class="toggle-bar"></div>
      <div id="toggleButton" class="toggle-button"></div>
    </div>

    <div class="toggle-label"><slot></slot></div>

  `;c.setAttribute("strip-whitespace",""),Object(n.a)({_template:c,is:"paper-toggle-button",behaviors:[a.a],hostAttributes:{role:"button","aria-pressed":"false",tabindex:0},properties:{},listeners:{track:"_ontrack"},attached:function(){Object(l.a)(this,function(){Object(r.f)(this,"pan-y")})},_ontrack:function(t){var e=t.detail;"start"===e.state?this._trackStart(e):"track"===e.state?this._trackMove(e):"end"===e.state&&this._trackEnd(e)},_trackStart:function(t){this._width=this.$.toggleBar.offsetWidth/2,this._trackChecked=this.checked,this.$.toggleButton.classList.add("dragging")},_trackMove:function(t){var e=t.dx;this._x=Math.min(this._width,Math.max(0,this._trackChecked?this._width+e:e)),this.translate3d(this._x+"px",0,0,this.$.toggleButton),this._userActivate(this._x>this._width/2)},_trackEnd:function(t){this.$.toggleButton.classList.remove("dragging"),this.transform("",this.$.toggleButton)},_createRipple:function(){this._rippleContainer=this.$.toggleButton;var t=s.a._createRipple();return t.id="ink",t.setAttribute("recenters",""),t.classList.add("circle","toggle-ink"),t}})},,,function(t,e,i){"use strict";var a=i(2),s=i(31),n=i(203),r=i(168);customElements.define("ha-relative-time",class extends(Object(r.a)(s.a)){static get properties(){return{hass:Object,datetime:{type:String,observer:"datetimeChanged"},datetimeObj:{type:Object,observer:"datetimeObjChanged"},parsedDateTime:Object}}constructor(){super(),this.updateRelative=this.updateRelative.bind(this)}connectedCallback(){super.connectedCallback(),this.updateInterval=setInterval(this.updateRelative,6e4)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.updateInterval)}datetimeChanged(t){this.parsedDateTime=t?new Date(t):null,this.updateRelative()}datetimeObjChanged(t){this.parsedDateTime=t,this.updateRelative()}updateRelative(){const t=Object(a.a)(this);this.parsedDateTime?t.innerHTML=Object(n.a)(this.parsedDateTime,this.localize):t.innerHTML=this.localize("ui.components.relative_time.never")}})},,,function(t,e,i){"use strict";var a=i(118),s=i(119),n=i(183);const r={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",signal_strength:"hass:wifi"};i.d(e,"a",function(){return l});const o={binary_sensor:function(t){const e=t.state&&"off"===t.state;switch(t.attributes.device_class){case"battery":return e?"hass:battery":"hass:battery-outline";case"cold":return e?"hass:thermometer":"hass:snowflake";case"connectivity":return e?"hass:server-network-off":"hass:server-network";case"door":return e?"hass:door-closed":"hass:door-open";case"garage_door":return e?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return e?"hass:shield-check":"hass:alert";case"heat":return e?"hass:thermometer":"hass:fire";case"light":return e?"hass:brightness-5":"hass:brightness-7";case"lock":return e?"hass:lock":"hass:lock-open";case"moisture":return e?"hass:water-off":"hass:water";case"motion":return e?"hass:walk":"hass:run";case"occupancy":return e?"hass:home-outline":"hass:home";case"opening":return e?"hass:square":"hass:square-outline";case"plug":return e?"hass:power-plug-off":"hass:power-plug";case"presence":return e?"hass:home-outline":"hass:home";case"sound":return e?"hass:music-note-off":"hass:music-note";case"vibration":return e?"hass:crop-portrait":"hass:vibrate";case"window":return e?"hass:window-closed":"hass:window-open";default:return e?"hass:radiobox-blank":"hass:checkbox-marked-circle"}},cover:function(t){const e="closed"!==t.state;switch(t.attributes.device_class){case"garage":return e?"hass:garage-open":"hass:garage";case"door":return e?"hass:door-open":"hass:door-closed";case"shutter":return e?"hass:window-shutter-open":"hass:window-shutter";case"blind":return e?"hass:blinds-open":"hass:blinds";case"window":return e?"hass:window-open":"hass:window-closed";default:return Object(n.a)("cover",t.state)}},sensor:function(t){const e=t.attributes.device_class;if(e&&e in r)return r[e];if("battery"===e){const e=Number(t.state);if(isNaN(e))return"hass:battery-unknown";const i=10*Math.round(e/10);return i>=100?"hass:battery":i<=0?"hass:battery-alert":`hass:battery-${i}`}const i=t.attributes.unit_of_measurement;return i===a.j||i===a.k?"hass:thermometer":Object(n.a)("sensor")},input_datetime:function(t){return t.attributes.has_date?t.attributes.has_time?Object(n.a)("input_datetime"):"hass:calendar":"hass:clock"}};function l(t){if(!t)return a.a;if(t.attributes.icon)return t.attributes.icon;const e=Object(s.a)(t.entity_id);return e in o?o[e](t):Object(n.a)(e,t.state)}},,function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"b",function(){return d});var a=i(188);class s{constructor(t,e){this.hass=t,this.stateObj=e,this._attr=e.attributes,this._feat=this._attr.supported_features}get isFullyOpen(){return void 0!==this._attr.current_position?100===this._attr.current_position:"open"===this.stateObj.state}get isFullyClosed(){return void 0!==this._attr.current_position?0===this._attr.current_position:"closed"===this.stateObj.state}get isFullyOpenTilt(){return 100===this._attr.current_tilt_position}get isFullyClosedTilt(){return 0===this._attr.current_tilt_position}get isOpening(){return"opening"===this.stateObj.state}get isClosing(){return"closing"===this.stateObj.state}get supportsOpen(){return Object(a.a)(this.stateObj,1)}get supportsClose(){return Object(a.a)(this.stateObj,2)}get supportsSetPosition(){return Object(a.a)(this.stateObj,4)}get supportsStop(){return Object(a.a)(this.stateObj,8)}get supportsOpenTilt(){return Object(a.a)(this.stateObj,16)}get supportsCloseTilt(){return Object(a.a)(this.stateObj,32)}get supportsStopTilt(){return Object(a.a)(this.stateObj,64)}get supportsSetTiltPosition(){return Object(a.a)(this.stateObj,128)}get isTiltOnly(){const t=this.supportsOpen||this.supportsClose||this.supportsStop;return(this.supportsOpenTilt||this.supportsCloseTilt||this.supportsStopTilt)&&!t}openCover(){this.callService("open_cover")}closeCover(){this.callService("close_cover")}stopCover(){this.callService("stop_cover")}openCoverTilt(){this.callService("open_cover_tilt")}closeCoverTilt(){this.callService("close_cover_tilt")}stopCoverTilt(){this.callService("stop_cover_tilt")}setCoverPosition(t){this.callService("set_cover_position",{position:t})}setCoverTiltPosition(t){this.callService("set_cover_tilt_position",{tilt_position:t})}callService(t,e={}){e.entity_id=this.stateObj.entity_id,this.hass.callService("cover",t,e)}}const n=t=>Object(a.a)(t,1),r=t=>Object(a.a)(t,2),o=t=>Object(a.a)(t,8),l=t=>Object(a.a)(t,16),c=t=>Object(a.a)(t,32),h=t=>Object(a.a)(t,64);function d(t){const e=n(t)||r(t)||o(t);return(l(t)||c(t)||h(t))&&!e}},function(t,e,i){"use strict";var a=i(206);e.a=function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}return!1}()?(t,e)=>t.toLocaleString(e,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"}):t=>a.a.format(t,"haDateTime")},function(t,e,i){"use strict";i(140);const a=customElements.get("paper-dropdown-menu");customElements.define("ha-paper-dropdown-menu",class extends a{ready(){super.ready(),setTimeout(()=>{"rtl"===window.getComputedStyle(this).direction&&(this.style.textAlign="right")},100)}})},function(t,e,i){"use strict";i.d(e,"a",function(){return n});const a=[60,60,24,7],s=["second","minute","hour","day"];function n(t,e,i={}){let n=((i.compareTime||new Date).getTime()-t.getTime())/1e3;const r=n>=0?"past":"future";let o;n=Math.abs(n);for(let l=0;l<a.length;l++){if(n<a[l]){n=Math.floor(n),o=e(`ui.components.relative_time.duration.${s[l]}`,"count",n);break}n/=a[l]}return void 0===o&&(o=e("ui.components.relative_time.duration.week","count",n=Math.floor(n))),!1===i.includeTense?o:e(`ui.components.relative_time.${r}`,"time",o)}},function(t,e,i){"use strict";i.d(e,"a",function(){return s});var a=i(234);const s=t=>{if(!t||!Array.isArray(t))throw new Error("Entities need to be an array");return t.map((t,e)=>{if("object"==typeof t&&!Array.isArray(t)&&t.type)return t;let i;if("string"==typeof t)i={entity:t};else{if("object"!=typeof t||Array.isArray(t))throw new Error(`Invalid entity specified at position ${e}.`);if(!t.entity)throw new Error(`Entity object at position ${e} is missing entity field.`);i=t}if(!Object(a.a)(i.entity))throw new Error(`Invalid entity ID at position ${e}: ${i.entity}`);return i})}},function(t,e,i){"use strict";var a=i(3),s=(i(107),i(192),i(118)),n=i(180),r=i(0),o=i(101),l=i(167);const c=t=>void 0!==t&&!s.i.includes(t.state);class h extends r.a{constructor(){super(...arguments),this._isOn=!1}render(){return this.stateObj?this.stateObj.attributes.assumed_state?r.e`
        <paper-icon-button
          aria-label=${`Turn ${Object(l.a)(this.stateObj)} off`}
          icon="hass:flash-off"
          @click=${this._turnOff}
          ?state-active=${!this._isOn}
        ></paper-icon-button>
        <paper-icon-button
          aria-label=${`Turn ${Object(l.a)(this.stateObj)} on`}
          icon="hass:flash"
          @click=${this._turnOn}
          ?state-active=${this._isOn}
        ></paper-icon-button>
      `:r.e`
      <paper-toggle-button
        aria-label=${`Toggle ${Object(l.a)(this.stateObj)} ${this._isOn?"off":"on"}`}
        .checked=${this._isOn}
        @change=${this._toggleChanged}
      ></paper-toggle-button>
    `:r.e`
        <paper-toggle-button disabled></paper-toggle-button>
      `}firstUpdated(t){super.firstUpdated(t),this.addEventListener("click",t=>t.stopPropagation())}updated(t){t.has("stateObj")&&(this._isOn=c(this.stateObj))}_toggleChanged(t){const e=t.target.checked;e!==this._isOn&&this._callService(e)}_turnOn(){this._callService(!0)}_turnOff(){this._callService(!1)}async _callService(t){if(!this.hass||!this.stateObj)return;Object(o.a)("light");const e=Object(n.a)(this.stateObj);let i,a;"lock"===e?(i="lock",a=t?"unlock":"lock"):"cover"===e?(i="cover",a=t?"open_cover":"close_cover"):"group"===e?(i="homeassistant",a=t?"turn_on":"turn_off"):(i=e,a=t?"turn_on":"turn_off");const s=this.stateObj;this._isOn=t,await this.hass.callService(i,a,{entity_id:this.stateObj.entity_id}),setTimeout(async()=>{this.stateObj===s&&(this._isOn=c(this.stateObj))},2e3)}static get styles(){return r.c`
      :host {
        white-space: nowrap;
        min-width: 38px;
      }
      paper-icon-button {
        color: var(
          --paper-icon-button-inactive-color,
          var(--primary-text-color)
        );
        transition: color 0.5s;
      }
      paper-icon-button[state-active] {
        color: var(--paper-icon-button-active-color, var(--primary-color));
      }
      paper-toggle-button {
        cursor: pointer;
        --paper-toggle-button-label-spacing: 0;
        padding: 13px 5px;
        margin: -4px -5px;
      }
    `}}a.b([Object(r.f)()],h.prototype,"stateObj",void 0),a.b([Object(r.f)()],h.prototype,"_isOn",void 0),customElements.define("ha-entity-toggle",h)},function(t,e,i){"use strict";var a={},s=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,n="[^\\s]+",r=/\[([^]*?)\]/gm,o=function(){};function l(t,e){for(var i=[],a=0,s=t.length;a<s;a++)i.push(t[a].substr(0,e));return i}function c(t){return function(e,i,a){var s=a[t].indexOf(i.charAt(0).toUpperCase()+i.substr(1).toLowerCase());~s&&(e.month=s)}}function h(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}var d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],p=["January","February","March","April","May","June","July","August","September","October","November","December"],u=l(p,3),g=l(d,3);a.i18n={dayNamesShort:g,dayNames:d,monthNamesShort:u,monthNames:p,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10)*t%10]}};var f={D:function(t){return t.getDate()},DD:function(t){return h(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return t.getDay()},dd:function(t){return h(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return t.getMonth()+1},MM:function(t){return h(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return h(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return h(t.getFullYear(),4)},h:function(t){return t.getHours()%12||12},hh:function(t){return h(t.getHours()%12||12)},H:function(t){return t.getHours()},HH:function(t){return h(t.getHours())},m:function(t){return t.getMinutes()},mm:function(t){return h(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return h(t.getSeconds())},S:function(t){return Math.round(t.getMilliseconds()/100)},SS:function(t){return h(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return h(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+h(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)}},m={D:["\\d\\d?",function(t,e){t.day=e}],Do:["\\d\\d?"+n,function(t,e){t.day=parseInt(e,10)}],M:["\\d\\d?",function(t,e){t.month=e-1}],YY:["\\d\\d?",function(t,e){var i=+(""+(new Date).getFullYear()).substr(0,2);t.year=""+(e>68?i-1:i)+e}],h:["\\d\\d?",function(t,e){t.hour=e}],m:["\\d\\d?",function(t,e){t.minute=e}],s:["\\d\\d?",function(t,e){t.second=e}],YYYY:["\\d{4}",function(t,e){t.year=e}],S:["\\d",function(t,e){t.millisecond=100*e}],SS:["\\d{2}",function(t,e){t.millisecond=10*e}],SSS:["\\d{3}",function(t,e){t.millisecond=e}],d:["\\d\\d?",o],ddd:[n,o],MMM:[n,c("monthNamesShort")],MMMM:[n,c("monthNames")],a:[n,function(t,e,i){var a=e.toLowerCase();a===i.amPm[0]?t.isPm=!1:a===i.amPm[1]&&(t.isPm=!0)}],ZZ:["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",function(t,e){var i,a=(e+"").match(/([+-]|\d\d)/gi);a&&(i=60*a[1]+parseInt(a[2],10),t.timezoneOffset="+"===a[0]?i:-i)}]};m.dd=m.d,m.dddd=m.ddd,m.DD=m.D,m.mm=m.m,m.hh=m.H=m.HH=m.h,m.MM=m.M,m.ss=m.s,m.A=m.a,a.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},a.format=function(t,e,i){var n=i||a.i18n;if("number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date in fecha.format");e=a.masks[e]||e||a.masks.default;var o=[];return(e=(e=e.replace(r,function(t,e){return o.push(e),"@@@"})).replace(s,function(e){return e in f?f[e](t,n):e.slice(1,e.length-1)})).replace(/@@@/g,function(){return o.shift()})},a.parse=function(t,e,i){var n=i||a.i18n;if("string"!=typeof e)throw new Error("Invalid format in fecha.parse");if(e=a.masks[e]||e,t.length>1e3)return null;var o={},l=[],c=[];e=e.replace(r,function(t,e){return c.push(e),"@@@"});var h,d=(h=e,h.replace(/[|\\{()[^$+*?.-]/g,"\\$&")).replace(s,function(t){if(m[t]){var e=m[t];return l.push(e[1]),"("+e[0]+")"}return t});d=d.replace(/@@@/g,function(){return c.shift()});var p=t.match(new RegExp(d,"i"));if(!p)return null;for(var u=1;u<p.length;u++)l[u-1](o,p[u],n);var g,f=new Date;return!0===o.isPm&&null!=o.hour&&12!=+o.hour?o.hour=+o.hour+12:!1===o.isPm&&12==+o.hour&&(o.hour=0),null!=o.timezoneOffset?(o.minute=+(o.minute||0)-+o.timezoneOffset,g=new Date(Date.UTC(o.year||f.getFullYear(),o.month||0,o.day||1,o.hour||0,o.minute||0,o.second||0,o.millisecond||0))):g=new Date(o.year||f.getFullYear(),o.month||0,o.day||1,o.hour||0,o.minute||0,o.second||0,o.millisecond||0),g},e.a=a},function(t,e,i){"use strict";var a=i(206);e.a=function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}return!1}()?(t,e)=>t.toLocaleTimeString(e,{hour:"numeric",minute:"2-digit"}):t=>a.a.format(t,"shortTime")},function(t,e,i){"use strict";i.d(e,"a",function(){return n});var a=i(11);const s=new WeakMap,n=Object(a.f)(t=>e=>{if(!(e instanceof a.a)||e instanceof a.c||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=e,{style:n}=i.element;s.has(e)||(n.cssText=i.strings.join(" "));const r=s.get(e);for(const a in r)a in t||(-1===a.indexOf("-")?n[a]=null:n.removeProperty(a));for(const a in t)-1===a.indexOf("-")?n[a]=t[a]:n.setProperty(a,t[a]);s.set(e,t)})},function(t,e,i){"use strict";i.d(e,"b",function(){return a}),i.d(e,"a",function(){return s});const a=(t,e)=>t<e?-1:t>e?1:0,s=(t,e)=>a(t.toLowerCase(),e.toLowerCase())},,,,function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"f",function(){return s}),i.d(e,"c",function(){return n}),i.d(e,"h",function(){return r}),i.d(e,"e",function(){return o}),i.d(e,"b",function(){return l}),i.d(e,"g",function(){return c}),i.d(e,"i",function(){return h}),i.d(e,"d",function(){return d});const a=(t,e,i)=>{const[a]=e,s=[];return t.views.forEach((e,n)=>{if(n!==a)return void s.push(t.views[n]);const r=e.cards?[...e.cards,i]:[i];s.push(Object.assign({},e,{cards:r}))}),Object.assign({},t,{views:s})},s=(t,e,i)=>{const[a,s]=e,n=[];return t.views.forEach((e,r)=>{r===a?n.push(Object.assign({},e,{cards:(e.cards||[]).map((t,e)=>e===s?i:t)})):n.push(t.views[r])}),Object.assign({},t,{views:n})},n=(t,e)=>{const[i,a]=e,s=[];return t.views.forEach((e,n)=>{n===i?s.push(Object.assign({},e,{cards:(e.cards||[]).filter((t,e)=>e!==a)})):s.push(t.views[n])}),Object.assign({},t,{views:s})},r=(t,e,i)=>{const a=t.views[e[0]].cards[e[1]],s=t.views[i[0]].cards[i[1]],n=t.views[e[0]],r=Object.assign({},n,{cards:n.cards.map((t,i)=>i===e[1]?s:t)}),o=e[0]===i[0]?r:t.views[i[0]],l=Object.assign({},o,{cards:o.cards.map((t,e)=>e===i[1]?a:t)});return Object.assign({},t,{views:t.views.map((t,a)=>a===i[0]?l:a===e[0]?r:t)})},o=(t,e,i)=>{if(e[0]===i[0])throw new Error("You can not move a card to the view it is in.");const a=t.views[e[0]],s=a.cards[e[1]],n=Object.assign({},a,{cards:(a.cards||[]).filter((t,i)=>i!==e[1])}),r=t.views[i[0]],o=r.cards?[...r.cards,s]:[s],l=Object.assign({},r,{cards:o});return Object.assign({},t,{views:t.views.map((t,a)=>a===i[0]?l:a===e[0]?n:t)})},l=(t,e)=>Object.assign({},t,{views:t.views.concat(e)}),c=(t,e,i)=>Object.assign({},t,{views:t.views.map((t,a)=>a===e?i:t)}),h=(t,e,i)=>{const a=t.views[e],s=t.views[i];return Object.assign({},t,{views:t.views.map((t,n)=>n===i?a:n===e?s:t)})},d=(t,e)=>Object.assign({},t,{views:t.views.filter((t,i)=>i!==e)})},function(t,e,i){"use strict";i(5);var a=i(6),s=i(2),n=i(4);Object(a.a)({_template:n.a`
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
`,is:"paper-tooltip",hostAttributes:{role:"tooltip",tabindex:-1},properties:{for:{type:String,observer:"_findTarget"},manualMode:{type:Boolean,value:!1,observer:"_manualModeChanged"},position:{type:String,value:"bottom"},fitToVisibleBounds:{type:Boolean,value:!1},offset:{type:Number,value:14},marginTop:{type:Number,value:14},animationDelay:{type:Number,value:500,observer:"_delayChange"},animationEntry:{type:String,value:""},animationExit:{type:String,value:""},animationConfig:{type:Object,value:function(){return{entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]}}},_showing:{type:Boolean,value:!1}},listeners:{webkitAnimationEnd:"_onAnimationEnd"},get target(){var t=Object(s.a)(this).parentNode,e=Object(s.a)(this).getOwnerRoot();return this.for?Object(s.a)(e).querySelector("#"+this.for):t.nodeType==Node.DOCUMENT_FRAGMENT_NODE?e.host:t},attached:function(){this._findTarget()},detached:function(){this.manualMode||this._removeListeners()},playAnimation:function(t){"entry"===t?this.show():"exit"===t&&this.hide()},cancelAnimation:function(){this.$.tooltip.classList.add("cancel-animation")},show:function(){if(!this._showing){if(""===Object(s.a)(this).textContent.trim()){for(var t=!0,e=Object(s.a)(this).getEffectiveChildNodes(),i=0;i<e.length;i++)if(""!==e[i].textContent.trim()){t=!1;break}if(t)return}this._showing=!0,this.$.tooltip.classList.remove("hidden"),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.updatePosition(),this._animationPlaying=!0,this.$.tooltip.classList.add(this._getAnimationType("entry"))}},hide:function(){if(this._showing){if(this._animationPlaying)return this._showing=!1,void this._cancelAnimation();this._onAnimationFinish(),this._showing=!1,this._animationPlaying=!0}},updatePosition:function(){if(this._target&&this.offsetParent){var t=this.offset;14!=this.marginTop&&14==this.offset&&(t=this.marginTop);var e,i,a=this.offsetParent.getBoundingClientRect(),s=this._target.getBoundingClientRect(),n=this.getBoundingClientRect(),r=(s.width-n.width)/2,o=(s.height-n.height)/2,l=s.left-a.left,c=s.top-a.top;switch(this.position){case"top":e=l+r,i=c-n.height-t;break;case"bottom":e=l+r,i=c+s.height+t;break;case"left":e=l-n.width-t,i=c+o;break;case"right":e=l+s.width+t,i=c+o}this.fitToVisibleBounds?(a.left+e+n.width>window.innerWidth?(this.style.right="0px",this.style.left="auto"):(this.style.left=Math.max(0,e)+"px",this.style.right="auto"),a.top+i+n.height>window.innerHeight?(this.style.bottom=a.height-c+t+"px",this.style.top="auto"):(this.style.top=Math.max(-a.top,i)+"px",this.style.bottom="auto")):(this.style.left=e+"px",this.style.top=i+"px")}},_addListeners:function(){this._target&&(this.listen(this._target,"mouseenter","show"),this.listen(this._target,"focus","show"),this.listen(this._target,"mouseleave","hide"),this.listen(this._target,"blur","hide"),this.listen(this._target,"tap","hide")),this.listen(this.$.tooltip,"animationend","_onAnimationEnd"),this.listen(this,"mouseenter","hide")},_findTarget:function(){this.manualMode||this._removeListeners(),this._target=this.target,this.manualMode||this._addListeners()},_delayChange:function(t){500!==t&&this.updateStyles({"--paper-tooltip-delay-in":t+"ms"})},_manualModeChanged:function(){this.manualMode?this._removeListeners():this._addListeners()},_cancelAnimation:function(){this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add("hidden")},_onAnimationFinish:function(){this._showing&&(this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add(this._getAnimationType("exit")))},_onAnimationEnd:function(){this._animationPlaying=!1,this._showing||(this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.add("hidden"))},_getAnimationType:function(t){if("entry"===t&&""!==this.animationEntry)return this.animationEntry;if("exit"===t&&""!==this.animationExit)return this.animationExit;if(this.animationConfig[t]&&"string"==typeof this.animationConfig[t][0].name){if(this.animationConfig[t][0].timing&&this.animationConfig[t][0].timing.delay&&0!==this.animationConfig[t][0].timing.delay){var e=this.animationConfig[t][0].timing.delay;"entry"===t?this.updateStyles({"--paper-tooltip-delay-in":e+"ms"}):"exit"===t&&this.updateStyles({"--paper-tooltip-delay-out":e+"ms"})}return this.animationConfig[t][0].name}},_removeListeners:function(){this._target&&(this.unlisten(this._target,"mouseenter","show"),this.unlisten(this._target,"focus","show"),this.unlisten(this._target,"mouseleave","hide"),this.unlisten(this._target,"blur","hide"),this.unlisten(this._target,"tap","hide")),this.unlisten(this.$.tooltip,"animationend","_onAnimationEnd"),this.unlisten(this,"mouseenter","hide")}})},function(t,e,i){"use strict";function a(t){return t.substr(t.indexOf(".")+1)}i.d(e,"a",function(){return a})},function(t,e,i){"use strict";i.d(e,"c",function(){return l}),i.d(e,"b",function(){return c}),i.d(e,"a",function(){return d});var a=i(167),s=i(180),n=i(190);const r=["climate","water_heater"],o=["temperature","current_temperature","target_temp_low","target_temp_high","hvac_action"],l=(t,e,i,a,s=!1)=>{let n="history/period";return i&&(n+="/"+i.toISOString()),n+="?filter_entity_id="+e,a&&(n+="&end_time="+a.toISOString()),s&&(n+="&skip_initial_state"),t.callApi("GET",n)},c=(t,e,i)=>t.callApi("GET",`history/period/${e.toISOString()}?end_time=${i.toISOString()}`),h=(t,e)=>t.state===e.state&&(!t.attributes||o.every(i=>t.attributes[i]===e.attributes[i])),d=(t,e,i,l)=>{const c={},d=[];return e?(e.forEach(e=>{if(0===e.length)return;const r=e.find(t=>"unit_of_measurement"in t.attributes);let o;r?o=r.attributes.unit_of_measurement:"climate"===Object(s.a)(e[0])?o=t.config.unit_system.temperature:"water_heater"===Object(s.a)(e[0])&&(o=t.config.unit_system.temperature),o?o in c?c[o].push(e):c[o]=[e]:d.push(((t,e,i)=>{const s=[];for(const a of i)s.length>0&&a.state===s[s.length-1].state||s.push({state_localize:Object(n.a)(t,a,e),state:a.state,last_changed:a.last_changed});return{name:Object(a.a)(i[0]),entity_id:i[0].entity_id,data:s}})(i,l,e))}),{line:Object.keys(c).map(t=>((t,e)=>{const i=[];for(const n of e){const t=n[n.length-1],e=Object(s.a)(t),l=[];for(const i of n){let t;if(r.includes(e)){t={state:i.state,last_changed:i.last_updated,attributes:{}};for(const e of o)e in i.attributes&&(t.attributes[e]=i.attributes[e])}else t=i;l.length>1&&h(t,l[l.length-1])&&h(t,l[l.length-2])||l.push(t)}i.push({domain:e,name:Object(a.a)(t),entity_id:t.entity_id,states:l})}return{unit:t,identifier:e.map(t=>t[0].entity_id).join(""),data:i}})(t,c[t])),timeline:d}):{line:[],timeline:[]}}},function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i.d(e,"b",function(){return c});var a=i(13),s=i(209),n=i(187);const r=(t,e)=>t.callWS(Object.assign({type:"config/area_registry/create"},e)),o=t=>t.sendMessagePromise({type:"config/area_registry/list"}).then(t=>t.sort((t,e)=>Object(s.b)(t.name,e.name))),l=(t,e)=>t.subscribeEvents(Object(n.a)(()=>o(t).then(t=>e.setState(t,!0)),500,!0),"area_registry_updated"),c=(t,e)=>Object(a.d)("_areaRegistry",o,l,t,e)},function(t,e,i){"use strict";i.d(e,"b",function(){return n}),i.d(e,"a",function(){return l});var a=i(13),s=i(187);const n=(t,e,i)=>t.callWS(Object.assign({type:"config/device_registry/update",device_id:e},i)),r=t=>t.sendMessagePromise({type:"config/device_registry/list"}),o=(t,e)=>t.subscribeEvents(Object(s.a)(()=>r(t).then(t=>e.setState(t,!0)),500,!0),"device_registry_updated"),l=(t,e)=>Object(a.d)("_dr",r,o,t,e)},,,,,function(t,e,i){"use strict";function a(t,e){return t&&-1!==t.config.components.indexOf(e)}i.d(e,"a",function(){return a})},function(t,e,i){"use strict";i.d(e,"b",function(){return n}),i.d(e,"a",function(){return r});var a=i(3),s=i(0);const n=t=>{const e=document.createElement("hui-error-card");return e.setConfig(t),e},r=(t,e)=>({type:"error",error:t,origConfig:e});let o=class extends s.a{getCardSize(){return 4}setConfig(t){this._config=t}render(){return this._config?s.e`
      ${this._config.error}
      <pre>${this._toStr(this._config.origConfig)}</pre>
    `:s.e``}static get styles(){return s.c`
      :host {
        display: block;
        background-color: #ef5350;
        color: white;
        padding: 8px;
        font-weight: 500;
        user-select: text;
        cursor: default;
      }
    `}_toStr(t){return JSON.stringify(t,null,2)}};a.b([Object(s.f)()],o.prototype,"_config",void 0),o=a.b([Object(s.d)("hui-error-card")],o)},function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"g",function(){return s}),i.d(e,"h",function(){return n}),i.d(e,"f",function(){return r}),i.d(e,"c",function(){return o}),i.d(e,"d",function(){return l}),i.d(e,"e",function(){return c}),i.d(e,"b",function(){return h}),i.d(e,"i",function(){return p});const a="none",s=1,n=2,r=4,o=8,l=16,c=32,h=64,d={auto:1,heat_cool:2,heat:3,cool:4,dry:5,fan_only:6,off:7},p=(t,e)=>d[t]-d[e]},function(t,e,i){"use strict";i(5);var a=i(6),s=i(4),n=i(20);Object(a.a)({_template:s.a`
    <style>
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }

      #baseURIAnchor {
        display: none;
      }

      #sizedImgDiv {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        display: none;
      }

      #img {
        display: block;
        width: var(--iron-image-width, auto);
        height: var(--iron-image-height, auto);
      }

      :host([sizing]) #sizedImgDiv {
        display: block;
      }

      :host([sizing]) #img {
        display: none;
      }

      #placeholder {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        background-color: inherit;
        opacity: 1;

        @apply --iron-image-placeholder;
      }

      #placeholder.faded-out {
        transition: opacity 0.5s linear;
        opacity: 0;
      }
    </style>

    <a id="baseURIAnchor" href="#"></a>
    <div id="sizedImgDiv" role="img" hidden$="[[_computeImgDivHidden(sizing)]]" aria-hidden$="[[_computeImgDivARIAHidden(alt)]]" aria-label$="[[_computeImgDivARIALabel(alt, src)]]"></div>
    <img id="img" alt$="[[alt]]" hidden$="[[_computeImgHidden(sizing)]]" crossorigin$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">
    <div id="placeholder" hidden$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>
`,is:"iron-image",properties:{src:{type:String,value:""},alt:{type:String,value:null},crossorigin:{type:String,value:null},preventLoad:{type:Boolean,value:!1},sizing:{type:String,value:null,reflectToAttribute:!0},position:{type:String,value:"center"},preload:{type:Boolean,value:!1},placeholder:{type:String,value:null,observer:"_placeholderChanged"},fade:{type:Boolean,value:!1},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1},width:{observer:"_widthChanged",type:Number,value:null},height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){this.$.img.src===this._resolveSrc(this.src)&&(this._setLoading(!1),this._setLoaded(!0),this._setError(!1))},_imgOnError:function(){this.$.img.src===this._resolveSrc(this.src)&&(this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",this._setLoading(!1),this._setLoaded(!1),this._setError(!0))},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){return null!==this.alt?this.alt:""===this.src?"":this._resolveSrc(this.src).replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(t,e){var i=this._resolveSrc(t);i!==this._resolvedSrc&&(this._resolvedSrc="",this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",""===t||e?(this._setLoading(!1),this._setLoaded(!1),this._setError(!1)):(this._resolvedSrc=i,this.$.img.src=this._resolvedSrc,this.$.sizedImgDiv.style.backgroundImage='url("'+this._resolvedSrc+'")',this._setLoading(!0),this._setLoaded(!1),this._setError(!1)))},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?'url("'+this.placeholder+'")':""},_transformChanged:function(){var t=this.$.sizedImgDiv.style,e=this.$.placeholder.style;t.backgroundSize=e.backgroundSize=this.sizing,t.backgroundPosition=e.backgroundPosition=this.sizing?this.position:"",t.backgroundRepeat=e.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(t){var e=Object(n.c)(t,this.$.baseURIAnchor.href);return e.length>=2&&"/"===e[0]&&"/"!==e[1]&&(e=(location.origin||location.protocol+"//"+location.host)+e),e}})},function(t,e,i){"use strict";i(5),i(85);const a=i(4).a`
<dom-module id="paper-material-styles">
  <template>
    <style>
      html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      .paper-material {
        @apply --paper-material;
      }
      .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }

      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */
      :host {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material) {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]) {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]) {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]) {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]) {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`;a.setAttribute("style","display: none;"),document.head.appendChild(a.content)},,,,function(t,e,i){"use strict";i.d(e,"a",function(){return s});const a=t=>t<10?`0${t}`:t;function s(t){const e=Math.floor(t/3600),i=Math.floor(t%3600/60),s=Math.floor(t%3600%60);return e>0?`${e}:${a(i)}:${a(s)}`:i>0?`${i}:${a(s)}`:s>0?""+s:null}},function(t,e,i){"use strict";function a(t){if(!t||"object"!=typeof t)return t;if("[object Date]"==Object.prototype.toString.call(t))return new Date(t.getTime());if(Array.isArray(t))return t.map(a);var e={};return Object.keys(t).forEach(function(i){e[i]=a(t[i])}),e}i.d(e,"a",function(){return a})},function(t,e,i){"use strict";i.d(e,"a",function(){return a});const a=t=>"function"==typeof t.getCardSize?t.getCardSize():1},function(t,e,i){"use strict";const a=/^(\w+)\.(\w+)$/;e.a=t=>a.test(t)},function(t,e,i){"use strict";i(171),i(107);var a=i(4),s=i(31),n=i(200);customElements.define("ha-cover-tilt-controls",class extends s.a{static get template(){return a.a`
      <style include="iron-flex"></style>
      <style>
        :host {
          white-space: nowrap;
        }
        [invisible] {
          visibility: hidden !important;
        }
      </style>
      <paper-icon-button
        aria-label="Open cover tilt"
        icon="hass:arrow-top-right"
        on-click="onOpenTiltTap"
        title="Open tilt"
        invisible$="[[!entityObj.supportsOpenTilt]]"
        disabled="[[computeOpenDisabled(stateObj, entityObj)]]"
      ></paper-icon-button>
      <paper-icon-button
        aria-label="Stop cover from moving"
        icon="hass:stop"
        on-click="onStopTiltTap"
        invisible$="[[!entityObj.supportsStopTilt]]"
        title="Stop tilt"
      ></paper-icon-button>
      <paper-icon-button
        aria-label="Close cover tilt"
        icon="hass:arrow-bottom-left"
        on-click="onCloseTiltTap"
        title="Close tilt"
        invisible$="[[!entityObj.supportsCloseTilt]]"
        disabled="[[computeClosedDisabled(stateObj, entityObj)]]"
      ></paper-icon-button>
    `}static get properties(){return{hass:{type:Object},stateObj:{type:Object},entityObj:{type:Object,computed:"computeEntityObj(hass, stateObj)"}}}computeEntityObj(t,e){return new n.a(t,e)}computeOpenDisabled(t,e){var i=!0===t.attributes.assumed_state;return e.isFullyOpenTilt&&!i}computeClosedDisabled(t,e){var i=!0===t.attributes.assumed_state;return e.isFullyClosedTilt&&!i}onOpenTiltTap(t){t.stopPropagation(),this.entityObj.openCoverTilt()}onCloseTiltTap(t){t.stopPropagation(),this.entityObj.closeCoverTilt()}onStopTiltTap(t){t.stopPropagation(),this.entityObj.stopCoverTilt()}})},function(t,e,i){"use strict";var a=i(206);e.a=function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}return!1}()?(t,e)=>t.toLocaleDateString(e,{year:"numeric",month:"long",day:"numeric"}):t=>a.a.format(t,"mediumDate")},function(t,e,i){"use strict";i.d(e,"a",function(){return a});const a=async(t,e,i,a,s,...n)=>{let r=a[t];r||(r=a[t]={});const o=r[s];if(o)return o;const l=i(a,s,...n);return r[s]=l,l.then(()=>setTimeout(()=>{r[s]=void 0},e),()=>{r[s]=void 0}),l}},function(t,e,i){"use strict";i.d(e,"a",function(){return s});var a=i(188);class s{constructor(t,e){this.hass=t,this.stateObj=e,this._attr=e.attributes,this._feat=this._attr.supported_features}get isOff(){return"off"===this.stateObj.state}get isIdle(){return"idle"===this.stateObj.state}get isMuted(){return this._attr.is_volume_muted}get isPaused(){return"paused"===this.stateObj.state}get isPlaying(){return"playing"===this.stateObj.state}get isMusic(){return"music"===this._attr.media_content_type}get isTVShow(){return"tvshow"===this._attr.media_content_type}get hasMediaControl(){return-1!==["playing","paused","unknown","on"].indexOf(this.stateObj.state)}get volumeSliderValue(){return 100*this._attr.volume_level}get showProgress(){return(this.isPlaying||this.isPaused)&&"media_duration"in this.stateObj.attributes&&"media_position"in this.stateObj.attributes&&"media_position_updated_at"in this.stateObj.attributes}get currentProgress(){var t=this._attr.media_position;return this.isPlaying&&(t+=(Date.now()-new Date(this._attr.media_position_updated_at).getTime())/1e3),t}get supportsPause(){return Object(a.a)(this.stateObj,1)}get supportsVolumeSet(){return Object(a.a)(this.stateObj,4)}get supportsVolumeMute(){return Object(a.a)(this.stateObj,8)}get supportsPreviousTrack(){return Object(a.a)(this.stateObj,16)}get supportsNextTrack(){return Object(a.a)(this.stateObj,32)}get supportsTurnOn(){return Object(a.a)(this.stateObj,128)}get supportsTurnOff(){return Object(a.a)(this.stateObj,256)}get supportsPlayMedia(){return Object(a.a)(this.stateObj,512)}get supportsVolumeButtons(){return Object(a.a)(this.stateObj,1024)}get supportsSelectSource(){return Object(a.a)(this.stateObj,2048)}get supportsSelectSoundMode(){return Object(a.a)(this.stateObj,65536)}get supportsPlay(){return Object(a.a)(this.stateObj,16384)}get primaryTitle(){return this._attr.media_title}get secondaryTitle(){if(this.isMusic)return this._attr.media_artist;if(this.isTVShow){var t=this._attr.media_series_title;return this._attr.media_season&&(t+=" S"+this._attr.media_season,this._attr.media_episode&&(t+="E"+this._attr.media_episode)),t}return this._attr.app_name?this._attr.app_name:""}get source(){return this._attr.source}get sourceList(){return this._attr.source_list}get soundMode(){return this._attr.sound_mode}get soundModeList(){return this._attr.sound_mode_list}mediaPlayPause(){this.callService("media_play_pause")}nextTrack(){this.callService("media_next_track")}playbackControl(){this.callService("media_play_pause")}previousTrack(){this.callService("media_previous_track")}setVolume(t){this.callService("volume_set",{volume_level:t})}togglePower(){this.isOff?this.turnOn():this.turnOff()}turnOff(){this.callService("turn_off")}turnOn(){this.callService("turn_on")}volumeDown(){this.callService("volume_down")}volumeMute(t){if(!this.supportsVolumeMute)throw new Error("Muting volume not supported");this.callService("volume_mute",{is_volume_muted:t})}volumeUp(){this.callService("volume_up")}selectSource(t){this.callService("select_source",{source:t})}selectSoundMode(t){this.callService("select_sound_mode",{sound_mode:t})}callService(t,e={}){e.entity_id=this.stateObj.entity_id,this.hass.callService("media_player",t,e)}}},function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r}),i.d(e,"e",function(){return o}),i.d(e,"d",function(){return c}),i.d(e,"c",function(){return h}),i.d(e,"f",function(){return d});var a=i(237),s=i(64);const n=2,r=t=>`/api/camera_proxy_stream/${t.entity_id}?token=${t.attributes.access_token}`,o=(t,e)=>Object(a.a)("_cameraTmbUrl",9e3,l,t,e),l=async(t,e)=>{const i=await Object(s.b)(t,`/api/camera_proxy/${e}`);return t.hassUrl(i.path)},c=async(t,e,i)=>{const a={type:"camera/stream",entity_id:e};i&&(a.format=i);const s=await t.callWS(a);return s.url=t.hassUrl(s.url),s},h=(t,e)=>t.callWS({type:"camera/get_prefs",entity_id:e}),d=(t,e,i)=>t.callWS(Object.assign({type:"camera/update_prefs",entity_id:e},i))},,,,function(t,e,i){"use strict";i(191);var a=i(4),s=i(31),n=i(22),r=i(94),o=(i(107),i(12)),l=i(72),c=i(207);let h=null;customElements.define("ha-chart-base",class extends(Object(l.b)([r.a],s.a)){static get template(){return a.a`
      <style>
        :host {
          display: block;
        }
        .chartHeader {
          padding: 6px 0 0 0;
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        .chartHeader > div {
          vertical-align: top;
          padding: 0 8px;
        }
        .chartHeader > div.chartTitle {
          padding-top: 8px;
          flex: 0 0 0;
          max-width: 30%;
        }
        .chartHeader > div.chartLegend {
          flex: 1 1;
          min-width: 70%;
        }
        :root {
          user-select: none;
          -moz-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
        }
        .chartTooltip {
          font-size: 90%;
          opacity: 1;
          position: absolute;
          background: rgba(80, 80, 80, 0.9);
          color: white;
          border-radius: 3px;
          pointer-events: none;
          transform: translate(-50%, 12px);
          z-index: 1000;
          width: 200px;
          transition: opacity 0.15s ease-in-out;
        }
        :host([rtl]) .chartTooltip {
          direction: rtl;
        }
        .chartLegend ul,
        .chartTooltip ul {
          display: inline-block;
          padding: 0 0px;
          margin: 5px 0 0 0;
          width: 100%;
        }
        .chartTooltip li {
          display: block;
          white-space: pre-line;
        }
        .chartTooltip .title {
          text-align: center;
          font-weight: 500;
        }
        .chartLegend li {
          display: inline-block;
          padding: 0 6px;
          max-width: 49%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          box-sizing: border-box;
        }
        .chartLegend li:nth-child(odd):last-of-type {
          /* Make last item take full width if it is odd-numbered. */
          max-width: 100%;
        }
        .chartLegend li[data-hidden] {
          text-decoration: line-through;
        }
        .chartLegend em,
        .chartTooltip em {
          border-radius: 5px;
          display: inline-block;
          height: 10px;
          margin-right: 4px;
          width: 10px;
        }
        :host([rtl]) .chartTooltip em {
          margin-right: inherit;
          margin-left: 4px;
        }
        paper-icon-button {
          color: var(--secondary-text-color);
        }
      </style>
      <template is="dom-if" if="[[unit]]">
        <div class="chartHeader">
          <div class="chartTitle">[[unit]]</div>
          <div class="chartLegend">
            <ul>
              <template is="dom-repeat" items="[[metas]]">
                <li on-click="_legendClick" data-hidden$="[[item.hidden]]">
                  <em style$="background-color:[[item.bgColor]]"></em>
                  [[item.label]]
                </li>
              </template>
            </ul>
          </div>
        </div>
      </template>
      <div id="chartTarget" style="height:40px; width:100%">
        <canvas id="chartCanvas"></canvas>
        <div
          class$="chartTooltip [[tooltip.yAlign]]"
          style$="opacity:[[tooltip.opacity]]; top:[[tooltip.top]]; left:[[tooltip.left]]; padding:[[tooltip.yPadding]]px [[tooltip.xPadding]]px"
        >
          <div class="title">[[tooltip.title]]</div>
          <div>
            <ul>
              <template is="dom-repeat" items="[[tooltip.lines]]">
                <li>
                  <em style$="background-color:[[item.bgColor]]"></em
                  >[[item.text]]
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    `}get chart(){return this._chart}static get properties(){return{data:Object,identifier:String,rendered:{type:Boolean,notify:!0,value:!1,readOnly:!0},metas:{type:Array,value:()=>[]},tooltip:{type:Object,value:()=>({opacity:"0",left:"0",top:"0",xPadding:"5",yPadding:"3"})},unit:Object,rtl:{type:Boolean,reflectToAttribute:!0}}}static get observers(){return["onPropsChange(data)"]}connectedCallback(){super.connectedCallback(),this._isAttached=!0,this.onPropsChange(),this._resizeListener=()=>{this._debouncer=n.a.debounce(this._debouncer,o.d.after(10),()=>{this._isAttached&&this.resizeChart()})},"function"==typeof ResizeObserver?(this.resizeObserver=new ResizeObserver(t=>{t.forEach(()=>{this._resizeListener()})}),this.resizeObserver.observe(this.$.chartTarget)):this.addEventListener("iron-resize",this._resizeListener),null===h&&(h=Promise.all([i.e(75),i.e(48)]).then(i.bind(null,347))),h.then(t=>{this.ChartClass=t.default,this.onPropsChange()})}disconnectedCallback(){super.disconnectedCallback(),this._isAttached=!1,this.resizeObserver&&this.resizeObserver.unobserve(this.$.chartTarget),this.removeEventListener("iron-resize",this._resizeListener),void 0!==this._resizeTimer&&(clearInterval(this._resizeTimer),this._resizeTimer=void 0)}onPropsChange(){this._isAttached&&this.ChartClass&&this.data&&this.drawChart()}_customTooltips(t){if(0===t.opacity)return void this.set(["tooltip","opacity"],0);t.yAlign?this.set(["tooltip","yAlign"],t.yAlign):this.set(["tooltip","yAlign"],"no-transform");const e=t.title&&t.title[0]||"";this.set(["tooltip","title"],e);const i=t.body.map(t=>t.lines);t.body&&this.set(["tooltip","lines"],i.map((e,i)=>{const a=t.labelColors[i];return{color:a.borderColor,bgColor:a.backgroundColor,text:e.join("\n")}}));const a=this.$.chartTarget.clientWidth;let s=t.caretX;const n=this._chart.canvas.offsetTop+t.caretY;t.caretX+100>a?s=a-100:t.caretX<100&&(s=100),s+=this._chart.canvas.offsetLeft,this.tooltip={...this.tooltip,opacity:1,left:`${s}px`,top:`${n}px`}}_legendClick(t){(t=t||window.event).stopPropagation();let e=t.target||t.srcElement;for(;"LI"!==e.nodeName;)e=e.parentElement;const i=t.model.itemsIndex,a=this._chart.getDatasetMeta(i);a.hidden=null===a.hidden?!this._chart.data.datasets[i].hidden:null,this.set(["metas",i,"hidden"],this._chart.isDatasetVisible(i)?null:"hidden"),this._chart.update()}_drawLegend(){const t=this._chart,e=this._oldIdentifier&&this.identifier===this._oldIdentifier;this._oldIdentifier=this.identifier,this.set("metas",this._chart.data.datasets.map((i,a)=>({label:i.label,color:i.color,bgColor:i.backgroundColor,hidden:e&&a<this.metas.length?this.metas[a].hidden:!t.isDatasetVisible(a)})));let i=!1;if(e)for(let a=0;a<this.metas.length;a++){const e=t.getDatasetMeta(a);!!e.hidden!=!!this.metas[a].hidden&&(i=!0),e.hidden=!!this.metas[a].hidden||null}i&&t.update(),this.unit=this.data.unit}_formatTickValue(t,e,i){if(0===i.length)return t;const a=new Date(i[e].value);return Object(c.a)(a)}drawChart(){const t=this.data.data,e=this.$.chartCanvas;if(t.datasets&&t.datasets.length||this._chart){if("timeline"!==this.data.type&&t.datasets.length>0){const e=t.datasets.length,i=this.constructor.getColorList(e);for(let a=0;a<e;a++)t.datasets[a].borderColor=i[a].rgbString(),t.datasets[a].backgroundColor=i[a].alpha(.6).rgbaString()}if(this._chart)this._customTooltips({opacity:0}),this._chart.data=t,this._chart.update({duration:0}),this.isTimeline?this._chart.options.scales.yAxes[0].gridLines.display=t.length>1:!0===this.data.legend&&this._drawLegend(),this.resizeChart();else{if(!t.datasets)return;this._customTooltips({opacity:0});const i=[{afterRender:()=>this._setRendered(!0)}];let a={responsive:!0,maintainAspectRatio:!1,animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0,tooltips:{enabled:!1,custom:this._customTooltips.bind(this)},legend:{display:!1},line:{spanGaps:!0},elements:{font:"12px 'Roboto', 'sans-serif'"},ticks:{fontFamily:"'Roboto', 'sans-serif'"}};(a=Chart.helpers.merge(a,this.data.options)).scales.xAxes[0].ticks.callback=this._formatTickValue,"timeline"===this.data.type?(this.set("isTimeline",!0),void 0!==this.data.colors&&(this._colorFunc=this.constructor.getColorGenerator(this.data.colors.staticColors,this.data.colors.staticColorIndex)),void 0!==this._colorFunc&&(a.elements.colorFunction=this._colorFunc),1===t.datasets.length&&(a.scales.yAxes[0].ticks?a.scales.yAxes[0].ticks.display=!1:a.scales.yAxes[0].ticks={display:!1},a.scales.yAxes[0].gridLines?a.scales.yAxes[0].gridLines.display=!1:a.scales.yAxes[0].gridLines={display:!1}),this.$.chartTarget.style.height="50px"):this.$.chartTarget.style.height="160px";const s={type:this.data.type,data:this.data.data,options:a,plugins:i};this._chart=new this.ChartClass(e,s),!0!==this.isTimeline&&!0===this.data.legend&&this._drawLegend(),this.resizeChart()}}}resizeChart(){this._chart&&(void 0!==this._resizeTimer?(clearInterval(this._resizeTimer),this._resizeTimer=void 0,this._resizeChart()):this._resizeTimer=setInterval(this.resizeChart.bind(this),10))}_resizeChart(){const t=this.$.chartTarget,e=this.data.data;if(0===e.datasets.length)return;if(!this.isTimeline)return void this._chart.resize();const i=this._chart.chartArea.top,a=this._chart.chartArea.bottom,s=this._chart.canvas.clientHeight;if(a>0&&(this._axisHeight=s-a+i),!this._axisHeight)return t.style.height="50px",this._chart.resize(),void this.resizeChart();if(this._axisHeight){const i=30*e.datasets.length+this._axisHeight+"px";t.style.height!==i&&(t.style.height=i),this._chart.resize()}}static getColorList(t){let e=!1;t>10&&(e=!0,t=Math.ceil(t/2));const i=360/t,a=[];for(let s=0;s<t;s++)a[s]=Color().hsl(i*s,80,38),e&&(a[s+t]=Color().hsl(i*s,80,62));return a}static getColorGenerator(t,e){const i=["ff0029","66a61e","377eb8","984ea3","00d2d5","ff7f00","af8d00","7f80cd","b3e900","c42e60","a65628","f781bf","8dd3c7","bebada","fb8072","80b1d3","fdb462","fccde5","bc80bd","ffed6f","c4eaff","cf8c00","1b9e77","d95f02","e7298a","e6ab02","a6761d","0097ff","00d067","f43600","4ba93b","5779bb","927acc","97ee3f","bf3947","9f5b00","f48758","8caed6","f2b94f","eff26e","e43872","d9b100","9d7a00","698cff","d9d9d9","00d27e","d06800","009f82","c49200","cbe8ff","fecddf","c27eb6","8cd2ce","c4b8d9","f883b0","a49100","f48800","27d0df","a04a9b"];function a(t){return Color("#"+i[t%i.length])}const s={};let n=0;return e>0&&(n=e),t&&Object.keys(t).forEach(e=>{const i=t[e];isFinite(i)?s[e.toLowerCase()]=a(i):s[e.toLowerCase()]=Color(t[e])}),function(t,e){let i;const r=e[3];if(null===r)return Color().hsl(0,40,38);if(void 0===r)return Color().hsl(120,40,38);const o=r.toLowerCase();return void 0===i&&(i=s[o]),void 0===i&&(i=a(n),n++,s[o]=i),i}}});var d=i(168),p=i(201);customElements.define("state-history-chart-line",class extends(Object(d.a)(s.a)){static get template(){return a.a`
      <style>
        :host {
          display: block;
          overflow: hidden;
          height: 0;
          transition: height 0.3s ease-in-out;
        }
      </style>
      <ha-chart-base
        id="chart"
        data="[[chartData]]"
        identifier="[[identifier]]"
        rendered="{{rendered}}"
      ></ha-chart-base>
    `}static get properties(){return{chartData:Object,data:Object,names:Object,unit:String,identifier:String,isSingleDevice:{type:Boolean,value:!1},endTime:Object,rendered:{type:Boolean,value:!1,observer:"_onRenderedChanged"}}}static get observers(){return["dataChanged(data, endTime, isSingleDevice)"]}connectedCallback(){super.connectedCallback(),this._isAttached=!0,this.drawChart()}dataChanged(){this.drawChart()}_onRenderedChanged(t){t&&this.animateHeight()}animateHeight(){requestAnimationFrame(()=>requestAnimationFrame(()=>{this.style.height=this.$.chart.scrollHeight+"px"}))}drawChart(){const t=this.unit,e=this.data,i=[];let a;if(!this._isAttached)return;if(0===e.length)return;function s(t){const e=parseFloat(t);return isFinite(e)?e:null}(a=this.endTime||new Date(Math.max.apply(null,e.map(t=>new Date(t.states[t.states.length-1].last_changed)))))>new Date&&(a=new Date);const n=this.names||{};e.forEach(e=>{const r=e.domain,o=n[e.entity_id]||e.name;let l;const c=[];function h(t,e){e&&(t>a||(c.forEach((i,a)=>{i.data.push({x:t,y:e[a]})}),l=e))}function d(e,i,a){let s=!1,n=!1;a&&(s="origin"),i&&(n="before"),c.push({label:e,fill:s,steppedLine:n,pointRadius:0,data:[],unitText:t})}if("thermostat"===r||"climate"===r||"water_heater"===r){const t="climate"===r?t=>"heating"===t.attributes.hvac_action:t=>"heat"===t.state,i="climate"===r?t=>"cooling"===t.attributes.hvac_action:t=>"cool"===t.state,a=e.states.some(t=>t.attributes&&t.attributes.target_temp_high!==t.attributes.target_temp_low),n=e.states.some(t),l=e.states.some(i);d(o+" current temperature",!0),n&&d(o+" heating",!0,!0),l&&d(o+" cooling",!0,!0),a?(d(o+" target temperature high",!0),d(o+" target temperature low",!0)):d(o+" target temperature",!0),e.states.forEach(e=>{if(!e.attributes)return;const r=s(e.attributes.current_temperature),o=[r];if(n&&o.push(t(e)?r:null),l&&o.push(i(e)?r:null),a){const t=s(e.attributes.target_temp_high),i=s(e.attributes.target_temp_low);o.push(t,i),h(new Date(e.last_changed),o)}else{const t=s(e.attributes.temperature);o.push(t),h(new Date(e.last_changed),o)}})}else{d(o,"sensor"===r);let t=null,i=null,a=null;e.states.forEach(e=>{const n=s(e.state),r=new Date(e.last_changed);if(null!==n&&null!==a){const e=r.getTime(),s=a.getTime(),o=i.getTime();h(a,[(s-o)/(e-o)*(n-t)+t]),h(new Date(s+1),[null]),h(r,[n]),i=r,t=n,a=null}else null!==n&&null===a?(h(r,[n]),i=r,t=n):null===n&&null===a&&null!==t&&(a=r)})}h(a,l),Array.prototype.push.apply(i,c)});const r={type:"line",unit:t,legend:!this.isSingleDevice,options:{scales:{xAxes:[{type:"time",ticks:{major:{fontStyle:"bold"}}}],yAxes:[{ticks:{maxTicksLimit:7}}]},tooltips:{mode:"neareach",callbacks:{title:(t,e)=>{const i=t[0],a=e.datasets[i.datasetIndex].data[i.index].x;return Object(p.a)(a,this.hass.language)}}},hover:{mode:"neareach"},layout:{padding:{top:5}},elements:{line:{tension:.1,pointRadius:0,borderWidth:1.5},point:{hitRadius:5}},plugins:{filler:{propagate:!0}}},data:{labels:[],datasets:i}};this.chartData=r}});var u=i(93);customElements.define("state-history-chart-timeline",class extends(Object(d.a)(s.a)){static get template(){return a.a`
      <style>
        :host {
          display: block;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        :host([rendered]) {
          opacity: 1;
        }

        ha-chart-base {
          direction: ltr;
        }
      </style>
      <ha-chart-base
        data="[[chartData]]"
        rendered="{{rendered}}"
        rtl="{{rtl}}"
      ></ha-chart-base>
    `}static get properties(){return{hass:{type:Object},chartData:Object,data:{type:Object,observer:"dataChanged"},names:Object,noSingle:Boolean,endTime:Date,rendered:{type:Boolean,value:!1,reflectToAttribute:!0},rtl:{reflectToAttribute:!0,computed:"_computeRTL(hass)"}}}static get observers(){return["dataChanged(data, endTime, localize, language)"]}connectedCallback(){super.connectedCallback(),this._isAttached=!0,this.drawChart()}dataChanged(){this.drawChart()}drawChart(){let t=this.data;if(!this._isAttached)return;t||(t=[]);const e=new Date(t.reduce((t,e)=>Math.min(t,new Date(e.data[0].last_changed)),new Date));let i=this.endTime||new Date(t.reduce((t,e)=>Math.max(t,new Date(e.data[e.data.length-1].last_changed)),e));i>new Date&&(i=new Date);const a=[],s=[],n=this.names||{};t.forEach(t=>{let r,o=null,l=null,c=e;const h=n[t.entity_id]||t.name,d=[];t.data.forEach(t=>{let e=t.state;void 0!==e&&""!==e||(e=null),new Date(t.last_changed)>i||(null!==o&&e!==o?(r=new Date(t.last_changed),d.push([c,r,l,o]),o=e,l=t.state_localize,c=r):null===o&&(o=e,l=t.state_localize,c=new Date(t.last_changed)))}),null!==o&&d.push([c,i,l,o]),s.push({data:d}),a.push(h)});const r={type:"timeline",options:{tooltips:{callbacks:{label:(t,e)=>{const i=e.datasets[t.datasetIndex].data[t.index],a=Object(p.a)(i[0],this.hass.language),s=Object(p.a)(i[1],this.hass.language);return[i[2],a,s]}}},scales:{xAxes:[{ticks:{major:{fontStyle:"bold"}}}],yAxes:[{afterSetDimensions:t=>{t.maxWidth=.18*t.chart.width},position:this._computeRTL?"right":"left"}]}},data:{labels:a,datasets:s},colors:{staticColors:{on:1,off:0,unavailable:"#a0a0a0",unknown:"#606060",idle:2},staticColorIndex:3}};this.chartData=r}_computeRTL(t){return Object(u.a)(t)}});customElements.define("state-history-charts",class extends(Object(d.a)(s.a)){static get template(){return a.a`
      <style>
        :host {
          display: block;
          /* height of single timeline chart = 58px */
          min-height: 58px;
        }
        .info {
          text-align: center;
          line-height: 58px;
          color: var(--secondary-text-color);
        }
      </style>
      <template
        is="dom-if"
        class="info"
        if="[[_computeIsLoading(isLoadingData)]]"
      >
        <div class="info">
          [[localize('ui.components.history_charts.loading_history')]]
        </div>
      </template>

      <template
        is="dom-if"
        class="info"
        if="[[_computeIsEmpty(isLoadingData, historyData)]]"
      >
        <div class="info">
          [[localize('ui.components.history_charts.no_history_found')]]
        </div>
      </template>

      <template is="dom-if" if="[[historyData.timeline.length]]">
        <state-history-chart-timeline
          hass="[[hass]]"
          data="[[historyData.timeline]]"
          end-time="[[_computeEndTime(endTime, upToNow, historyData)]]"
          no-single="[[noSingle]]"
          names="[[names]]"
        ></state-history-chart-timeline>
      </template>

      <template is="dom-repeat" items="[[historyData.line]]">
        <state-history-chart-line
          hass="[[hass]]"
          unit="[[item.unit]]"
          data="[[item.data]]"
          identifier="[[item.identifier]]"
          is-single-device="[[_computeIsSingleLineChart(item.data, noSingle)]]"
          end-time="[[_computeEndTime(endTime, upToNow, historyData)]]"
          names="[[names]]"
        ></state-history-chart-line>
      </template>
    `}static get properties(){return{hass:Object,historyData:{type:Object,value:null},names:Object,isLoadingData:Boolean,endTime:{type:Object},upToNow:Boolean,noSingle:Boolean}}_computeIsSingleLineChart(t,e){return!e&&t&&1===t.length}_computeIsEmpty(t,e){const i=!e||!e.timeline||!e.line||0===e.timeline.length&&0===e.line.length;return!t&&i}_computeIsLoading(t){return t&&!this.historyData}_computeEndTime(t,e){return e?new Date:t}})},function(t,e,i){"use strict";var a=i(12),s=i(22),n=i(31),r=i(168),o=i(216);const l={},c={},h=(t,e,i,a,s,n)=>{const r=e,c=l[r];if(c&&Date.now()-c.created<6e4&&c.language===n)return c.data;const h=Object(o.c)(t,e,i,a).then(e=>Object(o.a)(t,e,s,n),t=>{throw delete l[e],t});return l[r]={created:Date.now(),language:n,data:h},h};const d=(t,e,i,a,s)=>{const n=i.cacheKey,r=new Date,l=new Date(r);l.setHours(l.getHours()-i.hoursToShow);let h=l,d=!1,g=c[n];if(g&&h>=g.startTime&&h<=g.endTime&&g.language===s){if(h=g.endTime,d=!0,r<=g.endTime)return g.prom}else g=c[n]=function(t,e,i){return{prom:Promise.resolve({line:[],timeline:[]}),language:t,startTime:e,endTime:i,data:{line:[],timeline:[]}}}(s,l,r);const m=g.prom;return g.prom=(async()=>{let i;try{i=(await Promise.all([m,Object(o.c)(t,e,h,r,d)]))[1]}catch(_){throw delete c[n],_}const b=Object(o.a)(t,i,a,s);return d?(p(b.line,g.data.line),u(b.timeline,g.data.timeline),f(l,g.data)):g.data=b,g.data})(),g.startTime=l,g.endTime=r,g.prom},p=(t,e)=>{t.forEach(t=>{const i=t.unit,a=e.find(t=>t.unit===i);a?t.data.forEach(t=>{const e=a.data.find(e=>t.entity_id===e.entity_id);e?e.states=e.states.concat(t.states):a.data.push(t)}):e.push(t)})},u=(t,e)=>{t.forEach(t=>{const i=e.find(e=>e.entity_id===t.entity_id);i?i.data=i.data.concat(t.data):e.push(t)})},g=(t,e)=>{if(0===e.length)return e;const i=e.findIndex(e=>new Date(e.last_changed)>t);if(0===i)return e;const a=-1===i?e.length-1:i-1;return e[a].last_changed=t,e.slice(a)},f=(t,e)=>{e.line.forEach(e=>{e.data.forEach(e=>{e.states=g(t,e.states)})}),e.timeline.forEach(e=>{e.data=g(t,e.data)})};customElements.define("ha-state-history-data",class extends(Object(r.a)(n.a)){static get properties(){return{hass:{type:Object,observer:"hassChanged"},filterType:String,cacheConfig:Object,startTime:Date,endTime:Date,entityId:String,isLoading:{type:Boolean,value:!0,readOnly:!0,notify:!0},data:{type:Object,value:null,readOnly:!0,notify:!0}}}static get observers(){return["filterChangedDebouncer(filterType, entityId, startTime, endTime, cacheConfig, localize)"]}connectedCallback(){super.connectedCallback(),this.filterChangedDebouncer(this.filterType,this.entityId,this.startTime,this.endTime,this.cacheConfig,this.localize)}disconnectedCallback(){this._refreshTimeoutId&&(window.clearInterval(this._refreshTimeoutId),this._refreshTimeoutId=null),super.disconnectedCallback()}hassChanged(t,e){e||this._madeFirstCall||this.filterChangedDebouncer(this.filterType,this.entityId,this.startTime,this.endTime,this.cacheConfig,this.localize)}filterChangedDebouncer(...t){this._debounceFilterChanged=s.a.debounce(this._debounceFilterChanged,a.d.after(0),()=>{this.filterChanged(...t)})}filterChanged(t,e,i,a,s,n){if(!this.hass)return;if(s&&!s.cacheKey)return;if(!n)return;this._madeFirstCall=!0;const r=this.hass.language;let l;if("date"===t){if(!i||!a)return;l=Object(o.b)(this.hass,i,a).then(t=>Object(o.a)(this.hass,t,n,r))}else{if("recent-entity"!==t)return;if(!e)return;l=s?this.getRecentWithCacheRefresh(e,s,n,r):h(this.hass,e,i,a,n,r)}this._setIsLoading(!0),l.then(t=>{this._setData(t),this._setIsLoading(!1)})}getRecentWithCacheRefresh(t,e,i,a){return this._refreshTimeoutId&&(window.clearInterval(this._refreshTimeoutId),this._refreshTimeoutId=null),e.refresh&&(this._refreshTimeoutId=window.setInterval(()=>{d(this.hass,t,e,i,a).then(t=>{this._setData({...t})})},1e3*e.refresh)),d(this.hass,t,e,i,a)}})},function(t,e,i){"use strict";function a(t){let e=function(t){const e=t.split(":").map(Number);return 3600*e[0]+60*e[1]+e[2]}(t.attributes.remaining);if("active"===t.state){const i=(new Date).getTime(),a=new Date(t.last_changed).getTime();e=Math.max(e-(i-a)/1e3,0)}return e}i.d(e,"a",function(){return a})},function(t,e,i){"use strict";i(5),i(45);var a=i(6),s=i(2),n=i(4),r=i(132);Object(a.a)({_template:n.a`
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
`,is:"app-header-layout",behaviors:[r.a],properties:{hasScrollingRegion:{type:Boolean,value:!1,reflectToAttribute:!0}},observers:["resetLayout(isAttached, hasScrollingRegion)"],get header(){return Object(s.a)(this.$.headerSlot).getDistributedNodes()[0]},_updateLayoutStates:function(){var t=this.header;if(this.isAttached&&t){this.$.wrapper.classList.remove("initializing"),t.scrollTarget=this.hasScrollingRegion?this.$.contentContainer:this.ownerDocument.documentElement;var e=t.offsetHeight;this.hasScrollingRegion?(t.style.left="",t.style.right=""):requestAnimationFrame(function(){var e=this.getBoundingClientRect(),i=document.documentElement.clientWidth-e.right;t.style.left=e.left+"px",t.style.right=i+"px"}.bind(this));var i=this.$.contentContainer.style;t.fixed&&!t.condenses&&this.hasScrollingRegion?(i.marginTop=e+"px",i.paddingTop=""):(i.paddingTop=e+"px",i.marginTop="")}}})},function(t,e,i){"use strict";i(5),i(45);var a=i(55),s=i(35),n=i(68),r=i(6),o=i(2),l=i(4);Object(r.a)({_template:l.a`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center;
        @apply --layout-center-justified;
        @apply --layout-flex-auto;

        position: relative;
        padding: 0 12px;
        overflow: hidden;
        cursor: pointer;
        vertical-align: middle;

        @apply --paper-font-common-base;
        @apply --paper-tab;
      }

      :host(:focus) {
        outline: none;
      }

      :host([link]) {
        padding: 0;
      }

      .tab-content {
        height: 100%;
        transform: translateZ(0);
          -webkit-transform: translateZ(0);
        transition: opacity 0.1s cubic-bezier(0.4, 0.0, 1, 1);
        @apply --layout-horizontal;
        @apply --layout-center-center;
        @apply --layout-flex-auto;
        @apply --paper-tab-content;
      }

      :host(:not(.iron-selected)) > .tab-content {
        opacity: 0.8;

        @apply --paper-tab-content-unselected;
      }

      :host(:focus) .tab-content {
        opacity: 1;
        font-weight: 700;

        @apply --paper-tab-content-focused;
      }

      paper-ripple {
        color: var(--paper-tab-ink, var(--paper-yellow-a100));
      }

      .tab-content > ::slotted(a) {
        @apply --layout-flex-auto;

        height: 100%;
      }
    </style>

    <div class="tab-content">
      <slot></slot>
    </div>
`,is:"paper-tab",behaviors:[s.a,a.a,n.a],properties:{link:{type:Boolean,value:!1,reflectToAttribute:!0}},hostAttributes:{role:"tab"},listeners:{down:"_updateNoink",tap:"_onTap"},attached:function(){this._updateNoink()},get _parentNoink(){var t=Object(o.a)(this).parentNode;return!!t&&!!t.noink},_updateNoink:function(){this.noink=!!this.noink||!!this._parentNoink},_onTap:function(t){if(this.link){var e=this.queryEffectiveChildren("a");if(!e)return;if(t.target===e)return;e.click()}}})},function(t,e,i){"use strict";i.d(e,"b",function(){return s}),i.d(e,"a",function(){return n});i(5);var a=i(128);const s={hostAttributes:{role:"menubar"},keyBindings:{left:"_onLeftKey",right:"_onRightKey"},_onUpKey:function(t){this.focusedItem.click(),t.detail.keyboardEvent.preventDefault()},_onDownKey:function(t){this.focusedItem.click(),t.detail.keyboardEvent.preventDefault()},get _isRTL(){return"rtl"===window.getComputedStyle(this).direction},_onLeftKey:function(t){this._isRTL?this._focusNext():this._focusPrevious(),t.detail.keyboardEvent.preventDefault()},_onRightKey:function(t){this._isRTL?this._focusPrevious():this._focusNext(),t.detail.keyboardEvent.preventDefault()},_onKeydown:function(t){this.keyboardEventMatchesKeys(t,"up down left right esc")||this._focusWithKeyboardEvent(t)}},n=[a.a,s]},function(t,e,i){"use strict";var a=i(3),s=i(0),n=i(71),r=i(18),o=i(180),l=i(167),c=i(183),h=i(198),d=i(245),p=i(231);i(280);let u=class extends s.a{connectedCallback(){super.connectedCallback(),this._connected=!0,this.startInterval(this.state)}disconnectedCallback(){super.disconnectedCallback(),this._connected=!1,this.clearInterval()}render(){const t=this.state;if(!t)return s.e`
        <ha-label-badge
          class="warning"
          label="${this.hass.localize("state_badge.default.error")}"
          icon="hass:alert"
          description="${this.hass.localize("state_badge.default.entity_not_found")}"
        ></ha-label-badge>
      `;const e=Object(o.a)(t);return s.e`
      <ha-label-badge
        class="${Object(n.a)({[e]:!0,"has-unit_of_measurement":"unit_of_measurement"in t.attributes})}"
        .value="${this._computeValue(e,t)}"
        .icon="${this.icon?this.icon:this._computeIcon(e,t)}"
        .image="${this.icon?"":this.image?this.image:t.attributes.entity_picture}"
        .label="${this._computeLabel(e,t,this._timerTimeRemaining)}"
        .description="${this.name?this.name:Object(l.a)(t)}"
      ></ha-label-badge>
    `}firstUpdated(t){super.firstUpdated(t),this.addEventListener("click",t=>{t.stopPropagation(),this.state&&Object(r.a)(this,"hass-more-info",{entityId:this.state.entity_id})})}updated(t){super.updated(t),this._connected&&t.has("state")&&this.startInterval(this.state)}_computeValue(t,e){switch(t){case"binary_sensor":case"device_tracker":case"person":case"updater":case"sun":case"alarm_control_panel":case"timer":return null;case"sensor":default:return"unknown"===e.state?"-":this.hass.localize(`component.${t}.state.${e.state}`)||e.state}}_computeIcon(t,e){if("unavailable"===e.state)return null;switch(t){case"alarm_control_panel":return"pending"===e.state?"hass:clock-fast":"armed_away"===e.state?"hass:nature":"armed_home"===e.state?"hass:home-variant":"armed_night"===e.state?"hass:weather-night":"armed_custom_bypass"===e.state?"hass:shield-home":"triggered"===e.state?"hass:alert-circle":Object(c.a)(t,e.state);case"binary_sensor":case"device_tracker":case"updater":case"person":return Object(h.a)(e);case"sun":return"above_horizon"===e.state?Object(c.a)(t):"hass:brightness-3";case"timer":return"active"===e.state?"hass:timer":"hass:timer-off";default:return null}}_computeLabel(t,e,i){return"unavailable"===e.state||["device_tracker","alarm_control_panel","person"].includes(t)?this.hass.localize(`state_badge.${t}.${e.state}`)||this.hass.localize(`state_badge.default.${e.state}`)||e.state:"timer"===t?Object(p.a)(i):e.attributes.unit_of_measurement||null}clearInterval(){this._updateRemaining&&(clearInterval(this._updateRemaining),this._updateRemaining=void 0)}startInterval(t){this.clearInterval(),t&&"timer"===Object(o.a)(t)&&(this.calculateTimerRemaining(t),"active"===t.state&&(this._updateRemaining=window.setInterval(()=>this.calculateTimerRemaining(this.state),1e3)))}calculateTimerRemaining(t){this._timerTimeRemaining=Object(d.a)(t)}static get styles(){return s.c`
      :host {
        cursor: pointer;
      }

      ha-label-badge {
        --ha-label-badge-color: var(--label-badge-red, #df4c1e);
      }
      ha-label-badge.has-unit_of_measurement {
        --ha-label-badge-label-text-transform: none;
      }

      ha-label-badge.binary_sensor,
      ha-label-badge.updater {
        --ha-label-badge-color: var(--label-badge-blue, #039be5);
      }

      .red {
        --ha-label-badge-color: var(--label-badge-red, #df4c1e);
      }

      .blue {
        --ha-label-badge-color: var(--label-badge-blue, #039be5);
      }

      .green {
        --ha-label-badge-color: var(--label-badge-green, #0da035);
      }

      .yellow {
        --ha-label-badge-color: var(--label-badge-yellow, #f4b400);
      }

      .grey {
        --ha-label-badge-color: var(--label-badge-grey, var(--paper-grey-500));
      }

      .warning {
        --ha-label-badge-color: var(--label-badge-yellow, #fce588);
      }
    `}};a.b([Object(s.f)()],u.prototype,"hass",void 0),a.b([Object(s.f)()],u.prototype,"state",void 0),a.b([Object(s.f)()],u.prototype,"name",void 0),a.b([Object(s.f)()],u.prototype,"icon",void 0),a.b([Object(s.f)()],u.prototype,"image",void 0),a.b([Object(s.f)()],u.prototype,"_timerTimeRemaining",void 0),u=a.b([Object(s.d)("ha-state-label-badge")],u)},function(t,e,i){"use strict";var a=i(4),s=i(31),n=i(168),r=i(225);customElements.define("ha-climate-state",class extends(Object(n.a)(s.a)){static get template(){return a.a`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          justify-content: center;
          white-space: nowrap;
        }

        .target {
          color: var(--primary-text-color);
        }

        .current {
          color: var(--secondary-text-color);
        }

        .state-label {
          font-weight: bold;
          text-transform: capitalize;
        }

        .unit {
          display: inline-block;
          direction: ltr;
        }
      </style>

      <div class="target">
        <template is="dom-if" if="[[_hasKnownState(stateObj.state)]]">
          <span class="state-label">
            [[_localizeState(localize, stateObj)]]
            <template is="dom-if" if="[[_renderPreset(stateObj.attributes)]]">
              - [[_localizePreset(localize, stateObj.attributes.preset_mode)]]
            </template>
          </span>
        </template>
        <div class="unit">[[computeTarget(hass, stateObj)]]</div>
      </div>

      <template is="dom-if" if="[[currentStatus]]">
        <div class="current">
          [[localize('ui.card.climate.currently')]]:
          <div class="unit">[[currentStatus]]</div>
        </div>
      </template>
    `}static get properties(){return{hass:Object,stateObj:Object,currentStatus:{type:String,computed:"computeCurrentStatus(hass, stateObj)"}}}computeCurrentStatus(t,e){return t&&e?null!=e.attributes.current_temperature?`${e.attributes.current_temperature} ${t.config.unit_system.temperature}`:null!=e.attributes.current_humidity?`${e.attributes.current_humidity} %`:null:null}computeTarget(t,e){return t&&e?null!=e.attributes.target_temp_low&&null!=e.attributes.target_temp_high?`${e.attributes.target_temp_low}-${e.attributes.target_temp_high} ${t.config.unit_system.temperature}`:null!=e.attributes.temperature?`${e.attributes.temperature} ${t.config.unit_system.temperature}`:null!=e.attributes.target_humidity_low&&null!=e.attributes.target_humidity_high?`${e.attributes.target_humidity_low}-${e.attributes.target_humidity_high}%`:null!=e.attributes.humidity?`${e.attributes.humidity} %`:"":null}_hasKnownState(t){return"unknown"!==t}_localizeState(t,e){const i=t(`state.climate.${e.state}`);return e.attributes.hvac_action?`${t(`state_attributes.climate.hvac_action.${e.attributes.hvac_action}`)} (${i})`:i}_localizePreset(t,e){return t(`state_attributes.climate.preset_mode.${e}`)||e}_renderPreset(t){return t.preset_mode&&t.preset_mode!==r.a}})},function(t,e,i){"use strict";i(107);var a=i(4),s=i(31),n=i(200);customElements.define("ha-cover-controls",class extends s.a{static get template(){return a.a`
      <style>
        .state {
          white-space: nowrap;
        }
        [invisible] {
          visibility: hidden !important;
        }
      </style>

      <div class="state">
        <paper-icon-button
          aria-label="Open cover"
          icon="hass:arrow-up"
          on-click="onOpenTap"
          invisible$="[[!entityObj.supportsOpen]]"
          disabled="[[computeOpenDisabled(stateObj, entityObj)]]"
        ></paper-icon-button>
        <paper-icon-button
          aria-label="Stop the cover from moving"
          icon="hass:stop"
          on-click="onStopTap"
          invisible$="[[!entityObj.supportsStop]]"
        ></paper-icon-button>
        <paper-icon-button
          aria-label="Close cover"
          icon="hass:arrow-down"
          on-click="onCloseTap"
          invisible$="[[!entityObj.supportsClose]]"
          disabled="[[computeClosedDisabled(stateObj, entityObj)]]"
        ></paper-icon-button>
      </div>
    `}static get properties(){return{hass:{type:Object},stateObj:{type:Object},entityObj:{type:Object,computed:"computeEntityObj(hass, stateObj)"}}}computeEntityObj(t,e){return new n.a(t,e)}computeOpenDisabled(t,e){var i=!0===t.attributes.assumed_state;return(e.isFullyOpen||e.isOpening)&&!i}computeClosedDisabled(t,e){var i=!0===t.attributes.assumed_state;return(e.isFullyClosed||e.isClosing)&&!i}onOpenTap(t){t.stopPropagation(),this.entityObj.openCover()}onCloseTap(t){t.stopPropagation(),this.entityObj.closeCover()}onStopTap(t){t.stopPropagation(),this.entityObj.stopCover()}})},function(t,e,i){"use strict";i(92),i(138),i(137),i(140);var a=i(4),s=i(31);customElements.define("paper-time-input",class extends s.a{static get template(){return a.a`
      <style>
        :host {
          display: block;
          @apply --paper-font-common-base;
        }

        paper-input {
          width: 30px;
          text-align: center;
          --paper-input-container-input: {
            /* Damn you firefox
             * Needed to hide spin num in firefox
             * http://stackoverflow.com/questions/3790935/can-i-hide-the-html5-number-input-s-spin-box
             */
            -moz-appearance: textfield;
            @apply --paper-time-input-cotnainer;
          }
          --paper-input-container-input-webkit-spinner: {
            -webkit-appearance: none;
            margin: 0;
            display: none;
          }
          --paper-input-container-shared-input-style_-_-webkit-appearance: textfield;
        }

        paper-dropdown-menu {
          width: 55px;
          padding: 0;
          /* Force ripple to use the whole container */
          --paper-dropdown-menu-ripple: {
            color: var(
              --paper-time-input-dropdown-ripple-color,
              var(--primary-color)
            );
          }
          --paper-input-container-input: {
            @apply --paper-font-button;
            text-align: center;
            padding-left: 5px;
            @apply --paper-time-dropdown-input-cotnainer;
          }
          --paper-input-container-underline: {
            border-color: transparent;
          }
          --paper-input-container-underline-focus: {
            border-color: transparent;
          }
        }

        paper-item {
          cursor: pointer;
          text-align: center;
          font-size: 14px;
        }

        paper-listbox {
          padding: 0;
        }

        label {
          @apply --paper-font-caption;
        }

        .time-input-wrap {
          @apply --layout-horizontal;
          @apply --layout-no-wrap;
        }

        [hidden] {
          display: none !important;
        }
      </style>

      <label hidden$="[[hideLabel]]">[[label]]</label>
      <div class="time-input-wrap">
        <!-- Hour Input -->
        <paper-input
          id="hour"
          type="number"
          value="{{hour}}"
          on-change="_shouldFormatHour"
          required=""
          auto-validate="[[autoValidate]]"
          prevent-invalid-input=""
          maxlength="2"
          max="[[_computeHourMax(format)]]"
          min="0"
          no-label-float=""
          disabled="[[disabled]]"
        >
          <span suffix="" slot="suffix">:</span>
        </paper-input>

        <!-- Min Input -->
        <paper-input
          id="min"
          type="number"
          value="{{min}}"
          on-change="_formatMin"
          required=""
          auto-validate="[[autoValidate]]"
          prevent-invalid-input=""
          maxlength="2"
          max="59"
          min="0"
          no-label-float=""
          disabled="[[disabled]]"
        >
        </paper-input>

        <!-- Dropdown Menu -->
        <paper-dropdown-menu
          id="dropdown"
          required=""
          hidden$="[[_equal(format, 24)]]"
          no-label-float=""
          disabled="[[disabled]]"
        >
          <paper-listbox
            attr-for-selected="name"
            selected="{{amPm}}"
            slot="dropdown-content"
          >
            <paper-item name="AM">AM</paper-item>
            <paper-item name="PM">PM</paper-item>
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
    `}static get properties(){return{label:{type:String,value:"Time"},autoValidate:{type:Boolean,value:!0},hideLabel:{type:Boolean,value:!1},format:{type:Number,value:12},disabled:{type:Boolean,value:!1},hour:{type:String,notify:!0},min:{type:String,notify:!0},amPm:{type:String,notify:!0,value:"AM"},value:{type:String,notify:!0,readOnly:!0,computed:"_computeTime(min, hour, amPm)"}}}validate(){var t=!0;return!this.$.hour.validate()|!this.$.min.validate()&&(t=!1),12!==this.format||this.$.dropdown.validate()||(t=!1),t}_computeTime(t,e,i){if(e&&t)return 24===this.format&&(i=""),e+":"+t+" "+i}_formatMin(){1===this.min.toString().length&&(this.min=this.min<10?"0"+this.min:this.min)}_shouldFormatHour(){24===this.format&&1===this.hour.toString().length&&(this.hour=this.hour<10?"0"+this.hour:this.hour)}_computeHourMax(t){return 12===t?t:23}_equal(t,e){return t===e}})},function(t,e,i){"use strict";i(145);const a=customElements.get("paper-slider");let s;customElements.define("ha-slider",class extends a{static get template(){return s||(s=a.template.cloneNode(!0)).content.querySelector("style").appendChild(document.createTextNode('\n          :host([dir="rtl"]) #sliderContainer.pin.expand > .slider-knob > .slider-knob-inner::after {\n            -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            }\n        ')),s}_calcStep(t){if(!this.step)return parseFloat(t);const e=Math.round((t-this.min)/this.step),i=this.step.toString(),a=i.indexOf(".");if(-1!==a){const t=10**(i.length-a-1);return Math.round((e*this.step+this.min)*t)/t}return e*this.step+this.min}})},function(t,e,i){"use strict";i.d(e,"a",function(){return a});const a=(t,e,i)=>t.callService("input_select","select_option",{option:i,entity_id:e})},function(t,e,i){"use strict";i.d(e,"a",function(){return a});const a=t=>t.stopPropagation()},function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s});const a="5FE44367",s="http://192.168.1.234:8123"},function(t,e,i){"use strict";i.d(e,"b",function(){return a}),i.d(e,"a",function(){return s});const a=async(t,e=!1)=>{if(!t.parentNode)throw new Error("Cannot setup Leaflet map on disconnected element");const a=await i.e(73).then(i.t.bind(null,296,7));a.Icon.Default.imagePath="/static/images/leaflet/images/";const n=a.map(t),r=document.createElement("link");return r.setAttribute("href","/static/images/leaflet/leaflet.css"),r.setAttribute("rel","stylesheet"),t.parentNode.appendChild(r),n.setView([52.3731339,4.8903147],13),s(a,e).addTo(n),[n,a]},s=(t,e)=>t.tileLayer(`https://{s}.basemaps.cartocdn.com/${e?"dark_all":"light_all"}/{z}/{x}/{y}${t.Browser.retina?"@2x.png":".png"}`,{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",minZoom:0,maxZoom:20})},function(t,e,i){"use strict";i.d(e,"a",function(){return n});var a=i(18);let s=!1;const n=(t,e)=>{s||(s=!0,(t=>Object(a.a)(t,"register-dialog",{dialogShowEvent:"show-edit-card",dialogTag:"hui-dialog-edit-card",dialogImport:()=>Promise.all([i.e(7),i.e(21)]).then(i.bind(null,335))}))(t)),Object(a.a)(t,"show-edit-card",e)}},function(t,e,i){"use strict";i.d(e,"b",function(){return n}),i.d(e,"a",function(){return l});var a=i(13),s=(i(167),i(187));const n=(t,e,i)=>t.callWS(Object.assign({type:"config/entity_registry/update",entity_id:e},i)),r=t=>t.sendMessagePromise({type:"config/entity_registry/list"}),o=(t,e)=>t.subscribeEvents(Object(s.a)(()=>r(t).then(t=>e.setState(t,!0)),500,!0),"entity_registry_updated"),l=(t,e)=>Object(a.d)("_entityRegistry",r,o,t,e)},,,,,,,,,,,,function(t,e,i){"use strict";var a=i(232),s=i(18),n=i(3),r=i(0),o=i(71);i(177),i(280);let l=class extends r.a{render(){return r.e`
      <slot></slot>
    `}static get styles(){return r.c`
      :host {
        display: block;
        color: black;
        background-color: #fce588;
        padding: 8px;
      }
    `}};l=n.b([Object(r.d)("hui-warning")],l);const c={armed_away:"hass:shield-lock",armed_custom_bypass:"hass:security",armed_home:"hass:shield-home",armed_night:"hass:shield-home",disarmed:"hass:shield-check",pending:"hass:shield-outline",triggered:"hass:bell-ring"},h=["1","2","3","4","5","6","7","8","9","","0","clear"];let d=class extends r.a{static async getConfigElement(){return await Promise.all([i.e(0),i.e(1),i.e(59),i.e(20)]).then(i.bind(null,343)),document.createElement("hui-alarm-panel-card-editor")}static getStubConfig(){return{states:["arm_home","arm_away"],entity:""}}getCardSize(){if(!this._config||!this.hass)return 0;const t=this.hass.states[this._config.entity];return t&&"number"===t.attributes.code_format?8:3}setConfig(t){if(!t||!t.entity||"alarm_control_panel"!==t.entity.split(".")[0])throw new Error("Invalid card configuration");this._config=Object.assign({},{states:["arm_away","arm_home"]},t),this._code=""}shouldUpdate(t){if(t.has("_config")||t.has("_code"))return!0;const e=t.get("hass");return!e||e.states[this._config.entity]!==this.hass.states[this._config.entity]}render(){if(!this._config||!this.hass)return r.e``;const t=this.hass.states[this._config.entity];return t?r.e`
      <ha-card
        .header="${this._config.name||t.attributes.friendly_name||this._label(t.state)}"
      >
        <ha-label-badge
          class="${Object(o.a)({[t.state]:!0})}"
          .icon="${c[t.state]||"hass:shield-outline"}"
          .label="${this._stateIconLabel(t.state)}"
        ></ha-label-badge>
        <div id="armActions" class="actions">
          ${("disarmed"===t.state?this._config.states:["disarm"]).map(t=>r.e`
              <mwc-button
                .action="${t}"
                @click="${this._handleActionClick}"
                outlined
              >
                ${this._label(t)}
              </mwc-button>
            `)}
        </div>
        ${t.attributes.code_format?r.e`
              <paper-input
                id="alarmCode"
                label="Alarm Code"
                type="password"
                .value="${this._code}"
              ></paper-input>
            `:r.e``}
        ${"number"!==t.attributes.code_format?r.e``:r.e`
              <div id="keypad">
                ${h.map(t=>""===t?r.e`
                        <mwc-button disabled></mwc-button>
                      `:r.e`
                        <mwc-button
                          .value="${t}"
                          @click="${this._handlePadClick}"
                          dense
                        >
                          ${"clear"===t?this._label("clear_code"):t}
                        </mwc-button>
                      `)}
              </div>
            `}
      </ha-card>
    `:r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}_stateIconLabel(t){const e=t.split("_").pop();return"disarmed"!==e&&"triggered"!==e&&e?e:""}_label(t){return this.hass.localize(`state.alarm_control_panel.${t}`)||this.hass.localize(`ui.card.alarm_control_panel.${t}`)}_handlePadClick(t){const e=t.currentTarget.value;this._code="clear"===e?"":this._code+e}_handleActionClick(t){const e=this.shadowRoot.querySelector("#alarmCode"),i=this._code||(e&&e.value&&e.value.length>0?e.value:"");((t,e,i,a)=>{t.callService("alarm_control_panel","alarm_"+i,{entity_id:e,code:a})})(this.hass,this._config.entity,t.currentTarget.action,i),this._code=""}static get styles(){return r.c`
      ha-card {
        padding-bottom: 16px;
        position: relative;
        --alarm-color-disarmed: var(--label-badge-green);
        --alarm-color-pending: var(--label-badge-yellow);
        --alarm-color-triggered: var(--label-badge-red);
        --alarm-color-armed: var(--label-badge-red);
        --alarm-color-autoarm: rgba(0, 153, 255, 0.1);
        --alarm-state-color: var(--alarm-color-armed);
        --base-unit: 15px;
        font-size: calc(var(--base-unit));
      }

      ha-label-badge {
        --ha-label-badge-color: var(--alarm-state-color);
        --label-badge-text-color: var(--alarm-state-color);
        --label-badge-background-color: var(--paper-card-background-color);
        color: var(--alarm-state-color);
        position: absolute;
        right: 12px;
        top: 12px;
      }

      .disarmed {
        --alarm-state-color: var(--alarm-color-disarmed);
      }

      .triggered {
        --alarm-state-color: var(--alarm-color-triggered);
        animation: pulse 1s infinite;
      }

      .arming {
        --alarm-state-color: var(--alarm-color-pending);
        animation: pulse 1s infinite;
      }

      .pending {
        --alarm-state-color: var(--alarm-color-pending);
        animation: pulse 1s infinite;
      }

      @keyframes pulse {
        0% {
          --ha-label-badge-color: var(--alarm-state-color);
        }
        100% {
          --ha-label-badge-color: rgba(255, 153, 0, 0.3);
        }
      }

      paper-input {
        margin: 0 auto 8px;
        max-width: 150px;
        font-size: calc(var(--base-unit));
        text-align: center;
      }

      .state {
        margin-left: 16px;
        font-size: calc(var(--base-unit) * 0.9);
        position: relative;
        bottom: 16px;
        color: var(--alarm-state-color);
        animation: none;
      }

      #keypad {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: auto;
        width: 300px;
      }

      #keypad mwc-button {
        margin-bottom: 5%;
        width: 30%;
        padding: calc(var(--base-unit));
        font-size: calc(var(--base-unit) * 1.1);
        box-sizing: border-box;
      }

      .actions {
        margin: 0 8px;
        padding-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        font-size: calc(var(--base-unit) * 1);
      }

      .actions mwc-button {
        min-width: calc(var(--base-unit) * 9);
        margin: 0 4px 4px;
      }

      mwc-button#disarm {
        color: var(--google-red-500);
      }
    `}};n.b([Object(r.f)()],d.prototype,"hass",void 0),n.b([Object(r.f)()],d.prototype,"_config",void 0),n.b([Object(r.f)()],d.prototype,"_code",void 0),d=n.b([Object(r.d)("hui-alarm-panel-card")],d);var p=i(233);function u(t,e){return t.every(t=>{const i=e.states[t.entity]?e.states[t.entity].state:"unavailable";return t.state?i===t.state:i!==t.state_not})}function g(t){return t.every(t=>t.entity&&(t.state||t.state_not))}customElements.define("hui-conditional-card",class extends HTMLElement{setConfig(t){if(!(t.card&&t.conditions&&Array.isArray(t.conditions)&&g(t.conditions)))throw new Error("Error in card configuration.");this._card&&this._card.parentElement&&this.removeChild(this._card),this._config=t,this._card=Fe(t.card),this.update()}set hass(t){this._hass=t,this.update()}getCardSize(){return Object(p.a)(this._card)}update(){if(!this._card||!this._hass)return;const t=this._config&&u(this._config.conditions,this._hass);t?(this._card.hass=this._hass,this._card.parentElement||this.appendChild(this._card)):this._card.parentElement&&this.removeChild(this._card),this.style.setProperty("display",t?"":"none")}});var f=i(118),m=i(119);var b=i(101);let _=class extends r.a{updated(t){super.updated(t),t.has("entities")&&(this._toggleEntities=this.entities.filter(t=>t in this.hass.states&&f.f.has(t.split(".",1)[0])))}render(){return this._toggleEntities?r.e`
      <paper-toggle-button
        aria-label="Toggle entities."
        ?checked="${this._toggleEntities.some(t=>{const e=this.hass.states[t];return e&&"on"===e.state})}"
        @change="${this._callService}"
      ></paper-toggle-button>
    `:r.e``}static get styles(){return r.c`
      :host {
        width: 38px;
        display: block;
      }
      paper-toggle-button {
        cursor: pointer;
        --paper-toggle-button-label-spacing: 0;
        padding: 13px 5px;
        margin: -4px -5px;
      }
    `}_callService(t){Object(b.a)("light");const e=t.target.checked;((t,e,i=!0)=>{const a={};e.forEach(e=>{if(f.i.includes(t.states[e].state)===i){const t=Object(m.a)(e),i=["cover","lock"].includes(t)?t:"homeassistant";i in a||(a[i]=[]),a[i].push(e)}}),Object.keys(a).forEach(e=>{let s;switch(e){case"lock":s=i?"unlock":"lock";break;case"cover":s=i?"open_cover":"close_cover";break;default:s=i?"turn_on":"turn_off"}const n=a[e];t.callService(e,s,{entity_id:n})})})(this.hass,this._toggleEntities,e)}};n.b([Object(r.f)()],_.prototype,"entities",void 0),n.b([Object(r.f)()],_.prototype,"hass",void 0),n.b([Object(r.f)()],_.prototype,"_toggleEntities",void 0),_=n.b([Object(r.d)("hui-entities-toggle")],_);var v=i(204),y=i(224),w=(i(250),i(167)),x=(i(176),i(195),i(169),i(93)),k=i(127);class O extends r.a{constructor(){super(...arguments),this.showSecondary=!0}render(){if(!this.hass||!this.config)return r.e``;const t=this.config.entity?this.hass.states[this.config.entity]:void 0;return t?r.e`
      <state-badge
        .hass=${this.hass}
        .stateObj=${t}
        .overrideIcon=${this.config.icon}
      ></state-badge>
      <div class="flex">
        <div class="info">
          ${this.config.name||Object(w.a)(t)}
          <div class="secondary">
            ${this.showSecondary?"entity-id"===this.config.secondary_info?t.entity_id:"last-changed"===this.config.secondary_info?r.e`
                  <ha-relative-time
                    .hass=${this.hass}
                    .datetime=${t.last_changed}
                  ></ha-relative-time>
                `:"":r.e`
                  <slot name="secondary"></slot>
                `}
          </div>
        </div>

        <slot></slot>
      </div>
    `:r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this.config.entity)}</hui-warning
        >
      `}updated(t){super.updated(t),t.has("hass")&&Object(k.a)(this,"rtl",Object(x.a)(this.hass))}static get styles(){return r.c`
      :host {
        display: flex;
        align-items: center;
      }
      .flex {
        flex: 1;
        margin-left: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-width: 0;
      }
      .info {
        flex: 1 0 60px;
      }
      .info,
      .info > * {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .flex ::slotted(*) {
        margin-left: 8px;
        min-width: 0;
      }
      .flex ::slotted([slot="secondary"]) {
        margin-left: 0;
      }
      .secondary,
      ha-relative-time {
        display: block;
        color: var(--secondary-text-color);
      }
      state-badge {
        flex: 0 0 40px;
      }
      :host([rtl]) .flex {
        margin-left: 0;
        margin-right: 16px;
      }
      :host([rtl]) .flex ::slotted(*) {
        margin-left: 0;
        margin-right: 8px;
      }
    `}}function $(t,e){if(e.has("_config"))return!0;const i=e.get("hass");return!i||(i.states[t._config.entity]!==t.hass.states[t._config.entity]||i.localize!==t.hass.localize)}n.b([Object(r.f)()],O.prototype,"hass",void 0),n.b([Object(r.f)()],O.prototype,"config",void 0),n.b([Object(r.f)()],O.prototype,"showSecondary",void 0),customElements.define("hui-generic-entity-row",O);let j=class extends r.a{setConfig(t){if(!t||!t.entity)throw new Error("Invalid Configuration: 'entity' required");this._config=t}shouldUpdate(t){return $(this,t)}render(){if(!this.hass||!this._config)return r.e``;const t=this.hass.states[this._config.entity];return t?r.e`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        <ha-climate-state
          .hass="${this.hass}"
          .stateObj="${t}"
        ></ha-climate-state>
      </hui-generic-entity-row>
    `:r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}static get styles(){return r.c`
      ha-climate-state {
        text-align: right;
      }
    `}};n.b([Object(r.f)()],j.prototype,"hass",void 0),n.b([Object(r.f)()],j.prototype,"_config",void 0),j=n.b([Object(r.d)("hui-climate-entity-row")],j);i(251),i(235);var C=i(200);let E=class extends r.a{setConfig(t){if(!t)throw new Error("Configuration error");this._config=t}shouldUpdate(t){return $(this,t)}render(){if(!this._config||!this.hass)return r.e``;const t=this.hass.states[this._config.entity];return t?r.e`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        ${Object(C.b)(t)?r.e`
              <ha-cover-tilt-controls
                .hass="${this.hass}"
                .stateObj="${t}"
              ></ha-cover-tilt-controls>
            `:r.e`
              <ha-cover-controls
                .hass="${this.hass}"
                .stateObj="${t}"
              ></ha-cover-controls>
            `}
      </hui-generic-entity-row>
    `:r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}static get styles(){return r.c`
      ha-cover-controls,
      ha-cover-tilt-controls {
        margin-right: -0.57em;
      }
    `}};n.b([Object(r.f)()],E.prototype,"hass",void 0),n.b([Object(r.f)()],E.prototype,"_config",void 0),E=n.b([Object(r.d)("hui-cover-entity-row")],E);i(205);var S=i(190);let T=class extends r.a{setConfig(t){if(!t)throw new Error("Configuration error");this._config=t}shouldUpdate(t){return $(this,t)}render(){if(!this._config||!this.hass)return r.e``;const t=this.hass.states[this._config.entity];return t?r.e`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        ${this._computeCanToggle(t.attributes.entity_id)?r.e`
              <ha-entity-toggle
                .hass="${this.hass}"
                .stateObj="${t}"
              ></ha-entity-toggle>
            `:r.e`
              <div>
                ${Object(S.a)(this.hass.localize,t,this.hass.language)}
              </div>
            `}
      </hui-generic-entity-row>
    `:r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}_computeCanToggle(t){return t.some(t=>f.f.has(t.split(".",1)[0]))}};n.b([Object(r.f)()],T.prototype,"hass",void 0),n.b([Object(r.f)()],T.prototype,"_config",void 0),T=n.b([Object(r.d)("hui-group-entity-row")],T);i(252),i(92);let z=class extends r.a{constructor(){super(...arguments),this.disabled=!1}static get styles(){return r.c`
      :host {
        display: block;
        font-family: var(--paper-font-common-base_-_font-family);
        -webkit-font-smoothing: var(
          --paper-font-common-base_-_-webkit-font-smoothing
        );
      }

      paper-input {
        width: 30px;
        text-align: center;
        --paper-input-container-shared-input-style_-_-webkit-appearance: textfield;
        --paper-input-container-input_-_-moz-appearance: textfield;
        --paper-input-container-shared-input-style_-_appearance: textfield;
        --paper-input-container-input-webkit-spinner_-_-webkit-appearance: none;
        --paper-input-container-input-webkit-spinner_-_margin: 0;
        --paper-input-container-input-webkit-spinner_-_display: none;
      }

      paper-input#year {
        width: 50px;
      }

      .date-input-wrap {
        display: flex;
        flex-direction: row;
      }
    `}render(){return r.e`
      <div class="date-input-wrap">
        <paper-input
          id="year"
          type="number"
          .value=${this.year}
          @change=${this._formatYear}
          maxlength="4"
          max="9999"
          min="0"
          .disabled=${this.disabled}
          no-label-float
        >
          <span suffix="" slot="suffix">-</span>
        </paper-input>
        <paper-input
          id="month"
          type="number"
          .value=${this.month}
          @change=${this._formatMonth}
          maxlength="2"
          max="12"
          min="1"
          .disabled=${this.disabled}
          no-label-float
        >
          <span suffix="" slot="suffix">-</span>
        </paper-input>
        <paper-input
          id="day"
          type="number"
          .value=${this.day}
          @change=${this._formatDay}
          maxlength="2"
          max="31"
          min="1"
          .disabled=${this.disabled}
          no-label-float
        >
        </paper-input>
      </div>
    `}_formatYear(){const t=this.shadowRoot.getElementById("year");this.year=t.value}_formatMonth(){const t=this.shadowRoot.getElementById("month");this.month=("0"+t.value).slice(-2)}_formatDay(){const t=this.shadowRoot.getElementById("day");this.day=("0"+t.value).slice(-2)}get value(){return`${this.year}-${this.month}-${this.day}`}};n.b([Object(r.f)()],z.prototype,"year",void 0),n.b([Object(r.f)()],z.prototype,"month",void 0),n.b([Object(r.f)()],z.prototype,"day",void 0),n.b([Object(r.f)({type:Boolean})],z.prototype,"disabled",void 0),z=n.b([Object(r.d)("ha-date-input")],z);let I=class extends r.a{setConfig(t){if(!t)throw new Error("Configuration error");this._config=t}shouldUpdate(t){return $(this,t)}render(){if(!this._config||!this.hass)return r.e``;const t=this.hass.states[this._config.entity];return t?r.e`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        ${t.attributes.has_date?r.e`
              <ha-date-input
                .year=${t.attributes.year}
                .month=${("0"+t.attributes.month).slice(-2)}
                .day=${("0"+t.attributes.day).slice(-2)}
                @change=${this._selectedValueChanged}
                @click=${this._stopEventPropagation}
              ></ha-date-input>
              ${t.attributes.has_time?",":""}
            `:""}
        ${t.attributes.has_time?r.e`
              <paper-time-input
                .hour=${"unknown"===t.state?"":("0"+t.attributes.hour).slice(-2)}
                .min=${"unknown"===t.state?"":("0"+t.attributes.minute).slice(-2)}
                .amPm=${!1}
                @change=${this._selectedValueChanged}
                @click=${this._stopEventPropagation}
                hide-label
                format="24"
              ></paper-time-input>
            `:""}
      </hui-generic-entity-row>
    `:r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}_stopEventPropagation(t){t.stopPropagation()}get _timeInputEl(){return this.shadowRoot.querySelector("paper-time-input")}get _dateInputEl(){return this.shadowRoot.querySelector("ha-date-input")}_selectedValueChanged(t){const e=this.hass.states[this._config.entity],i=null!==this._timeInputEl?this._timeInputEl.value.trim()+":00":void 0,a=null!==this._dateInputEl?this._dateInputEl.value:void 0;i!==e.state&&((t,e,i,a)=>{const s={entity_id:e,time:i,date:a};t.callService(e.split(".",1)[0],"set_datetime",s)})(this.hass,e.entity_id,i,a),t.target.blur()}};n.b([Object(r.f)()],I.prototype,"hass",void 0),n.b([Object(r.f)()],I.prototype,"_config",void 0),I=n.b([Object(r.d)("hui-input-datetime-entity-row")],I);i(253);const M=(t,e,i)=>t.callService(e.split(".",1)[0],"set_value",{value:i,entity_id:e});let P=class extends r.a{setConfig(t){if(!t)throw new Error("Configuration error");this._config=t}connectedCallback(){super.connectedCallback(),this._updated&&!this._loaded&&this._initialLoad()}firstUpdated(){this._updated=!0,this.isConnected&&!this._loaded&&this._initialLoad()}shouldUpdate(t){return $(this,t)}render(){if(!this._config||!this.hass)return r.e``;const t=this.hass.states[this._config.entity];return t?r.e`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        <div>
          ${"slider"===t.attributes.mode?r.e`
                <div class="flex">
                  <ha-slider
                    .dir="${Object(x.b)(this.hass)}"
                    .step="${Number(t.attributes.step)}"
                    .min="${Number(t.attributes.min)}"
                    .max="${Number(t.attributes.max)}"
                    .value="${Number(t.state)}"
                    pin
                    @change="${this._selectedValueChanged}"
                    ignore-bar-touch
                    id="input"
                  ></ha-slider>
                  <span class="state">
                    ${Number(t.state)}
                    ${t.attributes.unit_of_measurement}
                  </span>
                </div>
              `:r.e`
                <paper-input
                  no-label-float
                  auto-validate
                  .pattern="[0-9]+([\\.][0-9]+)?"
                  .step="${Number(t.attributes.step)}"
                  .min="${Number(t.attributes.min)}"
                  .max="${Number(t.attributes.max)}"
                  .value="${Number(t.state)}"
                  type="number"
                  @change="${this._selectedValueChanged}"
                  id="input"
                ></paper-input>
              `}
        </div>
      </hui-generic-entity-row>
    `:r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}static get styles(){return r.c`
      .flex {
        display: flex;
        align-items: center;
      }
      .state {
        min-width: 45px;
        text-align: end;
      }
      paper-input {
        text-align: end;
      }
    `}async _initialLoad(){this._loaded=!0,await this.updateComplete;const t=this.shadowRoot.querySelector(".state");t&&this.parentElement&&(t.hidden=this.parentElement.clientWidth<=350)}get _inputElement(){return this.shadowRoot.getElementById("input")}_selectedValueChanged(){const t=this._inputElement,e=this.hass.states[this._config.entity];t.value!==e.state&&M(this.hass,e.entity_id,t.value)}};n.b([Object(r.f)()],P.prototype,"hass",void 0),n.b([Object(r.f)()],P.prototype,"_config",void 0),P=n.b([Object(r.d)("hui-input-number-entity-row")],P);i(137),i(138),i(202);var L=i(254),D=i(255);let A=class extends r.a{setConfig(t){if(!t||!t.entity)throw new Error("Invalid Configuration: 'entity' required");this._config=t}shouldUpdate(t){return $(this,t)}render(){if(!this.hass||!this._config)return r.e``;const t=this.hass.states[this._config.entity];return t?r.e`
      <state-badge .stateObj="${t}"></state-badge>
      <ha-paper-dropdown-menu
        .label=${this._config.name||Object(w.a)(t)}
        .value=${t.state}
        @iron-select=${this._selectedChanged}
        @click=${D.a}
      >
        <paper-listbox slot="dropdown-content">
          ${t.attributes.options.map(t=>r.e`
              <paper-item>${t}</paper-item>
            `)}
        </paper-listbox>
      </ha-paper-dropdown-menu>
    `:r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}updated(t){if(super.updated(t),!this.hass||!this._config)return;const e=this.hass.states[this._config.entity];e&&(this.shadowRoot.querySelector("paper-listbox").selected=e.attributes.options.indexOf(e.state))}static get styles(){return r.c`
      :host {
        display: flex;
        align-items: center;
      }
      ha-paper-dropdown-menu {
        margin-left: 16px;
        flex: 1;
      }

      paper-item {
        cursor: pointer;
        min-width: 200px;
      }
    `}_selectedChanged(t){const e=this.hass.states[this._config.entity],i=t.target.selectedItem.innerText.trim();i!==e.state&&(Object(b.a)("light"),Object(L.a)(this.hass,e.entity_id,i))}};n.b([Object(r.f)()],A.prototype,"hass",void 0),n.b([Object(r.f)()],A.prototype,"_config",void 0),A=n.b([Object(r.d)("hui-input-select-entity-row")],A);let B=class extends r.a{setConfig(t){if(!t)throw new Error("Configuration error");this._config=t}shouldUpdate(t){return $(this,t)}render(){if(!this._config||!this.hass)return r.e``;const t=this.hass.states[this._config.entity];return t?r.e`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        <paper-input
          no-label-float
          .value="${t.state}"
          .minlength="${t.attributes.min}"
          .maxlength="${t.attributes.max}"
          .autoValidate="${t.attributes.pattern}"
          .pattern="${t.attributes.pattern}"
          .type="${t.attributes.mode}"
          @change="${this._selectedValueChanged}"
          placeholder="(empty value)"
        ></paper-input>
      </hui-generic-entity-row>
    `:r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}get _inputEl(){return this.shadowRoot.querySelector("paper-input")}_selectedValueChanged(t){const e=this._inputEl,i=this.hass.states[this._config.entity];e.value!==i.state&&M(this.hass,i.entity_id,e.value),t.target.blur()}};n.b([Object(r.f)()],B.prototype,"hass",void 0),n.b([Object(r.f)()],B.prototype,"_config",void 0),B=n.b([Object(r.d)("hui-input-text-entity-row")],B);let R=class extends r.a{setConfig(t){if(!t)throw new Error("Configuration error");this._config=t}shouldUpdate(t){return $(this,t)}render(){if(!this._config||!this.hass)return r.e``;const t=this.hass.states[this._config.entity];return t?r.e`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        <mwc-button @click="${this._callService}">
          ${"locked"===t.state?this.hass.localize("ui.card.lock.unlock"):this.hass.localize("ui.card.lock.lock")}
        </mwc-button>
      </hui-generic-entity-row>
    `:r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}static get styles(){return r.c`
      mwc-button {
        margin-right: -0.57em;
      }
    `}_callService(t){t.stopPropagation();const e=this.hass.states[this._config.entity];this.hass.callService("lock","locked"===e.state?"unlock":"lock",{entity_id:e.entity_id})}};n.b([Object(r.f)()],R.prototype,"hass",void 0),n.b([Object(r.f)()],R.prototype,"_config",void 0),R=n.b([Object(r.d)("hui-lock-entity-row")],R);i(107);var N=i(188),H=i(237);const U=["off","idle"],V=(t,e)=>Object(H.a)("_media_playerTmb",9e3,F,t,e),F=(t,e)=>t.callWS({type:"media_player_thumbnail",entity_id:e});let q=class extends r.a{setConfig(t){if(!t||!t.entity)throw new Error("Invalid Configuration: 'entity' required");this._config=t}shouldUpdate(t){return $(this,t)}render(){if(!this.hass||!this._config)return r.e``;const t=this.hass.states[this._config.entity];return t?r.e`
      <hui-generic-entity-row
        .hass="${this.hass}"
        .config="${this._config}"
        .showSecondary="false"
      >
        ${U.includes(t.state)?r.e`
              <div>
                ${this.hass.localize(`state.media_player.${t.state}`)||this.hass.localize(`state.default.${t.state}`)||t.state}
              </div>
            `:r.e`
              <div class="controls">
                ${"playing"===t.state||Object(N.a)(t,16384)?r.e`
                      <paper-icon-button
                        icon="${this._computeControlIcon(t)}"
                        @click="${this._playPause}"
                      ></paper-icon-button>
                    `:""}
                ${Object(N.a)(t,32)?r.e`
                      <paper-icon-button
                        icon="hass:skip-next"
                        @click="${this._nextTrack}"
                      ></paper-icon-button>
                    `:""}
              </div>
              <div slot="secondary">${this._computeMediaTitle(t)}</div>
            `}
      </hui-generic-entity-row>
    `:r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}static get styles(){return r.c`
      .controls {
        white-space: nowrap;
      }
    `}_computeControlIcon(t){return"playing"!==t.state?"hass:play":Object(N.a)(t,1)?"hass:pause":"hass:stop"}_computeMediaTitle(t){let e,i;switch(t.attributes.media_content_type){case"music":e=t.attributes.media_artist,i=t.attributes.media_title;break;case"tvshow":e=t.attributes.media_series_title,i=t.attributes.media_title;break;default:e=t.attributes.media_title||t.attributes.app_name||t.state,i=""}return e&&i?`${e}: ${i}`:e||i||""}_playPause(t){t.stopPropagation(),this.hass.callService("media_player","media_play_pause",{entity_id:this._config.entity})}_nextTrack(t){t.stopPropagation(),this.hass.callService("media_player","media_next_track",{entity_id:this._config.entity})}};n.b([Object(r.f)()],q.prototype,"hass",void 0),n.b([Object(r.f)()],q.prototype,"_config",void 0),q=n.b([Object(r.d)("hui-media-player-entity-row")],q);let W=class extends r.a{setConfig(t){if(!t)throw new Error("Configuration error");this._config=t}shouldUpdate(t){return $(this,t)}render(){if(!this._config||!this.hass)return r.e``;const t=this.hass.states[this._config.entity];return t?r.e`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        ${t.attributes.can_cancel?r.e`
              <ha-entity-toggle
                .hass="${this.hass}"
                .stateObj="${t}"
              ></ha-entity-toggle>
            `:r.e`
              <mwc-button @click="${this._callService}">
                ${this.hass.localize("ui.card.scene.activate")}
              </mwc-button>
            `}
      </hui-generic-entity-row>
    `:r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}static get styles(){return r.c`
      mwc-button {
        margin-right: -0.57em;
      }
    `}_callService(t){t.stopPropagation(),this.hass.callService("scene","turn_on",{entity_id:this._config.entity})}};n.b([Object(r.f)()],W.prototype,"hass",void 0),n.b([Object(r.f)()],W.prototype,"_config",void 0),W=n.b([Object(r.d)("hui-scene-entity-row")],W);let K=class extends r.a{setConfig(t){if(!t)throw new Error("Configuration error");this._config=t}shouldUpdate(t){return $(this,t)}render(){if(!this._config||!this.hass)return r.e``;const t=this.hass.states[this._config.entity];return t?r.e`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        ${t.attributes.can_cancel?r.e`
              <ha-entity-toggle
                .hass="${this.hass}"
                .stateObj="${t}"
              ></ha-entity-toggle>
            `:r.e`
              <mwc-button @click="${this._callService}">
                ${this.hass.localize("ui.card.script.execute")}
              </mwc-button>
            `}
      </hui-generic-entity-row>
    `:r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}static get styles(){return r.c`
      mwc-button {
        margin-right: -0.57em;
      }
    `}_callService(t){t.stopPropagation(),this.hass.callService("script","turn_on",{entity_id:this._config.entity})}};n.b([Object(r.f)()],K.prototype,"_config",void 0),K=n.b([Object(r.d)("hui-script-entity-row")],K);var X=i(236),Y=i(201),Z=i(207),Q=i(203);const J={date:X.a,datetime:Y.a,time:Z.a},G=["relative","total"];let tt=class extends r.a{connectedCallback(){super.connectedCallback(),this._connected=!0,this._startInterval()}disconnectedCallback(){super.disconnectedCallback(),this._connected=!1,this._clearInterval()}render(){if(!this.ts||!this.hass)return r.e``;if(isNaN(this.ts.getTime()))return r.e`
        Invalid date
      `;const t=this._format;return G.includes(t)?r.e`
        ${this._relative}
      `:t in J?r.e`
        ${J[t](this.ts,this.hass.language)}
      `:r.e`
      Invalid format
    `}updated(t){super.updated(t),t.has("format")&&this._connected&&(G.includes("relative")?this._startInterval():this._clearInterval())}get _format(){return this.format||"relative"}_startInterval(){this._clearInterval(),this._connected&&G.includes(this._format)&&(this._updateRelative(),this._interval=window.setInterval(()=>this._updateRelative(),1e3))}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=void 0)}_updateRelative(){this.ts&&this.hass.localize&&(this._relative="relative"===this._format?Object(Q.a)(this.ts,this.hass.localize):this._relative=Object(Q.a)(new Date,this.hass.localize,{compareTime:this.ts,includeTense:!1}))}};n.b([Object(r.f)()],tt.prototype,"hass",void 0),n.b([Object(r.f)()],tt.prototype,"ts",void 0),n.b([Object(r.f)()],tt.prototype,"format",void 0),n.b([Object(r.f)()],tt.prototype,"_relative",void 0),tt=n.b([Object(r.d)("hui-timestamp-display")],tt);let et=class extends r.a{setConfig(t){if(!t)throw new Error("Configuration error");this._config=t}shouldUpdate(t){return $(this,t)}render(){if(!this._config||!this.hass)return r.e``;const t=this.hass.states[this._config.entity];return t?r.e`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        <div>
          ${"timestamp"===t.attributes.device_class&&"unavailable"!==t.state?r.e`
                <hui-timestamp-display
                  .hass="${this.hass}"
                  .ts="${new Date(t.state)}"
                  .format="${this._config.format}"
                ></hui-timestamp-display>
              `:Object(S.a)(this.hass.localize,t,this.hass.language)}
        </div>
      </hui-generic-entity-row>
    `:r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}static get styles(){return r.c`
      div {
        text-align: right;
      }
    `}};n.b([Object(r.f)()],et.prototype,"hass",void 0),n.b([Object(r.f)()],et.prototype,"_config",void 0),et=n.b([Object(r.d)("hui-sensor-entity-row")],et);let it=class extends r.a{setConfig(t){if(!t)throw new Error("Configuration error");this._config=t}shouldUpdate(t){return $(this,t)}render(){if(!this._config||!this.hass)return r.e``;const t=this.hass.states[this._config.entity];return t?r.e`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        <div>
          ${Object(S.a)(this.hass.localize,t,this.hass.language)}
        </div>
      </hui-generic-entity-row>
    `:r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}static get styles(){return r.c`
      div {
        text-align: right;
      }
    `}};n.b([Object(r.f)()],it.prototype,"hass",void 0),n.b([Object(r.f)()],it.prototype,"_config",void 0),it=n.b([Object(r.d)("hui-text-entity-row")],it);var at=i(245),st=i(231);let nt=class extends r.a{setConfig(t){if(!t)throw new Error("Configuration error");this._config=t}disconnectedCallback(){super.disconnectedCallback(),this._clearInterval()}connectedCallback(){if(super.connectedCallback(),this._config&&this._config.entity){const t=this.hass.states[this._config.entity];t&&this._startInterval(t)}}render(){if(!this._config||!this.hass)return r.e``;const t=this.hass.states[this._config.entity];return t?r.e`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        <div>${this._computeDisplay(t)}</div>
      </hui-generic-entity-row>
    `:r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}shouldUpdate(t){return!!t.has("_timeRemaining")||$(this,t)}updated(t){if(super.updated(t),t.has("hass")){const e=this.hass.states[this._config.entity],i=t.get("hass");(i?i.states[this._config.entity]:void 0)!==e?this._startInterval(e):e||this._clearInterval()}}_clearInterval(){this._interval&&(window.clearInterval(this._interval),this._interval=void 0)}_startInterval(t){this._clearInterval(),this._calculateRemaining(t),"active"===t.state&&(this._interval=window.setInterval(()=>this._calculateRemaining(t),1e3))}_calculateRemaining(t){this._timeRemaining=Object(at.a)(t)}_computeDisplay(t){if(!t)return null;if("idle"===t.state||0===this._timeRemaining)return this.hass.localize("state.timer."+t.state);let e=Object(st.a)(this._timeRemaining||0);return"paused"===t.state&&(e+=` (${this.hass.localize("state.timer.paused")})`),e}};n.b([Object(r.f)()],nt.prototype,"hass",void 0),n.b([Object(r.f)()],nt.prototype,"_config",void 0),n.b([Object(r.f)()],nt.prototype,"_timeRemaining",void 0),nt=n.b([Object(r.d)("hui-timer-entity-row")],nt);let rt=class extends r.a{setConfig(t){if(!t)throw new Error("Configuration error");this._config=t}shouldUpdate(t){return $(this,t)}render(){if(!this._config||!this.hass)return r.e``;const t=this.hass.states[this._config.entity];return t?r.e`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        ${"on"===t.state||"off"===t.state?r.e`
              <ha-entity-toggle
                .hass="${this.hass}"
                .stateObj="${t}"
              ></ha-entity-toggle>
            `:r.e`
              <div>
                ${Object(S.a)(this.hass.localize,t,this.hass.language)}
              </div>
            `}
      </hui-generic-entity-row>
    `:r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}};n.b([Object(r.f)()],rt.prototype,"hass",void 0),n.b([Object(r.f)()],rt.prototype,"_config",void 0),rt=n.b([Object(r.d)("hui-toggle-entity-row")],rt);i(84);let ot=class extends r.a{setConfig(t){if(!t||!t.name||!t.service)throw new Error("Error in card configuration.");this._config=Object.assign({icon:"hass:remote",action_name:"Run"},t)}render(){return this._config?r.e`
      <ha-icon .icon="${this._config.icon}"></ha-icon>
      <div class="flex">
        <div>${this._config.name}</div>
        <mwc-button @click="${this._callService}"
          >${this._config.action_name}</mwc-button
        >
      </div>
    `:r.e``}static get styles(){return r.c`
      :host {
        display: flex;
        align-items: center;
      }
      ha-icon {
        padding: 8px;
        color: var(--paper-item-icon-color);
      }
      .flex {
        flex: 1;
        overflow: hidden;
        margin-left: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .flex div {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      mwc-button {
        margin-right: -0.57em;
      }
    `}_callService(){((t,e)=>{const i=t.entity,[a,s]=t.service.split(".",2),n=Object.assign({entity_id:i},t.service_data);e.callService(a,s,n)})(this._config,this.hass)}};n.b([Object(r.f)()],ot.prototype,"_config",void 0),ot=n.b([Object(r.d)("hui-call-service-row")],ot);let lt=class extends r.a{setConfig(t){if(!t)throw new Error("Error in card configuration.");this._config=Object.assign({style:{height:"1px","background-color":"var(--secondary-text-color)"}},t)}render(){if(!this._config)return r.e``;const t=document.createElement("div");return Object.keys(this._config.style).forEach(e=>{t.style.setProperty(e,this._config.style[e])}),r.e`
      ${t}
    `}};n.b([Object(r.f)()],lt.prototype,"_config",void 0),lt=n.b([Object(r.d)("hui-divider-row")],lt);let ct=class extends r.a{setConfig(t){if(!t)throw new Error("Error in card configuration.");this._config=t}render(){return this._config?r.e`
      <div class="divider"></div>
      ${this._config.label?r.e`
            <div class="label">${this._config.label}</div>
          `:r.e``}
    `:r.e``}static get styles(){return r.c`
      .label {
        color: var(--primary-color);
        margin-left: 8px;
        margin-bottom: 16px;
        margin-top: 16px;
      }
      .divider {
        height: 1px;
        background-color: var(--secondary-text-color);
        opacity: 0.25;
        margin-left: -16px;
        margin-right: -16px;
        margin-top: 8px;
      }
    `}};n.b([Object(r.f)()],ct.prototype,"_config",void 0),ct=n.b([Object(r.d)("hui-section-row")],ct);let ht=class extends r.a{setConfig(t){if(!t||!t.url)throw new Error("Invalid Configuration: 'url' required");this._config=Object.assign({icon:"hass:link",name:t.url},t)}render(){return this._config?r.e`
      <a
        href=${this._config.url}
        target=${-1!==this._config.url.indexOf("://")?"_blank":""}
      >
        <ha-icon .icon="${this._config.icon}"></ha-icon>
        <div>${this._config.name}</div>
      </a>
    `:r.e``}static get styles(){return r.c`
      a {
        display: flex;
        align-items: center;
        color: var(--primary-color);
      }
      ha-icon {
        padding: 8px;
        color: var(--paper-item-icon-color);
      }
      div {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-left: 16px;
      }
    `}};n.b([Object(r.f)()],ht.prototype,"_config",void 0),ht=n.b([Object(r.d)("hui-weblink-row")],ht);var dt=i(281);let pt=class extends r.a{constructor(){super(...arguments),this._noHTTPS=!1}setConfig(t){if(!t||void 0===t.view||null===t.view)throw new Error("Invalid Configuration: 'view' required");this._config=Object.assign({icon:"hass:television",name:"ioBroker Cast"},t)}render(){if(!this._config)return r.e``;const t=this._castManager&&this._castManager.status&&this._config.view===this._castManager.status.lovelacePath;return r.e`
      <ha-icon .icon="${this._config.icon}"></ha-icon>
      <div class="flex">
        <div class="name">${this._config.name}</div>
        ${this._noHTTPS?r.e`
              Cast requires HTTPS
            `:void 0===this._castManager?r.e``:null===this._castManager?r.e`
              Cast API unavailable
            `:"NO_DEVICES_AVAILABLE"===this._castManager.castState?r.e`
              No devices found
            `:r.e`
              <div class="controls">
                <google-cast-launcher></google-cast-launcher>
                <mwc-button
                  @click=${this._sendLovelace}
                  class=${Object(o.a)({inactive:!Boolean(t)})}
                  .unelevated=${t}
                  .disabled=${!this._castManager.status}
                >
                  SHOW
                </mwc-button>
              </div>
            `}
      </div>
    `}firstUpdated(t){super.firstUpdated(t),"http:"===location.protocol&&"localhost"!==location.hostname&&(this._noHTTPS=!0),i.e(81).then(i.bind(null,378)).then(({getCastManager:t})=>t(this.hass.auth).then(t=>{this._castManager=t,t.addEventListener("connection-changed",()=>{this.requestUpdate()}),t.addEventListener("state-changed",()=>{this.requestUpdate()})},()=>{this._castManager=null}))}updated(t){super.updated(t),this._config&&this._config.hide_if_unavailable&&(this.style.display=this._castManager&&"NO_DEVICES_AVAILABLE"!==this._castManager.castState?"":"none")}async _sendLovelace(){await Object(dt.c)(this._castManager,this.hass.auth),Object(dt.b)(this._castManager,this._config.view)}static get styles(){return r.c`
      :host {
        display: flex;
        align-items: center;
      }
      ha-icon {
        padding: 8px;
        color: var(--paper-item-icon-color);
      }
      .flex {
        flex: 1;
        margin-left: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .controls {
        display: flex;
        align-items: center;
      }
      google-cast-launcher {
        margin-right: 0.57em;
        cursor: pointer;
        display: inline-block;
        height: 24px;
        width: 24px;
      }
      .inactive {
        padding: 0 4px;
      }
    `}};n.b([Object(r.f)()],pt.prototype,"_config",void 0),n.b([Object(r.f)()],pt.prototype,"_castManager",void 0),n.b([Object(r.f)()],pt.prototype,"_noHTTPS",void 0),pt=n.b([Object(r.d)("hui-cast-row")],pt);const ut=new Set(["call-service","divider","section","weblink","cast","select"]),gt={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},ft=(t,e)=>{const i=document.createElement(t);try{i.setConfig(Object(a.a)(e))}catch(s){return console.error(t,s),mt(s.message,e)}return i},mt=(t,e)=>Object(y.b)(Object(y.a)(t,e)),bt=t=>{let e;if(!t||"object"!=typeof t||!t.entity&&!t.type)return mt("Invalid config given.",t);const i=t.type||"default";if(ut.has(i))return ft(`hui-${i}-row`,t);if(i.startsWith("custom:")){if(e=i.substr("custom:".length),customElements.get(e))return ft(e,t);const a=mt(`Custom element doesn't exist: ${e}.`,t),n=(t=>(t.style.display="None",window.setTimeout(()=>{t.style.display=""},2e3)))(a);return customElements.whenDefined(e).then(()=>{clearTimeout(n),Object(s.a)(a,"ll-rebuild")}),a}if(!t.entity)return mt("Invalid config given.",t);const a=t.entity.split(".",1)[0];return ft(e=`hui-${gt[a]||"text"}-entity-row`,t)};var _t=i(95);let vt=class extends r.a{static async getConfigElement(){return await Promise.all([i.e(0),i.e(1),i.e(60),i.e(28)]).then(i.bind(null,344)),document.createElement("hui-entities-card-editor")}static getStubConfig(){return{entities:[]}}set hass(t){this._hass=t,this.shadowRoot.querySelectorAll("#states > div > *").forEach(e=>{e.hass=t});const e=this.shadowRoot.querySelector("hui-entities-toggle");e&&(e.hass=t)}getCardSize(){return this._config?(this._config.title?1:0)+this._config.entities.length:0}setConfig(t){const e=Object(v.a)(t.entities);this._config=Object.assign({theme:"default"},t),this._configEntities=e}updated(t){super.updated(t),this._hass&&this._config&&Object(_t.a)(this,this._hass.themes,this._config.theme)}render(){if(!this._config||!this._hass)return r.e``;const{show_header_toggle:t,title:e}=this._config;return r.e`
      <ha-card>
        ${e||t?r.e`
              <div class="card-header">
                <div class="name">${e}</div>
                ${!1===t?r.e``:r.e`
                      <hui-entities-toggle
                        .hass="${this._hass}"
                        .entities="${this._configEntities.map(t=>t.entity)}"
                      ></hui-entities-toggle>
                    `}
              </div>
            `:r.e``}
        <div id="states" class="card-content">
          ${this._configEntities.map(t=>this.renderEntity(t))}
        </div>
      </ha-card>
    `}static get styles(){return r.c`
      .card-header {
        display: flex;
        justify-content: space-between;
      }

      .card-header .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .card-header hui-entities-toggle {
        margin: -4px 0;
      }

      #states > * {
        margin: 8px 0;
      }

      #states > div > * {
        overflow: hidden;
      }

      .state-card-dialog {
        cursor: pointer;
      }
    `}renderEntity(t){const e=bt(t);return this._hass&&(e.hass=this._hass),t.entity&&!f.d.includes(Object(m.a)(t.entity))&&(e.classList.add("state-card-dialog"),e.addEventListener("click",()=>this._handleClick(t))),r.e`
      <div>${e}</div>
    `}_handleClick(t){const e=t.entity;Object(s.a)(this,"hass-more-info",{entityId:e})}};n.b([Object(r.f)()],vt.prototype,"_config",void 0),vt=n.b([Object(r.d)("hui-entities-card")],vt);var yt=i(208),wt=i(14),xt=i(74);class kt extends wt.b{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.interactionNode=this}connectedCallback(){if(this.interactionNode===this){const t=this.parentNode;t instanceof HTMLElement&&(this.interactionNode=t)}super.connectedCallback()}render(){const t={"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--accent":this.accent},{disabled:e,unbounded:i,active:a,interactionNode:s}=this,n={disabled:e,unbounded:i,interactionNode:s};return void 0!==a&&(n.active=a),wt.g`
      <div .ripple="${Object(xt.a)(n)}"
          class="mdc-ripple-surface ${Object(wt.d)(t)}"></div>`}}Object(n.b)([Object(wt.i)({type:Boolean})],kt.prototype,"primary",void 0),Object(n.b)([Object(wt.i)({type:Boolean})],kt.prototype,"active",void 0),Object(n.b)([Object(wt.i)({type:Boolean})],kt.prototype,"accent",void 0),Object(n.b)([Object(wt.i)({type:Boolean})],kt.prototype,"unbounded",void 0),Object(n.b)([Object(wt.i)({type:Boolean})],kt.prototype,"disabled",void 0),Object(n.b)([Object(wt.i)({attribute:!1})],kt.prototype,"interactionNode",void 0);const Ot=wt.e`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000}.mdc-ripple-surface:hover::before{opacity:.04}.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before,.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-ripple-surface--primary:hover::before{opacity:.04}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before,.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-ripple-surface--accent:hover::before{opacity:.04}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before,.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface{pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0}`;let $t=class extends kt{};$t.styles=Ot,$t=Object(n.b)([Object(wt.f)("mwc-ripple")],$t);var jt=i(234),Ct=i(198),Et=i(180),St=i(11);const Tt="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;customElements.define("long-press",class extends HTMLElement{constructor(){super(),this.holdTime=500,this.ripple=document.createElement("mwc-ripple"),this.timer=void 0,this.held=!1,this.cooldownStart=!1,this.cooldownEnd=!1}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Tt?"100px":"50px",height:Tt?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(t){if(t.longPress)return;t.longPress=!0,t.addEventListener("contextmenu",t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1});const e=t=>{if(this.cooldownStart)return;let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(e,i),this.held=!0},this.holdTime),this.cooldownStart=!0,window.setTimeout(()=>this.cooldownStart=!1,100)},i=e=>{this.cooldownEnd||["touchend","touchcancel"].includes(e.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?t.dispatchEvent(new Event("ha-hold")):t.dispatchEvent(new Event("ha-click")),this.cooldownEnd=!0,window.setTimeout(()=>this.cooldownEnd=!1,100))};t.addEventListener("touchstart",e,{passive:!0}),t.addEventListener("touchend",i),t.addEventListener("touchcancel",i),window.navigator.userAgent.match(/iPhone OS 13_/)||(t.addEventListener("mousedown",e,{passive:!0}),t.addEventListener("click",i))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}});const zt=t=>{const e=(()=>{const t=document.body;if(t.querySelector("long-press"))return t.querySelector("long-press");const e=document.createElement("long-press");return t.appendChild(e),e})();e&&e.bind(t)},It=Object(St.f)(()=>t=>{zt(t.committer.element)});var Mt=i(102);const Pt=(t,e)=>{return((t,e,i=!0)=>{const a=Object(m.a)(e),s="group"===a?"homeassistant":a;let n;switch(a){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}return t.callService(s,n,{entity_id:e})})(t,e,f.i.includes(t.states[e].state))},Lt=(t,e,i,a)=>{let n;switch(a&&i.hold_action?n=i.hold_action:!a&&i.tap_action&&(n=i.tap_action),n||(n={action:"more-info"}),n.action){case"more-info":(i.entity||i.camera_image)&&Object(s.a)(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":n.navigation_path&&Object(Mt.a)(t,n.navigation_path);break;case"toggle":i.entity&&Pt(e,i.entity);break;case"call-service":{if(!n.service)return void Object(b.a)("failure");const[t,i]=n.service.split(".",2);e.callService(t,i,n.service_data)}}Object(b.a)("light")};let Dt=class extends r.a{static async getConfigElement(){return await Promise.all([i.e(0),i.e(1),i.e(8),i.e(29)]).then(i.bind(null,345)),document.createElement("hui-entity-button-card-editor")}static getStubConfig(){return{tap_action:{action:"toggle"},hold_action:{action:"more-info"},show_icon:!0,show_name:!0}}getCardSize(){return 2}setConfig(t){if(!Object(jt.a)(t.entity))throw new Error("Invalid Entity");this._config=Object.assign({theme:"default",hold_action:{action:"more-info"},show_icon:!0,show_name:!0},t),f.f.has(Object(m.a)(t.entity))?this._config=Object.assign({tap_action:{action:"toggle"}},this._config):this._config=Object.assign({tap_action:{action:"more-info"}},this._config)}shouldUpdate(t){if(t.has("_config"))return!0;const e=t.get("hass");return!e||e.states[this._config.entity]!==this.hass.states[this._config.entity]}render(){if(!this._config||!this.hass)return r.e``;const t=this.hass.states[this._config.entity];return t?r.e`
      <ha-card
        @ha-click="${this._handleTap}"
        @ha-hold="${this._handleHold}"
        .longPress="${It()}"
      >
        ${this._config.show_icon?r.e`
              <ha-icon
                data-domain="${Object(Et.a)(t)}"
                data-state="${t.state}"
                .icon="${this._config.icon||Object(Ct.a)(t)}"
                style="${Object(yt.a)({filter:this._computeBrightness(t),color:this._computeColor(t),height:this._config.icon_height?this._config.icon_height:"auto"})}"
              ></ha-icon>
            `:""}
        ${this._config.show_name?r.e`
              <span>
                ${this._config.name||Object(w.a)(t)}
              </span>
            `:""}
        <mwc-ripple></mwc-ripple>
      </ha-card>
    `:r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}updated(t){if(super.updated(t),!this._config||!this.hass)return;const e=t.get("hass");e&&e.themes===this.hass.themes||Object(_t.a)(this,this.hass.themes,this._config.theme)}static get styles(){return r.c`
      ha-card {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 4% 0;
        font-size: 1.2rem;
      }

      ha-icon {
        width: 40%;
        height: auto;
        color: var(--paper-item-icon-color, #44739e);
      }

      ha-icon[data-domain="light"][data-state="on"],
      ha-icon[data-domain="switch"][data-state="on"],
      ha-icon[data-domain="binary_sensor"][data-state="on"],
      ha-icon[data-domain="fan"][data-state="on"],
      ha-icon[data-domain="sun"][data-state="above_horizon"] {
        color: var(--paper-item-icon-active-color, #fdd835);
      }

      ha-icon[data-state="unavailable"] {
        color: var(--state-icon-unavailable-color);
      }
    `}_computeBrightness(t){if(!t.attributes.brightness)return"";return`brightness(${(t.attributes.brightness+245)/5}%)`}_computeColor(t){if(!t.attributes.hs_color)return"";const[e,i]=t.attributes.hs_color;return i<=10?"":`hsl(${e}, 100%, ${100-i/2}%)`}_handleTap(){Lt(this,this.hass,this._config,!1)}_handleHold(){Lt(this,this.hass,this._config,!0)}};n.b([Object(r.f)()],Dt.prototype,"hass",void 0),n.b([Object(r.f)()],Dt.prototype,"_config",void 0),Dt=n.b([Object(r.d)("hui-entity-button-card")],Dt);customElements.define("hui-entity-filter-card",class extends HTMLElement{getCardSize(){return this._element?this._element.getCardSize():1}setConfig(t){if(!t.state_filter||!Array.isArray(t.state_filter))throw new Error("Incorrect filter config.");this._config=t,this._configEntities=void 0,this._baseCardConfig=Object.assign({type:"entities",entities:[]},this._config.card),this.lastChild&&(this.removeChild(this.lastChild),this._element=void 0)}set hass(t){if(!t||!this._config)return;if(!this.haveEntitiesChanged(t))return void(this._hass=t);this._hass=t,this._configEntities||(this._configEntities=Object(v.a)(this._config.entities));const e=this._configEntities.filter(e=>{const i=t.states[e.entity];return i&&this._config.state_filter.includes(i.state)});if(0===e.length&&!1===this._config.show_empty)return void(this.style.display="none");const i=this._cardElement();i&&("HUI-ERROR-CARD"!==i.tagName&&(this._oldEntities&&e.length===this._oldEntities.length&&e.every((t,e)=>t===this._oldEntities[e])||(this._oldEntities=e,i.setConfig(Object.assign({},this._baseCardConfig,{entities:e}))),i.isPanel=this.isPanel,i.hass=t),this.lastChild||this.appendChild(i),this.style.display="block")}haveEntitiesChanged(t){if(!this._hass)return!0;if(!this._configEntities)return!0;for(const e of this._configEntities)if(this._hass.states[e.entity]!==t.states[e.entity]||this._hass.localize!==t.localize)return!0;return!1}_cardElement(){if(!this._element&&this._config){const t=Fe(this._baseCardConfig);this._element=t}return this._element}});let At=class extends r.a{render(){return r.e`
      <ha-icon icon="hass:alert" .title="${this.label}"></ha-icon>
    `}static get styles(){return r.c`
      ha-icon {
        color: #fce588;
      }
    `}};n.b([Object(r.f)()],At.prototype,"label",void 0),At=n.b([Object(r.d)("hui-warning-element")],At);let Bt=class extends r.a{static async getConfigElement(){return await Promise.all([i.e(0),i.e(1),i.e(62),i.e(31)]).then(i.bind(null,346)),document.createElement("hui-glance-card-editor")}static getStubConfig(){return{entities:[]}}getCardSize(){return(this._config.title?1:0)+Math.ceil(this._configEntities.length/5)}setConfig(t){this._config=Object.assign({theme:"default"},t);const e=Object(v.a)(t.entities);for(const a of e)if(a.tap_action&&"call-service"===a.tap_action.action&&!a.tap_action.service||a.hold_action&&"call-service"===a.hold_action.action&&!a.hold_action.service)throw new Error('Missing required property "service" when tap_action or hold_action is call-service');const i=t.columns||Math.min(t.entities.length,5);this.style.setProperty("--glance-column-width",`${100/i}%`),this._configEntities=e,this.hass&&this.requestUpdate()}shouldUpdate(t){if(t.has("_config"))return!0;const e=t.get("hass");if(e&&this._configEntities){for(const t of this._configEntities)if(e.states[t.entity]!==this.hass.states[t.entity])return!0;return!1}return!0}render(){if(!this._config||!this.hass)return r.e``;const{title:t}=this._config;return r.e`
      <ha-card .header="${t}">
        <div class="${Object(o.a)({entities:!0,"no-header":!t})}">
          ${this._configEntities.map(t=>this.renderEntity(t))}
        </div>
      </ha-card>
    `}updated(t){if(super.updated(t),!this._config||!this.hass)return;const e=t.get("hass");e&&e.themes===this.hass.themes||Object(_t.a)(this,this.hass.themes,this._config.theme)}static get styles(){return r.c`
      .entities {
        display: flex;
        padding: 0 16px 4px;
        flex-wrap: wrap;
      }
      .entities.no-header {
        padding-top: 16px;
      }
      .entity {
        box-sizing: border-box;
        padding: 0 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        margin-bottom: 12px;
        width: var(--glance-column-width, 20%);
      }
      .entity div {
        width: 100%;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .name {
        min-height: var(--paper-font-body1_-_line-height, 20px);
      }
      state-badge {
        margin: 8px 0;
      }
    `}renderEntity(t){const e=this.hass.states[t.entity];return e?r.e`
      <div
        class="entity"
        .entityConf="${t}"
        @ha-click="${this._handleTap}"
        @ha-hold="${this._handleHold}"
        .longPress="${It()}"
      >
        ${!1!==this._config.show_name?r.e`
              <div class="name">
                ${"name"in t?t.name:Object(w.a)(e)}
              </div>
            `:""}
        ${!1!==this._config.show_icon?r.e`
              <state-badge
                .hass=${this.hass}
                .stateObj=${e}
                .overrideIcon=${t.icon}
                .overrideImage=${t.image}
              ></state-badge>
            `:""}
        ${!1!==this._config.show_state?r.e`
              <div>
                ${t.show_last_changed?Object(Q.a)(new Date(e.last_changed),this.hass.localize):Object(S.a)(this.hass.localize,e,this.hass.language)}
              </div>
            `:""}
      </div>
    `:r.e`
        <hui-warning-element
          label=${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",t.entity)}
        ></hui-warning-element>
      `}_handleTap(t){const e=t.currentTarget.entityConf;Lt(this,this.hass,e,!1)}_handleHold(t){const e=t.currentTarget.entityConf;Lt(this,this.hass,e,!0)}};n.b([Object(r.f)()],Bt.prototype,"hass",void 0),n.b([Object(r.f)()],Bt.prototype,"_config",void 0),Bt=n.b([Object(r.d)("hui-glance-card")],Bt);var Rt=i(4),Nt=i(31);i(243),i(244);customElements.define("hui-history-graph-card",class extends Nt.a{static getStubConfig(){return{entities:[]}}static get template(){return Rt.a`
      <style>
        .content {
          padding: 16px;
        }
        [header] .content {
          padding-top: 0;
        }
      </style>

      <ha-card header$="[[_config.title]]">
        <div class="content">
          <ha-state-history-data
            hass="[[hass]]"
            filter-type="recent-entity"
            entity-id="[[_entities]]"
            data="{{_stateHistory}}"
            is-loading="{{_stateHistoryLoading}}"
            cache-config="[[_cacheConfig]]"
          ></ha-state-history-data>
          <state-history-charts
            hass="[[hass]]"
            history-data="[[_stateHistory]]"
            is-loading-data="[[_stateHistoryLoading]]"
            names="[[_names]]"
            up-to-now
            no-single
          ></state-history-charts>
        </div>
      </ha-card>
    `}static get properties(){return{hass:Object,_config:Object,_names:Object,_entities:Array,_stateHistory:Object,_stateHistoryLoading:Boolean,_cacheConfig:Object}}getCardSize(){return 4}setConfig(t){const e=Object(v.a)(t.entities);this._config=t;const i=[],a={};e.forEach(t=>{i.push(t.entity),t.name&&(a[t.entity]=t.name)}),this.setProperties({_cacheConfig:{cacheKey:i.join(),hoursToShow:t.hours_to_show||24,refresh:t.refresh_interval||0},_entities:i,_names:a})}});class Ht extends r.a{static get properties(){return{_config:{}}}set hass(t){if(this._hass=t,this._cards)for(const e of this._cards)e.hass=this._hass}setConfig(t){if(!t||!t.cards||!Array.isArray(t.cards))throw new Error("Card config incorrect");this._config=t,this._cards=t.cards.map(t=>{return this._createCardElement(t)})}render(){return this._config?r.e`
      ${this.renderStyle()}
      <div id="root">${this._cards}</div>
    `:r.e``}_createCardElement(t){const e=Fe(t);return this._hass&&(e.hass=this._hass),e.addEventListener("ll-rebuild",i=>{i.stopPropagation(),this._rebuildCard(e,t)},{once:!0}),e}_rebuildCard(t,e){const i=this._createCardElement(e);t.parentElement.replaceChild(i,t),this._cards=this._cards.map(e=>e===t?i:e)}}customElements.define("hui-horizontal-stack-card",class extends Ht{getCardSize(){let t=0;if(this._cards)for(const e of this._cards){const i=Object(p.a)(e);t=i>t?i:t}return t}renderStyle(){return r.e`
      <style>
        #root {
          display: flex;
        }
        #root > * {
          flex: 1 1 0;
          margin: 0 4px;
          min-width: 0;
        }
        #root > *:first-child {
          margin-left: 0;
        }
        #root > *:last-child {
          margin-right: 0;
        }
      </style>
    `}});let Ut=class extends r.a{static async getConfigElement(){return await i.e(32).then(i.bind(null,348)),document.createElement("hui-iframe-card-editor")}static getStubConfig(){return{url:"https://embed.windy.com/embed2.html?lat=32.487&lon=-84.023&zoom=5&level=surface&overlay=rain&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=32.487&detailLon=--84.023&metricWind=default&metricTemp=default&radarRange=-1",aspect_ratio:"50%"}}getCardSize(){if(!this._config)return 3;return 1+(this._config.aspect_ratio?Number(this._config.aspect_ratio.replace("%","")):50)/25}setConfig(t){if(!t.url)throw new Error("URL required");this._config=t}render(){if(!this._config)return r.e``;const t=this._config.aspect_ratio||"50%";return r.e`
      <ha-card .header="${this._config.title}">
        <div
          id="root"
          style="${Object(yt.a)({"padding-top":t})}"
        >
          <iframe src="${this._config.url}"></iframe>
        </div>
      </ha-card>
    `}static get styles(){return r.c`
      ha-card {
        overflow: hidden;
      }

      #root {
        width: 100%;
        position: relative;
      }

      iframe {
        position: absolute;
        border: none;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    `}};n.b([Object(r.f)()],Ut.prototype,"_config",void 0),Ut=n.b([Object(r.d)("hui-iframe-card")],Ut);customElements.define("round-slider",class extends r.a{static get properties(){return{value:{type:Number},high:{type:Number},low:{type:Number},min:{type:Number},max:{type:Number},step:{type:Number},radius:{type:Number},startAngle:{type:Number},arcLength:{type:Number},handleSize:{type:Number},disabled:{type:Boolean},dragging:{type:Boolean,reflect:!0}}}constructor(){super(),this.min=0,this.max=100,this.step=1,this.radius=80,this.startAngle=135,this.arcLength=270,this.handleSize=6,this.disabled=!1,this.dragging=!1}get _r0(){return this.radius}get _rArc(){return this._r0-1.5*this.handleSize}get _start(){return this.startAngle*Math.PI/180}get _len(){return Math.min(this.arcLength*Math.PI/180,2*Math.PI-.01)}get _end(){return this._start+this._len}get _isDisabled(){return this.disabled||void 0===this.value&&void 0===this.high&&void 0===this.low}_angleInside(t){let e=(this.startAngle+this.arcLength/2-t+180+360)%360-180;return e<this.arcLength/2&&e>-this.arcLength/2}_getBoundaries(){const t=1.5*this.handleSize;let e=this._r0;this._angleInside(270)||(e=Math.max(-this._rArc*Math.sin(this._start)+t,-this._rArc*Math.sin(this._end)+t));let i=this._r0;this._angleInside(90)||(i=Math.max(this._rArc*Math.sin(this._start)+t,this._rArc*Math.sin(this._end)+t));let a=this._r0;this._angleInside(180)||(a=Math.max(-this._rArc*Math.cos(this._start)+t,-this._rArc*Math.cos(this._end)+t));let s=this._r0;return this._angleInside(0)||(s=Math.max(this._rArc*Math.cos(this._start)+t,this._rArc*Math.cos(this._end)+t)),{up:e,down:i,left:a,right:s,width:a+s,height:e+i}}dragStart(t){if(!t.target.classList.contains("handle"))return;let e=t.target;e.classList.contains("overflow")&&(e=e.nextElementSibling),e.setAttribute("r",1.5*this.handleSize);const i="high"===e.id?this.low:this.min,a="low"===e.id?this.high:this.max;this._rotation={handle:e,min:i,max:a},this.dragging=!0}dragEnd(t){if(!this._rotation)return;const e=this._rotation.handle;e.setAttribute("r",this.handleSize),this._rotation=!1,this.dragging=!1;let i=new CustomEvent("value-changed",{detail:{[e.id]:this[e.id]}});this.dispatchEvent(i),this.low&&this.low>=.99*this.max?this._reverseOrder=!0:this._reverseOrder=!1}drag(t){if(!this._rotation)return;t.preventDefault();const e="touchmove"===t.type?t.touches[0].clientX:t.clientX,i="touchmove"===t.type?t.touches[0].clientY:t.clientY,a=this.shadowRoot.querySelector("svg").getBoundingClientRect(),s=this._getBoundaries(),n=e-(a.x+s.left),r=i-(a.y+s.up),o=(Math.atan2(r,n)-this._start+2*Math.PI)%(2*Math.PI),l=Math.round((o/this._len*(this.max-this.min)+this.min)/this.step)*this.step;if(l<this._rotation.min||l>this._rotation.max)return;const c=this._rotation.handle;this[c.id]=l;let h=new CustomEvent("value-changing",{detail:{[c.id]:l}});this.dispatchEvent(h)}firstUpdated(){document.addEventListener("mouseup",this.dragEnd.bind(this)),document.addEventListener("touchend",this.dragEnd.bind(this),{passive:!1}),document.addEventListener("mousemove",this.drag.bind(this)),document.addEventListener("touchmove",this.drag.bind(this),{passive:!1})}_renderArc(t,e){const i=this._rArc;return`\n      M ${this._r0+i*Math.cos(t)} ${this._r0+i*Math.sin(t)}\n      A ${i} ${i},\n        0,\n        ${e-t>Math.PI?"1":"0"} 1,\n        ${this._r0+i*Math.cos(e)} ${this._r0+i*Math.sin(e)}\n    `}_valueFrac(t){return(this[t]-this.min)/(this.max-this.min)}_renderHandle(t){const e=this._start+this._valueFrac(t)*this._len;return r.i`
        <circle
          id=${t}
          class="handle ${t} overflow"
          cx=${this._r0+this._rArc*Math.cos(e)}
          cy=${this._r0+this._rArc*Math.sin(e)}
          r=${2*this.handleSize}
          style="fill: rgba(0,0,0,0);"
        ></circle>
        <circle
          id=${t}
          class="handle ${t}"
          cx=${this._r0+this._rArc*Math.cos(e)}
          cy=${this._r0+this._rArc*Math.sin(e)}
          r=${this.handleSize}
        ></circle>
      `}render(){let t,e,i,a;return({up:t,left:e,width:i,height:a}=this._getBoundaries()),r.e`
    <div
      @mousedown=${this.dragStart}
      @touchstart=${this.dragStart}
      style="
         height: ${a}px;
         width: ${i}px;
       "
    >
      <svg
        xmln="http://www.w3.org/2000/svg"
        viewBox="${this._r0-e} ${this._r0-t} ${i} ${a}"
      >
        <g class="slider">
          <path
            class="path"
            d=${this._renderArc(this._start,this._end)}
          />
          ${this._isDisabled?"":r.i`
          <path
            class="bar"
            d=${this._renderArc(this._start+this._len*(void 0!==this.low?this._valueFrac("low"):0),this._start+this._len*(void 0!==this.high?this._valueFrac("high"):this._valueFrac("value")))}
          />
          `}
        </g>

        ${this._isDisabled?"":r.i`
          <g class="handles">
          ${void 0!==this.low?this._reverseOrder?r.e`${this._renderHandle("high")} ${this._renderHandle("low")}`:r.e`${this._renderHandle("low")} ${this._renderHandle("high")}`:r.e`${this._renderHandle("value")}`}
          </g>
          `}
      </svg>
    </div>
    `}static get styles(){return r.c`
      div {
        display: inline-block;
      }
      .slider {
        fill: none;
        stroke-width: var(--round-slider-path-width, 3);
        stroke-linecap: var(--round-slider-linecap, round);
      }
      .path {
        stroke: var(--round-slider-path-color, lightgray);
      }
      .bar {
        stroke: var(--round-slider-bar-color, deepskyblue);
      }
      .handles {
        fill: var(--round-slider-handle-color, var(--round-slider-bar-color, deepskyblue));
      }
      .handles .low {
        fill: var(--round-slider-low-handle-color);
      }
      .handles .high {
        fill: var(--round-slider-high-handle-color);
      }
    `}});let Vt=class extends r.a{render(){return r.e`
      <div class="disabled-overlay">
        <div>${this.text}</div>
      </div>
    `}static get styles(){return r.c`
      .disabled-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--state-icon-unavailable-color);
        opacity: 0.5;
        z-index: 50;
      }

      .disabled-overlay div {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 24px;
        color: var(--primary-text-color);
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
      }
    `}};n.b([Object(r.f)()],Vt.prototype,"text",void 0),Vt=n.b([Object(r.d)("hui-unavailable")],Vt);let Ft=class extends r.a{static async getConfigElement(){return await Promise.all([i.e(0),i.e(1),i.e(63),i.e(33)]).then(i.bind(null,349)),document.createElement("hui-light-card-editor")}static getStubConfig(){return{entity:""}}getCardSize(){return 2}setConfig(t){if(!t.entity||"light"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the light domain.");this._config=Object.assign({theme:"default"},t)}render(){if(!this.hass||!this._config)return r.e``;const t=this.hass.states[this._config.entity],e=Math.round(t.attributes.brightness/254*100)||0;return t?r.e`
      ${this.renderStyle()}
      <ha-card>
        ${"unavailable"===t.state?r.e`
              <hui-unavailable
                .text="${this.hass.localize("state.default.unavailable")}"
              ></hui-unavailable>
            `:""}
        <paper-icon-button
          icon="hass:dots-vertical"
          class="more-info"
          @click="${this._handleMoreInfo}"
        ></paper-icon-button>

        <div id="light">
          ${Object(N.a)(t,1)?r.e`
                <round-slider
                  min="1"
                  .value=${e}
                  @value-changing=${this._dragEvent}
                  @value-changed=${this._setBrightness}
                ></round-slider>
              `:""}
          <ha-icon
            class="light-icon"
            data-state="${t.state}"
            .icon="${Object(Ct.a)(t)}"
            style="${Object(yt.a)({filter:this._computeBrightness(t),color:this._computeColor(t)})}"
            @click="${this._handleTap}"
          ></ha-icon>
        </div>

        <div id="tooltip">
          <div class="brightness" @ha-click="${this._handleTap}">
            ${e} %
          </div>
          <div class="name">
            ${this._config.name||Object(w.a)(t)}
          </div>
        </div>
      </ha-card>
    `:r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}shouldUpdate(t){return $(this,t)}updated(t){if(super.updated(t),!this._config||!this.hass)return;if(!this.hass.states[this._config.entity])return;const e=t.get("hass");e&&e.themes===this.hass.themes||Object(_t.a)(this,this.hass.themes,this._config.theme)}renderStyle(){return r.e`
      <style>
        :host {
          display: block;
        }

        ha-card {
          position: relative;
          overflow: hidden;
          --name-font-size: 1.2rem;
          --brightness-font-size: 1.2rem;
          --rail-border-color: transparent;
        }

        #tooltip {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          text-align: center;
        }

        #light {
          margin: auto;
          padding-top: 0;
          padding-bottom: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 160px;
          width: 160px;
        }
        #light round-slider {
          margin: 0 auto;
          display: inline-block;
          --round-slider-path-color: var(--disabled-text-color);
          --round-slider-bar-color: var(--primary-color);
          z-index: 20;
        }

        .light-icon {
          position: absolute;
          margin: 0 auto;
          width: 76px;
          height: 76px;
          color: var(--paper-item-icon-color, #44739e);
          cursor: pointer;
          z-index: 20;
        }

        .light-icon[data-state="on"] {
          color: var(--paper-item-icon-active-color, #fdd835);
        }

        .light-icon[data-state="unavailable"] {
          color: var(--state-icon-unavailable-color);
        }

        .name {
          position: absolute;
          top: 160px;
          left: 50%;
          transform: translate(-50%);
          font-size: var(--name-font-size);
        }

        .brightness {
          font-size: var(--brightness-font-size);
          position: absolute;
          margin: 0 auto;
          top: 135px;
          left: 50%;
          transform: translate(-50%);
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
          -moz-transition: opacity 0.5s ease-in-out;
          -webkit-transition: opacity 0.5s ease-in-out;
          cursor: pointer;
          pointer-events: none;
        }

        .show_brightness {
          opacity: 1;
        }

        .more-info {
          position: absolute;
          cursor: pointer;
          top: 0;
          right: 0;
          z-index: 25;
          color: var(--secondary-text-color);
        }
      </style>
    `}_dragEvent(t){this.shadowRoot.querySelector(".brightness").innerHTML=t.detail.value+"%",this._showBrightness(),this._hideBrightness()}_showBrightness(){clearTimeout(this._brightnessTimout),this.shadowRoot.querySelector(".brightness").classList.add("show_brightness")}_hideBrightness(){this._brightnessTimout=window.setTimeout(()=>{this.shadowRoot.querySelector(".brightness").classList.remove("show_brightness")},500)}_setBrightness(t){this.hass.callService("light","turn_on",{entity_id:this._config.entity,brightness_pct:t.detail.value})}_computeBrightness(t){if(!t.attributes.brightness)return"";return`brightness(${(t.attributes.brightness+245)/5}%)`}_computeColor(t){if(!t.attributes.hs_color)return"";const[e,i]=t.attributes.hs_color;return i<=10?"":`hsl(${e}, 100%, ${100-i/2}%)`}_handleTap(){Pt(this.hass,this._config.entity)}_handleMoreInfo(){Object(s.a)(this,"hass-more-info",{entityId:this._config.entity})}};n.b([Object(r.f)()],Ft.prototype,"hass",void 0),n.b([Object(r.f)()],Ft.prototype,"_config",void 0),Ft=n.b([Object(r.d)("hui-light-card")],Ft);i(226);var qt=i(117);customElements.define("ha-entity-marker",class extends(Object(qt.a)(Nt.a)){static get template(){return Rt.a`
      <style include="iron-positioning"></style>
      <style>
        .marker {
          vertical-align: top;
          position: relative;
          display: block;
          margin: 0 auto;
          width: 2.5em;
          text-align: center;
          height: 2.5em;
          line-height: 2.5em;
          font-size: 1.5em;
          border-radius: 50%;
          border: 0.1em solid
            var(--ha-marker-color, var(--default-primary-color));
          color: rgb(76, 76, 76);
          background-color: white;
        }
        iron-image {
          border-radius: 50%;
        }
      </style>

      <div class="marker">
        <template is="dom-if" if="[[entityName]]"
          >[[entityName]]</template
        >
        <template is="dom-if" if="[[entityPicture]]">
          <iron-image
            sizing="cover"
            class="fit"
            src="[[entityPicture]]"
          ></iron-image>
        </template>
      </div>
    `}static get properties(){return{hass:{type:Object},entityId:{type:String,value:""},entityName:{type:String,value:null},entityPicture:{type:String,value:null}}}ready(){super.ready(),this.addEventListener("click",t=>this.badgeTap(t))}badgeTap(t){t.stopPropagation(),this.entityId&&this.fire("hass-more-info",{entityId:this.entityId})}});var Wt=i(257),Kt=i(187);const Xt=t=>{const e=parseFloat(t);if(isNaN(e))throw new Error(`${t} is not a number`);return e};function Yt(t){if(!t)return null;try{if(t.endsWith("%"))return{w:100,h:Xt(t.substr(0,t.length-1))};const i=t.replace(":","x").split("x");return 0===i.length?null:1===i.length?{w:Xt(i[0]),h:1}:{w:Xt(i[0]),h:Xt(i[1])}}catch(e){}return null}let Zt=class extends r.a{constructor(){super(...arguments),this.isPanel=!1,this._debouncedResizeListener=Object(Kt.a)(()=>{this._leafletMap&&this._leafletMap.invalidateSize()},100,!1),this._mapItems=[],this._connected=!1}static async getConfigElement(){return await Promise.all([i.e(0),i.e(1),i.e(64),i.e(34)]).then(i.bind(null,376)),document.createElement("hui-map-card-editor")}static getStubConfig(){return{entities:[]}}setConfig(t){if(!t)throw new Error("Error in card configuration.");if(!t.entities&&!t.geo_location_sources)throw new Error("Either entities or geo_location_sources must be defined");if(t.entities&&!Array.isArray(t.entities))throw new Error("Entities need to be an array");if(t.geo_location_sources&&!Array.isArray(t.geo_location_sources))throw new Error("Geo_location_sources needs to be an array");this._config=t,this._configEntities=t.entities?Object(v.a)(t.entities):[]}getCardSize(){if(!this._config)return 3;const t=Yt(this._config.aspect_ratio),e=t&&t.w>0&&t.h>0?`${(100*t.h/t.w).toFixed(2)}`:"100";return 1+Math.floor(Number(e)/25)||3}connectedCallback(){super.connectedCallback(),this._connected=!0,this.hasUpdated&&(this.loadMap(),this._attachObserver())}disconnectedCallback(){super.disconnectedCallback(),this._connected=!1,this._leafletMap&&(this._leafletMap.remove(),this._leafletMap=void 0,this.Leaflet=void 0),this._resizeObserver?this._resizeObserver.unobserve(this._mapEl):window.removeEventListener("resize",this._debouncedResizeListener)}render(){return this._config?r.e`
      <ha-card id="card" .header=${this._config.title}>
        <div id="root">
          <div id="map"></div>
          <paper-icon-button
            @click=${this._fitMap}
            icon="hass:image-filter-center-focus"
            title="Reset focus"
          ></paper-icon-button>
        </div>
      </ha-card>
    `:r.e``}shouldUpdate(t){if(!t.has("hass")||t.size>1)return!0;const e=t.get("hass");if(!e||!this._configEntities)return!0;for(const i of this._configEntities)if(e.states[i.entity]!==this.hass.states[i.entity])return!0;return!1}firstUpdated(t){super.firstUpdated(t),this.loadMap();const e=this.shadowRoot.getElementById("root");if(!this._config||this.isPanel||!e)return;this._connected&&this._attachObserver();const i=Yt(this._config.aspect_ratio);e.style.paddingBottom=i&&i.w>0&&i.h>0?`${(100*i.h/i.w).toFixed(2)}%`:e.style.paddingBottom="100%"}updated(t){t.has("hass")&&this._drawEntities(),t.has("_config")&&void 0!==t.get("_config")&&this.updateMap(t.get("_config"))}get _mapEl(){return this.shadowRoot.getElementById("map")}async loadMap(){[this._leafletMap,this.Leaflet]=await Object(Wt.b)(this._mapEl,void 0!==this._config&&!0===this._config.dark_mode),this._drawEntities(),this._leafletMap.invalidateSize(),this._fitMap()}updateMap(t){const e=this._leafletMap,i=this._config,a=this.Leaflet;e&&i&&a&&(i.dark_mode!==t.dark_mode&&Object(Wt.a)(a,!0===i.dark_mode).addTo(e),i.entities===t.entities&&i.geo_location_sources===t.geo_location_sources||this._drawEntities(),e.invalidateSize(),this._fitMap())}_fitMap(){if(!(this._leafletMap&&this.Leaflet&&this._config&&this.hass))return;const t=this._config.default_zoom;if(0===this._mapItems.length)return void this._leafletMap.setView(new this.Leaflet.LatLng(this.hass.config.latitude,this.hass.config.longitude),t||14);const e=this.Leaflet.latLngBounds(this._mapItems?this._mapItems.map(t=>t.getLatLng()):[]);this._leafletMap.fitBounds(e.pad(.5)),t&&this._leafletMap.getZoom()>t&&this._leafletMap.setZoom(t)}_drawEntities(){const t=this.hass,e=this._leafletMap,i=this._config,a=this.Leaflet;if(!(t&&e&&i&&a))return;this._mapItems&&this._mapItems.forEach(t=>t.remove());const s=this._mapItems=[],n=this._configEntities.concat();if(i.geo_location_sources){const e=i.geo_location_sources.includes("all");for(const a of Object.keys(t.states)){const s=t.states[a];"geo_location"===Object(m.a)(a)&&(e||i.geo_location_sources.includes(s.attributes.source))&&n.push({entity:a})}}for(const r of n){const e=r.entity,i=t.states[e];if(!i)continue;const n=Object(w.a)(i),{latitude:o,longitude:l,passive:c,icon:h,radius:d,entity_picture:p,gps_accuracy:u}=i.attributes;if(!o||!l)continue;if("zone"===Object(Et.a)(i)){if(c)continue;s.push(a.marker([o,l],{icon:a.divIcon({html:h?`<ha-icon icon="${h}"></ha-icon>`:n,iconSize:[24,24],className:""}),interactive:!1,title:n})),s.push(a.circle([o,l],{interactive:!1,color:"#FF9800",radius:d}));continue}const g=n.split(" ").map(t=>t[0]).join("").substr(0,3);s.push(a.marker([o,l],{icon:a.divIcon({html:`\n              <ha-entity-marker\n                entity-id="${e}"\n                entity-name="${g}"\n                entity-picture="${p||""}"\n              ></ha-entity-marker>\n            `,iconSize:[48,48],className:""}),title:Object(w.a)(i)})),u&&s.push(a.circle([o,l],{interactive:!1,color:"#0288D1",radius:u}))}this._mapItems.forEach(t=>e.addLayer(t))}_attachObserver(){"function"==typeof ResizeObserver?(this._resizeObserver=new ResizeObserver(()=>this._debouncedResizeListener()),this._resizeObserver.observe(this._mapEl)):window.addEventListener("resize",this._debouncedResizeListener)}static get styles(){return r.c`
      :host([ispanel]) ha-card {
        left: 0;
        top: 0;
        width: 100%;
        /**
       * In panel mode we want a full height map. Since parent #view
       * only sets min-height, we need absolute positioning here
       */
        height: 100%;
        position: absolute;
      }

      ha-card {
        overflow: hidden;
      }

      #map {
        z-index: 0;
        border: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      paper-icon-button {
        position: absolute;
        top: 75px;
        left: 7px;
      }

      #root {
        position: relative;
      }

      :host([ispanel]) #root {
        height: 100%;
      }
    `}};n.b([Object(r.f)()],Zt.prototype,"hass",void 0),n.b([Object(r.f)({type:Boolean,reflect:!0})],Zt.prototype,"isPanel",void 0),n.b([Object(r.f)()],Zt.prototype,"_config",void 0),Zt=n.b([Object(r.d)("hui-map-card")],Zt);i(141);let Qt=class extends r.a{constructor(){super(...arguments),this._content=""}static async getConfigElement(){return await Promise.all([i.e(65),i.e(35)]).then(i.bind(null,350)),document.createElement("hui-markdown-card-editor")}static getStubConfig(){return{content:" "}}getCardSize(){return void 0===this._config?3:void 0===this._config.card_size?this._config.content.split("\n").length+(this._config.title?1:0):this._config.card_size}setConfig(t){if(!t.content)throw new Error("Invalid Configuration: Content Required");this._config=t,this._disconnect().then(()=>{this._hass&&this._connect()})}disconnectedCallback(){this._disconnect()}set hass(t){this._hass=t,this._connect()}render(){return this._config?r.e`
      <ha-card .header="${this._config.title}">
        <ha-markdown
          class="markdown ${Object(o.a)({"no-header":!this._config.title})}"
          .content="${this._content}"
        ></ha-markdown>
      </ha-card>
    `:r.e``}async _connect(){!this._unsubRenderTemplate&&this._hass&&this._config&&(this._unsubRenderTemplate=((t,e,i)=>t.subscribeMessage(t=>e(t.result),Object.assign({type:"render_template"},i)))(this._hass.connection,t=>{this._content=t},{template:this._config.content,entity_ids:this._config.entity_id,variables:{config:this._config}}),this._unsubRenderTemplate.catch(()=>{this._content=this._config.content,this._unsubRenderTemplate=void 0}))}async _disconnect(){if(this._unsubRenderTemplate)try{const e=await this._unsubRenderTemplate;this._unsubRenderTemplate=void 0,await e()}catch(t){if("not_found"!==t.code)throw t}}static get styles(){return r.c`
      ha-markdown {
        display: block;
        padding: 0 16px 16px;
        -ms-user-select: initial;
        -webkit-user-select: initial;
        -moz-user-select: initial;
      }
      .markdown.no-header {
        padding-top: 16px;
      }
      ha-markdown > *:first-child {
        margin-top: 0;
      }
      ha-markdown > *:last-child {
        margin-bottom: 0;
      }
      ha-markdown a {
        color: var(--primary-color);
      }
      ha-markdown img {
        max-width: 100%;
      }
    `}};n.b([Object(r.f)()],Qt.prototype,"_config",void 0),n.b([Object(r.f)()],Qt.prototype,"_content",void 0),n.b([Object(r.f)()],Qt.prototype,"_unsubRenderTemplate",void 0),n.b([Object(r.f)()],Qt.prototype,"_hass",void 0),Qt=n.b([Object(r.d)("hui-markdown-card")],Qt);i(171),i(146),i(227);var Jt=i(238),Gt=i(168);customElements.define("ha-media_player-card",class extends(Object(Gt.a)(Object(qt.a)(Nt.a))){static get template(){return Rt.a`
      <style
        include="paper-material-styles iron-flex iron-flex-alignment iron-positioning"
      >
        :host {
          @apply --paper-material-elevation-1;
          display: block;
          position: relative;
          font-size: 0px;
          border-radius: 2px;
        }

        .banner {
          position: relative;
          background-color: white;
          border-top-left-radius: 2px;
          border-top-right-radius: 2px;
        }

        .banner:before {
          display: block;
          content: "";
          width: 100%;
          /* removed .25% from 16:9 ratio to fix YT black bars */
          padding-top: 56%;
          transition: padding-top 0.8s;
        }

        .banner.no-cover {
          background-position: center center;
          background-image: url(/static/images/card_media_player_bg.png);
          background-repeat: no-repeat;
          background-color: var(--primary-color);
        }

        .banner.content-type-music:before {
          padding-top: 100%;
        }

        .banner.content-type-game:before {
          padding-top: 100%;
        }

        .banner.no-cover:before {
          padding-top: 88px;
        }

        .banner > .cover {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;

          border-top-left-radius: 2px;
          border-top-right-radius: 2px;

          background-position: center center;
          background-size: cover;
          transition: opacity 0.8s;
          opacity: 1;
        }

        .banner.is-off > .cover {
          opacity: 0;
        }

        .banner > .caption {
          @apply --paper-font-caption;

          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;

          background-color: rgba(0, 0, 0, var(--dark-secondary-opacity));

          padding: 8px 16px;

          font-size: 14px;
          font-weight: 500;
          color: white;

          transition: background-color 0.5s;
        }

        .banner.is-off > .caption {
          background-color: initial;
        }

        .banner > .caption .title {
          @apply --paper-font-common-nowrap;
          font-size: 1.2em;
          margin: 8px 0 4px;
        }

        .progress {
          width: 100%;
          height: var(--paper-progress-height, 4px);
          margin-top: calc(-1 * var(--paper-progress-height, 4px));
          --paper-progress-active-color: var(--accent-color);
          --paper-progress-container-color: rgba(200, 200, 200, 0.5);
        }

        .controls {
          position: relative;
          @apply --paper-font-body1;
          padding: 8px;
          border-bottom-left-radius: 2px;
          border-bottom-right-radius: 2px;
          background-color: var(--paper-card-background-color, white);
        }

        .controls paper-icon-button {
          width: 44px;
          height: 44px;
        }

        .playback-controls {
          direction: ltr;
        }

        paper-icon-button {
          opacity: var(--dark-primary-opacity);
        }

        paper-icon-button[disabled] {
          opacity: var(--dark-disabled-opacity);
        }

        paper-icon-button.primary {
          width: 56px !important;
          height: 56px !important;
          background-color: var(--primary-color);
          color: white;
          border-radius: 50%;
          padding: 8px;
          transition: background-color 0.5s;
        }

        paper-icon-button.primary[disabled] {
          background-color: rgba(0, 0, 0, var(--dark-disabled-opacity));
        }

        [invisible] {
          visibility: hidden !important;
        }
      </style>

      <div
        class$="[[computeBannerClasses(playerObj, _coverShowing, _coverLoadError)]]"
      >
        <div class="cover" id="cover"></div>

        <div class="caption">
          [[_computeStateName(stateObj)]]
          <div class="title">[[computePrimaryText(localize, playerObj)]]</div>
          [[playerObj.secondaryTitle]]<br />
        </div>
      </div>

      <paper-progress
        max="[[stateObj.attributes.media_duration]]"
        value="[[playbackPosition]]"
        hidden$="[[computeHideProgress(playerObj)]]"
        class="progress"
      ></paper-progress>

      <div class="controls layout horizontal justified">
        <paper-icon-button
          aria-label="Turn off"
          icon="hass:power"
          on-click="handleTogglePower"
          invisible$="[[computeHidePowerButton(playerObj)]]"
          class="self-center secondary"
        ></paper-icon-button>

        <div class="playback-controls">
          <paper-icon-button
            aria-label="Previous track"
            icon="hass:skip-previous"
            invisible$="[[!playerObj.supportsPreviousTrack]]"
            disabled="[[playerObj.isOff]]"
            on-click="handlePrevious"
          ></paper-icon-button>
          <paper-icon-button
            aria-label="Play or Pause"
            class="primary"
            icon="[[computePlaybackControlIcon(playerObj)]]"
            invisible$="[[!computePlaybackControlIcon(playerObj)]]"
            disabled="[[playerObj.isOff]]"
            on-click="handlePlaybackControl"
          ></paper-icon-button>
          <paper-icon-button
            aria-label="Next track"
            icon="hass:skip-next"
            invisible$="[[!playerObj.supportsNextTrack]]"
            disabled="[[playerObj.isOff]]"
            on-click="handleNext"
          ></paper-icon-button>
        </div>

        <paper-icon-button
          aria-label="More information."
          icon="hass:dots-vertical"
          on-click="handleOpenMoreInfo"
          class="self-center secondary"
        ></paper-icon-button>
      </div>
    `}static get properties(){return{hass:Object,stateObj:Object,playerObj:{type:Object,computed:"computePlayerObj(hass, stateObj)",observer:"playerObjChanged"},playbackControlIcon:{type:String,computed:"computePlaybackControlIcon(playerObj)"},playbackPosition:Number,_coverShowing:{type:Boolean,value:!1},_coverLoadError:{type:Boolean,value:!1}}}async playerObjChanged(t,e){t.isPlaying&&t.showProgress?this._positionTracking||(this._positionTracking=setInterval(()=>this.updatePlaybackPosition(),1e3)):this._positionTracking&&(clearInterval(this._positionTracking),this._positionTracking=null),t.showProgress&&this.updatePlaybackPosition();const i=t.stateObj.attributes.entity_picture,a=e&&e.stateObj.attributes.entity_picture;if(i===a||i){if(i!==a){if("/"!==i.substr(0,1))return this._coverShowing=!0,this._coverLoadError=!1,void(this.$.cover.style.backgroundImage=`url(${i})`);try{const{content_type:e,content:i}=await V(this.hass,t.stateObj.entity_id);this._coverShowing=!0,this._coverLoadError=!1,this.$.cover.style.backgroundImage=`url(data:${e};base64,${i})`}catch(s){this._coverShowing=!1,this._coverLoadError=!0,this.$.cover.style.backgroundImage=""}}}else this.$.cover.style.backgroundImage=""}updatePlaybackPosition(){this.playbackPosition=this.playerObj.currentProgress}computeBannerClasses(t,e,i){var a="banner";return t?(t.isOff||t.isIdle?a+=" is-off no-cover":t.stateObj.attributes.entity_picture&&!i&&e?"music"===t.stateObj.attributes.media_content_type?a+=" content-type-music":"game"===t.stateObj.attributes.media_content_type&&(a+=" content-type-game"):a+=" no-cover",a):a}computeHideProgress(t){return!t.showProgress}computeHidePowerButton(t){return t.isOff?!t.supportsTurnOn:!t.supportsTurnOff}computePlayerObj(t,e){return new Jt.a(t,e)}computePrimaryText(t,e){return e.primaryTitle||t(`state.media_player.${e.stateObj.state}`)||t(`state.default.${e.stateObj.state}`)||e.stateObj.state}computePlaybackControlIcon(t){return t.isPlaying?t.supportsPause?"hass:pause":"hass:stop":t.hasMediaControl||t.isOff||t.isIdle?t.hasMediaControl&&t.supportsPause&&!t.isPaused?"hass:play-pause":t.supportsPlay?"hass:play":null:""}_computeStateName(t){return Object(w.a)(t)}handleNext(t){t.stopPropagation(),this.playerObj.nextTrack()}handleOpenMoreInfo(t){t.stopPropagation(),this.fire("hass-more-info",{entityId:this.stateObj.entity_id})}handlePlaybackControl(t){t.stopPropagation(),this.playerObj.mediaPlayPause()}handlePrevious(t){t.stopPropagation(),this.playerObj.previousTrack()}handleTogglePower(t){t.stopPropagation(),this.playerObj.togglePower()}});class te extends HTMLElement{constructor(t,e){super(),this._tag=t.toUpperCase(),this._domain=e,this._element=null}getCardSize(){return 3}setConfig(t){if(!t.entity)throw new Error("No entity specified");if(Object(m.a)(t.entity)!==this._domain)throw new Error(`Specified entity needs to be of domain ${this._domain}.`);this._config=t}set hass(t){const e=this._config.entity;e in t.states?(this._ensureElement(this._tag),this.lastChild.hass=t,this.lastChild.stateObj=t.states[e],this.lastChild.config=this._config):(this._ensureElement("HUI-ERROR-CARD"),this.lastChild.setConfig(Object(y.a)(`No state available for ${e}`,this._config)))}_ensureElement(t){this.lastChild&&this.lastChild.tagName===t||(this.lastChild&&this.removeChild(this.lastChild),this.appendChild(document.createElement(t)))}}customElements.define("hui-media-control-card",class extends te{static async getConfigElement(){return await Promise.all([i.e(0),i.e(1),i.e(66),i.e(36)]).then(i.bind(null,351)),document.createElement("hui-media-control-card-editor")}static getStubConfig(){return{entity:""}}constructor(){super("ha-media_player-card","media_player")}});let ee=class extends r.a{static async getConfigElement(){return await Promise.all([i.e(0),i.e(1),i.e(8),i.e(37)]).then(i.bind(null,352)),document.createElement("hui-picture-card-editor")}static getStubConfig(){return{image:"/images/image.jpg",tap_action:{action:"none"},hold_action:{action:"none"}}}getCardSize(){return 3}setConfig(t){if(!t||!t.image)throw new Error("Invalid Configuration: 'image' required");this._config=t}render(){return this._config&&this.hass?r.e`
      <ha-card
        @ha-click="${this._handleTap}"
        @ha-hold="${this._handleHold}"
        .longPress="${It()}"
        class="${Object(o.a)({clickable:Boolean(this._config.tap_action||this._config.hold_action)})}"
      >
        <img src="${this.hass.hassUrl(this._config.image)}" />
      </ha-card>
    `:r.e``}static get styles(){return r.c`
      ha-card {
        overflow: hidden;
      }

      ha-card.clickable {
        cursor: pointer;
      }

      img {
        display: block;
        width: 100%;
      }
    `}_handleTap(){Lt(this,this.hass,this._config,!1)}_handleHold(){Lt(this,this.hass,this._config,!0)}};n.b([Object(r.f)()],ee.prototype,"_config",void 0),ee=n.b([Object(r.d)("hui-picture-card")],ee);customElements.define("hui-conditional-element",class extends HTMLElement{constructor(){super(...arguments),this._elements=[]}setConfig(t){if(!(t.conditions&&Array.isArray(t.conditions)&&t.elements&&Array.isArray(t.elements)&&g(t.conditions)))throw new Error("Error in card configuration.");this._elements.length>0&&(this._elements.map(t=>{t.parentElement&&t.parentElement.removeChild(t)}),this._elements=[]),this._config=t,this._config.elements.map(t=>{this._elements.push(be(t))}),this.updateElements()}set hass(t){this._hass=t,this.updateElements()}updateElements(){if(!this._hass||!this._config)return;const t=u(this._config.conditions,this._hass);this._elements.map(e=>{t?(e.hass=this._hass,e.parentElement||this.appendChild(e)):e.parentElement&&e.parentElement.removeChild(e)})}});const ie=(t,e)=>{if(null===e.title)return"";if(e.title)return e.title;let i="",a="";e.entity&&(i=e.entity in t.states?Object(w.a)(t.states[e.entity]):e.entity);const s=e.tap_action?ae(t,i,e.tap_action,!1):"",n=e.hold_action?ae(t,i,e.hold_action,!0):"";return a=s+(s&&n?"\n":"")+n};function ae(t,e,i,a){if(!i||!i.action||"none"===i.action)return"";let s=(a?t.localize("ui.panel.lovelace.cards.picture-elements.hold"):t.localize("ui.panel.lovelace.cards.picture-elements.tap"))+" ";switch(i.action){case"navigate":s+=`${t.localize("ui.panel.lovelace.cards.picture-elements.navigate_to","location",i.navigation_path)}`;break;case"toggle":s+=`${t.localize("ui.panel.lovelace.cards.picture-elements.toggle","name",e)}`;break;case"call-service":s+=`${t.localize("ui.panel.lovelace.cards.picture-elements.call_service","name",i.service)}`;break;case"more-info":s+=`${t.localize("ui.panel.lovelace.cards.picture-elements.more_info","name",e)}`}return s}let se=class extends r.a{setConfig(t){if(!t.icon)throw Error("Invalid Configuration: 'icon' required");this._config=t}render(){return this._config&&this.hass?r.e`
      <ha-icon
        .icon="${this._config.icon}"
        .title="${ie(this.hass,this._config)}"
        @ha-click="${this._handleTap}"
        @ha-hold="${this._handleHold}"
        .longPress="${It()}"
      ></ha-icon>
    `:r.e``}_handleTap(){Lt(this,this.hass,this._config,!1)}_handleHold(){Lt(this,this.hass,this._config,!0)}static get styles(){return r.c`
      :host {
        cursor: pointer;
      }
    `}};n.b([Object(r.f)()],se.prototype,"_config",void 0),se=n.b([Object(r.d)("hui-icon-element")],se);i(192);var ne=i(239);let re=class extends r.a{connectedCallback(){super.connectedCallback(),this._attached=!0,this.cameraImage&&"live"!==this.cameraView&&this._startUpdateCameraInterval()}disconnectedCallback(){super.disconnectedCallback(),this._attached=!1,this._stopUpdateCameraInterval()}render(){const t=this.aspectRatio?Yt(this.aspectRatio):null,e=this.hass&&this.entity?this.hass.states[this.entity]:void 0,i=e?e.state:"unavailable";let a,s,n=!this.stateImage;if(this.cameraImage)"live"===this.cameraView?s=this.hass&&this.hass.states[this.cameraImage]:a=this._cameraImageSrc;else if(this.stateImage){const t=this.stateImage[i];t?a=t:(a=this.image,n=!0)}else a=this.image;a&&(a=this.hass.hassUrl(a));let l=this.filter||"";if(this.stateFilter&&this.stateFilter[i]&&(l=this.stateFilter[i]),!l&&this.entity){l=(!e||f.i.includes(i))&&n?"grayscale(100%)":""}return r.e`
      <div
        style=${Object(yt.a)({paddingBottom:t&&t.w>0&&t.h>0?`${(100*t.h/t.w).toFixed(2)}%`:""})}
        class=${Object(o.a)({ratio:Boolean(t&&t.w>0&&t.h>0)})}
      >
        ${this.cameraImage&&"live"===this.cameraView?r.e`
              <ha-camera-stream
                .hass="${this.hass}"
                .stateObj="${s}"
              ></ha-camera-stream>
            `:r.e`
              <img
                id="image"
                src=${a}
                @error=${this._onImageError}
                @load=${this._onImageLoad}
                style=${Object(yt.a)({filter:l,display:this._loadError?"none":"block"})}
              />
            `}
        <div
          id="brokenImage"
          style=${Object(yt.a)({height:`${this._lastImageHeight||"100"}px`,display:this._loadError?"block":"none"})}
        ></div>
      </div>
    `}updated(t){if(t.has("cameraImage")&&"live"!==this.cameraView)return this._updateCameraImageSrc(),void this._startUpdateCameraInterval()}_startUpdateCameraInterval(){this._stopUpdateCameraInterval(),this.cameraImage&&this._attached&&(this._cameraUpdater=window.setInterval(()=>this._updateCameraImageSrc(),1e4))}_stopUpdateCameraInterval(){this._cameraUpdater&&clearInterval(this._cameraUpdater)}_onImageError(){this._loadError=!0}async _onImageLoad(){this._loadError=!1,await this.updateComplete,this._lastImageHeight=this._image.offsetHeight}async _updateCameraImageSrc(){if(!this.hass||!this.cameraImage)return;this.hass.states[this.cameraImage]?this._cameraImageSrc=await Object(ne.e)(this.hass,this.cameraImage):this._onImageError()}static get styles(){return r.c`
      img {
        display: block;
        height: auto;
        transition: filter 0.2s linear;
        width: 100%;
      }

      .ratio {
        position: relative;
        width: 100%;
        height: 0;
      }

      .ratio img,
      .ratio div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #brokenImage {
        background: grey url("/static/images/image-broken.svg") center/36px
          no-repeat;
      }
    `}};n.b([Object(r.f)()],re.prototype,"hass",void 0),n.b([Object(r.f)()],re.prototype,"entity",void 0),n.b([Object(r.f)()],re.prototype,"image",void 0),n.b([Object(r.f)()],re.prototype,"stateImage",void 0),n.b([Object(r.f)()],re.prototype,"cameraImage",void 0),n.b([Object(r.f)()],re.prototype,"cameraView",void 0),n.b([Object(r.f)()],re.prototype,"aspectRatio",void 0),n.b([Object(r.f)()],re.prototype,"filter",void 0),n.b([Object(r.f)()],re.prototype,"stateFilter",void 0),n.b([Object(r.f)()],re.prototype,"_loadError",void 0),n.b([Object(r.f)()],re.prototype,"_cameraImageSrc",void 0),n.b([Object(r.g)("img")],re.prototype,"_image",void 0),re=n.b([Object(r.d)("hui-image")],re);let oe=class extends r.a{setConfig(t){if(!t)throw Error("Error in element configuration");this.classList.toggle("clickable",t.tap_action&&"none"!==t.tap_action.action),this._config=t}render(){return this._config&&this.hass?r.e`
      <hui-image
        .hass="${this.hass}"
        .entity="${this._config.entity}"
        .image="${this._config.image}"
        .stateImage="${this._config.state_image}"
        .cameraImage="${this._config.camera_image}"
        .filter="${this._config.filter}"
        .stateFilter="${this._config.state_filter}"
        .title="${ie(this.hass,this._config)}"
        .aspectRatio="${this._config.aspect_ratio}"
        @ha-click="${this._handleTap}"
        @ha-hold="${this._handleHold}"
        .longPress="${It()}"
      ></hui-image>
    `:r.e``}static get styles(){return r.c`
      :host(.clickable) {
        cursor: pointer;
        overflow: hidden;
        -webkit-touch-callout: none !important;
      }
      hui-image {
        -webkit-user-select: none !important;
      }
    `}_handleTap(){Lt(this,this.hass,this._config,!1)}_handleHold(){Lt(this,this.hass,this._config,!0)}};n.b([Object(r.f)()],oe.prototype,"hass",void 0),n.b([Object(r.f)()],oe.prototype,"_config",void 0),oe=n.b([Object(r.d)("hui-image-element")],oe);i(274);let le=class extends r.a{static get properties(){return{_config:{}}}setConfig(t){if(!t||!t.service)throw Error("Invalid Configuration: 'service' required");if([this._domain,this._service]=t.service.split(".",2),!this._domain)throw Error("Invalid Configuration: 'service' does not have a domain");if(!this._service)throw Error("Invalid Configuration: 'service' does not have a service name");this._config=t}render(){return this._config&&this.hass?r.e`
      <ha-call-service-button
        .hass="${this.hass}"
        .domain="${this._domain}"
        .service="${this._service}"
        .serviceData="${this._config.service_data}"
        >${this._config.title}</ha-call-service-button
      >
    `:r.e``}static get styles(){return r.c`
      ha-call-service-button {
        color: var(--primary-color);
        white-space: nowrap;
      }
    `}};n.b([Object(r.f)()],le.prototype,"_config",void 0),le=n.b([Object(r.d)("hui-service-button-element")],le);i(249);let ce=class extends r.a{setConfig(t){if(!t.entity)throw Error("Invalid Configuration: 'entity' required");this._config=t}shouldUpdate(t){return $(this,t)}render(){if(!this._config||!this.hass)return r.e``;const t=this.hass.states[this._config.entity];return t?r.e`
      <ha-state-label-badge
        .hass="${this.hass}"
        .state="${t}"
        .title="${void 0===this._config.title?Object(w.a)(t):null===this._config.title?"":this._config.title}"
      ></ha-state-label-badge>
    `:r.e`
        <hui-warning-element
          label="${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}"
        ></hui-warning-element>
      `}};n.b([Object(r.f)()],ce.prototype,"hass",void 0),n.b([Object(r.f)()],ce.prototype,"_config",void 0),ce=n.b([Object(r.d)("hui-state-badge-element")],ce);let he=class extends r.a{setConfig(t){if(!t.entity)throw Error("Invalid Configuration: 'entity' required");this._config=t}shouldUpdate(t){return $(this,t)}render(){if(!this._config||!this.hass)return r.e``;const t=this.hass.states[this._config.entity];return t?r.e`
      <state-badge
        .stateObj="${t}"
        .title="${ie(this.hass,this._config)}"
        @ha-click="${this._handleClick}"
        @ha-hold="${this._handleHold}"
        .longPress="${It()}"
        .overrideIcon=${this._config.icon}
      ></state-badge>
    `:r.e`
        <hui-warning-element
          label=${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}
        ></hui-warning-element>
      `}static get styles(){return r.c`
      :host {
        cursor: pointer;
      }
    `}_handleClick(){Lt(this,this.hass,this._config,!1)}_handleHold(){Lt(this,this.hass,this._config,!0)}};n.b([Object(r.f)()],he.prototype,"hass",void 0),n.b([Object(r.f)()],he.prototype,"_config",void 0),he=n.b([Object(r.d)("hui-state-icon-element")],he);let de=class extends r.a{setConfig(t){if(!t.entity)throw Error("Invalid Configuration: 'entity' required");this._config=t}shouldUpdate(t){return $(this,t)}render(){if(!this._config||!this.hass)return r.e``;const t=this.hass.states[this._config.entity];return t?r.e`
      <div
        .title="${ie(this.hass,this._config)}"
        @ha-click="${this._handleTap}"
        @ha-hold="${this._handleHold}"
        .longPress="${It()}"
      >
        ${this._config.prefix}${t?Object(S.a)(this.hass.localize,t,this.hass.language):"-"}${this._config.suffix}
      </div>
    `:r.e`
        <hui-warning-element
          label=${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}
        ></hui-warning-element>
      `}_handleTap(){Lt(this,this.hass,this._config,!1)}_handleHold(){Lt(this,this.hass,this._config,!0)}static get styles(){return r.c`
      :host {
        cursor: pointer;
      }
      div {
        padding: 8px;
        white-space: nowrap;
      }
    `}};n.b([Object(r.f)()],de.prototype,"hass",void 0),n.b([Object(r.f)()],de.prototype,"_config",void 0),de=n.b([Object(r.d)("hui-state-label-element")],de);const pe=new Set(["conditional","icon","image","service-button","state-badge","state-icon","state-label"]),ue=2e3,ge=(t,e)=>{const i=document.createElement(t);try{i.setConfig(Object(a.a)(e))}catch(s){return console.error(t,s),fe(s.message,e)}return i},fe=(t,e)=>Object(y.b)(Object(y.a)(t,e));const me=t=>{if(!t||"object"!=typeof t||!t.type)return fe("No element type configured.",t);if(t.type.startsWith("custom:")){const e=t.type.substr("custom:".length);if(customElements.get(e))return ge(e,t);const i=fe(`Custom element doesn't exist: ${e}.`,t),a=function(t){return t.style.display="None",window.setTimeout(()=>{t.style.display=""},ue)}(i);return customElements.whenDefined(e).then(()=>{clearTimeout(a),Object(s.a)(i,"ll-rebuild")}),i}return pe.has(t.type)?ge(`hui-${t.type}-element`,t):fe(`Unknown element type encountered: ${t.type}.`,t)};function be(t){const e=me(t);return"HUI-CONDITIONAL-ELEMENT"!==e.tagName&&e.classList.add("element"),t.style&&Object.keys(t.style).forEach(i=>{e.style.setProperty(i,t.style[i])}),e}let _e=class extends r.a{set hass(t){this._hass=t;for(const e of Array.from(this.shadowRoot.querySelectorAll("#root > *"))){e.hass=this._hass}}getCardSize(){return 4}setConfig(t){if(!t)throw new Error("Invalid Configuration");if(!(t.image||t.camera_image||t.state_image)||t.state_image&&!t.entity)throw new Error("Invalid Configuration: image required");if(!Array.isArray(t.elements))throw new Error("Invalid Configuration: elements required");this._config=t}render(){return this._config?r.e`
      <ha-card .header="${this._config.title}">
        <div id="root">
          <hui-image
            .hass="${this._hass}"
            .image="${this._config.image}"
            .stateImage="${this._config.state_image}"
            .cameraImage="${this._config.camera_image}"
            .cameraView="${this._config.camera_view}"
            .entity="${this._config.entity}"
            .aspectRatio="${this._config.aspect_ratio}"
          ></hui-image>
          ${this._config.elements.map(t=>{const e=be(t);return e.hass=this._hass,e})}
        </div>
      </ha-card>
    `:r.e``}static get styles(){return r.c`
      #root {
        position: relative;
      }

      .element {
        position: absolute;
        transform: translate(-50%, -50%);
      }

      ha-card {
        overflow: hidden;
      }
    `}};n.b([Object(r.f)()],_e.prototype,"_config",void 0),_e=n.b([Object(r.d)("hui-picture-elements-card")],_e);let ve=class extends r.a{getCardSize(){return 3}setConfig(t){if(!t||!t.entity)throw new Error("Invalid Configuration: 'entity' required");if("camera"!==Object(m.a)(t.entity)&&!t.image&&!t.state_image&&!t.camera_image)throw new Error("No image source configured.");this._config=Object.assign({show_name:!0,show_state:!0},t)}shouldUpdate(t){return $(this,t)}render(){if(!this._config||!this.hass)return r.e``;const t=this.hass.states[this._config.entity];if(!t)return r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `;const e=this._config.name||Object(w.a)(t),i=Object(S.a)(this.hass.localize,t,this.hass.language);let a="";return this._config.show_name&&this._config.show_state?a=r.e`
        <div class="footer both">
          <div>${e}</div>
          <div>${i}</div>
        </div>
      `:this._config.show_name?a=r.e`
        <div class="footer">${e}</div>
      `:this._config.show_state&&(a=r.e`
        <div class="footer state">${i}</div>
      `),r.e`
      <ha-card>
        <hui-image
          .hass="${this.hass}"
          .image="${this._config.image}"
          .stateImage="${this._config.state_image}"
          .cameraImage="${"camera"===Object(m.a)(this._config.entity)?this._config.entity:this._config.camera_image}"
          .cameraView="${this._config.camera_view}"
          .entity="${this._config.entity}"
          .aspectRatio="${this._config.aspect_ratio}"
          @ha-click="${this._handleTap}"
          @ha-hold="${this._handleHold}"
          .longPress="${It()}"
          class="${Object(o.a)({clickable:"unavailable"!==t.state})}"
        ></hui-image>
        ${a}
      </ha-card>
    `}static get styles(){return r.c`
      ha-card {
        min-height: 75px;
        overflow: hidden;
        position: relative;
      }

      hui-image.clickable {
        cursor: pointer;
      }

      .footer {
        /* start paper-font-common-nowrap style */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        /* end paper-font-common-nowrap style */

        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        padding: 16px;
        font-size: 16px;
        line-height: 16px;
        color: white;
      }

      .both {
        display: flex;
        justify-content: space-between;
      }

      .state {
        text-align: right;
      }
    `}_handleTap(){Lt(this,this.hass,this._config,!1)}_handleHold(){Lt(this,this.hass,this._config,!0)}};n.b([Object(r.f)()],ve.prototype,"hass",void 0),n.b([Object(r.f)()],ve.prototype,"_config",void 0),ve=n.b([Object(r.d)("hui-picture-entity-card")],ve);const ye=new Set(["closed","locked","not_home","off"]);let we=class extends r.a{getCardSize(){return 3}setConfig(t){if(!t||!t.entities||!Array.isArray(t.entities)||!(t.image||t.camera_image||t.state_image)||t.state_image&&!t.entity)throw new Error("Invalid card configuration");const e=Object(v.a)(t.entities);this._entitiesDialog=[],this._entitiesToggle=[],e.forEach(e=>{t.force_dialog||!f.f.has(Object(m.a)(e.entity))?this._entitiesDialog.push(e):this._entitiesToggle.push(e)}),this._config=t}shouldUpdate(t){if(t.has("_config"))return!0;const e=t.get("hass");if(!e)return!0;if(this._entitiesDialog)for(const i of this._entitiesDialog)if(e.states[i.entity]!==this.hass.states[i.entity])return!0;if(this._entitiesToggle)for(const i of this._entitiesToggle)if(e.states[i.entity]!==this.hass.states[i.entity])return!0;return!1}render(){return this._config&&this.hass?r.e`
      <ha-card>
        <hui-image
          class="${Object(o.a)({clickable:Boolean(this._config.tap_action||this._config.hold_action||this._config.camera_image)})}"
          @ha-click="${this._handleTap}"
          @ha-hold="${this._handleHold}"
          .longPress="${It()}"
          .hass="${this.hass}"
          .image="${this._config.image}"
          .stateImage="${this._config.state_image}"
          .cameraImage="${this._config.camera_image}"
          .cameraView="${this._config.camera_view}"
          .entity="${this._config.entity}"
          .aspectRatio="${this._config.aspect_ratio}"
        ></hui-image>
        <div class="box">
          ${this._config.title?r.e`
                <div class="title">${this._config.title}</div>
              `:""}
          <div>
            ${this._entitiesDialog.map(t=>this.renderEntity(t,!0))}
          </div>
          <div>
            ${this._entitiesToggle.map(t=>this.renderEntity(t,!1))}
          </div>
        </div>
      </ha-card>
    `:r.e``}renderEntity(t,e){const i=this.hass.states[t.entity];return i?r.e`
      <ha-icon
        .entity="${i.entity_id}"
        @click="${e?this._openDialog:this._callService}"
        class="${Object(o.a)({"state-on":!ye.has(i.state)})}"
        .icon="${t.icon||Object(Ct.a)(i)}"
        title="${`\n            ${Object(w.a)(i)} : ${Object(S.a)(this.hass.localize,i,this.hass.language)}\n          `}"
      ></ha-icon>
    `:r.e`
        <hui-warning-element
          label=${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",t.entity)}
        ></hui-warning-element>
      `}_handleTap(){Lt(this,this.hass,this._config,!1)}_handleHold(){Lt(this,this.hass,this._config,!0)}_openDialog(t){Object(s.a)(this,"hass-more-info",{entityId:t.target.entity})}_callService(t){Pt(this.hass,t.target.entity)}static get styles(){return r.c`
      ha-card {
        position: relative;
        min-height: 48px;
        overflow: hidden;
      }

      hui-image.clickable {
        cursor: pointer;
      }

      .box {
        /* start paper-font-common-nowrap style */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        /* end paper-font-common-nowrap style */

        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        padding: 4px 8px;
        font-size: 16px;
        line-height: 40px;
        color: white;
        display: flex;
        justify-content: space-between;
      }

      .box .title {
        font-weight: 500;
        margin-left: 8px;
      }

      ha-icon {
        cursor: pointer;
        padding: 8px;
        color: #a9a9a9;
      }

      ha-icon.state-on {
        color: white;
      }
    `}};n.b([Object(r.f)()],we.prototype,"hass",void 0),n.b([Object(r.f)()],we.prototype,"_config",void 0),we=n.b([Object(r.d)("hui-picture-glance-card")],we);const xe={moisture:"hass:water",temperature:"hass:thermometer",brightness:"hass:white-balance-sunny",conductivity:"hass:emoticon-poop",battery:"hass:battery"};let ke=class extends r.a{static async getConfigElement(){return await Promise.all([i.e(0),i.e(1),i.e(67),i.e(38)]).then(i.bind(null,353)),document.createElement("hui-plant-status-card-editor")}static getStubConfig(){return{}}getCardSize(){return 3}setConfig(t){if(!t.entity||"plant"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the plant domain.");this._config=t}shouldUpdate(t){return $(this,t)}render(){if(!this.hass||!this._config)return r.e``;const t=this.hass.states[this._config.entity];return t?r.e`
      <ha-card
        class="${t.attributes.entity_picture?"has-plant-image":""}"
      >
        <div
          class="banner"
          style="background-image:url(${t.attributes.entity_picture})"
        >
          <div class="header">
            ${this._config.name||Object(w.a)(t)}
          </div>
        </div>
        <div class="content">
          ${this.computeAttributes(t).map(e=>r.e`
              <div
                class="attributes"
                @click="${this._handleMoreInfo}"
                .value="${e}"
              >
                <div>
                  <ha-icon
                    icon="${this.computeIcon(e,t.attributes.battery)}"
                  ></ha-icon>
                </div>
                <div
                  class="${-1===t.attributes.problem.indexOf(e)?"":"problem"}"
                >
                  ${t.attributes[e]}
                </div>
                <div class="uom">
                  ${t.attributes.unit_of_measurement_dict[e]||""}
                </div>
              </div>
            `)}
        </div>
      </ha-card>
    `:r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}static get styles(){return r.c`
      .banner {
        display: flex;
        align-items: flex-end;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        padding-top: 12px;
      }

      .has-plant-image .banner {
        padding-top: 30%;
      }

      .header {
        /* start paper-font-headline style */
        font-family: "Roboto", "Noto", sans-serif;
        -webkit-font-smoothing: antialiased; /* OS X subpixel AA bleed bug */
        text-rendering: optimizeLegibility;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: -0.012em;
        /* end paper-font-headline style */

        line-height: 40px;
        padding: 8px 16px;
      }

      .has-plant-image .header {
        font-size: 16px;
        font-weight: 500;
        line-height: 16px;
        padding: 16px;
        color: white;
        width: 100%;
        background: rgba(0, 0, 0, var(--dark-secondary-opacity));
      }

      .content {
        display: flex;
        justify-content: space-between;
        padding: 16px 32px 24px 32px;
      }

      .has-plant-image .content {
        padding-bottom: 16px;
      }

      ha-icon {
        color: var(--paper-item-icon-color);
        margin-bottom: 8px;
      }

      .attributes {
        cursor: pointer;
      }

      .attributes div {
        text-align: center;
      }

      .problem {
        color: var(--google-red-500);
        font-weight: bold;
      }

      .uom {
        color: var(--secondary-text-color);
      }
    `}computeAttributes(t){return Object.keys(xe).filter(e=>e in t.attributes)}computeIcon(t,e){const i=xe[t];if("battery"===t){if(e<=5)return`${i}-alert`;if(e<95)return`${i}-${10*Math.round(e/10-.01)}`}return i}_handleMoreInfo(t){const e=t.currentTarget,i=this.hass.states[this._config.entity];e.value&&Object(s.a)(this,"hass-more-info",{entityId:i.attributes.sensors[e.value]})}};n.b([Object(r.f)()],ke.prototype,"hass",void 0),n.b([Object(r.f)()],ke.prototype,"_config",void 0),ke=n.b([Object(r.d)("hui-plant-status-card")],ke);i(191);var Oe=i(216);const $e=(t,e,i,a)=>{return[(t-i)/2+i,(e-a)/2+a]},je=(t,e,i,a)=>{t.forEach(t=>t.state=Number(t.state)),t=t.filter(t=>!Number.isNaN(t.state));const s=Math.min.apply(Math,t.map(t=>t.state)),n=Math.max.apply(Math,t.map(t=>t.state)),r=(new Date).getTime(),o=(t,i,a)=>{const s=r-new Date(i.last_changed).getTime();let n=Math.abs(s/36e5-e);return a?(n=60*(n-Math.floor(n)),n=Number((10*Math.round(n/10)).toString()[0])):n=Math.floor(n),t[n]||(t[n]=[]),t[n].push(i),t};return t=t.reduce((t,e)=>o(t,e,!1),[]),a>1&&(t=t.map(t=>t.reduce((t,e)=>o(t,e,!0),[]))),((t,e,i,a,s,n)=>{const r=[];let o=(n-s)/80;o=0!==o?o:80;let l=(i-=10)/(e-(1===a?1:0));l=isFinite(l)?l:i;const c=(t,e,i=0,a=1)=>{if(a>1)return t.forEach((t,i)=>c(t,e,i,a-1));const n=t.reduce((t,e)=>t+parseFloat(e.state),0)/t.length,h=l*(e+i/6)+5,d=80-(n-s)/o+10;return r.push([h,d])};return t.forEach((t,e)=>c(t,e,0,a)),1===r.length&&(r[1]=[i+5,r[0][1]]),r.push([i+5,r[r.length-1][1]]),r})(t,e,i,a,s,n)};let Ce=class extends r.a{static async getConfigElement(){return await Promise.all([i.e(0),i.e(1),i.e(68),i.e(39)]).then(i.bind(null,354)),document.createElement("hui-sensor-card-editor")}static getStubConfig(){return{entity:""}}setConfig(t){if(!t.entity||"sensor"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the sensor domain.");const e=Object.assign({detail:1,theme:"default",hours_to_show:24},t);e.hours_to_show=Number(e.hours_to_show),e.detail=1===e.detail||2===e.detail?e.detail:1,this._config=e}getCardSize(){return 3}render(){if(!this._config||!this.hass)return r.e``;const t=this.hass.states[this._config.entity];if(!t)return r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `;let e;if(t&&"line"===this._config.graph){if(!t.attributes.unit_of_measurement)return r.e`
          <hui-warning
            >Entity: ${this._config.entity} - Has no Unit of Measurement and
            therefore can not display a line graph.</hui-warning
          >
        `;e=this._history?r.i`
          <svg width="100%" height="100%" viewBox="0 0 500 100">
            <path
              d="${this._history}"
              fill="none"
              stroke="var(--accent-color)"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        `:r.i`
          <svg width="100%" height="100%" viewBox="0 0 500 100"></svg>
        `}else e="";return r.e`
      <ha-card @click="${this._handleClick}">
        <div class="flex">
          <div class="icon">
            <ha-icon
              .icon="${this._config.icon||Object(Ct.a)(t)}"
            ></ha-icon>
          </div>
          <div class="header">
            <span class="name"
              >${this._config.name||Object(w.a)(t)}</span
            >
          </div>
        </div>
        <div class="flex info">
          <span id="value">${t.state}</span>
          <span id="measurement"
            >${this._config.unit||t.attributes.unit_of_measurement}</span
          >
        </div>
        <div class="graph"><div>${e}</div></div>
      </ha-card>
    `}firstUpdated(){this._date=new Date}shouldUpdate(t){return!!t.has("_history")||$(this,t)}updated(t){if(super.updated(t),!this._config||"line"!==this._config.graph||!this.hass)return;const e=t.get("hass");e&&e.themes===this.hass.themes||Object(_t.a)(this,this.hass.themes,this._config.theme);t.has("_config")?this._getHistory():Date.now()-this._date.getTime()>=6e4&&this._getHistory()}_handleClick(){Object(s.a)(this,"hass-more-info",{entityId:this._config.entity})}async _getHistory(){const t=new Date,e=new Date;e.setHours(t.getHours()-this._config.hours_to_show);const i=await Object(Oe.c)(this.hass,this._config.entity,e,t);if(i.length<1||i[0].length<1)return;const a=je(i[0],this._config.hours_to_show,500,this._config.detail);this._history=(t=>{let e,i;let a="",s=t.filter(Boolean)[0];a+=`M ${s[0]},${s[1]}`;for(const n of t)e=n,a+=` ${(i=$e(s[0],s[1],e[0],e[1]))[0]},${i[1]}`,a+=` Q${e[0]},${e[1]}`,s=e;return a+=` ${e[0]},${e[1]}`})(a),this._date=new Date}static get styles(){return r.c`
      :host {
        display: flex;
        flex-direction: column;
      }

      ha-card {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 16px;
        position: relative;
        cursor: pointer;
      }

      .flex {
        display: flex;
      }

      .header {
        align-items: center;
        display: flex;
        min-width: 0;
        opacity: 0.8;
        position: relative;
      }

      .name {
        display: block;
        display: -webkit-box;
        font-size: 1.2rem;
        font-weight: 500;
        max-height: 1.4rem;
        margin-top: 2px;
        opacity: 0.8;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
        word-break: break-all;
      }

      .icon {
        color: var(--paper-item-icon-color, #44739e);
        display: inline-block;
        flex: 0 0 40px;
        line-height: 40px;
        position: relative;
        text-align: center;
        width: 40px;
      }

      .info {
        flex-wrap: wrap;
        margin: 16px 0 16px 8px;
      }

      #value {
        display: inline-block;
        font-size: 2rem;
        font-weight: 400;
        line-height: 1em;
        margin-right: 4px;
      }

      #measurement {
        align-self: flex-end;
        display: inline-block;
        font-size: 1.3rem;
        line-height: 1.2em;
        margin-top: 0.1em;
        opacity: 0.6;
        vertical-align: bottom;
      }

      .graph {
        align-self: flex-end;
        margin: auto;
        margin-bottom: 0px;
        position: relative;
        width: 100%;
      }

      .graph > div {
        align-self: flex-end;
        margin: auto 8px;
      }
    `}};n.b([Object(r.f)()],Ce.prototype,"hass",void 0),n.b([Object(r.f)()],Ce.prototype,"_config",void 0),n.b([Object(r.f)()],Ce.prototype,"_history",void 0),Ce=n.b([Object(r.d)("hui-sensor-card")],Ce);customElements.define("hui-vertical-stack-card",class extends Ht{getCardSize(){let t=0;if(!this._cards)return t;for(const e of this._cards)t+=Object(p.a)(e);return t}renderStyle(){return r.e`
      <style>
        #root {
          display: flex;
          flex-direction: column;
        }
        #root > * {
          margin: 4px 0 4px 0;
        }
        #root > *:first-child {
          margin-top: 0;
        }
        #root > *:last-child {
          margin-bottom: 0;
        }
      </style>
    `}});var Ee=i(283);i(147);const Se=(t,e,i)=>t.callWS(Object.assign({type:"shopping_list/items/update",item_id:e},i));let Te,ze=class extends r.a{static async getConfigElement(){return await i.e(40).then(i.bind(null,355)),document.createElement("hui-shopping-list-card-editor")}static getStubConfig(){return{}}getCardSize(){return 3+(this._config&&this._config.title?1:0)}setConfig(t){this._config=t,this._uncheckedItems=[],this._checkedItems=[],this._fetchData()}connectedCallback(){super.connectedCallback(),this.hass&&(this._unsubEvents=this.hass.connection.subscribeEvents(()=>this._fetchData(),"shopping_list_updated"),this._fetchData())}disconnectedCallback(){super.disconnectedCallback(),this._unsubEvents&&this._unsubEvents.then(t=>t())}render(){return this._config&&this.hass?r.e`
      <ha-card .header="${this._config.title}">
        <div class="addRow">
          <ha-icon
            class="addButton"
            @click="${this._addItem}"
            icon="hass:plus"
            .title="${this.hass.localize("ui.panel.lovelace.cards.shopping-list.add_item")}"
          >
          </ha-icon>
          <paper-item-body>
            <paper-input
              no-label-float
              class="addBox"
              placeholder="${this.hass.localize("ui.panel.lovelace.cards.shopping-list.add_item")}"
              @keydown="${this._addKeyPress}"
            ></paper-input>
          </paper-item-body>
        </div>
        ${Object(Ee.a)(this._uncheckedItems,t=>t.id,(t,e)=>r.e`
              <div class="editRow">
                <paper-checkbox
                  slot="item-icon"
                  id="${e}"
                  ?checked="${t.complete}"
                  .itemId="${t.id}"
                  @click="${this._completeItem}"
                  tabindex="0"
                ></paper-checkbox>
                <paper-item-body>
                  <paper-input
                    no-label-float
                    .value="${t.name}"
                    .itemId="${t.id}"
                    @change="${this._saveEdit}"
                  ></paper-input>
                </paper-item-body>
              </div>
            `)}
        ${this._checkedItems.length>0?r.e`
              <div class="divider"></div>
              <div class="checked">
                <span class="label">
                  ${this.hass.localize("ui.panel.lovelace.cards.shopping-list.checked_items")}
                </span>
                <ha-icon
                  class="clearall"
                  @click="${this._clearItems}"
                  icon="hass:notification-clear-all"
                  .title="${this.hass.localize("ui.panel.lovelace.cards.shopping-list.clear_items")}"
                >
                </ha-icon>
              </div>
              ${Object(Ee.a)(this._checkedItems,t=>t.id,(t,e)=>r.e`
                    <div class="editRow">
                      <paper-checkbox
                        slot="item-icon"
                        id="${e}"
                        ?checked="${t.complete}"
                        .itemId="${t.id}"
                        @click="${this._completeItem}"
                        tabindex="0"
                      ></paper-checkbox>
                      <paper-item-body>
                        <paper-input
                          no-label-float
                          .value="${t.name}"
                          .itemId="${t.id}"
                          @change="${this._saveEdit}"
                        ></paper-input>
                      </paper-item-body>
                    </div>
                  `)}
            `:""}
      </ha-card>
    `:r.e``}static get styles(){return r.c`
      .editRow,
      .addRow {
        display: flex;
        flex-direction: row;
      }

      .addButton {
        padding: 9px 15px 11px 15px;
        cursor: pointer;
      }

      paper-item-body {
        width: 75%;
      }

      paper-checkbox {
        padding: 11px 11px 11px 18px;
      }

      paper-input {
        --paper-input-container-underline: {
          display: none;
        }
        --paper-input-container-underline-focus: {
          display: none;
        }
        --paper-input-container-underline-disabled: {
          display: none;
        }
        position: relative;
        top: 1px;
      }

      .checked {
        margin-left: 17px;
        margin-bottom: 11px;
        margin-top: 11px;
      }

      .label {
        color: var(--primary-color);
      }

      .divider {
        height: 1px;
        background-color: var(--divider-color);
        margin: 10px;
      }

      .clearall {
        cursor: pointer;
        margin-bottom: 3px;
        float: right;
        padding-right: 10px;
      }

      .addRow > ha-icon {
        color: var(--secondary-text-color);
      }
    `}async _fetchData(){if(this.hass){const t=[],e=[],i=await(t=>t.callWS({type:"shopping_list/items"}))(this.hass);for(const a in i)i[a].complete?t.push(i[a]):e.push(i[a]);this._checkedItems=t,this._uncheckedItems=e}}_completeItem(t){Se(this.hass,t.target.itemId,{complete:t.target.checked}).catch(()=>this._fetchData())}_saveEdit(t){Se(this.hass,t.target.itemId,{name:t.target.value}).catch(()=>this._fetchData()),t.target.blur()}_clearItems(){this.hass&&(t=>t.callWS({type:"shopping_list/items/clear"}))(this.hass).catch(()=>this._fetchData())}get _newItem(){return this.shadowRoot.querySelector(".addBox")}_addItem(t){const e=this._newItem;e.value.length>0&&((t,e)=>t.callWS({type:"shopping_list/items/add",name:e}))(this.hass,e.value).catch(()=>this._fetchData()),e.value="",t&&e.focus()}_addKeyPress(t){13===t.keyCode&&this._addItem(null)}};n.b([Object(r.f)()],ze.prototype,"hass",void 0),n.b([Object(r.f)()],ze.prototype,"_config",void 0),n.b([Object(r.f)()],ze.prototype,"_uncheckedItems",void 0),n.b([Object(r.f)()],ze.prototype,"_checkedItems",void 0),ze=n.b([Object(r.d)("hui-shopping-list-card")],ze);var Ie=i(225);const Me={radius:150,circleShape:"pie",startAngle:315,width:5,lineCap:"round",handleSize:"+10",showTooltip:!1,animation:!1},Pe={auto:"hass:calendar-repeat",heat_cool:"hass:autorenew",heat:"hass:fire",cool:"hass:snowflake",off:"hass:power",fan_only:"hass:fan",dry:"hass:water-percent"};let Le=class extends r.a{static async getConfigElement(){return await Promise.all([i.e(0),i.e(1),i.e(69),i.e(41)]).then(i.bind(null,356)),document.createElement("hui-thermostat-card-editor")}static getStubConfig(){return{entity:""}}getCardSize(){return 4}setConfig(t){if(!t.entity||"climate"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the climate domain.");this._config=Object.assign({theme:"default"},t)}connectedCallback(){super.connectedCallback(),this._updated&&!this._loaded&&this._initialLoad()}render(){if(!this.hass||!this._config)return r.e``;const t=this.hass.states[this._config.entity];if(!t)return r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `;const e=t.state in Pe?t.state:"unknown-mode";return r.e`
      ${this.renderStyle()}
      <ha-card
        class="${Object(o.a)({[e]:!0,large:this._broadCard,small:!this._broadCard})}"
      >
        <div id="root">
          <paper-icon-button
            icon="hass:dots-vertical"
            class="more-info"
            @click="${this._handleMoreInfo}"
          ></paper-icon-button>
          <div id="thermostat"></div>
          <div id="tooltip">
            <div class="title">
              ${this._config.name||Object(w.a)(t)}
            </div>
            <div class="current-temperature">
              <span class="current-temperature-text">
                ${t.attributes.current_temperature}
                ${t.attributes.current_temperature?r.e`
                      <span class="uom"
                        >${this.hass.config.unit_system.temperature}</span
                      >
                    `:""}
              </span>
            </div>
            <div class="climate-info">
              <div id="set-temperature"></div>
              <div class="current-mode">
                ${t.attributes.hvac_action?this.hass.localize(`state_attributes.climate.hvac_action.${t.attributes.hvac_action}`):this.hass.localize(`state.climate.${t.state}`)}
                ${t.attributes.preset_mode&&t.attributes.preset_mode!==Ie.a?r.e`
                      -
                      ${this.hass.localize(`state_attributes.climate.preset_mode.${t.attributes.preset_mode}`)||t.attributes.preset_mode}
                    `:""}
              </div>
              <div class="modes">
                ${(t.attributes.hvac_modes||[]).concat().sort(Ie.i).map(t=>this._renderIcon(t,e))}
              </div>
            </div>
          </div>
        </div>
      </ha-card>
    `}shouldUpdate(t){return $(this,t)}firstUpdated(){this._updated=!0,this.isConnected&&!this._loaded&&this._initialLoad()}updated(t){if(super.updated(t),!this._config||!this.hass||!t.has("hass"))return;const e=t.get("hass");e&&e.themes===this.hass.themes||Object(_t.a)(this,this.hass.themes,this._config.theme);const i=this.hass.states[this._config.entity];if(i&&this._jQuery&&!t.has("_jQuery")&&(!e||e.states[this._config.entity]!==i)){const[t,e,a]=this._genSliderValue(i);this._jQuery("#thermostat",this.shadowRoot).roundSlider({sliderType:a,value:t,disabled:null===t,min:i.attributes.min_temp,max:i.attributes.max_temp}),this._updateSetTemp(e)}}get _stepSize(){const t=this.hass.states[this._config.entity];return t.attributes.target_temp_step?t.attributes.target_temp_step:this.hass.config.unit_system.temperature===f.k?1:.5}async _initialLoad(){const t=this.hass.states[this._config.entity];if(!t)return;this._loaded=!0,await this.updateComplete;let e=this.clientWidth/3.2;this._broadCard=this.clientWidth>390,0===e&&(e=100),this.shadowRoot.querySelector("#thermostat").style.height=2*e+"px";const a=await(async()=>(Te||(Te=Promise.all([i.e(72),i.e(46)]).then(i.bind(null,377))),Te))();this._roundSliderStyle=a.roundSliderStyle,this._jQuery=a.jQuery;const[s,n,r]=this._genSliderValue(t);this._jQuery("#thermostat",this.shadowRoot).roundSlider(Object.assign({},Me,{radius:e,min:t.attributes.min_temp,max:t.attributes.max_temp,sliderType:r,change:t=>this._setTemperature(t),drag:t=>this._dragEvent(t),value:s,disabled:null===s,step:this._stepSize})),this._updateSetTemp(n)}_genSliderValue(t){let e,i,a;return"unavailable"===t.state?(e="min-range",i=null,a=this.hass.localize("state.default.unavailable")):t.attributes.target_temp_low&&t.attributes.target_temp_high?(e="range",i=`${t.attributes.target_temp_low}, ${t.attributes.target_temp_high}`,a=this.formatTemp([String(t.attributes.target_temp_low),String(t.attributes.target_temp_high)],!1)):(e="min-range",a=null!==(i=Number.isFinite(Number(t.attributes.temperature))?t.attributes.temperature:null)?String(i):""),[i,a,e]}_updateSetTemp(t){this.shadowRoot.querySelector("#set-temperature").innerHTML=t}_dragEvent(t){this._updateSetTemp(this.formatTemp(String(t.value).split(","),!0))}_setTemperature(t){const e=this.hass.states[this._config.entity];e.attributes.target_temp_low&&e.attributes.target_temp_high?1===t.handle.index?this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,target_temp_low:t.handle.value,target_temp_high:e.attributes.target_temp_high}):this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,target_temp_low:e.attributes.target_temp_low,target_temp_high:t.handle.value}):this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,temperature:t.value})}_renderIcon(t,e){return Pe[t]?r.e`
      <ha-icon
        class="${Object(o.a)({"selected-icon":e===t})}"
        .mode="${t}"
        .icon="${Pe[t]}"
        @click="${this._handleModeClick}"
      ></ha-icon>
    `:r.e``}_handleMoreInfo(){Object(s.a)(this,"hass-more-info",{entityId:this._config.entity})}_handleModeClick(t){this.hass.callService("climate","set_hvac_mode",{entity_id:this._config.entity,hvac_mode:t.currentTarget.mode})}formatTemp(t,e){if(t=t.filter(Boolean),e){const e=this._stepSize;t=t.map(t=>t.includes(".")||1===e?t:`${t}.0`)}return t.join("-")}renderStyle(){return r.e`
      ${this._roundSliderStyle}
      <style>
        :host {
          display: block;
        }
        ha-card {
          overflow: hidden;
          --rail-border-color: transparent;
          --auto-color: green;
          --eco-color: springgreen;
          --cool-color: #2b9af9;
          --heat-color: #ff8100;
          --manual-color: #44739e;
          --off-color: #8a8a8a;
          --fan_only-color: #8a8a8a;
          --dry-color: #efbd07;
          --idle-color: #8a8a8a;
          --unknown-color: #bac;
        }
        #root {
          position: relative;
          overflow: hidden;
        }
        .auto,
        .heat_cool {
          --mode-color: var(--auto-color);
        }
        .cool {
          --mode-color: var(--cool-color);
        }
        .heat {
          --mode-color: var(--heat-color);
        }
        .manual {
          --mode-color: var(--manual-color);
        }
        .off {
          --mode-color: var(--off-color);
        }
        .fan_only {
          --mode-color: var(--fan_only-color);
        }
        .eco {
          --mode-color: var(--eco-color);
        }
        .dry {
          --mode-color: var(--dry-color);
        }
        .idle {
          --mode-color: var(--idle-color);
        }
        .unknown-mode {
          --mode-color: var(--unknown-color);
        }
        .no-title {
          --title-position-top: 33% !important;
        }
        .large {
          --thermostat-padding-top: 25px;
          --thermostat-margin-bottom: 25px;
          --title-font-size: 28px;
          --title-position-top: 27%;
          --climate-info-position-top: 81%;
          --set-temperature-font-size: 25px;
          --current-temperature-font-size: 71px;
          --current-temperature-position-top: 10%;
          --current-temperature-text-padding-left: 15px;
          --uom-font-size: 20px;
          --uom-margin-left: -18px;
          --current-mode-font-size: 18px;
          --set-temperature-margin-bottom: -5px;
        }
        .small {
          --thermostat-padding-top: 15px;
          --thermostat-margin-bottom: 15px;
          --title-font-size: 18px;
          --title-position-top: 28%;
          --climate-info-position-top: 79%;
          --set-temperature-font-size: 16px;
          --current-temperature-font-size: 25px;
          --current-temperature-position-top: 5%;
          --current-temperature-text-padding-left: 7px;
          --uom-font-size: 12px;
          --uom-margin-left: -5px;
          --current-mode-font-size: 14px;
          --set-temperature-margin-bottom: 0px;
        }
        #thermostat {
          margin: 0 auto var(--thermostat-margin-bottom);
          padding-top: var(--thermostat-padding-top);
        }
        #thermostat .rs-range-color {
          background-color: var(--mode-color, var(--disabled-text-color));
        }
        #thermostat .rs-path-color {
          background-color: var(--disabled-text-color);
        }
        #thermostat .rs-handle {
          background-color: var(--paper-card-background-color, white);
          padding: 10px;
          margin: -10px 0 0 -8px !important;
          border: 2px solid var(--disabled-text-color);
        }
        #thermostat .rs-handle.rs-focus {
          border-color: var(--mode-color, var(--disabled-text-color));
        }
        #thermostat .rs-handle:after {
          border-color: var(--mode-color, var(--disabled-text-color));
          background-color: var(--mode-color, var(--disabled-text-color));
        }
        #thermostat .rs-border {
          border-color: var(--rail-border-color);
        }
        #thermostat .rs-bar.rs-transition.rs-first,
        .rs-bar.rs-transition.rs-second {
          z-index: 20 !important;
        }
        #thermostat .rs-readonly {
          z-index: 10;
          top: auto;
        }
        #thermostat .rs-inner.rs-bg-color.rs-border,
        #thermostat .rs-overlay.rs-transition.rs-bg-color {
          background-color: var(--paper-card-background-color, white);
        }
        #tooltip {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          text-align: center;
          z-index: 15;
          color: var(--primary-text-color);
        }
        #set-temperature {
          font-size: var(--set-temperature-font-size);
          margin-bottom: var(--set-temperature-margin-bottom);
          min-height: 1.2em;
        }
        .title {
          font-size: var(--title-font-size);
          position: absolute;
          top: var(--title-position-top);
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .climate-info {
          position: absolute;
          top: var(--climate-info-position-top);
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
        }
        .current-mode {
          font-size: var(--current-mode-font-size);
          color: var(--secondary-text-color);
        }
        .modes {
          margin-top: 16px;
        }
        .modes ha-icon {
          color: var(--disabled-text-color);
          cursor: pointer;
          display: inline-block;
          margin: 0 10px;
        }
        .modes ha-icon.selected-icon {
          color: var(--mode-color);
        }
        .current-temperature {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: var(--current-temperature-font-size);
        }
        .current-temperature-text {
          padding-left: var(--current-temperature-text-padding-left);
        }
        .uom {
          font-size: var(--uom-font-size);
          vertical-align: top;
          margin-left: var(--uom-margin-left);
        }
        .more-info {
          position: absolute;
          cursor: pointer;
          top: 0;
          right: 0;
          z-index: 25;
          color: var(--secondary-text-color);
        }
      </style>
    `}};n.b([Object(r.f)()],Le.prototype,"hass",void 0),n.b([Object(r.f)()],Le.prototype,"_config",void 0),n.b([Object(r.f)()],Le.prototype,"_roundSliderStyle",void 0),n.b([Object(r.f)()],Le.prototype,"_jQuery",void 0),Le=n.b([Object(r.d)("hui-thermostat-card")],Le);const De=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"],Ae={"clear-night":"hass:weather-night",cloudy:"hass:weather-cloudy",exceptional:"hass:alert-circle-outline",fog:"hass:weather-fog",hail:"hass:weather-hail",lightning:"hass:weather-lightning","lightning-rainy":"hass:weather-lightning-rainy",partlycloudy:"hass:weather-partly-cloudy",pouring:"hass:weather-pouring",rainy:"hass:weather-rainy",snowy:"hass:weather-snowy","snowy-rainy":"hass:weather-snowy-rainy",sunny:"hass:weather-sunny",windy:"hass:weather-windy","windy-variant":"hass:weather-windy-variant"};let Be=class extends r.a{static async getConfigElement(){return await Promise.all([i.e(0),i.e(1),i.e(71),i.e(44)]).then(i.bind(null,357)),document.createElement("hui-weather-forecast-card-editor")}static getStubConfig(){return{entity:""}}getCardSize(){return 4}setConfig(t){if(!t||!t.entity)throw new Error("Invalid card configuration");if(!Object(jt.a)(t.entity))throw new Error("Invalid Entity");this._config=t}updated(t){super.updated(t),t.has("hass")&&Object(k.a)(this,"rtl",Object(x.a)(this.hass))}render(){if(!this._config||!this.hass)return r.e``;const t=this.hass.states[this._config.entity];if(!t)return r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `;const e=t.attributes.forecast?t.attributes.forecast.slice(0,5):void 0;return r.e`
      <ha-card @click="${this.handleClick}">
        <div class="header">
          ${this.hass.localize(`state.weather.${t.state}`)||t.state}
          <div class="name">
            ${this._config&&this._config.name||Object(w.a)(t)}
          </div>
        </div>
        <div class="content">
          <div class="now">
            <div class="main">
              ${t.state in Ae?r.e`
                    <ha-icon icon="${Ae[t.state]}"></ha-icon>
                  `:""}
              <div class="temp">
                ${t.attributes.temperature}<span
                  >${this.getUnit("temperature")}</span
                >
              </div>
            </div>
            <div class="attributes">
              ${this._showValue(t.attributes.pressure)?r.e`
                    <div>
                      ${this.hass.localize("ui.card.weather.attributes.air_pressure")}:
                      <span class="measurand">
                        ${t.attributes.pressure}
                        ${this.getUnit("air_pressure")}
                      </span>
                    </div>
                  `:""}
              ${this._showValue(t.attributes.humidity)?r.e`
                    <div>
                      ${this.hass.localize("ui.card.weather.attributes.humidity")}:
                      <span class="measurand"
                        >${t.attributes.humidity} %</span
                      >
                    </div>
                  `:""}
              ${this._showValue(t.attributes.wind_speed)?r.e`
                    <div>
                      ${this.hass.localize("ui.card.weather.attributes.wind_speed")}:
                      <span class="measurand">
                        ${t.attributes.wind_speed}
                        ${this.getUnit("length")}/h
                      </span>
                      ${this.getWindBearing(t.attributes.wind_bearing)}
                    </div>
                  `:""}
            </div>
          </div>
          ${e?r.e`
                <div class="forecast">
                  ${e.map(t=>r.e`
                      <div>
                        <div class="weekday">
                          ${new Date(t.datetime).toLocaleDateString(this.hass.language,{weekday:"short"})}<br />
                          ${this._showValue(t.templow)?"":r.e`
                                ${new Date(t.datetime).toLocaleTimeString(this.hass.language,{hour:"numeric"})}
                              `}
                        </div>
                        ${this._showValue(t.condition)?r.e`
                              <div class="icon">
                                <ha-icon
                                  .icon="${Ae[t.condition]}"
                                ></ha-icon>
                              </div>
                            `:""}
                        ${this._showValue(t.temperature)?r.e`
                              <div class="temp">
                                ${t.temperature}
                                ${this.getUnit("temperature")}
                              </div>
                            `:""}
                        ${this._showValue(t.templow)?r.e`
                              <div class="templow">
                                ${t.templow} ${this.getUnit("temperature")}
                              </div>
                            `:""}
                        ${this._showValue(t.precipitation)?r.e`
                              <div class="precipitation">
                                ${t.precipitation}
                                ${this.getUnit("precipitation")}
                              </div>
                            `:""}
                      </div>
                    `)}
                </div>
              `:""}
        </div>
      </ha-card>
    `}shouldUpdate(t){return $(this,t)}handleClick(){Object(s.a)(this,"hass-more-info",{entityId:this._config.entity})}getUnit(t){const e=this.hass.config.unit_system.length||"";switch(t){case"air_pressure":return"km"===e?"hPa":"inHg";case"length":return e;case"precipitation":return"km"===e?"mm":"in";default:return this.hass.config.unit_system[t]||""}}windBearingToText(t){const e=parseInt(t,10);return isFinite(e)?De[((e+11.25)/22.5|0)%16]:t}getWindBearing(t){if(null!=t){const e=this.windBearingToText(t);return`(${this.hass.localize(`ui.card.weather.cardinal_direction.${e.toLowerCase()}`)||e})`}return""}_showValue(t){return null!=t}static get styles(){return r.c`
      :host {
        cursor: pointer;
      }

      .content {
        padding: 0 20px 20px;
      }

      ha-icon {
        color: var(--paper-item-icon-color);
      }

      .header {
        font-family: var(--paper-font-headline_-_font-family);
        -webkit-font-smoothing: var(
          --paper-font-headline_-_-webkit-font-smoothing
        );
        font-size: var(--paper-font-headline_-_font-size);
        font-weight: var(--paper-font-headline_-_font-weight);
        letter-spacing: var(--paper-font-headline_-_letter-spacing);
        line-height: var(--paper-font-headline_-_line-height);
        text-rendering: var(
          --paper-font-common-expensive-kerning_-_text-rendering
        );
        opacity: var(--dark-primary-opacity);
        padding: 24px 16px 16px;
        display: flex;
        align-items: baseline;
      }

      .name {
        margin-left: 16px;
        font-size: 16px;
        color: var(--secondary-text-color);
      }

      :host([rtl]) .name {
        margin-left: 0px;
        margin-right: 16px;
      }

      .now {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      }

      .main {
        display: flex;
        align-items: center;
        margin-right: 32px;
      }

      :host([rtl]) .main {
        margin-right: 0px;
      }

      .main ha-icon {
        --iron-icon-height: 72px;
        --iron-icon-width: 72px;
        margin-right: 8px;
      }

      :host([rtl]) .main ha-icon {
        margin-right: 0px;
      }

      .main .temp {
        font-size: 52px;
        line-height: 1em;
        position: relative;
      }

      :host([rtl]) .main .temp {
        direction: ltr;
        margin-right: 28px;
      }

      .main .temp span {
        font-size: 24px;
        line-height: 1em;
        position: absolute;
        top: 4px;
      }

      .measurand {
        display: inline-block;
      }

      :host([rtl]) .measurand {
        direction: ltr;
      }

      .forecast {
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
      }

      .forecast div {
        flex: 0 0 auto;
        text-align: center;
      }

      .forecast .icon {
        margin: 4px 0;
        text-align: center;
      }

      :host([rtl]) .forecast .temp {
        direction: ltr;
      }

      .weekday {
        font-weight: bold;
      }

      .attributes,
      .templow,
      .precipitation {
        color: var(--secondary-text-color);
      }

      :host([rtl]) .precipitation {
        direction: ltr;
      }
    `}};n.b([Object(r.f)()],Be.prototype,"hass",void 0),n.b([Object(r.f)()],Be.prototype,"_config",void 0),Be=n.b([Object(r.d)("hui-weather-forecast-card")],Be);const Re={red:"var(--label-badge-red)",green:"var(--label-badge-green)",yellow:"var(--label-badge-yellow)",normal:"var(--label-badge-blue)"};let Ne=class extends r.a{constructor(){super(...arguments),this._baseUnit="50px"}static async getConfigElement(){return await Promise.all([i.e(0),i.e(1),i.e(61),i.e(30)]).then(i.bind(null,358)),document.createElement("hui-gauge-card-editor")}static getStubConfig(){return{entity:""}}getCardSize(){return 2}setConfig(t){if(!t||!t.entity)throw new Error("Invalid card configuration");if(!Object(jt.a)(t.entity))throw new Error("Invalid Entity");this._config=Object.assign({min:0,max:100,theme:"default"},t)}connectedCallback(){super.connectedCallback(),this._setBaseUnit()}render(){if(!this._config||!this.hass)return r.e``;const t=this.hass.states[this._config.entity];if(!t)return r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `;const e=Number(t.state);return isNaN(e)?r.e`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_non_numeric","entity",this._config.entity)}</hui-warning
        >
      `:r.e`
      <ha-card
        @click="${this._handleClick}"
        style=${Object(yt.a)({"--base-unit":this._baseUnit})}
      >
        <div class="container">
          <div class="gauge-a"></div>
          <div class="gauge-b"></div>
          <div
            class="gauge-c"
            style=${Object(yt.a)({transform:`rotate(${this._translateTurn(e)}turn)`,"background-color":this._computeSeverity(e)})}
          ></div>
          <div class="gauge-data">
            <div id="percent">
              ${t.state}
              ${this._config.unit||t.attributes.unit_of_measurement||""}
            </div>
            <div id="name">
              ${this._config.name||Object(w.a)(t)}
            </div>
          </div>
        </div>
      </ha-card>
    `}shouldUpdate(t){return $(this,t)}firstUpdated(){this._updated=!0,this._setBaseUnit(),this.classList.add("init")}updated(t){if(super.updated(t),!this._config||!this.hass)return;const e=t.get("hass");e&&e.themes===this.hass.themes||Object(_t.a)(this,this.hass.themes,this._config.theme)}_setBaseUnit(){if(!this.isConnected||!this._updated)return;const t=this._computeBaseUnit();"0px"!==t&&(this._baseUnit=t)}_computeSeverity(t){const e=this._config.severity;if(!e)return Re.normal;const i=Object.keys(e).map(t=>[t,e[t]]);for(const a of i)if(null==Re[a[0]]||isNaN(a[1]))return Re.normal;return i.sort((t,e)=>t[1]-e[1]),t>=i[0][1]&&t<i[1][1]?Re[i[0][0]]:t>=i[1][1]&&t<i[2][1]?Re[i[1][0]]:t>=i[2][1]?Re[i[2][0]]:Re.normal}_translateTurn(t){const{min:e,max:i}=this._config;return 5*(Math.min(Math.max(t,e),i)-e)/(i-e)/10}_computeBaseUnit(){return this.clientWidth<200?this.clientWidth/5+"px":"50px"}_handleClick(){Object(s.a)(this,"hass-more-info",{entityId:this._config.entity})}static get styles(){return r.c`
      ha-card {
        height: calc(var(--base-unit) * 3);
        position: relative;
        cursor: pointer;
      }
      .container {
        width: calc(var(--base-unit) * 4);
        height: calc(var(--base-unit) * 2);
        position: absolute;
        top: calc(var(--base-unit) * 1.5);
        left: 50%;
        overflow: hidden;
        text-align: center;
        transform: translate(-50%, -50%);
      }
      .gauge-a {
        z-index: 1;
        position: absolute;
        background-color: var(--primary-background-color);
        width: calc(var(--base-unit) * 4);
        height: calc(var(--base-unit) * 2);
        top: 0%;
        border-radius: calc(var(--base-unit) * 2.5) calc(var(--base-unit) * 2.5)
          0px 0px;
      }
      .gauge-b {
        z-index: 3;
        position: absolute;
        background-color: var(--paper-card-background-color);
        width: calc(var(--base-unit) * 2.5);
        height: calc(var(--base-unit) * 1.25);
        top: calc(var(--base-unit) * 0.75);
        margin-left: calc(var(--base-unit) * 0.75);
        margin-right: auto;
        border-radius: calc(var(--base-unit) * 2.5) calc(var(--base-unit) * 2.5)
          0px 0px;
      }
      .gauge-c {
        z-index: 2;
        position: absolute;
        background-color: var(--label-badge-blue);
        width: calc(var(--base-unit) * 4);
        height: calc(var(--base-unit) * 2);
        top: calc(var(--base-unit) * 2);
        margin-left: auto;
        margin-right: auto;
        border-radius: 0px 0px calc(var(--base-unit) * 2)
          calc(var(--base-unit) * 2);
        transform-origin: center top;
      }
      .init .gauge-c {
        transition: all 1.3s ease-in-out;
      }
      .gauge-data {
        z-index: 4;
        color: var(--primary-text-color);
        line-height: calc(var(--base-unit) * 0.3);
        position: absolute;
        width: calc(var(--base-unit) * 4);
        height: calc(var(--base-unit) * 2.1);
        top: calc(var(--base-unit) * 1.2);
        margin-left: auto;
        margin-right: auto;
      }
      .init .gauge-data {
        transition: all 1s ease-out;
      }
      .gauge-data #percent {
        font-size: calc(var(--base-unit) * 0.55);
      }
      .gauge-data #name {
        padding-top: calc(var(--base-unit) * 0.15);
        font-size: calc(var(--base-unit) * 0.3);
      }
    `}};n.b([Object(r.f)()],Ne.prototype,"hass",void 0),n.b([Object(r.f)()],Ne.prototype,"_baseUnit",void 0),n.b([Object(r.f)()],Ne.prototype,"_config",void 0),Ne=n.b([Object(r.d)("hui-gauge-card")],Ne),i.d(e,"a",function(){return Fe});const He=new Set(["alarm-panel","conditional","entities","entity-button","entity-filter","error","gauge","glance","history-graph","horizontal-stack","iframe","light","map","markdown","media-control","picture","picture-elements","picture-entity","picture-glance","plant-status","sensor","shopping-list","thermostat","vertical-stack","weather-forecast"]),Ue=(t,e)=>{const i=document.createElement(t);try{i.setConfig(Object(a.a)(e))}catch(s){return console.error(t,s),Ve(s.message,e)}return i},Ve=(t,e)=>Object(y.b)(Object(y.a)(t,e)),Fe=t=>{if(!t||"object"!=typeof t||!t.type)return Ve("No card type configured.",t);if(t.type.startsWith("custom:")){const e=t.type.substr("custom:".length);if(customElements.get(e))return Ue(e,t);const i=Ve(`Custom element doesn't exist: ${e}.`,t);i.style.display="None";const a=window.setTimeout(()=>{i.style.display=""},2e3);return customElements.whenDefined(e).then(()=>{clearTimeout(a),Object(s.a)(i,"ll-rebuild")}),i}return He.has(t.type)?Ue(`hui-${t.type}-card`,t):Ve(`Unknown card type encountered: ${t.type}.`,t)}},,,function(t,e,i){"use strict";var a=i(4),s=i(31);i(84),i(191);customElements.define("ha-progress-button",class extends s.a{static get template(){return a.a`
      <style>
        .container {
          position: relative;
          display: inline-block;
        }

        mwc-button {
          transition: all 1s;
        }

        .success mwc-button {
          --mdc-theme-primary: white;
          background-color: var(--google-green-500);
          transition: none;
        }

        .error mwc-button {
          --mdc-theme-primary: white;
          background-color: var(--google-red-500);
          transition: none;
        }

        .progress {
          @apply --layout;
          @apply --layout-center-center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      </style>
      <div class="container" id="container">
        <mwc-button
          id="button"
          disabled="[[computeDisabled(disabled, progress)]]"
          on-click="buttonTapped"
        >
          <slot></slot>
        </mwc-button>
        <template is="dom-if" if="[[progress]]">
          <div class="progress"><paper-spinner active=""></paper-spinner></div>
        </template>
      </div>
    `}static get properties(){return{hass:{type:Object},progress:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1}}}tempClass(t){var e=this.$.container.classList;e.add(t),setTimeout(()=>{e.remove(t)},1e3)}ready(){super.ready(),this.addEventListener("click",t=>this.buttonTapped(t))}buttonTapped(t){this.progress&&t.stopPropagation()}actionSuccess(){this.tempClass("success")}actionError(){this.tempClass("error")}computeDisabled(t,e){return t||e}});var n=i(117);customElements.define("ha-call-service-button",class extends(Object(n.a)(s.a)){static get template(){return a.a`
      <ha-progress-button
        id="progress"
        progress="[[progress]]"
        on-click="buttonTapped"
        ><slot></slot
      ></ha-progress-button>
    `}static get properties(){return{hass:{type:Object},progress:{type:Boolean,value:!1},domain:{type:String},service:{type:String},serviceData:{type:Object,value:{}},confirmation:{type:String}}}buttonTapped(){if(!this.confirmation||window.confirm(this.confirmation)){this.progress=!0;var t=this,e={domain:this.domain,service:this.service,serviceData:this.serviceData};this.hass.callService(this.domain,this.service,this.serviceData).then(function(){t.progress=!1,t.$.progress.actionSuccess(),e.success=!0},function(){t.progress=!1,t.$.progress.actionError(),e.success=!1}).then(function(){t.fire("hass-service-called",e)})}}})},,function(t,e,i){"use strict";i(5),i(45);var a=i(6),s=i(2),n=i(4),r=i(132),o=i(277);Object(a.a)({_template:n.a`
    <style>
      :host {
        position: relative;
        display: block;
        transition-timing-function: linear;
        transition-property: -webkit-transform;
        transition-property: transform;
      }

      :host::before {
        position: absolute;
        right: 0px;
        bottom: -5px;
        left: 0px;
        width: 100%;
        height: 5px;
        content: "";
        transition: opacity 0.4s;
        pointer-events: none;
        opacity: 0;
        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);
        will-change: opacity;
        @apply --app-header-shadow;
      }

      :host([shadow])::before {
        opacity: 1;
      }

      #background {
        @apply --layout-fit;
        overflow: hidden;
      }

      #backgroundFrontLayer,
      #backgroundRearLayer {
        @apply --layout-fit;
        height: 100%;
        pointer-events: none;
        background-size: cover;
      }

      #backgroundFrontLayer {
        @apply --app-header-background-front-layer;
      }

      #backgroundRearLayer {
        opacity: 0;
        @apply --app-header-background-rear-layer;
      }

      #contentContainer {
        position: relative;
        width: 100%;
        height: 100%;
      }

      :host([disabled]),
      :host([disabled])::after,
      :host([disabled]) #backgroundFrontLayer,
      :host([disabled]) #backgroundRearLayer,
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]),
      :host([silent-scroll])::after,
      :host([silent-scroll]) #backgroundFrontLayer,
      :host([silent-scroll]) #backgroundRearLayer {
        transition: none !important;
      }

      :host([disabled]) ::slotted(app-toolbar:first-of-type),
      :host([disabled]) ::slotted([sticky]),
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),
      :host([silent-scroll]) ::slotted([sticky]) {
        transition: none !important;
      }

    </style>
    <div id="contentContainer">
      <slot id="slot"></slot>
    </div>
`,is:"app-header",behaviors:[o.a,r.a],properties:{condenses:{type:Boolean,value:!1},fixed:{type:Boolean,value:!1},reveals:{type:Boolean,value:!1},shadow:{type:Boolean,reflectToAttribute:!0,value:!1}},observers:["_configChanged(isAttached, condenses, fixed)"],_height:0,_dHeight:0,_stickyElTop:0,_stickyElRef:null,_top:0,_progress:0,_wasScrollingDown:!1,_initScrollTop:0,_initTimestamp:0,_lastTimestamp:0,_lastScrollTop:0,get _maxHeaderTop(){return this.fixed?this._dHeight:this._height+5},get _stickyEl(){if(this._stickyElRef)return this._stickyElRef;for(var t,e=Object(s.a)(this.$.slot).getDistributedNodes(),i=0;t=e[i];i++)if(t.nodeType===Node.ELEMENT_NODE){if(t.hasAttribute("sticky")){this._stickyElRef=t;break}this._stickyElRef||(this._stickyElRef=t)}return this._stickyElRef},_configChanged:function(){this.resetLayout(),this._notifyLayoutChanged()},_updateLayoutStates:function(){if(0!==this.offsetWidth||0!==this.offsetHeight){var t=this._clampedScrollTop,e=0===this._height||0===t,i=this.disabled;this._height=this.offsetHeight,this._stickyElRef=null,this.disabled=!0,e||this._updateScrollState(0,!0),this._mayMove()?this._dHeight=this._stickyEl?this._height-this._stickyEl.offsetHeight:0:this._dHeight=0,this._stickyElTop=this._stickyEl?this._stickyEl.offsetTop:0,this._setUpEffect(),e?this._updateScrollState(t,!0):(this._updateScrollState(this._lastScrollTop,!0),this._layoutIfDirty()),this.disabled=i}},_updateScrollState:function(t,e){if(0!==this._height){var i=0,a=0,s=this._top,n=(this._lastScrollTop,this._maxHeaderTop),r=t-this._lastScrollTop,o=Math.abs(r),l=t>this._lastScrollTop,c=performance.now();if(this._mayMove()&&(a=this._clamp(this.reveals?s+r:t,0,n)),t>=this._dHeight&&(a=this.condenses&&!this.fixed?Math.max(this._dHeight,a):a,this.style.transitionDuration="0ms"),this.reveals&&!this.disabled&&o<100&&((c-this._initTimestamp>300||this._wasScrollingDown!==l)&&(this._initScrollTop=t,this._initTimestamp=c),t>=n))if(Math.abs(this._initScrollTop-t)>30||o>10){l&&t>=n?a=n:!l&&t>=this._dHeight&&(a=this.condenses&&!this.fixed?this._dHeight:0);var h=r/(c-this._lastTimestamp);this.style.transitionDuration=this._clamp((a-s)/h,0,300)+"ms"}else a=this._top;i=0===this._dHeight?t>0?1:0:a/this._dHeight,e||(this._lastScrollTop=t,this._top=a,this._wasScrollingDown=l,this._lastTimestamp=c),(e||i!==this._progress||s!==a||0===t)&&(this._progress=i,this._runEffects(i,a),this._transformHeader(a))}},_mayMove:function(){return this.condenses||!this.fixed},willCondense:function(){return this._dHeight>0&&this.condenses},isOnScreen:function(){return 0!==this._height&&this._top<this._height},isContentBelow:function(){return 0===this._top?this._clampedScrollTop>0:this._clampedScrollTop-this._maxHeaderTop>=0},_transformHeader:function(t){this.translate3d(0,-t+"px",0),this._stickyEl&&this.translate3d(0,this.condenses&&t>=this._stickyElTop?Math.min(t,this._dHeight)-this._stickyElTop+"px":0,0,this._stickyEl)},_clamp:function(t,e,i){return Math.min(i,Math.max(e,t))},_ensureBgContainers:function(){this._bgContainer||(this._bgContainer=document.createElement("div"),this._bgContainer.id="background",this._bgRear=document.createElement("div"),this._bgRear.id="backgroundRearLayer",this._bgContainer.appendChild(this._bgRear),this._bgFront=document.createElement("div"),this._bgFront.id="backgroundFrontLayer",this._bgContainer.appendChild(this._bgFront),Object(s.a)(this.root).insertBefore(this._bgContainer,this.$.contentContainer))},_getDOMRef:function(t){switch(t){case"backgroundFrontLayer":return this._ensureBgContainers(),this._bgFront;case"backgroundRearLayer":return this._ensureBgContainers(),this._bgRear;case"background":return this._ensureBgContainers(),this._bgContainer;case"mainTitle":return Object(s.a)(this).querySelector("[main-title]");case"condensedTitle":return Object(s.a)(this).querySelector("[condensed-title]")}return null},getScrollState:function(){return{progress:this._progress,top:this._top}}})},function(t,e,i){"use strict";i.d(e,"a",function(){return n});i(5);var a=i(278),s=i(279);const n=[a.a,{properties:{effects:{type:String},effectsConfig:{type:Object,value:function(){return{}}},disabled:{type:Boolean,reflectToAttribute:!0,value:!1},threshold:{type:Number,value:0},thresholdTriggered:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0}},observers:["_effectsChanged(effects, effectsConfig, isAttached)"],_updateScrollState:function(t){},isOnScreen:function(){return!1},isContentBelow:function(){return!1},_effectsRunFn:null,_effects:null,get _clampedScrollTop(){return Math.max(0,this._scrollTop)},attached:function(){this._scrollStateChanged()},detached:function(){this._tearDownEffects()},createEffect:function(t,e){var i=s.a[t];if(!i)throw new ReferenceError(this._getUndefinedMsg(t));var a=this._boundEffect(i,e||{});return a.setUp(),a},_effectsChanged:function(t,e,i){this._tearDownEffects(),t&&i&&(t.split(" ").forEach(function(t){var i;""!==t&&((i=s.a[t])?this._effects.push(this._boundEffect(i,e[t])):console.warn(this._getUndefinedMsg(t)))},this),this._setUpEffect())},_layoutIfDirty:function(){return this.offsetWidth},_boundEffect:function(t,e){e=e||{};var i=parseFloat(e.startsAt||0),a=parseFloat(e.endsAt||1),s=a-i,n=function(){},r=0===i&&1===a?t.run:function(e,a){t.run.call(this,Math.max(0,(e-i)/s),a)};return{setUp:t.setUp?t.setUp.bind(this,e):n,run:t.run?r.bind(this):n,tearDown:t.tearDown?t.tearDown.bind(this):n}},_setUpEffect:function(){this.isAttached&&this._effects&&(this._effectsRunFn=[],this._effects.forEach(function(t){!1!==t.setUp()&&this._effectsRunFn.push(t.run)},this))},_tearDownEffects:function(){this._effects&&this._effects.forEach(function(t){t.tearDown()}),this._effectsRunFn=[],this._effects=[]},_runEffects:function(t,e){this._effectsRunFn&&this._effectsRunFn.forEach(function(i){i(t,e)})},_scrollHandler:function(){this._scrollStateChanged()},_scrollStateChanged:function(){if(!this.disabled){var t=this._clampedScrollTop;this._updateScrollState(t),this.threshold>0&&this._setThresholdTriggered(t>=this.threshold)}},_getDOMRef:function(t){console.warn("_getDOMRef","`"+t+"` is undefined")},_getUndefinedMsg:function(t){return"Scroll effect `"+t+"` is undefined. Did you forget to import app-layout/app-scroll-effects/effects/"+t+".html ?"}}]},function(t,e,i){"use strict";i.d(e,"a",function(){return s});i(5);var a=i(2);const s={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(t,e){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),e)if("document"===t)this.scrollTarget=this._doc;else if("string"==typeof t){var i=this.domHost;this.scrollTarget=i&&i.$?i.$[t]:Object(a.a)(this.ownerDocument).querySelector("#"+t)}else this._isValidScrollTarget()&&(this._oldScrollTarget=t,this._toggleScrollListener(this._shouldHaveListener,t))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(t){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=t)},set _scrollLeft(t){this.scrollTarget===this._doc?window.scrollTo(t,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=t)},scroll:function(t,e){var i;"object"==typeof t?(i=t.left,e=t.top):i=t,i=i||0,e=e||0,this.scrollTarget===this._doc?window.scrollTo(i,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=i,this.scrollTarget.scrollTop=e)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(t,e){var i=e===this._doc?window:e;t?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),i.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(i.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(t){this._shouldHaveListener=t,this._toggleScrollListener(t,this.scrollTarget)}}},function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s});i(5);const a={};const s=function(t,e){if(null!=a[t])throw new Error("effect `"+t+"` is already registered.");a[t]=e}},function(t,e,i){"use strict";var a=i(0),s=i(71);i(169);customElements.define("ha-label-badge",class extends a.a{static get properties(){return{value:{},icon:{},label:{},description:{},image:{}}}render(){return a.e`
      <div class="badge-container">
        <div class="label-badge" id="badge">
          <div
            class="${Object(s.a)({value:!0,big:Boolean(this.value&&this.value.length>4)})}"
          >
            ${!this.icon||this.value||this.image?"":a.e`
                  <ha-icon .icon="${this.icon}"></ha-icon>
                `}
            ${this.value&&!this.image?a.e`
                  <span>${this.value}</span>
                `:""}
          </div>
          ${this.label?a.e`
                <div
                  class="${Object(s.a)({label:!0,big:this.label.length>5})}"
                >
                  <span>${this.label}</span>
                </div>
              `:""}
        </div>
        ${this.description?a.e`
              <div class="title">${this.description}</div>
            `:""}
      </div>
    `}static get styles(){return[a.c`
        .badge-container {
          display: inline-block;
          text-align: center;
          vertical-align: top;
        }
        .label-badge {
          position: relative;
          display: block;
          margin: 0 auto;
          width: var(--ha-label-badge-size, 2.5em);
          text-align: center;
          height: var(--ha-label-badge-size, 2.5em);
          line-height: var(--ha-label-badge-size, 2.5em);
          font-size: var(--ha-label-badge-font-size, 1.5em);
          border-radius: 50%;
          border: 0.1em solid var(--ha-label-badge-color, var(--primary-color));
          color: var(--label-badge-text-color, rgb(76, 76, 76));

          white-space: nowrap;
          background-color: var(--label-badge-background-color, white);
          background-size: cover;
          transition: border 0.3s ease-in-out;
        }
        .label-badge .value {
          font-size: 90%;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .label-badge .value.big {
          font-size: 70%;
        }
        .label-badge .label {
          position: absolute;
          bottom: -1em;
          /* Make the label as wide as container+border. (parent_borderwidth / font-size) */
          left: -0.2em;
          right: -0.2em;
          line-height: 1em;
          font-size: 0.5em;
        }
        .label-badge .label span {
          box-sizing: border-box;
          max-width: 100%;
          display: inline-block;
          background-color: var(--ha-label-badge-color, var(--primary-color));
          color: var(--ha-label-badge-label-color, white);
          border-radius: 1em;
          padding: 9% 16% 8% 16%; /* mostly apitalized text, not much descenders => bit more top margin */
          font-weight: 500;
          overflow: hidden;
          text-transform: uppercase;
          text-overflow: ellipsis;
          transition: background-color 0.3s ease-in-out;
          text-transform: var(--ha-label-badge-label-text-transform, uppercase);
        }
        .label-badge .label.big span {
          font-size: 90%;
          padding: 10% 12% 7% 12%; /* push smaller text a bit down to center vertically */
        }
        .badge-container .title {
          margin-top: 1em;
          font-size: var(--ha-label-badge-title-font-size, 0.9em);
          width: var(--ha-label-badge-title-width, 5em);
          font-weight: var(--ha-label-badge-title-font-weight, 400);
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: normal;
        }
      `]}updated(t){super.updated(t),t.has("image")&&(this.shadowRoot.getElementById("badge").style.backgroundImage=this.image?`url(${this.image})`:"")}})},function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r}),i.d(e,"c",function(){return o});var a=i(282),s=i(256);const n=(t,e)=>t.sendMessage({type:"connect",refreshToken:e.data.refresh_token,clientId:e.data.clientId,hassUrl:a.b?s.b:e.data.hassUrl}),r=(t,e)=>t.sendMessage({type:"show_lovelace_view",viewPath:e}),o=(t,e)=>{if(!t.castConnectedToOurHass)return new Promise(i=>{const a=t.addEventListener("connection-changed",()=>{t.castConnectedToOurHass&&(a(),i())});n(t,e)})}},function(t,e,i){"use strict";i.d(e,"b",function(){return s}),i.d(e,"a",function(){return n}),i.d(e,"c",function(){return r});var a=i(256);const s=!1,n=s?a.a:"B12CE3CA",r="urn:x-cast:com.nabucasa.hast"},function(t,e,i){"use strict";i.d(e,"a",function(){return d});var a=i(11);const s=(t,e)=>{const i=t.startNode.parentNode,s=void 0===e?t.endNode:e.startNode,n=i.insertBefore(Object(a.e)(),s);i.insertBefore(Object(a.e)(),s);const r=new a.b(t.options);return r.insertAfterNode(n),r},n=(t,e)=>(t.setValue(e),t.commit(),t),r=(t,e,i)=>{const s=t.startNode.parentNode,n=i?i.startNode:t.endNode,r=e.endNode.nextSibling;r!==n&&Object(a.j)(s,e.startNode,r,n)},o=t=>{Object(a.i)(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},l=(t,e,i)=>{const a=new Map;for(let s=e;s<=i;s++)a.set(t[s],s);return a},c=new WeakMap,h=new WeakMap,d=Object(a.f)((t,e,i)=>{let d;return void 0===i?i=e:void 0!==e&&(d=e),e=>{if(!(e instanceof a.b))throw new Error("repeat can only be used in text bindings");const p=c.get(e)||[],u=h.get(e)||[],g=[],f=[],m=[];let b,_,v=0;for(const a of t)m[v]=d?d(a,v):v,f[v]=i(a,v),v++;let y=0,w=p.length-1,x=0,k=f.length-1;for(;y<=w&&x<=k;)if(null===p[y])y++;else if(null===p[w])w--;else if(u[y]===m[x])g[x]=n(p[y],f[x]),y++,x++;else if(u[w]===m[k])g[k]=n(p[w],f[k]),w--,k--;else if(u[y]===m[k])g[k]=n(p[y],f[k]),r(e,p[y],g[k+1]),y++,k--;else if(u[w]===m[x])g[x]=n(p[w],f[x]),r(e,p[w],p[y]),w--,x++;else if(void 0===b&&(b=l(m,x,k),_=l(u,y,w)),b.has(u[y]))if(b.has(u[w])){const t=_.get(m[x]),i=void 0!==t?p[t]:null;if(null===i){const t=s(e,p[y]);n(t,f[x]),g[x]=t}else g[x]=n(i,f[x]),r(e,i,p[y]),p[t]=null;x++}else o(p[w]),w--;else o(p[y]),y++;for(;x<=k;){const t=s(e,g[k+1]);n(t,f[x]),g[x++]=t}for(;y<=w;){const t=p[y++];null!==t&&o(t)}c.set(e,g),h.set(e,m)}})},,,,,,,,,,,,,,function(t,e,i){"use strict";i(5),i(45),i(108),i(107),i(66),i(89);var a=i(4);const s=a.a`<iron-iconset-svg name="paper-tabs" size="24">
<svg><defs>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(s.content);i(247);var n=i(128),r=i(248),o=i(94),l=i(6),c=i(2);Object(l.a)({_template:a.a`
    <style>
      :host {
        @apply --layout;
        @apply --layout-center;

        height: 48px;
        font-size: 14px;
        font-weight: 500;
        overflow: hidden;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;

        /* NOTE: Both values are needed, since some phones require the value to be \`transparent\`. */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        @apply --paper-tabs;
      }

      :host(:dir(rtl)) {
        @apply --layout-horizontal-reverse;
      }

      #tabsContainer {
        position: relative;
        height: 100%;
        white-space: nowrap;
        overflow: hidden;
        @apply --layout-flex-auto;
        @apply --paper-tabs-container;
      }

      #tabsContent {
        height: 100%;
        -moz-flex-basis: auto;
        -ms-flex-basis: auto;
        flex-basis: auto;
        @apply --paper-tabs-content;
      }

      #tabsContent.scrollable {
        position: absolute;
        white-space: nowrap;
      }

      #tabsContent:not(.scrollable),
      #tabsContent.scrollable.fit-container {
        @apply --layout-horizontal;
      }

      #tabsContent.scrollable.fit-container {
        min-width: 100%;
      }

      #tabsContent.scrollable.fit-container > ::slotted(*) {
        /* IE - prevent tabs from compressing when they should scroll. */
        -ms-flex: 1 0 auto;
        -webkit-flex: 1 0 auto;
        flex: 1 0 auto;
      }

      .hidden {
        display: none;
      }

      .not-visible {
        opacity: 0;
        cursor: default;
      }

      paper-icon-button {
        width: 48px;
        height: 48px;
        padding: 12px;
        margin: 0 4px;
      }

      #selectionBar {
        position: absolute;
        height: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: 2px solid var(--paper-tabs-selection-bar-color, var(--paper-yellow-a100));
          -webkit-transform: scale(0);
        transform: scale(0);
          -webkit-transform-origin: left center;
        transform-origin: left center;
          transition: -webkit-transform;
        transition: transform;

        @apply --paper-tabs-selection-bar;
      }

      #selectionBar.align-bottom {
        top: 0;
        bottom: auto;
      }

      #selectionBar.expand {
        transition-duration: 0.15s;
        transition-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
      }

      #selectionBar.contract {
        transition-duration: 0.18s;
        transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
      }

      #tabsContent > ::slotted(:not(#selectionBar)) {
        height: 100%;
      }
    </style>

    <paper-icon-button icon="paper-tabs:chevron-left" class$="[[_computeScrollButtonClass(_leftHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onLeftScrollButtonDown" tabindex="-1"></paper-icon-button>

    <div id="tabsContainer" on-track="_scroll" on-down="_down">
      <div id="tabsContent" class$="[[_computeTabsContentClass(scrollable, fitContainer)]]">
        <div id="selectionBar" class$="[[_computeSelectionBarClass(noBar, alignBottom)]]" on-transitionend="_onBarTransitionEnd"></div>
        <slot></slot>
      </div>
    </div>

    <paper-icon-button icon="paper-tabs:chevron-right" class$="[[_computeScrollButtonClass(_rightHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onRightScrollButtonDown" tabindex="-1"></paper-icon-button>
`,is:"paper-tabs",behaviors:[o.a,r.a],properties:{noink:{type:Boolean,value:!1,observer:"_noinkChanged"},noBar:{type:Boolean,value:!1},noSlide:{type:Boolean,value:!1},scrollable:{type:Boolean,value:!1},fitContainer:{type:Boolean,value:!1},disableDrag:{type:Boolean,value:!1},hideScrollButtons:{type:Boolean,value:!1},alignBottom:{type:Boolean,value:!1},selectable:{type:String,value:"paper-tab"},autoselect:{type:Boolean,value:!1},autoselectDelay:{type:Number,value:0},_step:{type:Number,value:10},_holdDelay:{type:Number,value:1},_leftHidden:{type:Boolean,value:!1},_rightHidden:{type:Boolean,value:!1},_previousTab:{type:Object}},hostAttributes:{role:"tablist"},listeners:{"iron-resize":"_onTabSizingChanged","iron-items-changed":"_onTabSizingChanged","iron-select":"_onIronSelect","iron-deselect":"_onIronDeselect"},keyBindings:{"left:keyup right:keyup":"_onArrowKeyup"},created:function(){this._holdJob=null,this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0,this._bindDelayedActivationHandler=this._delayedActivationHandler.bind(this),this.addEventListener("blur",this._onBlurCapture.bind(this),!0)},ready:function(){this.setScrollDirection("y",this.$.tabsContainer)},detached:function(){this._cancelPendingActivation()},_noinkChanged:function(t){Object(c.a)(this).querySelectorAll("paper-tab").forEach(t?this._setNoinkAttribute:this._removeNoinkAttribute)},_setNoinkAttribute:function(t){t.setAttribute("noink","")},_removeNoinkAttribute:function(t){t.removeAttribute("noink")},_computeScrollButtonClass:function(t,e,i){return!e||i?"hidden":t?"not-visible":""},_computeTabsContentClass:function(t,e){return t?"scrollable"+(e?" fit-container":""):" fit-container"},_computeSelectionBarClass:function(t,e){return t?"hidden":e?"align-bottom":""},_onTabSizingChanged:function(){this.debounce("_onTabSizingChanged",function(){this._scroll(),this._tabChanged(this.selectedItem)},10)},_onIronSelect:function(t){this._tabChanged(t.detail.item,this._previousTab),this._previousTab=t.detail.item,this.cancelDebouncer("tab-changed")},_onIronDeselect:function(t){this.debounce("tab-changed",function(){this._tabChanged(null,this._previousTab),this._previousTab=null},1)},_activateHandler:function(){this._cancelPendingActivation(),n.b._activateHandler.apply(this,arguments)},_scheduleActivation:function(t,e){this._pendingActivationItem=t,this._pendingActivationTimeout=this.async(this._bindDelayedActivationHandler,e)},_delayedActivationHandler:function(){var t=this._pendingActivationItem;this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0,t.fire(this.activateEvent,null,{bubbles:!0,cancelable:!0})},_cancelPendingActivation:function(){void 0!==this._pendingActivationTimeout&&(this.cancelAsync(this._pendingActivationTimeout),this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0)},_onArrowKeyup:function(t){this.autoselect&&this._scheduleActivation(this.focusedItem,this.autoselectDelay)},_onBlurCapture:function(t){t.target===this._pendingActivationItem&&this._cancelPendingActivation()},get _tabContainerScrollSize(){return Math.max(0,this.$.tabsContainer.scrollWidth-this.$.tabsContainer.offsetWidth)},_scroll:function(t,e){if(this.scrollable){var i=e&&-e.ddx||0;this._affectScroll(i)}},_down:function(t){this.async(function(){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null)},1)},_affectScroll:function(t){this.$.tabsContainer.scrollLeft+=t;var e=this.$.tabsContainer.scrollLeft;this._leftHidden=0===e,this._rightHidden=e===this._tabContainerScrollSize},_onLeftScrollButtonDown:function(){this._scrollToLeft(),this._holdJob=setInterval(this._scrollToLeft.bind(this),this._holdDelay)},_onRightScrollButtonDown:function(){this._scrollToRight(),this._holdJob=setInterval(this._scrollToRight.bind(this),this._holdDelay)},_onScrollButtonUp:function(){clearInterval(this._holdJob),this._holdJob=null},_scrollToLeft:function(){this._affectScroll(-this._step)},_scrollToRight:function(){this._affectScroll(this._step)},_tabChanged:function(t,e){if(!t)return this.$.selectionBar.classList.remove("expand"),this.$.selectionBar.classList.remove("contract"),void this._positionBar(0,0);var i=this.$.tabsContent.getBoundingClientRect(),a=i.width,s=t.getBoundingClientRect(),n=s.left-i.left;if(this._pos={width:this._calcPercent(s.width,a),left:this._calcPercent(n,a)},this.noSlide||null==e)return this.$.selectionBar.classList.remove("expand"),this.$.selectionBar.classList.remove("contract"),void this._positionBar(this._pos.width,this._pos.left);var r=e.getBoundingClientRect(),o=this.items.indexOf(e),l=this.items.indexOf(t);this.$.selectionBar.classList.add("expand");var c=o<l;this._isRTL&&(c=!c),c?this._positionBar(this._calcPercent(s.left+s.width-r.left,a)-5,this._left):this._positionBar(this._calcPercent(r.left+r.width-s.left,a)-5,this._calcPercent(n,a)+5),this.scrollable&&this._scrollToSelectedIfNeeded(s.width,n)},_scrollToSelectedIfNeeded:function(t,e){var i=e-this.$.tabsContainer.scrollLeft;i<0?this.$.tabsContainer.scrollLeft+=i:(i+=t-this.$.tabsContainer.offsetWidth)>0&&(this.$.tabsContainer.scrollLeft+=i)},_calcPercent:function(t,e){return 100*t/e},_positionBar:function(t,e){t=t||0,e=e||0,this._width=t,this._left=e,this.transform("translateX("+e+"%) scaleX("+t/100+")",this.$.selectionBar)},_onBarTransitionEnd:function(t){var e=this.$.selectionBar.classList;e.contains("expand")?(e.remove("expand"),e.add("contract"),this._positionBar(this._pos.width,this._pos.left)):e.contains("contract")&&e.remove("contract")}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";i.r(e);var a=i(3),s=(i(84),i(133)),n=(i(157),i(159),i(0)),r=i(71),o=(i(246),i(276),i(277),i(279));Object(o.b)("waterfall",{run:function(){this.shadow=this.isOnScreen()&&this.isContentBelow()}});i(143),i(5);var l=i(6);Object(l.a)({is:"app-route",properties:{route:{type:Object,notify:!0},pattern:{type:String},data:{type:Object,value:function(){return{}},notify:!0},autoActivate:{type:Boolean,value:!1},_queryParamsUpdating:{type:Boolean,value:!1},queryParams:{type:Object,value:function(){return{}},notify:!0},tail:{type:Object,value:function(){return{path:null,prefix:null,__queryParams:null}},notify:!0},active:{type:Boolean,notify:!0,readOnly:!0},_matched:{type:String,value:""}},observers:["__tryToMatch(route.path, pattern)","__updatePathOnDataChange(data.*)","__tailPathChanged(tail.path)","__routeQueryParamsChanged(route.__queryParams)","__tailQueryParamsChanged(tail.__queryParams)","__queryParamsChanged(queryParams.*)"],created:function(){this.linkPaths("route.__queryParams","tail.__queryParams"),this.linkPaths("tail.__queryParams","route.__queryParams")},__routeQueryParamsChanged:function(t){if(t&&this.tail){if(this.tail.__queryParams!==t&&this.set("tail.__queryParams",t),!this.active||this._queryParamsUpdating)return;var e={},i=!1;for(var a in t)e[a]=t[a],!i&&this.queryParams&&t[a]===this.queryParams[a]||(i=!0);for(var a in this.queryParams)if(i||!(a in t)){i=!0;break}if(!i)return;this._queryParamsUpdating=!0,this.set("queryParams",e),this._queryParamsUpdating=!1}},__tailQueryParamsChanged:function(t){t&&this.route&&this.route.__queryParams!=t&&this.set("route.__queryParams",t)},__queryParamsChanged:function(t){this.active&&!this._queryParamsUpdating&&this.set("route.__"+t.path,t.value)},__resetProperties:function(){this._setActive(!1),this._matched=null},__tryToMatch:function(){if(this.route){var t=this.route.path,e=this.pattern;if(this.autoActivate&&""===t&&(t="/"),e)if(t){for(var i=t.split("/"),a=e.split("/"),s=[],n={},r=0;r<a.length;r++){var o=a[r];if(!o&&""!==o)break;var l=i.shift();if(!l&&""!==l)return void this.__resetProperties();if(s.push(l),":"==o.charAt(0))n[o.slice(1)]=l;else if(o!==l)return void this.__resetProperties()}this._matched=s.join("/");var c={};this.active||(c.active=!0);var h=this.route.prefix+this._matched,d=i.join("/");for(var p in i.length>0&&(d="/"+d),this.tail&&this.tail.prefix===h&&this.tail.path===d||(c.tail={prefix:h,path:d,__queryParams:this.route.__queryParams}),c.data=n,this._dataInUrl={},n)this._dataInUrl[p]=n[p];this.setProperties?this.setProperties(c,!0):this.__setMulti(c)}else this.__resetProperties()}},__tailPathChanged:function(t){if(this.active){var e=t,i=this._matched;e&&("/"!==e.charAt(0)&&(e="/"+e),i+=e),this.set("route.path",i)}},__updatePathOnDataChange:function(){if(this.route&&this.active){var t=this.__getLink({});t!==this.__getLink(this._dataInUrl)&&this.set("route.path",t)}},__getLink:function(t){var e={tail:null};for(var i in this.data)e[i]=this.data[i];for(var i in t)e[i]=t[i];var a=this.pattern.split("/").map(function(t){return":"==t[0]&&(t=e[t.slice(1)]),t},this);return e.tail&&e.tail.path&&(a.length>0&&"/"===e.tail.path.charAt(0)?a.push(e.tail.path.slice(1)):a.push(e.tail.path)),a.join("/")},__setMulti:function(t){for(var e in t)this._propertySetter(e,t[e]);void 0!==t.data&&(this._pathEffector("data",this.data),this._notifyChange("data")),void 0!==t.active&&(this._pathEffector("active",this.active),this._notifyChange("active")),void 0!==t.tail&&(this._pathEffector("tail",this.tail),this._notifyChange("tail"))}});i(107),i(137),i(138),i(148),i(247),i(297);var c=i(4),h=i(31);customElements.define("ha-app-layout",class extends(customElements.get("app-header-layout")){static get template(){return c.a`
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

        #wrapper ::slotted([slot="header"]) {
          @apply --layout-fixed-top;
          z-index: 1;
        }

        #wrapper.initializing ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) {
          height: 100%;
        }

        :host([has-scrolling-region]) #wrapper ::slotted([slot="header"]) {
          position: absolute;
        }

        :host([has-scrolling-region])
          #wrapper.initializing
          ::slotted([slot="header"]) {
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

        #contentContainer {
          /* Create a stacking context here so that all children appear below the header. */
          position: relative;
          z-index: 0;
          /* Using 'transform' will cause 'position: fixed' elements to behave like
           'position: absolute' relative to this element. */
          transform: translate(0);
        }

        @media print {
          :host([has-scrolling-region]) #wrapper #contentContainer {
            overflow-y: visible;
          }
        }
      </style>

      <div id="wrapper" class="initializing">
        <slot id="headerSlot" name="header"></slot>

        <div id="contentContainer"><slot></slot></div>
        <slot id="fab" name="fab"></slot>
      </div>
    `}});var d=i(117),p=i(223),u=i(18);customElements.define("ha-start-voice-button",class extends(Object(d.a)(h.a)){static get template(){return c.a`
      <paper-icon-button
        aria-label="Start conversation"
        icon="hass:microphone"
        hidden$="[[!canListen]]"
        on-click="handleListenClick"
      ></paper-icon-button>
    `}static get properties(){return{hass:{type:Object,value:null},canListen:{type:Boolean,computed:"computeCanListen(hass)",notify:!0}}}computeCanListen(t){return"webkitSpeechRecognition"in window&&Object(p.a)(t,"conversation")}handleListenClick(){Object(u.a)(this,"show-dialog",{dialogImport:()=>i.e(78).then(i.bind(null,342)),dialogTag:"ha-voice-command-dialog"})}});const g=customElements.get("paper-icon-button");customElements.define("ha-paper-icon-button-arrow-next",class extends g{connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.icon="ltr"===window.getComputedStyle(this).direction?"hass:arrow-right":"hass:arrow-left"},100)}});i(130),i(169);var f=i(187),m=i(102),b=i(213),_=i(13);const v=t=>t.sendMessagePromise({type:"persistent_notification/get"}),y=(t,e)=>t.subscribeEvents(()=>v(t).then(t=>e.setState(t,!0)),"persistent_notifications_updated"),w=(t,e)=>Object(_.d)("_ntf",v,y,t,e);var x=i(119);const k=t=>Object.keys(t).filter(t=>"configurator"===Object(x.a)(t)).map(e=>t[e]);i(177);let O=class extends n.a{render(){return n.e`
      <ha-card>
        <div class="header"><slot name="header"></slot></div>
        <div class="contents"><slot></slot></div>
        <div class="actions"><slot name="actions"></slot></div>
      </ha-card>
    `}static get styles(){return n.c`
      .contents {
        padding: 16px;
        -ms-user-select: text;
        -webkit-user-select: text;
        -moz-user-select: text;
        user-select: text;
      }

      ha-card .header {
        /* start paper-font-headline style */
        font-family: "Roboto", "Noto", sans-serif;
        -webkit-font-smoothing: antialiased; /* OS X subpixel AA bleed bug */
        text-rendering: optimizeLegibility;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: -0.012em;
        line-height: 32px;
        /* end paper-font-headline style */

        color: var(--primary-text-color);
        padding: 16px 16px 0;
      }

      .actions {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
      }

      ::slotted(.primary) {
        color: var(--primary-color);
      }
    `}};O=a.b([Object(n.d)("hui-notification-item-template")],O);let $=class extends n.a{render(){return this.hass&&this.notification?n.e`
      <hui-notification-item-template>
        <span slot="header">${this.hass.localize("domain.configurator")}</span>

        <div>
          ${this.hass.localize("ui.notification_drawer.click_to_configure","entity",this.notification.attributes.friendly_name)}
        </div>

        <mwc-button slot="actions" @click="${this._handleClick}"
          >${this.hass.localize(`state.configurator.${this.notification.state}`)}</mwc-button
        >
      </hui-notification-item-template>
    `:n.e``}_handleClick(){Object(u.a)(this,"hass-more-info",{entityId:this.notification.entity_id})}};a.b([Object(n.f)()],$.prototype,"hass",void 0),a.b([Object(n.f)()],$.prototype,"notification",void 0),$=a.b([Object(n.d)("hui-configurator-notification-item")],$);i(214),i(195),i(141);let j=class extends n.a{render(){return this.hass&&this.notification?n.e`
      <hui-notification-item-template>
        <span slot="header">${this._computeTitle(this.notification)}</span>

        <ha-markdown content="${this.notification.message}"></ha-markdown>

        <div class="time">
          <span>
            <ha-relative-time
              .hass="${this.hass}"
              .datetime="${this.notification.created_at}"
            ></ha-relative-time>
            <paper-tooltip
              >${this._computeTooltip(this.hass,this.notification)}</paper-tooltip
            >
          </span>
        </div>

        <mwc-button slot="actions" @click="${this._handleDismiss}"
          >${this.hass.localize("ui.card.persistent_notification.dismiss")}</mwc-button
        >
      </hui-notification-item-template>
    `:n.e``}static get styles(){return n.c`
      .time {
        display: flex;
        justify-content: flex-end;
        margin-top: 6px;
      }
      ha-relative-time {
        color: var(--secondary-text-color);
      }
      a {
        color: var(--primary-color);
      }
    `}_handleDismiss(){this.hass.callService("persistent_notification","dismiss",{notification_id:this.notification.notification_id})}_computeTitle(t){return t.title||t.notification_id}_computeTooltip(t,e){if(!t||!e)return;return new Date(e.created_at).toLocaleDateString(t.language,{year:"numeric",month:"short",day:"numeric",minute:"numeric",hour:"numeric"})}};a.b([Object(n.f)()],j.prototype,"hass",void 0),a.b([Object(n.f)()],j.prototype,"notification",void 0),j=a.b([Object(n.d)("hui-persistent-notification-item")],j);let C=class extends n.a{shouldUpdate(t){return!(this.hass&&this.notification&&!t.has("notification"))}render(){return this.hass&&this.notification?this.notification.entity_id?n.e`
          <hui-configurator-notification-item
            .hass="${this.hass}"
            .notification="${this.notification}"
          ></hui-configurator-notification-item>
        `:n.e`
          <hui-persistent-notification-item
            .hass="${this.hass}"
            .notification="${this.notification}"
          ></hui-persistent-notification-item>
        `:n.e``}};a.b([Object(n.f)()],C.prototype,"hass",void 0),a.b([Object(n.f)()],C.prototype,"notification",void 0),C=a.b([Object(n.d)("hui-notification-item")],C);const E=customElements.get("paper-icon-button");customElements.define("ha-paper-icon-button-next",class extends E{connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.icon="ltr"===window.getComputedStyle(this).direction?"hass:chevron-right":"hass:chevron-left"},100)}});var S=i(168);customElements.define("hui-notification-drawer",class extends(Object(d.a)(Object(S.a)(h.a))){constructor(){super(...arguments),this.open=!1,this.hidden=!0,this._openTimer=0}static get template(){return c.a`
    <style include="paper-material-styles">
      :host {
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
      }

      :host([hidden]) {
        display: none;
      }

      .container {
        align-items: stretch;
        background: var(--sidebar-background-color, var(--primary-background-color));
        bottom: 0;
        box-shadow: var(--paper-material-elevation-1_-_box-shadow);
        display: flex;
        flex-direction: column;
        overflow-y: hidden;
        position: fixed;
        top: 0;
        transition: right .2s ease-in;
        width: 500px;
        z-index: 10;
      }

      :host([rtl]) .container {
        transition: left .2s ease-in !important;
      }

      :host(:not(narrow)) .container {
        right: -500px;
      }

      :host([rtl]:not(narrow)) .container {
        left: -500px;
      }

      :host([narrow]) .container {
        right: -100%;
        width: 100%;
      }

      :host([rtl][narrow]) .container {
        left: -100%;
        width: 100%;
      }

      :host(.open) .container,
      :host(.open[narrow]) .container {
        right: 0;
      }

      :host([rtl].open) .container,
      :host([rtl].open[narrow]) .container {
        left: 0;
      }

      app-toolbar {
        color: var(--primary-text-color);
        border-bottom: 1px solid var(--divider-color);
        background-color: var(--primary-background-color);
        min-height: 64px;
        width: calc(100% - 32px);
        z-index: 11;
      }

      .overlay {
        display: none;
      }

      :host(.open) .overlay {
        bottom: 0;
        display: block;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 5;
      }

      .notifications {
        overflow-y: auto;
        padding-top: 16px;
      }

      .notification {
        padding: 0 16px 16px;
      }

      .empty {
        padding: 16px;
        text-align: center;
      }
    </style>
    <div class="overlay" on-click="_closeDrawer"></div>
    <div class="container">
      <app-toolbar>
        <div main-title>[[localize('ui.notification_drawer.title')]]</div>
        <ha-paper-icon-button-next on-click="_closeDrawer"></paper-icon-button>
      </app-toolbar>
      <div class="notifications">
        <template is="dom-if" if="[[!_empty(notifications)]]">
          <dom-repeat items="[[notifications]]">
            <template>
              <div class="notification">
                <hui-notification-item hass="[[hass]]" notification="[[item]]"></hui-notification-item>
              </div>
            </template>
          </dom-repeat>
        </template>
        <template is="dom-if" if="[[_empty(notifications)]]">
          <div class="empty">[[localize('ui.notification_drawer.empty')]]<div>
        </template>
      </div>
    </div>
    `}static get properties(){return{hass:Object,narrow:{type:Boolean,reflectToAttribute:!0},open:{type:Boolean,notify:!0,observer:"_openChanged"},hidden:{type:Boolean,value:!0,reflectToAttribute:!0},notifications:{type:Array,value:[]},rtl:{type:Boolean,reflectToAttribute:!0,computed:"_computeRTL(hass)"}}}ready(){super.ready(),this._empty([])||(this._openChanged(!1),this._closeDrawer({stopPropagation:()=>{window.console.log("test")}}))}_closeDrawer(t){t.stopPropagation(),this.open=!1}_empty(t){return 0===t.length}_openChanged(t){clearTimeout(this._openTimer),t?(this.hidden=!1,this._openTimer=window.setTimeout(()=>{this.classList.add("open")},50)):(this.classList.remove("open"),this._openTimer=window.setTimeout(()=>{this.hidden=!0},250))}});class T extends n.a{render(){return n.e`
      <paper-icon-button
        aria-label="Show Notifications"
        icon="hass:bell"
        @click="${this._clicked}"
      ></paper-icon-button>
      ${this.notifications&&this.notifications.length>0?n.e`
            <span class="indicator">
              <div>${this.notifications.length}</div>
            </span>
          `:""}
    `}static get styles(){return[n.c`
        :host {
          position: relative;
        }

        .indicator {
          position: absolute;
          top: 0px;
          right: -3px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--accent-color);
          pointer-events: none;
          z-index: 1;
        }

        .indicator > div {
          right: 7px;
          top: 3px;
          position: absolute;
          font-size: 0.55em;
        }
      `]}_clicked(){this.opened=!0,Object(u.a)(this,"opened-changed",{value:this.opened})}}a.b([Object(n.f)()],T.prototype,"notifications",void 0),a.b([Object(n.f)()],T.prototype,"opened",void 0),customElements.define("hui-notifications-button",T);i(249);var z=i(95),I=i(271),M=i(233),P=i(258),L=i(93),D=i(204);let A=!1;const B=(t,e)=>{let i=0;for(let a=0;a<t.length;a++){if(t[a]<5){i=a;break}t[a]<t[i]&&(i=a)}return t[i]+=e,i};class R extends n.a{constructor(){super(),this._cards=[],this._badges=[]}static get properties(){return{hass:{},lovelace:{},columns:{type:Number},index:{type:Number},_cards:{},_badges:{}}}createCardElement(t){const e=Object(I.a)(t);return e.hass=this.hass,e.addEventListener("ll-rebuild",i=>{this.lovelace.editMode||(i.stopPropagation(),this._rebuildCard(e,t))},{once:!0}),e}render(){return n.e`
      ${this.renderStyles()}
      <div id="badges"></div>
      <div id="columns"></div>
      ${this.lovelace.editMode?n.e`
            <ha-fab
              icon="hass:plus"
              title="${this.hass.localize("ui.panel.lovelace.editor.edit_card.add")}"
              @click="${this._addCard}"
              class="${Object(r.a)({rtl:Object(L.a)(this.hass)})}"
            ></ha-fab>
          `:""}
    `}renderStyles(){return n.e`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          padding: 4px 4px 0;
          transform: translateZ(0);
          position: relative;
          background: var(--lovelace-background);
        }

        #badges {
          margin: 8px 16px;
          font-size: 85%;
          text-align: center;
        }

        #columns {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        .column {
          flex-basis: 0;
          flex-grow: 1;
          max-width: 500px;
          overflow-x: hidden;
        }

        .column > * {
          display: block;
          margin: 4px 4px 8px;
        }

        ha-fab {
          position: sticky;
          float: right;
          bottom: 16px;
          right: 16px;
          z-index: 1;
        }

        ha-fab.rtl {
          float: left;
          right: auto;
          left: 16px;
        }

        @media (max-width: 500px) {
          :host {
            padding-left: 0;
            padding-right: 0;
          }

          .column > * {
            margin-left: 0;
            margin-right: 0;
          }
        }

        @media (max-width: 599px) {
          .column {
            max-width: 600px;
          }
        }
      </style>
    `}updated(t){super.updated(t);const e=this.hass,a=this.lovelace;a.editMode&&!A&&(A=!0,i.e(43).then(i.bind(null,372)));const s=t.has("hass");let n=!1,r=!1;if(t.has("index"))r=!0;else if(t.has("lovelace")){const e=t.get("lovelace");n=!e||a.editMode!==e.editMode,r=!e||a.config!==e.config}r?this._createBadges(a.config.views[this.index]):s&&this._badges.forEach(t=>{const{element:i,entityId:a}=t;i.hass=e,i.state=e.states[a]}),r||n||t.has("columns")?this._createCards(a.config.views[this.index]):s&&this._cards.forEach(t=>{t.hass=this.hass});const o=t.get("hass");(r||n||s&&o&&(e.themes!==o.themes||e.selectedTheme!==o.selectedTheme))&&Object(z.a)(this,e.themes,a.config.views[this.index].theme)}_addCard(){Object(P.a)(this,{lovelace:this.lovelace,path:[this.index]})}_createBadges(t){const e=this.shadowRoot.getElementById("badges");for(;e.lastChild;)e.removeChild(e.lastChild);if(!t||!t.badges||!Array.isArray(t.badges))return e.style.display="none",void(this._badges=[]);const i=[],a=Object(D.a)(t.badges.filter(Boolean));for(const s of a){const t=document.createElement("ha-state-label-badge"),a=s.entity;t.hass=this.hass,t.state=this.hass.states[a],t.name=s.name,t.icon=s.icon,t.image=s.image,i.push({element:t,entityId:a}),e.appendChild(t)}this._badges=i,e.style.display=i.length>0?"block":"none"}_createCards(t){const e=this.shadowRoot.getElementById("columns");for(;e.lastChild;)e.removeChild(e.lastChild);if(!t||!t.cards||!Array.isArray(t.cards))return void(this._cards=[]);const i=[],a=[];t.cards.forEach((t,e)=>{const s=this.createCardElement(t);if(i.push(s),!this.lovelace.editMode)return void a.push(s);const n=document.createElement("hui-card-options");n.hass=this.hass,n.lovelace=this.lovelace,n.path=[this.index,e],n.appendChild(s),a.push(n)});let s=[];const n=[];for(let r=0;r<this.columns;r++)s.push([]),n.push(0);i.forEach((t,e)=>{const i=Object(M.a)(t);s[B(n,i)].push(a[e])}),(s=s.filter(t=>t.length>0)).forEach(t=>{const i=document.createElement("div");i.classList.add("column"),t.forEach(t=>i.appendChild(t)),e.appendChild(i)}),this._cards=i}_rebuildCard(t,e){const i=this.createCardElement(e);t.parentElement.replaceChild(i,t),this._cards=this._cards.map(e=>e===t?i:e)}}a.b([Object(n.f)()],R.prototype,"hass",void 0),a.b([Object(n.f)()],R.prototype,"lovelace",void 0),a.b([Object(n.f)()],R.prototype,"columns",void 0),a.b([Object(n.f)()],R.prototype,"index",void 0),customElements.define("hui-view",R);let N=class extends n.b{firstUpdated(t){super.firstUpdated(t),this.style.setProperty("background","var(--lovelace-background)")}updated(t){super.updated(t);const e=this.hass,i=t.has("hass"),a=t.get("hass"),s=t.has("config");s?this._createCard():i&&(this.lastChild.hass=this.hass),(s||i&&a&&(e.themes!==a.themes||e.selectedTheme!==a.selectedTheme))&&Object(z.a)(this,e.themes,this.config.theme)}_createCard(){this.lastChild&&this.removeChild(this.lastChild);const t=Object(I.a)(this.config.cards[0]);t.hass=this.hass,t.isPanel=!0,this.append(t)}};a.b([Object(n.f)()],N.prototype,"hass",void 0),a.b([Object(n.f)()],N.prototype,"config",void 0),N=a.b([Object(n.d)("hui-panel-view")],N);let H=!1;const U=(t,e)=>{H||(H=!0,(t=>Object(u.a)(t,"register-dialog",{dialogShowEvent:"show-edit-view",dialogTag:"hui-dialog-edit-view",dialogImport:()=>Promise.all([i.e(0),i.e(1),i.e(23)]).then(i.bind(null,371))}))(t)),Object(u.a)(t,"show-edit-view",e)};let V=!1;const F=(t,e)=>{V||(V=!0,(t=>Object(u.a)(t,"register-dialog",{dialogShowEvent:"show-edit-lovelace",dialogTag:"hui-dialog-edit-lovelace",dialogImport:()=>i.e(22).then(i.bind(null,375))}))(t)),Object(u.a)(t,"show-edit-lovelace",e)},q=t=>{requestAnimationFrame(()=>setTimeout(t,0))};var W=i(56),K=i(91);const X={},Y={},Z=(t,e)=>t.forEach(t=>{const a=new URL(t.url,e).toString();switch(t.type){case"css":if(a in X)break;X[a]=Object(K.a)(a);break;case"js":if(a in Y)break;Y[a]=Object(K.b)(a);break;case"module":Object(K.c)(a);break;case"html":i.e(45).then(i.bind(null,340)).then(({importHref:t})=>t(a));break;default:console.warn(`Unknown resource type specified: ${t.type}`)}});class Q extends n.a{constructor(){super(),this._notificationsOpen=!1,this._debouncedConfigChanged=Object(f.a)(()=>this._selectView(this._curView,!0),100,!1)}connectedCallback(){super.connectedCallback(),this._unsubNotifications=w(this.hass.connection,t=>{this._persistentNotifications=t})}disconnectedCallback(){super.disconnectedCallback(),this._unsubNotifications&&this._unsubNotifications()}render(){return n.e`
    <app-route .route="${this.route}" pattern="/:view" data="${this._routeData}" @data-changed="${this._routeDataChanged}"></app-route>
    
    <!-- Inserted for IoB -->
    <hui-notification-drawer
      .hass="${this.hass}"
      .notifications="${this._notifications}"
      .open="${this._notificationsOpen}"
      @open-changed="${this._handleNotificationsOpenChanged}"
      .narrow="${this.narrow}"
    ></hui-notification-drawer>
    
    <ha-app-layout id="layout">
      <app-header slot="header" effects="waterfall" class="${Object(r.a)({"edit-mode":this._editMode})}" fixed condenses>
        ${this._editMode?n.e`
                <app-toolbar class="edit-mode">
                  <paper-icon-button
                    icon="hass:close"
                    @click="${this._editModeDisable}"
                  ></paper-icon-button>
                  <div main-title>
                    ${this.config.title||this.hass.localize("ui.panel.lovelace.editor.header")}
                    <paper-icon-button
                      icon="hass:pencil"
                      class="edit-icon"
                      @click="${this._editLovelace}"
                    ></paper-icon-button>
                  </div>
                  <paper-icon-button
                    icon="hass:help-circle"
                    title="Help"
                    @click="${this._handleHelp}"
                  ></paper-icon-button>
                  <paper-menu-button
                    no-animations
                    horizontal-align="right"
                    horizontal-offset="-5"
                  >
                    <paper-icon-button
                      aria-label="Open Lovelace menu"
                      icon="hass:dots-vertical"
                      slot="dropdown-trigger"
                    ></paper-icon-button>
                    <paper-listbox
                      @iron-select="${this._deselect}"
                      slot="dropdown-content"
                    >
                      ${n.e`
                            <paper-item
                              aria-label=${this.hass.localize("ui.panel.lovelace.menu.unused_entities")}
                              @tap="${this._handleUnusedEntities}"
                            >
                              ${this.hass.localize("ui.panel.lovelace.menu.unused_entities")}
                            </paper-item>
                          `}
                      <paper-item @tap="${this.lovelace.enableFullEditMode}">
                        ${this.hass.localize("ui.panel.lovelace.editor.menu.raw_editor")}
                      </paper-item>
                    </paper-listbox>
                  </paper-menu-button>
                </app-toolbar>
              `:this._hideToolbar?"":n.e`
                <app-toolbar>
                  <!-- Disabled for IoB -->
                  <!--ha-menu-button
                    .hass=${this.hass}
                    .narrow=${this.narrow}
                  ></ha-menu-button-->
                  <div main-title>${this.config.title||"ioBroker"}</div>

                  <!-- Enabled for IoB -->
                  <hui-notifications-button
                    .hass="${this.hass}"
                    .opened="${this._notificationsOpen}"
                    @opened-changed="${this._handleNotificationsOpenChanged}"
                    .notifications="${this._notifications}"
                  ></hui-notifications-button>

                  <ha-start-voice-button
                    .hass="${this.hass}"
                  ></ha-start-voice-button>
                  <paper-menu-button
                    no-animations
                    horizontal-align="right"
                    horizontal-offset="-5"
                  >
                    <paper-icon-button
                      icon="hass:dots-vertical"
                      slot="dropdown-trigger"
                    ></paper-icon-button>
                    <paper-listbox
                      @iron-select="${this._deselect}"
                      slot="dropdown-content"
                    >
                      ${this._yamlMode?n.e`
                            <paper-item
                              aria-label=${this.hass.localize("ui.panel.lovelace.menu.refresh")}
                              @tap="${this._handleRefresh}"
                            >
                              ${this.hass.localize("ui.panel.lovelace.menu.refresh")}
                            </paper-item>
                            <paper-item
                              aria-label=${this.hass.localize("ui.panel.lovelace.menu.unused_entities")}
                              @tap="${this._handleUnusedEntities}"
                            >
                              ${this.hass.localize("ui.panel.lovelace.menu.unused_entities")}
                            </paper-item>
                          `:""}
                      ${this.hass.user.is_admin?n.e`
                            <paper-item
                              aria-label=${this.hass.localize("ui.panel.lovelace.menu.configure_ui")}
                              @tap="${this._editModeEnable}"
                            >
                              ${this.hass.localize("ui.panel.lovelace.menu.configure_ui")}
                            </paper-item>
                          `:""}
                      <paper-item
                        aria-label=${this.hass.localize("ui.panel.lovelace.menu.help")}
                        @tap="${this._handleHelp}"
                      >
                        ${this.hass.localize("ui.panel.lovelace.menu.help")}
                      </paper-item>
                    </paper-listbox>
                  </paper-menu-button>
                </app-toolbar>
              `}

        ${this.lovelace.config.views.length>1||this._editMode?n.e`
                <div sticky>
                  <paper-tabs
                    scrollable
                    .selected="${this._curView}"
                    @iron-activate="${this._handleViewSelected}"
                    dir="${Object(L.b)(this.hass)}"
                  >
                    ${this.lovelace.config.views.map(t=>n.e`
                        <paper-tab aria-label="${t.title}">
                          ${this._editMode?n.e`
                                <ha-paper-icon-button-arrow-prev
                                  title="Move view left"
                                  class="edit-icon view"
                                  @click="${this._moveViewLeft}"
                                  ?disabled="${0===this._curView}"
                                ></ha-paper-icon-button-arrow-prev>
                              `:""}
                          ${t.icon?n.e`
                                <ha-icon
                                  title="${t.title}"
                                  .icon="${t.icon}"
                                ></ha-icon>
                              `:t.title||"Unnamed view"}
                          ${this._editMode?n.e`
                                <ha-icon
                                  title="Edit view"
                                  class="edit-icon view"
                                  icon="hass:pencil"
                                  @click="${this._editView}"
                                ></ha-icon>
                                <ha-paper-icon-button-arrow-next
                                  title="Move view right"
                                  class="edit-icon view"
                                  @click="${this._moveViewRight}"
                                  ?disabled="${this._curView+1===this.lovelace.config.views.length}"
                                ></ha-paper-icon-button-arrow-next>
                              `:""}
                        </paper-tab>
                      `)}
                    ${this._editMode?n.e`
                          <paper-icon-button
                            id="add-view"
                            @click="${this._addView}"
                            title="${this.hass.localize("ui.panel.lovelace.editor.edit_view.add")}"
                            icon="hass:plus"
                          ></paper-icon-button>
                        `:""}
                    ${this._hideToolbar?n.e`
                          <hui-notifications-button
                            .hass="${this.hass}"
                            .opened="${this._notificationsOpen}"
                            @opened-changed="${this._handleNotificationsOpenChanged}"
                            .notifications="${this._notifications}"
                          ></hui-notifications-button>
                        `:""}
                  </paper-tabs>
                </div>
              `:""}
      </app-header>
      <div id='view' class="${Object(r.a)({"tabs-hidden":this.lovelace.config.views.length<2})}" @ll-rebuild='${this._debouncedConfigChanged}'></div>
    </app-header-layout>
    `}static get styles(){return[W.a,n.c`
        :host {
          -ms-user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          --dark-color: #455a64;
          --text-dark-color: #fff;
        }

        ha-app-layout {
          min-height: 100%;
        }
        paper-menu-button {
          padding: 0;
        }
        paper-tabs {
          margin-left: 12px;
          --paper-tabs-selection-bar-color: var(--text-primary-color, #fff);
          text-transform: uppercase;
        }
        .edit-mode {
          background-color: var(--dark-color, #455a64);
          color: var(--text-dark-color);
        }
        .edit-mode div[main-title] {
          pointer-events: auto;
        }
        paper-tab.iron-selected .edit-icon {
          display: inline-flex;
        }
        .edit-icon {
          color: var(--accent-color);
          padding-left: 8px;
        }
        .edit-icon[disabled] {
          color: var(--disabled-text-color);
        }
        .edit-icon.view {
          display: none;
        }
        #add-view {
          position: absolute;
          height: 44px;
        }
        #add-view ha-icon {
          background-color: var(--accent-color);
          border-radius: 5px;
          margin-top: 4px;
        }
        app-toolbar a {
          color: var(--text-primary-color, white);
        }
        mwc-button.warning:not([disabled]) {
          color: var(--google-red-500);
        }
        #view {
          min-height: calc(100vh - 112px);
          /**
         * Since we only set min-height, if child nodes need percentage
         * heights they must use absolute positioning so we need relative
         * positioning here.
         *
         * https://www.w3.org/TR/CSS2/visudet.html#the-height-property
         */
          position: relative;
          display: flex;
        }
        #view > * {
          flex: 1;
          width: 100%;
        }
        #view.tabs-hidden {
          min-height: calc(100vh - 64px);
        }
        paper-item {
          cursor: pointer;
        }
      `]}updated(t){super.updated(t);const e=this._viewRoot.lastChild;let i;t.has("columns")&&e&&e instanceof R&&(e.columns=this.columns),t.has("hass")&&e&&(e.hass=this.hass);let a=!1;if(t.has("route")){const t=this.config&&this.config.views;if(""===this.route.path&&"/lovelace"===this.route.prefix&&t)Object(m.a)(this,`/lovelace/${t[0].path||0}`,!0),i=0;else if("hass-unused-entities"===this._routeData.view)i="hass-unused-entities";else if(this._routeData.view){const e=this._routeData.view,a=parseInt(e,10);let s=0;for(let i=0;i<t.length;i++)if(t[i].path===e||i===a){s=i;break}i=s}}if(t.has("lovelace")){const e=t.get("lovelace");if(e&&e.config===this.lovelace.config||(this.lovelace.config.resources&&Z(this.lovelace.config.resources,this.hass.auth.data.hassUrl),a=!0,Object(u.a)(this,"iron-resize")),!e||e.editMode!==this.lovelace.editMode){if("storage"===this.lovelace.mode&&"hass-unused-entities"===this._routeData.view){const t=this.config&&this.config.views;Object(m.a)(this,`/lovelace/${t[0].path||0}`),i=0}a=!0,Object(u.a)(this,"iron-resize")}}(void 0!==i||a)&&(a&&void 0===i&&(i=this._curView),q(()=>this._selectView(i,a)))}get _notifications(){return this._updateNotifications(this.hass.states,this._persistentNotifications||[])}get _hideToolbar(){return!0===this.config.hideToolbar&&-1===window.location.search.indexOf("toolbar")}get config(){return this.lovelace.config}get _yamlMode(){return"yaml"===this.lovelace.mode}get _editMode(){return this.lovelace.editMode}get _layout(){return this.shadowRoot.getElementById("layout")}get _viewRoot(){return this.shadowRoot.getElementById("view")}_routeDataChanged(t){this._routeData=t.detail.value}_handleNotificationsOpenChanged(t){this._notificationsOpen=t.detail.value}_updateNotifications(t,e){const i=k(t);return e.concat(i)}_handleRefresh(){Object(u.a)(this,"config-refresh")}_handleUnusedEntities(){Object(m.a)(this,"/lovelace/hass-unused-entities")}_deselect(t){t.target.selected=null}_handleHelp(){window.open("https://www.iobroker.net/#en/adapters/adapterref/iobroker.lovelace/README.md","_blank")}_editModeEnable(){this._yamlMode?window.alert("The edit UI is not available when in YAML mode."):(this.lovelace.setEditMode(!0),this.config.views.length<2&&Object(u.a)(this,"iron-resize"))}_editModeDisable(){this.lovelace.setEditMode(!1),this.config.views.length<2&&Object(u.a)(this,"iron-resize")}_editLovelace(){F(this,this.lovelace)}_editView(){U(this,{lovelace:this.lovelace,viewIndex:this._curView})}_moveViewLeft(){const t=this.lovelace,e=this._curView,i=this._curView-1;this._curView=i,t.saveConfig(Object(b.i)(t.config,e,i))}_moveViewRight(){const t=this.lovelace,e=this._curView,i=this._curView+1;this._curView=i,t.saveConfig(Object(b.i)(t.config,e,i))}_addView(){U(this,{lovelace:this.lovelace})}_handleViewSelected(t){const e=t.detail.selected;if(e!==this._curView){const t=this.config.views[e].path||e;Object(m.a)(this,`/lovelace/${t}`)}!function(t,e){const i=e,a=Math.random(),s=Date.now(),n=i.scrollTop,r=0-n;t._currentAnimationId=a,function e(){const o=Date.now()-s;var l;o>200?i.scrollTop=0:t._currentAnimationId===a&&(i.scrollTop=(l=o,-r*(l/=200)*(l-2)+n),requestAnimationFrame(e.bind(t)))}.call(t)}(this,this._layout.header.scrollTarget)}_selectView(t,e){if(!e&&this._curView===t)return;t=void 0===t?0:t,this._curView=t,e&&(this._viewCache={});const a=this._viewRoot;if(a.lastChild&&a.removeChild(a.lastChild),"hass-unused-entities"===t){const t=document.createElement("hui-unused-entities");return Promise.all([i.e(70),i.e(42)]).then(i.bind(null,367)).then(()=>{t.hass=this.hass,t.lovelace=this.lovelace,t.narrow=this.narrow}),this.config.background&&t.style.setProperty("--lovelace-background",this.config.background),void a.append(t)}let s;const n=this.config.views[t];if(!n)return void this._editModeEnable();!e&&this._viewCache[t]?s=this._viewCache[t]:(n.panel&&n.cards&&n.cards.length>0?(s=document.createElement("hui-panel-view")).config=n:((s=document.createElement("hui-view")).lovelace=this.lovelace,s.columns=this.columns,s.index=t),this._viewCache[t]=s),s.hass=this.hass;const r=n.background||this.config.background;r&&s.style.setProperty("--lovelace-background",r),a.append(s)}}a.b([Object(n.f)()],Q.prototype,"hass",void 0),a.b([Object(n.f)()],Q.prototype,"lovelace",void 0),a.b([Object(n.f)()],Q.prototype,"columns",void 0),a.b([Object(n.f)()],Q.prototype,"narrow",void 0),a.b([Object(n.f)()],Q.prototype,"route",void 0),a.b([Object(n.f)()],Q.prototype,"_routeData",void 0),a.b([Object(n.f)()],Q.prototype,"_curView",void 0),a.b([Object(n.f)()],Q.prototype,"_notificationsOpen",void 0),a.b([Object(n.f)()],Q.prototype,"_persistentNotifications",void 0),customElements.define("hui-root",Q);let J=!1;const G=(t,e)=>{J||(J=!0,Object(u.a)(t,"register-dialog",{dialogShowEvent:"show-save-config",dialogTag:"hui-dialog-save-config",dialogImport:()=>i.e(25).then(i.bind(null,359))})),Object(u.a)(t,"show-save-config",e)};var tt=i(118);var et=i(167);var it=i(215),at=i(180),st=i(217),nt=i(116),rt=i(218),ot=i(259);const lt=["binary_sensor","person","device_tracker","mailbox","sensor","sun","timer"],ct=new Set(["persistent_notification","configurator","geo_location"]);let ht=!1;const dt=(t,e)=>{const i=[],a=[];for(const[s,n]of t){const t=Object(x.a)(s);if("alarm_control_panel"===t)i.push({type:"alarm-panel",entity:s});else if("camera"===t)i.push({type:"picture-entity",entity:s});else if("climate"===t)i.push({type:"thermostat",entity:s});else if("history_graph"===t&&n)i.push({type:"history-graph",entities:n.attributes.entity_id,hours_to_show:n.attributes.hours_to_show,title:n.attributes.friendly_name,refresh_interval:n.attributes.refresh});else if("media_player"===t)i.push({type:"media-control",entity:s});else if("plant"===t)i.push({type:"plant-status",entity:s});else if("weather"===t)i.push({type:"weather-forecast",entity:s});else if("weblink"===t&&n){const t={type:"weblink",url:n.state,name:Object(et.a)(n)};"icon"in n.attributes&&(t.icon=n.attributes.icon),a.push(t)}else a.push(s)}return a.length>0&&i.unshift(Object.assign({type:"entities",entities:a},e)),i},pt=(t,e,i,a,s)=>{const n=(t=>{const e={};return Object.keys(t).forEach(i=>{const a=t[i];a.attributes.hidden||ct.has(Object(at.a)(a))||(e[i]=t[i])}),e})(a),r={};Object.keys(n).forEach(t=>{const e=n[t];e.attributes.order&&(r[t]=e.attributes.order)});const o=((t,e,i,a)=>{const s=Object.assign({},a),n=[];for(const r of t){const t=[],a=new Set(e.filter(t=>t.area_id===r.area_id).map(t=>t.id));for(const e of i)a.has(e.device_id)&&e.entity_id in s&&(t.push(s[e.entity_id]),delete s[e.entity_id]);t.length>0&&n.push([r,t])}return{areasWithEntities:n,otherEntities:s}})(t,e,i,n),l=ut(s,"default_view","Home",void 0,o.otherEntities,r),c=[];return o.areasWithEntities.forEach(([t,e])=>{c.push(...dt(e.map(t=>[t.entity_id,t]),{title:t.name,show_header_toggle:!0}))}),l.cards.unshift(...c),l},ut=(t,e,i,a,s,n)=>{const r=function(t){const e=[],i={};return Object.keys(t).forEach(a=>{const s=t[a];"group"===Object(x.a)(a)?e.push(s):i[a]=s}),e.forEach(t=>t.attributes.entity_id.forEach(t=>{delete i[t]})),{groups:e,ungrouped:i}}(s);r.groups.sort((t,e)=>n[t.entity_id]-n[e.entity_id]);const o={},l={};Object.keys(r.ungrouped).forEach(t=>{const e=r.ungrouped[t],i=Object(at.a)(e),a=lt.includes(i)?o:l;i in a||(a[i]=[]),a[i].push(e.entity_id)});let c=[];lt.forEach(t=>{t in o&&(c=c.concat(o[t]))});let h=[];r.groups.forEach(t=>{h=h.concat(dt(t.attributes.entity_id.map(t=>[t,s[t]]),{title:Object(et.a)(t),show_header_toggle:"hidden"!==t.attributes.control}))}),Object.keys(l).sort().forEach(e=>{h=h.concat(dt(l[e].map(t=>[t,s[t]]),{title:t(`domain.${e}`)}))});const d={path:e,title:i,badges:c,cards:h};return a&&(d.icon=a),d},gt=async t=>{ht||(ht=!0,Object(st.b)(t.connection,()=>void 0),Object(rt.a)(t.connection,()=>void 0),Object(ot.a)(t.connection,()=>void 0));const[e,i,a]=await Promise.all([Object(nt.a)(t.connection,st.b),Object(nt.a)(t.connection,rt.a),Object(nt.a)(t.connection,ot.a)]);return ft(t.config,e,i,a,t.states,t.localize)},ft=async(t,e,a,s,n,r)=>{const o=function(t){const e=[];return Object.keys(t).forEach(i=>{const a=t[i];a.attributes.view&&e.push(a)}),e.sort((t,e)=>t.entity_id===tt.c?-1:e.entity_id===tt.c?1:t.attributes.order-e.attributes.order),e}(n),l=o.map(t=>{const e=function(t,e){const i={};return e.attributes.entity_id.forEach(e=>{const a=t[e];if(a&&!a.attributes.hidden&&(i[a.entity_id]=a,"group"===Object(x.a)(a.entity_id))){const e=function(t,e){const i={};return e.attributes.entity_id.forEach(e=>{const a=t[e];a&&(i[a.entity_id]=a)}),i}(t,a);Object.keys(e).forEach(t=>{const a=e[t];a.attributes.hidden||(i[t]=a)})}}),i}(n,t),i={};return Object.keys(e).forEach((t,e)=>{i[t]=e}),ut(r,Object(it.a)(t.entity_id),Object(et.a)(t),t.attributes.icon,e,i)});let c=t.location_name;return 0!==o.length&&"group.default_view"===o[0].entity_id||(l.unshift(pt(e,a,s,n,r)),t.components.includes("geo_location")&&l[0]&&l[0].cards&&l[0].cards.push({type:"map",geo_location_sources:["all"]}),l.length>1&&"Home"===c&&(c="ioBroker")),1===l.length&&0===l[0].cards.length&&(i.e(27).then(i.bind(null,360)),l[0].cards.push({type:"custom:hui-empty-state-card"})),{title:c,views:l}};var mt=i(52);let bt=!1;class _t extends n.a{constructor(){super(),this._state="loading",this._ignoreNextUpdateEvent=!1,this._closeEditor=this._closeEditor.bind(this)}render(){const t=this._state;return"loaded"===t?n.e`
        <hui-root
          .hass="${this.hass}"
          .lovelace="${this.lovelace}"
          .route="${this.route}"
          .columns="${this._columns}"
          .narrow=${this.narrow}
          @config-refresh="${this._forceFetchConfig}"
        ></hui-root>
      `:"error"===t?n.e`
        <hass-error-screen title="Lovelace" .error="${this._errorMsg}">
          <mwc-button on-click="_forceFetchConfig"
            >${this.hass.localize("ui.panel.lovelace.reload_lovelace")}</mwc-button
          >
        </hass-error-screen>
      `:"yaml-editor"===t?n.e`
        <hui-editor
          .hass="${this.hass}"
          .lovelace="${this.lovelace}"
          .closeEditor="${this._closeEditor}"
        ></hui-editor>
      `:n.e`
      <hass-loading-screen
        rootnav
        .hass=${this.hass}
        .narrow=${this.narrow}
      ></hass-loading-screen>
    `}updated(t){if(super.updated(t),t.has("narrow"))return void this._updateColumns();if(!t.has("hass"))return;const e=t.get("hass");e&&this.hass.dockedSidebar!==e.dockedSidebar&&this._updateColumns()}firstUpdated(){this._fetchConfig(!1),Object(s.c)(this.hass.connection,()=>this._lovelaceChanged()),window.addEventListener("connection-status",t=>{"connected"===t.detail&&this._fetchConfig(!1)}),this._updateColumns=this._updateColumns.bind(this),this.mqls=[300,600,900,1200].map(t=>{const e=matchMedia(`(min-width: ${t}px)`);return e.addListener(this._updateColumns),e}),this._updateColumns()}connectedCallback(){super.connectedCallback(),this.lovelace&&this.hass&&this.lovelace.language!==this.hass.language?this._setLovelaceConfig(this.lovelace.config,this.lovelace.mode):this.lovelace&&"generated"===this.lovelace.mode&&(this._state="loading",this._regenerateConfig())}async _regenerateConfig(){const t=await gt(this.hass);this._setLovelaceConfig(t,"generated"),this._state="loaded"}_closeEditor(){this._state="loaded"}_updateColumns(){const t=this.mqls.reduce((t,e)=>t+Number(e.matches),0);this._columns=Math.max(1,t-Number(!this.narrow&&"docked"===this.hass.dockedSidebar))}_lovelaceChanged(){this._ignoreNextUpdateEvent?this._ignoreNextUpdateEvent=!1:Object(mt.a)(this,{message:this.hass.localize("ui.panel.lovelace.changed_toast.message"),action:{action:()=>this._fetchConfig(!1),text:this.hass.localize("ui.panel.lovelace.changed_toast.refresh")},duration:0,dismissable:!1})}_forceFetchConfig(){this._fetchConfig(!0)}async _fetchConfig(t){let e,i,a=this.panel.config.mode;const n=window;n.llConfProm?(i=n.llConfProm,n.llConfProm=void 0):(this.lovelace&&"yaml"===this.lovelace.mode&&(this._ignoreNextUpdateEvent=!0),i=Object(s.a)(this.hass.connection,t));try{e=await i}catch(r){if("config_not_found"!==r.code)return console.log(r),this._state="error",void(this._errorMsg=r.message);e=await gt(this.hass),a="generated"}finally{this.lovelace&&"yaml"===this.lovelace.mode&&setTimeout(()=>{this._ignoreNextUpdateEvent=!1},2e3)}this._state="loaded",this._setLovelaceConfig(e,a)}_setLovelaceConfig(t,e){this.lovelace={config:t,mode:e,editMode:!!this.lovelace&&this.lovelace.editMode,language:this.hass.language,enableFullEditMode:()=>{bt||(bt=!0,Promise.all([i.e(7),i.e(49)]).then(i.bind(null,341))),this._state="yaml-editor"},setEditMode:t=>{t&&"generated"===this.lovelace.mode?G(this,{lovelace:this.lovelace}):this._updateLovelace({editMode:t})},saveConfig:async t=>{const{config:e,mode:i}=this.lovelace;try{this._updateLovelace({config:t,mode:"storage"}),this._ignoreNextUpdateEvent=!0,await Object(s.b)(this.hass,t)}catch(a){throw console.error(a),this._updateLovelace({config:e,mode:i}),a}}}}_updateLovelace(t){this.lovelace=Object.assign({},this.lovelace,t)}}a.b([Object(n.f)()],_t.prototype,"panel",void 0),a.b([Object(n.f)()],_t.prototype,"hass",void 0),a.b([Object(n.f)()],_t.prototype,"narrow",void 0),a.b([Object(n.f)()],_t.prototype,"route",void 0),a.b([Object(n.f)()],_t.prototype,"_columns",void 0),a.b([Object(n.f)()],_t.prototype,"_state",void 0),a.b([Object(n.f)()],_t.prototype,"_errorMsg",void 0),a.b([Object(n.f)()],_t.prototype,"lovelace",void 0),customElements.define("ha-panel-lovelace",_t)}])]);
//# sourceMappingURL=chunk.6994a0e42ef1f1967d33.js.map