(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{667:function(t,e,a){"use strict";a.r(e);var s=a(3),n=a(21),i=a(110),o=a(102);customElements.define("notification-manager",class extends(Object(i.a)(n.a)){static get template(){return s.a`
      <style>
        paper-toast {
          z-index: 1;
        }
      </style>

      <ha-toast
        id="toast"
        dir="[[_rtl]]"
        no-cancel-on-outside-click="[[_cancelOnOutsideClick]]"
      ></ha-toast>
    `}static get properties(){return{hass:Object,_cancelOnOutsideClick:{type:Boolean,value:!1},_rtl:{type:String,computed:"_computeRTLDirection(hass)"}}}ready(){super.ready(),Promise.all([a.e(1),a.e(30)]).then(a.bind(null,395))}showDialog({message:t}){this.$.toast.show(t)}_computeRTLDirection(t){return Object(o.a)(t)?"rtl":"ltr"}})}}]);