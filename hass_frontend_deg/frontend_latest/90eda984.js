"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[81999],{21560:(e,t,s)=>{s.d(t,{ZH:()=>d,MT:()=>i,U2:()=>l,RV:()=>a,t8:()=>c});const o=function(){if(!(!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent))||!indexedDB.databases)return Promise.resolve();let e;return new Promise((t=>{const s=()=>indexedDB.databases().finally(t);e=setInterval(s,100),s()})).finally((()=>clearInterval(e)))};function a(e){return new Promise(((t,s)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>s(e.error)}))}function i(e,t){const s=o().then((()=>{const s=indexedDB.open(e);return s.onupgradeneeded=()=>s.result.createObjectStore(t),a(s)}));return(e,o)=>s.then((s=>o(s.transaction(t,e).objectStore(t))))}let n;function r(){return n||(n=i("keyval-store","keyval")),n}function l(e,t=r()){return t("readonly",(t=>a(t.get(e))))}function c(e,t,s=r()){return s("readwrite",(s=>(s.put(t,e),a(s.transaction))))}function d(e=r()){return e("readwrite",(e=>(e.clear(),a(e.transaction))))}},22179:(e,t,s)=>{s.r(t);s(53918);var o=s(50856),a=s(28426),i=(s(34821),s(31206),s(28007),s(10983),s(1265));s(36436);class n extends((0,i.Z)(a.H3)){static get template(){return o.d`
      <style include="ha-style-dialog">
        .error {
          color: red;
        }
        p {
          color: var(--secondary-text-color);
        }
        .icon {
          text-align: right;
        }
      </style>
      <ha-dialog
        open="[[_opened]]"
        on-closed="closeDialog"
        heading="[[localize('ui.panel.mailbox.playback_title')]]"
      >
        <div>
          <div class="icon">
            <template is="dom-if" if="[[_loading]]">
              <ha-circular-progress active></ha-circular-progress>
            </template>
            <ha-icon-button id="delicon" on-click="openDeleteDialog">
              <ha-icon icon="hass:delete"></ha-icon>
            </ha-icon-button>
          </div>
          <div id="transcribe"></div>
          <div>
            <template is="dom-if" if="[[_errorMsg]]">
              <div class="error">[[_errorMsg]]</div>
            </template>
            <audio id="mp3" preload="none" controls>
              <source id="mp3src" src="" type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </ha-dialog>
    `}static get properties(){return{hass:Object,_currentMessage:Object,_errorMsg:String,_loading:{type:Boolean,value:!1},_opened:{type:Boolean,value:!1}}}showDialog({hass:e,message:t}){this.hass=e,this._errorMsg=null,this._currentMessage=t,this._opened=!0,this.$.transcribe.innerText=t.message;const s=t.platform,o=this.$.mp3;if(s.has_media){o.style.display="",this._showLoading(!0),o.src=null;const e=`/api/mailbox/media/${s.name}/${t.sha}`;this.hass.fetchWithAuth(e).then((e=>e.ok?e.blob():Promise.reject({status:e.status,statusText:e.statusText}))).then((e=>{this._showLoading(!1),o.src=window.URL.createObjectURL(e),o.play()})).catch((e=>{this._showLoading(!1),this._errorMsg=`Error loading audio: ${e.statusText}`}))}else o.style.display="none",this._showLoading(!1)}openDeleteDialog(){confirm(this.localize("ui.panel.mailbox.delete_prompt"))&&this.deleteSelected()}deleteSelected(){const e=this._currentMessage;this.hass.callApi("DELETE",`mailbox/delete/${e.platform.name}/${e.sha}`),this._dialogDone()}_dialogDone(){this.$.mp3.pause(),this.setProperties({_currentMessage:null,_errorMsg:null,_loading:!1,_opened:!1})}closeDialog(){this._dialogDone()}_showLoading(e){const t=this.$.delicon;if(e)this._loading=!0,t.style.display="none";else{const e=this._currentMessage.platform;this._loading=!1,t.style.display=e.can_delete?"":"none"}}}customElements.define("ha-dialog-show-audio-message",n)}}]);
//# sourceMappingURL=90eda984.js.map