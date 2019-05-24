/*! For license information please see chunk.bf2ce6845a1e6226a4f2.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{117:function(i,e,n){"use strict";n(5);const t={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(i,e){for(var n in e)i[n]=e[n]},_cloneConfig:function(i){var e={isClone:!0};return this._copyProperties(e,i),e},_getAnimationConfigRecursive:function(i,e,n){var t;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(t=i?this.animationConfig[i]:this.animationConfig,Array.isArray(t)||(t=[t]),t)for(var o,a=0;o=t[a];a++)if(o.animatable)o.animatable._getAnimationConfigRecursive(o.type||i,e,n);else if(o.id){var s=e[o.id];s?(s.isClone||(e[o.id]=this._cloneConfig(s),s=e[o.id]),this._copyProperties(s,o)):e[o.id]=o}else n.push(o)},getAnimationConfig:function(i){var e={},n=[];for(var t in this._getAnimationConfigRecursive(i,e,n),e)n.push(e[t]);return n}};n.d(e,"a",function(){return o});const o=[t,{_configureAnimations:function(i){var e=[],n=[];if(i.length>0)for(let a,s=0;a=i[s];s++){let i=document.createElement(a.name);if(i.isNeonAnimation){let e=null;i.configure||(i.configure=function(i){return null}),e=i.configure(a),n.push({result:e,config:a,neonAnimation:i})}else console.warn(this.is+":",a.name,"not found!")}for(var t=0;t<n.length;t++){let i=n[t].result,a=n[t].config,s=n[t].neonAnimation;try{"function"!=typeof i.cancel&&(i=document.timeline.play(i))}catch(o){i=null,console.warn("Couldnt play","(",a.name,").",o)}i&&e.push({neonAnimation:s,config:a,animation:i})}return e},_shouldComplete:function(i){for(var e=!0,n=0;n<i.length;n++)if("finished"!=i[n].animation.playState){e=!1;break}return e},_complete:function(i){for(var e=0;e<i.length;e++)i[e].neonAnimation.complete(i[e].config);for(e=0;e<i.length;e++)i[e].animation.cancel()},playAnimation:function(i,e){var n=this.getAnimationConfig(i);if(n){this._active=this._active||{},this._active[i]&&(this._complete(this._active[i]),delete this._active[i]);var t=this._configureAnimations(n);if(0!=t.length){this._active[i]=t;for(var o=0;o<t.length;o++)t[o].animation.onfinish=function(){this._shouldComplete(t)&&(this._complete(t),delete this._active[i],this.fire("neon-animation-finish",e,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",e,{bubbles:!1})}},cancelAnimation:function(){for(var i in this._active){var e=this._active[i];for(var n in e)e[n].animation.cancel()}this._active={}}}]},176:function(i,e,n){"use strict";n(5),n(55),n(143);var t=n(6),o=n(4),a=n(121);const s=o.a`
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
`;s.setAttribute("strip-whitespace",""),Object(t.a)({_template:s,is:"paper-spinner",behaviors:[a.a]})},177:function(i,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return s});n(5);var t=n(84),o=n(2);const a={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(i,e){e&&(i?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(i){this.closingReason=this.closingReason||{},this.closingReason.confirmed=i},_onDialogClick:function(i){for(var e=Object(o.a)(i).path,n=0,t=e.indexOf(this);n<t;n++){var a=e[n];if(a.hasAttribute&&(a.hasAttribute("dialog-dismiss")||a.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(a.hasAttribute("dialog-confirm")),this.close(),i.stopPropagation();break}}}},s=[t.a,a]},185:function(i,e,n){"use strict";n(5),n(46),n(44),n(52),n(83);const t=document.createElement("template");t.setAttribute("style","display: none;"),t.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(t.content)},188:function(i,e,n){"use strict";n(5),n(185);var t=n(117),o=n(177),a=n(6),s=n(4);Object(a.a)({_template:s.a`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[o.a,t.a],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}})},191:function(i,e,n){"use strict";n(188);var t=n(70),o=n(2),a=n(123);const s={getTabbableNodes:function(i){var e=[];return this._collectTabbableNodes(i,e)?a.a._sortByTabIndex(e):e},_collectTabbableNodes:function(i,e){if(i.nodeType!==Node.ELEMENT_NODE||!a.a._isVisible(i))return!1;var n,t=i,s=a.a._normalizedTabIndex(t),l=s>0;s>=0&&e.push(t),n="content"===t.localName||"slot"===t.localName?Object(o.a)(t).getDistributedNodes():Object(o.a)(t.shadowRoot||t.root||t).children;for(var r=0;r<n.length;r++)l=this._collectTabbableNodes(n[r],e)||l;return l}},l=customElements.get("paper-dialog"),r={get _focusableNodes(){return s.getTabbableNodes(this)}};customElements.define("ha-paper-dialog",class extends(Object(t.b)([r],l)){})},645:function(i,e,n){"use strict";n.r(e);n(82),n(176);var t=n(4),o=n(26),a=(n(92),n(191),n(166));customElements.define("ha-dialog-show-audio-message",class extends(Object(a.a)(o.a)){static get template(){return t.a`
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
            <paper-icon-button
              id="delicon"
              on-click="openDeleteDialog"
              icon="hass:delete"
            ></paper-icon-button>
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
    `}static get properties(){return{hass:Object,_currentMessage:Object,_errorMsg:String,_loading:{type:Boolean,value:!1},_opened:{type:Boolean,value:!1}}}showDialog({hass:i,message:e}){this.hass=i,this._errorMsg=null,this._currentMessage=e,this._opened=!0,this.$.transcribe.innerText=e.message;const n=e.platform,t=this.$.mp3;if(n.has_media){t.style.display="",this._showLoading(!0),t.src=null;const i=`/api/mailbox/media/${n.name}/${e.sha}`;this.hass.fetchWithAuth(i).then(i=>i.ok?i.blob():Promise.reject({status:i.status,statusText:i.statusText})).then(i=>{this._showLoading(!1),t.src=window.URL.createObjectURL(i),t.play()}).catch(i=>{this._showLoading(!1),this._errorMsg=`Error loading audio: ${i.statusText}`})}else t.style.display="none",this._showLoading(!1)}openDeleteDialog(){confirm(this.localize("ui.panel.mailbox.delete_prompt"))&&this.deleteSelected()}deleteSelected(){const i=this._currentMessage;this.hass.callApi("DELETE",`mailbox/delete/${i.platform.name}/${i.sha}`),this._dialogDone()}_dialogDone(){this.$.mp3.pause(),this.setProperties({_currentMessage:null,_errorMsg:null,_loading:!1,_opened:!1})}_openedChanged(i){i.detail.value||this._dialogDone()}_showLoading(i){const e=this.$.delicon;if(i)this._loading=!0,e.style.display="none";else{const i=this._currentMessage.platform;this._loading=!1,e.style.display=i.can_delete?"":"none"}}})}}]);
//# sourceMappingURL=chunk.bf2ce6845a1e6226a4f2.js.map