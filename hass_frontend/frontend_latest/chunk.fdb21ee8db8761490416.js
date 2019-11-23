/*! For license information please see chunk.fdb21ee8db8761490416.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[47],{183:function(e,t,i){"use strict";i.d(t,"b",function(){return r}),i.d(t,"a",function(){return s});i(3);var o=i(85),n=i(2);const r={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(e,t){t&&(e?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(e){this.closingReason=this.closingReason||{},this.closingReason.confirmed=e},_onDialogClick:function(e){for(var t=Object(n.a)(e).path,i=0,o=t.indexOf(this);i<o;i++){var r=t[i];if(r.hasAttribute&&(r.hasAttribute("dialog-dismiss")||r.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(r.hasAttribute("dialog-confirm")),this.close(),e.stopPropagation();break}}}},s=[o.a,r]},187:function(e,t,i){"use strict";i.d(t,"a",function(){return r});var o=i(19);const n=new WeakMap,r=Object(o.f)(e=>t=>{if(!(t instanceof o.a)||t instanceof o.c||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=t,{element:r}=i;n.has(t)||(r.className=i.strings.join(" "));const{classList:s}=r,a=n.get(t);for(const o in a)o in e||s.remove(o);for(const o in e){const t=e[o];if(!a||t!==a[o]){s[t?"add":"remove"](o)}}n.set(t,e)})},192:function(e,t,i){"use strict";i(3),i(45),i(42),i(53),i(84);const o=document.createElement("template");o.setAttribute("style","display: none;"),o.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(o.content)},193:function(e,t,i){"use strict";i(3),i(192);var o=i(118),n=i(183),r=i(5),s=i(4);Object(r.a)({_template:s.a`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[n.a,o.a],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}})},195:function(e,t,i){"use strict";i(193);var o=i(71),n=i(2),r=i(122);const s={getTabbableNodes:function(e){var t=[];return this._collectTabbableNodes(e,t)?r.a._sortByTabIndex(t):t},_collectTabbableNodes:function(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!r.a._isVisible(e))return!1;var i,o=e,s=r.a._normalizedTabIndex(o),a=s>0;s>=0&&t.push(o),i="content"===o.localName||"slot"===o.localName?Object(n.a)(o).getDistributedNodes():Object(n.a)(o.shadowRoot||o.root||o).children;for(var l=0;l<i.length;l++)a=this._collectTabbableNodes(i[l],t)||a;return a}},a=customElements.get("paper-dialog"),l={get _focusableNodes(){return s.getTabbableNodes(this)}};customElements.define("ha-paper-dialog",class extends(Object(o.b)([l],a)){})},206:function(e,t,i){"use strict";i(3),i(45),i(42);var o=i(183),n=i(5),r=i(4);Object(n.a)({_template:r.a`
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
`,is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget(),this.classList.add("no-padding")},attached:function(){this._ensureTarget(),requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",this.scrollTarget.scrollTop>0),this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight),this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement,this.dialogElement&&this.dialogElement.behaviors&&this.dialogElement.behaviors.indexOf(o.b)>=0?(this.dialogElement.sizingTarget=this.scrollTarget,this.scrollTarget.classList.remove("fit")):this.dialogElement&&this.scrollTarget.classList.add("fit")}})},415:function(e,t,i){"use strict";i.r(t);i(106),i(105),i(195),i(206);var o=i(0),n=i(13);const r=window.SpeechRecognition||window.webkitSpeechRecognition;window.SpeechGrammarList||window.webkitSpeechGrammarList,window.SpeechRecognitionEvent||window.webkitSpeechRecognitionEvent;var s=i(187),a=i(55);function l(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function c(e){var t,i=f(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var o={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(o.decorators=e.decorators),"field"===e.kind&&(o.initializer=e.value),o}function d(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function p(e){return e.decorators&&e.decorators.length}function h(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function u(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function f(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function m(e,t,i){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(o){var n=Object.getOwnPropertyDescriptor(o,t);return n.get?n.get.call(i):n.value}})(e,t,i||e)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}i.d(t,"HaVoiceCommandDialog",function(){return b});let b=function(e,t,i,o){var n=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(i){t.forEach(function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach(function(o){t.forEach(function(t){var n=t.placement;if(t.kind===o&&("static"===n||"prototype"===n)){var r="static"===n?e:i;this.defineClassElement(r,t)}},this)},this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var o=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===o?void 0:o.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],o=[],n={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,n)},this),e.forEach(function(e){if(!p(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),o.push.apply(o,t.finishers)},this),!t)return{elements:i,finishers:o};var r=this.decorateConstructor(i,t);return o.push.apply(o,r.finishers),r.finishers=o,r},addElementPlacement:function(e,t,i){var o=t[e.placement];if(!i&&-1!==o.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");o.push(e.key)},decorateElement:function(e,t){for(var i=[],o=[],n=e.decorators,r=n.length-1;r>=0;r--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[r])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&o.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:o,extras:i}},decorateConstructor:function(e,t){for(var i=[],o=t.length-1;o>=0;o--){var n=this.fromClassDescriptor(e),r=this.toClassDescriptor((0,t[o])(n)||n);if(void 0!==r.finisher&&i.push(r.finisher),void 0!==r.elements){e=r.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=f(e.key),o=String(e.placement);if("static"!==o&&"prototype"!==o&&"own"!==o)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+o+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var r={kind:t,key:i,placement:o,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),r.initializer=e.initializer),r},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),i=u(e,"finisher"),o=this.toElementDescriptors(e.extras);return{element:t,finisher:i,extras:o}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=u(e,"finisher"),o=this.toElementDescriptors(e.elements);return{elements:o,finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var o=(0,t[i])(e);if(void 0!==o){if("function"!=typeof o)throw new TypeError("Finishers must return a constructor.");e=o}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}();if(o)for(var r=0;r<o.length;r++)n=o[r](n);var s=t(function(e){n.initializeInstanceElements(e,a.elements)},i),a=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===r.key&&e.placement===r.placement},o=0;o<e.length;o++){var n,r=e[o];if("method"===r.kind&&(n=t.find(i)))if(h(r.descriptor)||h(n.descriptor)){if(p(r)||p(n))throw new ReferenceError("Duplicated methods ("+r.key+") can't be decorated.");n.descriptor=r.descriptor}else{if(p(r)){if(p(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+r.key+").");n.decorators=r.decorators}d(r,n)}else t.push(r)}return t}(s.d.map(c)),e);return n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([Object(o.d)("ha-voice-command-dialog")],function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[Object(o.f)()],key:"hass",value:void 0},{kind:"field",decorators:[Object(o.f)()],key:"results",value:()=>null},{kind:"field",decorators:[Object(o.f)()],key:"_conversation",value:()=>[{who:"hass",text:""}]},{kind:"field",decorators:[Object(o.f)()],key:"_opened",value:()=>!1},{kind:"field",decorators:[Object(o.f)()],key:"_agentInfo",value:void 0},{kind:"field",decorators:[Object(o.g)("#messages")],key:"messages",value:void 0},{kind:"field",key:"recognition",value:void 0},{kind:"field",key:"_conversationId",value:void 0},{kind:"method",key:"showDialog",value:async function(){this._opened=!0,r&&this._startListening(),this._agentInfo=await(e=>e.callWS({type:"conversation/agent/info"}))(this.hass)}},{kind:"method",key:"render",value:function(){return o.e`
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
            label="${this.hass.localize(`ui.dialogs.voice_command.${r?"label_voice":"label"}`)}"
            autofocus
          >
            ${r?o.e`
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
    `}},{kind:"method",key:"firstUpdated",value:function(e){m(g(i.prototype),"updated",this).call(this,e),this._conversationId=l()+l()+l()+l()+l(),this._conversation=[{who:"hass",text:this.hass.localize("ui.dialogs.voice_command.how_can_i_help")}]}},{kind:"method",key:"updated",value:function(e){m(g(i.prototype),"updated",this).call(this,e),(e.has("_conversation")||e.has("results"))&&this._scrollMessagesBottom()}},{kind:"method",key:"_addMessage",value:function(e){this._conversation=[...this._conversation,e]}},{kind:"method",key:"_handleKeyUp",value:function(e){const t=e.target;13===e.keyCode&&t.value&&(this._processText(t.value),t.value="")}},{kind:"method",key:"_completeOnboarding",value:function(){((e,t)=>e.callWS({type:"conversation/onboarding/set",shown:t}))(this.hass,!0),this._agentInfo=Object.assign({},this._agentInfo,{onboarding:void 0})}},{kind:"method",key:"_initRecognition",value:function(){this.recognition=new r,this.recognition.interimResults=!0,this.recognition.lang="en-US",this.recognition.onstart=()=>{this.results={final:!1,transcript:""}},this.recognition.onerror=e=>{if(this.recognition.abort(),"aborted"!==e.error){const e=this.results&&this.results.transcript?this.results.transcript:`<${this.hass.localize("ui.dialogs.voice_command.did_not_hear")}>`;this._addMessage({who:"user",text:e,error:!0})}this.results=null},this.recognition.onend=()=>{if(null==this.results)return;const e=this.results.transcript;this.results=null,e?this._processText(e):this._addMessage({who:"user",text:`<${this.hass.localize("ui.dialogs.voice_command.did_not_hear")}>`,error:!0})},this.recognition.onresult=e=>{const t=e.results[0];this.results={transcript:t[0].transcript,final:t.isFinal}}}},{kind:"method",key:"_processText",value:async function(e){this.recognition&&this.recognition.abort(),this._addMessage({who:"user",text:e});const t={who:"hass",text:"…"};this._addMessage(t);try{const i=(await((e,t,i)=>e.callWS({type:"conversation/process",text:t,conversation_id:i}))(this.hass,e,this._conversationId)).speech.plain;t.text=i.speech,this.requestUpdate("_conversation")}catch{t.text=this.hass.localize("ui.dialogs.voice_command.error"),t.error=!0,this.requestUpdate("_conversation")}}},{kind:"method",key:"_toggleListening",value:function(){this.results?this.recognition.stop():this._startListening()}},{kind:"method",key:"_startListening",value:function(){this.recognition||this._initRecognition(),this.results||(this.results={transcript:"",final:!1},this.recognition.start())}},{kind:"method",key:"_scrollMessagesBottom",value:function(){this.messages.scrollTarget.scrollTop=this.messages.scrollTarget.scrollHeight,0===this.messages.scrollTarget.scrollTop&&Object(n.a)(this.messages,"iron-resize")}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value,!this._opened&&this.recognition&&this.recognition.abort()}},{kind:"method",key:"_computeMessageClasses",value:function(e){return`message ${e.who} ${e.error?" error":""}`}},{kind:"get",static:!0,key:"styles",value:function(){return[a.b,o.c`
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
//# sourceMappingURL=chunk.fdb21ee8db8761490416.js.map