/*! For license information please see chunk.7e81d0924c2cc31ca5ea.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[46],{187:function(e,t,i){"use strict";i.d(t,"b",function(){return n}),i.d(t,"a",function(){return s});i(4);var o=i(85),r=i(2);const n={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(e,t){t&&(e?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(e){this.closingReason=this.closingReason||{},this.closingReason.confirmed=e},_onDialogClick:function(e){for(var t=Object(r.a)(e).path,i=0,o=t.indexOf(this);i<o;i++){var n=t[i];if(n.hasAttribute&&(n.hasAttribute("dialog-dismiss")||n.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(n.hasAttribute("dialog-confirm")),this.close(),e.stopPropagation();break}}}},s=[o.a,n]},195:function(e,t,i){"use strict";i(4),i(45),i(42),i(53),i(84);const o=document.createElement("template");o.setAttribute("style","display: none;"),o.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(o.content)},196:function(e,t,i){"use strict";i(4),i(195);var o=i(120),r=i(187),n=i(5),s=i(3);Object(n.a)({_template:s.a`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[r.a,o.a],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}})},198:function(e,t,i){"use strict";i(196);var o=i(71),r=i(2),n=i(125);const s={getTabbableNodes:function(e){var t=[];return this._collectTabbableNodes(e,t)?n.a._sortByTabIndex(t):t},_collectTabbableNodes:function(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!n.a._isVisible(e))return!1;var i,o=e,s=n.a._normalizedTabIndex(o),a=s>0;s>=0&&t.push(o),i="content"===o.localName||"slot"===o.localName?Object(r.a)(o).getDistributedNodes():Object(r.a)(o.shadowRoot||o.root||o).children;for(var l=0;l<i.length;l++)a=this._collectTabbableNodes(i[l],t)||a;return a}},a=customElements.get("paper-dialog"),l={get _focusableNodes(){return s.getTabbableNodes(this)}};customElements.define("ha-paper-dialog",class extends(Object(o.b)([l],a)){})},212:function(e,t,i){"use strict";i(4),i(45),i(42);var o=i(187),r=i(5),n=i(3);Object(r.a)({_template:n.a`
    <style>

      :host {
        display: block;
        @apply --layout-relative;
      }

      :host(.is-scrolled:not(:first-child))::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      .scrollable {
        padding: 0 24px;

        @apply --layout-scroll;
        @apply --paper-dialog-scrollable;
      }

      .fit {
        @apply --layout-fit;
      }
    </style>

    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">
      <slot></slot>
    </div>
`,is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget(),this.classList.add("no-padding")},attached:function(){this._ensureTarget(),requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",this.scrollTarget.scrollTop>0),this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight),this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement,this.dialogElement&&this.dialogElement.behaviors&&this.dialogElement.behaviors.indexOf(o.b)>=0?(this.dialogElement.sizingTarget=this.scrollTarget,this.scrollTarget.classList.remove("fit")):this.dialogElement&&this.scrollTarget.classList.add("fit")}})},432:function(e,t,i){"use strict";i.r(t);i(107),i(106),i(198),i(212);var o=i(0),r=i(13);const n=window.SpeechRecognition||window.webkitSpeechRecognition;window.SpeechGrammarList||window.webkitSpeechGrammarList,window.SpeechRecognitionEvent||window.webkitSpeechRecognitionEvent;var s=i(119),a=i(55);function l(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function c(e){var t,i=f(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var o={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(o.decorators=e.decorators),"field"===e.kind&&(o.initializer=e.value),o}function d(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function p(e){return e.decorators&&e.decorators.length}function h(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function u(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function f(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function g(e,t,i){return(g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(i):r.value}})(e,t,i||e)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}i.d(t,"HaVoiceCommandDialog",function(){return b});let b=function(e,t,i,o){var r=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(i){t.forEach(function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach(function(o){t.forEach(function(t){var r=t.placement;if(t.kind===o&&("static"===r||"prototype"===r)){var n="static"===r?e:i;this.defineClassElement(n,t)}},this)},this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var o=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===o?void 0:o.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],o=[],r={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,r)},this),e.forEach(function(e){if(!p(e))return i.push(e);var t=this.decorateElement(e,r);i.push(t.element),i.push.apply(i,t.extras),o.push.apply(o,t.finishers)},this),!t)return{elements:i,finishers:o};var n=this.decorateConstructor(i,t);return o.push.apply(o,n.finishers),n.finishers=o,n},addElementPlacement:function(e,t,i){var o=t[e.placement];if(!i&&-1!==o.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");o.push(e.key)},decorateElement:function(e,t){for(var i=[],o=[],r=e.decorators,n=r.length-1;n>=0;n--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,r[n])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&o.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:o,extras:i}},decorateConstructor:function(e,t){for(var i=[],o=t.length-1;o>=0;o--){var r=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[o])(r)||r);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){e=n.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=f(e.key),o=String(e.placement);if("static"!==o&&"prototype"!==o&&"own"!==o)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+o+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:i,placement:o,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),i=u(e,"finisher"),o=this.toElementDescriptors(e.extras);return{element:t,finisher:i,extras:o}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=u(e,"finisher"),o=this.toElementDescriptors(e.elements);return{elements:o,finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var o=(0,t[i])(e);if(void 0!==o){if("function"!=typeof o)throw new TypeError("Finishers must return a constructor.");e=o}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}();if(o)for(var n=0;n<o.length;n++)r=o[n](r);var s=t(function(e){r.initializeInstanceElements(e,a.elements)},i),a=r.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},o=0;o<e.length;o++){var r,n=e[o];if("method"===n.kind&&(r=t.find(i)))if(h(n.descriptor)||h(r.descriptor)){if(p(n)||p(r))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");r.descriptor=n.descriptor}else{if(p(n)){if(p(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");r.decorators=n.decorators}d(n,r)}else t.push(n)}return t}(s.d.map(c)),e);return r.initializeClassElements(s.F,a.elements),r.runClassFinishers(s.F,a.finishers)}([Object(o.d)("ha-voice-command-dialog")],function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[Object(o.f)()],key:"hass",value:void 0},{kind:"field",decorators:[Object(o.f)()],key:"results",value:()=>null},{kind:"field",decorators:[Object(o.f)()],key:"_conversation",value:()=>[{who:"hass",text:""}]},{kind:"field",decorators:[Object(o.f)()],key:"_opened",value:()=>!1},{kind:"field",decorators:[Object(o.f)()],key:"_agentInfo",value:void 0},{kind:"field",decorators:[Object(o.g)("#messages")],key:"messages",value:void 0},{kind:"field",key:"recognition",value:void 0},{kind:"field",key:"_conversationId",value:void 0},{kind:"method",key:"showDialog",value:async function(){this._opened=!0,n&&this._startListening(),this._agentInfo=await(e=>e.callWS({type:"conversation/agent/info"}))(this.hass)}},{kind:"method",key:"render",value:function(){return o.e`
      <style>
        paper-dialog-scrollable {
          --paper-dialog-scrollable: {
            -webkit-overflow-scrolling: auto;
            max-height: 50vh !important;
          }
        }

        paper-dialog-scrollable.can-scroll {
          --paper-dialog-scrollable: {
            -webkit-overflow-scrolling: touch;
            max-height: 50vh !important;
          }
        }

        @media all and (max-width: 450px), all and (max-height: 500px) {
          paper-dialog-scrollable {
            --paper-dialog-scrollable: {
              -webkit-overflow-scrolling: auto;
              max-height: calc(100vh - 175px) !important;
            }
          }

          paper-dialog-scrollable.can-scroll {
            --paper-dialog-scrollable: {
              -webkit-overflow-scrolling: touch;
              max-height: calc(100vh - 175px) !important;
            }
          }
        }
      </style>
      <ha-paper-dialog
        with-backdrop
        .opened=${this._opened}
        @opened-changed=${this._openedChanged}
      >
        ${this._agentInfo&&this._agentInfo.onboarding?o.e`
              <div class="onboarding">
                ${this._agentInfo.onboarding.text}
                <div class="side-by-side" @click=${this._completeOnboarding}>
                  <a
                    class="button"
                    href="${this._agentInfo.onboarding.url}"
                    target="_blank"
                    ><mwc-button unelevated>Yes!</mwc-button></a
                  >
                  <mwc-button outlined>No</mwc-button>
                </div>
              </div>
            `:""}
        <paper-dialog-scrollable
          id="messages"
          class=${Object(s.a)({"top-border":Boolean(this._agentInfo&&this._agentInfo.onboarding)})}
        >
          ${this._conversation.map(e=>o.e`
              <div class="${this._computeMessageClasses(e)}">
                ${e.text}
              </div>
            `)}
          ${this.results?o.e`
                <div class="message user">
                  <span
                    class=${Object(s.a)({interimTranscript:!this.results.final})}
                    >${this.results.transcript}</span
                  >${this.results.final?"":"…"}
                </div>
              `:""}
        </paper-dialog-scrollable>
        <div class="input">
          <paper-input
            @keyup=${this._handleKeyUp}
            label="${this.hass.localize(`ui.dialogs.voice_command.${n?"label_voice":"label"}`)}"
            autofocus
          >
            ${n?o.e`
                  <span suffix="" slot="suffix">
                    ${this.results?o.e`
                          <div class="bouncer">
                            <div class="double-bounce1"></div>
                            <div class="double-bounce2"></div>
                          </div>
                        `:""}
                    <paper-icon-button
                      .active=${Boolean(this.results)}
                      icon="hass:microphone"
                      @click=${this._toggleListening}
                    >
                    </paper-icon-button>
                  </span>
                `:""}
          </paper-input>
          ${this._agentInfo&&this._agentInfo.attribution?o.e`
                <a
                  href=${this._agentInfo.attribution.url}
                  class="attribution"
                  target="_blank"
                  >${this._agentInfo.attribution.name}</a
                >
              `:""}
        </div>
      </ha-paper-dialog>
    `}},{kind:"method",key:"firstUpdated",value:function(e){g(m(i.prototype),"updated",this).call(this,e),this._conversationId=l()+l()+l()+l()+l(),this._conversation=[{who:"hass",text:this.hass.localize("ui.dialogs.voice_command.how_can_i_help")}]}},{kind:"method",key:"updated",value:function(e){g(m(i.prototype),"updated",this).call(this,e),(e.has("_conversation")||e.has("results"))&&this._scrollMessagesBottom()}},{kind:"method",key:"_addMessage",value:function(e){this._conversation=[...this._conversation,e]}},{kind:"method",key:"_handleKeyUp",value:function(e){const t=e.target;13===e.keyCode&&t.value&&(this._processText(t.value),t.value="")}},{kind:"method",key:"_completeOnboarding",value:function(){((e,t)=>e.callWS({type:"conversation/onboarding/set",shown:t}))(this.hass,!0),this._agentInfo=Object.assign({},this._agentInfo,{onboarding:void 0})}},{kind:"method",key:"_initRecognition",value:function(){this.recognition=new n,this.recognition.interimResults=!0,this.recognition.lang="en-US",this.recognition.onstart=()=>{this.results={final:!1,transcript:""}},this.recognition.onerror=e=>{if(this.recognition.abort(),"aborted"!==e.error){const e=this.results&&this.results.transcript?this.results.transcript:`<${this.hass.localize("ui.dialogs.voice_command.did_not_hear")}>`;this._addMessage({who:"user",text:e,error:!0})}this.results=null},this.recognition.onend=()=>{if(null==this.results)return;const e=this.results.transcript;this.results=null,e?this._processText(e):this._addMessage({who:"user",text:`<${this.hass.localize("ui.dialogs.voice_command.did_not_hear")}>`,error:!0})},this.recognition.onresult=e=>{const t=e.results[0];this.results={transcript:t[0].transcript,final:t.isFinal}}}},{kind:"method",key:"_processText",value:async function(e){this.recognition&&this.recognition.abort(),this._addMessage({who:"user",text:e});const t={who:"hass",text:"…"};this._addMessage(t);try{const i=(await((e,t,i)=>e.callWS({type:"conversation/process",text:t,conversation_id:i}))(this.hass,e,this._conversationId)).speech.plain;t.text=i.speech,this.requestUpdate("_conversation")}catch{t.text=this.hass.localize("ui.dialogs.voice_command.error"),t.error=!0,this.requestUpdate("_conversation")}}},{kind:"method",key:"_toggleListening",value:function(){this.results?this.recognition.stop():this._startListening()}},{kind:"method",key:"_startListening",value:function(){this.recognition||this._initRecognition(),this.results||(this.results={transcript:"",final:!1},this.recognition.start())}},{kind:"method",key:"_scrollMessagesBottom",value:function(){this.messages.scrollTarget.scrollTop=this.messages.scrollTarget.scrollHeight,0===this.messages.scrollTarget.scrollTop&&Object(r.a)(this.messages,"iron-resize")}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value,!this._opened&&this.recognition&&this.recognition.abort()}},{kind:"method",key:"_computeMessageClasses",value:function(e){return`message ${e.who} ${e.error?" error":""}`}},{kind:"get",static:!0,key:"styles",value:function(){return[a.b,o.c`
        :host {
          z-index: 103;
        }

        paper-icon-button {
          color: var(--secondary-text-color);
        }

        paper-icon-button[active] {
          color: var(--primary-color);
        }

        .input {
          margin: 0 0 16px 0;
        }

        ha-paper-dialog {
          width: 450px;
        }
        a.button {
          text-decoration: none;
        }
        a.button > mwc-button {
          width: 100%;
        }
        .onboarding {
          padding: 0 24px;
        }
        paper-dialog-scrollable.top-border::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--divider-color);
        }
        .side-by-side {
          display: flex;
          margin: 8px 0;
        }
        .side-by-side > * {
          flex: 1 0;
          padding: 4px;
        }
        .attribution {
          color: var(--secondary-text-color);
        }
        .message {
          font-size: 18px;
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

        .message a {
          color: var(--text-primary-color);
        }

        .message img {
          width: 100%;
          border-radius: 10px;
        }

        .message.error {
          background-color: var(--google-red-500);
          color: var(--text-primary-color);
        }

        .interimTranscript {
          color: var(--secondary-text-color);
        }

        .bouncer {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 0;
        }
        .double-bounce1,
        .double-bounce2 {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--primary-color);
          opacity: 0.2;
          position: absolute;
          top: 0;
          left: 0;
          -webkit-animation: sk-bounce 2s infinite ease-in-out;
          animation: sk-bounce 2s infinite ease-in-out;
        }
        .double-bounce2 {
          -webkit-animation-delay: -1s;
          animation-delay: -1s;
        }
        @-webkit-keyframes sk-bounce {
          0%,
          100% {
            -webkit-transform: scale(0);
          }
          50% {
            -webkit-transform: scale(1);
          }
        }
        @keyframes sk-bounce {
          0%,
          100% {
            transform: scale(0);
            -webkit-transform: scale(0);
          }
          50% {
            transform: scale(1);
            -webkit-transform: scale(1);
          }
        }

        @media all and (max-width: 450px), all and (max-height: 500px) {
          .message {
            font-size: 16px;
          }
        }
      `]}}]}},o.a)}}]);
//# sourceMappingURL=chunk.7e81d0924c2cc31ca5ea.js.map