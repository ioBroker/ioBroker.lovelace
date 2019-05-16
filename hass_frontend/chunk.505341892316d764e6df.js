/*! For license information please see chunk.505341892316d764e6df.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{177:function(t,e,s){"use strict";s.d(e,"b",function(){return o}),s.d(e,"a",function(){return a});s(4);var i=s(79),n=s(1);const o={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(t,e){e&&(t?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(t){this.closingReason=this.closingReason||{},this.closingReason.confirmed=t},_onDialogClick:function(t){for(var e=Object(n.a)(t).path,s=0,i=e.indexOf(this);s<i;s++){var o=e[s];if(o.hasAttribute&&(o.hasAttribute("dialog-dismiss")||o.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(o.hasAttribute("dialog-confirm")),this.close(),t.stopPropagation();break}}}},a=[i.a,o]},186:function(t,e,s){"use strict";s(4),s(45),s(43),s(51),s(78);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(i.content)},342:function(t,e,s){"use strict";s.r(e);s(101),s(186),s(100);var i=s(3),n=s(21),o=s(381);customElements.define("ha-voice-command-dialog",class extends(Object(o.a)(n.a)){static get template(){return i.a`
      <style include="paper-dialog-shared-styles">
        iron-icon {
          margin-right: 8px;
        }

        .content {
          width: 450px;
          min-height: 80px;
          font-size: 18px;
          padding: 16px;
        }

        .messages {
          max-height: 50vh;
          overflow: auto;
        }

        .messages::after {
          content: "";
          clear: both;
          display: block;
        }

        .message {
          clear: both;
          margin: 8px 0;
          padding: 8px;
          border-radius: 15px;
        }

        .message.user {
          margin-left: 24px;
          float: right;
          text-align: right;
          border-bottom-right-radius: 0px;
          background-color: var(--light-primary-color);
          color: var(--primary-text-color);
        }

        .message.hass {
          margin-right: 24px;
          float: left;
          border-bottom-left-radius: 0px;
          background-color: var(--primary-color);
          color: var(--text-primary-color);
        }

        .message.error {
          background-color: var(--google-red-500);
          color: var(--text-primary-color);
        }

        .icon {
          text-align: center;
        }

        .icon paper-icon-button {
          height: 52px;
          width: 52px;
        }

        .interimTranscript {
          color: darkgrey;
        }

        [hidden] {
          display: none;
        }

        :host {
          border-radius: 2px;
        }

        @media all and (max-width: 450px) {
          :host {
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

          .content {
            width: auto;
          }

          .messages {
            max-height: 68vh;
          }
        }
      </style>

      <div class="content">
        <div class="messages" id="messages">
          <template is="dom-repeat" items="[[_conversation]]" as="message">
            <div class$="[[_computeMessageClasses(message)]]">
              [[message.text]]
            </div>
          </template>
        </div>
        <template is="dom-if" if="[[results]]">
          <div class="messages">
            <div class="message user">
              <span>{{results.final}}</span>
              <span class="interimTranscript">[[results.interim]]</span> …
            </div>
          </div>
        </template>
        <div class="icon" hidden$="[[results]]">
          <paper-icon-button
            icon="hass:text-to-speech"
            on-click="startListening"
          ></paper-icon-button>
        </div>
      </div>
    `}static get properties(){return{hass:Object,results:{type:Object,value:null,observer:"_scrollMessagesBottom"},_conversation:{type:Array,value:function(){return[{who:"hass",text:"How can I help?"}]},observer:"_scrollMessagesBottom"}}}static get observers(){return["dialogOpenChanged(opened)"]}showDialog(){this.opened=!0}initRecognition(){this.recognition=new webkitSpeechRecognition,this.recognition.onstart=function(){this.results={final:"",interim:""}}.bind(this),this.recognition.onerror=function(){this.recognition.abort();var t=this.results.final||this.results.interim;this.results=null,""===t&&(t="<Home Assistant did not hear anything>"),this.push("_conversation",{who:"user",text:t,error:!0})}.bind(this),this.recognition.onend=function(){if(null!=this.results){var t=this.results.final||this.results.interim;this.results=null,this.push("_conversation",{who:"user",text:t}),this.hass.callApi("post","conversation/process",{text:t}).then(function(t){this.push("_conversation",{who:"hass",text:t.speech.plain.speech})}.bind(this),function(){this.set(["_conversation",this._conversation.length-1,"error"],!0)}.bind(this))}}.bind(this),this.recognition.onresult=function(t){for(var e=this.results,s="",i="",n=t.resultIndex;n<t.results.length;n++)t.results[n].isFinal?s+=t.results[n][0].transcript:i+=t.results[n][0].transcript;this.results={interim:i,final:e.final+s}}.bind(this)}startListening(){this.recognition||this.initRecognition(),this.results={interim:"",final:""},this.recognition.start()}_scrollMessagesBottom(){setTimeout(()=>{this.$.messages.scrollTop=this.$.messages.scrollHeight,0!==this.$.messages.scrollTop&&this.$.dialog.fire("iron-resize")},10)}dialogOpenChanged(t){t?this.startListening():!t&&this.results&&this.recognition.abort()}_computeMessageClasses(t){return"message "+t.who+(t.error?" error":"")}})},381:function(t,e,s){"use strict";var i=s(8),n=s(177),o=s(65),a=s(73);e.a=Object(i.a)(t=>(class extends(Object(o.b)([a.a,n.a],t)){static get properties(){return{withBackdrop:{type:Boolean,value:!0}}}}))}}]);
//# sourceMappingURL=chunk.505341892316d764e6df.js.map