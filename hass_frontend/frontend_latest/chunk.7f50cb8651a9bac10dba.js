/*! For license information please see chunk.7f50cb8651a9bac10dba.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[79,4,5,6,8,142],{113:function(t,e,i){"use strict";i(5);var n=i(94),o=i(61),a=i(6),s=i(1),r=i(3);Object(a.a)({_template:r.a`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[o.a],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){n.a.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=Object(s.a)(this).observeNodes(function(t){this._initSlottedInput()}.bind(this))},detached:function(){this._observer&&(Object(s.a)(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var t;if(this.allowedPattern)t=new RegExp(this.allowedPattern);else switch(this.inputElement.type){case"number":t=/[0-9.,e-]/}return t},_bindValueChanged:function(t,e){e&&(void 0===t?e.value=null:t!==e.value&&(this.inputElement.value=t),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:t}))},_onInput:function(){this.allowedPattern&&!this._patternAlreadyChecked&&(this._checkPatternValidity()||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput));this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(t){var e=8==t.keyCode||9==t.keyCode||13==t.keyCode||27==t.keyCode,i=19==t.keyCode||20==t.keyCode||45==t.keyCode||46==t.keyCode||144==t.keyCode||145==t.keyCode||t.keyCode>32&&t.keyCode<41||t.keyCode>111&&t.keyCode<124;return!(e||0==t.charCode&&i)},_onKeypress:function(t){if(this.allowedPattern||"number"===this.inputElement.type){var e=this._patternRegExp;if(e&&!(t.metaKey||t.ctrlKey||t.altKey)){this._patternAlreadyChecked=!0;var i=String.fromCharCode(t.charCode);this._isPrintable(t)&&!e.test(i)&&(t.preventDefault(),this._announceInvalidCharacter("Invalid character "+i+" not entered."))}}},_checkPatternValidity:function(){var t=this._patternRegExp;if(!t)return!0;for(var e=0;e<this.inputElement.value.length;e++)if(!t.test(this.inputElement.value[e]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var t=this.inputElement.checkValidity();return t&&(this.required&&""===this.bindValue?t=!1:this.hasValidator()&&(t=o.a.validate.call(this,this.bindValue))),this.invalid=!t,this.fire("iron-input-validate"),t},_announceInvalidCharacter:function(t){this.fire("iron-announce",{text:t})},_computeValue:function(t){return t}})},118:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i(9),o=i(18);const a=Object(n.a)(t=>(class extends t{fire(t,e,i){return i=i||{},Object(o.a)(i.node||this,t,e,i)}}))},120:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));i(5);var n=i(55),o=i(35);const a=[n.a,o.a,{hostAttributes:{role:"option",tabindex:"0"}}]},122:function(t,e,i){"use strict";i(5);const n={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(t,e){for(var i in e)t[i]=e[i]},_cloneConfig:function(t){var e={isClone:!0};return this._copyProperties(e,t),e},_getAnimationConfigRecursive:function(t,e,i){var n;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(n=t?this.animationConfig[t]:this.animationConfig,Array.isArray(n)||(n=[n]),n)for(var o,a=0;o=n[a];a++)if(o.animatable)o.animatable._getAnimationConfigRecursive(o.type||t,e,i);else if(o.id){var s=e[o.id];s?(s.isClone||(e[o.id]=this._cloneConfig(s),s=e[o.id]),this._copyProperties(s,o)):e[o.id]=o}else i.push(o)},getAnimationConfig:function(t){var e={},i=[];for(var n in this._getAnimationConfigRecursive(t,e,i),e)i.push(e[n]);return i}};i.d(e,"a",(function(){return o}));const o=[n,{_configureAnimations:function(t){var e=[],i=[];if(t.length>0)for(let a,s=0;a=t[s];s++){let t=document.createElement(a.name);if(t.isNeonAnimation){let e=null;t.configure||(t.configure=function(t){return null}),e=t.configure(a),i.push({result:e,config:a,neonAnimation:t})}else console.warn(this.is+":",a.name,"not found!")}for(var n=0;n<i.length;n++){let t=i[n].result,a=i[n].config,s=i[n].neonAnimation;try{"function"!=typeof t.cancel&&(t=document.timeline.play(t))}catch(o){t=null,console.warn("Couldnt play","(",a.name,").",o)}t&&e.push({neonAnimation:s,config:a,animation:t})}return e},_shouldComplete:function(t){for(var e=!0,i=0;i<t.length;i++)if("finished"!=t[i].animation.playState){e=!1;break}return e},_complete:function(t){for(var e=0;e<t.length;e++)t[e].neonAnimation.complete(t[e].config);for(e=0;e<t.length;e++)t[e].animation.cancel()},playAnimation:function(t,e){var i=this.getAnimationConfig(t);if(i){this._active=this._active||{},this._active[t]&&(this._complete(this._active[t]),delete this._active[t]);var n=this._configureAnimations(i);if(0!=n.length){this._active[t]=n;for(var o=0;o<n.length;o++)n[o].animation.onfinish=function(){this._shouldComplete(n)&&(this._complete(n),delete this._active[t],this.fire("neon-animation-finish",e,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",e,{bubbles:!1})}},cancelAnimation:function(){for(var t in this._active){var e=this._active[t];for(var i in e)e[i].animation.cancel()}this._active={}}}]},123:function(t,e,i){"use strict";i(5);var n=i(60),o=i(61);const a={properties:{checked:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_checkedChanged"},toggles:{type:Boolean,value:!0,reflectToAttribute:!0},value:{type:String,value:"on",observer:"_valueChanged"}},observers:["_requiredChanged(required)"],created:function(){this._hasIronCheckedElementBehavior=!0},_getValidity:function(t){return this.disabled||!this.required||this.checked},_requiredChanged:function(){this.required?this.setAttribute("aria-required","true"):this.removeAttribute("aria-required")},_checkedChanged:function(){this.active=this.checked,this.fire("iron-change")},_valueChanged:function(){void 0!==this.value&&null!==this.value||(this.value="on")}},s=[n.a,o.a,a];var r=i(57),l=i(69);i.d(e,"a",(function(){return d}));const c={_checkedChanged:function(){a._checkedChanged.call(this),this.hasRipple()&&(this.checked?this._ripple.setAttribute("checked",""):this._ripple.removeAttribute("checked"))},_buttonStateChanged:function(){l.a._buttonStateChanged.call(this),this.disabled||this.isAttached&&(this.checked=this.active)}},d=[r.a,s,c]},143:function(t,e,i){"use strict";i(5),i(45),i(145);var n=i(6),o=i(3),a=i(120);Object(n.a)({_template:o.a`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[a.a]})},144:function(t,e,i){"use strict";i(5),i(42);var n=i(125),o=i(6),a=i(3);Object(o.a)({_template:a.a`
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
`,is:"paper-listbox",behaviors:[n.a],hostAttributes:{role:"listbox"}})},145:function(t,e,i){"use strict";i(45),i(68),i(42),i(54);const n=document.createElement("template");n.setAttribute("style","display: none;"),n.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(n.content)},146:function(t,e,i){"use strict";i(5),i(31),i(109),i(93),i(147),i(110),i(42),i(148),i(149);var n=i(55),o=i(35),a=i(60),s=i(61),r=i(6),l=i(1),c=i(36),d=i(3);Object(r.a)({_template:d.a`
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
`,is:"paper-dropdown-menu",behaviors:[n.a,o.a,a.a,s.a],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0},label:{type:String},placeholder:{type:String},errorMessage:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,dynamicAlign:{type:Boolean},restoreFocusOnClose:{type:Boolean,value:!0}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},hostAttributes:{role:"combobox","aria-autocomplete":"none","aria-haspopup":"true"},observers:["_selectedItemChanged(selectedItem)"],attached:function(){var t=this.contentElement;t&&t.selectedItem&&this._setSelectedItem(t.selectedItem)},get contentElement(){for(var t=Object(l.a)(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(t){this._setSelectedItem(t.detail.item)},_onIronDeselect:function(t){this._setSelectedItem(null)},_onTap:function(t){c.c(t)===this&&this.open()},_selectedItemChanged:function(t){var e="";e=t?t.label||t.getAttribute("label")||t.textContent.trim():"",this.value=e,this._setSelectedItemLabel(e)},_computeMenuVerticalOffset:function(t,e){return e||(t?-4:8)},_getValidity:function(t){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var t=this.opened?"true":"false",e=this.contentElement;e&&e.setAttribute("aria-expanded",t)}})},147:function(t,e,i){"use strict";i(5);var n=i(31),o=i(35),a=i(87),s=i(122),r=i(6),l=i(1),c=i(3);Object(r.a)({_template:c.a`
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
`,is:"iron-dropdown",behaviors:[o.a,n.a,a.a,s.a],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var t=Object(l.a)(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){this.sizingTarget&&this.sizingTarget!==this||(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),a.b._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):a.b._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):a.b._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var t=this.containedElement,e=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),i=0;i<e.length;i++)e[i].node=t;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(t){this._readied&&(t?this.scrollAction&&"lock"!==this.scrollAction||(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var t=this.focusTarget||this.containedElement;t&&this.opened&&!this.noAutoFocus?t.focus():a.b._applyFocus.apply(this,arguments)}});const d={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(t){if(t.timing)for(var e in t.timing)this.animationTiming[e]=t.timing[e];return this.animationTiming},setPrefixedProperty:function(t,e,i){for(var n,o={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]}[e],a=0;n=o[a];a++)t.style[n]=i;t.style[e]=i},complete:function(t){}};Object(r.a)({is:"fade-in-animation",behaviors:[d],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(t)),this._effect}}),Object(r.a)({is:"fade-out-animation",behaviors:[d],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(t)),this._effect}});i(42),i(86);Object(r.a)({is:"paper-menu-grow-height-animation",behaviors:[d],configure:function(t){var e=t.node,i=e.getBoundingClientRect().height;return this._effect=new KeyframeEffect(e,[{height:i/2+"px"},{height:i+"px"}],this.timingFromConfig(t)),this._effect}}),Object(r.a)({is:"paper-menu-grow-width-animation",behaviors:[d],configure:function(t){var e=t.node,i=e.getBoundingClientRect().width;return this._effect=new KeyframeEffect(e,[{width:i/2+"px"},{width:i+"px"}],this.timingFromConfig(t)),this._effect}}),Object(r.a)({is:"paper-menu-shrink-width-animation",behaviors:[d],configure:function(t){var e=t.node,i=e.getBoundingClientRect().width;return this._effect=new KeyframeEffect(e,[{width:i+"px"},{width:i-i/20+"px"}],this.timingFromConfig(t)),this._effect}}),Object(r.a)({is:"paper-menu-shrink-height-animation",behaviors:[d],configure:function(t){var e=t.node,i=e.getBoundingClientRect().height;return this.setPrefixedProperty(e,"transformOrigin","0 0"),this._effect=new KeyframeEffect(e,[{height:i+"px",transform:"translateY(0)"},{height:i/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(t)),this._effect}});var h={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const p=Object(r.a)({_template:c.a`
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
`,is:"paper-menu-button",behaviors:[n.a,o.a],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:h.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:h.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:h.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var t=Object(l.a)(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(t){this.ignoreSelect||this.close()},_onIronActivate:function(t){this.closeOnActivate&&this.close()},_openedChanged:function(t,e){t?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):null!=e&&this.fire("paper-dropdown-close")},_disabledChanged:function(t){o.a._disabledChanged.apply(this,arguments),t&&this.opened&&this.close()},__onIronOverlayCanceled:function(t){var e=t.detail,i=this.$.trigger;Object(l.a)(e).path.indexOf(i)>-1&&t.preventDefault()}});Object.keys(h).forEach((function(t){p[t]=h[t]}))},148:function(t,e,i){"use strict";i(88);const n=document.createElement("template");n.setAttribute("style","display: none;"),n.innerHTML='<iron-iconset-svg name="paper-dropdown-menu" size="24">\n<svg><defs>\n<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n</defs></svg>\n</iron-iconset-svg>',document.head.appendChild(n.content)},149:function(t,e,i){"use strict";i(42);const n=document.createElement("template");n.setAttribute("style","display: none;"),n.innerHTML='<dom-module id="paper-dropdown-menu-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(n.content)},175:function(t,e,i){"use strict";var n=i(9);e.a=Object(n.a)(t=>(class extends t{static get properties(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}__computeLocalize(t){return t}}))},176:function(t,e,i){"use strict";var n=i(188);e.a=t=>void 0===t.attributes.friendly_name?Object(n.a)(t.entity_id).replace(/_/g," "):t.attributes.friendly_name||""},177:function(t,e,i){"use strict";var n=i(4),o=i(0);class a extends o.a{static get styles(){return o.c`
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
    `}render(){return o.f`
      ${this.header?o.f`
            <div class="card-header">${this.header}</div>
          `:o.f``}
      <slot></slot>
    `}}Object(n.b)([Object(o.g)()],a.prototype,"header",void 0),customElements.define("ha-card",a)},178:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i(119);const o={alert:"hass:alert",alexa:"hass:amazon-alexa",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",google_assistant:"hass:google-assistant",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weather:"hass:weather-cloudy",weblink:"hass:open-in-new"};function a(t,e){if(t in o)return o[t];switch(t){case"alarm_control_panel":switch(e){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return e&&"off"===e?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===e?"hass:window-closed":"hass:window-open";case"lock":return e&&"unlocked"===e?"hass:lock-open":"hass:lock";case"media_player":return e&&"off"!==e&&"idle"!==e?"hass:cast-connected":"hass:cast";case"zwave":switch(e){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+t+" ("+e+")"),n.a}}},179:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));i(109);const n=customElements.get("iron-icon");let o=!1;class a extends n{listen(t,e,n){super.listen(t,e,n),o||"mdi"!==this._iconsetName||(o=!0,i.e(70).then(i.bind(null,216)))}}customElements.define("ha-icon",a)},180:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i(121);function o(t){return Object(n.a)(t.entity_id)}},181:function(t,e,i){"use strict";i(5),i(45),i(42),i(54);var n=i(6),o=i(3);Object(n.a)({_template:o.a`
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
`,is:"paper-item-body"})},183:function(t,e,i){!function(t){"use strict";var e=function(){},i={},n=[],o=[];function a(t,a){var s=o,r=void 0,l=void 0,c=void 0,d=void 0;for(d=arguments.length;d-- >2;)n.push(arguments[d]);for(a&&null!=a.children&&(n.length||n.push(a.children),delete a.children);n.length;)if((l=n.pop())&&void 0!==l.pop)for(d=l.length;d--;)n.push(l[d]);else"boolean"==typeof l&&(l=null),(c="function"!=typeof t)&&(null==l?l="":"number"==typeof l?l=String(l):"string"!=typeof l&&(c=!1)),c&&r?s[s.length-1]+=l:s===o?s=[l]:s.push(l),r=c;var h=new e;return h.nodeName=t,h.children=s,h.attributes=null==a?void 0:a,h.key=null==a?void 0:a.key,void 0!==i.vnode&&i.vnode(h),h}function s(t,e){for(var i in e)t[i]=e[i];return t}function r(t,e){t&&("function"==typeof t?t(e):t.current=e)}var l="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function c(t,e){return a(t.nodeName,s(s({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}var d=0,h=1,p=2,u=3,m="__preactattr_",g=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,f=[];function b(t){!t._dirty&&(t._dirty=!0)&&1==f.push(t)&&(i.debounceRendering||l)(_)}function _(){for(var t=void 0;t=f.pop();)t._dirty&&R(t)}function v(t,e,i){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&y(t,e.nodeName):i||t._componentConstructor===e.nodeName}function y(t,e){return t.normalizedNodeName===e||t.nodeName.toLowerCase()===e.toLowerCase()}function x(t){var e=s({},t.attributes);e.children=t.children;var i=t.nodeName.defaultProps;if(void 0!==i)for(var n in i)void 0===e[n]&&(e[n]=i[n]);return e}function w(t){var e=t.parentNode;e&&e.removeChild(t)}function C(t,e,i,n,o){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)r(i,null),r(n,t);else if("class"!==e||o)if("style"===e){if(n&&"string"!=typeof n&&"string"!=typeof i||(t.style.cssText=n||""),n&&"object"==typeof n){if("string"!=typeof i)for(var a in i)a in n||(t.style[a]="");for(var s in n)t.style[s]="number"==typeof n[s]&&!1===g.test(s)?n[s]+"px":n[s]}}else if("dangerouslySetInnerHTML"===e)n&&(t.innerHTML=n.__html||"");else if("o"==e[0]&&"n"==e[1]){var l=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),n?i||t.addEventListener(e,O,l):t.removeEventListener(e,O,l),(t._listeners||(t._listeners={}))[e]=n}else if("list"!==e&&"type"!==e&&!o&&e in t){try{t[e]=null==n?"":n}catch(d){}null!=n&&!1!==n||"spellcheck"==e||t.removeAttribute(e)}else{var c=o&&e!==(e=e.replace(/^xlink:?/,""));null==n||!1===n?c?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof n&&(c?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):t.setAttribute(e,n))}else t.className=n||""}function O(t){return this._listeners[t.type](i.event&&i.event(t)||t)}var k=[],I=0,j=!1,S=!1;function E(){for(var t=void 0;t=k.shift();)i.afterMount&&i.afterMount(t),t.componentDidMount&&t.componentDidMount()}function P(t,e,i,n,o,a){I++||(j=null!=o&&void 0!==o.ownerSVGElement,S=null!=t&&!(m in t));var s=T(t,e,i,n,a);return o&&s.parentNode!==o&&o.appendChild(s),--I||(S=!1,a||E()),s}function T(t,e,i,n,o){var a=t,s=j;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||o)?t.nodeValue!=e&&(t.nodeValue=e):(a=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(a,t),A(t,!0))),a[m]=!0,a;var r,l,c=e.nodeName;if("function"==typeof c)return function(t,e,i,n){for(var o=t&&t._component,a=o,s=t,r=o&&t._componentConstructor===e.nodeName,l=r,c=x(e);o&&!l&&(o=o._parentComponent);)l=o.constructor===e.nodeName;return o&&l&&(!n||o._component)?(F(o,c,u,i,n),t=o.base):(a&&!r&&(N(a),t=s=null),o=V(e.nodeName,c,i),t&&!o.nextBase&&(o.nextBase=t,s=null),F(o,c,h,i,n),t=o.base,s&&t!==s&&(s._component=null,A(s,!1))),t}(t,e,i,n);if(j="svg"===c||"foreignObject"!==c&&j,c=String(c),(!t||!y(t,c))&&(r=c,(l=j?document.createElementNS("http://www.w3.org/2000/svg",r):document.createElement(r)).normalizedNodeName=r,a=l,t)){for(;t.firstChild;)a.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(a,t),A(t,!0)}var d=a.firstChild,p=a[m],g=e.children;if(null==p){p=a[m]={};for(var f=a.attributes,b=f.length;b--;)p[f[b].name]=f[b].value}return!S&&g&&1===g.length&&"string"==typeof g[0]&&null!=d&&void 0!==d.splitText&&null==d.nextSibling?d.nodeValue!=g[0]&&(d.nodeValue=g[0]):(g&&g.length||null!=d)&&function(t,e,i,n,o){var a=t.childNodes,s=[],r={},l=0,c=0,d=a.length,h=0,p=e?e.length:0,u=void 0,g=void 0,f=void 0,b=void 0,_=void 0;if(0!==d)for(var y=0;y<d;y++){var x=a[y],C=x[m],O=p&&C?x._component?x._component.__key:C.key:null;null!=O?(l++,r[O]=x):(C||(void 0!==x.splitText?!o||x.nodeValue.trim():o))&&(s[h++]=x)}if(0!==p)for(var k=0;k<p;k++){b=e[k],_=null;var I=b.key;if(null!=I)l&&void 0!==r[I]&&(_=r[I],r[I]=void 0,l--);else if(c<h)for(u=c;u<h;u++)if(void 0!==s[u]&&v(g=s[u],b,o)){_=g,s[u]=void 0,u===h-1&&h--,u===c&&c++;break}_=T(_,b,i,n),f=a[k],_&&_!==t&&_!==f&&(null==f?t.appendChild(_):_===f.nextSibling?w(f):t.insertBefore(_,f))}if(l)for(var j in r)void 0!==r[j]&&A(r[j],!1);for(;c<=h;)void 0!==(_=s[h--])&&A(_,!1)}(a,g,i,n,S||null!=p.dangerouslySetInnerHTML),function(t,e,i){var n=void 0;for(n in i)e&&null!=e[n]||null==i[n]||C(t,n,i[n],i[n]=void 0,j);for(n in e)"children"===n||"innerHTML"===n||n in i&&e[n]===("value"===n||"checked"===n?t[n]:i[n])||C(t,n,i[n],i[n]=e[n],j)}(a,e.attributes,p),j=s,a}function A(t,e){var i=t._component;i?N(i):(null!=t[m]&&r(t[m].ref,null),!1!==e&&null!=t[m]||w(t),$(t))}function $(t){for(t=t.lastChild;t;){var e=t.previousSibling;A(t,!0),t=e}}var z=[];function V(t,e,i){var n=void 0,o=z.length;for(t.prototype&&t.prototype.render?(n=new t(e,i),B.call(n,e,i)):((n=new B(e,i)).constructor=t,n.render=L);o--;)if(z[o].constructor===t)return n.nextBase=z[o].nextBase,z.splice(o,1),n;return n}function L(t,e,i){return this.constructor(t,i)}function F(t,e,n,o,a){t._disable||(t._disable=!0,t.__ref=e.ref,t.__key=e.key,delete e.ref,delete e.key,void 0===t.constructor.getDerivedStateFromProps&&(!t.base||a?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,o)),o&&o!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=o),t.prevProps||(t.prevProps=t.props),t.props=e,t._disable=!1,n!==d&&(n!==h&&!1===i.syncComponentUpdates&&t.base?b(t):R(t,h,a)),r(t.__ref,t))}function R(t,e,n,o){if(!t._disable){var a=t.props,r=t.state,l=t.context,c=t.prevProps||a,u=t.prevState||r,m=t.prevContext||l,g=t.base,f=t.nextBase,b=g||f,_=t._component,v=!1,y=m,w=void 0,C=void 0,O=void 0;if(t.constructor.getDerivedStateFromProps&&(r=s(s({},r),t.constructor.getDerivedStateFromProps(a,r)),t.state=r),g&&(t.props=c,t.state=u,t.context=m,e!==p&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(a,r,l)?v=!0:t.componentWillUpdate&&t.componentWillUpdate(a,r,l),t.props=a,t.state=r,t.context=l),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!v){w=t.render(a,r,l),t.getChildContext&&(l=s(s({},l),t.getChildContext())),g&&t.getSnapshotBeforeUpdate&&(y=t.getSnapshotBeforeUpdate(c,u));var j=w&&w.nodeName,S=void 0,T=void 0;if("function"==typeof j){var $=x(w);(C=_)&&C.constructor===j&&$.key==C.__key?F(C,$,h,l,!1):(S=C,t._component=C=V(j,$,l),C.nextBase=C.nextBase||f,C._parentComponent=t,F(C,$,d,l,!1),R(C,h,n,!0)),T=C.base}else O=b,(S=_)&&(O=t._component=null),(b||e===h)&&(O&&(O._component=null),T=P(O,w,l,n||!g,b&&b.parentNode,!0));if(b&&T!==b&&C!==_){var z=b.parentNode;z&&T!==z&&(z.replaceChild(T,b),S||(b._component=null,A(b,!1)))}if(S&&N(S),t.base=T,T&&!o){for(var L=t,B=t;B=B._parentComponent;)(L=B).base=T;T._component=L,T._componentConstructor=L.constructor}}for(!g||n?k.push(t):v||(t.componentDidUpdate&&t.componentDidUpdate(c,u,y),i.afterUpdate&&i.afterUpdate(t));t._renderCallbacks.length;)t._renderCallbacks.pop().call(t);I||o||E()}}function N(t){i.beforeUnmount&&i.beforeUnmount(t);var e=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?N(n):e&&(null!=e[m]&&r(e[m].ref,null),t.nextBase=e,w(e),z.push(t),$(e)),r(t.__ref,null)}function B(t,e){this._dirty=!0,this.context=e,this.props=t,this.state=this.state||{},this._renderCallbacks=[]}function M(t,e,i){return P(i,t,{},!1,e,!1)}function D(){return{}}s(B.prototype,{setState:function(t,e){this.prevState||(this.prevState=this.state),this.state=s(s({},this.state),"function"==typeof t?t(this.state,this.props):t),e&&this._renderCallbacks.push(e),b(this)},forceUpdate:function(t){t&&this._renderCallbacks.push(t),R(this,p)},render:function(){}});var H={h:a,createElement:a,cloneElement:c,createRef:D,Component:B,render:M,rerender:_,options:i};t.default=H,t.h=a,t.createElement=a,t.cloneElement=c,t.createRef=D,t.Component=B,t.render=M,t.rerender=_,t.options=i,Object.defineProperty(t,"__esModule",{value:!0})}(e)},184:function(t,e,i){"use strict";var n=i(4),o=i(0),a=(i(179),i(180)),s=i(192);class r extends o.a{render(){const t=this.stateObj;return t?o.f`
      <ha-icon
        id="icon"
        data-domain=${Object(a.a)(t)}
        data-state=${t.state}
        .icon=${this.overrideIcon||Object(s.a)(t)}
      ></ha-icon>
    `:o.f``}updated(t){if(!t.has("stateObj")||!this.stateObj)return;const e=this.stateObj,i={color:"",filter:""},n={backgroundImage:""};if(e)if(e.attributes.entity_picture&&!this.overrideIcon||this.overrideImage){let t=this.overrideImage||e.attributes.entity_picture;this.hass&&(t=this.hass.hassUrl(t)),n.backgroundImage=`url(${t})`,i.display="none"}else{if(e.attributes.hs_color){const t=e.attributes.hs_color[0],n=e.attributes.hs_color[1];n>10&&(i.color=`hsl(${t}, 100%, ${100-n/2}%)`)}if(e.attributes.brightness){const t=e.attributes.brightness;if("number"!=typeof t){const i=`Type error: state-badge expected number, but type of ${e.entity_id}.attributes.brightness is ${typeof t} (${t})`;console.warn(i)}i.filter=`brightness(${(t+245)/5}%)`}}Object.assign(this._icon.style,i),Object.assign(this.style,n)}static get styles(){return o.c`
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
    `}}Object(n.b)([Object(o.g)()],r.prototype,"stateObj",void 0),Object(n.b)([Object(o.g)()],r.prototype,"overrideIcon",void 0),Object(n.b)([Object(o.g)()],r.prototype,"overrideImage",void 0),Object(n.b)([Object(o.h)("ha-icon")],r.prototype,"_icon",void 0),customElements.define("state-badge",r)},185:function(t,e,i){"use strict";i(5),i(45),i(54),i(145);var n=i(6),o=i(3),a=i(120);Object(n.a)({_template:o.a`
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
`,is:"paper-icon-item",behaviors:[a.a]})},188:function(t,e,i){"use strict";function n(t){return t.substr(t.indexOf(".")+1)}i.d(e,"a",(function(){return n}))},190:function(t,e,i){"use strict";var n=i(4),o=(i(108),i(93),i(185),i(181),i(211),i(124)),a=(i(184),i(176)),s=i(0),r=i(18);const l=(t,e,i)=>{t.firstElementChild||(t.innerHTML='\n      <style>\n        paper-icon-item {\n          margin: -10px;\n          padding: 0;\n        }\n      </style>\n      <paper-icon-item>\n        <state-badge state-obj="[[item]]" slot="item-icon"></state-badge>\n        <paper-item-body two-line="">\n          <div class=\'name\'>[[_computeStateName(item)]]</div>\n          <div secondary>[[item.entity_id]]</div>\n        </paper-item-body>\n      </paper-icon-item>\n    '),t.querySelector("state-badge").stateObj=i.item,t.querySelector(".name").textContent=Object(a.a)(i.item),t.querySelector("[secondary]").textContent=i.item.entity_id};class c extends s.a{constructor(){super(...arguments),this._getStates=Object(o.a)((t,e,i)=>{let n=[];if(!t)return[];let o=Object.keys(t.states);return e&&(o=o.filter(t=>t.substr(0,t.indexOf("."))===e)),n=o.sort().map(e=>t.states[e]),i&&(n=n.filter(t=>t.entity_id===this.value||i(t))),n})}updated(t){super.updated(t),t.has("hass")&&!this._opened&&(this._hass=this.hass)}render(){const t=this._getStates(this._hass,this.domainFilter,this.entityFilter);return s.f`
      <vaadin-combo-box-light
        item-value-path="entity_id"
        item-label-path="entity_id"
        .items=${t}
        .value=${this._value}
        .allowCustomValue=${this.allowCustomEntity}
        .renderer=${l}
        @opened-changed=${this._openedChanged}
        @value-changed=${this._valueChanged}
      >
        <paper-input
          .autofocus=${this.autofocus}
          .label=${void 0===this.label&&this._hass?this._hass.localize("ui.components.entity.entity-picker.entity"):this.label}
          .value=${this._value}
          .disabled=${this.disabled}
          class="input"
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
        >
          ${this.value?s.f`
                <paper-icon-button
                  aria-label="Clear"
                  slot="suffix"
                  class="clear-button"
                  icon="hass:close"
                  no-ripple
                >
                  Clear
                </paper-icon-button>
              `:""}
          ${t.length>0?s.f`
                <paper-icon-button
                  aria-label="Show entities"
                  slot="suffix"
                  class="toggle-button"
                  .icon=${this._opened?"hass:menu-up":"hass:menu-down"}
                >
                  Toggle
                </paper-icon-button>
              `:""}
        </paper-input>
      </vaadin-combo-box-light>
    `}get _value(){return this.value||""}_openedChanged(t){this._opened=t.detail.value}_valueChanged(t){t.detail.value!==this._value&&(this.value=t.detail.value,setTimeout(()=>{Object(r.a)(this,"value-changed",{value:this.value}),Object(r.a)(this,"change")},0))}static get styles(){return s.c`
      paper-input > paper-icon-button {
        width: 24px;
        height: 24px;
        padding: 2px;
        color: var(--secondary-text-color);
      }
      [hidden] {
        display: none;
      }
    `}}Object(n.b)([Object(s.g)({type:Boolean})],c.prototype,"autofocus",void 0),Object(n.b)([Object(s.g)({type:Boolean})],c.prototype,"disabled",void 0),Object(n.b)([Object(s.g)({type:Boolean,attribute:"allow-custom-entity"})],c.prototype,"allowCustomEntity",void 0),Object(n.b)([Object(s.g)()],c.prototype,"hass",void 0),Object(n.b)([Object(s.g)()],c.prototype,"label",void 0),Object(n.b)([Object(s.g)()],c.prototype,"value",void 0),Object(n.b)([Object(s.g)({attribute:"domain-filter"})],c.prototype,"domainFilter",void 0),Object(n.b)([Object(s.g)()],c.prototype,"entityFilter",void 0),Object(n.b)([Object(s.g)({type:Boolean})],c.prototype,"_opened",void 0),Object(n.b)([Object(s.g)()],c.prototype,"_hass",void 0),customElements.define("ha-entity-picker",c)},192:function(t,e,i){"use strict";var n=i(119),o=i(121),a=i(178);const s={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",signal_strength:"hass:wifi"};i.d(e,"a",(function(){return l}));const r={binary_sensor:function(t){const e=t.state&&"off"===t.state;switch(t.attributes.device_class){case"battery":return e?"hass:battery":"hass:battery-outline";case"cold":return e?"hass:thermometer":"hass:snowflake";case"connectivity":return e?"hass:server-network-off":"hass:server-network";case"door":return e?"hass:door-closed":"hass:door-open";case"garage_door":return e?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return e?"hass:shield-check":"hass:alert";case"heat":return e?"hass:thermometer":"hass:fire";case"light":return e?"hass:brightness-5":"hass:brightness-7";case"lock":return e?"hass:lock":"hass:lock-open";case"moisture":return e?"hass:water-off":"hass:water";case"motion":return e?"hass:walk":"hass:run";case"occupancy":return e?"hass:home-outline":"hass:home";case"opening":return e?"hass:square":"hass:square-outline";case"plug":return e?"hass:power-plug-off":"hass:power-plug";case"presence":return e?"hass:home-outline":"hass:home";case"sound":return e?"hass:music-note-off":"hass:music-note";case"vibration":return e?"hass:crop-portrait":"hass:vibrate";case"window":return e?"hass:window-closed":"hass:window-open";default:return e?"hass:radiobox-blank":"hass:checkbox-marked-circle"}},cover:function(t){const e="closed"!==t.state;switch(t.attributes.device_class){case"garage":return e?"hass:garage-open":"hass:garage";case"door":return e?"hass:door-open":"hass:door-closed";case"shutter":return e?"hass:window-shutter-open":"hass:window-shutter";case"blind":return e?"hass:blinds-open":"hass:blinds";case"window":return e?"hass:window-open":"hass:window-closed";default:return Object(a.a)("cover",t.state)}},sensor:function(t){const e=t.attributes.device_class;if(e&&e in s)return s[e];if("battery"===e){const e=Number(t.state);if(isNaN(e))return"hass:battery-unknown";const i=10*Math.round(e/10);return i>=100?"hass:battery":i<=0?"hass:battery-alert":`hass:battery-${i}`}const i=t.attributes.unit_of_measurement;return i===n.j||i===n.k?"hass:thermometer":Object(a.a)("sensor")},input_datetime:function(t){return t.attributes.has_date?t.attributes.has_time?Object(a.a)("input_datetime"):"hass:calendar":"hass:clock"}};function l(t){if(!t)return n.a;if(t.attributes.icon)return t.attributes.icon;const e=Object(o.a)(t.entity_id);return e in r?r[e](t):Object(a.a)(e,t.state)}},195:function(t,e,i){"use strict";var n=i(3),o=i(30);i(95);customElements.define("ha-config-section",class extends o.a{static get template(){return n.a`
      <style include="iron-flex ha-style">
        .content {
          padding: 28px 20px 0;
          max-width: 1040px;
          margin: 0 auto;
        }

        .header {
          @apply --paper-font-display1;
          opacity: var(--dark-primary-opacity);
        }

        .together {
          margin-top: 32px;
        }

        .intro {
          @apply --paper-font-subhead;
          width: 100%;
          max-width: 400px;
          margin-right: 40px;
          opacity: var(--dark-primary-opacity);
        }

        .panel {
          margin-top: -24px;
        }

        .panel ::slotted(*) {
          margin-top: 24px;
          display: block;
        }

        .narrow.content {
          max-width: 640px;
        }
        .narrow .together {
          margin-top: 20px;
        }
        .narrow .header {
          @apply --paper-font-headline;
        }
        .narrow .intro {
          font-size: 14px;
          padding-bottom: 20px;
          margin-right: 0;
          max-width: 500px;
        }
      </style>
      <div class$="[[computeContentClasses(isWide)]]">
        <div class="header"><slot name="header"></slot></div>
        <div class$="[[computeClasses(isWide)]]">
          <div class="intro"><slot name="introduction"></slot></div>
          <div class="panel flex-auto"><slot></slot></div>
        </div>
      </div>
    `}static get properties(){return{hass:{type:Object},narrow:{type:Boolean},isWide:{type:Boolean,value:!1}}}computeContentClasses(t){return t?"content ":"content narrow"}computeClasses(t){return"together layout "+(t?"horizontal":"vertical narrow")}})},196:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));const n=(t,e,i=!1)=>{let n;return function(...o){const a=this,s=i&&!n;clearTimeout(n),n=setTimeout(()=>{n=null,i||t.apply(a,o)},e),s&&t.apply(a,o)}}},197:function(t,e,i){"use strict";var n={},o=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,a="[^\\s]+",s=/\[([^]*?)\]/gm,r=function(){};function l(t,e){for(var i=[],n=0,o=t.length;n<o;n++)i.push(t[n].substr(0,e));return i}function c(t){return function(e,i,n){var o=n[t].indexOf(i.charAt(0).toUpperCase()+i.substr(1).toLowerCase());~o&&(e.month=o)}}function d(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}var h=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],p=["January","February","March","April","May","June","July","August","September","October","November","December"],u=l(p,3),m=l(h,3);n.i18n={dayNamesShort:m,dayNames:h,monthNamesShort:u,monthNames:p,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10)*t%10]}};var g={D:function(t){return t.getDate()},DD:function(t){return d(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return t.getDay()},dd:function(t){return d(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return t.getMonth()+1},MM:function(t){return d(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return d(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return d(t.getFullYear(),4)},h:function(t){return t.getHours()%12||12},hh:function(t){return d(t.getHours()%12||12)},H:function(t){return t.getHours()},HH:function(t){return d(t.getHours())},m:function(t){return t.getMinutes()},mm:function(t){return d(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return d(t.getSeconds())},S:function(t){return Math.round(t.getMilliseconds()/100)},SS:function(t){return d(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return d(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+d(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)}},f={D:["\\d\\d?",function(t,e){t.day=e}],Do:["\\d\\d?"+a,function(t,e){t.day=parseInt(e,10)}],M:["\\d\\d?",function(t,e){t.month=e-1}],YY:["\\d\\d?",function(t,e){var i=+(""+(new Date).getFullYear()).substr(0,2);t.year=""+(e>68?i-1:i)+e}],h:["\\d\\d?",function(t,e){t.hour=e}],m:["\\d\\d?",function(t,e){t.minute=e}],s:["\\d\\d?",function(t,e){t.second=e}],YYYY:["\\d{4}",function(t,e){t.year=e}],S:["\\d",function(t,e){t.millisecond=100*e}],SS:["\\d{2}",function(t,e){t.millisecond=10*e}],SSS:["\\d{3}",function(t,e){t.millisecond=e}],d:["\\d\\d?",r],ddd:[a,r],MMM:[a,c("monthNamesShort")],MMMM:[a,c("monthNames")],a:[a,function(t,e,i){var n=e.toLowerCase();n===i.amPm[0]?t.isPm=!1:n===i.amPm[1]&&(t.isPm=!0)}],ZZ:["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",function(t,e){var i,n=(e+"").match(/([+-]|\d\d)/gi);n&&(i=60*n[1]+parseInt(n[2],10),t.timezoneOffset="+"===n[0]?i:-i)}]};f.dd=f.d,f.dddd=f.ddd,f.DD=f.D,f.mm=f.m,f.hh=f.H=f.HH=f.h,f.MM=f.M,f.ss=f.s,f.A=f.a,n.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},n.format=function(t,e,i){var a=i||n.i18n;if("number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date in fecha.format");e=n.masks[e]||e||n.masks.default;var r=[];return(e=(e=e.replace(s,(function(t,e){return r.push(e),"@@@"}))).replace(o,(function(e){return e in g?g[e](t,a):e.slice(1,e.length-1)}))).replace(/@@@/g,(function(){return r.shift()}))},n.parse=function(t,e,i){var a=i||n.i18n;if("string"!=typeof e)throw new Error("Invalid format in fecha.parse");if(e=n.masks[e]||e,t.length>1e3)return null;var r={},l=[],c=[];e=e.replace(s,(function(t,e){return c.push(e),"@@@"}));var d,h=(d=e,d.replace(/[|\\{()[^$+*?.-]/g,"\\$&")).replace(o,(function(t){if(f[t]){var e=f[t];return l.push(e[1]),"("+e[0]+")"}return t}));h=h.replace(/@@@/g,(function(){return c.shift()}));var p=t.match(new RegExp(h,"i"));if(!p)return null;for(var u=1;u<p.length;u++)l[u-1](r,p[u],a);var m,g=new Date;return!0===r.isPm&&null!=r.hour&&12!=+r.hour?r.hour=+r.hour+12:!1===r.isPm&&12==+r.hour&&(r.hour=0),null!=r.timezoneOffset?(r.minute=+(r.minute||0)-+r.timezoneOffset,m=new Date(Date.UTC(r.year||g.getFullYear(),r.month||0,r.day||1,r.hour||0,r.minute||0,r.second||0,r.millisecond||0))):m=new Date(r.year||g.getFullYear(),r.month||0,r.day||1,r.hour||0,r.minute||0,r.second||0,r.millisecond||0),m},e.a=n},198:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return o}));const n=(t,e)=>t<e?-1:t>e?1:0,o=(t,e)=>n(t.toLowerCase(),e.toLowerCase())},200:function(t,e,i){"use strict";var n=i(197);e.a=function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}return!1}()?(t,e)=>t.toLocaleString(e,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"}):t=>n.a.format(t,"haDateTime")},206:function(t,e,i){"use strict";i(5),i(45);var n=i(6),o=i(1),a=i(3),s=i(128);Object(n.a)({_template:a.a`
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
`,is:"app-header-layout",behaviors:[s.a],properties:{hasScrollingRegion:{type:Boolean,value:!1,reflectToAttribute:!0}},observers:["resetLayout(isAttached, hasScrollingRegion)"],get header(){return Object(o.a)(this.$.headerSlot).getDistributedNodes()[0]},_updateLayoutStates:function(){var t=this.header;if(this.isAttached&&t){this.$.wrapper.classList.remove("initializing"),t.scrollTarget=this.hasScrollingRegion?this.$.contentContainer:this.ownerDocument.documentElement;var e=t.offsetHeight;this.hasScrollingRegion?(t.style.left="",t.style.right=""):requestAnimationFrame(function(){var e=this.getBoundingClientRect(),i=document.documentElement.clientWidth-e.right;t.style.left=e.left+"px",t.style.right=i+"px"}.bind(this));var i=this.$.contentContainer.style;t.fixed&&!t.condenses&&this.hasScrollingRegion?(i.marginTop=e+"px",i.paddingTop=""):(i.paddingTop=e+"px",i.marginTop="")}}})},207:function(t,e,i){"use strict";i(5),i(45),i(68),i(42);var n=i(123),o=i(69),a=i(6),s=i(36),r=i(3),l=i(62);const c=r.a`

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

  `;c.setAttribute("strip-whitespace",""),Object(a.a)({_template:c,is:"paper-toggle-button",behaviors:[n.a],hostAttributes:{role:"button","aria-pressed":"false",tabindex:0},properties:{},listeners:{track:"_ontrack"},attached:function(){Object(l.a)(this,(function(){Object(s.f)(this,"pan-y")}))},_ontrack:function(t){var e=t.detail;"start"===e.state?this._trackStart(e):"track"===e.state?this._trackMove(e):"end"===e.state&&this._trackEnd(e)},_trackStart:function(t){this._width=this.$.toggleBar.offsetWidth/2,this._trackChecked=this.checked,this.$.toggleButton.classList.add("dragging")},_trackMove:function(t){var e=t.dx;this._x=Math.min(this._width,Math.max(0,this._trackChecked?this._width+e:e)),this.translate3d(this._x+"px",0,0,this.$.toggleButton),this._userActivate(this._x>this._width/2)},_trackEnd:function(t){this.$.toggleButton.classList.remove("dragging"),this.transform("",this.$.toggleButton)},_createRipple:function(){this._rippleContainer=this.$.toggleButton;var t=o.a._createRipple();return t.id="ink",t.setAttribute("recenters",""),t.classList.add("circle","toggle-ink"),t}})},210:function(t,e,i){"use strict";function n(t,e){const i=this.props[t];if(e.target.value===i[e.target.name])return;const n=Object.assign({},i);e.target.value?n[e.target.name]=e.target.value:delete n[e.target.name],this.props.onChange(this.props.index,n)}i.d(e,"a",(function(){return n}))},211:function(t,e,i){"use strict";i(209),i(201),i(202),i(332);var n=i(3);const o=n.a`<dom-module id="lumo-vaadin-overlay" theme-for="vaadin-overlay">
  <template>
    <style include="lumo-overlay">
      /* stylelint-disable no-empty-source */
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);var a=i(258);i(297);const s=n.a`<dom-module id="lumo-combo-box-overlay" theme-for="vaadin-combo-box-overlay">
  <template>
    <style include="lumo-overlay lumo-menu-overlay-core">
      [part="content"] {
        padding: 0;
      }

      :host {
        /* TODO: using a legacy mixin (unsupported) */
        --iron-list-items-container: {
          border-width: var(--lumo-space-xs);
          border-style: solid;
          border-color: transparent;
        };
      }

      /* TODO: workaround ShadyCSS issue when using inside of the dom-if */
      :host([opened]) {
        --iron-list-items-container_-_border-width: var(--lumo-space-xs);
        --iron-list-items-container_-_border-style: solid;
        --iron-list-items-container_-_border-color: transparent;
      }

      /* Loading state */

      /* When items are empty, the sinner needs some room */
      :host(:not([closing])) [part~="content"] {
        min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
      }

      [part~="overlay"] {
        position: relative;
      }

      :host([loading]) [part~="loader"] {
        box-sizing: border-box;
        width: var(--lumo-icon-size-s);
        height: var(--lumo-icon-size-s);
        position: absolute;
        z-index: 1;
        left: var(--lumo-space-s);
        right: var(--lumo-space-s);
        top: var(--lumo-space-s);
        margin-left: auto;
        margin-inline-start: auto;
        margin-inline-end: 0;
        border: 2px solid transparent;
        border-color:
          var(--lumo-primary-color-50pct)
          var(--lumo-primary-color-50pct)
          var(--lumo-primary-color)
          var(--lumo-primary-color);
        border-radius: calc(0.5 * var(--lumo-icon-size-s));
        opacity: 0;
        animation:
          1s linear infinite lumo-combo-box-loader-rotate,
          .3s .1s lumo-combo-box-loader-fade-in both;
        pointer-events: none;
      }

      @keyframes lumo-combo-box-loader-fade-in {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }

      @keyframes lumo-combo-box-loader-rotate {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(s.content);i(246),i(219),i(225);const r=n.a`<dom-module id="lumo-item" theme-for="vaadin-item">
  <template>
    <style>
      :host {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-xs);
        padding: 0.5em 1em;
        min-height: var(--lumo-size-m);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
      }

      /* Selectable items have a checkmark icon */
      :host([tabindex])::before {
        display: var(--_lumo-item-selected-icon-display, none);
        content: var(--lumo-icons-checkmark);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        font-weight: normal;
        width: 1em;
        height: 1em;
        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
        color: var(--lumo-primary-text-color);
        flex: none;
        opacity: 0;
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;
      }

      :host([selected])::before {
        opacity: 1;
      }

      :host([active]:not([selected]))::before {
        transform: scale(0.8);
        opacity: 0;
        transition-duration: 0s;
      }

      [part="content"] {
        flex: auto;
      }

      /* Disabled item */

      :host([disabled]) {
        color: var(--lumo-disabled-text-color);
        cursor: default;
        pointer-events: none;
      }

      /* Slotted icons */

      :host ::slotted(iron-icon) {
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content);var l=i(30),c=i(204);const d=t=>(class extends t{static get properties(){return{_hasVaadinItemMixin:{value:!0},disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get value(){return void 0!==this._value?this._value:this.textContent.trim()}set value(t){this._value=t}ready(){super.ready();const t=this.getAttribute("value");null!==t&&(this.value=t),this.addEventListener("focus",t=>this._setFocused(!0),!0),this.addEventListener("blur",t=>this._setFocused(!1),!0),this.addEventListener("mousedown",t=>{this._setActive(this._mousedown=!0);const e=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",e)};document.addEventListener("mouseup",e)}),this.addEventListener("keydown",t=>this._onKeydown(t)),this.addEventListener("keyup",t=>this._onKeyup(t))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this._setFocused(!1)}_selectedChanged(t){this.setAttribute("aria-selected",t)}_disabledChanged(t){t?(this.selected=!1,this.setAttribute("aria-disabled","true"),this.blur()):this.removeAttribute("aria-disabled")}_setFocused(t){t?(this.setAttribute("focused",""),this._mousedown||this.setAttribute("focus-ring","")):(this.removeAttribute("focused"),this.removeAttribute("focus-ring"),this._setActive(!1))}_setActive(t){t?this.setAttribute("active",""):this.removeAttribute("active")}_onKeydown(t){/^( |SpaceBar|Enter)$/.test(t.key)&&!t.defaultPrevented&&(t.preventDefault(),this._setActive(!0))}_onKeyup(t){this.hasAttribute("active")&&(this._setActive(!1),this.click())}});class h extends(d(Object(c.a)(l.a))){static get template(){return n.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>
    <div part="content">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-item"}static get version(){return"2.1.1"}constructor(){super(),this.value}}customElements.define(h.is,h);const p=n.a`<dom-module id="lumo-combo-box-item" theme-for="vaadin-combo-box-item">
  <template>
    <style include="lumo-item">
      /* TODO partly duplicated from vaadin-list-box styles. Should find a way to make it DRY */

      :host {
        cursor: default;
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        padding-left: calc(var(--lumo-border-radius) / 4);
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        transition: background-color 100ms;
        border-radius: var(--lumo-border-radius);
        overflow: hidden;
        --_lumo-item-selected-icon-display: block;
      }

      /* ShadyCSS workaround (show the selected item checkmark) */
      :host::before {
        display: block;
      }

      :host(:hover) {
        background-color: var(--lumo-primary-color-10pct);
      }

      :host([focused]:not([disabled])) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      @media (pointer: coarse) {
        :host(:hover) {
          background-color: transparent;
        }

        :host([focused]:not([disabled])) {
          box-shadow: none;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(p.content);var u=i(256),m=i(12),g=i(22),f=i(24),b=i(32),_=i(94),v=i(31),y=i(63);const x=class{toString(){return""}},w=t=>(class extends t{static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},disabled:{type:Boolean,value:!1,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array},value:{type:String,observer:"_valueChanged",notify:!0,value:""},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,name:{type:String},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},_toggleElement:Object,_clearElement:Object,_inputElementValue:String,_closeOnBlurIsPrevented:Boolean,_previousDocumentPointerEvents:String,_itemTemplate:Object}}static get observers(){return["_filterChanged(filter, itemValuePath, itemLabelPath)","_itemsOrPathsChanged(items.*, itemValuePath, itemLabelPath)","_filteredItemsChanged(filteredItems.*, itemValuePath, itemLabelPath)","_templateOrRendererChanged(_itemTemplate, renderer)","_loadingChanged(loading)","_selectedItemChanged(selectedItem, itemLabelPath)","_toggleElementChanged(_toggleElement)"]}ready(){super.ready(),this.addEventListener("focusout",t=>{const e=this.$.overlay.$.dropdown;e&&e.$&&t.relatedTarget===e.$.overlay?t.composedPath()[0].focus():this._closeOnBlurIsPrevented||this.close()}),this._lastCommittedValue=this.value,_.a.requestAvailability(),this.$.overlay.addEventListener("selection-changed",this._overlaySelectedItemChanged.bind(this)),this.addEventListener("vaadin-combo-box-dropdown-closed",this.close.bind(this)),this.addEventListener("vaadin-combo-box-dropdown-opened",this._onOpened.bind(this)),this.addEventListener("keydown",this._onKeyDown.bind(this)),this.addEventListener("click",this._onClick.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-touch-action",this._onOverlayTouchAction.bind(this)),this.addEventListener("touchend",t=>{this._clearElement&&t.composedPath()[0]===this._clearElement&&(t.preventDefault(),this._clear())}),this._observer=new y.a(this,t=>{this._setTemplateFromNodes(t.addedNodes)})}render(){this.$.overlay._selector&&this.$.overlay._selector.querySelectorAll("vaadin-combo-box-item").forEach(t=>t._render())}_setTemplateFromNodes(t){this._itemTemplate=t.filter(t=>t.localName&&"template"===t.localName)[0]||this._itemTemplate}_removeNewRendererOrTemplate(t,e,i,n){t!==e?this._itemTemplate=void 0:i!==n&&(this.renderer=void 0)}_templateOrRendererChanged(t,e){if(t&&e)throw this._removeNewRendererOrTemplate(t,this._oldTemplate,e,this._oldRenderer),new Error("You should only use either a renderer or a template for combo box items");this._oldTemplate=t,this._oldRenderer=e}open(){this.disabled||this.readonly||(this.opened=!0)}close(){this.opened=!1}_openedChanged(t,e){void 0!==e&&(this.opened?(this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement&&this.focusElement.hasAttribute("focus-ring"),this.$.overlay.touchDevice||this.focused||this.focus()):(this._onClosed(),this._openedWithFocusRing&&this.hasAttribute("focused")&&this.focusElement.setAttribute("focus-ring","")))}_onOverlayTouchAction(t){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_onClick(t){this._closeOnBlurIsPrevented=!0;const e=t.composedPath();-1!==e.indexOf(this._clearElement)?(this._clear(),this.focus()):-1!==e.indexOf(this.inputElement)&&(e.indexOf(this._toggleElement)>-1&&this.opened?this.close():this.open()),this._closeOnBlurIsPrevented=!1}_onKeyDown(t){this._isEventKey(t,"down")?(this._closeOnBlurIsPrevented=!0,this._onArrowDown(),this._closeOnBlurIsPrevented=!1,t.preventDefault()):this._isEventKey(t,"up")?(this._closeOnBlurIsPrevented=!0,this._onArrowUp(),this._closeOnBlurIsPrevented=!1,t.preventDefault()):this._isEventKey(t,"enter")?this._onEnter(t):this._isEventKey(t,"esc")&&this._onEscape(t)}_isEventKey(t,e){return v.a.keyboardEventMatchesKeys(t,e)}_getItemLabel(t){return this.$.overlay.getItemLabel(t)}_getItemValue(t){let e=t&&this.itemValuePath?this.get(this.itemValuePath,t):void 0;return void 0===e&&(e=t?t.toString():""),e}_onArrowDown(){this.opened?this.$.overlay._items&&(this._focusedIndex=Math.min(this.$.overlay._items.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel()):this.open()}_onArrowUp(){this.opened?(this._focusedIndex>-1?this._focusedIndex=Math.max(0,this._focusedIndex-1):this.$.overlay._items&&(this._focusedIndex=this.$.overlay._items.length-1),this._prefillFocusedItemLabel()):this.open()}_prefillFocusedItemLabel(){this._focusedIndex>-1&&(this._inputElementValue="",setTimeout(()=>{this._inputElementValue=this._getItemLabel(this.$.overlay._focusedItem),this._markAllSelectionRange()},1))}_setSelectionRange(t,e){const i=this._nativeInput||this.inputElement;if(this.hasAttribute("focused")&&i&&i.setSelectionRange)try{i.setSelectionRange(t,e)}catch(n){}}_markAllSelectionRange(){void 0!==this._inputElementValue&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(void 0!==this._inputElementValue){const t=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(t,t)}}_onEnter(t){this.opened&&(this.allowCustomValue||""===this._inputElementValue||this._focusedIndex>-1)&&(this.close(),t.preventDefault())}_onEscape(t){this.opened&&(this._stopPropagation(t),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel())}_toggleElementChanged(t){t&&t.addEventListener("mousedown",t=>t.preventDefault())}_clear(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this.close()}_onOpened(){Object(f.b)(),this.$.overlay.ensureItemsRendered(),this.$.overlay._selector.toggleScrollListener(!0),this.$.overlay.updateViewportBoundaries(),this.$.overlay._selector._increasePoolIfNeeded(),setTimeout(()=>this._resizeDropdown(),1),window.requestAnimationFrame(()=>this.$.overlay.adjustScrollPosition()),this._lastCommittedValue=this.value}_onClosed(){if(this.opened&&this.close(),this.$.overlay._items&&this._focusedIndex>-1){const t=this.$.overlay._items[this._focusedIndex];this.selectedItem!==t&&(this.selectedItem=t),this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(""===this._inputElementValue||void 0===this._inputElementValue)this.selectedItem=null,this.allowCustomValue&&(this.value="");else if(this.allowCustomValue){const t=new CustomEvent("custom-value-set",{detail:this._inputElementValue,composed:!0,cancelable:!0,bubbles:!0});if(this.dispatchEvent(t),!t.defaultPrevented){const t=this._inputElementValue;this._selectItemForValue(t),this.value=t}}else this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):"";this._detectAndDispatchChange(),this._clearSelectionRange(),this.dataProvider||(this.filter="")}get _propertyForValue(){return"value"}_inputValueChanged(t){-1!==t.composedPath().indexOf(this.inputElement)&&(this._inputElementValue=this.inputElement[this._propertyForValue],this._filterFromInput())}_filterFromInput(t){this.opened||this.open(),this.filter===this._inputElementValue?this._filterChanged(this.filter,this.itemValuePath,this.itemLabelPath):this.filter=this._inputElementValue}_itemLabelPathChanged(t,e){"string"!=typeof t&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(t,e,i){void 0!==t&&(this.items?this.filteredItems=this._filterItems(this.items,t):this._filteredItemsChanged({path:"filteredItems",value:this.filteredItems},e,i))}_loadingChanged(t){t&&(this._focusedIndex=-1)}_revertInputValue(){""!==this.filter?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_resizeDropdown(){this.$.overlay.$.dropdown.notifyResize()}_updateHasValue(t){t?this.setAttribute("has-value",""):this.removeAttribute("has-value")}_selectedItemChanged(t,e){if(null==t)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._updateHasValue(""!==this.value),this._inputElementValue=this.value);else{const e=this._getItemValue(t);this.value!==e&&(this.value=e),this._updateHasValue(!0),this._inputElementValue=this._getItemLabel(t),this.inputElement&&(this.inputElement[this._propertyForValue]=this._inputElementValue)}this.$.overlay._selectedItem=t,this.filteredItems&&this.$.overlay._items&&(this._focusedIndex=this.filteredItems.indexOf(t))}_valueChanged(t,e){if(""!==t||void 0!==e){if(this._isValidValue(t)){let e;this._getItemValue(this.selectedItem)!==t?this._selectItemForValue(t):e=this.selectedItem,!e&&this.allowCustomValue&&(this._inputElementValue=t),this._updateHasValue(""!==this.value)}else this.selectedItem=null;this._lastCommittedValue=void 0}}_detectAndDispatchChange(){this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(t,e){this._ensureItemsOrDataProvider(()=>{this.items=e})}_itemsOrPathsChanged(t,e,i){if(void 0!==t.value&&("items"===t.path||"items.splices"===t.path)){this.filteredItems=this.items?this.items.slice(0):this.items;const t=this._indexOfValue(this.value,this.items);this._focusedIndex=t;const e=t>-1&&this.items[t];e&&(this.selectedItem=e)}}_filteredItemsChanged(t,e,i){void 0!==t.value&&("filteredItems"!==t.path&&"filteredItems.splices"!==t.path||(this._setOverlayItems(this.filteredItems),this._focusedIndex=this.opened?this.$.overlay.indexOfLabel(this.filter):this._indexOfValue(this.value,this.filteredItems),this.opened&&this._repositionOverlay()))}_filterItems(t,e){return t?t.filter(t=>(e=e?e.toString().toLowerCase():"",this._getItemLabel(t).toString().toLowerCase().indexOf(e)>-1)):t}_selectItemForValue(t){const e=this._indexOfValue(t,this.filteredItems),i=this.selectedItem;this.selectedItem=e>=0?this.filteredItems[e]:this.dataProvider&&void 0===this.selectedItem?void 0:null,null===this.selectedItem&&null===i&&this._selectedItemChanged(this.selectedItem)}_setOverlayItems(t){this.$.overlay.set("_items",t)}_repositionOverlay(){this.__repositionOverlayDebouncer=g.a.debounce(this.__repositionOverlayDebouncer,m.d.after(500),()=>{this._resizeDropdown(),this.$.overlay.updateViewportBoundaries(),this.$.overlay.ensureItemsRendered(),this.$.overlay._selector.notifyResize(),Object(f.b)()})}_indexOfValue(t,e){if(e&&this._isValidValue(t))for(let i=0;i<e.length;i++)if(this._getItemValue(e[i])===t)return i;return-1}_isValidValue(t){return null!=t}_overlaySelectedItemChanged(t){t.stopPropagation(),t.detail.item instanceof x||(this.opened&&this.close(),this.selectedItem!==t.detail.item&&(this.selectedItem=t.detail.item,this._detectAndDispatchChange()))}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){if(this.inputElement.validate)return this.inputElement.validate()}get _instanceProps(){return{item:!0,index:!0,selected:!0,focused:!0}}_ensureTemplatized(){if(!this._TemplateClass){const t=this._itemTemplate||this._getRootTemplate();t&&(this._TemplateClass=Object(b.b)(t,this,{instanceProps:this._instanceProps,forwardHostProp:function(t,e){const i=this.$.overlay._selector.querySelectorAll("vaadin-combo-box-item");Array.prototype.forEach.call(i,i=>{i._itemTemplateInstance&&(i._itemTemplateInstance.set(t,e),i._itemTemplateInstance.notifyPath(t,e,!0))})}}))}}_getRootTemplate(){return Array.prototype.filter.call(this.children,t=>"TEMPLATE"===t.tagName)[0]}_preventInputBlur(){this._toggleElement&&this._toggleElement.addEventListener("click",this._preventDefault),this._clearElement&&this._clearElement.addEventListener("click",this._preventDefault)}_restoreInputBlur(){this._toggleElement&&this._toggleElement.removeEventListener("click",this._preventDefault),this._clearElement&&this._clearElement.removeEventListener("click",this._preventDefault)}_preventDefault(t){t.preventDefault()}_stopPropagation(t){t.stopPropagation()}}),C=t=>(class extends t{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new x}}}static get observers(){return["_dataProviderFilterChanged(filter, dataProvider)","_dataProviderClearFilter(dataProvider, opened, value)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}_dataProviderClearFilter(t,e,i){t&&this.filter&&(this.size=void 0,this._pendingRequests={},this.filter="",this.clearCache())}ready(){super.ready(),this.clearCache(),this.$.overlay.addEventListener("index-requested",t=>{const e=t.detail.index;if(void 0!==e){const t=this._getPageForIndex(e);this._shouldLoadPage(t)&&this._loadPage(t)}})}_dataProviderFilterChanged(){this.dataProvider&&this.opened&&(this.size=void 0,this._pendingRequests={},this.clearCache())}_ensureFirstPage(t){t&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldLoadPage(t){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;const e=this.filteredItems[t*this.pageSize];return void 0!==e?e instanceof x:void 0===this.size}_loadPage(t){if(!this._pendingRequests[t]&&this.dataProvider){this.loading=!0;const e={page:t,pageSize:this.pageSize,filter:this.filter},i=(n,o)=>{if(this._pendingRequests[t]===i){if(this.filteredItems)this.splice("filteredItems",e.page*e.pageSize,n.length,...n);else{const t=[];t.splice(e.page*e.pageSize,n.length,...n),this.filteredItems=t}this._isValidValue(this.value)&&this._getItemValue(this.selectedItem)!==this.value&&this._selectItemForValue(this.value),this.size=o,delete this._pendingRequests[t],0===Object.keys(this._pendingRequests).length&&(this.loading=!1)}};this._pendingRequests[t]=i,this.dataProvider(e,i)}}_getPageForIndex(t){return Math.floor(t/this.pageSize)}clearCache(){if(!this.dataProvider)return;this._pendingRequests={};const t=[];for(let e=0;e<(this.size||0);e++)t.push(this.__placeHolder);this.filteredItems=t,this.opened?this._loadPage(0):this._forceNextRequest=!0}_sizeChanged(t=0){const e=(this.filteredItems||[]).slice(0,t);for(let i=0;i<t;i++)e[i]=void 0!==e[i]?e[i]:this.__placeHolder;this.filteredItems=e}_pageSizeChanged(t,e){if(Math.floor(t)!==t||0===t)throw this.pageSize=e,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(t,e){this._ensureItemsOrDataProvider(()=>{this.dataProvider=e})}_ensureItemsOrDataProvider(t){if(void 0!==this.items&&void 0!==this.dataProvider)throw t(),new Error("Using `items` and `dataProvider` together is not supported")}_warnDataProviderValue(t,e){if(t&&""!==e&&(void 0===this.selectedItem||null===this.selectedItem)){const t=this._indexOfValue(e,this.filteredItems);(t<0||!this._getItemLabel(this.filteredItems[t]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}});i(5);var O=i(98),k=i(249),I=i(102),j=i(6),S=i(1),E=i(101),P=i(2),T=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),A=T&&T[1]>=8;Object(j.a)({_template:n.a`
    <style>
      :host {
        display: block;
      }

      @media only screen and (-webkit-max-device-pixel-ratio: 1) {
        :host {
          will-change: transform;
        }
      }

      #items {
        @apply --iron-list-items-container;
        position: relative;
      }

      :host(:not([grid])) #items > ::slotted(*) {
        width: 100%;
      }

      #items > ::slotted(*) {
        box-sizing: border-box;
        margin: 0;
        position: absolute;
        top: 0;
        will-change: transform;
      }
    </style>

    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>

    <div id="items">
      <slot></slot>
    </div>
`,is:"iron-list",properties:{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},selectedAs:{type:String,value:"selected"},grid:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_gridChanged"},selectionEnabled:{type:Boolean,value:!1},selectedItem:{type:Object,notify:!0},selectedItems:{type:Object,notify:!0},multiSelection:{type:Boolean,value:!1},scrollOffset:{type:Number,value:0}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[E.a,O.a,k.a,I.a],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedItem:null,_focusedVirtualIndex:-1,_focusedPhysicalIndex:-1,_offscreenFocusedItem:null,_focusBackfillItem:null,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:!0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return(this.grid?this._physicalRows*this._rowHeight:this._physicalSize)-this._viewportHeight},get _itemsParent(){return Object(S.a)(Object(S.a)(this._userTemplate).parentNode)},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var t=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,t-this._physicalCount)},set _virtualStart(t){t=this._clamp(t,0,this._maxVirtualStart),this.grid&&(t-=t%this._itemsPerRow),this._virtualStartVal=t},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(t){(t%=this._physicalCount)<0&&(t=this._physicalCount+t),this.grid&&(t-=t%this._itemsPerRow),this._physicalStartVal=t},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(t){this._physicalCountVal=t},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var t=this._firstVisibleIndexVal;if(null==t){var e=this._physicalTop+this._scrollOffset;t=this._iterateItems((function(t,i){return(e+=this._getPhysicalSizeIncrement(t))>this._scrollPosition?this.grid?i-i%this._itemsPerRow:i:this.grid&&this._virtualCount-1===i?i-i%this._itemsPerRow:void 0}))||0,this._firstVisibleIndexVal=t}return t},get lastVisibleIndex(){var t=this._lastVisibleIndexVal;if(null==t){if(this.grid)t=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var e=this._physicalTop+this._scrollOffset;this._iterateItems((function(i,n){e<this._scrollBottom&&(t=n),e+=this._getPhysicalSizeIncrement(i)}))}this._lastVisibleIndexVal=t}return t},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},ready:function(){this.addEventListener("focus",this._didFocus.bind(this),!0)},attached:function(){this._debounce("_render",this._render,m.a),this.listen(this,"iron-resize","_resizeHandler"),this.listen(this,"keydown","_keydownHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler"),this.unlisten(this,"keydown","_keydownHandler")},_setOverflow:function(t){this.style.webkitOverflowScrolling=t===this?"touch":"",this.style.overflowY=t===this?"auto":"",this._lastVisibleIndexVal=null,this._firstVisibleIndexVal=null,this._debounce("_render",this._render,m.a)},updateViewportBoundaries:function(){var t=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(t["padding-top"],10),this._isRTL=Boolean("rtl"===t.direction),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight,this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var t=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),e=t-this._scrollPosition,i=e>=0;if(this._scrollPosition=t,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(e)>this._physicalSize&&this._physicalSize>0){e-=this._scrollOffset;var n=Math.round(e/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+n,this._physicalStart=this._physicalStart+n,this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._update()}else if(this._physicalCount>0){var o=this._getReusables(i);i?(this._physicalTop=o.physicalTop,this._virtualStart=this._virtualStart+o.indexes.length,this._physicalStart=this._physicalStart+o.indexes.length):(this._virtualStart=this._virtualStart-o.indexes.length,this._physicalStart=this._physicalStart-o.indexes.length),this._update(o.indexes,i?null:o.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),m.c)}},_getReusables:function(t){var e,i,n,o=[],a=this._hiddenContentSize*this._ratio,s=this._virtualStart,r=this._virtualEnd,l=this._physicalCount,c=this._physicalTop+this._scrollOffset,d=this._physicalBottom+this._scrollOffset,h=this._scrollTop,p=this._scrollBottom;for(t?(e=this._physicalStart,this._physicalEnd,i=h-c):(e=this._physicalEnd,this._physicalStart,i=d-p);i-=n=this._getPhysicalSizeIncrement(e),!(o.length>=l||i<=a);)if(t){if(r+o.length+1>=this._virtualCount)break;if(c+n>=h-this._scrollOffset)break;o.push(e),c+=n,e=(e+1)%l}else{if(s-o.length<=0)break;if(c+this._physicalSize-n<=p)break;o.push(e),c-=n,e=0===e?l-1:e-1}return{indexes:o,physicalTop:c-this._scrollOffset}},_update:function(t,e){if(!(t&&0===t.length||0===this._physicalCount)){if(this._manageFocus(),this._assignModels(t),this._updateMetrics(t),e)for(;e.length;){var i=e.pop();this._physicalTop-=this._getPhysicalSizeIncrement(i)}this._positionItems(),this._updateScrollerSize()}},_createPool:function(t){var e,i;this._ensureTemplatized();var n=new Array(t);for(e=0;e<t;e++)i=this.stamp(null),n[e]=i.root.querySelector("*"),this._itemsParent.appendChild(i.root);return n},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(t){var e=this._clamp(this._physicalCount+t,3,this._virtualCount-this._virtualStart);if(e=this._convertIndexToCompleteRow(e),this.grid){var i=e%this._itemsPerRow;i&&e-i<=this._physicalCount&&(e+=this._itemsPerRow),e-=i}var n=e-this._physicalCount,o=Math.round(.5*this._physicalCount);if(!(n<0)){if(n>0){var a=window.performance.now();[].push.apply(this._physicalItems,this._createPool(n));for(var s=0;s<n;s++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+n,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+n),this._update(),this._templateCost=(window.performance.now()-a)/n,o=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===o||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,o)),m.b):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,o),m.c))}},_render:function(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){var t=this._getReusables(!0);this._physicalTop=t.physicalTop,this._virtualStart=this._virtualStart+t.indexes.length,this._physicalStart=this._physicalStart+t.indexes.length,this._update(t.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_ensureTemplatized:function(){if(!this.ctor){this._userTemplate=this.queryEffectiveChildren("template"),this._userTemplate||console.warn("iron-list requires a template to be provided in light-dom");var t={__key__:!0};t[this.as]=!0,t[this.indexAs]=!0,t[this.selectedAs]=!0,t.tabIndex=!0,this._instanceProps=t,this.templatize(this._userTemplate,this.mutableData)}},_gridChanged:function(t,e){void 0!==e&&(this.notifyResize(),Object(f.b)(),t&&this._updateGridMetrics())},_itemsChanged:function(t){if("items"===t.path)this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,m.a);else if("items.splices"===t.path){if(this._adjustVirtualIndex(t.value.indexSplices),this._virtualCount=this.items?this.items.length:0,t.value.indexSplices.some((function(t){return t.addedCount>0||t.removed.length>0}))){var e=this._getActiveElement();this.contains(e)&&e.blur()}var i=t.value.indexSplices.some((function(t){return t.index+t.addedCount>=this._virtualStart&&t.index<=this._virtualEnd}),this);this._isClientFull()&&!i||this._debounce("_render",this._render,m.a)}else"items.length"!==t.path&&this._forwardItemPath(t.path,t.value)},_forwardItemPath:function(t,e){var i,n,o,a=(t=t.slice(6)).indexOf(".");-1===a&&(a=t.length);var s=this.modelForElement(this._offscreenFocusedItem),r=parseInt(t.substring(0,a),10);(i=this._isIndexRendered(r))?(n=this._getPhysicalIndex(r),o=this.modelForElement(this._physicalItems[n])):s&&(o=s),o&&o[this.indexAs]===r&&(t=t.substring(a+1),t=this.as+(t?"."+t:""),o._setPendingPropertyOrPath(t,e,!1,!0),o._flushProperties&&o._flushProperties(!0),i&&(this._updateMetrics([n]),this._positionItems(),this._updateScrollerSize()))},_adjustVirtualIndex:function(t){t.forEach((function(t){if(t.removed.forEach(this._removeItem,this),t.index<this._virtualStart){var e=Math.max(t.addedCount-t.removed.length,t.index-this._virtualStart);this._virtualStart=this._virtualStart+e,this._focusedVirtualIndex>=0&&(this._focusedVirtualIndex=this._focusedVirtualIndex+e)}}),this)},_removeItem:function(t){this.$.selector.deselect(t),this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===t&&this._removeFocusedItem()},_iterateItems:function(t,e){var i,n,o,a;if(2===arguments.length&&e){for(a=0;a<e.length;a++)if(i=e[a],n=this._computeVidx(i),null!=(o=t.call(this,i,n)))return o}else{for(i=this._physicalStart,n=this._virtualStart;i<this._physicalCount;i++,n++)if(null!=(o=t.call(this,i,n)))return o;for(i=0;i<this._physicalStart;i++,n++)if(null!=(o=t.call(this,i,n)))return o}},_computeVidx:function(t){return t>=this._physicalStart?this._virtualStart+(t-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+t},_assignModels:function(t){this._iterateItems((function(t,e){var i=this._physicalItems[t],n=this.items&&this.items[e];if(null!=n){var o=this.modelForElement(i);o.__key__=null,this._forwardProperty(o,this.as,n),this._forwardProperty(o,this.selectedAs,this.$.selector.isSelected(n)),this._forwardProperty(o,this.indexAs,e),this._forwardProperty(o,"tabIndex",this._focusedVirtualIndex===e?0:-1),this._physicalIndexForKey[o.__key__]=t,o._flushProperties&&o._flushProperties(!0),i.removeAttribute("hidden")}else i.setAttribute("hidden","")}),t)},_updateMetrics:function(t){Object(f.b)();var e=0,i=0,n=this._physicalAverageCount,o=this._physicalAverage;this._iterateItems((function(t,n){i+=this._physicalSizes[t],this._physicalSizes[t]=this._physicalItems[t].offsetHeight,e+=this._physicalSizes[t],this._physicalAverageCount+=this._physicalSizes[t]?1:0}),t),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(i=1===this._itemsPerRow?i:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+e-i,this._itemsPerRow=1),this._physicalAverageCount!==n&&(this._physicalAverage=Math.round((o*n+e)/this._physicalAverageCount))},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200,this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200,this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var t=this._physicalTop;if(this.grid){var e=this._itemsPerRow*this._itemWidth,i=(this._viewportWidth-e)/2;this._iterateItems((function(e,n){var o=n%this._itemsPerRow,a=Math.floor(o*this._itemWidth+i);this._isRTL&&(a*=-1),this.translate3d(a+"px",t+"px",0,this._physicalItems[e]),this._shouldRenderNextRow(n)&&(t+=this._rowHeight)}))}else this._iterateItems((function(e,i){this.translate3d(0,t+"px",0,this._physicalItems[e]),t+=this._physicalSizes[e]}))},_getPhysicalSizeIncrement:function(t){return this.grid?this._computeVidx(t)%this._itemsPerRow!=this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[t]},_shouldRenderNextRow:function(t){return t%this._itemsPerRow==this._itemsPerRow-1},_adjustScrollPosition:function(){var t=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==t){this._physicalTop=this._physicalTop-t;var e=this._scrollTop;!A&&e>0&&this._resetScrollPosition(e-t)}},_resetScrollPosition:function(t){this.scrollTarget&&t>=0&&(this._scrollTop=t,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(t){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((t=(t=(t=t||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||this.grid&&this.$.items.style.height<this._estScrollHeight)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToItem:function(t){return this.scrollToIndex(this.items.indexOf(t))},scrollToIndex:function(t){if(!("number"!=typeof t||t<0||t>this.items.length-1)&&(Object(f.b)(),0!==this._physicalCount)){t=this._clamp(t,0,this._virtualCount-1),(!this._isIndexRendered(t)||t>=this._maxVirtualStart)&&(this._virtualStart=this.grid?t-2*this._itemsPerRow:t-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var e=this._physicalStart,i=this._virtualStart,n=0,o=this._hiddenContentSize;i<t&&n<=o;)n+=this._getPhysicalSizeIncrement(e),e=(e+1)%this._physicalCount,i++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+n),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",(function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),m.a)},selectItem:function(t){return this.selectIndex(this.items.indexOf(t))},selectIndex:function(t){if(!(t<0||t>=this._virtualCount)){if(!this.multiSelection&&this.selectedItem&&this.clearSelection(),this._isIndexRendered(t)){var e=this.modelForElement(this._physicalItems[this._getPhysicalIndex(t)]);e&&(e[this.selectedAs]=!0),this.updateSizeForIndex(t)}this.$.selector.selectIndex(t)}},deselectItem:function(t){return this.deselectIndex(this.items.indexOf(t))},deselectIndex:function(t){if(!(t<0||t>=this._virtualCount)){if(this._isIndexRendered(t))this.modelForElement(this._physicalItems[this._getPhysicalIndex(t)])[this.selectedAs]=!1,this.updateSizeForIndex(t);this.$.selector.deselectIndex(t)}},toggleSelectionForItem:function(t){return this.toggleSelectionForIndex(this.items.indexOf(t))},toggleSelectionForIndex:function(t){(this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(t):this.$.selector.isSelected(this.items[t]))?this.deselectIndex(t):this.selectIndex(t)},clearSelection:function(){this._iterateItems((function(t,e){this.modelForElement(this._physicalItems[t])[this.selectedAs]=!1})),this.$.selector.clearSelection()},_selectionEnabledChanged:function(t){(t?this.listen:this.unlisten).call(this,this,"tap","_selectionHandler")},_selectionHandler:function(t){var e=this.modelForElement(t.target);if(e){var i,n,o=Object(S.a)(t).path[0],a=this._getActiveElement(),s=this._physicalItems[this._getPhysicalIndex(e[this.indexAs])];"input"!==o.localName&&"button"!==o.localName&&"select"!==o.localName&&(i=e.tabIndex,e.tabIndex=-100,n=a?a.tabIndex:-1,e.tabIndex=i,a&&s!==a&&s.contains(a)&&-100!==n||this.toggleSelectionForItem(e[this.as]))}},_multiSelectionChanged:function(t){this.clearSelection(),this.$.selector.multi=t},updateSizeForItem:function(t){return this.updateSizeForIndex(this.items.indexOf(t))},updateSizeForIndex:function(t){return this._isIndexRendered(t)?(this._updateMetrics([this._getPhysicalIndex(t)]),this._positionItems(),null):null},_manageFocus:function(){var t=this._focusedVirtualIndex;t>=0&&t<this._virtualCount?this._isIndexRendered(t)?this._restoreFocusedItem():this._createFocusBackfillItem():this._virtualCount>0&&this._physicalCount>0&&(this._focusedPhysicalIndex=this._physicalStart,this._focusedVirtualIndex=this._virtualStart,this._focusedItem=this._physicalItems[this._physicalStart])},_convertIndexToCompleteRow:function(t){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(t/this._itemsPerRow)*this._itemsPerRow:t},_isIndexRendered:function(t){return t>=this._virtualStart&&t<=this._virtualEnd},_isIndexVisible:function(t){return t>=this.firstVisibleIndex&&t<=this.lastVisibleIndex},_getPhysicalIndex:function(t){return(this._physicalStart+(t-this._virtualStart))%this._physicalCount},focusItem:function(t){this._focusPhysicalItem(t)},_focusPhysicalItem:function(t){if(!(t<0||t>=this._virtualCount)){this._restoreFocusedItem(),this._isIndexRendered(t)||this.scrollToIndex(t);var e,i=this._physicalItems[this._getPhysicalIndex(t)],n=this.modelForElement(i);n.tabIndex=-100,-100===i.tabIndex&&(e=i),e||(e=Object(S.a)(i).querySelector('[tabindex="-100"]')),n.tabIndex=0,this._focusedVirtualIndex=t,e&&e.focus()}},_removeFocusedItem:function(){this._offscreenFocusedItem&&this._itemsParent.removeChild(this._offscreenFocusedItem),this._offscreenFocusedItem=null,this._focusBackfillItem=null,this._focusedItem=null,this._focusedVirtualIndex=-1,this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function(){var t=this._focusedPhysicalIndex;if(!(this._offscreenFocusedItem||this._focusedVirtualIndex<0)){if(!this._focusBackfillItem){var e=this.stamp(null);this._focusBackfillItem=e.root.querySelector("*"),this._itemsParent.appendChild(e.root)}this._offscreenFocusedItem=this._physicalItems[t],this.modelForElement(this._offscreenFocusedItem).tabIndex=0,this._physicalItems[t]=this._focusBackfillItem,this._focusedPhysicalIndex=t,this.translate3d(0,"-10000px",0,this._offscreenFocusedItem)}},_restoreFocusedItem:function(){if(this._offscreenFocusedItem&&!(this._focusedVirtualIndex<0)){this._assignModels();var t=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex),e=this._physicalItems[t];if(e){var i=this.modelForElement(e),n=this.modelForElement(this._offscreenFocusedItem);i[this.as]===n[this.as]?(this._focusBackfillItem=e,i.tabIndex=-1,this._physicalItems[t]=this._offscreenFocusedItem,this.translate3d(0,"-10000px",0,this._focusBackfillItem)):(this._removeFocusedItem(),this._focusBackfillItem=null),this._offscreenFocusedItem=null}}},_didFocus:function(t){var e=this.modelForElement(t.target),i=this.modelForElement(this._focusedItem),n=null!==this._offscreenFocusedItem,o=this._focusedVirtualIndex;e&&(i===e?this._isIndexVisible(o)||this.scrollToIndex(o):(this._restoreFocusedItem(),i&&(i.tabIndex=-1),e.tabIndex=0,o=e[this.indexAs],this._focusedVirtualIndex=o,this._focusedPhysicalIndex=this._getPhysicalIndex(o),this._focusedItem=this._physicalItems[this._focusedPhysicalIndex],n&&!this._offscreenFocusedItem&&this._update()))},_keydownHandler:function(t){switch(t.keyCode){case 40:this._focusedVirtualIndex<this._virtualCount-1&&t.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case 39:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case 38:this._focusedVirtualIndex>0&&t.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case 37:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case 13:this._focusPhysicalItem(this._focusedVirtualIndex),this.selectionEnabled&&this._selectionHandler(t)}},_clamp:function(t,e,i){return Math.min(i,Math.max(e,t))},_debounce:function(t,e,i){this._debouncers=this._debouncers||{},this._debouncers[t]=g.a.debounce(this._debouncers[t],i,e.bind(this)),Object(f.a)(this._debouncers[t])},_forwardProperty:function(t,e,i){t._setPendingProperty(e,i)},_forwardHostPropV2:function(t,e){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(i){i&&this.modelForElement(i).forwardHostProp(t,e)}),this)},_notifyInstancePropV2:function(t,e,i){if(Object(P.e)(this.as,e)){var n=t[this.indexAs];e==this.as&&(this.items[n]=i),this.notifyPath(Object(P.i)(this.as,"items."+n,e),i)}},_getStampedChildren:function(){return this._physicalItems},_forwardInstancePath:function(t,e,i){0===e.indexOf(this.as+".")&&this.notifyPath("items."+t.__key__+"."+e.slice(this.as.length+1),i)},_forwardParentPath:function(t,e){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(i){i&&this.modelForElement(i).notifyPath(t,e,!0)}),this)},_forwardParentProp:function(t,e){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(i){i&&(this.modelForElement(i)[t]=e)}),this)},_getActiveElement:function(){var t=this._itemsParent.node.domHost;return Object(S.a)(t?t.root:document).activeElement}});class $ extends(Object(c.a)(l.a)){static get template(){return n.a`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
         display: none;
      }
    </style>
    <div part="content" id="content"></div>
`}static get is(){return"vaadin-combo-box-item"}static get properties(){return{index:Number,item:Object,label:String,selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},_itemTemplateInstance:Object,renderer:Function,_oldRenderer:Function}}static get observers(){return["_rendererOrItemChanged(renderer, index, item.*)","_updateLabel(label, _itemTemplateInstance)",'_updateTemplateInstanceVariable("index", index, _itemTemplateInstance)','_updateTemplateInstanceVariable("item", item, _itemTemplateInstance)','_updateTemplateInstanceVariable("selected", selected, _itemTemplateInstance)','_updateTemplateInstanceVariable("focused", focused, _itemTemplateInstance)']}connectedCallback(){if(super.connectedCallback(),!this._itemTemplateInstance){const t=this.getRootNode().host.getRootNode().host.__dataHost.getRootNode().host;this._comboBox=t.getRootNode().host,this._comboBox._ensureTemplatized(),this._comboBox._TemplateClass&&(this._itemTemplateInstance=new this._comboBox._TemplateClass({}),this.$.content.textContent="",this.$.content.appendChild(this._itemTemplateInstance.root))}}_render(){if(!this.renderer)return;const t={index:this.index,item:this.item};this.renderer(this.$.content,this._comboBox,t)}_rendererOrItemChanged(t,e,i){void 0!==i&&void 0!==e&&(this._oldRenderer!==t&&(this.$.content.innerHTML=""),t&&(this._oldRenderer=t,this._render()))}_updateLabel(t,e){void 0===e&&this.$.content&&!this.renderer&&(this.$.content.textContent=t)}_updateTemplateInstanceVariable(t,e,i){void 0!==t&&void 0!==e&&void 0!==i&&(i[t]=e)}}customElements.define($.is,$);var z=i(298),V=i(72);class L extends a.a{static get is(){return"vaadin-combo-box-overlay"}ready(){super.ready();const t=document.createElement("div");t.setAttribute("part","loader");const e=this.shadowRoot.querySelector(['[part~="content"]']);e.parentNode.insertBefore(t,e)}}customElements.define(L.is,L);class F extends(Object(z.a)(Object(V.b)(O.a,l.a))){static get template(){return n.a`
    <style>
      :host {
        display: block;
      }

      :host > #overlay {
        display: none;
      }
    </style>
    <vaadin-combo-box-overlay id="overlay" hidden\$="[[hidden]]" opened="[[opened]]" template="{{template}}" style="align-items: stretch; margin: 0;" theme\$="[[theme]]">
      <slot></slot>
    </vaadin-combo-box-overlay>
`}static get is(){return"vaadin-combo-box-dropdown"}static get properties(){return{opened:{type:Boolean,observer:"_openedChanged"},template:{type:Object,notify:!0},positionTarget:{type:Object},alignedAbove:{type:Boolean,value:!1},theme:String}}constructor(){super(),this._boundSetPosition=this._setPosition.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("iron-resize",this._boundSetPosition)}ready(){super.ready(),this.$.overlay.addEventListener("vaadin-overlay-outside-click",t=>{t.preventDefault()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("iron-resize",this._boundSetPosition),this.opened=!1}notifyResize(){super.notifyResize(),this.positionTarget&&this.opened&&(this._setPosition(),requestAnimationFrame(this._setPosition.bind(this)))}_openedChanged(t,e){!!t!=!!e&&(t?(this.$.overlay.style.position=this._isPositionFixed(this.positionTarget)?"fixed":"absolute",this._setPosition(),window.addEventListener("scroll",this._boundSetPosition,!0),document.addEventListener("click",this._boundOutsideClickListener,!0),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0}))):(window.removeEventListener("scroll",this._boundSetPosition,!0),document.removeEventListener("click",this._boundOutsideClickListener,!0),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0}))))}_outsideClickListener(t){const e=t.composedPath();e.indexOf(this.positionTarget)<0&&e.indexOf(this.$.overlay)<0&&(this.opened=!1)}_isPositionFixed(t){const e=this._getOffsetParent(t);return"fixed"===window.getComputedStyle(t).position||e&&this._isPositionFixed(e)}_getOffsetParent(t){if(t.assignedSlot)return t.assignedSlot.parentElement;if(t.parentElement)return t.offsetParent;const e=t.parentNode;return e&&11===e.nodeType&&e.host?e.host:void 0}_verticalOffset(t,e){return this.alignedAbove?-t.height:e.height}_shouldAlignAbove(t){return(window.innerHeight-t.bottom-Math.min(document.body.scrollTop,0))/window.innerHeight<.3}_setPosition(t){if(this.hidden)return;if(t&&t.target){const e=t.target===document?document.body:t.target,i=this.$.overlay.parentElement;if(!e.contains(this.$.overlay)&&!e.contains(this.positionTarget)||i!==document.body)return}const e=this.positionTarget.getBoundingClientRect();this.alignedAbove=this._shouldAlignAbove(e);const i=this.$.overlay.getBoundingClientRect();this._translateX=e.left-i.left+(this._translateX||0),this._translateY=e.top-i.top+(this._translateY||0)+this._verticalOffset(i,e);const n=window.devicePixelRatio||1;this._translateX=Math.round(this._translateX*n)/n,this._translateY=Math.round(this._translateY*n)/n,this.$.overlay.style.transform=`translate3d(${this._translateX}px, ${this._translateY}px, 0)`,this.$.overlay.style.width=this.positionTarget.clientWidth+"px",this.$.overlay.style.justifyContent=this.alignedAbove?"flex-end":"flex-start",this.dispatchEvent(new CustomEvent("position-changed"))}}customElements.define(F.is,F);const R=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(t){return!1}})();class N extends class extends l.a{}{static get template(){return n.a`
    <vaadin-combo-box-dropdown id="dropdown" hidden="[[_hidden(_items.*, loading)]]" position-target="[[positionTarget]]" on-template-changed="_templateChanged" on-position-changed="_setOverlayHeight" disable-upgrade="" theme="[[theme]]">
      <template>
        <style>
          #scroller {
            overflow: auto;

            /* Fixes item background from getting on top of scrollbars on Safari */
            transform: translate3d(0, 0, 0);

            /* Enable momentum scrolling on iOS (iron-list v1.2+ no longer does it for us) */
            -webkit-overflow-scrolling: touch;

            /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
            box-shadow: 0 0 0 white;
          }
        </style>
        <div id="scroller" on-click="_stopPropagation">
          <iron-list id="selector" role="listbox" items="[[_getItems(opened, _items)]]" scroll-target="[[_scroller]]">
            <template>
              <vaadin-combo-box-item on-click="_onItemClick" index="[[__requestItemByIndex(item, index)]]" item="[[item]]" label="[[getItemLabel(item, _itemLabelPath)]]" selected="[[_isItemSelected(item, _selectedItem, _itemIdPath)]]" renderer="[[renderer]]" role\$="[[_getAriaRole(index)]]" aria-selected\$="[[_getAriaSelected(_focusedIndex,index)]]" focused="[[_isItemFocused(_focusedIndex,index)]]" tabindex="-1" theme\$="[[theme]]">
              </vaadin-combo-box-item>
            </template>
          </iron-list>
        </div>
      </template>
    </vaadin-combo-box-dropdown>
`}static get is(){return"vaadin-combo-box-dropdown-wrapper"}static get properties(){return{touchDevice:{type:Boolean,value:R},opened:Boolean,positionTarget:{type:Object},renderer:Function,loading:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_setOverlayHeight"},theme:String,_selectedItem:{type:Object},_items:{type:Object},_focusedIndex:{type:Number,value:-1,observer:"_focusedIndexChanged"},_focusedItem:{type:String,computed:"_getFocusedItem(_focusedIndex)"},_itemLabelPath:{type:String,value:"label"},_itemValuePath:{type:String,value:"value"},_selector:Object,_itemIdPath:String}}static get observers(){return["_selectorChanged(_selector)","_loadingChanged(loading)","_openedChanged(opened, _items, loading)"]}_fireTouchAction(t){this.dispatchEvent(new CustomEvent("vaadin-overlay-touch-action",{detail:{sourceEvent:t}}))}_getItems(t,e){return t?e:[]}_openedChanged(t,e,i){if(this.$.dropdown.hasAttribute("disable-upgrade")){if(!t)return;this._initDropdown()}this.$.dropdown.opened=!(!t||!(i||this.$.dropdown.opened||e&&e.length))}_initDropdown(){this.$.dropdown.removeAttribute("disable-upgrade"),this._templateChanged(),this._loadingChanged(this.loading),this.$.dropdown.$.overlay.addEventListener("touchend",t=>this._fireTouchAction(t)),this.$.dropdown.$.overlay.addEventListener("touchmove",t=>this._fireTouchAction(t)),this.$.dropdown.$.overlay.addEventListener("mousedown",t=>t.preventDefault()),/Trident/.test(navigator.userAgent)&&this._scroller.setAttribute("unselectable","on")}_templateChanged(t){this.$.dropdown.hasAttribute("disable-upgrade")||(this._selector=this.$.dropdown.$.overlay.content.querySelector("#selector"),this._scroller=this.$.dropdown.$.overlay.content.querySelector("#scroller"))}_loadingChanged(t){this.$.dropdown.hasAttribute("disable-upgrade")||(t?this.$.dropdown.$.overlay.setAttribute("loading",""):this.$.dropdown.$.overlay.removeAttribute("loading"))}_selectorChanged(t){this._patchWheelOverScrolling()}_setOverlayHeight(){if(!this.opened||!this.positionTarget||!this._selector)return;const t=this.positionTarget.getBoundingClientRect();this._scroller.style.maxHeight=(window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-combo-box-overlay-max-height"):getComputedStyle(this).getPropertyValue("--vaadin-combo-box-overlay-max-height"))||"65vh";const e=this._maxOverlayHeight(t);this.$.dropdown.$.overlay.style.maxHeight=e,this._selector.style.maxHeight=e,this.updateViewportBoundaries()}_maxOverlayHeight(t){const e=Math.min(window.innerHeight,document.body.scrollHeight-document.body.scrollTop);return this.$.dropdown.alignedAbove?Math.max(t.top-8+Math.min(document.body.scrollTop,0),116)+"px":Math.max(e-t.bottom-8,116)+"px"}_getFocusedItem(t){if(t>=0)return this._items[t]}_isItemSelected(t,e,i){return!(t instanceof x)&&(i&&void 0!==t&&void 0!==e?this.get(i,t)===this.get(i,e):t===e)}_onItemClick(t){t.detail&&t.detail.sourceEvent&&t.detail.sourceEvent.stopPropagation&&this._stopPropagation(t.detail.sourceEvent),this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:t.model.item}}))}indexOfLabel(t){if(this._items&&t)for(let e=0;e<this._items.length;e++)if(this.getItemLabel(this._items[e]).toString().toLowerCase()===t.toString().toLowerCase())return e;return-1}__requestItemByIndex(t,e){return t instanceof x&&void 0!==e&&this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:e}})),e}getItemLabel(t,e){e=e||this._itemLabelPath;let i=t&&e?this.get(e,t):void 0;return null==i&&(i=t?t.toString():""),i}_isItemFocused(t,e){return t==e}_getAriaSelected(t,e){return this._isItemFocused(t,e).toString()}_getAriaRole(t){return void 0!==t&&"option"}_focusedIndexChanged(t){t>=0&&this._scrollIntoView(t)}_scrollIntoView(t){const e=this._visibleItemsCount();if(void 0===e)return;let i=t;t>this._selector.lastVisibleIndex-1?i=t-e+1:t>this._selector.firstVisibleIndex&&(i=this._selector.firstVisibleIndex),this._selector.scrollToIndex(Math.max(0,i));const n=this._selector._getPhysicalIndex(t),o=this._selector._physicalItems[n];if(!o)return;const a=o.getBoundingClientRect(),s=this._scroller.getBoundingClientRect(),r=a.bottom-s.bottom+this._viewportTotalPaddingBottom;r>0&&(this._scroller.scrollTop+=r)}ensureItemsRendered(){this._selector._render()}adjustScrollPosition(){this.opened&&this._items&&this._scrollIntoView(this._focusedIndex)}_patchWheelOverScrolling(){const t=this._selector;t.addEventListener("wheel",e=>{const i=t._scroller||t.scrollTarget,n=0===i.scrollTop,o=i.scrollHeight-i.scrollTop-i.clientHeight<=1;n&&e.deltaY<0?e.preventDefault():o&&e.deltaY>0&&e.preventDefault()})}updateViewportBoundaries(){this._cachedViewportTotalPaddingBottom=void 0,this._selector.updateViewportBoundaries()}get _viewportTotalPaddingBottom(){if(void 0===this._cachedViewportTotalPaddingBottom){const t=window.getComputedStyle(this._selector.$.items);this._cachedViewportTotalPaddingBottom=[t.paddingBottom,t.borderBottomWidth].map(t=>parseInt(t,10)).reduce((t,e)=>t+e)}return this._cachedViewportTotalPaddingBottom}_visibleItemsCount(){if(this._selector)return this._selector.flushDebouncer("_debounceTemplate"),this._selector.scrollToIndex(this._selector.firstVisibleIndex),this.updateViewportBoundaries(),this._selector.lastVisibleIndex-this._selector.firstVisibleIndex+1}_selectItem(t){t="number"==typeof t?this._items[t]:t,this._selector.selectedItem!==t&&this._selector.selectItem(t)}_preventDefault(t){t.cancelable&&t.preventDefault()}_stopPropagation(t){t.stopPropagation()}_hidden(t){return!(this.loading||this._items&&this._items.length)}}customElements.define(N.is,N);var B=i(23);class M extends(Object(u.a)(Object(c.a)(C(w(l.a))))){static get template(){return n.a`
    <slot></slot>

    <vaadin-combo-box-dropdown-wrapper id="overlay" opened="[[opened]]" position-target="[[inputElement]]" renderer="[[renderer]]" _focused-index="[[_focusedIndex]]" _item-id-path="[[itemIdPath]]" _item-label-path="[[itemLabelPath]]" loading="[[loading]]" theme="[[theme]]">
    </vaadin-combo-box-dropdown-wrapper>
`}static get is(){return"vaadin-combo-box-light"}static get properties(){return{attrForValue:{type:String,value:"value"},inputElement:{type:Element,readOnly:!0}}}constructor(){super(),this._boundInputValueChanged=this._inputValueChanged.bind(this)}ready(){super.ready(),this._toggleElement=this.querySelector(".toggle-button"),this._clearElement=this.querySelector(".clear-button")}get focused(){return this.getRootNode().activeElement===this.inputElement}connectedCallback(){super.connectedCallback();this._setInputElement(this.querySelector("vaadin-text-field,iron-input,paper-input,.paper-input-input,.input")),this._revertInputValue(),this.inputElement.addEventListener("input",this._boundInputValueChanged),this._preventInputBlur()}disconnectedCallback(){super.disconnectedCallback(),this.inputElement.removeEventListener("input",this._boundInputValueChanged),this._restoreInputBlur()}get _propertyForValue(){return Object(B.b)(this.attrForValue)}get _inputElementValue(){return this.inputElement&&this.inputElement[this._propertyForValue]}set _inputElementValue(t){this.inputElement&&(this.inputElement[this._propertyForValue]=t)}}customElements.define(M.is,M)},215:function(t,e,i){"use strict";i(5),i(45);var n=i(35),o=i(61),a=i(6),s=i(1),r=i(3);Object(a.a)({_template:r.a`
    <style>
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        border: 1px solid;
        padding: 2px;
        -moz-appearance: textarea;
        -webkit-appearance: textarea;
        overflow: hidden;
      }

      .mirror-text {
        visibility: hidden;
        word-wrap: break-word;
        @apply --iron-autogrow-textarea;
      }

      .fit {
        @apply --layout-fit;
      }

      textarea {
        position: relative;
        outline: none;
        border: none;
        resize: none;
        background: inherit;
        color: inherit;
        /* see comments in template */
        width: 100%;
        height: 100%;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        text-align: inherit;
        @apply --iron-autogrow-textarea;
      }

      textarea::-webkit-input-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea:-moz-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea::-moz-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea:-ms-input-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }
    </style>

    <!-- the mirror sizes the input/textarea so it grows with typing -->
    <!-- use &#160; instead &nbsp; of to allow this element to be used in XHTML -->
    <div id="mirror" class="mirror-text" aria-hidden="true">&nbsp;</div>

    <!-- size the input/textarea with a div, because the textarea has intrinsic size in ff -->
    <div class="textarea-container fit">
      <textarea id="textarea" name\$="[[name]]" aria-label\$="[[label]]" autocomplete\$="[[autocomplete]]" autofocus\$="[[autofocus]]" inputmode\$="[[inputmode]]" placeholder\$="[[placeholder]]" readonly\$="[[readonly]]" required\$="[[required]]" disabled\$="[[disabled]]" rows\$="[[rows]]" minlength\$="[[minlength]]" maxlength\$="[[maxlength]]"></textarea>
    </div>
`,is:"iron-autogrow-textarea",behaviors:[o.a,n.a],properties:{value:{observer:"_valueChanged",type:String,notify:!0},bindValue:{observer:"_bindValueChanged",type:String,notify:!0},rows:{type:Number,value:1,observer:"_updateCached"},maxRows:{type:Number,value:0,observer:"_updateCached"},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,value:!1},inputmode:{type:String},placeholder:{type:String},readonly:{type:String},required:{type:Boolean},minlength:{type:Number},maxlength:{type:Number},label:{type:String}},listeners:{input:"_onInput"},get textarea(){return this.$.textarea},get selectionStart(){return this.$.textarea.selectionStart},get selectionEnd(){return this.$.textarea.selectionEnd},set selectionStart(t){this.$.textarea.selectionStart=t},set selectionEnd(t){this.$.textarea.selectionEnd=t},attached:function(){navigator.userAgent.match(/iP(?:[oa]d|hone)/)&&(this.$.textarea.style.marginLeft="-3px")},validate:function(){var t=this.$.textarea.validity.valid;return t&&(this.required&&""===this.value?t=!1:this.hasValidator()&&(t=o.a.validate.call(this,this.value))),this.invalid=!t,this.fire("iron-input-validate"),t},_bindValueChanged:function(t){this.value=t},_valueChanged:function(t){var e=this.textarea;e&&(e.value!==t&&(e.value=t||0===t?t:""),this.bindValue=t,this.$.mirror.innerHTML=this._valueForMirror(),this.fire("bind-value-changed",{value:this.bindValue}))},_onInput:function(t){var e=Object(s.a)(t).path;this.value=e?e[0].value:t.target.value},_constrain:function(t){var e;for(t=t||[""],e=this.maxRows>0&&t.length>this.maxRows?t.slice(0,this.maxRows):t.slice(0);this.rows>0&&e.length<this.rows;)e.push("");return e.join("<br/>")+"&#160;"},_valueForMirror:function(){var t=this.textarea;if(t)return this.tokens=t&&t.value?t.value.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&#39;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").split("\n"):[""],this._constrain(this.tokens)},_updateCached:function(){this.$.mirror.innerHTML=this._constrain(this.tokens)}});i(114),i(115),i(116);var l=i(60),c=i(97);Object(a.a)({_template:r.a`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container no-label-float$="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <iron-autogrow-textarea class="paper-input-input" slot="input" id$="[[_inputId]]" aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" bind-value="{{value}}" invalid="{{invalid}}" validator$="[[validator]]" disabled$="[[disabled]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" required$="[[required]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" autocapitalize$="[[autocapitalize]]" rows$="[[rows]]" max-rows$="[[maxRows]]" on-change="_onChange"></iron-autogrow-textarea>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
`,is:"paper-textarea",behaviors:[c.a,l.a],properties:{_ariaLabelledBy:{observer:"_ariaLabelledByChanged",type:String},_ariaDescribedBy:{observer:"_ariaDescribedByChanged",type:String},value:{type:String},rows:{type:Number,value:1},maxRows:{type:Number,value:0}},get selectionStart(){return this.$.input.textarea.selectionStart},set selectionStart(t){this.$.input.textarea.selectionStart=t},get selectionEnd(){return this.$.input.textarea.selectionEnd},set selectionEnd(t){this.$.input.textarea.selectionEnd=t},_ariaLabelledByChanged:function(t){this._focusableElement.setAttribute("aria-labelledby",t)},_ariaDescribedByChanged:function(t){this._focusableElement.setAttribute("aria-describedby",t)},get _focusableElement(){return this.inputElement.textarea}})},220:function(t,e,i){"use strict";i(5),i(45);var n=i(6),o=i(1),a=i(3),s=i(128),r=i(259);Object(n.a)({_template:a.a`
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
`,is:"app-header",behaviors:[r.a,s.a],properties:{condenses:{type:Boolean,value:!1},fixed:{type:Boolean,value:!1},reveals:{type:Boolean,value:!1},shadow:{type:Boolean,reflectToAttribute:!0,value:!1}},observers:["_configChanged(isAttached, condenses, fixed)"],_height:0,_dHeight:0,_stickyElTop:0,_stickyElRef:null,_top:0,_progress:0,_wasScrollingDown:!1,_initScrollTop:0,_initTimestamp:0,_lastTimestamp:0,_lastScrollTop:0,get _maxHeaderTop(){return this.fixed?this._dHeight:this._height+5},get _stickyEl(){if(this._stickyElRef)return this._stickyElRef;for(var t,e=Object(o.a)(this.$.slot).getDistributedNodes(),i=0;t=e[i];i++)if(t.nodeType===Node.ELEMENT_NODE){if(t.hasAttribute("sticky")){this._stickyElRef=t;break}this._stickyElRef||(this._stickyElRef=t)}return this._stickyElRef},_configChanged:function(){this.resetLayout(),this._notifyLayoutChanged()},_updateLayoutStates:function(){if(0!==this.offsetWidth||0!==this.offsetHeight){var t=this._clampedScrollTop,e=0===this._height||0===t,i=this.disabled;this._height=this.offsetHeight,this._stickyElRef=null,this.disabled=!0,e||this._updateScrollState(0,!0),this._mayMove()?this._dHeight=this._stickyEl?this._height-this._stickyEl.offsetHeight:0:this._dHeight=0,this._stickyElTop=this._stickyEl?this._stickyEl.offsetTop:0,this._setUpEffect(),e?this._updateScrollState(t,!0):(this._updateScrollState(this._lastScrollTop,!0),this._layoutIfDirty()),this.disabled=i}},_updateScrollState:function(t,e){if(0!==this._height){var i=0,n=0,o=this._top,a=(this._lastScrollTop,this._maxHeaderTop),s=t-this._lastScrollTop,r=Math.abs(s),l=t>this._lastScrollTop,c=performance.now();if(this._mayMove()&&(n=this._clamp(this.reveals?o+s:t,0,a)),t>=this._dHeight&&(n=this.condenses&&!this.fixed?Math.max(this._dHeight,n):n,this.style.transitionDuration="0ms"),this.reveals&&!this.disabled&&r<100&&((c-this._initTimestamp>300||this._wasScrollingDown!==l)&&(this._initScrollTop=t,this._initTimestamp=c),t>=a))if(Math.abs(this._initScrollTop-t)>30||r>10){l&&t>=a?n=a:!l&&t>=this._dHeight&&(n=this.condenses&&!this.fixed?this._dHeight:0);var d=s/(c-this._lastTimestamp);this.style.transitionDuration=this._clamp((n-o)/d,0,300)+"ms"}else n=this._top;i=0===this._dHeight?t>0?1:0:n/this._dHeight,e||(this._lastScrollTop=t,this._top=n,this._wasScrollingDown=l,this._lastTimestamp=c),(e||i!==this._progress||o!==n||0===t)&&(this._progress=i,this._runEffects(i,n),this._transformHeader(n))}},_mayMove:function(){return this.condenses||!this.fixed},willCondense:function(){return this._dHeight>0&&this.condenses},isOnScreen:function(){return 0!==this._height&&this._top<this._height},isContentBelow:function(){return 0===this._top?this._clampedScrollTop>0:this._clampedScrollTop-this._maxHeaderTop>=0},_transformHeader:function(t){this.translate3d(0,-t+"px",0),this._stickyEl&&this.translate3d(0,this.condenses&&t>=this._stickyElTop?Math.min(t,this._dHeight)-this._stickyElTop+"px":0,0,this._stickyEl)},_clamp:function(t,e,i){return Math.min(i,Math.max(e,t))},_ensureBgContainers:function(){this._bgContainer||(this._bgContainer=document.createElement("div"),this._bgContainer.id="background",this._bgRear=document.createElement("div"),this._bgRear.id="backgroundRearLayer",this._bgContainer.appendChild(this._bgRear),this._bgFront=document.createElement("div"),this._bgFront.id="backgroundFrontLayer",this._bgContainer.appendChild(this._bgFront),Object(o.a)(this.root).insertBefore(this._bgContainer,this.$.contentContainer))},_getDOMRef:function(t){switch(t){case"backgroundFrontLayer":return this._ensureBgContainers(),this._bgFront;case"backgroundRearLayer":return this._ensureBgContainers(),this._bgRear;case"background":return this._ensureBgContainers(),this._bgContainer;case"mainTitle":return Object(o.a)(this).querySelector("[main-title]");case"condensedTitle":return Object(o.a)(this).querySelector("[condensed-title]")}return null},getScrollState:function(){return{progress:this._progress,top:this._top}}})},222:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"a",(function(){return l}));var n=i(13),o=i(196);const a=(t,e,i)=>t.callWS(Object.assign({type:"config/device_registry/update",device_id:e},i)),s=t=>t.sendMessagePromise({type:"config/device_registry/list"}),r=(t,e)=>t.subscribeEvents(Object(o.a)(()=>s(t).then(t=>e.setState(t,!0)),500,!0),"device_registry_updated"),l=(t,e)=>Object(n.d)("_dr",s,r,t,e)},224:function(t,e,i){"use strict";i(146);const n=customElements.get("paper-dropdown-menu");customElements.define("ha-paper-dropdown-menu",class extends n{ready(){super.ready(),setTimeout(()=>{"rtl"===window.getComputedStyle(this).direction&&(this.style.textAlign="right")},100)}})},228:function(t,e,i){"use strict";i(5),i(31),i(109),i(147),i(42),i(148),i(149);var n=i(55),o=i(35),a=i(60),s=i(61),r=i(69),l=i(6),c=i(1),d=i(36),h=i(3);Object(l.a)({_template:h.a`
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
`,is:"paper-dropdown-menu-light",behaviors:[n.a,o.a,r.a,a.a,s.a],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0,observer:"_valueChanged"},label:{type:String},placeholder:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,hasContent:{type:Boolean,readOnly:!0}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},hostAttributes:{tabindex:0,role:"combobox","aria-autocomplete":"none","aria-haspopup":"true"},observers:["_selectedItemChanged(selectedItem)"],attached:function(){var t=this.contentElement;t&&t.selectedItem&&this._setSelectedItem(t.selectedItem)},get contentElement(){for(var t=Object(c.a)(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(t){this._setSelectedItem(t.detail.item)},_onIronDeselect:function(t){this._setSelectedItem(null)},_onTap:function(t){d.c(t)===this&&this.open()},_selectedItemChanged:function(t){var e="";e=t?t.label||t.getAttribute("label")||t.textContent.trim():"",this.value=e,this._setSelectedItemLabel(e)},_computeMenuVerticalOffset:function(t,e){return e||(t?-4:8)},_getValidity:function(t){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var t=this.opened?"true":"false",e=this.contentElement;e&&e.setAttribute("aria-expanded",t)},_computeLabelClass:function(t,e,i){var n="";return!0===t?i?"label-is-hidden":"":((i||!0===e)&&(n+=" label-is-floating"),n)},_valueChanged:function(){this.$.input&&this.$.input.textContent!==this.value&&(this.$.input.textContent=this.value),this._setHasContent(!!this.value)}})},231:function(t,e,i){"use strict";var n=i(4),o=(i(108),i(207),i(119)),a=i(180),s=i(0),r=i(103),l=i(176);const c=t=>void 0!==t&&!o.i.includes(t.state);class d extends s.a{constructor(){super(...arguments),this._isOn=!1}render(){return this.stateObj?this.stateObj.attributes.assumed_state?s.f`
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
      `:s.f`
      <paper-toggle-button
        aria-label=${`Toggle ${Object(l.a)(this.stateObj)} ${this._isOn?"off":"on"}`}
        .checked=${this._isOn}
        @change=${this._toggleChanged}
      ></paper-toggle-button>
    `:s.f`
        <paper-toggle-button disabled></paper-toggle-button>
      `}firstUpdated(t){super.firstUpdated(t),this.addEventListener("click",t=>t.stopPropagation())}updated(t){t.has("stateObj")&&(this._isOn=c(this.stateObj))}_toggleChanged(t){const e=t.target.checked;e!==this._isOn&&this._callService(e)}_turnOn(){this._callService(!0)}_turnOff(){this._callService(!1)}async _callService(t){if(!this.hass||!this.stateObj)return;Object(r.a)("light");const e=Object(a.a)(this.stateObj);let i,n;"lock"===e?(i="lock",n=t?"unlock":"lock"):"cover"===e?(i="cover",n=t?"open_cover":"close_cover"):"group"===e?(i="homeassistant",n=t?"turn_on":"turn_off"):(i=e,n=t?"turn_on":"turn_off");const o=this.stateObj;this._isOn=t,await this.hass.callService(i,n,{entity_id:this.stateObj.entity_id}),setTimeout(async()=>{this.stateObj===o&&(this._isOn=c(this.stateObj))},2e3)}static get styles(){return s.c`
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
    `}}Object(n.b)([Object(s.g)()],d.prototype,"stateObj",void 0),Object(n.b)([Object(s.g)()],d.prototype,"_isOn",void 0),customElements.define("ha-entity-toggle",d)},232:function(t,e,i){"use strict";var n=i(4),o=i(14),a=i(74);i(239);const s=customElements.get("mwc-fab");let r=class extends s{render(){const t={"mdc-fab--mini":this.mini,"mdc-fab--exited":this.exited,"mdc-fab--extended":this.extended},e=""!==this.label&&this.extended;return o.g`
      <button
        .ripple="${Object(a.a)()}"
        class="mdc-fab ${Object(o.d)(t)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label||this.icon}"
      >
        ${e&&this.showIconAtEnd?this.label:""}
        ${this.icon?o.g`
              <ha-icon .icon=${this.icon}></ha-icon>
            `:""}
        ${e&&!this.showIconAtEnd?this.label:""}
      </button>
    `}};r=Object(n.b)([Object(o.f)("ha-fab")],r)},234:function(t,e,i){"use strict";i(5);var n=i(6);Object(n.a)({is:"app-route",properties:{route:{type:Object,notify:!0},pattern:{type:String},data:{type:Object,value:function(){return{}},notify:!0},autoActivate:{type:Boolean,value:!1},_queryParamsUpdating:{type:Boolean,value:!1},queryParams:{type:Object,value:function(){return{}},notify:!0},tail:{type:Object,value:function(){return{path:null,prefix:null,__queryParams:null}},notify:!0},active:{type:Boolean,notify:!0,readOnly:!0},_matched:{type:String,value:""}},observers:["__tryToMatch(route.path, pattern)","__updatePathOnDataChange(data.*)","__tailPathChanged(tail.path)","__routeQueryParamsChanged(route.__queryParams)","__tailQueryParamsChanged(tail.__queryParams)","__queryParamsChanged(queryParams.*)"],created:function(){this.linkPaths("route.__queryParams","tail.__queryParams"),this.linkPaths("tail.__queryParams","route.__queryParams")},__routeQueryParamsChanged:function(t){if(t&&this.tail){if(this.tail.__queryParams!==t&&this.set("tail.__queryParams",t),!this.active||this._queryParamsUpdating)return;var e={},i=!1;for(var n in t)e[n]=t[n],!i&&this.queryParams&&t[n]===this.queryParams[n]||(i=!0);for(var n in this.queryParams)if(i||!(n in t)){i=!0;break}if(!i)return;this._queryParamsUpdating=!0,this.set("queryParams",e),this._queryParamsUpdating=!1}},__tailQueryParamsChanged:function(t){t&&this.route&&this.route.__queryParams!=t&&this.set("route.__queryParams",t)},__queryParamsChanged:function(t){this.active&&!this._queryParamsUpdating&&this.set("route.__"+t.path,t.value)},__resetProperties:function(){this._setActive(!1),this._matched=null},__tryToMatch:function(){if(this.route){var t=this.route.path,e=this.pattern;if(this.autoActivate&&""===t&&(t="/"),e)if(t){for(var i=t.split("/"),n=e.split("/"),o=[],a={},s=0;s<n.length;s++){var r=n[s];if(!r&&""!==r)break;var l=i.shift();if(!l&&""!==l)return void this.__resetProperties();if(o.push(l),":"==r.charAt(0))a[r.slice(1)]=l;else if(r!==l)return void this.__resetProperties()}this._matched=o.join("/");var c={};this.active||(c.active=!0);var d=this.route.prefix+this._matched,h=i.join("/");for(var p in i.length>0&&(h="/"+h),this.tail&&this.tail.prefix===d&&this.tail.path===h||(c.tail={prefix:d,path:h,__queryParams:this.route.__queryParams}),c.data=a,this._dataInUrl={},a)this._dataInUrl[p]=a[p];this.setProperties?this.setProperties(c,!0):this.__setMulti(c)}else this.__resetProperties()}},__tailPathChanged:function(t){if(this.active){var e=t,i=this._matched;e&&("/"!==e.charAt(0)&&(e="/"+e),i+=e),this.set("route.path",i)}},__updatePathOnDataChange:function(){if(this.route&&this.active){var t=this.__getLink({});t!==this.__getLink(this._dataInUrl)&&this.set("route.path",t)}},__getLink:function(t){var e={tail:null};for(var i in this.data)e[i]=this.data[i];for(var i in t)e[i]=t[i];var n=this.pattern.split("/").map((function(t){return":"==t[0]&&(t=e[t.slice(1)]),t}),this);return e.tail&&e.tail.path&&(n.length>0&&"/"===e.tail.path.charAt(0)?n.push(e.tail.path.slice(1)):n.push(e.tail.path)),n.join("/")},__setMulti:function(t){for(var e in t)this._propertySetter(e,t[e]);void 0!==t.data&&(this._pathEffector("data",this.data),this._notifyChange("data")),void 0!==t.active&&(this._pathEffector("active",this.active),this._notifyChange("active")),void 0!==t.tail&&(this._pathEffector("tail",this.tail),this._notifyChange("tail"))}})},239:function(t,e,i){"use strict";var n=i(4),o=i(14),a=i(74);class s extends o.b{constructor(){super(...arguments),this.mini=!1,this.exited=!1,this.disabled=!1,this.extended=!1,this.showIconAtEnd=!1,this.icon="",this.label=""}createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}render(){const t={"mdc-fab--mini":this.mini,"mdc-fab--exited":this.exited,"mdc-fab--extended":this.extended},e=""!==this.label&&this.extended;return o.g`
      <button
          .ripple="${Object(a.a)()}"
          class="mdc-fab ${Object(o.d)(t)}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}">
        ${e&&this.showIconAtEnd?this.label:""}
        ${this.icon?o.g`
          <span class="material-icons mdc-fab__icon">${this.icon}</span>`:""}
        ${e&&!this.showIconAtEnd?this.label:""}
      </button>`}}Object(n.b)([Object(o.i)({type:Boolean})],s.prototype,"mini",void 0),Object(n.b)([Object(o.i)({type:Boolean})],s.prototype,"exited",void 0),Object(n.b)([Object(o.i)({type:Boolean})],s.prototype,"disabled",void 0),Object(n.b)([Object(o.i)({type:Boolean})],s.prototype,"extended",void 0),Object(n.b)([Object(o.i)({type:Boolean})],s.prototype,"showIconAtEnd",void 0),Object(n.b)([Object(o.i)()],s.prototype,"icon",void 0),Object(n.b)([Object(o.i)()],s.prototype,"label",void 0);const r=o.e`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-fab{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12);display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:hidden;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);background-color:#018786;color:#fff;color:var(--mdc-theme-on-secondary, #fff)}.mdc-fab:not(.mdc-fab--extended){border-radius:50%}.mdc-fab::-moz-focus-inner{padding:0;border:0}.mdc-fab:hover,.mdc-fab:focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-fab:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0,0,0,.12)}.mdc-fab:active,.mdc-fab:focus{outline:none}.mdc-fab:hover{cursor:pointer}.mdc-fab>svg{width:100%}@supports not (-ms-ime-align: auto){.mdc-fab{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-fab .mdc-fab__icon{width:24px;height:24px;font-size:24px}.mdc-fab--mini{width:40px;height:40px}.mdc-fab--extended{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;border-radius:24px;padding:0 20px;width:auto;max-width:100%;height:48px}.mdc-fab--extended .mdc-fab__icon{margin-left:-8px;margin-right:12px}[dir=rtl] .mdc-fab--extended .mdc-fab__icon,.mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:-8px}.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:-8px}[dir=rtl] .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:-8px;margin-right:12px}.mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}.mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-fab{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-fab::before,.mdc-fab::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-fab::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-fab.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-fab.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-fab.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-fab.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-fab.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-fab::before,.mdc-fab::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-fab.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-fab::before,.mdc-fab::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-fab::before,.mdc-fab::after{background-color:var(--mdc-theme-on-secondary, #fff)}}.mdc-fab:hover::before{opacity:.08}.mdc-fab:not(.mdc-ripple-upgraded):focus::before,.mdc-fab.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.24}.mdc-fab:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-fab:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-fab.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}:host{outline:none}`;let l=class extends s{};l.styles=r,l=Object(n.b)([Object(o.f)("mwc-fab")],l)},242:function(t,e,i){"use strict";i(5),i(42),i(45);var n=i(123),o=i(6),a=i(3),s=i(62);const r=a.a`
