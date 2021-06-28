/*! For license information please see chunk.b778b66e6110ddc6bb21.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[9577],{63207:(t,e,i)=>{"use strict";i(65660),i(15112);var s=i(9672),n=i(87156),o=i(50856),r=i(65233);(0,s.k)({_template:o.d`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:r.XY.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&(0,n.vz)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,(0,n.vz)(this.root).appendChild(this._img))}})},15112:(t,e,i)=>{"use strict";i.d(e,{P:()=>n});i(65233);var s=i(9672);class n{constructor(t){n[" "](t),this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}get value(){var t=this.type,e=this.key;if(t&&e)return n.types[t]&&n.types[t][e]}set value(t){var e=this.type,i=this.key;e&&i&&(e=n.types[e]=n.types[e]||{},null==t?delete e[i]:e[i]=t)}get list(){if(this.type){var t=n.types[this.type];return t?Object.keys(t).map((function(t){return o[this.type][t]}),this):[]}}byKey(t){return this.key=t,this.value}}n[" "]=function(){},n.types={};var o=n.types;(0,s.k)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,i){var s=new n({type:t,key:e});return void 0!==i&&i!==s.value?s.value=i:this.value!==s.value&&(this.value=s.value),s},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new n({type:this.type,key:t}).value}})},98626:(t,e,i)=>{"use strict";function s(t){return new Promise(((e,i)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>i(t.error)}))}function n(t,e){const i=indexedDB.open(t);i.onupgradeneeded=()=>i.result.createObjectStore(e);const n=s(i);return(t,i)=>n.then((s=>i(s.transaction(e,t).objectStore(e))))}let o;function r(){return o||(o=n("keyval-store","keyval")),o}function a(t,e=r()){return e("readonly",(e=>s(e.get(t))))}function c(t,e,i=r()){return i("readwrite",(i=>(i.put(e,t),s(i.transaction))))}function h(t=r()){return t("readwrite",(t=>(t.clear(),s(t.transaction))))}i.d(e,{ZH:()=>h,MT:()=>n,U2:()=>a,RV:()=>s,t8:()=>c})},19967:(t,e,i)=>{"use strict";i.d(e,{Xe:()=>s.Xe,pX:()=>s.pX,XM:()=>s.XM});var s=i(55122)},76666:(t,e,i)=>{"use strict";i.d(e,{$:()=>s.$});var s=i(81471)},82816:(t,e,i)=>{"use strict";i.d(e,{o:()=>s.o});var s=i(49629)}}]);
//# sourceMappingURL=chunk.b778b66e6110ddc6bb21.js.map