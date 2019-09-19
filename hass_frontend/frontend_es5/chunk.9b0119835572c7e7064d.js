/*! For license information please see chunk.9b0119835572c7e7064d.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[51,5,6],Array(55).concat([function(t,e,i){"use strict";i.d(e,"b",function(){return r}),i.d(e,"a",function(){return o});i(5),i(35);var a=i(32),n=i(3);const r={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(t){this._detectKeyboardFocus(t),t||this._setPressed(!1)},_detectKeyboardFocus:function(t){this._setReceivedFocusFromKeyboard(!this.pointerDown&&t)},_userActivate:function(t){this.active!==t&&(this.active=t,this.fire("change"))},_downHandler:function(t){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(t){var e=t.detail.keyboardEvent,i=Object(n.a)(e).localTarget;this.isLightDescendant(i)||(e.preventDefault(),e.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(t){var e=t.detail.keyboardEvent,i=Object(n.a)(e).localTarget;this.isLightDescendant(i)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(t){this._changedButtonState()},_ariaActiveAttributeChanged:function(t,e){e&&e!=t&&this.hasAttribute(e)&&this.removeAttribute(e)},_activeChanged:function(t,e){this.toggles?this.setAttribute(this.ariaActiveAttribute,t?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},o=[a.a,r]},,function(t,e,i){"use strict";i.d(e,"b",function(){return o}),i.d(e,"a",function(){return s});i(5);var a=i(55),n=i(35),r=i(68);const o={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(t){t&&this.ensureRipple(),this.hasRipple()&&(this._ripple.holdDown=t)},_createRipple:function(){var t=r.a._createRipple();return t.id="ink",t.setAttribute("center",""),t.classList.add("circle"),t}},s=[a.a,n.a,r.a,o]},,,function(t,e,i){"use strict";i.d(e,"a",function(){return a});i(5);const a={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}}},function(t,e,i){"use strict";i.d(e,"a",function(){return r});i(5);var a=i(47);let n=null;const r={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){n=new a.a({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return n&&n.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(t){return void 0===t&&void 0!==this.value?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(t),!this.invalid},_getValidity:function(t){return!this.hasValidator()||this._validator.validate(t)}}},,,function(t,e,i){"use strict";i.d(e,"c",function(){return a}),i.d(e,"b",function(){return n}),i.d(e,"a",function(){return r});var a=location.protocol+"//"+location.host,n=function(t,e){return t.callWS({type:"auth/sign_path",path:e})},r=function(){return fetch("/auth/providers",{credentials:"same-origin"})}},,,,function(t,e,i){"use strict";i.d(e,"a",function(){return r});i(5),i(110);var a=i(55),n=i(3);const r={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(t){a.b._downHandler.call(this,t),this.pressed&&this.ensureRipple(t)},ensureRipple:function(t){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var e=this._rippleContainer||this.root;if(e&&Object(n.a)(e).appendChild(this._ripple),t){var i=Object(n.a)(this._rippleContainer||this),a=Object(n.a)(t).rootTarget;i.deepContains(a)&&this._ripple.uiDownAction(t)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(t){this.hasRipple()&&(this._ripple.noink=t)}}},function(t,e,i){"use strict";i.d(e,"a",function(){return a});i(5);const a={attached:function(){this.fire("addon-attached")},update:function(t){}}},,,,,,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";i(5),i(115),i(112),i(113),i(114);var a=i(60),n=(i(41),i(6)),r=i(4),o=i(97);Object(n.a)({is:"paper-input",_template:r.a`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,behaviors:[o.a,a.a],properties:{value:{type:String}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}})},,function(t,e,i){"use strict";i.d(e,"a",function(){return o});i(5);var a=i(3),n=i(10),r=new Set;const o={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(r.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach(function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)},this),this._fireResize())},assignParentResizable:function(t){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=t,t&&-1===t._interestedResizables.indexOf(this)&&(t._interestedResizables.push(this),t._subscribeIronResize(this))},stopResizeNotificationsFor:function(t){var e=this._interestedResizables.indexOf(t);e>-1&&(this._interestedResizables.splice(e,1),this._unsubscribeIronResize(t))},_subscribeIronResize:function(t){t.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(t){t.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(t){return!0},_onDescendantIronResize:function(t){this._notifyingDescendant?t.stopPropagation():n.g||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(t){var e=Object(a.a)(t).rootTarget;e!==this&&(e.assignParentResizable(this),this._notifyDescendant(e),t.stopPropagation())},_parentResizableChanged:function(t){t&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(t){this.isAttached&&(this._notifyingDescendant=!0,t.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var t=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function e(){document.removeEventListener("readystatechange",e),t()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(t){t!==this&&t._findParent()},this):(r.forEach(function(t){t!==this&&t._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?r.delete(this):r.add(this)}}},,function(t,e,i){"use strict";i.d(e,"a",function(){return r});i(5);var a=i(6),n=i(4);const r=Object(a.a)({_template:n.a`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){r.instance||(r.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(t){this._text="",this.async(function(){this._text=t},100)},_onIronAnnounce:function(t){t.detail&&t.detail.text&&this.announce(t.detail.text)}});r.instance=null,r.requestAvailability=function(){r.instance||(r.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(r.instance)}},function(t,e,i){"use strict";i.d(e,"a",function(){return c});i(5);var a=i(32),n=i(35),r=i(3),o=i(31);const s={NextLabelID:1,NextAddonID:1,NextInputID:1},l={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){return this.$||(this.$={}),this.$.input||(this._generateInputId(),this.$.input=this.$$("#"+this._inputId)),this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy(),!o.a&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)&&(this.alwaysFloatLabel=!0)},_appendStringWithSpace:function(t,e){return t=t?t+" "+e:e},_onAddonAttached:function(t){var e=Object(r.a)(t).rootTarget;if(e.id)this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,e.id);else{var i="paper-input-add-on-"+s.NextAddonID++;e.id=i,this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,i)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(t){n.a._focusBlurHandler.call(this,t),this.focused&&!this._shiftTabPressed&&this._focusableElement&&this._focusableElement.focus()},_onShiftTabDown:function(t){var e=this.getAttribute("tabindex");this._shiftTabPressed=!0,this.setAttribute("tabindex","-1"),this.async(function(){this.setAttribute("tabindex",e),this._shiftTabPressed=!1},1)},_handleAutoValidate:function(){this.autoValidate&&this.validate()},updateValueAndPreserveCaret:function(t){try{var e=this.inputElement.selectionStart;this.value=t,this.inputElement.selectionStart=e,this.inputElement.selectionEnd=e}catch(i){this.value=t}},_computeAlwaysFloatLabel:function(t,e){return e||t},_updateAriaLabelledBy:function(){var t,e=Object(r.a)(this.root).querySelector("label");e?(e.id?t=e.id:(t="paper-input-label-"+s.NextLabelID++,e.id=t),this._ariaLabelledBy=t):this._ariaLabelledBy=""},_generateInputId:function(){this._inputId&&""!==this._inputId||(this._inputId="input-"+s.NextInputID++)},_onChange:function(t){this.shadowRoot&&this.fire(t.type,{sourceEvent:t},{node:this,bubbles:t.bubbles,cancelable:t.cancelable})},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var t=document.activeElement;t instanceof HTMLElement&&t!==document.body&&t!==document.documentElement||this._focusableElement.focus()}}},c=[n.a,a.a,l]},,,,,,,,,,function(t,e,i){"use strict";i(5),i(108),i(42);var a=i(57),n=i(6),r=i(4);Object(n.a)({is:"paper-icon-button",_template:r.a`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /*
          NOTE: Both values are needed, since some phones require the value to
          be \`transparent\`.
        */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]"
               alt$="[[alt]]"></iron-icon>
  `,hostAttributes:{role:"button",tabindex:"0"},behaviors:[a.a],registered:function(){this._template.setAttribute("strip-whitespace","")},properties:{src:{type:String},icon:{type:String},alt:{type:String,observer:"_altChanged"}},_altChanged:function(t,e){var i=this.getAttribute("aria-label");i&&e!=i||this.setAttribute("aria-label",t)}})},function(t,e,i){"use strict";i(45),i(47);var a=i(6),n=i(3),r=i(4),o=i(5);Object(a.a)({_template:r.a`
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
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:o.a.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&Object(n.a)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,Object(n.a)(this.root).appendChild(this._img))}})},function(t,e,i){"use strict";i.d(e,"a",function(){return a});i(5);const a={properties:{value:{type:Number,value:0,notify:!0,reflectToAttribute:!0},min:{type:Number,value:0,notify:!0},max:{type:Number,value:100,notify:!0},step:{type:Number,value:1,notify:!0},ratio:{type:Number,value:0,readOnly:!0,notify:!0}},observers:["_update(value, min, max, step)"],_calcRatio:function(t){return(this._clampValue(t)-this.min)/(this.max-this.min)},_clampValue:function(t){return Math.min(this.max,Math.max(this.min,this._calcStep(t)))},_calcStep:function(t){if(t=parseFloat(t),!this.step)return t;var e=Math.round((t-this.min)/this.step);return this.step<1?e/(1/this.step)+this.min:e*this.step+this.min},_validateValue:function(){var t=this._clampValue(this.value);return this.value=this.oldValue=isNaN(t)?this.oldValue:t,this.value!==t},_update:function(){this._validateValue(),this._setRatio(100*this._calcRatio(this.value))}}},function(t,e,i){"use strict";i(5);var a=i(32),n=i(6),r=i(3),o=i(4),s={distance:function(t,e,i,a){var n=t-i,r=e-a;return Math.sqrt(n*n+r*r)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function l(t){this.element=t,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}function c(t){this.element=t,this.color=window.getComputedStyle(t).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),Object(r.a)(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}l.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(t,e){var i=s.distance(t,e,0,0),a=s.distance(t,e,this.width,0),n=s.distance(t,e,0,this.height),r=s.distance(t,e,this.width,this.height);return Math.max(i,a,n,r)}},c.MAX_RADIUS=300,c.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var t;return this.mouseDownStart?(t=s.now()-this.mouseDownStart,this.mouseUpStart&&(t-=this.mouseUpElapsed),t):0},get mouseUpElapsed(){return this.mouseUpStart?s.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var t=this.containerMetrics.width*this.containerMetrics.width,e=this.containerMetrics.height*this.containerMetrics.height,i=1.1*Math.min(Math.sqrt(t+e),c.MAX_RADIUS)+5,a=1.1-i/c.MAX_RADIUS*.2,n=this.mouseInteractionSeconds/a,r=i*(1-Math.pow(80,-n));return Math.abs(r)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var t=.3*this.mouseUpElapsedSeconds,e=this.opacity;return Math.max(0,Math.min(t,e))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,c.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,c.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new l(this.element)},draw:function(){var t,e,i;this.wave.style.opacity=this.opacity,t=this.radius/(this.containerMetrics.size/2),e=this.xNow-this.containerMetrics.width/2,i=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+e+"px, "+i+"px)",this.waveContainer.style.transform="translate3d("+e+"px, "+i+"px, 0)",this.wave.style.webkitTransform="scale("+t+","+t+")",this.wave.style.transform="scale3d("+t+","+t+",1)"},downAction:function(t){var e=this.containerMetrics.width/2,i=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=s.now(),this.center?(this.xStart=e,this.yStart=i,this.slideDistance=s.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=t?t.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=t?t.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=e,this.yEnd=i,this.slideDistance=s.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(t){this.isMouseDown&&(this.mouseUpStart=s.now())},remove:function(){Object(r.a)(this.waveContainer.parentNode).removeChild(this.waveContainer)}},Object(n.a)({_template:o.a`
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
`,is:"paper-ripple",behaviors:[a.a],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){11==this.parentNode.nodeType?this.keyEventTarget=Object(r.a)(this).getOwnerRoot().host:this.keyEventTarget=this.parentNode;var t=this.keyEventTarget;this.listen(t,"up","uiUpAction"),this.listen(t,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var t=0;t<this.ripples.length;++t)if(!this.ripples[t].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async(function(){this.upAction()},1)},uiDownAction:function(t){this.noink||this.downAction(t)},downAction:function(t){this.holdDown&&this.ripples.length>0||(this.addRipple().downAction(t),this._animating||(this._animating=!0,this.animate()))},uiUpAction:function(t){this.noink||this.upAction(t)},upAction:function(t){this.holdDown||(this.ripples.forEach(function(e){e.upAction(t)}),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor=null,this.fire("transitionend")},addRipple:function(){var t=new c(this);return Object(r.a)(this.$.waves).appendChild(t.waveContainer),this.$.background.style.backgroundColor=t.color,this.ripples.push(t),this._setAnimating(!0),t},removeRipple:function(t){var e=this.ripples.indexOf(t);e<0||(this.ripples.splice(e,1),t.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var t,e;for(t=0;t<this.ripples.length;++t)(e=this.ripples[t]).draw(),this.$.background.style.opacity=e.outerOpacity,e.isOpacityFullyDecayed&&!e.isRestingAtMaxRadius&&this.removeRipple(e);this.shouldKeepAnimating||0!==this.ripples.length?window.requestAnimationFrame(this._boundAnimate):this.onAnimationComplete()}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(t,e){void 0!==e&&(t?this.downAction():this.upAction())}})},,function(t,e,i){"use strict";i(5),i(54);var a=i(6),n=i(4),r=i(69);Object(a.a)({_template:n.a`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,is:"paper-input-char-counter",behaviors:[r.a],properties:{_charCounterStr:{type:String,value:"0"}},update:function(t){if(t.inputElement){t.value=t.value||"";var e=t.value.toString().length.toString();t.inputElement.hasAttribute("maxlength")&&(e+="/"+t.inputElement.getAttribute("maxlength")),this._charCounterStr=e}}})},function(t,e,i){"use strict";i(5),i(45),i(42),i(54);var a=i(6),n=i(3),r=i(24),o=i(4);const s=o.a`
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: var(--paper-input-container-input-align, bottom);

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>
`;s.setAttribute("style","display: none;"),document.head.appendChild(s.content),Object(a.a)({_template:o.a`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`,is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return Object(r.b)(this.attrForValue)},get _inputElement(){return Object(n.a)(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0,this._addons||(this._addons=[]),this.addEventListener("focus",this._boundOnFocus,!0),this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){this.attrForValue?this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged):this.addEventListener("input",this._onInput),this._inputElementValue&&""!=this._inputElementValue?this._handleValueAndAutoValidate(this._inputElement):this._handleValue(this._inputElement)},_onAddonAttached:function(t){this._addons||(this._addons=[]);var e=t.target;-1===this._addons.indexOf(e)&&(this._addons.push(e),this.isAttached&&this._handleValue(this._inputElement))},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1),this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(t){this._handleValueAndAutoValidate(t.target)},_onValueChanged:function(t){var e=t.target;this.__isFirstValueUpdate&&(this.__isFirstValueUpdate=!1,void 0===e.value||""===e.value)||this._handleValueAndAutoValidate(t.target)},_handleValue:function(t){var e=this._inputElementValue;e||0===e||"number"===t.type&&!t.checkValidity()?this._inputHasContent=!0:this._inputHasContent=!1,this.updateAddons({inputElement:t,value:e,invalid:this.invalid})},_handleValueAndAutoValidate:function(t){var e;this.autoValidate&&t&&(e=t.validate?t.validate(this._inputElementValue):t.checkValidity(),this.invalid=!e);this._handleValue(t)},_onIronInputValidate:function(t){this.invalid=this._inputElement.invalid},_invalidChanged:function(){this._addons&&this.updateAddons({invalid:this.invalid})},updateAddons:function(t){for(var e,i=0;e=this._addons[i];i++)e.update(t)},_computeInputContentClass:function(t,e,i,a,n){var r="input-content";if(t)n&&(r+=" label-is-hidden"),a&&(r+=" is-invalid");else{var o=this.querySelector("label");e||n?(r+=" label-is-floating",this.$.labelAndInputContainer.style.position="static",a?r+=" is-invalid":i&&(r+=" label-is-highlighted")):(o&&(this.$.labelAndInputContainer.style.position="relative"),a&&(r+=" is-invalid"))}return i&&(r+=" focused"),r},_computeUnderlineClass:function(t,e){var i="underline";return e?i+=" is-invalid":t&&(i+=" is-highlighted"),i},_computeAddOnContentClass:function(t,e){var i="add-on-content";return e?i+=" is-invalid":t&&(i+=" is-highlighted"),i}})},function(t,e,i){"use strict";i(5),i(42),i(54);var a=i(6),n=i(4),r=i(69);Object(a.a)({_template:n.a`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      }

      #a11yWrapper {
        visibility: hidden;
      }

      :host([invalid]) #a11yWrapper {
        visibility: visible;
      }
    </style>

    <!--
    If the paper-input-error element is directly referenced by an
    \`aria-describedby\` attribute, such as when used as a paper-input add-on,
    then applying \`visibility: hidden;\` to the paper-input-error element itself
    does not hide the error.

    For more information, see:
    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description
    -->
    <div id="a11yWrapper">
      <slot></slot>
    </div>
`,is:"paper-input-error",behaviors:[r.a],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(t){this._setInvalid(t.invalid)}})},function(t,e,i){"use strict";i(5);var a=i(96),n=i(61),r=i(6),o=i(3),s=i(4);Object(r.a)({_template:s.a`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[n.a],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){a.a.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=Object(o.a)(this).observeNodes(function(t){this._initSlottedInput()}.bind(this))},detached:function(){this._observer&&(Object(o.a)(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var t;if(this.allowedPattern)t=new RegExp(this.allowedPattern);else switch(this.inputElement.type){case"number":t=/[0-9.,e-]/}return t},_bindValueChanged:function(t,e){e&&(void 0===t?e.value=null:t!==e.value&&(this.inputElement.value=t),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:t}))},_onInput:function(){this.allowedPattern&&!this._patternAlreadyChecked&&(this._checkPatternValidity()||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput));this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(t){var e=8==t.keyCode||9==t.keyCode||13==t.keyCode||27==t.keyCode,i=19==t.keyCode||20==t.keyCode||45==t.keyCode||46==t.keyCode||144==t.keyCode||145==t.keyCode||t.keyCode>32&&t.keyCode<41||t.keyCode>111&&t.keyCode<124;return!(e||0==t.charCode&&i)},_onKeypress:function(t){if(this.allowedPattern||"number"===this.inputElement.type){var e=this._patternRegExp;if(e&&!(t.metaKey||t.ctrlKey||t.altKey)){this._patternAlreadyChecked=!0;var i=String.fromCharCode(t.charCode);this._isPrintable(t)&&!e.test(i)&&(t.preventDefault(),this._announceInvalidCharacter("Invalid character "+i+" not entered."))}}},_checkPatternValidity:function(){var t=this._patternRegExp;if(!t)return!0;for(var e=0;e<this.inputElement.value.length;e++)if(!t.test(this.inputElement.value[e]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var t=this.inputElement.checkValidity();return t&&(this.required&&""===this.bindValue?t=!1:this.hasValidator()&&(t=n.a.validate.call(this,this.bindValue))),this.invalid=!t,this.fire("iron-input-validate"),t},_announceInvalidCharacter:function(t){this.fire("iron-announce",{text:t})},_computeValue:function(t){return t}})},,function(t,e,i){"use strict";i.d(e,"a",function(){return r});var a=i(9),n=i(18);const r=Object(a.a)(t=>(class extends t{fire(t,e,i){return i=i||{},Object(n.a)(i.node||this,t,e,i)}}))},function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n}),i.d(e,"g",function(){return r}),i.d(e,"h",function(){return o}),i.d(e,"d",function(){return s}),i.d(e,"e",function(){return l}),i.d(e,"i",function(){return c}),i.d(e,"f",function(){return d}),i.d(e,"j",function(){return p}),i.d(e,"k",function(){return u}),i.d(e,"c",function(){return h});var a="hass:bookmark",n="lovelace",r=["climate","cover","configurator","input_select","input_number","input_text","lock","media_player","scene","script","timer","vacuum","water_heater","weblink"],o=["alarm_control_panel","automation","camera","climate","configurator","cover","fan","group","history_graph","input_datetime","light","lock","media_player","script","sun","timer","updater","vacuum","water_heater","weather"],s=["input_number","input_select","input_text","scene","weblink"],l=["camera","configurator","history_graph","scene"],c=["closed","locked","off"],d=new Set(["fan","input_boolean","light","switch","group","automation"]),p="°C",u="°F",h="group.default_view"},function(t,e,i){"use strict";function a(t){return t.substr(0,t.indexOf("."))}i.d(e,"a",function(){return a})},,,,,function(t,e,i){"use strict";i(5);var a=i(60),n=i(61);const r={properties:{checked:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_checkedChanged"},toggles:{type:Boolean,value:!0,reflectToAttribute:!0},value:{type:String,value:"on",observer:"_valueChanged"}},observers:["_requiredChanged(required)"],created:function(){this._hasIronCheckedElementBehavior=!0},_getValidity:function(t){return this.disabled||!this.required||this.checked},_requiredChanged:function(){this.required?this.setAttribute("aria-required","true"):this.removeAttribute("aria-required")},_checkedChanged:function(){this.active=this.checked,this.fire("iron-change")},_valueChanged:function(){void 0!==this.value&&null!==this.value||(this.value="on")}},o=[a.a,n.a,r];var s=i(57),l=i(68);i.d(e,"a",function(){return d});const c={_checkedChanged:function(){r._checkedChanged.call(this),this.hasRipple()&&(this.checked?this._ripple.setAttribute("checked",""):this._ripple.removeAttribute("checked"))},_buttonStateChanged:function(){l.a._buttonStateChanged.call(this),this.disabled||this.isAttached&&(this.checked=this.active)}},d=[s.a,o,c]},function(t,e,i){var a=i(142),n=["renderMarkdown"];t.exports=function(){var t=new Worker(i.p+"ba6fc9305bb522eb787e.worker.js",{name:"[hash].worker.js"});return a(t,n),t}},function(t,e,i){"use strict";i.d(e,"a",function(){return a});i(5);const a={properties:{active:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__activeChanged"},alt:{type:String,value:"loading",observer:"__altChanged"},__coolingDown:{type:Boolean,value:!1}},__computeContainerClasses:function(t,e){return[t||e?"active":"",e?"cooldown":""].join(" ")},__activeChanged:function(t,e){this.__setAriaHidden(!t),this.__coolingDown=!t&&e},__altChanged:function(t){"loading"===t?this.alt=this.getAttribute("aria-label")||t:(this.__setAriaHidden(""===t),this.setAttribute("aria-label",t))},__setAriaHidden:function(t){t?this.setAttribute("aria-hidden","true"):this.removeAttribute("aria-hidden")},__reset:function(){this.active=!1,this.__coolingDown=!1}}},,,function(t,e,i){"use strict";i(5);var a=i(6);Object(a.a)({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var t=this.query;t&&(this.full||"("===t[0]||(t="("+t+")"),this._mq=window.matchMedia(t),this._add(),this.queryHandler(this._mq))},queryHandler:function(t){this._setQueryMatches(t.matches)}})},function(t,e,i){"use strict";var a=i(0),n=(i(107),function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a.d(e,t),e.prototype.connectedCallback=function(){var e=this;t.prototype.connectedCallback.call(this),setTimeout(function(){e.icon="ltr"===window.getComputedStyle(e).direction?e.hassio?"hassio:arrow-left":"hass:arrow-left":e.hassio?"hassio:arrow-right":"hass:arrow-right"},100)},e}(customElements.get("paper-icon-button")));customElements.define("ha-paper-icon-button-arrow-prev",n)},,,,,,,,,,,function(t,e,i){"use strict";var a,n=i(0),r=i(1),o=i(125),s=i.n(o),l=i(18);!function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.content="",e.allowSvg=!1,e._resize=function(){return Object(l.a)(e,"iron-resize")},e}n.d(e,t),e.prototype.update=function(e){t.prototype.update.call(this,e),a||(a=s()()),this._render()},e.prototype._render=function(){return n.b(this,void 0,void 0,function(){var t,e,i;return n.e(this,function(n){switch(n.label){case 0:return t=this,[4,a.renderMarkdown(this.content,{breaks:!0,gfm:!0,tables:!0},{allowSvg:this.allowSvg})];case 1:for(t.innerHTML=n.sent(),this._resize(),e=document.createTreeWalker(this,1,null,!1);e.nextNode();)(i=e.currentNode)instanceof HTMLAnchorElement&&i.host!==document.location.host?(i.target="_blank",i.rel="noreferrer noopener"):i&&i.addEventListener("load",this._resize);return[2]}})})},n.c([Object(r.f)()],e.prototype,"content",void 0),n.c([Object(r.f)({type:Boolean})],e.prototype,"allowSvg",void 0),e=n.c([Object(r.d)("ha-markdown")],e)}(r.b)},function(t,e){t.exports=function(t,e){var i=0,a={};t.addEventListener("message",function(e){var i=e.data;if("RPC"===i.type)if(i.id){var n=a[i.id];n&&(delete a[i.id],i.error?n[1](Object.assign(Error(i.error.message),i.error)):n[0](i.result))}else{var r=document.createEvent("Event");r.initEvent(i.method,!1,!1),r.data=i.params,t.dispatchEvent(r)}}),e.forEach(function(e){t[e]=function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];return new Promise(function(r,o){var s=++i;a[s]=[r,o],t.postMessage({type:"RPC",id:s,method:e,params:n})})}})}},function(t,e,i){"use strict";i(5),i(45);var a=i(6),n=i(4);Object(a.a)({_template:n.a`
    <style>

      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
        height: 64px;
        padding: 0 16px;
        pointer-events: none;
        font-size: var(--app-toolbar-font-size, 20px);
      }

      :host ::slotted(*) {
        pointer-events: auto;
      }

      :host ::slotted(paper-icon-button) {
        /* paper-icon-button/issues/33 */
        font-size: 0;
      }

      :host ::slotted([main-title]),
      :host ::slotted([condensed-title]) {
        pointer-events: none;
        @apply --layout-flex;
      }

      :host ::slotted([bottom-item]) {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      :host ::slotted([top-item]) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host ::slotted([spacer]) {
        margin-left: 64px;
      }
    </style>

    <slot></slot>
`,is:"app-toolbar"})},function(t,e,i){"use strict";i(145);const a=customElements.get("paper-slider");customElements.define("ha-paper-slider",class extends a{static get template(){const t=document.createElement("template");t.innerHTML=a.template.innerHTML;const e=document.createElement("style");return e.innerHTML='\n      .pin > .slider-knob > .slider-knob-inner {\n        font-size:  var(--ha-paper-slider-pin-font-size, 10px);\n        line-height: normal;\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::before {\n        top: unset;\n        margin-left: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        width: 2.2em;\n        height: 2.2em;\n\n        -webkit-transform-origin: left bottom;\n        transform-origin: left bottom;\n        -webkit-transform: rotate(-45deg) scale(0) translate(0);\n        transform: rotate(-45deg) scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::before {\n        -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);\n        transform: rotate(-45deg) scale(1) translate(7px, -7px);\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::after {\n        top: unset;\n        font-size: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        margin-left: -1.1em;\n        width: 2.2em;\n        height: 2.1em;\n\n        -webkit-transform-origin: center bottom;\n        transform-origin: center bottom;\n        -webkit-transform: scale(0) translate(0);\n        transform: scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -10px);\n        transform: scale(1) translate(0, -10px);\n      }\n\n      :host([dir="rtl"]) .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n        transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n        }\n    ',t.content.appendChild(e),t}})},function(t,e,i){"use strict";i(45),i(92),i(146),i(66);var a=i(32),n=i(60),r=i(109),o=i(57),s=i(6),l=i(36);const c=i(5).c`
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
`;c.setAttribute("strip-whitespace",""),Object(s.a)({_template:c,is:"paper-slider",behaviors:[a.a,n.a,o.a,r.a],properties:{value:{type:Number,value:0},snaps:{type:Boolean,value:!1,notify:!0},pin:{type:Boolean,value:!1,notify:!0},secondaryProgress:{type:Number,value:0,notify:!0,observer:"_secondaryProgressChanged"},editable:{type:Boolean,value:!1},immediateValue:{type:Number,value:0,readOnly:!0,notify:!0},maxMarkers:{type:Number,value:0,notify:!0},expand:{type:Boolean,value:!1,readOnly:!0},ignoreBarTouch:{type:Boolean,value:!1},dragging:{type:Boolean,value:!1,readOnly:!0,notify:!0},transiting:{type:Boolean,value:!1,readOnly:!0},markers:{type:Array,readOnly:!0,value:function(){return[]}}},observers:["_updateKnob(value, min, max, snaps, step)","_valueChanged(value)","_immediateValueChanged(immediateValue)","_updateMarkers(maxMarkers, min, max, snaps)"],hostAttributes:{role:"slider",tabindex:0},keyBindings:{left:"_leftKey",right:"_rightKey","down pagedown home":"_decrementKey","up pageup end":"_incrementKey"},ready:function(){this.ignoreBarTouch&&Object(l.f)(this.$.sliderBar,"auto")},increment:function(){this.value=this._clampValue(this.value+this.step)},decrement:function(){this.value=this._clampValue(this.value-this.step)},_updateKnob:function(t,e,i,a,n){this.setAttribute("aria-valuemin",e),this.setAttribute("aria-valuemax",i),this.setAttribute("aria-valuenow",t),this._positionKnob(100*this._calcRatio(t))},_valueChanged:function(){this.fire("value-change",{composed:!0})},_immediateValueChanged:function(){this.dragging?this.fire("immediate-value-change",{composed:!0}):this.value=this.immediateValue},_secondaryProgressChanged:function(){this.secondaryProgress=this._clampValue(this.secondaryProgress)},_expandKnob:function(){this._setExpand(!0)},_resetKnob:function(){this.cancelDebouncer("expandKnob"),this._setExpand(!1)},_positionKnob:function(t){this._setImmediateValue(this._calcStep(this._calcKnobPosition(t))),this._setRatio(100*this._calcRatio(this.immediateValue)),this.$.sliderKnob.style.left=this.ratio+"%",this.dragging&&(this._knobstartx=this.ratio*this._w/100,this.translate3d(0,0,0,this.$.sliderKnob))},_calcKnobPosition:function(t){return(this.max-this.min)*t/100+this.min},_onTrack:function(t){switch(t.stopPropagation(),t.detail.state){case"start":this._trackStart(t);break;case"track":this._trackX(t);break;case"end":this._trackEnd()}},_trackStart:function(t){this._setTransiting(!1),this._w=this.$.sliderBar.offsetWidth,this._x=this.ratio*this._w/100,this._startx=this._x,this._knobstartx=this._startx,this._minx=-this._startx,this._maxx=this._w-this._startx,this.$.sliderKnob.classList.add("dragging"),this._setDragging(!0)},_trackX:function(t){this.dragging||this._trackStart(t);var e=this._isRTL?-1:1,i=Math.min(this._maxx,Math.max(this._minx,t.detail.dx*e));this._x=this._startx+i;var a=this._calcStep(this._calcKnobPosition(this._x/this._w*100));this._setImmediateValue(a);var n=this._calcRatio(this.immediateValue)*this._w-this._knobstartx;this.translate3d(n+"px",0,0,this.$.sliderKnob)},_trackEnd:function(){var t=this.$.sliderKnob.style;this.$.sliderKnob.classList.remove("dragging"),this._setDragging(!1),this._resetKnob(),this.value=this.immediateValue,t.transform=t.webkitTransform="",this.fire("change",{composed:!0})},_knobdown:function(t){this._expandKnob(),t.preventDefault(),this.focus()},_bartrack:function(t){this._allowBarEvent(t)&&this._onTrack(t)},_barclick:function(t){this._w=this.$.sliderBar.offsetWidth;var e=this.$.sliderBar.getBoundingClientRect(),i=(t.detail.x-e.left)/this._w*100;this._isRTL&&(i=100-i);var a=this.ratio;this._setTransiting(!0),this._positionKnob(i),a===this.ratio&&this._setTransiting(!1),this.async(function(){this.fire("change",{composed:!0})}),t.preventDefault(),this.focus()},_bardown:function(t){this._allowBarEvent(t)&&(this.debounce("expandKnob",this._expandKnob,60),this._barclick(t))},_knobTransitionEnd:function(t){t.target===this.$.sliderKnob&&this._setTransiting(!1)},_updateMarkers:function(t,e,i,a){a||this._setMarkers([]);var n=Math.round((i-e)/this.step);n>t&&(n=t),(n<0||!isFinite(n))&&(n=0),this._setMarkers(new Array(n))},_mergeClasses:function(t){return Object.keys(t).filter(function(e){return t[e]}).join(" ")},_getClassNames:function(){return this._mergeClasses({disabled:this.disabled,pin:this.pin,snaps:this.snaps,ring:this.immediateValue<=this.min,expand:this.expand,dragging:this.dragging,transiting:this.transiting,editable:this.editable})},_allowBarEvent:function(t){return!this.ignoreBarTouch||t.detail.sourceEvent instanceof MouseEvent},get _isRTL(){return void 0===this.__isRTL&&(this.__isRTL="rtl"===window.getComputedStyle(this).direction),this.__isRTL},_leftKey:function(t){this._isRTL?this._incrementKey(t):this._decrementKey(t)},_rightKey:function(t){this._isRTL?this._decrementKey(t):this._incrementKey(t)},_incrementKey:function(t){this.disabled||("end"===t.detail.key?this.value=this.max:this.increment(),this.fire("change"),t.preventDefault())},_decrementKey:function(t){this.disabled||("home"===t.detail.key?this.value=this.min:this.decrement(),this.fire("change"),t.preventDefault())},_changeValue:function(t){this.value=t.target.value,this.fire("change",{composed:!0})},_inputKeyDown:function(t){t.stopPropagation()},_createRipple:function(){return this._rippleContainer=this.$.sliderKnob,o.b._createRipple.call(this)},_focusedChanged:function(t){t&&this.ensureRipple(),this.hasRipple()&&(this._ripple.style.display=t?"":"none",this._ripple.holdDown=t)}})},function(t,e,i){"use strict";i(5),i(45),i(66);var a=i(109),n=i(6),r=i(4);Object(n.a)({_template:r.a`
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
`,is:"paper-progress",behaviors:[a.a],properties:{secondaryProgress:{type:Number,value:0},secondaryRatio:{type:Number,value:0,readOnly:!0},indeterminate:{type:Boolean,value:!1,observer:"_toggleIndeterminate"},disabled:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_disabledChanged"}},observers:["_progressChanged(secondaryProgress, value, min, max, indeterminate)"],hostAttributes:{role:"progressbar"},_toggleIndeterminate:function(t){this.toggleClass("indeterminate",t,this.$.primaryProgress)},_transformProgress:function(t,e){var i="scaleX("+e/100+")";t.style.transform=t.style.webkitTransform=i},_mainRatioChanged:function(t){this._transformProgress(this.$.primaryProgress,t)},_progressChanged:function(t,e,i,a,n){t=this._clampValue(t),e=this._clampValue(e);var r=100*this._calcRatio(t),o=100*this._calcRatio(e);this._setSecondaryRatio(r),this._transformProgress(this.$.secondaryProgress,r),this._transformProgress(this.$.primaryProgress,o),this.secondaryProgress=t,n?this.removeAttribute("aria-valuenow"):this.setAttribute("aria-valuenow",e),this.setAttribute("aria-valuemin",i),this.setAttribute("aria-valuemax",a)},_disabledChanged:function(t){this.setAttribute("aria-disabled",t?"true":"false")},_hideSecondaryProgress:function(t){return 0===t}})},function(t,e,i){"use strict";i(5),i(42);var a=i(124),n=i(57),r=i(6),o=i(4),s=i(67);const l=o.a`<style>
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

<div id="checkboxLabel"><slot></slot></div>`;l.setAttribute("strip-whitespace",""),Object(r.a)({_template:l,is:"paper-checkbox",behaviors:[a.a],hostAttributes:{role:"checkbox","aria-checked":!1,tabindex:0},properties:{ariaActiveAttribute:{type:String,value:"aria-checked"}},attached:function(){Object(s.a)(this,function(){if("-1px"===this.getComputedStyleValue("--calculated-paper-checkbox-ink-size").trim()){var t=this.getComputedStyleValue("--calculated-paper-checkbox-size").trim(),e="px",i=t.match(/[A-Za-z]+$/);null!==i&&(e=i[0]);var a=parseFloat(t),n=8/3*a;"px"===e&&(n=Math.floor(n))%2!=a%2&&n++,this.updateStyles({"--paper-checkbox-ink-size":n+e})}})},_computeCheckboxClass:function(t,e){var i="";return t&&(i+="checked "),e&&(i+="invalid"),i},_computeCheckmarkClass:function(t){return t?"":"hidden"},_createRipple:function(){return this._rippleContainer=this.$.checkboxContainer,n.b._createRipple.call(this)}})},,function(t,e,i){"use strict";const a=document.createElement("template");a.setAttribute("style","display: none;"),a.innerHTML="<dom-module id=\"paper-spinner-styles\">\n  <template>\n    <style>\n      /*\n      /**************************/\n      /* STYLES FOR THE SPINNER */\n      /**************************/\n\n      /*\n       * Constants:\n       *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)\n       *      ARCTIME     = 1333ms (time it takes to expand and contract arc)\n       *      ARCSTARTROT = 216 degrees (how much the start location of the arc\n       *                                should rotate each time, 216 gives us a\n       *                                5 pointed star shape (it's 360/5 * 3).\n       *                                For a 7 pointed star, we might do\n       *                                360/7 * 3 = 154.286)\n       *      SHRINK_TIME = 400ms\n       */\n\n      :host {\n        display: inline-block;\n        position: relative;\n        width: 28px;\n        height: 28px;\n\n        /* 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */\n        --paper-spinner-container-rotation-duration: 1568ms;\n\n        /* ARCTIME */\n        --paper-spinner-expand-contract-duration: 1333ms;\n\n        /* 4 * ARCTIME */\n        --paper-spinner-full-cycle-duration: 5332ms;\n\n        /* SHRINK_TIME */\n        --paper-spinner-cooldown-duration: 400ms;\n      }\n\n      #spinnerContainer {\n        width: 100%;\n        height: 100%;\n\n        /* The spinner does not have any contents that would have to be\n         * flipped if the direction changes. Always use ltr so that the\n         * style works out correctly in both cases. */\n        direction: ltr;\n      }\n\n      #spinnerContainer.active {\n        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;\n        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;\n      }\n\n      @-webkit-keyframes container-rotate {\n        to { -webkit-transform: rotate(360deg) }\n      }\n\n      @keyframes container-rotate {\n        to { transform: rotate(360deg) }\n      }\n\n      .spinner-layer {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        white-space: nowrap;\n        color: var(--paper-spinner-color, var(--google-blue-500));\n      }\n\n      .layer-1 {\n        color: var(--paper-spinner-layer-1-color, var(--google-blue-500));\n      }\n\n      .layer-2 {\n        color: var(--paper-spinner-layer-2-color, var(--google-red-500));\n      }\n\n      .layer-3 {\n        color: var(--paper-spinner-layer-3-color, var(--google-yellow-500));\n      }\n\n      .layer-4 {\n        color: var(--paper-spinner-layer-4-color, var(--google-green-500));\n      }\n\n      /**\n       * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):\n       *\n       * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't\n       * guarantee that the animation will start _exactly_ after that value. So we avoid using\n       * animation-delay and instead set custom keyframes for each color (as layer-2undant as it\n       * seems).\n       */\n      .active .spinner-layer {\n        -webkit-animation-name: fill-unfill-rotate;\n        -webkit-animation-duration: var(--paper-spinner-full-cycle-duration);\n        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        -webkit-animation-iteration-count: infinite;\n        animation-name: fill-unfill-rotate;\n        animation-duration: var(--paper-spinner-full-cycle-duration);\n        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation-iteration-count: infinite;\n        opacity: 1;\n      }\n\n      .active .spinner-layer.layer-1 {\n        -webkit-animation-name: fill-unfill-rotate, layer-1-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-1-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-2 {\n        -webkit-animation-name: fill-unfill-rotate, layer-2-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-2-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-3 {\n        -webkit-animation-name: fill-unfill-rotate, layer-3-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-3-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-4 {\n        -webkit-animation-name: fill-unfill-rotate, layer-4-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-4-fade-in-out;\n      }\n\n      @-webkit-keyframes fill-unfill-rotate {\n        12.5% { -webkit-transform: rotate(135deg) } /* 0.5 * ARCSIZE */\n        25%   { -webkit-transform: rotate(270deg) } /* 1   * ARCSIZE */\n        37.5% { -webkit-transform: rotate(405deg) } /* 1.5 * ARCSIZE */\n        50%   { -webkit-transform: rotate(540deg) } /* 2   * ARCSIZE */\n        62.5% { -webkit-transform: rotate(675deg) } /* 2.5 * ARCSIZE */\n        75%   { -webkit-transform: rotate(810deg) } /* 3   * ARCSIZE */\n        87.5% { -webkit-transform: rotate(945deg) } /* 3.5 * ARCSIZE */\n        to    { -webkit-transform: rotate(1080deg) } /* 4   * ARCSIZE */\n      }\n\n      @keyframes fill-unfill-rotate {\n        12.5% { transform: rotate(135deg) } /* 0.5 * ARCSIZE */\n        25%   { transform: rotate(270deg) } /* 1   * ARCSIZE */\n        37.5% { transform: rotate(405deg) } /* 1.5 * ARCSIZE */\n        50%   { transform: rotate(540deg) } /* 2   * ARCSIZE */\n        62.5% { transform: rotate(675deg) } /* 2.5 * ARCSIZE */\n        75%   { transform: rotate(810deg) } /* 3   * ARCSIZE */\n        87.5% { transform: rotate(945deg) } /* 3.5 * ARCSIZE */\n        to    { transform: rotate(1080deg) } /* 4   * ARCSIZE */\n      }\n\n      @-webkit-keyframes layer-1-fade-in-out {\n        0% { opacity: 1 }\n        25% { opacity: 1 }\n        26% { opacity: 0 }\n        89% { opacity: 0 }\n        90% { opacity: 1 }\n        to { opacity: 1 }\n      }\n\n      @keyframes layer-1-fade-in-out {\n        0% { opacity: 1 }\n        25% { opacity: 1 }\n        26% { opacity: 0 }\n        89% { opacity: 0 }\n        90% { opacity: 1 }\n        to { opacity: 1 }\n      }\n\n      @-webkit-keyframes layer-2-fade-in-out {\n        0% { opacity: 0 }\n        15% { opacity: 0 }\n        25% { opacity: 1 }\n        50% { opacity: 1 }\n        51% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-2-fade-in-out {\n        0% { opacity: 0 }\n        15% { opacity: 0 }\n        25% { opacity: 1 }\n        50% { opacity: 1 }\n        51% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @-webkit-keyframes layer-3-fade-in-out {\n        0% { opacity: 0 }\n        40% { opacity: 0 }\n        50% { opacity: 1 }\n        75% { opacity: 1 }\n        76% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-3-fade-in-out {\n        0% { opacity: 0 }\n        40% { opacity: 0 }\n        50% { opacity: 1 }\n        75% { opacity: 1 }\n        76% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @-webkit-keyframes layer-4-fade-in-out {\n        0% { opacity: 0 }\n        65% { opacity: 0 }\n        75% { opacity: 1 }\n        90% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-4-fade-in-out {\n        0% { opacity: 0 }\n        65% { opacity: 0 }\n        75% { opacity: 1 }\n        90% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      .circle-clipper {\n        display: inline-block;\n        position: relative;\n        width: 50%;\n        height: 100%;\n        overflow: hidden;\n      }\n\n      /**\n       * Patch the gap that appear between the two adjacent div.circle-clipper while the\n       * spinner is rotating (appears on Chrome 50, Safari 9.1.1, and Edge).\n       */\n      .spinner-layer::after {\n        content: '';\n        left: 45%;\n        width: 10%;\n        border-top-style: solid;\n      }\n\n      .spinner-layer::after,\n      .circle-clipper .circle {\n        box-sizing: border-box;\n        position: absolute;\n        top: 0;\n        border-width: var(--paper-spinner-stroke-width, 3px);\n        border-radius: 50%;\n      }\n\n      .circle-clipper .circle {\n        bottom: 0;\n        width: 200%;\n        border-style: solid;\n        border-bottom-color: transparent !important;\n      }\n\n      .circle-clipper.left .circle {\n        left: 0;\n        border-right-color: transparent !important;\n        -webkit-transform: rotate(129deg);\n        transform: rotate(129deg);\n      }\n\n      .circle-clipper.right .circle {\n        left: -100%;\n        border-left-color: transparent !important;\n        -webkit-transform: rotate(-129deg);\n        transform: rotate(-129deg);\n      }\n\n      .active .gap-patch::after,\n      .active .circle-clipper .circle {\n        -webkit-animation-duration: var(--paper-spinner-expand-contract-duration);\n        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        -webkit-animation-iteration-count: infinite;\n        animation-duration: var(--paper-spinner-expand-contract-duration);\n        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation-iteration-count: infinite;\n      }\n\n      .active .circle-clipper.left .circle {\n        -webkit-animation-name: left-spin;\n        animation-name: left-spin;\n      }\n\n      .active .circle-clipper.right .circle {\n        -webkit-animation-name: right-spin;\n        animation-name: right-spin;\n      }\n\n      @-webkit-keyframes left-spin {\n        0% { -webkit-transform: rotate(130deg) }\n        50% { -webkit-transform: rotate(-5deg) }\n        to { -webkit-transform: rotate(130deg) }\n      }\n\n      @keyframes left-spin {\n        0% { transform: rotate(130deg) }\n        50% { transform: rotate(-5deg) }\n        to { transform: rotate(130deg) }\n      }\n\n      @-webkit-keyframes right-spin {\n        0% { -webkit-transform: rotate(-130deg) }\n        50% { -webkit-transform: rotate(5deg) }\n        to { -webkit-transform: rotate(-130deg) }\n      }\n\n      @keyframes right-spin {\n        0% { transform: rotate(-130deg) }\n        50% { transform: rotate(5deg) }\n        to { transform: rotate(-130deg) }\n      }\n\n      #spinnerContainer.cooldown {\n        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);\n      }\n\n      @-webkit-keyframes fade-out {\n        0% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      @keyframes fade-out {\n        0% { opacity: 1 }\n        to { opacity: 0 }\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(a.content)},,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";var a=i(215);e.a=function(t){return void 0===t.attributes.friendly_name?Object(a.a)(t.entity_id).replace(/_/g," "):t.attributes.friendly_name||""}},function(t,e,i){"use strict";var a=i(9);e.a=Object(a.a)(t=>(class extends t{static get properties(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}__computeLocalize(t){return t}}))},function(t,e,i){"use strict";i.d(e,"a",function(){return o});var a=i(0),n=(i(108),customElements.get("iron-icon")),r=!1,o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a.d(e,t),e.prototype.listen=function(e,a,n){t.prototype.listen.call(this,e,a,n),r||"mdi"!==this._iconsetName||(r=!0,i.e(50).then(i.bind(null,230)))},e}(n);customElements.define("ha-icon",o)},,function(t,e,i){"use strict";i(5);const a=i(4).a`
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
`;a.setAttribute("style","display: none;"),document.head.appendChild(a.content)},,,,,function(t,e,i){"use strict";var a,n,r,o=i(0),s=i(1),l=(i(169),i(180)),c=i(198),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o.d(e,t),e.prototype.render=function(){var t=this.stateObj;return t?Object(s.e)(n||(n=o.f(['\n      <ha-icon\n        id="icon"\n        data-domain=',"\n        data-state=","\n        .icon=","\n      ></ha-icon>\n    "],['\n      <ha-icon\n        id="icon"\n        data-domain=',"\n        data-state=","\n        .icon=","\n      ></ha-icon>\n    "])),Object(l.a)(t),t.state,this.overrideIcon||Object(c.a)(t)):Object(s.e)(a||(a=o.f([""],[""])))},e.prototype.updated=function(t){if(t.has("stateObj")&&this.stateObj){var e=this.stateObj,i={color:"",filter:""},a={backgroundImage:""};if(e)if(e.attributes.entity_picture&&!this.overrideIcon||this.overrideImage){var n=this.overrideImage||e.attributes.entity_picture;this.hass&&(n=this.hass.hassUrl(n)),a.backgroundImage="url("+n+")",i.display="none"}else{if(e.attributes.hs_color){var r=e.attributes.hs_color[0],o=e.attributes.hs_color[1];o>10&&(i.color="hsl("+r+", 100%, "+(100-o/2)+"%)")}if(e.attributes.brightness){var s=e.attributes.brightness;if("number"!=typeof s){var l="Type error: state-badge expected number, but type of "+e.entity_id+".attributes.brightness is "+typeof s+" ("+s+")";console.warn(l)}i.filter="brightness("+(s+245)/5+"%)"}}Object.assign(this._icon.style,i),Object.assign(this.style,a)}},Object.defineProperty(e,"styles",{get:function(){return Object(s.c)(r||(r=o.f(['\n      :host {\n        position: relative;\n        display: inline-block;\n        width: 40px;\n        color: var(--paper-item-icon-color, #44739e);\n        border-radius: 50%;\n        height: 40px;\n        text-align: center;\n        background-size: cover;\n        line-height: 40px;\n      }\n\n      ha-icon {\n        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;\n      }\n\n      /* Color the icon if light or sun is on */\n      ha-icon[data-domain="light"][data-state="on"],\n      ha-icon[data-domain="switch"][data-state="on"],\n      ha-icon[data-domain="binary_sensor"][data-state="on"],\n      ha-icon[data-domain="fan"][data-state="on"],\n      ha-icon[data-domain="sun"][data-state="above_horizon"] {\n        color: var(--paper-item-icon-active-color, #fdd835);\n      }\n\n      /* Color the icon if unavailable */\n      ha-icon[data-state="unavailable"] {\n        color: var(--state-icon-unavailable-color);\n      }\n    '],['\n      :host {\n        position: relative;\n        display: inline-block;\n        width: 40px;\n        color: var(--paper-item-icon-color, #44739e);\n        border-radius: 50%;\n        height: 40px;\n        text-align: center;\n        background-size: cover;\n        line-height: 40px;\n      }\n\n      ha-icon {\n        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;\n      }\n\n      /* Color the icon if light or sun is on */\n      ha-icon[data-domain="light"][data-state="on"],\n      ha-icon[data-domain="switch"][data-state="on"],\n      ha-icon[data-domain="binary_sensor"][data-state="on"],\n      ha-icon[data-domain="fan"][data-state="on"],\n      ha-icon[data-domain="sun"][data-state="above_horizon"] {\n        color: var(--paper-item-icon-active-color, #fdd835);\n      }\n\n      /* Color the icon if unavailable */\n      ha-icon[data-state="unavailable"] {\n        color: var(--state-icon-unavailable-color);\n      }\n    '])))},enumerable:!0,configurable:!0}),o.c([Object(s.f)()],e.prototype,"stateObj",void 0),o.c([Object(s.f)()],e.prototype,"overrideIcon",void 0),o.c([Object(s.f)()],e.prototype,"overrideImage",void 0),o.c([Object(s.g)("ha-icon")],e.prototype,"_icon",void 0),e}(s.a);customElements.define("state-badge",d)},,,function(t,e,i){"use strict";i.d(e,"b",function(){return r}),i.d(e,"a",function(){return o});i(5);var a=i(86),n=i(3);const r={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(t,e){e&&(t?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(t){this.closingReason=this.closingReason||{},this.closingReason.confirmed=t},_onDialogClick:function(t){for(var e=Object(n.a)(t).path,i=0,a=e.indexOf(this);i<a;i++){var r=e[i];if(r.hasAttribute&&(r.hasAttribute("dialog-dismiss")||r.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(r.hasAttribute("dialog-confirm")),this.close(),t.stopPropagation();break}}}},o=[a.a,r]},function(t,e,i){"use strict";i.d(e,"a",function(){return n});var a=i(119);function n(t){return Object(a.a)(t.entity_id)}},function(t,e,i){"use strict";i(5),i(45),i(42),i(54),i(85);const a=document.createElement("template");a.setAttribute("style","display: none;"),a.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(a.content)},,function(t,e,i){"use strict";i.d(e,"a",function(){return r});var a=i(118),n={alert:"hass:alert",alexa:"hass:amazon-alexa",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",google_assistant:"hass:google-assistant",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weather:"hass:weather-cloudy",weblink:"hass:open-in-new"};function r(t,e){if(t in n)return n[t];switch(t){case"alarm_control_panel":switch(e){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return e&&"off"===e?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===e?"hass:window-closed":"hass:window-open";case"lock":return e&&"unlocked"===e?"hass:lock-open":"hass:lock";case"media_player":return e&&"off"!==e&&"idle"!==e?"hass:cast-connected":"hass:cast";case"zwave":switch(e){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+t+" ("+e+")"),a.a}}},,,,function(t,e,i){"use strict";i.d(e,"a",function(){return a});var a=function(t,e,i){var a;return void 0===i&&(i=!1),function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=this,s=i&&!a;clearTimeout(a),a=setTimeout(function(){a=null,i||t.apply(o,n)},e),s&&t.apply(o,n)}}},function(t,e,i){"use strict";i.d(e,"a",function(){return a});var a=function(t,e){return 0!=(t.attributes.supported_features&e)}},,function(t,e,i){"use strict";var a=i(180),n=i(201),r=i(236),o=i(207);e.a=function(t,e,i){var s,l=Object(a.a)(e);if("binary_sensor"===l)e.attributes.device_class&&(s=t("state."+l+"."+e.attributes.device_class+"."+e.state)),s||(s=t("state."+l+".default."+e.state));else if(e.attributes.unit_of_measurement&&!["unknown","unavailable"].includes(e.state))s=e.state+" "+e.attributes.unit_of_measurement;else if("input_datetime"===l){var c=void 0;if(e.attributes.has_time)if(e.attributes.has_date)c=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day,e.attributes.hour,e.attributes.minute),s=Object(n.a)(c,i);else{var d=new Date;c=new Date(d.getFullYear(),d.getMonth(),d.getDay(),e.attributes.hour,e.attributes.minute),s=Object(o.a)(c,i)}else c=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day),s=Object(r.a)(c,i)}else s="zwave"===l?["initializing","dead"].includes(e.state)?t("state.zwave.query_stage."+e.state,"query_stage",e.attributes.query_stage):t("state.zwave.default."+e.state):t("state."+l+"."+e.state);return s||(s=t("state.default."+e.state)||t("component."+l+".state."+e.state)||e.state),s}},,function(t,e,i){"use strict";i(5),i(45),i(66),i(42);var a=i(124),n=i(68),r=i(6),o=i(36),s=i(4),l=i(67);const c=s.a`

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

  `;c.setAttribute("strip-whitespace",""),Object(r.a)({_template:c,is:"paper-toggle-button",behaviors:[a.a],hostAttributes:{role:"button","aria-pressed":"false",tabindex:0},properties:{},listeners:{track:"_ontrack"},attached:function(){Object(l.a)(this,function(){Object(o.f)(this,"pan-y")})},_ontrack:function(t){var e=t.detail;"start"===e.state?this._trackStart(e):"track"===e.state?this._trackMove(e):"end"===e.state&&this._trackEnd(e)},_trackStart:function(t){this._width=this.$.toggleBar.offsetWidth/2,this._trackChecked=this.checked,this.$.toggleButton.classList.add("dragging")},_trackMove:function(t){var e=t.dx;this._x=Math.min(this._width,Math.max(0,this._trackChecked?this._width+e:e)),this.translate3d(this._x+"px",0,0,this.$.toggleButton),this._userActivate(this._x>this._width/2)},_trackEnd:function(t){this.$.toggleButton.classList.remove("dragging"),this.transform("",this.$.toggleButton)},_createRipple:function(){this._rippleContainer=this.$.toggleButton;var t=n.a._createRipple();return t.id="ink",t.setAttribute("recenters",""),t.classList.add("circle","toggle-ink"),t}})},,,function(t,e,i){"use strict";var a=i(3),n=i(31),r=i(203),o=i(168);customElements.define("ha-relative-time",class extends(Object(o.a)(n.a)){static get properties(){return{hass:Object,datetime:{type:String,observer:"datetimeChanged"},datetimeObj:{type:Object,observer:"datetimeObjChanged"},parsedDateTime:Object}}constructor(){super(),this.updateRelative=this.updateRelative.bind(this)}connectedCallback(){super.connectedCallback(),this.updateInterval=setInterval(this.updateRelative,6e4)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.updateInterval)}datetimeChanged(t){this.parsedDateTime=t?new Date(t):null,this.updateRelative()}datetimeObjChanged(t){this.parsedDateTime=t,this.updateRelative()}updateRelative(){const t=Object(a.a)(this);this.parsedDateTime?t.innerHTML=Object(r.a)(this.parsedDateTime,this.localize):t.innerHTML=this.localize("ui.components.relative_time.never")}})},function(t,e,i){"use strict";i(5),i(45),i(42);var a=i(179),n=i(6),r=i(4);Object(n.a)({_template:r.a`
    <style>

      :host {
        display: block;
        @apply --layout-relative;
      }

      :host(.is-scrolled:not(:first-child))::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      .scrollable {
        padding: 0 24px;

        @apply --layout-scroll;
        @apply --paper-dialog-scrollable;
      }

      .fit {
        @apply --layout-fit;
      }
    </style>

    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">
      <slot></slot>
    </div>
`,is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget(),this.classList.add("no-padding")},attached:function(){this._ensureTarget(),requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",this.scrollTarget.scrollTop>0),this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight),this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement,this.dialogElement&&this.dialogElement.behaviors&&this.dialogElement.behaviors.indexOf(a.b)>=0?(this.dialogElement.sizingTarget=this.scrollTarget,this.scrollTarget.classList.remove("fit")):this.dialogElement&&this.scrollTarget.classList.add("fit")}})},,function(t,e,i){"use strict";var a=i(118),n=i(119),r=i(183);var o={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",signal_strength:"hass:wifi"};i.d(e,"a",function(){return l});var s={binary_sensor:function(t){var e=t.state&&"off"===t.state;switch(t.attributes.device_class){case"battery":return e?"hass:battery":"hass:battery-outline";case"cold":return e?"hass:thermometer":"hass:snowflake";case"connectivity":return e?"hass:server-network-off":"hass:server-network";case"door":return e?"hass:door-closed":"hass:door-open";case"garage_door":return e?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return e?"hass:shield-check":"hass:alert";case"heat":return e?"hass:thermometer":"hass:fire";case"light":return e?"hass:brightness-5":"hass:brightness-7";case"lock":return e?"hass:lock":"hass:lock-open";case"moisture":return e?"hass:water-off":"hass:water";case"motion":return e?"hass:walk":"hass:run";case"occupancy":return e?"hass:home-outline":"hass:home";case"opening":return e?"hass:square":"hass:square-outline";case"plug":return e?"hass:power-plug-off":"hass:power-plug";case"presence":return e?"hass:home-outline":"hass:home";case"sound":return e?"hass:music-note-off":"hass:music-note";case"vibration":return e?"hass:crop-portrait":"hass:vibrate";case"window":return e?"hass:window-closed":"hass:window-open";default:return e?"hass:radiobox-blank":"hass:checkbox-marked-circle"}},cover:function(t){var e="closed"!==t.state;switch(t.attributes.device_class){case"garage":return e?"hass:garage-open":"hass:garage";case"door":return e?"hass:door-open":"hass:door-closed";case"shutter":return e?"hass:window-shutter-open":"hass:window-shutter";case"blind":return e?"hass:blinds-open":"hass:blinds";case"window":return e?"hass:window-open":"hass:window-closed";default:return Object(r.a)("cover",t.state)}},sensor:function(t){var e=t.attributes.device_class;if(e&&e in o)return o[e];if("battery"===e){var i=Number(t.state);if(isNaN(i))return"hass:battery-unknown";var n=10*Math.round(i/10);return n>=100?"hass:battery":n<=0?"hass:battery-alert":"hass:battery-"+n}var s=t.attributes.unit_of_measurement;return s===a.j||s===a.k?"hass:thermometer":Object(r.a)("sensor")},input_datetime:function(t){return t.attributes.has_date?t.attributes.has_time?Object(r.a)("input_datetime"):"hass:calendar":"hass:clock"}};function l(t){if(!t)return a.a;if(t.attributes.icon)return t.attributes.icon;var e=Object(n.a)(t.entity_id);return e in s?s[e](t):Object(r.a)(e,t.state)}},,function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return p});var a=i(188);class n{constructor(t,e){this.hass=t,this.stateObj=e,this._attr=e.attributes,this._feat=this._attr.supported_features}get isFullyOpen(){return void 0!==this._attr.current_position?100===this._attr.current_position:"open"===this.stateObj.state}get isFullyClosed(){return void 0!==this._attr.current_position?0===this._attr.current_position:"closed"===this.stateObj.state}get isFullyOpenTilt(){return 100===this._attr.current_tilt_position}get isFullyClosedTilt(){return 0===this._attr.current_tilt_position}get isOpening(){return"opening"===this.stateObj.state}get isClosing(){return"closing"===this.stateObj.state}get supportsOpen(){return Object(a.a)(this.stateObj,1)}get supportsClose(){return Object(a.a)(this.stateObj,2)}get supportsSetPosition(){return Object(a.a)(this.stateObj,4)}get supportsStop(){return Object(a.a)(this.stateObj,8)}get supportsOpenTilt(){return Object(a.a)(this.stateObj,16)}get supportsCloseTilt(){return Object(a.a)(this.stateObj,32)}get supportsStopTilt(){return Object(a.a)(this.stateObj,64)}get supportsSetTiltPosition(){return Object(a.a)(this.stateObj,128)}get isTiltOnly(){const t=this.supportsOpen||this.supportsClose||this.supportsStop;return(this.supportsOpenTilt||this.supportsCloseTilt||this.supportsStopTilt)&&!t}openCover(){this.callService("open_cover")}closeCover(){this.callService("close_cover")}stopCover(){this.callService("stop_cover")}openCoverTilt(){this.callService("open_cover_tilt")}closeCoverTilt(){this.callService("close_cover_tilt")}stopCoverTilt(){this.callService("stop_cover_tilt")}setCoverPosition(t){this.callService("set_cover_position",{position:t})}setCoverTiltPosition(t){this.callService("set_cover_tilt_position",{tilt_position:t})}callService(t,e={}){e.entity_id=this.stateObj.entity_id,this.hass.callService("cover",t,e)}}const r=t=>Object(a.a)(t,1),o=t=>Object(a.a)(t,2),s=t=>Object(a.a)(t,8),l=t=>Object(a.a)(t,16),c=t=>Object(a.a)(t,32),d=t=>Object(a.a)(t,64);function p(t){const e=r(t)||o(t)||s(t);return(l(t)||c(t)||d(t))&&!e}},function(t,e,i){"use strict";var a=i(206);e.a=function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleString(e,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}:function(t){return a.a.format(t,"haDateTime")}},function(t,e,i){"use strict";var a=i(0),n=(i(140),function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a.d(e,t),e.prototype.ready=function(){var e=this;t.prototype.ready.call(this),setTimeout(function(){"rtl"===window.getComputedStyle(e).direction&&(e.style.textAlign="right")},100)},e}(customElements.get("paper-dropdown-menu")));customElements.define("ha-paper-dropdown-menu",n)},function(t,e,i){"use strict";i.d(e,"a",function(){return r});var a=[60,60,24,7],n=["second","minute","hour","day"];function r(t,e,i){void 0===i&&(i={});var r,o=((i.compareTime||new Date).getTime()-t.getTime())/1e3,s=o>=0?"past":"future";o=Math.abs(o);for(var l=0;l<a.length;l++){if(o<a[l]){o=Math.floor(o),r=e("ui.components.relative_time.duration."+n[l],"count",o);break}o/=a[l]}return void 0===r&&(r=e("ui.components.relative_time.duration.week","count",o=Math.floor(o))),!1===i.includeTense?r:e("ui.components.relative_time."+s,"time",r)}},,function(t,e,i){"use strict";var a,n,r,o,s=i(0),l=(i(107),i(192),i(118)),c=i(180),d=i(1),p=i(101),u=i(167),h=function(t){return void 0!==t&&!l.i.includes(t.state)},m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._isOn=!1,e}return s.d(e,t),e.prototype.render=function(){return this.stateObj?this.stateObj.attributes.assumed_state?Object(d.e)(n||(n=s.f(["\n        <paper-icon-button\n          aria-label=",'\n          icon="hass:flash-off"\n          @click=',"\n          ?state-active=","\n        ></paper-icon-button>\n        <paper-icon-button\n          aria-label=",'\n          icon="hass:flash"\n          @click=',"\n          ?state-active=","\n        ></paper-icon-button>\n      "],["\n        <paper-icon-button\n          aria-label=",'\n          icon="hass:flash-off"\n          @click=',"\n          ?state-active=","\n        ></paper-icon-button>\n        <paper-icon-button\n          aria-label=",'\n          icon="hass:flash"\n          @click=',"\n          ?state-active=","\n        ></paper-icon-button>\n      "])),"Turn "+Object(u.a)(this.stateObj)+" off",this._turnOff,!this._isOn,"Turn "+Object(u.a)(this.stateObj)+" on",this._turnOn,this._isOn):Object(d.e)(r||(r=s.f(["\n      <paper-toggle-button\n        aria-label=","\n        .checked=","\n        @change=","\n      ></paper-toggle-button>\n    "],["\n      <paper-toggle-button\n        aria-label=","\n        .checked=","\n        @change=","\n      ></paper-toggle-button>\n    "])),"Toggle "+Object(u.a)(this.stateObj)+" "+(this._isOn?"off":"on"),this._isOn,this._toggleChanged):Object(d.e)(a||(a=s.f(["\n        <paper-toggle-button disabled></paper-toggle-button>\n      "],["\n        <paper-toggle-button disabled></paper-toggle-button>\n      "])))},e.prototype.firstUpdated=function(e){t.prototype.firstUpdated.call(this,e),this.addEventListener("click",function(t){return t.stopPropagation()})},e.prototype.updated=function(t){t.has("stateObj")&&(this._isOn=h(this.stateObj))},e.prototype._toggleChanged=function(t){var e=t.target.checked;e!==this._isOn&&this._callService(e)},e.prototype._turnOn=function(){this._callService(!0)},e.prototype._turnOff=function(){this._callService(!1)},e.prototype._callService=function(t){return s.b(this,void 0,void 0,function(){var e,i,a,n,r=this;return s.e(this,function(o){switch(o.label){case 0:return this.hass&&this.stateObj?(Object(p.a)("light"),"lock"===(e=Object(c.a)(this.stateObj))?(i="lock",a=t?"unlock":"lock"):"cover"===e?(i="cover",a=t?"open_cover":"close_cover"):"group"===e?(i="homeassistant",a=t?"turn_on":"turn_off"):(i=e,a=t?"turn_on":"turn_off"),n=this.stateObj,this._isOn=t,[4,this.hass.callService(i,a,{entity_id:this.stateObj.entity_id})]):[2];case 1:return o.sent(),setTimeout(function(){return s.b(r,void 0,void 0,function(){return s.e(this,function(t){return this.stateObj===n&&(this._isOn=h(this.stateObj)),[2]})})},2e3),[2]}})})},Object.defineProperty(e,"styles",{get:function(){return Object(d.c)(o||(o=s.f(["\n      :host {\n        white-space: nowrap;\n        min-width: 38px;\n      }\n      paper-icon-button {\n        color: var(\n          --paper-icon-button-inactive-color,\n          var(--primary-text-color)\n        );\n        transition: color 0.5s;\n      }\n      paper-icon-button[state-active] {\n        color: var(--paper-icon-button-active-color, var(--primary-color));\n      }\n      paper-toggle-button {\n        cursor: pointer;\n        --paper-toggle-button-label-spacing: 0;\n        padding: 13px 5px;\n        margin: -4px -5px;\n      }\n    "],["\n      :host {\n        white-space: nowrap;\n        min-width: 38px;\n      }\n      paper-icon-button {\n        color: var(\n          --paper-icon-button-inactive-color,\n          var(--primary-text-color)\n        );\n        transition: color 0.5s;\n      }\n      paper-icon-button[state-active] {\n        color: var(--paper-icon-button-active-color, var(--primary-color));\n      }\n      paper-toggle-button {\n        cursor: pointer;\n        --paper-toggle-button-label-spacing: 0;\n        padding: 13px 5px;\n        margin: -4px -5px;\n      }\n    "])))},enumerable:!0,configurable:!0}),s.c([Object(d.f)()],e.prototype,"stateObj",void 0),s.c([Object(d.f)()],e.prototype,"_isOn",void 0),e}(d.a);customElements.define("ha-entity-toggle",m)},function(t,e,i){"use strict";var a={},n=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,r="[^\\s]+",o=/\[([^]*?)\]/gm,s=function(){};function l(t,e){for(var i=[],a=0,n=t.length;a<n;a++)i.push(t[a].substr(0,e));return i}function c(t){return function(e,i,a){var n=a[t].indexOf(i.charAt(0).toUpperCase()+i.substr(1).toLowerCase());~n&&(e.month=n)}}function d(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}var p=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],u=["January","February","March","April","May","June","July","August","September","October","November","December"],h=l(u,3),m=l(p,3);a.i18n={dayNamesShort:m,dayNames:p,monthNamesShort:h,monthNames:u,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10)*t%10]}};var b={D:function(t){return t.getDate()},DD:function(t){return d(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return t.getDay()},dd:function(t){return d(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return t.getMonth()+1},MM:function(t){return d(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return d(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return d(t.getFullYear(),4)},h:function(t){return t.getHours()%12||12},hh:function(t){return d(t.getHours()%12||12)},H:function(t){return t.getHours()},HH:function(t){return d(t.getHours())},m:function(t){return t.getMinutes()},mm:function(t){return d(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return d(t.getSeconds())},S:function(t){return Math.round(t.getMilliseconds()/100)},SS:function(t){return d(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return d(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+d(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)}},g={D:["\\d\\d?",function(t,e){t.day=e}],Do:["\\d\\d?"+r,function(t,e){t.day=parseInt(e,10)}],M:["\\d\\d?",function(t,e){t.month=e-1}],YY:["\\d\\d?",function(t,e){var i=+(""+(new Date).getFullYear()).substr(0,2);t.year=""+(e>68?i-1:i)+e}],h:["\\d\\d?",function(t,e){t.hour=e}],m:["\\d\\d?",function(t,e){t.minute=e}],s:["\\d\\d?",function(t,e){t.second=e}],YYYY:["\\d{4}",function(t,e){t.year=e}],S:["\\d",function(t,e){t.millisecond=100*e}],SS:["\\d{2}",function(t,e){t.millisecond=10*e}],SSS:["\\d{3}",function(t,e){t.millisecond=e}],d:["\\d\\d?",s],ddd:[r,s],MMM:[r,c("monthNamesShort")],MMMM:[r,c("monthNames")],a:[r,function(t,e,i){var a=e.toLowerCase();a===i.amPm[0]?t.isPm=!1:a===i.amPm[1]&&(t.isPm=!0)}],ZZ:["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",function(t,e){var i,a=(e+"").match(/([+-]|\d\d)/gi);a&&(i=60*a[1]+parseInt(a[2],10),t.timezoneOffset="+"===a[0]?i:-i)}]};g.dd=g.d,g.dddd=g.ddd,g.DD=g.D,g.mm=g.m,g.hh=g.H=g.HH=g.h,g.MM=g.M,g.ss=g.s,g.A=g.a,a.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},a.format=function(t,e,i){var r=i||a.i18n;if("number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date in fecha.format");e=a.masks[e]||e||a.masks.default;var s=[];return(e=(e=e.replace(o,function(t,e){return s.push(e),"@@@"})).replace(n,function(e){return e in b?b[e](t,r):e.slice(1,e.length-1)})).replace(/@@@/g,function(){return s.shift()})},a.parse=function(t,e,i){var r=i||a.i18n;if("string"!=typeof e)throw new Error("Invalid format in fecha.parse");if(e=a.masks[e]||e,t.length>1e3)return null;var s={},l=[],c=[];e=e.replace(o,function(t,e){return c.push(e),"@@@"});var d,p=(d=e,d.replace(/[|\\{()[^$+*?.-]/g,"\\$&")).replace(n,function(t){if(g[t]){var e=g[t];return l.push(e[1]),"("+e[0]+")"}return t});p=p.replace(/@@@/g,function(){return c.shift()});var u=t.match(new RegExp(p,"i"));if(!u)return null;for(var h=1;h<u.length;h++)l[h-1](s,u[h],r);var m,b=new Date;return!0===s.isPm&&null!=s.hour&&12!=+s.hour?s.hour=+s.hour+12:!1===s.isPm&&12==+s.hour&&(s.hour=0),null!=s.timezoneOffset?(s.minute=+(s.minute||0)-+s.timezoneOffset,m=new Date(Date.UTC(s.year||b.getFullYear(),s.month||0,s.day||1,s.hour||0,s.minute||0,s.second||0,s.millisecond||0))):m=new Date(s.year||b.getFullYear(),s.month||0,s.day||1,s.hour||0,s.minute||0,s.second||0,s.millisecond||0),m},e.a=a},function(t,e,i){"use strict";var a=i(206);e.a=function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleTimeString(e,{hour:"numeric",minute:"2-digit"})}:function(t){return a.a.format(t,"shortTime")}},,,,,,,,function(t,e,i){"use strict";function a(t){return t.substr(t.indexOf(".")+1)}i.d(e,"a",function(){return a})},function(t,e,i){"use strict";i.d(e,"c",function(){return l}),i.d(e,"b",function(){return c}),i.d(e,"a",function(){return p});var a=i(167),n=i(180),r=i(190),o=["climate","water_heater"],s=["temperature","current_temperature","target_temp_low","target_temp_high","hvac_action"],l=function(t,e,i,a,n){void 0===n&&(n=!1);var r="history/period";return i&&(r+="/"+i.toISOString()),r+="?filter_entity_id="+e,a&&(r+="&end_time="+a.toISOString()),n&&(r+="&skip_initial_state"),t.callApi("GET",r)},c=function(t,e,i){return t.callApi("GET","history/period/"+e.toISOString()+"?end_time="+i.toISOString())},d=function(t,e){return t.state===e.state&&(!t.attributes||s.every(function(i){return t.attributes[i]===e.attributes[i]}))},p=function(t,e,i,l){var c={},p=[];return e?(e.forEach(function(e){if(0!==e.length){var o,s=e.find(function(t){return"unit_of_measurement"in t.attributes});s?o=s.attributes.unit_of_measurement:"climate"===Object(n.a)(e[0])?o=t.config.unit_system.temperature:"water_heater"===Object(n.a)(e[0])&&(o=t.config.unit_system.temperature),o?o in c?c[o].push(e):c[o]=[e]:p.push(function(t,e,i){for(var n=[],o=0,s=i;o<s.length;o++){var l=s[o];n.length>0&&l.state===n[n.length-1].state||n.push({state_localize:Object(r.a)(t,l,e),state:l.state,last_changed:l.last_changed})}return{name:Object(a.a)(i[0]),entity_id:i[0].entity_id,data:n}}(i,l,e))}}),{line:Object.keys(c).map(function(t){return function(t,e){for(var i=[],r=0,l=e;r<l.length;r++){for(var c=l[r],p=c[c.length-1],u=Object(n.a)(p),h=[],m=0,b=c;m<b.length;m++){var g=b[m],f=void 0;if(o.includes(u)){f={state:g.state,last_changed:g.last_updated,attributes:{}};for(var v=0,y=s;v<y.length;v++){var _=y[v];_ in g.attributes&&(f.attributes[_]=g.attributes[_])}}else f=g;h.length>1&&d(f,h[h.length-1])&&d(f,h[h.length-2])||h.push(f)}i.push({domain:u,name:Object(a.a)(p),entity_id:p.entity_id,states:h})}return{unit:t,identifier:e.map(function(t){return t[0].entity_id}).join(""),data:i}}(t,c[t])}),timeline:p}):{line:[],timeline:[]}}},,,,,,,function(t,e,i){"use strict";function a(t,e){return t&&-1!==t.config.components.indexOf(e)}i.d(e,"a",function(){return a})},,function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"g",function(){return n}),i.d(e,"h",function(){return r}),i.d(e,"f",function(){return o}),i.d(e,"c",function(){return s}),i.d(e,"d",function(){return l}),i.d(e,"e",function(){return c}),i.d(e,"b",function(){return d}),i.d(e,"i",function(){return u});var a="none",n=1,r=2,o=4,s=8,l=16,c=32,d=64,p={auto:1,heat_cool:2,heat:3,cool:4,dry:5,fan_only:6,off:7},u=function(t,e){return p[t]-p[e]}},function(t,e,i){"use strict";i(5);var a=i(6),n=i(4),r=i(20);Object(a.a)({_template:n.a`
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
`,is:"iron-image",properties:{src:{type:String,value:""},alt:{type:String,value:null},crossorigin:{type:String,value:null},preventLoad:{type:Boolean,value:!1},sizing:{type:String,value:null,reflectToAttribute:!0},position:{type:String,value:"center"},preload:{type:Boolean,value:!1},placeholder:{type:String,value:null,observer:"_placeholderChanged"},fade:{type:Boolean,value:!1},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1},width:{observer:"_widthChanged",type:Number,value:null},height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){this.$.img.src===this._resolveSrc(this.src)&&(this._setLoading(!1),this._setLoaded(!0),this._setError(!1))},_imgOnError:function(){this.$.img.src===this._resolveSrc(this.src)&&(this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",this._setLoading(!1),this._setLoaded(!1),this._setError(!0))},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){return null!==this.alt?this.alt:""===this.src?"":this._resolveSrc(this.src).replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(t,e){var i=this._resolveSrc(t);i!==this._resolvedSrc&&(this._resolvedSrc="",this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",""===t||e?(this._setLoading(!1),this._setLoaded(!1),this._setError(!1)):(this._resolvedSrc=i,this.$.img.src=this._resolvedSrc,this.$.sizedImgDiv.style.backgroundImage='url("'+this._resolvedSrc+'")',this._setLoading(!0),this._setLoaded(!1),this._setError(!1)))},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?'url("'+this.placeholder+'")':""},_transformChanged:function(){var t=this.$.sizedImgDiv.style,e=this.$.placeholder.style;t.backgroundSize=e.backgroundSize=this.sizing,t.backgroundPosition=e.backgroundPosition=this.sizing?this.position:"",t.backgroundRepeat=e.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(t){var e=Object(r.c)(t,this.$.baseURIAnchor.href);return e.length>=2&&"/"===e[0]&&"/"!==e[1]&&(e=(location.origin||location.protocol+"//"+location.host)+e),e}})},function(t,e,i){"use strict";i(5),i(85);const a=i(4).a`
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
</dom-module>`;a.setAttribute("style","display: none;"),document.head.appendChild(a.content)},,,,function(t,e,i){"use strict";i.d(e,"a",function(){return n});var a=function(t){return t<10?"0"+t:t};function n(t){var e=Math.floor(t/3600),i=Math.floor(t%3600/60),n=Math.floor(t%3600%60);return e>0?e+":"+a(i)+":"+a(n):i>0?i+":"+a(n):n>0?""+n:null}},,,,function(t,e,i){"use strict";i(171),i(107);var a=i(4),n=i(31),r=i(200);customElements.define("ha-cover-tilt-controls",class extends n.a{static get template(){return a.a`
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
    `}static get properties(){return{hass:{type:Object},stateObj:{type:Object},entityObj:{type:Object,computed:"computeEntityObj(hass, stateObj)"}}}computeEntityObj(t,e){return new r.a(t,e)}computeOpenDisabled(t,e){var i=!0===t.attributes.assumed_state;return e.isFullyOpenTilt&&!i}computeClosedDisabled(t,e){var i=!0===t.attributes.assumed_state;return e.isFullyClosedTilt&&!i}onOpenTiltTap(t){t.stopPropagation(),this.entityObj.openCoverTilt()}onCloseTiltTap(t){t.stopPropagation(),this.entityObj.closeCoverTilt()}onStopTiltTap(t){t.stopPropagation(),this.entityObj.stopCoverTilt()}})},function(t,e,i){"use strict";var a=i(206);e.a=function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleDateString(e,{year:"numeric",month:"long",day:"numeric"})}:function(t){return a.a.format(t,"mediumDate")}},function(t,e,i){"use strict";i.d(e,"a",function(){return n});var a=i(0),n=function(t,e,i,n,r){for(var o=[],s=5;s<arguments.length;s++)o[s-5]=arguments[s];return a.b(void 0,void 0,void 0,function(){var s,l,c;return a.e(this,function(a){return(s=n[t])||(s=n[t]={}),(l=s[r])?[2,l]:(c=i.apply(void 0,[n,r].concat(o)),s[r]=c,c.then(function(){return setTimeout(function(){s[r]=void 0},e)},function(){s[r]=void 0}),[2,c])})})}},function(t,e,i){"use strict";i.d(e,"a",function(){return n});var a=i(188);class n{constructor(t,e){this.hass=t,this.stateObj=e,this._attr=e.attributes,this._feat=this._attr.supported_features}get isOff(){return"off"===this.stateObj.state}get isIdle(){return"idle"===this.stateObj.state}get isMuted(){return this._attr.is_volume_muted}get isPaused(){return"paused"===this.stateObj.state}get isPlaying(){return"playing"===this.stateObj.state}get isMusic(){return"music"===this._attr.media_content_type}get isTVShow(){return"tvshow"===this._attr.media_content_type}get hasMediaControl(){return-1!==["playing","paused","unknown","on"].indexOf(this.stateObj.state)}get volumeSliderValue(){return 100*this._attr.volume_level}get showProgress(){return(this.isPlaying||this.isPaused)&&"media_duration"in this.stateObj.attributes&&"media_position"in this.stateObj.attributes&&"media_position_updated_at"in this.stateObj.attributes}get currentProgress(){var t=this._attr.media_position;return this.isPlaying&&(t+=(Date.now()-new Date(this._attr.media_position_updated_at).getTime())/1e3),t}get supportsPause(){return Object(a.a)(this.stateObj,1)}get supportsVolumeSet(){return Object(a.a)(this.stateObj,4)}get supportsVolumeMute(){return Object(a.a)(this.stateObj,8)}get supportsPreviousTrack(){return Object(a.a)(this.stateObj,16)}get supportsNextTrack(){return Object(a.a)(this.stateObj,32)}get supportsTurnOn(){return Object(a.a)(this.stateObj,128)}get supportsTurnOff(){return Object(a.a)(this.stateObj,256)}get supportsPlayMedia(){return Object(a.a)(this.stateObj,512)}get supportsVolumeButtons(){return Object(a.a)(this.stateObj,1024)}get supportsSelectSource(){return Object(a.a)(this.stateObj,2048)}get supportsSelectSoundMode(){return Object(a.a)(this.stateObj,65536)}get supportsPlay(){return Object(a.a)(this.stateObj,16384)}get primaryTitle(){return this._attr.media_title}get secondaryTitle(){if(this.isMusic)return this._attr.media_artist;if(this.isTVShow){var t=this._attr.media_series_title;return this._attr.media_season&&(t+=" S"+this._attr.media_season,this._attr.media_episode&&(t+="E"+this._attr.media_episode)),t}return this._attr.app_name?this._attr.app_name:""}get source(){return this._attr.source}get sourceList(){return this._attr.source_list}get soundMode(){return this._attr.sound_mode}get soundModeList(){return this._attr.sound_mode_list}mediaPlayPause(){this.callService("media_play_pause")}nextTrack(){this.callService("media_next_track")}playbackControl(){this.callService("media_play_pause")}previousTrack(){this.callService("media_previous_track")}setVolume(t){this.callService("volume_set",{volume_level:t})}togglePower(){this.isOff?this.turnOn():this.turnOff()}turnOff(){this.callService("turn_off")}turnOn(){this.callService("turn_on")}volumeDown(){this.callService("volume_down")}volumeMute(t){if(!this.supportsVolumeMute)throw new Error("Muting volume not supported");this.callService("volume_mute",{is_volume_muted:t})}volumeUp(){this.callService("volume_up")}selectSource(t){this.callService("select_source",{source:t})}selectSoundMode(t){this.callService("select_sound_mode",{sound_mode:t})}callService(t,e={}){e.entity_id=this.stateObj.entity_id,this.hass.callService("media_player",t,e)}}},function(t,e,i){"use strict";i.d(e,"a",function(){return o}),i.d(e,"b",function(){return s}),i.d(e,"e",function(){return l}),i.d(e,"d",function(){return d}),i.d(e,"c",function(){return p}),i.d(e,"f",function(){return u});var a=i(0),n=i(237),r=i(64),o=2,s=function(t){return"/api/camera_proxy_stream/"+t.entity_id+"?token="+t.attributes.access_token},l=function(t,e){return Object(n.a)("_cameraTmbUrl",9e3,c,t,e)},c=function(t,e){return a.b(void 0,void 0,void 0,function(){var i;return a.e(this,function(a){switch(a.label){case 0:return[4,Object(r.b)(t,"/api/camera_proxy/"+e)];case 1:return i=a.sent(),[2,t.hassUrl(i.path)]}})})},d=function(t,e,i){return a.b(void 0,void 0,void 0,function(){var n,r;return a.e(this,function(a){switch(a.label){case 0:return n={type:"camera/stream",entity_id:e},i&&(n.format=i),[4,t.callWS(n)];case 1:return(r=a.sent()).url=t.hassUrl(r.url),[2,r]}})})},p=function(t,e){return t.callWS({type:"camera/get_prefs",entity_id:e})},u=function(t,e,i){return t.callWS(a.a({type:"camera/update_prefs",entity_id:e},i))}},,,,function(t,e,i){"use strict";i(191);var a=i(4),n=i(31),r=i(22),o=i(94),s=(i(107),i(12)),l=i(72),c=i(207);let d=null;customElements.define("ha-chart-base",class extends(Object(l.b)([o.a],n.a)){static get template(){return a.a`
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
    `}get chart(){return this._chart}static get properties(){return{data:Object,identifier:String,rendered:{type:Boolean,notify:!0,value:!1,readOnly:!0},metas:{type:Array,value:()=>[]},tooltip:{type:Object,value:()=>({opacity:"0",left:"0",top:"0",xPadding:"5",yPadding:"3"})},unit:Object,rtl:{type:Boolean,reflectToAttribute:!0}}}static get observers(){return["onPropsChange(data)"]}connectedCallback(){super.connectedCallback(),this._isAttached=!0,this.onPropsChange(),this._resizeListener=()=>{this._debouncer=r.a.debounce(this._debouncer,s.d.after(10),()=>{this._isAttached&&this.resizeChart()})},"function"==typeof ResizeObserver?(this.resizeObserver=new ResizeObserver(t=>{t.forEach(()=>{this._resizeListener()})}),this.resizeObserver.observe(this.$.chartTarget)):this.addEventListener("iron-resize",this._resizeListener),null===d&&(d=Promise.all([i.e(75),i.e(48)]).then(i.bind(null,347))),d.then(t=>{this.ChartClass=t.default,this.onPropsChange()})}disconnectedCallback(){super.disconnectedCallback(),this._isAttached=!1,this.resizeObserver&&this.resizeObserver.unobserve(this.$.chartTarget),this.removeEventListener("iron-resize",this._resizeListener),void 0!==this._resizeTimer&&(clearInterval(this._resizeTimer),this._resizeTimer=void 0)}onPropsChange(){this._isAttached&&this.ChartClass&&this.data&&this.drawChart()}_customTooltips(t){if(0===t.opacity)return void this.set(["tooltip","opacity"],0);t.yAlign?this.set(["tooltip","yAlign"],t.yAlign):this.set(["tooltip","yAlign"],"no-transform");const e=t.title&&t.title[0]||"";this.set(["tooltip","title"],e);const i=t.body.map(t=>t.lines);t.body&&this.set(["tooltip","lines"],i.map((e,i)=>{const a=t.labelColors[i];return{color:a.borderColor,bgColor:a.backgroundColor,text:e.join("\n")}}));const a=this.$.chartTarget.clientWidth;let n=t.caretX;const r=this._chart.canvas.offsetTop+t.caretY;t.caretX+100>a?n=a-100:t.caretX<100&&(n=100),n+=this._chart.canvas.offsetLeft,this.tooltip={...this.tooltip,opacity:1,left:`${n}px`,top:`${r}px`}}_legendClick(t){(t=t||window.event).stopPropagation();let e=t.target||t.srcElement;for(;"LI"!==e.nodeName;)e=e.parentElement;const i=t.model.itemsIndex,a=this._chart.getDatasetMeta(i);a.hidden=null===a.hidden?!this._chart.data.datasets[i].hidden:null,this.set(["metas",i,"hidden"],this._chart.isDatasetVisible(i)?null:"hidden"),this._chart.update()}_drawLegend(){const t=this._chart,e=this._oldIdentifier&&this.identifier===this._oldIdentifier;this._oldIdentifier=this.identifier,this.set("metas",this._chart.data.datasets.map((i,a)=>({label:i.label,color:i.color,bgColor:i.backgroundColor,hidden:e&&a<this.metas.length?this.metas[a].hidden:!t.isDatasetVisible(a)})));let i=!1;if(e)for(let a=0;a<this.metas.length;a++){const e=t.getDatasetMeta(a);!!e.hidden!=!!this.metas[a].hidden&&(i=!0),e.hidden=!!this.metas[a].hidden||null}i&&t.update(),this.unit=this.data.unit}_formatTickValue(t,e,i){if(0===i.length)return t;const a=new Date(i[e].value);return Object(c.a)(a)}drawChart(){const t=this.data.data,e=this.$.chartCanvas;if(t.datasets&&t.datasets.length||this._chart){if("timeline"!==this.data.type&&t.datasets.length>0){const e=t.datasets.length,i=this.constructor.getColorList(e);for(let a=0;a<e;a++)t.datasets[a].borderColor=i[a].rgbString(),t.datasets[a].backgroundColor=i[a].alpha(.6).rgbaString()}if(this._chart)this._customTooltips({opacity:0}),this._chart.data=t,this._chart.update({duration:0}),this.isTimeline?this._chart.options.scales.yAxes[0].gridLines.display=t.length>1:!0===this.data.legend&&this._drawLegend(),this.resizeChart();else{if(!t.datasets)return;this._customTooltips({opacity:0});const i=[{afterRender:()=>this._setRendered(!0)}];let a={responsive:!0,maintainAspectRatio:!1,animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0,tooltips:{enabled:!1,custom:this._customTooltips.bind(this)},legend:{display:!1},line:{spanGaps:!0},elements:{font:"12px 'Roboto', 'sans-serif'"},ticks:{fontFamily:"'Roboto', 'sans-serif'"}};(a=Chart.helpers.merge(a,this.data.options)).scales.xAxes[0].ticks.callback=this._formatTickValue,"timeline"===this.data.type?(this.set("isTimeline",!0),void 0!==this.data.colors&&(this._colorFunc=this.constructor.getColorGenerator(this.data.colors.staticColors,this.data.colors.staticColorIndex)),void 0!==this._colorFunc&&(a.elements.colorFunction=this._colorFunc),1===t.datasets.length&&(a.scales.yAxes[0].ticks?a.scales.yAxes[0].ticks.display=!1:a.scales.yAxes[0].ticks={display:!1},a.scales.yAxes[0].gridLines?a.scales.yAxes[0].gridLines.display=!1:a.scales.yAxes[0].gridLines={display:!1}),this.$.chartTarget.style.height="50px"):this.$.chartTarget.style.height="160px";const n={type:this.data.type,data:this.data.data,options:a,plugins:i};this._chart=new this.ChartClass(e,n),!0!==this.isTimeline&&!0===this.data.legend&&this._drawLegend(),this.resizeChart()}}}resizeChart(){this._chart&&(void 0!==this._resizeTimer?(clearInterval(this._resizeTimer),this._resizeTimer=void 0,this._resizeChart()):this._resizeTimer=setInterval(this.resizeChart.bind(this),10))}_resizeChart(){const t=this.$.chartTarget,e=this.data.data;if(0===e.datasets.length)return;if(!this.isTimeline)return void this._chart.resize();const i=this._chart.chartArea.top,a=this._chart.chartArea.bottom,n=this._chart.canvas.clientHeight;if(a>0&&(this._axisHeight=n-a+i),!this._axisHeight)return t.style.height="50px",this._chart.resize(),void this.resizeChart();if(this._axisHeight){const i=30*e.datasets.length+this._axisHeight+"px";t.style.height!==i&&(t.style.height=i),this._chart.resize()}}static getColorList(t){let e=!1;t>10&&(e=!0,t=Math.ceil(t/2));const i=360/t,a=[];for(let n=0;n<t;n++)a[n]=Color().hsl(i*n,80,38),e&&(a[n+t]=Color().hsl(i*n,80,62));return a}static getColorGenerator(t,e){const i=["ff0029","66a61e","377eb8","984ea3","00d2d5","ff7f00","af8d00","7f80cd","b3e900","c42e60","a65628","f781bf","8dd3c7","bebada","fb8072","80b1d3","fdb462","fccde5","bc80bd","ffed6f","c4eaff","cf8c00","1b9e77","d95f02","e7298a","e6ab02","a6761d","0097ff","00d067","f43600","4ba93b","5779bb","927acc","97ee3f","bf3947","9f5b00","f48758","8caed6","f2b94f","eff26e","e43872","d9b100","9d7a00","698cff","d9d9d9","00d27e","d06800","009f82","c49200","cbe8ff","fecddf","c27eb6","8cd2ce","c4b8d9","f883b0","a49100","f48800","27d0df","a04a9b"];function a(t){return Color("#"+i[t%i.length])}const n={};let r=0;return e>0&&(r=e),t&&Object.keys(t).forEach(e=>{const i=t[e];isFinite(i)?n[e.toLowerCase()]=a(i):n[e.toLowerCase()]=Color(t[e])}),function(t,e){let i;const o=e[3];if(null===o)return Color().hsl(0,40,38);if(void 0===o)return Color().hsl(120,40,38);const s=o.toLowerCase();return void 0===i&&(i=n[s]),void 0===i&&(i=a(r),r++,n[s]=i),i}}});var p=i(168),u=i(201);customElements.define("state-history-chart-line",class extends(Object(p.a)(n.a)){static get template(){return a.a`
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
    `}static get properties(){return{chartData:Object,data:Object,names:Object,unit:String,identifier:String,isSingleDevice:{type:Boolean,value:!1},endTime:Object,rendered:{type:Boolean,value:!1,observer:"_onRenderedChanged"}}}static get observers(){return["dataChanged(data, endTime, isSingleDevice)"]}connectedCallback(){super.connectedCallback(),this._isAttached=!0,this.drawChart()}dataChanged(){this.drawChart()}_onRenderedChanged(t){t&&this.animateHeight()}animateHeight(){requestAnimationFrame(()=>requestAnimationFrame(()=>{this.style.height=this.$.chart.scrollHeight+"px"}))}drawChart(){const t=this.unit,e=this.data,i=[];let a;if(!this._isAttached)return;if(0===e.length)return;function n(t){const e=parseFloat(t);return isFinite(e)?e:null}(a=this.endTime||new Date(Math.max.apply(null,e.map(t=>new Date(t.states[t.states.length-1].last_changed)))))>new Date&&(a=new Date);const r=this.names||{};e.forEach(e=>{const o=e.domain,s=r[e.entity_id]||e.name;let l;const c=[];function d(t,e){e&&(t>a||(c.forEach((i,a)=>{i.data.push({x:t,y:e[a]})}),l=e))}function p(e,i,a){let n=!1,r=!1;a&&(n="origin"),i&&(r="before"),c.push({label:e,fill:n,steppedLine:r,pointRadius:0,data:[],unitText:t})}if("thermostat"===o||"climate"===o||"water_heater"===o){const t="climate"===o?t=>"heating"===t.attributes.hvac_action:t=>"heat"===t.state,i="climate"===o?t=>"cooling"===t.attributes.hvac_action:t=>"cool"===t.state,a=e.states.some(t=>t.attributes&&t.attributes.target_temp_high!==t.attributes.target_temp_low),r=e.states.some(t),l=e.states.some(i);p(s+" current temperature",!0),r&&p(s+" heating",!0,!0),l&&p(s+" cooling",!0,!0),a?(p(s+" target temperature high",!0),p(s+" target temperature low",!0)):p(s+" target temperature",!0),e.states.forEach(e=>{if(!e.attributes)return;const o=n(e.attributes.current_temperature),s=[o];if(r&&s.push(t(e)?o:null),l&&s.push(i(e)?o:null),a){const t=n(e.attributes.target_temp_high),i=n(e.attributes.target_temp_low);s.push(t,i),d(new Date(e.last_changed),s)}else{const t=n(e.attributes.temperature);s.push(t),d(new Date(e.last_changed),s)}})}else{p(s,"sensor"===o);let t=null,i=null,a=null;e.states.forEach(e=>{const r=n(e.state),o=new Date(e.last_changed);if(null!==r&&null!==a){const e=o.getTime(),n=a.getTime(),s=i.getTime();d(a,[(n-s)/(e-s)*(r-t)+t]),d(new Date(n+1),[null]),d(o,[r]),i=o,t=r,a=null}else null!==r&&null===a?(d(o,[r]),i=o,t=r):null===r&&null===a&&null!==t&&(a=o)})}d(a,l),Array.prototype.push.apply(i,c)});const o={type:"line",unit:t,legend:!this.isSingleDevice,options:{scales:{xAxes:[{type:"time",ticks:{major:{fontStyle:"bold"}}}],yAxes:[{ticks:{maxTicksLimit:7}}]},tooltips:{mode:"neareach",callbacks:{title:(t,e)=>{const i=t[0],a=e.datasets[i.datasetIndex].data[i.index].x;return Object(u.a)(a,this.hass.language)}}},hover:{mode:"neareach"},layout:{padding:{top:5}},elements:{line:{tension:.1,pointRadius:0,borderWidth:1.5},point:{hitRadius:5}},plugins:{filler:{propagate:!0}}},data:{labels:[],datasets:i}};this.chartData=o}});var h=i(93);customElements.define("state-history-chart-timeline",class extends(Object(p.a)(n.a)){static get template(){return a.a`
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
    `}static get properties(){return{hass:{type:Object},chartData:Object,data:{type:Object,observer:"dataChanged"},names:Object,noSingle:Boolean,endTime:Date,rendered:{type:Boolean,value:!1,reflectToAttribute:!0},rtl:{reflectToAttribute:!0,computed:"_computeRTL(hass)"}}}static get observers(){return["dataChanged(data, endTime, localize, language)"]}connectedCallback(){super.connectedCallback(),this._isAttached=!0,this.drawChart()}dataChanged(){this.drawChart()}drawChart(){let t=this.data;if(!this._isAttached)return;t||(t=[]);const e=new Date(t.reduce((t,e)=>Math.min(t,new Date(e.data[0].last_changed)),new Date));let i=this.endTime||new Date(t.reduce((t,e)=>Math.max(t,new Date(e.data[e.data.length-1].last_changed)),e));i>new Date&&(i=new Date);const a=[],n=[],r=this.names||{};t.forEach(t=>{let o,s=null,l=null,c=e;const d=r[t.entity_id]||t.name,p=[];t.data.forEach(t=>{let e=t.state;void 0!==e&&""!==e||(e=null),new Date(t.last_changed)>i||(null!==s&&e!==s?(o=new Date(t.last_changed),p.push([c,o,l,s]),s=e,l=t.state_localize,c=o):null===s&&(s=e,l=t.state_localize,c=new Date(t.last_changed)))}),null!==s&&p.push([c,i,l,s]),n.push({data:p}),a.push(d)});const o={type:"timeline",options:{tooltips:{callbacks:{label:(t,e)=>{const i=e.datasets[t.datasetIndex].data[t.index],a=Object(u.a)(i[0],this.hass.language),n=Object(u.a)(i[1],this.hass.language);return[i[2],a,n]}}},scales:{xAxes:[{ticks:{major:{fontStyle:"bold"}}}],yAxes:[{afterSetDimensions:t=>{t.maxWidth=.18*t.chart.width},position:this._computeRTL?"right":"left"}]}},data:{labels:a,datasets:n},colors:{staticColors:{on:1,off:0,unavailable:"#a0a0a0",unknown:"#606060",idle:2},staticColorIndex:3}};this.chartData=o}_computeRTL(t){return Object(h.a)(t)}});customElements.define("state-history-charts",class extends(Object(p.a)(n.a)){static get template(){return a.a`
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
    `}static get properties(){return{hass:Object,historyData:{type:Object,value:null},names:Object,isLoadingData:Boolean,endTime:{type:Object},upToNow:Boolean,noSingle:Boolean}}_computeIsSingleLineChart(t,e){return!e&&t&&1===t.length}_computeIsEmpty(t,e){const i=!e||!e.timeline||!e.line||0===e.timeline.length&&0===e.line.length;return!t&&i}_computeIsLoading(t){return t&&!this.historyData}_computeEndTime(t,e){return e?new Date:t}})},function(t,e,i){"use strict";var a=i(12),n=i(22),r=i(31),o=i(168),s=i(216),l=i(0),c={},d={},p=function(t,e,i,a,n,r){var o=e,l=c[o];if(l&&Date.now()-l.created<6e4&&l.language===r)return l.data;var d=Object(s.c)(t,e,i,a).then(function(e){return Object(s.a)(t,e,n,r)},function(t){throw delete c[e],t});return c[o]={created:Date.now(),language:r,data:d},d};var u=function(t,e,i,a,n){var r=i.cacheKey,o=new Date,c=new Date(o);c.setHours(c.getHours()-i.hoursToShow);var p=c,u=!1,b=d[r];if(b&&p>=b.startTime&&p<=b.endTime&&b.language===n){if(p=b.endTime,u=!0,o<=b.endTime)return b.prom}else b=d[r]=function(t,e,i){return{prom:Promise.resolve({line:[],timeline:[]}),language:t,startTime:e,endTime:i,data:{line:[],timeline:[]}}}(n,c,o);var f=b.prom;return b.prom=l.b(void 0,void 0,void 0,function(){var i,v,y,_;return l.e(this,function(l){switch(l.label){case 0:return l.trys.push([0,2,,3]),[4,Promise.all([f,Object(s.c)(t,e,p,o,u)])];case 1:return v=l.sent(),i=v[1],[3,3];case 2:throw y=l.sent(),delete d[r],y;case 3:return _=Object(s.a)(t,i,a,n),u?(h(_.line,b.data.line),m(_.timeline,b.data.timeline),g(c,b.data)):b.data=_,[2,b.data]}})}),b.startTime=c,b.endTime=o,b.prom},h=function(t,e){t.forEach(function(t){var i=t.unit,a=e.find(function(t){return t.unit===i});a?t.data.forEach(function(t){var e=a.data.find(function(e){return t.entity_id===e.entity_id});e?e.states=e.states.concat(t.states):a.data.push(t)}):e.push(t)})},m=function(t,e){t.forEach(function(t){var i=e.find(function(e){return e.entity_id===t.entity_id});i?i.data=i.data.concat(t.data):e.push(t)})},b=function(t,e){if(0===e.length)return e;var i=e.findIndex(function(e){return new Date(e.last_changed)>t});if(0===i)return e;var a=-1===i?e.length-1:i-1;return e[a].last_changed=t,e.slice(a)},g=function(t,e){e.line.forEach(function(e){e.data.forEach(function(e){e.states=b(t,e.states)})}),e.timeline.forEach(function(e){e.data=b(t,e.data)})};customElements.define("ha-state-history-data",class extends(Object(o.a)(r.a)){static get properties(){return{hass:{type:Object,observer:"hassChanged"},filterType:String,cacheConfig:Object,startTime:Date,endTime:Date,entityId:String,isLoading:{type:Boolean,value:!0,readOnly:!0,notify:!0},data:{type:Object,value:null,readOnly:!0,notify:!0}}}static get observers(){return["filterChangedDebouncer(filterType, entityId, startTime, endTime, cacheConfig, localize)"]}connectedCallback(){super.connectedCallback(),this.filterChangedDebouncer(this.filterType,this.entityId,this.startTime,this.endTime,this.cacheConfig,this.localize)}disconnectedCallback(){this._refreshTimeoutId&&(window.clearInterval(this._refreshTimeoutId),this._refreshTimeoutId=null),super.disconnectedCallback()}hassChanged(t,e){e||this._madeFirstCall||this.filterChangedDebouncer(this.filterType,this.entityId,this.startTime,this.endTime,this.cacheConfig,this.localize)}filterChangedDebouncer(...t){this._debounceFilterChanged=n.a.debounce(this._debounceFilterChanged,a.d.after(0),()=>{this.filterChanged(...t)})}filterChanged(t,e,i,a,n,r){if(!this.hass)return;if(n&&!n.cacheKey)return;if(!r)return;this._madeFirstCall=!0;const o=this.hass.language;let l;if("date"===t){if(!i||!a)return;l=Object(s.b)(this.hass,i,a).then(t=>Object(s.a)(this.hass,t,r,o))}else{if("recent-entity"!==t)return;if(!e)return;l=n?this.getRecentWithCacheRefresh(e,n,r,o):p(this.hass,e,i,a,r,o)}this._setIsLoading(!0),l.then(t=>{this._setData(t),this._setIsLoading(!1)})}getRecentWithCacheRefresh(t,e,i,a){return this._refreshTimeoutId&&(window.clearInterval(this._refreshTimeoutId),this._refreshTimeoutId=null),e.refresh&&(this._refreshTimeoutId=window.setInterval(()=>{u(this.hass,t,e,i,a).then(t=>{this._setData({...t})})},1e3*e.refresh)),u(this.hass,t,e,i,a)}})},function(t,e,i){"use strict";function a(t){var e,i,a=(e=t.attributes.remaining,3600*(i=e.split(":").map(Number))[0]+60*i[1]+i[2]);if("active"===t.state){var n=(new Date).getTime(),r=new Date(t.last_changed).getTime();a=Math.max(a-(n-r)/1e3,0)}return a}i.d(e,"a",function(){return a})},,,,,function(t,e,i){"use strict";var a=i(4),n=i(31),r=i(168),o=i(225);customElements.define("ha-climate-state",class extends(Object(r.a)(n.a)){static get template(){return a.a`
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
    `}static get properties(){return{hass:Object,stateObj:Object,currentStatus:{type:String,computed:"computeCurrentStatus(hass, stateObj)"}}}computeCurrentStatus(t,e){return t&&e?null!=e.attributes.current_temperature?`${e.attributes.current_temperature} ${t.config.unit_system.temperature}`:null!=e.attributes.current_humidity?`${e.attributes.current_humidity} %`:null:null}computeTarget(t,e){return t&&e?null!=e.attributes.target_temp_low&&null!=e.attributes.target_temp_high?`${e.attributes.target_temp_low}-${e.attributes.target_temp_high} ${t.config.unit_system.temperature}`:null!=e.attributes.temperature?`${e.attributes.temperature} ${t.config.unit_system.temperature}`:null!=e.attributes.target_humidity_low&&null!=e.attributes.target_humidity_high?`${e.attributes.target_humidity_low}-${e.attributes.target_humidity_high}%`:null!=e.attributes.humidity?`${e.attributes.humidity} %`:"":null}_hasKnownState(t){return"unknown"!==t}_localizeState(t,e){const i=t(`state.climate.${e.state}`);return e.attributes.hvac_action?`${t(`state_attributes.climate.hvac_action.${e.attributes.hvac_action}`)} (${i})`:i}_localizePreset(t,e){return t(`state_attributes.climate.preset_mode.${e}`)||e}_renderPreset(t){return t.preset_mode&&t.preset_mode!==o.a}})},function(t,e,i){"use strict";i(107);var a=i(4),n=i(31),r=i(200);customElements.define("ha-cover-controls",class extends n.a{static get template(){return a.a`
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
    `}static get properties(){return{hass:{type:Object},stateObj:{type:Object},entityObj:{type:Object,computed:"computeEntityObj(hass, stateObj)"}}}computeEntityObj(t,e){return new r.a(t,e)}computeOpenDisabled(t,e){var i=!0===t.attributes.assumed_state;return(e.isFullyOpen||e.isOpening)&&!i}computeClosedDisabled(t,e){var i=!0===t.attributes.assumed_state;return(e.isFullyClosed||e.isClosing)&&!i}onOpenTap(t){t.stopPropagation(),this.entityObj.openCover()}onCloseTap(t){t.stopPropagation(),this.entityObj.closeCover()}onStopTap(t){t.stopPropagation(),this.entityObj.stopCover()}})},function(t,e,i){"use strict";i(92),i(138),i(137),i(140);var a=i(4),n=i(31);customElements.define("paper-time-input",class extends n.a{static get template(){return a.a`
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
    `}static get properties(){return{label:{type:String,value:"Time"},autoValidate:{type:Boolean,value:!0},hideLabel:{type:Boolean,value:!1},format:{type:Number,value:12},disabled:{type:Boolean,value:!1},hour:{type:String,notify:!0},min:{type:String,notify:!0},amPm:{type:String,notify:!0,value:"AM"},value:{type:String,notify:!0,readOnly:!0,computed:"_computeTime(min, hour, amPm)"}}}validate(){var t=!0;return!this.$.hour.validate()|!this.$.min.validate()&&(t=!1),12!==this.format||this.$.dropdown.validate()||(t=!1),t}_computeTime(t,e,i){if(e&&t)return 24===this.format&&(i=""),e+":"+t+" "+i}_formatMin(){1===this.min.toString().length&&(this.min=this.min<10?"0"+this.min:this.min)}_shouldFormatHour(){24===this.format&&1===this.hour.toString().length&&(this.hour=this.hour<10?"0"+this.hour:this.hour)}_computeHourMax(t){return 12===t?t:23}_equal(t,e){return t===e}})},function(t,e,i){"use strict";i(145);const a=customElements.get("paper-slider");let n;customElements.define("ha-slider",class extends a{static get template(){return n||(n=a.template.cloneNode(!0)).content.querySelector("style").appendChild(document.createTextNode('\n          :host([dir="rtl"]) #sliderContainer.pin.expand > .slider-knob > .slider-knob-inner::after {\n            -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            }\n        ')),n}_calcStep(t){if(!this.step)return parseFloat(t);const e=Math.round((t-this.min)/this.step),i=this.step.toString(),a=i.indexOf(".");if(-1!==a){const t=10**(i.length-a-1);return Math.round((e*this.step+this.min)*t)/t}return e*this.step+this.min}})},function(t,e,i){"use strict";i.d(e,"a",function(){return a});var a=function(t,e,i){return t.callService("input_select","select_option",{option:i,entity_id:e})}},function(t,e,i){"use strict";i.d(e,"a",function(){return a});var a=function(t){return t.stopPropagation()}},,,,function(t,e,i){"use strict";i.d(e,"b",function(){return o}),i.d(e,"a",function(){return c});var a=i(0),n=i(13),r=(i(167),i(187)),o=function(t,e,i){return t.callWS(a.a({type:"config/entity_registry/update",entity_id:e},i))},s=function(t){return t.sendMessagePromise({type:"config/entity_registry/list"})},l=function(t,e){return t.subscribeEvents(Object(r.a)(function(){return s(t).then(function(t){return e.setState(t,!0)})},500,!0),"entity_registry_updated")},c=function(t,e){return Object(n.d)("_entityRegistry",s,l,t,e)}},function(t,e,i){"use strict";i(5),i(45),i(226),i(227),i(42);var a=i(6),n=i(4);Object(a.a)({_template:n.a`
    <style include="paper-material-styles">
      :host {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        background-color: var(--paper-card-background-color, var(--primary-background-color));
        border-radius: 2px;

        @apply --paper-font-common-base;
        @apply --paper-card;
      }

      /* IE 10 support for HTML5 hidden attr */
      :host([hidden]), [hidden] {
        display: none !important;
      }

      .header {
        position: relative;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        overflow: hidden;

        @apply --paper-card-header;
      }

      .header iron-image {
        display: block;
        width: 100%;
        --iron-image-width: 100%;
        pointer-events: none;

        @apply --paper-card-header-image;
      }

      .header .title-text {
        padding: 16px;
        font-size: 24px;
        font-weight: 400;
        color: var(--paper-card-header-color, #000);

        @apply --paper-card-header-text;
      }

      .header .title-text.over-image {
        position: absolute;
        bottom: 0px;

        @apply --paper-card-header-image-text;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
        position:relative;

        @apply --paper-card-content;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
        position:relative;

        @apply --paper-card-actions;
      }

      :host([elevation="1"]) {
        @apply --paper-material-elevation-1;
      }

      :host([elevation="2"]) {
        @apply --paper-material-elevation-2;
      }

      :host([elevation="3"]) {
        @apply --paper-material-elevation-3;
      }

      :host([elevation="4"]) {
        @apply --paper-material-elevation-4;
      }

      :host([elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>

    <div class="header">
      <iron-image hidden\$="[[!image]]" aria-hidden\$="[[_isHidden(image)]]" src="[[image]]" alt="[[alt]]" placeholder="[[placeholderImage]]" preload="[[preloadImage]]" fade="[[fadeImage]]"></iron-image>
      <div hidden\$="[[!heading]]" class\$="title-text [[_computeHeadingClass(image)]]">[[heading]]</div>
    </div>

    <slot></slot>
`,is:"paper-card",properties:{heading:{type:String,value:"",observer:"_headingChanged"},image:{type:String,value:""},alt:{type:String},preloadImage:{type:Boolean,value:!1},fadeImage:{type:Boolean,value:!1},placeholderImage:{type:String,value:null},elevation:{type:Number,value:1,reflectToAttribute:!0},animatedShadow:{type:Boolean,value:!1},animated:{type:Boolean,reflectToAttribute:!0,readOnly:!0,computed:"_computeAnimated(animatedShadow)"}},_isHidden:function(t){return t?"false":"true"},_headingChanged:function(t){var e=this.getAttribute("heading"),i=this.getAttribute("aria-label");"string"==typeof i&&i!==e||this.setAttribute("aria-label",t)},_computeHeadingClass:function(t){return t?" over-image":""},_computeAnimated:function(t){return t}})},function(t,e,i){"use strict";i(5),i(32),i(108),i(148),i(42),i(150),i(151);var a=i(55),n=i(35),r=i(60),o=i(61),s=i(68),l=i(6),c=i(3),d=i(36),p=i(4);Object(l.a)({_template:p.a`
    <style include="paper-dropdown-menu-shared-styles">
      :host(:focus) {
        outline: none;
      }

      :host {
        width: 200px;  /* Default size of an <input> */
      }

      /**
       * All of these styles below are for styling the fake-input display
       */
      [slot="dropdown-trigger"] {
        box-sizing: border-box;
        position: relative;
        width: 100%;
        padding: 16px 0 8px 0;
      }

      :host([disabled]) [slot="dropdown-trigger"] {
        pointer-events: none;
        opacity: var(--paper-dropdown-menu-disabled-opacity, 0.33);
      }

      :host([no-label-float]) [slot="dropdown-trigger"] {
        padding-top: 8px;   /* If there's no label, we need less space up top. */
      }

      #input {
        @apply --paper-font-subhead;
        @apply --paper-font-common-nowrap;
        line-height: 1.5;
        border-bottom: 1px solid var(--paper-dropdown-menu-color, var(--secondary-text-color));
        color: var(--paper-dropdown-menu-color, var(--primary-text-color));
        width: 100%;
        box-sizing: border-box;
        padding: 12px 20px 0 0;   /* Right padding so that text doesn't overlap the icon */
        outline: none;
        @apply --paper-dropdown-menu-input;
      }

      #input:dir(rtl) {
        padding-right: 0px;
        padding-left: 20px;
      }

      :host([disabled]) #input {
        border-bottom: 1px dashed var(--paper-dropdown-menu-color, var(--secondary-text-color));
      }

      :host([invalid]) #input {
        border-bottom: 2px solid var(--paper-dropdown-error-color, var(--error-color));
      }

      :host([no-label-float]) #input {
        padding-top: 0;   /* If there's no label, we need less space up top. */
      }

      label {
        @apply --paper-font-subhead;
        @apply --paper-font-common-nowrap;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        /**
         * The container has a 16px top padding, and there's 12px of padding
         * between the input and the label (from the input's padding-top)
         */
        top: 28px;
        box-sizing: border-box;
        width: 100%;
        padding-right: 20px;    /* Right padding so that text doesn't overlap the icon */
        text-align: left;
        transition-duration: .2s;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        color: var(--paper-dropdown-menu-color, var(--secondary-text-color));
        @apply --paper-dropdown-menu-label;
      }

      label:dir(rtl) {
        padding-right: 0px;
        padding-left: 20px;
      }

      :host([no-label-float]) label {
        top: 8px;
        /* Since the label doesn't need to float, remove the animation duration
        which slows down visibility changes (i.e. when a selection is made) */
        transition-duration: 0s;
      }

      label.label-is-floating {
        font-size: 12px;
        top: 8px;
      }

      label.label-is-hidden {
        visibility: hidden;
      }

      :host([focused]) label.label-is-floating {
        color: var(--paper-dropdown-menu-focus-color, var(--primary-color));
      }

      :host([invalid]) label.label-is-floating {
        color: var(--paper-dropdown-error-color, var(--error-color));
      }

      /**
       * Sets up the focused underline. It's initially hidden, and becomes
       * visible when it's focused.
       */
      label:after {
        background-color: var(--paper-dropdown-menu-focus-color, var(--primary-color));
        bottom: 7px;    /* The container has an 8px bottom padding */
        content: '';
        height: 2px;
        left: 45%;
        position: absolute;
        transition-duration: .2s;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        visibility: hidden;
        width: 8px;
        z-index: 10;
      }

      :host([invalid]) label:after {
        background-color: var(--paper-dropdown-error-color, var(--error-color));
      }

      :host([no-label-float]) label:after {
        bottom: 7px;    /* The container has a 8px bottom padding */
      }

      :host([focused]:not([disabled])) label:after {
        left: 0;
        visibility: visible;
        width: 100%;
      }

      iron-icon {
        position: absolute;
        right: 0px;
        bottom: 8px;    /* The container has an 8px bottom padding */
        @apply --paper-font-subhead;
        color: var(--disabled-text-color);
        @apply --paper-dropdown-menu-icon;
      }

      iron-icon:dir(rtl) {
        left: 0;
        right: auto;
      }

      :host([no-label-float]) iron-icon {
        margin-top: 0px;
      }

      .error {
        display: inline-block;
        visibility: hidden;
        color: var(--paper-dropdown-error-color, var(--error-color));
        @apply --paper-font-caption;
        position: absolute;
        left:0;
        right:0;
        bottom: -12px;
      }

      :host([invalid]) .error {
        visibility: visible;
      }
    </style>

    <!-- this div fulfills an a11y requirement for combobox, do not remove -->
    <span role="button"></span>
    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]">
      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->
      <div class="dropdown-trigger" slot="dropdown-trigger">
        <label class\$="[[_computeLabelClass(noLabelFloat,alwaysFloatLabel,hasContent)]]">
          [[label]]
        </label>
        <div id="input" tabindex="-1">&nbsp;</div>
        <iron-icon icon="paper-dropdown-menu:arrow-drop-down"></iron-icon>
        <span class="error">[[errorMessage]]</span>
      </div>
      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>
    </paper-menu-button>
`,is:"paper-dropdown-menu-light",behaviors:[a.a,n.a,s.a,r.a,o.a],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0,observer:"_valueChanged"},label:{type:String},placeholder:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,hasContent:{type:Boolean,readOnly:!0}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},hostAttributes:{tabindex:0,role:"combobox","aria-autocomplete":"none","aria-haspopup":"true"},observers:["_selectedItemChanged(selectedItem)"],attached:function(){var t=this.contentElement;t&&t.selectedItem&&this._setSelectedItem(t.selectedItem)},get contentElement(){for(var t=Object(c.a)(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(t){this._setSelectedItem(t.detail.item)},_onIronDeselect:function(t){this._setSelectedItem(null)},_onTap:function(t){d.c(t)===this&&this.open()},_selectedItemChanged:function(t){var e="";e=t?t.label||t.getAttribute("label")||t.textContent.trim():"",this.value=e,this._setSelectedItemLabel(e)},_computeMenuVerticalOffset:function(t,e){return e||(t?-4:8)},_getValidity:function(t){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var t=this.opened?"true":"false",e=this.contentElement;e&&e.setAttribute("aria-expanded",t)},_computeLabelClass:function(t,e,i){var a="";return!0===t?i?"label-is-hidden":"":((i||!0===e)&&(a+=" label-is-floating"),a)},_valueChanged:function(){this.$.input&&this.$.input.textContent!==this.value&&(this.$.input.textContent=this.value),this._setHasContent(!!this.value)}})},function(t,e,i){"use strict";var a=i(9),n=i(179),r=i(72),o=i(117);e.a=Object(a.a)(t=>(class extends(Object(r.b)([o.a,n.a],t)){static get properties(){return{withBackdrop:{type:Boolean,value:!0}}}}))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";i.r(e);i(181),i(196);var a=i(4),n=i(31),r=(i(98),i(143),i(107),i(243),i(244),i(171),i(195),i(176),i(167)),o=i(93);customElements.define("state-info",class extends n.a{static get template(){return a.a`
      ${this.styleTemplate} ${this.stateBadgeTemplate} ${this.infoTemplate}
    `}static get styleTemplate(){return a.a`
      <style>
        :host {
          @apply --paper-font-body1;
          min-width: 120px;
          white-space: nowrap;
        }

        state-badge {
          float: left;
        }

        :host([rtl]) state-badge {
          float: right;
        }

        .info {
          margin-left: 56px;
        }

        :host([rtl]) .info {
          margin-right: 56px;
          margin-left: 0;
          text-align: right;
        }

        .name {
          @apply --paper-font-common-nowrap;
          color: var(--primary-text-color);
          line-height: 40px;
        }

        .name[in-dialog],
        :host([secondary-line]) .name {
          line-height: 20px;
        }

        .time-ago,
        .extra-info,
        .extra-info > * {
          @apply --paper-font-common-nowrap;
          color: var(--secondary-text-color);
        }
      </style>
    `}static get stateBadgeTemplate(){return a.a`
      <state-badge state-obj="[[stateObj]]"></state-badge>
    `}static get infoTemplate(){return a.a`
      <div class="info">
        <div class="name" in-dialog$="[[inDialog]]">
          [[computeStateName(stateObj)]]
        </div>

        <template is="dom-if" if="[[inDialog]]">
          <div class="time-ago">
            <ha-relative-time
              hass="[[hass]]"
              datetime="[[stateObj.last_changed]]"
            ></ha-relative-time>
          </div>
        </template>
        <template is="dom-if" if="[[!inDialog]]">
          <div class="extra-info"><slot> </slot></div>
        </template>
      </div>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:()=>!1},rtl:{type:Boolean,reflectToAttribute:!0,computed:"computeRTL(hass)"}}}computeStateName(t){return Object(r.a)(t)}computeRTL(t){return Object(o.a)(t)}});i(250);customElements.define("state-card-climate",class extends n.a{static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          @apply --paper-font-body1;
          line-height: 1.5;
        }

        ha-climate-state {
          margin-left: 16px;
          text-align: right;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-climate-state
          hass="[[hass]]"
          state-obj="[[stateObj]]"
        ></ha-climate-state>
      </div>
    `}static get stateInfoTemplate(){return a.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}});i(84);var s=i(168);customElements.define("state-card-configurator",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <mwc-button hidden$="[[inDialog]]"
          >[[_localizeState(stateObj.state)]]</mwc-button
        >
      </div>

      <!-- pre load the image so the dialog is rendered the proper size -->
      <template is="dom-if" if="[[stateObj.attributes.description_image]]">
        <img hidden="" src="[[stateObj.attributes.description_image]]" />
      </template>
    `}static get stateInfoTemplate(){return a.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}_localizeState(t){return this.localize(`state.configurator.${t}`)}});i(251),i(235);var l=i(200);customElements.define("state-card-cover",class extends n.a{static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          line-height: 1.5;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <div class="horizontal layout">
          <ha-cover-controls
            hidden$="[[entityObj.isTiltOnly]]"
            hass="[[hass]]"
            state-obj="[[stateObj]]"
          ></ha-cover-controls>
          <ha-cover-tilt-controls
            hidden$="[[!entityObj.isTiltOnly]]"
            hass="[[hass]]"
            state-obj="[[stateObj]]"
          ></ha-cover-tilt-controls>
        </div>
      </div>
    `}static get stateInfoTemplate(){return a.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1},entityObj:{type:Object,computed:"computeEntityObj(hass, stateObj)"}}}computeEntityObj(t,e){return new l.a(t,e)}});var c=i(190);function d(t,e){return t?e.map(function(e){return e in t.attributes?"has-"+e:""}).filter(function(t){return""!==t}).join(" "):""}customElements.define("state-card-display",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <style>
        :host {
          @apply --layout-horizontal;
          @apply --layout-justified;
          @apply --layout-baseline;
        }

        :host([rtl]) {
          direction: rtl;
          text-align: right;
        }

        state-info {
          flex: 1 1 auto;
          min-width: 0;
        }
        .state {
          @apply --paper-font-body1;
          color: var(--primary-text-color);
          margin-left: 16px;
          text-align: right;
          max-width: 40%;
          flex: 0 0 auto;
        }
        :host([rtl]) .state {
          margin-right: 16px;
          margin-left: 0;
          text-align: left;
        }

        .state.has-unit_of_measurement {
          white-space: nowrap;
        }
      </style>

      ${this.stateInfoTemplate}
      <div class$="[[computeClassNames(stateObj)]]">
        [[computeStateDisplay(localize, stateObj, language)]]
      </div>
    `}static get stateInfoTemplate(){return a.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1},rtl:{type:Boolean,reflectToAttribute:!0,computed:"_computeRTL(hass)"}}}computeStateDisplay(t,e,i){return Object(c.a)(t,e,i)}computeClassNames(t){return["state",d(t,["unit_of_measurement"])].join(" ")}_computeRTL(t){return Object(o.a)(t)}});var p=i(94),u=(i(92),i(72));i(253);customElements.define("state-card-input_number",class extends(Object(u.b)([p.a],n.a)){static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        ha-slider {
          margin-left: auto;
        }
        .state {
          @apply --paper-font-body1;
          color: var(--primary-text-color);

          text-align: right;
          line-height: 40px;
        }
        .sliderstate {
          min-width: 45px;
        }
        ha-slider[hidden] {
          display: none !important;
        }
        paper-input {
          text-align: right;
          margin-left: auto;
        }
      </style>

      <div class="horizontal justified layout" id="input_number_card">
        ${this.stateInfoTemplate}
        <ha-slider
          min="[[min]]"
          max="[[max]]"
          value="{{value}}"
          step="[[step]]"
          hidden="[[hiddenslider]]"
          pin=""
          on-change="selectedValueChanged"
          on-click="stopPropagation"
          id="slider"
          ignore-bar-touch=""
        >
        </ha-slider>
        <paper-input
          no-label-float=""
          auto-validate=""
          pattern="[0-9]+([\\.][0-9]+)?"
          step="[[step]]"
          min="[[min]]"
          max="[[max]]"
          value="{{value}}"
          type="number"
          on-change="selectedValueChanged"
          on-click="stopPropagation"
          hidden="[[hiddenbox]]"
        >
        </paper-input>
        <div class="state" hidden="[[hiddenbox]]">
          [[stateObj.attributes.unit_of_measurement]]
        </div>
        <div
          id="sliderstate"
          class="state sliderstate"
          hidden="[[hiddenslider]]"
        >
          [[value]] [[stateObj.attributes.unit_of_measurement]]
        </div>
      </div>
    `}static get stateInfoTemplate(){return a.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}ready(){super.ready(),"function"==typeof ResizeObserver?new ResizeObserver(t=>{t.forEach(()=>{this.hiddenState()})}).observe(this.$.input_number_card):this.addEventListener("iron-resize",this.hiddenState)}static get properties(){return{hass:Object,hiddenbox:{type:Boolean,value:!0},hiddenslider:{type:Boolean,value:!0},inDialog:{type:Boolean,value:!1},stateObj:{type:Object,observer:"stateObjectChanged"},min:{type:Number,value:0},max:{type:Number,value:100},maxlength:{type:Number,value:3},step:Number,value:Number,mode:String}}hiddenState(){if("slider"!==this.mode)return;const t=this.$.slider.offsetWidth;t<100?this.$.sliderstate.hidden=!0:t>=145&&(this.$.sliderstate.hidden=!1)}stateObjectChanged(t){const e=this.mode;this.setProperties({min:Number(t.attributes.min),max:Number(t.attributes.max),step:Number(t.attributes.step),value:Number(t.state),mode:String(t.attributes.mode),maxlength:String(t.attributes.max).length,hiddenbox:"box"!==t.attributes.mode,hiddenslider:"slider"!==t.attributes.mode}),"slider"===this.mode&&"slider"!==e&&this.hiddenState()}selectedValueChanged(){this.value!==Number(this.stateObj.state)&&this.hass.callService("input_number","set_value",{value:this.value,entity_id:this.stateObj.entity_id})}stopPropagation(t){t.stopPropagation()}});var h,m,b,g=i(0),f=i(1),v=(i(261),i(137),i(138),i(254)),y=i(255);!function(t){function e(){return null!==t&&t.apply(this,arguments)||this}g.d(e,t),e.prototype.render=function(){return Object(f.e)(m||(m=g.f(["\n      <state-badge .stateObj=","></state-badge>\n      <paper-dropdown-menu-light\n        .label=",'\n        .value="','"\n        @iron-select=',"\n        @click=",'\n      >\n        <paper-listbox slot="dropdown-content">\n          ',"\n        </paper-listbox>\n      </paper-dropdown-menu-light>\n    "],["\n      <state-badge .stateObj=","></state-badge>\n      <paper-dropdown-menu-light\n        .label=",'\n        .value="','"\n        @iron-select=',"\n        @click=",'\n      >\n        <paper-listbox slot="dropdown-content">\n          ',"\n        </paper-listbox>\n      </paper-dropdown-menu-light>\n    "])),this.stateObj,Object(r.a)(this.stateObj),this.stateObj.state,this._selectedOptionChanged,y.a,this.stateObj.attributes.options.map(function(t){return Object(f.e)(h||(h=g.f(["\n              <paper-item>","</paper-item>\n            "],["\n              <paper-item>","</paper-item>\n            "])),t)}))},e.prototype.updated=function(e){t.prototype.updated.call(this,e),this.shadowRoot.querySelector("paper-listbox").selected=this.stateObj.attributes.options.indexOf(this.stateObj.state)},e.prototype._selectedOptionChanged=function(t){return g.b(this,void 0,void 0,function(){var e;return g.e(this,function(i){switch(i.label){case 0:return(e=t.detail.item.innerText.trim())===this.stateObj.state?[2]:[4,Object(v.a)(this.hass,this.stateObj.entity_id,e)];case 1:return i.sent(),[2]}})})},Object.defineProperty(e,"styles",{get:function(){return Object(f.c)(b||(b=g.f(["\n      :host {\n        display: block;\n      }\n\n      state-badge {\n        float: left;\n        margin-top: 10px;\n      }\n\n      paper-dropdown-menu-light {\n        display: block;\n        margin-left: 53px;\n      }\n\n      paper-item {\n        cursor: pointer;\n        min-width: 200px;\n      }\n    "],["\n      :host {\n        display: block;\n      }\n\n      state-badge {\n        float: left;\n        margin-top: 10px;\n      }\n\n      paper-dropdown-menu-light {\n        display: block;\n        margin-left: 53px;\n      }\n\n      paper-item {\n        cursor: pointer;\n        min-width: 200px;\n      }\n    "])))},enumerable:!0,configurable:!0}),g.c([Object(f.f)()],e.prototype,"hass",void 0),g.c([Object(f.f)()],e.prototype,"stateObj",void 0),e=g.c([Object(f.d)("state-card-input_select")],e)}(f.a);customElements.define("state-card-input_text",class extends n.a{static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        paper-input {
          margin-left: 16px;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <paper-input
          no-label-float=""
          minlength="[[stateObj.attributes.min]]"
          maxlength="[[stateObj.attributes.max]]"
          value="{{value}}"
          auto-validate="[[stateObj.attributes.pattern]]"
          pattern="[[stateObj.attributes.pattern]]"
          type="[[stateObj.attributes.mode]]"
          on-change="selectedValueChanged"
          on-click="stopPropagation"
          placeholder="(empty value)"
        >
        </paper-input>
      </div>
    `}static get stateInfoTemplate(){return a.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,inDialog:{type:Boolean,value:!1},stateObj:{type:Object,observer:"stateObjectChanged"},pattern:String,value:String}}stateObjectChanged(t){this.value=t.state}selectedValueChanged(){this.value!==this.stateObj.state&&this.hass.callService("input_text","set_value",{value:this.value,entity_id:this.stateObj.entity_id})}stopPropagation(t){t.stopPropagation()}});customElements.define("state-card-lock",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <mwc-button
          on-click="_callService"
          data-service="unlock"
          hidden$="[[!isLocked]]"
          >[[localize('ui.card.lock.unlock')]]</mwc-button
        >
        <mwc-button
          on-click="_callService"
          data-service="lock"
          hidden$="[[isLocked]]"
          >[[localize('ui.card.lock.lock')]]</mwc-button
        >
      </div>
    `}static get stateInfoTemplate(){return a.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:{type:Object,observer:"_stateObjChanged"},inDialog:{type:Boolean,value:!1},isLocked:Boolean}}_stateObjChanged(t){t&&(this.isLocked="locked"===t.state)}_callService(t){t.stopPropagation();const e=t.target.dataset.service,i={entity_id:this.stateObj.entity_id};this.hass.callService("lock",e,i)}});var _=i(238);customElements.define("state-card-media_player",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          line-height: 1.5;
        }

        .state {
          @apply --paper-font-common-nowrap;
          @apply --paper-font-body1;
          margin-left: 16px;
          text-align: right;
        }

        .main-text {
          @apply --paper-font-common-nowrap;
          color: var(--primary-text-color);
          text-transform: capitalize;
        }

        .main-text[take-height] {
          line-height: 40px;
        }

        .secondary-text {
          @apply --paper-font-common-nowrap;
          color: var(--secondary-text-color);
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <div class="state">
          <div class="main-text" take-height$="[[!playerObj.secondaryTitle]]">
            [[computePrimaryText(localize, playerObj)]]
          </div>
          <div class="secondary-text">[[playerObj.secondaryTitle]]</div>
        </div>
      </div>
    `}static get stateInfoTemplate(){return a.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1},playerObj:{type:Object,computed:"computePlayerObj(hass, stateObj)"}}}computePlayerObj(t,e){return new _.a(t,e)}computePrimaryText(t,e){return e.primaryTitle||t(`state.media_player.${e.stateObj.state}`)||t(`state.default.${e.stateObj.state}`)||e.stateObj.state}});customElements.define("state-card-scene",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <mwc-button on-click="activateScene"
          >[[localize('ui.card.scene.activate')]]</mwc-button
        >
      </div>
    `}static get stateInfoTemplate(){return a.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}activateScene(t){t.stopPropagation(),this.hass.callService("scene","turn_on",{entity_id:this.stateObj.entity_id})}});i(205);customElements.define("state-card-script",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }

        ha-entity-toggle {
          margin-left: 16px;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <template is="dom-if" if="[[stateObj.attributes.can_cancel]]">
          <ha-entity-toggle
            state-obj="[[stateObj]]"
            hass="[[hass]]"
          ></ha-entity-toggle>
        </template>
        <template is="dom-if" if="[[!stateObj.attributes.can_cancel]]">
          <mwc-button on-click="fireScript"
            >[[localize('ui.card.script.execute')]]</mwc-button
          >
        </template>
      </div>
    `}static get stateInfoTemplate(){return a.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}fireScript(t){t.stopPropagation(),this.hass.callService("script","turn_on",{entity_id:this.stateObj.entity_id})}});var w=i(245),x=i(231);customElements.define("state-card-timer",class extends n.a{static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        .state {
          @apply --paper-font-body1;
          color: var(--primary-text-color);

          margin-left: 16px;
          text-align: right;
          line-height: 40px;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <div class="state">[[_secondsToDuration(timeRemaining)]]</div>
      </div>
    `}static get stateInfoTemplate(){return a.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:{type:Object,observer:"stateObjChanged"},timeRemaining:Number,inDialog:{type:Boolean,value:!1}}}connectedCallback(){super.connectedCallback(),this.startInterval(this.stateObj)}disconnectedCallback(){super.disconnectedCallback(),this.clearInterval()}stateObjChanged(t){this.startInterval(t)}clearInterval(){this._updateRemaining&&(clearInterval(this._updateRemaining),this._updateRemaining=null)}startInterval(t){this.clearInterval(),this.calculateRemaining(t),"active"===t.state&&(this._updateRemaining=setInterval(()=>this.calculateRemaining(this.stateObj),1e3))}calculateRemaining(t){this.timeRemaining=Object(w.a)(t)}_secondsToDuration(t){return Object(x.a)(t)}});customElements.define("state-card-toggle",class extends n.a{static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        ha-entity-toggle {
          margin: -4px -16px -4px 0;
          padding: 4px 16px;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-entity-toggle
          state-obj="[[stateObj]]"
          hass="[[hass]]"
        ></ha-entity-toggle>
      </div>
    `}static get stateInfoTemplate(){return a.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}});const k={cleaning:{action:"return_to_base",service:"return_to_base"},docked:{action:"start_cleaning",service:"start"},idle:{action:"start_cleaning",service:"start"},off:{action:"turn_on",service:"turn_on"},on:{action:"turn_off",service:"turn_off"},paused:{action:"resume_cleaning",service:"start"}};customElements.define("ha-vacuum-state",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }
        mwc-button[disabled] {
          background-color: transparent;
          color: var(--secondary-text-color);
        }
      </style>

      <mwc-button on-click="_callService" disabled="[[!_interceptable]]"
        >[[_computeLabel(stateObj.state, _interceptable)]]</mwc-button
      >
    `}static get properties(){return{hass:Object,stateObj:Object,_interceptable:{type:Boolean,computed:"_computeInterceptable(stateObj.state, stateObj.attributes.supported_features)"}}}_computeInterceptable(t,e){return t in k&&0!==e}_computeLabel(t,e){return e?this.localize(`ui.card.vacuum.actions.${k[t].action}`):this.localize(`state.vacuum.${t}`)}_callService(t){t.stopPropagation();const e=this.stateObj,i=k[e.state].service;this.hass.callService("vacuum",i,{entity_id:e.entity_id})}});customElements.define("state-card-vacuum",class extends n.a{static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-vacuum-state
          hass="[[hass]]"
          state-obj="[[stateObj]]"
        ></ha-vacuum-state>
      </div>
    `}static get stateInfoTemplate(){return a.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}});customElements.define("ha-water_heater-state",class extends(Object(s.a)(n.a)){static get template(){return a.a`
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
      </style>

      <div class="target">
        <span class="state-label"> [[_localizeState(stateObj.state)]] </span>
        [[computeTarget(hass, stateObj)]]
      </div>

      <template is="dom-if" if="[[currentStatus]]">
        <div class="current">
          [[localize('ui.card.water_heater.currently')]]: [[currentStatus]]
        </div>
      </template>
    `}static get properties(){return{hass:Object,stateObj:Object}}computeTarget(t,e){return t&&e?null!=e.attributes.target_temp_low&&null!=e.attributes.target_temp_high?`${e.attributes.target_temp_low} - ${e.attributes.target_temp_high} ${t.config.unit_system.temperature}`:null!=e.attributes.temperature?`${e.attributes.temperature} ${t.config.unit_system.temperature}`:"":null}_localizeState(t){return this.localize(`state.water_heater.${t}`)||t}});customElements.define("state-card-water_heater",class extends n.a{static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          @apply --paper-font-body1;
          line-height: 1.5;
        }

        ha-water_heater-state {
          margin-left: 16px;
          text-align: right;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-water_heater-state
          hass="[[hass]]"
          state-obj="[[stateObj]]"
        ></ha-water_heater-state>
      </div>
    `}static get stateInfoTemplate(){return a.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}});customElements.define("state-card-weblink",class extends n.a{static get template(){return a.a`
      <style>
        :host {
          display: block;
        }
        .name {
          @apply --paper-font-common-nowrap;
          @apply --paper-font-body1;
          color: var(--primary-color);

          text-transform: capitalize;
          line-height: 40px;
          margin-left: 16px;
        }
      </style>

      ${this.stateBadgeTemplate}
      <a href$="[[stateObj.state]]" target="_blank" class="name" id="link"
        >[[_computeStateName(stateObj)]]</a
      >
    `}static get stateBadgeTemplate(){return a.a`
      <state-badge state-obj="[[stateObj]]"></state-badge>
    `}static get properties(){return{stateObj:Object,inDialog:{type:Boolean,value:!1}}}ready(){super.ready(),this.addEventListener("click",t=>this.onTap(t))}_computeStateName(t){return Object(r.a)(t)}onTap(t){t.stopPropagation(),t.preventDefault(),window.open(this.stateObj.state,"_blank")}});var O=i(180),j=i(188);var C=i(118);function S(t,e){if("unavailable"===e.state)return"display";var i=Object(O.a)(e);return C.g.includes(i)?i:function(t,e){var i=Object(O.a)(e);return"group"===i?"on"===e.state||"off"===e.state:"climate"===i?Object(j.a)(e,4096):function(t,e){var i=t.services[e];return!!i&&("lock"===e?"lock"in i:"cover"===e?"open_cover"in i:"turn_on"in i)}(t,i)}(t,e)&&"hidden"!==e.attributes.control?"toggle":"display"}function D(t,e,i){var a,n=t;n.lastChild&&n.lastChild.tagName===e?a=n.lastChild:(n.lastChild&&n.removeChild(n.lastChild),a=document.createElement(e.toLowerCase())),a.setProperties?a.setProperties(i):Object.keys(i).forEach(function(t){a[t]=i[t]}),null===a.parentNode&&n.appendChild(a)}customElements.define("state-card-content",class extends n.a{static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}static get observers(){return["inputChanged(hass, inDialog, stateObj)"]}inputChanged(t,e,i){let a;i&&t&&D(this,(a=i.attributes&&"custom_ui_state_card"in i.attributes?i.attributes.custom_ui_state_card:"state-card-"+S(t,i)).toUpperCase(),{hass:t,stateObj:i,inDialog:e})}});var T=i(18);customElements.define("more-info-alarm_control_panel",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <style include="iron-flex"></style>
      <style>
        paper-input {
          margin: auto;
          max-width: 200px;
        }
        .pad {
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
        }
        .pad div {
          display: flex;
          flex-direction: column;
        }
        .pad mwc-button {
          width: 80px;
        }
        .actions mwc-button {
          min-width: 160px;
          margin-bottom: 16px;
        }
        mwc-button.disarm {
          color: var(--google-red-500);
        }
      </style>

      <template is="dom-if" if="[[_codeFormat]]">
        <paper-input
          label="[[localize('ui.card.alarm_control_panel.code')]]"
          value="{{_enteredCode}}"
          type="password"
          disabled="[[!_inputEnabled]]"
        ></paper-input>

        <template is="dom-if" if="[[_isNumber(_codeFormat)]]">
          <div class="pad">
            <div>
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="1"
                raised
                >1</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="4"
                raised
                >4</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="7"
                raised
                >7</mwc-button
              >
            </div>
            <div>
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="2"
                raised
                >2</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="5"
                raised
                >5</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="8"
                raised
                >8</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="0"
                raised
                >0</mwc-button
              >
            </div>
            <div>
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="3"
                raised
                >3</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="6"
                raised
                >6</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="9"
                raised
                >9</mwc-button
              >
              <mwc-button
                on-click="_clearEnteredCode"
                disabled="[[!_inputEnabled]]"
                raised
              >
                [[localize('ui.card.alarm_control_panel.clear_code')]]
              </mwc-button>
            </div>
          </div>
        </template>
      </template>

      <div class="layout horizontal center-justified actions">
        <template is="dom-if" if="[[_disarmVisible]]">
          <mwc-button
            raised
            class="disarm"
            on-click="_callService"
            data-service="alarm_disarm"
            disabled="[[!_codeValid]]"
          >
            [[localize('ui.card.alarm_control_panel.disarm')]]
          </mwc-button>
        </template>
        <template is="dom-if" if="[[_armVisible]]">
          <mwc-button
            raised
            on-click="_callService"
            data-service="alarm_arm_home"
            disabled="[[!_codeValid]]"
          >
            [[localize('ui.card.alarm_control_panel.arm_home')]]
          </mwc-button>
          <mwc-button
            raised
            on-click="_callService"
            data-service="alarm_arm_away"
            disabled="[[!_codeValid]]"
          >
            [[localize('ui.card.alarm_control_panel.arm_away')]]
          </mwc-button>
        </template>
      </div>
    `}static get properties(){return{hass:Object,stateObj:{type:Object,observer:"_stateObjChanged"},_enteredCode:{type:String,value:""},_codeFormat:{type:String,value:""},_codeValid:{type:Boolean,computed:"_validateCode(_enteredCode,  _codeFormat,  _armVisible, _codeArmRequired)"},_disarmVisible:{type:Boolean,value:!1},_armVisible:{type:Boolean,value:!1},_inputEnabled:{type:Boolean,value:!1}}}constructor(){super(),this._armedStates=["armed_home","armed_away","armed_night","armed_custom_bypass"]}_stateObjChanged(t,e){if(t){const e=t.state,i={_codeFormat:t.attributes.code_format,_armVisible:"disarmed"===e,_codeArmRequired:t.attributes.code_arm_required,_disarmVisible:this._armedStates.includes(e)||"pending"===e||"triggered"===e||"arming"===e};i._inputEnabled=i._disarmVisible||i._armVisible,this.setProperties(i)}e&&setTimeout(()=>{Object(T.a)(this,"iron-resize")},500)}_isNumber(t){return"Number"===t}_validateCode(t,e,i,a){return!e||t.length>0||i&&!a}_digitClicked(t){this._enteredCode+=t.target.getAttribute("data-digit")}_clearEnteredCode(){this._enteredCode=""}_callService(t){const e=t.target.getAttribute("data-service"),i={entity_id:this.stateObj.entity_id,code:this._enteredCode};this.hass.callService("alarm_control_panel",e,i).then(()=>{this._enteredCode=""})}});customElements.define("more-info-automation",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <style>
        .flex {
          display: flex;
          justify-content: space-between;
        }
        .actions {
          margin: 36px 0 8px 0;
          text-align: right;
        }
      </style>

      <div class="flex">
        <div>[[localize('ui.card.automation.last_triggered')]]:</div>
        <ha-relative-time
          hass="[[hass]]"
          datetime="[[stateObj.attributes.last_triggered]]"
        ></ha-relative-time>
      </div>

      <div class="actions">
        <mwc-button on-click="handleTriggerTapped">
          [[localize('ui.card.automation.trigger')]]
        </mwc-button>
      </div>
    `}static get properties(){return{hass:Object,stateObj:Object}}handleTriggerTapped(){this.hass.callService("automation","trigger",{entity_id:this.stateObj.entity_id})}});var E,I,A,z,M,$,P,L,B,R=i(239),V=(function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.showControls=!1,e._attached=!1,e._forceMJPEG=void 0,e}g.d(e,t),e.prototype.connectedCallback=function(){t.prototype.connectedCallback.call(this),this._attached=!0},e.prototype.disconnectedCallback=function(){t.prototype.disconnectedCallback.call(this),this._attached=!1},e.prototype.render=function(){return this.stateObj&&this._attached?Object(f.e)(z||(z=g.f(["\n      ","\n    "],["\n      ","\n    "])),this._shouldRenderMJPEG?Object(f.e)(I||(I=g.f(["\n            <img\n              @load=","\n              .src=","\n              .alt=","\n            />\n          "],["\n            <img\n              @load=","\n              .src=","\n              .alt=","\n            />\n          "])),this._elementResized,Object(R.b)(this.stateObj),"Preview of the "+Object(r.a)(this.stateObj)+" camera."):Object(f.e)(A||(A=g.f(["\n            <video\n              autoplay\n              muted\n              playsinline\n              ?controls=","\n              @loadeddata=","\n            ></video>\n          "],["\n            <video\n              autoplay\n              muted\n              playsinline\n              ?controls=","\n              @loadeddata=","\n            ></video>\n          "])),this.showControls,this._elementResized)):Object(f.e)(E||(E=g.f([""],[""])))},e.prototype.updated=function(e){t.prototype.updated.call(this,e);var i=e.has("stateObj"),a=e.has("_attached"),n=e.get("stateObj"),r=n?n.entity_id:void 0,o=this.stateObj?this.stateObj.entity_id:void 0;!i&&!a||i&&r===o||(!a||this._attached?this._shouldRenderMJPEG||(this._destroyPolyfill(),o&&this._startHls()):this._destroyPolyfill())},Object.defineProperty(e.prototype,"_shouldRenderMJPEG",{get:function(){return this._forceMJPEG===this.stateObj.entity_id||!this.hass.config.components.includes("stream")||!Object(j.a)(this.stateObj,R.a)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_videoEl",{get:function(){return this.shadowRoot.querySelector("video")},enumerable:!0,configurable:!0}),e.prototype._startHls=function(){return g.b(this,void 0,void 0,function(){var t,e,a,n,r;return g.e(this,function(o){switch(o.label){case 0:return[4,i.e(58).then(i.t.bind(null,361,7))];case 1:if(t=o.sent().default,e=t.isSupported(),a=this._videoEl,e||(e=""!==a.canPlayType("application/vnd.apple.mpegurl")),!e)return this._forceMJPEG=this.stateObj.entity_id,[2];o.label=2;case 2:return o.trys.push([2,4,,5]),[4,Object(R.d)(this.hass,this.stateObj.entity_id)];case 3:return n=o.sent().url,t.isSupported()?this._renderHLSPolyfill(a,t,n):this._renderHLSNative(a,n),[2];case 4:return r=o.sent(),console.error(r),this._forceMJPEG=this.stateObj.entity_id,[3,5];case 5:return[2]}})})},e.prototype._renderHLSNative=function(t,e){return g.b(this,void 0,void 0,function(){return g.e(this,function(i){switch(i.label){case 0:return t.src=e,[4,new Promise(function(e){return t.addEventListener("loadedmetadata",e)})];case 1:return i.sent(),t.play(),[2]}})})},e.prototype._renderHLSPolyfill=function(t,e,i){return g.b(this,void 0,void 0,function(){var a;return g.e(this,function(n){return a=new e,this._hlsPolyfillInstance=a,a.attachMedia(t),a.on(e.Events.MEDIA_ATTACHED,function(){a.loadSource(i)}),[2]})})},e.prototype._elementResized=function(){Object(T.a)(this,"iron-resize")},e.prototype._destroyPolyfill=function(){this._hlsPolyfillInstance&&(this._hlsPolyfillInstance.destroy(),this._hlsPolyfillInstance=void 0)},Object.defineProperty(e,"styles",{get:function(){return Object(f.c)(M||(M=g.f(["\n      :host,\n      img,\n      video {\n        display: block;\n      }\n\n      img,\n      video {\n        width: 100%;\n      }\n    "],["\n      :host,\n      img,\n      video {\n        display: block;\n      }\n\n      img,\n      video {\n        width: 100%;\n      }\n    "])))},enumerable:!0,configurable:!0}),g.c([Object(f.f)()],e.prototype,"hass",void 0),g.c([Object(f.f)()],e.prototype,"stateObj",void 0),g.c([Object(f.f)({type:Boolean})],e.prototype,"showControls",void 0),g.c([Object(f.f)()],e.prototype,"_attached",void 0),g.c([Object(f.f)()],e.prototype,"_forceMJPEG",void 0),e=g.c([Object(f.d)("ha-camera-stream")],e)}(f.a),i(147),function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._attached=!1,e}return g.d(e,t),e.prototype.connectedCallback=function(){t.prototype.connectedCallback.call(this),this._attached=!0},e.prototype.disconnectedCallback=function(){t.prototype.disconnectedCallback.call(this),this._attached=!1},e.prototype.render=function(){return this._attached&&this.hass&&this.stateObj?Object(f.e)(L||(L=g.f(['\n      <ha-camera-stream\n        .hass="','"\n        .stateObj="','"\n        showcontrols\n      ></ha-camera-stream>\n      ',"\n    "],['\n      <ha-camera-stream\n        .hass="','"\n        .stateObj="','"\n        showcontrols\n      ></ha-camera-stream>\n      ',"\n    "])),this.hass,this.stateObj,this._cameraPrefs?Object(f.e)(P||(P=g.f(["\n            <paper-checkbox\n              .checked=","\n              @change=","\n            >\n              Preload stream\n            </paper-checkbox>\n          "],["\n            <paper-checkbox\n              .checked=","\n              @change=","\n            >\n              Preload stream\n            </paper-checkbox>\n          "])),this._cameraPrefs.preload_stream,this._handleCheckboxChanged):void 0):Object(f.e)($||($=g.f([""],[""])))},e.prototype.updated=function(t){if(t.has("stateObj")){var e=t.get("stateObj"),i=e?e.entity_id:void 0,a=this.stateObj?this.stateObj.entity_id:void 0;a!==i&&a&&this.hass.config.components.includes("stream")&&Object(j.a)(this.stateObj,R.a)&&this._fetchCameraPrefs()}},e.prototype._fetchCameraPrefs=function(){return g.b(this,void 0,void 0,function(){var t;return g.e(this,function(e){switch(e.label){case 0:return t=this,[4,Object(R.c)(this.hass,this.stateObj.entity_id)];case 1:return t._cameraPrefs=e.sent(),[2]}})})},e.prototype._handleCheckboxChanged=function(t){return g.b(this,void 0,void 0,function(){var e,i,a;return g.e(this,function(n){switch(n.label){case 0:e=t.currentTarget,n.label=1;case 1:return n.trys.push([1,3,,4]),i=this,[4,Object(R.f)(this.hass,this.stateObj.entity_id,{preload_stream:e.checked})];case 2:return i._cameraPrefs=n.sent(),[3,4];case 3:return a=n.sent(),alert(a.message),e.checked=!e.checked,[3,4];case 4:return[2]}})})},Object.defineProperty(e,"styles",{get:function(){return Object(f.c)(B||(B=g.f(["\n      paper-checkbox {\n        position: absolute;\n        top: 0;\n        right: 0;\n        background-color: var(--secondary-background-color);\n        padding: 5px;\n        border-bottom-left-radius: 6px;\n      }\n    "],["\n      paper-checkbox {\n        position: absolute;\n        top: 0;\n        right: 0;\n        background-color: var(--secondary-background-color);\n        padding: 5px;\n        border-bottom-left-radius: 6px;\n      }\n    "])))},enumerable:!0,configurable:!0}),g.c([Object(f.f)()],e.prototype,"hass",void 0),g.c([Object(f.f)()],e.prototype,"stateObj",void 0),g.c([Object(f.f)()],e.prototype,"_cameraPrefs",void 0),g.c([Object(f.f)()],e.prototype,"_attached",void 0),e}(f.a));customElements.define("more-info-camera",V);i(192);var N=i(117);customElements.define("ha-climate-control",class extends(Object(N.a)(n.a)){static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        /* local DOM styles go here */
        :host {
          @apply --layout-flex;
          @apply --layout-horizontal;
          @apply --layout-justified;
        }
        .in-flux#target_temperature {
          color: var(--google-red-500);
        }
        #target_temperature {
          @apply --layout-self-center;
          font-size: 200%;
          direction: ltr;
        }
        .control-buttons {
          font-size: 200%;
          text-align: right;
        }
        paper-icon-button {
          height: 48px;
          width: 48px;
        }
      </style>

      <!-- local DOM goes here -->
      <div id="target_temperature">[[value]] [[units]]</div>
      <div class="control-buttons">
        <div>
          <paper-icon-button
            icon="hass:chevron-up"
            on-click="incrementValue"
          ></paper-icon-button>
        </div>
        <div>
          <paper-icon-button
            icon="hass:chevron-down"
            on-click="decrementValue"
          ></paper-icon-button>
        </div>
      </div>
    `}static get properties(){return{value:{type:Number,observer:"valueChanged"},units:{type:String},min:{type:Number},max:{type:Number},step:{type:Number,value:1}}}temperatureStateInFlux(t){this.$.target_temperature.classList.toggle("in-flux",t)}_round(t){const e=this.step.toString().split(".");return e[1]?parseFloat(t.toFixed(e[1].length)):Math.round(t)}incrementValue(){const t=this._round(this.value+this.step);this.value<this.max&&(this.last_changed=Date.now(),this.temperatureStateInFlux(!0)),t<=this.max?t<=this.min?this.value=this.min:this.value=t:this.value=this.max}decrementValue(){const t=this._round(this.value-this.step);this.value>this.min&&(this.last_changed=Date.now(),this.temperatureStateInFlux(!0)),t>=this.min?this.value=t:this.value=this.min}valueChanged(){this.last_changed&&window.setTimeout(()=>{Date.now()-this.last_changed>=2e3&&(this.fire("change"),this.temperatureStateInFlux(!1),this.last_changed=null)},2010)}});i(144),i(202);var F,H,Y,q,K,W,U,X,Z,G,J,Q,tt,et,it,at=i(225),nt=i(71),rt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return g.d(e,t),e.prototype.render=function(){if(!this.stateObj)return Object(f.e)(F||(F=g.f([""],[""])));var t=this.hass,e=this.stateObj,i=Object(j.a)(e,at.g),a=Object(j.a)(e,at.h),n=Object(j.a)(e,at.f),r=Object(j.a)(e,at.c),s=Object(j.a)(e,at.d),l=Object(j.a)(e,at.e),c=Object(j.a)(e,at.b),d=e.attributes.target_temp_step||(-1===t.config.unit_system.temperature.indexOf("F")?.5:1),p=Object(o.b)(t);return Object(f.e)(et||(et=g.f(["\n      <div\n        class=",'\n      >\n        <div class="container-temperature">\n          <div class=',">\n            ","\n            ","\n            ","\n          </div>\n        </div>\n\n        ",'\n\n        <div class="container-hvac_modes">\n          <div class="controls">\n            <ha-paper-dropdown-menu\n              label-float\n              dynamic-align\n              .label=','\n            >\n              <paper-listbox\n                slot="dropdown-content"\n                attr-for-selected="item-name"\n                .selected=',"\n                @selected-changed=","\n              >\n                ","\n              </paper-listbox>\n            </ha-paper-dropdown-menu>\n          </div>\n        </div>\n\n        ","\n        ","\n        ","\n        ","\n      </div>\n    "],["\n      <div\n        class=",'\n      >\n        <div class="container-temperature">\n          <div class=',">\n            ","\n            ","\n            ","\n          </div>\n        </div>\n\n        ",'\n\n        <div class="container-hvac_modes">\n          <div class="controls">\n            <ha-paper-dropdown-menu\n              label-float\n              dynamic-align\n              .label=','\n            >\n              <paper-listbox\n                slot="dropdown-content"\n                attr-for-selected="item-name"\n                .selected=',"\n                @selected-changed=","\n              >\n                ","\n              </paper-listbox>\n            </ha-paper-dropdown-menu>\n          </div>\n        </div>\n\n        ","\n        ","\n        ","\n        ","\n      </div>\n    "])),Object(nt.a)({"has-current_temperature":"current_temperature"in e.attributes,"has-current_humidity":"current_humidity"in e.attributes,"has-target_temperature":i,"has-target_temperature_range":a,"has-target_humidity":n,"has-fan_mode":r,"has-swing_mode":l,"has-aux_heat":c,"has-preset_mode":s}),e.state,i||a?Object(f.e)(H||(H=g.f(["\n                  <div>\n                    ","\n                  </div>\n                "],["\n                  <div>\n                    ","\n                  </div>\n                "])),t.localize("ui.card.climate.target_temperature")):"",e.attributes.temperature?Object(f.e)(Y||(Y=g.f(["\n                  <ha-climate-control\n                    .value=","\n                    .units=","\n                    .step=","\n                    .min=","\n                    .max=","\n                    @change=","\n                  ></ha-climate-control>\n                "],["\n                  <ha-climate-control\n                    .value=","\n                    .units=","\n                    .step=","\n                    .min=","\n                    .max=","\n                    @change=","\n                  ></ha-climate-control>\n                "])),e.attributes.temperature,t.config.unit_system.temperature,d,e.attributes.min_temp,e.attributes.max_temp,this._targetTemperatureChanged):"",e.attributes.target_temp_low||e.attributes.target_temp_high?Object(f.e)(q||(q=g.f(["\n                  <ha-climate-control\n                    .value=","\n                    .units=","\n                    .step=","\n                    .min=","\n                    .max=",'\n                    class="range-control-left"\n                    @change=',"\n                  ></ha-climate-control>\n                  <ha-climate-control\n                    .value=","\n                    .units=","\n                    .step=","\n                    .min=","\n                    .max=",'\n                    class="range-control-right"\n                    @change=',"\n                  ></ha-climate-control>\n                "],["\n                  <ha-climate-control\n                    .value=","\n                    .units=","\n                    .step=","\n                    .min=","\n                    .max=",'\n                    class="range-control-left"\n                    @change=',"\n                  ></ha-climate-control>\n                  <ha-climate-control\n                    .value=","\n                    .units=","\n                    .step=","\n                    .min=","\n                    .max=",'\n                    class="range-control-right"\n                    @change=',"\n                  ></ha-climate-control>\n                "])),e.attributes.target_temp_low,t.config.unit_system.temperature,d,e.attributes.min_temp,e.attributes.target_temp_high,this._targetTemperatureLowChanged,e.attributes.target_temp_high,t.config.unit_system.temperature,d,e.attributes.target_temp_low,e.attributes.max_temp,this._targetTemperatureHighChanged):"",n?Object(f.e)(K||(K=g.f(['\n              <div class="container-humidity">\n                <div>','</div>\n                <div class="single-row">\n                  <div class="target-humidity">\n                    ',' %\n                  </div>\n                  <ha-paper-slider\n                    class="humidity"\n                    step="1"\n                    pin\n                    ignore-bar-touch\n                    dir=',"\n                    .min=","\n                    .max=","\n                    .secondaryProgress=","\n                    .value=","\n                    @change=","\n                  >\n                  </ha-paper-slider>\n                </div>\n              </div>\n            "],['\n              <div class="container-humidity">\n                <div>','</div>\n                <div class="single-row">\n                  <div class="target-humidity">\n                    ',' %\n                  </div>\n                  <ha-paper-slider\n                    class="humidity"\n                    step="1"\n                    pin\n                    ignore-bar-touch\n                    dir=',"\n                    .min=","\n                    .max=","\n                    .secondaryProgress=","\n                    .value=","\n                    @change=","\n                  >\n                  </ha-paper-slider>\n                </div>\n              </div>\n            "])),t.localize("ui.card.climate.target_humidity"),e.attributes.humidity,p,e.attributes.min_humidity,e.attributes.max_humidity,e.attributes.max_humidity,e.attributes.humidity,this._targetHumiditySliderChanged):"",t.localize("ui.card.climate.operation"),e.state,this._handleOperationmodeChanged,e.attributes.hvac_modes.concat().sort(at.i).map(function(e){return Object(f.e)(W||(W=g.f(["\n                      <paper-item item-name=",">\n                        ","\n                      </paper-item>\n                    "],["\n                      <paper-item item-name=",">\n                        ","\n                      </paper-item>\n                    "])),e,t.localize("state.climate."+e))}),s?Object(f.e)(X||(X=g.f(['\n              <div class="container-preset_modes">\n                <ha-paper-dropdown-menu\n                  label-float\n                  dynamic-align\n                  .label=','\n                >\n                  <paper-listbox\n                    slot="dropdown-content"\n                    attr-for-selected="item-name"\n                    .selected=',"\n                    @selected-changed=","\n                  >\n                    ","\n                  </paper-listbox>\n                </ha-paper-dropdown-menu>\n              </div>\n            "],['\n              <div class="container-preset_modes">\n                <ha-paper-dropdown-menu\n                  label-float\n                  dynamic-align\n                  .label=','\n                >\n                  <paper-listbox\n                    slot="dropdown-content"\n                    attr-for-selected="item-name"\n                    .selected=',"\n                    @selected-changed=","\n                  >\n                    ","\n                  </paper-listbox>\n                </ha-paper-dropdown-menu>\n              </div>\n            "])),t.localize("ui.card.climate.preset_mode"),e.attributes.preset_mode,this._handlePresetmodeChanged,e.attributes.preset_modes.map(function(e){return Object(f.e)(U||(U=g.f(["\n                        <paper-item item-name=",">\n                          ","\n                        </paper-item>\n                      "],["\n                        <paper-item item-name=",">\n                          ","\n                        </paper-item>\n                      "])),e,t.localize("state_attributes.climate.preset_mode."+e)||e)})):"",r?Object(f.e)(G||(G=g.f(['\n              <div class="container-fan_list">\n                <ha-paper-dropdown-menu\n                  label-float\n                  dynamic-align\n                  .label=','\n                >\n                  <paper-listbox\n                    slot="dropdown-content"\n                    attr-for-selected="item-name"\n                    .selected=',"\n                    @selected-changed=","\n                  >\n                    ","\n                  </paper-listbox>\n                </ha-paper-dropdown-menu>\n              </div>\n            "],['\n              <div class="container-fan_list">\n                <ha-paper-dropdown-menu\n                  label-float\n                  dynamic-align\n                  .label=','\n                >\n                  <paper-listbox\n                    slot="dropdown-content"\n                    attr-for-selected="item-name"\n                    .selected=',"\n                    @selected-changed=","\n                  >\n                    ","\n                  </paper-listbox>\n                </ha-paper-dropdown-menu>\n              </div>\n            "])),t.localize("ui.card.climate.fan_mode"),e.attributes.fan_mode,this._handleFanmodeChanged,e.attributes.fan_modes.map(function(e){return Object(f.e)(Z||(Z=g.f(["\n                        <paper-item item-name=",">\n                          ","\n                        </paper-item>\n                      "],["\n                        <paper-item item-name=",">\n                          ","\n                        </paper-item>\n                      "])),e,t.localize("state_attributes.climate.fan_mode."+e)||e)})):"",l?Object(f.e)(Q||(Q=g.f(['\n              <div class="container-swing_list">\n                <ha-paper-dropdown-menu\n                  label-float\n                  dynamic-align\n                  .label=','\n                >\n                  <paper-listbox\n                    slot="dropdown-content"\n                    attr-for-selected="item-name"\n                    .selected=',"\n                    @selected-changed=","\n                  >\n                    ","\n                  </paper-listbox>\n                </ha-paper-dropdown-menu>\n              </div>\n            "],['\n              <div class="container-swing_list">\n                <ha-paper-dropdown-menu\n                  label-float\n                  dynamic-align\n                  .label=','\n                >\n                  <paper-listbox\n                    slot="dropdown-content"\n                    attr-for-selected="item-name"\n                    .selected=',"\n                    @selected-changed=","\n                  >\n                    ","\n                  </paper-listbox>\n                </ha-paper-dropdown-menu>\n              </div>\n            "])),t.localize("ui.card.climate.swing_mode"),e.attributes.swing_mode,this._handleSwingmodeChanged,e.attributes.swing_modes.map(function(t){return Object(f.e)(J||(J=g.f(["\n                        <paper-item item-name=",">","</paper-item>\n                      "],["\n                        <paper-item item-name=",">","</paper-item>\n                      "])),t,t)})):"",c?Object(f.e)(tt||(tt=g.f(['\n              <div class="container-aux_heat">\n                <div class="center horizontal layout single-row">\n                  <div class="flex">\n                    ',"\n                  </div>\n                  <paper-toggle-button\n                    .checked=","\n                    @change=","\n                  ></paper-toggle-button>\n                </div>\n              </div>\n            "],['\n              <div class="container-aux_heat">\n                <div class="center horizontal layout single-row">\n                  <div class="flex">\n                    ',"\n                  </div>\n                  <paper-toggle-button\n                    .checked=","\n                    @change=","\n                  ></paper-toggle-button>\n                </div>\n              </div>\n            "])),t.localize("ui.card.climate.aux_heat"),"on"===e.attributes.aux_heat,this._auxToggleChanged):"")},e.prototype.updated=function(e){var i=this;t.prototype.updated.call(this,e),e.has("stateObj")&&this.stateObj&&(this._resizeDebounce&&clearTimeout(this._resizeDebounce),this._resizeDebounce=window.setTimeout(function(){Object(T.a)(i,"iron-resize"),i._resizeDebounce=void 0},500))},e.prototype._targetTemperatureChanged=function(t){var e=t.target.value;this._callServiceHelper(this.stateObj.attributes.temperature,e,"set_temperature",{temperature:e})},e.prototype._targetTemperatureLowChanged=function(t){var e=t.currentTarget.value;this._callServiceHelper(this.stateObj.attributes.target_temp_low,e,"set_temperature",{target_temp_low:e,target_temp_high:this.stateObj.attributes.target_temp_high})},e.prototype._targetTemperatureHighChanged=function(t){var e=t.currentTarget.value;this._callServiceHelper(this.stateObj.attributes.target_temp_high,e,"set_temperature",{target_temp_low:this.stateObj.attributes.target_temp_low,target_temp_high:e})},e.prototype._targetHumiditySliderChanged=function(t){var e=t.target.value;this._callServiceHelper(this.stateObj.attributes.humidity,e,"set_humidity",{humidity:e})},e.prototype._auxToggleChanged=function(t){var e=t.target.checked;this._callServiceHelper("on"===this.stateObj.attributes.aux_heat,e,"set_aux_heat",{aux_heat:e})},e.prototype._handleFanmodeChanged=function(t){var e=t.detail.value;this._callServiceHelper(this.stateObj.attributes.fan_mode,e,"set_fan_mode",{fan_mode:e})},e.prototype._handleOperationmodeChanged=function(t){var e=t.detail.value;this._callServiceHelper(this.stateObj.state,e,"set_hvac_mode",{hvac_mode:e})},e.prototype._handleSwingmodeChanged=function(t){var e=t.detail.value;this._callServiceHelper(this.stateObj.attributes.swing_mode,e,"set_swing_mode",{swing_mode:e})},e.prototype._handlePresetmodeChanged=function(t){var e=t.detail.value||null;this._callServiceHelper(this.stateObj.attributes.preset_mode,e,"set_preset_mode",{preset_mode:e})},e.prototype._callServiceHelper=function(t,e,i,a){return g.b(this,void 0,void 0,function(){var n;return g.e(this,function(r){switch(r.label){case 0:return t===e?[2]:(a.entity_id=this.stateObj.entity_id,n=this.stateObj,[4,this.hass.callService("climate",i,a)]);case 1:return r.sent(),[4,new Promise(function(t){return setTimeout(t,2e3)})];case 2:return r.sent(),this.stateObj!==n?[2]:(this.stateObj=void 0,[4,this.updateComplete]);case 3:return r.sent(),void 0===this.stateObj&&(this.stateObj=n),[2]}})})},Object.defineProperty(e,"styles",{get:function(){return Object(f.c)(it||(it=g.f(["\n      :host {\n        color: var(--primary-text-color);\n      }\n\n      .container-hvac_modes iron-icon,\n      .container-fan_list iron-icon,\n      .container-swing_list iron-icon {\n        margin: 22px 16px 0 0;\n      }\n\n      ha-paper-dropdown-menu {\n        width: 100%;\n      }\n\n      paper-item {\n        cursor: pointer;\n      }\n\n      ha-paper-slider {\n        width: 100%;\n      }\n\n      .container-humidity .single-row {\n        display: flex;\n        height: 50px;\n      }\n\n      .target-humidity {\n        width: 90px;\n        font-size: 200%;\n        margin: auto;\n        direction: ltr;\n      }\n\n      ha-climate-control.range-control-left,\n      ha-climate-control.range-control-right {\n        float: left;\n        width: 46%;\n      }\n      ha-climate-control.range-control-left {\n        margin-right: 4%;\n      }\n      ha-climate-control.range-control-right {\n        margin-left: 4%;\n      }\n\n      .humidity {\n        --paper-slider-active-color: var(--paper-blue-400);\n        --paper-slider-secondary-color: var(--paper-blue-400);\n      }\n\n      .single-row {\n        padding: 8px 0;\n      }\n    "],["\n      :host {\n        color: var(--primary-text-color);\n      }\n\n      .container-hvac_modes iron-icon,\n      .container-fan_list iron-icon,\n      .container-swing_list iron-icon {\n        margin: 22px 16px 0 0;\n      }\n\n      ha-paper-dropdown-menu {\n        width: 100%;\n      }\n\n      paper-item {\n        cursor: pointer;\n      }\n\n      ha-paper-slider {\n        width: 100%;\n      }\n\n      .container-humidity .single-row {\n        display: flex;\n        height: 50px;\n      }\n\n      .target-humidity {\n        width: 90px;\n        font-size: 200%;\n        margin: auto;\n        direction: ltr;\n      }\n\n      ha-climate-control.range-control-left,\n      ha-climate-control.range-control-right {\n        float: left;\n        width: 46%;\n      }\n      ha-climate-control.range-control-left {\n        margin-right: 4%;\n      }\n      ha-climate-control.range-control-right {\n        margin-left: 4%;\n      }\n\n      .humidity {\n        --paper-slider-active-color: var(--paper-blue-400);\n        --paper-slider-secondary-color: var(--paper-blue-400);\n      }\n\n      .single-row {\n        padding: 8px 0;\n      }\n    "])))},enumerable:!0,configurable:!0}),g.c([Object(f.f)()],e.prototype,"hass",void 0),g.c([Object(f.f)()],e.prototype,"stateObj",void 0),e}(f.a);customElements.define("more-info-climate",rt);i(115),i(191),i(141);customElements.define("more-info-configurator",class extends n.a{static get template(){return a.a`
      <style include="iron-flex"></style>
      <style>
        p {
          margin: 8px 0;
        }

        a {
          color: var(--primary-color);
        }

        p > img {
          max-width: 100%;
        }

        p.center {
          text-align: center;
        }

        p.error {
          color: #c62828;
        }

        p.submit {
          text-align: center;
          height: 41px;
        }

        paper-spinner {
          width: 14px;
          height: 14px;
          margin-right: 20px;
        }

        [hidden] {
          display: none;
        }
      </style>

      <div class="layout vertical">
        <template is="dom-if" if="[[isConfigurable]]">
          <ha-markdown
            content="[[stateObj.attributes.description]]"
          ></ha-markdown>

          <p class="error" hidden$="[[!stateObj.attributes.errors]]">
            [[stateObj.attributes.errors]]
          </p>

          <template is="dom-repeat" items="[[stateObj.attributes.fields]]">
            <paper-input
              label="[[item.name]]"
              name="[[item.id]]"
              type="[[item.type]]"
              on-change="fieldChanged"
            ></paper-input>
          </template>

          <p class="submit" hidden$="[[!stateObj.attributes.submit_caption]]">
            <mwc-button
              raised=""
              disabled="[[isConfiguring]]"
              on-click="submitClicked"
            >
              <paper-spinner
                active="[[isConfiguring]]"
                hidden="[[!isConfiguring]]"
                alt="Configuring"
              ></paper-spinner>
              [[stateObj.attributes.submit_caption]]
            </mwc-button>
          </p>
        </template>
      </div>
    `}static get properties(){return{stateObj:{type:Object},action:{type:String,value:"display"},isConfigurable:{type:Boolean,computed:"computeIsConfigurable(stateObj)"},isConfiguring:{type:Boolean,value:!1},fieldInput:{type:Object,value:function(){return{}}}}}computeIsConfigurable(t){return"configure"===t.state}fieldChanged(t){var e=t.target;this.fieldInput[e.name]=e.value}submitClicked(){var t={configure_id:this.stateObj.attributes.configure_id,fields:this.fieldInput};this.isConfiguring=!0,this.hass.callService("configurator","configure",t).then(function(){this.isConfiguring=!1}.bind(this),function(){this.isConfiguring=!1}.bind(this))}});i(169);function ot(t,e){return t&&t.attributes.supported_features?Object.keys(e).map(function(i){return Object(j.a)(t,Number(i))?e[i]:""}).filter(function(t){return""!==t}).join(" "):""}customElements.define("ha-labeled-slider",class extends n.a{static get template(){return a.a`
      <style>
        :host {
          display: block;
        }

        .title {
          margin-bottom: 16px;
          opacity: var(--dark-primary-opacity);
        }

        ha-icon {
          float: left;
          margin-top: 4px;
          opacity: var(--dark-secondary-opacity);
        }

        ha-paper-slider {
          background-image: var(--ha-slider-background);
        }
      </style>

      <div class="title">[[caption]]</div>
      <div class="extra-container"><slot name="extra"></slot></div>
      <div class="slider-container">
        <ha-icon icon="[[icon]]" hidden$="[[!icon]]"></ha-icon>
        <ha-paper-slider
          min="[[min]]"
          max="[[max]]"
          step="[[step]]"
          pin="[[pin]]"
          disabled="[[disabled]]"
          disabled="[[disabled]]"
          value="{{value}}"
        ></ha-paper-slider>
      </div>
    `}static get properties(){return{caption:String,disabled:Boolean,min:Number,max:Number,pin:Boolean,step:Number,extra:{type:Boolean,value:!1},ignoreBarTouch:{type:Boolean,value:!0},icon:{type:String,value:""},value:{type:Number,notify:!0}}}});const st={128:"has-set_tilt_position"};customElements.define("more-info-cover",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <style include="iron-flex"></style>
      <style>
        .current_position,
        .tilt {
          max-height: 0px;
          overflow: hidden;
        }

        .has-current_position .current_position,
        .has-set_tilt_position .tilt,
        .has-current_tilt_position .tilt {
          max-height: 208px;
        }

        [invisible] {
          visibility: hidden !important;
        }
      </style>
      <div class$="[[computeClassNames(stateObj)]]">
        <div class="current_position">
          <ha-labeled-slider
            caption="[[localize('ui.card.cover.position')]]"
            pin=""
            value="{{coverPositionSliderValue}}"
            disabled="[[!entityObj.supportsSetPosition]]"
            on-change="coverPositionSliderChanged"
          ></ha-labeled-slider>
        </div>

        <div class="tilt">
          <ha-labeled-slider
            caption="[[localize('ui.card.cover.tilt_position')]]"
            pin=""
            extra=""
            value="{{coverTiltPositionSliderValue}}"
            disabled="[[!entityObj.supportsSetTiltPosition]]"
            on-change="coverTiltPositionSliderChanged"
          >
            <ha-cover-tilt-controls
              slot="extra"
              hidden$="[[entityObj.isTiltOnly]]"
              hass="[[hass]]"
              state-obj="[[stateObj]]"
            ></ha-cover-tilt-controls>
          </ha-labeled-slider>
        </div>
      </div>
    `}static get properties(){return{hass:Object,stateObj:{type:Object,observer:"stateObjChanged"},entityObj:{type:Object,computed:"computeEntityObj(hass, stateObj)"},coverPositionSliderValue:Number,coverTiltPositionSliderValue:Number}}computeEntityObj(t,e){return new l.a(t,e)}stateObjChanged(t){t&&this.setProperties({coverPositionSliderValue:t.attributes.current_position,coverTiltPositionSliderValue:t.attributes.current_tilt_position})}computeClassNames(t){return[d(t,["current_position","current_tilt_position"]),ot(t,st)].join(" ")}coverPositionSliderChanged(t){this.entityObj.setCoverPosition(t.target.value)}coverTiltPositionSliderChanged(t){this.entityObj.setCoverTiltPosition(t.target.value)}});const lt={DOMAIN_DEVICE_CLASS:{binary_sensor:["battery","cold","connectivity","door","garage_door","gas","heat","light","lock","moisture","motion","moving","occupancy","opening","plug","power","presence","problem","safety","smoke","sound","vibration","window"],cover:["awning","blind","curtain","damper","door","garage","shade","shutter","window"],sensor:["battery","humidity","illuminance","temperature","pressure","power","signal_strength"],switch:["switch","outlet"]},UNKNOWN_TYPE:"json",ADD_TYPE:"key-value",TYPE_TO_TAG:{string:"ha-customize-string",json:"ha-customize-string",icon:"ha-customize-icon",boolean:"ha-customize-boolean",array:"ha-customize-array","key-value":"ha-customize-key-value"}};lt.LOGIC_STATE_ATTRIBUTES=lt.LOGIC_STATE_ATTRIBUTES||{entity_picture:void 0,friendly_name:{type:"string",description:"Name"},icon:{type:"icon"},emulated_hue:{type:"boolean",domains:["emulated_hue"]},emulated_hue_name:{type:"string",domains:["emulated_hue"]},haaska_hidden:void 0,haaska_name:void 0,homebridge_hidden:{type:"boolean"},homebridge_name:{type:"string"},supported_features:void 0,attribution:void 0,custom_ui_more_info:{type:"string"},custom_ui_state_card:{type:"string"},device_class:{type:"array",options:lt.DOMAIN_DEVICE_CLASS,description:"Device class",domains:["binary_sensor","cover","sensor","switch"]},hidden:{type:"boolean",description:"Hide from UI"},assumed_state:{type:"boolean",domains:["switch","light","cover","climate","fan","group","water_heater"]},initial_state:{type:"string",domains:["automation"]},unit_of_measurement:{type:"string"}};var ct=lt;customElements.define("ha-attributes",class extends n.a{static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        .data-entry .value {
          max-width: 200px;
          overflow-wrap: break-word;
        }
        .attribution {
          color: var(--secondary-text-color);
          text-align: right;
        }
      </style>

      <div class="layout vertical">
        <template
          is="dom-repeat"
          items="[[computeDisplayAttributes(stateObj, filtersArray)]]"
          as="attribute"
        >
          <div class="data-entry layout justified horizontal">
            <div class="key">[[formatAttribute(attribute)]]</div>
            <div class="value">
              [[formatAttributeValue(stateObj, attribute)]]
            </div>
          </div>
        </template>
        <div class="attribution" hidden$="[[!computeAttribution(stateObj)]]">
          [[computeAttribution(stateObj)]]
        </div>
      </div>
    `}static get properties(){return{stateObj:{type:Object},extraFilters:{type:String,value:""},filtersArray:{type:Array,computed:"computeFiltersArray(extraFilters)"}}}computeFiltersArray(t){return Object.keys(ct.LOGIC_STATE_ATTRIBUTES).concat(t?t.split(","):[])}computeDisplayAttributes(t,e){return t?Object.keys(t.attributes).filter(function(t){return-1===e.indexOf(t)}):[]}formatAttribute(t){return t.replace(/_/g," ")}formatAttributeValue(t,e){var i=t.attributes[e];return null===i?"-":Array.isArray(i)?i.join(", "):i instanceof Object?JSON.stringify(i,null,2):i}computeAttribution(t){return t.attributes.attribution}});customElements.define("more-info-default",class extends n.a{static get template(){return a.a`
      <ha-attributes state-obj="[[stateObj]]"></ha-attributes>
    `}static get properties(){return{stateObj:{type:Object}}}});customElements.define("more-info-fan",class extends(Object(s.a)(Object(N.a)(n.a))){static get template(){return a.a`
      <style include="iron-flex"></style>
      <style>
        .container-speed_list,
        .container-direction,
        .container-oscillating {
          display: none;
        }

        .has-speed_list .container-speed_list,
        .has-direction .container-direction,
        .has-oscillating .container-oscillating {
          display: block;
        }

        ha-paper-dropdown-menu {
          width: 100%;
        }

        paper-item {
          cursor: pointer;
        }
      </style>

      <div class$="[[computeClassNames(stateObj)]]">
        <div class="container-speed_list">
          <ha-paper-dropdown-menu
            label-float=""
            dynamic-align=""
            label="[[localize('ui.card.fan.speed')]]"
          >
            <paper-listbox
              slot="dropdown-content"
              selected="[[stateObj.attributes.speed]]"
              on-selected-changed="speedChanged"
              attr-for-selected="item-name"
            >
              <template
                is="dom-repeat"
                items="[[stateObj.attributes.speed_list]]"
              >
                <paper-item item-name$="[[item]]">[[item]]</paper-item>
              </template>
            </paper-listbox>
          </ha-paper-dropdown-menu>
        </div>

        <div class="container-oscillating">
          <div class="center horizontal layout single-row">
            <div class="flex">[[localize('ui.card.fan.oscillate')]]</div>
            <paper-toggle-button
              checked="[[oscillationToggleChecked]]"
              on-change="oscillationToggleChanged"
            >
            </paper-toggle-button>
          </div>
        </div>

        <div class="container-direction">
          <div class="direction">
            <div>[[localize('ui.card.fan.direction')]]</div>
            <paper-icon-button
              icon="hass:rotate-left"
              on-click="onDirectionReverse"
              title="[[localize('ui.card.fan.reverse')]]"
              disabled="[[computeIsRotatingReverse(stateObj)]]"
            ></paper-icon-button>
            <paper-icon-button
              icon="hass:rotate-right"
              on-click="onDirectionForward"
              title="[[localize('ui.card.fan.forward')]]"
              disabled="[[computeIsRotatingForward(stateObj)]]"
            ></paper-icon-button>
          </div>
        </div>
      </div>

      <ha-attributes
        state-obj="[[stateObj]]"
        extra-filters="speed,speed_list,oscillating,direction"
      ></ha-attributes>
    `}static get properties(){return{hass:{type:Object},stateObj:{type:Object,observer:"stateObjChanged"},oscillationToggleChecked:{type:Boolean}}}stateObjChanged(t,e){t&&this.setProperties({oscillationToggleChecked:t.attributes.oscillating}),e&&setTimeout(()=>{this.fire("iron-resize")},500)}computeClassNames(t){return"more-info-fan "+d(t,["oscillating","speed_list","direction"])}speedChanged(t){var e=this.stateObj.attributes.speed,i=t.detail.value;i&&e!==i&&this.hass.callService("fan","turn_on",{entity_id:this.stateObj.entity_id,speed:i})}oscillationToggleChanged(t){var e=this.stateObj.attributes.oscillating,i=t.target.checked;e!==i&&this.hass.callService("fan","oscillate",{entity_id:this.stateObj.entity_id,oscillating:i})}onDirectionReverse(){this.hass.callService("fan","set_direction",{entity_id:this.stateObj.entity_id,direction:"reverse"})}onDirectionForward(){this.hass.callService("fan","set_direction",{entity_id:this.stateObj.entity_id,direction:"forward"})}computeIsRotatingReverse(t){return"reverse"===t.attributes.direction}computeIsRotatingForward(t){return"forward"===t.attributes.direction}});var dt=i(3);customElements.define("more-info-group",class extends n.a{static get template(){return a.a`
      <style>
        .child-card {
          margin-bottom: 8px;
        }

        .child-card:last-child {
          margin-bottom: 0;
        }
      </style>

      <div id="groupedControlDetails"></div>
      <template is="dom-repeat" items="[[states]]" as="state">
        <div class="child-card">
          <state-card-content
            state-obj="[[state]]"
            hass="[[hass]]"
          ></state-card-content>
        </div>
      </template>
    `}static get properties(){return{hass:{type:Object},stateObj:{type:Object},states:{type:Array,computed:"computeStates(stateObj, hass)"}}}static get observers(){return["statesChanged(stateObj, states)"]}computeStates(t,e){for(var i=[],a=t.attributes.entity_id||[],n=0;n<a.length;n++){var r=e.states[a[n]];r&&i.push(r)}return i}statesChanged(t,e){let i=!1,a=!1;if(e&&e.length>0){const n=e.find(t=>"on"===t.state)||e[0];if("group"!==(a=Object(O.a)(n))){i={...n,entity_id:t.entity_id,attributes:{...n.attributes}};for(let t=0;t<e.length;t++)if(a!==Object(O.a)(e[t])){i=!1;break}}}if(i)D(this.$.groupedControlDetails,"MORE-INFO-"+a.toUpperCase(),{stateObj:i,hass:this.hass});else{const t=Object(dt.a)(this.$.groupedControlDetails);t.lastChild&&t.removeChild(t.lastChild)}}});i(260);customElements.define("ha-history_graph-card",class extends(Object(N.a)(n.a)){static get template(){return a.a`
      <style>
        paper-card:not([dialog]) .content {
          padding: 0 16px 16px;
        }
        paper-card[dialog] {
          padding-top: 16px;
          background-color: transparent;
        }
        paper-card {
          width: 100%;
          /* prevent new stacking context, chart tooltip needs to overflow */
          position: static;
        }
        .header {
          @apply --paper-font-headline;
          line-height: 40px;
          color: var(--primary-text-color);
          padding: 20px 16px 12px;
          @apply --paper-font-common-nowrap;
        }
        paper-card[dialog] .header {
          display: none;
        }
      </style>
      <ha-state-history-data
        hass="[[hass]]"
        filter-type="recent-entity"
        entity-id="[[computeHistoryEntities(stateObj)]]"
        data="{{stateHistory}}"
        is-loading="{{stateHistoryLoading}}"
        cache-config="[[cacheConfig]]"
      ></ha-state-history-data>
      <paper-card
        dialog$="[[inDialog]]"
        on-click="cardTapped"
        elevation="[[computeElevation(inDialog)]]"
      >
        <div class="header">[[computeTitle(stateObj)]]</div>
        <div class="content">
          <state-history-charts
            hass="[[hass]]"
            history-data="[[stateHistory]]"
            is-loading-data="[[stateHistoryLoading]]"
            up-to-now
            no-single
          >
          </state-history-charts>
        </div>
      </paper-card>
    `}static get properties(){return{hass:Object,stateObj:{type:Object,observer:"stateObjObserver"},inDialog:{type:Boolean,value:!1},stateHistory:Object,stateHistoryLoading:Boolean,cacheConfig:{type:Object,value:{refresh:0,cacheKey:null,hoursToShow:24}}}}stateObjObserver(t){t&&(this.cacheConfig.cacheKey===t.entity_id&&this.cacheConfig.refresh===(t.attributes.refresh||0)&&this.cacheConfig.hoursToShow===(t.attributes.hours_to_show||24)||(this.cacheConfig={refresh:t.attributes.refresh||0,cacheKey:t.entity_id,hoursToShow:t.attributes.hours_to_show||24}))}computeTitle(t){return Object(r.a)(t)}computeContentClass(t){return t?"":"content"}computeHistoryEntities(t){return t.attributes.entity_id}computeElevation(t){return t?0:1}cardTapped(t){window.matchMedia("(min-width: 610px) and (min-height: 550px)").matches&&(t.stopPropagation(),this.fire("hass-more-info",{entityId:this.stateObj.entity_id}))}});customElements.define("more-info-history_graph",class extends n.a{static get template(){return a.a`
      <style>
        :host {
          display: block;
          margin-bottom: 6px;
        }
      </style>
      <ha-history_graph-card
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog=""
      >
        <ha-attributes state-obj="[[stateObj]]"></ha-attributes>
      </ha-history_graph-card>
    `}static get properties(){return{hass:Object,stateObj:Object}}});i(210),i(193),i(284);const pt=a.a`<dom-module id="lumo-date-picker-overlay" theme-for="vaadin-date-picker-overlay">
  <template>
    <style include="lumo-menu-overlay">
      [part="overlay"] {
        /*
        Width:
            date cell widths
          + month calendar side padding
          + year scroller width
        */
        width:
          calc(
              var(--lumo-size-m) * 7
            + var(--lumo-space-xs) * 2
            + 57px
          );
        height: 100%;
        max-height: calc(var(--lumo-size-m) * 14);
        overflow: hidden;
        -webkit-tap-highlight-color: transparent;
      }

      [part="content"] {
        padding: 0;
        height: 100%;
        overflow: hidden;
        -webkit-mask-image: none;
        mask-image: none;
      }

      @media (max-width: 420px), (max-height: 420px) {
        [part="overlay"] {
          width: 100vw;
          height: 70vh;
          max-height: 70vh;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(pt.content);i(199),i(194),i(211);const ut=a.a`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--_lumo-button-color, var(--lumo-primary-text-color));
        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(ut.content);var ht=i(46),mt=i(197);const bt=t=>(class extends((t=>(class extends t{static get properties(){var t={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(t.tabIndex=t.tabindex),t}}))(t)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",t=>{t.composedPath()[0]===this?this._focus(t):-1===t.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)}),this.addEventListener("focusout",t=>this._setFocused(!1)),super.ready();const t=t=>{t.composed||t.target.dispatchEvent(new CustomEvent(t.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",t),this.shadowRoot.addEventListener("focusout",t),this.addEventListener("keydown",t=>{if(!t.defaultPrevented&&9===t.keyCode)if(t.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0);else{const t=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(t&&parseFloat(t[1])>=63&&parseFloat(t[1])<66&&this.parentNode&&this.nextSibling){const t=document.createElement("input");t.style.position="absolute",t.style.opacity=0,t.tabIndex=this.tabIndex,this.parentNode.insertBefore(t,this.nextSibling),t.focus(),t.addEventListener("focusout",()=>this.parentNode.removeChild(t))}}}),!this.autofocus||this.focused||this.disabled||window.requestAnimationFrame(()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")}),this._boundKeydownListener=this._bodyKeydownListener.bind(this),this._boundKeyupListener=this._bodyKeyupListener.bind(this)}connectedCallback(){super.connectedCallback(),document.body.addEventListener("keydown",this._boundKeydownListener,!0),document.body.addEventListener("keyup",this._boundKeyupListener,!0)}disconnectedCallback(){super.disconnectedCallback(),document.body.removeEventListener("keydown",this._boundKeydownListener,!0),document.body.removeEventListener("keyup",this._boundKeyupListener,!0),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){t?this.setAttribute("focused",""):this.removeAttribute("focused"),t&&this._tabPressed?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}_bodyKeydownListener(t){this._tabPressed=9===t.keyCode}_bodyKeyupListener(){this._tabPressed=!1}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(t){this._isShiftTabbing||(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement.blur(),this._setFocused(!1)}_disabledChanged(t){this.focusElement.disabled=t,t?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(t){void 0!==t&&(this.focusElement.tabIndex=t),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=t=void 0),window.ShadyDOM&&this.setProperties({tabIndex:t,tabindex:t})}click(){this.disabled||super.click()}});var gt=i(12),ft=i(22),vt=i(25);const yt=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;function _t(t,e){if("function"!=typeof t)return;const i=yt.exec(t.toString());if(i)try{t=new Function(i[1])}catch(a){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",a)}return t(e)}window.Vaadin=window.Vaadin||{};const wt=function(t,e){if(window.Vaadin.developmentMode)return _t(t,e)};function xt(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&!_t(function(){return!0})&&!function(){if(window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients){const t=Object.keys(window.Vaadin.Flow.clients).map(t=>window.Vaadin.Flow.clients[t]).filter(t=>t.productionMode);if(t.length>0)return!0}return!1}()}catch(t){return!1}}());const kt=function(){return wt(xt)};let Ot;window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){kt&&kt()};const jt=t=>(class extends t{static _finalizeClass(){super._finalizeClass(),this.is&&(window.Vaadin.registrations.push(this),window.Vaadin.developmentModeCallback&&(Ot=ft.a.debounce(Ot,gt.b,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Object(vt.a)(Ot)))}ready(){super.ready(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}});var Ct=i(36);class St extends(jt(bt(Object(mt.a)(Object(ht.a)(n.a))))){static get template(){return a.a`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.2.0"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){Object(Ct.b)(this,"down",()=>!this.disabled&&this.setAttribute("active","")),Object(Ct.b)(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",t=>!this.disabled&&[13,32].indexOf(t.keyCode)>=0&&this.setAttribute("active","")),this.addEventListener("keyup",()=>this.removeAttribute("active")),this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}customElements.define(St.is,St);const Dt=a.a`<dom-module id="lumo-date-picker-overlay-content" theme-for="vaadin-date-picker-overlay-content">
  <template>
    <style>
      :host {
        position: relative;
        background-color: transparent;
        /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
        background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
        background-size: 57px 100%;
        background-position: top right;
        background-repeat: no-repeat;
        cursor: default;
      }

      /* Month scroller */

      [part="months"] {
        /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
        --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
        --vaadin-infinite-scroller-buffer-offset: 20%;
        -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
        mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
        position: relative;
        margin-right: 57px;
      }

      /* Year scroller */

      [part="years"] {
        /* TODO get rid of fixed magic number */
        --vaadin-infinite-scroller-buffer-width: 97px;
        width: 57px;
        height: auto;
        top: 0;
        bottom: 0;
        font-size: var(--lumo-font-size-s);
        box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
        -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
        mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      }

      [part="year-number"],
      [part="year-separator"] {
        opacity: 0.5;
        transition: 0.2s opacity;
      }

      [part="years"]:hover [part="year-number"],
      [part="years"]:hover [part="year-separator"] {
        opacity: 1;
      }

      /* TODO unsupported selector */
      #scrollers {
        position: static;
        display: block;
      }

      /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the
       * width of the year scroller */
      #scrollers[desktop] [part="months"] {
        right: auto;
      }

      /* Year scroller position indicator */
      [part="years"]::before {
        border: none;
        width: 1em;
        height: 1em;
        background-color: var(--lumo-base-color);
        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
        transform: translate(-75%, -50%) rotate(45deg);
        border-top-right-radius: calc(var(--lumo-border-radius) / 2);
        box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
        z-index: 1;
      }

      [part="year-number"],
      [part="year-separator"] {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50%;
        transform: translateY(-50%);
      }

      [part="years"] [part="year-separator"]::after {
        color: var(--lumo-disabled-text-color);
        content: "•";
      }

      /* Current year */

      [part="years"] [part="year-number"][current] {
        color: var(--lumo-primary-text-color);
      }

      /* Toolbar (footer) */

      [part="toolbar"] {
        padding: var(--lumo-space-s);
        box-shadow: 0 -1px 0 0 var(--lumo-contrast-10pct);
        border-bottom-left-radius: var(--lumo-border-radius);
        margin-right: 57px;
      }

      @supports (mask-image: linear-gradient(#000, #000)) or (-webkit-mask-image: linear-gradient(#000, #000)) {
        [part="toolbar"] {
          box-shadow: none;
        }
      }

      /* Today and Cancel buttons */

      /* TODO: Would be great if I could apply the "tertiary" theme from here instead of copying those styles */
      [part="toolbar"] [part\$="button"] {
        background-color: transparent;
        margin: 0;
        min-width: 0;
        padding: 0 0.75em;
      }

      /* Narrow viewport mode (fullscreen) */

      :host([fullscreen]) [part="toolbar"] {
        order: -1;
        background-color: var(--lumo-base-color);
      }

      :host([fullscreen]) [part="overlay-header"] {
        order: -2;
        height: var(--lumo-size-m);
        padding: var(--lumo-space-s);
        position: absolute;
        left: 0;
        right: 0;
        justify-content: center;
      }

      :host([fullscreen]) [part="toggle-button"],
      :host([fullscreen]) [part="clear-button"],
      [part="overlay-header"] [part="label"] {
        display: none;
      }

      /* Very narrow screen (year scroller initially hidden) */

      [part="years-toggle-button"] {
        position: relative;
        right: auto;
        display: flex;
        align-items: center;
        height: var(--lumo-size-s);
        padding: 0 0.5em;
        border-radius: var(--lumo-border-radius);
        z-index: 3;
        color: var(--lumo-primary-text-color);
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      :host([years-visible]) [part="years-toggle-button"] {
        background-color: var(--lumo-primary-color);
        color: var(--lumo-primary-contrast-color);
      }

      [part="years-toggle-button"]::before {
        content: none;
      }

      /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */
      @media screen and (max-width: 374px) {
        :host {
          background-image: none;
        }

        [part="years"] {
          background-color: var(--lumo-shade-5pct);
        }

        [part="toolbar"],
        [part="months"] {
          margin-right: 0;
        }

        /* TODO make date-picker adapt to the width of the years part */
        [part="years"] {
          --vaadin-infinite-scroller-buffer-width: 90px;
          width: 50px;
        }

        :host([years-visible]) [part="months"] {
          padding-left: 50px;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Dt.content);const Tt=a.a`<dom-module id="lumo-month-calendar" theme-for="vaadin-month-calendar">
  <template>
    <style>
      :host {
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        font-size: var(--lumo-font-size-m);
        color: var(--lumo-body-text-color);
        text-align: center;
        padding: 0 var(--lumo-space-xs);
      }

      /* Month header */

      [part="month-header"] {
        color: var(--lumo-header-text-color);
        font-size: var(--lumo-font-size-l);
        line-height: 1;
        font-weight: 500;
        margin-bottom: var(--lumo-space-m);
      }

      /* Week days and numbers */

      [part="weekdays"],
      [part="weekday"],
      [part="week-numbers"] {
        font-size: var(--lumo-font-size-xs);
        line-height: 1;
        color: var(--lumo-tertiary-text-color);
      }

      [part="weekdays"] {
        margin-bottom: var(--lumo-space-s);
      }

      /* TODO should have part="week-number" for the cell in weekdays-container */
      [part="weekday"]:empty,
      [part="week-numbers"] {
        width: var(--lumo-size-xs);
      }

      /* Date and week number cells */

      [part="date"],
      [part="week-number"] {
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: var(--lumo-size-m);
        position: relative;
      }

      [part="date"] {
        transition: color 0.1s;
      }

      /* Today date */

      [part="date"][today] {
        color: var(--lumo-primary-text-color);
      }

      /* Focused date */

      [part="date"]::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 2em;
        min-height: 2em;
        width: 80%;
        height: 80%;
        max-height: 100%;
        max-width: 100%;
        border-radius: var(--lumo-border-radius);
      }

      [part="date"][focused]::before {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      :host(:not([focused])) [part="date"][focused]::before {
        animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
      }

      @keyframes vaadin-date-picker-month-calendar-focus-date {
        50% {
          box-shadow: 0 0 0 2px transparent;
        }
      }

      /* TODO should not rely on the role attribute */
      [part="date"][role="button"]:not([disabled]):not([selected]):hover::before {
        background-color: var(--lumo-primary-color-10pct);
      }

      [part="date"][selected] {
        color: var(--lumo-primary-contrast-color);
      }

      [part="date"][selected]::before {
        background-color: var(--lumo-primary-color);
      }

      [part="date"][disabled] {
        color: var(--lumo-disabled-text-color);
      }

      @media (pointer: coarse) {
        [part="date"]:hover:not([selected])::before,
        [part="date"][focused]:not([selected])::before {
          display: none;
        }

        [part="date"][role="button"]:not([disabled]):active::before {
          display: block;
        }

        [part="date"][selected]::before {
          box-shadow: none;
        }
      }

      /* Disabled */

      :host([disabled]) * {
        color: var(--lumo-disabled-text-color) !important;
      }
    </style>
  </template>
</dom-module><custom-style>
  <style>
    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 2px transparent;
      }
    }
  </style>
</custom-style>`;document.head.appendChild(Tt.content);i(241);const Et=document.createElement("template");Et.innerHTML='<dom-module id="lumo-field-button">\n  <template>\n    <style>\n      [part$="button"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$="button"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$="button"],\n      :host([readonly]) [part$="button"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$="button"]::before {\n        font-family: "lumo-icons";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Et.content);const It=document.createElement("template");It.innerHTML='<dom-module id="lumo-required-field">\n  <template>\n    <style>\n      [part="label"] {\n        align-self: flex-start;\n        color: var(--lumo-secondary-text-color);\n        font-weight: 500;\n        font-size: var(--lumo-font-size-s);\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        transition: color 0.2s;\n        line-height: 1;\n        padding-bottom: 0.5em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      :host([has-label])::before {\n        margin-top: calc(var(--lumo-font-size-s) * 1.5);\n      }\n\n      :host([has-label]) {\n        padding-top: var(--lumo-space-m);\n      }\n\n      :host([required]) [part="label"] {\n        padding-right: 1em;\n      }\n\n      [part="label"]::after {\n        content: var(--lumo-required-field-indicator, "•");\n        transition: opacity 0.2s;\n        opacity: 0;\n        color: var(--lumo-primary-text-color);\n        position: absolute;\n        right: 0;\n        width: 1em;\n        text-align: center;\n      }\n\n      :host([required]:not([has-value])) [part="label"]::after {\n        opacity: 1;\n      }\n\n      :host([invalid]) [part="label"]::after {\n        color: var(--lumo-error-text-color);\n      }\n\n      [part="error-message"] {\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n        color: var(--lumo-error-text-color);\n        will-change: max-height;\n        transition: 0.4s max-height;\n        max-height: 5em;\n      }\n\n      /* Margin that doesn’t reserve space when there’s no error message */\n      [part="error-message"]:not(:empty)::before,\n      [part="error-message"]:not(:empty)::after {\n        content: "";\n        display: block;\n        height: 0.4em;\n      }\n\n      :host(:not([invalid])) [part="error-message"] {\n        max-height: 0;\n        overflow: hidden;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(It.content);const At=a.a`<dom-module id="lumo-text-field" theme-for="vaadin-text-field">
  <template>
    <style include="lumo-required-field lumo-field-button">
      :host {
        --lumo-text-field-size: var(--lumo-size-m);
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: var(--lumo-space-xs) 0;
      }

      :host::before {
        height: var(--lumo-text-field-size);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      :host([focused]:not([readonly])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        cursor: inherit;
        min-height: var(--lumo-text-field-size);
        padding: 0 0.25em;
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      }

      [part="value"]:focus,
      [part="input-field"] ::slotted(input):focus,
      [part="input-field"] ::slotted(textarea):focus {
        -webkit-mask-image: none;
        mask-image: none;
      }

      /*
        TODO: CSS custom property in \`mask-image\` causes crash in Edge
        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/
      */
      @-moz-document url-prefix() {
        [part="value"],
        [part="input-field"] ::slotted(input),
        [part="input-field"] ::slotted(textarea),
        [part="input-field"] ::slotted([part="value"]) {
          mask-image: var(--_lumo-text-field-overflow-mask-image);
        }
      }

      [part="value"]::-webkit-input-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]:-ms-input-placeholder {
        color: inherit;
        opacity: 0.5;
      }

      [part="value"]::-moz-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]::placeholder {
        color: inherit;
        transition: opacity 0.175s 0.1s;
        opacity: 0.5;
      }

      [part="input-field"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);
        font-weight: 500;
        line-height: 1;
        position: relative;
        cursor: text;
        box-sizing: border-box;
      }

      /* Used for hover and activation effects */
      [part="input-field"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: inherit;
        pointer-events: none;
        background-color: var(--lumo-contrast-50pct);
        opacity: 0;
        transition: transform 0.15s, opacity 0.2s;
        transform-origin: 100% 0;
      }

      /* Hover */

      :host(:hover:not([readonly]):not([focused])) [part="label"] {
        color: var(--lumo-body-text-color);
      }

      :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
        opacity: 0.1;
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }

        :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0;
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0.2;
        }
      }

      /* Trigger when not focusing using the keyboard */
      :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
        transform: scaleX(0);
        transition-duration: 0.15s, 1s;
      }

      /* Focus-ring */

      :host([focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Read-only and disabled */
      :host([readonly]) [part="value"]::-webkit-input-placeholder,
      :host([disabled]) [part="value"]::-webkit-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]:-ms-input-placeholder,
      :host([disabled]) [part="value"]:-ms-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::-moz-placeholder,
      :host([disabled]) [part="value"]::-moz-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::placeholder,
      :host([disabled]) [part="value"]::placeholder {
        opacity: 0;
      }

      /* Read-only */

      :host([readonly]) [part="input-field"] {
        color: var(--lumo-secondary-text-color);
        background-color: transparent;
        cursor: default;
      }

      :host([readonly]) [part="input-field"]::after {
        background-color: transparent;
        opacity: 1;
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      /* Disabled style */

      :host([disabled]) {
        pointer-events: none;
      }

      :host([disabled]) [part="input-field"] {
        background-color: var(--lumo-contrast-5pct);
      }

      :host([disabled]) [part="label"],
      :host([disabled]) [part="value"],
      :host([disabled]) [part="input-field"] ::slotted(*) {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
      }

      /* Invalid style */

      :host([invalid]) [part="input-field"] {
        background-color: var(--lumo-error-color-10pct);
      }

      :host([invalid]) [part="input-field"]::after {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([invalid][focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
      }

      :host([input-prevented]) [part="input-field"] {
        color: var(--lumo-error-text-color);
      }

      /* Small theme */

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-text-field-size: var(--lumo-size-s);
      }

      :host([theme~="small"][has-label]) [part="label"] {
        font-size: var(--lumo-font-size-xs);
      }

      :host([theme~="small"][has-label]) [part="error-message"] {
        font-size: var(--lumo-font-size-xxs);
      }

      /* Text align */

      :host([theme~="align-center"]) [part="value"] {
        text-align: center;
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"]) [part="value"] {
        text-align: right;
        --_lumo-text-field-overflow-mask-image: none;
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-right"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
        }
      }

      /* Slotted content */

      [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
        color: var(--lumo-secondary-text-color);
        font-weight: 400;
      }

      /* Slotted icons */

      [part="input-field"] ::slotted(iron-icon) {
        color: var(--lumo-contrast-60pct);
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(At.content);const zt=document.createElement("template");zt.innerHTML='<dom-module id="vaadin-text-field-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-flex;\n        outline: none;\n      }\n\n      :host::before {\n        content: "\\2003";\n        width: 0;\n        display: inline-block;\n        /* Size and position this element on the same vertical position as the input-field element\n           to make vertical align for the host element work as expected */\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      .vaadin-text-field-container,\n      .vaadin-text-area-container {\n        display: flex;\n        flex-direction: column;\n        min-width: 100%;\n        max-width: 100%;\n        width: var(--vaadin-text-field-default-width, 12em);\n      }\n\n      [part="label"]:empty {\n        display: none;\n      }\n\n      [part="input-field"] {\n        display: flex;\n        align-items: center;\n        flex: auto;\n      }\n\n      .vaadin-text-field-container [part="input-field"] {\n        flex-grow: 0;\n      }\n\n      /* Reset the native input styles */\n      [part="value"],\n      [part="input-field"] ::slotted(input),\n      [part="input-field"] ::slotted(textarea) {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        outline: none;\n        margin: 0;\n        padding: 0;\n        border: 0;\n        border-radius: 0;\n        min-width: 0;\n        font: inherit;\n        font-size: 1em;\n        line-height: normal;\n        color: inherit;\n        background-color: transparent;\n        /* Disable default invalid style in Firefox */\n        box-shadow: none;\n      }\n\n      [part="input-field"] ::slotted(*) {\n        flex: none;\n      }\n\n      [part="value"],\n      [part="input-field"] ::slotted(input),\n      [part="input-field"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part="input-field"] ::slotted([part="value"]) {\n        flex: auto;\n        white-space: nowrap;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      [part="input-field"] ::slotted(textarea) {\n        resize: none;\n      }\n\n      [part="value"]::-ms-clear,\n      [part="input-field"] ::slotted(input)::-ms-clear {\n        display: none;\n      }\n\n      [part="clear-button"] {\n        cursor: default;\n      }\n\n      [part="clear-button"]::before {\n        content: "✕";\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(zt.content);const Mt={default:["list","autofocus","pattern","autocapitalize","autocorrect","maxlength","minlength","name","placeholder","autocomplete","title"],accessible:["disabled","readonly","required","invalid"]},$t={DEFAULT:"default",ACCESSIBLE:"accessible"},Pt=t=>(class extends(bt(t)){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1},errorMessage:{type:String,value:""},i18n:{type:Object,value:()=>({clear:"Clear"})},label:{type:String,value:"",observer:"_labelChanged"},maxlength:{type:Number},minlength:{type:Number},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,reflectToAttribute:!0},required:{type:Boolean,reflectToAttribute:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},hasValue:{type:Boolean,reflectToAttribute:!0},preventInvalidInput:{type:Boolean},_labelId:{type:String},_errorId:{type:String}}}static get observers(){return["_stateChanged(disabled, readonly, clearButtonVisible, hasValue)","_hostPropsChanged("+Mt.default.join(", ")+")","_hostAccessiblePropsChanged("+Mt.accessible.join(", ")+")","_getActiveErrorId(invalid, errorMessage, _errorId)","_getActiveLabelId(label, _labelId)"]}get focusElement(){if(!this.shadowRoot)return;const t=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);return t||this.shadowRoot.querySelector('[part="value"]')}get inputElement(){return this.focusElement}get _slottedTagName(){return"input"}_onInput(t){if(this.__preventInput)return t.stopImmediatePropagation(),void(this.__preventInput=!1);if(this.preventInvalidInput){const t=this.inputElement;if(t.value.length>0&&!this.checkValidity())return t.value=this.value||"",this.setAttribute("input-prevented",""),void(this._inputDebouncer=ft.a.debounce(this._inputDebouncer,gt.d.after(200),()=>{this.removeAttribute("input-prevented")}))}t.__fromClearButton||(this.__userInput=!0),this.value=t.target.value}_stateChanged(t,e,i,a){!t&&!e&&i&&a?this.$.clearButton.removeAttribute("hidden"):this.$.clearButton.setAttribute("hidden",!0)}_onChange(t){if(this._valueClearing)return;const e=new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable});this.dispatchEvent(e)}_valueChanged(t,e){""===t&&void 0===e||(this.hasValue=""!==t&&null!=t,this.__userInput?this.__userInput=!1:(void 0!==t?this.inputElement.value=t:this.value=this.inputElement.value="",this.invalid&&this.validate()))}_labelChanged(t){""!==t&&null!=t?this.setAttribute("has-label",""):this.removeAttribute("has-label")}_onSlotChange(){const t=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);this.value&&(this.inputElement.value=this.value,this.validate()),t&&!this._slottedInput?(this._validateSlottedValue(t),this._addInputListeners(t),this._addIEListeners(t),this._slottedInput=t):!t&&this._slottedInput&&(this._removeInputListeners(this._slottedInput),this._removeIEListeners(this._slottedInput),this._slottedInput=void 0),Object.keys($t).map(t=>$t[t]).forEach(t=>this._propagateHostAttributes(Mt[t].map(t=>this[t]),t))}_hostPropsChanged(...t){this._propagateHostAttributes(t,$t.DEFAULT)}_hostAccessiblePropsChanged(...t){this._propagateHostAttributes(t,$t.ACCESSIBLE)}_validateSlottedValue(t){t.value!==this.value&&(console.warn("Please define value on the vaadin-text-field component!"),t.value="")}_propagateHostAttributes(t,e){const i=this.inputElement,a=Mt[e];"accessible"===e?a.forEach((e,a)=>{this._setOrToggleAttribute(e,t[a],i),this._setOrToggleAttribute(`aria-${e}`,t[a],i)}):a.forEach((e,a)=>{this._setOrToggleAttribute(e,t[a],i)})}_setOrToggleAttribute(t,e,i){t&&i&&(e?i.setAttribute(t,"boolean"==typeof e?"":e):i.removeAttribute(t))}checkValidity(){return this.required||this.pattern||this.maxlength||this.minlength?this.inputElement.checkValidity():!this.invalid}_addInputListeners(t){t.addEventListener("input",this._boundOnInput),t.addEventListener("change",this._boundOnChange),t.addEventListener("blur",this._boundOnBlur),t.addEventListener("focus",this._boundOnFocus)}_removeInputListeners(t){t.removeEventListener("input",this._boundOnInput),t.removeEventListener("change",this._boundOnChange),t.removeEventListener("blur",this._boundOnBlur),t.removeEventListener("focus",this._boundOnFocus)}ready(){super.ready(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this);const t=this.shadowRoot.querySelector('[part="value"]');this._slottedInput=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`),this._addInputListeners(t),this._addIEListeners(t),this._slottedInput&&(this._addIEListeners(this._slottedInput),this._addInputListeners(this._slottedInput)),this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener("slotchange",this._onSlotChange.bind(this)),window.ShadyCSS&&window.ShadyCSS.nativeCss||this.updateStyles(),this.$.clearButton.addEventListener("mousedown",()=>this._valueClearing=!0),this.$.clearButton.addEventListener("mouseleave",()=>this._valueClearing=!1),this.$.clearButton.addEventListener("click",this._onClearButtonClick.bind(this)),this.addEventListener("keydown",this._onKeyDown.bind(this));var e=Pt._uniqueId=1+Pt._uniqueId||0;this._errorId=`${this.constructor.is}-error-${e}`,this._labelId=`${this.constructor.is}-label-${e}`}validate(){return!(this.invalid=!this.checkValidity())}clear(){this.value=""}_onBlur(){this.validate()}_onFocus(){this.autoselect&&(this.inputElement.select(),setTimeout(()=>{this.inputElement.setSelectionRange(0,9999)}))}_onClearButtonClick(t){t.preventDefault(),this.inputElement.focus(),this.clear(),this._valueClearing=!1,navigator.userAgent.match(/Trident/)&&(this.__preventInput=!1);const e=new Event("input",{bubbles:!0,composed:!0});e.__fromClearButton=!0;const i=new Event("change",{bubbles:!this._slottedInput});i.__fromClearButton=!0,this.inputElement.dispatchEvent(e),this.inputElement.dispatchEvent(i)}_onKeyDown(t){27===t.keyCode&&this.clearButtonVisible&&this.clear()}_addIEListeners(t){navigator.userAgent.match(/Trident/)&&(this._shouldPreventInput=()=>{this.__preventInput=!0,requestAnimationFrame(()=>{this.__preventInput=!1})},t.addEventListener("focusin",this._shouldPreventInput),t.addEventListener("focusout",this._shouldPreventInput),this._createPropertyObserver("placeholder",this._shouldPreventInput))}_removeIEListeners(t){navigator.userAgent.match(/Trident/)&&(t.removeEventListener("focusin",this._shouldPreventInput),t.removeEventListener("focusout",this._shouldPreventInput))}_getActiveErrorId(t,e,i){this._setOrToggleAttribute("aria-describedby",e&&t?i:void 0,this.inputElement)}_getActiveLabelId(t,e){this._setOrToggleAttribute("aria-labelledby",t?e:void 0,this.inputElement)}_getErrorMessageAriaHidden(t,e,i){return(!(e&&t?i:void 0)).toString()}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),window.ShadyCSS&&window.ShadyCSS.nativeCss||!/^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(t)||this.updateStyles(),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root){const t="-webkit-backface-visibility";this.root.querySelectorAll("*").forEach(e=>{e.style[t]="visible",e.style[t]=""})}}});class Lt extends(jt(Pt(Object(mt.a)(n.a)))){static get template(){return a.a`
    <style include="vaadin-text-field-shared-styles">
      /* polymer-cli linter breaks with empty line */
    </style>

    <div class="vaadin-text-field-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field">

        <slot name="prefix"></slot>

        <slot name="input">
          <input part="value">
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-field"}static get version(){return"2.4.4"}static get properties(){return{list:{type:String},pattern:{type:String},title:{type:String}}}}customElements.define(Lt.is,Lt);const Bt=a.a`<dom-module id="lumo-date-picker" theme-for="vaadin-date-picker">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-calendar);
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Bt.content);i(129);var Rt=i(240),Vt=i(275),Nt=i(286);class Ft extends(Object(Nt.a)(Vt.a)){static get is(){return"vaadin-date-picker-overlay"}}customElements.define(Ft.is,Ft);var Ht=i(32),Yt=i(96);i(87);const qt=class{static _getISOWeekNumber(t){var e=t.getDay();0===e&&(e=7);var i=4-e,a=new Date(t.getTime()+24*i*3600*1e3),n=new Date(0,0);n.setFullYear(a.getFullYear());var r=a.getTime()-n.getTime(),o=Math.round(r/864e5);return Math.floor(o/7+1)}static _dateEquals(t,e){return t instanceof Date&&e instanceof Date&&t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()}static _dateAllowed(t,e,i){return(!e||t>=e)&&(!i||t<=i)}static _getClosestDate(t,e){return e.filter(t=>void 0!==t).reduce((e,i)=>{return i?e?Math.abs(t.getTime()-i.getTime())<Math.abs(e.getTime()-t.getTime())?i:e:i:e})}static _extractDateParts(t){return{day:t.getDate(),month:t.getMonth(),year:t.getFullYear()}}};class Kt extends(Object(mt.a)(Object(ht.a)(n.a))){static get template(){return a.a`
    <style>
      :host {
        display: block;
      }

      [part="weekdays"],
      #days {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
      }

      #days-container,
      #weekdays-container {
        display: flex;
      }

      [part="week-numbers"] {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-shrink: 0;
      }

      [part="week-numbers"][hidden],
      [part="weekday"][hidden] {
        display: none;
      }

      [part="weekday"],
      [part="date"] {
        /* Would use calc(100% / 7) but it doesn't work nice on IE */
        width: 14.285714286%;
      }

      [part="weekday"]:empty,
      [part="week-numbers"] {
        width: 12.5%;
        flex-shrink: 0;
      }
    </style>

    <div part="month-header" role="heading">[[_getTitle(month, i18n.monthNames)]]</div>
    <div id="monthGrid" on-tap="_handleTap" on-touchend="_preventDefault" on-touchstart="_onMonthGridTouchStart">
      <div id="weekdays-container">
        <div hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]" part="weekday"></div>
        <div part="weekdays">
          <template is="dom-repeat" items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]">
            <div part="weekday" role="heading" aria-label\$="[[item.weekDay]]">[[item.weekDayShort]]</div>
          </template>
        </div>
      </div>
      <div id="days-container">
        <div part="week-numbers" hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]">
          <template is="dom-repeat" items="[[_getWeekNumbers(_days)]]">
            <div part="week-number" role="heading" aria-label\$="[[i18n.week]] [[item]]">[[item]]</div>
          </template>
        </div>
        <div id="days">
          <template is="dom-repeat" items="[[_days]]">
            <div part="date" today\$="[[_isToday(item)]]" selected\$="[[_dateEquals(item, selectedDate)]]" focused\$="[[_dateEquals(item, focusedDate)]]" date="[[item]]" disabled\$="[[!_dateAllowed(item, minDate, maxDate)]]" role\$="[[_getRole(item)]]" aria-label\$="[[_getAriaLabel(item)]]" aria-disabled\$="[[_getAriaDisabled(item, minDate, maxDate)]]">[[_getDate(item)]]</div>
          </template>
        </div>
      </div>
    </div>
`}static get is(){return"vaadin-month-calendar"}static get properties(){return{month:{type:Date,value:new Date},selectedDate:{type:Date,notify:!0},focusedDate:Date,showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Date,value:null},maxDate:{type:Date,value:null},_days:{type:Array,computed:"_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)"]}_dateEquals(t,e){return qt._dateEquals(t,e)}_dateAllowed(t,e,i){return qt._dateAllowed(t,e,i)}_isDisabled(t,e,i){var a=new Date(0,0);a.setFullYear(t.getFullYear()),a.setMonth(t.getMonth()),a.setDate(1);var n=new Date(0,0);return n.setFullYear(t.getFullYear()),n.setMonth(t.getMonth()+1),n.setDate(-1),!(e&&i&&e.getMonth()===i.getMonth()&&e.getMonth()===t.getMonth()&&i.getDate()-e.getDate()>=0)&&(!this._dateAllowed(a,e,i)&&!this._dateAllowed(n,e,i))}_getTitle(t,e){if(void 0!==t&&void 0!==e)return this.i18n.formatTitle(e[t.getMonth()],t.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout(()=>this._notTapping=!0,300)}_dateAdd(t,e){t.setDate(t.getDate()+e)}_applyFirstDayOfWeek(t,e){if(void 0!==t&&void 0!==e)return t.slice(e).concat(t.slice(0,e))}_getWeekDayNames(t,e,i,a){if(void 0!==t&&void 0!==e&&void 0!==i&&void 0!==a)return t=this._applyFirstDayOfWeek(t,a),e=this._applyFirstDayOfWeek(e,a),t=t.map((t,i)=>({weekDay:t,weekDayShort:e[i]}))}_getDate(t){return t?t.getDate():""}_showWeekNumbersChanged(t,e){t&&1===e?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}_showWeekSeparator(t,e){return t&&1===e}_isToday(t){return this._dateEquals(new Date,t)}_getDays(t,e){if(void 0!==t&&void 0!==e){var i=new Date(0,0);for(i.setFullYear(t.getFullYear()),i.setMonth(t.getMonth()),i.setDate(1);i.getDay()!==e;)this._dateAdd(i,-1);for(var a=[],n=i.getMonth(),r=t.getMonth();i.getMonth()===r||i.getMonth()===n;)a.push(i.getMonth()===r?new Date(i.getTime()):null),this._dateAdd(i,1);return a}}_getWeekNumber(t,e){if(void 0!==t&&void 0!==e)return t||(t=e.reduce((t,e)=>!t&&e?e:t)),qt._getISOWeekNumber(t)}_getWeekNumbers(t){return t.map(e=>this._getWeekNumber(e,t)).filter((t,e,i)=>i.indexOf(t)===e)}_handleTap(t){this.ignoreTaps||this._notTapping||!t.target.date||t.target.hasAttribute("disabled")||(this.selectedDate=t.target.date,this.dispatchEvent(new CustomEvent("date-tap",{bubbles:!0,composed:!0})))}_preventDefault(t){t.preventDefault()}_getRole(t){return t?"button":"presentation"}_getAriaLabel(t){if(!t)return"";var e=this._getDate(t)+" "+this.i18n.monthNames[t.getMonth()]+" "+t.getFullYear()+", "+this.i18n.weekdays[t.getDay()];return this._isToday(t)&&(e+=", "+this.i18n.today),e}_getAriaDisabled(t,e,i){if(void 0!==t&&void 0!==e&&void 0!==i)return this._dateAllowed(t,e,i)?"false":"true"}}customElements.define(Kt.is,Kt);var Wt=i(33),Ut=i(67);class Xt extends n.a{static get template(){return a.a`
    <style>
      :host {
        display: block;
        overflow: hidden;
        height: 500px;
      }

      #scroller {
        position: relative;
        height: 100%;
        overflow: auto;
        outline: none;
        margin-right: -40px;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        overflow-x: hidden;
      }

      #scroller.notouchscroll {
        -webkit-overflow-scrolling: auto;
      }

      #scroller::-webkit-scrollbar {
        display: none;
      }

      .buffer {
        position: absolute;
        width: var(--vaadin-infinite-scroller-buffer-width, 100%);
        box-sizing: border-box;
        padding-right: 40px;
        top: var(--vaadin-infinite-scroller-buffer-offset, 0);
        animation: fadein 0.2s;
      }

      @keyframes fadein {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    </style>

    <div id="scroller" on-scroll="_scroll">
      <div class="buffer"></div>
      <div class="buffer"></div>
      <div id="fullHeight"></div>
    </div>
`}static get is(){return"vaadin-infinite-scroller"}static get properties(){return{bufferSize:{type:Number,value:20},_initialScroll:{value:5e5},_initialIndex:{value:0},_buffers:Array,_preventScrollEvent:Boolean,_mayHaveMomentum:Boolean,_initialized:Boolean,active:{type:Boolean,observer:"_activated"}}}ready(){super.ready(),this._buffers=Array.prototype.slice.call(this.root.querySelectorAll(".buffer")),this.$.fullHeight.style.height=2*this._initialScroll+"px";var t=this.querySelector("template");this._TemplateClass=Object(Wt.b)(t,this,{forwardHostProp:function(t,e){"index"!==t&&this._buffers.forEach(i=>{[].forEach.call(i.children,i=>{i._itemWrapper.instance[t]=e})})}}),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&(this.$.scroller.tabIndex=-1)}_activated(t){t&&!this._initialized&&(this._createPool(),this._initialized=!0)}_finishInit(){this._initDone||(this._buffers.forEach(t=>{[].forEach.call(t.children,t=>this._ensureStampedInstance(t._itemWrapper))},this),this._buffers[0].translateY||this._reset(),this._initDone=!0)}_translateBuffer(t){var e=t?1:0;this._buffers[e].translateY=this._buffers[e?0:1].translateY+this._bufferHeight*(e?-1:1),this._buffers[e].style.transform="translate3d(0, "+this._buffers[e].translateY+"px, 0)",this._buffers[e].updated=!1,this._buffers.reverse()}_scroll(){if(!this._scrollDisabled){var t=this.$.scroller.scrollTop;(t<this._bufferHeight||t>2*this._initialScroll-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());var e=this.root.querySelector(".buffer").offsetTop,i=t>this._buffers[1].translateY+this.itemHeight+e,a=t<this._buffers[0].translateY+this.itemHeight+e;(i||a)&&(this._translateBuffer(a),this._updateClones()),this._preventScrollEvent||(this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._mayHaveMomentum=!0),this._preventScrollEvent=!1,this._debouncerScrollFinish=ft.a.debounce(this._debouncerScrollFinish,gt.d.after(200),()=>{var t=this.$.scroller.getBoundingClientRect();this._isVisible(this._buffers[0],t)||this._isVisible(this._buffers[1],t)||(this.position=this.position)})}}set position(t){this._preventScrollEvent=!0,t>this._firstIndex&&t<this._firstIndex+2*this.bufferSize?this.$.scroller.scrollTop=this.itemHeight*(t-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~t,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=t%1*this.itemHeight,this._scrollDisabled=!1),this._mayHaveMomentum&&(this.$.scroller.classList.add("notouchscroll"),this._mayHaveMomentum=!1,setTimeout(()=>{this.$.scroller.classList.remove("notouchscroll")},10))}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}get itemHeight(){if(!this._itemHeightVal){window.ShadyCSS&&window.ShadyCSS.nativeCss||this.updateStyles();const t=window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-infinite-scroller-item-height"):getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),e="background-position";this.$.fullHeight.style.setProperty(e,t);const i=getComputedStyle(this.$.fullHeight).getPropertyValue(e);this.$.fullHeight.style.removeProperty(e),this._itemHeightVal=parseFloat(i)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach(t=>{t.style.transform="translate3d(0, "+t.translateY+"px, 0)"}),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=ft.a.debounce(this._debouncerUpdateClones,gt.d.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()}),this._scrollDisabled=!1}_createPool(){var t=this.getBoundingClientRect();this._buffers.forEach(e=>{for(var i=0;i<this.bufferSize;i++){const i=document.createElement("div");i.style.height=this.itemHeight+"px",i.instance={};const a="vaadin-infinite-scroller-item-content-"+(Xt._contentIndex=Xt._contentIndex+1||0),n=document.createElement("slot");n.setAttribute("name",a),n._itemWrapper=i,e.appendChild(n),i.setAttribute("slot",a),this.appendChild(i),Object(vt.b)(),setTimeout(()=>{this._isVisible(i,t)&&this._ensureStampedInstance(i)},1)}},this),setTimeout(()=>{Object(Ut.a)(this,this._finishInit.bind(this))},1)}_ensureStampedInstance(t){if(!t.firstElementChild){var e=t.instance;t.instance=new this._TemplateClass({}),t.appendChild(t.instance.root),Object.keys(e).forEach(i=>{t.instance.set(i,e[i])})}}_updateClones(t){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;var e=t?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((i,a)=>{if(!i.updated){var n=this._firstIndex+this.bufferSize*a;[].forEach.call(i.children,(i,a)=>{const r=i._itemWrapper;t&&!this._isVisible(r,e)||(r.instance.index=n+a)}),i.updated=!0}},this)}_isVisible(t,e){var i=t.getBoundingClientRect();return i.bottom>e.top&&i.top<e.bottom}}customElements.define(Xt.is,Xt);i(73);const Zt=document.createElement("template");Zt.innerHTML='<dom-module id="vaadin-date-picker-overlay-styles" theme-for="vaadin-date-picker-overlay">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n\n      :host([bottom-aligned]) {\n        justify-content: flex-end;\n      }\n\n      :host([right-aligned]) {\n        align-items: flex-end;\n      }\n\n      :host([right-aligned][dir="rtl"]) {\n        align-items: flex-start;\n      }\n\n      [part="overlay"] {\n        display: flex;\n        flex: auto;\n      }\n\n      [part~="content"] {\n        flex: auto;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Zt.content);class Gt extends(Object(mt.a)(Object(Rt.a)(Object(ht.a)(n.a)))){static get template(){return a.a`
    <style>
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        outline: none;
        background: #fff;
      }

      [part="overlay-header"] {
        display: flex;
        flex-shrink: 0;
        flex-wrap: nowrap;
        align-items: center;
      }

      :host(:not([fullscreen])) [part="overlay-header"] {
        display: none;
      }

      [part="label"] {
        flex-grow: 1;
      }

      [part="clear-button"]:not([showclear]) {
        display: none;
      }

      [part="years-toggle-button"] {
        display: flex;
      }

      [part="years-toggle-button"][desktop] {
        display: none;
      }

      :host(:not([years-visible])) [part="years-toggle-button"]::before {
        transform: rotate(180deg);
      }

      #scrollers {
        display: flex;
        height: 100%;
        width: 100%;
        position: relative;
        overflow: hidden;
      }

      [part="months"],
      [part="years"] {
        height: 100%;
      }

      [part="months"] {
        --vaadin-infinite-scroller-item-height: 270px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      #scrollers[desktop] [part="months"] {
        right: 50px;
        transform: none !important;
      }

      [part="years"] {
        --vaadin-infinite-scroller-item-height: 80px;
        width: 50px;
        position: absolute;
        right: 0;
        transform: translateX(100%);
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        /* Center the year scroller position. */
        --vaadin-infinite-scroller-buffer-offset: 50%;
      }

      #scrollers[desktop] [part="years"] {
        position: absolute;
        transform: none !important;
      }

      [part="years"]::before {
        content: '';
        display: block;
        background: transparent;
        width: 0;
        height: 0;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border-width: 6px;
        border-style: solid;
        border-color: transparent;
        border-left-color: #000;
      }

      :host(.animate) [part="months"],
      :host(.animate) [part="years"] {
        transition: all 200ms;
      }

      [part="toolbar"] {
        display: flex;
        justify-content: space-between;
        z-index: 2;
        flex-shrink: 0;
      }

      [part~="overlay-header"]:not([desktop]) {
        padding-bottom: 40px;
      }

      [part~="years-toggle-button"] {
        position: absolute;
        top: auto;
        right: 8px;
        bottom: 0;
        z-index: 1;
        padding: 8px;
      }

      #announcer {
        display: inline-block;
        position: fixed;
        clip: rect(0, 0, 0, 0);
        clip-path: inset(100%);
      }
    </style>

    <div id="announcer" role="alert" aria-live="polite">
      [[i18n.calendar]]
    </div>

    <div part="overlay-header" on-touchend="_preventDefault" desktop\$="[[_desktopMode]]" aria-hidden="true">
      <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>
      <div part="clear-button" on-tap="_clear" showclear\$="[[_showClear(selectedDate)]]"></div>
      <div part="toggle-button" on-tap="_cancel"></div>

      <div part="years-toggle-button" desktop\$="[[_desktopMode]]" on-tap="_toggleYearScroller" aria-hidden="true">
        [[_yearAfterXMonths(_visibleMonthIndex)]]
      </div>
    </div>

    <div id="scrollers" desktop\$="[[_desktopMode]]" on-track="_track">
      <vaadin-infinite-scroller id="monthScroller" on-custom-scroll="_onMonthScroll" on-touchstart="_onMonthScrollTouchStart" buffer-size="3" active="[[initialPosition]]" part="months">
        <template>
          <vaadin-month-calendar i18n="[[i18n]]" month="[[_dateAfterXMonths(index)]]" selected-date="{{selectedDate}}" focused-date="[[focusedDate]]" ignore-taps="[[_ignoreTaps]]" show-week-numbers="[[showWeekNumbers]]" min-date="[[minDate]]" max-date="[[maxDate]]" focused\$="[[_focused]]" part="month" theme\$="[[theme]]">
          </vaadin-month-calendar>
        </template>
      </vaadin-infinite-scroller>
      <vaadin-infinite-scroller id="yearScroller" on-tap="_onYearTap" on-custom-scroll="_onYearScroll" on-touchstart="_onYearScrollTouchStart" buffer-size="12" active="[[initialPosition]]" part="years">
        <template>
          <div part="year-number" role="button" current\$="[[_isCurrentYear(index)]]" selected\$="[[_isSelectedYear(index, selectedDate)]]">
            [[_yearAfterXYears(index)]]
          </div>
          <div part="year-separator" aria-hidden="true"></div>
        </template>
      </vaadin-infinite-scroller>
    </div>

    <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
      <vaadin-button id="todayButton" part="today-button" disabled="[[!_isTodayAllowed(minDate, maxDate)]]" on-tap="_onTodayTap">
        [[i18n.today]]
      </vaadin-button>
      <vaadin-button id="cancelButton" part="cancel-button" on-tap="_cancel">
        [[i18n.cancel]]
      </vaadin-button>
    </div>

    <iron-media-query query="(min-width: 375px)" query-matches="{{_desktopMode}}"></iron-media-query>
`}static get is(){return"vaadin-date-picker-overlay-content"}static get properties(){return{selectedDate:{type:Date,notify:!0},focusedDate:{type:Date,notify:!0,observer:"_focusedDateChanged"},_focusedMonthDate:Number,initialPosition:{type:Date,observer:"_initialPositionChanged"},_originDate:{value:new Date},_visibleMonthIndex:Number,_desktopMode:Boolean,_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:Date,maxDate:Date,_focused:Boolean,label:String}}ready(){super.ready(),this.setAttribute("tabindex",0),this.addEventListener("keydown",this._onKeydown.bind(this)),Object(Ct.b)(this,"tap",this._stopPropagation),this.addEventListener("focus",this._onOverlayFocus.bind(this)),this.addEventListener("blur",this._onOverlayBlur.bind(this))}connectedCallback(){super.connectedCallback(),this._closeYearScroller(),this._toggleAnimateClass(!0),Object(Ct.f)(this.$.scrollers,"pan-y"),Yt.a.requestAvailability()}announceFocusedDate(){var t=this._currentlyFocusedDate(),e=[];qt._dateEquals(t,new Date)&&e.push(this.i18n.today),e=e.concat([this.i18n.weekdays[t.getDay()],t.getDate(),this.i18n.monthNames[t.getMonth()],t.getFullYear()]),this.showWeekNumbers&&1===this.i18n.firstDayOfWeek&&(e.push(this.i18n.week),e.push(qt._getISOWeekNumber(t))),this.dispatchEvent(new CustomEvent("iron-announce",{bubbles:!0,composed:!0,detail:{text:e.join(" ")}}))}focusCancel(){this.$.cancelButton.focus()}scrollToDate(t,e){this._scrollToPosition(this._differenceInMonths(t,this._originDate),e)}_focusedDateChanged(t){this.revealDate(t)}_isCurrentYear(t){return 0===t}_isSelectedYear(t,e){if(e)return e.getFullYear()===this._originDate.getFullYear()+t}revealDate(t){if(t){var e=this._differenceInMonths(t,this._originDate),i=this.$.monthScroller.position>e,a=this.$.monthScroller.clientHeight/this.$.monthScroller.itemHeight,n=this.$.monthScroller.position+a-1<e;i?this._scrollToPosition(e,!0):n&&this._scrollToPosition(e-a+1,!0)}}_onOverlayFocus(){this._focused=!0}_onOverlayBlur(){this._focused=!1}_initialPositionChanged(t){this.scrollToDate(t)}_repositionYearScroller(){this._visibleMonthIndex=Math.floor(this.$.monthScroller.position),this.$.yearScroller.position=(this.$.monthScroller.position+this._originDate.getMonth())/12}_repositionMonthScroller(){this.$.monthScroller.position=12*this.$.yearScroller.position-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this.$.monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout(()=>this._notTapping=!0,300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=ft.a.debounce(this._debouncer,gt.d.after(300),()=>this._ignoreTaps=!1)}_formatDisplayed(t,e,i){return t?e(qt._extractDateParts(t)):i}_onTodayTap(){var t=new Date;Math.abs(this.$.monthScroller.position-this._differenceInMonths(t,this._originDate))<.001?(this.selectedDate=t,this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_showClear(t){return!!t}_onYearTap(t){if(!this._ignoreTaps&&!this._notTapping){var e=(t.detail.y-(this.$.yearScroller.getBoundingClientRect().top+this.$.yearScroller.clientHeight/2))/this.$.yearScroller.itemHeight;this._scrollToPosition(this.$.monthScroller.position+12*e,!0)}}_scrollToPosition(t,e){if(void 0===this._targetPosition){if(!e)return this.$.monthScroller.position=t,this._targetPosition=void 0,void this._repositionYearScroller();this._targetPosition=t;var i=e?300:0,a=0,n=this.$.monthScroller.position,r=t=>{var e=t-(a=a||t);if(e<i){var o=((t,e,i,a)=>(t/=a/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e)(e,n,this._targetPosition-n,i);this.$.monthScroller.position=o,window.requestAnimationFrame(r)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:n}})),this.$.monthScroller.position=this._targetPosition,this._targetPosition=void 0;setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(r)}else this._targetPosition=t}_limit(t,e){return Math.min(e.max,Math.max(e.min,t))}_handleTrack(t){if(!(Math.abs(t.detail.dx)<10||Math.abs(t.detail.ddy)>10)){Math.abs(t.detail.ddx)>this._yearScrollerWidth/3&&this._toggleAnimateClass(!0);var e=this._translateX+t.detail.ddx;this._translateX=this._limit(e,{min:0,max:this._yearScrollerWidth})}}_track(t){if(!this._desktopMode)switch(t.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(t);break;case"end":this._toggleAnimateClass(!0),this._translateX>=this._yearScrollerWidth/2?this._closeYearScroller():this._openYearScroller()}}_toggleAnimateClass(t){t?this.classList.add("animate"):this.classList.remove("animate")}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0,this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible"),this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(t){this._desktopMode||(this.$.monthScroller.style.transform="translateX("+(t-this._yearScrollerWidth)+"px)",this.$.yearScroller.style.transform="translateX("+t+"px)")}_yearAfterXYears(t){var e=new Date(this._originDate);return e.setFullYear(parseInt(t)+this._originDate.getFullYear()),e.getFullYear()}_yearAfterXMonths(t){return this._dateAfterXMonths(t).getFullYear()}_dateAfterXMonths(t){var e=new Date(this._originDate);return e.setDate(1),e.setMonth(parseInt(t)+this._originDate.getMonth()),e}_differenceInMonths(t,e){return 12*(t.getFullYear()-e.getFullYear())-e.getMonth()+t.getMonth()}_differenceInYears(t,e){return this._differenceInMonths(t,e)/12}_clear(){this.selectedDate=""}_close(){const t=this.getRootNode().host,e=t?t.getRootNode().host:null;e&&(e.opened=!1),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}_preventDefault(t){t.preventDefault()}_eventKey(t){for(var e=["down","up","right","left","enter","space","home","end","pageup","pagedown","tab","esc"],i=0;i<e.length;i++){var a=e[i];if(Ht.a.keyboardEventMatchesKeys(t,a))return a}}_onKeydown(t){var e=this._currentlyFocusedDate();const i=t.composedPath().indexOf(this.$.todayButton)>=0,a=t.composedPath().indexOf(this.$.cancelButton)>=0,n=!i&&!a;var r=this._eventKey(t);if("tab"===r){t.stopPropagation();const e=this.hasAttribute("fullscreen"),r=t.shiftKey;e?t.preventDefault():r&&n||!r&&a?(t.preventDefault(),this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))):r&&i?(this._focused=!0,setTimeout(()=>this.revealDate(this.focusedDate),1)):this._focused=!1}else if(r)switch(t.preventDefault(),t.stopPropagation(),r){case"down":this._moveFocusByDays(7),this.focus();break;case"up":this._moveFocusByDays(-7),this.focus();break;case"right":n&&this._moveFocusByDays(1);break;case"left":n&&this._moveFocusByDays(-1);break;case"enter":n||a?this._close():i&&this._onTodayTap();break;case"space":if(a)this._close();else if(i)this._onTodayTap();else{var o=this.focusedDate;qt._dateEquals(o,this.selectedDate)?(this.selectedDate="",this.focusedDate=o):this.selectedDate=o}break;case"home":this._moveFocusInsideMonth(e,"minDate");break;case"end":this._moveFocusInsideMonth(e,"maxDate");break;case"pagedown":this._moveFocusByMonths(t.shiftKey?12:1);break;case"pageup":this._moveFocusByMonths(t.shiftKey?-12:-1);break;case"esc":this._cancel()}}_currentlyFocusedDate(){return this.focusedDate||this.selectedDate||this.initialPosition||new Date}_focusDate(t){this.focusedDate=t,this._focusedMonthDate=t.getDate()}_focusClosestDate(t){this._focusDate(qt._getClosestDate(t,[this.minDate,this.maxDate]))}_moveFocusByDays(t){var e=this._currentlyFocusedDate(),i=new Date(0,0);i.setFullYear(e.getFullYear()),i.setMonth(e.getMonth()),i.setDate(e.getDate()+t),this._dateAllowed(i,this.minDate,this.maxDate)?this._focusDate(i):this._dateAllowed(e,this.minDate,this.maxDate)?t>0?this._focusDate(this.maxDate):this._focusDate(this.minDate):this._focusClosestDate(e)}_moveFocusByMonths(t){var e=this._currentlyFocusedDate(),i=new Date(0,0);i.setFullYear(e.getFullYear()),i.setMonth(e.getMonth()+t);var a=i.getMonth();i.setDate(this._focusedMonthDate||(this._focusedMonthDate=e.getDate())),i.getMonth()!==a&&i.setDate(0),this._dateAllowed(i,this.minDate,this.maxDate)?this.focusedDate=i:this._dateAllowed(e,this.minDate,this.maxDate)?t>0?this._focusDate(this.maxDate):this._focusDate(this.minDate):this._focusClosestDate(e)}_moveFocusInsideMonth(t,e){var i=new Date(0,0);i.setFullYear(t.getFullYear()),"minDate"===e?(i.setMonth(t.getMonth()),i.setDate(1)):(i.setMonth(t.getMonth()+1),i.setDate(0)),this._dateAllowed(i,this.minDate,this.maxDate)?this._focusDate(i):this._dateAllowed(t,this.minDate,this.maxDate)?this._focusDate(this[e]):this._focusClosestDate(t)}_dateAllowed(t,e,i){return(!e||t>=e)&&(!i||t<=i)}_isTodayAllowed(t,e){var i=new Date,a=new Date(0,0);return a.setFullYear(i.getFullYear()),a.setMonth(i.getMonth()),a.setDate(i.getDate()),this._dateAllowed(a,t,e)}_stopPropagation(t){t.stopPropagation()}}customElements.define(Gt.is,Gt);const Jt=t=>(class extends(Object(u.b)([p.a],t)){static get properties(){return{_selectedDate:{type:Date},_focusedDate:Date,value:{type:String,observer:"_valueChanged",notify:!0,value:""},required:{type:Boolean,value:!1},name:{type:String},initialPosition:String,label:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"},showWeekNumbers:{type:Boolean},_fullscreen:{value:!1,observer:"_fullscreenChanged"},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_touchPrevented:Array,i18n:{type:Object,value:()=>({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,week:"Week",calendar:"Calendar",clear:"Clear",today:"Today",cancel:"Cancel",formatDate:t=>{const e=String(t.year).replace(/\d+/,t=>"0000".substr(t.length)+t);return[t.month+1,t.day,e].join("/")},parseDate:t=>{const e=t.split("/"),i=new Date;let a,n=i.getMonth(),r=i.getFullYear();if(3===e.length?(r=parseInt(e[2]),e[2].length<3&&r>=0&&(r+=r<50?2e3:1900),n=parseInt(e[0])-1,a=parseInt(e[1])):2===e.length?(n=parseInt(e[0])-1,a=parseInt(e[1])):1===e.length&&(a=parseInt(e[0])),void 0!==a)return{day:a,month:n,year:r}},formatTitle:(t,e)=>t+" "+e})},min:{type:String,observer:"_minChanged"},max:{type:String,observer:"_maxChanged"},_minDate:{type:Date,value:""},_maxDate:{type:Date,value:""},_noInput:{type:Boolean,computed:"_isNoInput(_fullscreen, _ios, i18n, i18n.*)"},_ios:{type:Boolean,value:navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/)},_webkitOverflowScroll:{type:Boolean,value:""===document.createElement("div").style.webkitOverflowScrolling},_ignoreAnnounce:{value:!0},_focusOverlayOnOpen:Boolean,_overlayInitialized:Boolean}}static get observers(){return["_updateHasValue(value)","_validateInput(_selectedDate, _minDate, _maxDate)","_selectedDateChanged(_selectedDate, i18n.formatDate)","_focusedDateChanged(_focusedDate, i18n.formatDate)","_announceFocusedDate(_focusedDate, opened, _ignoreAnnounce)"]}ready(){super.ready(),this._boundOnScroll=this._onScroll.bind(this),this._boundFocus=this._focus.bind(this),this._boundUpdateAlignmentAndPosition=this._updateAlignmentAndPosition.bind(this),Object(Ct.b)(this,"tap",this.open),this.addEventListener("touchend",this._preventDefault.bind(this)),this.addEventListener("keydown",this._onKeydown.bind(this)),this.addEventListener("input",this._onUserInput.bind(this)),this.addEventListener("focus",t=>this._noInput&&t.target.blur())}_initOverlay(){this.$.overlay.removeAttribute("disable-upgrade"),this._overlayInitialized=!0,this.$.overlay.addEventListener("opened-changed",t=>this.opened=t.detail.value),this._overlayContent.addEventListener("close",this._close.bind(this)),this._overlayContent.addEventListener("focus-input",this._focusAndSelect.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._boundFocus),this._overlayContent.addEventListener("focus",()=>this.focusElement._setFocused(!0)),this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this._overlayInitialized&&this.$.overlay.removeEventListener("vaadin-overlay-escape-press",this._boundFocus),this.opened=!1}open(){this.disabled||this.readonly||(this.opened=!0)}_close(t){t&&t.stopPropagation(),this._focus(),this.close()}close(){this._overlayInitialized&&this.$.overlay.close()}get _inputElement(){return this._input()}get _nativeInput(){if(this._inputElement)return this._inputElement.focusElement?this._inputElement.focusElement:this._inputElement.inputElement?this._inputElement.inputElement:window.unwrap?window.unwrap(this._inputElement):this._inputElement}_parseDate(t){var e=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(t);if(e){var i=new Date(0,0);return i.setFullYear(parseInt(e[1],10)),i.setMonth(parseInt(e[2],10)-1),i.setDate(parseInt(e[3],10)),i}}_isNoInput(t,e,i){return!this._inputElement||t||e||!i.parseDate}_formatISO(t){if(!(t instanceof Date))return"";const e=(t,e="00")=>(e+t).substr((e+t).length-e.length);let i="",a="0000",n=t.getFullYear();return n<0?(n=-n,i="-",a="000000"):t.getFullYear()>=1e4&&(i="+",a="000000"),[i+e(n,a),e(t.getMonth()+1),e(t.getDate())].join("-")}_openedChanged(t){t&&!this._overlayInitialized&&this._initOverlay(),this._overlayInitialized&&(this.$.overlay.opened=t),t&&this._updateAlignmentAndPosition()}_selectedDateChanged(t,e){if(void 0===t||void 0===e)return;this.__userInputOccurred&&(this.__dispatchChange=!0);const i=t&&e(qt._extractDateParts(t)),a=this._formatISO(t);a!==this.value&&(this.validate(i),this.value=a),this.__userInputOccurred=!1,this.__dispatchChange=!1,this._focusedDate=t,this._inputValue=t?i:""}_focusedDateChanged(t,e){void 0!==t&&void 0!==e&&(this.__userInputOccurred=!0,this._ignoreFocusedDateChange||this._noInput||(this._inputValue=t?e(qt._extractDateParts(t)):""))}_updateHasValue(t){t?this.setAttribute("has-value",""):this.removeAttribute("has-value")}__getOverlayTheme(t,e){if(e)return t}_handleDateChange(t,e,i){if(e){var a=this._parseDate(e);a?qt._dateEquals(this[t],a)||(this[t]=a):this.value=i}else this[t]=""}_valueChanged(t,e){this.__dispatchChange&&this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._handleDateChange("_selectedDate",t,e)}_minChanged(t,e){this._handleDateChange("_minDate",t,e)}_maxChanged(t,e){this._handleDateChange("_maxDate",t,e)}_updateAlignmentAndPosition(){if(this._overlayInitialized){if(!this._fullscreen){const t=this._inputElement.getBoundingClientRect(),e=t.top>window.innerHeight/2;if(t.left+this.clientWidth/2>window.innerWidth/2){const e=Math.min(window.innerWidth,document.documentElement.clientWidth);this.$.overlay.setAttribute("right-aligned",""),this.$.overlay.style.removeProperty("left"),this.$.overlay.style.right=e-t.right+"px"}else this.$.overlay.removeAttribute("right-aligned"),this.$.overlay.style.removeProperty("right"),this.$.overlay.style.left=t.left+"px";if(e){const e=Math.min(window.innerHeight,document.documentElement.clientHeight);this.$.overlay.setAttribute("bottom-aligned",""),this.$.overlay.style.removeProperty("top"),this.$.overlay.style.bottom=e-t.top+"px"}else this.$.overlay.removeAttribute("bottom-aligned"),this.$.overlay.style.removeProperty("bottom"),this.$.overlay.style.top=t.bottom+"px"}this.$.overlay.setAttribute("dir",getComputedStyle(this._inputElement).getPropertyValue("direction")),this._overlayContent._repositionYearScroller()}}_fullscreenChanged(){this._overlayInitialized&&this.$.overlay.opened&&this._updateAlignmentAndPosition()}_onOverlayOpened(){this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement&&this.focusElement.hasAttribute("focus-ring");var t=this._parseDate(this.initialPosition),e=this._selectedDate||this._overlayContent.initialPosition||t||new Date;t||qt._dateAllowed(e,this._minDate,this._maxDate)?this._overlayContent.initialPosition=e:this._overlayContent.initialPosition=qt._getClosestDate(e,[this._minDate,this._maxDate]),this._overlayContent.scrollToDate(this._overlayContent.focusedDate||this._overlayContent.initialPosition),this._ignoreFocusedDateChange=!0,this._overlayContent.focusedDate=this._overlayContent.focusedDate||this._overlayContent.initialPosition,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this.addEventListener("iron-resize",this._boundUpdateAlignmentAndPosition),this._webkitOverflowScroll&&(this._touchPrevented=this._preventWebkitOverflowScrollingTouch(this.parentElement)),this._focusOverlayOnOpen?(this._overlayContent.focus(),this._focusOverlayOnOpen=!1):this._focus(),this._noInput&&this.focusElement&&this.focusElement.blur(),this.updateStyles(),this._ignoreAnnounce=!1}_preventWebkitOverflowScrollingTouch(t){for(var e=[];t;){if("touch"===window.getComputedStyle(t).webkitOverflowScrolling){var i=t.style.webkitOverflowScrolling;t.style.webkitOverflowScrolling="auto",e.push({element:t,oldInlineValue:i})}t=t.parentElement}return e}_onOverlayClosed(){if(this._ignoreAnnounce=!0,window.removeEventListener("scroll",this._boundOnScroll,!0),this.removeEventListener("iron-resize",this._boundUpdateAlignmentAndPosition),this._touchPrevented&&(this._touchPrevented.forEach(t=>t.element.style.webkitOverflowScrolling=t.oldInlineValue),this._touchPrevented=[]),this.updateStyles(),this._ignoreFocusedDateChange=!0,this.i18n.parseDate){var t=this._inputValue||"";const e=this.i18n.parseDate(t),i=e&&this._parseDate(`${e.year}-${e.month+1}-${e.day}`);this._isValidDate(i)?this._selectedDate=i:(this._selectedDate=null,this._inputValue=t)}else this._focusedDate&&(this._selectedDate=this._focusedDate);this._ignoreFocusedDateChange=!1,this._nativeInput&&this._nativeInput.selectionStart&&(this._nativeInput.selectionStart=this._nativeInput.selectionEnd),this.validate()}validate(t){return this.invalid=!1,t=void 0!==t?t:this._inputValue,!(this.invalid=!this.checkValidity(t))}checkValidity(t){var e=!t||this._selectedDate&&t===this.i18n.formatDate(qt._extractDateParts(this._selectedDate)),i=!this._selectedDate||qt._dateAllowed(this._selectedDate,this._minDate,this._maxDate),a=!0;return this._inputElement&&(this._inputElement.checkValidity?a=this._inputElement.checkValidity(t):this._inputElement.validate&&(a=this._inputElement.validate(t))),e&&i&&a}_onScroll(t){t.target!==window&&this._overlayContent.contains(t.target)||this._updateAlignmentAndPosition()}_focus(){this._noInput?this._overlayInitialized&&this._overlayContent.focus():this._inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputValue.length)}_setSelectionRange(t,e){this._nativeInput&&this._nativeInput.setSelectionRange&&this._nativeInput.setSelectionRange(t,e)}_preventDefault(t){t.preventDefault()}_eventKey(t){for(var e=["down","up","enter","esc","tab"],i=0;i<e.length;i++){var a=e[i];if(Ht.a.keyboardEventMatchesKeys(t,a))return a}}_isValidDate(t){return t&&!isNaN(t.getTime())}_onKeydown(t){if(this._noInput){-1===[9].indexOf(t.keyCode)&&t.preventDefault()}switch(this._eventKey(t)){case"down":case"up":t.preventDefault(),this.opened?(this._overlayContent.focus(),this._overlayContent._onKeydown(t)):(this._focusOverlayOnOpen=!0,this.open());break;case"enter":{const t=this.i18n.parseDate(this._inputValue),e=t&&this._parseDate(t.year+"-"+(t.month+1)+"-"+t.day);this._overlayContent.focusedDate&&this._isValidDate(e)&&(this._selectedDate=this._overlayContent.focusedDate),this.close();break}case"esc":this._focusedDate=this._selectedDate,this._close();break;case"tab":this.opened&&(t.preventDefault(),this._setSelectionRange(0,0),t.shiftKey?this._overlayContent.focusCancel():(this._overlayContent.focus(),this._overlayContent.revealDate(this._focusedDate)))}}_validateInput(t,e,i){t&&(e||i)&&(this.invalid=!qt._dateAllowed(t,e,i))}_onUserInput(t){this.opened||this.open(),this._userInputValueChanged()}_userInputValueChanged(t){if(this.opened&&this._inputValue){const t=this.i18n.parseDate&&this.i18n.parseDate(this._inputValue),e=t&&this._parseDate(`${t.year}-${t.month+1}-${t.day}`);this._isValidDate(e)&&(this._ignoreFocusedDateChange=!0,qt._dateEquals(e,this._focusedDate)||(this._focusedDate=e),this._ignoreFocusedDateChange=!1)}}_announceFocusedDate(t,e,i){e&&!i&&this._overlayContent.announceFocusedDate()}get _overlayContent(){return this.$.overlay.content.querySelector("#overlay-content")}});class Qt extends(jt(bt(Object(mt.a)(Object(Rt.a)(Jt(Object(ht.a)(n.a))))))){static get template(){return a.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([opened]) {
        pointer-events: auto;
      }

      [part="text-field"] {
        width: 100%;
        min-width: 0;
      }

      :host([disabled]) [part="clear-button"],
      :host([readonly]) [part="clear-button"],
      :host(:not([has-value])) [part="clear-button"] {
        display: none;
      }
    </style>


    <vaadin-text-field id="input" role="application" autocomplete="off" on-focus="_focus" value="{{_userInputValue}}" invalid="[[invalid]]" label="[[label]]" name="[[name]]" placeholder="[[placeholder]]" required="[[required]]" disabled="[[disabled]]" readonly="[[readonly]]" error-message="[[errorMessage]]" aria-label\$="[[label]]" part="text-field" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>
      <div part="clear-button" slot="suffix" on-touchend="_clearTouchend" on-click="_clear" role="button" aria-label\$="[[i18n.clear]]"></div>
      <div part="toggle-button" slot="suffix" on-tap="_toggle" role="button" aria-label\$="[[i18n.calendar]]" aria-expanded\$="[[_getAriaExpanded(opened)]]"></div>
    </vaadin-text-field>

    <vaadin-date-picker-overlay id="overlay" fullscreen\$="[[_fullscreen]]" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]" on-vaadin-overlay-open="_onOverlayOpened" on-vaadin-overlay-close="_onOverlayClosed" disable-upgrade="">
      <template>
        <vaadin-date-picker-overlay-content id="overlay-content" i18n="[[i18n]]" fullscreen\$="[[_fullscreen]]" label="[[label]]" selected-date="{{_selectedDate}}" slot="dropdown-content" focused-date="{{_focusedDate}}" show-week-numbers="[[showWeekNumbers]]" min-date="[[_minDate]]" max-date="[[_maxDate]]" role="dialog" on-date-tap="_close" part="overlay-content" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]">
        </vaadin-date-picker-overlay-content>
      </template>
    </vaadin-date-picker-overlay>

    <iron-media-query query="[[_fullscreenMediaQuery]]" query-matches="{{_fullscreen}}">
    </iron-media-query>
`}static get is(){return"vaadin-date-picker"}static get version(){return"3.3.4"}static get properties(){return{disabled:{type:Boolean,value:!1,reflectToAttribute:!0},errorMessage:String,placeholder:String,readonly:{type:Boolean,value:!1,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},_userInputValue:String}}static get observers(){return["_userInputValueChanged(_userInputValue)"]}ready(){super.ready(),Object(Ut.a)(this,()=>this._inputElement.validate=()=>{})}_onVaadinOverlayClose(t){this._openedWithFocusRing&&this.hasAttribute("focused")?this.focusElement.setAttribute("focus-ring",""):this.hasAttribute("focused")||this.focusElement.blur(),t.detail.sourceEvent&&-1!==t.detail.sourceEvent.composedPath().indexOf(this)&&t.preventDefault()}_clear(){this.__dispatchChange=!0,this.value="",this.validate(),this.focus(),Object(Ct.d)("tap"),this.__dispatchChange=!1}_clearTouchend(t){this._clear(),t.preventDefault(),Object(Ct.d)("tap")}_toggle(t){t.stopPropagation(),this[this._overlayInitialized&&this.$.overlay.opened?"close":"open"]()}_input(){return this.$.input}set _inputValue(t){this._inputElement.value=t}get _inputValue(){return this._inputElement.value}_getAriaExpanded(t){return Boolean(t).toString()}get focusElement(){return this._input()||this}}customElements.define(Qt.is,Qt);i(252);customElements.define("more-info-input_datetime",class extends n.a{static get template(){return a.a`
      <div class$="[[computeClassNames(stateObj)]]">
        <template is="dom-if" if="[[doesHaveDate(stateObj)]]" restamp="">
          <div>
            <vaadin-date-picker
              id="dateInput"
              on-value-changed="dateTimeChanged"
              label="Date"
              value="{{selectedDate}}"
            ></vaadin-date-picker>
          </div>
        </template>
        <template is="dom-if" if="[[doesHaveTime(stateObj)]]" restamp="">
          <div>
            <paper-time-input
              hour="{{selectedHour}}"
              min="{{selectedMinute}}"
              format="24"
            ></paper-time-input>
          </div>
        </template>
      </div>
    `}constructor(){super(),this.is_ready=!1}static get properties(){return{hass:{type:Object},stateObj:{type:Object,observer:"stateObjChanged"},selectedDate:{type:String,observer:"dateTimeChanged"},selectedHour:{type:Number,observer:"dateTimeChanged"},selectedMinute:{type:Number,observer:"dateTimeChanged"}}}ready(){super.ready(),this.is_ready=!0}getDateString(t){return"unknown"===t.state?"":(e=t.attributes.month<10?"0":"",i=t.attributes.day<10?"0":"",t.attributes.year+"-"+e+t.attributes.month+"-"+i+t.attributes.day);var e,i}dateTimeChanged(){if(!this.is_ready)return;let t,e=!1;const i={entity_id:this.stateObj.entity_id};if(this.stateObj.attributes.has_time){e|=parseInt(this.selectedMinute)!==this.stateObj.attributes.minute,e|=parseInt(this.selectedHour)!==this.stateObj.attributes.hour,t=this.selectedMinute<10?"0":"";var a=this.selectedHour+":"+t+this.selectedMinute;i.time=a}if(this.stateObj.attributes.has_date){if(0===this.selectedDate.length)return;const t=new Date(this.selectedDate);e|=new Date(this.stateObj.attributes.year,this.stateObj.attributes.month-1,this.stateObj.attributes.day)!==t,i.date=this.selectedDate}e&&this.hass.callService("input_datetime","set_datetime",i)}stateObjChanged(t){this.is_ready=!1,t.attributes.has_time&&(this.selectedHour=t.attributes.hour,this.selectedMinute=t.attributes.minute),t.attributes.has_date&&(this.selectedDate=this.getDateString(t)),this.is_ready=!0}doesHaveDate(t){return t.attributes.has_date}doesHaveTime(t){return t.attributes.has_time}computeClassNames(t){return"more-info-input_datetime "+d(t,["has_time","has_date"])}});customElements.define("ha-color-picker",class extends(Object(N.a)(n.a)){static get template(){return a.a`
      <style>
        :host {
          user-select: none;
          -webkit-user-select: none;
        }

        #canvas {
          position: relative;
          width: 100%;
          max-width: 330px;
        }
        #canvas > * {
          display: block;
        }
        #interactionLayer {
          color: white;
          position: absolute;
          cursor: crosshair;
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        #backgroundLayer {
          width: 100%;
          overflow: visible;
          --wheel-bordercolor: var(--ha-color-picker-wheel-bordercolor, white);
          --wheel-borderwidth: var(--ha-color-picker-wheel-borderwidth, 3);
          --wheel-shadow: var(
            --ha-color-picker-wheel-shadow,
            rgb(15, 15, 15) 10px 5px 5px 0px
          );
        }

        #marker {
          fill: currentColor;
          stroke: var(--ha-color-picker-marker-bordercolor, white);
          stroke-width: var(--ha-color-picker-marker-borderwidth, 3);
          filter: url(#marker-shadow);
        }
        .dragging #marker {
        }

        #colorTooltip {
          display: none;
          fill: currentColor;
          stroke: var(--ha-color-picker-tooltip-bordercolor, white);
          stroke-width: var(--ha-color-picker-tooltip-borderwidth, 3);
        }

        .touch.dragging #colorTooltip {
          display: inherit;
        }
      </style>
      <div id="canvas">
        <svg id="interactionLayer">
          <defs>
            <filter
              id="marker-shadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
              filterUnits="objectBoundingBox"
            >
              <feOffset
                result="offOut"
                in="SourceAlpha"
                dx="2"
                dy="2"
              ></feOffset>
              <feGaussianBlur
                result="blurOut"
                in="offOut"
                stdDeviation="2"
              ></feGaussianBlur>
              <feComponentTransfer in="blurOut" result="alphaOut">
                <feFuncA type="linear" slope="0.3"></feFuncA>
              </feComponentTransfer>
              <feBlend
                in="SourceGraphic"
                in2="alphaOut"
                mode="normal"
              ></feBlend>
            </filter>
          </defs>
        </svg>
        <canvas id="backgroundLayer"></canvas>
      </div>
    `}static get properties(){return{hsColor:{type:Object},desiredHsColor:{type:Object,observer:"applyHsColor"},width:{type:Number,value:500},height:{type:Number,value:500},radius:{type:Number,value:225},hueSegments:{type:Number,value:0,observer:"segmentationChange"},saturationSegments:{type:Number,value:0,observer:"segmentationChange"},ignoreSegments:{type:Boolean,value:!1},throttle:{type:Number,value:500}}}ready(){super.ready(),this.setupLayers(),this.drawColorWheel(),this.drawMarker(),this.interactionLayer.addEventListener("mousedown",t=>this.onMouseDown(t)),this.interactionLayer.addEventListener("touchstart",t=>this.onTouchStart(t))}convertToCanvasCoordinates(t,e){var i=this.interactionLayer.createSVGPoint();i.x=t,i.y=e;var a=i.matrixTransform(this.interactionLayer.getScreenCTM().inverse());return{x:a.x,y:a.y}}onMouseDown(t){const e=this.convertToCanvasCoordinates(t.clientX,t.clientY);this.isInWheel(e.x,e.y)&&(this.onMouseSelect(t),this.canvas.classList.add("mouse","dragging"),this.addEventListener("mousemove",this.onMouseSelect),this.addEventListener("mouseup",this.onMouseUp))}onMouseUp(){this.canvas.classList.remove("mouse","dragging"),this.removeEventListener("mousemove",this.onMouseSelect)}onMouseSelect(t){requestAnimationFrame(()=>this.processUserSelect(t))}onTouchStart(t){var e=t.changedTouches[0];const i=this.convertToCanvasCoordinates(e.clientX,e.clientY);if(this.isInWheel(i.x,i.y)){if(t.target===this.marker)return t.preventDefault(),this.canvas.classList.add("touch","dragging"),this.addEventListener("touchmove",this.onTouchSelect),void this.addEventListener("touchend",this.onTouchEnd);this.tapBecameScroll=!1,this.addEventListener("touchend",this.onTap),this.addEventListener("touchmove",()=>{this.tapBecameScroll=!0},{passive:!0})}}onTap(t){this.tapBecameScroll||(t.preventDefault(),this.onTouchSelect(t))}onTouchEnd(){this.canvas.classList.remove("touch","dragging"),this.removeEventListener("touchmove",this.onTouchSelect)}onTouchSelect(t){requestAnimationFrame(()=>this.processUserSelect(t.changedTouches[0]))}processUserSelect(t){var e=this.convertToCanvasCoordinates(t.clientX,t.clientY),i=this.getColor(e.x,e.y);this.onColorSelect(i)}onColorSelect(t){if(this.setMarkerOnColor(t),this.ignoreSegments||(t=this.applySegmentFilter(t)),this.applyColorToCanvas(t),this.colorSelectIsThrottled)return clearTimeout(this.ensureFinalSelect),void(this.ensureFinalSelect=setTimeout(()=>{this.fireColorSelected(t)},this.throttle));this.fireColorSelected(t),this.colorSelectIsThrottled=!0,setTimeout(()=>{this.colorSelectIsThrottled=!1},this.throttle)}fireColorSelected(t){this.hsColor=t,this.fire("colorselected",{hs:{h:t.h,s:t.s}})}setMarkerOnColor(t){var e=t.s*this.radius,i=(t.h-180)/180*Math.PI,a=`translate(${-e*Math.cos(i)},${-e*Math.sin(i)})`;this.marker.setAttribute("transform",a),this.tooltip.setAttribute("transform",a)}applyColorToCanvas(t){this.interactionLayer.style.color=`hsl(${t.h}, 100%, ${100-50*t.s}%)`}applyHsColor(t){this.hsColor&&this.hsColor.h===t.h&&this.hsColor.s===t.s||(this.setMarkerOnColor(t),this.ignoreSegments||(t=this.applySegmentFilter(t)),this.hsColor=t,this.applyColorToCanvas(t))}getAngle(t,e){return Math.atan2(-e,-t)/Math.PI*180+180}isInWheel(t,e){return this.getDistance(t,e)<=1}getDistance(t,e){return Math.sqrt(t*t+e*e)/this.radius}getColor(t,e){var i=this.getAngle(t,e),a=this.getDistance(t,e);return{h:i,s:Math.min(a,1)}}applySegmentFilter(t){if(this.hueSegments){const e=360/this.hueSegments,i=e/2;t.h-=i,t.h<0&&(t.h+=360);const a=t.h%e;t.h-=a-e}if(this.saturationSegments)if(1===this.saturationSegments)t.s=1;else{var e=1/this.saturationSegments,i=1/(this.saturationSegments-1),a=Math.floor(t.s/e)*i;t.s=Math.min(a,1)}return t}setupLayers(){this.canvas=this.$.canvas,this.backgroundLayer=this.$.backgroundLayer,this.interactionLayer=this.$.interactionLayer,this.originX=this.width/2,this.originY=this.originX,this.backgroundLayer.width=this.width,this.backgroundLayer.height=this.height,this.interactionLayer.setAttribute("viewBox",`${-this.originX} ${-this.originY} ${this.width} ${this.height}`)}drawColorWheel(){let t,e,i,a;const n=this.backgroundLayer.getContext("2d"),r=this.originX,o=this.originY,s=this.radius,l=!1,c=window.getComputedStyle(this.backgroundLayer,null),d=parseInt(c.getPropertyValue("--wheel-borderwidth"),10),p=c.getPropertyValue("--wheel-bordercolor").trim(),u=c.getPropertyValue("--wheel-shadow").trim();if("none"!==u){const n=u.split("px ");t=n.pop(),e=parseInt(n[0],10),i=parseInt(n[1],10),a=parseInt(n[2],10)||0}const h=s+d/2,m=s,b=s+d;"none"!==c.shadow&&(n.save(),n.beginPath(),n.arc(r,o,b,0,2*Math.PI,!1),n.shadowColor=t,n.shadowOffsetX=e,n.shadowOffsetY=i,n.shadowBlur=a,n.fillStyle="white",n.fill(),n.restore()),function(t,e){const i=360/(t=t||360),a=i/2;for(var s=0;s<=360;s+=i){var c=(s-a)*(Math.PI/180),d=(s+a+1)*(Math.PI/180);n.beginPath(),n.moveTo(r,o),n.arc(r,o,m,c,d,l),n.closePath();var p=n.createRadialGradient(r,o,0,r,o,m);let t=100;if(p.addColorStop(0,`hsl(${s}, 100%, ${t}%)`),e>0){const i=1/e;let a=0;for(var u=1;u<e;u+=1){var h=t;t=100-50*(a=u*i),p.addColorStop(a,`hsl(${s}, 100%, ${h}%)`),p.addColorStop(a,`hsl(${s}, 100%, ${t}%)`)}p.addColorStop(a,`hsl(${s}, 100%, 50%)`)}p.addColorStop(1,`hsl(${s}, 100%, 50%)`),n.fillStyle=p,n.fill()}}(this.hueSegments,this.saturationSegments),d>0&&(n.beginPath(),n.arc(r,o,h,0,2*Math.PI,!1),n.lineWidth=d,n.strokeStyle=p,n.stroke())}drawMarker(){const t=this.interactionLayer,e=.08*this.radius,i=.15*this.radius,a=-3*i;t.marker=document.createElementNS("http://www.w3.org/2000/svg","circle"),t.marker.setAttribute("id","marker"),t.marker.setAttribute("r",e),this.marker=t.marker,t.appendChild(t.marker),t.tooltip=document.createElementNS("http://www.w3.org/2000/svg","circle"),t.tooltip.setAttribute("id","colorTooltip"),t.tooltip.setAttribute("r",i),t.tooltip.setAttribute("cx",0),t.tooltip.setAttribute("cy",a),this.tooltip=t.tooltip,t.appendChild(t.tooltip)}segmentationChange(){this.backgroundLayer&&this.drawColorWheel()}});const te={1:"has-brightness",2:"has-color_temp",4:"has-effect_list",16:"has-color",128:"has-white_value"};customElements.define("more-info-light",class extends(Object(s.a)(Object(N.a)(n.a))){static get template(){return a.a`
      <style include="iron-flex"></style>
      <style>
        .effect_list,
        .brightness,
        .color_temp,
        .white_value {
          max-height: 0px;
          overflow: hidden;
          transition: max-height 0.5s ease-in;
        }

        .color_temp {
          --ha-slider-background: -webkit-linear-gradient(
            right,
            rgb(255, 160, 0) 0%,
            white 50%,
            rgb(166, 209, 255) 100%
          );
          /* The color temp minimum value shouldn't be rendered differently. It's not "off". */
          --paper-slider-knob-start-border-color: var(--primary-color);
        }

        .segmentationContainer {
          position: relative;
          width: 100%;
        }

        ha-color-picker {
          display: block;
          width: 100%;

          max-height: 0px;
          overflow: hidden;
          transition: max-height 0.5s ease-in;
        }

        .segmentationButton {
          position: absolute;
          top: 11%;
          transform: translate(0%, 0%);
          padding: 0px;
          max-height: 0px;
          width: 23px;
          height: 23px;
          opacity: var(--dark-secondary-opacity);
          overflow: hidden;
          transition: max-height 0.5s ease-in;
        }

        .has-color.is-on .segmentationContainer .segmentationButton {
          position: absolute;
          top: 11%;
          transform: translate(0%, 0%);
          width: 23px;
          height: 23px;
          padding: 0px;
          opacity: var(--dark-secondary-opacity);
        }

        .has-effect_list.is-on .effect_list,
        .has-brightness .brightness,
        .has-color_temp.is-on .color_temp,
        .has-white_value.is-on .white_value {
          max-height: 84px;
        }

        .has-brightness .has-color_temp.is-on,
        .has-white_value.is-on {
          margin-top: -16px;
        }

        .has-brightness .brightness,
        .has-color_temp.is-on .color_temp,
        .has-white_value.is-on .white_value {
          padding-top: 16px;
        }

        .has-color.is-on .segmentationButton {
          max-height: 100px;
          overflow: visible;
        }

        .has-color.is-on ha-color-picker {
          max-height: 500px;
          overflow: visible;
          --ha-color-picker-wheel-borderwidth: 5;
          --ha-color-picker-wheel-bordercolor: white;
          --ha-color-picker-wheel-shadow: none;
          --ha-color-picker-marker-borderwidth: 2;
          --ha-color-picker-marker-bordercolor: white;
        }

        .is-unavailable .control {
          max-height: 0px;
        }

        paper-item {
          cursor: pointer;
        }
      </style>

      <div class$="[[computeClassNames(stateObj)]]">
        <div class="control brightness">
          <ha-labeled-slider
            caption="[[localize('ui.card.light.brightness')]]"
            icon="hass:brightness-5"
            min="1"
            max="255"
            value="{{brightnessSliderValue}}"
            on-change="brightnessSliderChanged"
          ></ha-labeled-slider>
        </div>

        <div class="control color_temp">
          <ha-labeled-slider
            caption="[[localize('ui.card.light.color_temperature')]]"
            icon="hass:thermometer"
            min="[[stateObj.attributes.min_mireds]]"
            max="[[stateObj.attributes.max_mireds]]"
            value="{{ctSliderValue}}"
            on-change="ctSliderChanged"
          ></ha-labeled-slider>
        </div>

        <div class="control white_value">
          <ha-labeled-slider
            caption="[[localize('ui.card.light.white_value')]]"
            icon="hass:file-word-box"
            max="255"
            value="{{wvSliderValue}}"
            on-change="wvSliderChanged"
          ></ha-labeled-slider>
        </div>
        <div class="segmentationContainer">
          <ha-color-picker
            class="control color"
            on-colorselected="colorPicked"
            desired-hs-color="{{colorPickerColor}}"
            throttle="500"
            hue-segments="{{hueSegments}}"
            saturation-segments="{{saturationSegments}}"
          >
          </ha-color-picker>
          <paper-icon-button
            icon="mdi:palette"
            on-click="segmentClick"
            class="control segmentationButton"
          ></paper-icon-button>
        </div>

        <div class="control effect_list">
          <ha-paper-dropdown-menu
            label-float=""
            dynamic-align=""
            label="[[localize('ui.card.light.effect')]]"
          >
            <paper-listbox
              slot="dropdown-content"
              selected="[[stateObj.attributes.effect]]"
              on-selected-changed="effectChanged"
              attr-for-selected="item-name"
            >
              <template
                is="dom-repeat"
                items="[[stateObj.attributes.effect_list]]"
              >
                <paper-item item-name$="[[item]]">[[item]]</paper-item>
              </template>
            </paper-listbox>
          </ha-paper-dropdown-menu>
        </div>

        <ha-attributes
          state-obj="[[stateObj]]"
          extra-filters="brightness,color_temp,white_value,effect_list,effect,hs_color,rgb_color,xy_color,min_mireds,max_mireds"
        ></ha-attributes>
      </div>
    `}static get properties(){return{hass:{type:Object},stateObj:{type:Object,observer:"stateObjChanged"},brightnessSliderValue:{type:Number,value:0},ctSliderValue:{type:Number,value:0},wvSliderValue:{type:Number,value:0},hueSegments:{type:Number,value:24},saturationSegments:{type:Number,value:8},colorPickerColor:{type:Object}}}stateObjChanged(t,e){const i={brightnessSliderValue:0};t&&"on"===t.state&&(i.brightnessSliderValue=t.attributes.brightness,i.ctSliderValue=t.attributes.color_temp,i.wvSliderValue=t.attributes.white_value,t.attributes.hs_color&&(i.colorPickerColor={h:t.attributes.hs_color[0],s:t.attributes.hs_color[1]/100})),this.setProperties(i),e&&setTimeout(()=>{this.fire("iron-resize")},500)}computeClassNames(t){const e=[ot(t,te)];return t&&"on"===t.state&&e.push("is-on"),t&&"unavailable"===t.state&&e.push("is-unavailable"),e.join(" ")}effectChanged(t){var e=this.stateObj.attributes.effect,i=t.detail.value;i&&e!==i&&this.hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,effect:i})}brightnessSliderChanged(t){var e=parseInt(t.target.value,10);isNaN(e)||this.hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,brightness:e})}ctSliderChanged(t){var e=parseInt(t.target.value,10);isNaN(e)||this.hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,color_temp:e})}wvSliderChanged(t){var e=parseInt(t.target.value,10);isNaN(e)||this.hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,white_value:e})}segmentClick(){24===this.hueSegments&&8===this.saturationSegments?this.setProperties({hueSegments:0,saturationSegments:0}):this.setProperties({hueSegments:24,saturationSegments:8})}serviceChangeColor(t,e,i){t.callService("light","turn_on",{entity_id:e,hs_color:[i.h,100*i.s]})}colorPicked(t){this.serviceChangeColor(this.hass,this.stateObj.entity_id,t.detail.hs)}});customElements.define("more-info-lock",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <style>
        paper-input {
          display: inline-block;
        }
      </style>

      <template is="dom-if" if="[[stateObj.attributes.code_format]]">
        <paper-input
          label="[[localize('ui.card.lock.code')]]"
          value="{{enteredCode}}"
          pattern="[[stateObj.attributes.code_format]]"
          type="password"
        ></paper-input>
        <mwc-button
          on-click="callService"
          data-service="unlock"
          hidden$="[[!isLocked]]"
          >[[localize('ui.card.lock.unlock')]]</mwc-button
        >
        <mwc-button
          on-click="callService"
          data-service="lock"
          hidden$="[[isLocked]]"
          >[[localize('ui.card.lock.lock')]]</mwc-button
        >
      </template>
      <ha-attributes
        state-obj="[[stateObj]]"
        extra-filters="code_format"
      ></ha-attributes>
    `}static get properties(){return{hass:Object,stateObj:{type:Object,observer:"stateObjChanged"},enteredCode:{type:String,value:""},isLocked:Boolean}}stateObjChanged(t){t&&(this.isLocked="locked"===t.state)}callService(t){const e=t.target.getAttribute("data-service"),i={entity_id:this.stateObj.entity_id,code:this.enteredCode};this.hass.callService("lock",e,i)}});i(108);var ee=i(223);customElements.define("more-info-media_player",class extends(Object(s.a)(Object(N.a)(n.a))){static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        .media-state {
          text-transform: capitalize;
        }

        paper-icon-button[highlight] {
          color: var(--accent-color);
        }

        .volume {
          margin-bottom: 8px;

          max-height: 0px;
          overflow: hidden;
          transition: max-height 0.5s ease-in;
        }

        .has-volume_level .volume {
          max-height: 40px;
        }

        iron-icon.source-input {
          padding: 7px;
          margin-top: 15px;
        }

        ha-paper-dropdown-menu.source-input {
          margin-left: 10px;
        }

        [hidden] {
          display: none !important;
        }

        paper-item {
          cursor: pointer;
        }
      </style>

      <div class$="[[computeClassNames(stateObj)]]">
        <div class="layout horizontal">
          <div class="flex">
            <paper-icon-button
              icon="hass:power"
              highlight$="[[playerObj.isOff]]"
              on-click="handleTogglePower"
              hidden$="[[computeHidePowerButton(playerObj)]]"
            ></paper-icon-button>
          </div>
          <div>
            <template
              is="dom-if"
              if="[[computeShowPlaybackControls(playerObj)]]"
            >
              <paper-icon-button
                icon="hass:skip-previous"
                on-click="handlePrevious"
                hidden$="[[!playerObj.supportsPreviousTrack]]"
              ></paper-icon-button>
              <paper-icon-button
                icon="[[computePlaybackControlIcon(playerObj)]]"
                on-click="handlePlaybackControl"
                hidden$="[[!computePlaybackControlIcon(playerObj)]]"
                highlight=""
              ></paper-icon-button>
              <paper-icon-button
                icon="hass:skip-next"
                on-click="handleNext"
                hidden$="[[!playerObj.supportsNextTrack]]"
              ></paper-icon-button>
            </template>
          </div>
        </div>
        <!-- VOLUME -->
        <div
          class="volume_buttons center horizontal layout"
          hidden$="[[computeHideVolumeButtons(playerObj)]]"
        >
          <paper-icon-button
            on-click="handleVolumeTap"
            icon="hass:volume-off"
          ></paper-icon-button>
          <paper-icon-button
            id="volumeDown"
            disabled$="[[playerObj.isMuted]]"
            on-mousedown="handleVolumeDown"
            on-touchstart="handleVolumeDown"
            on-touchend="handleVolumeTouchEnd"
            icon="hass:volume-medium"
          ></paper-icon-button>
          <paper-icon-button
            id="volumeUp"
            disabled$="[[playerObj.isMuted]]"
            on-mousedown="handleVolumeUp"
            on-touchstart="handleVolumeUp"
            on-touchend="handleVolumeTouchEnd"
            icon="hass:volume-high"
          ></paper-icon-button>
        </div>
        <div
          class="volume center horizontal layout"
          hidden$="[[!playerObj.supportsVolumeSet]]"
        >
          <paper-icon-button
            on-click="handleVolumeTap"
            hidden$="[[playerObj.supportsVolumeButtons]]"
            icon="[[computeMuteVolumeIcon(playerObj)]]"
          ></paper-icon-button>
          <ha-paper-slider
            disabled$="[[playerObj.isMuted]]"
            min="0"
            max="100"
            value="[[playerObj.volumeSliderValue]]"
            on-change="volumeSliderChanged"
            class="flex"
            ignore-bar-touch=""
            dir="{{rtl}}"
          >
          </ha-paper-slider>
        </div>
        <!-- SOURCE PICKER -->
        <div
          class="controls layout horizontal justified"
          hidden$="[[computeHideSelectSource(playerObj)]]"
        >
          <iron-icon class="source-input" icon="hass:login-variant"></iron-icon>
          <ha-paper-dropdown-menu
            class="flex source-input"
            dynamic-align=""
            label-float=""
            label="[[localize('ui.card.media_player.source')]]"
          >
            <paper-listbox
              slot="dropdown-content"
              attr-for-selected="item-name"
              selected="[[playerObj.source]]"
              on-selected-changed="handleSourceChanged"
            >
              <template is="dom-repeat" items="[[playerObj.sourceList]]">
                <paper-item item-name$="[[item]]">[[item]]</paper-item>
              </template>
            </paper-listbox>
          </ha-paper-dropdown-menu>
        </div>
        <!-- SOUND MODE PICKER -->
        <template is="dom-if" if="[[!computeHideSelectSoundMode(playerObj)]]">
          <div class="controls layout horizontal justified">
            <iron-icon class="source-input" icon="hass:music-note"></iron-icon>
            <ha-paper-dropdown-menu
              class="flex source-input"
              dynamic-align
              label-float
              label="[[localize('ui.card.media_player.sound_mode')]]"
            >
              <paper-listbox
                slot="dropdown-content"
                attr-for-selected="item-name"
                selected="[[playerObj.soundMode]]"
                on-selected-changed="handleSoundModeChanged"
              >
                <template is="dom-repeat" items="[[playerObj.soundModeList]]">
                  <paper-item item-name$="[[item]]">[[item]]</paper-item>
                </template>
              </paper-listbox>
            </ha-paper-dropdown-menu>
          </div>
        </template>
        <!-- TTS -->
        <div
          hidden$="[[computeHideTTS(ttsLoaded, playerObj)]]"
          class="layout horizontal end"
        >
          <paper-input
            id="ttsInput"
            label="[[localize('ui.card.media_player.text_to_speak')]]"
            class="flex"
            value="{{ttsMessage}}"
            on-keydown="ttsCheckForEnter"
          ></paper-input>
          <paper-icon-button
            icon="hass:send"
            on-click="sendTTS"
          ></paper-icon-button>
        </div>
      </div>
    `}static get properties(){return{hass:Object,stateObj:Object,playerObj:{type:Object,computed:"computePlayerObj(hass, stateObj)",observer:"playerObjChanged"},ttsLoaded:{type:Boolean,computed:"computeTTSLoaded(hass)"},ttsMessage:{type:String,value:""},rtl:{type:String,computed:"_computeRTLDirection(hass)"}}}computePlayerObj(t,e){return new _.a(t,e)}playerObjChanged(t,e){e&&setTimeout(()=>{this.fire("iron-resize")},500)}computeClassNames(t){return d(t,["volume_level"])}computeMuteVolumeIcon(t){return t.isMuted?"hass:volume-off":"hass:volume-high"}computeHideVolumeButtons(t){return!t.supportsVolumeButtons||t.isOff}computeShowPlaybackControls(t){return!t.isOff&&t.hasMediaControl}computePlaybackControlIcon(t){return t.isPlaying?t.supportsPause?"hass:pause":"hass:stop":t.hasMediaControl||t.isOff||t.isIdle?t.hasMediaControl&&t.supportsPause&&!t.isPaused?"hass:play-pause":t.supportsPlay?"hass:play":null:""}computeHidePowerButton(t){return t.isOff?!t.supportsTurnOn:!t.supportsTurnOff}computeHideSelectSource(t){return t.isOff||!t.supportsSelectSource||!t.sourceList}computeHideSelectSoundMode(t){return t.isOff||!t.supportsSelectSoundMode||!t.soundModeList}computeHideTTS(t,e){return!t||!e.supportsPlayMedia}computeTTSLoaded(t){return Object(ee.a)(t,"tts")}handleTogglePower(){this.playerObj.togglePower()}handlePrevious(){this.playerObj.previousTrack()}handlePlaybackControl(){this.playerObj.mediaPlayPause()}handleNext(){this.playerObj.nextTrack()}handleSourceChanged(t){if(this.playerObj){var e=this.playerObj.source,i=t.detail.value;i&&e!==i&&this.playerObj.selectSource(i)}}handleSoundModeChanged(t){if(this.playerObj){var e=this.playerObj.soundMode,i=t.detail.value;i&&e!==i&&this.playerObj.selectSoundMode(i)}}handleVolumeTap(){this.playerObj.supportsVolumeMute&&this.playerObj.volumeMute(!this.playerObj.isMuted)}handleVolumeTouchEnd(t){t.preventDefault()}handleVolumeUp(){const t=this.$.volumeUp;this.handleVolumeWorker("volume_up",t,!0)}handleVolumeDown(){const t=this.$.volumeDown;this.handleVolumeWorker("volume_down",t,!0)}handleVolumeWorker(t,e,i){(i||void 0!==e&&e.pointerDown)&&(this.playerObj.callService(t),setTimeout(()=>this.handleVolumeWorker(t,e,!1),500))}volumeSliderChanged(t){const e=parseFloat(t.target.value),i=e>0?e/100:0;this.playerObj.setVolume(i)}ttsCheckForEnter(t){13===t.keyCode&&this.sendTTS()}sendTTS(){const t=this.hass.services.tts,e=Object.keys(t).sort();let i,a;for(a=0;a<e.length;a++)if(-1!==e[a].indexOf("_say")){i=e[a];break}i&&(this.hass.callService("tts",i,{entity_id:this.stateObj.entity_id,message:this.ttsMessage}),this.ttsMessage="",this.$.ttsInput.focus())}_computeRTLDirection(t){return Object(o.b)(t)}});customElements.define("more-info-script",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>

      <div class="layout vertical">
        <div class="data-entry layout justified horizontal">
          <div class="key">
            [[localize('ui.dialogs.more_info_control.script.last_action')]]
          </div>
          <div class="value">[[stateObj.attributes.last_action]]</div>
        </div>
      </div>
    `}static get properties(){return{stateObj:{type:Object}}}});var ie=i(207);customElements.define("more-info-sun",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>

      <template
        is="dom-repeat"
        items="[[computeOrder(risingDate, settingDate)]]"
      >
        <div class="data-entry layout justified horizontal">
          <div class="key">
            <span>[[itemCaption(item)]]</span>
            <ha-relative-time
              hass="[[hass]]"
              datetime-obj="[[itemDate(item)]]"
            ></ha-relative-time>
          </div>
          <div class="value">[[itemValue(item)]]</div>
        </div>
      </template>
      <div class="data-entry layout justified horizontal">
        <div class="key">
          [[localize('ui.dialogs.more_info_control.sun.elevation')]]
        </div>
        <div class="value">[[stateObj.attributes.elevation]]</div>
      </div>
    `}static get properties(){return{hass:Object,stateObj:Object,risingDate:{type:Object,computed:"computeRising(stateObj)"},settingDate:{type:Object,computed:"computeSetting(stateObj)"}}}computeRising(t){return new Date(t.attributes.next_rising)}computeSetting(t){return new Date(t.attributes.next_setting)}computeOrder(t,e){return t>e?["set","ris"]:["ris","set"]}itemCaption(t){return"ris"===t?this.localize("ui.dialogs.more_info_control.sun.rising"):this.localize("ui.dialogs.more_info_control.sun.setting")}itemDate(t){return"ris"===t?this.risingDate:this.settingDate}itemValue(t){return Object(ie.a)(this.itemDate(t),this.hass.language)}});var ae,ne,re,oe,se,le;!function(t){function e(){return null!==t&&t.apply(this,arguments)||this}g.d(e,t),e.prototype.render=function(){return this.hass&&this.stateObj?Object(f.e)(se||(se=g.f(["\n      <ha-attributes\n        .stateObj=","\n        .extraFilters=",'\n      ></ha-attributes>\n      <div class="actions">\n        ',"\n        ","\n        ","\n      </div>\n    "],["\n      <ha-attributes\n        .stateObj=","\n        .extraFilters=",'\n      ></ha-attributes>\n      <div class="actions">\n        ',"\n        ","\n        ","\n      </div>\n    "])),this.stateObj,"remaining","idle"===this.stateObj.state||"paused"===this.stateObj.state?Object(f.e)(ne||(ne=g.f(['\n              <mwc-button\n                .action="','"\n                @click="','"\n              >\n                ',"\n              </mwc-button>\n            "],['\n              <mwc-button\n                .action="','"\n                @click="','"\n              >\n                ',"\n              </mwc-button>\n            "])),"start",this._handleActionClick,this.hass.localize("ui.card.timer.actions.start")):"","active"===this.stateObj.state?Object(f.e)(re||(re=g.f(['\n              <mwc-button\n                .action="','"\n                @click="','"\n              >\n                ',"\n              </mwc-button>\n            "],['\n              <mwc-button\n                .action="','"\n                @click="','"\n              >\n                ',"\n              </mwc-button>\n            "])),"pause",this._handleActionClick,this.hass.localize("ui.card.timer.actions.pause")):"","active"===this.stateObj.state||"paused"===this.stateObj.state?Object(f.e)(oe||(oe=g.f(['\n              <mwc-button\n                .action="','"\n                @click="','"\n              >\n                ','\n              </mwc-button>\n              <mwc-button\n                .action="','"\n                @click="','"\n              >\n                ',"\n              </mwc-button>\n            "],['\n              <mwc-button\n                .action="','"\n                @click="','"\n              >\n                ','\n              </mwc-button>\n              <mwc-button\n                .action="','"\n                @click="','"\n              >\n                ',"\n              </mwc-button>\n            "])),"cancel",this._handleActionClick,this.hass.localize("ui.card.timer.actions.cancel"),"finish",this._handleActionClick,this.hass.localize("ui.card.timer.actions.finish")):""):Object(f.e)(ae||(ae=g.f([""],[""])))},e.prototype.updated=function(e){t.prototype.updated.call(this,e),e.has("stateObj")&&this.stateObj},e.prototype._handleActionClick=function(t){var e=t.currentTarget.action;this.hass.callService("timer",e,{entity_id:this.stateObj.entity_id})},Object.defineProperty(e,"styles",{get:function(){return Object(f.c)(le||(le=g.f(["\n      .actions {\n        margin: 0 8px;\n        padding-top: 20px;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n      }\n    "],["\n      .actions {\n        margin: 0 8px;\n        padding-top: 20px;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n      }\n    "])))},enumerable:!0,configurable:!0}),g.c([Object(f.f)()],e.prototype,"hass",void 0),g.c([Object(f.f)()],e.prototype,"stateObj",void 0),e=g.c([Object(f.d)("more-info-timer")],e)}(f.a);customElements.define("more-info-updater",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <style>
        .link {
          color: #03a9f4;
        }
      </style>

      <div>
        <a
          class="link"
          href="https://embed.windy.com/embed2.html?lat=32.487&lon=-84.023&zoom=5&level=surface&overlay=rain&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=32.487&detailLon=--84.023&metricWind=default&metricTemp=default&radarRange=-1/docs/installation/updating/"
          target="_blank"
          >[[localize('ui.dialogs.more_info_control.updater.title')]]</a
        >
      </div>
    `}static get properties(){return{stateObj:{type:Object}}}computeReleaseNotes(t){return t.attributes.release_notes||"https://embed.windy.com/embed2.html?lat=32.487&lon=-84.023&zoom=5&level=surface&overlay=rain&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=32.487&detailLon=--84.023&metricWind=default&metricTemp=default&radarRange=-1/docs/installation/updating/"}});customElements.define("more-info-vacuum",class extends n.a{static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          @apply --paper-font-body1;
          line-height: 1.5;
        }

        .status-subtitle {
          color: var(--secondary-text-color);
        }

        paper-item {
          cursor: pointer;
        }
      </style>

      <div class="horizontal justified layout">
        <div hidden$="[[!supportsStatus(stateObj)]]">
          <span class="status-subtitle">Status: </span
          ><span><strong>[[stateObj.attributes.status]]</strong></span>
        </div>
        <div hidden$="[[!supportsBattery(stateObj)]]">
          <span
            ><iron-icon icon="[[stateObj.attributes.battery_icon]]"></iron-icon>
            [[stateObj.attributes.battery_level]] %</span
          >
        </div>
      </div>
      <div hidden$="[[!supportsCommandBar(stateObj)]]">
        <p></p>
        <div class="status-subtitle">Vacuum cleaner commands:</div>
        <div class="horizontal justified layout">
          <template is="dom-if" if="[[supportsStart(stateObj)]]">
            <div>
              <paper-icon-button
                icon="hass:play"
                on-click="onStart"
                title="Start"
              ></paper-icon-button>
            </div>
            <div hidden$="[[!supportsPause(stateObj)]]">
              <paper-icon-button
                icon="hass:pause"
                on-click="onPause"
                title="Pause"
              ></paper-icon-button>
            </div>
          </template>
          <template is="dom-if" if="[[!supportsStart(stateObj)]]">
            <div hidden$="[[!supportsPause(stateObj)]]">
              <paper-icon-button
                icon="hass:play-pause"
                on-click="onPlayPause"
                title="Pause"
              ></paper-icon-button>
            </div>
          </template>

          <div hidden$="[[!supportsStop(stateObj)]]">
            <paper-icon-button
              icon="hass:stop"
              on-click="onStop"
              title="Stop"
            ></paper-icon-button>
          </div>
          <div hidden$="[[!supportsCleanSpot(stateObj)]]">
            <paper-icon-button
              icon="hass:broom"
              on-click="onCleanSpot"
              title="Clean spot"
            ></paper-icon-button>
          </div>
          <div hidden$="[[!supportsLocate(stateObj)]]">
            <paper-icon-button
              icon="hass:map-marker"
              on-click="onLocate"
              title="Locate"
            ></paper-icon-button>
          </div>
          <div hidden$="[[!supportsReturnHome(stateObj)]]">
            <paper-icon-button
              icon="hass:home-map-marker"
              on-click="onReturnHome"
              title="Return home"
            ></paper-icon-button>
          </div>
        </div>
      </div>

      <div hidden$="[[!supportsFanSpeed(stateObj)]]">
        <div class="horizontal justified layout">
          <ha-paper-dropdown-menu
            label-float=""
            dynamic-align=""
            label="Fan speed"
          >
            <paper-listbox
              slot="dropdown-content"
              selected="[[stateObj.attributes.fan_speed]]"
              on-selected-changed="fanSpeedChanged"
              attr-for-selected="item-name"
            >
              <template
                is="dom-repeat"
                items="[[stateObj.attributes.fan_speed_list]]"
              >
                <paper-item item-name$="[[item]]">[[item]]</paper-item>
              </template>
            </paper-listbox>
          </ha-paper-dropdown-menu>
          <div
            style="justify-content: center; align-self: center; padding-top: 1.3em"
          >
            <span
              ><iron-icon icon="hass:fan"></iron-icon>
              [[stateObj.attributes.fan_speed]]</span
            >
          </div>
        </div>
        <p></p>
      </div>
      <ha-attributes
        state-obj="[[stateObj]]"
        extra-filters="fan_speed,fan_speed_list,status,battery_level,battery_icon"
      ></ha-attributes>
    `}static get properties(){return{hass:{type:Object},inDialog:{type:Boolean,value:!1},stateObj:{type:Object}}}supportsPause(t){return Object(j.a)(t,4)}supportsStop(t){return Object(j.a)(t,8)}supportsReturnHome(t){return Object(j.a)(t,16)}supportsFanSpeed(t){return Object(j.a)(t,32)}supportsBattery(t){return Object(j.a)(t,64)}supportsStatus(t){return Object(j.a)(t,128)}supportsLocate(t){return Object(j.a)(t,512)}supportsCleanSpot(t){return Object(j.a)(t,1024)}supportsStart(t){return Object(j.a)(t,8192)}supportsCommandBar(t){return Object(j.a)(t,4)|Object(j.a)(t,8)|Object(j.a)(t,16)|Object(j.a)(t,512)|Object(j.a)(t,1024)|Object(j.a)(t,8192)}fanSpeedChanged(t){var e=this.stateObj.attributes.fan_speed,i=t.detail.value;i&&e!==i&&this.hass.callService("vacuum","set_fan_speed",{entity_id:this.stateObj.entity_id,fan_speed:i})}onStop(){this.hass.callService("vacuum","stop",{entity_id:this.stateObj.entity_id})}onPlayPause(){this.hass.callService("vacuum","start_pause",{entity_id:this.stateObj.entity_id})}onPause(){this.hass.callService("vacuum","pause",{entity_id:this.stateObj.entity_id})}onStart(){this.hass.callService("vacuum","start",{entity_id:this.stateObj.entity_id})}onLocate(){this.hass.callService("vacuum","locate",{entity_id:this.stateObj.entity_id})}onCleanSpot(){this.hass.callService("vacuum","clean_spot",{entity_id:this.stateObj.entity_id})}onReturnHome(){this.hass.callService("vacuum","return_to_base",{entity_id:this.stateObj.entity_id})}});customElements.define("ha-water_heater-control",class extends(Object(N.a)(n.a)){static get template(){return a.a`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        /* local DOM styles go here */
        :host {
          @apply --layout-flex;
          @apply --layout-horizontal;
          @apply --layout-justified;
        }
        .in-flux#target_temperature {
          color: var(--google-red-500);
        }
        #target_temperature {
          @apply --layout-self-center;
          font-size: 200%;
        }
        .control-buttons {
          font-size: 200%;
          text-align: right;
        }
        paper-icon-button {
          height: 48px;
          width: 48px;
        }
      </style>

      <!-- local DOM goes here -->
      <div id="target_temperature">[[value]] [[units]]</div>
      <div class="control-buttons">
        <div>
          <paper-icon-button
            icon="hass:chevron-up"
            on-click="incrementValue"
          ></paper-icon-button>
        </div>
        <div>
          <paper-icon-button
            icon="hass:chevron-down"
            on-click="decrementValue"
          ></paper-icon-button>
        </div>
      </div>
    `}static get properties(){return{value:{type:Number,observer:"valueChanged"},units:{type:String},min:{type:Number},max:{type:Number},step:{type:Number,value:1}}}temperatureStateInFlux(t){this.$.target_temperature.classList.toggle("in-flux",t)}incrementValue(){const t=this.value+this.step;this.value<this.max&&(this.last_changed=Date.now(),this.temperatureStateInFlux(!0)),t<=this.max?t<=this.min?this.value=this.min:this.value=t:this.value=this.max}decrementValue(){const t=this.value-this.step;this.value>this.min&&(this.last_changed=Date.now(),this.temperatureStateInFlux(!0)),t>=this.min?this.value=t:this.value=this.min}valueChanged(){this.last_changed&&window.setTimeout(()=>{Date.now()-this.last_changed>=2e3&&(this.fire("change"),this.temperatureStateInFlux(!1),this.last_changed=null)},2010)}});customElements.define("more-info-water_heater",class extends(Object(s.a)(Object(N.a)(n.a))){static get template(){return a.a`
      <style include="iron-flex"></style>
      <style>
        :host {
          color: var(--primary-text-color);
        }

        .container-away_mode,
        .container-temperature,
        .container-operation_list,

        .has-away_mode .container-away_mode,
        .has-target_temperature .container-temperature,
        .has-operation_mode .container-operation_list,

        .container-operation_list iron-icon,

        ha-paper-dropdown-menu {
          width: 100%;
        }

        paper-item {
          cursor: pointer;
        }

        ha-paper-slider {
          width: 100%;
        }

        ha-water_heater-control.range-control-left,
        ha-water_heater-control.range-control-right {
          float: left;
          width: 46%;
        }
        ha-water_heater-control.range-control-left {
          margin-right: 4%;
        }
        ha-water_heater-control.range-control-right {
          margin-left: 4%;
        }

        .single-row {
          padding: 8px 0;
        }
        }
      </style>

      <div class$="[[computeClassNames(stateObj)]]">
        <div class="container-temperature">
          <div class$="[[stateObj.attributes.operation_mode]]">
            <div hidden$="[[!supportsTemperatureControls(stateObj)]]">
              [[localize('ui.card.water_heater.target_temperature')]]
            </div>
            <template is="dom-if" if="[[supportsTemperature(stateObj)]]">
              <ha-water_heater-control
                value="[[stateObj.attributes.temperature]]"
                units="[[hass.config.unit_system.temperature]]"
                step="[[computeTemperatureStepSize(hass, stateObj)]]"
                min="[[stateObj.attributes.min_temp]]"
                max="[[stateObj.attributes.max_temp]]"
                on-change="targetTemperatureChanged"
              >
              </ha-water_heater-control>
            </template>
          </div>
        </div>

        <template is="dom-if" if="[[supportsOperationMode(stateObj)]]">
          <div class="container-operation_list">
            <div class="controls">
              <ha-paper-dropdown-menu
                label-float=""
                dynamic-align=""
                label="[[localize('ui.card.water_heater.operation')]]"
              >
                <paper-listbox
                  slot="dropdown-content"
                  selected="[[stateObj.attributes.operation_mode]]"
                  attr-for-selected="item-name"
                  on-selected-changed="handleOperationmodeChanged"
                >
                  <template
                    is="dom-repeat"
                    items="[[stateObj.attributes.operation_list]]"
                  >
                    <paper-item item-name$="[[item]]"
                      >[[_localizeOperationMode(localize, item)]]</paper-item
                    >
                  </template>
                </paper-listbox>
              </ha-paper-dropdown-menu>
            </div>
          </div>
        </template>

        <template is="dom-if" if="[[supportsAwayMode(stateObj)]]">
          <div class="container-away_mode">
            <div class="center horizontal layout single-row">
              <div class="flex">
                [[localize('ui.card.water_heater.away_mode')]]
              </div>
              <paper-toggle-button
                checked="[[awayToggleChecked]]"
                on-change="awayToggleChanged"
              >
              </paper-toggle-button>
            </div>
          </div>
        </template>
      </div>
    `}static get properties(){return{hass:{type:Object},stateObj:{type:Object,observer:"stateObjChanged"},awayToggleChecked:Boolean}}stateObjChanged(t,e){t&&this.setProperties({awayToggleChecked:"on"===t.attributes.away_mode}),e&&(this._debouncer=ft.a.debounce(this._debouncer,gt.d.after(500),()=>{this.fire("iron-resize")}))}computeTemperatureStepSize(t,e){return e.attributes.target_temp_step?e.attributes.target_temp_step:-1!==t.config.unit_system.temperature.indexOf("F")?1:.5}supportsTemperatureControls(t){return this.supportsTemperature(t)}supportsTemperature(t){return Object(j.a)(t,1)&&"number"==typeof t.attributes.temperature}supportsOperationMode(t){return Object(j.a)(t,2)}supportsAwayMode(t){return Object(j.a)(t,4)}computeClassNames(t){var e=[ot(t,{1:"has-target_temperature",2:"has-operation_mode",4:"has-away_mode"})];return e.push("more-info-water_heater"),e.join(" ")}targetTemperatureChanged(t){const e=t.target.value;e!==this.stateObj.attributes.temperature&&this.callServiceHelper("set_temperature",{temperature:e})}awayToggleChanged(t){const e="on"===this.stateObj.attributes.away_mode,i=t.target.checked;e!==i&&this.callServiceHelper("set_away_mode",{away_mode:i})}handleOperationmodeChanged(t){const e=this.stateObj.attributes.operation_mode,i=t.detail.value;i&&e!==i&&this.callServiceHelper("set_operation_mode",{operation_mode:i})}callServiceHelper(t,e){e.entity_id=this.stateObj.entity_id,this.hass.callService("water_heater",t,e).then(()=>{this.stateObjChanged(this.stateObj)})}_localizeOperationMode(t,e){return t(`state.water_heater.${e}`)||e}});customElements.define("more-info-weather",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <style>
        iron-icon {
          color: var(--paper-item-icon-color);
        }
        .section {
          margin: 16px 0 8px 0;
          font-size: 1.2em;
        }

        .flex {
          display: flex;
          height: 32px;
          align-items: center;
        }

        .main {
          flex: 1;
          margin-left: 24px;
        }

        .temp,
        .templow {
          min-width: 48px;
          text-align: right;
        }

        .templow {
          margin: 0 16px;
          color: var(--secondary-text-color);
        }

        .attribution {
          color: var(--secondary-text-color);
          text-align: center;
        }
      </style>

      <div class="flex">
        <iron-icon icon="hass:thermometer"></iron-icon>
        <div class="main">
          [[localize('ui.card.weather.attributes.temperature')]]
        </div>
        <div>
          [[stateObj.attributes.temperature]] [[getUnit('temperature')]]
        </div>
      </div>
      <template is="dom-if" if="[[_showValue(stateObj.attributes.pressure)]]">
        <div class="flex">
          <iron-icon icon="hass:gauge"></iron-icon>
          <div class="main">
            [[localize('ui.card.weather.attributes.air_pressure')]]
          </div>
          <div>
            [[stateObj.attributes.pressure]] [[getUnit('air_pressure')]]
          </div>
        </div>
      </template>
      <template is="dom-if" if="[[_showValue(stateObj.attributes.humidity)]]">
        <div class="flex">
          <iron-icon icon="hass:water-percent"></iron-icon>
          <div class="main">
            [[localize('ui.card.weather.attributes.humidity')]]
          </div>
          <div>[[stateObj.attributes.humidity]] %</div>
        </div>
      </template>
      <template is="dom-if" if="[[_showValue(stateObj.attributes.wind_speed)]]">
        <div class="flex">
          <iron-icon icon="hass:weather-windy"></iron-icon>
          <div class="main">
            [[localize('ui.card.weather.attributes.wind_speed')]]
          </div>
          <div>
            [[getWind(stateObj.attributes.wind_speed,
            stateObj.attributes.wind_bearing, localize)]]
          </div>
        </div>
      </template>
      <template is="dom-if" if="[[_showValue(stateObj.attributes.visibility)]]">
        <div class="flex">
          <iron-icon icon="hass:eye"></iron-icon>
          <div class="main">
            [[localize('ui.card.weather.attributes.visibility')]]
          </div>
          <div>[[stateObj.attributes.visibility]] [[getUnit('length')]]</div>
        </div>
      </template>

      <template is="dom-if" if="[[stateObj.attributes.forecast]]">
        <div class="section">[[localize('ui.card.weather.forecast')]]:</div>
        <template is="dom-repeat" items="[[stateObj.attributes.forecast]]">
          <div class="flex">
            <template is="dom-if" if="[[_showValue(item.condition)]]">
              <iron-icon icon="[[getWeatherIcon(item.condition)]]"></iron-icon>
            </template>
            <template is="dom-if" if="[[!_showValue(item.templow)]]">
              <div class="main">[[computeDateTime(item.datetime)]]</div>
            </template>
            <template is="dom-if" if="[[_showValue(item.templow)]]">
              <div class="main">[[computeDate(item.datetime)]]</div>
              <div class="templow">
                [[item.templow]] [[getUnit('temperature')]]
              </div>
            </template>
            <div class="temp">
              [[item.temperature]] [[getUnit('temperature')]]
            </div>
          </div>
        </template>
      </template>

      <template is="dom-if" if="stateObj.attributes.attribution">
        <div class="attribution">[[stateObj.attributes.attribution]]</div>
      </template>
    `}static get properties(){return{hass:Object,stateObj:Object}}constructor(){super(),this.cardinalDirections=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"],this.weatherIcons={"clear-night":"hass:weather-night",cloudy:"hass:weather-cloudy",exceptional:"hass:alert-circle-outline",fog:"hass:weather-fog",hail:"hass:weather-hail",lightning:"hass:weather-lightning","lightning-rainy":"hass:weather-lightning-rainy",partlycloudy:"hass:weather-partly-cloudy",pouring:"hass:weather-pouring",rainy:"hass:weather-rainy",snowy:"hass:weather-snowy","snowy-rainy":"hass:weather-snowy-rainy",sunny:"hass:weather-sunny",windy:"hass:weather-windy","windy-variant":"hass:weather-windy-variant"}}computeDate(t){return new Date(t).toLocaleDateString(this.hass.language,{weekday:"long",month:"short",day:"numeric"})}computeDateTime(t){return new Date(t).toLocaleDateString(this.hass.language,{weekday:"long",hour:"numeric"})}getUnit(t){const e=this.hass.config.unit_system.length||"";switch(t){case"air_pressure":return"km"===e?"hPa":"inHg";case"length":return e;case"precipitation":return"km"===e?"mm":"in";default:return this.hass.config.unit_system[t]||""}}windBearingToText(t){const e=parseInt(t);return isFinite(e)?this.cardinalDirections[((e+11.25)/22.5|0)%16]:t}getWind(t,e,i){if(null!=e){const a=this.windBearingToText(e);return`${t} ${this.getUnit("length")}/h (${i(`ui.card.weather.cardinal_direction.${a.toLowerCase()}`)||a})`}return`${t} ${this.getUnit("length")}/h`}getWeatherIcon(t){return this.weatherIcons[t]}_showValue(t){return null!=t}});var ce=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return g.d(e,t),Object.defineProperty(e,"properties",{get:function(){return{hass:{},stateObj:{}}},enumerable:!0,configurable:!0}),e.prototype.firstUpdated=function(){this.style.position="relative",this.style.display="block"},e.prototype.update=function(e){t.prototype.update.call(this,e);var i=this.stateObj,a=this.hass;i&&a?(this._detachedChild&&(this.appendChild(this._detachedChild),this._detachedChild=void 0),D(this,(i.attributes&&"custom_ui_more_info"in i.attributes?i.attributes.custom_ui_more_info:"more-info-"+function(t){var e=Object(O.a)(t);return C.h.includes(e)?e:C.d.includes(e)?"hidden":"default"}(i)).toUpperCase(),{hass:a,stateObj:i})):this.lastChild&&(this._detachedChild=this.lastChild,this.removeChild(this.lastChild))},e}(f.b);customElements.define("more-info-content",ce);const de=["camera","configurator","history_graph"];customElements.define("more-info-controls",class extends(Object(N.a)(n.a)){static get template(){return a.a`
      <style include="ha-style-dialog">
        app-toolbar {
          color: var(--more-info-header-color);
          background-color: var(--more-info-header-background);
        }

        app-toolbar [main-title] {
          @apply --ha-more-info-app-toolbar-title;
        }

        state-card-content {
          display: block;
          padding: 16px;
        }

        state-history-charts {
          max-width: 100%;
          margin-bottom: 16px;
        }

        @media all and (min-width: 451px) and (min-height: 501px) {
          .main-title {
            pointer-events: auto;
            cursor: default;
          }
        }

        paper-dialog-scrollable {
          padding-bottom: 16px;
        }

        :host([domain="camera"]) paper-dialog-scrollable {
          margin: 0 -24px -21px;
        }

        :host([rtl]) app-toolbar {
          direction: rtl;
          text-align: right;
        }
      </style>

      <app-toolbar>
        <paper-icon-button
          aria-label="Dismiss dialog"
          icon="hass:close"
          dialog-dismiss
        ></paper-icon-button>
        <div class="main-title" main-title="" on-click="enlarge">
          [[_computeStateName(stateObj)]]
        </div>
        <template is="dom-if" if="[[canConfigure]]">
          <paper-icon-button
            icon="hass:settings"
            on-click="_gotoSettings"
          ></paper-icon-button>
        </template>
      </app-toolbar>

      <template is="dom-if" if="[[_computeShowStateInfo(stateObj)]]" restamp="">
        <state-card-content
          state-obj="[[stateObj]]"
          hass="[[hass]]"
          in-dialog=""
        ></state-card-content>
      </template>
      <paper-dialog-scrollable dialog-element="[[dialogElement]]">
        <template
          is="dom-if"
          if="[[_computeShowHistoryComponent(hass, stateObj)]]"
          restamp=""
        >
          <ha-state-history-data
            hass="[[hass]]"
            filter-type="recent-entity"
            entity-id="[[stateObj.entity_id]]"
            data="{{_stateHistory}}"
            is-loading="{{_stateHistoryLoading}}"
            cache-config="[[_cacheConfig]]"
          ></ha-state-history-data>
          <state-history-charts
            hass="[[hass]]"
            history-data="[[_stateHistory]]"
            is-loading-data="[[_stateHistoryLoading]]"
            up-to-now
          ></state-history-charts>
        </template>
        <more-info-content
          state-obj="[[stateObj]]"
          hass="[[hass]]"
        ></more-info-content>
      </paper-dialog-scrollable>
    `}static get properties(){return{hass:Object,stateObj:{type:Object,observer:"_stateObjChanged"},dialogElement:Object,canConfigure:Boolean,domain:{type:String,reflectToAttribute:!0,computed:"_computeDomain(stateObj)"},_stateHistory:Object,_stateHistoryLoading:Boolean,large:{type:Boolean,value:!1,notify:!0},_cacheConfig:{type:Object,value:{refresh:60,cacheKey:null,hoursToShow:24}},rtl:{type:Boolean,reflectToAttribute:!0,computed:"_computeRTL(hass)"}}}enlarge(){this.large=!this.large}_computeShowStateInfo(t){return!t||!de.includes(Object(O.a)(t))}_computeShowHistoryComponent(t,e){return t&&e&&Object(ee.a)(t,"history")&&!C.e.includes(Object(O.a)(e))}_computeDomain(t){return t?Object(O.a)(t):""}_computeStateName(t){return t?Object(r.a)(t):""}_stateObjChanged(t){t&&this._cacheConfig.cacheKey!==`more_info.${t.entity_id}`&&(this._cacheConfig={...this._cacheConfig,cacheKey:`more_info.${t.entity_id}`})}_gotoSettings(){this.fire("more-info-page",{page:"settings"})}_computeRTL(t){return Object(o.a)(t)}});var pe=i(119),ue=i(259);i(130);customElements.define("more-info-settings",class extends(Object(s.a)(Object(N.a)(n.a))){static get template(){return a.a`
      <style>
        app-toolbar {
          color: var(--more-info-header-color);
          background-color: var(--more-info-header-background);

          /* to fit save button */
          padding-right: 0;
        }

        app-toolbar [main-title] {
          @apply --ha-more-info-app-toolbar-title;
        }

        app-toolbar mwc-button {
          font-size: 0.8em;
          margin: 0;
          --mdc-theme-primary: var(--more-info-header-color);
        }

        .form {
          padding: 0 24px 24px;
        }
      </style>

      <app-toolbar>
        <ha-paper-icon-button-arrow-prev
          on-click="_backTapped"
        ></ha-paper-icon-button-arrow-prev>
        <div main-title="">[[_computeStateName(stateObj)]]</div>
        <mwc-button on-click="_save" disabled="[[_computeInvalid(_entityId)]]"
          >[[localize('ui.dialogs.more_info_settings.save')]]</mwc-button
        >
      </app-toolbar>

      <div class="form">
        <paper-input
          value="{{_name}}"
          label="[[localize('ui.dialogs.more_info_settings.name')]]"
        ></paper-input>
        <paper-input
          value="{{_entityId}}"
          label="[[localize('ui.dialogs.more_info_settings.entity_id')]]"
          error-message="Domain needs to stay the same"
          invalid="[[_computeInvalid(_entityId)]]"
        ></paper-input>
      </div>
    `}static get properties(){return{hass:Object,stateObj:Object,registryInfo:{type:Object,observer:"_registryInfoChanged",notify:!0},_name:String,_entityId:String}}_computeStateName(t){return t?Object(r.a)(t):""}_computeInvalid(t){return Object(pe.a)(this.stateObj.entity_id)!==Object(pe.a)(t)}_registryInfoChanged(t){t?this.setProperties({_name:t.name,_entityId:t.entity_id}):this.setProperties({_name:"",_entityId:""})}_backTapped(){this.fire("more-info-page",{page:null})}async _save(){try{const e=await Object(ue.b)(this.hass,this.stateObj.entity_id,{name:this._name,new_entity_id:this._entityId});this.registryInfo=e,this.stateObj.entity_id!==this._entityId&&this.fire("hass-more-info",{entityId:this._entityId})}catch(t){alert(`save failed: ${t.message}`)}}});var he=i(262);customElements.define("ha-more-info-dialog",class extends(Object(he.a)(n.a)){static get template(){return a.a`
      <style include="ha-style-dialog paper-dialog-shared-styles">
        :host {
          font-size: 14px;
          width: 365px;
          border-radius: 2px;
        }

        more-info-controls,
        more-info-settings {
          --more-info-header-background: var(--secondary-background-color);
          --more-info-header-color: var(--primary-text-color);
          --ha-more-info-app-toolbar-title: {
            /* Design guideline states 24px, changed to 16 to align with state info */
            margin-left: 16px;
            line-height: 1.3em;
            max-height: 2.6em;
            overflow: hidden;
            /* webkit and blink still support simple multiline text-overflow */
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
          }
        }

        /* overrule the ha-style-dialog max-height on small screens */
        @media all and (max-width: 450px), all and (max-height: 500px) {
          more-info-controls,
          more-info-settings {
            --more-info-header-background: var(--primary-color);
            --more-info-header-color: var(--text-primary-color);
          }
          :host {
            width: 100% !important;
            border-radius: 0px;
            position: fixed !important;
            margin: 0;
          }
          :host::before {
            content: "";
            position: fixed;
            z-index: -1;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            background-color: inherit;
          }
        }

        :host([data-domain="camera"]) {
          width: auto;
        }

        :host([data-domain="history_graph"]),
        :host([large]) {
          width: 90%;
        }
      </style>

      <template is="dom-if" if="[[!_page]]">
        <more-info-controls
          class="no-padding"
          hass="[[hass]]"
          state-obj="[[stateObj]]"
          dialog-element="[[_dialogElement]]"
          can-configure="[[_registryInfo]]"
          large="{{large}}"
        ></more-info-controls>
      </template>
      <template is="dom-if" if='[[_equals(_page, "settings")]]'>
        <more-info-settings
          class="no-padding"
          hass="[[hass]]"
          state-obj="[[stateObj]]"
          registry-info="{{_registryInfo}}"
        ></more-info-settings>
      </template>
    `}static get properties(){return{hass:Object,stateObj:{type:Object,computed:"_computeStateObj(hass)",observer:"_stateObjChanged"},large:{type:Boolean,reflectToAttribute:!0,observer:"_largeChanged"},_dialogElement:Object,_registryInfo:Object,_page:{type:String,value:null},dataDomain:{computed:"_computeDomain(stateObj)",reflectToAttribute:!0}}}static get observers(){return["_dialogOpenChanged(opened)"]}ready(){super.ready(),this._dialogElement=this,this.addEventListener("more-info-page",t=>{this._page=t.detail.page})}_computeDomain(t){return t?Object(O.a)(t):""}_computeStateObj(t){return t.states[t.moreInfoEntityId]||null}async _stateObjChanged(t,e){if(t){if(requestAnimationFrame(()=>requestAnimationFrame(()=>{this.opened=!0})),Object(ee.a)(this.hass,"config")&&(!e||e.entity_id!==t.entity_id)&&this.hass.user.is_admin)try{const e=await this.hass.callWS({type:"config/entity_registry/get",entity_id:t.entity_id});this._registryInfo=e}catch(i){this._registryInfo=null}}else this.setProperties({opened:!1,_page:null,_registryInfo:null,large:!1})}_dialogOpenChanged(t){!t&&this.stateObj&&this.fire("hass-more-info",{entityId:null})}_equals(t,e){return t===e}_largeChanged(){this.notifyResize()}})}])]);
//# sourceMappingURL=chunk.9b0119835572c7e7064d.js.map