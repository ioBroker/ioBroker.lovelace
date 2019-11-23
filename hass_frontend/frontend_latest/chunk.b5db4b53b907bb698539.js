(self.webpackJsonp=self.webpackJsonp||[]).push([[25],{730:function(e,s,a){"use strict";a.r(s);a(80);var o=a(4),r=a(30),i=(a(174),a(225),a(149),a(92),a(176)),t=a(172);customElements.define("cloud-forgot-password",class extends(Object(t.a)(Object(i.a)(r.a))){static get template(){return o.a`
      <style include="iron-flex ha-style">
        .content {
          padding-bottom: 24px;
          direction: ltr;
        }

        ha-card {
          max-width: 600px;
          margin: 0 auto;
          margin-top: 24px;
        }
        h1 {
          @apply --paper-font-headline;
          margin: 0;
        }
        .error {
          color: var(--google-red-500);
        }
        .card-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .card-actions a {
          color: var(--primary-text-color);
        }
        [hidden] {
          display: none;
        }
      </style>
      <hass-subpage header=[[localize('ui.panel.config.cloud.forgot_password.title')]]>
        <div class="content">
          <ha-card header=[[localize('ui.panel.config.cloud.forgot_password.subtitle')]]>
            <div class="card-content">
              <p>
                [[localize('ui.panel.config.cloud.forgot_password.instructions')]]
              </p>
              <div class="error" hidden$="[[!_error]]">[[_error]]</div>
              <paper-input
                autofocus=""
                id="email"
                label="[[localize('ui.panel.config.cloud.forgot_password.email')]]"
                value="{{email}}"
                type="email"
                on-keydown="_keyDown"
                error-message="[[localize('ui.panel.config.cloud.forgot_password.email_error_msg')]]"
              ></paper-input>
            </div>
            <div class="card-actions">
              <ha-progress-button
                on-click="_handleEmailPasswordReset"
                progress="[[_requestInProgress]]"
                >[[localize('ui.panel.config.cloud.forgot_password.send_reset_email')]]</ha-progress-button
              >
            </div>
          </ha-card>
        </div>
      </hass-subpage>
    `}static get properties(){return{hass:Object,email:{type:String,notify:!0,observer:"_emailChanged"},_requestInProgress:{type:Boolean,value:!1},_error:{type:String,value:""}}}_emailChanged(){this._error="",this.$.email.invalid=!1}_keyDown(e){13===e.keyCode&&(this._handleEmailPasswordReset(),e.preventDefault())}_handleEmailPasswordReset(){this.email&&this.email.includes("@")||(this.$.email.invalid=!0),this.$.email.invalid||(this._requestInProgress=!0,this.hass.callApi("post","cloud/forgot_password",{email:this.email}).then(()=>{this._requestInProgress=!1,this.fire("cloud-done",{flashMessage:"[[localize('ui.panel.config.cloud.forgot_password.check_your_email')]]"})},e=>this.setProperties({_requestInProgress:!1,_error:e&&e.body&&e.body.message?e.body.message:"Unknown error"})))}})}}]);
//# sourceMappingURL=chunk.b5db4b53b907bb698539.js.map