<style>
  :host {
    display: inline-block;
    line-height: 0;
    white-space: nowrap;
    cursor: pointer;
    @apply --paper-font-common-base;
    --calculated-paper-radio-button-size: var(--paper-radio-button-size, 16px);
    /* -1px is a sentinel for the default and is replace in \`attached\`. */
    --calculated-paper-radio-button-ink-size: var(--paper-radio-button-ink-size, -1px);
  }

  :host(:focus) {
    outline: none;
  }

  #radioContainer {
    @apply --layout-inline;
    @apply --layout-center-center;
    position: relative;
    width: var(--calculated-paper-radio-button-size);
    height: var(--calculated-paper-radio-button-size);
    vertical-align: middle;

    @apply --paper-radio-button-radio-container;
  }

  #ink {
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    width: var(--calculated-paper-radio-button-ink-size);
    height: var(--calculated-paper-radio-button-ink-size);
    color: var(--paper-radio-button-unchecked-ink-color, var(--primary-text-color));
    opacity: 0.6;
    pointer-events: none;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  #ink[checked] {
    color: var(--paper-radio-button-checked-ink-color, var(--primary-color));
  }

  #offRadio, #onRadio {
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  #offRadio {
    border: 2px solid var(--paper-radio-button-unchecked-color, var(--primary-text-color));
    background-color: var(--paper-radio-button-unchecked-background-color, transparent);
    transition: border-color 0.28s;
  }

  #onRadio {
    background-color: var(--paper-radio-button-checked-color, var(--primary-color));
    -webkit-transform: scale(0);
    transform: scale(0);
    transition: -webkit-transform ease 0.28s;
    transition: transform ease 0.28s;
    will-change: transform;
  }

  :host([checked]) #offRadio {
    border-color: var(--paper-radio-button-checked-color, var(--primary-color));
  }

  :host([checked]) #onRadio {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }

  #radioLabel {
    line-height: normal;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin-left: var(--paper-radio-button-label-spacing, 10px);
    white-space: normal;
    color: var(--paper-radio-button-label-color, var(--primary-text-color));

    @apply --paper-radio-button-label;
  }

  :host([checked]) #radioLabel {
    @apply --paper-radio-button-label-checked;
  }

  #radioLabel:dir(rtl) {
    margin-left: 0;
    margin-right: var(--paper-radio-button-label-spacing, 10px);
  }

  #radioLabel[hidden] {
    display: none;
  }

  /* disabled state */

  :host([disabled]) #offRadio {
    border-color: var(--paper-radio-button-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled][checked]) #onRadio {
    background-color: var(--paper-radio-button-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled]) #radioLabel {
    /* slightly darker than the button, so that it's readable */
    opacity: 0.65;
  }
