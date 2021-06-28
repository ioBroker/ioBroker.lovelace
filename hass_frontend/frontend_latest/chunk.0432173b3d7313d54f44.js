(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[4705],{4705:(e,t,a)=>{"use strict";a.r(t);a(12730);var l=a(50856),n=a(28426);a(48932),a(3426);class o extends n.H3{static get template(){return l.d`
      <style include="ha-style">
        iframe {
          border: 0;
          width: 100%;
          position: absolute;
          height: calc(100% - var(--header-height));
          background-color: var(--primary-background-color);
        }
      </style>
      <app-toolbar>
        <ha-menu-button hass="[[hass]]" narrow="[[narrow]]"></ha-menu-button>
        <div main-title>[[panel.title]]</div>
      </app-toolbar>

      <iframe
        src="[[panel.config.url]]"
        sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts allow-modals"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      ></iframe>
    `}static get properties(){return{hass:Object,narrow:Boolean,panel:Object}}}customElements.define("ha-panel-iframe",o)},3426:(e,t,a)=>{"use strict";a(21384);var l=a(11654);const n=document.createElement("template");n.setAttribute("style","display: none;"),n.innerHTML=`<dom-module id="ha-style">\n  <template>\n    <style>\n    ${l.Qx.cssText}\n    </style>\n  </template>\n</dom-module>`,document.head.appendChild(n.content)}}]);
//# sourceMappingURL=chunk.0432173b3d7313d54f44.js.map