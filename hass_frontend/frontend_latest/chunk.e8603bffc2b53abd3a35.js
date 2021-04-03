/*! For license information please see chunk.e8603bffc2b53abd3a35.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[5],{51654:(t,e,o)=>{"use strict";o.d(e,{Z:()=>s,n:()=>l});o(65233);var i=o(75009),n=o(87156);const s={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(t,e){e&&(t?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(t){this.closingReason=this.closingReason||{},this.closingReason.confirmed=t},_onDialogClick:function(t){for(var e=(0,n.vz)(t).path,o=0,i=e.indexOf(this);o<i;o++){var s=e[o];if(s.hasAttribute&&(s.hasAttribute("dialog-dismiss")||s.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(s.hasAttribute("dialog-confirm")),this.close(),t.stopPropagation();break}}}},l=[i.$,s]},22626:(t,e,o)=>{"use strict";o(65233),o(65660),o(1656);var i=o(51654),n=o(9672),s=o(50856);(0,n.k)({_template:s.d`
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
`,is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget(),this.classList.add("no-padding")},attached:function(){this._ensureTarget(),requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",this.scrollTarget.scrollTop>0),this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight),this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement,this.dialogElement&&this.dialogElement.behaviors&&this.dialogElement.behaviors.indexOf(i.Z)>=0?(this.dialogElement.sizingTarget=this.scrollTarget,this.scrollTarget.classList.remove("fit")):this.dialogElement&&this.scrollTarget.classList.add("fit")}})},50808:(t,e,o)=>{"use strict";o(65233),o(65660),o(1656),o(47686),o(54242);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(i.content);var n=o(96540),s=o(51654),l=o(9672),a=o(50856);(0,l.k)({_template:a.d`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[s.n,n.t],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}})},28417:(t,e,o)=>{"use strict";o(50808);var i=o(33367),n=o(93592),s=o(87156);const l={getTabbableNodes:function(t){const e=[];return this._collectTabbableNodes(t,e)?n.H._sortByTabIndex(e):e},_collectTabbableNodes:function(t,e){if(t.nodeType!==Node.ELEMENT_NODE||!n.H._isVisible(t))return!1;const o=t,i=n.H._normalizedTabIndex(o);let l,a=i>0;i>=0&&e.push(o),l="content"===o.localName||"slot"===o.localName?(0,s.vz)(o).getDistributedNodes():(0,s.vz)(o.shadowRoot||o.root||o).children;for(let t=0;t<l.length;t++)a=this._collectTabbableNodes(l[t],e)||a;return a}},a=customElements.get("paper-dialog"),r={get _focusableNodes(){return l.getTabbableNodes(this)}};class d extends((0,i.P)([r],a)){}customElements.define("ha-paper-dialog",d)},20005:(t,e,o)=>{"use strict";o.r(e);o(22626);var i=o(50856),n=o(28426),s=(o(28417),o(11052));o(36436);class l extends((0,s.I)(n.H3)){static get template(){return i.d`
    <style include="ha-style-dialog">
      pre {
        font-family: var(--code-font-family, monospace);
      }
    </style>
      <ha-paper-dialog id="pwaDialog" with-backdrop="" opened="{{_opened}}">
        <h2>OpenZwave internal logfile</h2>
        <paper-dialog-scrollable>
          <pre>[[_ozwLog]]</pre>
        <paper-dialog-scrollable>
      </ha-paper-dialog>
      `}static get properties(){return{hass:Object,_ozwLog:String,_dialogClosedCallback:Function,_opened:{type:Boolean,value:!1},_intervalId:String,_numLogLines:{type:Number}}}ready(){super.ready(),this.addEventListener("iron-overlay-closed",(t=>this._dialogClosed(t)))}showDialog({_ozwLog:t,hass:e,_tail:o,_numLogLines:i,dialogClosedCallback:n}){this.hass=e,this._ozwLog=t,this._opened=!0,this._dialogClosedCallback=n,this._numLogLines=i,setTimeout((()=>this.$.pwaDialog.center()),0),o&&this.setProperties({_intervalId:setInterval((()=>{this._refreshLog()}),1500)})}async _refreshLog(){const t=await this.hass.callApi("GET","zwave/ozwlog?lines="+this._numLogLines);this.setProperties({_ozwLog:t})}_dialogClosed(t){if("ZWAVE-LOG-DIALOG"===t.target.nodeName){clearInterval(this._intervalId),this._opened=!1;const t=!0;this._dialogClosedCallback({closedEvent:t}),this._dialogClosedCallback=null}}}customElements.define("zwave-log-dialog",l)},36436:(t,e,o)=>{"use strict";o(21384);var i=o(11654);const n=document.createElement("template");n.setAttribute("style","display: none;"),n.innerHTML=`<dom-module id="ha-style-dialog">\n<template>\n  <style>\n    ${i.yu.cssText}\n  </style>\n</template>\n</dom-module>`,document.head.appendChild(n.content)}}]);
//# sourceMappingURL=chunk.e8603bffc2b53abd3a35.js.map