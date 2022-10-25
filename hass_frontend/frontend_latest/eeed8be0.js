/*! For license information please see eeed8be0.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[64888],{25782:(e,t,n)=>{n(48175),n(65660),n(70019),n(97968);var o=n(9672),i=n(50856),a=n(33760);(0,o.k)({_template:i.d`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,is:"paper-icon-item",behaviors:[a.U]})},33760:(e,t,n)=>{n.d(t,{U:()=>a});n(48175);var o=n(51644),i=n(26110);const a=[o.P,i.a,{hostAttributes:{role:"option",tabindex:"0"}}]},89194:(e,t,n)=>{n(48175),n(65660),n(70019);var o=n(9672),i=n(50856);(0,o.k)({_template:i.d`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,is:"paper-item-body"})},97968:(e,t,n)=>{n(65660),n(70019);const o=document.createElement("template");o.setAttribute("style","display: none;"),o.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(o.content)},53973:(e,t,n)=>{n(48175),n(65660),n(97968);var o=n(9672),i=n(50856),a=n(33760);(0,o.k)({_template:i.d`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[a.U]})},23682:(e,t,n)=>{function o(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,{Z:()=>o})},4535:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(34327);function i(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var a=n(59429),s=n(23682),r=864e5;function l(e,t){(0,s.Z)(2,arguments);var n=(0,a.Z)(e),o=(0,a.Z)(t),l=n.getTime()-i(n),p=o.getTime()-i(o);return Math.round((l-p)/r)}function p(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}function d(e,t){(0,s.Z)(2,arguments);var n=(0,o.Z)(e),i=(0,o.Z)(t),a=p(n,i),r=Math.abs(l(n,i));n.setDate(n.getDate()-a*r);var d=Number(p(n,i)===-a),c=a*(r-d);return 0===c?0:c}},59429:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(34327),i=n(23682);function a(e){(0,i.Z)(1,arguments);var t=(0,o.Z)(e);return t.setHours(0,0,0,0),t}},34327:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(23682);function i(e){(0,o.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}},19596:(e,t,n)=>{n.d(t,{s:()=>c});var o=n(81563),i=n(38941);const a=(e,t)=>{var n,o;const i=e._$AN;if(void 0===i)return!1;for(const e of i)null===(o=(n=e)._$AO)||void 0===o||o.call(n,t,!1),a(e,t);return!0},s=e=>{let t,n;do{if(void 0===(t=e._$AM))break;n=t._$AN,n.delete(e),e=t}while(0===(null==n?void 0:n.size))},r=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(void 0===n)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),d(t)}};function l(e){void 0!==this._$AN?(s(this),this._$AM=e,r(this)):this._$AM=e}function p(e,t=!1,n=0){const o=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(o))for(let e=n;e<o.length;e++)a(o[e],!1),s(o[e]);else null!=o&&(a(o,!1),s(o));else a(this,e)}const d=e=>{var t,n,o,a;e.type==i.pX.CHILD&&(null!==(t=(o=e)._$AP)&&void 0!==t||(o._$AP=p),null!==(n=(a=e)._$AQ)&&void 0!==n||(a._$AQ=l))};class c extends i.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),r(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,o;e!==this.isConnected&&(this.isConnected=e,e?null===(n=this.reconnected)||void 0===n||n.call(this):null===(o=this.disconnected)||void 0===o||o.call(this)),t&&(a(this,e),s(this))}setValue(e){if((0,o.OR)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}}}]);
//# sourceMappingURL=eeed8be0.js.map