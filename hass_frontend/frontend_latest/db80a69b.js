"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[20005],{20005:(e,s,o)=>{o.r(s);var a=o(50856),t=o(28426),l=o(11052);o(36436),o(34821);class i extends((0,l.I)(t.H3)){static get template(){return a.d`
    <style include="ha-style-dialog">
      pre {
        font-family: var(--code-font-family, monospace);
      }
    </style>
      <ha-dialog open="[[_opened]]" heading="OpenZwave internal logfile" on-closed="closeDialog">
        <div>
          <pre>[[_ozwLog]]</pre>
        <div>
      </ha-dialog>
      `}static get properties(){return{hass:Object,_ozwLog:String,_dialogClosedCallback:Function,_opened:{type:Boolean,value:!1},_intervalId:String,_numLogLines:{type:Number}}}ready(){super.ready(),this.addEventListener("iron-overlay-closed",(e=>this._dialogClosed(e)))}showDialog({_ozwLog:e,hass:s,_tail:o,_numLogLines:a,dialogClosedCallback:t}){this.hass=s,this._ozwLog=e,this._opened=!0,this._dialogClosedCallback=t,this._numLogLines=a,o&&this.setProperties({_intervalId:setInterval((()=>{this._refreshLog()}),1500)})}closeDialog(){clearInterval(this._intervalId),this._opened=!1;this._dialogClosedCallback({closedEvent:!0}),this._dialogClosedCallback=null}async _refreshLog(){const e=await this.hass.callApi("GET","zwave/ozwlog?lines="+this._numLogLines);this.setProperties({_ozwLog:e})}}customElements.define("zwave-log-dialog",i)}}]);
//# sourceMappingURL=db80a69b.js.map