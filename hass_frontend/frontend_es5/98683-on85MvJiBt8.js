"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[98683],{349:function(e,t,i){i.d(t,{m:function(){return s}});var n=i(71650),o=i(33368),a=function(){function e(){var t=this,i=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.localStorage;(0,n.Z)(this,e),this.storage=void 0,this._storage={},this._listeners={},this.storage=o,i&&window.addEventListener("storage",(function(e){e.key&&t.hasKey(e.key)&&(t._storage[e.key]=e.newValue?JSON.parse(e.newValue):e.newValue,t._listeners[e.key]&&t._listeners[e.key].forEach((function(i){return i(e.oldValue?JSON.parse(e.oldValue):e.oldValue,t._storage[e.key])})))}))}return(0,o.Z)(e,[{key:"addFromStorage",value:function(e){if(!this._storage[e]){var t=this.storage.getItem(e);t&&(this._storage[e]=JSON.parse(t))}}},{key:"subscribeChanges",value:function(e,t){var i=this;return this._listeners[e]?this._listeners[e].push(t):this._listeners[e]=[t],function(){i.unsubscribeChanges(e,t)}}},{key:"unsubscribeChanges",value:function(e,t){if(e in this._listeners){var i=this._listeners[e].indexOf(t);-1!==i&&this._listeners[e].splice(i,1)}}},{key:"hasKey",value:function(e){return e in this._storage}},{key:"getValue",value:function(e){return this._storage[e]}},{key:"setValue",value:function(e,t){this._storage[e]=t;try{void 0===t?this.storage.removeItem(e):this.storage.setItem(e,JSON.stringify(t))}catch(i){}}}]),e}(),r=new a,s=function(e,t){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;return function(s){var d=i&&!n?r:new a(i,n),l=String(s.key);e=e||String(s.key);var c=s.initializer?s.initializer():void 0;d.addFromStorage(e);var u=function(){return d.hasKey(e)?d.getValue(e):c};return{kind:"method",placement:"prototype",key:s.key,descriptor:{set:function(i){!function(i,n){var o;t&&(o=u()),d.setValue(e,n),t&&i.requestUpdate(s.key,o)}(this,i)},get:function(){return u()},enumerable:!0,configurable:!0},finisher:function(n){if(t&&i){var a=n.prototype.connectedCallback,r=n.prototype.disconnectedCallback;n.prototype.connectedCallback=function(){var t;a.call(this),this["__unbsubLocalStorage".concat(l)]=(t=this,d.subscribeChanges(e,(function(e){t.requestUpdate(s.key,e)})))},n.prototype.disconnectedCallback=function(){r.call(this),this["__unbsubLocalStorage".concat(l)]()}}t&&n.createProperty(s.key,Object.assign({noAccessor:!0},o))}}}}},32594:function(e,t,i){i.d(t,{U:function(){return n}});var n=function(e){return e.stopPropagation()}},81545:function(e,t,i){var n,o,a=i(88962),r=i(33368),s=i(71650),d=i(82390),l=i(69205),c=i(70906),u=i(91808),h=i(88771),p=i(47838),v=(i(65666),i(68144)),g=i(79932),f=i(74265);(0,u.Z)([(0,g.Mo)("ha-button-menu")],(function(e,t){var i=function(t){(0,l.Z)(n,t);var i=(0,c.Z)(n);function n(){var t;(0,s.Z)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return t=i.call.apply(i,[this].concat(a)),e((0,d.Z)(t)),t}return(0,r.Z)(n)}(t);return{F:i,d:[{kind:"field",key:f.gA,value:void 0},{kind:"field",decorators:[(0,g.Cb)()],key:"corner",value:function(){return"BOTTOM_START"}},{kind:"field",decorators:[(0,g.Cb)()],key:"menuCorner",value:function(){return"START"}},{kind:"field",decorators:[(0,g.Cb)({type:Number})],key:"x",value:function(){return null}},{kind:"field",decorators:[(0,g.Cb)({type:Number})],key:"y",value:function(){return null}},{kind:"field",decorators:[(0,g.Cb)({type:Boolean})],key:"multi",value:function(){return!1}},{kind:"field",decorators:[(0,g.Cb)({type:Boolean})],key:"activatable",value:function(){return!1}},{kind:"field",decorators:[(0,g.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,g.Cb)({type:Boolean})],key:"fixed",value:function(){return!1}},{kind:"field",decorators:[(0,g.IO)("mwc-menu",!0)],key:"_menu",value:void 0},{kind:"get",key:"items",value:function(){var e;return null===(e=this._menu)||void 0===e?void 0:e.items}},{kind:"get",key:"selected",value:function(){var e;return null===(e=this._menu)||void 0===e?void 0:e.selected}},{kind:"method",key:"focus",value:function(){var e,t;null!==(e=this._menu)&&void 0!==e&&e.open?this._menu.focusItemAtIndex(0):null===(t=this._triggerButton)||void 0===t||t.focus()}},{kind:"method",key:"render",value:function(){return(0,v.dy)(n||(n=(0,a.Z)([' <div @click="','"> <slot name="trigger" @slotchange="','"></slot> </div> <mwc-menu .corner="','" .menuCorner="','" .fixed="','" .multi="','" .activatable="','" .y="','" .x="','"> <slot></slot> </mwc-menu> '])),this._handleClick,this._setTriggerAria,this.corner,this.menuCorner,this.fixed,this.multi,this.activatable,this.y,this.x)}},{kind:"method",key:"firstUpdated",value:function(e){var t=this;(0,h.Z)((0,p.Z)(i.prototype),"firstUpdated",this).call(this,e),"rtl"===document.dir&&this.updateComplete.then((function(){t.querySelectorAll("mwc-list-item").forEach((function(e){var t=document.createElement("style");t.innerHTML="span.material-icons:first-of-type { margin-left: var(--mdc-list-item-graphic-margin, 32px) !important; margin-right: 0px !important;}",e.shadowRoot.appendChild(t)}))}))}},{kind:"method",key:"_handleClick",value:function(){this.disabled||(this._menu.anchor=this,this._menu.show())}},{kind:"get",key:"_triggerButton",value:function(){return this.querySelector('ha-icon-button[slot="trigger"], mwc-button[slot="trigger"]')}},{kind:"method",key:"_setTriggerAria",value:function(){this._triggerButton&&(this._triggerButton.ariaHasPopup="menu")}},{kind:"get",static:!0,key:"styles",value:function(){return(0,v.iv)(o||(o=(0,a.Z)([":host{display:inline-block;position:relative}::slotted([disabled]){color:var(--disabled-text-color)}"])))}}]}}),v.oi)},61878:function(e,t,i){var n,o,a=i(88962),r=i(33368),s=i(71650),d=i(82390),l=i(69205),c=i(70906),u=i(91808),h=i(68144),p=i(79932);(0,u.Z)([(0,p.Mo)("ha-dialog-header")],(function(e,t){var i=function(t){(0,l.Z)(n,t);var i=(0,c.Z)(n);function n(){var t;(0,s.Z)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return t=i.call.apply(i,[this].concat(a)),e((0,d.Z)(t)),t}return(0,r.Z)(n)}(t);return{F:i,d:[{kind:"method",key:"render",value:function(){return(0,h.dy)(n||(n=(0,a.Z)([' <header class="header"> <div class="header-bar"> <section class="header-navigation-icon"> <slot name="navigationIcon"></slot> </section> <section class="header-title"> <slot name="title"></slot> </section> <section class="header-action-items"> <slot name="actionItems"></slot> </section> </div> <slot></slot> </header> '])))}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,h.iv)(o||(o=(0,a.Z)([":host{display:block}:host([show-border]){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.header-bar{display:flex;flex-direction:row;align-items:flex-start;padding:4px;box-sizing:border-box}.header-title{flex:1;font-size:22px;line-height:28px;font-weight:400;padding:10px 4px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media all and (min-width:450px) and (min-height:500px){.header-bar{padding:12px}}.header-navigation-icon{flex:none;min-width:8px;height:100%;display:flex;flex-direction:row}.header-action-items{flex:none;min-width:8px;height:100%;display:flex;flex-direction:row}"])))]}}]}}),h.oi)},34821:function(e,t,i){i.d(t,{i:function(){return b}});var n,o,a,r=i(33368),s=i(71650),d=i(82390),l=i(69205),c=i(70906),u=i(91808),h=i(88771),p=i(47838),v=i(88962),g=i(87762),f=i(91632),m=i(68144),_=i(79932),y=i(74265),k=(i(10983),["button","ha-list-item"]),b=function(e,t){return(0,m.dy)(n||(n=(0,v.Z)([' <div class="header_title">','</div> <ha-icon-button .label="','" .path="','" dialogAction="close" class="header_button"></ha-icon-button> '])),t,e.localize("ui.dialogs.generic.close"),"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z")};(0,u.Z)([(0,_.Mo)("ha-dialog")],(function(e,t){var i=function(t){(0,l.Z)(n,t);var i=(0,c.Z)(n);function n(){var t;(0,s.Z)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return t=i.call.apply(i,[this].concat(a)),e((0,d.Z)(t)),t}return(0,r.Z)(n)}(t);return{F:i,d:[{kind:"field",key:y.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,t){var i;null===(i=this.contentElement)||void 0===i||i.scrollTo(e,t)}},{kind:"method",key:"renderHeading",value:function(){return(0,m.dy)(o||(o=(0,v.Z)(['<slot name="heading"> '," </slot>"])),(0,h.Z)((0,p.Z)(i.prototype),"renderHeading",this).call(this))}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,h.Z)((0,p.Z)(i.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,k].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,h.Z)((0,p.Z)(i.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value:function(){var e=this;return function(){e._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:function(){return[f.W,(0,m.iv)(a||(a=(0,v.Z)([":host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(\n          --dialog-scroll-divider-color,\n          var(--divider-color)\n        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter, none);backdrop-filter:var(--dialog-backdrop-filter, none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:nth-child(1){flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}"])))]}}]}}),g.M)},57927:function(e,t,i){i.d(t,{Vk:function(){return o},rM:function(){return n}});var n=function(e,t,i){return e.callWS({type:"conversation/agent/list",language:t,country:i})},o=function(e,t){return e.callWS({type:"conversation/agent/info",agent_id:t})}},98683:function(e,t,i){i.r(t),i.d(t,{HaVoiceCommandDialog:function(){return H}});var n,o,a,r,s,d,l,c,u,h,p,v,g=i(40039),f=i(53709),m=i(88962),_=i(99312),y=i(81043),k=i(33368),b=i(71650),x=i(82390),w=i(69205),Z=i(70906),L=i(91808),A=i(88771),C=i(47838),S=(i(53918),i(68144)),I=i(79932),M=i(349),B=i(47181),z=i(32594),V=(i(74834),i(81545),i(34821),i(10983),i(73366),i(3555),i(61878),i(69949)),E=i(57927),U=i(11654),P=i(53353),R=i(27322),T=i(26765),H=(0,L.Z)([(0,I.Mo)("ha-voice-command-dialog")],(function(e,t){var i,L,H,q,O,N,D,F,K=function(t){(0,w.Z)(n,t);var i=(0,Z.Z)(n);function n(){var t;(0,b.Z)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return t=i.call.apply(i,[this].concat(a)),e((0,x.Z)(t)),t}return(0,k.Z)(n)}(t);return{F:K,d:[{kind:"field",decorators:[(0,I.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,I.SB)()],key:"_conversation",value:void 0},{kind:"field",decorators:[(0,I.SB)()],key:"_opened",value:function(){return!1}},{kind:"field",decorators:[(0,M.m)("AssistPipelineId",!0,!1)],key:"_pipelineId",value:void 0},{kind:"field",decorators:[(0,I.SB)()],key:"_pipeline",value:void 0},{kind:"field",decorators:[(0,I.SB)()],key:"_agentInfo",value:void 0},{kind:"field",decorators:[(0,I.SB)()],key:"_showSendButton",value:function(){return!1}},{kind:"field",decorators:[(0,I.SB)()],key:"_pipelines",value:void 0},{kind:"field",decorators:[(0,I.SB)()],key:"_preferredPipeline",value:void 0},{kind:"field",decorators:[(0,I.IO)("#scroll-container")],key:"_scrollContainer",value:void 0},{kind:"field",decorators:[(0,I.IO)("#message-input")],key:"_messageInput",value:void 0},{kind:"field",key:"_conversationId",value:function(){return null}},{kind:"field",key:"_audioRecorder",value:void 0},{kind:"field",key:"_audioBuffer",value:void 0},{kind:"field",key:"_audio",value:void 0},{kind:"field",key:"_stt_binary_handler_id",value:void 0},{kind:"method",key:"showDialog",value:(F=(0,y.Z)((0,_.Z)().mark((function e(){return(0,_.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._conversation=[{who:"hass",text:this.hass.localize("ui.dialogs.voice_command.how_can_i_help")}],this._opened=!0,e.next=4,this.updateComplete;case 4:this._scrollMessagesBottom();case 5:case"end":return e.stop()}}),e,this)}))),function(){return F.apply(this,arguments)})},{kind:"method",key:"closeDialog",value:(D=(0,y.Z)((0,_.Z)().mark((function e(){var t,i;return(0,_.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._opened=!1,this._pipeline=void 0,this._pipelines=void 0,this._agentInfo=void 0,this._conversation=void 0,this._conversationId=null,null===(t=this._audioRecorder)||void 0===t||t.close(),this._audioRecorder=void 0,null===(i=this._audio)||void 0===i||i.pause(),(0,B.B)(this,"dialog-closed",{dialog:this.localName});case 10:case"end":return e.stop()}}),e,this)}))),function(){return D.apply(this,arguments)})},{kind:"method",key:"render",value:function(){var e,t,i,h,p=this;if(!this._opened)return S.Ld;var v=P.h.isSupported,g=null===(e=this._pipeline)||void 0===e?void 0:e.stt_engine;return(0,S.dy)(n||(n=(0,m.Z)([' <ha-dialog open @closed="','" .heading="','" flexContent> <ha-dialog-header slot="heading"> <ha-icon-button slot="navigationIcon" dialogAction="cancel" .label="','" .path="','"></ha-icon-button> <div slot="title"> ',' <ha-button-menu @opened="','" @closed="','" activatable fixed> <ha-button slot="trigger"> ',' <ha-svg-icon slot="trailingIcon" .path="','"></ha-svg-icon> </ha-button> '," ",' </ha-button-menu> </div> <a href="','" slot="actionItems" target="_blank" rel="noopener noreferer"> <ha-icon-button .label="','" .path="','"></ha-icon-button> </a> </ha-dialog-header> <div class="messages"> <div class="messages-container" id="scroll-container"> ',' </div> </div> <div class="input" slot="primaryAction"> <ha-textfield id="message-input" @keyup="','" @input="','" .label="','" dialogInitialFocus iconTrailing> <span slot="trailingIcon"> '," </span> </ha-textfield> "," </div> </ha-dialog> "])),this.closeDialog,this.hass.localize("ui.dialogs.voice_command.title"),this.hass.localize("ui.common.close"),"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",this.hass.localize("ui.dialogs.voice_command.title"),this._loadPipelines,z.U,null===(t=this._pipeline)||void 0===t?void 0:t.name,"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",null===(i=this._pipelines)||void 0===i?void 0:i.map((function(e){return(0,S.dy)(o||(o=(0,m.Z)(['<ha-list-item ?selected="','" .pipeline="','" @click="','" .hasMeta="','"> ',""," </ha-list-item>"])),e.id===p._pipelineId||!p._pipelineId&&e.id===p._preferredPipeline,e.id,p._selectPipeline,e.id===p._preferredPipeline,e.name,e.id===p._preferredPipeline?(0,S.dy)(a||(a=(0,m.Z)([' <ha-svg-icon slot="meta" .path="','"></ha-svg-icon> '])),"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"):S.Ld)})),S.Ld,(0,R.R)(this.hass,"/docs/assist/"),this.hass.localize("ui.common.help"),"M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z",this._conversation.map((function(e){return(0,S.dy)(r||(r=(0,m.Z)([' <div class="','"> '," </div> "])),p._computeMessageClasses(e),e.text)})),this._handleKeyUp,this._handleInput,this.hass.localize("ui.dialogs.voice_command.input_label"),this._showSendButton||!g?(0,S.dy)(s||(s=(0,m.Z)([' <ha-icon-button class="listening-icon" .path="','" @click="','" .label="','"> </ha-icon-button> '])),"M2,21L23,12L2,3V10L17,12L2,14V21Z",this._handleSendMessage,this.hass.localize("ui.dialogs.voice_command.send_text")):(0,S.dy)(d||(d=(0,m.Z)([" ",' <div class="listening-icon"> <ha-icon-button .path="','" @click="','" .label="','"> </ha-icon-button> '," </div> "])),null!==(h=this._audioRecorder)&&void 0!==h&&h.active?(0,S.dy)(l||(l=(0,m.Z)([' <div class="bouncer"> <div class="double-bounce1"></div> <div class="double-bounce2"></div> </div> ']))):S.Ld,"M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z",this._toggleListening,this.hass.localize("ui.dialogs.voice_command.start_listening"),v?null:(0,S.dy)(c||(c=(0,m.Z)([' <ha-svg-icon .path="','" class="unsupported"></ha-svg-icon> '])),"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z")),this._agentInfo&&this._agentInfo.attribution?(0,S.dy)(u||(u=(0,m.Z)([' <a href="','" class="attribution" target="_blank" rel="noreferrer">',"</a> "])),this._agentInfo.attribution.url,this._agentInfo.attribution.name):"")}},{kind:"method",key:"willUpdate",value:function(e){(e.has("_pipelineId")||e.has("_opened")&&!0===this._opened)&&this._getPipeline()}},{kind:"method",key:"_getPipeline",value:(N=(0,y.Z)((0,_.Z)().mark((function e(){return(0,_.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,V.PA)(this.hass,this._pipelineId);case 3:this._pipeline=e.sent,e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),"not_found"===e.t0.code&&(this._pipelineId=void 0),e.abrupt("return");case 10:return e.next=12,(0,E.Vk)(this.hass,this._pipeline.conversation_engine);case 12:this._agentInfo=e.sent;case 13:case"end":return e.stop()}}),e,this,[[0,6]])}))),function(){return N.apply(this,arguments)})},{kind:"method",key:"_loadPipelines",value:(O=(0,y.Z)((0,_.Z)().mark((function e(){var t,i,n;return(0,_.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._pipelines){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,V.SC)(this.hass);case 4:t=e.sent,i=t.pipelines,n=t.preferred_pipeline,this._pipelines=i,this._preferredPipeline=n||void 0;case 9:case"end":return e.stop()}}),e,this)}))),function(){return O.apply(this,arguments)})},{kind:"method",key:"_selectPipeline",value:(q=(0,y.Z)((0,_.Z)().mark((function e(t){return(0,_.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._pipelineId=t.currentTarget.pipeline,this._conversation=[{who:"hass",text:this.hass.localize("ui.dialogs.voice_command.how_can_i_help")}],e.next=4,this.updateComplete;case 4:this._scrollMessagesBottom();case 5:case"end":return e.stop()}}),e,this)}))),function(e){return q.apply(this,arguments)})},{kind:"method",key:"updated",value:function(e){(0,A.Z)((0,C.Z)(K.prototype),"updated",this).call(this,e),(e.has("_conversation")||e.has("results"))&&this._scrollMessagesBottom()}},{kind:"method",key:"_addMessage",value:function(e){this._conversation=[].concat((0,f.Z)(this._conversation),[e])}},{kind:"method",key:"_handleKeyUp",value:function(e){var t=e.target;"Enter"===e.key&&t.value&&(this._processText(t.value),t.value="",this._showSendButton=!1)}},{kind:"method",key:"_handleInput",value:function(e){var t=e.target.value;t&&!this._showSendButton?this._showSendButton=!0:!t&&this._showSendButton&&(this._showSendButton=!1)}},{kind:"method",key:"_handleSendMessage",value:function(){this._messageInput.value&&(this._processText(this._messageInput.value),this._messageInput.value="",this._showSendButton=!1)}},{kind:"method",key:"_processText",value:(H=(0,y.Z)((0,_.Z)().mark((function e(t){var i,n,o,a=this;return(0,_.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===(i=this._audio)||void 0===i||i.pause(),this._addMessage({who:"user",text:t}),n={who:"hass",text:"…"},this._addMessage(n),e.prev=4,e.next=7,(0,V.Xp)(this.hass,(function(e){if("intent-end"===e.type){var t;a._conversationId=e.data.intent_output.conversation_id;var i=null===(t=e.data.intent_output.response.speech)||void 0===t?void 0:t.plain;i&&(n.text=i.speech),a.requestUpdate("_conversation"),o()}"error"===e.type&&(n.text=e.data.message,n.error=!0,a.requestUpdate("_conversation"),o())}),{start_stage:"intent",input:{text:t},end_stage:"intent",pipeline:this._pipelineId,conversation_id:this._conversationId});case 7:o=e.sent,e.next=15;break;case 10:e.prev=10,e.t0=e.catch(4),n.text=this.hass.localize("ui.dialogs.voice_command.error"),n.error=!0,this.requestUpdate("_conversation");case 15:case"end":return e.stop()}}),e,this,[[4,10]])}))),function(e){return H.apply(this,arguments)})},{kind:"method",key:"_toggleListening",value:function(e){var t;e.stopPropagation(),e.preventDefault(),P.h.isSupported?null!==(t=this._audioRecorder)&&void 0!==t&&t.active?this._stopListening():this._startListening():this._showNotSupportedMessage()}},{kind:"method",key:"_showNotSupportedMessage",value:(L=(0,y.Z)((0,_.Z)().mark((function e(){return(0,_.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._addMessage({who:"hass",text:(0,S.dy)(h||(h=(0,m.Z)([" <p> "," </p> <p> "," </p> "])),this.hass.localize("ui.dialogs.voice_command.not_supported_microphone_browser"),this.hass.localize("ui.dialogs.voice_command.not_supported_microphone_documentation",{documentation_link:(0,S.dy)(p||(p=(0,m.Z)([' <a target="_blank" rel="noopener noreferrer" href="','"> '," </a> "])),(0,R.R)(this.hass,"/docs/configuration/securing/#remote-access"),this.hass.localize("ui.dialogs.voice_command.not_supported_microphone_documentation_link"))}))});case 1:case"end":return e.stop()}}),e,this)}))),function(){return L.apply(this,arguments)})},{kind:"method",key:"_startListening",value:(i=(0,y.Z)((0,_.Z)().mark((function e(){var t,i,n,o,a,r=this;return(0,_.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===(t=this._audio)||void 0===t||t.pause(),this._audioRecorder||(this._audioRecorder=new P.h((function(e){r._audioBuffer?r._audioBuffer.push(e):r._sendAudioChunk(e)}))),this._stt_binary_handler_id=void 0,this._audioBuffer=[],i={who:"user",text:"…"},this._audioRecorder.start().then((function(){r._addMessage(i),r.requestUpdate("_audioRecorder")})),n={who:"hass",text:"…"},e.prev=7,e.next=10,(0,V.Xp)(this.hass,(function(e){if("run-start"===e.type&&(r._stt_binary_handler_id=e.data.runner_data.stt_binary_handler_id),"stt-start"===e.type&&r._audioBuffer){var t,o=(0,g.Z)(r._audioBuffer);try{for(o.s();!(t=o.n()).done;){var s=t.value;r._sendAudioChunk(s)}}catch(u){o.e(u)}finally{o.f()}r._audioBuffer=void 0}if("stt-end"===e.type&&(r._stt_binary_handler_id=void 0,r._stopListening(),i.text=e.data.stt_output.text,r.requestUpdate("_conversation"),r._addMessage(n)),"intent-end"===e.type){var d;r._conversationId=e.data.intent_output.conversation_id;var l=null===(d=e.data.intent_output.response.speech)||void 0===d?void 0:d.plain;l&&(n.text=l.speech),r.requestUpdate("_conversation")}if("tts-end"===e.type){var c=e.data.tts_output.url;r._audio=new Audio(c),r._audio.play(),r._audio.addEventListener("ended",r._unloadAudio),r._audio.addEventListener("pause",r._unloadAudio),r._audio.addEventListener("canplaythrough",r._playAudio),r._audio.addEventListener("error",r._audioError)}"run-end"===e.type&&(r._stt_binary_handler_id=void 0,a()),"error"===e.type&&(r._stt_binary_handler_id=void 0,"…"===i.text?(i.text=e.data.message,i.error=!0):(n.text=e.data.message,n.error=!0),r._stopListening(),r.requestUpdate("_conversation"),a())}),{start_stage:"stt",end_stage:null!==(o=this._pipeline)&&void 0!==o&&o.tts_engine?"tts":"intent",input:{sample_rate:this._audioRecorder.sampleRate},pipeline:this._pipelineId,conversation_id:this._conversationId});case 10:a=e.sent,e.next=18;break;case 13:return e.prev=13,e.t0=e.catch(7),e.next=17,(0,T.Ys)(this,{title:"Error starting pipeline",text:e.t0.message||e.t0});case 17:this._stopListening();case 18:case"end":return e.stop()}}),e,this,[[7,13]])}))),function(){return i.apply(this,arguments)})},{kind:"method",key:"_stopListening",value:function(){var e;if(null===(e=this._audioRecorder)||void 0===e||e.stop(),this.requestUpdate("_audioRecorder"),this._stt_binary_handler_id){if(this._audioBuffer){var t,i=(0,g.Z)(this._audioBuffer);try{for(i.s();!(t=i.n()).done;){var n=t.value;this._sendAudioChunk(n)}}catch(o){i.e(o)}finally{i.f()}}this._sendAudioChunk(new Int16Array),this._stt_binary_handler_id=void 0}this._audioBuffer=void 0}},{kind:"method",key:"_sendAudioChunk",value:function(e){if(this.hass.connection.socket.binaryType="arraybuffer",null!=this._stt_binary_handler_id){var t=new Uint8Array(1+2*e.length);t[0]=this._stt_binary_handler_id,t.set(new Uint8Array(e.buffer),1),this.hass.connection.socket.send(t)}}},{kind:"field",key:"_playAudio",value:function(){var e=this;return function(){var t;null===(t=e._audio)||void 0===t||t.play()}}},{kind:"field",key:"_audioError",value:function(){var e=this;return function(){var t;(0,T.Ys)(e,{title:"Error playing audio."}),null===(t=e._audio)||void 0===t||t.removeAttribute("src")}}},{kind:"field",key:"_unloadAudio",value:function(){var e=this;return function(){var t;null===(t=e._audio)||void 0===t||t.removeAttribute("src"),e._audio=void 0}}},{kind:"method",key:"_scrollMessagesBottom",value:function(){var e=this._scrollContainer;e&&e.scrollTo(0,99999)}},{kind:"method",key:"_computeMessageClasses",value:function(e){return"message ".concat(e.who," ").concat(e.error?" error":"")}},{kind:"get",static:!0,key:"styles",value:function(){return[U.yu,(0,S.iv)(v||(v=(0,m.Z)([".listening-icon{position:relative;color:var(--secondary-text-color);margin-right:-24px;margin-inline-end:-24px;margin-inline-start:initial;direction:var(--direction)}.listening-icon[active]{color:var(--primary-color)}.unsupported{color:var(--error-color);position:absolute;--mdc-icon-size:16px;right:5px;top:0px}ha-dialog{--primary-action-button-flex:1;--secondary-action-button-flex:0;--mdc-dialog-max-width:500px;--mdc-dialog-max-height:500px;--dialog-content-padding:0}ha-dialog-header a{color:var(--primary-text-color)}div[slot=title]{display:flex;flex-direction:column;margin:-4px 0}ha-button-menu{--mdc-theme-on-primary:var(--text-primary-color);--mdc-theme-primary:var(--primary-color);margin:-8px 0 0 -8px}ha-button-menu ha-button{--mdc-theme-primary:var(--secondary-text-color);--mdc-typography-button-text-transform:none;--mdc-typography-button-font-size:unset;--mdc-typography-button-font-weight:400;--mdc-typography-button-letter-spacing:var(\n            --mdc-typography-headline6-letter-spacing,\n            0.0125em\n          );--mdc-typography-button-line-height:var(\n            --mdc-typography-headline6-line-height,\n            2rem\n          );--button-height:auto}ha-button-menu ha-button ha-svg-icon{height:28px;margin-left:4px;margin-inline-start:4px;margin-inline-end:4px;direction:var(--direction)}ha-list-item{--mdc-list-item-meta-size:16px}ha-list-item ha-svg-icon{margin-left:4px;margin-inline-start:4px;margin-inline-end:4px;direction:var(--direction);display:block}ha-button-menu a{text-decoration:none}ha-textfield{display:block;overflow:hidden}a.button{text-decoration:none}a.button>mwc-button{width:100%}.side-by-side{display:flex;margin:8px 0}.side-by-side>*{flex:1 0;padding:4px}.attribution{display:block;color:var(--secondary-text-color);padding-top:4px;margin-bottom:-8px}.messages{display:block;height:400px;box-sizing:border-box;position:relative}@media all and (max-width:450px),all and (max-height:500px){ha-dialog{--mdc-dialog-max-width:100%}.messages{height:100%;flex:1}}.messages-container{position:absolute;bottom:0px;right:0px;left:0px;padding:24px;box-sizing:border-box;overflow-y:auto;max-height:100%}.message{font-size:18px;clear:both;margin:8px 0;padding:8px;border-radius:15px}.message p{margin:0}.message p:not(:last-child){margin-bottom:8px}.message.user{margin-left:24px;margin-inline-start:24px;margin-inline-end:initial;float:var(--float-end);text-align:right;border-bottom-right-radius:0px;background-color:var(--light-primary-color);color:var(--text-light-primary-color,var(--primary-text-color));direction:var(--direction)}.message.hass{margin-right:24px;margin-inline-end:24px;margin-inline-start:initial;float:var(--float-start);border-bottom-left-radius:0px;background-color:var(--primary-color);color:var(--text-primary-color);direction:var(--direction)}.message a{color:var(--text-primary-color)}.message img{width:100%;border-radius:10px}.message.error{background-color:var(--error-color);color:var(--text-primary-color)}.input{margin-left:0;margin-right:0}.bouncer{width:48px;height:48px;position:absolute}.double-bounce1,.double-bounce2{width:48px;height:48px;border-radius:50%;background-color:var(--primary-color);opacity:.2;position:absolute;top:0;left:0;-webkit-animation:sk-bounce 2s infinite ease-in-out;animation:sk-bounce 2s infinite ease-in-out}.double-bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-bounce{0%,100%{-webkit-transform:scale(0)}50%{-webkit-transform:scale(1)}}@keyframes sk-bounce{0%,100%{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}@media all and (max-width:450px),all and (max-height:500px){.message{font-size:16px}}"])))]}}]}}),S.oi)},27322:function(e,t,i){i.d(t,{R:function(){return n}});var n=function(e,t){return"https://www.iobroker.net/#".concat(e.language&&e.language.split("-")[0]||"en","/adapters/adapterref/iobroker.lovelace/README.md")}}}]);
//# sourceMappingURL=98683-on85MvJiBt8.js.map