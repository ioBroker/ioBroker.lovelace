/*! For license information please see chunk.a9cbf90d5155562cea42.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[54],{159:function(i,e,t){"use strict";t.d(e,"a",(function(){return n}));t(4);const n=[{properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(i,e){for(var t in e)i[t]=e[t]},_cloneConfig:function(i){var e={isClone:!0};return this._copyProperties(e,i),e},_getAnimationConfigRecursive:function(i,e,t){var n;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(n=i?this.animationConfig[i]:this.animationConfig,Array.isArray(n)||(n=[n]),n)for(var o,a=0;o=n[a];a++)if(o.animatable)o.animatable._getAnimationConfigRecursive(o.type||i,e,t);else if(o.id){var s=e[o.id];s?(s.isClone||(e[o.id]=this._cloneConfig(s),s=e[o.id]),this._copyProperties(s,o)):e[o.id]=o}else t.push(o)},getAnimationConfig:function(i){var e={},t=[];for(var n in this._getAnimationConfigRecursive(i,e,t),e)t.push(e[n]);return t}},{_configureAnimations:function(i){var e=[],t=[];if(i.length>0)for(let a,s=0;a=i[s];s++){let i=document.createElement(a.name);if(i.isNeonAnimation){let e=null;i.configure||(i.configure=function(i){return null}),e=i.configure(a),t.push({result:e,config:a,neonAnimation:i})}else console.warn(this.is+":",a.name,"not found!")}for(var n=0;n<t.length;n++){let i=t[n].result,a=t[n].config,s=t[n].neonAnimation;try{"function"!=typeof i.cancel&&(i=document.timeline.play(i))}catch(o){i=null,console.warn("Couldnt play","(",a.name,").",o)}i&&e.push({neonAnimation:s,config:a,animation:i})}return e},_shouldComplete:function(i){for(var e=!0,t=0;t<i.length;t++)if("finished"!=i[t].animation.playState){e=!1;break}return e},_complete:function(i){for(var e=0;e<i.length;e++)i[e].neonAnimation.complete(i[e].config);for(e=0;e<i.length;e++)i[e].animation.cancel()},playAnimation:function(i,e){var t=this.getAnimationConfig(i);if(t){this._active=this._active||{},this._active[i]&&(this._complete(this._active[i]),delete this._active[i]);var n=this._configureAnimations(t);if(0!=n.length){this._active[i]=n;for(var o=0;o<n.length;o++)n[o].animation.onfinish=function(){this._shouldComplete(n)&&(this._complete(n),delete this._active[i],this.fire("neon-animation-finish",e,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",e,{bubbles:!1})}},cancelAnimation:function(){for(var i in this._active){var e=this._active[i];for(var t in e)e[t].animation.cancel()}this._active={}}}]},220:function(i,e,t){"use strict";t(4),t(60),t(186);var n=t(5),o=t(3),a=t(164);const s=o.a`
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
`;s.setAttribute("strip-whitespace",""),Object(n.a)({_template:s,is:"paper-spinner",behaviors:[a.a]})},223:function(i,e,t){"use strict";t.d(e,"b",(function(){return a})),t.d(e,"a",(function(){return s}));t(4);var n=t(114),o=t(2);const a={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(i,e){e&&(i?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(i){this.closingReason=this.closingReason||{},this.closingReason.confirmed=i},_onDialogClick:function(i){for(var e=Object(o.a)(i).path,t=0,n=e.indexOf(this);t<n;t++){var a=e[t];if(a.hasAttribute&&(a.hasAttribute("dialog-dismiss")||a.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(a.hasAttribute("dialog-confirm")),this.close(),i.stopPropagation();break}}}},s=[n.a,a]},238:function(i,e,t){"use strict";t(243);var n=t(89),o=t(165),a=t(2);const s={getTabbableNodes:function(i){var e=[];return this._collectTabbableNodes(i,e)?o.a._sortByTabIndex(e):e},_collectTabbableNodes:function(i,e){if(i.nodeType!==Node.ELEMENT_NODE||!o.a._isVisible(i))return!1;var t,n=i,s=o.a._normalizedTabIndex(n),l=s>0;s>=0&&e.push(n),t="content"===n.localName||"slot"===n.localName?Object(a.a)(n).getDistributedNodes():Object(a.a)(n.shadowRoot||n.root||n).children;for(var r=0;r<t.length;r++)l=this._collectTabbableNodes(t[r],e)||l;return l}},l=customElements.get("paper-dialog"),r={get _focusableNodes(){return s.getTabbableNodes(this)}};class c extends(Object(n.b)([r],l)){}customElements.define("ha-paper-dialog",c)},241:function(i,e,t){"use strict";t(4),t(52),t(51),t(59),t(113);const n=document.createElement("template");n.setAttribute("style","display: none;"),n.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(n.content)},243:function(i,e,t){"use strict";t(4),t(241);var n=t(159),o=t(223),a=t(5),s=t(3);Object(a.a)({_template:s.a`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[o.a,n.a],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}})},363:function(i,e,t){"use strict";t(45);var n=t(53);const o=document.createElement("template");o.setAttribute("style","display: none;"),o.innerHTML=`<dom-module id="ha-style-dialog">\n<template>\n  <style>\n    ${n.c.cssText}\n  </style>\n</template>\n</dom-module>`,document.head.appendChild(o.content)},848:function(i,e,t){"use strict";t.r(e);t(110),t(220);var n=t(3),o=t(30),a=(t(238),t(212));t(363);class s extends(Object(a.a)(o.a)){static get template(){return n.a`
      <style include="ha-style-dialog">
        .error {
          color: red;
        }
        @media all and (max-width: 500px) {
          ha-paper-dialog {
            margin: 0;
            width: 100%;
            max-height: calc(100% - 64px);

            position: fixed !important;
            bottom: 0px;
            left: 0px;
            right: 0px;
            overflow: scroll;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
          }
        }

        ha-paper-dialog {
          border-radius: 2px;
        }
        ha-paper-dialog p {
          color: var(--secondary-text-color);
        }

        .icon {
          float: right;
        }
      </style>
      <ha-paper-dialog
        id="mp3dialog"
        with-backdrop
        opened="{{_opened}}"
        on-opened-changed="_openedChanged"
      >
        <h2>
          [[localize('ui.panel.mailbox.playback_title')]]
          <div class="icon">
            <template is="dom-if" if="[[_loading]]">
              <paper-spinner active></paper-spinner>
            </template>
            <ha-icon-button
              id="delicon"
              on-click="openDeleteDialog"
              icon="hass:delete"
            ></ha-icon-button>
          </div>
        </h2>
        <div id="transcribe"></div>
        <div>
          <template is="dom-if" if="[[_errorMsg]]">
            <div class="error">[[_errorMsg]]</div>
          </template>
          <audio id="mp3" preload="none" controls>
            <source id="mp3src" src="" type="audio/mpeg" />
          </audio>
        </div>
      </ha-paper-dialog>
    `}static get properties(){return{hass:Object,_currentMessage:Object,_errorMsg:String,_loading:{type:Boolean,value:!1},_opened:{type:Boolean,value:!1}}}showDialog({hass:i,message:e}){this.hass=i,this._errorMsg=null,this._currentMessage=e,this._opened=!0,this.$.transcribe.innerText=e.message;const t=e.platform,n=this.$.mp3;if(t.has_media){n.style.display="",this._showLoading(!0),n.src=null;const i=`/api/mailbox/media/${t.name}/${e.sha}`;this.hass.fetchWithAuth(i).then(i=>i.ok?i.blob():Promise.reject({status:i.status,statusText:i.statusText})).then(i=>{this._showLoading(!1),n.src=window.URL.createObjectURL(i),n.play()}).catch(i=>{this._showLoading(!1),this._errorMsg="Error loading audio: "+i.statusText})}else n.style.display="none",this._showLoading(!1)}openDeleteDialog(){confirm(this.localize("ui.panel.mailbox.delete_prompt"))&&this.deleteSelected()}deleteSelected(){const i=this._currentMessage;this.hass.callApi("DELETE",`mailbox/delete/${i.platform.name}/${i.sha}`),this._dialogDone()}_dialogDone(){this.$.mp3.pause(),this.setProperties({_currentMessage:null,_errorMsg:null,_loading:!1,_opened:!1})}_openedChanged(i){i.detail.value||this._dialogDone()}_showLoading(i){const e=this.$.delicon;if(i)this._loading=!0,e.style.display="none";else{const i=this._currentMessage.platform;this._loading=!1,e.style.display=i.can_delete?"":"none"}}}customElements.define("ha-dialog-show-audio-message",s)}}]);
//# sourceMappingURL=chunk.a9cbf90d5155562cea42.js.map