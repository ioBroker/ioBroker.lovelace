export const __webpack_ids__=["58705"];export const __webpack_modules__={95612:function(e,t,a){a.a(e,(async function(e,t){try{var s=a(44249),i=a(57243),o=a(15093),r=a(36522),n=a(29095),d=(a(99426),a(54977),a(83166),a(28008)),l=a(94616),c=a(37013),u=e([n]);n=(u.then?(await u)():u)[0];(0,s.Z)([(0,o.Mo)("cloud-forgot-password-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"localize",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:"translation-key-panel"})],key:"translationKeyPanel",value:()=>"config.cloud.forgot_password"},{kind:"field",decorators:[(0,o.Cb)()],key:"email",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,attribute:"card-less"})],key:"cardLess",value:()=>!1},{kind:"field",decorators:[(0,o.SB)()],key:"_inProgress",value:()=>!1},{kind:"field",decorators:[(0,o.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,o.IO)("#email",!0)],key:"emailField",value:void 0},{kind:"method",key:"render",value:function(){return this.cardLess?this._renderContent():i.dy` <ha-card outlined .header="${this.localize(`ui.panel.${this.translationKeyPanel}.subtitle`)}"> ${this._renderContent()} </ha-card> `}},{kind:"method",key:"_renderContent",value:function(){return i.dy` <div class="card-content"> <p> ${this.localize(`ui.panel.${this.translationKeyPanel}.instructions`)} </p> ${this._error?i.dy`<ha-alert alert-type="error">${this._error}</ha-alert>`:i.Ld} <ha-textfield autofocus id="email" label="${this.localize(`ui.panel.${this.translationKeyPanel}.email`)}" .value="${this.email??""}" type="email" required .disabled="${this._inProgress}" @keydown="${this._keyDown}" .validationMessage="${this.localize(`ui.panel.${this.translationKeyPanel}.email_error_msg`)}"></ha-textfield> </div> <div class="card-actions"> <ha-progress-button @click="${this._handleEmailPasswordReset}" .progress="${this._inProgress}"> ${this.localize(`ui.panel.${this.translationKeyPanel}.send_reset_email`)} </ha-progress-button> </div> `}},{kind:"method",key:"_keyDown",value:function(e){"Enter"===e.key&&this._handleEmailPasswordReset()}},{kind:"field",key:"_resetPassword",value(){return async e=>{this._inProgress=!0;try{this.hass?await(0,l.u_)(this.hass,e):await(0,c.cG)(e),(0,r.B)(this,"cloud-email-changed",{value:e}),this._inProgress=!1,(0,r.B)(this,"cloud-done",{flashMessage:this.localize(`ui.panel.${this.translationKeyPanel}.check_your_email`)})}catch(t){this._inProgress=!1;"usernotfound"===(t&&t.body&&t.body.code)&&e!==e.toLowerCase()?await this._resetPassword(e.toLowerCase()):this._error=t&&t.body&&t.body.message?t.body.message:"Unknown error"}}}},{kind:"method",key:"_handleEmailPasswordReset",value:async function(){const e=this.emailField,t=e.value;e.reportValidity()?(this._inProgress=!0,this._resetPassword(t)):e.focus()}},{kind:"get",static:!0,key:"styles",value:function(){return[d.Qx,i.iv`ha-card{max-width:600px;margin:0 auto;margin-top:24px}h1{margin:0}ha-textfield{width:100%}.card-actions{display:flex;justify-content:flex-end;align-items:center}`]}}]}}),i.oi);t()}catch(e){t(e)}}))},10685:function(e,t,a){a.a(e,(async function(e,s){try{a.r(t),a.d(t,{CloudForgotPassword:()=>c});var i=a(44249),o=a(57243),r=a(15093),n=a(95612),d=(a(87979),a(28008)),l=e([n]);n=(l.then?(await l)():l)[0];let c=(0,i.Z)([(0,r.Mo)("cloud-forgot-password")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)()],key:"email",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_requestInProgress",value:()=>!1},{kind:"method",key:"render",value:function(){return o.dy` <hass-subpage .hass="${this.hass}" .narrow="${this.narrow}" .header="${this.hass.localize("ui.panel.config.cloud.forgot_password.title")}"> <div class="content"> <cloud-forgot-password-card .hass="${this.hass}" .localize="${this.hass.localize}" .email="${this.email}"></cloud-forgot-password-card> </div> </hass-subpage> `}},{kind:"get",static:!0,key:"styles",value:function(){return[d.Qx,o.iv`.content{padding-bottom:24px}`]}}]}}),o.oi);s()}catch(e){s(e)}}))}};
//# sourceMappingURL=58705.a1c41c0bdc89318b.js.map