</style>

<div id="radioContainer">
  <div id="offRadio"></div>
  <div id="onRadio"></div>
</div>

<div id="radioLabel"><slot></slot></div>`;r.setAttribute("strip-whitespace",""),Object(o.a)({_template:r,is:"paper-radio-button",behaviors:[n.a],hostAttributes:{role:"radio","aria-checked":!1,tabindex:0},properties:{ariaActiveAttribute:{type:String,value:"aria-checked"}},ready:function(){this._rippleContainer=this.$.radioContainer},attached:function(){Object(s.a)(this,(function(){if("-1px"===this.getComputedStyleValue("--calculated-paper-radio-button-ink-size").trim()){var t=parseFloat(this.getComputedStyleValue("--calculated-paper-radio-button-size").trim()),e=Math.floor(3*t);e%2!=t%2&&e++,this.updateStyles({"--paper-radio-button-ink-size":e+"px"})}}))}})},244:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"a",(function(){return a}));i(5);var n=i(125);const o={hostAttributes:{role:"menubar"},keyBindings:{left:"_onLeftKey",right:"_onRightKey"},_onUpKey:function(t){this.focusedItem.click(),t.detail.keyboardEvent.preventDefault()},_onDownKey:function(t){this.focusedItem.click(),t.detail.keyboardEvent.preventDefault()},get _isRTL(){return"rtl"===window.getComputedStyle(this).direction},_onLeftKey:function(t){this._isRTL?this._focusNext():this._focusPrevious(),t.detail.keyboardEvent.preventDefault()},_onRightKey:function(t){this._isRTL?this._focusPrevious():this._focusNext(),t.detail.keyboardEvent.preventDefault()},_onKeydown:function(t){this.keyboardEventMatchesKeys(t,"up down left right esc")||this._focusWithKeyboardEvent(t)}},a=[n.a,o]},247:function(t,e,i){"use strict";i(215);var n=i(3),o=i(30);customElements.define("ha-textarea",class extends o.a{static get template(){return n.a`
      <style>
        :host {
          display: block;
        }
      </style>
      <paper-textarea label="[[label]]" value="{{value}}"></paper-textarea>
    `}static get properties(){return{name:String,label:String,value:{type:String,notify:!0}}}})},249:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));i(5);var n=i(1);const o={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(t,e){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),e)if("document"===t)this.scrollTarget=this._doc;else if("string"==typeof t){var i=this.domHost;this.scrollTarget=i&&i.$?i.$[t]:Object(n.a)(this.ownerDocument).querySelector("#"+t)}else this._isValidScrollTarget()&&(this._oldScrollTarget=t,this._toggleScrollListener(this._shouldHaveListener,t))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(t){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=t)},set _scrollLeft(t){this.scrollTarget===this._doc?window.scrollTo(t,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=t)},scroll:function(t,e){var i;"object"==typeof t?(i=t.left,e=t.top):i=t,i=i||0,e=e||0,this.scrollTarget===this._doc?window.scrollTo(i,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=i,this.scrollTarget.scrollTop=e)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(t,e){var i=e===this._doc?window:e;t?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),i.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(i.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(t){this._shouldHaveListener=t,this._toggleScrollListener(t,this.scrollTarget)}}},251:function(t,e,i){"use strict";i(5);var n=i(6),o=i(1),a=i(3);Object(n.a)({_template:a.a`
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
`,is:"paper-tooltip",hostAttributes:{role:"tooltip",tabindex:-1},properties:{for:{type:String,observer:"_findTarget"},manualMode:{type:Boolean,value:!1,observer:"_manualModeChanged"},position:{type:String,value:"bottom"},fitToVisibleBounds:{type:Boolean,value:!1},offset:{type:Number,value:14},marginTop:{type:Number,value:14},animationDelay:{type:Number,value:500,observer:"_delayChange"},animationEntry:{type:String,value:""},animationExit:{type:String,value:""},animationConfig:{type:Object,value:function(){return{entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]}}},_showing:{type:Boolean,value:!1}},listeners:{webkitAnimationEnd:"_onAnimationEnd"},get target(){var t=Object(o.a)(this).parentNode,e=Object(o.a)(this).getOwnerRoot();return this.for?Object(o.a)(e).querySelector("#"+this.for):t.nodeType==Node.DOCUMENT_FRAGMENT_NODE?e.host:t},attached:function(){this._findTarget()},detached:function(){this.manualMode||this._removeListeners()},playAnimation:function(t){"entry"===t?this.show():"exit"===t&&this.hide()},cancelAnimation:function(){this.$.tooltip.classList.add("cancel-animation")},show:function(){if(!this._showing){if(""===Object(o.a)(this).textContent.trim()){for(var t=!0,e=Object(o.a)(this).getEffectiveChildNodes(),i=0;i<e.length;i++)if(""!==e[i].textContent.trim()){t=!1;break}if(t)return}this._showing=!0,this.$.tooltip.classList.remove("hidden"),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.updatePosition(),this._animationPlaying=!0,this.$.tooltip.classList.add(this._getAnimationType("entry"))}},hide:function(){if(this._showing){if(this._animationPlaying)return this._showing=!1,void this._cancelAnimation();this._onAnimationFinish(),this._showing=!1,this._animationPlaying=!0}},updatePosition:function(){if(this._target&&this.offsetParent){var t=this.offset;14!=this.marginTop&&14==this.offset&&(t=this.marginTop);var e,i,n=this.offsetParent.getBoundingClientRect(),o=this._target.getBoundingClientRect(),a=this.getBoundingClientRect(),s=(o.width-a.width)/2,r=(o.height-a.height)/2,l=o.left-n.left,c=o.top-n.top;switch(this.position){case"top":e=l+s,i=c-a.height-t;break;case"bottom":e=l+s,i=c+o.height+t;break;case"left":e=l-a.width-t,i=c+r;break;case"right":e=l+o.width+t,i=c+r}this.fitToVisibleBounds?(n.left+e+a.width>window.innerWidth?(this.style.right="0px",this.style.left="auto"):(this.style.left=Math.max(0,e)+"px",this.style.right="auto"),n.top+i+a.height>window.innerHeight?(this.style.bottom=n.height-c+t+"px",this.style.top="auto"):(this.style.top=Math.max(-n.top,i)+"px",this.style.bottom="auto")):(this.style.left=e+"px",this.style.top=i+"px")}},_addListeners:function(){this._target&&(this.listen(this._target,"mouseenter","show"),this.listen(this._target,"focus","show"),this.listen(this._target,"mouseleave","hide"),this.listen(this._target,"blur","hide"),this.listen(this._target,"tap","hide")),this.listen(this.$.tooltip,"animationend","_onAnimationEnd"),this.listen(this,"mouseenter","hide")},_findTarget:function(){this.manualMode||this._removeListeners(),this._target=this.target,this.manualMode||this._addListeners()},_delayChange:function(t){500!==t&&this.updateStyles({"--paper-tooltip-delay-in":t+"ms"})},_manualModeChanged:function(){this.manualMode?this._removeListeners():this._addListeners()},_cancelAnimation:function(){this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add("hidden")},_onAnimationFinish:function(){this._showing&&(this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add(this._getAnimationType("exit")))},_onAnimationEnd:function(){this._animationPlaying=!1,this._showing||(this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.add("hidden"))},_getAnimationType:function(t){if("entry"===t&&""!==this.animationEntry)return this.animationEntry;if("exit"===t&&""!==this.animationExit)return this.animationExit;if(this.animationConfig[t]&&"string"==typeof this.animationConfig[t][0].name){if(this.animationConfig[t][0].timing&&this.animationConfig[t][0].timing.delay&&0!==this.animationConfig[t][0].timing.delay){var e=this.animationConfig[t][0].timing.delay;"entry"===t?this.updateStyles({"--paper-tooltip-delay-in":e+"ms"}):"exit"===t&&this.updateStyles({"--paper-tooltip-delay-out":e+"ms"})}return this.animationConfig[t][0].name}},_removeListeners:function(){this._target&&(this.unlisten(this._target,"mouseenter","show"),this.unlisten(this._target,"focus","show"),this.unlisten(this._target,"mouseleave","hide"),this.unlisten(this._target,"blur","hide"),this.unlisten(this._target,"tap","hide")),this.unlisten(this.$.tooltip,"animationend","_onAnimationEnd"),this.unlisten(this,"mouseenter","hide")}})},254:function(t,e,i){"use strict";i(206);var n=i(3);i(30);customElements.define("ha-app-layout",class extends(customElements.get("app-header-layout")){static get template(){return n.a`
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
    `}})},257:function(t,e,i){"use strict";i(5),i(31),i(242);var n=i(244),o=i(90),a=i(6),s=i(3);Object(a.a)({_template:s.a`
    <style>
      :host {
        display: inline-block;
      }

      :host ::slotted(*) {
        padding: var(--paper-radio-group-item-padding, 12px);
      }
    </style>

    <slot></slot>
