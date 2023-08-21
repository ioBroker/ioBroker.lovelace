/*! For license information please see 83998-B5VWQGnXqpU.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[83998],{83998:(t,e,i)=>{i.r(e),i.d(e,{LitVirtualizer:()=>v,RangeChangedEvent:()=>f.uv,VisibilityChangedEvent:()=>f.f9});var s=i(87480),r=i(68144),n=i(5701),o=i(57835),l=i(76187),a=i(18848),d=i(51246);const _=t=>t,h=(t,e)=>r.dy`${e}: ${JSON.stringify(t,null,2)}`;class u extends l.sR{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(t,e)=>h(t,e+this._first),this._keyFunction=(t,e)=>_(t,this._first),this._items=[],t.type!==o.pX.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const e=[],i=Math.min(this._items.length,this._last+1);if(this._first>=0&&this._last>=this._first)for(let t=this._first;t<i;t++)e.push(this._items[t]);return(0,a.r)(e,this._keyFunction,this._renderItem)}update(t,[e]){return this._setFunctions(e),this._items=e.items||[],this._virtualizer?this._updateVirtualizerConfig(t,e):this._initialize(t,e),this.render()}async _updateVirtualizerConfig(t,e){if(!await this._virtualizer.updateLayoutConfig(e.layout||{})){const i=t.parentNode;this._makeVirtualizer(i,e)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:e,keyFunction:i}=t;e&&(this._renderItem=(t,i)=>e(t,i+this._first)),i&&(this._keyFunction=(t,e)=>i(t,e+this._first))}_makeVirtualizer(t,e){this._virtualizer&&this._virtualizer.disconnected();const{layout:i,scroller:s,items:r}=e;this._virtualizer=new d.dM({hostElement:t,layout:i,scroller:s}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(t,e){const i=t.parentNode;i&&1===i.nodeType&&(i.addEventListener("rangeChanged",(t=>{this._first=t.first,this._last=t.last,this.setValue(this.render())})),this._makeVirtualizer(i,e))}disconnected(){var t;null===(t=this._virtualizer)||void 0===t||t.disconnected()}reconnected(){var t;null===(t=this._virtualizer)||void 0===t||t.connected()}}const c=(0,o.XM)(u);class v extends r.oi{constructor(){super(...arguments),this.items=[],this.renderItem=h,this.keyFunction=_,this.layout={},this.scroller=!1}createRenderRoot(){return this}render(){const{items:t,renderItem:e,keyFunction:i,layout:s,scroller:n}=this;return r.dy`${c({items:t,renderItem:e,keyFunction:i,layout:s,scroller:n})}`}element(t){var e;return null===(e=this[d.Lm])||void 0===e?void 0:e.element(t)}get layoutComplete(){var t;return null===(t=this[d.Lm])||void 0===t?void 0:t.layoutComplete}scrollToIndex(t,e="start"){var i;null===(i=this.element(t))||void 0===i||i.scrollIntoView({block:e})}}(0,s.__decorate)([(0,n.C)({attribute:!1})],v.prototype,"items",void 0),(0,s.__decorate)([(0,n.C)()],v.prototype,"renderItem",void 0),(0,s.__decorate)([(0,n.C)()],v.prototype,"keyFunction",void 0),(0,s.__decorate)([(0,n.C)({attribute:!1})],v.prototype,"layout",void 0),(0,s.__decorate)([(0,n.C)({reflect:!0,type:Boolean})],v.prototype,"scroller",void 0);var f=i(24021);customElements.define("lit-virtualizer",v)},19596:(t,e,i)=>{i.d(e,{sR:()=>h});var s=i(81563),r=i(38941);const n=(t,e)=>{var i,s;const r=t._$AN;if(void 0===r)return!1;for(const t of r)null===(s=(i=t)._$AO)||void 0===s||s.call(i,e,!1),n(t,e);return!0},o=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},l=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),_(e)}};function a(t){void 0!==this._$AN?(o(this),this._$AM=t,l(this)):this._$AM=t}function d(t,e=!1,i=0){const s=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(s))for(let t=i;t<s.length;t++)n(s[t],!1),o(s[t]);else null!=s&&(n(s,!1),o(s));else n(this,t)}const _=t=>{var e,i,s,n;t.type==r.pX.CHILD&&(null!==(e=(s=t)._$AP)&&void 0!==e||(s._$AP=d),null!==(i=(n=t)._$AQ)&&void 0!==i||(n._$AQ=a))};class h extends r.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),l(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),e&&(n(this,t),o(this))}setValue(t){if((0,s.OR)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}},81563:(t,e,i)=>{i.d(e,{E_:()=>f,OR:()=>l,_Y:()=>d,fk:()=>_,hN:()=>o,hl:()=>u,i9:()=>c,pt:()=>n,ws:()=>v});var s=i(15304);const{I:r}=s._$LH,n=t=>null===t||"object"!=typeof t&&"function"!=typeof t,o=(t,e)=>void 0===e?void 0!==(null==t?void 0:t._$litType$):(null==t?void 0:t._$litType$)===e,l=t=>void 0===t.strings,a=()=>document.createComment(""),d=(t,e,i)=>{var s;const n=t._$AA.parentNode,o=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=n.insertBefore(a(),o),s=n.insertBefore(a(),o);i=new r(e,s,t,t.options)}else{const e=i._$AB.nextSibling,r=i._$AM,l=r!==t;if(l){let e;null===(s=i._$AQ)||void 0===s||s.call(i,t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==r._$AU&&i._$AP(e)}if(e!==o||l){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;n.insertBefore(t,o),t=e}}}return i},_=(t,e,i=t)=>(t._$AI(e,i),t),h={},u=(t,e=h)=>t._$AH=e,c=t=>t._$AH,v=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let i=t._$AA;const s=t._$AB.nextSibling;for(;i!==s;){const t=i.nextSibling;i.remove(),i=t}},f=t=>{t._$AR()}},76187:(t,e,i)=>{i.d(e,{sR:()=>s.sR});var s=i(19596)},57835:(t,e,i)=>{i.d(e,{XM:()=>s.XM,Xe:()=>s.Xe,pX:()=>s.pX});var s=i(38941)},18848:(t,e,i)=>{i.d(e,{r:()=>l});var s=i(15304),r=i(38941),n=i(81563);const o=(t,e,i)=>{const s=new Map;for(let r=e;r<=i;r++)s.set(t[r],r);return s},l=(0,r.XM)(class extends r.Xe{constructor(t){if(super(t),t.type!==r.pX.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let s;void 0===i?i=e:void 0!==e&&(s=e);const r=[],n=[];let o=0;for(const e of t)r[o]=s?s(e,o):o,n[o]=i(e,o),o++;return{values:n,keys:r}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,r]){var l;const a=(0,n.i9)(t),{values:d,keys:_}=this.dt(e,i,r);if(!Array.isArray(a))return this.ht=_,d;const h=null!==(l=this.ht)&&void 0!==l?l:this.ht=[],u=[];let c,v,f=0,$=a.length-1,A=0,p=d.length-1;for(;f<=$&&A<=p;)if(null===a[f])f++;else if(null===a[$])$--;else if(h[f]===_[A])u[A]=(0,n.fk)(a[f],d[A]),f++,A++;else if(h[$]===_[p])u[p]=(0,n.fk)(a[$],d[p]),$--,p--;else if(h[f]===_[p])u[p]=(0,n.fk)(a[f],d[p]),(0,n._Y)(t,u[p+1],a[f]),f++,p--;else if(h[$]===_[A])u[A]=(0,n.fk)(a[$],d[A]),(0,n._Y)(t,a[f],a[$]),$--,A++;else if(void 0===c&&(c=o(_,A,p),v=o(h,f,$)),c.has(h[f]))if(c.has(h[$])){const e=v.get(_[A]),i=void 0!==e?a[e]:null;if(null===i){const e=(0,n._Y)(t,a[f]);(0,n.fk)(e,d[A]),u[A]=e}else u[A]=(0,n.fk)(i,d[A]),(0,n._Y)(t,a[f],i),a[e]=null;A++}else(0,n.ws)(a[$]),$--;else(0,n.ws)(a[f]),f++;for(;A<=p;){const e=(0,n._Y)(t,u[p+1]);(0,n.fk)(e,d[A]),u[A++]=e}for(;f<=$;){const t=a[f++];null!==t&&(0,n.ws)(t)}return this.ht=_,(0,n.hl)(t,u),s.Jb}})}}]);
//# sourceMappingURL=83998-B5VWQGnXqpU.js.map