(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[1628],{93699:(e,i,r)=>{"use strict";r.r(i);r(30879);var a=r(50856),o=r(28426),s=(r(98762),r(22098),r(60010),r(11052)),t=r(1265),l=(r(3426),r(27322));r(88165);class n extends((0,t.Z)((0,s.I)(o.H3))){static get template(){return a.d`
    <style include="iron-flex ha-style">
      [slot=introduction] {
        margin: -1em 0;
      }
      [slot=introduction] a {
        color: var(--primary-color);
      }
      a {
        color: var(--primary-color);
      }
      paper-item {
        cursor: pointer;
      }
      h1 {
        @apply --paper-font-headline;
        margin: 0;
      }
      .error {
        color: var(--error-color);
      }
      .card-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      [hidden] {
        display: none;
      }
    </style>
    <hass-subpage header="[[localize('ui.panel.config.cloud.register.title')]]">
      <div class="content">
        <ha-config-section is-wide="[[isWide]]">
          <span slot="header">[[localize('ui.panel.config.cloud.register.headline')]]</span>
          <div slot="introduction">
            <p>
              [[localize('ui.panel.config.cloud.register.information')]]
            </p>
            <p>
            [[localize('ui.panel.config.cloud.register.information2')]]
            </p>
            <ul>
              <li>[[localize('ui.panel.config.cloud.register.feature_remote_control')]]</li>
              <li>[[localize('ui.panel.config.cloud.register.feature_google_home')]]</li>
              <li>[[localize('ui.panel.config.cloud.register.feature_amazon_alexa')]]</li>
              <li>[[localize('ui.panel.config.cloud.register.feature_webhook_apps')]]</li>
            </ul>
            <p>
              [[localize('ui.panel.config.cloud.register.information3')]] <a href='https://www.nabucasa.com' target='_blank'>Nabu&nbsp;Casa,&nbsp;Inc</a>[[localize('ui.panel.config.cloud.register.information3a')]]
            </p>

            <p>
              [[localize('ui.panel.config.cloud.register.information4')]]
              </p><ul>
                <li><a href="[[_computeDocumentationUrlTos(hass)]]" target="_blank" rel="noreferrer">[[localize('ui.panel.config.cloud.register.link_terms_conditions')]]</a></li>
                <li><a href="[[_computeDocumentationUrlPrivacy(hass)]]" target="_blank" rel="noreferrer">[[localize('ui.panel.config.cloud.register.link_privacy_policy')]]</a></li>
              </ul>
            </p>
          </div>

          <ha-card header="[[localize('ui.panel.config.cloud.register.create_account')]]">
            <div class="card-content">
              <div class="header">
                <div class="error" hidden$="[[!_error]]">[[_error]]</div>
              </div>
              <paper-input autofocus="" id="email" label="[[localize('ui.panel.config.cloud.register.email_address')]]" type="email" value="{{email}}" on-keydown="_keyDown" error-message="[[localize('ui.panel.config.cloud.register.email_error_msg')]]"></paper-input>
              <paper-input id="password" label="Password" value="{{_password}}" type="password" on-keydown="_keyDown" error-message="[[localize('ui.panel.config.cloud.register.password_error_msg')]]"></paper-input>
            </div>
            <div class="card-actions">
              <ha-progress-button on-click="_handleRegister" progress="[[_requestInProgress]]">[[localize('ui.panel.config.cloud.register.start_trial')]]</ha-progress-button>
              <button class="link" hidden="[[_requestInProgress]]" on-click="_handleResendVerifyEmail">[[localize('ui.panel.config.cloud.register.resend_confirmation_email')]]</button>
            </div>
          </ha-card>
        </ha-config-section>
      </div>
    </hass-subpage>
`}static get properties(){return{hass:Object,isWide:Boolean,email:{type:String,notify:!0},_requestInProgress:{type:Boolean,value:!1},_password:{type:String,value:""},_error:{type:String,value:""}}}static get observers(){return["_inputChanged(email, _password)"]}_inputChanged(){this._error="",this.$.email.invalid=!1,this.$.password.invalid=!1}_keyDown(e){13===e.keyCode&&(this._handleRegister(),e.preventDefault())}_computeDocumentationUrlTos(e){return(0,l.R)(e,"/tos/")}_computeDocumentationUrlPrivacy(e){return(0,l.R)(e,"/privacy/")}_handleRegister(){let e=!1;this.email&&this.email.includes("@")||(this.$.email.invalid=!0,this.$.email.focus(),e=!0),this._password.length<8&&(this.$.password.invalid=!0,e||(e=!0,this.$.password.focus())),e||(this._requestInProgress=!0,this.hass.callApi("post","cloud/register",{email:this.email,password:this._password}).then((()=>this._verificationEmailSent()),(e=>{this._password="",this.setProperties({_requestInProgress:!1,_error:e&&e.body&&e.body.message?e.body.message:"Unknown error"})})))}_handleResendVerifyEmail(){this.email?this.hass.callApi("post","cloud/resend_confirm",{email:this.email}).then((()=>this._verificationEmailSent()),(e=>this.setProperties({_error:e&&e.body&&e.body.message?e.body.message:"Unknown error"}))):this.$.email.invalid=!0}_verificationEmailSent(){this.setProperties({_requestInProgress:!1,_password:""}),this.fire("cloud-done",{flashMessage:this.hass.localize("ui.panel.config.cloud.register.account_created")})}}customElements.define("cloud-register",n)},27322:(e,i,r)=>{"use strict";r.d(i,{R:()=>a});const a=(e,i)=>`https://www.iobroker.net/#${e.language&&e.language.split("-")[0]||"en"}/adapters/adapterref/iobroker.lovelace/README.md`}}]);
//# sourceMappingURL=chunk.52201da39906635b865a.js.map