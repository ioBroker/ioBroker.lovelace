(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2420],{28417:function(e,t,n){"use strict";n(50808);var r=n(33367),o=n(93592),i=n(87156),a={getTabbableNodes:function(e){var t=[];return this._collectTabbableNodes(e,t)?o.H._sortByTabIndex(t):t},_collectTabbableNodes:function(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!o.H._isVisible(e))return!1;var n,r=e,a=o.H._normalizedTabIndex(r),s=a>0;a>=0&&t.push(r),n="content"===r.localName||"slot"===r.localName?(0,i.vz)(r).getDistributedNodes():(0,i.vz)(r.shadowRoot||r.root||r).children;for(var c=0;c<n.length;c++)s=this._collectTabbableNodes(n[c],t)||s;return s}};function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=customElements.get("paper-dialog"),h={get _focusableNodes(){return a.getTabbableNodes(this)}},m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(n,e);var t=u(n);function n(){return c(this,n),t.apply(this,arguments)}return n}((0,r.P)([h],f));customElements.define("ha-paper-dialog",m)},72420:function(e,t,n){"use strict";n.r(t),n.d(t,{HaVoiceCommandDialog:function(){return U}});n(22626),n(30879);var r=n(50424),o=n(55358),i=n(76666),a=n(47181),s=window.SpeechRecognition||window.webkitSpeechRecognition;window.SpeechGrammarList||window.webkitSpeechGrammarList,window.SpeechRecognitionEvent||window.webkitSpeechRecognitionEvent;function c(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}n(28417),n(10983);var l,u,d,p,f,h,m,v,y=function(e,t,n){return e.callWS({type:"conversation/process",text:t,conversation_id:n})},b=n(11654);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e){return function(e){if(Array.isArray(e))return N(e)}(e)||B(e)||M(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,o)}function x(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){_(i,r,o,a,s,"next",e)}function s(e){_(i,r,o,a,s,"throw",e)}a(void 0)}))}}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=L(e);if(t){var o=L(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return T(this,n)}}function T(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?P(e):t}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(){R=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var o=t.placement;if(t.kind===r&&("static"===o||"prototype"===o)){var i="static"===o?e:n;this.defineClassElement(i,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var r=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],r=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!C(e))return n.push(e);var t=this.decorateElement(e,o);n.push(t.element),n.push.apply(n,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:n,finishers:r};var i=this.decorateConstructor(n,t);return r.push.apply(r,i.finishers),i.finishers=r,i},addElementPlacement:function(e,t,n){var r=t[e.placement];if(!n&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var n=[],r=[],o=e.decorators,i=o.length-1;i>=0;i--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,o[i])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&r.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);n.push.apply(n,l)}}return{element:e,finishers:r,extras:n}},decorateConstructor:function(e,t){for(var n=[],r=t.length-1;r>=0;r--){var o=this.fromClassDescriptor(e),i=this.toClassDescriptor((0,t[r])(o)||o);if(void 0!==i.finisher&&n.push(i.finisher),void 0!==i.elements){e=i.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||B(t)||M(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=A(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var i={kind:t,key:n,placement:r,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),i.initializer=e.initializer),i},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:D(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=D(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var r=(0,t[n])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function j(e){var t,n=A(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function z(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function C(e){return e.decorators&&e.decorators.length}function I(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function D(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function A(e){var t=function(e,t){if("object"!==g(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===g(t)?t:String(t)}function M(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function B(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function F(e,t,n){return(F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var U=function(e,t,n,r){var o=R();if(r)for(var i=0;i<r.length;i++)o=r[i](o);var a=t((function(e){o.initializeInstanceElements(e,s.elements)}),n),s=o.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===i.key&&e.placement===i.placement},r=0;r<e.length;r++){var o,i=e[r];if("method"===i.kind&&(o=t.find(n)))if(I(i.descriptor)||I(o.descriptor)){if(C(i)||C(o))throw new ReferenceError("Duplicated methods ("+i.key+") can't be decorated.");o.descriptor=i.descriptor}else{if(C(i)){if(C(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+i.key+").");o.decorators=i.decorators}z(i,o)}else t.push(i)}return t}(a.d.map(j)),e);return o.initializeClassElements(a.F,s.elements),o.runClassFinishers(a.F,s.finishers)}([(0,o.Mo)("ha-voice-command-dialog")],(function(e,t){var n,g,_=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(r,t);var n=O(r);function r(){var t;E(this,r);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=n.call.apply(n,[this].concat(i)),e(P(t)),t}return r}(t);return{F:_,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"results",value:function(){return null}},{kind:"field",decorators:[(0,o.SB)()],key:"_conversation",value:function(){return[{who:"hass",text:""}]}},{kind:"field",decorators:[(0,o.SB)()],key:"_opened",value:function(){return!1}},{kind:"field",decorators:[(0,o.SB)()],key:"_agentInfo",value:void 0},{kind:"field",decorators:[(0,o.IO)("#messages",!0)],key:"messages",value:void 0},{kind:"field",key:"recognition",value:void 0},{kind:"field",key:"_conversationId",value:void 0},{kind:"method",key:"showDialog",value:(g=x(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._opened=!0,s&&this._startListening(),e.next=4,this.hass.callWS({type:"conversation/agent/info"});case 4:this._agentInfo=e.sent;case 5:case"end":return e.stop()}}),e,this)}))),function(){return g.apply(this,arguments)})},{kind:"method",key:"render",value:function(){var e=this;return(0,r.dy)(l||(l=k(["\n      <style>\n        paper-dialog-scrollable {\n          --paper-dialog-scrollable: {\n            -webkit-overflow-scrolling: auto;\n            max-height: 50vh !important;\n          }\n        }\n\n        paper-dialog-scrollable.can-scroll {\n          --paper-dialog-scrollable: {\n            -webkit-overflow-scrolling: touch;\n            max-height: 50vh !important;\n          }\n        }\n\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          paper-dialog-scrollable {\n            --paper-dialog-scrollable: {\n              -webkit-overflow-scrolling: auto;\n              max-height: calc(100vh - 175px) !important;\n            }\n          }\n\n          paper-dialog-scrollable.can-scroll {\n            --paper-dialog-scrollable: {\n              -webkit-overflow-scrolling: touch;\n              max-height: calc(100vh - 175px) !important;\n            }\n          }\n        }\n      </style>\n      <ha-paper-dialog\n        with-backdrop\n        .opened=","\n        @opened-changed=","\n      >\n        ",'\n        <paper-dialog-scrollable\n          id="messages"\n          class=',"\n        >\n          ","\n          ",'\n        </paper-dialog-scrollable>\n        <div class="input">\n          <paper-input\n            @keyup=','\n            .label="','"\n            autofocus\n          >\n            ',"\n          </paper-input>\n          ","\n        </div>\n      </ha-paper-dialog>\n    "])),this._opened,this._openedChanged,this._agentInfo&&this._agentInfo.onboarding?(0,r.dy)(u||(u=k(['\n              <div class="onboarding">\n                ','\n                <div class="side-by-side" @click=','>\n                  <a\n                    class="button"\n                    href="','"\n                    target="_blank"\n                    rel="noreferrer"\n                    ><mwc-button unelevated\n                      >',"!</mwc-button\n                    ></a\n                  >\n                  <mwc-button outlined\n                    >","</mwc-button\n                  >\n                </div>\n              </div>\n            "])),this._agentInfo.onboarding.text,this._completeOnboarding,this._agentInfo.onboarding.url,this.hass.localize("ui.common.yes"),this.hass.localize("ui.common.no")):"",(0,i.$)({"top-border":Boolean(this._agentInfo&&this._agentInfo.onboarding)}),this._conversation.map((function(t){return(0,r.dy)(d||(d=k(['\n              <div class="','">\n                ',"\n              </div>\n            "])),e._computeMessageClasses(t),t.text)})),this.results?(0,r.dy)(p||(p=k(['\n                <div class="message user">\n                  <span\n                    class=',"\n                    >","</span\n                  >","\n                </div>\n              "])),(0,i.$)({interimTranscript:!this.results.final}),this.results.transcript,this.results.final?"":"…"):"",this._handleKeyUp,this.hass.localize("ui.dialogs.voice_command.".concat(s?"label_voice":"label")),s?(0,r.dy)(f||(f=k(['\n                  <span suffix="" slot="suffix">\n                    ','\n                    <ha-icon-button\n                      icon="hass:microphone"\n                      @click=',"\n                    >\n                    </ha-icon-button>\n                  </span>\n                "])),this.results?(0,r.dy)(h||(h=k(['\n                          <div class="bouncer">\n                            <div class="double-bounce1"></div>\n                            <div class="double-bounce2"></div>\n                          </div>\n                        ']))):"",this._toggleListening):"",this._agentInfo&&this._agentInfo.attribution?(0,r.dy)(m||(m=k(["\n                <a\n                  href=",'\n                  class="attribution"\n                  target="_blank"\n                  rel="noreferrer"\n                  >',"</a\n                >\n              "])),this._agentInfo.attribution.url,this._agentInfo.attribution.name):"")}},{kind:"method",key:"firstUpdated",value:function(e){F(L(_.prototype),"updated",this).call(this,e),this._conversationId=c()+c()+c()+c()+c(),this._conversation=[{who:"hass",text:this.hass.localize("ui.dialogs.voice_command.how_can_i_help")}]}},{kind:"method",key:"updated",value:function(e){F(L(_.prototype),"updated",this).call(this,e),(e.has("_conversation")||e.has("results"))&&this._scrollMessagesBottom()}},{kind:"method",key:"_addMessage",value:function(e){this._conversation=[].concat(w(this._conversation),[e])}},{kind:"method",key:"_handleKeyUp",value:function(e){var t=e.target;13===e.keyCode&&t.value&&(this._processText(t.value),t.value="")}},{kind:"method",key:"_completeOnboarding",value:function(){var e,t;e=this.hass,t=!0,e.callWS({type:"conversation/onboarding/set",shown:t}),this._agentInfo=Object.assign({},this._agentInfo,{onboarding:void 0})}},{kind:"method",key:"_initRecognition",value:function(){var e=this;this.recognition=new s,this.recognition.interimResults=!0,this.recognition.lang="en-US",this.recognition.onstart=function(){e.results={final:!1,transcript:""}},this.recognition.onerror=function(t){if(e.recognition.abort(),"aborted"!==t.error){var n=e.results&&e.results.transcript?e.results.transcript:"<".concat(e.hass.localize("ui.dialogs.voice_command.did_not_hear"),">");e._addMessage({who:"user",text:n,error:!0})}e.results=null},this.recognition.onend=function(){if(null!=e.results){var t=e.results.transcript;e.results=null,t?e._processText(t):e._addMessage({who:"user",text:"<".concat(e.hass.localize("ui.dialogs.voice_command.did_not_hear"),">"),error:!0})}},this.recognition.onresult=function(t){var n=t.results[0];e.results={transcript:n[0].transcript,final:n.isFinal}}}},{kind:"method",key:"_processText",value:(n=x(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.recognition&&this.recognition.abort(),this._addMessage({who:"user",text:t}),n={who:"hass",text:"…"},this._addMessage(n),e.prev=4,e.next=7,y(this.hass,t,this._conversationId);case 7:r=e.sent,o=r.speech.plain,n.text=o.speech,this.requestUpdate("_conversation"),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(4),n.text=this.hass.localize("ui.dialogs.voice_command.error"),n.error=!0,this.requestUpdate("_conversation");case 18:case"end":return e.stop()}}),e,this,[[4,13]])}))),function(e){return n.apply(this,arguments)})},{kind:"method",key:"_toggleListening",value:function(){this.results?this.recognition.stop():this._startListening()}},{kind:"method",key:"_startListening",value:function(){this.recognition||this._initRecognition(),this.results||(this.results={transcript:"",final:!1},this.recognition.start())}},{kind:"method",key:"_scrollMessagesBottom",value:function(){this.messages.scrollTarget.scrollTop=this.messages.scrollTarget.scrollHeight,0===this.messages.scrollTarget.scrollTop&&(0,a.B)(this.messages,"iron-resize")}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value,!this._opened&&this.recognition&&this.recognition.abort()}},{kind:"method",key:"_computeMessageClasses",value:function(e){return"message ".concat(e.who," ").concat(e.error?" error":"")}},{kind:"get",static:!0,key:"styles",value:function(){return[b.yu,(0,r.iv)(v||(v=k(['\n        :host {\n          z-index: 103;\n        }\n\n        ha-icon-button {\n          color: var(--secondary-text-color);\n        }\n\n        ha-icon-button[active] {\n          color: var(--primary-color);\n        }\n\n        .input {\n          margin: 0 0 16px 0;\n        }\n\n        ha-paper-dialog {\n          width: 450px;\n        }\n        a.button {\n          text-decoration: none;\n        }\n        a.button > mwc-button {\n          width: 100%;\n        }\n        .onboarding {\n          padding: 0 24px;\n        }\n        paper-dialog-scrollable.top-border::before {\n          content: "";\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          height: 1px;\n          background: var(--divider-color);\n        }\n        .side-by-side {\n          display: flex;\n          margin: 8px 0;\n        }\n        .side-by-side > * {\n          flex: 1 0;\n          padding: 4px;\n        }\n        .attribution {\n          color: var(--secondary-text-color);\n        }\n        .message {\n          font-size: 18px;\n          clear: both;\n          margin: 8px 0;\n          padding: 8px;\n          border-radius: 15px;\n        }\n\n        .message.user {\n          margin-left: 24px;\n          float: right;\n          text-align: right;\n          border-bottom-right-radius: 0px;\n          background-color: var(--light-primary-color);\n          color: var(--text-light-primary-color, var(--primary-text-color));\n        }\n\n        .message.hass {\n          margin-right: 24px;\n          float: left;\n          border-bottom-left-radius: 0px;\n          background-color: var(--primary-color);\n          color: var(--text-primary-color);\n        }\n\n        .message a {\n          color: var(--text-primary-color);\n        }\n\n        .message img {\n          width: 100%;\n          border-radius: 10px;\n        }\n\n        .message.error {\n          background-color: var(--error-color);\n          color: var(--text-primary-color);\n        }\n\n        .interimTranscript {\n          color: var(--secondary-text-color);\n        }\n\n        .bouncer {\n          width: 48px;\n          height: 48px;\n          position: absolute;\n          top: 0;\n        }\n        .double-bounce1,\n        .double-bounce2 {\n          width: 48px;\n          height: 48px;\n          border-radius: 50%;\n          background-color: var(--primary-color);\n          opacity: 0.2;\n          position: absolute;\n          top: 0;\n          left: 0;\n          -webkit-animation: sk-bounce 2s infinite ease-in-out;\n          animation: sk-bounce 2s infinite ease-in-out;\n        }\n        .double-bounce2 {\n          -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n        }\n        @-webkit-keyframes sk-bounce {\n          0%,\n          100% {\n            -webkit-transform: scale(0);\n          }\n          50% {\n            -webkit-transform: scale(1);\n          }\n        }\n        @keyframes sk-bounce {\n          0%,\n          100% {\n            transform: scale(0);\n            -webkit-transform: scale(0);\n          }\n          50% {\n            transform: scale(1);\n            -webkit-transform: scale(1);\n          }\n        }\n\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          .message {\n            font-size: 16px;\n          }\n        }\n      '])))]}}]}}),r.oi)}}]);
//# sourceMappingURL=chunk.3bb313e8744d91c190b2.js.map