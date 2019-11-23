(self.webpackJsonp=self.webpackJsonp||[]).push([[108],{690:function(e,a,l){"use strict";l.r(a);l(147);var t=l(4),r=l(30);l(125),l(92);customElements.define("ha-panel-iframe",class extends r.a{static get template(){return t.a`
      <style include="ha-style">
        iframe {
          border: 0;
          width: 100%;
          height: calc(100% - 64px);
        }
      </style>
      <app-toolbar>
        <ha-menu-button hass="[[hass]]" narrow="[[narrow]]"></ha-menu-button>
        <div main-title>[[panel.title]]</div>
      </app-toolbar>

      <iframe
        src="[[panel.config.url]]"
        sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      ></iframe>
    `}static get properties(){return{hass:Object,narrow:Boolean,panel:Object}}})}}]);
//# sourceMappingURL=chunk.fda1b7411eefe1c2d2e6.js.map