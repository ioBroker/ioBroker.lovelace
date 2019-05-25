(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{661:function(e,l,t){"use strict";t.r(l);t(140);var a=t(3),o=t(21);t(117),t(88);customElements.define("ha-panel-iframe",class extends o.a{static get template(){return a.a`
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