`,is:"paper-radio-group",behaviors:[n.a],hostAttributes:{role:"radiogroup"},properties:{attrForSelected:{type:String,value:"name"},selectedAttribute:{type:String,value:"checked"},selectable:{type:String,value:"paper-radio-button"},allowEmptySelection:{type:Boolean,value:!1}},select:function(t){var e=this._valueToItem(t);if(!e||!e.hasAttribute("disabled")){if(this.selected){var i=this._valueToItem(this.selected);if(this.selected==t){if(!this.allowEmptySelection)return void(i&&(i.checked=!0));t=""}i&&(i.checked=!1)}o.a.select.apply(this,[t]),this.fire("paper-radio-group-changed")}},_activateFocusedItem:function(){this._itemActivate(this._valueForItem(this.focusedItem),this.focusedItem)},_onUpKey:function(t){this._focusPrevious(),t.preventDefault(),this._activateFocusedItem()},_onDownKey:function(t){this._focusNext(),t.preventDefault(),this._activateFocusedItem()},_onLeftKey:function(t){n.b._onLeftKey.apply(this,arguments),this._activateFocusedItem()},_onRightKey:function(t){n.b._onRightKey.apply(this,arguments),this._activateFocusedItem()}})},259:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));i(5);var n=i(249),o=i(260);const a=[n.a,{properties:{effects:{type:String},effectsConfig:{type:Object,value:function(){return{}}},disabled:{type:Boolean,reflectToAttribute:!0,value:!1},threshold:{type:Number,value:0},thresholdTriggered:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0}},observers:["_effectsChanged(effects, effectsConfig, isAttached)"],_updateScrollState:function(t){},isOnScreen:function(){return!1},isContentBelow:function(){return!1},_effectsRunFn:null,_effects:null,get _clampedScrollTop(){return Math.max(0,this._scrollTop)},attached:function(){this._scrollStateChanged()},detached:function(){this._tearDownEffects()},createEffect:function(t,e){var i=o.a[t];if(!i)throw new ReferenceError(this._getUndefinedMsg(t));var n=this._boundEffect(i,e||{});return n.setUp(),n},_effectsChanged:function(t,e,i){this._tearDownEffects(),t&&i&&(t.split(" ").forEach((function(t){var i;""!==t&&((i=o.a[t])?this._effects.push(this._boundEffect(i,e[t])):console.warn(this._getUndefinedMsg(t)))}),this),this._setUpEffect())},_layoutIfDirty:function(){return this.offsetWidth},_boundEffect:function(t,e){e=e||{};var i=parseFloat(e.startsAt||0),n=parseFloat(e.endsAt||1),o=n-i,a=function(){},s=0===i&&1===n?t.run:function(e,n){t.run.call(this,Math.max(0,(e-i)/o),n)};return{setUp:t.setUp?t.setUp.bind(this,e):a,run:t.run?s.bind(this):a,tearDown:t.tearDown?t.tearDown.bind(this):a}},_setUpEffect:function(){this.isAttached&&this._effects&&(this._effectsRunFn=[],this._effects.forEach((function(t){!1!==t.setUp()&&this._effectsRunFn.push(t.run)}),this))},_tearDownEffects:function(){this._effects&&this._effects.forEach((function(t){t.tearDown()})),this._effectsRunFn=[],this._effects=[]},_runEffects:function(t,e){this._effectsRunFn&&this._effectsRunFn.forEach((function(i){i(t,e)}))},_scrollHandler:function(){this._scrollStateChanged()},_scrollStateChanged:function(){if(!this.disabled){var t=this._clampedScrollTop;this._updateScrollState(t),this.threshold>0&&this._setThresholdTriggered(t>=this.threshold)}},_getDOMRef:function(t){console.warn("_getDOMRef","`"+t+"` is undefined")},_getUndefinedMsg:function(t){return"Scroll effect `"+t+"` is undefined. Did you forget to import app-layout/app-scroll-effects/effects/"+t+".html ?"}}]},260:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return o}));i(5);const n={};const o=function(t,e){if(null!=n[t])throw new Error("effect `"+t+"` is already registered.");n[t]=e}},275:function(t,e,i){"use strict";var n=i(3),o=i(30),a=(i(108),i(93),i(143),i(211),i(118));customElements.define("ha-combo-box",class extends(Object(a.a)(o.a)){static get template(){return n.a`
      <style>
        paper-input > paper-icon-button {
          width: 24px;
          height: 24px;
          padding: 2px;
          color: var(--secondary-text-color);
        }
        [hidden] {
          display: none;
        }
      </style>
      <vaadin-combo-box-light
        items="[[_items]]"
        item-value-path="[[itemValuePath]]"
        item-label-path="[[itemLabelPath]]"
        value="{{value}}"
        opened="{{opened}}"
        allow-custom-value="[[allowCustomValue]]"
        on-change="_fireChanged"
      >
        <paper-input
          autofocus="[[autofocus]]"
          label="[[label]]"
          class="input"
          value="[[value]]"
        >
          <paper-icon-button
            slot="suffix"
            class="clear-button"
            icon="hass:close"
            hidden$="[[!value]]"
            >Clear</paper-icon-button
          >
          <paper-icon-button
            slot="suffix"
            class="toggle-button"
            icon="[[_computeToggleIcon(opened)]]"
            hidden$="[[!items.length]]"
            >Toggle</paper-icon-button
          >
        </paper-input>
        <template>
          <style>
            paper-item {
              margin: -5px -10px;
              padding: 0;
            }
          </style>
          <paper-item>[[_computeItemLabel(item, itemLabelPath)]]</paper-item>
        </template>
      </vaadin-combo-box-light>
    `}static get properties(){return{allowCustomValue:Boolean,items:{type:Object,observer:"_itemsChanged"},_items:Object,itemLabelPath:String,itemValuePath:String,autofocus:Boolean,label:String,opened:{type:Boolean,value:!1,observer:"_openedChanged"},value:{type:String,notify:!0}}}_openedChanged(t){t||(this._items=this.items)}_itemsChanged(t){this.opened||(this._items=t)}_computeToggleIcon(t){return t?"hass:menu-up":"hass:menu-down"}_computeItemLabel(t,e){return e?t[e]:t}_fireChanged(t){t.stopPropagation(),this.fire("change")}});var s=i(175);customElements.define("ha-service-picker",class extends(Object(s.a)(o.a)){static get template(){return n.a`
      <ha-combo-box
        label="[[localize('ui.components.service-picker.service')]]"
        items="[[_services]]"
        value="{{value}}"
        allow-custom-value=""
      ></ha-combo-box>
    `}static get properties(){return{hass:{type:Object,observer:"_hassChanged"},_services:Array,value:{type:String,notify:!0}}}_hassChanged(t,e){if(!t)return void(this._services=[]);if(e&&t.services===e.services)return;const i=[];Object.keys(t.services).sort().forEach(e=>{const n=Object.keys(t.services[e]).sort();for(let t=0;t<n.length;t++)i.push(`${e}.${n[t]}`)}),this._services=i}})},283:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"d",(function(){return s})),i.d(e,"a",(function(){return r})),i.d(e,"e",(function(){return l})),i.d(e,"f",(function(){return c})),i.d(e,"g",(function(){return d}));var n=i(176);const o=(t,e)=>t.callWS({type:"device_automation/action/list",device_id:e}),a=(t,e)=>t.callWS({type:"device_automation/condition/list",device_id:e}),s=(t,e)=>t.callWS({type:"device_automation/trigger/list",device_id:e}),r=(t,e)=>{if(typeof t!=typeof e)return!1;for(const i in t)if(!Object.is(t[i],e[i]))return!1;for(const i in e)if(!Object.is(t[i],e[i]))return!1;return!0},l=(t,e)=>{const i=e.entity_id?t.states[e.entity_id]:void 0;return t.localize(`component.${e.domain}.device_automation.action_type.${e.type}`,"entity_name",i?Object(n.a)(i):"<unknown>","subtype",t.localize(`component.${e.domain}.device_automation.action_subtype.${e.subtype}`))},c=(t,e)=>{const i=e.entity_id?t.states[e.entity_id]:void 0;return t.localize(`component.${e.domain}.device_automation.condition_type.${e.type}`,"entity_name",i?Object(n.a)(i):"<unknown>","subtype",t.localize(`component.${e.domain}.device_automation.condition_subtype.${e.subtype}`))},d=(t,e)=>{const i=e.entity_id?t.states[e.entity_id]:void 0;return t.localize(`component.${e.domain}.device_automation.trigger_type.${e.type}`,"entity_name",i?Object(n.a)(i):"<unknown>","subtype",t.localize(`component.${e.domain}.device_automation.trigger_subtype.${e.subtype}`))}},309:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i(4),o=(i(93),i(143),i(181),i(144),i(0)),a=i(18),s=i(283);i(224);const r="NO_AUTOMATION",l="UNKNOWN_AUTOMATION";class c extends o.a{constructor(t,e,i){super(),this.NO_AUTOMATION_TEXT="No automations",this.UNKNOWN_AUTOMATION_TEXT="Unknown automation",this._automations=[],this._renderEmpty=!1,this._localizeDeviceAutomation=t,this._fetchDeviceAutomations=e,this._createNoAutomation=i}get _key(){if(!this.value||Object(s.a)(this._createNoAutomation(this.deviceId),this.value))return r;const t=this._automations.findIndex(t=>Object(s.a)(t,this.value));return-1===t?l:`${this._automations[t].device_id}_${t}`}render(){return this._renderEmpty?o.f``:o.f`
      <ha-paper-dropdown-menu
        .label=${this.label}
        .value=${this.value?this._localizeDeviceAutomation(this.hass,this.value):""}
        ?disabled=${0===this._automations.length}
      >
        <paper-listbox
          slot="dropdown-content"
          .selected=${this._key}
          attr-for-selected="key"
          @iron-select=${this._automationChanged}
        >
          <paper-item
            key=${r}
            .automation=${this._createNoAutomation(this.deviceId)}
            hidden
          >
            ${this.NO_AUTOMATION_TEXT}
          </paper-item>
          <paper-item
            key=${l}
            .automation=${this.value}
            hidden
          >
            ${this.UNKNOWN_AUTOMATION_TEXT}
          </paper-item>
          ${this._automations.map((t,e)=>o.f`
              <paper-item
                key=${`${this.deviceId}_${e}`}
                .automation=${t}
              >
                ${this._localizeDeviceAutomation(this.hass,t)}
              </paper-item>
            `)}
        </paper-listbox>
      </ha-paper-dropdown-menu>
    `}updated(t){if(super.updated(t),t.has("deviceId")&&this._updateDeviceInfo(),t.has("value")||t.has("_renderEmpty")){const t=this.shadowRoot.querySelector("paper-listbox");t&&t._selectSelected(this._key)}}async _updateDeviceInfo(){this._automations=this.deviceId?await this._fetchDeviceAutomations(this.hass,this.deviceId):[],this.value&&this.value.device_id===this.deviceId||this._setValue(this._automations.length?this._automations[0]:this._createNoAutomation(this.deviceId)),this._renderEmpty=!0,await this.updateComplete,this._renderEmpty=!1}_automationChanged(t){this._setValue(t.detail.item.automation)}_setValue(t){this.value&&Object(s.a)(t,this.value)||(this.value=t,setTimeout(()=>{Object(a.a)(this,"change")},0))}static get styles(){return o.c`
      ha-paper-dropdown-menu {
        width: 100%;
      }
      paper-listbox {
        min-width: 200px;
      }
      paper-item {
        cursor: pointer;
      }
    `}}Object(n.b)([Object(o.g)()],c.prototype,"hass",void 0),Object(n.b)([Object(o.g)()],c.prototype,"label",void 0),Object(n.b)([Object(o.g)()],c.prototype,"deviceId",void 0),Object(n.b)([Object(o.g)()],c.prototype,"value",void 0),Object(n.b)([Object(o.g)()],c.prototype,"_automations",void 0),Object(n.b)([Object(o.g)()],c.prototype,"_renderEmpty",void 0)},310:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i(183);i(247);class o extends n.Component{constructor(t){super(t),this.state={isvalid:!0,value:JSON.stringify(t.value||{},null,2)},this.onChange=this.onChange.bind(this)}onChange(t){const e=t.target.value;let i,n;try{i=JSON.parse(e),n=!0}catch(o){n=!1}this.setState({value:e,isValid:n}),n&&this.props.onChange(i)}componentWillReceiveProps({value:t}){t!==this.props.value&&this.setState({value:JSON.stringify(t,null,2),isValid:!0})}render({label:t},{value:e,isValid:i}){const o={minWidth:300,width:"100%"};return i||(o.border="1px solid red"),Object(n.h)("ha-textarea",{label:t,value:e,style:o,"onvalue-changed":this.onChange,dir:"ltr"})}}},314:function(t,e,i){"use strict";var n=i(4),o=(i(93),i(143),i(181),i(228),i(144),i(124)),a=i(0);const s=t=>(class extends t{static get properties(){return{hass:{}}}connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){if(super.disconnectedCallback(),this.__unsubs){for(;this.__unsubs.length;)this.__unsubs.pop()();this.__unsubs=void 0}}updated(t){super.updated(t),t.has("hass")&&this.__checkSubscribed()}hassSubscribe(){return super.hassSubscribe(),[]}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}});var r=i(18),l=i(222),c=i(198);let d=class extends(s(a.a)){constructor(){super(...arguments),this._sortedDevices=Object(o.a)(t=>{if(!t||1===t.length)return t||[];const e=[...t];return e.sort((t,e)=>Object(c.b)(t.name||"",e.name||"")),e})}hassSubscribe(){return[Object(l.a)(this.hass.connection,t=>{this.devices=t})]}render(){return a.f`
      <paper-dropdown-menu-light .label=${this.label}>
        <paper-listbox
          slot="dropdown-content"
          .selected=${this._value}
          attr-for-selected="data-device-id"
          @iron-select=${this._deviceChanged}
        >
          <paper-item data-device-id="">
            No device
          </paper-item>
          ${this._sortedDevices(this.devices).map(t=>a.f`
              <paper-item data-device-id=${t.id}>
                ${t.name_by_user||t.name}
              </paper-item>
            `)}
        </paper-listbox>
      </paper-dropdown-menu-light>
    `}get _value(){return this.value||""}_deviceChanged(t){const e=t.detail.item.dataset.deviceId;e!==this._value&&(this.value=e,setTimeout(()=>{Object(r.a)(this,"value-changed",{value:e}),Object(r.a)(this,"change")},0))}static get styles(){return a.c`
      paper-dropdown-menu-light {
        width: 100%;
      }
      paper-listbox {
        min-width: 200px;
      }
      paper-item {
        cursor: pointer;
      }
    `}};Object(n.b)([Object(a.g)()],d.prototype,"hass",void 0),Object(n.b)([Object(a.g)()],d.prototype,"label",void 0),Object(n.b)([Object(a.g)()],d.prototype,"value",void 0),Object(n.b)([Object(a.g)()],d.prototype,"devices",void 0),d=Object(n.b)([Object(a.d)("ha-device-picker")],d)},334:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i(183),o=(i(93),i(190),i(210));class a extends n.Component{constructor(){super(),this.onChange=o.a.bind(this,"condition"),this.entityPicked=this.entityPicked.bind(this)}entityPicked(t){this.props.onChange(this.props.index,Object.assign(Object.assign({},this.props.condition),{entity_id:t.target.value}))}render({condition:t,hass:e,localize:i}){const{entity_id:o,state:a}=t,s=t.for;return Object(n.h)("div",null,Object(n.h)("ha-entity-picker",{value:o,onChange:this.entityPicked,hass:e,allowCustomEntity:!0}),Object(n.h)("paper-input",{label:i("ui.panel.config.automation.editor.conditions.type.state.state"),name:"state",value:a,"onvalue-changed":this.onChange}),s&&Object(n.h)("pre",null,"For: ",JSON.stringify(s,null,2)))}}a.defaultConfig={entity_id:"",state:""}},363:function(t,e,i){"use strict";function n(t){return"latitude"in t.attributes&&"longitude"in t.attributes}i.d(e,"a",(function(){return n}))},368:function(t,e,i){"use strict";var n=i(183),o=(i(228),i(144),i(143),i(314),i(4)),a=i(0),s=i(283),r=(i(224),i(309));let l=class extends r.a{constructor(){super(s.f,s.c,t=>({device_id:t||"",condition:"device",domain:"",entity_id:""})),this.NO_AUTOMATION_TEXT="No conditions",this.UNKNOWN_AUTOMATION_TEXT="Unknown condition"}};l=Object(o.b)([Object(a.d)("ha-device-condition-picker")],l);class c extends n.Component{constructor(){super(),this.devicePicked=this.devicePicked.bind(this),this.deviceConditionPicked=this.deviceConditionPicked.bind(this),this.state={device_id:void 0}}devicePicked(t){this.setState({device_id:t.target.value})}deviceConditionPicked(t){const e=t.target.value;this.props.onChange(this.props.index,e)}render({condition:t,hass:e},{device_id:i}){return void 0===i&&(i=t.device_id),Object(n.h)("div",null,Object(n.h)("ha-device-picker",{value:i,onChange:this.devicePicked,hass:e,label:"Device"}),Object(n.h)("ha-device-condition-picker",{value:t,deviceId:i,onChange:this.deviceConditionPicked,hass:e,label:"Condition"}))}}c.defaultConfig={device_id:"",domain:"",entity_id:""};i(93),i(247),i(190);var d=i(210);class h extends n.Component{constructor(){super(),this.onChange=d.a.bind(this,"condition"),this.entityPicked=this.entityPicked.bind(this)}entityPicked(t){this.props.onChange(this.props.index,Object.assign(Object.assign({},this.props.condition),{entity_id:t.target.value}))}render({condition:t,hass:e,localize:i}){const{value_template:o,entity_id:a,below:s,above:r}=t;return Object(n.h)("div",null,Object(n.h)("ha-entity-picker",{value:a,onChange:this.entityPicked,hass:e,allowCustomEntity:!0}),Object(n.h)("paper-input",{label:i("ui.panel.config.automation.editor.conditions.type.numeric_state.above"),name:"above",value:r,"onvalue-changed":this.onChange}),Object(n.h)("paper-input",{label:i("ui.panel.config.automation.editor.conditions.type.numeric_state.below"),name:"below",value:s,"onvalue-changed":this.onChange}),Object(n.h)("ha-textarea",{label:i("ui.panel.config.automation.editor.conditions.type.numeric_state.value_template"),name:"value_template",value:o,"onvalue-changed":this.onChange,dir:"ltr"}))}}h.defaultConfig={entity_id:""};var p=i(334);i(242),i(257);class u extends n.Component{constructor(){super(),this.onChange=d.a.bind(this,"condition"),this.afterPicked=this.radioGroupPicked.bind(this,"after"),this.beforePicked=this.radioGroupPicked.bind(this,"before")}radioGroupPicked(t,e){const i=Object.assign({},this.props.condition);e.target.selected?i[t]=e.target.selected:delete i[t],this.props.onChange(this.props.index,i)}render({condition:t,localize:e}){const{after:i,after_offset:o,before:a,before_offset:s}=t;return Object(n.h)("div",null,Object(n.h)("label",{id:"beforelabel"},e("ui.panel.config.automation.editor.conditions.type.sun.before")),Object(n.h)("paper-radio-group",{"allow-empty-selection":!0,selected:a,"aria-labelledby":"beforelabel","onpaper-radio-group-changed":this.beforePicked},Object(n.h)("paper-radio-button",{name:"sunrise"},e("ui.panel.config.automation.editor.conditions.type.sun.sunrise")),Object(n.h)("paper-radio-button",{name:"sunset"},e("ui.panel.config.automation.editor.conditions.type.sun.sunset"))),Object(n.h)("paper-input",{label:e("ui.panel.config.automation.editor.conditions.type.sun.before_offset"),name:"before_offset",value:s,"onvalue-changed":this.onChange,disabled:void 0===a}),Object(n.h)("label",{id:"afterlabel"},e("ui.panel.config.automation.editor.conditions.type.sun.after")),Object(n.h)("paper-radio-group",{"allow-empty-selection":!0,selected:i,"aria-labelledby":"afterlabel","onpaper-radio-group-changed":this.afterPicked},Object(n.h)("paper-radio-button",{name:"sunrise"},e("ui.panel.config.automation.editor.conditions.type.sun.sunrise")),Object(n.h)("paper-radio-button",{name:"sunset"},e("ui.panel.config.automation.editor.conditions.type.sun.sunset"))),Object(n.h)("paper-input",{label:e("ui.panel.config.automation.editor.conditions.type.sun.after_offset"),name:"after_offset",value:o,"onvalue-changed":this.onChange,disabled:void 0===i}))}}u.defaultConfig={};class m extends n.Component{constructor(){super(),this.onChange=d.a.bind(this,"condition")}render({condition:t,localize:e}){const{value_template:i}=t;return Object(n.h)("div",null,Object(n.h)("ha-textarea",{label:e("ui.panel.config.automation.editor.conditions.type.template.value_template"),name:"value_template",value:i,"onvalue-changed":this.onChange,dir:"ltr"}))}}m.defaultConfig={value_template:""};class g extends n.Component{constructor(){super(),this.onChange=d.a.bind(this,"condition")}render({condition:t,localize:e}){const{after:i,before:o}=t;return Object(n.h)("div",null,Object(n.h)("paper-input",{label:e("ui.panel.config.automation.editor.conditions.type.time.after"),name:"after",value:i,"onvalue-changed":this.onChange}),Object(n.h)("paper-input",{label:e("ui.panel.config.automation.editor.conditions.type.time.before"),name:"before",value:o,"onvalue-changed":this.onChange}))}}g.defaultConfig={};var f=i(363),b=i(180);function _(t){return Object(f.a)(t)&&"zone"!==Object(b.a)(t)}class v extends n.Component{constructor(){super(),this.entityPicked=this.entityPicked.bind(this),this.zonePicked=this.zonePicked.bind(this)}entityPicked(t){this.props.onChange(this.props.index,Object.assign(Object.assign({},this.props.condition),{entity_id:t.target.value}))}zonePicked(t){this.props.onChange(this.props.index,Object.assign(Object.assign({},this.props.condition),{zone:t.target.value}))}render({condition:t,hass:e,localize:i}){const{entity_id:o,zone:a}=t;return Object(n.h)("div",null,Object(n.h)("ha-entity-picker",{label:i("ui.panel.config.automation.editor.conditions.type.zone.entity"),value:o,onChange:this.entityPicked,hass:e,allowCustomEntity:!0,entityFilter:_}),Object(n.h)("ha-entity-picker",{label:i("ui.panel.config.automation.editor.conditions.type.zone.zone"),value:a,onChange:this.zonePicked,hass:e,allowCustomEntity:!0,domainFilter:"zone"}))}}v.defaultConfig={entity_id:"",zone:""},i.d(e,"a",(function(){return w}));const y={device:c,state:p.a,numeric_state:h,sun:u,template:m,time:g,zone:v},x=Object.keys(y).sort();class w extends n.Component{constructor(){super(),this.typeChanged=this.typeChanged.bind(this)}typeChanged(t){const e=t.target.selectedItem.attributes.condition.value;e!==this.props.condition.condition&&this.props.onChange(this.props.index,Object.assign({condition:e},y[e].defaultConfig))}render({index:t,condition:e,onChange:i,hass:o,localize:a}){const s=y[e.condition],r=x.indexOf(e.condition);return s?Object(n.h)("div",null,Object(n.h)("paper-dropdown-menu-light",{label:a("ui.panel.config.automation.editor.conditions.type_select"),"no-animations":!0},Object(n.h)("paper-listbox",{slot:"dropdown-content",selected:r,"oniron-select":this.typeChanged},x.map(t=>Object(n.h)("paper-item",{condition:t},a(`ui.panel.config.automation.editor.conditions.type.${t}.label`))))),Object(n.h)(s,{index:t,condition:e,onChange:i,hass:o,localize:a})):Object(n.h)("div",null,a("ui.panel.config.automation.editor.conditions.unsupported_condition","condition",e.condition),Object(n.h)("pre",null,JSON.stringify(e,null,2)))}}},410:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i(183);function o(t){Object(n.render)(()=>null,t)}},425:function(t,e,i){"use strict";var n=i(183),o=(i(85),i(177),i(147),i(108),i(143),i(144),i(228),i(275),i(310));class a extends n.Component{constructor(){super(),this.serviceChanged=this.serviceChanged.bind(this),this.serviceDataChanged=this.serviceDataChanged.bind(this)}serviceChanged(t){this.props.onChange(this.props.index,Object.assign(Object.assign({},this.props.action),{service:t.target.value}))}serviceDataChanged(t){this.props.onChange(this.props.index,Object.assign(Object.assign({},this.props.action),{data:t}))}render({action:t,hass:e,localize:i}){const{service:a,data:s}=t;return Object(n.h)("div",null,Object(n.h)("ha-service-picker",{hass:e,value:a,onChange:this.serviceChanged}),Object(n.h)(o.a,{label:i("ui.panel.config.automation.editor.actions.type.service.service_data"),value:s,onChange:this.serviceDataChanged}))}}a.defaultConfig={alias:"",service:"",data:{}};var s=i(334),r=i(368);class l extends n.Component{render({action:t,index:e,onChange:i,hass:o,localize:a}){return Object(n.h)(r.a,{condition:t,onChange:i,index:e,hass:o,localize:a})}}l.defaultConfig=Object.assign({condition:"state"},s.a.defaultConfig);i(93);var c=i(210);class d extends n.Component{constructor(){super(),this.onChange=c.a.bind(this,"action")}render({action:t,localize:e}){const{delay:i}=t;return Object(n.h)("div",null,Object(n.h)("paper-input",{label:e("ui.panel.config.automation.editor.actions.type.delay.delay"),name:"delay",value:i,"onvalue-changed":this.onChange}))}}d.defaultConfig={delay:""};i(314);var h=i(4),p=i(0),u=i(283),m=(i(224),i(309));let g=class extends m.a{constructor(){super(u.e,u.b,t=>({device_id:t||"",domain:"",entity_id:""})),this.NO_AUTOMATION_TEXT="No actions",this.UNKNOWN_AUTOMATION_TEXT="Unknown action"}};g=Object(h.b)([Object(p.d)("ha-device-action-picker")],g);class f extends n.Component{constructor(){super(),this.devicePicked=this.devicePicked.bind(this),this.deviceActionPicked=this.deviceActionPicked.bind(this),this.state={device_id:void 0}}render(){const{action:t,hass:e}=this.props,i=this.state.device_id||t.device_id;return Object(n.h)("div",null,Object(n.h)("ha-device-picker",{value:i,onChange:this.devicePicked,hass:e,label:"Device"}),Object(n.h)("ha-device-action-picker",{value:t,deviceId:i,onChange:this.deviceActionPicked,hass:e,label:"Action"}))}devicePicked(t){this.setState({device_id:t.target.value})}deviceActionPicked(t){const e=Object.assign({},t.target.value);this.props.onChange(this.props.index,e)}}f.defaultConfig={device_id:"",domain:"",entity_id:""};i(247);class b extends n.Component{constructor(){super(),this.onChange=c.a.bind(this,"action"),this.onTemplateChange=this.onTemplateChange.bind(this)}onTemplateChange(t){this.props.onChange(this.props.index,Object.assign(Object.assign({},this.props.action),{[t.target.getAttribute("name")]:t.target.value}))}render({action:t,localize:e}){const{wait_template:i,timeout:o}=t;return Object(n.h)("div",null,Object(n.h)("ha-textarea",{label:e("ui.panel.config.automation.editor.actions.type.wait_template.wait_template"),name:"wait_template",value:i,"onvalue-changed":this.onTemplateChange,dir:"ltr"}),Object(n.h)("paper-input",{label:e("ui.panel.config.automation.editor.actions.type.wait_template.timeout"),name:"timeout",value:o,"onvalue-changed":this.onChange}))}}b.defaultConfig={wait_template:"",timeout:""};const _={service:a,delay:d,wait_template:b,condition:l,event:class extends n.Component{constructor(){super(),this.onChange=c.a.bind(this,"action"),this.serviceDataChanged=this.serviceDataChanged.bind(this)}static get defaultConfig(){return{event:"",event_data:{}}}render(){const{action:{event:t,event_data:e},localize:i}=this.props;return Object(n.h)("div",null,Object(n.h)("paper-input",{label:i("ui.panel.config.automation.editor.actions.type.event.event"),name:"event",value:t,"onvalue-changed":this.onChange}),Object(n.h)(o.a,{label:i("ui.panel.config.automation.editor.actions.type.event.service_data"),value:e,onChange:this.serviceDataChanged}))}serviceDataChanged(t){this.props.onChange(this.props.index,Object.assign(Object.assign({},this.props.action),{event_data:t}))}},device_id:f},v=Object.keys(_).sort();function y(t){const e=Object.keys(_);for(let i=0;i<e.length;i++)if(e[i]in t)return e[i];return null}class x extends n.Component{constructor(){super(),this.typeChanged=this.typeChanged.bind(this)}typeChanged(t){const e=t.target.selectedItem.attributes.action.value;y(this.props.action)!==e&&this.props.onChange(this.props.index,_[e].defaultConfig)}render({index:t,action:e,onChange:i,hass:o,localize:a}){const s=y(e),r=s&&_[s],l=v.indexOf(s);return r?Object(n.h)("div",null,Object(n.h)("paper-dropdown-menu-light",{label:a("ui.panel.config.automation.editor.actions.type_select"),"no-animations":!0},Object(n.h)("paper-listbox",{slot:"dropdown-content",selected:l,"oniron-select":this.typeChanged},v.map(t=>Object(n.h)("paper-item",{action:t},a(`ui.panel.config.automation.editor.actions.type.${t}.label`))))),Object(n.h)(r,{index:t,action:e,onChange:i,hass:o,localize:a})):Object(n.h)("div",null,a("ui.panel.config.automation.editor.actions.unsupported_action","action",s),Object(n.h)("pre",null,JSON.stringify(e,null,2)))}}class w extends n.Component{constructor(){super(),this.onDelete=this.onDelete.bind(this)}onDelete(){confirm(this.props.localize("ui.panel.config.automation.editor.actions.delete_confirm"))&&this.props.onChange(this.props.index,null)}render(t){return Object(n.h)("ha-card",null,Object(n.h)("div",{class:"card-content"},Object(n.h)("div",{class:"card-menu"},Object(n.h)("paper-menu-button",{"no-animations":!0,"horizontal-align":"right","horizontal-offset":"-5","vertical-offset":"-5"},Object(n.h)("paper-icon-button",{icon:"hass:dots-vertical",slot:"dropdown-trigger"}),Object(n.h)("paper-listbox",{slot:"dropdown-content"},Object(n.h)("paper-item",{disabled:!0},t.localize("ui.panel.config.automation.editor.actions.duplicate")),Object(n.h)("paper-item",{onTap:this.onDelete},t.localize("ui.panel.config.automation.editor.actions.delete"))))),Object(n.h)(x,Object.assign({},t))))}}i.d(e,"a",(function(){return C}));class C extends n.Component{constructor(){super(),this.addAction=this.addAction.bind(this),this.actionChanged=this.actionChanged.bind(this)}addAction(){const t=this.props.script.concat({service:""});this.props.onChange(t)}actionChanged(t,e){const i=this.props.script.concat();null===e?i.splice(t,1):i[t]=e,this.props.onChange(i)}render({script:t,hass:e,localize:i}){return Object(n.h)("div",{class:"script"},t.map((t,o)=>Object(n.h)(w,{index:o,action:t,onChange:this.actionChanged,hass:e,localize:i})),Object(n.h)("ha-card",null,Object(n.h)("div",{class:"card-actions add-card"},Object(n.h)("mwc-button",{onTap:this.addAction},i("ui.panel.config.automation.editor.actions.add")))))}}},717:function(t,e,i){"use strict";i.r(e);i(234);var n=i(3),o=i(30),a=i(0),s=(i(220),i(150),i(108),i(73)),r=i(183),l=(i(232),i(131),i(254),i(93),i(195),i(177),i(85),i(147),i(143),i(144),i(228),i(314),i(4)),c=i(283),d=(i(224),i(309));let h=class extends d.a{constructor(){super(c.g,c.d,t=>({device_id:t||"",platform:"device",domain:"",entity_id:""})),this.NO_AUTOMATION_TEXT="No triggers",this.UNKNOWN_AUTOMATION_TEXT="Unknown trigger"}};h=Object(l.b)([Object(a.d)("ha-device-trigger-picker")],h);class p extends r.Component{constructor(){super(),this.devicePicked=this.devicePicked.bind(this),this.deviceTriggerPicked=this.deviceTriggerPicked.bind(this),this.state={device_id:void 0}}devicePicked(t){this.setState({device_id:t.target.value})}deviceTriggerPicked(t){const e=t.target.value;this.props.onChange(this.props.index,e)}render({trigger:t,hass:e},{device_id:i}){return void 0===i&&(i=t.device_id),Object(r.h)("div",null,Object(r.h)("ha-device-picker",{value:i,onChange:this.devicePicked,hass:e,label:"Device"}),Object(r.h)("ha-device-trigger-picker",{value:t,deviceId:i,onChange:this.deviceTriggerPicked,hass:e,label:"Trigger"}))}}p.defaultConfig={device_id:"",domain:"",entity_id:""};var u=i(310),m=i(210);class g extends r.Component{constructor(){super(),this.onChange=m.a.bind(this,"trigger"),this.eventDataChanged=this.eventDataChanged.bind(this)}eventDataChanged(t){this.props.onChange(this.props.index,Object.assign(Object.assign({},this.props.trigger),{event_data:t}))}render({trigger:t,localize:e}){const{event_type:i,event_data:n}=t;return Object(r.h)("div",null,Object(r.h)("paper-input",{label:e("ui.panel.config.automation.editor.triggers.type.event.event_type"),name:"event_type",value:i,"onvalue-changed":this.onChange}),Object(r.h)(u.a,{label:e("ui.panel.config.automation.editor.triggers.type.event.event_data"),value:n,onChange:this.eventDataChanged}))}}g.defaultConfig={event_type:"",event_data:{}};i(242),i(257),i(190);class f extends r.Component{constructor(){super(),this.onChange=m.a.bind(this,"trigger"),this.zonePicked=this.zonePicked.bind(this),this.radioGroupPicked=this.radioGroupPicked.bind(this)}zonePicked(t){this.props.onChange(this.props.index,Object.assign(Object.assign({},this.props.trigger),{zone:t.target.value}))}radioGroupPicked(t){this.props.onChange(this.props.index,Object.assign(Object.assign({},this.props.trigger),{event:t.target.selected}))}render({trigger:t,hass:e,localize:i}){const{source:n,zone:o,event:a}=t;return Object(r.h)("div",null,Object(r.h)("paper-input",{label:i("ui.panel.config.automation.editor.triggers.type.geo_location.source"),name:"source",value:n,"onvalue-changed":this.onChange}),Object(r.h)("ha-entity-picker",{label:i("ui.panel.config.automation.editor.triggers.type.geo_location.zone"),value:o,onChange:this.zonePicked,hass:e,allowCustomEntity:!0,domainFilter:"zone"}),Object(r.h)("label",{id:"eventlabel"},i("ui.panel.config.automation.editor.triggers.type.geo_location.event")),Object(r.h)("paper-radio-group",{selected:a,"aria-labelledby":"eventlabel","onpaper-radio-group-changed":this.radioGroupPicked},Object(r.h)("paper-radio-button",{name:"enter"},i("ui.panel.config.automation.editor.triggers.type.geo_location.enter")),Object(r.h)("paper-radio-button",{name:"leave"},i("ui.panel.config.automation.editor.triggers.type.geo_location.leave"))))}}f.defaultConfig={source:"",zone:"",event:"enter"};class b extends r.Component{constructor(){super(),this.radioGroupPicked=this.radioGroupPicked.bind(this)}radioGroupPicked(t){this.props.onChange(this.props.index,Object.assign(Object.assign({},this.props.trigger),{event:t.target.selected}))}render({trigger:t,localize:e}){const{event:i}=t;return Object(r.h)("div",null,Object(r.h)("label",{id:"eventlabel"},e("ui.panel.config.automation.editor.triggers.type.homeassistant.event")),Object(r.h)("paper-radio-group",{selected:i,"aria-labelledby":"eventlabel","onpaper-radio-group-changed":this.radioGroupPicked},Object(r.h)("paper-radio-button",{name:"start"},e("ui.panel.config.automation.editor.triggers.type.homeassistant.start")),Object(r.h)("paper-radio-button",{name:"shutdown"},e("ui.panel.config.automation.editor.triggers.type.homeassistant.shutdown"))))}}b.defaultConfig={event:"start"};class _ extends r.Component{constructor(){super(),this.onChange=m.a.bind(this,"trigger")}render({trigger:t,localize:e}){const{topic:i,payload:n}=t;return Object(r.h)("div",null,Object(r.h)("paper-input",{label:e("ui.panel.config.automation.editor.triggers.type.mqtt.topic"),name:"topic",value:i,"onvalue-changed":this.onChange}),Object(r.h)("paper-input",{label:e("ui.panel.config.automation.editor.triggers.type.mqtt.payload"),name:"payload",value:n,"onvalue-changed":this.onChange}))}}_.defaultConfig={topic:""};i(247);class v extends r.Component{constructor(){super(),this.onChange=m.a.bind(this,"trigger"),this.entityPicked=this.entityPicked.bind(this)}entityPicked(t){this.props.onChange(this.props.index,Object.assign(Object.assign({},this.props.trigger),{entity_id:t.target.value}))}render({trigger:t,hass:e,localize:i}){const{value_template:n,entity_id:o,below:a,above:s}=t;let l=t.for;if(l&&(l.hours||l.minutes||l.seconds)){let{hours:t=0,minutes:e=0,seconds:i=0}=l;l=`${t=t.toString()}:${e=e.toString().padStart(2,"0")}:${i=i.toString().padStart(2,"0")}`}return Object(r.h)("div",null,Object(r.h)("ha-entity-picker",{value:o,onChange:this.entityPicked,hass:e,allowCustomEntity:!0}),Object(r.h)("paper-input",{label:i("ui.panel.config.automation.editor.triggers.type.numeric_state.above"),name:"above",value:s,"onvalue-changed":this.onChange}),Object(r.h)("paper-input",{label:i("ui.panel.config.automation.editor.triggers.type.numeric_state.below"),name:"below",value:a,"onvalue-changed":this.onChange}),Object(r.h)("ha-textarea",{label:i("ui.panel.config.automation.editor.triggers.type.numeric_state.value_template"),name:"value_template",value:n,"onvalue-changed":this.onChange,dir:"ltr"}),Object(r.h)("paper-input",{label:i("ui.panel.config.automation.editor.triggers.type.state.for"),name:"for",value:l,"onvalue-changed":this.onChange}))}}v.defaultConfig={entity_id:""};class y extends r.Component{constructor(){super(),this.onChange=m.a.bind(this,"trigger")}render({trigger:t,localize:e}){const{hours:i,minutes:n,seconds:o}=t;return Object(r.h)("div",null,Object(r.h)("paper-input",{label:e("ui.panel.config.automation.editor.triggers.type.time_pattern.hours"),name:"hours",value:i,"onvalue-changed":this.onChange}),Object(r.h)("paper-input",{label:e("ui.panel.config.automation.editor.triggers.type.time_pattern.minutes"),name:"minutes",value:n,"onvalue-changed":this.onChange}),Object(r.h)("paper-input",{label:e("ui.panel.config.automation.editor.triggers.type.time_pattern.seconds"),name:"seconds",value:o,"onvalue-changed":this.onChange}))}}y.defaultConfig={hours:"",minutes:"",seconds:""};class x extends r.Component{constructor(){super(),this.onChange=m.a.bind(this,"trigger"),this.entityPicked=this.entityPicked.bind(this)}entityPicked(t){this.props.onChange(this.props.index,Object.assign(Object.assign({},this.props.trigger),{entity_id:t.target.value}))}render({trigger:t,hass:e,localize:i}){const{entity_id:n,to:o}=t,a=t.from;let s=t.for;if(s&&(s.hours||s.minutes||s.seconds)){let{hours:t=0,minutes:e=0,seconds:i=0}=s;s=`${t=t.toString()}:${e=e.toString().padStart(2,"0")}:${i=i.toString().padStart(2,"0")}`}return Object(r.h)("div",null,Object(r.h)("ha-entity-picker",{value:n,onChange:this.entityPicked,hass:e,allowCustomEntity:!0}),Object(r.h)("paper-input",{label:i("ui.panel.config.automation.editor.triggers.type.state.from"),name:"from",value:a,"onvalue-changed":this.onChange}),Object(r.h)("paper-input",{label:i("ui.panel.config.automation.editor.triggers.type.state.to"),name:"to",value:o,"onvalue-changed":this.onChange}),Object(r.h)("paper-input",{label:i("ui.panel.config.automation.editor.triggers.type.state.for"),name:"for",value:s,"onvalue-changed":this.onChange}))}}x.defaultConfig={entity_id:""};class w extends r.Component{constructor(){super(),this.onChange=m.a.bind(this,"trigger"),this.radioGroupPicked=this.radioGroupPicked.bind(this)}radioGroupPicked(t){this.props.onChange(this.props.index,Object.assign(Object.assign({},this.props.trigger),{event:t.target.selected}))}render({trigger:t,localize:e}){const{offset:i,event:n}=t;return Object(r.h)("div",null,Object(r.h)("label",{id:"eventlabel"},e("ui.panel.config.automation.editor.triggers.type.sun.event")),Object(r.h)("paper-radio-group",{selected:n,"aria-labelledby":"eventlabel","onpaper-radio-group-changed":this.radioGroupPicked},Object(r.h)("paper-radio-button",{name:"sunrise"},e("ui.panel.config.automation.editor.triggers.type.sun.sunrise")),Object(r.h)("paper-radio-button",{name:"sunset"},e("ui.panel.config.automation.editor.triggers.type.sun.sunset"))),Object(r.h)("paper-input",{label:e("ui.panel.config.automation.editor.triggers.type.sun.offset"),name:"offset",value:i,"onvalue-changed":this.onChange}))}}w.defaultConfig={event:"sunrise"};class C extends r.Component{constructor(){super(),this.onChange=m.a.bind(this,"trigger")}render({trigger:t,localize:e}){const{value_template:i}=t;return Object(r.h)("div",null,Object(r.h)("ha-textarea",{label:e("ui.panel.config.automation.editor.triggers.type.template.value_template"),name:"value_template",value:i,"onvalue-changed":this.onChange,dir:"ltr"}))}}C.defaultConfig={value_template:""};class O extends r.Component{constructor(){super(),this.onChange=m.a.bind(this,"trigger")}render({trigger:t,localize:e}){const{at:i}=t;return Object(r.h)("div",null,Object(r.h)("paper-input",{label:e("ui.panel.config.automation.editor.triggers.type.time.at"),name:"at",value:i,"onvalue-changed":this.onChange}))}}O.defaultConfig={at:""};class k extends r.Component{constructor(){super(),this.onChange=m.a.bind(this,"trigger")}render({trigger:t,localize:e}){const{webhook_id:i}=t;return Object(r.h)("div",null,Object(r.h)("paper-input",{label:e("ui.panel.config.automation.editor.triggers.type.webhook.webhook_id"),name:"webhook_id",value:i,"onvalue-changed":this.onChange}))}}k.defaultConfig={webhook_id:""};var I=i(363),j=i(180);function S(t){return Object(I.a)(t)&&"zone"!==Object(j.a)(t)}class E extends r.Component{constructor(){super(),this.radioGroupPicked=this.radioGroupPicked.bind(this),this.entityPicked=this.entityPicked.bind(this),this.zonePicked=this.zonePicked.bind(this)}render({trigger:t,hass:e,localize:i}){const{entity_id:n,zone:o,event:a}=t;return Object(r.h)("div",null,Object(r.h)("ha-entity-picker",{label:i("ui.panel.config.automation.editor.triggers.type.zone.entity"),value:n,onChange:this.entityPicked,hass:e,allowCustomEntity:!0,entityFilter:S}),Object(r.h)("ha-entity-picker",{label:i("ui.panel.config.automation.editor.triggers.type.zone.zone"),value:o,onChange:this.zonePicked,hass:e,allowCustomEntity:!0,domainFilter:"zone"}),Object(r.h)("label",{id:"eventlabel"},i("ui.panel.config.automation.editor.triggers.type.zone.event")),Object(r.h)("paper-radio-group",{selected:a,"aria-labelledby":"eventlabel","onpaper-radio-group-changed":this.radioGroupPicked},Object(r.h)("paper-radio-button",{name:"enter"},i("ui.panel.config.automation.editor.triggers.type.zone.enter")),Object(r.h)("paper-radio-button",{name:"leave"},i("ui.panel.config.automation.editor.triggers.type.zone.leave"))))}entityPicked(t){this.props.onChange(this.props.index,Object.assign(Object.assign({},this.props.trigger),{entity_id:t.target.value}))}zonePicked(t){this.props.onChange(this.props.index,Object.assign(Object.assign({},this.props.trigger),{zone:t.target.value}))}radioGroupPicked(t){this.props.onChange(this.props.index,Object.assign(Object.assign({},this.props.trigger),{event:t.target.selected}))}}E.defaultConfig={entity_id:"",zone:"",event:"enter"};const P={device:p,event:g,state:x,geo_location:f,homeassistant:b,mqtt:_,numeric_state:v,sun:w,template:C,time:O,time_pattern:y,webhook:k,zone:E},T=Object.keys(P).sort();class A extends r.Component{constructor(){super(),this.typeChanged=this.typeChanged.bind(this)}render({index:t,trigger:e,onChange:i,hass:n,localize:o}){const a=P[e.platform],s=T.indexOf(e.platform);return a?Object(r.h)("div",null,Object(r.h)("paper-dropdown-menu-light",{label:o("ui.panel.config.automation.editor.triggers.type_select"),"no-animations":!0},Object(r.h)("paper-listbox",{slot:"dropdown-content",selected:s,"oniron-select":this.typeChanged},T.map(t=>Object(r.h)("paper-item",{platform:t},o(`ui.panel.config.automation.editor.triggers.type.${t}.label`))))),Object(r.h)(a,{index:t,trigger:e,onChange:i,hass:n,localize:o})):Object(r.h)("div",null,o("ui.panel.config.automation.editor.triggers.unsupported_platform","platform",e.platform),Object(r.h)("pre",null,JSON.stringify(e,null,2)))}typeChanged(t){const e=t.target.selectedItem.attributes.platform.value;e!==this.props.trigger.platform&&this.props.onChange(this.props.index,Object.assign({platform:e},P[e].defaultConfig))}}class $ extends r.Component{constructor(){super(),this.onDelete=this.onDelete.bind(this)}render(t){return Object(r.h)("ha-card",null,Object(r.h)("div",{class:"card-content"},Object(r.h)("div",{class:"card-menu"},Object(r.h)("paper-menu-button",{"no-animations":!0,"horizontal-align":"right","horizontal-offset":"-5","vertical-offset":"-5"},Object(r.h)("paper-icon-button",{icon:"hass:dots-vertical",slot:"dropdown-trigger"}),Object(r.h)("paper-listbox",{slot:"dropdown-content"},Object(r.h)("paper-item",{disabled:!0},t.localize("ui.panel.config.automation.editor.triggers.duplicate")),Object(r.h)("paper-item",{onTap:this.onDelete},t.localize("ui.panel.config.automation.editor.triggers.delete"))))),Object(r.h)(A,Object.assign({},t))))}onDelete(){confirm(this.props.localize("ui.panel.config.automation.editor.triggers.delete_confirm"))&&this.props.onChange(this.props.index,null)}}class z extends r.Component{constructor(){super(),this.addTrigger=this.addTrigger.bind(this),this.triggerChanged=this.triggerChanged.bind(this)}addTrigger(){const t=this.props.trigger.concat(Object.assign({platform:"state"},x.defaultConfig));this.props.onChange(t)}triggerChanged(t,e){const i=this.props.trigger.concat();null===e?i.splice(t,1):i[t]=e,this.props.onChange(i)}render({trigger:t,hass:e,localize:i}){return Object(r.h)("div",{class:"triggers"},t.map((t,n)=>Object(r.h)($,{index:n,trigger:t,onChange:this.triggerChanged,hass:e,localize:i})),Object(r.h)("ha-card",null,Object(r.h)("div",{class:"card-actions add-card"},Object(r.h)("mwc-button",{onTap:this.addTrigger},i("ui.panel.config.automation.editor.triggers.add")))))}}var V=i(368);class L extends r.Component{constructor(){super(),this.onDelete=this.onDelete.bind(this)}onDelete(){confirm(this.props.localize("ui.panel.config.automation.editor.conditions.delete_confirm"))&&this.props.onChange(this.props.index,null)}render(t){return Object(r.h)("ha-card",null,Object(r.h)("div",{class:"card-content"},Object(r.h)("div",{class:"card-menu"},Object(r.h)("paper-menu-button",{"no-animations":!0,"horizontal-align":"right","horizontal-offset":"-5","vertical-offset":"-5"},Object(r.h)("paper-icon-button",{icon:"hass:dots-vertical",slot:"dropdown-trigger"}),Object(r.h)("paper-listbox",{slot:"dropdown-content"},Object(r.h)("paper-item",{disabled:!0},t.localize("ui.panel.config.automation.editor.conditions.duplicate")),Object(r.h)("paper-item",{onTap:this.onDelete},t.localize("ui.panel.config.automation.editor.conditions.delete"))))),Object(r.h)(V.a,Object.assign({},t))))}}class F extends r.Component{constructor(){super(),this.addCondition=this.addCondition.bind(this),this.conditionChanged=this.conditionChanged.bind(this)}addCondition(){const t=this.props.condition.concat({condition:"state"});this.props.onChange(t)}conditionChanged(t,e){const i=this.props.condition.concat();null===e?i.splice(t,1):i[t]=e,this.props.onChange(i)}render({condition:t,hass:e,localize:i}){return Object(r.h)("div",{class:"triggers"},t.map((t,n)=>Object(r.h)(L,{index:n,condition:t,onChange:this.conditionChanged,hass:e,localize:i})),Object(r.h)("ha-card",null,Object(r.h)("div",{class:"card-actions add-card"},Object(r.h)("mwc-button",{onTap:this.addCondition},i("ui.panel.config.automation.editor.conditions.add")))))}}var R=i(425);class N extends r.Component{constructor(){super(),this.onChange=this.onChange.bind(this),this.triggerChanged=this.triggerChanged.bind(this),this.conditionChanged=this.conditionChanged.bind(this),this.actionChanged=this.actionChanged.bind(this)}onChange(t){this.props.onChange(Object.assign(Object.assign({},this.props.automation),{[t.target.name]:t.target.value}))}triggerChanged(t){this.props.onChange(Object.assign(Object.assign({},this.props.automation),{trigger:t}))}conditionChanged(t){this.props.onChange(Object.assign(Object.assign({},this.props.automation),{condition:t}))}actionChanged(t){this.props.onChange(Object.assign(Object.assign({},this.props.automation),{action:t}))}render({automation:t,isWide:e,hass:i,localize:n}){const{alias:o,trigger:a,condition:s,action:l}=t;return Object(r.h)("div",null,Object(r.h)("ha-config-section",{"is-wide":e},Object(r.h)("span",{slot:"header"},o),Object(r.h)("span",{slot:"introduction"},n("ui.panel.config.automation.editor.introduction")),Object(r.h)("ha-card",null,Object(r.h)("div",{class:"card-content"},Object(r.h)("paper-input",{label:n("ui.panel.config.automation.editor.alias"),name:"alias",value:o,"onvalue-changed":this.onChange})))),Object(r.h)("ha-config-section",{"is-wide":e},Object(r.h)("span",{slot:"header"},n("ui.panel.config.automation.editor.triggers.header")),Object(r.h)("span",{slot:"introduction"},Object(r.h)("p",null,n("ui.panel.config.automation.editor.triggers.introduction")),Object(r.h)("a",{href:"https://home-assistant.io/docs/automation/trigger/",target:"_blank"},n("ui.panel.config.automation.editor.triggers.learn_more"))),Object(r.h)(z,{trigger:a,onChange:this.triggerChanged,hass:i,localize:n})),Object(r.h)("ha-config-section",{"is-wide":e},Object(r.h)("span",{slot:"header"},n("ui.panel.config.automation.editor.conditions.header")),Object(r.h)("span",{slot:"introduction"},Object(r.h)("p",null,n("ui.panel.config.automation.editor.conditions.introduction")),Object(r.h)("a",{href:"https://home-assistant.io/docs/scripts/conditions/",target:"_blank"},n("ui.panel.config.automation.editor.conditions.learn_more"))),Object(r.h)(F,{condition:s||[],onChange:this.conditionChanged,hass:i,localize:n})),Object(r.h)("ha-config-section",{"is-wide":e},Object(r.h)("span",{slot:"header"},n("ui.panel.config.automation.editor.actions.header")),Object(r.h)("span",{slot:"introduction"},Object(r.h)("p",null,n("ui.panel.config.automation.editor.actions.introduction")),Object(r.h)("a",{href:"https://home-assistant.io/docs/automation/action/",target:"_blank"},n("ui.panel.config.automation.editor.actions.learn_more"))),Object(r.h)(R.a,{script:l,onChange:this.actionChanged,hass:i,localize:n})))}}var B=i(410),M=i(176),D=i(56);const H=(t,e)=>t.callApi("DELETE",`config/automation/config/${e}`);var q=i(99),U=i(96);customElements.define("ha-automation-editor",class extends a.a{constructor(){super(),this._configChanged=this._configChanged.bind(this)}static get properties(){return{hass:{},automation:{},creatingNew:{},isWide:{},_errors:{},_dirty:{},_config:{}}}disconnectedCallback(){super.disconnectedCallback(),this._rendered&&(Object(B.a)(this._rendered),this._rendered=void 0)}render(){if(this.hass)return a.f`
      <ha-app-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-paper-icon-button-arrow-prev
              @click=${this._backTapped}
            ></ha-paper-icon-button-arrow-prev>
            <div main-title>
              ${this.automation?Object(M.a)(this.automation):this.hass.localize("ui.panel.config.automation.editor.default_name")}
            </div>
            ${this.creatingNew?"":a.f`
                  <paper-icon-button
                    icon="hass:delete"
                    @click=${this._delete}
                  ></paper-icon-button>
                `}
          </app-toolbar>
        </app-header>

        <div class="content">
          ${this._errors?a.f`
                <div class="errors">${this._errors}</div>
              `:""}
          <div
            id="root"
            class="${Object(s.a)({rtl:Object(U.a)(this.hass)})}"
          ></div>
        </div>
        <ha-fab
          slot="fab"
          ?is-wide="${this.isWide}"
          ?dirty="${this._dirty}"
          icon="hass:content-save"
          .title="${this.hass.localize("ui.panel.config.automation.editor.save")}"
          @click=${this._saveAutomation}
          class="${Object(s.a)({rtl:Object(U.a)(this.hass)})}"
        ></ha-fab>
      </ha-app-layout>
    `}updated(t){super.updated(t);const e=t.get("automation");var i,n,o;t.has("automation")&&this.automation&&this.hass&&(!e||e.attributes.id!==this.automation.attributes.id)&&this.hass.callApi("GET",`config/automation/config/${this.automation.attributes.id}`).then(t=>{for(const e of["trigger","condition","action"]){const i=t[e];i&&!Array.isArray(i)&&(t[e]=[i])}this._dirty=!1,this._config=t},t=>{alert(404===t.status_code?this.hass.localize("ui.panel.config.automation.editor.load_error_not_editable"):this.hass.localize("ui.panel.config.automation.editor.load_error_unknown","err_no",t.status_code)),history.back()}),t.has("creatingNew")&&this.creatingNew&&this.hass&&(this._dirty=!1,this._config={alias:this.hass.localize("ui.panel.config.automation.editor.default_name"),trigger:[{platform:"state"}],condition:[],action:[{service:""}]}),t.has("_config")&&this.hass&&(this._rendered=(i=this.shadowRoot.querySelector("#root"),n={automation:this._config,onChange:this._configChanged,isWide:this.isWide,hass:this.hass,localize:this.hass.localize},o=this._rendered,Object(r.render)(Object(r.h)(N,n),i,o)))}_configChanged(t){this._rendered&&(this._config=t,this._errors=void 0,this._dirty=!0)}_backTapped(){this._dirty&&!confirm(this.hass.localize("ui.panel.config.automation.editor.unsaved_confirm"))||history.back()}async _delete(){confirm("Are you sure you want to delete this automation?")&&(await H(this.hass,this.automation.attributes.id),history.back())}_saveAutomation(){const t=this.creatingNew?""+Date.now():this.automation.attributes.id;this.hass.callApi("POST","config/automation/config/"+t,this._config).then(()=>{this._dirty=!1,this.creatingNew&&Object(q.a)(this,`/config/automation/edit/${t}`,!0)},t=>{throw this._errors=t.body.message,t})}static get styles(){return[D.a,a.c`
        ha-card {
          overflow: hidden;
        }
        .errors {
          padding: 20px;
          font-weight: bold;
          color: var(--google-red-500);
        }
        .content {
          padding-bottom: 20px;
        }
        .triggers,
        .script {
          margin-top: -16px;
        }
        .triggers ha-card,
        .script ha-card {
          margin-top: 16px;
        }
        .add-card mwc-button {
          display: block;
          text-align: center;
        }
        .card-menu {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 1;
          color: var(--primary-text-color);
        }
        .rtl .card-menu {
          right: auto;
          left: 0;
        }
        .card-menu paper-item {
          cursor: pointer;
        }
        span[slot="introduction"] a {
          color: var(--primary-color);
        }
        ha-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
          margin-bottom: -80px;
          transition: margin-bottom 0.3s;
        }

        ha-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }

        ha-fab[dirty] {
          margin-bottom: 0;
        }

        ha-fab.rtl {
          right: auto;
          left: 16px;
        }

        ha-fab[is-wide].rtl {
          bottom: 24px;
          right: auto;
          left: 24px;
        }
      `]}});var W=i(11);const Y=Object(W.f)(t=>e=>{if(void 0===t&&e instanceof W.a){if(t!==e.value){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else e.setValue(t)});i(181),i(251),i(152),i(231);var K=i(200),G=i(18);let X=class extends a.a{render(){return a.f`
      <hass-subpage
        .header=${this.hass.localize("ui.panel.config.automation.caption")}
      >
        <ha-config-section .isWide=${this.isWide}>
          <div slot="header">
            ${this.hass.localize("ui.panel.config.automation.picker.header")}
          </div>
          <div slot="introduction">
            ${this.hass.localize("ui.panel.config.automation.picker.introduction")}
            <p>
              <a
                href="https://home-assistant.io/docs/automation/editor/"
                target="_blank"
              >
                ${this.hass.localize("ui.panel.config.automation.picker.learn_more")}
              </a>
            </p>
          </div>

          <ha-card
            .heading=${this.hass.localize("ui.panel.config.automation.picker.pick_automation")}
          >
            ${0===this.automations.length?a.f`
                  <div class="card-content">
                    <p>
                      ${this.hass.localize("ui.panel.config.automation.picker.no_automations")}
                    </p>
                  </div>
                `:this.automations.map(t=>a.f`

                      <div class='automation'>
                        <ha-entity-toggle
                          .hass=${this.hass}
                          .stateObj=${t}
                        ></ha-entity-toggle>

                        <paper-item-body two-line>
                          <div>${Object(M.a)(t)}</div>
                          <div secondary>
                            Last triggered: ${t.attributes.last_triggered?Object(K.a)(new Date(t.attributes.last_triggered),this.hass.language):"never"}
                          </div>
                        </paper-item-body>
                        <div class='actions'>
                          <paper-icon-button
                            .automation=${t}
                            @click=${this._showInfo}
                            icon="hass:information-outline"
                          ></paper-icon-button>
                          <a
                            href=${Y(t.attributes.id?`/config/automation/edit/${t.attributes.id}`:void 0)}
                          >
                            <paper-icon-button
                              icon="hass:pencil"
                              .disabled=${!t.attributes.id}
                            ></paper-icon-button>
                            ${t.attributes.id?"":a.f`
                                    <paper-tooltip position="left">
                                      Only automations defined in
                                      automations.yaml are editable.
                                    </paper-tooltip>
                                  `}
                          </a>
                        </div>
                      </div>
                    </a>
                  `)}
          </ha-card>
        </ha-config-section>

        <a href="/config/automation/new">
          <ha-fab
            slot="fab"
            ?is-wide=${this.isWide}
            icon="hass:plus"
            title=${this.hass.localize("ui.panel.config.automation.picker.add_automation")}
            ?rtl=${Object(U.a)(this.hass)}
          ></ha-fab
        ></a>
      </hass-subpage>
    `}_showInfo(t){const e=t.currentTarget.automation.entity_id;Object(G.a)(this,"hass-more-info",{entityId:e})}static get styles(){return[D.a,a.c`
        :host {
          display: block;
        }

        ha-card {
          margin-bottom: 56px;
        }

        .automation {
          display: flex;
          flex-direction: horizontal;
          align-items: center;
          padding: 0 8px 0 16px;
        }

        .automation a[href] {
          color: var(--primary-text-color);
        }

        ha-entity-toggle {
          margin-right: 16px;
        }

        .actions {
          display: flex;
        }

        ha-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
        }

        ha-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }

        ha-fab[rtl] {
          right: auto;
          left: 16px;
        }

        ha-fab[rtl][is-wide] {
          bottom: 24px;
          right: auto;
          left: 24px;
        }

        a {
          color: var(--primary-color);
        }
      `]}};Object(l.b)([Object(a.g)()],X.prototype,"hass",void 0),Object(l.b)([Object(a.g)()],X.prototype,"isWide",void 0),Object(l.b)([Object(a.g)()],X.prototype,"automations",void 0),X=Object(l.b)([Object(a.d)("ha-automation-picker")],X);customElements.define("ha-config-automation",class extends o.a{static get template(){return n.a`
      <style>
        ha-automation-picker,
        ha-automation-editor {
          height: 100%;
        }
      </style>
      <app-route
        route="[[route]]"
        pattern="/edit/:automation"
        data="{{_routeData}}"
        active="{{_edittingAutomation}}"
      ></app-route>
      <app-route
        route="[[route]]"
        pattern="/new"
        active="{{_creatingNew}}"
      ></app-route>

      <template is="dom-if" if="[[!showEditor]]">
        <ha-automation-picker
          hass="[[hass]]"
          automations="[[automations]]"
          is-wide="[[isWide]]"
        ></ha-automation-picker>
      </template>

      <template is="dom-if" if="[[showEditor]]" restamp="">
        <ha-automation-editor
          hass="[[hass]]"
          automation="[[automation]]"
          is-wide="[[isWide]]"
          creating-new="[[_creatingNew]]"
        ></ha-automation-editor>
      </template>
    `}static get properties(){return{hass:Object,route:Object,isWide:Boolean,_routeData:Object,_routeMatches:Boolean,_creatingNew:Boolean,_edittingAutomation:Boolean,automations:{type:Array,computed:"computeAutomations(hass)"},automation:{type:Object,computed:"computeAutomation(automations, _edittingAutomation, _routeData)"},showEditor:{type:Boolean,computed:"computeShowEditor(_edittingAutomation, _creatingNew)"}}}computeAutomation(t,e,i){if(!t||!e)return null;for(var n=0;n<t.length;n++)if(t[n].attributes.id===i.automation)return t[n];return null}computeAutomations(t){var e=[];return Object.keys(t.states).forEach((function(i){var n=t.states[i];"automation"===Object(j.a)(n)&&e.push(n)})),e.sort((function(t,e){var i=(t.attributes.alias||t.entity_id).toLowerCase(),n=(e.attributes.alias||e.entity_id).toLowerCase();return i<n?-1:i>n?1:0}))}computeShowEditor(t,e){return e||t}})},93:function(t,e,i){"use strict";i(5),i(113),i(114),i(115),i(116);var n=i(60),o=(i(41),i(6)),a=i(3),s=i(97);Object(o.a)({is:"paper-input",_template:a.a`
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
  `,behaviors:[s.a,n.a],properties:{value:{type:String}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}})},94:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));i(5);var n=i(6),o=i(3);const a=Object(n.a)({_template:o.a`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){a.instance||(a.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(t){this._text="",this.async((function(){this._text=t}),100)},_onIronAnnounce:function(t){t.detail&&t.detail.text&&this.announce(t.detail.text)}});a.instance=null,a.requestAvailability=function(){a.instance||(a.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(a.instance)}}}]);
//# sourceMappingURL=chunk.7f50cb8651a9bac10dba.js.map