(self.webpackJsonp=self.webpackJsonp||[]).push([[147],{778:function(t,e,n){"use strict";n.r(e);var s,a,i=n(90),r=n(505),o=n(452),c=n(504);function u(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"CastManager",function(){return v}),n.d(e,"getCastManager",function(){return f});var v=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,"auth",void 0),h(this,"status",void 0),h(this,"_eventListeners",{}),this.auth=e;var s=this.castContext;s.setOptions({receiverApplicationId:r.a,autoJoinPolicy:chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED}),s.addEventListener(cast.framework.CastContextEventType.SESSION_STATE_CHANGED,function(t){return n._sessionStateChanged(t)}),s.addEventListener(cast.framework.CastContextEventType.CAST_STATE_CHANGED,function(t){return n._castStateChanged(t)})}var e,n,s;return e=t,(n=[{key:"addEventListener",value:function(t,e){var n=this;return t in this._eventListeners||(this._eventListeners[t]=[]),this._eventListeners[t].push(e),function(){n._eventListeners[t].splice(n._eventListeners[t].indexOf(e))}}},{key:"sendMessage",value:function(t){this.castSession.sendMessage(r.c,t)}},{key:"requestSession",value:function(){return this.castContext.requestSession()}},{key:"_fireEvent",value:function(t){var e=!0,n=!1,s=void 0;try{for(var a,i=(this._eventListeners[t]||[])[Symbol.iterator]();!(e=(a=i.next()).done);e=!0){(0,a.value)()}}catch(r){n=!0,s=r}finally{try{e||null==i.return||i.return()}finally{if(n)throw s}}}},{key:"_receiveMessage",value:function(t){"receiver_status"===t.type&&(this.status=t,this._fireEvent("connection-changed"))}},{key:"_sessionStateChanged",value:function(t){"SESSION_STARTED"===t.sessionState||"SESSION_RESUMED"===t.sessionState?(this.auth?Object(c.a)(this,this.auth):this.sendMessage({type:"get_status"}),this._attachMessageListener()):"SESSION_ENDED"===t.sessionState&&(this.status=void 0,this._fireEvent("connection-changed"))}},{key:"_castStateChanged",value:function(t){this._fireEvent("state-changed")}},{key:"_attachMessageListener",value:function(){var t=this;this.castSession.addMessageListener(r.c,function(e,n){return t._receiveMessage(JSON.parse(n))})}},{key:"castConnectedToOurHass",get:function(){return void 0!==this.status&&void 0!==this.auth&&this.status.connected&&(this.status.hassUrl===this.auth.data.hassUrl||r.b&&this.status.hassUrl===o.b)}},{key:"castState",get:function(){return this.castContext.getCastState()}},{key:"castContext",get:function(){return cast.framework.CastContext.getInstance()}},{key:"castSession",get:function(){return this.castContext.getCurrentSession()}}])&&u(e.prototype,n),s&&u(e,s),t}(),f=function(t){return a||(a=function(){if(s)return s;s=new Promise(function(t){window.__onGCastApiAvailable=t});var t=document.createElement("div");return t.id="cast",document.body.append(t),Object(i.b)("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),s}().then(function(e){if(!e)throw new Error("No Cast API available");return new v(t)})),a}}}]);
//# sourceMappingURL=chunk.b3929df69a9fdeee3393.js.map