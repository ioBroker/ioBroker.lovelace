"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[80363],{80363:function(t,e,n){n.r(e),n.d(e,{CastManager:function(){return d},getCastManager:function(){return v}});var s,i,a=n(40039),r=n(71650),o=n(33368),c=n(69470),u=n(54049),h=n(66628),f=n(91794),d=function(){function t(e){var n=this;(0,r.Z)(this,t),this.auth=void 0,this.status=void 0,this._eventListeners={},this._sessionStateChanged=function(t){"SESSION_STARTED"===t.sessionState||"SESSION_RESUMED"===t.sessionState?(n.auth?(0,f.Ni)(n,n.auth):n.sendMessage({type:"get_status"}),n._attachMessageListener()):"SESSION_ENDED"===t.sessionState&&(n.status=void 0,n._fireEvent("connection-changed"))},this._castStateChanged=function(t){n._fireEvent("state-changed")},this.auth=e;var s=this.castContext;s.setOptions({receiverApplicationId:u.$Q,autoJoinPolicy:chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED}),s.addEventListener(cast.framework.CastContextEventType.SESSION_STATE_CHANGED,this._sessionStateChanged),s.addEventListener(cast.framework.CastContextEventType.CAST_STATE_CHANGED,this._castStateChanged)}return(0,o.Z)(t,[{key:"addEventListener",value:function(t,e){var n=this;return t in this._eventListeners||(this._eventListeners[t]=[]),this._eventListeners[t].push(e),function(){n._eventListeners[t].splice(n._eventListeners[t].indexOf(e))}}},{key:"castConnectedToOurHass",get:function(){return void 0!==this.status&&void 0!==this.auth&&this.status.connected&&(this.status.hassUrl===this.auth.data.hassUrl||u.Hq&&this.status.hassUrl===h.M)}},{key:"sendMessage",value:function(t){this.castSession.sendMessage(u.py,t)}},{key:"castState",get:function(){return this.castContext.getCastState()}},{key:"castContext",get:function(){return cast.framework.CastContext.getInstance()}},{key:"castSession",get:function(){return this.castContext.getCurrentSession()}},{key:"requestSession",value:function(){return this.castContext.requestSession()}},{key:"_fireEvent",value:function(t){var e,n=(0,a.Z)(this._eventListeners[t]||[]);try{for(n.s();!(e=n.n()).done;){(0,e.value)()}}catch(s){n.e(s)}finally{n.f()}}},{key:"_receiveMessage",value:function(t){"receiver_status"===t.type&&(this.status=t,this._fireEvent("connection-changed"))}},{key:"_attachMessageListener",value:function(){var t=this;this.castSession.addMessageListener(u.py,(function(e,n){return t._receiveMessage(JSON.parse(n))}))}}]),t}(),v=function(t){return i||(i=function(){if(s)return s;s=new Promise((function(t){window.__onGCastApiAvailable=t}));var t=document.createElement("div");return t.id="cast",document.body.append(t),(0,c.fs)("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),s}().then((function(e){if(!e)throw new Error("No Cast API available");return new d(t)}))),i}},69470:function(t,e,n){n.d(e,{$y:function(){return r},fs:function(){return a},j:function(){return i}});var s=function(t,e,n){return new Promise((function(s,i){var a=document.createElement(t),r="src",o="body";switch(a.onload=function(){return s(e)},a.onerror=function(){return i(e)},t){case"script":a.async=!0,n&&(a.type=n);break;case"link":a.type="text/css",a.rel="stylesheet",r="href",o="head"}a[r]=e,document[o].appendChild(a)}))},i=function(t){return s("link",t)},a=function(t){return s("script",t)},r=function(t){return s("script",t,"module")}}}]);
//# sourceMappingURL=80363-0rkRgo326fA.js.map