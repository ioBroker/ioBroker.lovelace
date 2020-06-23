/*! For license information please see chunk.e9f596789645af71d282.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[5],{120:function(n,i,t){"use strict";t(4);const e={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(n,i){for(var t in i)n[t]=i[t]},_cloneConfig:function(n){var i={isClone:!0};return this._copyProperties(i,n),i},_getAnimationConfigRecursive:function(n,i,t){var e;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(e=n?this.animationConfig[n]:this.animationConfig,Array.isArray(e)||(e=[e]),e)for(var o,a=0;o=e[a];a++)if(o.animatable)o.animatable._getAnimationConfigRecursive(o.type||n,i,t);else if(o.id){var r=i[o.id];r?(r.isClone||(i[o.id]=this._cloneConfig(r),r=i[o.id]),this._copyProperties(r,o)):i[o.id]=o}else t.push(o)},getAnimationConfig:function(n){var i={},t=[];for(var e in this._getAnimationConfigRecursive(n,i,t),i)t.push(i[e]);return t}};t.d(i,"a",function(){return o});const o=[e,{_configureAnimations:function(n){var i=[],t=[];if(n.length>0)for(let a,r=0;a=n[r];r++){let n=document.createElement(a.name);if(n.isNeonAnimation){let i=null;n.configure||(n.configure=function(n){return null}),i=n.configure(a),t.push({result:i,config:a,neonAnimation:n})}else console.warn(this.is+":",a.name,"not found!")}for(var e=0;e<t.length;e++){let n=t[e].result,a=t[e].config,r=t[e].neonAnimation;try{"function"!=typeof n.cancel&&(n=document.timeline.play(n))}catch(o){n=null,console.warn("Couldnt play","(",a.name,").",o)}n&&i.push({neonAnimation:r,config:a,animation:n})}return i},_shouldComplete:function(n){for(var i=!0,t=0;t<n.length;t++)if("finished"!=n[t].animation.playState){i=!1;break}return i},_complete:function(n){for(var i=0;i<n.length;i++)n[i].neonAnimation.complete(n[i].config);for(i=0;i<n.length;i++)n[i].animation.cancel()},playAnimation:function(n,i){var t=this.getAnimationConfig(n);if(t){this._active=this._active||{},this._active[n]&&(this._complete(this._active[n]),delete this._active[n]);var e=this._configureAnimations(t);if(0!=e.length){this._active[n]=e;for(var o=0;o<e.length;o++)e[o].animation.onfinish=function(){this._shouldComplete(e)&&(this._complete(e),delete this._active[n],this.fire("neon-animation-finish",i,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",i,{bubbles:!1})}},cancelAnimation:function(){for(var n in this._active){var i=this._active[n];for(var t in i)i[t].animation.cancel()}this._active={}}}]},144:function(n,i,t){"use strict";t(4),t(42);var e=t(126),o=t(5),a=t(3);Object(o.a)({_template:a.a`
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
`,is:"paper-listbox",behaviors:[e.a],hostAttributes:{role:"listbox"}})},149:function(n,i,t){"use strict";t(4);var e=t(31),o=t(34),a=t(85),r=t(120),s=t(5),l=t(2),c=t(3);Object(s.a)({_template:c.a`
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
`,is:"iron-dropdown",behaviors:[o.a,e.a,a.a,r.a],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var n=Object(l.a)(this.$.content).getDistributedNodes(),i=0,t=n.length;i<t;i++)if(n[i].nodeType===Node.ELEMENT_NODE)return n[i]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){this.sizingTarget&&this.sizingTarget!==this||(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),a.b._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):a.b._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):a.b._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var n=this.containedElement,i=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),t=0;t<i.length;t++)i[t].node=n;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(n){this._readied&&(n?this.scrollAction&&"lock"!==this.scrollAction||(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var n=this.focusTarget||this.containedElement;n&&this.opened&&!this.noAutoFocus?n.focus():a.b._applyFocus.apply(this,arguments)}});const p={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(n){if(n.timing)for(var i in n.timing)this.animationTiming[i]=n.timing[i];return this.animationTiming},setPrefixedProperty:function(n,i,t){for(var e,o={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]}[i],a=0;e=o[a];a++)n.style[e]=t;n.style[i]=t},complete:function(n){}};Object(s.a)({is:"fade-in-animation",behaviors:[p],configure:function(n){var i=n.node;return this._effect=new KeyframeEffect(i,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(n)),this._effect}}),Object(s.a)({is:"fade-out-animation",behaviors:[p],configure:function(n){var i=n.node;return this._effect=new KeyframeEffect(i,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(n)),this._effect}});t(42),t(84);Object(s.a)({is:"paper-menu-grow-height-animation",behaviors:[p],configure:function(n){var i=n.node,t=i.getBoundingClientRect().height;return this._effect=new KeyframeEffect(i,[{height:t/2+"px"},{height:t+"px"}],this.timingFromConfig(n)),this._effect}}),Object(s.a)({is:"paper-menu-grow-width-animation",behaviors:[p],configure:function(n){var i=n.node,t=i.getBoundingClientRect().width;return this._effect=new KeyframeEffect(i,[{width:t/2+"px"},{width:t+"px"}],this.timingFromConfig(n)),this._effect}}),Object(s.a)({is:"paper-menu-shrink-width-animation",behaviors:[p],configure:function(n){var i=n.node,t=i.getBoundingClientRect().width;return this._effect=new KeyframeEffect(i,[{width:t+"px"},{width:t-t/20+"px"}],this.timingFromConfig(n)),this._effect}}),Object(s.a)({is:"paper-menu-shrink-height-animation",behaviors:[p],configure:function(n){var i=n.node,t=i.getBoundingClientRect().height;return this.setPrefixedProperty(i,"transformOrigin","0 0"),this._effect=new KeyframeEffect(i,[{height:t+"px",transform:"translateY(0)"},{height:t/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(n)),this._effect}});var f={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const h=Object(s.a)({_template:c.a`
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
`,is:"paper-menu-button",behaviors:[e.a,o.a],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:f.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:f.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:f.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var n=Object(l.a)(this.$.content).getDistributedNodes(),i=0,t=n.length;i<t;i++)if(n[i].nodeType===Node.ELEMENT_NODE)return n[i]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(n){this.ignoreSelect||this.close()},_onIronActivate:function(n){this.closeOnActivate&&this.close()},_openedChanged:function(n,i){n?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):null!=i&&this.fire("paper-dropdown-close")},_disabledChanged:function(n){o.a._disabledChanged.apply(this,arguments),n&&this.opened&&this.close()},__onIronOverlayCanceled:function(n){var i=n.detail,t=this.$.trigger;Object(l.a)(i).path.indexOf(t)>-1&&n.preventDefault()}});Object.keys(f).forEach(function(n){h[n]=f[n]})}}]);
//# sourceMappingURL=chunk.e9f596789645af71d282.js.map