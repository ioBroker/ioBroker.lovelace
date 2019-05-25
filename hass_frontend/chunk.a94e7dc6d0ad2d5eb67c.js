/*! For license information please see chunk.a94e7dc6d0ad2d5eb67c.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{395:function(t,e,n){"use strict";n.r(e);var i=n(87),s=n(79),o=n(6),a=n(3),r=n(4),l=null;Object(o.a)({_template:a.a`
    <style>
      :host {
        display: block;
        position: fixed;
        background-color: var(--paper-toast-background-color, #323232);
        color: var(--paper-toast-color, #f1f1f1);
        min-height: 48px;
        min-width: 288px;
        padding: 16px 24px;
        box-sizing: border-box;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
        border-radius: 2px;
        margin: 12px;
        font-size: 14px;
        cursor: default;
        -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
        transition: transform 0.3s, opacity 0.3s;
        opacity: 0;
        -webkit-transform: translateY(100px);
        transform: translateY(100px);
        @apply --paper-font-common-base;
      }

      :host(.capsule) {
        border-radius: 24px;
      }

      :host(.fit-bottom) {
        width: 100%;
        min-width: 0;
        border-radius: 0;
        margin: 0;
      }

      :host(.paper-toast-open) {
        opacity: 1;
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
      }
    </style>

    <span id="label">{{text}}</span>
    <slot></slot>
`,is:"paper-toast",behaviors:[s.a],properties:{fitInto:{type:Object,value:window,observer:"_onFitIntoChanged"},horizontalAlign:{type:String,value:"left"},verticalAlign:{type:String,value:"bottom"},duration:{type:Number,value:3e3},text:{type:String,value:""},noCancelOnOutsideClick:{type:Boolean,value:!0},noAutoFocus:{type:Boolean,value:!0}},listeners:{transitionend:"__onTransitionEnd"},get visible(){return r.a._warn("`visible` is deprecated, use `opened` instead"),this.opened},get _canAutoClose(){return this.duration>0&&this.duration!==1/0},created:function(){this._autoClose=null,i.a.requestAvailability()},show:function(t){for(var e in"string"==typeof t&&(t={text:t}),t)0===e.indexOf("_")?r.a._warn('The property "'+e+'" is private and was not set.'):e in this?this[e]=t[e]:r.a._warn('The property "'+e+'" is not valid.');this.open()},hide:function(){this.close()},__onTransitionEnd:function(t){t&&t.target===this&&"opacity"===t.propertyName&&(this.opened?this._finishRenderOpened():this._finishRenderClosed())},_openedChanged:function(){null!==this._autoClose&&(this.cancelAsync(this._autoClose),this._autoClose=null),this.opened?(l&&l!==this&&l.close(),l=this,this.fire("iron-announce",{text:this.text}),this._canAutoClose&&(this._autoClose=this.async(this.close,this.duration))):l===this&&(l=null),s.b._openedChanged.apply(this,arguments)},_renderOpened:function(){this.classList.add("paper-toast-open")},_renderClosed:function(){this.classList.remove("paper-toast-open")},_onFitIntoChanged:function(t){this.positionTarget=t}}),n.d(e,"HaToast",function(){return c});const p=customElements.get("paper-toast");class c extends p{connectedCallback(){super.connectedCallback(),this._resizeListener||(this._resizeListener=(t=>this.classList.toggle("fit-bottom",t.matches)),this._mediaq=window.matchMedia("(max-width: 599px")),this._mediaq.addListener(this._resizeListener),this._resizeListener(this._mediaq)}disconnectedCallback(){super.disconnectedCallback(),this._mediaq.removeListener(this._resizeListener)}}customElements.define("ha-toast",c)},87:function(t,e,n){"use strict";n.d(e,"a",function(){return o});n(4);var i=n(6),s=n(3);const o=Object(i.a)({_template:s.a`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){o.instance||(o.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(t){this._text="",this.async(function(){this._text=t},100)},_onIronAnnounce:function(t){t.detail&&t.detail.text&&this.announce(t.detail.text)}});o.instance=null,o.requestAvailability=function(){o.instance||(o.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(o.instance)}}}]);
//# sourceMappingURL=chunk.a94e7dc6d0ad2d5eb67c.js.map