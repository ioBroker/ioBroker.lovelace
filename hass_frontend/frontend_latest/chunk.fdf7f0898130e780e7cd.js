/*! For license information please see chunk.fdf7f0898130e780e7cd.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{116:function(e,n,t){"use strict";t.d(n,"a",function(){return a});t(5);var i=t(53),o=t(35);const a=[i.a,o.a,{hostAttributes:{role:"option",tabindex:"0"}}]},117:function(e,n,t){"use strict";t(5);const i={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(e,n){for(var t in n)e[t]=n[t]},_cloneConfig:function(e){var n={isClone:!0};return this._copyProperties(n,e),n},_getAnimationConfigRecursive:function(e,n,t){var i;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(i=e?this.animationConfig[e]:this.animationConfig,Array.isArray(i)||(i=[i]),i)for(var o,a=0;o=i[a];a++)if(o.animatable)o.animatable._getAnimationConfigRecursive(o.type||e,n,t);else if(o.id){var r=n[o.id];r?(r.isClone||(n[o.id]=this._cloneConfig(r),r=n[o.id]),this._copyProperties(r,o)):n[o.id]=o}else t.push(o)},getAnimationConfig:function(e){var n={},t=[];for(var i in this._getAnimationConfigRecursive(e,n,t),n)t.push(n[i]);return t}};t.d(n,"a",function(){return o});const o=[i,{_configureAnimations:function(e){var n=[],t=[];if(e.length>0)for(let a,r=0;a=e[r];r++){let e=document.createElement(a.name);if(e.isNeonAnimation){let n=null;e.configure||(e.configure=function(e){return null}),n=e.configure(a),t.push({result:n,config:a,neonAnimation:e})}else console.warn(this.is+":",a.name,"not found!")}for(var i=0;i<t.length;i++){let e=t[i].result,a=t[i].config,r=t[i].neonAnimation;try{"function"!=typeof e.cancel&&(e=document.timeline.play(e))}catch(o){e=null,console.warn("Couldnt play","(",a.name,").",o)}e&&n.push({neonAnimation:r,config:a,animation:e})}return n},_shouldComplete:function(e){for(var n=!0,t=0;t<e.length;t++)if("finished"!=e[t].animation.playState){n=!1;break}return n},_complete:function(e){for(var n=0;n<e.length;n++)e[n].neonAnimation.complete(e[n].config);for(n=0;n<e.length;n++)e[n].animation.cancel()},playAnimation:function(e,n){var t=this.getAnimationConfig(e);if(t){this._active=this._active||{},this._active[e]&&(this._complete(this._active[e]),delete this._active[e]);var i=this._configureAnimations(t);if(0!=i.length){this._active[e]=i;for(var o=0;o<i.length;o++)i[o].animation.onfinish=function(){this._shouldComplete(i)&&(this._complete(i),delete this._active[e],this.fire("neon-animation-finish",n,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",n,{bubbles:!1})}},cancelAnimation:function(){for(var e in this._active){var n=this._active[e];for(var t in n)n[t].animation.cancel()}this._active={}}}]},135:function(e,n,t){"use strict";t(5),t(46),t(136);var i=t(6),o=t(4),a=t(116);Object(i.a)({_template:o.a`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[a.a]})},136:function(e,n,t){"use strict";t(46),t(55),t(44),t(52);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(i.content)},137:function(e,n,t){"use strict";t(5),t(44);var i=t(119),o=t(6),a=t(4);Object(o.a)({_template:a.a`
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
`,is:"paper-listbox",behaviors:[i.a],hostAttributes:{role:"listbox"}})},138:function(e,n,t){"use strict";t(5),t(32),t(105),t(90),t(139),t(106),t(44),t(141),t(142);var i=t(53),o=t(35),a=t(59),r=t(60),s=t(6),l=t(2),p=t(36),c=t(4);Object(s.a)({_template:c.a`
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
`,is:"paper-dropdown-menu",behaviors:[i.a,o.a,a.a,r.a],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0},label:{type:String},placeholder:{type:String},errorMessage:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,dynamicAlign:{type:Boolean},restoreFocusOnClose:{type:Boolean,value:!0}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},hostAttributes:{role:"combobox","aria-autocomplete":"none","aria-haspopup":"true"},observers:["_selectedItemChanged(selectedItem)"],attached:function(){var e=this.contentElement;e&&e.selectedItem&&this._setSelectedItem(e.selectedItem)},get contentElement(){for(var e=Object(l.a)(this.$.content).getDistributedNodes(),n=0,t=e.length;n<t;n++)if(e[n].nodeType===Node.ELEMENT_NODE)return e[n]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(e){this._setSelectedItem(e.detail.item)},_onIronDeselect:function(e){this._setSelectedItem(null)},_onTap:function(e){p.c(e)===this&&this.open()},_selectedItemChanged:function(e){var n="";n=e?e.label||e.getAttribute("label")||e.textContent.trim():"",this.value=n,this._setSelectedItemLabel(n)},_computeMenuVerticalOffset:function(e,n){return n||(e?-4:8)},_getValidity:function(e){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var e=this.opened?"true":"false",n=this.contentElement;n&&n.setAttribute("aria-expanded",e)}})},139:function(e,n,t){"use strict";t(5);var i=t(32),o=t(35),a=t(84),r=t(117),s=t(6),l=t(2),p=t(4);Object(s.a)({_template:p.a`
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
`,is:"iron-dropdown",behaviors:[o.a,i.a,a.a,r.a],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var e=Object(l.a)(this.$.content).getDistributedNodes(),n=0,t=e.length;n<t;n++)if(e[n].nodeType===Node.ELEMENT_NODE)return e[n]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){this.sizingTarget&&this.sizingTarget!==this||(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),a.b._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):a.b._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):a.b._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var e=this.containedElement,n=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),t=0;t<n.length;t++)n[t].node=e;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(e){this._readied&&(e?this.scrollAction&&"lock"!==this.scrollAction||(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var e=this.focusTarget||this.containedElement;e&&this.opened&&!this.noAutoFocus?e.focus():a.b._applyFocus.apply(this,arguments)}});const c={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(e){if(e.timing)for(var n in e.timing)this.animationTiming[n]=e.timing[n];return this.animationTiming},setPrefixedProperty:function(e,n,t){for(var i,o={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]}[n],a=0;i=o[a];a++)e.style[i]=t;e.style[n]=t},complete:function(e){}};Object(s.a)({is:"fade-in-animation",behaviors:[c],configure:function(e){var n=e.node;return this._effect=new KeyframeEffect(n,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(e)),this._effect}}),Object(s.a)({is:"fade-out-animation",behaviors:[c],configure:function(e){var n=e.node;return this._effect=new KeyframeEffect(n,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(e)),this._effect}});t(44),t(83);Object(s.a)({is:"paper-menu-grow-height-animation",behaviors:[c],configure:function(e){var n=e.node,t=n.getBoundingClientRect().height;return this._effect=new KeyframeEffect(n,[{height:t/2+"px"},{height:t+"px"}],this.timingFromConfig(e)),this._effect}}),Object(s.a)({is:"paper-menu-grow-width-animation",behaviors:[c],configure:function(e){var n=e.node,t=n.getBoundingClientRect().width;return this._effect=new KeyframeEffect(n,[{width:t/2+"px"},{width:t+"px"}],this.timingFromConfig(e)),this._effect}}),Object(s.a)({is:"paper-menu-shrink-width-animation",behaviors:[c],configure:function(e){var n=e.node,t=n.getBoundingClientRect().width;return this._effect=new KeyframeEffect(n,[{width:t+"px"},{width:t-t/20+"px"}],this.timingFromConfig(e)),this._effect}}),Object(s.a)({is:"paper-menu-shrink-height-animation",behaviors:[c],configure:function(e){var n=e.node,t=n.getBoundingClientRect().height;return this.setPrefixedProperty(n,"transformOrigin","0 0"),this._effect=new KeyframeEffect(n,[{height:t+"px",transform:"translateY(0)"},{height:t/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(e)),this._effect}});var d={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const u=Object(s.a)({_template:p.a`
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
`,is:"paper-menu-button",behaviors:[i.a,o.a],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:d.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:d.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:d.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var e=Object(l.a)(this.$.content).getDistributedNodes(),n=0,t=e.length;n<t;n++)if(e[n].nodeType===Node.ELEMENT_NODE)return e[n]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(e){this.ignoreSelect||this.close()},_onIronActivate:function(e){this.closeOnActivate&&this.close()},_openedChanged:function(e,n){e?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):null!=n&&this.fire("paper-dropdown-close")},_disabledChanged:function(e){o.a._disabledChanged.apply(this,arguments),e&&this.opened&&this.close()},__onIronOverlayCanceled:function(e){var n=e.detail,t=this.$.trigger;Object(l.a)(n).path.indexOf(t)>-1&&e.preventDefault()}});Object.keys(d).forEach(function(e){u[e]=d[e]})},141:function(e,n,t){"use strict";t(85);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML='<iron-iconset-svg name="paper-dropdown-menu" size="24">\n<svg><defs>\n<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n</defs></svg>\n</iron-iconset-svg>',document.head.appendChild(i.content)},142:function(e,n,t){"use strict";t(44);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML='<dom-module id="paper-dropdown-menu-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(i.content)}}]);
//# sourceMappingURL=chunk.fdf7f0898130e780e7cd.js.map