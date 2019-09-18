/*! For license information please see chunk.82ca9e530c75a25c3af8.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[99,6,7,8,13],{111:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));i(5);const a={properties:{value:{type:Number,value:0,notify:!0,reflectToAttribute:!0},min:{type:Number,value:0,notify:!0},max:{type:Number,value:100,notify:!0},step:{type:Number,value:1,notify:!0},ratio:{type:Number,value:0,readOnly:!0,notify:!0}},observers:["_update(value, min, max, step)"],_calcRatio:function(t){return(this._clampValue(t)-this.min)/(this.max-this.min)},_clampValue:function(t){return Math.min(this.max,Math.max(this.min,this._calcStep(t)))},_calcStep:function(t){if(t=parseFloat(t),!this.step)return t;var e=Math.round((t-this.min)/this.step);return this.step<1?e/(1/this.step)+this.min:e*this.step+this.min},_validateValue:function(){var t=this._clampValue(this.value);return this.value=this.oldValue=isNaN(t)?this.oldValue:t,this.value!==t},_update:function(){this._validateValue(),this._setRatio(100*this._calcRatio(this.value))}}},113:function(t,e,i){"use strict";i(5);var a=i(94),n=i(61),s=i(6),r=i(1),o=i(3);Object(s.a)({_template:o.a`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[n.a],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){a.a.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=Object(r.a)(this).observeNodes(function(t){this._initSlottedInput()}.bind(this))},detached:function(){this._observer&&(Object(r.a)(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var t;if(this.allowedPattern)t=new RegExp(this.allowedPattern);else switch(this.inputElement.type){case"number":t=/[0-9.,e-]/}return t},_bindValueChanged:function(t,e){e&&(void 0===t?e.value=null:t!==e.value&&(this.inputElement.value=t),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:t}))},_onInput:function(){this.allowedPattern&&!this._patternAlreadyChecked&&(this._checkPatternValidity()||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput));this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(t){var e=8==t.keyCode||9==t.keyCode||13==t.keyCode||27==t.keyCode,i=19==t.keyCode||20==t.keyCode||45==t.keyCode||46==t.keyCode||144==t.keyCode||145==t.keyCode||t.keyCode>32&&t.keyCode<41||t.keyCode>111&&t.keyCode<124;return!(e||0==t.charCode&&i)},_onKeypress:function(t){if(this.allowedPattern||"number"===this.inputElement.type){var e=this._patternRegExp;if(e&&!(t.metaKey||t.ctrlKey||t.altKey)){this._patternAlreadyChecked=!0;var i=String.fromCharCode(t.charCode);this._isPrintable(t)&&!e.test(i)&&(t.preventDefault(),this._announceInvalidCharacter("Invalid character "+i+" not entered."))}}},_checkPatternValidity:function(){var t=this._patternRegExp;if(!t)return!0;for(var e=0;e<this.inputElement.value.length;e++)if(!t.test(this.inputElement.value[e]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var t=this.inputElement.checkValidity();return t&&(this.required&&""===this.bindValue?t=!1:this.hasValidator()&&(t=n.a.validate.call(this,this.bindValue))),this.invalid=!t,this.fire("iron-input-validate"),t},_announceInvalidCharacter:function(t){this.fire("iron-announce",{text:t})},_computeValue:function(t){return t}})},117:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));const a=async(t,e)=>new Promise(i=>{const a=e(t,t=>{a(),i(t)})})},118:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var a=i(9),n=i(18);const s=Object(a.a)(t=>(class extends t{fire(t,e,i){return i=i||{},Object(n.a)(i.node||this,t,e,i)}}))},120:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));i(5);var a=i(55),n=i(35);const s=[a.a,n.a,{hostAttributes:{role:"option",tabindex:"0"}}]},122:function(t,e,i){"use strict";i(5);const a={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(t,e){for(var i in e)t[i]=e[i]},_cloneConfig:function(t){var e={isClone:!0};return this._copyProperties(e,t),e},_getAnimationConfigRecursive:function(t,e,i){var a;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(a=t?this.animationConfig[t]:this.animationConfig,Array.isArray(a)||(a=[a]),a)for(var n,s=0;n=a[s];s++)if(n.animatable)n.animatable._getAnimationConfigRecursive(n.type||t,e,i);else if(n.id){var r=e[n.id];r?(r.isClone||(e[n.id]=this._cloneConfig(r),r=e[n.id]),this._copyProperties(r,n)):e[n.id]=n}else i.push(n)},getAnimationConfig:function(t){var e={},i=[];for(var a in this._getAnimationConfigRecursive(t,e,i),e)i.push(e[a]);return i}};i.d(e,"a",(function(){return n}));const n=[a,{_configureAnimations:function(t){var e=[],i=[];if(t.length>0)for(let s,r=0;s=t[r];r++){let t=document.createElement(s.name);if(t.isNeonAnimation){let e=null;t.configure||(t.configure=function(t){return null}),e=t.configure(s),i.push({result:e,config:s,neonAnimation:t})}else console.warn(this.is+":",s.name,"not found!")}for(var a=0;a<i.length;a++){let t=i[a].result,s=i[a].config,r=i[a].neonAnimation;try{"function"!=typeof t.cancel&&(t=document.timeline.play(t))}catch(n){t=null,console.warn("Couldnt play","(",s.name,").",n)}t&&e.push({neonAnimation:r,config:s,animation:t})}return e},_shouldComplete:function(t){for(var e=!0,i=0;i<t.length;i++)if("finished"!=t[i].animation.playState){e=!1;break}return e},_complete:function(t){for(var e=0;e<t.length;e++)t[e].neonAnimation.complete(t[e].config);for(e=0;e<t.length;e++)t[e].animation.cancel()},playAnimation:function(t,e){var i=this.getAnimationConfig(t);if(i){this._active=this._active||{},this._active[t]&&(this._complete(this._active[t]),delete this._active[t]);var a=this._configureAnimations(i);if(0!=a.length){this._active[t]=a;for(var n=0;n<a.length;n++)a[n].animation.onfinish=function(){this._shouldComplete(a)&&(this._complete(a),delete this._active[t],this.fire("neon-animation-finish",e,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",e,{bubbles:!1})}},cancelAnimation:function(){for(var t in this._active){var e=this._active[t];for(var i in e)e[i].animation.cancel()}this._active={}}}]},123:function(t,e,i){"use strict";i(5);var a=i(60),n=i(61);const s={properties:{checked:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_checkedChanged"},toggles:{type:Boolean,value:!0,reflectToAttribute:!0},value:{type:String,value:"on",observer:"_valueChanged"}},observers:["_requiredChanged(required)"],created:function(){this._hasIronCheckedElementBehavior=!0},_getValidity:function(t){return this.disabled||!this.required||this.checked},_requiredChanged:function(){this.required?this.setAttribute("aria-required","true"):this.removeAttribute("aria-required")},_checkedChanged:function(){this.active=this.checked,this.fire("iron-change")},_valueChanged:function(){void 0!==this.value&&null!==this.value||(this.value="on")}},r=[a.a,n.a,s];var o=i(57),c=i(69);i.d(e,"a",(function(){return h}));const l={_checkedChanged:function(){s._checkedChanged.call(this),this.hasRipple()&&(this.checked?this._ripple.setAttribute("checked",""):this._ripple.removeAttribute("checked"))},_buttonStateChanged:function(){c.a._buttonStateChanged.call(this),this.disabled||this.isAttached&&(this.checked=this.active)}},h=[o.a,r,l]},130:function(t,e,i){var a=i(156),n=["renderMarkdown"];t.exports=function(){var t=new Worker(i.p+"b94069a40c95c1313fad.worker.js",{name:"[hash].worker.js"});return a(t,n),t}},138:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s}));i(13);const a=(t,e)=>t.sendMessagePromise({type:"lovelace/config",force:e}),n=(t,e)=>t.callWS({type:"lovelace/config/save",config:e}),s=(t,e)=>t.subscribeEvents(e,"lovelace_updated")},143:function(t,e,i){"use strict";i(5),i(45),i(145);var a=i(6),n=i(3),s=i(120);Object(a.a)({_template:n.a`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[s.a]})},144:function(t,e,i){"use strict";i(5),i(42);var a=i(125),n=i(6),s=i(3);Object(n.a)({_template:s.a`
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
`,is:"paper-listbox",behaviors:[a.a],hostAttributes:{role:"listbox"}})},145:function(t,e,i){"use strict";i(45),i(68),i(42),i(54);const a=document.createElement("template");a.setAttribute("style","display: none;"),a.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(a.content)},146:function(t,e,i){"use strict";i(5),i(31),i(109),i(93),i(147),i(110),i(42),i(148),i(149);var a=i(55),n=i(35),s=i(60),r=i(61),o=i(6),c=i(1),l=i(36),h=i(3);Object(o.a)({_template:h.a`
    <style include="paper-dropdown-menu-shared-styles"></style>

    <!-- this div fulfills an a11y requirement for combobox, do not remove -->
    <span role="button"></span>
    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" dynamic-align="[[dynamicAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]">
      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->
      <div class="dropdown-trigger" slot="dropdown-trigger">
        <paper-ripple></paper-ripple>
        <!-- paper-input has type="text" for a11y, do not remove -->
        <paper-input type="text" invalid="[[invalid]]" readonly disabled="[[disabled]]" value="[[value]]" placeholder="[[placeholder]]" error-message="[[errorMessage]]" always-float-label="[[alwaysFloatLabel]]" no-label-float="[[noLabelFloat]]" label="[[label]]">
          <!-- support hybrid mode: user might be using paper-input 1.x which distributes via <content> -->
          <iron-icon icon="paper-dropdown-menu:arrow-drop-down" suffix slot="suffix"></iron-icon>
        </paper-input>
      </div>
      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>
    </paper-menu-button>
`,is:"paper-dropdown-menu",behaviors:[a.a,n.a,s.a,r.a],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0},label:{type:String},placeholder:{type:String},errorMessage:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,dynamicAlign:{type:Boolean},restoreFocusOnClose:{type:Boolean,value:!0}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},hostAttributes:{role:"combobox","aria-autocomplete":"none","aria-haspopup":"true"},observers:["_selectedItemChanged(selectedItem)"],attached:function(){var t=this.contentElement;t&&t.selectedItem&&this._setSelectedItem(t.selectedItem)},get contentElement(){for(var t=Object(c.a)(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(t){this._setSelectedItem(t.detail.item)},_onIronDeselect:function(t){this._setSelectedItem(null)},_onTap:function(t){l.c(t)===this&&this.open()},_selectedItemChanged:function(t){var e="";e=t?t.label||t.getAttribute("label")||t.textContent.trim():"",this.value=e,this._setSelectedItemLabel(e)},_computeMenuVerticalOffset:function(t,e){return e||(t?-4:8)},_getValidity:function(t){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var t=this.opened?"true":"false",e=this.contentElement;e&&e.setAttribute("aria-expanded",t)}})},147:function(t,e,i){"use strict";i(5);var a=i(31),n=i(35),s=i(87),r=i(122),o=i(6),c=i(1),l=i(3);Object(o.a)({_template:l.a`
    <style>
      :host {
        position: fixed;
      }

      #contentWrapper ::slotted(*) {
        overflow: auto;
      }

      #contentWrapper.animating ::slotted(*) {
        overflow: hidden;
        pointer-events: none;
      }
    </style>

    <div id="contentWrapper">
      <slot id="content" name="dropdown-content"></slot>
    </div>
`,is:"iron-dropdown",behaviors:[n.a,a.a,s.a,r.a],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var t=Object(c.a)(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){this.sizingTarget&&this.sizingTarget!==this||(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),s.b._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):s.b._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):s.b._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var t=this.containedElement,e=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),i=0;i<e.length;i++)e[i].node=t;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(t){this._readied&&(t?this.scrollAction&&"lock"!==this.scrollAction||(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var t=this.focusTarget||this.containedElement;t&&this.opened&&!this.noAutoFocus?t.focus():s.b._applyFocus.apply(this,arguments)}});const h={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(t){if(t.timing)for(var e in t.timing)this.animationTiming[e]=t.timing[e];return this.animationTiming},setPrefixedProperty:function(t,e,i){for(var a,n={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]}[e],s=0;a=n[s];s++)t.style[a]=i;t.style[e]=i},complete:function(t){}};Object(o.a)({is:"fade-in-animation",behaviors:[h],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(t)),this._effect}}),Object(o.a)({is:"fade-out-animation",behaviors:[h],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(t)),this._effect}});i(42),i(86);Object(o.a)({is:"paper-menu-grow-height-animation",behaviors:[h],configure:function(t){var e=t.node,i=e.getBoundingClientRect().height;return this._effect=new KeyframeEffect(e,[{height:i/2+"px"},{height:i+"px"}],this.timingFromConfig(t)),this._effect}}),Object(o.a)({is:"paper-menu-grow-width-animation",behaviors:[h],configure:function(t){var e=t.node,i=e.getBoundingClientRect().width;return this._effect=new KeyframeEffect(e,[{width:i/2+"px"},{width:i+"px"}],this.timingFromConfig(t)),this._effect}}),Object(o.a)({is:"paper-menu-shrink-width-animation",behaviors:[h],configure:function(t){var e=t.node,i=e.getBoundingClientRect().width;return this._effect=new KeyframeEffect(e,[{width:i+"px"},{width:i-i/20+"px"}],this.timingFromConfig(t)),this._effect}}),Object(o.a)({is:"paper-menu-shrink-height-animation",behaviors:[h],configure:function(t){var e=t.node,i=e.getBoundingClientRect().height;return this.setPrefixedProperty(e,"transformOrigin","0 0"),this._effect=new KeyframeEffect(e,[{height:i+"px",transform:"translateY(0)"},{height:i/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(t)),this._effect}});var d={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const p=Object(o.a)({_template:l.a`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;

        @apply --paper-menu-button;
      }

      :host([disabled]) {
        cursor: auto;
        color: var(--disabled-text-color);

        @apply --paper-menu-button-disabled;
      }

      iron-dropdown {
        @apply --paper-menu-button-dropdown;
      }

      .dropdown-content {
        @apply --shadow-elevation-2dp;

        position: relative;
        border-radius: 2px;
        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));

        @apply --paper-menu-button-content;
      }

      :host([vertical-align="top"]) .dropdown-content {
        margin-bottom: 20px;
        margin-top: -10px;
        top: 10px;
      }

      :host([vertical-align="bottom"]) .dropdown-content {
        bottom: 10px;
        margin-bottom: -10px;
        margin-top: 20px;
      }

      #trigger {
        cursor: pointer;
      }
    </style>

    <div id="trigger" on-tap="toggle">
      <slot name="dropdown-trigger"></slot>
    </div>

    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled">
      <div slot="dropdown-content" class="dropdown-content">
        <slot id="content" name="dropdown-content"></slot>
      </div>
    </iron-dropdown>
`,is:"paper-menu-button",behaviors:[a.a,n.a],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:d.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:d.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:d.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var t=Object(c.a)(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(t){this.ignoreSelect||this.close()},_onIronActivate:function(t){this.closeOnActivate&&this.close()},_openedChanged:function(t,e){t?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):null!=e&&this.fire("paper-dropdown-close")},_disabledChanged:function(t){n.a._disabledChanged.apply(this,arguments),t&&this.opened&&this.close()},__onIronOverlayCanceled:function(t){var e=t.detail,i=this.$.trigger;Object(c.a)(e).path.indexOf(i)>-1&&t.preventDefault()}});Object.keys(d).forEach((function(t){p[t]=d[t]}))},148:function(t,e,i){"use strict";i(88);const a=document.createElement("template");a.setAttribute("style","display: none;"),a.innerHTML='<iron-iconset-svg name="paper-dropdown-menu" size="24">\n<svg><defs>\n<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n</defs></svg>\n</iron-iconset-svg>',document.head.appendChild(a.content)},149:function(t,e,i){"use strict";i(42);const a=document.createElement("template");a.setAttribute("style","display: none;"),a.innerHTML='<dom-module id="paper-dropdown-menu-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(a.content)},153:function(t,e,i){"use strict";i(5),i(42);var a=i(123),n=i(57),s=i(6),r=i(3),o=i(62);const c=r.a`<style>
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

<div id="checkboxLabel"><slot></slot></div>`;c.setAttribute("strip-whitespace",""),Object(s.a)({_template:c,is:"paper-checkbox",behaviors:[a.a],hostAttributes:{role:"checkbox","aria-checked":!1,tabindex:0},properties:{ariaActiveAttribute:{type:String,value:"aria-checked"}},attached:function(){Object(o.a)(this,(function(){if("-1px"===this.getComputedStyleValue("--calculated-paper-checkbox-ink-size").trim()){var t=this.getComputedStyleValue("--calculated-paper-checkbox-size").trim(),e="px",i=t.match(/[A-Za-z]+$/);null!==i&&(e=i[0]);var a=parseFloat(t),n=8/3*a;"px"===e&&(n=Math.floor(n))%2!=a%2&&n++,this.updateStyles({"--paper-checkbox-ink-size":n+e})}}))},_computeCheckboxClass:function(t,e){var i="";return t&&(i+="checked "),e&&(i+="invalid"),i},_computeCheckmarkClass:function(t){return t?"":"hidden"},_createRipple:function(){return this._rippleContainer=this.$.checkboxContainer,n.b._createRipple.call(this)}})},154:function(t,e,i){"use strict";var a=i(4),n=i(0),s=i(130),r=i.n(s),o=i(18);let c,l=class extends n.b{constructor(){super(...arguments),this.content="",this.allowSvg=!1,this._resize=()=>Object(o.a)(this,"iron-resize")}update(t){super.update(t),c||(c=r()()),this._render()}async _render(){this.innerHTML=await c.renderMarkdown(this.content,{breaks:!0,gfm:!0,tables:!0},{allowSvg:this.allowSvg}),this._resize();const t=document.createTreeWalker(this,1,null,!1);for(;t.nextNode();){const e=t.currentNode;e instanceof HTMLAnchorElement&&e.host!==document.location.host?(e.target="_blank",e.rel="noreferrer noopener"):e&&e.addEventListener("load",this._resize)}}};Object(a.b)([Object(n.g)()],l.prototype,"content",void 0),Object(a.b)([Object(n.g)({type:Boolean})],l.prototype,"allowSvg",void 0),l=Object(a.b)([Object(n.d)("ha-markdown")],l)},155:function(t,e,i){"use strict";i(5),i(45),i(68);var a=i(111),n=i(6),s=i(3);Object(n.a)({_template:s.a`
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
`,is:"paper-progress",behaviors:[a.a],properties:{secondaryProgress:{type:Number,value:0},secondaryRatio:{type:Number,value:0,readOnly:!0},indeterminate:{type:Boolean,value:!1,observer:"_toggleIndeterminate"},disabled:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_disabledChanged"}},observers:["_progressChanged(secondaryProgress, value, min, max, indeterminate)"],hostAttributes:{role:"progressbar"},_toggleIndeterminate:function(t){this.toggleClass("indeterminate",t,this.$.primaryProgress)},_transformProgress:function(t,e){var i="scaleX("+e/100+")";t.style.transform=t.style.webkitTransform=i},_mainRatioChanged:function(t){this._transformProgress(this.$.primaryProgress,t)},_progressChanged:function(t,e,i,a,n){t=this._clampValue(t),e=this._clampValue(e);var s=100*this._calcRatio(t),r=100*this._calcRatio(e);this._setSecondaryRatio(s),this._transformProgress(this.$.secondaryProgress,s),this._transformProgress(this.$.primaryProgress,r),this.secondaryProgress=t,n?this.removeAttribute("aria-valuenow"):this.setAttribute("aria-valuenow",e),this.setAttribute("aria-valuemin",i),this.setAttribute("aria-valuemax",a)},_disabledChanged:function(t){this.setAttribute("aria-disabled",t?"true":"false")},_hideSecondaryProgress:function(t){return 0===t}})},156:function(t,e){t.exports=function(t,e){var i=0,a={};t.addEventListener("message",(function(e){var i=e.data;if("RPC"===i.type)if(i.id){var n=a[i.id];n&&(delete a[i.id],i.error?n[1](Object.assign(Error(i.error.message),i.error)):n[0](i.result))}else{var s=document.createEvent("Event");s.initEvent(i.method,!1,!1),s.data=i.params,t.dispatchEvent(s)}})),e.forEach((function(e){t[e]=function(){for(var n=[],s=arguments.length;s--;)n[s]=arguments[s];return new Promise((function(s,r){var o=++i;a[o]=[s,r],t.postMessage({type:"RPC",id:o,method:e,params:n})}))}}))}},157:function(t,e,i){"use strict";i(45),i(93),i(155),i(68);var a=i(31),n=i(60),s=i(111),r=i(57),o=i(6),c=i(36);const l=i(5).c`
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
`;l.setAttribute("strip-whitespace",""),Object(o.a)({_template:l,is:"paper-slider",behaviors:[a.a,n.a,r.a,s.a],properties:{value:{type:Number,value:0},snaps:{type:Boolean,value:!1,notify:!0},pin:{type:Boolean,value:!1,notify:!0},secondaryProgress:{type:Number,value:0,notify:!0,observer:"_secondaryProgressChanged"},editable:{type:Boolean,value:!1},immediateValue:{type:Number,value:0,readOnly:!0,notify:!0},maxMarkers:{type:Number,value:0,notify:!0},expand:{type:Boolean,value:!1,readOnly:!0},ignoreBarTouch:{type:Boolean,value:!1},dragging:{type:Boolean,value:!1,readOnly:!0,notify:!0},transiting:{type:Boolean,value:!1,readOnly:!0},markers:{type:Array,readOnly:!0,value:function(){return[]}}},observers:["_updateKnob(value, min, max, snaps, step)","_valueChanged(value)","_immediateValueChanged(immediateValue)","_updateMarkers(maxMarkers, min, max, snaps)"],hostAttributes:{role:"slider",tabindex:0},keyBindings:{left:"_leftKey",right:"_rightKey","down pagedown home":"_decrementKey","up pageup end":"_incrementKey"},ready:function(){this.ignoreBarTouch&&Object(c.f)(this.$.sliderBar,"auto")},increment:function(){this.value=this._clampValue(this.value+this.step)},decrement:function(){this.value=this._clampValue(this.value-this.step)},_updateKnob:function(t,e,i,a,n){this.setAttribute("aria-valuemin",e),this.setAttribute("aria-valuemax",i),this.setAttribute("aria-valuenow",t),this._positionKnob(100*this._calcRatio(t))},_valueChanged:function(){this.fire("value-change",{composed:!0})},_immediateValueChanged:function(){this.dragging?this.fire("immediate-value-change",{composed:!0}):this.value=this.immediateValue},_secondaryProgressChanged:function(){this.secondaryProgress=this._clampValue(this.secondaryProgress)},_expandKnob:function(){this._setExpand(!0)},_resetKnob:function(){this.cancelDebouncer("expandKnob"),this._setExpand(!1)},_positionKnob:function(t){this._setImmediateValue(this._calcStep(this._calcKnobPosition(t))),this._setRatio(100*this._calcRatio(this.immediateValue)),this.$.sliderKnob.style.left=this.ratio+"%",this.dragging&&(this._knobstartx=this.ratio*this._w/100,this.translate3d(0,0,0,this.$.sliderKnob))},_calcKnobPosition:function(t){return(this.max-this.min)*t/100+this.min},_onTrack:function(t){switch(t.stopPropagation(),t.detail.state){case"start":this._trackStart(t);break;case"track":this._trackX(t);break;case"end":this._trackEnd()}},_trackStart:function(t){this._setTransiting(!1),this._w=this.$.sliderBar.offsetWidth,this._x=this.ratio*this._w/100,this._startx=this._x,this._knobstartx=this._startx,this._minx=-this._startx,this._maxx=this._w-this._startx,this.$.sliderKnob.classList.add("dragging"),this._setDragging(!0)},_trackX:function(t){this.dragging||this._trackStart(t);var e=this._isRTL?-1:1,i=Math.min(this._maxx,Math.max(this._minx,t.detail.dx*e));this._x=this._startx+i;var a=this._calcStep(this._calcKnobPosition(this._x/this._w*100));this._setImmediateValue(a);var n=this._calcRatio(this.immediateValue)*this._w-this._knobstartx;this.translate3d(n+"px",0,0,this.$.sliderKnob)},_trackEnd:function(){var t=this.$.sliderKnob.style;this.$.sliderKnob.classList.remove("dragging"),this._setDragging(!1),this._resetKnob(),this.value=this.immediateValue,t.transform=t.webkitTransform="",this.fire("change",{composed:!0})},_knobdown:function(t){this._expandKnob(),t.preventDefault(),this.focus()},_bartrack:function(t){this._allowBarEvent(t)&&this._onTrack(t)},_barclick:function(t){this._w=this.$.sliderBar.offsetWidth;var e=this.$.sliderBar.getBoundingClientRect(),i=(t.detail.x-e.left)/this._w*100;this._isRTL&&(i=100-i);var a=this.ratio;this._setTransiting(!0),this._positionKnob(i),a===this.ratio&&this._setTransiting(!1),this.async((function(){this.fire("change",{composed:!0})})),t.preventDefault(),this.focus()},_bardown:function(t){this._allowBarEvent(t)&&(this.debounce("expandKnob",this._expandKnob,60),this._barclick(t))},_knobTransitionEnd:function(t){t.target===this.$.sliderKnob&&this._setTransiting(!1)},_updateMarkers:function(t,e,i,a){a||this._setMarkers([]);var n=Math.round((i-e)/this.step);n>t&&(n=t),(n<0||!isFinite(n))&&(n=0),this._setMarkers(new Array(n))},_mergeClasses:function(t){return Object.keys(t).filter((function(e){return t[e]})).join(" ")},_getClassNames:function(){return this._mergeClasses({disabled:this.disabled,pin:this.pin,snaps:this.snaps,ring:this.immediateValue<=this.min,expand:this.expand,dragging:this.dragging,transiting:this.transiting,editable:this.editable})},_allowBarEvent:function(t){return!this.ignoreBarTouch||t.detail.sourceEvent instanceof MouseEvent},get _isRTL(){return void 0===this.__isRTL&&(this.__isRTL="rtl"===window.getComputedStyle(this).direction),this.__isRTL},_leftKey:function(t){this._isRTL?this._incrementKey(t):this._decrementKey(t)},_rightKey:function(t){this._isRTL?this._decrementKey(t):this._incrementKey(t)},_incrementKey:function(t){this.disabled||("end"===t.detail.key?this.value=this.max:this.increment(),this.fire("change"),t.preventDefault())},_decrementKey:function(t){this.disabled||("home"===t.detail.key?this.value=this.min:this.decrement(),this.fire("change"),t.preventDefault())},_changeValue:function(t){this.value=t.target.value,this.fire("change",{composed:!0})},_inputKeyDown:function(t){t.stopPropagation()},_createRipple:function(){return this._rippleContainer=this.$.sliderKnob,r.b._createRipple.call(this)},_focusedChanged:function(t){t&&this.ensureRipple(),this.hasRipple()&&(this._ripple.style.display=t?"":"none",this._ripple.holdDown=t)}})},175:function(t,e,i){"use strict";var a=i(9);e.a=Object(a.a)(t=>(class extends t{static get properties(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}__computeLocalize(t){return t}}))},176:function(t,e,i){"use strict";var a=i(188);e.a=t=>void 0===t.attributes.friendly_name?Object(a.a)(t.entity_id).replace(/_/g," "):t.attributes.friendly_name||""},177:function(t,e,i){"use strict";var a=i(4),n=i(0);class s extends n.a{static get styles(){return n.c`
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
    `}render(){return n.f`
      ${this.header?n.f`
            <div class="card-header">${this.header}</div>
          `:n.f``}
      <slot></slot>
    `}}Object(a.b)([Object(n.g)()],s.prototype,"header",void 0),customElements.define("ha-card",s)},178:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var a=i(119);const n={alert:"hass:alert",alexa:"hass:amazon-alexa",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",google_assistant:"hass:google-assistant",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weather:"hass:weather-cloudy",weblink:"hass:open-in-new"};function s(t,e){if(t in n)return n[t];switch(t){case"alarm_control_panel":switch(e){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return e&&"off"===e?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===e?"hass:window-closed":"hass:window-open";case"lock":return e&&"unlocked"===e?"hass:lock-open":"hass:lock";case"media_player":return e&&"off"!==e&&"idle"!==e?"hass:cast-connected":"hass:cast";case"zwave":switch(e){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+t+" ("+e+")"),a.a}}},179:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));i(109);const a=customElements.get("iron-icon");let n=!1;class s extends a{listen(t,e,a){super.listen(t,e,a),n||"mdi"!==this._iconsetName||(n=!0,i.e(70).then(i.bind(null,216)))}}customElements.define("ha-icon",s)},180:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var a=i(121);function n(t){return Object(a.a)(t.entity_id)}},182:function(t,e,i){"use strict";i(5);const a=i(3).a`
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
`;a.setAttribute("style","display: none;"),document.head.appendChild(a.content)},184:function(t,e,i){"use strict";var a=i(4),n=i(0),s=(i(179),i(180)),r=i(192);class o extends n.a{render(){const t=this.stateObj;return t?n.f`
      <ha-icon
        id="icon"
        data-domain=${Object(s.a)(t)}
        data-state=${t.state}
        .icon=${this.overrideIcon||Object(r.a)(t)}
      ></ha-icon>
    `:n.f``}updated(t){if(!t.has("stateObj")||!this.stateObj)return;const e=this.stateObj,i={color:"",filter:""},a={backgroundImage:""};if(e)if(e.attributes.entity_picture&&!this.overrideIcon||this.overrideImage){let t=this.overrideImage||e.attributes.entity_picture;this.hass&&(t=this.hass.hassUrl(t)),a.backgroundImage=`url(${t})`,i.display="none"}else{if(e.attributes.hs_color){const t=e.attributes.hs_color[0],a=e.attributes.hs_color[1];a>10&&(i.color=`hsl(${t}, 100%, ${100-a/2}%)`)}if(e.attributes.brightness){const t=e.attributes.brightness;if("number"!=typeof t){const i=`Type error: state-badge expected number, but type of ${e.entity_id}.attributes.brightness is ${typeof t} (${t})`;console.warn(i)}i.filter=`brightness(${(t+245)/5}%)`}}Object.assign(this._icon.style,i),Object.assign(this.style,a)}static get styles(){return n.c`
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
    `}}Object(a.b)([Object(n.g)()],o.prototype,"stateObj",void 0),Object(a.b)([Object(n.g)()],o.prototype,"overrideIcon",void 0),Object(a.b)([Object(n.g)()],o.prototype,"overrideImage",void 0),Object(a.b)([Object(n.h)("ha-icon")],o.prototype,"_icon",void 0),customElements.define("state-badge",o)},187:function(t,e,i){"use strict";i(5),i(68),i(151);var a=i(6),n=i(3),s=i(126);const r=n.a`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer layer-1">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-2">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-3">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-4">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;r.setAttribute("strip-whitespace",""),Object(a.a)({_template:r,is:"paper-spinner",behaviors:[s.a]})},188:function(t,e,i){"use strict";function a(t){return t.substr(t.indexOf(".")+1)}i.d(e,"a",(function(){return a}))},192:function(t,e,i){"use strict";var a=i(119),n=i(121),s=i(178);const r={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",signal_strength:"hass:wifi"};i.d(e,"a",(function(){return c}));const o={binary_sensor:function(t){const e=t.state&&"off"===t.state;switch(t.attributes.device_class){case"battery":return e?"hass:battery":"hass:battery-outline";case"cold":return e?"hass:thermometer":"hass:snowflake";case"connectivity":return e?"hass:server-network-off":"hass:server-network";case"door":return e?"hass:door-closed":"hass:door-open";case"garage_door":return e?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return e?"hass:shield-check":"hass:alert";case"heat":return e?"hass:thermometer":"hass:fire";case"light":return e?"hass:brightness-5":"hass:brightness-7";case"lock":return e?"hass:lock":"hass:lock-open";case"moisture":return e?"hass:water-off":"hass:water";case"motion":return e?"hass:walk":"hass:run";case"occupancy":return e?"hass:home-outline":"hass:home";case"opening":return e?"hass:square":"hass:square-outline";case"plug":return e?"hass:power-plug-off":"hass:power-plug";case"presence":return e?"hass:home-outline":"hass:home";case"sound":return e?"hass:music-note-off":"hass:music-note";case"vibration":return e?"hass:crop-portrait":"hass:vibrate";case"window":return e?"hass:window-closed":"hass:window-open";default:return e?"hass:radiobox-blank":"hass:checkbox-marked-circle"}},cover:function(t){const e="closed"!==t.state;switch(t.attributes.device_class){case"garage":return e?"hass:garage-open":"hass:garage";case"door":return e?"hass:door-open":"hass:door-closed";case"shutter":return e?"hass:window-shutter-open":"hass:window-shutter";case"blind":return e?"hass:blinds-open":"hass:blinds";case"window":return e?"hass:window-open":"hass:window-closed";default:return Object(s.a)("cover",t.state)}},sensor:function(t){const e=t.attributes.device_class;if(e&&e in r)return r[e];if("battery"===e){const e=Number(t.state);if(isNaN(e))return"hass:battery-unknown";const i=10*Math.round(e/10);return i>=100?"hass:battery":i<=0?"hass:battery-alert":`hass:battery-${i}`}const i=t.attributes.unit_of_measurement;return i===a.j||i===a.k?"hass:thermometer":Object(s.a)("sensor")},input_datetime:function(t){return t.attributes.has_date?t.attributes.has_time?Object(s.a)("input_datetime"):"hass:calendar":"hass:clock"}};function c(t){if(!t)return a.a;if(t.attributes.icon)return t.attributes.icon;const e=Object(n.a)(t.entity_id);return e in o?o[e](t):Object(s.a)(e,t.state)}},196:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));const a=(t,e,i=!1)=>{let a;return function(...n){const s=this,r=i&&!a;clearTimeout(a),a=setTimeout(()=>{a=null,i||t.apply(s,n)},e),r&&t.apply(s,n)}}},197:function(t,e,i){"use strict";var a={},n=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,s="[^\\s]+",r=/\[([^]*?)\]/gm,o=function(){};function c(t,e){for(var i=[],a=0,n=t.length;a<n;a++)i.push(t[a].substr(0,e));return i}function l(t){return function(e,i,a){var n=a[t].indexOf(i.charAt(0).toUpperCase()+i.substr(1).toLowerCase());~n&&(e.month=n)}}function h(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}var d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],p=["January","February","March","April","May","June","July","August","September","October","November","December"],u=c(p,3),g=c(d,3);a.i18n={dayNamesShort:g,dayNames:d,monthNamesShort:u,monthNames:p,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10)*t%10]}};var f={D:function(t){return t.getDate()},DD:function(t){return h(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return t.getDay()},dd:function(t){return h(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return t.getMonth()+1},MM:function(t){return h(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return h(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return h(t.getFullYear(),4)},h:function(t){return t.getHours()%12||12},hh:function(t){return h(t.getHours()%12||12)},H:function(t){return t.getHours()},HH:function(t){return h(t.getHours())},m:function(t){return t.getMinutes()},mm:function(t){return h(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return h(t.getSeconds())},S:function(t){return Math.round(t.getMilliseconds()/100)},SS:function(t){return h(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return h(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+h(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)}},m={D:["\\d\\d?",function(t,e){t.day=e}],Do:["\\d\\d?"+s,function(t,e){t.day=parseInt(e,10)}],M:["\\d\\d?",function(t,e){t.month=e-1}],YY:["\\d\\d?",function(t,e){var i=+(""+(new Date).getFullYear()).substr(0,2);t.year=""+(e>68?i-1:i)+e}],h:["\\d\\d?",function(t,e){t.hour=e}],m:["\\d\\d?",function(t,e){t.minute=e}],s:["\\d\\d?",function(t,e){t.second=e}],YYYY:["\\d{4}",function(t,e){t.year=e}],S:["\\d",function(t,e){t.millisecond=100*e}],SS:["\\d{2}",function(t,e){t.millisecond=10*e}],SSS:["\\d{3}",function(t,e){t.millisecond=e}],d:["\\d\\d?",o],ddd:[s,o],MMM:[s,l("monthNamesShort")],MMMM:[s,l("monthNames")],a:[s,function(t,e,i){var a=e.toLowerCase();a===i.amPm[0]?t.isPm=!1:a===i.amPm[1]&&(t.isPm=!0)}],ZZ:["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",function(t,e){var i,a=(e+"").match(/([+-]|\d\d)/gi);a&&(i=60*a[1]+parseInt(a[2],10),t.timezoneOffset="+"===a[0]?i:-i)}]};m.dd=m.d,m.dddd=m.ddd,m.DD=m.D,m.mm=m.m,m.hh=m.H=m.HH=m.h,m.MM=m.M,m.ss=m.s,m.A=m.a,a.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},a.format=function(t,e,i){var s=i||a.i18n;if("number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date in fecha.format");e=a.masks[e]||e||a.masks.default;var o=[];return(e=(e=e.replace(r,(function(t,e){return o.push(e),"@@@"}))).replace(n,(function(e){return e in f?f[e](t,s):e.slice(1,e.length-1)}))).replace(/@@@/g,(function(){return o.shift()}))},a.parse=function(t,e,i){var s=i||a.i18n;if("string"!=typeof e)throw new Error("Invalid format in fecha.parse");if(e=a.masks[e]||e,t.length>1e3)return null;var o={},c=[],l=[];e=e.replace(r,(function(t,e){return l.push(e),"@@@"}));var h,d=(h=e,h.replace(/[|\\{()[^$+*?.-]/g,"\\$&")).replace(n,(function(t){if(m[t]){var e=m[t];return c.push(e[1]),"("+e[0]+")"}return t}));d=d.replace(/@@@/g,(function(){return l.shift()}));var p=t.match(new RegExp(d,"i"));if(!p)return null;for(var u=1;u<p.length;u++)c[u-1](o,p[u],s);var g,f=new Date;return!0===o.isPm&&null!=o.hour&&12!=+o.hour?o.hour=+o.hour+12:!1===o.isPm&&12==+o.hour&&(o.hour=0),null!=o.timezoneOffset?(o.minute=+(o.minute||0)-+o.timezoneOffset,g=new Date(Date.UTC(o.year||f.getFullYear(),o.month||0,o.day||1,o.hour||0,o.minute||0,o.second||0,o.millisecond||0))):g=new Date(o.year||f.getFullYear(),o.month||0,o.day||1,o.hour||0,o.minute||0,o.second||0,o.millisecond||0),g},e.a=a},198:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"a",(function(){return n}));const a=(t,e)=>t<e?-1:t>e?1:0,n=(t,e)=>a(t.toLowerCase(),e.toLowerCase())},200:function(t,e,i){"use strict";var a=i(197);e.a=function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}return!1}()?(t,e)=>t.toLocaleString(e,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"}):t=>a.a.format(t,"haDateTime")},206:function(t,e,i){"use strict";i(5),i(45);var a=i(6),n=i(1),s=i(3),r=i(128);Object(a.a)({_template:s.a`
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
`,is:"app-header-layout",behaviors:[r.a],properties:{hasScrollingRegion:{type:Boolean,value:!1,reflectToAttribute:!0}},observers:["resetLayout(isAttached, hasScrollingRegion)"],get header(){return Object(n.a)(this.$.headerSlot).getDistributedNodes()[0]},_updateLayoutStates:function(){var t=this.header;if(this.isAttached&&t){this.$.wrapper.classList.remove("initializing"),t.scrollTarget=this.hasScrollingRegion?this.$.contentContainer:this.ownerDocument.documentElement;var e=t.offsetHeight;this.hasScrollingRegion?(t.style.left="",t.style.right=""):requestAnimationFrame(function(){var e=this.getBoundingClientRect(),i=document.documentElement.clientWidth-e.right;t.style.left=e.left+"px",t.style.right=i+"px"}.bind(this));var i=this.$.contentContainer.style;t.fixed&&!t.condenses&&this.hasScrollingRegion?(i.marginTop=e+"px",i.paddingTop=""):(i.paddingTop=e+"px",i.marginTop="")}}})},207:function(t,e,i){"use strict";i(5),i(45),i(68),i(42);var a=i(123),n=i(69),s=i(6),r=i(36),o=i(3),c=i(62);const l=o.a`

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

  `;l.setAttribute("strip-whitespace",""),Object(s.a)({_template:l,is:"paper-toggle-button",behaviors:[a.a],hostAttributes:{role:"button","aria-pressed":"false",tabindex:0},properties:{},listeners:{track:"_ontrack"},attached:function(){Object(c.a)(this,(function(){Object(r.f)(this,"pan-y")}))},_ontrack:function(t){var e=t.detail;"start"===e.state?this._trackStart(e):"track"===e.state?this._trackMove(e):"end"===e.state&&this._trackEnd(e)},_trackStart:function(t){this._width=this.$.toggleBar.offsetWidth/2,this._trackChecked=this.checked,this.$.toggleButton.classList.add("dragging")},_trackMove:function(t){var e=t.dx;this._x=Math.min(this._width,Math.max(0,this._trackChecked?this._width+e:e)),this.translate3d(this._x+"px",0,0,this.$.toggleButton),this._userActivate(this._x>this._width/2)},_trackEnd:function(t){this.$.toggleButton.classList.remove("dragging"),this.transform("",this.$.toggleButton)},_createRipple:function(){this._rippleContainer=this.$.toggleButton;var t=n.a._createRipple();return t.id="ink",t.setAttribute("recenters",""),t.classList.add("circle","toggle-ink"),t}})},212:function(t,e,i){"use strict";var a=i(3),n=i(30),s=(i(218),i(118));customElements.define("ha-call-service-button",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <ha-progress-button
        id="progress"
        progress="[[progress]]"
        on-click="buttonTapped"
        ><slot></slot
      ></ha-progress-button>
    `}static get properties(){return{hass:{type:Object},progress:{type:Boolean,value:!1},domain:{type:String},service:{type:String},serviceData:{type:Object,value:{}},confirmation:{type:String}}}buttonTapped(){if(!this.confirmation||window.confirm(this.confirmation)){this.progress=!0;var t=this,e={domain:this.domain,service:this.service,serviceData:this.serviceData};this.hass.callService(this.domain,this.service,this.serviceData).then((function(){t.progress=!1,t.$.progress.actionSuccess(),e.success=!0}),(function(){t.progress=!1,t.$.progress.actionError(),e.success=!1})).then((function(){t.fire("hass-service-called",e)}))}}})},214:function(t,e,i){"use strict";var a=i(197);e.a=function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}return!1}()?(t,e)=>t.toLocaleTimeString(e,{hour:"numeric",minute:"2-digit"}):t=>a.a.format(t,"shortTime")},217:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));const a=(t,e)=>0!=(t.attributes.supported_features&e)},218:function(t,e,i){"use strict";i(85),i(187);var a=i(3),n=i(30);customElements.define("ha-progress-button",class extends n.a{static get template(){return a.a`
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
    `}static get properties(){return{hass:{type:Object},progress:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1}}}tempClass(t){var e=this.$.container.classList;e.add(t),setTimeout(()=>{e.remove(t)},1e3)}ready(){super.ready(),this.addEventListener("click",t=>this.buttonTapped(t))}buttonTapped(t){this.progress&&t.stopPropagation()}actionSuccess(){this.tempClass("success")}actionError(){this.tempClass("error")}computeDisabled(t,e){return t||e}})},221:function(t,e,i){"use strict";function a(t,e){return t&&-1!==t.config.components.indexOf(e)}i.d(e,"a",(function(){return a}))},222:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"a",(function(){return c}));var a=i(13),n=i(196);const s=(t,e,i)=>t.callWS(Object.assign({type:"config/device_registry/update",device_id:e},i)),r=t=>t.sendMessagePromise({type:"config/device_registry/list"}),o=(t,e)=>t.subscribeEvents(Object(n.a)(()=>r(t).then(t=>e.setState(t,!0)),500,!0),"device_registry_updated"),c=(t,e)=>Object(a.d)("_dr",r,o,t,e)},223:function(t,e,i){"use strict";var a=i(180),n=i(200),s=i(240),r=i(214);e.a=(t,e,i)=>{let o;const c=Object(a.a)(e);if("binary_sensor"===c)e.attributes.device_class&&(o=t(`state.${c}.${e.attributes.device_class}.${e.state}`)),o||(o=t(`state.${c}.default.${e.state}`));else if(e.attributes.unit_of_measurement&&!["unknown","unavailable"].includes(e.state))o=e.state+" "+e.attributes.unit_of_measurement;else if("input_datetime"===c){let t;if(e.attributes.has_time)if(e.attributes.has_date)t=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day,e.attributes.hour,e.attributes.minute),o=Object(n.a)(t,i);else{const a=new Date;t=new Date(a.getFullYear(),a.getMonth(),a.getDay(),e.attributes.hour,e.attributes.minute),o=Object(r.a)(t,i)}else t=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day),o=Object(s.a)(t,i)}else o="zwave"===c?["initializing","dead"].includes(e.state)?t(`state.zwave.query_stage.${e.state}`,"query_stage",e.attributes.query_stage):t(`state.zwave.default.${e.state}`):t(`state.${c}.${e.state}`);return o||(o=t(`state.default.${e.state}`)||t(`component.${c}.state.${e.state}`)||e.state),o}},224:function(t,e,i){"use strict";i(146);const a=customElements.get("paper-dropdown-menu");customElements.define("ha-paper-dropdown-menu",class extends a{ready(){super.ready(),setTimeout(()=>{"rtl"===window.getComputedStyle(this).direction&&(this.style.textAlign="right")},100)}})},227:function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"d",(function(){return o})),i.d(e,"b",(function(){return c})),i.d(e,"c",(function(){return d}));var a=i(13),n=i(198),s=i(196);const r=(t,e)=>t.callWS(Object.assign({type:"config/area_registry/create"},e)),o=(t,e,i)=>t.callWS(Object.assign({type:"config/area_registry/update",area_id:e},i)),c=(t,e)=>t.callWS({type:"config/area_registry/delete",area_id:e}),l=t=>t.sendMessagePromise({type:"config/area_registry/list"}).then(t=>t.sort((t,e)=>Object(n.b)(t.name,e.name))),h=(t,e)=>t.subscribeEvents(Object(s.a)(()=>l(t).then(t=>e.setState(t,!0)),500,!0),"area_registry_updated"),d=(t,e)=>Object(a.d)("_areaRegistry",l,h,t,e)},230:function(t,e,i){"use strict";var a=i(1),n=i(30),s=i(235),r=i(175);customElements.define("ha-relative-time",class extends(Object(r.a)(n.a)){static get properties(){return{hass:Object,datetime:{type:String,observer:"datetimeChanged"},datetimeObj:{type:Object,observer:"datetimeObjChanged"},parsedDateTime:Object}}constructor(){super(),this.updateRelative=this.updateRelative.bind(this)}connectedCallback(){super.connectedCallback(),this.updateInterval=setInterval(this.updateRelative,6e4)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.updateInterval)}datetimeChanged(t){this.parsedDateTime=t?new Date(t):null,this.updateRelative()}datetimeObjChanged(t){this.parsedDateTime=t,this.updateRelative()}updateRelative(){const t=Object(a.a)(this);this.parsedDateTime?t.innerHTML=Object(s.a)(this.parsedDateTime,this.localize):t.innerHTML=this.localize("ui.components.relative_time.never")}})},231:function(t,e,i){"use strict";var a=i(4),n=(i(108),i(207),i(119)),s=i(180),r=i(0),o=i(103),c=i(176);const l=t=>void 0!==t&&!n.i.includes(t.state);class h extends r.a{constructor(){super(...arguments),this._isOn=!1}render(){return this.stateObj?this.stateObj.attributes.assumed_state?r.f`
        <paper-icon-button
          aria-label=${`Turn ${Object(c.a)(this.stateObj)} off`}
          icon="hass:flash-off"
          @click=${this._turnOff}
          ?state-active=${!this._isOn}
        ></paper-icon-button>
        <paper-icon-button
          aria-label=${`Turn ${Object(c.a)(this.stateObj)} on`}
          icon="hass:flash"
          @click=${this._turnOn}
          ?state-active=${this._isOn}
        ></paper-icon-button>
      `:r.f`
      <paper-toggle-button
        aria-label=${`Toggle ${Object(c.a)(this.stateObj)} ${this._isOn?"off":"on"}`}
        .checked=${this._isOn}
        @change=${this._toggleChanged}
      ></paper-toggle-button>
    `:r.f`
        <paper-toggle-button disabled></paper-toggle-button>
      `}firstUpdated(t){super.firstUpdated(t),this.addEventListener("click",t=>t.stopPropagation())}updated(t){t.has("stateObj")&&(this._isOn=l(this.stateObj))}_toggleChanged(t){const e=t.target.checked;e!==this._isOn&&this._callService(e)}_turnOn(){this._callService(!0)}_turnOff(){this._callService(!1)}async _callService(t){if(!this.hass||!this.stateObj)return;Object(o.a)("light");const e=Object(s.a)(this.stateObj);let i,a;"lock"===e?(i="lock",a=t?"unlock":"lock"):"cover"===e?(i="cover",a=t?"open_cover":"close_cover"):"group"===e?(i="homeassistant",a=t?"turn_on":"turn_off"):(i=e,a=t?"turn_on":"turn_off");const n=this.stateObj;this._isOn=t,await this.hass.callService(i,a,{entity_id:this.stateObj.entity_id}),setTimeout(async()=>{this.stateObj===n&&(this._isOn=l(this.stateObj))},2e3)}static get styles(){return r.c`
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
    `}}Object(a.b)([Object(r.g)()],h.prototype,"stateObj",void 0),Object(a.b)([Object(r.g)()],h.prototype,"_isOn",void 0),customElements.define("ha-entity-toggle",h)},233:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return d}));var a=i(217);class n{constructor(t,e){this.hass=t,this.stateObj=e,this._attr=e.attributes,this._feat=this._attr.supported_features}get isFullyOpen(){return void 0!==this._attr.current_position?100===this._attr.current_position:"open"===this.stateObj.state}get isFullyClosed(){return void 0!==this._attr.current_position?0===this._attr.current_position:"closed"===this.stateObj.state}get isFullyOpenTilt(){return 100===this._attr.current_tilt_position}get isFullyClosedTilt(){return 0===this._attr.current_tilt_position}get isOpening(){return"opening"===this.stateObj.state}get isClosing(){return"closing"===this.stateObj.state}get supportsOpen(){return Object(a.a)(this.stateObj,1)}get supportsClose(){return Object(a.a)(this.stateObj,2)}get supportsSetPosition(){return Object(a.a)(this.stateObj,4)}get supportsStop(){return Object(a.a)(this.stateObj,8)}get supportsOpenTilt(){return Object(a.a)(this.stateObj,16)}get supportsCloseTilt(){return Object(a.a)(this.stateObj,32)}get supportsStopTilt(){return Object(a.a)(this.stateObj,64)}get supportsSetTiltPosition(){return Object(a.a)(this.stateObj,128)}get isTiltOnly(){const t=this.supportsOpen||this.supportsClose||this.supportsStop;return(this.supportsOpenTilt||this.supportsCloseTilt||this.supportsStopTilt)&&!t}openCover(){this.callService("open_cover")}closeCover(){this.callService("close_cover")}stopCover(){this.callService("stop_cover")}openCoverTilt(){this.callService("open_cover_tilt")}closeCoverTilt(){this.callService("close_cover_tilt")}stopCoverTilt(){this.callService("stop_cover_tilt")}setCoverPosition(t){this.callService("set_cover_position",{position:t})}setCoverTiltPosition(t){this.callService("set_cover_tilt_position",{tilt_position:t})}callService(t,e={}){e.entity_id=this.stateObj.entity_id,this.hass.callService("cover",t,e)}}const s=t=>Object(a.a)(t,1),r=t=>Object(a.a)(t,2),o=t=>Object(a.a)(t,8),c=t=>Object(a.a)(t,16),l=t=>Object(a.a)(t,32),h=t=>Object(a.a)(t,64);function d(t){const e=s(t)||r(t)||o(t);return(c(t)||l(t)||h(t))&&!e}},234:function(t,e,i){"use strict";i(5);var a=i(6);Object(a.a)({is:"app-route",properties:{route:{type:Object,notify:!0},pattern:{type:String},data:{type:Object,value:function(){return{}},notify:!0},autoActivate:{type:Boolean,value:!1},_queryParamsUpdating:{type:Boolean,value:!1},queryParams:{type:Object,value:function(){return{}},notify:!0},tail:{type:Object,value:function(){return{path:null,prefix:null,__queryParams:null}},notify:!0},active:{type:Boolean,notify:!0,readOnly:!0},_matched:{type:String,value:""}},observers:["__tryToMatch(route.path, pattern)","__updatePathOnDataChange(data.*)","__tailPathChanged(tail.path)","__routeQueryParamsChanged(route.__queryParams)","__tailQueryParamsChanged(tail.__queryParams)","__queryParamsChanged(queryParams.*)"],created:function(){this.linkPaths("route.__queryParams","tail.__queryParams"),this.linkPaths("tail.__queryParams","route.__queryParams")},__routeQueryParamsChanged:function(t){if(t&&this.tail){if(this.tail.__queryParams!==t&&this.set("tail.__queryParams",t),!this.active||this._queryParamsUpdating)return;var e={},i=!1;for(var a in t)e[a]=t[a],!i&&this.queryParams&&t[a]===this.queryParams[a]||(i=!0);for(var a in this.queryParams)if(i||!(a in t)){i=!0;break}if(!i)return;this._queryParamsUpdating=!0,this.set("queryParams",e),this._queryParamsUpdating=!1}},__tailQueryParamsChanged:function(t){t&&this.route&&this.route.__queryParams!=t&&this.set("route.__queryParams",t)},__queryParamsChanged:function(t){this.active&&!this._queryParamsUpdating&&this.set("route.__"+t.path,t.value)},__resetProperties:function(){this._setActive(!1),this._matched=null},__tryToMatch:function(){if(this.route){var t=this.route.path,e=this.pattern;if(this.autoActivate&&""===t&&(t="/"),e)if(t){for(var i=t.split("/"),a=e.split("/"),n=[],s={},r=0;r<a.length;r++){var o=a[r];if(!o&&""!==o)break;var c=i.shift();if(!c&&""!==c)return void this.__resetProperties();if(n.push(c),":"==o.charAt(0))s[o.slice(1)]=c;else if(o!==c)return void this.__resetProperties()}this._matched=n.join("/");var l={};this.active||(l.active=!0);var h=this.route.prefix+this._matched,d=i.join("/");for(var p in i.length>0&&(d="/"+d),this.tail&&this.tail.prefix===h&&this.tail.path===d||(l.tail={prefix:h,path:d,__queryParams:this.route.__queryParams}),l.data=s,this._dataInUrl={},s)this._dataInUrl[p]=s[p];this.setProperties?this.setProperties(l,!0):this.__setMulti(l)}else this.__resetProperties()}},__tailPathChanged:function(t){if(this.active){var e=t,i=this._matched;e&&("/"!==e.charAt(0)&&(e="/"+e),i+=e),this.set("route.path",i)}},__updatePathOnDataChange:function(){if(this.route&&this.active){var t=this.__getLink({});t!==this.__getLink(this._dataInUrl)&&this.set("route.path",t)}},__getLink:function(t){var e={tail:null};for(var i in this.data)e[i]=this.data[i];for(var i in t)e[i]=t[i];var a=this.pattern.split("/").map((function(t){return":"==t[0]&&(t=e[t.slice(1)]),t}),this);return e.tail&&e.tail.path&&(a.length>0&&"/"===e.tail.path.charAt(0)?a.push(e.tail.path.slice(1)):a.push(e.tail.path)),a.join("/")},__setMulti:function(t){for(var e in t)this._propertySetter(e,t[e]);void 0!==t.data&&(this._pathEffector("data",this.data),this._notifyChange("data")),void 0!==t.active&&(this._pathEffector("active",this.active),this._notifyChange("active")),void 0!==t.tail&&(this._pathEffector("tail",this.tail),this._notifyChange("tail"))}})},235:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));const a=[60,60,24,7],n=["second","minute","hour","day"];function s(t,e,i={}){let s=((i.compareTime||new Date).getTime()-t.getTime())/1e3;const r=s>=0?"past":"future";let o;s=Math.abs(s);for(let c=0;c<a.length;c++){if(s<a[c]){s=Math.floor(s),o=e(`ui.components.relative_time.duration.${n[c]}`,"count",s);break}s/=a[c]}return void 0===o&&(o=e("ui.components.relative_time.duration.week","count",s=Math.floor(s))),!1===i.includeTense?o:e(`ui.components.relative_time.${r}`,"time",o)}},236:function(t,e,i){"use strict";i.d(e,"c",(function(){return c})),i.d(e,"b",(function(){return l})),i.d(e,"a",(function(){return d}));var a=i(176),n=i(180),s=i(223);const r=["climate","water_heater"],o=["temperature","current_temperature","target_temp_low","target_temp_high","hvac_action"],c=(t,e,i,a,n=!1)=>{let s="history/period";return i&&(s+="/"+i.toISOString()),s+="?filter_entity_id="+e,a&&(s+="&end_time="+a.toISOString()),n&&(s+="&skip_initial_state"),t.callApi("GET",s)},l=(t,e,i)=>t.callApi("GET",`history/period/${e.toISOString()}?end_time=${i.toISOString()}`),h=(t,e)=>t.state===e.state&&(!t.attributes||o.every(i=>t.attributes[i]===e.attributes[i])),d=(t,e,i,c)=>{const l={},d=[];return e?(e.forEach(e=>{if(0===e.length)return;const r=e.find(t=>"unit_of_measurement"in t.attributes);let o;r?o=r.attributes.unit_of_measurement:"climate"===Object(n.a)(e[0])?o=t.config.unit_system.temperature:"water_heater"===Object(n.a)(e[0])&&(o=t.config.unit_system.temperature),o?o in l?l[o].push(e):l[o]=[e]:d.push(((t,e,i)=>{const n=[];for(const a of i)n.length>0&&a.state===n[n.length-1].state||n.push({state_localize:Object(s.a)(t,a,e),state:a.state,last_changed:a.last_changed});return{name:Object(a.a)(i[0]),entity_id:i[0].entity_id,data:n}})(i,c,e))}),{line:Object.keys(l).map(t=>((t,e)=>{const i=[];for(const s of e){const t=s[s.length-1],e=Object(n.a)(t),c=[];for(const i of s){let t;if(r.includes(e)){t={state:i.state,last_changed:i.last_updated,attributes:{}};for(const e of o)e in i.attributes&&(t.attributes[e]=i.attributes[e])}else t=i;c.length>1&&h(t,c[c.length-1])&&h(t,c[c.length-2])||c.push(t)}i.push({domain:e,name:Object(a.a)(t),entity_id:t.entity_id,states:c})}return{unit:t,identifier:e.map(t=>t[0].entity_id).join(""),data:i}})(t,l[t])),timeline:d}):{line:[],timeline:[]}}},240:function(t,e,i){"use strict";var a=i(197);e.a=function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}return!1}()?(t,e)=>t.toLocaleDateString(e,{year:"numeric",month:"long",day:"numeric"}):t=>a.a.format(t,"mediumDate")},243:function(t,e,i){"use strict";i(5),i(45);var a=i(55),n=i(35),s=i(69),r=i(6),o=i(1),c=i(3);Object(r.a)({_template:c.a`
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
`,is:"paper-tab",behaviors:[n.a,a.a,s.a],properties:{link:{type:Boolean,value:!1,reflectToAttribute:!0}},hostAttributes:{role:"tab"},listeners:{down:"_updateNoink",tap:"_onTap"},attached:function(){this._updateNoink()},get _parentNoink(){var t=Object(o.a)(this).parentNode;return!!t&&!!t.noink},_updateNoink:function(){this.noink=!!this.noink||!!this._parentNoink},_onTap:function(t){if(this.link){var e=this.queryEffectiveChildren("a");if(!e)return;if(t.target===e)return;e.click()}}})},244:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return s}));i(5);var a=i(125);const n={hostAttributes:{role:"menubar"},keyBindings:{left:"_onLeftKey",right:"_onRightKey"},_onUpKey:function(t){this.focusedItem.click(),t.detail.keyboardEvent.preventDefault()},_onDownKey:function(t){this.focusedItem.click(),t.detail.keyboardEvent.preventDefault()},get _isRTL(){return"rtl"===window.getComputedStyle(this).direction},_onLeftKey:function(t){this._isRTL?this._focusNext():this._focusPrevious(),t.detail.keyboardEvent.preventDefault()},_onRightKey:function(t){this._isRTL?this._focusPrevious():this._focusNext(),t.detail.keyboardEvent.preventDefault()},_onKeydown:function(t){this.keyboardEventMatchesKeys(t,"up down left right esc")||this._focusWithKeyboardEvent(t)}},s=[a.a,n]},245:function(t,e,i){"use strict";i(5),i(86);const a=i(3).a`
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
</dom-module>`;a.setAttribute("style","display: none;"),document.head.appendChild(a.content)},254:function(t,e,i){"use strict";i(206);var a=i(3);i(30);customElements.define("ha-app-layout",class extends(customElements.get("app-header-layout")){static get template(){return a.a`
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
    `}})},255:function(t,e,i){"use strict";i(5);var a=i(6),n=i(3),s=i(20);Object(a.a)({_template:n.a`
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
`,is:"iron-image",properties:{src:{type:String,value:""},alt:{type:String,value:null},crossorigin:{type:String,value:null},preventLoad:{type:Boolean,value:!1},sizing:{type:String,value:null,reflectToAttribute:!0},position:{type:String,value:"center"},preload:{type:Boolean,value:!1},placeholder:{type:String,value:null,observer:"_placeholderChanged"},fade:{type:Boolean,value:!1},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1},width:{observer:"_widthChanged",type:Number,value:null},height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){this.$.img.src===this._resolveSrc(this.src)&&(this._setLoading(!1),this._setLoaded(!0),this._setError(!1))},_imgOnError:function(){this.$.img.src===this._resolveSrc(this.src)&&(this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",this._setLoading(!1),this._setLoaded(!1),this._setError(!0))},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){return null!==this.alt?this.alt:""===this.src?"":this._resolveSrc(this.src).replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(t,e){var i=this._resolveSrc(t);i!==this._resolvedSrc&&(this._resolvedSrc="",this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",""===t||e?(this._setLoading(!1),this._setLoaded(!1),this._setError(!1)):(this._resolvedSrc=i,this.$.img.src=this._resolvedSrc,this.$.sizedImgDiv.style.backgroundImage='url("'+this._resolvedSrc+'")',this._setLoading(!0),this._setLoaded(!1),this._setError(!1)))},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?'url("'+this.placeholder+'")':""},_transformChanged:function(){var t=this.$.sizedImgDiv.style,e=this.$.placeholder.style;t.backgroundSize=e.backgroundSize=this.sizing,t.backgroundPosition=e.backgroundPosition=this.sizing?this.position:"",t.backgroundRepeat=e.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(t){var e=Object(s.c)(t,this.$.baseURIAnchor.href);return e.length>=2&&"/"===e[0]&&"/"!==e[1]&&(e=(location.origin||location.protocol+"//"+location.host)+e),e}})},262:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));const a=t=>t<10?`0${t}`:t;function n(t){const e=Math.floor(t/3600),i=Math.floor(t%3600/60),n=Math.floor(t%3600%60);return e>0?`${e}:${a(i)}:${a(n)}`:i>0?`${i}:${a(n)}`:n>0?""+n:null}},263:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));const a=async(t,e,i,a,n,...s)=>{let r=a[t];r||(r=a[t]={});const o=r[n];if(o)return o;const c=i(a,n,...s);return r[n]=c,c.then(()=>setTimeout(()=>{r[n]=void 0},e),()=>{r[n]=void 0}),c}},264:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var a=i(217);class n{constructor(t,e){this.hass=t,this.stateObj=e,this._attr=e.attributes,this._feat=this._attr.supported_features}get isOff(){return"off"===this.stateObj.state}get isIdle(){return"idle"===this.stateObj.state}get isMuted(){return this._attr.is_volume_muted}get isPaused(){return"paused"===this.stateObj.state}get isPlaying(){return"playing"===this.stateObj.state}get isMusic(){return"music"===this._attr.media_content_type}get isTVShow(){return"tvshow"===this._attr.media_content_type}get hasMediaControl(){return-1!==["playing","paused","unknown","on"].indexOf(this.stateObj.state)}get volumeSliderValue(){return 100*this._attr.volume_level}get showProgress(){return(this.isPlaying||this.isPaused)&&"media_duration"in this.stateObj.attributes&&"media_position"in this.stateObj.attributes&&"media_position_updated_at"in this.stateObj.attributes}get currentProgress(){var t=this._attr.media_position;return this.isPlaying&&(t+=(Date.now()-new Date(this._attr.media_position_updated_at).getTime())/1e3),t}get supportsPause(){return Object(a.a)(this.stateObj,1)}get supportsVolumeSet(){return Object(a.a)(this.stateObj,4)}get supportsVolumeMute(){return Object(a.a)(this.stateObj,8)}get supportsPreviousTrack(){return Object(a.a)(this.stateObj,16)}get supportsNextTrack(){return Object(a.a)(this.stateObj,32)}get supportsTurnOn(){return Object(a.a)(this.stateObj,128)}get supportsTurnOff(){return Object(a.a)(this.stateObj,256)}get supportsPlayMedia(){return Object(a.a)(this.stateObj,512)}get supportsVolumeButtons(){return Object(a.a)(this.stateObj,1024)}get supportsSelectSource(){return Object(a.a)(this.stateObj,2048)}get supportsSelectSoundMode(){return Object(a.a)(this.stateObj,65536)}get supportsPlay(){return Object(a.a)(this.stateObj,16384)}get primaryTitle(){return this._attr.media_title}get secondaryTitle(){if(this.isMusic)return this._attr.media_artist;if(this.isTVShow){var t=this._attr.media_series_title;return this._attr.media_season&&(t+=" S"+this._attr.media_season,this._attr.media_episode&&(t+="E"+this._attr.media_episode)),t}return this._attr.app_name?this._attr.app_name:""}get source(){return this._attr.source}get sourceList(){return this._attr.source_list}get soundMode(){return this._attr.sound_mode}get soundModeList(){return this._attr.sound_mode_list}mediaPlayPause(){this.callService("media_play_pause")}nextTrack(){this.callService("media_next_track")}playbackControl(){this.callService("media_play_pause")}previousTrack(){this.callService("media_previous_track")}setVolume(t){this.callService("volume_set",{volume_level:t})}togglePower(){this.isOff?this.turnOn():this.turnOff()}turnOff(){this.callService("turn_off")}turnOn(){this.callService("turn_on")}volumeDown(){this.callService("volume_down")}volumeMute(t){if(!this.supportsVolumeMute)throw new Error("Muting volume not supported");this.callService("volume_mute",{is_volume_muted:t})}volumeUp(){this.callService("volume_up")}selectSource(t){this.callService("select_source",{source:t})}selectSoundMode(t){this.callService("select_sound_mode",{sound_mode:t})}callService(t,e={}){e.entity_id=this.stateObj.entity_id,this.hass.callService("media_player",t,e)}}},265:function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"d",(function(){return o})),i.d(e,"b",(function(){return c})),i.d(e,"c",(function(){return d}));var a=i(13),n=i(176),s=i(196);const r=(t,e)=>{if(e.name)return e.name;const i=t.states[e.entity_id];return i?Object(n.a)(i):null},o=(t,e,i)=>t.callWS(Object.assign({type:"config/entity_registry/update",entity_id:e},i)),c=(t,e)=>t.callWS({type:"config/entity_registry/remove",entity_id:e}),l=t=>t.sendMessagePromise({type:"config/entity_registry/list"}),h=(t,e)=>t.subscribeEvents(Object(s.a)(()=>l(t).then(t=>e.setState(t,!0)),500,!0),"entity_registry_updated"),d=(t,e)=>Object(a.d)("_entityRegistry",l,h,t,e)},267:function(t,e,i){"use strict";i(187);var a=i(3),n=i(30),s=i(22),r=i(98),o=(i(108),i(12)),c=i(72),l=i(214);let h=null;customElements.define("ha-chart-base",class extends(Object(c.b)([r.a],n.a)){static get template(){return a.a`
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
    `}get chart(){return this._chart}static get properties(){return{data:Object,identifier:String,rendered:{type:Boolean,notify:!0,value:!1,readOnly:!0},metas:{type:Array,value:()=>[]},tooltip:{type:Object,value:()=>({opacity:"0",left:"0",top:"0",xPadding:"5",yPadding:"3"})},unit:Object,rtl:{type:Boolean,reflectToAttribute:!0}}}static get observers(){return["onPropsChange(data)"]}connectedCallback(){super.connectedCallback(),this._isAttached=!0,this.onPropsChange(),this._resizeListener=()=>{this._debouncer=s.a.debounce(this._debouncer,o.d.after(10),()=>{this._isAttached&&this.resizeChart()})},"function"==typeof ResizeObserver?(this.resizeObserver=new ResizeObserver(t=>{t.forEach(()=>{this._resizeListener()})}),this.resizeObserver.observe(this.$.chartTarget)):this.addEventListener("iron-resize",this._resizeListener),null===h&&(h=Promise.all([i.e(11),i.e(126),i.e(68)]).then(i.bind(null,687))),h.then(t=>{this.ChartClass=t.default,this.onPropsChange()})}disconnectedCallback(){super.disconnectedCallback(),this._isAttached=!1,this.resizeObserver&&this.resizeObserver.unobserve(this.$.chartTarget),this.removeEventListener("iron-resize",this._resizeListener),void 0!==this._resizeTimer&&(clearInterval(this._resizeTimer),this._resizeTimer=void 0)}onPropsChange(){this._isAttached&&this.ChartClass&&this.data&&this.drawChart()}_customTooltips(t){if(0===t.opacity)return void this.set(["tooltip","opacity"],0);t.yAlign?this.set(["tooltip","yAlign"],t.yAlign):this.set(["tooltip","yAlign"],"no-transform");const e=t.title&&t.title[0]||"";this.set(["tooltip","title"],e);const i=t.body.map(t=>t.lines);t.body&&this.set(["tooltip","lines"],i.map((e,i)=>{const a=t.labelColors[i];return{color:a.borderColor,bgColor:a.backgroundColor,text:e.join("\n")}}));const a=this.$.chartTarget.clientWidth;let n=t.caretX;const s=this._chart.canvas.offsetTop+t.caretY;t.caretX+100>a?n=a-100:t.caretX<100&&(n=100),n+=this._chart.canvas.offsetLeft,this.tooltip={...this.tooltip,opacity:1,left:`${n}px`,top:`${s}px`}}_legendClick(t){(t=t||window.event).stopPropagation();let e=t.target||t.srcElement;for(;"LI"!==e.nodeName;)e=e.parentElement;const i=t.model.itemsIndex,a=this._chart.getDatasetMeta(i);a.hidden=null===a.hidden?!this._chart.data.datasets[i].hidden:null,this.set(["metas",i,"hidden"],this._chart.isDatasetVisible(i)?null:"hidden"),this._chart.update()}_drawLegend(){const t=this._chart,e=this._oldIdentifier&&this.identifier===this._oldIdentifier;this._oldIdentifier=this.identifier,this.set("metas",this._chart.data.datasets.map((i,a)=>({label:i.label,color:i.color,bgColor:i.backgroundColor,hidden:e&&a<this.metas.length?this.metas[a].hidden:!t.isDatasetVisible(a)})));let i=!1;if(e)for(let a=0;a<this.metas.length;a++){const e=t.getDatasetMeta(a);!!e.hidden!=!!this.metas[a].hidden&&(i=!0),e.hidden=!!this.metas[a].hidden||null}i&&t.update(),this.unit=this.data.unit}_formatTickValue(t,e,i){if(0===i.length)return t;const a=new Date(i[e].value);return Object(l.a)(a)}drawChart(){const t=this.data.data,e=this.$.chartCanvas;if(t.datasets&&t.datasets.length||this._chart){if("timeline"!==this.data.type&&t.datasets.length>0){const e=t.datasets.length,i=this.constructor.getColorList(e);for(let a=0;a<e;a++)t.datasets[a].borderColor=i[a].rgbString(),t.datasets[a].backgroundColor=i[a].alpha(.6).rgbaString()}if(this._chart)this._customTooltips({opacity:0}),this._chart.data=t,this._chart.update({duration:0}),this.isTimeline?this._chart.options.scales.yAxes[0].gridLines.display=t.length>1:!0===this.data.legend&&this._drawLegend(),this.resizeChart();else{if(!t.datasets)return;this._customTooltips({opacity:0});const i=[{afterRender:()=>this._setRendered(!0)}];let a={responsive:!0,maintainAspectRatio:!1,animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0,tooltips:{enabled:!1,custom:this._customTooltips.bind(this)},legend:{display:!1},line:{spanGaps:!0},elements:{font:"12px 'Roboto', 'sans-serif'"},ticks:{fontFamily:"'Roboto', 'sans-serif'"}};(a=Chart.helpers.merge(a,this.data.options)).scales.xAxes[0].ticks.callback=this._formatTickValue,"timeline"===this.data.type?(this.set("isTimeline",!0),void 0!==this.data.colors&&(this._colorFunc=this.constructor.getColorGenerator(this.data.colors.staticColors,this.data.colors.staticColorIndex)),void 0!==this._colorFunc&&(a.elements.colorFunction=this._colorFunc),1===t.datasets.length&&(a.scales.yAxes[0].ticks?a.scales.yAxes[0].ticks.display=!1:a.scales.yAxes[0].ticks={display:!1},a.scales.yAxes[0].gridLines?a.scales.yAxes[0].gridLines.display=!1:a.scales.yAxes[0].gridLines={display:!1}),this.$.chartTarget.style.height="50px"):this.$.chartTarget.style.height="160px";const n={type:this.data.type,data:this.data.data,options:a,plugins:i};this._chart=new this.ChartClass(e,n),!0!==this.isTimeline&&!0===this.data.legend&&this._drawLegend(),this.resizeChart()}}}resizeChart(){this._chart&&(void 0!==this._resizeTimer?(clearInterval(this._resizeTimer),this._resizeTimer=void 0,this._resizeChart()):this._resizeTimer=setInterval(this.resizeChart.bind(this),10))}_resizeChart(){const t=this.$.chartTarget,e=this.data.data;if(0===e.datasets.length)return;if(!this.isTimeline)return void this._chart.resize();const i=this._chart.chartArea.top,a=this._chart.chartArea.bottom,n=this._chart.canvas.clientHeight;if(a>0&&(this._axisHeight=n-a+i),!this._axisHeight)return t.style.height="50px",this._chart.resize(),void this.resizeChart();if(this._axisHeight){const i=30*e.datasets.length+this._axisHeight+"px";t.style.height!==i&&(t.style.height=i),this._chart.resize()}}static getColorList(t){let e=!1;t>10&&(e=!0,t=Math.ceil(t/2));const i=360/t,a=[];for(let n=0;n<t;n++)a[n]=Color().hsl(i*n,80,38),e&&(a[n+t]=Color().hsl(i*n,80,62));return a}static getColorGenerator(t,e){const i=["ff0029","66a61e","377eb8","984ea3","00d2d5","ff7f00","af8d00","7f80cd","b3e900","c42e60","a65628","f781bf","8dd3c7","bebada","fb8072","80b1d3","fdb462","fccde5","bc80bd","ffed6f","c4eaff","cf8c00","1b9e77","d95f02","e7298a","e6ab02","a6761d","0097ff","00d067","f43600","4ba93b","5779bb","927acc","97ee3f","bf3947","9f5b00","f48758","8caed6","f2b94f","eff26e","e43872","d9b100","9d7a00","698cff","d9d9d9","00d27e","d06800","009f82","c49200","cbe8ff","fecddf","c27eb6","8cd2ce","c4b8d9","f883b0","a49100","f48800","27d0df","a04a9b"];function a(t){return Color("#"+i[t%i.length])}const n={};let s=0;return e>0&&(s=e),t&&Object.keys(t).forEach(e=>{const i=t[e];isFinite(i)?n[e.toLowerCase()]=a(i):n[e.toLowerCase()]=Color(t[e])}),function(t,e){let i;const r=e[3];if(null===r)return Color().hsl(0,40,38);if(void 0===r)return Color().hsl(120,40,38);const o=r.toLowerCase();return void 0===i&&(i=n[o]),void 0===i&&(i=a(s),s++,n[o]=i),i}}});var d=i(175),p=i(200);customElements.define("state-history-chart-line",class extends(Object(d.a)(n.a)){static get template(){return a.a`
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
    `}static get properties(){return{chartData:Object,data:Object,names:Object,unit:String,identifier:String,isSingleDevice:{type:Boolean,value:!1},endTime:Object,rendered:{type:Boolean,value:!1,observer:"_onRenderedChanged"}}}static get observers(){return["dataChanged(data, endTime, isSingleDevice)"]}connectedCallback(){super.connectedCallback(),this._isAttached=!0,this.drawChart()}dataChanged(){this.drawChart()}_onRenderedChanged(t){t&&this.animateHeight()}animateHeight(){requestAnimationFrame(()=>requestAnimationFrame(()=>{this.style.height=this.$.chart.scrollHeight+"px"}))}drawChart(){const t=this.unit,e=this.data,i=[];let a;if(!this._isAttached)return;if(0===e.length)return;function n(t){const e=parseFloat(t);return isFinite(e)?e:null}(a=this.endTime||new Date(Math.max.apply(null,e.map(t=>new Date(t.states[t.states.length-1].last_changed)))))>new Date&&(a=new Date);const s=this.names||{};e.forEach(e=>{const r=e.domain,o=s[e.entity_id]||e.name;let c;const l=[];function h(t,e){e&&(t>a||(l.forEach((i,a)=>{i.data.push({x:t,y:e[a]})}),c=e))}function d(e,i,a){let n=!1,s=!1;a&&(n="origin"),i&&(s="before"),l.push({label:e,fill:n,steppedLine:s,pointRadius:0,data:[],unitText:t})}if("thermostat"===r||"climate"===r||"water_heater"===r){const t="climate"===r?t=>"heating"===t.attributes.hvac_action:t=>"heat"===t.state,i="climate"===r?t=>"cooling"===t.attributes.hvac_action:t=>"cool"===t.state,a=e.states.some(t=>t.attributes&&t.attributes.target_temp_high!==t.attributes.target_temp_low),s=e.states.some(t),c=e.states.some(i);d(o+" current temperature",!0),s&&d(o+" heating",!0,!0),c&&d(o+" cooling",!0,!0),a?(d(o+" target temperature high",!0),d(o+" target temperature low",!0)):d(o+" target temperature",!0),e.states.forEach(e=>{if(!e.attributes)return;const r=n(e.attributes.current_temperature),o=[r];if(s&&o.push(t(e)?r:null),c&&o.push(i(e)?r:null),a){const t=n(e.attributes.target_temp_high),i=n(e.attributes.target_temp_low);o.push(t,i),h(new Date(e.last_changed),o)}else{const t=n(e.attributes.temperature);o.push(t),h(new Date(e.last_changed),o)}})}else{d(o,"sensor"===r);let t=null,i=null,a=null;e.states.forEach(e=>{const s=n(e.state),r=new Date(e.last_changed);if(null!==s&&null!==a){const e=r.getTime(),n=a.getTime(),o=i.getTime();h(a,[(n-o)/(e-o)*(s-t)+t]),h(new Date(n+1),[null]),h(r,[s]),i=r,t=s,a=null}else null!==s&&null===a?(h(r,[s]),i=r,t=s):null===s&&null===a&&null!==t&&(a=r)})}h(a,c),Array.prototype.push.apply(i,l)});const r={type:"line",unit:t,legend:!this.isSingleDevice,options:{scales:{xAxes:[{type:"time",ticks:{major:{fontStyle:"bold"}}}],yAxes:[{ticks:{maxTicksLimit:7}}]},tooltips:{mode:"neareach",callbacks:{title:(t,e)=>{const i=t[0],a=e.datasets[i.datasetIndex].data[i.index].x;return Object(p.a)(a,this.hass.language)}}},hover:{mode:"neareach"},layout:{padding:{top:5}},elements:{line:{tension:.1,pointRadius:0,borderWidth:1.5},point:{hitRadius:5}},plugins:{filler:{propagate:!0}}},data:{labels:[],datasets:i}};this.chartData=r}});var u=i(96);customElements.define("state-history-chart-timeline",class extends(Object(d.a)(n.a)){static get template(){return a.a`
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
    `}static get properties(){return{hass:{type:Object},chartData:Object,data:{type:Object,observer:"dataChanged"},names:Object,noSingle:Boolean,endTime:Date,rendered:{type:Boolean,value:!1,reflectToAttribute:!0},rtl:{reflectToAttribute:!0,computed:"_computeRTL(hass)"}}}static get observers(){return["dataChanged(data, endTime, localize, language)"]}connectedCallback(){super.connectedCallback(),this._isAttached=!0,this.drawChart()}dataChanged(){this.drawChart()}drawChart(){let t=this.data;if(!this._isAttached)return;t||(t=[]);const e=new Date(t.reduce((t,e)=>Math.min(t,new Date(e.data[0].last_changed)),new Date));let i=this.endTime||new Date(t.reduce((t,e)=>Math.max(t,new Date(e.data[e.data.length-1].last_changed)),e));i>new Date&&(i=new Date);const a=[],n=[],s=this.names||{};t.forEach(t=>{let r,o=null,c=null,l=e;const h=s[t.entity_id]||t.name,d=[];t.data.forEach(t=>{let e=t.state;void 0!==e&&""!==e||(e=null),new Date(t.last_changed)>i||(null!==o&&e!==o?(r=new Date(t.last_changed),d.push([l,r,c,o]),o=e,c=t.state_localize,l=r):null===o&&(o=e,c=t.state_localize,l=new Date(t.last_changed)))}),null!==o&&d.push([l,i,c,o]),n.push({data:d}),a.push(h)});const r={type:"timeline",options:{tooltips:{callbacks:{label:(t,e)=>{const i=e.datasets[t.datasetIndex].data[t.index],a=Object(p.a)(i[0],this.hass.language),n=Object(p.a)(i[1],this.hass.language);return[i[2],a,n]}}},scales:{xAxes:[{ticks:{major:{fontStyle:"bold"}}}],yAxes:[{afterSetDimensions:t=>{t.maxWidth=.18*t.chart.width},position:this._computeRTL?"right":"left"}]}},data:{labels:a,datasets:n},colors:{staticColors:{on:1,off:0,unavailable:"#a0a0a0",unknown:"#606060",idle:2},staticColorIndex:3}};this.chartData=r}_computeRTL(t){return Object(u.a)(t)}});customElements.define("state-history-charts",class extends(Object(d.a)(n.a)){static get template(){return a.a`
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
    `}static get properties(){return{hass:Object,historyData:{type:Object,value:null},names:Object,isLoadingData:Boolean,endTime:{type:Object},upToNow:Boolean,noSingle:Boolean}}_computeIsSingleLineChart(t,e){return!e&&t&&1===t.length}_computeIsEmpty(t,e){const i=!e||!e.timeline||!e.line||0===e.timeline.length&&0===e.line.length;return!t&&i}_computeIsLoading(t){return t&&!this.historyData}_computeEndTime(t,e){return e?new Date:t}})},268:function(t,e,i){"use strict";var a=i(12),n=i(22),s=i(30),r=i(175),o=i(236);const c={},l={},h=(t,e,i,a,n,s)=>{const r=e,l=c[r];if(l&&Date.now()-l.created<6e4&&l.language===s)return l.data;const h=Object(o.c)(t,e,i,a).then(e=>Object(o.a)(t,e,n,s),t=>{throw delete c[e],t});return c[r]={created:Date.now(),language:s,data:h},h};const d=(t,e,i,a,n)=>{const s=i.cacheKey,r=new Date,c=new Date(r);c.setHours(c.getHours()-i.hoursToShow);let h=c,d=!1,g=l[s];if(g&&h>=g.startTime&&h<=g.endTime&&g.language===n){if(h=g.endTime,d=!0,r<=g.endTime)return g.prom}else g=l[s]=function(t,e,i){return{prom:Promise.resolve({line:[],timeline:[]}),language:t,startTime:e,endTime:i,data:{line:[],timeline:[]}}}(n,c,r);const m=g.prom;return g.prom=(async()=>{let i;try{i=(await Promise.all([m,Object(o.c)(t,e,h,r,d)]))[1]}catch(v){throw delete l[s],v}const b=Object(o.a)(t,i,a,n);return d?(p(b.line,g.data.line),u(b.timeline,g.data.timeline),f(c,g.data)):g.data=b,g.data})(),g.startTime=c,g.endTime=r,g.prom},p=(t,e)=>{t.forEach(t=>{const i=t.unit,a=e.find(t=>t.unit===i);a?t.data.forEach(t=>{const e=a.data.find(e=>t.entity_id===e.entity_id);e?e.states=e.states.concat(t.states):a.data.push(t)}):e.push(t)})},u=(t,e)=>{t.forEach(t=>{const i=e.find(e=>e.entity_id===t.entity_id);i?i.data=i.data.concat(t.data):e.push(t)})},g=(t,e)=>{if(0===e.length)return e;const i=e.findIndex(e=>new Date(e.last_changed)>t);if(0===i)return e;const a=-1===i?e.length-1:i-1;return e[a].last_changed=t,e.slice(a)},f=(t,e)=>{e.line.forEach(e=>{e.data.forEach(e=>{e.states=g(t,e.states)})}),e.timeline.forEach(e=>{e.data=g(t,e.data)})};customElements.define("ha-state-history-data",class extends(Object(r.a)(s.a)){static get properties(){return{hass:{type:Object,observer:"hassChanged"},filterType:String,cacheConfig:Object,startTime:Date,endTime:Date,entityId:String,isLoading:{type:Boolean,value:!0,readOnly:!0,notify:!0},data:{type:Object,value:null,readOnly:!0,notify:!0}}}static get observers(){return["filterChangedDebouncer(filterType, entityId, startTime, endTime, cacheConfig, localize)"]}connectedCallback(){super.connectedCallback(),this.filterChangedDebouncer(this.filterType,this.entityId,this.startTime,this.endTime,this.cacheConfig,this.localize)}disconnectedCallback(){this._refreshTimeoutId&&(window.clearInterval(this._refreshTimeoutId),this._refreshTimeoutId=null),super.disconnectedCallback()}hassChanged(t,e){e||this._madeFirstCall||this.filterChangedDebouncer(this.filterType,this.entityId,this.startTime,this.endTime,this.cacheConfig,this.localize)}filterChangedDebouncer(...t){this._debounceFilterChanged=n.a.debounce(this._debounceFilterChanged,a.d.after(0),()=>{this.filterChanged(...t)})}filterChanged(t,e,i,a,n,s){if(!this.hass)return;if(n&&!n.cacheKey)return;if(!s)return;this._madeFirstCall=!0;const r=this.hass.language;let c;if("date"===t){if(!i||!a)return;c=Object(o.b)(this.hass,i,a).then(t=>Object(o.a)(this.hass,t,s,r))}else{if("recent-entity"!==t)return;if(!e)return;c=n?this.getRecentWithCacheRefresh(e,n,s,r):h(this.hass,e,i,a,s,r)}this._setIsLoading(!0),c.then(t=>{this._setData(t),this._setIsLoading(!1)})}getRecentWithCacheRefresh(t,e,i,a){return this._refreshTimeoutId&&(window.clearInterval(this._refreshTimeoutId),this._refreshTimeoutId=null),e.refresh&&(this._refreshTimeoutId=window.setInterval(()=>{d(this.hass,t,e,i,a).then(t=>{this._setData({...t})})},1e3*e.refresh)),d(this.hass,t,e,i,a)}})},269:function(t,e,i){"use strict";function a(t){let e=function(t){const e=t.split(":").map(Number);return 3600*e[0]+60*e[1]+e[2]}(t.attributes.remaining);if("active"===t.state){const i=(new Date).getTime(),a=new Date(t.last_changed).getTime();e=Math.max(e-(i-a)/1e3,0)}return e}i.d(e,"a",(function(){return a}))},272:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"g",(function(){return n})),i.d(e,"h",(function(){return s})),i.d(e,"f",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"d",(function(){return c})),i.d(e,"e",(function(){return l})),i.d(e,"b",(function(){return h})),i.d(e,"i",(function(){return p}));const a="none",n=1,s=2,r=4,o=8,c=16,l=32,h=64,d={auto:1,heat_cool:2,heat:3,cool:4,dry:5,fan_only:6,off:7},p=(t,e)=>d[t]-d[e]},276:function(t,e,i){"use strict";i(5),i(45),i(109),i(108),i(68),i(88);var a=i(3);const n=a.a`<iron-iconset-svg name="paper-tabs" size="24">
<svg><defs>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(n.content);i(243);var s=i(125),r=i(244),o=i(98),c=i(6),l=i(1);Object(c.a)({_template:a.a`
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
`,is:"paper-tabs",behaviors:[o.a,r.a],properties:{noink:{type:Boolean,value:!1,observer:"_noinkChanged"},noBar:{type:Boolean,value:!1},noSlide:{type:Boolean,value:!1},scrollable:{type:Boolean,value:!1},fitContainer:{type:Boolean,value:!1},disableDrag:{type:Boolean,value:!1},hideScrollButtons:{type:Boolean,value:!1},alignBottom:{type:Boolean,value:!1},selectable:{type:String,value:"paper-tab"},autoselect:{type:Boolean,value:!1},autoselectDelay:{type:Number,value:0},_step:{type:Number,value:10},_holdDelay:{type:Number,value:1},_leftHidden:{type:Boolean,value:!1},_rightHidden:{type:Boolean,value:!1},_previousTab:{type:Object}},hostAttributes:{role:"tablist"},listeners:{"iron-resize":"_onTabSizingChanged","iron-items-changed":"_onTabSizingChanged","iron-select":"_onIronSelect","iron-deselect":"_onIronDeselect"},keyBindings:{"left:keyup right:keyup":"_onArrowKeyup"},created:function(){this._holdJob=null,this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0,this._bindDelayedActivationHandler=this._delayedActivationHandler.bind(this),this.addEventListener("blur",this._onBlurCapture.bind(this),!0)},ready:function(){this.setScrollDirection("y",this.$.tabsContainer)},detached:function(){this._cancelPendingActivation()},_noinkChanged:function(t){Object(l.a)(this).querySelectorAll("paper-tab").forEach(t?this._setNoinkAttribute:this._removeNoinkAttribute)},_setNoinkAttribute:function(t){t.setAttribute("noink","")},_removeNoinkAttribute:function(t){t.removeAttribute("noink")},_computeScrollButtonClass:function(t,e,i){return!e||i?"hidden":t?"not-visible":""},_computeTabsContentClass:function(t,e){return t?"scrollable"+(e?" fit-container":""):" fit-container"},_computeSelectionBarClass:function(t,e){return t?"hidden":e?"align-bottom":""},_onTabSizingChanged:function(){this.debounce("_onTabSizingChanged",(function(){this._scroll(),this._tabChanged(this.selectedItem)}),10)},_onIronSelect:function(t){this._tabChanged(t.detail.item,this._previousTab),this._previousTab=t.detail.item,this.cancelDebouncer("tab-changed")},_onIronDeselect:function(t){this.debounce("tab-changed",(function(){this._tabChanged(null,this._previousTab),this._previousTab=null}),1)},_activateHandler:function(){this._cancelPendingActivation(),s.b._activateHandler.apply(this,arguments)},_scheduleActivation:function(t,e){this._pendingActivationItem=t,this._pendingActivationTimeout=this.async(this._bindDelayedActivationHandler,e)},_delayedActivationHandler:function(){var t=this._pendingActivationItem;this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0,t.fire(this.activateEvent,null,{bubbles:!0,cancelable:!0})},_cancelPendingActivation:function(){void 0!==this._pendingActivationTimeout&&(this.cancelAsync(this._pendingActivationTimeout),this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0)},_onArrowKeyup:function(t){this.autoselect&&this._scheduleActivation(this.focusedItem,this.autoselectDelay)},_onBlurCapture:function(t){t.target===this._pendingActivationItem&&this._cancelPendingActivation()},get _tabContainerScrollSize(){return Math.max(0,this.$.tabsContainer.scrollWidth-this.$.tabsContainer.offsetWidth)},_scroll:function(t,e){if(this.scrollable){var i=e&&-e.ddx||0;this._affectScroll(i)}},_down:function(t){this.async((function(){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null)}),1)},_affectScroll:function(t){this.$.tabsContainer.scrollLeft+=t;var e=this.$.tabsContainer.scrollLeft;this._leftHidden=0===e,this._rightHidden=e===this._tabContainerScrollSize},_onLeftScrollButtonDown:function(){this._scrollToLeft(),this._holdJob=setInterval(this._scrollToLeft.bind(this),this._holdDelay)},_onRightScrollButtonDown:function(){this._scrollToRight(),this._holdJob=setInterval(this._scrollToRight.bind(this),this._holdDelay)},_onScrollButtonUp:function(){clearInterval(this._holdJob),this._holdJob=null},_scrollToLeft:function(){this._affectScroll(-this._step)},_scrollToRight:function(){this._affectScroll(this._step)},_tabChanged:function(t,e){if(!t)return this.$.selectionBar.classList.remove("expand"),this.$.selectionBar.classList.remove("contract"),void this._positionBar(0,0);var i=this.$.tabsContent.getBoundingClientRect(),a=i.width,n=t.getBoundingClientRect(),s=n.left-i.left;if(this._pos={width:this._calcPercent(n.width,a),left:this._calcPercent(s,a)},this.noSlide||null==e)return this.$.selectionBar.classList.remove("expand"),this.$.selectionBar.classList.remove("contract"),void this._positionBar(this._pos.width,this._pos.left);var r=e.getBoundingClientRect(),o=this.items.indexOf(e),c=this.items.indexOf(t);this.$.selectionBar.classList.add("expand");var l=o<c;this._isRTL&&(l=!l),l?this._positionBar(this._calcPercent(n.left+n.width-r.left,a)-5,this._left):this._positionBar(this._calcPercent(r.left+r.width-n.left,a)-5,this._calcPercent(s,a)+5),this.scrollable&&this._scrollToSelectedIfNeeded(n.width,s)},_scrollToSelectedIfNeeded:function(t,e){var i=e-this.$.tabsContainer.scrollLeft;i<0?this.$.tabsContainer.scrollLeft+=i:(i+=t-this.$.tabsContainer.offsetWidth)>0&&(this.$.tabsContainer.scrollLeft+=i)},_calcPercent:function(t,e){return 100*t/e},_positionBar:function(t,e){t=t||0,e=e||0,this._width=t,this._left=e,this.transform("translateX("+e+"%) scaleX("+t/100+")",this.$.selectionBar)},_onBarTransitionEnd:function(t){var e=this.$.selectionBar.classList;e.contains("expand")?(e.remove("expand"),e.add("contract"),this._positionBar(this._pos.width,this._pos.left)):e.contains("contract")&&e.remove("contract")}})},280:function(t,e,i){"use strict";var a=i(0),n=i(73);i(179);customElements.define("ha-label-badge",class extends a.a{static get properties(){return{value:{},icon:{},label:{},description:{},image:{}}}render(){return a.f`
      <div class="badge-container">
        <div class="label-badge" id="badge">
          <div
            class="${Object(n.a)({value:!0,big:Boolean(this.value&&this.value.length>4)})}"
          >
            ${!this.icon||this.value||this.image?"":a.f`
                  <ha-icon .icon="${this.icon}"></ha-icon>
                `}
            ${this.value&&!this.image?a.f`
                  <span>${this.value}</span>
                `:""}
          </div>
          ${this.label?a.f`
                <div
                  class="${Object(n.a)({label:!0,big:this.label.length>5})}"
                >
                  <span>${this.label}</span>
                </div>
              `:""}
        </div>
        ${this.description?a.f`
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
      `]}updated(t){super.updated(t),t.has("image")&&(this.shadowRoot.getElementById("badge").style.backgroundImage=this.image?`url(${this.image})`:"")}})},281:function(t,e,i){"use strict";i(182),i(108);var a=i(3),n=i(30),s=i(233);customElements.define("ha-cover-tilt-controls",class extends n.a{static get template(){return a.a`
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
    `}static get properties(){return{hass:{type:Object},stateObj:{type:Object},entityObj:{type:Object,computed:"computeEntityObj(hass, stateObj)"}}}computeEntityObj(t,e){return new s.a(t,e)}computeOpenDisabled(t,e){var i=!0===t.attributes.assumed_state;return e.isFullyOpenTilt&&!i}computeClosedDisabled(t,e){var i=!0===t.attributes.assumed_state;return e.isFullyClosedTilt&&!i}onOpenTiltTap(t){t.stopPropagation(),this.entityObj.openCoverTilt()}onCloseTiltTap(t){t.stopPropagation(),this.entityObj.closeCoverTilt()}onStopTiltTap(t){t.stopPropagation(),this.entityObj.stopCoverTilt()}})},282:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return r})),i.d(e,"e",(function(){return o})),i.d(e,"d",(function(){return l})),i.d(e,"c",(function(){return h})),i.d(e,"f",(function(){return d}));var a=i(263),n=i(66);const s=2,r=t=>`/api/camera_proxy_stream/${t.entity_id}?token=${t.attributes.access_token}`,o=(t,e)=>Object(a.a)("_cameraTmbUrl",9e3,c,t,e),c=async(t,e)=>{const i=await Object(n.b)(t,`/api/camera_proxy/${e}`);return t.hassUrl(i.path)},l=async(t,e,i)=>{const a={type:"camera/stream",entity_id:e};i&&(a.format=i);const n=await t.callWS(a);return n.url=t.hassUrl(n.url),n},h=(t,e)=>t.callWS({type:"camera/get_prefs",entity_id:e}),d=(t,e,i)=>t.callWS(Object.assign({type:"camera/update_prefs",entity_id:e},i))},285:function(t,e,i){"use strict";i(108);var a=i(3),n=i(30),s=i(118),r=i(221),o=i(18);customElements.define("ha-start-voice-button",class extends(Object(s.a)(n.a)){static get template(){return a.a`
      <paper-icon-button
        aria-label="Start conversation"
        icon="hass:microphone"
        hidden$="[[!canListen]]"
        on-click="handleListenClick"
      ></paper-icon-button>
    `}static get properties(){return{hass:{type:Object,value:null},canListen:{type:Boolean,computed:"computeCanListen(hass)",notify:!0}}}computeCanListen(t){return"webkitSpeechRecognition"in window&&Object(r.a)(t,"conversation")}handleListenClick(){Object(o.a)(this,"show-dialog",{dialogImport:()=>i.e(131).then(i.bind(null,366)),dialogTag:"ha-voice-command-dialog"})}})},286:function(t,e,i){"use strict";var a=i(4),n=i(0),s=i(73),r=i(18),o=i(180),c=i(176),l=i(178),h=i(192),d=i(269),p=i(262);i(280);let u=class extends n.a{connectedCallback(){super.connectedCallback(),this._connected=!0,this.startInterval(this.state)}disconnectedCallback(){super.disconnectedCallback(),this._connected=!1,this.clearInterval()}render(){const t=this.state;if(!t)return n.f`
        <ha-label-badge
          class="warning"
          label="${this.hass.localize("state_badge.default.error")}"
          icon="hass:alert"
          description="${this.hass.localize("state_badge.default.entity_not_found")}"
        ></ha-label-badge>
      `;const e=Object(o.a)(t);return n.f`
      <ha-label-badge
        class="${Object(s.a)({[e]:!0,"has-unit_of_measurement":"unit_of_measurement"in t.attributes})}"
        .value="${this._computeValue(e,t)}"
        .icon="${this.icon?this.icon:this._computeIcon(e,t)}"
        .image="${this.icon?"":this.image?this.image:t.attributes.entity_picture}"
        .label="${this._computeLabel(e,t,this._timerTimeRemaining)}"
        .description="${this.name?this.name:Object(c.a)(t)}"
      ></ha-label-badge>
    `}firstUpdated(t){super.firstUpdated(t),this.addEventListener("click",t=>{t.stopPropagation(),this.state&&Object(r.a)(this,"hass-more-info",{entityId:this.state.entity_id})})}updated(t){super.updated(t),this._connected&&t.has("state")&&this.startInterval(this.state)}_computeValue(t,e){switch(t){case"binary_sensor":case"device_tracker":case"person":case"updater":case"sun":case"alarm_control_panel":case"timer":return null;case"sensor":default:return"unknown"===e.state?"-":this.hass.localize(`component.${t}.state.${e.state}`)||e.state}}_computeIcon(t,e){if("unavailable"===e.state)return null;switch(t){case"alarm_control_panel":return"pending"===e.state?"hass:clock-fast":"armed_away"===e.state?"hass:nature":"armed_home"===e.state?"hass:home-variant":"armed_night"===e.state?"hass:weather-night":"armed_custom_bypass"===e.state?"hass:shield-home":"triggered"===e.state?"hass:alert-circle":Object(l.a)(t,e.state);case"binary_sensor":case"device_tracker":case"updater":case"person":return Object(h.a)(e);case"sun":return"above_horizon"===e.state?Object(l.a)(t):"hass:brightness-3";case"timer":return"active"===e.state?"hass:timer":"hass:timer-off";default:return null}}_computeLabel(t,e,i){return"unavailable"===e.state||["device_tracker","alarm_control_panel","person"].includes(t)?this.hass.localize(`state_badge.${t}.${e.state}`)||this.hass.localize(`state_badge.default.${e.state}`)||e.state:"timer"===t?Object(p.a)(i):e.attributes.unit_of_measurement||null}clearInterval(){this._updateRemaining&&(clearInterval(this._updateRemaining),this._updateRemaining=void 0)}startInterval(t){this.clearInterval(),t&&"timer"===Object(o.a)(t)&&(this.calculateTimerRemaining(t),"active"===t.state&&(this._updateRemaining=window.setInterval(()=>this.calculateTimerRemaining(this.state),1e3)))}calculateTimerRemaining(t){this._timerTimeRemaining=Object(d.a)(t)}static get styles(){return n.c`
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
    `}};Object(a.b)([Object(n.g)()],u.prototype,"hass",void 0),Object(a.b)([Object(n.g)()],u.prototype,"state",void 0),Object(a.b)([Object(n.g)()],u.prototype,"name",void 0),Object(a.b)([Object(n.g)()],u.prototype,"icon",void 0),Object(a.b)([Object(n.g)()],u.prototype,"image",void 0),Object(a.b)([Object(n.g)()],u.prototype,"_timerTimeRemaining",void 0),u=Object(a.b)([Object(n.d)("ha-state-label-badge")],u)},287:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var a=i(305);const n=t=>{if(!t||!Array.isArray(t))throw new Error("Entities need to be an array");return t.map((t,e)=>{if("object"==typeof t&&!Array.isArray(t)&&t.type)return t;let i;if("string"==typeof t)i={entity:t};else{if("object"!=typeof t||Array.isArray(t))throw new Error(`Invalid entity specified at position ${e}.`);if(!t.entity)throw new Error(`Entity object at position ${e} is missing entity field.`);i=t}if(!Object(a.a)(i.entity))throw new Error(`Invalid entity ID at position ${e}: ${i.entity}`);return i})}},288:function(t,e,i){"use strict";var a=i(3),n=i(30),s=i(175),r=i(272);customElements.define("ha-climate-state",class extends(Object(s.a)(n.a)){static get template(){return a.a`
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
    `}static get properties(){return{hass:Object,stateObj:Object,currentStatus:{type:String,computed:"computeCurrentStatus(hass, stateObj)"}}}computeCurrentStatus(t,e){return t&&e?null!=e.attributes.current_temperature?`${e.attributes.current_temperature} ${t.config.unit_system.temperature}`:null!=e.attributes.current_humidity?`${e.attributes.current_humidity} %`:null:null}computeTarget(t,e){return t&&e?null!=e.attributes.target_temp_low&&null!=e.attributes.target_temp_high?`${e.attributes.target_temp_low}-${e.attributes.target_temp_high} ${t.config.unit_system.temperature}`:null!=e.attributes.temperature?`${e.attributes.temperature} ${t.config.unit_system.temperature}`:null!=e.attributes.target_humidity_low&&null!=e.attributes.target_humidity_high?`${e.attributes.target_humidity_low}-${e.attributes.target_humidity_high}%`:null!=e.attributes.humidity?`${e.attributes.humidity} %`:"":null}_hasKnownState(t){return"unknown"!==t}_localizeState(t,e){const i=t(`state.climate.${e.state}`);return e.attributes.hvac_action?`${t(`state_attributes.climate.hvac_action.${e.attributes.hvac_action}`)} (${i})`:i}_localizePreset(t,e){return t(`state_attributes.climate.preset_mode.${e}`)||e}_renderPreset(t){return t.preset_mode&&t.preset_mode!==r.a}})},289:function(t,e,i){"use strict";i(108);var a=i(3),n=i(30),s=i(233);customElements.define("ha-cover-controls",class extends n.a{static get template(){return a.a`
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
    `}static get properties(){return{hass:{type:Object},stateObj:{type:Object},entityObj:{type:Object,computed:"computeEntityObj(hass, stateObj)"}}}computeEntityObj(t,e){return new s.a(t,e)}computeOpenDisabled(t,e){var i=!0===t.attributes.assumed_state;return(e.isFullyOpen||e.isOpening)&&!i}computeClosedDisabled(t,e){var i=!0===t.attributes.assumed_state;return(e.isFullyClosed||e.isClosing)&&!i}onOpenTap(t){t.stopPropagation(),this.entityObj.openCover()}onCloseTap(t){t.stopPropagation(),this.entityObj.closeCover()}onStopTap(t){t.stopPropagation(),this.entityObj.stopCover()}})},290:function(t,e,i){"use strict";i(157);const a=customElements.get("paper-slider");let n;customElements.define("ha-slider",class extends a{static get template(){if(!n){(n=a.template.cloneNode(!0)).content.querySelector("style").appendChild(document.createTextNode('\n          :host([dir="rtl"]) #sliderContainer.pin.expand > .slider-knob > .slider-knob-inner::after {\n            -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            }\n        '))}return n}_calcStep(t){if(!this.step)return parseFloat(t);const e=Math.round((t-this.min)/this.step),i=this.step.toString(),a=i.indexOf(".");if(-1!==a){const t=10**(i.length-a-1);return Math.round((e*this.step+this.min)*t)/t}return e*this.step+this.min}})},291:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));const a=(t,e,i)=>t.callService("input_select","select_option",{option:i,entity_id:e})},292:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));const a=t=>t.stopPropagation()},293:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var a=i(11);const n=new WeakMap,s=Object(a.f)(t=>e=>{if(!(e instanceof a.a)||e instanceof a.c||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=e,{style:s}=i.element;n.has(e)||(s.cssText=i.strings.join(" "));const r=n.get(e);for(const a in r)a in t||(-1===a.indexOf("-")?s[a]=null:s.removeProperty(a));for(const a in t)-1===a.indexOf("-")?s[a]=t[a]:s.setProperty(a,t[a]);n.set(e,t)})},294:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"a",(function(){return n}));const a=async(t,e=!1)=>{if(!t.parentNode)throw new Error("Cannot setup Leaflet map on disconnected element");const a=await i.e(124).then(i.t.bind(null,367,7));a.Icon.Default.imagePath="/static/images/leaflet/images/";const s=a.map(t),r=document.createElement("link");return r.setAttribute("href","/static/images/leaflet/leaflet.css"),r.setAttribute("rel","stylesheet"),t.parentNode.appendChild(r),s.setView([52.3731339,4.8903147],13),n(a,e).addTo(s),[s,a]},n=(t,e)=>t.tileLayer(`https://{s}.basemaps.cartocdn.com/${e?"dark_all":"light_all"}/{z}/{x}/{y}${t.Browser.retina?"@2x.png":".png"}`,{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",minZoom:0,maxZoom:20})},295:function(t,e,i){"use strict";function a(t,e){const i={};return e.attributes.entity_id.forEach(e=>{const a=t[e];a&&(i[a.entity_id]=a)}),i}i.d(e,"a",(function(){return a}))},304:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"f",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"h",(function(){return r})),i.d(e,"e",(function(){return o})),i.d(e,"b",(function(){return c})),i.d(e,"g",(function(){return l})),i.d(e,"i",(function(){return h})),i.d(e,"d",(function(){return d}));const a=(t,e,i)=>{const[a]=e,n=[];return t.views.forEach((e,s)=>{if(s!==a)return void n.push(t.views[s]);const r=e.cards?[...e.cards,i]:[i];n.push(Object.assign(Object.assign({},e),{cards:r}))}),Object.assign(Object.assign({},t),{views:n})},n=(t,e,i)=>{const[a,n]=e,s=[];return t.views.forEach((e,r)=>{r===a?s.push(Object.assign(Object.assign({},e),{cards:(e.cards||[]).map((t,e)=>e===n?i:t)})):s.push(t.views[r])}),Object.assign(Object.assign({},t),{views:s})},s=(t,e)=>{const[i,a]=e,n=[];return t.views.forEach((e,s)=>{s===i?n.push(Object.assign(Object.assign({},e),{cards:(e.cards||[]).filter((t,e)=>e!==a)})):n.push(t.views[s])}),Object.assign(Object.assign({},t),{views:n})},r=(t,e,i)=>{const a=t.views[e[0]].cards[e[1]],n=t.views[i[0]].cards[i[1]],s=t.views[e[0]],r=Object.assign(Object.assign({},s),{cards:s.cards.map((t,i)=>i===e[1]?n:t)}),o=e[0]===i[0]?r:t.views[i[0]],c=Object.assign(Object.assign({},o),{cards:o.cards.map((t,e)=>e===i[1]?a:t)});return Object.assign(Object.assign({},t),{views:t.views.map((t,a)=>a===i[0]?c:a===e[0]?r:t)})},o=(t,e,i)=>{if(e[0]===i[0])throw new Error("You can not move a card to the view it is in.");const a=t.views[e[0]],n=a.cards[e[1]],s=Object.assign(Object.assign({},a),{cards:(a.cards||[]).filter((t,i)=>i!==e[1])}),r=t.views[i[0]],o=r.cards?[...r.cards,n]:[n],c=Object.assign(Object.assign({},r),{cards:o});return Object.assign(Object.assign({},t),{views:t.views.map((t,a)=>a===i[0]?c:a===e[0]?s:t)})},c=(t,e)=>Object.assign(Object.assign({},t),{views:t.views.concat(e)}),l=(t,e,i)=>Object.assign(Object.assign({},t),{views:t.views.map((t,a)=>a===e?i:t)}),h=(t,e,i)=>{const a=t.views[e],n=t.views[i];return Object.assign(Object.assign({},t),{views:t.views.map((t,s)=>s===i?a:s===e?n:t)})},d=(t,e)=>Object.assign(Object.assign({},t),{views:t.views.filter((t,i)=>i!==e)})},305:function(t,e,i){"use strict";const a=/^(\w+)\.(\w+)$/;e.a=t=>a.test(t)},306:function(t,e,i){"use strict";i.d(e,"d",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"b",(function(){return r})),i.d(e,"a",(function(){return o})),i.d(e,"e",(function(){return c}));var a=i(263);const n=1,s=32,r=16384,o=["off","idle"],c=(t,e)=>Object(a.a)("_media_playerTmb",9e3,l,t,e),l=(t,e)=>t.callWS({type:"media_player_thumbnail",entity_id:e})},324:function(t,e,i){"use strict";i(259);var a=i(260);Object(a.b)("waterfall",{run:function(){this.shadow=this.isOnScreen()&&this.isContentBelow()}})},325:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"a",(function(){return r}));var a=i(4),n=i(0);const s=t=>{const e=document.createElement("hui-error-card");return e.setConfig(t),e},r=(t,e)=>({type:"error",error:t,origConfig:e});let o=class extends n.a{getCardSize(){return 4}setConfig(t){this._config=t}render(){return this._config?n.f`
      ${this._config.error}
      <pre>${this._toStr(this._config.origConfig)}</pre>
    `:n.f``}static get styles(){return n.c`
      :host {
        display: block;
        background-color: #ef5350;
        color: white;
        padding: 8px;
        font-weight: 500;
        user-select: text;
        cursor: default;
      }
    `}_toStr(t){return JSON.stringify(t,null,2)}};Object(a.b)([Object(n.g)()],o.prototype,"_config",void 0),o=Object(a.b)([Object(n.d)("hui-error-card")],o)},326:function(t,e,i){"use strict";i(182),i(108),i(155),i(245);var a=i(3),n=i(30),s=i(264),r=i(306),o=i(176),c=i(118),l=i(175);customElements.define("ha-media_player-card",class extends(Object(l.a)(Object(c.a)(n.a))){static get template(){return a.a`
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
    `}static get properties(){return{hass:Object,stateObj:Object,playerObj:{type:Object,computed:"computePlayerObj(hass, stateObj)",observer:"playerObjChanged"},playbackControlIcon:{type:String,computed:"computePlaybackControlIcon(playerObj)"},playbackPosition:Number,_coverShowing:{type:Boolean,value:!1},_coverLoadError:{type:Boolean,value:!1}}}async playerObjChanged(t,e){t.isPlaying&&t.showProgress?this._positionTracking||(this._positionTracking=setInterval(()=>this.updatePlaybackPosition(),1e3)):this._positionTracking&&(clearInterval(this._positionTracking),this._positionTracking=null),t.showProgress&&this.updatePlaybackPosition();const i=t.stateObj.attributes.entity_picture,a=e&&e.stateObj.attributes.entity_picture;if(i===a||i){if(i!==a){if("/"!==i.substr(0,1))return this._coverShowing=!0,this._coverLoadError=!1,void(this.$.cover.style.backgroundImage=`url(${i})`);try{const{content_type:e,content:i}=await Object(r.e)(this.hass,t.stateObj.entity_id);this._coverShowing=!0,this._coverLoadError=!1,this.$.cover.style.backgroundImage=`url(data:${e};base64,${i})`}catch(n){this._coverShowing=!1,this._coverLoadError=!0,this.$.cover.style.backgroundImage=""}}}else this.$.cover.style.backgroundImage=""}updatePlaybackPosition(){this.playbackPosition=this.playerObj.currentProgress}computeBannerClasses(t,e,i){var a="banner";return t?(t.isOff||t.isIdle?a+=" is-off no-cover":t.stateObj.attributes.entity_picture&&!i&&e?"music"===t.stateObj.attributes.media_content_type?a+=" content-type-music":"game"===t.stateObj.attributes.media_content_type&&(a+=" content-type-game"):a+=" no-cover",a):a}computeHideProgress(t){return!t.showProgress}computeHidePowerButton(t){return t.isOff?!t.supportsTurnOn:!t.supportsTurnOff}computePlayerObj(t,e){return new s.a(t,e)}computePrimaryText(t,e){return e.primaryTitle||t(`state.media_player.${e.stateObj.state}`)||t(`state.default.${e.stateObj.state}`)||e.stateObj.state}computePlaybackControlIcon(t){return t.isPlaying?t.supportsPause?"hass:pause":"hass:stop":t.hasMediaControl||t.isOff||t.isIdle?t.hasMediaControl&&t.supportsPause&&!t.isPaused?"hass:play-pause":t.supportsPlay?"hass:play":null:""}_computeStateName(t){return Object(o.a)(t)}handleNext(t){t.stopPropagation(),this.playerObj.nextTrack()}handleOpenMoreInfo(t){t.stopPropagation(),this.fire("hass-more-info",{entityId:this.stateObj.entity_id})}handlePlaybackControl(t){t.stopPropagation(),this.playerObj.mediaPlayPause()}handlePrevious(t){t.stopPropagation(),this.playerObj.previousTrack()}handleTogglePower(t){t.stopPropagation(),this.playerObj.togglePower()}})},327:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var a=i(119);function n(t){const e=[];return Object.keys(t).forEach(i=>{const a=t[i];a.attributes.view&&e.push(a)}),e.sort((t,e)=>t.entity_id===a.c?-1:e.entity_id===a.c?1:t.attributes.order-e.attributes.order),e}},328:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var a=i(121),n=i(295);function s(t,e){const i={};return e.attributes.entity_id.forEach(e=>{const s=t[e];if(s&&!s.attributes.hidden&&(i[s.entity_id]=s,"group"===Object(a.a)(s.entity_id))){const e=Object(n.a)(t,s);Object.keys(e).forEach(t=>{const a=e[t];a.attributes.hidden||(i[t]=a)})}}),i}},329:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var a=i(121);function n(t){const e=[],i={};return Object.keys(t).forEach(n=>{const s=t[n];"group"===Object(a.a)(n)?e.push(s):i[n]=s}),e.forEach(t=>t.attributes.entity_id.forEach(t=>{delete i[t]})),{groups:e,ungrouped:i}}},357:function(t,e,i){"use strict";function a(t){if(!t||"object"!=typeof t)return t;if("[object Date]"==Object.prototype.toString.call(t))return new Date(t.getTime());if(Array.isArray(t))return t.map(a);var e={};return Object.keys(t).forEach((function(i){e[i]=a(t[i])})),e}i.d(e,"a",(function(){return a}))},358:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));const a=t=>"function"==typeof t.getCardSize?t.getCardSize():1},359:function(t,e,i){"use strict";i.d(e,"a",(function(){return d}));var a=i(11);const n=(t,e)=>{const i=t.startNode.parentNode,n=void 0===e?t.endNode:e.startNode,s=i.insertBefore(Object(a.e)(),n);i.insertBefore(Object(a.e)(),n);const r=new a.b(t.options);return r.insertAfterNode(s),r},s=(t,e)=>(t.setValue(e),t.commit(),t),r=(t,e,i)=>{const n=t.startNode.parentNode,s=i?i.startNode:t.endNode,r=e.endNode.nextSibling;r!==s&&Object(a.j)(n,e.startNode,r,s)},o=t=>{Object(a.i)(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},c=(t,e,i)=>{const a=new Map;for(let n=e;n<=i;n++)a.set(t[n],n);return a},l=new WeakMap,h=new WeakMap,d=Object(a.f)((t,e,i)=>{let d;return void 0===i?i=e:void 0!==e&&(d=e),e=>{if(!(e instanceof a.b))throw new Error("repeat can only be used in text bindings");const p=l.get(e)||[],u=h.get(e)||[],g=[],f=[],m=[];let b,v,_=0;for(const a of t)m[_]=d?d(a,_):_,f[_]=i(a,_),_++;let y=0,w=p.length-1,x=0,O=f.length-1;for(;y<=w&&x<=O;)if(null===p[y])y++;else if(null===p[w])w--;else if(u[y]===m[x])g[x]=s(p[y],f[x]),y++,x++;else if(u[w]===m[O])g[O]=s(p[w],f[O]),w--,O--;else if(u[y]===m[O])g[O]=s(p[y],f[O]),r(e,p[y],g[O+1]),y++,O--;else if(u[w]===m[x])g[x]=s(p[w],f[x]),r(e,p[w],p[y]),w--,x++;else if(void 0===b&&(b=c(m,x,O),v=c(u,y,w)),b.has(u[y]))if(b.has(u[w])){const t=v.get(m[x]),i=void 0!==t?p[t]:null;if(null===i){const t=n(e,p[y]);s(t,f[x]),g[x]=t}else g[x]=s(i,f[x]),r(e,i,p[y]),p[t]=null;x++}else o(p[w]),w--;else o(p[y]),y++;for(;x<=O;){const t=n(e,g[O+1]);s(t,f[x]),g[x++]=t}for(;y<=w;){const t=p[y++];null!==t&&o(t)}l.set(e,g),h.set(e,m)}})},399:function(t,e,i){"use strict";function a(t,e){const i=e,a=Math.random(),n=Date.now(),s=i.scrollTop,r=0-s;t._currentAnimationId=a,function e(){const o=Date.now()-n;var c;o>200?i.scrollTop=0:t._currentAnimationId===a&&(i.scrollTop=(c=o,-r*(c/=200)*(c-2)+s),requestAnimationFrame(e.bind(t)))}.call(t)}i.d(e,"a",(function(){return a}))},400:function(t,e,i){"use strict";i(93),i(144),i(143),i(146);var a=i(3),n=i(30);customElements.define("paper-time-input",class extends n.a{static get template(){return a.a`
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
    `}static get properties(){return{label:{type:String,value:"Time"},autoValidate:{type:Boolean,value:!0},hideLabel:{type:Boolean,value:!1},format:{type:Number,value:12},disabled:{type:Boolean,value:!1},hour:{type:String,notify:!0},min:{type:String,notify:!0},amPm:{type:String,notify:!0,value:"AM"},value:{type:String,notify:!0,readOnly:!0,computed:"_computeTime(min, hour, amPm)"}}}validate(){var t=!0;return!this.$.hour.validate()|!this.$.min.validate()&&(t=!1),12!==this.format||this.$.dropdown.validate()||(t=!1),t}_computeTime(t,e,i){if(e&&t)return 24===this.format&&(i=""),e+":"+t+" "+i}_formatMin(){1===this.min.toString().length&&(this.min=this.min<10?"0"+this.min:this.min)}_shouldFormatHour(){24===this.format&&1===this.hour.toString().length&&(this.hour=this.hour<10?"0"+this.hour:this.hour)}_computeHourMax(t){return 12===t?t:23}_equal(t,e){return t===e}})},401:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n}));const a="5FE44367",n="http://192.168.1.234:8123"},402:function(t,e,i){"use strict";i(255);var a=i(3),n=i(30),s=i(118);customElements.define("ha-entity-marker",class extends(Object(s.a)(n.a)){static get template(){return a.a`
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
    `}static get properties(){return{hass:{type:Object},entityId:{type:String,value:""},entityName:{type:String,value:null},entityPicture:{type:String,value:null}}}ready(){super.ready(),this.addEventListener("click",t=>this.badgeTap(t))}badgeTap(t){t.stopPropagation(),this.entityId&&this.fire("hass-more-info",{entityId:this.entityId})}})},403:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"a",(function(){return n}));const a="unavailable",n=["air_quality","alarm_control_panel","alert","automation","binary_sensor","calendar","camera","counter","cover","dominos","fan","geo_location","group","history_graph","image_processing","input_boolean","input_datetime","input_number","input_select","input_text","light","lock","mailbox","media_player","person","plant","remember_the_milk","remote","scene","script","sensor","switch","timer","utility_meter","vacuum","weather","wink","zha","zwave"]},404:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var a=i(18);let n=!1;const s=(t,e)=>{n||(n=!0,(t=>Object(a.a)(t,"register-dialog",{dialogShowEvent:"show-edit-card",dialogTag:"hui-dialog-edit-card",dialogImport:()=>Promise.all([i.e(9),i.e(41)]).then(i.bind(null,666))}))(t)),Object(a.a)(t,"show-edit-card",e)}},424:function(t,e,i){"use strict";var a=i(357),n=i(18),s=i(4),r=i(0),o=i(73);i(177),i(280);let c=class extends r.a{render(){return r.f`
      <slot></slot>
    `}static get styles(){return r.c`
      :host {
        display: block;
        color: black;
        background-color: #fce588;
        padding: 8px;
      }
    `}};c=Object(s.b)([Object(r.d)("hui-warning")],c);const l={armed_away:"hass:shield-lock",armed_custom_bypass:"hass:security",armed_home:"hass:shield-home",armed_night:"hass:shield-home",disarmed:"hass:shield-check",pending:"hass:shield-outline",triggered:"hass:bell-ring"},h=["1","2","3","4","5","6","7","8","9","","0","clear"];let d=class extends r.a{static async getConfigElement(){return await Promise.all([i.e(3),i.e(4),i.e(110),i.e(40)]).then(i.bind(null,683)),document.createElement("hui-alarm-panel-card-editor")}static getStubConfig(){return{states:["arm_home","arm_away"],entity:""}}getCardSize(){if(!this._config||!this.hass)return 0;const t=this.hass.states[this._config.entity];return t&&"number"===t.attributes.code_format?8:3}setConfig(t){if(!t||!t.entity||"alarm_control_panel"!==t.entity.split(".")[0])throw new Error("Invalid card configuration");this._config=Object.assign(Object.assign({},{states:["arm_away","arm_home"]}),t),this._code=""}shouldUpdate(t){if(t.has("_config")||t.has("_code"))return!0;const e=t.get("hass");return!e||e.states[this._config.entity]!==this.hass.states[this._config.entity]}render(){if(!this._config||!this.hass)return r.f``;const t=this.hass.states[this._config.entity];return t?r.f`
      <ha-card
        .header="${this._config.name||t.attributes.friendly_name||this._label(t.state)}"
      >
        <ha-label-badge
          class="${Object(o.a)({[t.state]:!0})}"
          .icon="${l[t.state]||"hass:shield-outline"}"
          .label="${this._stateIconLabel(t.state)}"
        ></ha-label-badge>
        <div id="armActions" class="actions">
          ${("disarmed"===t.state?this._config.states:["disarm"]).map(t=>r.f`
              <mwc-button
                .action="${t}"
                @click="${this._handleActionClick}"
                outlined
              >
                ${this._label(t)}
              </mwc-button>
            `)}
        </div>
        ${t.attributes.code_format?r.f`
              <paper-input
                id="alarmCode"
                label="Alarm Code"
                type="password"
                .value="${this._code}"
              ></paper-input>
            `:r.f``}
        ${"number"!==t.attributes.code_format?r.f``:r.f`
              <div id="keypad">
                ${h.map(t=>""===t?r.f`
                        <mwc-button disabled></mwc-button>
                      `:r.f`
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
    `:r.f`
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
    `}};Object(s.b)([Object(r.g)()],d.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],d.prototype,"_config",void 0),Object(s.b)([Object(r.g)()],d.prototype,"_code",void 0),d=Object(s.b)([Object(r.d)("hui-alarm-panel-card")],d);var p=i(358);function u(t,e){return t.every(t=>{const i=e.states[t.entity]?e.states[t.entity].state:"unavailable";return t.state?i===t.state:i!==t.state_not})}function g(t){return t.every(t=>t.entity&&(t.state||t.state_not))}customElements.define("hui-conditional-card",class extends HTMLElement{setConfig(t){if(!(t.card&&t.conditions&&Array.isArray(t.conditions)&&g(t.conditions)))throw new Error("Error in card configuration.");this._card&&this._card.parentElement&&this.removeChild(this._card),this._config=t,this._card=Ne(t.card),this.update()}set hass(t){this._hass=t,this.update()}getCardSize(){return Object(p.a)(this._card)}update(){if(!this._card||!this._hass)return;const t=this._config&&u(this._config.conditions,this._hass);t?(this._card.hass=this._hass,this._card.parentElement||this.appendChild(this._card)):this._card.parentElement&&this.removeChild(this._card),this.style.setProperty("display",t?"":"none")}});var f=i(119),m=i(121);var b=i(103);let v=class extends r.a{updated(t){super.updated(t),t.has("entities")&&(this._toggleEntities=this.entities.filter(t=>t in this.hass.states&&f.f.has(t.split(".",1)[0])))}render(){return this._toggleEntities?r.f`
      <paper-toggle-button
        aria-label="Toggle entities."
        ?checked="${this._toggleEntities.some(t=>{const e=this.hass.states[t];return e&&"on"===e.state})}"
        @change="${this._callService}"
      ></paper-toggle-button>
    `:r.f``}static get styles(){return r.c`
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
    `}_callService(t){Object(b.a)("light");const e=t.target.checked;((t,e,i=!0)=>{const a={};e.forEach(e=>{if(f.i.includes(t.states[e].state)===i){const t=Object(m.a)(e),i=["cover","lock"].includes(t)?t:"homeassistant";i in a||(a[i]=[]),a[i].push(e)}}),Object.keys(a).forEach(e=>{let n;switch(e){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}const s=a[e];t.callService(e,n,{entity_id:s})})})(this.hass,this._toggleEntities,e)}};Object(s.b)([Object(r.g)()],v.prototype,"entities",void 0),Object(s.b)([Object(r.g)()],v.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],v.prototype,"_toggleEntities",void 0),v=Object(s.b)([Object(r.d)("hui-entities-toggle")],v);var _=i(287),y=i(325),w=(i(288),i(176)),x=(i(184),i(230),i(179),i(96)),O=i(134);class k extends r.a{constructor(){super(...arguments),this.showSecondary=!0}render(){if(!this.hass||!this.config)return r.f``;const t=this.config.entity?this.hass.states[this.config.entity]:void 0;return t?r.f`
      <state-badge
        .hass=${this.hass}
        .stateObj=${t}
        .overrideIcon=${this.config.icon}
      ></state-badge>
      <div class="flex">
        <div class="info">
          ${this.config.name||Object(w.a)(t)}
          <div class="secondary">
            ${this.showSecondary?"entity-id"===this.config.secondary_info?t.entity_id:"last-changed"===this.config.secondary_info?r.f`
                  <ha-relative-time
                    .hass=${this.hass}
                    .datetime=${t.last_changed}
                  ></ha-relative-time>
                `:"":r.f`
                  <slot name="secondary"></slot>
                `}
          </div>
        </div>

        <slot></slot>
      </div>
    `:r.f`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this.config.entity)}</hui-warning
        >
      `}updated(t){super.updated(t),t.has("hass")&&Object(O.a)(this,"rtl",Object(x.a)(this.hass))}static get styles(){return r.c`
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
    `}}function j(t,e){if(e.has("_config"))return!0;const i=e.get("hass");return!i||(i.states[t._config.entity]!==t.hass.states[t._config.entity]||i.localize!==t.hass.localize)}Object(s.b)([Object(r.g)()],k.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],k.prototype,"config",void 0),Object(s.b)([Object(r.g)()],k.prototype,"showSecondary",void 0),customElements.define("hui-generic-entity-row",k);let $=class extends r.a{setConfig(t){if(!t||!t.entity)throw new Error("Invalid Configuration: 'entity' required");this._config=t}shouldUpdate(t){return j(this,t)}render(){if(!this.hass||!this._config)return r.f``;const t=this.hass.states[this._config.entity];return t?r.f`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        <ha-climate-state
          .hass="${this.hass}"
          .stateObj="${t}"
        ></ha-climate-state>
      </hui-generic-entity-row>
    `:r.f`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}static get styles(){return r.c`
      ha-climate-state {
        text-align: right;
      }
    `}};Object(s.b)([Object(r.g)()],$.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],$.prototype,"_config",void 0),$=Object(s.b)([Object(r.d)("hui-climate-entity-row")],$);i(289),i(281);var C=i(233);let E=class extends r.a{setConfig(t){if(!t)throw new Error("Configuration error");this._config=t}shouldUpdate(t){return j(this,t)}render(){if(!this._config||!this.hass)return r.f``;const t=this.hass.states[this._config.entity];return t?r.f`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        ${Object(C.b)(t)?r.f`
              <ha-cover-tilt-controls
                .hass="${this.hass}"
                .stateObj="${t}"
              ></ha-cover-tilt-controls>
            `:r.f`
              <ha-cover-controls
                .hass="${this.hass}"
                .stateObj="${t}"
              ></ha-cover-controls>
            `}
      </hui-generic-entity-row>
    `:r.f`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}static get styles(){return r.c`
      ha-cover-controls,
      ha-cover-tilt-controls {
        margin-right: -0.57em;
      }
    `}};Object(s.b)([Object(r.g)()],E.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],E.prototype,"_config",void 0),E=Object(s.b)([Object(r.d)("hui-cover-entity-row")],E);i(231);var S=i(223);let z=class extends r.a{setConfig(t){if(!t)throw new Error("Configuration error");this._config=t}shouldUpdate(t){return j(this,t)}render(){if(!this._config||!this.hass)return r.f``;const t=this.hass.states[this._config.entity];return t?r.f`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        ${this._computeCanToggle(t.attributes.entity_id)?r.f`
              <ha-entity-toggle
                .hass="${this.hass}"
                .stateObj="${t}"
              ></ha-entity-toggle>
            `:r.f`
              <div>
                ${Object(S.a)(this.hass.localize,t,this.hass.language)}
              </div>
            `}
      </hui-generic-entity-row>
    `:r.f`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}_computeCanToggle(t){return t.some(t=>f.f.has(t.split(".",1)[0]))}};Object(s.b)([Object(r.g)()],z.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],z.prototype,"_config",void 0),z=Object(s.b)([Object(r.d)("hui-group-entity-row")],z);i(400),i(93);let T=class extends r.a{constructor(){super(...arguments),this.disabled=!1}static get styles(){return r.c`
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
    `}render(){return r.f`
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
    `}_formatYear(){const t=this.shadowRoot.getElementById("year");this.year=t.value}_formatMonth(){const t=this.shadowRoot.getElementById("month");this.month=("0"+t.value).slice(-2)}_formatDay(){const t=this.shadowRoot.getElementById("day");this.day=("0"+t.value).slice(-2)}get value(){return`${this.year}-${this.month}-${this.day}`}};Object(s.b)([Object(r.g)()],T.prototype,"year",void 0),Object(s.b)([Object(r.g)()],T.prototype,"month",void 0),Object(s.b)([Object(r.g)()],T.prototype,"day",void 0),Object(s.b)([Object(r.g)({type:Boolean})],T.prototype,"disabled",void 0),T=Object(s.b)([Object(r.d)("ha-date-input")],T);let I=class extends r.a{setConfig(t){if(!t)throw new Error("Configuration error");this._config=t}shouldUpdate(t){return j(this,t)}render(){if(!this._config||!this.hass)return r.f``;const t=this.hass.states[this._config.entity];return t?r.f`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        ${t.attributes.has_date?r.f`
              <ha-date-input
                .year=${t.attributes.year}
                .month=${("0"+t.attributes.month).slice(-2)}
                .day=${("0"+t.attributes.day).slice(-2)}
                @change=${this._selectedValueChanged}
                @click=${this._stopEventPropagation}
              ></ha-date-input>
              ${t.attributes.has_time?",":""}
            `:""}
        ${t.attributes.has_time?r.f`
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
    `:r.f`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}_stopEventPropagation(t){t.stopPropagation()}get _timeInputEl(){return this.shadowRoot.querySelector("paper-time-input")}get _dateInputEl(){return this.shadowRoot.querySelector("ha-date-input")}_selectedValueChanged(t){const e=this.hass.states[this._config.entity],i=null!==this._timeInputEl?this._timeInputEl.value.trim()+":00":void 0,a=null!==this._dateInputEl?this._dateInputEl.value:void 0;i!==e.state&&((t,e,i,a)=>{const n={entity_id:e,time:i,date:a};t.callService(e.split(".",1)[0],"set_datetime",n)})(this.hass,e.entity_id,i,a),t.target.blur()}};Object(s.b)([Object(r.g)()],I.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],I.prototype,"_config",void 0),I=Object(s.b)([Object(r.d)("hui-input-datetime-entity-row")],I);i(290);const A=(t,e,i)=>t.callService(e.split(".",1)[0],"set_value",{value:i,entity_id:e});let P=class extends r.a{setConfig(t){if(!t)throw new Error("Configuration error");this._config=t}connectedCallback(){super.connectedCallback(),this._updated&&!this._loaded&&this._initialLoad()}firstUpdated(){this._updated=!0,this.isConnected&&!this._loaded&&this._initialLoad()}shouldUpdate(t){return j(this,t)}render(){if(!this._config||!this.hass)return r.f``;const t=this.hass.states[this._config.entity];return t?r.f`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        <div>
          ${"slider"===t.attributes.mode?r.f`
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
              `:r.f`
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
    `:r.f`
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
    `}async _initialLoad(){this._loaded=!0,await this.updateComplete;const t=this.shadowRoot.querySelector(".state");t&&this.parentElement&&(t.hidden=this.parentElement.clientWidth<=350)}get _inputElement(){return this.shadowRoot.getElementById("input")}_selectedValueChanged(){const t=this._inputElement,e=this.hass.states[this._config.entity];t.value!==e.state&&A(this.hass,e.entity_id,t.value)}};Object(s.b)([Object(r.g)()],P.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],P.prototype,"_config",void 0),P=Object(s.b)([Object(r.d)("hui-input-number-entity-row")],P);i(143),i(144),i(224);var M=i(291),L=i(292);let D=class extends r.a{setConfig(t){if(!t||!t.entity)throw new Error("Invalid Configuration: 'entity' required");this._config=t}shouldUpdate(t){return j(this,t)}render(){if(!this.hass||!this._config)return r.f``;const t=this.hass.states[this._config.entity];return t?r.f`
      <state-badge .stateObj="${t}"></state-badge>
      <ha-paper-dropdown-menu
        .label=${this._config.name||Object(w.a)(t)}
        .value=${t.state}
        @iron-select=${this._selectedChanged}
        @click=${L.a}
      >
        <paper-listbox slot="dropdown-content">
          ${t.attributes.options.map(t=>r.f`
              <paper-item>${t}</paper-item>
            `)}
        </paper-listbox>
      </ha-paper-dropdown-menu>
    `:r.f`
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
    `}_selectedChanged(t){const e=this.hass.states[this._config.entity],i=t.target.selectedItem.innerText.trim();i!==e.state&&(Object(b.a)("light"),Object(M.a)(this.hass,e.entity_id,i))}};Object(s.b)([Object(r.g)()],D.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],D.prototype,"_config",void 0),D=Object(s.b)([Object(r.d)("hui-input-select-entity-row")],D);let B=class extends r.a{setConfig(t){if(!t)throw new Error("Configuration error");this._config=t}shouldUpdate(t){return j(this,t)}render(){if(!this._config||!this.hass)return r.f``;const t=this.hass.states[this._config.entity];return t?r.f`
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
    `:r.f`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}get _inputEl(){return this.shadowRoot.querySelector("paper-input")}_selectedValueChanged(t){const e=this._inputEl,i=this.hass.states[this._config.entity];e.value!==i.state&&A(this.hass,i.entity_id,e.value),t.target.blur()}};Object(s.b)([Object(r.g)()],B.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],B.prototype,"_config",void 0),B=Object(s.b)([Object(r.d)("hui-input-text-entity-row")],B);let N=class extends r.a{setConfig(t){if(!t)throw new Error("Configuration error");this._config=t}shouldUpdate(t){return j(this,t)}render(){if(!this._config||!this.hass)return r.f``;const t=this.hass.states[this._config.entity];return t?r.f`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        <mwc-button @click="${this._callService}">
          ${"locked"===t.state?this.hass.localize("ui.card.lock.unlock"):this.hass.localize("ui.card.lock.lock")}
        </mwc-button>
      </hui-generic-entity-row>
    `:r.f`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}static get styles(){return r.c`
      mwc-button {
        margin-right: -0.57em;
      }
    `}_callService(t){t.stopPropagation();const e=this.hass.states[this._config.entity];this.hass.callService("lock","locked"===e.state?"unlock":"lock",{entity_id:e.entity_id})}};Object(s.b)([Object(r.g)()],N.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],N.prototype,"_config",void 0),N=Object(s.b)([Object(r.d)("hui-lock-entity-row")],N);i(108);var R=i(217),H=i(306);let V=class extends r.a{setConfig(t){if(!t||!t.entity)throw new Error("Invalid Configuration: 'entity' required");this._config=t}shouldUpdate(t){return j(this,t)}render(){if(!this.hass||!this._config)return r.f``;const t=this.hass.states[this._config.entity];return t?r.f`
      <hui-generic-entity-row
        .hass="${this.hass}"
        .config="${this._config}"
        .showSecondary="false"
      >
        ${H.a.includes(t.state)?r.f`
              <div>
                ${this.hass.localize(`state.media_player.${t.state}`)||this.hass.localize(`state.default.${t.state}`)||t.state}
              </div>
            `:r.f`
              <div class="controls">
                ${"playing"===t.state||Object(R.a)(t,H.b)?r.f`
                      <paper-icon-button
                        icon="${this._computeControlIcon(t)}"
                        @click="${this._playPause}"
                      ></paper-icon-button>
                    `:""}
                ${Object(R.a)(t,H.c)?r.f`
                      <paper-icon-button
                        icon="hass:skip-next"
                        @click="${this._nextTrack}"
                      ></paper-icon-button>
                    `:""}
              </div>
              <div slot="secondary">${this._computeMediaTitle(t)}</div>
            `}
      </hui-generic-entity-row>
    `:r.f`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}static get styles(){return r.c`
      .controls {
        white-space: nowrap;
      }
    `}_computeControlIcon(t){return"playing"!==t.state?"hass:play":Object(R.a)(t,H.d)?"hass:pause":"hass:stop"}_computeMediaTitle(t){let e,i;switch(t.attributes.media_content_type){case"music":e=t.attributes.media_artist,i=t.attributes.media_title;break;case"tvshow":e=t.attributes.media_series_title,i=t.attributes.media_title;break;default:e=t.attributes.media_title||t.attributes.app_name||t.state,i=""}return e&&i?`${e}: ${i}`:e||i||""}_playPause(t){t.stopPropagation(),this.hass.callService("media_player","media_play_pause",{entity_id:this._config.entity})}_nextTrack(t){t.stopPropagation(),this.hass.callService("media_player","media_next_track",{entity_id:this._config.entity})}};Object(s.b)([Object(r.g)()],V.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],V.prototype,"_config",void 0),V=Object(s.b)([Object(r.d)("hui-media-player-entity-row")],V);let U=class extends r.a{setConfig(t){if(!t)throw new Error("Configuration error");this._config=t}shouldUpdate(t){return j(this,t)}render(){if(!this._config||!this.hass)return r.f``;const t=this.hass.states[this._config.entity];return t?r.f`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        ${t.attributes.can_cancel?r.f`
              <ha-entity-toggle
                .hass="${this.hass}"
                .stateObj="${t}"
              ></ha-entity-toggle>
            `:r.f`
              <mwc-button @click="${this._callService}">
                ${this.hass.localize("ui.card.scene.activate")}
              </mwc-button>
            `}
      </hui-generic-entity-row>
    `:r.f`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}static get styles(){return r.c`
      mwc-button {
        margin-right: -0.57em;
      }
    `}_callService(t){t.stopPropagation(),this.hass.callService("scene","turn_on",{entity_id:this._config.entity})}};Object(s.b)([Object(r.g)()],U.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],U.prototype,"_config",void 0),U=Object(s.b)([Object(r.d)("hui-scene-entity-row")],U);let q=class extends r.a{setConfig(t){if(!t)throw new Error("Configuration error");this._config=t}shouldUpdate(t){return j(this,t)}render(){if(!this._config||!this.hass)return r.f``;const t=this.hass.states[this._config.entity];return t?r.f`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        ${t.attributes.can_cancel?r.f`
              <ha-entity-toggle
                .hass="${this.hass}"
                .stateObj="${t}"
              ></ha-entity-toggle>
            `:r.f`
              <mwc-button @click="${this._callService}">
                ${this.hass.localize("ui.card.script.execute")}
              </mwc-button>
            `}
      </hui-generic-entity-row>
    `:r.f`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}static get styles(){return r.c`
      mwc-button {
        margin-right: -0.57em;
      }
    `}_callService(t){t.stopPropagation(),this.hass.callService("script","turn_on",{entity_id:this._config.entity})}};Object(s.b)([Object(r.g)()],q.prototype,"_config",void 0),q=Object(s.b)([Object(r.d)("hui-script-entity-row")],q);var F=i(240),K=i(200),W=i(214),X=i(235);const Y={date:F.a,datetime:K.a,time:W.a},Z=["relative","total"];let Q=class extends r.a{connectedCallback(){super.connectedCallback(),this._connected=!0,this._startInterval()}disconnectedCallback(){super.disconnectedCallback(),this._connected=!1,this._clearInterval()}render(){if(!this.ts||!this.hass)return r.f``;if(isNaN(this.ts.getTime()))return r.f`
        Invalid date
      `;const t=this._format;return Z.includes(t)?r.f`
        ${this._relative}
      `:t in Y?r.f`
        ${Y[t](this.ts,this.hass.language)}
      `:r.f`
      Invalid format
    `}updated(t){super.updated(t),t.has("format")&&this._connected&&(Z.includes("relative")?this._startInterval():this._clearInterval())}get _format(){return this.format||"relative"}_startInterval(){this._clearInterval(),this._connected&&Z.includes(this._format)&&(this._updateRelative(),this._interval=window.setInterval(()=>this._updateRelative(),1e3))}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=void 0)}_updateRelative(){this.ts&&this.hass.localize&&(this._relative="relative"===this._format?Object(X.a)(this.ts,this.hass.localize):this._relative=Object(X.a)(new Date,this.hass.localize,{compareTime:this.ts,includeTense:!1}))}};Object(s.b)([Object(r.g)()],Q.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],Q.prototype,"ts",void 0),Object(s.b)([Object(r.g)()],Q.prototype,"format",void 0),Object(s.b)([Object(r.g)()],Q.prototype,"_relative",void 0),Q=Object(s.b)([Object(r.d)("hui-timestamp-display")],Q);let J=class extends r.a{setConfig(t){if(!t)throw new Error("Configuration error");this._config=t}shouldUpdate(t){return j(this,t)}render(){if(!this._config||!this.hass)return r.f``;const t=this.hass.states[this._config.entity];return t?r.f`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        <div>
          ${"timestamp"===t.attributes.device_class&&"unavailable"!==t.state?r.f`
                <hui-timestamp-display
                  .hass="${this.hass}"
                  .ts="${new Date(t.state)}"
                  .format="${this._config.format}"
                ></hui-timestamp-display>
              `:Object(S.a)(this.hass.localize,t,this.hass.language)}
        </div>
      </hui-generic-entity-row>
    `:r.f`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}static get styles(){return r.c`
      div {
        text-align: right;
      }
    `}};Object(s.b)([Object(r.g)()],J.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],J.prototype,"_config",void 0),J=Object(s.b)([Object(r.d)("hui-sensor-entity-row")],J);let G=class extends r.a{setConfig(t){if(!t)throw new Error("Configuration error");this._config=t}shouldUpdate(t){return j(this,t)}render(){if(!this._config||!this.hass)return r.f``;const t=this.hass.states[this._config.entity];return t?r.f`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        <div>
          ${Object(S.a)(this.hass.localize,t,this.hass.language)}
        </div>
      </hui-generic-entity-row>
    `:r.f`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}static get styles(){return r.c`
      div {
        text-align: right;
      }
    `}};Object(s.b)([Object(r.g)()],G.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],G.prototype,"_config",void 0),G=Object(s.b)([Object(r.d)("hui-text-entity-row")],G);var tt=i(269),et=i(262);let it=class extends r.a{setConfig(t){if(!t)throw new Error("Configuration error");this._config=t}disconnectedCallback(){super.disconnectedCallback(),this._clearInterval()}connectedCallback(){if(super.connectedCallback(),this._config&&this._config.entity){const t=this.hass.states[this._config.entity];t&&this._startInterval(t)}}render(){if(!this._config||!this.hass)return r.f``;const t=this.hass.states[this._config.entity];return t?r.f`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        <div>${this._computeDisplay(t)}</div>
      </hui-generic-entity-row>
    `:r.f`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}shouldUpdate(t){return!!t.has("_timeRemaining")||j(this,t)}updated(t){if(super.updated(t),t.has("hass")){const e=this.hass.states[this._config.entity],i=t.get("hass");(i?i.states[this._config.entity]:void 0)!==e?this._startInterval(e):e||this._clearInterval()}}_clearInterval(){this._interval&&(window.clearInterval(this._interval),this._interval=void 0)}_startInterval(t){this._clearInterval(),this._calculateRemaining(t),"active"===t.state&&(this._interval=window.setInterval(()=>this._calculateRemaining(t),1e3))}_calculateRemaining(t){this._timeRemaining=Object(tt.a)(t)}_computeDisplay(t){if(!t)return null;if("idle"===t.state||0===this._timeRemaining)return this.hass.localize("state.timer."+t.state);let e=Object(et.a)(this._timeRemaining||0);return"paused"===t.state&&(e+=` (${this.hass.localize("state.timer.paused")})`),e}};Object(s.b)([Object(r.g)()],it.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],it.prototype,"_config",void 0),Object(s.b)([Object(r.g)()],it.prototype,"_timeRemaining",void 0),it=Object(s.b)([Object(r.d)("hui-timer-entity-row")],it);let at=class extends r.a{setConfig(t){if(!t)throw new Error("Configuration error");this._config=t}shouldUpdate(t){return j(this,t)}render(){if(!this._config||!this.hass)return r.f``;const t=this.hass.states[this._config.entity];return t?r.f`
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        ${"on"===t.state||"off"===t.state?r.f`
              <ha-entity-toggle
                .hass="${this.hass}"
                .stateObj="${t}"
              ></ha-entity-toggle>
            `:r.f`
              <div>
                ${Object(S.a)(this.hass.localize,t,this.hass.language)}
              </div>
            `}
      </hui-generic-entity-row>
    `:r.f`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}};Object(s.b)([Object(r.g)()],at.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],at.prototype,"_config",void 0),at=Object(s.b)([Object(r.d)("hui-toggle-entity-row")],at);i(85);let nt=class extends r.a{setConfig(t){if(!t||!t.name||!t.service)throw new Error("Error in card configuration.");this._config=Object.assign({icon:"hass:remote",action_name:"Run"},t)}render(){return this._config?r.f`
      <ha-icon .icon="${this._config.icon}"></ha-icon>
      <div class="flex">
        <div>${this._config.name}</div>
        <mwc-button @click="${this._callService}"
          >${this._config.action_name}</mwc-button
        >
      </div>
    `:r.f``}static get styles(){return r.c`
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
    `}_callService(){((t,e)=>{const i=t.entity,[a,n]=t.service.split(".",2),s=Object.assign({entity_id:i},t.service_data);e.callService(a,n,s)})(this._config,this.hass)}};Object(s.b)([Object(r.g)()],nt.prototype,"_config",void 0),nt=Object(s.b)([Object(r.d)("hui-call-service-row")],nt);let st=class extends r.a{setConfig(t){if(!t)throw new Error("Error in card configuration.");this._config=Object.assign({style:{height:"1px","background-color":"var(--secondary-text-color)"}},t)}render(){if(!this._config)return r.f``;const t=document.createElement("div");return Object.keys(this._config.style).forEach(e=>{t.style.setProperty(e,this._config.style[e])}),r.f`
      ${t}
    `}};Object(s.b)([Object(r.g)()],st.prototype,"_config",void 0),st=Object(s.b)([Object(r.d)("hui-divider-row")],st);let rt=class extends r.a{setConfig(t){if(!t)throw new Error("Error in card configuration.");this._config=t}render(){return this._config?r.f`
      <div class="divider"></div>
      ${this._config.label?r.f`
            <div class="label">${this._config.label}</div>
          `:r.f``}
    `:r.f``}static get styles(){return r.c`
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
    `}};Object(s.b)([Object(r.g)()],rt.prototype,"_config",void 0),rt=Object(s.b)([Object(r.d)("hui-section-row")],rt);let ot=class extends r.a{setConfig(t){if(!t||!t.url)throw new Error("Invalid Configuration: 'url' required");this._config=Object.assign({icon:"hass:link",name:t.url},t)}render(){return this._config?r.f`
      <a
        href=${this._config.url}
        target=${-1!==this._config.url.indexOf("://")?"_blank":""}
      >
        <ha-icon .icon="${this._config.icon}"></ha-icon>
        <div>${this._config.name}</div>
      </a>
    `:r.f``}static get styles(){return r.c`
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
    `}};Object(s.b)([Object(r.g)()],ot.prototype,"_config",void 0),ot=Object(s.b)([Object(r.d)("hui-weblink-row")],ot);var ct=i(462);let lt=class extends r.a{constructor(){super(...arguments),this._noHTTPS=!1}setConfig(t){if(!t||void 0===t.view||null===t.view)throw new Error("Invalid Configuration: 'view' required");this._config=Object.assign({icon:"hass:television",name:"ioBroker Cast"},t)}render(){if(!this._config)return r.f``;const t=this._castManager&&this._castManager.status&&this._config.view===this._castManager.status.lovelacePath;return r.f`
      <ha-icon .icon="${this._config.icon}"></ha-icon>
      <div class="flex">
        <div class="name">${this._config.name}</div>
        ${this._noHTTPS?r.f`
              Cast requires HTTPS
            `:void 0===this._castManager?r.f``:null===this._castManager?r.f`
              Cast API unavailable
            `:"NO_DEVICES_AVAILABLE"===this._castManager.castState?r.f`
              No devices found
            `:r.f`
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
    `}firstUpdated(t){super.firstUpdated(t),"http:"===location.protocol&&"localhost"!==location.hostname&&(this._noHTTPS=!0),i.e(147).then(i.bind(null,754)).then(({getCastManager:t})=>t(this.hass.auth).then(t=>{this._castManager=t,t.addEventListener("connection-changed",()=>{this.requestUpdate()}),t.addEventListener("state-changed",()=>{this.requestUpdate()})},()=>{this._castManager=null}))}updated(t){super.updated(t),this._config&&this._config.hide_if_unavailable&&(this.style.display=this._castManager&&"NO_DEVICES_AVAILABLE"!==this._castManager.castState?"":"none")}async _sendLovelace(){await Object(ct.c)(this._castManager,this.hass.auth),Object(ct.b)(this._castManager,this._config.view)}static get styles(){return r.c`
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
    `}};Object(s.b)([Object(r.g)()],lt.prototype,"_config",void 0),Object(s.b)([Object(r.g)()],lt.prototype,"_castManager",void 0),Object(s.b)([Object(r.g)()],lt.prototype,"_noHTTPS",void 0),lt=Object(s.b)([Object(r.d)("hui-cast-row")],lt);const ht=new Set(["call-service","divider","section","weblink","cast","select"]),dt={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},pt=(t,e)=>{const i=document.createElement(t);try{i.setConfig(Object(a.a)(e))}catch(n){return console.error(t,n),ut(n.message,e)}return i},ut=(t,e)=>Object(y.b)(Object(y.a)(t,e)),gt=t=>{let e;if(!t||"object"!=typeof t||!t.entity&&!t.type)return ut("Invalid config given.",t);const i=t.type||"default";if(ht.has(i))return pt(`hui-${i}-row`,t);if(i.startsWith("custom:")){if(e=i.substr("custom:".length),customElements.get(e))return pt(e,t);const a=ut(`Custom element doesn't exist: ${e}.`,t),s=(t=>(t.style.display="None",window.setTimeout(()=>{t.style.display=""},2e3)))(a);return customElements.whenDefined(e).then(()=>{clearTimeout(s),Object(n.a)(a,"ll-rebuild")}),a}if(!t.entity)return ut("Invalid config given.",t);const a=t.entity.split(".",1)[0];return pt(e=`hui-${dt[a]||"text"}-entity-row`,t)};var ft=i(100);let mt=class extends r.a{static async getConfigElement(){return await Promise.all([i.e(3),i.e(4),i.e(111),i.e(48)]).then(i.bind(null,684)),document.createElement("hui-entities-card-editor")}static getStubConfig(){return{entities:[]}}set hass(t){this._hass=t,this.shadowRoot.querySelectorAll("#states > div > *").forEach(e=>{e.hass=t});const e=this.shadowRoot.querySelector("hui-entities-toggle");e&&(e.hass=t)}getCardSize(){return this._config?(this._config.title?1:0)+this._config.entities.length:0}setConfig(t){const e=Object(_.a)(t.entities);this._config=Object.assign({theme:"default"},t),this._configEntities=e}updated(t){super.updated(t),this._hass&&this._config&&Object(ft.a)(this,this._hass.themes,this._config.theme)}render(){if(!this._config||!this._hass)return r.f``;const{show_header_toggle:t,title:e}=this._config;return r.f`
      <ha-card>
        ${e||t?r.f`
              <div class="card-header">
                <div class="name">${e}</div>
                ${!1===t?r.f``:r.f`
                      <hui-entities-toggle
                        .hass="${this._hass}"
                        .entities="${this._configEntities.map(t=>t.entity)}"
                      ></hui-entities-toggle>
                    `}
              </div>
            `:r.f``}
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
    `}renderEntity(t){const e=gt(t);return this._hass&&(e.hass=this._hass),t.entity&&!f.d.includes(Object(m.a)(t.entity))&&(e.classList.add("state-card-dialog"),e.addEventListener("click",()=>this._handleClick(t))),r.f`
      <div>${e}</div>
    `}_handleClick(t){const e=t.entity;Object(n.a)(this,"hass-more-info",{entityId:e})}};Object(s.b)([Object(r.g)()],mt.prototype,"_config",void 0),mt=Object(s.b)([Object(r.d)("hui-entities-card")],mt);var bt=i(293),vt=i(14),_t=i(74);class yt extends vt.b{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.interactionNode=this}connectedCallback(){if(this.interactionNode===this){const t=this.parentNode;t instanceof HTMLElement&&(this.interactionNode=t)}super.connectedCallback()}render(){const t={"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--accent":this.accent},{disabled:e,unbounded:i,active:a,interactionNode:n}=this,s={disabled:e,unbounded:i,interactionNode:n};return void 0!==a&&(s.active=a),vt.g`
      <div .ripple="${Object(_t.a)(s)}"
          class="mdc-ripple-surface ${Object(vt.d)(t)}"></div>`}}Object(s.b)([Object(vt.i)({type:Boolean})],yt.prototype,"primary",void 0),Object(s.b)([Object(vt.i)({type:Boolean})],yt.prototype,"active",void 0),Object(s.b)([Object(vt.i)({type:Boolean})],yt.prototype,"accent",void 0),Object(s.b)([Object(vt.i)({type:Boolean})],yt.prototype,"unbounded",void 0),Object(s.b)([Object(vt.i)({type:Boolean})],yt.prototype,"disabled",void 0),Object(s.b)([Object(vt.i)({attribute:!1})],yt.prototype,"interactionNode",void 0);const wt=vt.e`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000}.mdc-ripple-surface:hover::before{opacity:.04}.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before,.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-ripple-surface--primary:hover::before{opacity:.04}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before,.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-ripple-surface--accent:hover::before{opacity:.04}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before,.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface{pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0}`;let xt=class extends yt{};xt.styles=wt,xt=Object(s.b)([Object(vt.f)("mwc-ripple")],xt);var Ot=i(305),kt=i(192),jt=i(180),$t=i(11);const Ct="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;customElements.define("long-press",class extends HTMLElement{constructor(){super(),this.holdTime=500,this.ripple=document.createElement("mwc-ripple"),this.timer=void 0,this.held=!1,this.cooldownStart=!1,this.cooldownEnd=!1}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Ct?"100px":"50px",height:Ct?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(t){if(t.longPress)return;t.longPress=!0,t.addEventListener("contextmenu",t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1});const e=t=>{if(this.cooldownStart)return;let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(e,i),this.held=!0},this.holdTime),this.cooldownStart=!0,window.setTimeout(()=>this.cooldownStart=!1,100)},i=e=>{this.cooldownEnd||["touchend","touchcancel"].includes(e.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?t.dispatchEvent(new Event("ha-hold")):t.dispatchEvent(new Event("ha-click")),this.cooldownEnd=!0,window.setTimeout(()=>this.cooldownEnd=!1,100))};t.addEventListener("touchstart",e,{passive:!0}),t.addEventListener("touchend",i),t.addEventListener("touchcancel",i),window.navigator.userAgent.match(/iPhone OS 13_/)||(t.addEventListener("mousedown",e,{passive:!0}),t.addEventListener("click",i))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}});const Et=t=>{const e=(()=>{const t=document.body;if(t.querySelector("long-press"))return t.querySelector("long-press");const e=document.createElement("long-press");return t.appendChild(e),e})();e&&e.bind(t)},St=Object($t.f)(()=>t=>{Et(t.committer.element)});var zt=i(99);const Tt=(t,e)=>{return((t,e,i=!0)=>{const a=Object(m.a)(e),n="group"===a?"homeassistant":a;let s;switch(a){case"lock":s=i?"unlock":"lock";break;case"cover":s=i?"open_cover":"close_cover";break;default:s=i?"turn_on":"turn_off"}return t.callService(n,s,{entity_id:e})})(t,e,f.i.includes(t.states[e].state))},It=(t,e,i,a)=>{let s;switch(a&&i.hold_action?s=i.hold_action:!a&&i.tap_action&&(s=i.tap_action),s||(s={action:"more-info"}),s.action){case"more-info":(i.entity||i.camera_image)&&Object(n.a)(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":s.navigation_path&&Object(zt.a)(t,s.navigation_path);break;case"toggle":i.entity&&Tt(e,i.entity);break;case"call-service":{if(!s.service)return void Object(b.a)("failure");const[t,i]=s.service.split(".",2);e.callService(t,i,s.service_data)}}Object(b.a)("light")};let At=class extends r.a{static async getConfigElement(){return await Promise.all([i.e(3),i.e(4),i.e(10),i.e(49)]).then(i.bind(null,685)),document.createElement("hui-entity-button-card-editor")}static getStubConfig(){return{tap_action:{action:"toggle"},hold_action:{action:"more-info"},show_icon:!0,show_name:!0}}getCardSize(){return 2}setConfig(t){if(!Object(Ot.a)(t.entity))throw new Error("Invalid Entity");this._config=Object.assign({theme:"default",hold_action:{action:"more-info"},show_icon:!0,show_name:!0},t),f.f.has(Object(m.a)(t.entity))?this._config=Object.assign({tap_action:{action:"toggle"}},this._config):this._config=Object.assign({tap_action:{action:"more-info"}},this._config)}shouldUpdate(t){if(t.has("_config"))return!0;const e=t.get("hass");return!e||e.states[this._config.entity]!==this.hass.states[this._config.entity]}render(){if(!this._config||!this.hass)return r.f``;const t=this.hass.states[this._config.entity];return t?r.f`
      <ha-card
        @ha-click="${this._handleTap}"
        @ha-hold="${this._handleHold}"
        .longPress="${St()}"
      >
        ${this._config.show_icon?r.f`
              <ha-icon
                data-domain="${Object(jt.a)(t)}"
                data-state="${t.state}"
                .icon="${this._config.icon||Object(kt.a)(t)}"
                style="${Object(bt.a)({filter:this._computeBrightness(t),color:this._computeColor(t),height:this._config.icon_height?this._config.icon_height:"auto"})}"
              ></ha-icon>
            `:""}
        ${this._config.show_name?r.f`
              <span>
                ${this._config.name||Object(w.a)(t)}
              </span>
            `:""}
        <mwc-ripple></mwc-ripple>
      </ha-card>
    `:r.f`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}updated(t){if(super.updated(t),!this._config||!this.hass)return;const e=t.get("hass");e&&e.themes===this.hass.themes||Object(ft.a)(this,this.hass.themes,this._config.theme)}static get styles(){return r.c`
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
    `}_computeBrightness(t){if(!t.attributes.brightness)return"";return`brightness(${(t.attributes.brightness+245)/5}%)`}_computeColor(t){if(!t.attributes.hs_color)return"";const[e,i]=t.attributes.hs_color;return i<=10?"":`hsl(${e}, 100%, ${100-i/2}%)`}_handleTap(){It(this,this.hass,this._config,!1)}_handleHold(){It(this,this.hass,this._config,!0)}};Object(s.b)([Object(r.g)()],At.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],At.prototype,"_config",void 0),At=Object(s.b)([Object(r.d)("hui-entity-button-card")],At);customElements.define("hui-entity-filter-card",class extends HTMLElement{getCardSize(){return this._element?this._element.getCardSize():1}setConfig(t){if(!t.state_filter||!Array.isArray(t.state_filter))throw new Error("Incorrect filter config.");this._config=t,this._configEntities=void 0,this._baseCardConfig=Object.assign({type:"entities",entities:[]},this._config.card),this.lastChild&&(this.removeChild(this.lastChild),this._element=void 0)}set hass(t){if(!t||!this._config)return;if(!this.haveEntitiesChanged(t))return void(this._hass=t);this._hass=t,this._configEntities||(this._configEntities=Object(_.a)(this._config.entities));const e=this._configEntities.filter(e=>{const i=t.states[e.entity];return i&&this._config.state_filter.includes(i.state)});if(0===e.length&&!1===this._config.show_empty)return void(this.style.display="none");const i=this._cardElement();if(i){if("HUI-ERROR-CARD"!==i.tagName){this._oldEntities&&e.length===this._oldEntities.length&&e.every((t,e)=>t===this._oldEntities[e])||(this._oldEntities=e,i.setConfig(Object.assign(Object.assign({},this._baseCardConfig),{entities:e}))),i.isPanel=this.isPanel,i.hass=t}this.lastChild||this.appendChild(i),this.style.display="block"}}haveEntitiesChanged(t){if(!this._hass)return!0;if(!this._configEntities)return!0;for(const e of this._configEntities)if(this._hass.states[e.entity]!==t.states[e.entity]||this._hass.localize!==t.localize)return!0;return!1}_cardElement(){if(!this._element&&this._config){const t=Ne(this._baseCardConfig);this._element=t}return this._element}});let Pt=class extends r.a{render(){return r.f`
      <ha-icon icon="hass:alert" .title="${this.label}"></ha-icon>
    `}static get styles(){return r.c`
      ha-icon {
        color: #fce588;
      }
    `}};Object(s.b)([Object(r.g)()],Pt.prototype,"label",void 0),Pt=Object(s.b)([Object(r.d)("hui-warning-element")],Pt);let Mt=class extends r.a{static async getConfigElement(){return await Promise.all([i.e(3),i.e(4),i.e(113),i.e(51)]).then(i.bind(null,686)),document.createElement("hui-glance-card-editor")}static getStubConfig(){return{entities:[]}}getCardSize(){return(this._config.title?1:0)+Math.ceil(this._configEntities.length/5)}setConfig(t){this._config=Object.assign({theme:"default"},t);const e=Object(_.a)(t.entities);for(const a of e)if(a.tap_action&&"call-service"===a.tap_action.action&&!a.tap_action.service||a.hold_action&&"call-service"===a.hold_action.action&&!a.hold_action.service)throw new Error('Missing required property "service" when tap_action or hold_action is call-service');const i=t.columns||Math.min(t.entities.length,5);this.style.setProperty("--glance-column-width",`${100/i}%`),this._configEntities=e,this.hass&&this.requestUpdate()}shouldUpdate(t){if(t.has("_config"))return!0;const e=t.get("hass");if(e&&this._configEntities){for(const t of this._configEntities)if(e.states[t.entity]!==this.hass.states[t.entity])return!0;return!1}return!0}render(){if(!this._config||!this.hass)return r.f``;const{title:t}=this._config;return r.f`
      <ha-card .header="${t}">
        <div class="${Object(o.a)({entities:!0,"no-header":!t})}">
          ${this._configEntities.map(t=>this.renderEntity(t))}
        </div>
      </ha-card>
    `}updated(t){if(super.updated(t),!this._config||!this.hass)return;const e=t.get("hass");e&&e.themes===this.hass.themes||Object(ft.a)(this,this.hass.themes,this._config.theme)}static get styles(){return r.c`
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
    `}renderEntity(t){const e=this.hass.states[t.entity];return e?r.f`
      <div
        class="entity"
        .entityConf="${t}"
        @ha-click="${this._handleTap}"
        @ha-hold="${this._handleHold}"
        .longPress="${St()}"
      >
        ${!1!==this._config.show_name?r.f`
              <div class="name">
                ${"name"in t?t.name:Object(w.a)(e)}
              </div>
            `:""}
        ${!1!==this._config.show_icon?r.f`
              <state-badge
                .hass=${this.hass}
                .stateObj=${e}
                .overrideIcon=${t.icon}
                .overrideImage=${t.image}
              ></state-badge>
            `:""}
        ${!1!==this._config.show_state?r.f`
              <div>
                ${t.show_last_changed?Object(X.a)(new Date(e.last_changed),this.hass.localize):Object(S.a)(this.hass.localize,e,this.hass.language)}
              </div>
            `:""}
      </div>
    `:r.f`
        <hui-warning-element
          label=${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",t.entity)}
        ></hui-warning-element>
      `}_handleTap(t){const e=t.currentTarget.entityConf;It(this,this.hass,e,!1)}_handleHold(t){const e=t.currentTarget.entityConf;It(this,this.hass,e,!0)}};Object(s.b)([Object(r.g)()],Mt.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],Mt.prototype,"_config",void 0),Mt=Object(s.b)([Object(r.d)("hui-glance-card")],Mt);var Lt=i(3),Dt=i(30);i(267),i(268);customElements.define("hui-history-graph-card",class extends Dt.a{static getStubConfig(){return{entities:[]}}static get template(){return Lt.a`
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
    `}static get properties(){return{hass:Object,_config:Object,_names:Object,_entities:Array,_stateHistory:Object,_stateHistoryLoading:Boolean,_cacheConfig:Object}}getCardSize(){return 4}setConfig(t){const e=Object(_.a)(t.entities);this._config=t;const i=[],a={};e.forEach(t=>{i.push(t.entity),t.name&&(a[t.entity]=t.name)}),this.setProperties({_cacheConfig:{cacheKey:i.join(),hoursToShow:t.hours_to_show||24,refresh:t.refresh_interval||0},_entities:i,_names:a})}});class Bt extends r.a{static get properties(){return{_config:{}}}set hass(t){if(this._hass=t,this._cards)for(const e of this._cards)e.hass=this._hass}setConfig(t){if(!t||!t.cards||!Array.isArray(t.cards))throw new Error("Card config incorrect");this._config=t,this._cards=t.cards.map(t=>{return this._createCardElement(t)})}render(){return this._config?r.f`
      ${this.renderStyle()}
      <div id="root">${this._cards}</div>
    `:r.f``}_createCardElement(t){const e=Ne(t);return this._hass&&(e.hass=this._hass),e.addEventListener("ll-rebuild",i=>{i.stopPropagation(),this._rebuildCard(e,t)},{once:!0}),e}_rebuildCard(t,e){const i=this._createCardElement(e);t.parentElement.replaceChild(i,t),this._cards=this._cards.map(e=>e===t?i:e)}}customElements.define("hui-horizontal-stack-card",class extends Bt{getCardSize(){let t=0;if(this._cards)for(const e of this._cards){const i=Object(p.a)(e);t=i>t?i:t}return t}renderStyle(){return r.f`
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
    `}});let Nt=class extends r.a{static async getConfigElement(){return await i.e(52).then(i.bind(null,688)),document.createElement("hui-iframe-card-editor")}static getStubConfig(){return{url:"https://embed.windy.com/embed2.html?lat=32.487&lon=-84.023&zoom=5&level=surface&overlay=rain&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=32.487&detailLon=--84.023&metricWind=default&metricTemp=default&radarRange=-1",aspect_ratio:"50%"}}getCardSize(){if(!this._config)return 3;return 1+(this._config.aspect_ratio?Number(this._config.aspect_ratio.replace("%","")):50)/25}setConfig(t){if(!t.url)throw new Error("URL required");this._config=t}render(){if(!this._config)return r.f``;const t=this._config.aspect_ratio||"50%";return r.f`
      <ha-card .header="${this._config.title}">
        <div
          id="root"
          style="${Object(bt.a)({"padding-top":t})}"
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
    `}};Object(s.b)([Object(r.g)()],Nt.prototype,"_config",void 0),Nt=Object(s.b)([Object(r.d)("hui-iframe-card")],Nt);customElements.define("round-slider",class extends r.a{static get properties(){return{value:{type:Number},high:{type:Number},low:{type:Number},min:{type:Number},max:{type:Number},step:{type:Number},radius:{type:Number},startAngle:{type:Number},arcLength:{type:Number},handleSize:{type:Number},disabled:{type:Boolean},dragging:{type:Boolean,reflect:!0}}}constructor(){super(),this.min=0,this.max=100,this.step=1,this.radius=80,this.startAngle=135,this.arcLength=270,this.handleSize=6,this.disabled=!1,this.dragging=!1}get _r0(){return this.radius}get _rArc(){return this._r0-1.5*this.handleSize}get _start(){return this.startAngle*Math.PI/180}get _len(){return Math.min(this.arcLength*Math.PI/180,2*Math.PI-.01)}get _end(){return this._start+this._len}get _isDisabled(){return this.disabled||void 0===this.value&&void 0===this.high&&void 0===this.low}_angleInside(t){let e=(this.startAngle+this.arcLength/2-t+180+360)%360-180;return e<this.arcLength/2&&e>-this.arcLength/2}_getBoundaries(){const t=1.5*this.handleSize;let e=this._r0;this._angleInside(270)||(e=Math.max(-this._rArc*Math.sin(this._start)+t,-this._rArc*Math.sin(this._end)+t));let i=this._r0;this._angleInside(90)||(i=Math.max(this._rArc*Math.sin(this._start)+t,this._rArc*Math.sin(this._end)+t));let a=this._r0;this._angleInside(180)||(a=Math.max(-this._rArc*Math.cos(this._start)+t,-this._rArc*Math.cos(this._end)+t));let n=this._r0;return this._angleInside(0)||(n=Math.max(this._rArc*Math.cos(this._start)+t,this._rArc*Math.cos(this._end)+t)),{up:e,down:i,left:a,right:n,width:a+n,height:e+i}}dragStart(t){if(!t.target.classList.contains("handle"))return;let e=t.target;e.classList.contains("overflow")&&(e=e.nextElementSibling),e.setAttribute("r",1.5*this.handleSize);const i="high"===e.id?this.low:this.min,a="low"===e.id?this.high:this.max;this._rotation={handle:e,min:i,max:a},this.dragging=!0}dragEnd(t){if(!this._rotation)return;const e=this._rotation.handle;e.setAttribute("r",this.handleSize),this._rotation=!1,this.dragging=!1;let i=new CustomEvent("value-changed",{detail:{[e.id]:this[e.id]}});this.dispatchEvent(i),this.low&&this.low>=.99*this.max?this._reverseOrder=!0:this._reverseOrder=!1}drag(t){if(!this._rotation)return;t.preventDefault();const e="touchmove"===t.type?t.touches[0].clientX:t.clientX,i="touchmove"===t.type?t.touches[0].clientY:t.clientY,a=this.shadowRoot.querySelector("svg").getBoundingClientRect(),n=this._getBoundaries(),s=e-(a.x+n.left),r=i-(a.y+n.up),o=(Math.atan2(r,s)-this._start+2*Math.PI)%(2*Math.PI),c=Math.round((o/this._len*(this.max-this.min)+this.min)/this.step)*this.step;if(c<this._rotation.min||c>this._rotation.max)return;const l=this._rotation.handle;this[l.id]=c;let h=new CustomEvent("value-changing",{detail:{[l.id]:c}});this.dispatchEvent(h)}firstUpdated(){document.addEventListener("mouseup",this.dragEnd.bind(this)),document.addEventListener("touchend",this.dragEnd.bind(this),{passive:!1}),document.addEventListener("mousemove",this.drag.bind(this)),document.addEventListener("touchmove",this.drag.bind(this),{passive:!1})}_renderArc(t,e){const i=this._rArc;return`\n      M ${this._r0+i*Math.cos(t)} ${this._r0+i*Math.sin(t)}\n      A ${i} ${i},\n        0,\n        ${e-t>Math.PI?"1":"0"} 1,\n        ${this._r0+i*Math.cos(e)} ${this._r0+i*Math.sin(e)}\n    `}_valueFrac(t){return(this[t]-this.min)/(this.max-this.min)}_renderHandle(t){const e=this._start+this._valueFrac(t)*this._len;return r.j`
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
      `}render(){let t,e,i,a;return({up:t,left:e,width:i,height:a}=this._getBoundaries()),r.f`
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
          ${this._isDisabled?"":r.j`
          <path
            class="bar"
            d=${this._renderArc(this._start+this._len*(void 0!==this.low?this._valueFrac("low"):0),this._start+this._len*(void 0!==this.high?this._valueFrac("high"):this._valueFrac("value")))}
          />
          `}
        </g>

        ${this._isDisabled?"":r.j`
          <g class="handles">
          ${void 0!==this.low?this._reverseOrder?r.f`${this._renderHandle("high")} ${this._renderHandle("low")}`:r.f`${this._renderHandle("low")} ${this._renderHandle("high")}`:r.f`${this._renderHandle("value")}`}
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
    `}});let Rt=class extends r.a{render(){return r.f`
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
        font-size: 50px;
        color: var(--primary-text-color);
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
      }
    `}};Object(s.b)([Object(r.g)()],Rt.prototype,"text",void 0),Rt=Object(s.b)([Object(r.d)("hui-unavailable")],Rt);let Ht=class extends r.a{static async getConfigElement(){return await Promise.all([i.e(3),i.e(4),i.e(114),i.e(53)]).then(i.bind(null,689)),document.createElement("hui-light-card-editor")}static getStubConfig(){return{entity:""}}getCardSize(){return 2}setConfig(t){if(!t.entity||"light"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the light domain.");this._config=Object.assign({theme:"default"},t)}render(){if(!this.hass||!this._config)return r.f``;const t=this.hass.states[this._config.entity],e=Math.round(t.attributes.brightness/254*100)||0;return t?r.f`
      ${this.renderStyle()}
      <ha-card>
        ${"unavailable"===t.state?r.f`
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
          ${Object(R.a)(t,1)?r.f`
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
            .icon="${Object(kt.a)(t)}"
            style="${Object(bt.a)({filter:this._computeBrightness(t),color:this._computeColor(t)})}"
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
    `:r.f`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `}shouldUpdate(t){return j(this,t)}updated(t){if(super.updated(t),!this._config||!this.hass)return;if(!this.hass.states[this._config.entity])return;const e=t.get("hass");e&&e.themes===this.hass.themes||Object(ft.a)(this,this.hass.themes,this._config.theme)}renderStyle(){return r.f`
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
    `}_dragEvent(t){this.shadowRoot.querySelector(".brightness").innerHTML=t.detail.value+"%",this._showBrightness(),this._hideBrightness()}_showBrightness(){clearTimeout(this._brightnessTimout),this.shadowRoot.querySelector(".brightness").classList.add("show_brightness")}_hideBrightness(){this._brightnessTimout=window.setTimeout(()=>{this.shadowRoot.querySelector(".brightness").classList.remove("show_brightness")},500)}_setBrightness(t){this.hass.callService("light","turn_on",{entity_id:this._config.entity,brightness_pct:t.detail.value})}_computeBrightness(t){if(!t.attributes.brightness)return"";return`brightness(${(t.attributes.brightness+245)/5}%)`}_computeColor(t){if(!t.attributes.hs_color)return"";const[e,i]=t.attributes.hs_color;return i<=10?"":`hsl(${e}, 100%, ${100-i/2}%)`}_handleTap(){Tt(this.hass,this._config.entity)}_handleMoreInfo(){Object(n.a)(this,"hass-more-info",{entityId:this._config.entity})}};Object(s.b)([Object(r.g)()],Ht.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],Ht.prototype,"_config",void 0),Ht=Object(s.b)([Object(r.d)("hui-light-card")],Ht);i(402);var Vt=i(294),Ut=i(196);const qt=t=>{const e=parseFloat(t);if(isNaN(e))throw new Error(`${t} is not a number`);return e};function Ft(t){if(!t)return null;try{if(t.endsWith("%"))return{w:100,h:qt(t.substr(0,t.length-1))};const e=t.replace(":","x").split("x");return 0===e.length?null:1===e.length?{w:qt(e[0]),h:1}:{w:qt(e[0]),h:qt(e[1])}}catch(e){}return null}let Kt=class extends r.a{constructor(){super(...arguments),this.isPanel=!1,this._debouncedResizeListener=Object(Ut.a)(()=>{this._leafletMap&&this._leafletMap.invalidateSize()},100,!1),this._mapItems=[],this._connected=!1}static async getConfigElement(){return await Promise.all([i.e(3),i.e(4),i.e(115),i.e(54)]).then(i.bind(null,752)),document.createElement("hui-map-card-editor")}static getStubConfig(){return{entities:[]}}setConfig(t){if(!t)throw new Error("Error in card configuration.");if(!t.entities&&!t.geo_location_sources)throw new Error("Either entities or geo_location_sources must be defined");if(t.entities&&!Array.isArray(t.entities))throw new Error("Entities need to be an array");if(t.geo_location_sources&&!Array.isArray(t.geo_location_sources))throw new Error("Geo_location_sources needs to be an array");this._config=t,this._configEntities=t.entities?Object(_.a)(t.entities):[]}getCardSize(){if(!this._config)return 3;const t=Ft(this._config.aspect_ratio),e=t&&t.w>0&&t.h>0?`${(100*t.h/t.w).toFixed(2)}`:"100";return 1+Math.floor(Number(e)/25)||3}connectedCallback(){super.connectedCallback(),this._connected=!0,this.hasUpdated&&(this.loadMap(),this._attachObserver())}disconnectedCallback(){super.disconnectedCallback(),this._connected=!1,this._leafletMap&&(this._leafletMap.remove(),this._leafletMap=void 0,this.Leaflet=void 0),this._resizeObserver?this._resizeObserver.unobserve(this._mapEl):window.removeEventListener("resize",this._debouncedResizeListener)}render(){return this._config?r.f`
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
    `:r.f``}shouldUpdate(t){if(!t.has("hass")||t.size>1)return!0;const e=t.get("hass");if(!e||!this._configEntities)return!0;for(const i of this._configEntities)if(e.states[i.entity]!==this.hass.states[i.entity])return!0;return!1}firstUpdated(t){super.firstUpdated(t),this.loadMap();const e=this.shadowRoot.getElementById("root");if(!this._config||this.isPanel||!e)return;this._connected&&this._attachObserver();const i=Ft(this._config.aspect_ratio);e.style.paddingBottom=i&&i.w>0&&i.h>0?`${(100*i.h/i.w).toFixed(2)}%`:e.style.paddingBottom="100%"}updated(t){t.has("hass")&&this._drawEntities(),t.has("_config")&&void 0!==t.get("_config")&&this.updateMap(t.get("_config"))}get _mapEl(){return this.shadowRoot.getElementById("map")}async loadMap(){[this._leafletMap,this.Leaflet]=await Object(Vt.b)(this._mapEl,void 0!==this._config&&!0===this._config.dark_mode),this._drawEntities(),this._leafletMap.invalidateSize(),this._fitMap()}updateMap(t){const e=this._leafletMap,i=this._config,a=this.Leaflet;e&&i&&a&&(i.dark_mode!==t.dark_mode&&Object(Vt.a)(a,!0===i.dark_mode).addTo(e),i.entities===t.entities&&i.geo_location_sources===t.geo_location_sources||this._drawEntities(),e.invalidateSize(),this._fitMap())}_fitMap(){if(!(this._leafletMap&&this.Leaflet&&this._config&&this.hass))return;const t=this._config.default_zoom;if(0===this._mapItems.length)return void this._leafletMap.setView(new this.Leaflet.LatLng(this.hass.config.latitude,this.hass.config.longitude),t||14);const e=this.Leaflet.latLngBounds(this._mapItems?this._mapItems.map(t=>t.getLatLng()):[]);this._leafletMap.fitBounds(e.pad(.5)),t&&this._leafletMap.getZoom()>t&&this._leafletMap.setZoom(t)}_drawEntities(){const t=this.hass,e=this._leafletMap,i=this._config,a=this.Leaflet;if(!(t&&e&&i&&a))return;this._mapItems&&this._mapItems.forEach(t=>t.remove());const n=this._mapItems=[],s=this._configEntities.concat();if(i.geo_location_sources){const e=i.geo_location_sources.includes("all");for(const a of Object.keys(t.states)){const n=t.states[a];"geo_location"===Object(m.a)(a)&&(e||i.geo_location_sources.includes(n.attributes.source))&&s.push({entity:a})}}for(const r of s){const e=r.entity,i=t.states[e];if(!i)continue;const s=Object(w.a)(i),{latitude:o,longitude:c,passive:l,icon:h,radius:d,entity_picture:p,gps_accuracy:u}=i.attributes;if(!o||!c)continue;if("zone"===Object(jt.a)(i)){if(l)continue;n.push(a.marker([o,c],{icon:a.divIcon({html:h?`<ha-icon icon="${h}"></ha-icon>`:s,iconSize:[24,24],className:""}),interactive:!1,title:s})),n.push(a.circle([o,c],{interactive:!1,color:"#FF9800",radius:d}));continue}const g=s.split(" ").map(t=>t[0]).join("").substr(0,3);n.push(a.marker([o,c],{icon:a.divIcon({html:`\n              <ha-entity-marker\n                entity-id="${e}"\n                entity-name="${g}"\n                entity-picture="${p||""}"\n              ></ha-entity-marker>\n            `,iconSize:[48,48],className:""}),title:Object(w.a)(i)})),u&&n.push(a.circle([o,c],{interactive:!1,color:"#0288D1",radius:u}))}this._mapItems.forEach(t=>e.addLayer(t))}_attachObserver(){"function"==typeof ResizeObserver?(this._resizeObserver=new ResizeObserver(()=>this._debouncedResizeListener()),this._resizeObserver.observe(this._mapEl)):window.addEventListener("resize",this._debouncedResizeListener)}static get styles(){return r.c`
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
    `}};Object(s.b)([Object(r.g)()],Kt.prototype,"hass",void 0),Object(s.b)([Object(r.g)({type:Boolean,reflect:!0})],Kt.prototype,"isPanel",void 0),Object(s.b)([Object(r.g)()],Kt.prototype,"_config",void 0),Kt=Object(s.b)([Object(r.d)("hui-map-card")],Kt);i(154);let Wt=class extends r.a{constructor(){super(...arguments),this._content=""}static async getConfigElement(){return await Promise.all([i.e(116),i.e(55)]).then(i.bind(null,690)),document.createElement("hui-markdown-card-editor")}static getStubConfig(){return{content:" "}}getCardSize(){return void 0===this._config?3:void 0===this._config.card_size?this._config.content.split("\n").length+(this._config.title?1:0):this._config.card_size}setConfig(t){if(!t.content)throw new Error("Invalid Configuration: Content Required");this._config=t,this._disconnect().then(()=>{this._hass&&this._connect()})}disconnectedCallback(){this._disconnect()}set hass(t){this._hass=t,this._connect()}render(){return this._config?r.f`
      <ha-card .header="${this._config.title}">
        <ha-markdown
          class="markdown ${Object(o.a)({"no-header":!this._config.title})}"
          .content="${this._content}"
        ></ha-markdown>
      </ha-card>
    `:r.f``}async _connect(){!this._unsubRenderTemplate&&this._hass&&this._config&&(this._unsubRenderTemplate=((t,e,i)=>t.subscribeMessage(t=>e(t.result),Object.assign({type:"render_template"},i)))(this._hass.connection,t=>{this._content=t},{template:this._config.content,entity_ids:this._config.entity_id,variables:{config:this._config}}),this._unsubRenderTemplate.catch(()=>{this._content=this._config.content,this._unsubRenderTemplate=void 0}))}async _disconnect(){if(this._unsubRenderTemplate)try{const t=await this._unsubRenderTemplate;this._unsubRenderTemplate=void 0,await t()}catch(t){if("not_found"!==t.code)throw t}}static get styles(){return r.c`
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
    `}};Object(s.b)([Object(r.g)()],Wt.prototype,"_config",void 0),Object(s.b)([Object(r.g)()],Wt.prototype,"_content",void 0),Object(s.b)([Object(r.g)()],Wt.prototype,"_unsubRenderTemplate",void 0),Object(s.b)([Object(r.g)()],Wt.prototype,"_hass",void 0),Wt=Object(s.b)([Object(r.d)("hui-markdown-card")],Wt);i(326);class Xt extends HTMLElement{constructor(t,e){super(),this._tag=t.toUpperCase(),this._domain=e,this._element=null}getCardSize(){return 3}setConfig(t){if(!t.entity)throw new Error("No entity specified");if(Object(m.a)(t.entity)!==this._domain)throw new Error(`Specified entity needs to be of domain ${this._domain}.`);this._config=t}set hass(t){const e=this._config.entity;e in t.states?(this._ensureElement(this._tag),this.lastChild.hass=t,this.lastChild.stateObj=t.states[e],this.lastChild.config=this._config):(this._ensureElement("HUI-ERROR-CARD"),this.lastChild.setConfig(Object(y.a)(`No state available for ${e}`,this._config)))}_ensureElement(t){this.lastChild&&this.lastChild.tagName===t||(this.lastChild&&this.removeChild(this.lastChild),this.appendChild(document.createElement(t)))}}customElements.define("hui-media-control-card",class extends Xt{static async getConfigElement(){return await Promise.all([i.e(3),i.e(4),i.e(117),i.e(56)]).then(i.bind(null,691)),document.createElement("hui-media-control-card-editor")}static getStubConfig(){return{entity:""}}constructor(){super("ha-media_player-card","media_player")}});let Yt=class extends r.a{static async getConfigElement(){return await Promise.all([i.e(3),i.e(4),i.e(10),i.e(57)]).then(i.bind(null,692)),document.createElement("hui-picture-card-editor")}static getStubConfig(){return{image:"/images/image.jpg",tap_action:{action:"none"},hold_action:{action:"none"}}}getCardSize(){return 3}setConfig(t){if(!t||!t.image)throw new Error("Invalid Configuration: 'image' required");this._config=t}render(){return this._config&&this.hass?r.f`
      <ha-card
        @ha-click="${this._handleTap}"
        @ha-hold="${this._handleHold}"
        .longPress="${St()}"
        class="${Object(o.a)({clickable:Boolean(this._config.tap_action||this._config.hold_action)})}"
      >
        <img src="${this.hass.hassUrl(this._config.image)}" />
      </ha-card>
    `:r.f``}static get styles(){return r.c`
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
    `}_handleTap(){It(this,this.hass,this._config,!1)}_handleHold(){It(this,this.hass,this._config,!0)}};Object(s.b)([Object(r.g)()],Yt.prototype,"_config",void 0),Yt=Object(s.b)([Object(r.d)("hui-picture-card")],Yt);customElements.define("hui-conditional-element",class extends HTMLElement{constructor(){super(...arguments),this._elements=[]}setConfig(t){if(!(t.conditions&&Array.isArray(t.conditions)&&t.elements&&Array.isArray(t.elements)&&g(t.conditions)))throw new Error("Error in card configuration.");this._elements.length>0&&(this._elements.map(t=>{t.parentElement&&t.parentElement.removeChild(t)}),this._elements=[]),this._config=t,this._config.elements.map(t=>{this._elements.push(de(t))}),this.updateElements()}set hass(t){this._hass=t,this.updateElements()}updateElements(){if(!this._hass||!this._config)return;const t=u(this._config.conditions,this._hass);this._elements.map(e=>{t?(e.hass=this._hass,e.parentElement||this.appendChild(e)):e.parentElement&&e.parentElement.removeChild(e)})}});const Zt=(t,e)=>{if(null===e.title)return"";if(e.title)return e.title;let i="",a="";e.entity&&(i=e.entity in t.states?Object(w.a)(t.states[e.entity]):e.entity);const n=e.tap_action?Qt(t,i,e.tap_action,!1):"",s=e.hold_action?Qt(t,i,e.hold_action,!0):"";return a=n+(n&&s?"\n":"")+s};function Qt(t,e,i,a){if(!i||!i.action||"none"===i.action)return"";let n=(a?t.localize("ui.panel.lovelace.cards.picture-elements.hold"):t.localize("ui.panel.lovelace.cards.picture-elements.tap"))+" ";switch(i.action){case"navigate":n+=`${t.localize("ui.panel.lovelace.cards.picture-elements.navigate_to","location",i.navigation_path)}`;break;case"toggle":n+=`${t.localize("ui.panel.lovelace.cards.picture-elements.toggle","name",e)}`;break;case"call-service":n+=`${t.localize("ui.panel.lovelace.cards.picture-elements.call_service","name",i.service)}`;break;case"more-info":n+=`${t.localize("ui.panel.lovelace.cards.picture-elements.more_info","name",e)}`}return n}let Jt=class extends r.a{setConfig(t){if(!t.icon)throw Error("Invalid Configuration: 'icon' required");this._config=t}render(){return this._config&&this.hass?r.f`
      <ha-icon
        .icon="${this._config.icon}"
        .title="${Zt(this.hass,this._config)}"
        @ha-click="${this._handleTap}"
        @ha-hold="${this._handleHold}"
        .longPress="${St()}"
      ></ha-icon>
    `:r.f``}_handleTap(){It(this,this.hass,this._config,!1)}_handleHold(){It(this,this.hass,this._config,!0)}static get styles(){return r.c`
      :host {
        cursor: pointer;
      }
    `}};Object(s.b)([Object(r.g)()],Jt.prototype,"_config",void 0),Jt=Object(s.b)([Object(r.d)("hui-icon-element")],Jt);i(207);var Gt=i(282);let te=class extends r.a{connectedCallback(){super.connectedCallback(),this._attached=!0,this.cameraImage&&"live"!==this.cameraView&&this._startUpdateCameraInterval()}disconnectedCallback(){super.disconnectedCallback(),this._attached=!1,this._stopUpdateCameraInterval()}render(){const t=this.aspectRatio?Ft(this.aspectRatio):null,e=this.hass&&this.entity?this.hass.states[this.entity]:void 0,i=e?e.state:"unavailable";let a,n,s=!this.stateImage;if(this.cameraImage)"live"===this.cameraView?n=this.hass&&this.hass.states[this.cameraImage]:a=this._cameraImageSrc;else if(this.stateImage){const t=this.stateImage[i];t?a=t:(a=this.image,s=!0)}else a=this.image;a&&(a=this.hass.hassUrl(a));let c=this.filter||"";if(this.stateFilter&&this.stateFilter[i]&&(c=this.stateFilter[i]),!c&&this.entity){c=(!e||f.i.includes(i))&&s?"grayscale(100%)":""}return r.f`
      <div
        style=${Object(bt.a)({paddingBottom:t&&t.w>0&&t.h>0?`${(100*t.h/t.w).toFixed(2)}%`:""})}
        class=${Object(o.a)({ratio:Boolean(t&&t.w>0&&t.h>0)})}
      >
        ${this.cameraImage&&"live"===this.cameraView?r.f`
              <ha-camera-stream
                .hass="${this.hass}"
                .stateObj="${n}"
              ></ha-camera-stream>
            `:r.f`
              <img
                id="image"
                src=${a}
                @error=${this._onImageError}
                @load=${this._onImageLoad}
                style=${Object(bt.a)({filter:c,display:this._loadError?"none":"block"})}
              />
            `}
        <div
          id="brokenImage"
          style=${Object(bt.a)({height:`${this._lastImageHeight||"100"}px`,display:this._loadError?"block":"none"})}
        ></div>
      </div>
    `}updated(t){if(t.has("cameraImage")&&"live"!==this.cameraView)return this._updateCameraImageSrc(),void this._startUpdateCameraInterval()}_startUpdateCameraInterval(){this._stopUpdateCameraInterval(),this.cameraImage&&this._attached&&(this._cameraUpdater=window.setInterval(()=>this._updateCameraImageSrc(),1e4))}_stopUpdateCameraInterval(){this._cameraUpdater&&clearInterval(this._cameraUpdater)}_onImageError(){this._loadError=!0}async _onImageLoad(){this._loadError=!1,await this.updateComplete,this._lastImageHeight=this._image.offsetHeight}async _updateCameraImageSrc(){if(!this.hass||!this.cameraImage)return;this.hass.states[this.cameraImage]?this._cameraImageSrc=await Object(Gt.e)(this.hass,this.cameraImage):this._onImageError()}static get styles(){return r.c`
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
    `}};Object(s.b)([Object(r.g)()],te.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],te.prototype,"entity",void 0),Object(s.b)([Object(r.g)()],te.prototype,"image",void 0),Object(s.b)([Object(r.g)()],te.prototype,"stateImage",void 0),Object(s.b)([Object(r.g)()],te.prototype,"cameraImage",void 0),Object(s.b)([Object(r.g)()],te.prototype,"cameraView",void 0),Object(s.b)([Object(r.g)()],te.prototype,"aspectRatio",void 0),Object(s.b)([Object(r.g)()],te.prototype,"filter",void 0),Object(s.b)([Object(r.g)()],te.prototype,"stateFilter",void 0),Object(s.b)([Object(r.g)()],te.prototype,"_loadError",void 0),Object(s.b)([Object(r.g)()],te.prototype,"_cameraImageSrc",void 0),Object(s.b)([Object(r.h)("img")],te.prototype,"_image",void 0),te=Object(s.b)([Object(r.d)("hui-image")],te);let ee=class extends r.a{setConfig(t){if(!t)throw Error("Error in element configuration");this.classList.toggle("clickable",t.tap_action&&"none"!==t.tap_action.action),this._config=t}render(){return this._config&&this.hass?r.f`
      <hui-image
        .hass="${this.hass}"
        .entity="${this._config.entity}"
        .image="${this._config.image}"
        .stateImage="${this._config.state_image}"
        .cameraImage="${this._config.camera_image}"
        .filter="${this._config.filter}"
        .stateFilter="${this._config.state_filter}"
        .title="${Zt(this.hass,this._config)}"
        .aspectRatio="${this._config.aspect_ratio}"
        @ha-click="${this._handleTap}"
        @ha-hold="${this._handleHold}"
        .longPress="${St()}"
      ></hui-image>
    `:r.f``}static get styles(){return r.c`
      :host(.clickable) {
        cursor: pointer;
        overflow: hidden;
        -webkit-touch-callout: none !important;
      }
      hui-image {
        -webkit-user-select: none !important;
      }
    `}_handleTap(){It(this,this.hass,this._config,!1)}_handleHold(){It(this,this.hass,this._config,!0)}};Object(s.b)([Object(r.g)()],ee.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],ee.prototype,"_config",void 0),ee=Object(s.b)([Object(r.d)("hui-image-element")],ee);i(212);let ie=class extends r.a{static get properties(){return{_config:{}}}setConfig(t){if(!t||!t.service)throw Error("Invalid Configuration: 'service' required");if([this._domain,this._service]=t.service.split(".",2),!this._domain)throw Error("Invalid Configuration: 'service' does not have a domain");if(!this._service)throw Error("Invalid Configuration: 'service' does not have a service name");this._config=t}render(){return this._config&&this.hass?r.f`
      <ha-call-service-button
        .hass="${this.hass}"
        .domain="${this._domain}"
        .service="${this._service}"
        .serviceData="${this._config.service_data}"
        >${this._config.title}</ha-call-service-button
      >
    `:r.f``}static get styles(){return r.c`
      ha-call-service-button {
        color: var(--primary-color);
        white-space: nowrap;
      }
    `}};Object(s.b)([Object(r.g)()],ie.prototype,"_config",void 0),ie=Object(s.b)([Object(r.d)("hui-service-button-element")],ie);i(286);let ae=class extends r.a{setConfig(t){if(!t.entity)throw Error("Invalid Configuration: 'entity' required");this._config=t}shouldUpdate(t){return j(this,t)}render(){if(!this._config||!this.hass)return r.f``;const t=this.hass.states[this._config.entity];return t?r.f`
      <ha-state-label-badge
        .hass="${this.hass}"
        .state="${t}"
        .title="${void 0===this._config.title?Object(w.a)(t):null===this._config.title?"":this._config.title}"
      ></ha-state-label-badge>
    `:r.f`
        <hui-warning-element
          label="${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}"
        ></hui-warning-element>
      `}};Object(s.b)([Object(r.g)()],ae.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],ae.prototype,"_config",void 0),ae=Object(s.b)([Object(r.d)("hui-state-badge-element")],ae);let ne=class extends r.a{setConfig(t){if(!t.entity)throw Error("Invalid Configuration: 'entity' required");this._config=t}shouldUpdate(t){return j(this,t)}render(){if(!this._config||!this.hass)return r.f``;const t=this.hass.states[this._config.entity];return t?r.f`
      <state-badge
        .stateObj="${t}"
        .title="${Zt(this.hass,this._config)}"
        @ha-click="${this._handleClick}"
        @ha-hold="${this._handleHold}"
        .longPress="${St()}"
        .overrideIcon=${this._config.icon}
      ></state-badge>
    `:r.f`
        <hui-warning-element
          label=${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}
        ></hui-warning-element>
      `}static get styles(){return r.c`
      :host {
        cursor: pointer;
      }
    `}_handleClick(){It(this,this.hass,this._config,!1)}_handleHold(){It(this,this.hass,this._config,!0)}};Object(s.b)([Object(r.g)()],ne.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],ne.prototype,"_config",void 0),ne=Object(s.b)([Object(r.d)("hui-state-icon-element")],ne);let se=class extends r.a{setConfig(t){if(!t.entity)throw Error("Invalid Configuration: 'entity' required");this._config=t}shouldUpdate(t){return j(this,t)}render(){if(!this._config||!this.hass)return r.f``;const t=this.hass.states[this._config.entity];return t?r.f`
      <div
        .title="${Zt(this.hass,this._config)}"
        @ha-click="${this._handleTap}"
        @ha-hold="${this._handleHold}"
        .longPress="${St()}"
      >
        ${this._config.prefix}${t?Object(S.a)(this.hass.localize,t,this.hass.language):"-"}${this._config.suffix}
      </div>
    `:r.f`
        <hui-warning-element
          label=${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}
        ></hui-warning-element>
      `}_handleTap(){It(this,this.hass,this._config,!1)}_handleHold(){It(this,this.hass,this._config,!0)}static get styles(){return r.c`
      :host {
        cursor: pointer;
      }
      div {
        padding: 8px;
        white-space: nowrap;
      }
    `}};Object(s.b)([Object(r.g)()],se.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],se.prototype,"_config",void 0),se=Object(s.b)([Object(r.d)("hui-state-label-element")],se);const re=new Set(["conditional","icon","image","service-button","state-badge","state-icon","state-label"]),oe=2e3,ce=(t,e)=>{const i=document.createElement(t);try{i.setConfig(Object(a.a)(e))}catch(n){return console.error(t,n),le(n.message,e)}return i},le=(t,e)=>Object(y.b)(Object(y.a)(t,e));const he=t=>{if(!t||"object"!=typeof t||!t.type)return le("No element type configured.",t);if(t.type.startsWith("custom:")){const e=t.type.substr("custom:".length);if(customElements.get(e))return ce(e,t);const i=le(`Custom element doesn't exist: ${e}.`,t),a=function(t){return t.style.display="None",window.setTimeout(()=>{t.style.display=""},oe)}(i);return customElements.whenDefined(e).then(()=>{clearTimeout(a),Object(n.a)(i,"ll-rebuild")}),i}return re.has(t.type)?ce(`hui-${t.type}-element`,t):le(`Unknown element type encountered: ${t.type}.`,t)};function de(t){const e=he(t);return"HUI-CONDITIONAL-ELEMENT"!==e.tagName&&e.classList.add("element"),t.style&&Object.keys(t.style).forEach(i=>{e.style.setProperty(i,t.style[i])}),e}let pe=class extends r.a{set hass(t){this._hass=t;for(const e of Array.from(this.shadowRoot.querySelectorAll("#root > *"))){e.hass=this._hass}}getCardSize(){return 4}setConfig(t){if(!t)throw new Error("Invalid Configuration");if(!(t.image||t.camera_image||t.state_image)||t.state_image&&!t.entity)throw new Error("Invalid Configuration: image required");if(!Array.isArray(t.elements))throw new Error("Invalid Configuration: elements required");this._config=t}render(){return this._config?r.f`
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
          ${this._config.elements.map(t=>{const e=de(t);return e.hass=this._hass,e})}
        </div>
      </ha-card>
    `:r.f``}static get styles(){return r.c`
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
    `}};Object(s.b)([Object(r.g)()],pe.prototype,"_config",void 0),pe=Object(s.b)([Object(r.d)("hui-picture-elements-card")],pe);var ue=i(403);let ge=class extends r.a{getCardSize(){return 3}setConfig(t){if(!t||!t.entity)throw new Error("Invalid Configuration: 'entity' required");if("camera"!==Object(m.a)(t.entity)&&!t.image&&!t.state_image&&!t.camera_image)throw new Error("No image source configured.");this._config=Object.assign({show_name:!0,show_state:!0},t)}shouldUpdate(t){return j(this,t)}render(){if(!this._config||!this.hass)return r.f``;const t=this.hass.states[this._config.entity];if(!t)return r.f`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `;const e=this._config.name||Object(w.a)(t),i=Object(S.a)(this.hass.localize,t,this.hass.language);let a="";return this._config.show_name&&this._config.show_state?a=r.f`
        <div class="footer both">
          <div>${e}</div>
          <div>${i}</div>
        </div>
      `:this._config.show_name?a=r.f`
        <div class="footer">${e}</div>
      `:this._config.show_state&&(a=r.f`
        <div class="footer state">${i}</div>
      `),r.f`
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
          .longPress="${St()}"
          class="${Object(o.a)({clickable:t.state!==ue.b})}"
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
    `}_handleTap(){It(this,this.hass,this._config,!1)}_handleHold(){It(this,this.hass,this._config,!0)}};Object(s.b)([Object(r.g)()],ge.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],ge.prototype,"_config",void 0),ge=Object(s.b)([Object(r.d)("hui-picture-entity-card")],ge);const fe=new Set(["closed","locked","not_home","off"]);let me=class extends r.a{getCardSize(){return 3}setConfig(t){if(!t||!t.entities||!Array.isArray(t.entities)||!(t.image||t.camera_image||t.state_image)||t.state_image&&!t.entity)throw new Error("Invalid card configuration");const e=Object(_.a)(t.entities);this._entitiesDialog=[],this._entitiesToggle=[],e.forEach(e=>{t.force_dialog||!f.f.has(Object(m.a)(e.entity))?this._entitiesDialog.push(e):this._entitiesToggle.push(e)}),this._config=t}shouldUpdate(t){if(t.has("_config"))return!0;const e=t.get("hass");if(!e)return!0;if(this._entitiesDialog)for(const i of this._entitiesDialog)if(e.states[i.entity]!==this.hass.states[i.entity])return!0;if(this._entitiesToggle)for(const i of this._entitiesToggle)if(e.states[i.entity]!==this.hass.states[i.entity])return!0;return!1}render(){return this._config&&this.hass?r.f`
      <ha-card>
        <hui-image
          class="${Object(o.a)({clickable:Boolean(this._config.tap_action||this._config.hold_action||this._config.camera_image)})}"
          @ha-click="${this._handleTap}"
          @ha-hold="${this._handleHold}"
          .longPress="${St()}"
          .hass="${this.hass}"
          .image="${this._config.image}"
          .stateImage="${this._config.state_image}"
          .cameraImage="${this._config.camera_image}"
          .cameraView="${this._config.camera_view}"
          .entity="${this._config.entity}"
          .aspectRatio="${this._config.aspect_ratio}"
        ></hui-image>
        <div class="box">
          ${this._config.title?r.f`
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
    `:r.f``}renderEntity(t,e){const i=this.hass.states[t.entity];return i?r.f`
      <ha-icon
        .entity="${i.entity_id}"
        @click="${e?this._openDialog:this._callService}"
        class="${Object(o.a)({"state-on":!fe.has(i.state)})}"
        .icon="${t.icon||Object(kt.a)(i)}"
        title="${`\n            ${Object(w.a)(i)} : ${Object(S.a)(this.hass.localize,i,this.hass.language)}\n          `}"
      ></ha-icon>
    `:r.f`
        <hui-warning-element
          label=${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",t.entity)}
        ></hui-warning-element>
      `}_handleTap(){It(this,this.hass,this._config,!1)}_handleHold(){It(this,this.hass,this._config,!0)}_openDialog(t){Object(n.a)(this,"hass-more-info",{entityId:t.target.entity})}_callService(t){Tt(this.hass,t.target.entity)}static get styles(){return r.c`
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
    `}};Object(s.b)([Object(r.g)()],me.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],me.prototype,"_config",void 0),me=Object(s.b)([Object(r.d)("hui-picture-glance-card")],me);const be={moisture:"hass:water",temperature:"hass:thermometer",brightness:"hass:white-balance-sunny",conductivity:"hass:emoticon-poop",battery:"hass:battery"};let ve=class extends r.a{static async getConfigElement(){return await Promise.all([i.e(3),i.e(4),i.e(118),i.e(58)]).then(i.bind(null,693)),document.createElement("hui-plant-status-card-editor")}static getStubConfig(){return{}}getCardSize(){return 3}setConfig(t){if(!t.entity||"plant"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the plant domain.");this._config=t}shouldUpdate(t){return j(this,t)}render(){if(!this.hass||!this._config)return r.f``;const t=this.hass.states[this._config.entity];return t?r.f`
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
          ${this.computeAttributes(t).map(e=>r.f`
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
    `:r.f`
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
    `}computeAttributes(t){return Object.keys(be).filter(e=>e in t.attributes)}computeIcon(t,e){const i=be[t];if("battery"===t){if(e<=5)return`${i}-alert`;if(e<95)return`${i}-${10*Math.round(e/10-.01)}`}return i}_handleMoreInfo(t){const e=t.currentTarget,i=this.hass.states[this._config.entity];e.value&&Object(n.a)(this,"hass-more-info",{entityId:i.attributes.sensors[e.value]})}};Object(s.b)([Object(r.g)()],ve.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],ve.prototype,"_config",void 0),ve=Object(s.b)([Object(r.d)("hui-plant-status-card")],ve);i(187);var _e=i(236);const ye=(t,e,i,a)=>{return[(t-i)/2+i,(e-a)/2+a]},we=(t,e,i,a)=>{t.forEach(t=>t.state=Number(t.state)),t=t.filter(t=>!Number.isNaN(t.state));const n=Math.min.apply(Math,t.map(t=>t.state)),s=Math.max.apply(Math,t.map(t=>t.state)),r=(new Date).getTime(),o=(t,i,a)=>{const n=r-new Date(i.last_changed).getTime();let s=Math.abs(n/36e5-e);return a?(s=60*(s-Math.floor(s)),s=Number((10*Math.round(s/10)).toString()[0])):s=Math.floor(s),t[s]||(t[s]=[]),t[s].push(i),t};return t=t.reduce((t,e)=>o(t,e,!1),[]),a>1&&(t=t.map(t=>t.reduce((t,e)=>o(t,e,!0),[]))),((t,e,i,a,n,s)=>{const r=[];let o=(s-n)/80;o=0!==o?o:80;let c=(i-=10)/(e-(1===a?1:0));c=isFinite(c)?c:i;const l=(t,e,i=0,a=1)=>{if(a>1)return t.forEach((t,i)=>l(t,e,i,a-1));const s=t.reduce((t,e)=>t+parseFloat(e.state),0)/t.length,h=c*(e+i/6)+5,d=80-(s-n)/o+10;return r.push([h,d])};return t.forEach((t,e)=>l(t,e,0,a)),1===r.length&&(r[1]=[i+5,r[0][1]]),r.push([i+5,r[r.length-1][1]]),r})(t,e,i,a,n,s)};let xe=class extends r.a{static async getConfigElement(){return await Promise.all([i.e(3),i.e(4),i.e(119),i.e(59)]).then(i.bind(null,694)),document.createElement("hui-sensor-card-editor")}static getStubConfig(){return{entity:""}}setConfig(t){if(!t.entity||"sensor"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the sensor domain.");const e=Object.assign({detail:1,theme:"default",hours_to_show:24},t);e.hours_to_show=Number(e.hours_to_show),e.detail=1===e.detail||2===e.detail?e.detail:1,this._config=e}getCardSize(){return 3}render(){if(!this._config||!this.hass)return r.f``;const t=this.hass.states[this._config.entity];if(!t)return r.f`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `;let e;if(t&&"line"===this._config.graph){if(!t.attributes.unit_of_measurement)return r.f`
          <hui-warning
            >Entity: ${this._config.entity} - Has no Unit of Measurement and
            therefore can not display a line graph.</hui-warning
          >
        `;e=this._history?r.j`
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
        `:r.j`
          <svg width="100%" height="100%" viewBox="0 0 500 100"></svg>
        `}else e="";return r.f`
      <ha-card @click="${this._handleClick}">
        <div class="flex">
          <div class="icon">
            <ha-icon
              .icon="${this._config.icon||Object(kt.a)(t)}"
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
    `}firstUpdated(){this._date=new Date}shouldUpdate(t){return!!t.has("_history")||j(this,t)}updated(t){if(super.updated(t),!this._config||"line"!==this._config.graph||!this.hass)return;const e=t.get("hass");e&&e.themes===this.hass.themes||Object(ft.a)(this,this.hass.themes,this._config.theme);t.has("_config")?this._getHistory():Date.now()-this._date.getTime()>=6e4&&this._getHistory()}_handleClick(){Object(n.a)(this,"hass-more-info",{entityId:this._config.entity})}async _getHistory(){const t=new Date,e=new Date;e.setHours(t.getHours()-this._config.hours_to_show);const i=await Object(_e.c)(this.hass,this._config.entity,e,t);if(i.length<1||i[0].length<1)return;const a=we(i[0],this._config.hours_to_show,500,this._config.detail);this._history=(t=>{let e,i;let a="",n=t.filter(Boolean)[0];a+=`M ${n[0]},${n[1]}`;for(const s of t)e=s,a+=` ${(i=ye(n[0],n[1],e[0],e[1]))[0]},${i[1]}`,a+=` Q${e[0]},${e[1]}`,n=e;return a+=` ${e[0]},${e[1]}`})(a),this._date=new Date}static get styles(){return r.c`
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
    `}};Object(s.b)([Object(r.g)()],xe.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],xe.prototype,"_config",void 0),Object(s.b)([Object(r.g)()],xe.prototype,"_history",void 0),xe=Object(s.b)([Object(r.d)("hui-sensor-card")],xe);customElements.define("hui-vertical-stack-card",class extends Bt{getCardSize(){let t=0;if(!this._cards)return t;for(const e of this._cards)t+=Object(p.a)(e);return t}renderStyle(){return r.f`
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
    `}});var Oe=i(359);i(153);const ke=(t,e,i)=>t.callWS(Object.assign({type:"shopping_list/items/update",item_id:e},i));let je,$e=class extends r.a{static async getConfigElement(){return await i.e(60).then(i.bind(null,695)),document.createElement("hui-shopping-list-card-editor")}static getStubConfig(){return{}}getCardSize(){return 3+(this._config&&this._config.title?1:0)}setConfig(t){this._config=t,this._uncheckedItems=[],this._checkedItems=[],this._fetchData()}connectedCallback(){super.connectedCallback(),this.hass&&(this._unsubEvents=this.hass.connection.subscribeEvents(()=>this._fetchData(),"shopping_list_updated"),this._fetchData())}disconnectedCallback(){super.disconnectedCallback(),this._unsubEvents&&this._unsubEvents.then(t=>t())}render(){return this._config&&this.hass?r.f`
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
        ${Object(Oe.a)(this._uncheckedItems,t=>t.id,(t,e)=>r.f`
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
        ${this._checkedItems.length>0?r.f`
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
              ${Object(Oe.a)(this._checkedItems,t=>t.id,(t,e)=>r.f`
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
    `:r.f``}static get styles(){return r.c`
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
    `}async _fetchData(){if(this.hass){const t=[],e=[],i=await(t=>t.callWS({type:"shopping_list/items"}))(this.hass);for(const a in i)i[a].complete?t.push(i[a]):e.push(i[a]);this._checkedItems=t,this._uncheckedItems=e}}_completeItem(t){ke(this.hass,t.target.itemId,{complete:t.target.checked}).catch(()=>this._fetchData())}_saveEdit(t){ke(this.hass,t.target.itemId,{name:t.target.value}).catch(()=>this._fetchData()),t.target.blur()}_clearItems(){this.hass&&(t=>t.callWS({type:"shopping_list/items/clear"}))(this.hass).catch(()=>this._fetchData())}get _newItem(){return this.shadowRoot.querySelector(".addBox")}_addItem(t){const e=this._newItem;e.value.length>0&&((t,e)=>t.callWS({type:"shopping_list/items/add",name:e}))(this.hass,e.value).catch(()=>this._fetchData()),e.value="",t&&e.focus()}_addKeyPress(t){13===t.keyCode&&this._addItem(null)}};Object(s.b)([Object(r.g)()],$e.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],$e.prototype,"_config",void 0),Object(s.b)([Object(r.g)()],$e.prototype,"_uncheckedItems",void 0),Object(s.b)([Object(r.g)()],$e.prototype,"_checkedItems",void 0),$e=Object(s.b)([Object(r.d)("hui-shopping-list-card")],$e);var Ce=i(272);const Ee={radius:150,circleShape:"pie",startAngle:315,width:5,lineCap:"round",handleSize:"+10",showTooltip:!1,animation:!1},Se={auto:"hass:calendar-repeat",heat_cool:"hass:autorenew",heat:"hass:fire",cool:"hass:snowflake",off:"hass:power",fan_only:"hass:fan",dry:"hass:water-percent"};let ze=class extends r.a{static async getConfigElement(){return await Promise.all([i.e(3),i.e(4),i.e(120),i.e(61)]).then(i.bind(null,696)),document.createElement("hui-thermostat-card-editor")}static getStubConfig(){return{entity:""}}getCardSize(){return 4}setConfig(t){if(!t.entity||"climate"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the climate domain.");this._config=Object.assign({theme:"default"},t)}connectedCallback(){super.connectedCallback(),this._updated&&!this._loaded&&this._initialLoad()}render(){if(!this.hass||!this._config)return r.f``;const t=this.hass.states[this._config.entity];if(!t)return r.f`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `;const e=t.state in Se?t.state:"unknown-mode";return r.f`
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
                ${t.attributes.current_temperature?r.f`
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
                ${t.attributes.preset_mode&&t.attributes.preset_mode!==Ce.a?r.f`
                      -
                      ${this.hass.localize(`state_attributes.climate.preset_mode.${t.attributes.preset_mode}`)||t.attributes.preset_mode}
                    `:""}
              </div>
              <div class="modes">
                ${(t.attributes.hvac_modes||[]).concat().sort(Ce.i).map(t=>this._renderIcon(t,e))}
              </div>
            </div>
          </div>
        </div>
      </ha-card>
    `}shouldUpdate(t){return j(this,t)}firstUpdated(){this._updated=!0,this.isConnected&&!this._loaded&&this._initialLoad()}updated(t){if(super.updated(t),!this._config||!this.hass||!t.has("hass"))return;const e=t.get("hass");e&&e.themes===this.hass.themes||Object(ft.a)(this,this.hass.themes,this._config.theme);const i=this.hass.states[this._config.entity];if(i&&this._jQuery&&!t.has("_jQuery")&&(!e||e.states[this._config.entity]!==i)){const[t,e,a]=this._genSliderValue(i);this._jQuery("#thermostat",this.shadowRoot).roundSlider({sliderType:a,value:t,disabled:null===t,min:i.attributes.min_temp,max:i.attributes.max_temp}),this._updateSetTemp(e)}}get _stepSize(){const t=this.hass.states[this._config.entity];return t.attributes.target_temp_step?t.attributes.target_temp_step:this.hass.config.unit_system.temperature===f.k?1:.5}async _initialLoad(){const t=this.hass.states[this._config.entity];if(!t)return;this._loaded=!0,await this.updateComplete;let e=this.clientWidth/3.2;this._broadCard=this.clientWidth>390,0===e&&(e=100),this.shadowRoot.querySelector("#thermostat").style.height=2*e+"px";const a=await(async()=>(je||(je=Promise.all([i.e(123),i.e(66)]).then(i.bind(null,753))),je))();this._roundSliderStyle=a.roundSliderStyle,this._jQuery=a.jQuery;const[n,s,r]=this._genSliderValue(t);this._jQuery("#thermostat",this.shadowRoot).roundSlider(Object.assign(Object.assign({},Ee),{radius:e,min:t.attributes.min_temp,max:t.attributes.max_temp,sliderType:r,change:t=>this._setTemperature(t),drag:t=>this._dragEvent(t),value:n,disabled:null===n,step:this._stepSize})),this._updateSetTemp(s)}_genSliderValue(t){let e,i,a;return"unavailable"===t.state?(e="min-range",i=null,a=this.hass.localize("state.default.unavailable")):t.attributes.target_temp_low&&t.attributes.target_temp_high?(e="range",i=`${t.attributes.target_temp_low}, ${t.attributes.target_temp_high}`,a=this.formatTemp([String(t.attributes.target_temp_low),String(t.attributes.target_temp_high)],!1)):(e="min-range",a=null!==(i=Number.isFinite(Number(t.attributes.temperature))?t.attributes.temperature:null)?String(i):""),[i,a,e]}_updateSetTemp(t){this.shadowRoot.querySelector("#set-temperature").innerHTML=t}_dragEvent(t){this._updateSetTemp(this.formatTemp(String(t.value).split(","),!0))}_setTemperature(t){const e=this.hass.states[this._config.entity];e.attributes.target_temp_low&&e.attributes.target_temp_high?1===t.handle.index?this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,target_temp_low:t.handle.value,target_temp_high:e.attributes.target_temp_high}):this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,target_temp_low:e.attributes.target_temp_low,target_temp_high:t.handle.value}):this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,temperature:t.value})}_renderIcon(t,e){return Se[t]?r.f`
      <ha-icon
        class="${Object(o.a)({"selected-icon":e===t})}"
        .mode="${t}"
        .icon="${Se[t]}"
        @click="${this._handleModeClick}"
      ></ha-icon>
    `:r.f``}_handleMoreInfo(){Object(n.a)(this,"hass-more-info",{entityId:this._config.entity})}_handleModeClick(t){this.hass.callService("climate","set_hvac_mode",{entity_id:this._config.entity,hvac_mode:t.currentTarget.mode})}formatTemp(t,e){if(t=t.filter(Boolean),e){const e=this._stepSize;t=t.map(t=>t.includes(".")||1===e?t:`${t}.0`)}return t.join("-")}renderStyle(){return r.f`
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
    `}};Object(s.b)([Object(r.g)()],ze.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],ze.prototype,"_config",void 0),Object(s.b)([Object(r.g)()],ze.prototype,"_roundSliderStyle",void 0),Object(s.b)([Object(r.g)()],ze.prototype,"_jQuery",void 0),ze=Object(s.b)([Object(r.d)("hui-thermostat-card")],ze);const Te=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"],Ie={"clear-night":"hass:weather-night",cloudy:"hass:weather-cloudy",exceptional:"hass:alert-circle-outline",fog:"hass:weather-fog",hail:"hass:weather-hail",lightning:"hass:weather-lightning","lightning-rainy":"hass:weather-lightning-rainy",partlycloudy:"hass:weather-partly-cloudy",pouring:"hass:weather-pouring",rainy:"hass:weather-rainy",snowy:"hass:weather-snowy","snowy-rainy":"hass:weather-snowy-rainy",sunny:"hass:weather-sunny",windy:"hass:weather-windy","windy-variant":"hass:weather-windy-variant"};let Ae=class extends r.a{static async getConfigElement(){return await Promise.all([i.e(3),i.e(4),i.e(122),i.e(64)]).then(i.bind(null,697)),document.createElement("hui-weather-forecast-card-editor")}static getStubConfig(){return{entity:""}}getCardSize(){return 4}setConfig(t){if(!t||!t.entity)throw new Error("Invalid card configuration");if(!Object(Ot.a)(t.entity))throw new Error("Invalid Entity");this._config=t}updated(t){super.updated(t),t.has("hass")&&Object(O.a)(this,"rtl",Object(x.a)(this.hass))}render(){if(!this._config||!this.hass)return r.f``;const t=this.hass.states[this._config.entity];if(!t)return r.f`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `;const e=t.attributes.forecast?t.attributes.forecast.slice(0,5):void 0;return r.f`
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
              ${t.state in Ie?r.f`
                    <ha-icon icon="${Ie[t.state]}"></ha-icon>
                  `:""}
              <div class="temp">
                ${t.attributes.temperature}<span
                  >${this.getUnit("temperature")}</span
                >
              </div>
            </div>
            <div class="attributes">
              ${this._showValue(t.attributes.pressure)?r.f`
                    <div>
                      ${this.hass.localize("ui.card.weather.attributes.air_pressure")}:
                      <span class="measurand">
                        ${t.attributes.pressure}
                        ${this.getUnit("air_pressure")}
                      </span>
                    </div>
                  `:""}
              ${this._showValue(t.attributes.humidity)?r.f`
                    <div>
                      ${this.hass.localize("ui.card.weather.attributes.humidity")}:
                      <span class="measurand"
                        >${t.attributes.humidity} %</span
                      >
                    </div>
                  `:""}
              ${this._showValue(t.attributes.wind_speed)?r.f`
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
          ${e?r.f`
                <div class="forecast">
                  ${e.map(t=>r.f`
                      <div>
                        <div class="weekday">
                          ${new Date(t.datetime).toLocaleDateString(this.hass.language,{weekday:"short"})}<br />
                          ${this._showValue(t.templow)?"":r.f`
                                ${new Date(t.datetime).toLocaleTimeString(this.hass.language,{hour:"numeric"})}
                              `}
                        </div>
                        ${this._showValue(t.condition)?r.f`
                              <div class="icon">
                                <ha-icon
                                  .icon="${Ie[t.condition]}"
                                ></ha-icon>
                              </div>
                            `:""}
                        ${this._showValue(t.temperature)?r.f`
                              <div class="temp">
                                ${t.temperature}
                                ${this.getUnit("temperature")}
                              </div>
                            `:""}
                        ${this._showValue(t.templow)?r.f`
                              <div class="templow">
                                ${t.templow} ${this.getUnit("temperature")}
                              </div>
                            `:""}
                        ${this._showValue(t.precipitation)?r.f`
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
    `}shouldUpdate(t){return j(this,t)}handleClick(){Object(n.a)(this,"hass-more-info",{entityId:this._config.entity})}getUnit(t){const e=this.hass.config.unit_system.length||"";switch(t){case"air_pressure":return"km"===e?"hPa":"inHg";case"length":return e;case"precipitation":return"km"===e?"mm":"in";default:return this.hass.config.unit_system[t]||""}}windBearingToText(t){const e=parseInt(t,10);return isFinite(e)?Te[((e+11.25)/22.5|0)%16]:t}getWindBearing(t){if(null!=t){const e=this.windBearingToText(t);return`(${this.hass.localize(`ui.card.weather.cardinal_direction.${e.toLowerCase()}`)||e})`}return""}_showValue(t){return null!=t}static get styles(){return r.c`
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
    `}};Object(s.b)([Object(r.g)()],Ae.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],Ae.prototype,"_config",void 0),Ae=Object(s.b)([Object(r.d)("hui-weather-forecast-card")],Ae);const Pe={red:"var(--label-badge-red)",green:"var(--label-badge-green)",yellow:"var(--label-badge-yellow)",normal:"var(--label-badge-blue)"};let Me=class extends r.a{constructor(){super(...arguments),this._baseUnit="50px"}static async getConfigElement(){return await Promise.all([i.e(3),i.e(4),i.e(112),i.e(50)]).then(i.bind(null,698)),document.createElement("hui-gauge-card-editor")}static getStubConfig(){return{entity:""}}getCardSize(){return 2}setConfig(t){if(!t||!t.entity)throw new Error("Invalid card configuration");if(!Object(Ot.a)(t.entity))throw new Error("Invalid Entity");this._config=Object.assign({min:0,max:100,theme:"default"},t)}connectedCallback(){super.connectedCallback(),this._setBaseUnit()}render(){if(!this._config||!this.hass)return r.f``;const t=this.hass.states[this._config.entity];if(!t)return r.f`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}</hui-warning
        >
      `;const e=Number(t.state);return isNaN(e)?r.f`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_non_numeric","entity",this._config.entity)}</hui-warning
        >
      `:r.f`
      <ha-card
        @click="${this._handleClick}"
        style=${Object(bt.a)({"--base-unit":this._baseUnit})}
      >
        <div class="container">
          <div class="gauge-a"></div>
          <div class="gauge-b"></div>
          <div
            class="gauge-c"
            style=${Object(bt.a)({transform:`rotate(${this._translateTurn(e)}turn)`,"background-color":this._computeSeverity(e)})}
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
    `}shouldUpdate(t){return j(this,t)}firstUpdated(){this._updated=!0,this._setBaseUnit(),this.classList.add("init")}updated(t){if(super.updated(t),!this._config||!this.hass)return;const e=t.get("hass");e&&e.themes===this.hass.themes||Object(ft.a)(this,this.hass.themes,this._config.theme)}_setBaseUnit(){if(!this.isConnected||!this._updated)return;const t=this._computeBaseUnit();"0px"!==t&&(this._baseUnit=t)}_computeSeverity(t){const e=this._config.severity;if(!e)return Pe.normal;const i=Object.keys(e).map(t=>[t,e[t]]);for(const a of i)if(null==Pe[a[0]]||isNaN(a[1]))return Pe.normal;return i.sort((t,e)=>t[1]-e[1]),t>=i[0][1]&&t<i[1][1]?Pe[i[0][0]]:t>=i[1][1]&&t<i[2][1]?Pe[i[1][0]]:t>=i[2][1]?Pe[i[2][0]]:Pe.normal}_translateTurn(t){const{min:e,max:i}=this._config;return 5*(Math.min(Math.max(t,e),i)-e)/(i-e)/10}_computeBaseUnit(){return this.clientWidth<200?this.clientWidth/5+"px":"50px"}_handleClick(){Object(n.a)(this,"hass-more-info",{entityId:this._config.entity})}static get styles(){return r.c`
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
    `}};Object(s.b)([Object(r.g)()],Me.prototype,"hass",void 0),Object(s.b)([Object(r.g)()],Me.prototype,"_baseUnit",void 0),Object(s.b)([Object(r.g)()],Me.prototype,"_config",void 0),Me=Object(s.b)([Object(r.d)("hui-gauge-card")],Me),i.d(e,"a",(function(){return Ne}));const Le=new Set(["alarm-panel","conditional","entities","entity-button","entity-filter","error","gauge","glance","history-graph","horizontal-stack","iframe","light","map","markdown","media-control","picture","picture-elements","picture-entity","picture-glance","plant-status","sensor","shopping-list","thermostat","vertical-stack","weather-forecast"]),De=(t,e)=>{const i=document.createElement(t);try{i.setConfig(Object(a.a)(e))}catch(n){return console.error(t,n),Be(n.message,e)}return i},Be=(t,e)=>Object(y.b)(Object(y.a)(t,e)),Ne=t=>{if(!t||"object"!=typeof t||!t.type)return Be("No card type configured.",t);if(t.type.startsWith("custom:")){const e=t.type.substr("custom:".length);if(customElements.get(e))return De(e,t);const i=Be(`Custom element doesn't exist: ${e}.`,t);i.style.display="None";const a=window.setTimeout(()=>{i.style.display=""},2e3);return customElements.whenDefined(e).then(()=>{clearTimeout(a),Object(n.a)(i,"ll-rebuild")}),i}return Le.has(t.type)?De(`hui-${t.type}-card`,t):Be(`Unknown card type encountered: ${t.type}.`,t)}},462:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o}));var a=i(463),n=i(401);const s=(t,e)=>t.sendMessage({type:"connect",refreshToken:e.data.refresh_token,clientId:e.data.clientId,hassUrl:a.b?n.b:e.data.hassUrl}),r=(t,e)=>t.sendMessage({type:"show_lovelace_view",viewPath:e}),o=(t,e)=>{if(!t.castConnectedToOurHass)return new Promise(i=>{const a=t.addEventListener("connection-changed",()=>{t.castConnectedToOurHass&&(a(),i())});s(t,e)})}},463:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return s})),i.d(e,"c",(function(){return r}));var a=i(401);const n=!1,s=n?a.a:"B12CE3CA",r="urn:x-cast:com.nabucasa.hast"},66:function(t,e,i){"use strict";i.d(e,"c",(function(){return a})),i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return s}));const a=`${location.protocol}//${location.host}`,n=(t,e)=>t.callWS({type:"auth/sign_path",path:e}),s=()=>fetch("/auth/providers",{credentials:"same-origin"})},719:function(t,e,i){"use strict";i.r(e);var a=i(4),n=(i(85),i(138)),s=(i(159),i(161),i(0)),r=i(73),o=(i(206),i(220),i(324),i(150),i(234),i(108),i(143),i(144),i(147),i(243),i(276),i(399));i(254),i(285);const c=customElements.get("paper-icon-button");customElements.define("ha-paper-icon-button-arrow-next",class extends c{connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.icon="ltr"===window.getComputedStyle(this).direction?"hass:arrow-right":"hass:arrow-left"},100)}});i(131),i(179);var l=i(196),h=i(99),d=i(18),p=i(304),u=(i(286),i(100)),g=i(424),f=i(358),m=i(404),b=i(96),v=i(287);let _=!1;const y=(t,e)=>{let i=0;for(let a=0;a<t.length;a++){if(t[a]<5){i=a;break}t[a]<t[i]&&(i=a)}return t[i]+=e,i};class w extends s.a{constructor(){super(),this._cards=[],this._badges=[]}static get properties(){return{hass:{},lovelace:{},columns:{type:Number},index:{type:Number},_cards:{},_badges:{}}}createCardElement(t){const e=Object(g.a)(t);return e.hass=this.hass,e.addEventListener("ll-rebuild",i=>{this.lovelace.editMode||(i.stopPropagation(),this._rebuildCard(e,t))},{once:!0}),e}render(){return s.f`
      ${this.renderStyles()}
      <div id="badges"></div>
      <div id="columns"></div>
      ${this.lovelace.editMode?s.f`
            <ha-fab
              icon="hass:plus"
              title="${this.hass.localize("ui.panel.lovelace.editor.edit_card.add")}"
              @click="${this._addCard}"
              class="${Object(r.a)({rtl:Object(b.a)(this.hass)})}"
            ></ha-fab>
          `:""}
    `}renderStyles(){return s.f`
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
    `}updated(t){super.updated(t);const e=this.hass,a=this.lovelace;a.editMode&&!_&&(_=!0,i.e(63).then(i.bind(null,727)));const n=t.has("hass");let s=!1,r=!1;if(t.has("index"))r=!0;else if(t.has("lovelace")){const e=t.get("lovelace");s=!e||a.editMode!==e.editMode,r=!e||a.config!==e.config}r?this._createBadges(a.config.views[this.index]):n&&this._badges.forEach(t=>{const{element:i,entityId:a}=t;i.hass=e,i.state=e.states[a]}),r||s||t.has("columns")?this._createCards(a.config.views[this.index]):n&&this._cards.forEach(t=>{t.hass=this.hass});const o=t.get("hass");(r||s||n&&o&&(e.themes!==o.themes||e.selectedTheme!==o.selectedTheme))&&Object(u.a)(this,e.themes,a.config.views[this.index].theme)}_addCard(){Object(m.a)(this,{lovelace:this.lovelace,path:[this.index]})}_createBadges(t){const e=this.shadowRoot.getElementById("badges");for(;e.lastChild;)e.removeChild(e.lastChild);if(!t||!t.badges||!Array.isArray(t.badges))return e.style.display="none",void(this._badges=[]);const i=[],a=Object(v.a)(t.badges.filter(Boolean));for(const n of a){const t=document.createElement("ha-state-label-badge"),a=n.entity;t.hass=this.hass,t.state=this.hass.states[a],t.name=n.name,t.icon=n.icon,t.image=n.image,i.push({element:t,entityId:a}),e.appendChild(t)}this._badges=i,e.style.display=i.length>0?"block":"none"}_createCards(t){const e=this.shadowRoot.getElementById("columns");for(;e.lastChild;)e.removeChild(e.lastChild);if(!t||!t.cards||!Array.isArray(t.cards))return void(this._cards=[]);const i=[],a=[];t.cards.forEach((t,e)=>{const n=this.createCardElement(t);if(i.push(n),!this.lovelace.editMode)return void a.push(n);const s=document.createElement("hui-card-options");s.hass=this.hass,s.lovelace=this.lovelace,s.path=[this.index,e],s.appendChild(n),a.push(s)});let n=[];const s=[];for(let r=0;r<this.columns;r++)n.push([]),s.push(0);i.forEach((t,e)=>{const i=Object(f.a)(t);n[y(s,i)].push(a[e])}),(n=n.filter(t=>t.length>0)).forEach(t=>{const i=document.createElement("div");i.classList.add("column"),t.forEach(t=>i.appendChild(t)),e.appendChild(i)}),this._cards=i}_rebuildCard(t,e){const i=this.createCardElement(e);t.parentElement.replaceChild(i,t),this._cards=this._cards.map(e=>e===t?i:e)}}customElements.define("hui-view",w);let x=class extends s.b{firstUpdated(t){super.firstUpdated(t),this.style.setProperty("background","var(--lovelace-background)")}updated(t){super.updated(t);const e=this.hass,i=t.has("hass"),a=t.get("hass"),n=t.has("config");n?this._createCard():i&&(this.lastChild.hass=this.hass),(n||i&&a&&(e.themes!==a.themes||e.selectedTheme!==a.selectedTheme))&&Object(u.a)(this,e.themes,this.config.theme)}_createCard(){this.lastChild&&this.removeChild(this.lastChild);const t=Object(g.a)(this.config.cards[0]);t.hass=this.hass,t.isPanel=!0,this.append(t)}};Object(a.b)([Object(s.g)()],x.prototype,"hass",void 0),Object(a.b)([Object(s.g)()],x.prototype,"config",void 0),x=Object(a.b)([Object(s.d)("hui-panel-view")],x);let O=!1;const k=(t,e)=>{O||(O=!0,(t=>Object(d.a)(t,"register-dialog",{dialogShowEvent:"show-edit-view",dialogTag:"hui-dialog-edit-view",dialogImport:()=>Promise.all([i.e(3),i.e(4),i.e(43)]).then(i.bind(null,729))}))(t)),Object(d.a)(t,"show-edit-view",e)};let j=!1;const $=(t,e)=>{j||(j=!0,(t=>Object(d.a)(t,"register-dialog",{dialogShowEvent:"show-edit-lovelace",dialogTag:"hui-dialog-edit-lovelace",dialogImport:()=>i.e(42).then(i.bind(null,746))}))(t)),Object(d.a)(t,"show-edit-lovelace",e)},C=t=>{requestAnimationFrame(()=>setTimeout(t,0))};var E=i(56),S=i(92);const z={},T={},I=(t,e)=>t.forEach(t=>{const a=new URL(t.url,e).toString();switch(t.type){case"css":if(a in z)break;z[a]=Object(S.a)(a);break;case"js":if(a in T)break;T[a]=Object(S.b)(a);break;case"module":Object(S.c)(a);break;case"html":i.e(65).then(i.bind(null,173)).then(({importHref:t})=>t(a));break;default:console.warn(`Unknown resource type specified: ${t.type}`)}});class A extends s.a{constructor(){super(),this._debouncedConfigChanged=Object(l.a)(()=>this._selectView(this._curView,!0),100,!1)}render(){return s.f`
    <app-route .route="${this.route}" pattern="/:view" data="${this._routeData}" @data-changed="${this._routeDataChanged}"></app-route>
    <ha-app-layout id="layout">
      <app-header slot="header" effects="waterfall" class="${Object(r.a)({"edit-mode":this._editMode})}" fixed condenses>
        ${this._editMode?s.f`
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
                      ${s.f`
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
              `:s.f`
                <app-toolbar>
                  <ha-menu-button
                    .hass=${this.hass}
                    .narrow=${this.narrow}
                  ></ha-menu-button>
                  <div main-title>${this.config.title||"ioBroker"}</div>
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
                      ${this._yamlMode?s.f`
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
                      ${this.hass.user.is_admin?s.f`
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

        ${this.lovelace.config.views.length>1||this._editMode?s.f`
                <div sticky>
                  <paper-tabs
                    scrollable
                    .selected="${this._curView}"
                    @iron-activate="${this._handleViewSelected}"
                    dir="${Object(b.b)(this.hass)}"
                  >
                    ${this.lovelace.config.views.map(t=>s.f`
                        <paper-tab aria-label="${t.title}">
                          ${this._editMode?s.f`
                                <ha-paper-icon-button-arrow-prev
                                  title="Move view left"
                                  class="edit-icon view"
                                  @click="${this._moveViewLeft}"
                                  ?disabled="${0===this._curView}"
                                ></ha-paper-icon-button-arrow-prev>
                              `:""}
                          ${t.icon?s.f`
                                <ha-icon
                                  title="${t.title}"
                                  .icon="${t.icon}"
                                ></ha-icon>
                              `:t.title||"Unnamed view"}
                          ${this._editMode?s.f`
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
                    ${this._editMode?s.f`
                          <paper-icon-button
                            id="add-view"
                            @click="${this._addView}"
                            title="${this.hass.localize("ui.panel.lovelace.editor.edit_view.add")}"
                            icon="hass:plus"
                          ></paper-icon-button>
                        `:""}
                  </paper-tabs>
                </div>
              `:""}
      </app-header>
      <div id='view' class="${Object(r.a)({"tabs-hidden":this.lovelace.config.views.length<2})}" @ll-rebuild='${this._debouncedConfigChanged}'></div>
    </app-header-layout>
    `}static get styles(){return[E.a,s.c`
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
      `]}updated(t){super.updated(t);const e=this._viewRoot.lastChild;let i;t.has("columns")&&e&&e instanceof w&&(e.columns=this.columns),t.has("hass")&&e&&(e.hass=this.hass);let a=!1;if(t.has("route")){const t=this.config&&this.config.views;if(""===this.route.path&&"/lovelace"===this.route.prefix&&t)Object(h.a)(this,`/lovelace/${t[0].path||0}`,!0),i=0;else if("hass-unused-entities"===this._routeData.view)i="hass-unused-entities";else if(this._routeData.view){const e=this._routeData.view,a=parseInt(e,10);let n=0;for(let i=0;i<t.length;i++)if(t[i].path===e||i===a){n=i;break}i=n}}if(t.has("lovelace")){const e=t.get("lovelace");if(e&&e.config===this.lovelace.config||(this.lovelace.config.resources&&I(this.lovelace.config.resources,this.hass.auth.data.hassUrl),a=!0,Object(d.a)(this,"iron-resize")),!e||e.editMode!==this.lovelace.editMode){if("storage"===this.lovelace.mode&&"hass-unused-entities"===this._routeData.view){const t=this.config&&this.config.views;Object(h.a)(this,`/lovelace/${t[0].path||0}`),i=0}a=!0,Object(d.a)(this,"iron-resize")}}(void 0!==i||a)&&(a&&void 0===i&&(i=this._curView),C(()=>this._selectView(i,a)))}get config(){return this.lovelace.config}get _yamlMode(){return"yaml"===this.lovelace.mode}get _editMode(){return this.lovelace.editMode}get _layout(){return this.shadowRoot.getElementById("layout")}get _viewRoot(){return this.shadowRoot.getElementById("view")}_routeDataChanged(t){this._routeData=t.detail.value}_handleRefresh(){Object(d.a)(this,"config-refresh")}_handleUnusedEntities(){Object(h.a)(this,"/lovelace/hass-unused-entities")}_deselect(t){t.target.selected=null}_handleHelp(){window.open("https://www.home-assistant.io/lovelace/","_blank")}_editModeEnable(){this._yamlMode?window.alert("The edit UI is not available when in YAML mode."):(this.lovelace.setEditMode(!0),this.config.views.length<2&&Object(d.a)(this,"iron-resize"))}_editModeDisable(){this.lovelace.setEditMode(!1),this.config.views.length<2&&Object(d.a)(this,"iron-resize")}_editLovelace(){$(this,this.lovelace)}_editView(){k(this,{lovelace:this.lovelace,viewIndex:this._curView})}_moveViewLeft(){const t=this.lovelace,e=this._curView,i=this._curView-1;this._curView=i,t.saveConfig(Object(p.i)(t.config,e,i))}_moveViewRight(){const t=this.lovelace,e=this._curView,i=this._curView+1;this._curView=i,t.saveConfig(Object(p.i)(t.config,e,i))}_addView(){k(this,{lovelace:this.lovelace})}_handleViewSelected(t){const e=t.detail.selected;if(e!==this._curView){const t=this.config.views[e].path||e;Object(h.a)(this,`/lovelace/${t}`)}Object(o.a)(this,this._layout.header.scrollTarget)}_selectView(t,e){if(!e&&this._curView===t)return;t=void 0===t?0:t,this._curView=t,e&&(this._viewCache={});const a=this._viewRoot;if(a.lastChild&&a.removeChild(a.lastChild),"hass-unused-entities"===t){const t=document.createElement("hui-unused-entities");return Promise.all([i.e(121),i.e(62)]).then(i.bind(null,735)).then(()=>{t.hass=this.hass,t.lovelace=this.lovelace,t.narrow=this.narrow}),this.config.background&&t.style.setProperty("--lovelace-background",this.config.background),void a.append(t)}let n;const s=this.config.views[t];if(!s)return void this._editModeEnable();!e&&this._viewCache[t]?n=this._viewCache[t]:(s.panel&&s.cards&&s.cards.length>0?(n=document.createElement("hui-panel-view")).config=s:((n=document.createElement("hui-view")).lovelace=this.lovelace,n.columns=this.columns,n.index=t),this._viewCache[t]=n),n.hass=this.hass;const r=s.background||this.config.background;r&&n.style.setProperty("--lovelace-background",r),a.append(n)}}Object(a.b)([Object(s.g)()],A.prototype,"hass",void 0),Object(a.b)([Object(s.g)()],A.prototype,"lovelace",void 0),Object(a.b)([Object(s.g)()],A.prototype,"columns",void 0),Object(a.b)([Object(s.g)()],A.prototype,"narrow",void 0),Object(a.b)([Object(s.g)()],A.prototype,"route",void 0),Object(a.b)([Object(s.g)()],A.prototype,"_routeData",void 0),Object(a.b)([Object(s.g)()],A.prototype,"_curView",void 0),customElements.define("hui-root",A);let P=!1;const M=(t,e)=>{P||(P=!0,Object(d.a)(t,"register-dialog",{dialogShowEvent:"show-save-config",dialogTag:"hui-dialog-save-config",dialogImport:()=>i.e(45).then(i.bind(null,699))})),Object(d.a)(t,"show-save-config",e)};var L=i(327),D=i(328),B=i(176),N=i(329),R=i(188),H=i(180),V=i(121),U=i(227),q=i(117),F=i(222),K=i(265);const W=["binary_sensor","person","device_tracker","mailbox","sensor","sun","timer"],X=new Set(["persistent_notification","configurator","geo_location"]);let Y=!1;const Z=(t,e)=>{const i=[],a=[];for(const[n,s]of t){const t=Object(V.a)(n);if("alarm_control_panel"===t)i.push({type:"alarm-panel",entity:n});else if("camera"===t)i.push({type:"picture-entity",entity:n});else if("climate"===t)i.push({type:"thermostat",entity:n});else if("history_graph"===t&&s)i.push({type:"history-graph",entities:s.attributes.entity_id,hours_to_show:s.attributes.hours_to_show,title:s.attributes.friendly_name,refresh_interval:s.attributes.refresh});else if("media_player"===t)i.push({type:"media-control",entity:n});else if("plant"===t)i.push({type:"plant-status",entity:n});else if("weather"===t)i.push({type:"weather-forecast",entity:n});else if("weblink"===t&&s){const t={type:"weblink",url:s.state,name:Object(B.a)(s)};"icon"in s.attributes&&(t.icon=s.attributes.icon),a.push(t)}else a.push(n)}return a.length>0&&i.unshift(Object.assign({type:"entities",entities:a},e)),i},Q=(t,e,i,a,n)=>{const s=(t=>{const e={};return Object.keys(t).forEach(i=>{const a=t[i];a.attributes.hidden||X.has(Object(H.a)(a))||(e[i]=t[i])}),e})(a),r={};Object.keys(s).forEach(t=>{const e=s[t];e.attributes.order&&(r[t]=e.attributes.order)});const o=((t,e,i,a)=>{const n=Object.assign({},a),s=[];for(const r of t){const t=[],a=new Set(e.filter(t=>t.area_id===r.area_id).map(t=>t.id));for(const e of i)a.has(e.device_id)&&e.entity_id in n&&(t.push(n[e.entity_id]),delete n[e.entity_id]);t.length>0&&s.push([r,t])}return{areasWithEntities:s,otherEntities:n}})(t,e,i,s),c=J(n,"default_view","Home",void 0,o.otherEntities,r),l=[];return o.areasWithEntities.forEach(([t,e])=>{l.push(...Z(e.map(t=>[t.entity_id,t]),{title:t.name,show_header_toggle:!0}))}),c.cards.unshift(...l),c},J=(t,e,i,a,n,s)=>{const r=Object(N.a)(n);r.groups.sort((t,e)=>s[t.entity_id]-s[e.entity_id]);const o={},c={};Object.keys(r.ungrouped).forEach(t=>{const e=r.ungrouped[t],i=Object(H.a)(e),a=W.includes(i)?o:c;i in a||(a[i]=[]),a[i].push(e.entity_id)});let l=[];W.forEach(t=>{t in o&&(l=l.concat(o[t]))});let h=[];r.groups.forEach(t=>{h=h.concat(Z(t.attributes.entity_id.map(t=>[t,n[t]]),{title:Object(B.a)(t),show_header_toggle:"hidden"!==t.attributes.control}))}),Object.keys(c).sort().forEach(e=>{h=h.concat(Z(c[e].map(t=>[t,n[t]]),{title:t(`domain.${e}`)}))});const d={path:e,title:i,badges:l,cards:h};return a&&(d.icon=a),d},G=async t=>{Y||(Y=!0,Object(U.c)(t.connection,()=>void 0),Object(F.a)(t.connection,()=>void 0),Object(K.c)(t.connection,()=>void 0));const[e,i,a]=await Promise.all([Object(q.a)(t.connection,U.c),Object(q.a)(t.connection,F.a),Object(q.a)(t.connection,K.c)]);return tt(t.config,e,i,a,t.states,t.localize)},tt=async(t,e,a,n,s,r)=>{const o=Object(L.a)(s),c=o.map(t=>{const e=Object(D.a)(s,t),i={};return Object.keys(e).forEach((t,e)=>{i[t]=e}),J(r,Object(R.a)(t.entity_id),Object(B.a)(t),t.attributes.icon,e,i)});let l=t.location_name;return 0!==o.length&&"group.default_view"===o[0].entity_id||(c.unshift(Q(e,a,n,s,r)),t.components.includes("geo_location")&&c[0]&&c[0].cards&&c[0].cards.push({type:"map",geo_location_sources:["all"]}),c.length>1&&"Home"===l&&(l="ioBroker")),1===c.length&&0===c[0].cards.length&&(i.e(47).then(i.bind(null,700)),c[0].cards.push({type:"custom:hui-empty-state-card"})),{title:l,views:c}};var et=i(48);let it=!1;class at extends s.a{constructor(){super(),this._state="loading",this._ignoreNextUpdateEvent=!1,this._closeEditor=this._closeEditor.bind(this)}render(){const t=this._state;return"loaded"===t?s.f`
        <hui-root
          .hass="${this.hass}"
          .lovelace="${this.lovelace}"
          .route="${this.route}"
          .columns="${this._columns}"
          .narrow=${this.narrow}
          @config-refresh="${this._forceFetchConfig}"
        ></hui-root>
      `:"error"===t?s.f`
        <hass-error-screen title="Lovelace" .error="${this._errorMsg}">
          <mwc-button on-click="_forceFetchConfig"
            >${this.hass.localize("ui.panel.lovelace.reload_lovelace")}</mwc-button
          >
        </hass-error-screen>
      `:"yaml-editor"===t?s.f`
        <hui-editor
          .hass="${this.hass}"
          .lovelace="${this.lovelace}"
          .closeEditor="${this._closeEditor}"
        ></hui-editor>
      `:s.f`
      <hass-loading-screen
        rootnav
        .hass=${this.hass}
        .narrow=${this.narrow}
      ></hass-loading-screen>
    `}updated(t){if(super.updated(t),t.has("narrow"))return void this._updateColumns();if(!t.has("hass"))return;const e=t.get("hass");e&&this.hass.dockedSidebar!==e.dockedSidebar&&this._updateColumns()}firstUpdated(){this._fetchConfig(!1),Object(n.c)(this.hass.connection,()=>this._lovelaceChanged()),window.addEventListener("connection-status",t=>{"connected"===t.detail&&this._fetchConfig(!1)}),this._updateColumns=this._updateColumns.bind(this),this.mqls=[300,600,900,1200].map(t=>{const e=matchMedia(`(min-width: ${t}px)`);return e.addListener(this._updateColumns),e}),this._updateColumns()}connectedCallback(){super.connectedCallback(),this.lovelace&&this.hass&&this.lovelace.language!==this.hass.language?this._setLovelaceConfig(this.lovelace.config,this.lovelace.mode):this.lovelace&&"generated"===this.lovelace.mode&&(this._state="loading",this._regenerateConfig())}async _regenerateConfig(){const t=await G(this.hass);this._setLovelaceConfig(t,"generated"),this._state="loaded"}_closeEditor(){this._state="loaded"}_updateColumns(){const t=this.mqls.reduce((t,e)=>t+Number(e.matches),0);this._columns=Math.max(1,t-Number(!this.narrow&&"docked"===this.hass.dockedSidebar))}_lovelaceChanged(){this._ignoreNextUpdateEvent?this._ignoreNextUpdateEvent=!1:Object(et.a)(this,{message:this.hass.localize("ui.panel.lovelace.changed_toast.message"),action:{action:()=>this._fetchConfig(!1),text:this.hass.localize("ui.panel.lovelace.changed_toast.refresh")},duration:0,dismissable:!1})}_forceFetchConfig(){this._fetchConfig(!0)}async _fetchConfig(t){let e,i,a=this.panel.config.mode;const s=window;s.llConfProm?(i=s.llConfProm,s.llConfProm=void 0):(this.lovelace&&"yaml"===this.lovelace.mode&&(this._ignoreNextUpdateEvent=!0),i=Object(n.a)(this.hass.connection,t));try{e=await i}catch(r){if("config_not_found"!==r.code)return console.log(r),this._state="error",void(this._errorMsg=r.message);e=await G(this.hass),a="generated"}finally{this.lovelace&&"yaml"===this.lovelace.mode&&setTimeout(()=>{this._ignoreNextUpdateEvent=!1},2e3)}this._state="loaded",this._setLovelaceConfig(e,a)}_setLovelaceConfig(t,e){this.lovelace={config:t,mode:e,editMode:!!this.lovelace&&this.lovelace.editMode,language:this.hass.language,enableFullEditMode:()=>{it||(it=!0,Promise.all([i.e(9),i.e(69)]).then(i.bind(null,682))),this._state="yaml-editor"},setEditMode:t=>{t&&"generated"===this.lovelace.mode?M(this,{lovelace:this.lovelace}):this._updateLovelace({editMode:t})},saveConfig:async t=>{const{config:e,mode:i}=this.lovelace;try{this._updateLovelace({config:t,mode:"storage"}),this._ignoreNextUpdateEvent=!0,await Object(n.b)(this.hass,t)}catch(a){throw console.error(a),this._updateLovelace({config:e,mode:i}),a}}}}_updateLovelace(t){this.lovelace=Object.assign(Object.assign({},this.lovelace),t)}}Object(a.b)([Object(s.g)()],at.prototype,"panel",void 0),Object(a.b)([Object(s.g)()],at.prototype,"hass",void 0),Object(a.b)([Object(s.g)()],at.prototype,"narrow",void 0),Object(a.b)([Object(s.g)()],at.prototype,"route",void 0),Object(a.b)([Object(s.g)()],at.prototype,"_columns",void 0),Object(a.b)([Object(s.g)()],at.prototype,"_state",void 0),Object(a.b)([Object(s.g)()],at.prototype,"_errorMsg",void 0),Object(a.b)([Object(s.g)()],at.prototype,"lovelace",void 0),customElements.define("ha-panel-lovelace",at)},92:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return r}));const a=(t,e,i)=>new Promise((a,n)=>{const s=document.createElement(t);let r="src",o="body";switch(s.onload=()=>a(e),s.onerror=()=>n(e),t){case"script":s.async=!0,i&&(s.type=i);break;case"link":s.type="text/css",s.rel="stylesheet",r="href",o="head"}s[r]=e,document[o].appendChild(s)}),n=t=>a("link",t),s=t=>a("script",t),r=t=>a("script",t,"module")},93:function(t,e,i){"use strict";i(5),i(113),i(114),i(115),i(116);var a=i(60),n=(i(41),i(6)),s=i(3),r=i(97);Object(n.a)({is:"paper-input",_template:s.a`
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
  `,behaviors:[r.a,a.a],properties:{value:{type:String}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}})},94:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));i(5);var a=i(6),n=i(3);const s=Object(a.a)({_template:n.a`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){s.instance||(s.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(t){this._text="",this.async((function(){this._text=t}),100)},_onIronAnnounce:function(t){t.detail&&t.detail.text&&this.announce(t.detail.text)}});s.instance=null,s.requestAvailability=function(){s.instance||(s.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(s.instance)}}}]);
//# sourceMappingURL=chunk.82ca9e530c75a25c3af8.js.map