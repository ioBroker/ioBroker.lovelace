/*! For license information please see chunk.8c2b42a2b26a9050177f.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[104,8,13],{111:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a(5);const i={properties:{value:{type:Number,value:0,notify:!0,reflectToAttribute:!0},min:{type:Number,value:0,notify:!0},max:{type:Number,value:100,notify:!0},step:{type:Number,value:1,notify:!0},ratio:{type:Number,value:0,readOnly:!0,notify:!0}},observers:["_update(value, min, max, step)"],_calcRatio:function(t){return(this._clampValue(t)-this.min)/(this.max-this.min)},_clampValue:function(t){return Math.min(this.max,Math.max(this.min,this._calcStep(t)))},_calcStep:function(t){if(t=parseFloat(t),!this.step)return t;var e=Math.round((t-this.min)/this.step);return this.step<1?e/(1/this.step)+this.min:e*this.step+this.min},_validateValue:function(){var t=this._clampValue(this.value);return this.value=this.oldValue=isNaN(t)?this.oldValue:t,this.value!==t},_update:function(){this._validateValue(),this._setRatio(100*this._calcRatio(this.value))}}},113:function(t,e,a){"use strict";a(5);var i=a(94),n=a(61),r=a(6),o=a(2),s=a(4);Object(r.a)({_template:s.a`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[n.a],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){i.a.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=Object(o.a)(this).observeNodes(function(t){this._initSlottedInput()}.bind(this))},detached:function(){this._observer&&(Object(o.a)(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var t;if(this.allowedPattern)t=new RegExp(this.allowedPattern);else switch(this.inputElement.type){case"number":t=/[0-9.,e-]/}return t},_bindValueChanged:function(t,e){e&&(void 0===t?e.value=null:t!==e.value&&(this.inputElement.value=t),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:t}))},_onInput:function(){this.allowedPattern&&!this._patternAlreadyChecked&&(this._checkPatternValidity()||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput));this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(t){var e=8==t.keyCode||9==t.keyCode||13==t.keyCode||27==t.keyCode,a=19==t.keyCode||20==t.keyCode||45==t.keyCode||46==t.keyCode||144==t.keyCode||145==t.keyCode||t.keyCode>32&&t.keyCode<41||t.keyCode>111&&t.keyCode<124;return!(e||0==t.charCode&&a)},_onKeypress:function(t){if(this.allowedPattern||"number"===this.inputElement.type){var e=this._patternRegExp;if(e&&!(t.metaKey||t.ctrlKey||t.altKey)){this._patternAlreadyChecked=!0;var a=String.fromCharCode(t.charCode);this._isPrintable(t)&&!e.test(a)&&(t.preventDefault(),this._announceInvalidCharacter("Invalid character "+a+" not entered."))}}},_checkPatternValidity:function(){var t=this._patternRegExp;if(!t)return!0;for(var e=0;e<this.inputElement.value.length;e++)if(!t.test(this.inputElement.value[e]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var t=this.inputElement.checkValidity();return t&&(this.required&&""===this.bindValue?t=!1:this.hasValidator()&&(t=n.a.validate.call(this,this.bindValue))),this.invalid=!t,this.fire("iron-input-validate"),t},_announceInvalidCharacter:function(t){this.fire("iron-announce",{text:t})},_computeValue:function(t){return t}})},118:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var i=a(9),n=a(18);const r=Object(i.a)(t=>(class extends t{fire(t,e,a){return a=a||{},Object(n.a)(a.node||this,t,e,a)}}))},120:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a(5);var i=a(55),n=a(35);const r=[i.a,n.a,{hostAttributes:{role:"option",tabindex:"0"}}]},122:function(t,e,a){"use strict";a(5);const i={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(t,e){for(var a in e)t[a]=e[a]},_cloneConfig:function(t){var e={isClone:!0};return this._copyProperties(e,t),e},_getAnimationConfigRecursive:function(t,e,a){var i;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(i=t?this.animationConfig[t]:this.animationConfig,Array.isArray(i)||(i=[i]),i)for(var n,r=0;n=i[r];r++)if(n.animatable)n.animatable._getAnimationConfigRecursive(n.type||t,e,a);else if(n.id){var o=e[n.id];o?(o.isClone||(e[n.id]=this._cloneConfig(o),o=e[n.id]),this._copyProperties(o,n)):e[n.id]=n}else a.push(n)},getAnimationConfig:function(t){var e={},a=[];for(var i in this._getAnimationConfigRecursive(t,e,a),e)a.push(e[i]);return a}};a.d(e,"a",(function(){return n}));const n=[i,{_configureAnimations:function(t){var e=[],a=[];if(t.length>0)for(let r,o=0;r=t[o];o++){let t=document.createElement(r.name);if(t.isNeonAnimation){let e=null;t.configure||(t.configure=function(t){return null}),e=t.configure(r),a.push({result:e,config:r,neonAnimation:t})}else console.warn(this.is+":",r.name,"not found!")}for(var i=0;i<a.length;i++){let t=a[i].result,r=a[i].config,o=a[i].neonAnimation;try{"function"!=typeof t.cancel&&(t=document.timeline.play(t))}catch(n){t=null,console.warn("Couldnt play","(",r.name,").",n)}t&&e.push({neonAnimation:o,config:r,animation:t})}return e},_shouldComplete:function(t){for(var e=!0,a=0;a<t.length;a++)if("finished"!=t[a].animation.playState){e=!1;break}return e},_complete:function(t){for(var e=0;e<t.length;e++)t[e].neonAnimation.complete(t[e].config);for(e=0;e<t.length;e++)t[e].animation.cancel()},playAnimation:function(t,e){var a=this.getAnimationConfig(t);if(a){this._active=this._active||{},this._active[t]&&(this._complete(this._active[t]),delete this._active[t]);var i=this._configureAnimations(a);if(0!=i.length){this._active[t]=i;for(var n=0;n<i.length;n++)i[n].animation.onfinish=function(){this._shouldComplete(i)&&(this._complete(i),delete this._active[t],this.fire("neon-animation-finish",e,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",e,{bubbles:!1})}},cancelAnimation:function(){for(var t in this._active){var e=this._active[t];for(var a in e)e[a].animation.cancel()}this._active={}}}]},123:function(t,e,a){"use strict";a(5);var i=a(60),n=a(61);const r={properties:{checked:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_checkedChanged"},toggles:{type:Boolean,value:!0,reflectToAttribute:!0},value:{type:String,value:"on",observer:"_valueChanged"}},observers:["_requiredChanged(required)"],created:function(){this._hasIronCheckedElementBehavior=!0},_getValidity:function(t){return this.disabled||!this.required||this.checked},_requiredChanged:function(){this.required?this.setAttribute("aria-required","true"):this.removeAttribute("aria-required")},_checkedChanged:function(){this.active=this.checked,this.fire("iron-change")},_valueChanged:function(){void 0!==this.value&&null!==this.value||(this.value="on")}},o=[i.a,n.a,r];var s=a(57),l=a(69);a.d(e,"a",(function(){return d}));const c={_checkedChanged:function(){r._checkedChanged.call(this),this.hasRipple()&&(this.checked?this._ripple.setAttribute("checked",""):this._ripple.removeAttribute("checked"))},_buttonStateChanged:function(){l.a._buttonStateChanged.call(this),this.disabled||this.isAttached&&(this.checked=this.active)}},d=[s.a,o,c]},130:function(t,e,a){var i=a(156),n=["renderMarkdown"];t.exports=function(){var t=new Worker(a.p+"1d5c6afbb4be047e3ab4.worker.js",{name:"[hash].worker.js"});return i(t,n),t}},143:function(t,e,a){"use strict";a(5),a(45),a(145);var i=a(6),n=a(4),r=a(120);Object(i.a)({_template:n.a`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[r.a]})},144:function(t,e,a){"use strict";a(5),a(42);var i=a(125),n=a(6),r=a(4);Object(n.a)({_template:r.a`
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
`,is:"paper-listbox",behaviors:[i.a],hostAttributes:{role:"listbox"}})},145:function(t,e,a){"use strict";a(45),a(68),a(42),a(54);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(i.content)},147:function(t,e,a){"use strict";a(5);var i=a(31),n=a(35),r=a(87),o=a(122),s=a(6),l=a(2),c=a(4);Object(s.a)({_template:c.a`
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
`,is:"iron-dropdown",behaviors:[n.a,i.a,r.a,o.a],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var t=Object(l.a)(this.$.content).getDistributedNodes(),e=0,a=t.length;e<a;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){this.sizingTarget&&this.sizingTarget!==this||(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),r.b._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):r.b._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):r.b._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var t=this.containedElement,e=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),a=0;a<e.length;a++)e[a].node=t;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(t){this._readied&&(t?this.scrollAction&&"lock"!==this.scrollAction||(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var t=this.focusTarget||this.containedElement;t&&this.opened&&!this.noAutoFocus?t.focus():r.b._applyFocus.apply(this,arguments)}});const d={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(t){if(t.timing)for(var e in t.timing)this.animationTiming[e]=t.timing[e];return this.animationTiming},setPrefixedProperty:function(t,e,a){for(var i,n={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]}[e],r=0;i=n[r];r++)t.style[i]=a;t.style[e]=a},complete:function(t){}};Object(s.a)({is:"fade-in-animation",behaviors:[d],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(t)),this._effect}}),Object(s.a)({is:"fade-out-animation",behaviors:[d],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(t)),this._effect}});a(42),a(86);Object(s.a)({is:"paper-menu-grow-height-animation",behaviors:[d],configure:function(t){var e=t.node,a=e.getBoundingClientRect().height;return this._effect=new KeyframeEffect(e,[{height:a/2+"px"},{height:a+"px"}],this.timingFromConfig(t)),this._effect}}),Object(s.a)({is:"paper-menu-grow-width-animation",behaviors:[d],configure:function(t){var e=t.node,a=e.getBoundingClientRect().width;return this._effect=new KeyframeEffect(e,[{width:a/2+"px"},{width:a+"px"}],this.timingFromConfig(t)),this._effect}}),Object(s.a)({is:"paper-menu-shrink-width-animation",behaviors:[d],configure:function(t){var e=t.node,a=e.getBoundingClientRect().width;return this._effect=new KeyframeEffect(e,[{width:a+"px"},{width:a-a/20+"px"}],this.timingFromConfig(t)),this._effect}}),Object(s.a)({is:"paper-menu-shrink-height-animation",behaviors:[d],configure:function(t){var e=t.node,a=e.getBoundingClientRect().height;return this.setPrefixedProperty(e,"transformOrigin","0 0"),this._effect=new KeyframeEffect(e,[{height:a+"px",transform:"translateY(0)"},{height:a/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(t)),this._effect}});var p={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const u=Object(s.a)({_template:c.a`
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
`,is:"paper-menu-button",behaviors:[i.a,n.a],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:p.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:p.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:p.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var t=Object(l.a)(this.$.content).getDistributedNodes(),e=0,a=t.length;e<a;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(t){this.ignoreSelect||this.close()},_onIronActivate:function(t){this.closeOnActivate&&this.close()},_openedChanged:function(t,e){t?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):null!=e&&this.fire("paper-dropdown-close")},_disabledChanged:function(t){n.a._disabledChanged.apply(this,arguments),t&&this.opened&&this.close()},__onIronOverlayCanceled:function(t){var e=t.detail,a=this.$.trigger;Object(l.a)(e).path.indexOf(a)>-1&&t.preventDefault()}});Object.keys(p).forEach((function(t){u[t]=p[t]}))},148:function(t,e,a){"use strict";a(88);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML='<iron-iconset-svg name="paper-dropdown-menu" size="24">\n<svg><defs>\n<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n</defs></svg>\n</iron-iconset-svg>',document.head.appendChild(i.content)},149:function(t,e,a){"use strict";a(42);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML='<dom-module id="paper-dropdown-menu-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(i.content)},154:function(t,e,a){"use strict";var i,n=a(0),r=a(1),o=a(130),s=a.n(o),l=a(18);!function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.content="",e.allowSvg=!1,e._resize=function(){return Object(l.a)(e,"iron-resize")},e}Object(n.d)(e,t),e.prototype.update=function(e){t.prototype.update.call(this,e),i||(i=s()()),this._render()},e.prototype._render=function(){return Object(n.b)(this,void 0,void 0,(function(){var t,e,a;return Object(n.e)(this,(function(n){switch(n.label){case 0:return t=this,[4,i.renderMarkdown(this.content,{breaks:!0,gfm:!0,tables:!0},{allowSvg:this.allowSvg})];case 1:for(t.innerHTML=n.sent(),this._resize(),e=document.createTreeWalker(this,1,null,!1);e.nextNode();)(a=e.currentNode)instanceof HTMLAnchorElement&&a.host!==document.location.host?(a.target="_blank",a.rel="noreferrer noopener"):a&&a.addEventListener("load",this._resize);return[2]}}))}))},Object(n.c)([Object(r.g)()],e.prototype,"content",void 0),Object(n.c)([Object(r.g)({type:Boolean})],e.prototype,"allowSvg",void 0),e=Object(n.c)([Object(r.d)("ha-markdown")],e)}(r.b)},155:function(t,e,a){"use strict";a(5),a(45),a(68);var i=a(111),n=a(6),r=a(4);Object(n.a)({_template:r.a`
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
`,is:"paper-progress",behaviors:[i.a],properties:{secondaryProgress:{type:Number,value:0},secondaryRatio:{type:Number,value:0,readOnly:!0},indeterminate:{type:Boolean,value:!1,observer:"_toggleIndeterminate"},disabled:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_disabledChanged"}},observers:["_progressChanged(secondaryProgress, value, min, max, indeterminate)"],hostAttributes:{role:"progressbar"},_toggleIndeterminate:function(t){this.toggleClass("indeterminate",t,this.$.primaryProgress)},_transformProgress:function(t,e){var a="scaleX("+e/100+")";t.style.transform=t.style.webkitTransform=a},_mainRatioChanged:function(t){this._transformProgress(this.$.primaryProgress,t)},_progressChanged:function(t,e,a,i,n){t=this._clampValue(t),e=this._clampValue(e);var r=100*this._calcRatio(t),o=100*this._calcRatio(e);this._setSecondaryRatio(r),this._transformProgress(this.$.secondaryProgress,r),this._transformProgress(this.$.primaryProgress,o),this.secondaryProgress=t,n?this.removeAttribute("aria-valuenow"):this.setAttribute("aria-valuenow",e),this.setAttribute("aria-valuemin",a),this.setAttribute("aria-valuemax",i)},_disabledChanged:function(t){this.setAttribute("aria-disabled",t?"true":"false")},_hideSecondaryProgress:function(t){return 0===t}})},156:function(t,e){t.exports=function(t,e){var a=0,i={};t.addEventListener("message",(function(e){var a=e.data;if("RPC"===a.type)if(a.id){var n=i[a.id];n&&(delete i[a.id],a.error?n[1](Object.assign(Error(a.error.message),a.error)):n[0](a.result))}else{var r=document.createEvent("Event");r.initEvent(a.method,!1,!1),r.data=a.params,t.dispatchEvent(r)}})),e.forEach((function(e){t[e]=function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];return new Promise((function(r,o){var s=++a;i[s]=[r,o],t.postMessage({type:"RPC",id:s,method:e,params:n})}))}}))}},157:function(t,e,a){"use strict";a(45),a(93),a(155),a(68);var i=a(31),n=a(60),r=a(111),o=a(57),s=a(6),l=a(36);const c=a(5).c`
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
`;c.setAttribute("strip-whitespace",""),Object(s.a)({_template:c,is:"paper-slider",behaviors:[i.a,n.a,o.a,r.a],properties:{value:{type:Number,value:0},snaps:{type:Boolean,value:!1,notify:!0},pin:{type:Boolean,value:!1,notify:!0},secondaryProgress:{type:Number,value:0,notify:!0,observer:"_secondaryProgressChanged"},editable:{type:Boolean,value:!1},immediateValue:{type:Number,value:0,readOnly:!0,notify:!0},maxMarkers:{type:Number,value:0,notify:!0},expand:{type:Boolean,value:!1,readOnly:!0},ignoreBarTouch:{type:Boolean,value:!1},dragging:{type:Boolean,value:!1,readOnly:!0,notify:!0},transiting:{type:Boolean,value:!1,readOnly:!0},markers:{type:Array,readOnly:!0,value:function(){return[]}}},observers:["_updateKnob(value, min, max, snaps, step)","_valueChanged(value)","_immediateValueChanged(immediateValue)","_updateMarkers(maxMarkers, min, max, snaps)"],hostAttributes:{role:"slider",tabindex:0},keyBindings:{left:"_leftKey",right:"_rightKey","down pagedown home":"_decrementKey","up pageup end":"_incrementKey"},ready:function(){this.ignoreBarTouch&&Object(l.f)(this.$.sliderBar,"auto")},increment:function(){this.value=this._clampValue(this.value+this.step)},decrement:function(){this.value=this._clampValue(this.value-this.step)},_updateKnob:function(t,e,a,i,n){this.setAttribute("aria-valuemin",e),this.setAttribute("aria-valuemax",a),this.setAttribute("aria-valuenow",t),this._positionKnob(100*this._calcRatio(t))},_valueChanged:function(){this.fire("value-change",{composed:!0})},_immediateValueChanged:function(){this.dragging?this.fire("immediate-value-change",{composed:!0}):this.value=this.immediateValue},_secondaryProgressChanged:function(){this.secondaryProgress=this._clampValue(this.secondaryProgress)},_expandKnob:function(){this._setExpand(!0)},_resetKnob:function(){this.cancelDebouncer("expandKnob"),this._setExpand(!1)},_positionKnob:function(t){this._setImmediateValue(this._calcStep(this._calcKnobPosition(t))),this._setRatio(100*this._calcRatio(this.immediateValue)),this.$.sliderKnob.style.left=this.ratio+"%",this.dragging&&(this._knobstartx=this.ratio*this._w/100,this.translate3d(0,0,0,this.$.sliderKnob))},_calcKnobPosition:function(t){return(this.max-this.min)*t/100+this.min},_onTrack:function(t){switch(t.stopPropagation(),t.detail.state){case"start":this._trackStart(t);break;case"track":this._trackX(t);break;case"end":this._trackEnd()}},_trackStart:function(t){this._setTransiting(!1),this._w=this.$.sliderBar.offsetWidth,this._x=this.ratio*this._w/100,this._startx=this._x,this._knobstartx=this._startx,this._minx=-this._startx,this._maxx=this._w-this._startx,this.$.sliderKnob.classList.add("dragging"),this._setDragging(!0)},_trackX:function(t){this.dragging||this._trackStart(t);var e=this._isRTL?-1:1,a=Math.min(this._maxx,Math.max(this._minx,t.detail.dx*e));this._x=this._startx+a;var i=this._calcStep(this._calcKnobPosition(this._x/this._w*100));this._setImmediateValue(i);var n=this._calcRatio(this.immediateValue)*this._w-this._knobstartx;this.translate3d(n+"px",0,0,this.$.sliderKnob)},_trackEnd:function(){var t=this.$.sliderKnob.style;this.$.sliderKnob.classList.remove("dragging"),this._setDragging(!1),this._resetKnob(),this.value=this.immediateValue,t.transform=t.webkitTransform="",this.fire("change",{composed:!0})},_knobdown:function(t){this._expandKnob(),t.preventDefault(),this.focus()},_bartrack:function(t){this._allowBarEvent(t)&&this._onTrack(t)},_barclick:function(t){this._w=this.$.sliderBar.offsetWidth;var e=this.$.sliderBar.getBoundingClientRect(),a=(t.detail.x-e.left)/this._w*100;this._isRTL&&(a=100-a);var i=this.ratio;this._setTransiting(!0),this._positionKnob(a),i===this.ratio&&this._setTransiting(!1),this.async((function(){this.fire("change",{composed:!0})})),t.preventDefault(),this.focus()},_bardown:function(t){this._allowBarEvent(t)&&(this.debounce("expandKnob",this._expandKnob,60),this._barclick(t))},_knobTransitionEnd:function(t){t.target===this.$.sliderKnob&&this._setTransiting(!1)},_updateMarkers:function(t,e,a,i){i||this._setMarkers([]);var n=Math.round((a-e)/this.step);n>t&&(n=t),(n<0||!isFinite(n))&&(n=0),this._setMarkers(new Array(n))},_mergeClasses:function(t){return Object.keys(t).filter((function(e){return t[e]})).join(" ")},_getClassNames:function(){return this._mergeClasses({disabled:this.disabled,pin:this.pin,snaps:this.snaps,ring:this.immediateValue<=this.min,expand:this.expand,dragging:this.dragging,transiting:this.transiting,editable:this.editable})},_allowBarEvent:function(t){return!this.ignoreBarTouch||t.detail.sourceEvent instanceof MouseEvent},get _isRTL(){return void 0===this.__isRTL&&(this.__isRTL="rtl"===window.getComputedStyle(this).direction),this.__isRTL},_leftKey:function(t){this._isRTL?this._incrementKey(t):this._decrementKey(t)},_rightKey:function(t){this._isRTL?this._decrementKey(t):this._incrementKey(t)},_incrementKey:function(t){this.disabled||("end"===t.detail.key?this.value=this.max:this.increment(),this.fire("change"),t.preventDefault())},_decrementKey:function(t){this.disabled||("home"===t.detail.key?this.value=this.min:this.decrement(),this.fire("change"),t.preventDefault())},_changeValue:function(t){this.value=t.target.value,this.fire("change",{composed:!0})},_inputKeyDown:function(t){t.stopPropagation()},_createRipple:function(){return this._rippleContainer=this.$.sliderKnob,o.b._createRipple.call(this)},_focusedChanged:function(t){t&&this.ensureRipple(),this.hasRipple()&&(this._ripple.style.display=t?"":"none",this._ripple.holdDown=t)}})},175:function(t,e,a){"use strict";var i=a(9);e.a=Object(i.a)(t=>(class extends t{static get properties(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}__computeLocalize(t){return t}}))},176:function(t,e,a){"use strict";var i=a(188);e.a=function(t){return void 0===t.attributes.friendly_name?Object(i.a)(t.entity_id).replace(/_/g," "):t.attributes.friendly_name||""}},177:function(t,e,a){"use strict";var i,n,r,o,s=a(0),l=a(1),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(s.d)(e,t),Object.defineProperty(e,"styles",{get:function(){return Object(l.c)(i||(i=Object(s.f)(["\n      :host {\n        background: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        border-radius: var(--ha-card-border-radius, 2px);\n        box-shadow: var(\n          --ha-card-box-shadow,\n          0 2px 2px 0 rgba(0, 0, 0, 0.14),\n          0 1px 5px 0 rgba(0, 0, 0, 0.12),\n          0 3px 1px -2px rgba(0, 0, 0, 0.2)\n        );\n        color: var(--primary-text-color);\n        display: block;\n        transition: all 0.3s ease-out;\n        position: relative;\n      }\n\n      .card-header,\n      :host ::slotted(.card-header) {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        padding: 24px 16px 16px;\n        display: block;\n      }\n\n      :host ::slotted(.card-content:not(:first-child)),\n      slot:not(:first-child)::slotted(.card-content) {\n        padding-top: 0px;\n        margin-top: -8px;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n      }\n    "],["\n      :host {\n        background: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        border-radius: var(--ha-card-border-radius, 2px);\n        box-shadow: var(\n          --ha-card-box-shadow,\n          0 2px 2px 0 rgba(0, 0, 0, 0.14),\n          0 1px 5px 0 rgba(0, 0, 0, 0.12),\n          0 3px 1px -2px rgba(0, 0, 0, 0.2)\n        );\n        color: var(--primary-text-color);\n        display: block;\n        transition: all 0.3s ease-out;\n        position: relative;\n      }\n\n      .card-header,\n      :host ::slotted(.card-header) {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        padding: 24px 16px 16px;\n        display: block;\n      }\n\n      :host ::slotted(.card-content:not(:first-child)),\n      slot:not(:first-child)::slotted(.card-content) {\n        padding-top: 0px;\n        margin-top: -8px;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n      }\n    "])))},enumerable:!0,configurable:!0}),e.prototype.render=function(){return Object(l.f)(o||(o=Object(s.f)(["\n      ","\n      <slot></slot>\n    "],["\n      ","\n      <slot></slot>\n    "])),this.header?Object(l.f)(n||(n=Object(s.f)(['\n            <div class="card-header">',"</div>\n          "],['\n            <div class="card-header">',"</div>\n          "])),this.header):Object(l.f)(r||(r=Object(s.f)([""],[""]))))},Object(s.c)([Object(l.g)()],e.prototype,"header",void 0),e}(l.a);customElements.define("ha-card",c)},178:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var i=a(119),n={alert:"hass:alert",alexa:"hass:amazon-alexa",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",google_assistant:"hass:google-assistant",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weather:"hass:weather-cloudy",weblink:"hass:open-in-new"};function r(t,e){if(t in n)return n[t];switch(t){case"alarm_control_panel":switch(e){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return e&&"off"===e?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===e?"hass:window-closed":"hass:window-open";case"lock":return e&&"unlocked"===e?"hass:lock-open":"hass:lock";case"media_player":return e&&"off"!==e&&"idle"!==e?"hass:cast-connected":"hass:cast";case"zwave":switch(e){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+t+" ("+e+")"),i.a}}},179:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var i=a(0),n=(a(109),customElements.get("iron-icon")),r=!1,o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i.d)(e,t),e.prototype.listen=function(e,i,n){t.prototype.listen.call(this,e,i,n),r||"mdi"!==this._iconsetName||(r=!0,a.e(70).then(a.bind(null,215)))},e}(n);customElements.define("ha-icon",o)},180:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var i=a(121);function n(t){return Object(i.a)(t.entity_id)}},182:function(t,e,a){"use strict";a(5);const i=a(4).a`
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
`;i.setAttribute("style","display: none;"),document.head.appendChild(i.content)},184:function(t,e,a){"use strict";var i,n,r,o=a(0),s=a(1),l=(a(179),a(180)),c=a(192),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(o.d)(e,t),e.prototype.render=function(){var t=this.stateObj;return t?Object(s.f)(n||(n=Object(o.f)(['\n      <ha-icon\n        id="icon"\n        data-domain=',"\n        data-state=","\n        .icon=","\n      ></ha-icon>\n    "],['\n      <ha-icon\n        id="icon"\n        data-domain=',"\n        data-state=","\n        .icon=","\n      ></ha-icon>\n    "])),Object(l.a)(t),t.state,this.overrideIcon||Object(c.a)(t)):Object(s.f)(i||(i=Object(o.f)([""],[""])))},e.prototype.updated=function(t){if(t.has("stateObj")&&this.stateObj){var e=this.stateObj,a={color:"",filter:""},i={backgroundImage:""};if(e)if(e.attributes.entity_picture&&!this.overrideIcon||this.overrideImage){var n=this.overrideImage||e.attributes.entity_picture;this.hass&&(n=this.hass.hassUrl(n)),i.backgroundImage="url("+n+")",a.display="none"}else{if(e.attributes.hs_color){var r=e.attributes.hs_color[0],o=e.attributes.hs_color[1];o>10&&(a.color="hsl("+r+", 100%, "+(100-o/2)+"%)")}if(e.attributes.brightness){var s=e.attributes.brightness;if("number"!=typeof s){var l="Type error: state-badge expected number, but type of "+e.entity_id+".attributes.brightness is "+typeof s+" ("+s+")";console.warn(l)}a.filter="brightness("+(s+245)/5+"%)"}}Object.assign(this._icon.style,a),Object.assign(this.style,i)}},Object.defineProperty(e,"styles",{get:function(){return Object(s.c)(r||(r=Object(o.f)(['\n      :host {\n        position: relative;\n        display: inline-block;\n        width: 40px;\n        color: var(--paper-item-icon-color, #44739e);\n        border-radius: 50%;\n        height: 40px;\n        text-align: center;\n        background-size: cover;\n        line-height: 40px;\n      }\n\n      ha-icon {\n        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;\n      }\n\n      /* Color the icon if light or sun is on */\n      ha-icon[data-domain="light"][data-state="on"],\n      ha-icon[data-domain="switch"][data-state="on"],\n      ha-icon[data-domain="binary_sensor"][data-state="on"],\n      ha-icon[data-domain="fan"][data-state="on"],\n      ha-icon[data-domain="sun"][data-state="above_horizon"] {\n        color: var(--paper-item-icon-active-color, #fdd835);\n      }\n\n      /* Color the icon if unavailable */\n      ha-icon[data-state="unavailable"] {\n        color: var(--state-icon-unavailable-color);\n      }\n    '],['\n      :host {\n        position: relative;\n        display: inline-block;\n        width: 40px;\n        color: var(--paper-item-icon-color, #44739e);\n        border-radius: 50%;\n        height: 40px;\n        text-align: center;\n        background-size: cover;\n        line-height: 40px;\n      }\n\n      ha-icon {\n        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;\n      }\n\n      /* Color the icon if light or sun is on */\n      ha-icon[data-domain="light"][data-state="on"],\n      ha-icon[data-domain="switch"][data-state="on"],\n      ha-icon[data-domain="binary_sensor"][data-state="on"],\n      ha-icon[data-domain="fan"][data-state="on"],\n      ha-icon[data-domain="sun"][data-state="above_horizon"] {\n        color: var(--paper-item-icon-active-color, #fdd835);\n      }\n\n      /* Color the icon if unavailable */\n      ha-icon[data-state="unavailable"] {\n        color: var(--state-icon-unavailable-color);\n      }\n    '])))},enumerable:!0,configurable:!0}),Object(o.c)([Object(s.g)()],e.prototype,"stateObj",void 0),Object(o.c)([Object(s.g)()],e.prototype,"overrideIcon",void 0),Object(o.c)([Object(s.g)()],e.prototype,"overrideImage",void 0),Object(o.c)([Object(s.h)("ha-icon")],e.prototype,"_icon",void 0),e}(s.a);customElements.define("state-badge",d)},187:function(t,e,a){"use strict";a(5),a(68),a(151);var i=a(6),n=a(4),r=a(126);const o=n.a`
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
`;o.setAttribute("strip-whitespace",""),Object(i.a)({_template:o,is:"paper-spinner",behaviors:[r.a]})},188:function(t,e,a){"use strict";function i(t){return t.substr(t.indexOf(".")+1)}a.d(e,"a",(function(){return i}))},189:function(t,e,a){"use strict";var i=a(4),n=a(30),r=(a(230),a(184),a(176)),o=a(96);customElements.define("state-info",class extends n.a{static get template(){return i.a`
      ${this.styleTemplate} ${this.stateBadgeTemplate} ${this.infoTemplate}
    `}static get styleTemplate(){return i.a`
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
    `}static get stateBadgeTemplate(){return i.a`
      <state-badge state-obj="[[stateObj]]"></state-badge>
    `}static get infoTemplate(){return i.a`
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
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:()=>!1},rtl:{type:Boolean,reflectToAttribute:!0,computed:"computeRTL(hass)"}}}computeStateName(t){return Object(r.a)(t)}computeRTL(t){return Object(o.a)(t)}})},192:function(t,e,a){"use strict";var i=a(119),n=a(121),r=a(178);var o={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",signal_strength:"hass:wifi"};a.d(e,"a",(function(){return l}));var s={binary_sensor:function(t){var e=t.state&&"off"===t.state;switch(t.attributes.device_class){case"battery":return e?"hass:battery":"hass:battery-outline";case"cold":return e?"hass:thermometer":"hass:snowflake";case"connectivity":return e?"hass:server-network-off":"hass:server-network";case"door":return e?"hass:door-closed":"hass:door-open";case"garage_door":return e?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return e?"hass:shield-check":"hass:alert";case"heat":return e?"hass:thermometer":"hass:fire";case"light":return e?"hass:brightness-5":"hass:brightness-7";case"lock":return e?"hass:lock":"hass:lock-open";case"moisture":return e?"hass:water-off":"hass:water";case"motion":return e?"hass:walk":"hass:run";case"occupancy":return e?"hass:home-outline":"hass:home";case"opening":return e?"hass:square":"hass:square-outline";case"plug":return e?"hass:power-plug-off":"hass:power-plug";case"presence":return e?"hass:home-outline":"hass:home";case"sound":return e?"hass:music-note-off":"hass:music-note";case"vibration":return e?"hass:crop-portrait":"hass:vibrate";case"window":return e?"hass:window-closed":"hass:window-open";default:return e?"hass:radiobox-blank":"hass:checkbox-marked-circle"}},cover:function(t){var e="closed"!==t.state;switch(t.attributes.device_class){case"garage":return e?"hass:garage-open":"hass:garage";case"door":return e?"hass:door-open":"hass:door-closed";case"shutter":return e?"hass:window-shutter-open":"hass:window-shutter";case"blind":return e?"hass:blinds-open":"hass:blinds";case"window":return e?"hass:window-open":"hass:window-closed";default:return Object(r.a)("cover",t.state)}},sensor:function(t){var e=t.attributes.device_class;if(e&&e in o)return o[e];if("battery"===e){var a=Number(t.state);if(isNaN(a))return"hass:battery-unknown";var n=10*Math.round(a/10);return n>=100?"hass:battery":n<=0?"hass:battery-alert":"hass:battery-"+n}var s=t.attributes.unit_of_measurement;return s===i.j||s===i.k?"hass:thermometer":Object(r.a)("sensor")},input_datetime:function(t){return t.attributes.has_date?t.attributes.has_time?Object(r.a)("input_datetime"):"hass:calendar":"hass:clock"}};function l(t){if(!t)return i.a;if(t.attributes.icon)return t.attributes.icon;var e=Object(n.a)(t.entity_id);return e in s?s[e](t):Object(r.a)(e,t.state)}},197:function(t,e,a){"use strict";var i={},n=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,r="[^\\s]+",o=/\[([^]*?)\]/gm,s=function(){};function l(t,e){for(var a=[],i=0,n=t.length;i<n;i++)a.push(t[i].substr(0,e));return a}function c(t){return function(e,a,i){var n=i[t].indexOf(a.charAt(0).toUpperCase()+a.substr(1).toLowerCase());~n&&(e.month=n)}}function d(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}var p=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],u=["January","February","March","April","May","June","July","August","September","October","November","December"],h=l(u,3),b=l(p,3);i.i18n={dayNamesShort:b,dayNames:p,monthNamesShort:h,monthNames:u,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10)*t%10]}};var m={D:function(t){return t.getDate()},DD:function(t){return d(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return t.getDay()},dd:function(t){return d(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return t.getMonth()+1},MM:function(t){return d(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return d(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return d(t.getFullYear(),4)},h:function(t){return t.getHours()%12||12},hh:function(t){return d(t.getHours()%12||12)},H:function(t){return t.getHours()},HH:function(t){return d(t.getHours())},m:function(t){return t.getMinutes()},mm:function(t){return d(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return d(t.getSeconds())},S:function(t){return Math.round(t.getMilliseconds()/100)},SS:function(t){return d(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return d(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+d(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)}},g={D:["\\d\\d?",function(t,e){t.day=e}],Do:["\\d\\d?"+r,function(t,e){t.day=parseInt(e,10)}],M:["\\d\\d?",function(t,e){t.month=e-1}],YY:["\\d\\d?",function(t,e){var a=+(""+(new Date).getFullYear()).substr(0,2);t.year=""+(e>68?a-1:a)+e}],h:["\\d\\d?",function(t,e){t.hour=e}],m:["\\d\\d?",function(t,e){t.minute=e}],s:["\\d\\d?",function(t,e){t.second=e}],YYYY:["\\d{4}",function(t,e){t.year=e}],S:["\\d",function(t,e){t.millisecond=100*e}],SS:["\\d{2}",function(t,e){t.millisecond=10*e}],SSS:["\\d{3}",function(t,e){t.millisecond=e}],d:["\\d\\d?",s],ddd:[r,s],MMM:[r,c("monthNamesShort")],MMMM:[r,c("monthNames")],a:[r,function(t,e,a){var i=e.toLowerCase();i===a.amPm[0]?t.isPm=!1:i===a.amPm[1]&&(t.isPm=!0)}],ZZ:["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",function(t,e){var a,i=(e+"").match(/([+-]|\d\d)/gi);i&&(a=60*i[1]+parseInt(i[2],10),t.timezoneOffset="+"===i[0]?a:-a)}]};g.dd=g.d,g.dddd=g.ddd,g.DD=g.D,g.mm=g.m,g.hh=g.H=g.HH=g.h,g.MM=g.M,g.ss=g.s,g.A=g.a,i.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},i.format=function(t,e,a){var r=a||i.i18n;if("number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date in fecha.format");e=i.masks[e]||e||i.masks.default;var s=[];return(e=(e=e.replace(o,(function(t,e){return s.push(e),"@@@"}))).replace(n,(function(e){return e in m?m[e](t,r):e.slice(1,e.length-1)}))).replace(/@@@/g,(function(){return s.shift()}))},i.parse=function(t,e,a){var r=a||i.i18n;if("string"!=typeof e)throw new Error("Invalid format in fecha.parse");if(e=i.masks[e]||e,t.length>1e3)return null;var s={},l=[],c=[];e=e.replace(o,(function(t,e){return c.push(e),"@@@"}));var d,p=(d=e,d.replace(/[|\\{()[^$+*?.-]/g,"\\$&")).replace(n,(function(t){if(g[t]){var e=g[t];return l.push(e[1]),"("+e[0]+")"}return t}));p=p.replace(/@@@/g,(function(){return c.shift()}));var u=t.match(new RegExp(p,"i"));if(!u)return null;for(var h=1;h<u.length;h++)l[h-1](s,u[h],r);var b,m=new Date;return!0===s.isPm&&null!=s.hour&&12!=+s.hour?s.hour=+s.hour+12:!1===s.isPm&&12==+s.hour&&(s.hour=0),null!=s.timezoneOffset?(s.minute=+(s.minute||0)-+s.timezoneOffset,b=new Date(Date.UTC(s.year||m.getFullYear(),s.month||0,s.day||1,s.hour||0,s.minute||0,s.second||0,s.millisecond||0))):b=new Date(s.year||m.getFullYear(),s.month||0,s.day||1,s.hour||0,s.minute||0,s.second||0,s.millisecond||0),b},e.a=i},200:function(t,e,a){"use strict";var i=a(197);e.a=function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleString(e,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}:function(t){return i.a.format(t,"haDateTime")}},206:function(t,e,a){"use strict";a(5),a(45);var i=a(6),n=a(2),r=a(4),o=a(128);Object(i.a)({_template:r.a`
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
`,is:"app-header-layout",behaviors:[o.a],properties:{hasScrollingRegion:{type:Boolean,value:!1,reflectToAttribute:!0}},observers:["resetLayout(isAttached, hasScrollingRegion)"],get header(){return Object(n.a)(this.$.headerSlot).getDistributedNodes()[0]},_updateLayoutStates:function(){var t=this.header;if(this.isAttached&&t){this.$.wrapper.classList.remove("initializing"),t.scrollTarget=this.hasScrollingRegion?this.$.contentContainer:this.ownerDocument.documentElement;var e=t.offsetHeight;this.hasScrollingRegion?(t.style.left="",t.style.right=""):requestAnimationFrame(function(){var e=this.getBoundingClientRect(),a=document.documentElement.clientWidth-e.right;t.style.left=e.left+"px",t.style.right=a+"px"}.bind(this));var a=this.$.contentContainer.style;t.fixed&&!t.condenses&&this.hasScrollingRegion?(a.marginTop=e+"px",a.paddingTop=""):(a.paddingTop=e+"px",a.marginTop="")}}})},207:function(t,e,a){"use strict";a(5),a(45),a(68),a(42);var i=a(123),n=a(69),r=a(6),o=a(36),s=a(4),l=a(62);const c=s.a`

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

  `;c.setAttribute("strip-whitespace",""),Object(r.a)({_template:c,is:"paper-toggle-button",behaviors:[i.a],hostAttributes:{role:"button","aria-pressed":"false",tabindex:0},properties:{},listeners:{track:"_ontrack"},attached:function(){Object(l.a)(this,(function(){Object(o.f)(this,"pan-y")}))},_ontrack:function(t){var e=t.detail;"start"===e.state?this._trackStart(e):"track"===e.state?this._trackMove(e):"end"===e.state&&this._trackEnd(e)},_trackStart:function(t){this._width=this.$.toggleBar.offsetWidth/2,this._trackChecked=this.checked,this.$.toggleButton.classList.add("dragging")},_trackMove:function(t){var e=t.dx;this._x=Math.min(this._width,Math.max(0,this._trackChecked?this._width+e:e)),this.translate3d(this._x+"px",0,0,this.$.toggleButton),this._userActivate(this._x>this._width/2)},_trackEnd:function(t){this.$.toggleButton.classList.remove("dragging"),this.transform("",this.$.toggleButton)},_createRipple:function(){this._rippleContainer=this.$.toggleButton;var t=n.a._createRipple();return t.id="ink",t.setAttribute("recenters",""),t.classList.add("circle","toggle-ink"),t}})},214:function(t,e,a){"use strict";var i=a(197);e.a=function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleTimeString(e,{hour:"numeric",minute:"2-digit"})}:function(t){return i.a.format(t,"shortTime")}},217:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var i=function(t,e){return 0!=(t.attributes.supported_features&e)}},221:function(t,e,a){"use strict";function i(t,e){return t&&-1!==t.config.components.indexOf(e)}a.d(e,"a",(function(){return i}))},223:function(t,e,a){"use strict";var i=a(180),n=a(200),r=a(240),o=a(214);e.a=function(t,e,a){var s,l=Object(i.a)(e);if("binary_sensor"===l)e.attributes.device_class&&(s=t("state."+l+"."+e.attributes.device_class+"."+e.state)),s||(s=t("state."+l+".default."+e.state));else if(e.attributes.unit_of_measurement&&!["unknown","unavailable"].includes(e.state))s=e.state+" "+e.attributes.unit_of_measurement;else if("input_datetime"===l){var c=void 0;if(e.attributes.has_time)if(e.attributes.has_date)c=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day,e.attributes.hour,e.attributes.minute),s=Object(n.a)(c,a);else{var d=new Date;c=new Date(d.getFullYear(),d.getMonth(),d.getDay(),e.attributes.hour,e.attributes.minute),s=Object(o.a)(c,a)}else c=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day),s=Object(r.a)(c,a)}else s="zwave"===l?["initializing","dead"].includes(e.state)?t("state.zwave.query_stage."+e.state,"query_stage",e.attributes.query_stage):t("state.zwave.default."+e.state):t("state."+l+"."+e.state);return s||(s=t("state.default."+e.state)||t("component."+l+".state."+e.state)||e.state),s}},228:function(t,e,a){"use strict";a(5),a(31),a(109),a(147),a(42),a(148),a(149);var i=a(55),n=a(35),r=a(60),o=a(61),s=a(69),l=a(6),c=a(2),d=a(36),p=a(4);Object(l.a)({_template:p.a`
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
`,is:"paper-dropdown-menu-light",behaviors:[i.a,n.a,s.a,r.a,o.a],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0,observer:"_valueChanged"},label:{type:String},placeholder:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,hasContent:{type:Boolean,readOnly:!0}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},hostAttributes:{tabindex:0,role:"combobox","aria-autocomplete":"none","aria-haspopup":"true"},observers:["_selectedItemChanged(selectedItem)"],attached:function(){var t=this.contentElement;t&&t.selectedItem&&this._setSelectedItem(t.selectedItem)},get contentElement(){for(var t=Object(c.a)(this.$.content).getDistributedNodes(),e=0,a=t.length;e<a;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(t){this._setSelectedItem(t.detail.item)},_onIronDeselect:function(t){this._setSelectedItem(null)},_onTap:function(t){d.c(t)===this&&this.open()},_selectedItemChanged:function(t){var e="";e=t?t.label||t.getAttribute("label")||t.textContent.trim():"",this.value=e,this._setSelectedItemLabel(e)},_computeMenuVerticalOffset:function(t,e){return e||(t?-4:8)},_getValidity:function(t){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var t=this.opened?"true":"false",e=this.contentElement;e&&e.setAttribute("aria-expanded",t)},_computeLabelClass:function(t,e,a){var i="";return!0===t?a?"label-is-hidden":"":((a||!0===e)&&(i+=" label-is-floating"),i)},_valueChanged:function(){this.$.input&&this.$.input.textContent!==this.value&&(this.$.input.textContent=this.value),this._setHasContent(!!this.value)}})},230:function(t,e,a){"use strict";var i=a(2),n=a(30),r=a(235),o=a(175);customElements.define("ha-relative-time",class extends(Object(o.a)(n.a)){static get properties(){return{hass:Object,datetime:{type:String,observer:"datetimeChanged"},datetimeObj:{type:Object,observer:"datetimeObjChanged"},parsedDateTime:Object}}constructor(){super(),this.updateRelative=this.updateRelative.bind(this)}connectedCallback(){super.connectedCallback(),this.updateInterval=setInterval(this.updateRelative,6e4)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.updateInterval)}datetimeChanged(t){this.parsedDateTime=t?new Date(t):null,this.updateRelative()}datetimeObjChanged(t){this.parsedDateTime=t,this.updateRelative()}updateRelative(){const t=Object(i.a)(this);this.parsedDateTime?t.innerHTML=Object(r.a)(this.parsedDateTime,this.localize):t.innerHTML=this.localize("ui.components.relative_time.never")}})},231:function(t,e,a){"use strict";var i,n,r,o,s=a(0),l=(a(108),a(207),a(119)),c=a(180),d=a(1),p=a(103),u=a(176),h=function(t){return void 0!==t&&!l.i.includes(t.state)},b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._isOn=!1,e}return Object(s.d)(e,t),e.prototype.render=function(){return this.stateObj?this.stateObj.attributes.assumed_state?Object(d.f)(n||(n=Object(s.f)(["\n        <paper-icon-button\n          aria-label=",'\n          icon="hass:flash-off"\n          @click=',"\n          ?state-active=","\n        ></paper-icon-button>\n        <paper-icon-button\n          aria-label=",'\n          icon="hass:flash"\n          @click=',"\n          ?state-active=","\n        ></paper-icon-button>\n      "],["\n        <paper-icon-button\n          aria-label=",'\n          icon="hass:flash-off"\n          @click=',"\n          ?state-active=","\n        ></paper-icon-button>\n        <paper-icon-button\n          aria-label=",'\n          icon="hass:flash"\n          @click=',"\n          ?state-active=","\n        ></paper-icon-button>\n      "])),"Turn "+Object(u.a)(this.stateObj)+" off",this._turnOff,!this._isOn,"Turn "+Object(u.a)(this.stateObj)+" on",this._turnOn,this._isOn):Object(d.f)(r||(r=Object(s.f)(["\n      <paper-toggle-button\n        aria-label=","\n        .checked=","\n        @change=","\n      ></paper-toggle-button>\n    "],["\n      <paper-toggle-button\n        aria-label=","\n        .checked=","\n        @change=","\n      ></paper-toggle-button>\n    "])),"Toggle "+Object(u.a)(this.stateObj)+" "+(this._isOn?"off":"on"),this._isOn,this._toggleChanged):Object(d.f)(i||(i=Object(s.f)(["\n        <paper-toggle-button disabled></paper-toggle-button>\n      "],["\n        <paper-toggle-button disabled></paper-toggle-button>\n      "])))},e.prototype.firstUpdated=function(e){t.prototype.firstUpdated.call(this,e),this.addEventListener("click",(function(t){return t.stopPropagation()}))},e.prototype.updated=function(t){t.has("stateObj")&&(this._isOn=h(this.stateObj))},e.prototype._toggleChanged=function(t){var e=t.target.checked;e!==this._isOn&&this._callService(e)},e.prototype._turnOn=function(){this._callService(!0)},e.prototype._turnOff=function(){this._callService(!1)},e.prototype._callService=function(t){return Object(s.b)(this,void 0,void 0,(function(){var e,a,i,n,r=this;return Object(s.e)(this,(function(o){switch(o.label){case 0:return this.hass&&this.stateObj?(Object(p.a)("light"),"lock"===(e=Object(c.a)(this.stateObj))?(a="lock",i=t?"unlock":"lock"):"cover"===e?(a="cover",i=t?"open_cover":"close_cover"):"group"===e?(a="homeassistant",i=t?"turn_on":"turn_off"):(a=e,i=t?"turn_on":"turn_off"),n=this.stateObj,this._isOn=t,[4,this.hass.callService(a,i,{entity_id:this.stateObj.entity_id})]):[2];case 1:return o.sent(),setTimeout((function(){return Object(s.b)(r,void 0,void 0,(function(){return Object(s.e)(this,(function(t){return this.stateObj===n&&(this._isOn=h(this.stateObj)),[2]}))}))}),2e3),[2]}}))}))},Object.defineProperty(e,"styles",{get:function(){return Object(d.c)(o||(o=Object(s.f)(["\n      :host {\n        white-space: nowrap;\n        min-width: 38px;\n      }\n      paper-icon-button {\n        color: var(\n          --paper-icon-button-inactive-color,\n          var(--primary-text-color)\n        );\n        transition: color 0.5s;\n      }\n      paper-icon-button[state-active] {\n        color: var(--paper-icon-button-active-color, var(--primary-color));\n      }\n      paper-toggle-button {\n        cursor: pointer;\n        --paper-toggle-button-label-spacing: 0;\n        padding: 13px 5px;\n        margin: -4px -5px;\n      }\n    "],["\n      :host {\n        white-space: nowrap;\n        min-width: 38px;\n      }\n      paper-icon-button {\n        color: var(\n          --paper-icon-button-inactive-color,\n          var(--primary-text-color)\n        );\n        transition: color 0.5s;\n      }\n      paper-icon-button[state-active] {\n        color: var(--paper-icon-button-active-color, var(--primary-color));\n      }\n      paper-toggle-button {\n        cursor: pointer;\n        --paper-toggle-button-label-spacing: 0;\n        padding: 13px 5px;\n        margin: -4px -5px;\n      }\n    "])))},enumerable:!0,configurable:!0}),Object(s.c)([Object(d.g)()],e.prototype,"stateObj",void 0),Object(s.c)([Object(d.g)()],e.prototype,"_isOn",void 0),e}(d.a);customElements.define("ha-entity-toggle",b)},233:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return p}));var i=a(217);class n{constructor(t,e){this.hass=t,this.stateObj=e,this._attr=e.attributes,this._feat=this._attr.supported_features}get isFullyOpen(){return void 0!==this._attr.current_position?100===this._attr.current_position:"open"===this.stateObj.state}get isFullyClosed(){return void 0!==this._attr.current_position?0===this._attr.current_position:"closed"===this.stateObj.state}get isFullyOpenTilt(){return 100===this._attr.current_tilt_position}get isFullyClosedTilt(){return 0===this._attr.current_tilt_position}get isOpening(){return"opening"===this.stateObj.state}get isClosing(){return"closing"===this.stateObj.state}get supportsOpen(){return Object(i.a)(this.stateObj,1)}get supportsClose(){return Object(i.a)(this.stateObj,2)}get supportsSetPosition(){return Object(i.a)(this.stateObj,4)}get supportsStop(){return Object(i.a)(this.stateObj,8)}get supportsOpenTilt(){return Object(i.a)(this.stateObj,16)}get supportsCloseTilt(){return Object(i.a)(this.stateObj,32)}get supportsStopTilt(){return Object(i.a)(this.stateObj,64)}get supportsSetTiltPosition(){return Object(i.a)(this.stateObj,128)}get isTiltOnly(){const t=this.supportsOpen||this.supportsClose||this.supportsStop;return(this.supportsOpenTilt||this.supportsCloseTilt||this.supportsStopTilt)&&!t}openCover(){this.callService("open_cover")}closeCover(){this.callService("close_cover")}stopCover(){this.callService("stop_cover")}openCoverTilt(){this.callService("open_cover_tilt")}closeCoverTilt(){this.callService("close_cover_tilt")}stopCoverTilt(){this.callService("stop_cover_tilt")}setCoverPosition(t){this.callService("set_cover_position",{position:t})}setCoverTiltPosition(t){this.callService("set_cover_tilt_position",{tilt_position:t})}callService(t,e={}){e.entity_id=this.stateObj.entity_id,this.hass.callService("cover",t,e)}}const r=t=>Object(i.a)(t,1),o=t=>Object(i.a)(t,2),s=t=>Object(i.a)(t,8),l=t=>Object(i.a)(t,16),c=t=>Object(i.a)(t,32),d=t=>Object(i.a)(t,64);function p(t){const e=r(t)||o(t)||s(t);return(l(t)||c(t)||d(t))&&!e}},234:function(t,e,a){"use strict";a(5);var i=a(6);Object(i.a)({is:"app-route",properties:{route:{type:Object,notify:!0},pattern:{type:String},data:{type:Object,value:function(){return{}},notify:!0},autoActivate:{type:Boolean,value:!1},_queryParamsUpdating:{type:Boolean,value:!1},queryParams:{type:Object,value:function(){return{}},notify:!0},tail:{type:Object,value:function(){return{path:null,prefix:null,__queryParams:null}},notify:!0},active:{type:Boolean,notify:!0,readOnly:!0},_matched:{type:String,value:""}},observers:["__tryToMatch(route.path, pattern)","__updatePathOnDataChange(data.*)","__tailPathChanged(tail.path)","__routeQueryParamsChanged(route.__queryParams)","__tailQueryParamsChanged(tail.__queryParams)","__queryParamsChanged(queryParams.*)"],created:function(){this.linkPaths("route.__queryParams","tail.__queryParams"),this.linkPaths("tail.__queryParams","route.__queryParams")},__routeQueryParamsChanged:function(t){if(t&&this.tail){if(this.tail.__queryParams!==t&&this.set("tail.__queryParams",t),!this.active||this._queryParamsUpdating)return;var e={},a=!1;for(var i in t)e[i]=t[i],!a&&this.queryParams&&t[i]===this.queryParams[i]||(a=!0);for(var i in this.queryParams)if(a||!(i in t)){a=!0;break}if(!a)return;this._queryParamsUpdating=!0,this.set("queryParams",e),this._queryParamsUpdating=!1}},__tailQueryParamsChanged:function(t){t&&this.route&&this.route.__queryParams!=t&&this.set("route.__queryParams",t)},__queryParamsChanged:function(t){this.active&&!this._queryParamsUpdating&&this.set("route.__"+t.path,t.value)},__resetProperties:function(){this._setActive(!1),this._matched=null},__tryToMatch:function(){if(this.route){var t=this.route.path,e=this.pattern;if(this.autoActivate&&""===t&&(t="/"),e)if(t){for(var a=t.split("/"),i=e.split("/"),n=[],r={},o=0;o<i.length;o++){var s=i[o];if(!s&&""!==s)break;var l=a.shift();if(!l&&""!==l)return void this.__resetProperties();if(n.push(l),":"==s.charAt(0))r[s.slice(1)]=l;else if(s!==l)return void this.__resetProperties()}this._matched=n.join("/");var c={};this.active||(c.active=!0);var d=this.route.prefix+this._matched,p=a.join("/");for(var u in a.length>0&&(p="/"+p),this.tail&&this.tail.prefix===d&&this.tail.path===p||(c.tail={prefix:d,path:p,__queryParams:this.route.__queryParams}),c.data=r,this._dataInUrl={},r)this._dataInUrl[u]=r[u];this.setProperties?this.setProperties(c,!0):this.__setMulti(c)}else this.__resetProperties()}},__tailPathChanged:function(t){if(this.active){var e=t,a=this._matched;e&&("/"!==e.charAt(0)&&(e="/"+e),a+=e),this.set("route.path",a)}},__updatePathOnDataChange:function(){if(this.route&&this.active){var t=this.__getLink({});t!==this.__getLink(this._dataInUrl)&&this.set("route.path",t)}},__getLink:function(t){var e={tail:null};for(var a in this.data)e[a]=this.data[a];for(var a in t)e[a]=t[a];var i=this.pattern.split("/").map((function(t){return":"==t[0]&&(t=e[t.slice(1)]),t}),this);return e.tail&&e.tail.path&&(i.length>0&&"/"===e.tail.path.charAt(0)?i.push(e.tail.path.slice(1)):i.push(e.tail.path)),i.join("/")},__setMulti:function(t){for(var e in t)this._propertySetter(e,t[e]);void 0!==t.data&&(this._pathEffector("data",this.data),this._notifyChange("data")),void 0!==t.active&&(this._pathEffector("active",this.active),this._notifyChange("active")),void 0!==t.tail&&(this._pathEffector("tail",this.tail),this._notifyChange("tail"))}})},235:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var i=[60,60,24,7],n=["second","minute","hour","day"];function r(t,e,a){void 0===a&&(a={});var r,o=((a.compareTime||new Date).getTime()-t.getTime())/1e3,s=o>=0?"past":"future";o=Math.abs(o);for(var l=0;l<i.length;l++){if(o<i[l]){o=Math.floor(o),r=e("ui.components.relative_time.duration."+n[l],"count",o);break}o/=i[l]}return void 0===r&&(r=e("ui.components.relative_time.duration.week","count",o=Math.floor(o))),!1===a.includeTense?r:e("ui.components.relative_time."+s,"time",r)}},236:function(t,e,a){"use strict";a.d(e,"c",(function(){return l})),a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return p}));var i=a(176),n=a(180),r=a(223),o=["climate","water_heater"],s=["temperature","current_temperature","target_temp_low","target_temp_high","hvac_action"],l=function(t,e,a,i,n){void 0===n&&(n=!1);var r="history/period";return a&&(r+="/"+a.toISOString()),r+="?filter_entity_id="+e,i&&(r+="&end_time="+i.toISOString()),n&&(r+="&skip_initial_state"),t.callApi("GET",r)},c=function(t,e,a){return t.callApi("GET","history/period/"+e.toISOString()+"?end_time="+a.toISOString())},d=function(t,e){return t.state===e.state&&(!t.attributes||s.every((function(a){return t.attributes[a]===e.attributes[a]})))},p=function(t,e,a,l){var c={},p=[];return e?(e.forEach((function(e){if(0!==e.length){var o,s=e.find((function(t){return"unit_of_measurement"in t.attributes}));s?o=s.attributes.unit_of_measurement:"climate"===Object(n.a)(e[0])?o=t.config.unit_system.temperature:"water_heater"===Object(n.a)(e[0])&&(o=t.config.unit_system.temperature),o?o in c?c[o].push(e):c[o]=[e]:p.push(function(t,e,a){for(var n=[],o=0,s=a;o<s.length;o++){var l=s[o];n.length>0&&l.state===n[n.length-1].state||n.push({state_localize:Object(r.a)(t,l,e),state:l.state,last_changed:l.last_changed})}return{name:Object(i.a)(a[0]),entity_id:a[0].entity_id,data:n}}(a,l,e))}})),{line:Object.keys(c).map((function(t){return function(t,e){for(var a=[],r=0,l=e;r<l.length;r++){for(var c=l[r],p=c[c.length-1],u=Object(n.a)(p),h=[],b=0,m=c;b<m.length;b++){var g=m[b],f=void 0;if(o.includes(u)){f={state:g.state,last_changed:g.last_updated,attributes:{}};for(var v=0,y=s;v<y.length;v++){var _=y[v];_ in g.attributes&&(f.attributes[_]=g.attributes[_])}}else f=g;h.length>1&&d(f,h[h.length-1])&&d(f,h[h.length-2])||h.push(f)}a.push({domain:u,name:Object(i.a)(p),entity_id:p.entity_id,states:h})}return{unit:t,identifier:e.map((function(t){return t[0].entity_id})).join(""),data:a}}(t,c[t])})),timeline:p}):{line:[],timeline:[]}}},240:function(t,e,a){"use strict";var i=a(197);e.a=function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleDateString(e,{year:"numeric",month:"long",day:"numeric"})}:function(t){return i.a.format(t,"mediumDate")}},243:function(t,e,a){"use strict";a(5),a(45);var i=a(55),n=a(35),r=a(69),o=a(6),s=a(2),l=a(4);Object(o.a)({_template:l.a`
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
`,is:"paper-tab",behaviors:[n.a,i.a,r.a],properties:{link:{type:Boolean,value:!1,reflectToAttribute:!0}},hostAttributes:{role:"tab"},listeners:{down:"_updateNoink",tap:"_onTap"},attached:function(){this._updateNoink()},get _parentNoink(){var t=Object(s.a)(this).parentNode;return!!t&&!!t.noink},_updateNoink:function(){this.noink=!!this.noink||!!this._parentNoink},_onTap:function(t){if(this.link){var e=this.queryEffectiveChildren("a");if(!e)return;if(t.target===e)return;e.click()}}})},244:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}));a(5);var i=a(125);const n={hostAttributes:{role:"menubar"},keyBindings:{left:"_onLeftKey",right:"_onRightKey"},_onUpKey:function(t){this.focusedItem.click(),t.detail.keyboardEvent.preventDefault()},_onDownKey:function(t){this.focusedItem.click(),t.detail.keyboardEvent.preventDefault()},get _isRTL(){return"rtl"===window.getComputedStyle(this).direction},_onLeftKey:function(t){this._isRTL?this._focusNext():this._focusPrevious(),t.detail.keyboardEvent.preventDefault()},_onRightKey:function(t){this._isRTL?this._focusPrevious():this._focusNext(),t.detail.keyboardEvent.preventDefault()},_onKeydown:function(t){this.keyboardEventMatchesKeys(t,"up down left right esc")||this._focusWithKeyboardEvent(t)}},r=[i.a,n]},245:function(t,e,a){"use strict";a(5),a(86);const i=a(4).a`
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
</dom-module>`;i.setAttribute("style","display: none;"),document.head.appendChild(i.content)},250:function(t,e,a){"use strict";var i=a(9),n=a(99);e.a=Object(i.a)(t=>(class extends t{navigate(...t){Object(n.a)(this,...t)}}))},254:function(t,e,a){"use strict";a(206);var i=a(4);a(30);customElements.define("ha-app-layout",class extends(customElements.get("app-header-layout")){static get template(){return i.a`
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
    `}})},255:function(t,e,a){"use strict";a(5);var i=a(6),n=a(4),r=a(20);Object(i.a)({_template:n.a`
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
`,is:"iron-image",properties:{src:{type:String,value:""},alt:{type:String,value:null},crossorigin:{type:String,value:null},preventLoad:{type:Boolean,value:!1},sizing:{type:String,value:null,reflectToAttribute:!0},position:{type:String,value:"center"},preload:{type:Boolean,value:!1},placeholder:{type:String,value:null,observer:"_placeholderChanged"},fade:{type:Boolean,value:!1},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1},width:{observer:"_widthChanged",type:Number,value:null},height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){this.$.img.src===this._resolveSrc(this.src)&&(this._setLoading(!1),this._setLoaded(!0),this._setError(!1))},_imgOnError:function(){this.$.img.src===this._resolveSrc(this.src)&&(this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",this._setLoading(!1),this._setLoaded(!1),this._setError(!0))},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){return null!==this.alt?this.alt:""===this.src?"":this._resolveSrc(this.src).replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(t,e){var a=this._resolveSrc(t);a!==this._resolvedSrc&&(this._resolvedSrc="",this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",""===t||e?(this._setLoading(!1),this._setLoaded(!1),this._setError(!1)):(this._resolvedSrc=a,this.$.img.src=this._resolvedSrc,this.$.sizedImgDiv.style.backgroundImage='url("'+this._resolvedSrc+'")',this._setLoading(!0),this._setLoaded(!1),this._setError(!1)))},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?'url("'+this.placeholder+'")':""},_transformChanged:function(){var t=this.$.sizedImgDiv.style,e=this.$.placeholder.style;t.backgroundSize=e.backgroundSize=this.sizing,t.backgroundPosition=e.backgroundPosition=this.sizing?this.position:"",t.backgroundRepeat=e.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(t){var e=Object(r.c)(t,this.$.baseURIAnchor.href);return e.length>=2&&"/"===e[0]&&"/"!==e[1]&&(e=(location.origin||location.protocol+"//"+location.host)+e),e}})},262:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var i=function(t){return t<10?"0"+t:t};function n(t){var e=Math.floor(t/3600),a=Math.floor(t%3600/60),n=Math.floor(t%3600%60);return e>0?e+":"+i(a)+":"+i(n):a>0?a+":"+i(n):n>0?""+n:null}},263:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var i=a(0),n=function(t,e,a,n,r){for(var o=[],s=5;s<arguments.length;s++)o[s-5]=arguments[s];return Object(i.b)(void 0,void 0,void 0,(function(){var s,l,c;return Object(i.e)(this,(function(d){return(s=n[t])||(s=n[t]={}),(l=s[r])?[2,l]:(c=a.apply(void 0,Object(i.h)([n,r],o)),s[r]=c,c.then((function(){return setTimeout((function(){s[r]=void 0}),e)}),(function(){s[r]=void 0})),[2,c])}))}))}},264:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var i=a(217);class n{constructor(t,e){this.hass=t,this.stateObj=e,this._attr=e.attributes,this._feat=this._attr.supported_features}get isOff(){return"off"===this.stateObj.state}get isIdle(){return"idle"===this.stateObj.state}get isMuted(){return this._attr.is_volume_muted}get isPaused(){return"paused"===this.stateObj.state}get isPlaying(){return"playing"===this.stateObj.state}get isMusic(){return"music"===this._attr.media_content_type}get isTVShow(){return"tvshow"===this._attr.media_content_type}get hasMediaControl(){return-1!==["playing","paused","unknown","on"].indexOf(this.stateObj.state)}get volumeSliderValue(){return 100*this._attr.volume_level}get showProgress(){return(this.isPlaying||this.isPaused)&&"media_duration"in this.stateObj.attributes&&"media_position"in this.stateObj.attributes&&"media_position_updated_at"in this.stateObj.attributes}get currentProgress(){var t=this._attr.media_position;return this.isPlaying&&(t+=(Date.now()-new Date(this._attr.media_position_updated_at).getTime())/1e3),t}get supportsPause(){return Object(i.a)(this.stateObj,1)}get supportsVolumeSet(){return Object(i.a)(this.stateObj,4)}get supportsVolumeMute(){return Object(i.a)(this.stateObj,8)}get supportsPreviousTrack(){return Object(i.a)(this.stateObj,16)}get supportsNextTrack(){return Object(i.a)(this.stateObj,32)}get supportsTurnOn(){return Object(i.a)(this.stateObj,128)}get supportsTurnOff(){return Object(i.a)(this.stateObj,256)}get supportsPlayMedia(){return Object(i.a)(this.stateObj,512)}get supportsVolumeButtons(){return Object(i.a)(this.stateObj,1024)}get supportsSelectSource(){return Object(i.a)(this.stateObj,2048)}get supportsSelectSoundMode(){return Object(i.a)(this.stateObj,65536)}get supportsPlay(){return Object(i.a)(this.stateObj,16384)}get primaryTitle(){return this._attr.media_title}get secondaryTitle(){if(this.isMusic)return this._attr.media_artist;if(this.isTVShow){var t=this._attr.media_series_title;return this._attr.media_season&&(t+=" S"+this._attr.media_season,this._attr.media_episode&&(t+="E"+this._attr.media_episode)),t}return this._attr.app_name?this._attr.app_name:""}get source(){return this._attr.source}get sourceList(){return this._attr.source_list}get soundMode(){return this._attr.sound_mode}get soundModeList(){return this._attr.sound_mode_list}mediaPlayPause(){this.callService("media_play_pause")}nextTrack(){this.callService("media_next_track")}playbackControl(){this.callService("media_play_pause")}previousTrack(){this.callService("media_previous_track")}setVolume(t){this.callService("volume_set",{volume_level:t})}togglePower(){this.isOff?this.turnOn():this.turnOff()}turnOff(){this.callService("turn_off")}turnOn(){this.callService("turn_on")}volumeDown(){this.callService("volume_down")}volumeMute(t){if(!this.supportsVolumeMute)throw new Error("Muting volume not supported");this.callService("volume_mute",{is_volume_muted:t})}volumeUp(){this.callService("volume_up")}selectSource(t){this.callService("select_source",{source:t})}selectSoundMode(t){this.callService("select_sound_mode",{sound_mode:t})}callService(t,e={}){e.entity_id=this.stateObj.entity_id,this.hass.callService("media_player",t,e)}}},267:function(t,e,a){"use strict";a(187);var i=a(4),n=a(30),r=a(22),o=a(98),s=(a(108),a(12)),l=a(72),c=a(214);let d=null;customElements.define("ha-chart-base",class extends(Object(l.b)([o.a],n.a)){static get template(){return i.a`
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
    `}get chart(){return this._chart}static get properties(){return{data:Object,identifier:String,rendered:{type:Boolean,notify:!0,value:!1,readOnly:!0},metas:{type:Array,value:()=>[]},tooltip:{type:Object,value:()=>({opacity:"0",left:"0",top:"0",xPadding:"5",yPadding:"3"})},unit:Object,rtl:{type:Boolean,reflectToAttribute:!0}}}static get observers(){return["onPropsChange(data)"]}connectedCallback(){super.connectedCallback(),this._isAttached=!0,this.onPropsChange(),this._resizeListener=()=>{this._debouncer=r.a.debounce(this._debouncer,s.d.after(10),()=>{this._isAttached&&this.resizeChart()})},"function"==typeof ResizeObserver?(this.resizeObserver=new ResizeObserver(t=>{t.forEach(()=>{this._resizeListener()})}),this.resizeObserver.observe(this.$.chartTarget)):this.addEventListener("iron-resize",this._resizeListener),null===d&&(d=Promise.all([a.e(11),a.e(126),a.e(68)]).then(a.bind(null,687))),d.then(t=>{this.ChartClass=t.default,this.onPropsChange()})}disconnectedCallback(){super.disconnectedCallback(),this._isAttached=!1,this.resizeObserver&&this.resizeObserver.unobserve(this.$.chartTarget),this.removeEventListener("iron-resize",this._resizeListener),void 0!==this._resizeTimer&&(clearInterval(this._resizeTimer),this._resizeTimer=void 0)}onPropsChange(){this._isAttached&&this.ChartClass&&this.data&&this.drawChart()}_customTooltips(t){if(0===t.opacity)return void this.set(["tooltip","opacity"],0);t.yAlign?this.set(["tooltip","yAlign"],t.yAlign):this.set(["tooltip","yAlign"],"no-transform");const e=t.title&&t.title[0]||"";this.set(["tooltip","title"],e);const a=t.body.map(t=>t.lines);t.body&&this.set(["tooltip","lines"],a.map((e,a)=>{const i=t.labelColors[a];return{color:i.borderColor,bgColor:i.backgroundColor,text:e.join("\n")}}));const i=this.$.chartTarget.clientWidth;let n=t.caretX;const r=this._chart.canvas.offsetTop+t.caretY;t.caretX+100>i?n=i-100:t.caretX<100&&(n=100),n+=this._chart.canvas.offsetLeft,this.tooltip={...this.tooltip,opacity:1,left:`${n}px`,top:`${r}px`}}_legendClick(t){(t=t||window.event).stopPropagation();let e=t.target||t.srcElement;for(;"LI"!==e.nodeName;)e=e.parentElement;const a=t.model.itemsIndex,i=this._chart.getDatasetMeta(a);i.hidden=null===i.hidden?!this._chart.data.datasets[a].hidden:null,this.set(["metas",a,"hidden"],this._chart.isDatasetVisible(a)?null:"hidden"),this._chart.update()}_drawLegend(){const t=this._chart,e=this._oldIdentifier&&this.identifier===this._oldIdentifier;this._oldIdentifier=this.identifier,this.set("metas",this._chart.data.datasets.map((a,i)=>({label:a.label,color:a.color,bgColor:a.backgroundColor,hidden:e&&i<this.metas.length?this.metas[i].hidden:!t.isDatasetVisible(i)})));let a=!1;if(e)for(let i=0;i<this.metas.length;i++){const e=t.getDatasetMeta(i);!!e.hidden!=!!this.metas[i].hidden&&(a=!0),e.hidden=!!this.metas[i].hidden||null}a&&t.update(),this.unit=this.data.unit}_formatTickValue(t,e,a){if(0===a.length)return t;const i=new Date(a[e].value);return Object(c.a)(i)}drawChart(){const t=this.data.data,e=this.$.chartCanvas;if(t.datasets&&t.datasets.length||this._chart){if("timeline"!==this.data.type&&t.datasets.length>0){const e=t.datasets.length,a=this.constructor.getColorList(e);for(let i=0;i<e;i++)t.datasets[i].borderColor=a[i].rgbString(),t.datasets[i].backgroundColor=a[i].alpha(.6).rgbaString()}if(this._chart)this._customTooltips({opacity:0}),this._chart.data=t,this._chart.update({duration:0}),this.isTimeline?this._chart.options.scales.yAxes[0].gridLines.display=t.length>1:!0===this.data.legend&&this._drawLegend(),this.resizeChart();else{if(!t.datasets)return;this._customTooltips({opacity:0});const a=[{afterRender:()=>this._setRendered(!0)}];let i={responsive:!0,maintainAspectRatio:!1,animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0,tooltips:{enabled:!1,custom:this._customTooltips.bind(this)},legend:{display:!1},line:{spanGaps:!0},elements:{font:"12px 'Roboto', 'sans-serif'"},ticks:{fontFamily:"'Roboto', 'sans-serif'"}};(i=Chart.helpers.merge(i,this.data.options)).scales.xAxes[0].ticks.callback=this._formatTickValue,"timeline"===this.data.type?(this.set("isTimeline",!0),void 0!==this.data.colors&&(this._colorFunc=this.constructor.getColorGenerator(this.data.colors.staticColors,this.data.colors.staticColorIndex)),void 0!==this._colorFunc&&(i.elements.colorFunction=this._colorFunc),1===t.datasets.length&&(i.scales.yAxes[0].ticks?i.scales.yAxes[0].ticks.display=!1:i.scales.yAxes[0].ticks={display:!1},i.scales.yAxes[0].gridLines?i.scales.yAxes[0].gridLines.display=!1:i.scales.yAxes[0].gridLines={display:!1}),this.$.chartTarget.style.height="50px"):this.$.chartTarget.style.height="160px";const n={type:this.data.type,data:this.data.data,options:i,plugins:a};this._chart=new this.ChartClass(e,n),!0!==this.isTimeline&&!0===this.data.legend&&this._drawLegend(),this.resizeChart()}}}resizeChart(){this._chart&&(void 0!==this._resizeTimer?(clearInterval(this._resizeTimer),this._resizeTimer=void 0,this._resizeChart()):this._resizeTimer=setInterval(this.resizeChart.bind(this),10))}_resizeChart(){const t=this.$.chartTarget,e=this.data.data;if(0===e.datasets.length)return;if(!this.isTimeline)return void this._chart.resize();const a=this._chart.chartArea.top,i=this._chart.chartArea.bottom,n=this._chart.canvas.clientHeight;if(i>0&&(this._axisHeight=n-i+a),!this._axisHeight)return t.style.height="50px",this._chart.resize(),void this.resizeChart();if(this._axisHeight){const a=30*e.datasets.length+this._axisHeight+"px";t.style.height!==a&&(t.style.height=a),this._chart.resize()}}static getColorList(t){let e=!1;t>10&&(e=!0,t=Math.ceil(t/2));const a=360/t,i=[];for(let n=0;n<t;n++)i[n]=Color().hsl(a*n,80,38),e&&(i[n+t]=Color().hsl(a*n,80,62));return i}static getColorGenerator(t,e){const a=["ff0029","66a61e","377eb8","984ea3","00d2d5","ff7f00","af8d00","7f80cd","b3e900","c42e60","a65628","f781bf","8dd3c7","bebada","fb8072","80b1d3","fdb462","fccde5","bc80bd","ffed6f","c4eaff","cf8c00","1b9e77","d95f02","e7298a","e6ab02","a6761d","0097ff","00d067","f43600","4ba93b","5779bb","927acc","97ee3f","bf3947","9f5b00","f48758","8caed6","f2b94f","eff26e","e43872","d9b100","9d7a00","698cff","d9d9d9","00d27e","d06800","009f82","c49200","cbe8ff","fecddf","c27eb6","8cd2ce","c4b8d9","f883b0","a49100","f48800","27d0df","a04a9b"];function i(t){return Color("#"+a[t%a.length])}const n={};let r=0;return e>0&&(r=e),t&&Object.keys(t).forEach(e=>{const a=t[e];isFinite(a)?n[e.toLowerCase()]=i(a):n[e.toLowerCase()]=Color(t[e])}),function(t,e){let a;const o=e[3];if(null===o)return Color().hsl(0,40,38);if(void 0===o)return Color().hsl(120,40,38);const s=o.toLowerCase();return void 0===a&&(a=n[s]),void 0===a&&(a=i(r),r++,n[s]=a),a}}});var p=a(175),u=a(200);customElements.define("state-history-chart-line",class extends(Object(p.a)(n.a)){static get template(){return i.a`
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
    `}static get properties(){return{chartData:Object,data:Object,names:Object,unit:String,identifier:String,isSingleDevice:{type:Boolean,value:!1},endTime:Object,rendered:{type:Boolean,value:!1,observer:"_onRenderedChanged"}}}static get observers(){return["dataChanged(data, endTime, isSingleDevice)"]}connectedCallback(){super.connectedCallback(),this._isAttached=!0,this.drawChart()}dataChanged(){this.drawChart()}_onRenderedChanged(t){t&&this.animateHeight()}animateHeight(){requestAnimationFrame(()=>requestAnimationFrame(()=>{this.style.height=this.$.chart.scrollHeight+"px"}))}drawChart(){const t=this.unit,e=this.data,a=[];let i;if(!this._isAttached)return;if(0===e.length)return;function n(t){const e=parseFloat(t);return isFinite(e)?e:null}(i=this.endTime||new Date(Math.max.apply(null,e.map(t=>new Date(t.states[t.states.length-1].last_changed)))))>new Date&&(i=new Date);const r=this.names||{};e.forEach(e=>{const o=e.domain,s=r[e.entity_id]||e.name;let l;const c=[];function d(t,e){e&&(t>i||(c.forEach((a,i)=>{a.data.push({x:t,y:e[i]})}),l=e))}function p(e,a,i){let n=!1,r=!1;i&&(n="origin"),a&&(r="before"),c.push({label:e,fill:n,steppedLine:r,pointRadius:0,data:[],unitText:t})}if("thermostat"===o||"climate"===o||"water_heater"===o){const t="climate"===o?t=>"heating"===t.attributes.hvac_action:t=>"heat"===t.state,a="climate"===o?t=>"cooling"===t.attributes.hvac_action:t=>"cool"===t.state,i=e.states.some(t=>t.attributes&&t.attributes.target_temp_high!==t.attributes.target_temp_low),r=e.states.some(t),l=e.states.some(a);p(s+" current temperature",!0),r&&p(s+" heating",!0,!0),l&&p(s+" cooling",!0,!0),i?(p(s+" target temperature high",!0),p(s+" target temperature low",!0)):p(s+" target temperature",!0),e.states.forEach(e=>{if(!e.attributes)return;const o=n(e.attributes.current_temperature),s=[o];if(r&&s.push(t(e)?o:null),l&&s.push(a(e)?o:null),i){const t=n(e.attributes.target_temp_high),a=n(e.attributes.target_temp_low);s.push(t,a),d(new Date(e.last_changed),s)}else{const t=n(e.attributes.temperature);s.push(t),d(new Date(e.last_changed),s)}})}else{p(s,"sensor"===o);let t=null,a=null,i=null;e.states.forEach(e=>{const r=n(e.state),o=new Date(e.last_changed);if(null!==r&&null!==i){const e=o.getTime(),n=i.getTime(),s=a.getTime();d(i,[(n-s)/(e-s)*(r-t)+t]),d(new Date(n+1),[null]),d(o,[r]),a=o,t=r,i=null}else null!==r&&null===i?(d(o,[r]),a=o,t=r):null===r&&null===i&&null!==t&&(i=o)})}d(i,l),Array.prototype.push.apply(a,c)});const o={type:"line",unit:t,legend:!this.isSingleDevice,options:{scales:{xAxes:[{type:"time",ticks:{major:{fontStyle:"bold"}}}],yAxes:[{ticks:{maxTicksLimit:7}}]},tooltips:{mode:"neareach",callbacks:{title:(t,e)=>{const a=t[0],i=e.datasets[a.datasetIndex].data[a.index].x;return Object(u.a)(i,this.hass.language)}}},hover:{mode:"neareach"},layout:{padding:{top:5}},elements:{line:{tension:.1,pointRadius:0,borderWidth:1.5},point:{hitRadius:5}},plugins:{filler:{propagate:!0}}},data:{labels:[],datasets:a}};this.chartData=o}});var h=a(96);customElements.define("state-history-chart-timeline",class extends(Object(p.a)(n.a)){static get template(){return i.a`
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
    `}static get properties(){return{hass:{type:Object},chartData:Object,data:{type:Object,observer:"dataChanged"},names:Object,noSingle:Boolean,endTime:Date,rendered:{type:Boolean,value:!1,reflectToAttribute:!0},rtl:{reflectToAttribute:!0,computed:"_computeRTL(hass)"}}}static get observers(){return["dataChanged(data, endTime, localize, language)"]}connectedCallback(){super.connectedCallback(),this._isAttached=!0,this.drawChart()}dataChanged(){this.drawChart()}drawChart(){let t=this.data;if(!this._isAttached)return;t||(t=[]);const e=new Date(t.reduce((t,e)=>Math.min(t,new Date(e.data[0].last_changed)),new Date));let a=this.endTime||new Date(t.reduce((t,e)=>Math.max(t,new Date(e.data[e.data.length-1].last_changed)),e));a>new Date&&(a=new Date);const i=[],n=[],r=this.names||{};t.forEach(t=>{let o,s=null,l=null,c=e;const d=r[t.entity_id]||t.name,p=[];t.data.forEach(t=>{let e=t.state;void 0!==e&&""!==e||(e=null),new Date(t.last_changed)>a||(null!==s&&e!==s?(o=new Date(t.last_changed),p.push([c,o,l,s]),s=e,l=t.state_localize,c=o):null===s&&(s=e,l=t.state_localize,c=new Date(t.last_changed)))}),null!==s&&p.push([c,a,l,s]),n.push({data:p}),i.push(d)});const o={type:"timeline",options:{tooltips:{callbacks:{label:(t,e)=>{const a=e.datasets[t.datasetIndex].data[t.index],i=Object(u.a)(a[0],this.hass.language),n=Object(u.a)(a[1],this.hass.language);return[a[2],i,n]}}},scales:{xAxes:[{ticks:{major:{fontStyle:"bold"}}}],yAxes:[{afterSetDimensions:t=>{t.maxWidth=.18*t.chart.width},position:this._computeRTL?"right":"left"}]}},data:{labels:i,datasets:n},colors:{staticColors:{on:1,off:0,unavailable:"#a0a0a0",unknown:"#606060",idle:2},staticColorIndex:3}};this.chartData=o}_computeRTL(t){return Object(h.a)(t)}});customElements.define("state-history-charts",class extends(Object(p.a)(n.a)){static get template(){return i.a`
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
    `}static get properties(){return{hass:Object,historyData:{type:Object,value:null},names:Object,isLoadingData:Boolean,endTime:{type:Object},upToNow:Boolean,noSingle:Boolean}}_computeIsSingleLineChart(t,e){return!e&&t&&1===t.length}_computeIsEmpty(t,e){const a=!e||!e.timeline||!e.line||0===e.timeline.length&&0===e.line.length;return!t&&a}_computeIsLoading(t){return t&&!this.historyData}_computeEndTime(t,e){return e?new Date:t}})},268:function(t,e,a){"use strict";var i=a(12),n=a(22),r=a(30),o=a(175),s=a(236),l=a(0),c={},d={},p=function(t,e,a,i,n,r){var o=e,l=c[o];if(l&&Date.now()-l.created<6e4&&l.language===r)return l.data;var d=Object(s.c)(t,e,a,i).then((function(e){return Object(s.a)(t,e,n,r)}),(function(t){throw delete c[e],t}));return c[o]={created:Date.now(),language:r,data:d},d};var u=function(t,e,a,i,n){var r=a.cacheKey,o=new Date,c=new Date(o);c.setHours(c.getHours()-a.hoursToShow);var p=c,u=!1,m=d[r];if(m&&p>=m.startTime&&p<=m.endTime&&m.language===n){if(p=m.endTime,u=!0,o<=m.endTime)return m.prom}else m=d[r]=function(t,e,a){return{prom:Promise.resolve({line:[],timeline:[]}),language:t,startTime:e,endTime:a,data:{line:[],timeline:[]}}}(n,c,o);var f=m.prom;return m.prom=Object(l.b)(void 0,void 0,void 0,(function(){var a,v,y,_;return Object(l.e)(this,(function(l){switch(l.label){case 0:return l.trys.push([0,2,,3]),[4,Promise.all([f,Object(s.c)(t,e,p,o,u)])];case 1:return v=l.sent(),a=v[1],[3,3];case 2:throw y=l.sent(),delete d[r],y;case 3:return _=Object(s.a)(t,a,i,n),u?(h(_.line,m.data.line),b(_.timeline,m.data.timeline),g(c,m.data)):m.data=_,[2,m.data]}}))})),m.startTime=c,m.endTime=o,m.prom},h=function(t,e){t.forEach((function(t){var a=t.unit,i=e.find((function(t){return t.unit===a}));i?t.data.forEach((function(t){var e=i.data.find((function(e){return t.entity_id===e.entity_id}));e?e.states=e.states.concat(t.states):i.data.push(t)})):e.push(t)}))},b=function(t,e){t.forEach((function(t){var a=e.find((function(e){return e.entity_id===t.entity_id}));a?a.data=a.data.concat(t.data):e.push(t)}))},m=function(t,e){if(0===e.length)return e;var a=e.findIndex((function(e){return new Date(e.last_changed)>t}));if(0===a)return e;var i=-1===a?e.length-1:a-1;return e[i].last_changed=t,e.slice(i)},g=function(t,e){e.line.forEach((function(e){e.data.forEach((function(e){e.states=m(t,e.states)}))})),e.timeline.forEach((function(e){e.data=m(t,e.data)}))};customElements.define("ha-state-history-data",class extends(Object(o.a)(r.a)){static get properties(){return{hass:{type:Object,observer:"hassChanged"},filterType:String,cacheConfig:Object,startTime:Date,endTime:Date,entityId:String,isLoading:{type:Boolean,value:!0,readOnly:!0,notify:!0},data:{type:Object,value:null,readOnly:!0,notify:!0}}}static get observers(){return["filterChangedDebouncer(filterType, entityId, startTime, endTime, cacheConfig, localize)"]}connectedCallback(){super.connectedCallback(),this.filterChangedDebouncer(this.filterType,this.entityId,this.startTime,this.endTime,this.cacheConfig,this.localize)}disconnectedCallback(){this._refreshTimeoutId&&(window.clearInterval(this._refreshTimeoutId),this._refreshTimeoutId=null),super.disconnectedCallback()}hassChanged(t,e){e||this._madeFirstCall||this.filterChangedDebouncer(this.filterType,this.entityId,this.startTime,this.endTime,this.cacheConfig,this.localize)}filterChangedDebouncer(...t){this._debounceFilterChanged=n.a.debounce(this._debounceFilterChanged,i.d.after(0),()=>{this.filterChanged(...t)})}filterChanged(t,e,a,i,n,r){if(!this.hass)return;if(n&&!n.cacheKey)return;if(!r)return;this._madeFirstCall=!0;const o=this.hass.language;let l;if("date"===t){if(!a||!i)return;l=Object(s.b)(this.hass,a,i).then(t=>Object(s.a)(this.hass,t,r,o))}else{if("recent-entity"!==t)return;if(!e)return;l=n?this.getRecentWithCacheRefresh(e,n,r,o):p(this.hass,e,a,i,r,o)}this._setIsLoading(!0),l.then(t=>{this._setData(t),this._setIsLoading(!1)})}getRecentWithCacheRefresh(t,e,a,i){return this._refreshTimeoutId&&(window.clearInterval(this._refreshTimeoutId),this._refreshTimeoutId=null),e.refresh&&(this._refreshTimeoutId=window.setInterval(()=>{u(this.hass,t,e,a,i).then(t=>{this._setData({...t})})},1e3*e.refresh)),u(this.hass,t,e,a,i)}})},269:function(t,e,a){"use strict";function i(t){var e,a,i=(e=t.attributes.remaining,3600*(a=e.split(":").map(Number))[0]+60*a[1]+a[2]);if("active"===t.state){var n=(new Date).getTime(),r=new Date(t.last_changed).getTime();i=Math.max(i-(n-r)/1e3,0)}return i}a.d(e,"a",(function(){return i}))},272:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"g",(function(){return n})),a.d(e,"h",(function(){return r})),a.d(e,"f",(function(){return o})),a.d(e,"c",(function(){return s})),a.d(e,"d",(function(){return l})),a.d(e,"e",(function(){return c})),a.d(e,"b",(function(){return d})),a.d(e,"i",(function(){return u}));var i="none",n=1,r=2,o=4,s=8,l=16,c=32,d=64,p={auto:1,heat_cool:2,heat:3,cool:4,dry:5,fan_only:6,off:7},u=function(t,e){return p[t]-p[e]}},273:function(t,e,a){"use strict";function i(t,e){return t?e.map((function(e){return e in t.attributes?"has-"+e:""})).filter((function(t){return""!==t})).join(" "):""}a.d(e,"a",(function(){return i}))},274:function(t,e,a){"use strict";function i(t,e,a){var i,n=t;n.lastChild&&n.lastChild.tagName===e?i=n.lastChild:(n.lastChild&&n.removeChild(n.lastChild),i=document.createElement(e.toLowerCase())),i.setProperties?i.setProperties(a):Object.keys(a).forEach((function(t){i[t]=a[t]})),null===i.parentNode&&n.appendChild(i)}a.d(e,"a",(function(){return i}))},275:function(t,e,a){"use strict";a(5),a(45),a(109),a(108),a(68),a(88);var i=a(4);const n=i.a`<iron-iconset-svg name="paper-tabs" size="24">
<svg><defs>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(n.content);a(243);var r=a(125),o=a(244),s=a(98),l=a(6),c=a(2);Object(l.a)({_template:i.a`
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
`,is:"paper-tabs",behaviors:[s.a,o.a],properties:{noink:{type:Boolean,value:!1,observer:"_noinkChanged"},noBar:{type:Boolean,value:!1},noSlide:{type:Boolean,value:!1},scrollable:{type:Boolean,value:!1},fitContainer:{type:Boolean,value:!1},disableDrag:{type:Boolean,value:!1},hideScrollButtons:{type:Boolean,value:!1},alignBottom:{type:Boolean,value:!1},selectable:{type:String,value:"paper-tab"},autoselect:{type:Boolean,value:!1},autoselectDelay:{type:Number,value:0},_step:{type:Number,value:10},_holdDelay:{type:Number,value:1},_leftHidden:{type:Boolean,value:!1},_rightHidden:{type:Boolean,value:!1},_previousTab:{type:Object}},hostAttributes:{role:"tablist"},listeners:{"iron-resize":"_onTabSizingChanged","iron-items-changed":"_onTabSizingChanged","iron-select":"_onIronSelect","iron-deselect":"_onIronDeselect"},keyBindings:{"left:keyup right:keyup":"_onArrowKeyup"},created:function(){this._holdJob=null,this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0,this._bindDelayedActivationHandler=this._delayedActivationHandler.bind(this),this.addEventListener("blur",this._onBlurCapture.bind(this),!0)},ready:function(){this.setScrollDirection("y",this.$.tabsContainer)},detached:function(){this._cancelPendingActivation()},_noinkChanged:function(t){Object(c.a)(this).querySelectorAll("paper-tab").forEach(t?this._setNoinkAttribute:this._removeNoinkAttribute)},_setNoinkAttribute:function(t){t.setAttribute("noink","")},_removeNoinkAttribute:function(t){t.removeAttribute("noink")},_computeScrollButtonClass:function(t,e,a){return!e||a?"hidden":t?"not-visible":""},_computeTabsContentClass:function(t,e){return t?"scrollable"+(e?" fit-container":""):" fit-container"},_computeSelectionBarClass:function(t,e){return t?"hidden":e?"align-bottom":""},_onTabSizingChanged:function(){this.debounce("_onTabSizingChanged",(function(){this._scroll(),this._tabChanged(this.selectedItem)}),10)},_onIronSelect:function(t){this._tabChanged(t.detail.item,this._previousTab),this._previousTab=t.detail.item,this.cancelDebouncer("tab-changed")},_onIronDeselect:function(t){this.debounce("tab-changed",(function(){this._tabChanged(null,this._previousTab),this._previousTab=null}),1)},_activateHandler:function(){this._cancelPendingActivation(),r.b._activateHandler.apply(this,arguments)},_scheduleActivation:function(t,e){this._pendingActivationItem=t,this._pendingActivationTimeout=this.async(this._bindDelayedActivationHandler,e)},_delayedActivationHandler:function(){var t=this._pendingActivationItem;this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0,t.fire(this.activateEvent,null,{bubbles:!0,cancelable:!0})},_cancelPendingActivation:function(){void 0!==this._pendingActivationTimeout&&(this.cancelAsync(this._pendingActivationTimeout),this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0)},_onArrowKeyup:function(t){this.autoselect&&this._scheduleActivation(this.focusedItem,this.autoselectDelay)},_onBlurCapture:function(t){t.target===this._pendingActivationItem&&this._cancelPendingActivation()},get _tabContainerScrollSize(){return Math.max(0,this.$.tabsContainer.scrollWidth-this.$.tabsContainer.offsetWidth)},_scroll:function(t,e){if(this.scrollable){var a=e&&-e.ddx||0;this._affectScroll(a)}},_down:function(t){this.async((function(){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null)}),1)},_affectScroll:function(t){this.$.tabsContainer.scrollLeft+=t;var e=this.$.tabsContainer.scrollLeft;this._leftHidden=0===e,this._rightHidden=e===this._tabContainerScrollSize},_onLeftScrollButtonDown:function(){this._scrollToLeft(),this._holdJob=setInterval(this._scrollToLeft.bind(this),this._holdDelay)},_onRightScrollButtonDown:function(){this._scrollToRight(),this._holdJob=setInterval(this._scrollToRight.bind(this),this._holdDelay)},_onScrollButtonUp:function(){clearInterval(this._holdJob),this._holdJob=null},_scrollToLeft:function(){this._affectScroll(-this._step)},_scrollToRight:function(){this._affectScroll(this._step)},_tabChanged:function(t,e){if(!t)return this.$.selectionBar.classList.remove("expand"),this.$.selectionBar.classList.remove("contract"),void this._positionBar(0,0);var a=this.$.tabsContent.getBoundingClientRect(),i=a.width,n=t.getBoundingClientRect(),r=n.left-a.left;if(this._pos={width:this._calcPercent(n.width,i),left:this._calcPercent(r,i)},this.noSlide||null==e)return this.$.selectionBar.classList.remove("expand"),this.$.selectionBar.classList.remove("contract"),void this._positionBar(this._pos.width,this._pos.left);var o=e.getBoundingClientRect(),s=this.items.indexOf(e),l=this.items.indexOf(t);this.$.selectionBar.classList.add("expand");var c=s<l;this._isRTL&&(c=!c),c?this._positionBar(this._calcPercent(n.left+n.width-o.left,i)-5,this._left):this._positionBar(this._calcPercent(o.left+o.width-n.left,i)-5,this._calcPercent(r,i)+5),this.scrollable&&this._scrollToSelectedIfNeeded(n.width,r)},_scrollToSelectedIfNeeded:function(t,e){var a=e-this.$.tabsContainer.scrollLeft;a<0?this.$.tabsContainer.scrollLeft+=a:(a+=t-this.$.tabsContainer.offsetWidth)>0&&(this.$.tabsContainer.scrollLeft+=a)},_calcPercent:function(t,e){return 100*t/e},_positionBar:function(t,e){t=t||0,e=e||0,this._width=t,this._left=e,this.transform("translateX("+e+"%) scaleX("+t/100+")",this.$.selectionBar)},_onBarTransitionEnd:function(t){var e=this.$.selectionBar.classList;e.contains("expand")?(e.remove("expand"),e.add("contract"),this._positionBar(this._pos.width,this._pos.left)):e.contains("contract")&&e.remove("contract")}})},280:function(t,e,a){"use strict";var i,n,r,o,s,l,c=a(0),d=a(1),p=a(73),u=(a(179),function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(c.d)(e,t),Object.defineProperty(e,"properties",{get:function(){return{value:{},icon:{},label:{},description:{},image:{}}},enumerable:!0,configurable:!0}),e.prototype.render=function(){return Object(d.f)(s||(s=Object(c.f)(['\n      <div class="badge-container">\n        <div class="label-badge" id="badge">\n          <div\n            class="','"\n          >\n            ',"\n            ","\n          </div>\n          ","\n        </div>\n        ","\n      </div>\n    "],['\n      <div class="badge-container">\n        <div class="label-badge" id="badge">\n          <div\n            class="','"\n          >\n            ',"\n            ","\n          </div>\n          ","\n        </div>\n        ","\n      </div>\n    "])),Object(p.a)({value:!0,big:Boolean(this.value&&this.value.length>4)}),!this.icon||this.value||this.image?"":Object(d.f)(i||(i=Object(c.f)(['\n                  <ha-icon .icon="','"></ha-icon>\n                '],['\n                  <ha-icon .icon="','"></ha-icon>\n                '])),this.icon),this.value&&!this.image?Object(d.f)(n||(n=Object(c.f)(["\n                  <span>","</span>\n                "],["\n                  <span>","</span>\n                "])),this.value):"",this.label?Object(d.f)(r||(r=Object(c.f)(['\n                <div\n                  class="','"\n                >\n                  <span>',"</span>\n                </div>\n              "],['\n                <div\n                  class="','"\n                >\n                  <span>',"</span>\n                </div>\n              "])),Object(p.a)({label:!0,big:this.label.length>5}),this.label):"",this.description?Object(d.f)(o||(o=Object(c.f)(['\n              <div class="title">',"</div>\n            "],['\n              <div class="title">',"</div>\n            "])),this.description):"")},Object.defineProperty(e,"styles",{get:function(){return[Object(d.c)(l||(l=Object(c.f)(["\n        .badge-container {\n          display: inline-block;\n          text-align: center;\n          vertical-align: top;\n        }\n        .label-badge {\n          position: relative;\n          display: block;\n          margin: 0 auto;\n          width: var(--ha-label-badge-size, 2.5em);\n          text-align: center;\n          height: var(--ha-label-badge-size, 2.5em);\n          line-height: var(--ha-label-badge-size, 2.5em);\n          font-size: var(--ha-label-badge-font-size, 1.5em);\n          border-radius: 50%;\n          border: 0.1em solid var(--ha-label-badge-color, var(--primary-color));\n          color: var(--label-badge-text-color, rgb(76, 76, 76));\n\n          white-space: nowrap;\n          background-color: var(--label-badge-background-color, white);\n          background-size: cover;\n          transition: border 0.3s ease-in-out;\n        }\n        .label-badge .value {\n          font-size: 90%;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        .label-badge .value.big {\n          font-size: 70%;\n        }\n        .label-badge .label {\n          position: absolute;\n          bottom: -1em;\n          /* Make the label as wide as container+border. (parent_borderwidth / font-size) */\n          left: -0.2em;\n          right: -0.2em;\n          line-height: 1em;\n          font-size: 0.5em;\n        }\n        .label-badge .label span {\n          box-sizing: border-box;\n          max-width: 100%;\n          display: inline-block;\n          background-color: var(--ha-label-badge-color, var(--primary-color));\n          color: var(--ha-label-badge-label-color, white);\n          border-radius: 1em;\n          padding: 9% 16% 8% 16%; /* mostly apitalized text, not much descenders => bit more top margin */\n          font-weight: 500;\n          overflow: hidden;\n          text-transform: uppercase;\n          text-overflow: ellipsis;\n          transition: background-color 0.3s ease-in-out;\n          text-transform: var(--ha-label-badge-label-text-transform, uppercase);\n        }\n        .label-badge .label.big span {\n          font-size: 90%;\n          padding: 10% 12% 7% 12%; /* push smaller text a bit down to center vertically */\n        }\n        .badge-container .title {\n          margin-top: 1em;\n          font-size: var(--ha-label-badge-title-font-size, 0.9em);\n          width: var(--ha-label-badge-title-width, 5em);\n          font-weight: var(--ha-label-badge-title-font-weight, 400);\n          overflow: hidden;\n          text-overflow: ellipsis;\n          line-height: normal;\n        }\n      "],["\n        .badge-container {\n          display: inline-block;\n          text-align: center;\n          vertical-align: top;\n        }\n        .label-badge {\n          position: relative;\n          display: block;\n          margin: 0 auto;\n          width: var(--ha-label-badge-size, 2.5em);\n          text-align: center;\n          height: var(--ha-label-badge-size, 2.5em);\n          line-height: var(--ha-label-badge-size, 2.5em);\n          font-size: var(--ha-label-badge-font-size, 1.5em);\n          border-radius: 50%;\n          border: 0.1em solid var(--ha-label-badge-color, var(--primary-color));\n          color: var(--label-badge-text-color, rgb(76, 76, 76));\n\n          white-space: nowrap;\n          background-color: var(--label-badge-background-color, white);\n          background-size: cover;\n          transition: border 0.3s ease-in-out;\n        }\n        .label-badge .value {\n          font-size: 90%;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        .label-badge .value.big {\n          font-size: 70%;\n        }\n        .label-badge .label {\n          position: absolute;\n          bottom: -1em;\n          /* Make the label as wide as container+border. (parent_borderwidth / font-size) */\n          left: -0.2em;\n          right: -0.2em;\n          line-height: 1em;\n          font-size: 0.5em;\n        }\n        .label-badge .label span {\n          box-sizing: border-box;\n          max-width: 100%;\n          display: inline-block;\n          background-color: var(--ha-label-badge-color, var(--primary-color));\n          color: var(--ha-label-badge-label-color, white);\n          border-radius: 1em;\n          padding: 9% 16% 8% 16%; /* mostly apitalized text, not much descenders => bit more top margin */\n          font-weight: 500;\n          overflow: hidden;\n          text-transform: uppercase;\n          text-overflow: ellipsis;\n          transition: background-color 0.3s ease-in-out;\n          text-transform: var(--ha-label-badge-label-text-transform, uppercase);\n        }\n        .label-badge .label.big span {\n          font-size: 90%;\n          padding: 10% 12% 7% 12%; /* push smaller text a bit down to center vertically */\n        }\n        .badge-container .title {\n          margin-top: 1em;\n          font-size: var(--ha-label-badge-title-font-size, 0.9em);\n          width: var(--ha-label-badge-title-width, 5em);\n          font-weight: var(--ha-label-badge-title-font-weight, 400);\n          overflow: hidden;\n          text-overflow: ellipsis;\n          line-height: normal;\n        }\n      "])))]},enumerable:!0,configurable:!0}),e.prototype.updated=function(e){t.prototype.updated.call(this,e),e.has("image")&&(this.shadowRoot.getElementById("badge").style.backgroundImage=this.image?"url("+this.image+")":"")},e}(d.a));customElements.define("ha-label-badge",u)},281:function(t,e,a){"use strict";a(182),a(108);var i=a(4),n=a(30),r=a(233);customElements.define("ha-cover-tilt-controls",class extends n.a{static get template(){return i.a`
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
    `}static get properties(){return{hass:{type:Object},stateObj:{type:Object},entityObj:{type:Object,computed:"computeEntityObj(hass, stateObj)"}}}computeEntityObj(t,e){return new r.a(t,e)}computeOpenDisabled(t,e){var a=!0===t.attributes.assumed_state;return e.isFullyOpenTilt&&!a}computeClosedDisabled(t,e){var a=!0===t.attributes.assumed_state;return e.isFullyClosedTilt&&!a}onOpenTiltTap(t){t.stopPropagation(),this.entityObj.openCoverTilt()}onCloseTiltTap(t){t.stopPropagation(),this.entityObj.closeCoverTilt()}onStopTiltTap(t){t.stopPropagation(),this.entityObj.stopCoverTilt()}})},282:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return s})),a.d(e,"e",(function(){return l})),a.d(e,"d",(function(){return d})),a.d(e,"c",(function(){return p})),a.d(e,"f",(function(){return u}));var i=a(0),n=a(263),r=a(66),o=2,s=function(t){return"/api/camera_proxy_stream/"+t.entity_id+"?token="+t.attributes.access_token},l=function(t,e){return Object(n.a)("_cameraTmbUrl",9e3,c,t,e)},c=function(t,e){return Object(i.b)(void 0,void 0,void 0,(function(){var a;return Object(i.e)(this,(function(i){switch(i.label){case 0:return[4,Object(r.b)(t,"/api/camera_proxy/"+e)];case 1:return a=i.sent(),[2,t.hassUrl(a.path)]}}))}))},d=function(t,e,a){return Object(i.b)(void 0,void 0,void 0,(function(){var n,r;return Object(i.e)(this,(function(i){switch(i.label){case 0:return n={type:"camera/stream",entity_id:e},a&&(n.format=a),[4,t.callWS(n)];case 1:return(r=i.sent()).url=t.hassUrl(r.url),[2,r]}}))}))},p=function(t,e){return t.callWS({type:"camera/get_prefs",entity_id:e})},u=function(t,e,a){return t.callWS(Object(i.a)({type:"camera/update_prefs",entity_id:e},a))}},285:function(t,e,a){"use strict";a(108);var i=a(4),n=a(30),r=a(118),o=a(221),s=a(18);customElements.define("ha-start-voice-button",class extends(Object(r.a)(n.a)){static get template(){return i.a`
      <paper-icon-button
        aria-label="Start conversation"
        icon="hass:microphone"
        hidden$="[[!canListen]]"
        on-click="handleListenClick"
      ></paper-icon-button>
    `}static get properties(){return{hass:{type:Object,value:null},canListen:{type:Boolean,computed:"computeCanListen(hass)",notify:!0}}}computeCanListen(t){return"webkitSpeechRecognition"in window&&Object(o.a)(t,"conversation")}handleListenClick(){Object(s.a)(this,"show-dialog",{dialogImport:()=>a.e(131).then(a.bind(null,366)),dialogTag:"ha-voice-command-dialog"})}})},286:function(t,e,a){"use strict";var i,n,r,o=a(0),s=a(1),l=a(73),c=a(18),d=a(180),p=a(176),u=a(178),h=a(192),b=a(269),m=a(262);a(280),function(t){function e(){return null!==t&&t.apply(this,arguments)||this}Object(o.d)(e,t),e.prototype.connectedCallback=function(){t.prototype.connectedCallback.call(this),this._connected=!0,this.startInterval(this.state)},e.prototype.disconnectedCallback=function(){t.prototype.disconnectedCallback.call(this),this._connected=!1,this.clearInterval()},e.prototype.render=function(){var t,e=this.state;if(!e)return Object(s.f)(i||(i=Object(o.f)(['\n        <ha-label-badge\n          class="warning"\n          label="','"\n          icon="hass:alert"\n          description="','"\n        ></ha-label-badge>\n      '],['\n        <ha-label-badge\n          class="warning"\n          label="','"\n          icon="hass:alert"\n          description="','"\n        ></ha-label-badge>\n      '])),this.hass.localize("state_badge.default.error"),this.hass.localize("state_badge.default.entity_not_found"));var a=Object(d.a)(e);return Object(s.f)(n||(n=Object(o.f)(['\n      <ha-label-badge\n        class="','"\n        .value="','"\n        .icon="','"\n        .image="','"\n        .label="','"\n        .description="','"\n      ></ha-label-badge>\n    '],['\n      <ha-label-badge\n        class="','"\n        .value="','"\n        .icon="','"\n        .image="','"\n        .label="','"\n        .description="','"\n      ></ha-label-badge>\n    '])),Object(l.a)(((t={})[a]=!0,t["has-unit_of_measurement"]="unit_of_measurement"in e.attributes,t)),this._computeValue(a,e),this.icon?this.icon:this._computeIcon(a,e),this.icon?"":this.image?this.image:e.attributes.entity_picture,this._computeLabel(a,e,this._timerTimeRemaining),this.name?this.name:Object(p.a)(e))},e.prototype.firstUpdated=function(e){var a=this;t.prototype.firstUpdated.call(this,e),this.addEventListener("click",(function(t){t.stopPropagation(),a.state&&Object(c.a)(a,"hass-more-info",{entityId:a.state.entity_id})}))},e.prototype.updated=function(e){t.prototype.updated.call(this,e),this._connected&&e.has("state")&&this.startInterval(this.state)},e.prototype._computeValue=function(t,e){switch(t){case"binary_sensor":case"device_tracker":case"person":case"updater":case"sun":case"alarm_control_panel":case"timer":return null;case"sensor":default:return"unknown"===e.state?"-":this.hass.localize("component."+t+".state."+e.state)||e.state}},e.prototype._computeIcon=function(t,e){if("unavailable"===e.state)return null;switch(t){case"alarm_control_panel":return"pending"===e.state?"hass:clock-fast":"armed_away"===e.state?"hass:nature":"armed_home"===e.state?"hass:home-variant":"armed_night"===e.state?"hass:weather-night":"armed_custom_bypass"===e.state?"hass:shield-home":"triggered"===e.state?"hass:alert-circle":Object(u.a)(t,e.state);case"binary_sensor":case"device_tracker":case"updater":case"person":return Object(h.a)(e);case"sun":return"above_horizon"===e.state?Object(u.a)(t):"hass:brightness-3";case"timer":return"active"===e.state?"hass:timer":"hass:timer-off";default:return null}},e.prototype._computeLabel=function(t,e,a){return"unavailable"===e.state||["device_tracker","alarm_control_panel","person"].includes(t)?this.hass.localize("state_badge."+t+"."+e.state)||this.hass.localize("state_badge.default."+e.state)||e.state:"timer"===t?Object(m.a)(a):e.attributes.unit_of_measurement||null},e.prototype.clearInterval=function(){this._updateRemaining&&(clearInterval(this._updateRemaining),this._updateRemaining=void 0)},e.prototype.startInterval=function(t){var e=this;this.clearInterval(),t&&"timer"===Object(d.a)(t)&&(this.calculateTimerRemaining(t),"active"===t.state&&(this._updateRemaining=window.setInterval((function(){return e.calculateTimerRemaining(e.state)}),1e3)))},e.prototype.calculateTimerRemaining=function(t){this._timerTimeRemaining=Object(b.a)(t)},Object.defineProperty(e,"styles",{get:function(){return Object(s.c)(r||(r=Object(o.f)(["\n      :host {\n        cursor: pointer;\n      }\n\n      ha-label-badge {\n        --ha-label-badge-color: var(--label-badge-red, #df4c1e);\n      }\n      ha-label-badge.has-unit_of_measurement {\n        --ha-label-badge-label-text-transform: none;\n      }\n\n      ha-label-badge.binary_sensor,\n      ha-label-badge.updater {\n        --ha-label-badge-color: var(--label-badge-blue, #039be5);\n      }\n\n      .red {\n        --ha-label-badge-color: var(--label-badge-red, #df4c1e);\n      }\n\n      .blue {\n        --ha-label-badge-color: var(--label-badge-blue, #039be5);\n      }\n\n      .green {\n        --ha-label-badge-color: var(--label-badge-green, #0da035);\n      }\n\n      .yellow {\n        --ha-label-badge-color: var(--label-badge-yellow, #f4b400);\n      }\n\n      .grey {\n        --ha-label-badge-color: var(--label-badge-grey, var(--paper-grey-500));\n      }\n\n      .warning {\n        --ha-label-badge-color: var(--label-badge-yellow, #fce588);\n      }\n    "],["\n      :host {\n        cursor: pointer;\n      }\n\n      ha-label-badge {\n        --ha-label-badge-color: var(--label-badge-red, #df4c1e);\n      }\n      ha-label-badge.has-unit_of_measurement {\n        --ha-label-badge-label-text-transform: none;\n      }\n\n      ha-label-badge.binary_sensor,\n      ha-label-badge.updater {\n        --ha-label-badge-color: var(--label-badge-blue, #039be5);\n      }\n\n      .red {\n        --ha-label-badge-color: var(--label-badge-red, #df4c1e);\n      }\n\n      .blue {\n        --ha-label-badge-color: var(--label-badge-blue, #039be5);\n      }\n\n      .green {\n        --ha-label-badge-color: var(--label-badge-green, #0da035);\n      }\n\n      .yellow {\n        --ha-label-badge-color: var(--label-badge-yellow, #f4b400);\n      }\n\n      .grey {\n        --ha-label-badge-color: var(--label-badge-grey, var(--paper-grey-500));\n      }\n\n      .warning {\n        --ha-label-badge-color: var(--label-badge-yellow, #fce588);\n      }\n    "])))},enumerable:!0,configurable:!0}),Object(o.c)([Object(s.g)()],e.prototype,"hass",void 0),Object(o.c)([Object(s.g)()],e.prototype,"state",void 0),Object(o.c)([Object(s.g)()],e.prototype,"name",void 0),Object(o.c)([Object(s.g)()],e.prototype,"icon",void 0),Object(o.c)([Object(s.g)()],e.prototype,"image",void 0),Object(o.c)([Object(s.g)()],e.prototype,"_timerTimeRemaining",void 0),e=Object(o.c)([Object(s.d)("ha-state-label-badge")],e)}(s.a)},288:function(t,e,a){"use strict";var i=a(4),n=a(30),r=a(175),o=a(272);customElements.define("ha-climate-state",class extends(Object(r.a)(n.a)){static get template(){return i.a`
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
    `}static get properties(){return{hass:Object,stateObj:Object,currentStatus:{type:String,computed:"computeCurrentStatus(hass, stateObj)"}}}computeCurrentStatus(t,e){return t&&e?null!=e.attributes.current_temperature?`${e.attributes.current_temperature} ${t.config.unit_system.temperature}`:null!=e.attributes.current_humidity?`${e.attributes.current_humidity} %`:null:null}computeTarget(t,e){return t&&e?null!=e.attributes.target_temp_low&&null!=e.attributes.target_temp_high?`${e.attributes.target_temp_low}-${e.attributes.target_temp_high} ${t.config.unit_system.temperature}`:null!=e.attributes.temperature?`${e.attributes.temperature} ${t.config.unit_system.temperature}`:null!=e.attributes.target_humidity_low&&null!=e.attributes.target_humidity_high?`${e.attributes.target_humidity_low}-${e.attributes.target_humidity_high}%`:null!=e.attributes.humidity?`${e.attributes.humidity} %`:"":null}_hasKnownState(t){return"unknown"!==t}_localizeState(t,e){const a=t(`state.climate.${e.state}`);return e.attributes.hvac_action?`${t(`state_attributes.climate.hvac_action.${e.attributes.hvac_action}`)} (${a})`:a}_localizePreset(t,e){return t(`state_attributes.climate.preset_mode.${e}`)||e}_renderPreset(t){return t.preset_mode&&t.preset_mode!==o.a}})},289:function(t,e,a){"use strict";a(108);var i=a(4),n=a(30),r=a(233);customElements.define("ha-cover-controls",class extends n.a{static get template(){return i.a`
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
    `}static get properties(){return{hass:{type:Object},stateObj:{type:Object},entityObj:{type:Object,computed:"computeEntityObj(hass, stateObj)"}}}computeEntityObj(t,e){return new r.a(t,e)}computeOpenDisabled(t,e){var a=!0===t.attributes.assumed_state;return(e.isFullyOpen||e.isOpening)&&!a}computeClosedDisabled(t,e){var a=!0===t.attributes.assumed_state;return(e.isFullyClosed||e.isClosing)&&!a}onOpenTap(t){t.stopPropagation(),this.entityObj.openCover()}onCloseTap(t){t.stopPropagation(),this.entityObj.closeCover()}onStopTap(t){t.stopPropagation(),this.entityObj.stopCover()}})},290:function(t,e,a){"use strict";a(157);const i=customElements.get("paper-slider");let n;customElements.define("ha-slider",class extends i{static get template(){if(!n){(n=i.template.cloneNode(!0)).content.querySelector("style").appendChild(document.createTextNode('\n          :host([dir="rtl"]) #sliderContainer.pin.expand > .slider-knob > .slider-knob-inner::after {\n            -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            }\n        '))}return n}_calcStep(t){if(!this.step)return parseFloat(t);const e=Math.round((t-this.min)/this.step),a=this.step.toString(),i=a.indexOf(".");if(-1!==i){const t=10**(a.length-i-1);return Math.round((e*this.step+this.min)*t)/t}return e*this.step+this.min}})},291:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var i=function(t,e,a){return t.callService("input_select","select_option",{option:a,entity_id:e})}},292:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var i=function(t){return t.stopPropagation()}},295:function(t,e,a){"use strict";function i(t,e){var a={};return e.attributes.entity_id.forEach((function(e){var i=t[e];i&&(a[i.entity_id]=i)})),a}a.d(e,"a",(function(){return i}))},296:function(t,e,a){"use strict";a(5),a(45),a(255),a(245),a(42);var i=a(6),n=a(4);Object(i.a)({_template:n.a`
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
`,is:"paper-card",properties:{heading:{type:String,value:"",observer:"_headingChanged"},image:{type:String,value:""},alt:{type:String},preloadImage:{type:Boolean,value:!1},fadeImage:{type:Boolean,value:!1},placeholderImage:{type:String,value:null},elevation:{type:Number,value:1,reflectToAttribute:!0},animatedShadow:{type:Boolean,value:!1},animated:{type:Boolean,reflectToAttribute:!0,readOnly:!0,computed:"_computeAnimated(animatedShadow)"}},_isHidden:function(t){return t?"false":"true"},_headingChanged:function(t){var e=this.getAttribute("heading"),a=this.getAttribute("aria-label");"string"==typeof a&&a!==e||this.setAttribute("aria-label",t)},_computeHeadingClass:function(t){return t?" over-image":""},_computeAnimated:function(t){return t}})},301:function(t,e,a){"use strict";var i=a(180),n=a(217);function r(t,e){var a=Object(i.a)(e);return"group"===a?"on"===e.state||"off"===e.state:"climate"===a?Object(n.a)(e,4096):function(t,e){var a=t.services[e];return!!a&&("lock"===e?"lock"in a:"cover"===e?"open_cover"in a:"turn_on"in a)}(t,a)}a.d(e,"a",(function(){return r}))},306:function(t,e,a){"use strict";a.d(e,"d",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return s})),a.d(e,"e",(function(){return l}));var i=a(263),n=1,r=32,o=16384,s=["off","idle"],l=function(t,e){return Object(i.a)("_media_playerTmb",9e3,c,t,e)},c=function(t,e){return t.callWS({type:"media_player_thumbnail",entity_id:e})}},313:function(t,e,a){"use strict";var i=a(30),n=(a(182),a(4));a(189),a(288);customElements.define("state-card-climate",class extends i.a{static get template(){return n.a`
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
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}});a(85);var r=a(175);customElements.define("state-card-configurator",class extends(Object(r.a)(i.a)){static get template(){return n.a`
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
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}_localizeState(t){return this.localize(`state.configurator.${t}`)}});a(289),a(281);var o=a(233);customElements.define("state-card-cover",class extends i.a{static get template(){return n.a`
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
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1},entityObj:{type:Object,computed:"computeEntityObj(hass, stateObj)"}}}computeEntityObj(t,e){return new o.a(t,e)}});var s=a(223),l=a(273),c=a(96);customElements.define("state-card-display",class extends(Object(r.a)(i.a)){static get template(){return n.a`
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
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1},rtl:{type:Boolean,reflectToAttribute:!0,computed:"_computeRTL(hass)"}}}computeStateDisplay(t,e,a){return Object(s.a)(t,e,a)}computeClassNames(t){return["state",Object(l.a)(t,["unit_of_measurement"])].join(" ")}_computeRTL(t){return Object(c.a)(t)}});var d=a(98),p=(a(93),a(72));a(290);customElements.define("state-card-input_number",class extends(Object(p.b)([d.a],i.a)){static get template(){return n.a`
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
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}ready(){if(super.ready(),"function"==typeof ResizeObserver){new ResizeObserver(t=>{t.forEach(()=>{this.hiddenState()})}).observe(this.$.input_number_card)}else this.addEventListener("iron-resize",this.hiddenState)}static get properties(){return{hass:Object,hiddenbox:{type:Boolean,value:!0},hiddenslider:{type:Boolean,value:!0},inDialog:{type:Boolean,value:!1},stateObj:{type:Object,observer:"stateObjectChanged"},min:{type:Number,value:0},max:{type:Number,value:100},maxlength:{type:Number,value:3},step:Number,value:Number,mode:String}}hiddenState(){if("slider"!==this.mode)return;const t=this.$.slider.offsetWidth;t<100?this.$.sliderstate.hidden=!0:t>=145&&(this.$.sliderstate.hidden=!1)}stateObjectChanged(t){const e=this.mode;this.setProperties({min:Number(t.attributes.min),max:Number(t.attributes.max),step:Number(t.attributes.step),value:Number(t.state),mode:String(t.attributes.mode),maxlength:String(t.attributes.max).length,hiddenbox:"box"!==t.attributes.mode,hiddenslider:"slider"!==t.attributes.mode}),"slider"===this.mode&&"slider"!==e&&this.hiddenState()}selectedValueChanged(){this.value!==Number(this.stateObj.state)&&this.hass.callService("input_number","set_value",{value:this.value,entity_id:this.stateObj.entity_id})}stopPropagation(t){t.stopPropagation()}});var u,h,b,m=a(0),g=a(1),f=(a(228),a(143),a(144),a(184),a(176)),v=a(291),y=a(292);!function(t){function e(){return null!==t&&t.apply(this,arguments)||this}Object(m.d)(e,t),e.prototype.render=function(){return Object(g.f)(h||(h=Object(m.f)(["\n      <state-badge .stateObj=","></state-badge>\n      <paper-dropdown-menu-light\n        .label=",'\n        .value="','"\n        @iron-select=',"\n        @click=",'\n      >\n        <paper-listbox slot="dropdown-content">\n          ',"\n        </paper-listbox>\n      </paper-dropdown-menu-light>\n    "],["\n      <state-badge .stateObj=","></state-badge>\n      <paper-dropdown-menu-light\n        .label=",'\n        .value="','"\n        @iron-select=',"\n        @click=",'\n      >\n        <paper-listbox slot="dropdown-content">\n          ',"\n        </paper-listbox>\n      </paper-dropdown-menu-light>\n    "])),this.stateObj,Object(f.a)(this.stateObj),this.stateObj.state,this._selectedOptionChanged,y.a,this.stateObj.attributes.options.map((function(t){return Object(g.f)(u||(u=Object(m.f)(["\n              <paper-item>","</paper-item>\n            "],["\n              <paper-item>","</paper-item>\n            "])),t)})))},e.prototype.updated=function(e){t.prototype.updated.call(this,e),this.shadowRoot.querySelector("paper-listbox").selected=this.stateObj.attributes.options.indexOf(this.stateObj.state)},e.prototype._selectedOptionChanged=function(t){return Object(m.b)(this,void 0,void 0,(function(){var e;return Object(m.e)(this,(function(a){switch(a.label){case 0:return(e=t.detail.item.innerText.trim())===this.stateObj.state?[2]:[4,Object(v.a)(this.hass,this.stateObj.entity_id,e)];case 1:return a.sent(),[2]}}))}))},Object.defineProperty(e,"styles",{get:function(){return Object(g.c)(b||(b=Object(m.f)(["\n      :host {\n        display: block;\n      }\n\n      state-badge {\n        float: left;\n        margin-top: 10px;\n      }\n\n      paper-dropdown-menu-light {\n        display: block;\n        margin-left: 53px;\n      }\n\n      paper-item {\n        cursor: pointer;\n        min-width: 200px;\n      }\n    "],["\n      :host {\n        display: block;\n      }\n\n      state-badge {\n        float: left;\n        margin-top: 10px;\n      }\n\n      paper-dropdown-menu-light {\n        display: block;\n        margin-left: 53px;\n      }\n\n      paper-item {\n        cursor: pointer;\n        min-width: 200px;\n      }\n    "])))},enumerable:!0,configurable:!0}),Object(m.c)([Object(g.g)()],e.prototype,"hass",void 0),Object(m.c)([Object(g.g)()],e.prototype,"stateObj",void 0),e=Object(m.c)([Object(g.d)("state-card-input_select")],e)}(g.a);customElements.define("state-card-input_text",class extends i.a{static get template(){return n.a`
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
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,inDialog:{type:Boolean,value:!1},stateObj:{type:Object,observer:"stateObjectChanged"},pattern:String,value:String}}stateObjectChanged(t){this.value=t.state}selectedValueChanged(){this.value!==this.stateObj.state&&this.hass.callService("input_text","set_value",{value:this.value,entity_id:this.stateObj.entity_id})}stopPropagation(t){t.stopPropagation()}});customElements.define("state-card-lock",class extends(Object(r.a)(i.a)){static get template(){return n.a`
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
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:{type:Object,observer:"_stateObjChanged"},inDialog:{type:Boolean,value:!1},isLocked:Boolean}}_stateObjChanged(t){t&&(this.isLocked="locked"===t.state)}_callService(t){t.stopPropagation();const e=t.target.dataset.service,a={entity_id:this.stateObj.entity_id};this.hass.callService("lock",e,a)}});var _=a(264);customElements.define("state-card-media_player",class extends(Object(r.a)(i.a)){static get template(){return n.a`
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
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1},playerObj:{type:Object,computed:"computePlayerObj(hass, stateObj)"}}}computePlayerObj(t,e){return new _.a(t,e)}computePrimaryText(t,e){return e.primaryTitle||t(`state.media_player.${e.stateObj.state}`)||t(`state.default.${e.stateObj.state}`)||e.stateObj.state}});customElements.define("state-card-scene",class extends(Object(r.a)(i.a)){static get template(){return n.a`
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
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}activateScene(t){t.stopPropagation(),this.hass.callService("scene","turn_on",{entity_id:this.stateObj.entity_id})}});a(231);customElements.define("state-card-script",class extends(Object(r.a)(i.a)){static get template(){return n.a`
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
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}fireScript(t){t.stopPropagation(),this.hass.callService("script","turn_on",{entity_id:this.stateObj.entity_id})}});var x=a(269),w=a(262);customElements.define("state-card-timer",class extends i.a{static get template(){return n.a`
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
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:{type:Object,observer:"stateObjChanged"},timeRemaining:Number,inDialog:{type:Boolean,value:!1}}}connectedCallback(){super.connectedCallback(),this.startInterval(this.stateObj)}disconnectedCallback(){super.disconnectedCallback(),this.clearInterval()}stateObjChanged(t){this.startInterval(t)}clearInterval(){this._updateRemaining&&(clearInterval(this._updateRemaining),this._updateRemaining=null)}startInterval(t){this.clearInterval(),this.calculateRemaining(t),"active"===t.state&&(this._updateRemaining=setInterval(()=>this.calculateRemaining(this.stateObj),1e3))}calculateRemaining(t){this.timeRemaining=Object(x.a)(t)}_secondsToDuration(t){return Object(w.a)(t)}});customElements.define("state-card-toggle",class extends i.a{static get template(){return n.a`
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
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}});const O={cleaning:{action:"return_to_base",service:"return_to_base"},docked:{action:"start_cleaning",service:"start"},idle:{action:"start_cleaning",service:"start"},off:{action:"turn_on",service:"turn_on"},on:{action:"turn_off",service:"turn_off"},paused:{action:"resume_cleaning",service:"start"}};customElements.define("ha-vacuum-state",class extends(Object(r.a)(i.a)){static get template(){return n.a`
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
    `}static get properties(){return{hass:Object,stateObj:Object,_interceptable:{type:Boolean,computed:"_computeInterceptable(stateObj.state, stateObj.attributes.supported_features)"}}}_computeInterceptable(t,e){return t in O&&0!==e}_computeLabel(t,e){return e?this.localize(`ui.card.vacuum.actions.${O[t].action}`):this.localize(`state.vacuum.${t}`)}_callService(t){t.stopPropagation();const e=this.stateObj,a=O[e.state].service;this.hass.callService("vacuum",a,{entity_id:e.entity_id})}});customElements.define("state-card-vacuum",class extends i.a{static get template(){return n.a`
      <style include="iron-flex iron-flex-alignment"></style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-vacuum-state
          hass="[[hass]]"
          state-obj="[[stateObj]]"
        ></ha-vacuum-state>
      </div>
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}});customElements.define("ha-water_heater-state",class extends(Object(r.a)(i.a)){static get template(){return n.a`
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
    `}static get properties(){return{hass:Object,stateObj:Object}}computeTarget(t,e){return t&&e?null!=e.attributes.target_temp_low&&null!=e.attributes.target_temp_high?`${e.attributes.target_temp_low} - ${e.attributes.target_temp_high} ${t.config.unit_system.temperature}`:null!=e.attributes.temperature?`${e.attributes.temperature} ${t.config.unit_system.temperature}`:"":null}_localizeState(t){return this.localize(`state.water_heater.${t}`)||t}});customElements.define("state-card-water_heater",class extends i.a{static get template(){return n.a`
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
    `}static get stateInfoTemplate(){return n.a`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `}static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}});customElements.define("state-card-weblink",class extends i.a{static get template(){return n.a`
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
    `}static get stateBadgeTemplate(){return n.a`
      <state-badge state-obj="[[stateObj]]"></state-badge>
    `}static get properties(){return{stateObj:Object,inDialog:{type:Boolean,value:!1}}}ready(){super.ready(),this.addEventListener("click",t=>this.onTap(t))}_computeStateName(t){return Object(f.a)(t)}onTap(t){t.stopPropagation(),t.preventDefault(),window.open(this.stateObj.state,"_blank")}});var j=a(301),k=a(180),C=a(119);var T=a(274);customElements.define("state-card-content",class extends i.a{static get properties(){return{hass:Object,stateObj:Object,inDialog:{type:Boolean,value:!1}}}static get observers(){return["inputChanged(hass, inDialog, stateObj)"]}inputChanged(t,e,a){let i;a&&t&&(i=a.attributes&&"custom_ui_state_card"in a.attributes?a.attributes.custom_ui_state_card:"state-card-"+function(t,e){if("unavailable"===e.state)return"display";var a=Object(k.a)(e);return C.g.includes(a)?a:Object(j.a)(t,e)&&"hidden"!==e.attributes.control?"toggle":"display"}(t,a),Object(T.a)(this,i.toUpperCase(),{hass:t,stateObj:a,inDialog:e}))}})},324:function(t,e,a){"use strict";a(259);var i=a(260);Object(i.b)("waterfall",{run:function(){this.shadow=this.isOnScreen()&&this.isContentBelow()}})},326:function(t,e,a){"use strict";a(182),a(108),a(155),a(245);var i=a(4),n=a(30),r=a(264),o=a(306),s=a(176),l=a(118),c=a(175);customElements.define("ha-media_player-card",class extends(Object(c.a)(Object(l.a)(n.a))){static get template(){return i.a`
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
    `}static get properties(){return{hass:Object,stateObj:Object,playerObj:{type:Object,computed:"computePlayerObj(hass, stateObj)",observer:"playerObjChanged"},playbackControlIcon:{type:String,computed:"computePlaybackControlIcon(playerObj)"},playbackPosition:Number,_coverShowing:{type:Boolean,value:!1},_coverLoadError:{type:Boolean,value:!1}}}async playerObjChanged(t,e){t.isPlaying&&t.showProgress?this._positionTracking||(this._positionTracking=setInterval(()=>this.updatePlaybackPosition(),1e3)):this._positionTracking&&(clearInterval(this._positionTracking),this._positionTracking=null),t.showProgress&&this.updatePlaybackPosition();const a=t.stateObj.attributes.entity_picture,i=e&&e.stateObj.attributes.entity_picture;if(a===i||a){if(a!==i){if("/"!==a.substr(0,1))return this._coverShowing=!0,this._coverLoadError=!1,void(this.$.cover.style.backgroundImage=`url(${a})`);try{const{content_type:e,content:a}=await Object(o.e)(this.hass,t.stateObj.entity_id);this._coverShowing=!0,this._coverLoadError=!1,this.$.cover.style.backgroundImage=`url(data:${e};base64,${a})`}catch(n){this._coverShowing=!1,this._coverLoadError=!0,this.$.cover.style.backgroundImage=""}}}else this.$.cover.style.backgroundImage=""}updatePlaybackPosition(){this.playbackPosition=this.playerObj.currentProgress}computeBannerClasses(t,e,a){var i="banner";return t?(t.isOff||t.isIdle?i+=" is-off no-cover":t.stateObj.attributes.entity_picture&&!a&&e?"music"===t.stateObj.attributes.media_content_type?i+=" content-type-music":"game"===t.stateObj.attributes.media_content_type&&(i+=" content-type-game"):i+=" no-cover",i):i}computeHideProgress(t){return!t.showProgress}computeHidePowerButton(t){return t.isOff?!t.supportsTurnOn:!t.supportsTurnOff}computePlayerObj(t,e){return new r.a(t,e)}computePrimaryText(t,e){return e.primaryTitle||t(`state.media_player.${e.stateObj.state}`)||t(`state.default.${e.stateObj.state}`)||e.stateObj.state}computePlaybackControlIcon(t){return t.isPlaying?t.supportsPause?"hass:pause":"hass:stop":t.hasMediaControl||t.isOff||t.isIdle?t.hasMediaControl&&t.supportsPause&&!t.isPaused?"hass:play-pause":t.supportsPlay?"hass:play":null:""}_computeStateName(t){return Object(s.a)(t)}handleNext(t){t.stopPropagation(),this.playerObj.nextTrack()}handleOpenMoreInfo(t){t.stopPropagation(),this.fire("hass-more-info",{entityId:this.stateObj.entity_id})}handlePlaybackControl(t){t.stopPropagation(),this.playerObj.mediaPlayPause()}handlePrevious(t){t.stopPropagation(),this.playerObj.previousTrack()}handleTogglePower(t){t.stopPropagation(),this.playerObj.togglePower()}})},327:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var i=a(119);function n(t){var e=[];return Object.keys(t).forEach((function(a){var i=t[a];i.attributes.view&&e.push(i)})),e.sort((function(t,e){return t.entity_id===i.c?-1:e.entity_id===i.c?1:t.attributes.order-e.attributes.order})),e}},328:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var i=a(121),n=a(295);function r(t,e){var a={};return e.attributes.entity_id.forEach((function(e){var r=t[e];if(r&&!r.attributes.hidden&&(a[r.entity_id]=r,"group"===Object(i.a)(r.entity_id))){var o=Object(n.a)(t,r);Object.keys(o).forEach((function(t){var e=o[t];e.attributes.hidden||(a[t]=e)}))}})),a}},329:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var i=a(121);function n(t){var e=[],a={};return Object.keys(t).forEach((function(n){var r=t[n];"group"===Object(i.a)(n)?e.push(r):a[n]=r})),e.forEach((function(t){return t.attributes.entity_id.forEach((function(t){delete a[t]}))})),{groups:e,ungrouped:a}}},330:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var i=a(180),n=a(119);function r(t){var e=Object(i.a)(t);return n.h.includes(e)?e:n.d.includes(e)?"hidden":"default"}},331:function(t,e,a){"use strict";a(296);var i=a(4),n=a(30),r=(a(267),a(268),a(176)),o=a(118);customElements.define("ha-history_graph-card",class extends(Object(o.a)(n.a)){static get template(){return i.a`
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
    `}static get properties(){return{hass:Object,stateObj:{type:Object,observer:"stateObjObserver"},inDialog:{type:Boolean,value:!1},stateHistory:Object,stateHistoryLoading:Boolean,cacheConfig:{type:Object,value:{refresh:0,cacheKey:null,hoursToShow:24}}}}stateObjObserver(t){t&&(this.cacheConfig.cacheKey===t.entity_id&&this.cacheConfig.refresh===(t.attributes.refresh||0)&&this.cacheConfig.hoursToShow===(t.attributes.hours_to_show||24)||(this.cacheConfig={refresh:t.attributes.refresh||0,cacheKey:t.entity_id,hoursToShow:t.attributes.hours_to_show||24}))}computeTitle(t){return Object(r.a)(t)}computeContentClass(t){return t?"":"content"}computeHistoryEntities(t){return t.attributes.entity_id}computeElevation(t){return t?0:1}cardTapped(t){window.matchMedia("(min-width: 610px) and (min-height: 550px)").matches&&(t.stopPropagation(),this.fire("hass-more-info",{entityId:this.stateObj.entity_id}))}})},474:function(t,e,a){"use strict";a.r(e);var i=a(4),n=a(30),r=(a(220),a(324),a(150),a(234),a(182),a(5),a(98)),o=a(90),s=a(6);Object(s.a)({_template:i.a`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(slot):not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,is:"iron-pages",behaviors:[r.a,o.a],properties:{activateEvent:{type:String,value:null}},observers:["_selectedPageChanged(selected)"],_selectedPageChanged:function(t,e){this.async(this.notifyResize)}});a(243),a(275);var l=a(12),c=a(22);a(286);customElements.define("ha-badges-card",class extends n.a{static get template(){return i.a`
      <style>
        ha-state-label-badge {
          display: inline-block;
          margin-bottom: var(--ha-state-label-badge-margin-bottom, 16px);
        }
      </style>
      <template is="dom-repeat" items="[[states]]">
        <ha-state-label-badge
          hass="[[hass]]"
          state="[[item]]"
        ></ha-state-label-badge>
      </template>
    `}static get properties(){return{hass:Object,states:Array}}});a(245);var d=a(176),p=a(118),u=a(175),h=a(282);const b=1e4;customElements.define("ha-camera-card",class extends(Object(u.a)(Object(p.a)(n.a))){static get template(){return i.a`
      <style include="paper-material-styles">
        :host {
          @apply --paper-material-elevation-1;
          display: block;
          position: relative;
          font-size: 0px;
          border-radius: 2px;
          cursor: pointer;
          min-height: 48px;
          line-height: 0;
        }
        .camera-feed {
          width: 100%;
          height: auto;
          border-radius: 2px;
        }
        .caption {
          @apply --paper-font-common-nowrap;
          position: absolute;
          left: 0px;
          right: 0px;
          bottom: 0px;
          border-bottom-left-radius: 2px;
          border-bottom-right-radius: 2px;

          background-color: rgba(0, 0, 0, 0.3);
          padding: 16px;

          font-size: 16px;
          font-weight: 500;
          line-height: 16px;
          color: white;
        }
      </style>

      <template is="dom-if" if="[[cameraFeedSrc]]">
        <img
          src="[[cameraFeedSrc]]"
          class="camera-feed"
          alt="[[_computeStateName(stateObj)]]"
          on-load="_imageLoaded"
          on-error="_imageError"
        />
      </template>
      <div class="caption">
        [[_computeStateName(stateObj)]]
        <template is="dom-if" if="[[!imageLoaded]]">
          ([[localize('ui.card.camera.not_available')]])
        </template>
      </div>
    `}static get properties(){return{hass:Object,stateObj:{type:Object,observer:"updateCameraFeedSrc"},cameraFeedSrc:{type:String,value:""},imageLoaded:{type:Boolean,value:!0}}}ready(){super.ready(),this.addEventListener("click",()=>this.cardTapped())}connectedCallback(){super.connectedCallback(),this.timer=setInterval(()=>this.updateCameraFeedSrc(),b)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer)}_imageLoaded(){this.imageLoaded=!0}_imageError(){this.imageLoaded=!1}cardTapped(){this.fire("hass-more-info",{entityId:this.stateObj.entity_id})}async updateCameraFeedSrc(){this.cameraFeedSrc=await Object(h.e)(this.hass,this.stateObj.entity_id)}_computeStateName(t){return Object(d.a)(t)}});a(231),a(177),a(313);var m=a(180),g=a(330),f=a(301);customElements.define("ha-entities-card",class extends(Object(u.a)(Object(p.a)(n.a))){static get template(){return i.a`
      <style include="iron-flex"></style>
      <style>
        ha-card {
          padding: 16px;
        }
        .states {
          margin: -4px 0;
        }
        .state {
          padding: 4px 0;
        }
        .header {
          @apply --paper-font-headline;
          /* overwriting line-height +8 because entity-toggle can be 40px height,
           compensating this with reduced padding */
          line-height: 40px;
          color: var(--primary-text-color);
          padding: 4px 0 12px;
        }
        .header .name {
          @apply --paper-font-common-nowrap;
        }
        ha-entity-toggle {
          margin-left: 16px;
        }
        .more-info {
          cursor: pointer;
        }
      </style>

      <ha-card>
        <template is="dom-if" if="[[title]]">
          <div
            class$="[[computeTitleClass(groupEntity)]]"
            on-click="entityTapped"
          >
            <div class="flex name">[[title]]</div>
            <template is="dom-if" if="[[showGroupToggle(groupEntity, states)]]">
              <ha-entity-toggle
                hass="[[hass]]"
                state-obj="[[groupEntity]]"
              ></ha-entity-toggle>
            </template>
          </div>
        </template>
        <div class="states">
          <template
            is="dom-repeat"
            items="[[states]]"
            on-dom-change="addTapEvents"
          >
            <div class$="[[computeStateClass(item)]]">
              <state-card-content
                hass="[[hass]]"
                class="state-card"
                state-obj="[[item]]"
              ></state-card-content>
            </div>
          </template>
        </div>
      </ha-card>
    `}static get properties(){return{hass:Object,states:Array,groupEntity:Object,title:{type:String,computed:"computeTitle(states, groupEntity, localize)"}}}constructor(){super(),this.entityTapped=this.entityTapped.bind(this)}computeTitle(t,e,a){if(e)return Object(d.a)(e).trim();const i=Object(m.a)(t[0]);return a&&a(`domain.${i}`)||i.replace(/_/g," ")}computeTitleClass(t){let e="header horizontal layout center ";return t&&(e+="more-info"),e}computeStateClass(t){return"hidden"!==Object(g.a)(t)?"state more-info":"state"}addTapEvents(){this.root.querySelectorAll(".state").forEach(t=>{t.classList.contains("more-info")?t.addEventListener("click",this.entityTapped):t.removeEventListener("click",this.entityTapped)})}entityTapped(t){const e=this.root.querySelector("dom-repeat").itemForElement(t.target);let a;(e||this.groupEntity)&&(t.stopPropagation(),a=e?e.entity_id:this.groupEntity.entity_id,this.fire("hass-more-info",{entityId:a}))}showGroupToggle(t,e){if(!t||!e||"hidden"===t.attributes.control||"on"!==t.state&&"off"!==t.state)return!1;let a=0;for(let i=0;i<e.length&&!(Object(f.a)(this.hass,e[i])&&++a>1);i++);return a>1}});a(331),a(326),a(85),a(154);var v=a(188);customElements.define("ha-persistent_notification-card",class extends(Object(u.a)(n.a)){static get template(){return i.a`
      <style>
        :host {
          @apply --paper-font-body1;
        }
        ha-markdown {
          display: block;
          padding: 0 16px;
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
        }
        ha-markdown p:first-child {
          margin-top: 0;
        }
        ha-markdown p:last-child {
          margin-bottom: 0;
        }
        ha-markdown a {
          color: var(--primary-color);
        }
        ha-markdown img {
          max-width: 100%;
        }
        mwc-button {
          margin: 8px;
        }
      </style>

      <ha-card header="[[computeTitle(stateObj)]]">
        <ha-markdown content="[[stateObj.attributes.message]]"></ha-markdown>
        <mwc-button on-click="dismissTap"
          >[[localize('ui.card.persistent_notification.dismiss')]]</mwc-button
        >
      </ha-card>
    `}static get properties(){return{hass:Object,stateObj:Object}}computeTitle(t){return t.attributes.title||Object(d.a)(t)}dismissTap(t){t.preventDefault(),this.hass.callService("persistent_notification","dismiss",{notification_id:Object(v.a)(this.stateObj.entity_id)})}});a(179);customElements.define("ha-plant-card",class extends(Object(p.a)(n.a)){static get template(){return i.a`
      <style>
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
          @apply --paper-font-headline;
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
      </style>

      <ha-card
        class$="[[computeImageClass(stateObj.attributes.entity_picture)]]"
      >
        <div
          class="banner"
          style="background-image:url([[stateObj.attributes.entity_picture]])"
        >
          <div class="header">[[computeTitle(stateObj)]]</div>
        </div>
        <div class="content">
          <template
            is="dom-repeat"
            items="[[computeAttributes(stateObj.attributes)]]"
          >
            <div class="attributes" on-click="attributeClicked">
              <div>
                <ha-icon
                  icon="[[computeIcon(item, stateObj.attributes.battery)]]"
                ></ha-icon>
              </div>
              <div
                class$="[[computeAttributeClass(stateObj.attributes.problem, item)]]"
              >
                [[computeValue(stateObj.attributes, item)]]
              </div>
              <div class="uom">
                [[computeUom(stateObj.attributes.unit_of_measurement_dict,
                item)]]
              </div>
            </div>
          </template>
        </div>
      </ha-card>
    `}static get properties(){return{hass:Object,stateObj:Object,config:Object}}constructor(){super(),this.sensors={moisture:"hass:water",temperature:"hass:thermometer",brightness:"hass:white-balance-sunny",conductivity:"hass:emoticon-poop",battery:"hass:battery"}}computeTitle(t){return this.config&&this.config.name||Object(d.a)(t)}computeAttributes(t){return Object.keys(this.sensors).filter(e=>e in t)}computeIcon(t,e){const a=this.sensors[t];if("battery"===t){if(e<=5)return`${a}-alert`;if(e<95)return`${a}-${10*Math.round(e/10-.01)}`}return a}computeValue(t,e){return t[e]}computeUom(t,e){return t[e]||""}computeAttributeClass(t,e){return-1===t.indexOf(e)?"":"problem"}computeImageClass(t){return t?"has-plant-image":""}attributeClicked(t){this.fire("hass-more-info",{entityId:this.stateObj.attributes.sensors[t.model.item]})}});var y=a(96);customElements.define("ha-weather-card",class extends(Object(u.a)(Object(p.a)(n.a))){static get template(){return i.a`
      <style>
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
      </style>
      <ha-card>
        <div class="header">
          [[computeState(stateObj.state, localize)]]
          <div class="name">[[computeName(stateObj)]]</div>
        </div>
        <div class="content">
          <div class="now">
            <div class="main">
              <template is="dom-if" if="[[showWeatherIcon(stateObj.state)]]">
                <ha-icon icon="[[getWeatherIcon(stateObj.state)]]"></ha-icon>
              </template>
              <div class="temp">
                [[stateObj.attributes.temperature]]<span
                  >[[getUnit('temperature')]]</span
                >
              </div>
            </div>
            <div class="attributes">
              <template
                is="dom-if"
                if="[[_showValue(stateObj.attributes.pressure)]]"
              >
                <div>
                  [[localize('ui.card.weather.attributes.air_pressure')]]:
                  <span class="measurand">
                    [[stateObj.attributes.pressure]] [[getUnit('air_pressure')]]
                  </span>
                </div>
              </template>
              <template
                is="dom-if"
                if="[[_showValue(stateObj.attributes.humidity)]]"
              >
                <div>
                  [[localize('ui.card.weather.attributes.humidity')]]:
                  <span class="measurand"
                    >[[stateObj.attributes.humidity]] %</span
                  >
                </div>
              </template>
              <template
                is="dom-if"
                if="[[_showValue(stateObj.attributes.wind_speed)]]"
              >
                <div>
                  [[localize('ui.card.weather.attributes.wind_speed')]]:
                  <span class="measurand">
                    [[getWindSpeed(stateObj.attributes.wind_speed)]]
                  </span>
                  [[getWindBearing(stateObj.attributes.wind_bearing, localize)]]
                </div>
              </template>
            </div>
          </div>
          <template is="dom-if" if="[[forecast]]">
            <div class="forecast">
              <template is="dom-repeat" items="[[forecast]]">
                <div>
                  <div class="weekday">
                    [[computeDate(item.datetime)]]<br />
                    <template is="dom-if" if="[[!_showValue(item.templow)]]">
                      [[computeTime(item.datetime)]]
                    </template>
                  </div>
                  <template is="dom-if" if="[[_showValue(item.condition)]]">
                    <div class="icon">
                      <ha-icon
                        icon="[[getWeatherIcon(item.condition)]]"
                      ></ha-icon>
                    </div>
                  </template>
                  <template is="dom-if" if="[[_showValue(item.temperature)]]">
                    <div class="temp">
                      [[item.temperature]] [[getUnit('temperature')]]
                    </div>
                  </template>
                  <template is="dom-if" if="[[_showValue(item.templow)]]">
                    <div class="templow">
                      [[item.templow]] [[getUnit('temperature')]]
                    </div>
                  </template>
                  <template is="dom-if" if="[[_showValue(item.precipitation)]]">
                    <div class="precipitation">
                      [[item.precipitation]] [[getUnit('precipitation')]]
                    </div>
                  </template>
                </div>
              </template>
            </div>
          </template>
        </div>
      </ha-card>
    `}static get properties(){return{hass:Object,config:Object,stateObj:Object,forecast:{type:Array,computed:"computeForecast(stateObj.attributes.forecast)"},rtl:{type:Boolean,reflectToAttribute:!0,computed:"_computeRTL(hass)"}}}constructor(){super(),this.cardinalDirections=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"],this.weatherIcons={"clear-night":"hass:weather-night",cloudy:"hass:weather-cloudy",exceptional:"hass:alert-circle-outline",fog:"hass:weather-fog",hail:"hass:weather-hail",lightning:"hass:weather-lightning","lightning-rainy":"hass:weather-lightning-rainy",partlycloudy:"hass:weather-partly-cloudy",pouring:"hass:weather-pouring",rainy:"hass:weather-rainy",snowy:"hass:weather-snowy","snowy-rainy":"hass:weather-snowy-rainy",sunny:"hass:weather-sunny",windy:"hass:weather-windy","windy-variant":"hass:weather-windy-variant"}}ready(){this.addEventListener("click",this._onClick),super.ready()}_onClick(){this.fire("hass-more-info",{entityId:this.stateObj.entity_id})}computeForecast(t){return t&&t.slice(0,5)}getUnit(t){const e=this.hass.config.unit_system.length||"";switch(t){case"air_pressure":return"km"===e?"hPa":"inHg";case"length":return e;case"precipitation":return"km"===e?"mm":"in";default:return this.hass.config.unit_system[t]||""}}computeState(t,e){return e(`state.weather.${t}`)||t}computeName(t){return this.config&&this.config.name||Object(d.a)(t)}showWeatherIcon(t){return t in this.weatherIcons}getWeatherIcon(t){return this.weatherIcons[t]}windBearingToText(t){const e=parseInt(t);return isFinite(e)?this.cardinalDirections[((e+11.25)/22.5|0)%16]:t}getWindSpeed(t){return`${t} ${this.getUnit("length")}/h`}getWindBearing(t,e){if(null!=t){const a=this.windBearingToText(t);return`(${e(`ui.card.weather.cardinal_direction.${a.toLowerCase()}`)||a})`}return""}_showValue(t){return null!=t}computeDate(t){return new Date(t).toLocaleDateString(this.hass.language,{weekday:"short"})}computeTime(t){return new Date(t).toLocaleTimeString(this.hass.language,{hour:"numeric"})}_computeRTL(t){return Object(y.a)(t)}});var _=a(274);customElements.define("ha-card-chooser",class extends n.a{static get properties(){return{cardData:{type:Object,observer:"cardDataChanged"}}}_updateCard(t){Object(_.a)(this,"HA-"+t.cardType.toUpperCase()+"-CARD",t)}createObserver(){this._updatesAllowed=!1,this.observer=new IntersectionObserver(t=>{if(t.length)if(t[0].isIntersecting)this.style.height="",this._detachedChild&&(this.appendChild(this._detachedChild),this._detachedChild=null),this._updateCard(this.cardData),this._updatesAllowed=!0;else{const t=this.offsetHeight;this.style.height=`${t||48}px`,this.lastChild&&(this._detachedChild=this.lastChild,this.removeChild(this.lastChild)),this._updatesAllowed=!1}}),this.observer.observe(this)}cardDataChanged(t){if(!t)return;if(!(window.IntersectionObserver&&"entities"!==t.cardType))return this.observer&&(this.observer.unobserve(this),this.observer=null),this.style.height="",void this._updateCard(t);this.observer||this.createObserver(),this._updatesAllowed&&this._updateCard(t)}});a(280);customElements.define("ha-demo-badge",class extends n.a{static get template(){return i.a`
      <style>
        :host {
          --ha-label-badge-color: #dac90d;
        }
      </style>

      <ha-label-badge
        icon="hass:emoticon"
        label="Demo"
        description=""
      ></ha-label-badge>
    `}});var x=a(329),w=a(295);const O={camera:4,history_graph:4,media_player:3,persistent_notification:0,plant:3,weather:4},j={configurator:-20,persistent_notification:-15,updater:0,sun:1,person:2,device_tracker:3,alarm_control_panel:4,timer:5,sensor:6,binary_sensor:7,mailbox:8},k=t=>t in j?j[t]:100,C=(t,e)=>t.priority-e.priority,T=(t,e)=>{const a=(t.attributes.friendly_name||t.entity_id).toLowerCase(),i=(e.attributes.friendly_name||e.entity_id).toLowerCase();return a<i?-1:a>i?1:0},S=(t,e)=>{Object.keys(t).map(e=>t[e]).sort(C).forEach(t=>{t.states.sort(T),e(t)})};customElements.define("ha-cards",class extends n.a{static get template(){return i.a`
      <style include="iron-flex iron-flex-factors"></style>
      <style>
        :host {
          display: block;
          padding: 4px 4px 0;
          transform: translateZ(0);
          position: relative;
        }

        .badges {
          font-size: 85%;
          text-align: center;
          padding-top: 16px;
        }

        .column {
          max-width: 500px;
          overflow-x: hidden;
        }

        ha-card-chooser {
          display: block;
          margin: 4px 4px 8px;
        }

        @media (max-width: 500px) {
          :host {
            padding-left: 0;
            padding-right: 0;
          }

          ha-card-chooser {
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

      <div id="main">
        <template is="dom-if" if="[[cards.badges.length]]">
          <div class="badges">
            <template is="dom-if" if="[[cards.demo]]">
              <ha-demo-badge></ha-demo-badge>
            </template>

            <ha-badges-card
              states="[[cards.badges]]"
              hass="[[hass]]"
            ></ha-badges-card>
          </div>
        </template>

        <div class="horizontal layout center-justified">
          <template is="dom-repeat" items="[[cards.columns]]" as="column">
            <div class="column flex-1">
              <template is="dom-repeat" items="[[column]]" as="card">
                <ha-card-chooser card-data="[[card]]"></ha-card-chooser>
              </template>
            </div>
          </template>
        </div>
      </div>
    `}static get properties(){return{hass:Object,columns:{type:Number,value:2},states:Object,viewVisible:{type:Boolean,value:!1},orderedGroupEntities:Array,cards:Object}}static get observers(){return["updateCards(columns, states, viewVisible, orderedGroupEntities)"]}updateCards(t,e,a,i){a?(!this.$.main.parentNode&&this.$.main._parentNode&&this.$.main._parentNode.appendChild(this.$.main),this._debouncer=c.a.debounce(this._debouncer,l.d.after(10),()=>{this.viewVisible&&(this.cards=this.computeCards(t,e,i))})):this.$.main.parentNode&&(this.$.main._parentNode=this.$.main.parentNode,this.$.main.parentNode.removeChild(this.$.main))}emptyCards(){return{demo:!1,badges:[],columns:[]}}computeCards(t,e,a){const i=this.hass,n=this.emptyCards(),r=[];for(let p=0;p<t;p++)n.columns.push([]),r.push(0);function o(t,e,a){if(0===e.length)return;const o=[],s=[];let l=0;e.forEach(t=>{const e=Object(m.a)(t);e in O&&!t.attributes.custom_ui_state_card?(o.push(t),l+=O[e]):(s.push(t),l++)});const c=function(t){let e=0;for(let a=0;a<r.length;a++){if(r[a]<5){e=a;break}r[a]<r[e]&&(e=a)}return r[e]+=t,e}(l+=s.length>0);s.length>0&&n.columns[c].push({hass:i,cardType:"entities",states:s,groupEntity:a||!1}),o.forEach(t=>{n.columns[c].push({hass:i,cardType:Object(m.a)(t),stateObj:t})})}const s=Object(x.a)(e);a?s.groups.sort((t,e)=>a[t.entity_id]-a[e.entity_id]):s.groups.sort((t,e)=>t.attributes.order-e.attributes.order);const l={},c={},d={};return Object.keys(s.ungrouped).forEach(t=>{const e=s.ungrouped[t],a=Object(m.a)(e);if("a"===a)return void(n.demo=!0);const i=k(a);let r;a in(r=i<0?c:i<10?l:d)||(r[a]={domain:a,priority:i,states:[]}),r[a].states.push(e)}),a?(Object.keys(l).map(t=>l[t]).forEach(t=>{n.badges.push.apply(n.badges,t.states)}),n.badges.sort((t,e)=>a[t.entity_id]-a[e.entity_id])):S(l,t=>{n.badges.push.apply(n.badges,t.states)}),S(c,t=>{o(t.domain,t.states)}),s.groups.forEach(t=>{const a=Object(w.a)(e,t);o(t.entity_id,Object.keys(a).map(t=>a[t]),t)}),S(d,t=>{o(t.domain,t.states)}),n.columns=n.columns.filter(t=>t.length>0),n}});a(129),a(285),a(254);var z=a(327),E=a(328);var A=a(250);const I="group.default_view",D=["persistent_notification","configurator"];customElements.define("ha-panel-states",class extends(Object(p.a)(Object(A.a)(n.a))){static get template(){return i.a`
      <style include="iron-flex iron-positioning ha-style">
        :host {
          -ms-user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
        }

        ha-app-layout {
          min-height: 100%;
          background-color: var(--secondary-background-color, #e5e5e5);
        }

        iron-pages {
          height: 100%;
        }

        paper-tabs {
          margin-left: 12px;
          --paper-tabs-selection-bar-color: var(--text-primary-color, #fff);
          text-transform: uppercase;
        }
      </style>
      <app-route
        route="{{route}}"
        pattern="/:view"
        data="{{routeData}}"
        active="{{routeMatch}}"
      ></app-route>
      <ha-app-layout id="layout">
        <app-header effects="waterfall" condenses="" fixed="" slot="header">
          <app-toolbar>
            <ha-menu-button
              hass="[[hass]]"
              narrow="[[narrow]]"
            ></ha-menu-button>
            <div main-title="">
              [[computeTitle(views, defaultView, locationName)]]
            </div>
            <ha-start-voice-button hass="[[hass]]"></ha-start-voice-button>
          </app-toolbar>

          <div sticky="" hidden$="[[areTabsHidden(views, showTabs)]]">
            <paper-tabs
              scrollable=""
              selected="[[currentView]]"
              attr-for-selected="data-entity"
              on-iron-activate="handleViewSelected"
            >
              <paper-tab data-entity="" on-click="scrollToTop">
                <template is="dom-if" if="[[!defaultView]]">
                  Home
                </template>
                <template is="dom-if" if="[[defaultView]]">
                  <template is="dom-if" if="[[defaultView.attributes.icon]]">
                    <ha-icon
                      title$="[[_computeStateName(defaultView)]]"
                      icon="[[defaultView.attributes.icon]]"
                    ></ha-icon>
                  </template>
                  <template is="dom-if" if="[[!defaultView.attributes.icon]]">
                    [[_computeStateName(defaultView)]]
                  </template>
                </template>
              </paper-tab>
              <template is="dom-repeat" items="[[views]]">
                <paper-tab
                  data-entity$="[[item.entity_id]]"
                  on-click="scrollToTop"
                >
                  <template is="dom-if" if="[[item.attributes.icon]]">
                    <ha-icon
                      title$="[[_computeStateName(item)]]"
                      icon="[[item.attributes.icon]]"
                    ></ha-icon>
                  </template>
                  <template is="dom-if" if="[[!item.attributes.icon]]">
                    [[_computeStateName(item)]]
                  </template>
                </paper-tab>
              </template>
            </paper-tabs>
          </div>
        </app-header>

        <iron-pages
          attr-for-selected="data-view"
          selected="[[currentView]]"
          selected-attribute="view-visible"
        >
          <ha-cards
            data-view=""
            states="[[viewStates]]"
            columns="[[_columns]]"
            hass="[[hass]]"
            panel-visible="[[panelVisible]]"
            ordered-group-entities="[[orderedGroupEntities]]"
          ></ha-cards>

          <template is="dom-repeat" items="[[views]]">
            <ha-cards
              data-view$="[[item.entity_id]]"
              states="[[viewStates]]"
              columns="[[_columns]]"
              hass="[[hass]]"
              panel-visible="[[panelVisible]]"
              ordered-group-entities="[[orderedGroupEntities]]"
            ></ha-cards>
          </template>
        </iron-pages>
      </ha-app-layout>
    `}static get properties(){return{hass:{type:Object,value:null,observer:"hassChanged"},narrow:{type:Boolean,value:!1},panelVisible:{type:Boolean,value:!1},route:Object,routeData:Object,routeMatch:Boolean,_columns:{type:Number,value:1},locationName:{type:String,value:"",computed:"_computeLocationName(hass)"},currentView:{type:String,computed:"_computeCurrentView(hass, routeMatch, routeData)"},views:{type:Array},defaultView:{type:Object},viewStates:{type:Object,computed:"computeViewStates(currentView, hass, defaultView)"},orderedGroupEntities:{type:Array,computed:"computeOrderedGroupEntities(currentView, hass, defaultView)"},showTabs:{type:Boolean,value:!0}}}static get observers(){return["_updateColumns(narrow, hass.dockedSidebar)"]}ready(){this._updateColumns=this._updateColumns.bind(this),this.mqls=[300,600,900,1200].map(t=>matchMedia(`(min-width: ${t}px)`)),super.ready()}connectedCallback(){super.connectedCallback(),this.mqls.forEach(t=>t.addListener(this._updateColumns))}disconnectedCallback(){super.disconnectedCallback(),this.mqls.forEach(t=>t.removeListener(this._updateColumns))}_updateColumns(){const t=this.mqls.reduce((t,e)=>t+e.matches,0);this._columns=Math.max(1,t-(!this.narrow&&"docked"===this.hass.dockedSidebar))}areTabsHidden(t,e){return!t||!t.length||!e}scrollToTop(){var t=this.$.layout.header.scrollTarget,e=Math.random(),a=Date.now(),i=t.scrollTop,n=0-i;this._currentAnimationId=e,function r(){var o,s=Date.now()-a;s>200?t.scrollTop=0:this._currentAnimationId===e&&(t.scrollTop=(o=s,-n*(o/=200)*(o-2)+i),requestAnimationFrame(r.bind(this)))}.call(this)}handleViewSelected(t){const e=t.detail.item.getAttribute("data-entity")||null;if(e!==this.currentView){let t="/states";e&&(t+="/"+e),this.navigate(t)}}_computeCurrentView(t,e,a){return e&&t.states[a.view]&&t.states[a.view].attributes.view?a.view:""}computeTitle(t,e,a){return t&&t.length>0&&!e&&"Home"===a||!a?"ioBroker":a}_computeStateName(t){return Object(d.a)(t)}_computeLocationName(t){return function(t){return t&&t.config.location_name}(t)}hassChanged(t){if(!t)return;const e=Object(z.a)(t.states);let a=null;e.length>0&&e[0].entity_id===I&&(a=e.shift()),this.setProperties({views:e,defaultView:a})}isView(t,e){return(t||e)&&this.hass.states[t||I]}_defaultViewFilter(t,e){return!t.states[e].attributes.hidden}_computeDefaultViewStates(t,e){const a={};return e.filter(this._defaultViewFilter.bind(null,t)).forEach(e=>{a[e]=t.states[e]}),a}computeViewStates(t,e,a){const i=Object.keys(e.states);if(!this.isView(t,a))return this._computeDefaultViewStates(e,i);let n;return n=t?Object(E.a)(e.states,e.states[t]):Object(E.a)(e.states,e.states[I]),i.forEach(t=>{const a=e.states[t];D.includes(Object(m.a)(a))&&(n[t]=a)}),n}computeOrderedGroupEntities(t,e,a){if(!this.isView(t,a))return null;for(var i={},n=e.states[t||I].attributes.entity_id,r=0;r<n.length;r++)i[n[r]]=r;return i}})},66:function(t,e,a){"use strict";a.d(e,"c",(function(){return i})),a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}));var i=location.protocol+"//"+location.host,n=function(t,e){return t.callWS({type:"auth/sign_path",path:e})},r=function(){return fetch("/auth/providers",{credentials:"same-origin"})}},93:function(t,e,a){"use strict";a(5),a(113),a(114),a(115),a(116);var i=a(60),n=(a(41),a(6)),r=a(4),o=a(97);Object(n.a)({is:"paper-input",_template:r.a`
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
  `,behaviors:[o.a,i.a],properties:{value:{type:String}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}})},94:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a(5);var i=a(6),n=a(4);const r=Object(i.a)({_template:n.a`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){r.instance||(r.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(t){this._text="",this.async((function(){this._text=t}),100)},_onIronAnnounce:function(t){t.detail&&t.detail.text&&this.announce(t.detail.text)}});r.instance=null,r.requestAvailability=function(){r.instance||(r.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(r.instance)}}}]);
//# sourceMappingURL=chunk.8c2b42a2b26a9050177f.js.map