/*! For license information please see chunk.897ab0ddd9d647faca67.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2955],{44938:(n,t,i)=>{"use strict";i(65233);var e=i(8621),o=i(26110),a=i(75009),r=i(96540),s=i(9672),l=i(87156),p=i(50856);(0,s.k)({_template:p.d`
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
`,is:"iron-dropdown",behaviors:[o.a,e.G,a.$,r.t],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var n=(0,l.vz)(this.$.content).getDistributedNodes(),t=0,i=n.length;t<i;t++)if(n[t].nodeType===Node.ELEMENT_NODE)return n[t]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){this.sizingTarget&&this.sizingTarget!==this||(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),a.Q._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):a.Q._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):a.Q._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var n=this.containedElement,t=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),i=0;i<t.length;i++)t[i].node=n;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(n){this._readied&&(n?this.scrollAction&&"lock"!==this.scrollAction||(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var n=this.focusTarget||this.containedElement;n&&this.opened&&!this.noAutoFocus?n.focus():a.Q._applyFocus.apply(this,arguments)}})},55947:(n,t,i)=>{"use strict";i(65233);var e=i(9672),o=i(85074);(0,e.k)({is:"fade-in-animation",behaviors:[o.W],configure:function(n){var t=n.node;return this._effect=new KeyframeEffect(t,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(n)),this._effect}})},75705:(n,t,i)=>{"use strict";i(65233);var e=i(9672),o=i(85074);(0,e.k)({is:"fade-out-animation",behaviors:[o.W],configure:function(n){var t=n.node;return this._effect=new KeyframeEffect(t,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(n)),this._effect}})},79332:(n,t,i)=>{"use strict";i.d(t,{a:()=>e});i(65233);const e={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(n,t){for(var i in t)n[i]=t[i]},_cloneConfig:function(n){var t={isClone:!0};return this._copyProperties(t,n),t},_getAnimationConfigRecursive:function(n,t,i){var e;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(e=n?this.animationConfig[n]:this.animationConfig,Array.isArray(e)||(e=[e]),e)for(var o,a=0;o=e[a];a++)if(o.animatable)o.animatable._getAnimationConfigRecursive(o.type||n,t,i);else if(o.id){var r=t[o.id];r?(r.isClone||(t[o.id]=this._cloneConfig(r),r=t[o.id]),this._copyProperties(r,o)):t[o.id]=o}else i.push(o)},getAnimationConfig:function(n){var t={},i=[];for(var e in this._getAnimationConfigRecursive(n,t,i),t)i.push(t[e]);return i}}},85074:(n,t,i)=>{"use strict";i.d(t,{W:()=>e});i(65233);const e={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(n){if(n.timing)for(var t in n.timing)this.animationTiming[t]=n.timing[t];return this.animationTiming},setPrefixedProperty:function(n,t,i){for(var e,o={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]}[t],a=0;e=o[a];a++)n.style[e]=i;n.style[t]=i},complete:function(n){}}},96540:(n,t,i)=>{"use strict";i.d(t,{t:()=>o});i(65233);const e={_configureAnimations:function(n){var t=[],i=[];if(n.length>0)for(let t,e=0;t=n[e];e++){let n=document.createElement(t.name);if(n.isNeonAnimation){let e=null;n.configure||(n.configure=function(n){return null}),e=n.configure(t),i.push({result:e,config:t,neonAnimation:n})}else console.warn(this.is+":",t.name,"not found!")}for(var e=0;e<i.length;e++){let n=i[e].result,o=i[e].config,a=i[e].neonAnimation;try{"function"!=typeof n.cancel&&(n=document.timeline.play(n))}catch(t){n=null,console.warn("Couldnt play","(",o.name,").",t)}n&&t.push({neonAnimation:a,config:o,animation:n})}return t},_shouldComplete:function(n){for(var t=!0,i=0;i<n.length;i++)if("finished"!=n[i].animation.playState){t=!1;break}return t},_complete:function(n){for(var t=0;t<n.length;t++)n[t].neonAnimation.complete(n[t].config);for(t=0;t<n.length;t++)n[t].animation.cancel()},playAnimation:function(n,t){var i=this.getAnimationConfig(n);if(i){this._active=this._active||{},this._active[n]&&(this._complete(this._active[n]),delete this._active[n]);var e=this._configureAnimations(i);if(0!=e.length){this._active[n]=e;for(var o=0;o<e.length;o++)e[o].animation.onfinish=function(){this._shouldComplete(e)&&(this._complete(e),delete this._active[n],this.fire("neon-animation-finish",t,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",t,{bubbles:!1})}},cancelAnimation:function(){for(var n in this._active){var t=this._active[n];for(var i in t)t[i].animation.cancel()}this._active={}}},o=[i(79332).a,e]},57548:(n,t,i)=>{"use strict";i(99257);const e=document.createElement("template");e.setAttribute("style","display: none;"),e.innerHTML='<iron-iconset-svg name="paper-dropdown-menu" size="24">\n<svg><defs>\n<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n</defs></svg>\n</iron-iconset-svg>',document.head.appendChild(e.content)},73962:(n,t,i)=>{"use strict";i(1656);const e=document.createElement("template");e.setAttribute("style","display: none;"),e.innerHTML='<dom-module id="paper-dropdown-menu-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(e.content)},93560:(n,t,i)=>{"use strict";i(65233);var e=i(85074),o=i(9672);(0,o.k)({is:"paper-menu-grow-height-animation",behaviors:[e.W],configure:function(n){var t=n.node,i=t.getBoundingClientRect().height;return this._effect=new KeyframeEffect(t,[{height:i/2+"px"},{height:i+"px"}],this.timingFromConfig(n)),this._effect}}),(0,o.k)({is:"paper-menu-grow-width-animation",behaviors:[e.W],configure:function(n){var t=n.node,i=t.getBoundingClientRect().width;return this._effect=new KeyframeEffect(t,[{width:i/2+"px"},{width:i+"px"}],this.timingFromConfig(n)),this._effect}}),(0,o.k)({is:"paper-menu-shrink-width-animation",behaviors:[e.W],configure:function(n){var t=n.node,i=t.getBoundingClientRect().width;return this._effect=new KeyframeEffect(t,[{width:i+"px"},{width:i-i/20+"px"}],this.timingFromConfig(n)),this._effect}}),(0,o.k)({is:"paper-menu-shrink-height-animation",behaviors:[e.W],configure:function(n){var t=n.node,i=t.getBoundingClientRect().height;return this.setPrefixedProperty(t,"transformOrigin","0 0"),this._effect=new KeyframeEffect(t,[{height:i+"px",transform:"translateY(0)"},{height:i/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(n)),this._effect}})},78814:(n,t,i)=>{"use strict";i(65233),i(44938),i(55947),i(75705),i(1656),i(54242),i(93560);var e=i(8621),o=i(26110),a=i(9672),r=i(87156),s=i(50856),l={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const p=(0,a.k)({_template:s.d`
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
`,is:"paper-menu-button",behaviors:[e.G,o.a],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:l.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:l.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:l.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var n=(0,r.vz)(this.$.content).getDistributedNodes(),t=0,i=n.length;t<i;t++)if(n[t].nodeType===Node.ELEMENT_NODE)return n[t]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(n){this.ignoreSelect||this.close()},_onIronActivate:function(n){this.closeOnActivate&&this.close()},_openedChanged:function(n,t){n?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):null!=t&&this.fire("paper-dropdown-close")},_disabledChanged:function(n){o.a._disabledChanged.apply(this,arguments),n&&this.opened&&this.close()},__onIronOverlayCanceled:function(n){var t=n.detail,i=this.$.trigger;(0,r.vz)(t).path.indexOf(i)>-1&&n.preventDefault()}});Object.keys(l).forEach((function(n){p[n]=l[n]}))}}]);
//# sourceMappingURL=chunk.897ab0ddd9d647faca67.js.map