/*! For license information please see a82e64b6.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[42955],{44938:(n,t,e)=>{e(94604);var i=e(8621),o=e(26110),a=e(75009),r=e(96540),s=e(9672),l=e(87156),p=e(50856);(0,s.k)({_template:p.d`
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
`,is:"iron-dropdown",behaviors:[o.a,i.G,a.$,r.t],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var n=(0,l.vz)(this.$.content).getDistributedNodes(),t=0,e=n.length;t<e;t++)if(n[t].nodeType===Node.ELEMENT_NODE)return n[t]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){this.sizingTarget&&this.sizingTarget!==this||(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),a.Q._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):a.Q._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):a.Q._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var n=this.containedElement,t=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),e=0;e<t.length;e++)t[e].node=n;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(n){this._readied&&(n?this.scrollAction&&"lock"!==this.scrollAction||(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var n=this.focusTarget||this.containedElement;n&&this.opened&&!this.noAutoFocus?n.focus():a.Q._applyFocus.apply(this,arguments)}})},55947:(n,t,e)=>{e(94604);var i=e(9672),o=e(85074);(0,i.k)({is:"fade-in-animation",behaviors:[o.W],configure:function(n){var t=n.node;return this._effect=new KeyframeEffect(t,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(n)),this._effect}})},75705:(n,t,e)=>{e(94604);var i=e(9672),o=e(85074);(0,i.k)({is:"fade-out-animation",behaviors:[o.W],configure:function(n){var t=n.node;return this._effect=new KeyframeEffect(t,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(n)),this._effect}})},79332:(n,t,e)=>{e.d(t,{a:()=>i});e(94604);const i={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(n,t){for(var e in t)n[e]=t[e]},_cloneConfig:function(n){var t={isClone:!0};return this._copyProperties(t,n),t},_getAnimationConfigRecursive:function(n,t,e){var i;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(i=n?this.animationConfig[n]:this.animationConfig,Array.isArray(i)||(i=[i]),i)for(var o,a=0;o=i[a];a++)if(o.animatable)o.animatable._getAnimationConfigRecursive(o.type||n,t,e);else if(o.id){var r=t[o.id];r?(r.isClone||(t[o.id]=this._cloneConfig(r),r=t[o.id]),this._copyProperties(r,o)):t[o.id]=o}else e.push(o)},getAnimationConfig:function(n){var t={},e=[];for(var i in this._getAnimationConfigRecursive(n,t,e),t)e.push(t[i]);return e}}},85074:(n,t,e)=>{e.d(t,{W:()=>i});e(94604);const i={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(n){if(n.timing)for(var t in n.timing)this.animationTiming[t]=n.timing[t];return this.animationTiming},setPrefixedProperty:function(n,t,e){for(var i,o={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]}[t],a=0;i=o[a];a++)n.style[i]=e;n.style[t]=e},complete:function(n){}}},96540:(n,t,e)=>{e.d(t,{t:()=>o});e(94604);const i={_configureAnimations:function(n){var t=[],e=[];if(n.length>0)for(let t,i=0;t=n[i];i++){let n=document.createElement(t.name);if(n.isNeonAnimation){let i=null;n.configure||(n.configure=function(n){return null}),i=n.configure(t),e.push({result:i,config:t,neonAnimation:n})}else console.warn(this.is+":",t.name,"not found!")}for(var i=0;i<e.length;i++){let n=e[i].result,o=e[i].config,a=e[i].neonAnimation;try{"function"!=typeof n.cancel&&(n=document.timeline.play(n))}catch(t){n=null,console.warn("Couldnt play","(",o.name,").",t)}n&&t.push({neonAnimation:a,config:o,animation:n})}return t},_shouldComplete:function(n){for(var t=!0,e=0;e<n.length;e++)if("finished"!=n[e].animation.playState){t=!1;break}return t},_complete:function(n){for(var t=0;t<n.length;t++)n[t].neonAnimation.complete(n[t].config);for(t=0;t<n.length;t++)n[t].animation.cancel()},playAnimation:function(n,t){var e=this.getAnimationConfig(n);if(e){this._active=this._active||{},this._active[n]&&(this._complete(this._active[n]),delete this._active[n]);var i=this._configureAnimations(e);if(0!=i.length){this._active[n]=i;for(var o=0;o<i.length;o++)i[o].animation.onfinish=function(){this._shouldComplete(i)&&(this._complete(i),delete this._active[n],this.fire("neon-animation-finish",t,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",t,{bubbles:!1})}},cancelAnimation:function(){for(var n in this._active){var t=this._active[n];for(var e in t)t[e].animation.cancel()}this._active={}}},o=[e(79332).a,i]},57548:(n,t,e)=>{e(99257);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML='<iron-iconset-svg name="paper-dropdown-menu" size="24">\n<svg><defs>\n<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n</defs></svg>\n</iron-iconset-svg>',document.head.appendChild(i.content)},73962:(n,t,e)=>{e(1656);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML='<dom-module id="paper-dropdown-menu-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      /* paper-dropdown-menu and paper-dropdown-menu-light both delegate focus\n       * to other internal elements which manage focus styling. */\n      :host(:focus) {\n        outline: none;\n      }\n\n      :host(:dir(rtl)) {\n        text-align: right;\n\n        @apply(--paper-dropdown-menu);\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(i.content)},93560:(n,t,e)=>{e(94604);var i=e(85074),o=e(9672);(0,o.k)({is:"paper-menu-grow-height-animation",_template:null,behaviors:[i.W],configure:function(n){var t=n.node,e=t.getBoundingClientRect().height;return this._effect=new KeyframeEffect(t,[{height:e/2+"px"},{height:e+"px"}],this.timingFromConfig(n)),this._effect}}),(0,o.k)({is:"paper-menu-grow-width-animation",_template:null,behaviors:[i.W],configure:function(n){var t=n.node,e=t.getBoundingClientRect().width;return this._effect=new KeyframeEffect(t,[{width:e/2+"px"},{width:e+"px"}],this.timingFromConfig(n)),this._effect}}),(0,o.k)({is:"paper-menu-shrink-width-animation",_template:null,behaviors:[i.W],configure:function(n){var t=n.node,e=t.getBoundingClientRect().width;return this._effect=new KeyframeEffect(t,[{width:e+"px"},{width:e-e/20+"px"}],this.timingFromConfig(n)),this._effect}}),(0,o.k)({is:"paper-menu-shrink-height-animation",_template:null,behaviors:[i.W],configure:function(n){var t=n.node,e=t.getBoundingClientRect().height;return this.setPrefixedProperty(t,"transformOrigin","0 0"),this._effect=new KeyframeEffect(t,[{height:e+"px",transform:"translateY(0)"},{height:e/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(n)),this._effect}})},78814:(n,t,e)=>{e(94604),e(44938),e(55947),e(75705),e(1656),e(54242),e(93560);var i=e(8621),o=e(26110),a=e(9672),r=e(87156),s=e(50856),l={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const p=(0,a.k)({_template:s.d`
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

    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled" expand-sizing-target-for-scrollbars="[[expandSizingTargetForScrollbars]]">
      <div slot="dropdown-content" class="dropdown-content">
        <slot id="content" name="dropdown-content"></slot>
      </div>
    </iron-dropdown>
`,is:"paper-menu-button",behaviors:[i.G,o.a],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:l.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:l.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:l.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},expandSizingTargetForScrollbars:{type:Boolean,value:!1},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var n=(0,r.vz)(this.$.content).getDistributedNodes(),t=0,e=n.length;t<e;t++)if(n[t].nodeType===Node.ELEMENT_NODE)return n[t]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(n){this.ignoreSelect||this.close()},_onIronActivate:function(n){this.closeOnActivate&&this.close()},_openedChanged:function(n,t){n?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):null!=t&&this.fire("paper-dropdown-close")},_disabledChanged:function(n){o.a._disabledChanged.apply(this,arguments),n&&this.opened&&this.close()},__onIronOverlayCanceled:function(n){var t=n.detail,e=this.$.trigger;(0,r.vz)(t).path.indexOf(e)>-1&&n.preventDefault()}});Object.keys(l).forEach((function(n){p[n]=l[n]}))}}]);
//# sourceMappingURL=a82e64b6.js.map