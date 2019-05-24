/*! For license information please see chunk.9082d5f0832be19055e1.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{117:function(e,i,n){"use strict";n(5);const t={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(e,i){for(var n in i)e[n]=i[n]},_cloneConfig:function(e){var i={isClone:!0};return this._copyProperties(i,e),i},_getAnimationConfigRecursive:function(e,i,n){var t;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(t=e?this.animationConfig[e]:this.animationConfig,Array.isArray(t)||(t=[t]),t)for(var a,o=0;a=t[o];o++)if(a.animatable)a.animatable._getAnimationConfigRecursive(a.type||e,i,n);else if(a.id){var s=i[a.id];s?(s.isClone||(i[a.id]=this._cloneConfig(s),s=i[a.id]),this._copyProperties(s,a)):i[a.id]=a}else n.push(a)},getAnimationConfig:function(e){var i={},n=[];for(var t in this._getAnimationConfigRecursive(e,i,n),i)n.push(i[t]);return n}};n.d(i,"a",function(){return a});const a=[t,{_configureAnimations:function(e){var i=[],n=[];if(e.length>0)for(let o,s=0;o=e[s];s++){let e=document.createElement(o.name);if(e.isNeonAnimation){let i=null;e.configure||(e.configure=function(e){return null}),i=e.configure(o),n.push({result:i,config:o,neonAnimation:e})}else console.warn(this.is+":",o.name,"not found!")}for(var t=0;t<n.length;t++){let e=n[t].result,o=n[t].config,s=n[t].neonAnimation;try{"function"!=typeof e.cancel&&(e=document.timeline.play(e))}catch(a){e=null,console.warn("Couldnt play","(",o.name,").",a)}e&&i.push({neonAnimation:s,config:o,animation:e})}return i},_shouldComplete:function(e){for(var i=!0,n=0;n<e.length;n++)if("finished"!=e[n].animation.playState){i=!1;break}return i},_complete:function(e){for(var i=0;i<e.length;i++)e[i].neonAnimation.complete(e[i].config);for(i=0;i<e.length;i++)e[i].animation.cancel()},playAnimation:function(e,i){var n=this.getAnimationConfig(e);if(n){this._active=this._active||{},this._active[e]&&(this._complete(this._active[e]),delete this._active[e]);var t=this._configureAnimations(n);if(0!=t.length){this._active[e]=t;for(var a=0;a<t.length;a++)t[a].animation.onfinish=function(){this._shouldComplete(t)&&(this._complete(t),delete this._active[e],this.fire("neon-animation-finish",i,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",i,{bubbles:!1})}},cancelAnimation:function(){for(var e in this._active){var i=this._active[e];for(var n in i)i[n].animation.cancel()}this._active={}}}]},176:function(e,i,n){"use strict";n(5),n(55),n(143);var t=n(6),a=n(4),o=n(121);const s=a.a`
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
`;s.setAttribute("strip-whitespace",""),Object(t.a)({_template:s,is:"paper-spinner",behaviors:[o.a]})},177:function(e,i,n){"use strict";n.d(i,"b",function(){return o}),n.d(i,"a",function(){return s});n(5);var t=n(84),a=n(2);const o={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(e,i){i&&(e?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(e){this.closingReason=this.closingReason||{},this.closingReason.confirmed=e},_onDialogClick:function(e){for(var i=Object(a.a)(e).path,n=0,t=i.indexOf(this);n<t;n++){var o=i[n];if(o.hasAttribute&&(o.hasAttribute("dialog-dismiss")||o.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(o.hasAttribute("dialog-confirm")),this.close(),e.stopPropagation();break}}}},s=[t.a,o]},185:function(e,i,n){"use strict";n(5),n(46),n(44),n(52),n(83);const t=document.createElement("template");t.setAttribute("style","display: none;"),t.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(t.content)},188:function(e,i,n){"use strict";n(5),n(185);var t=n(117),a=n(177),o=n(6),s=n(4);Object(o.a)({_template:s.a`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[a.a,t.a],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}})},191:function(e,i,n){"use strict";n(188);var t=n(70),a=n(2),o=n(123);const s={getTabbableNodes:function(e){var i=[];return this._collectTabbableNodes(e,i)?o.a._sortByTabIndex(i):i},_collectTabbableNodes:function(e,i){if(e.nodeType!==Node.ELEMENT_NODE||!o.a._isVisible(e))return!1;var n,t=e,s=o.a._normalizedTabIndex(t),r=s>0;s>=0&&i.push(t),n="content"===t.localName||"slot"===t.localName?Object(a.a)(t).getDistributedNodes():Object(a.a)(t.shadowRoot||t.root||t).children;for(var l=0;l<n.length;l++)r=this._collectTabbableNodes(n[l],i)||r;return r}},r=customElements.get("paper-dialog"),l={get _focusableNodes(){return s.getTabbableNodes(this)}};customElements.define("ha-paper-dialog",class extends(Object(t.b)([l],r)){})},705:function(e,i,n){"use strict";n.r(i);n(82),n(176);var t=n(4),a=n(26),o=(n(191),n(92),n(166));customElements.define("ha-dialog-add-user",class extends(Object(o.a)(a.a)){static get template(){return t.a`
      <style include="ha-style-dialog">
        .error {
          color: red;
        }
        ha-paper-dialog {
          max-width: 500px;
        }
        .username {
          margin-top: -8px;
        }
      </style>
      <ha-paper-dialog
        id="dialog"
        with-backdrop
        opened="{{_opened}}"
        on-opened-changed="_openedChanged"
      >
        <h2>[[localize('ui.panel.config.users.add_user.caption')]]</h2>
        <div>
          <template is="dom-if" if="[[_errorMsg]]">
            <div class="error">[[_errorMsg]]</div>
          </template>
          <paper-input
            class="name"
            label="[[localize('ui.panel.config.users.add_user.name')]]"
            value="{{_name}}"
            required
            auto-validate
            autocapitalize="on"
            error-message="Required"
            on-blur="_maybePopulateUsername"
          ></paper-input>
          <paper-input
            class="username"
            label="[[localize('ui.panel.config.users.add_user.username')]]"
            value="{{_username}}"
            required
            auto-validate
            autocapitalize="none"
            error-message="Required"
          ></paper-input>
          <paper-input
            label="[[localize('ui.panel.config.users.add_user.password')]]"
            type="password"
            value="{{_password}}"
            required
            auto-validate
            error-message="Required"
          ></paper-input>
        </div>
        <div class="buttons">
          <template is="dom-if" if="[[_loading]]">
            <div class="submit-spinner">
              <paper-spinner active></paper-spinner>
            </div>
          </template>
          <template is="dom-if" if="[[!_loading]]">
            <mwc-button on-click="_createUser"
              >[[localize('ui.panel.config.users.add_user.create')]]</mwc-button
            >
          </template>
        </div>
      </ha-paper-dialog>
    `}static get properties(){return{_hass:Object,_dialogClosedCallback:Function,_loading:{type:Boolean,value:!1},_errorMsg:String,_opened:{type:Boolean,value:!1},_name:String,_username:String,_password:String}}ready(){super.ready(),this.addEventListener("keypress",e=>{13===e.keyCode&&this._createUser(e)})}showDialog({hass:e,dialogClosedCallback:i}){this.hass=e,this._dialogClosedCallback=i,this._loading=!1,this._opened=!0,setTimeout(()=>this.shadowRoot.querySelector("paper-input").focus(),0)}_maybePopulateUsername(){if(this._username)return;const e=this._name.split(" ");e.length&&(this._username=e[0].toLowerCase())}async _createUser(e){if(e.preventDefault(),!this._name||!this._username||!this._password)return;let i;this._loading=!0,this._errorMsg=null;try{i=(await this.hass.callWS({type:"config/auth/create",name:this._name})).user.id}catch(n){return this._loading=!1,void(this._errorMsg=n.code)}try{await this.hass.callWS({type:"config/auth_provider/homeassistant/create",user_id:i,username:this._username,password:this._password})}catch(n){return this._loading=!1,this._errorMsg=n.code,void(await this.hass.callWS({type:"config/auth/delete",user_id:i}))}this._dialogDone(i)}_dialogDone(e){this._dialogClosedCallback({userId:e}),this.setProperties({_errorMsg:null,_username:"",_password:"",_dialogClosedCallback:null,_opened:!1})}_equals(e,i){return e===i}_openedChanged(e){this._dialogClosedCallback&&!e.detail.value&&this._dialogDone()}})}}]);
//# sourceMappingURL=chunk.9082d5f0832be19055e1.js.map