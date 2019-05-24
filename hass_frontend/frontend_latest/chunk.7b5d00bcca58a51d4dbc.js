(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{670:function(e,l,t){"use strict";t.r(l);t(140);var a=t(4),o=t(26);t(122),t(92);customElements.define("ha-panel-iframe",class extends o.a{static get template(){return a.a`
      <style include="ha-style">
        iframe {
          border: 0;
          width: 100%;
          height: calc(100% - 64px);
        }
      </style>
      <app-toolbar>
        <ha-menu-button></ha-menu-button>
        <div main-title>[[panel.title]]</div>
      </app-toolbar>

      <iframe
        src="[[panel.config.url]]"
        sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      ></iframe>
    `}static get properties(){return{panel:{type:Object}}}})}}]);