/*! For license information please see bf8a739c.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2955],{44938:function(n,e,t){t(94604);var i,o,a,r=t(8621),s=t(26110),l=t(75009),p=t(96540),c=t(9672),d=t(87156),f=t(50856);(0,c.k)({_template:(0,f.d)(i||(o=['\n    <style>\n      :host {\n        position: fixed;\n      }\n\n      #contentWrapper ::slotted(*) {\n        overflow: auto;\n      }\n\n      #contentWrapper.animating ::slotted(*) {\n        overflow: hidden;\n        pointer-events: none;\n      }\n    </style>\n\n    <div id="contentWrapper">\n      <slot id="content" name="dropdown-content"></slot>\n    </div>\n'],a||(a=o.slice(0)),i=Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(a)}})))),is:"iron-dropdown",behaviors:[s.a,r.G,l.$,p.t],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var n=(0,d.vz)(this.$.content).getDistributedNodes(),e=0,t=n.length;e<t;e++)if(n[e].nodeType===Node.ELEMENT_NODE)return n[e]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){this.sizingTarget&&this.sizingTarget!==this||(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),l.Q._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):l.Q._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):l.Q._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var n=this.containedElement,e=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),t=0;t<e.length;t++)e[t].node=n;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(n){this._readied&&(n?this.scrollAction&&"lock"!==this.scrollAction||(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var n=this.focusTarget||this.containedElement;n&&this.opened&&!this.noAutoFocus?n.focus():l.Q._applyFocus.apply(this,arguments)}})},55947:function(n,e,t){t(94604);var i=t(9672),o=t(85074);(0,i.k)({is:"fade-in-animation",behaviors:[o.W],configure:function(n){var e=n.node;return this._effect=new KeyframeEffect(e,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(n)),this._effect}})},75705:function(n,e,t){t(94604);var i=t(9672),o=t(85074);(0,i.k)({is:"fade-out-animation",behaviors:[o.W],configure:function(n){var e=n.node;return this._effect=new KeyframeEffect(e,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(n)),this._effect}})},79332:function(n,e,t){t.d(e,{a:function(){return i}});t(94604);var i={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(n,e){for(var t in e)n[t]=e[t]},_cloneConfig:function(n){var e={isClone:!0};return this._copyProperties(e,n),e},_getAnimationConfigRecursive:function(n,e,t){var i;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(i=n?this.animationConfig[n]:this.animationConfig,Array.isArray(i)||(i=[i]),i)for(var o,a=0;o=i[a];a++)if(o.animatable)o.animatable._getAnimationConfigRecursive(o.type||n,e,t);else if(o.id){var r=e[o.id];r?(r.isClone||(e[o.id]=this._cloneConfig(r),r=e[o.id]),this._copyProperties(r,o)):e[o.id]=o}else t.push(o)},getAnimationConfig:function(n){var e={},t=[];for(var i in this._getAnimationConfigRecursive(n,e,t),e)t.push(e[i]);return t}}},85074:function(n,e,t){t.d(e,{W:function(){return i}});t(94604);var i={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(n){if(n.timing)for(var e in n.timing)this.animationTiming[e]=n.timing[e];return this.animationTiming},setPrefixedProperty:function(n,e,t){for(var i,o={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]}[e],a=0;i=o[a];a++)n.style[i]=t;n.style[e]=t},complete:function(n){}}},96540:function(n,e,t){t.d(e,{t:function(){return o}});t(94604);var i={_configureAnimations:function(n){var e=[],t=[];if(n.length>0)for(var i,o=0;i=n[o];o++){var a=document.createElement(i.name);if(a.isNeonAnimation){var r;a.configure||(a.configure=function(n){return null}),r=a.configure(i),t.push({result:r,config:i,neonAnimation:a})}else console.warn(this.is+":",i.name,"not found!")}for(var s=0;s<t.length;s++){var l=t[s].result,p=t[s].config,c=t[s].neonAnimation;try{"function"!=typeof l.cancel&&(l=document.timeline.play(l))}catch(d){l=null,console.warn("Couldnt play","(",p.name,").",d)}l&&e.push({neonAnimation:c,config:p,animation:l})}return e},_shouldComplete:function(n){for(var e=!0,t=0;t<n.length;t++)if("finished"!=n[t].animation.playState){e=!1;break}return e},_complete:function(n){for(var e=0;e<n.length;e++)n[e].neonAnimation.complete(n[e].config);for(e=0;e<n.length;e++)n[e].animation.cancel()},playAnimation:function(n,e){var t=this.getAnimationConfig(n);if(t){this._active=this._active||{},this._active[n]&&(this._complete(this._active[n]),delete this._active[n]);var i=this._configureAnimations(t);if(0!=i.length){this._active[n]=i;for(var o=0;o<i.length;o++)i[o].animation.onfinish=function(){this._shouldComplete(i)&&(this._complete(i),delete this._active[n],this.fire("neon-animation-finish",e,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",e,{bubbles:!1})}},cancelAnimation:function(){for(var n in this._active){var e=this._active[n];for(var t in e)e[t].animation.cancel()}this._active={}}},o=[t(79332).a,i]},57548:function(n,e,t){t(99257);var i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML='<iron-iconset-svg name="paper-dropdown-menu" size="24">\n<svg><defs>\n<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n</defs></svg>\n</iron-iconset-svg>',document.head.appendChild(i.content)},73962:function(n,e,t){t(1656);var i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML='<dom-module id="paper-dropdown-menu-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      /* paper-dropdown-menu and paper-dropdown-menu-light both delegate focus\n       * to other internal elements which manage focus styling. */\n      :host(:focus) {\n        outline: none;\n      }\n\n      :host(:dir(rtl)) {\n        text-align: right;\n\n        @apply(--paper-dropdown-menu);\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(i.content)},93560:function(n,e,t){t(94604);var i=t(85074),o=t(9672);(0,o.k)({is:"paper-menu-grow-height-animation",_template:null,behaviors:[i.W],configure:function(n){var e=n.node,t=e.getBoundingClientRect().height;return this._effect=new KeyframeEffect(e,[{height:t/2+"px"},{height:t+"px"}],this.timingFromConfig(n)),this._effect}}),(0,o.k)({is:"paper-menu-grow-width-animation",_template:null,behaviors:[i.W],configure:function(n){var e=n.node,t=e.getBoundingClientRect().width;return this._effect=new KeyframeEffect(e,[{width:t/2+"px"},{width:t+"px"}],this.timingFromConfig(n)),this._effect}}),(0,o.k)({is:"paper-menu-shrink-width-animation",_template:null,behaviors:[i.W],configure:function(n){var e=n.node,t=e.getBoundingClientRect().width;return this._effect=new KeyframeEffect(e,[{width:t+"px"},{width:t-t/20+"px"}],this.timingFromConfig(n)),this._effect}}),(0,o.k)({is:"paper-menu-shrink-height-animation",_template:null,behaviors:[i.W],configure:function(n){var e=n.node,t=e.getBoundingClientRect().height;return this.setPrefixedProperty(e,"transformOrigin","0 0"),this._effect=new KeyframeEffect(e,[{height:t+"px",transform:"translateY(0)"},{height:t/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(n)),this._effect}})},78814:function(n,e,t){t(94604),t(44938),t(55947),t(75705),t(1656),t(54242),t(93560);var i,o=t(8621),a=t(26110),r=t(9672),s=t(87156),l=t(50856);var p,c,d={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400},f=(0,r.k)({_template:(0,l.d)(i||(p=['\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        padding: 8px;\n        outline: none;\n\n        @apply --paper-menu-button;\n      }\n\n      :host([disabled]) {\n        cursor: auto;\n        color: var(--disabled-text-color);\n\n        @apply --paper-menu-button-disabled;\n      }\n\n      iron-dropdown {\n        @apply --paper-menu-button-dropdown;\n      }\n\n      .dropdown-content {\n        @apply --shadow-elevation-2dp;\n\n        position: relative;\n        border-radius: 2px;\n        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));\n\n        @apply --paper-menu-button-content;\n      }\n\n      :host([vertical-align="top"]) .dropdown-content {\n        margin-bottom: 20px;\n        margin-top: -10px;\n        top: 10px;\n      }\n\n      :host([vertical-align="bottom"]) .dropdown-content {\n        bottom: 10px;\n        margin-bottom: -10px;\n        margin-top: 20px;\n      }\n\n      #trigger {\n        cursor: pointer;\n      }\n    </style>\n\n    <div id="trigger" on-tap="toggle">\n      <slot name="dropdown-trigger"></slot>\n    </div>\n\n    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled" expand-sizing-target-for-scrollbars="[[expandSizingTargetForScrollbars]]">\n      <div slot="dropdown-content" class="dropdown-content">\n        <slot id="content" name="dropdown-content"></slot>\n      </div>\n    </iron-dropdown>\n'],c||(c=p.slice(0)),i=Object.freeze(Object.defineProperties(p,{raw:{value:Object.freeze(c)}})))),is:"paper-menu-button",behaviors:[o.G,a.a],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:d.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:d.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:d.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},expandSizingTargetForScrollbars:{type:Boolean,value:!1},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var n=(0,s.vz)(this.$.content).getDistributedNodes(),e=0,t=n.length;e<t;e++)if(n[e].nodeType===Node.ELEMENT_NODE)return n[e]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(n){this.ignoreSelect||this.close()},_onIronActivate:function(n){this.closeOnActivate&&this.close()},_openedChanged:function(n,e){n?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):null!=e&&this.fire("paper-dropdown-close")},_disabledChanged:function(n){a.a._disabledChanged.apply(this,arguments),n&&this.opened&&this.close()},__onIronOverlayCanceled:function(n){var e=n.detail,t=this.$.trigger;(0,s.vz)(e).path.indexOf(t)>-1&&n.preventDefault()}});Object.keys(d).forEach((function(n){f[n]=d[n]}))}}]);