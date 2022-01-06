"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[88643],{88643:(e,r,t)=>{t.r(r),t.d(r,{CloudRegister:()=>k});t(15517);var i=t(37500),o=t(26767),s=t(5701),n=t(17717),a=t(67352),l=t(47181),c=(t(98762),t(9381),t(22098),t(83270)),d=(t(60010),t(11654));t(88165);function u(){u=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,r){["method","field"].forEach((function(t){r.forEach((function(r){r.kind===t&&"own"===r.placement&&this.defineClassElement(e,r)}),this)}),this)},initializeClassElements:function(e,r){var t=e.prototype;["method","field"].forEach((function(i){r.forEach((function(r){var o=r.placement;if(r.kind===i&&("static"===o||"prototype"===o)){var s="static"===o?e:t;this.defineClassElement(s,r)}}),this)}),this)},defineClassElement:function(e,r){var t=r.descriptor;if("field"===r.kind){var i=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,r.key,t)},decorateClass:function(e,r){var t=[],i=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!h(e))return t.push(e);var r=this.decorateElement(e,o);t.push(r.element),t.push.apply(t,r.extras),i.push.apply(i,r.finishers)}),this),!r)return{elements:t,finishers:i};var s=this.decorateConstructor(t,r);return i.push.apply(i,s.finishers),s.finishers=i,s},addElementPlacement:function(e,r,t){var i=r[e.placement];if(!t&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,r){for(var t=[],i=[],o=e.decorators,s=o.length-1;s>=0;s--){var n=r[e.placement];n.splice(n.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[s])(a)||a);e=l.element,this.addElementPlacement(e,r),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],r);t.push.apply(t,c)}}return{element:e,finishers:i,extras:t}},decorateConstructor:function(e,r){for(var t=[],i=r.length-1;i>=0;i--){var o=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,r[i])(o)||o);if(void 0!==s.finisher&&t.push(s.finisher),void 0!==s.elements){e=s.elements;for(var n=0;n<e.length-1;n++)for(var a=n+1;a<e.length;a++)if(e[n].key===e[a].key&&e[n].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[n].key+")")}}return{elements:e,finishers:t}},fromElementDescriptor:function(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r},toElementDescriptors:function(e){var r;if(void 0!==e)return(r=e,function(e){if(Array.isArray(e))return e}(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,r){if(e){if("string"==typeof e)return g(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?g(e,r):void 0}}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var r=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),r}),this)},toElementDescriptor:function(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=v(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:r,key:t,placement:i,descriptor:Object.assign({},o)};return"field"!==r?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:y(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var r={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r},toClassDescriptor:function(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var t=y(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:t}},runClassFinishers:function(e,r){for(var t=0;t<r.length;t++){var i=(0,r[t])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}};return e}function f(e){var r,t=v(e.key);"method"===e.kind?r={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function p(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function h(e){return e.decorators&&e.decorators.length}function m(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function y(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function v(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}function g(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,i=new Array(r);t<r;t++)i[t]=e[t];return i}let k=function(e,r,t,i){var o=u();if(i)for(var s=0;s<i.length;s++)o=i[s](o);var n=r((function(e){o.initializeInstanceElements(e,a.elements)}),t),a=o.decorateClass(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},i=0;i<e.length;i++){var o,s=e[i];if("method"===s.kind&&(o=r.find(t)))if(m(s.descriptor)||m(o.descriptor)){if(h(s)||h(o))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");o.descriptor=s.descriptor}else{if(h(s)){if(h(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");o.decorators=s.decorators}p(s,o)}else r.push(s)}return r}(n.d.map(f)),e);return o.initializeClassElements(n.F,a.elements),o.runClassFinishers(n.F,a.finishers)}([(0,o.M)("cloud-register")],(function(e,r){return{F:class extends r{constructor(...r){super(...r),e(this)}},d:[{kind:"field",decorators:[(0,s.C)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.C)({type:Boolean})],key:"isWide",value:()=>!1},{kind:"field",decorators:[(0,s.C)({type:Boolean})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,s.C)()],key:"email",value:void 0},{kind:"field",decorators:[(0,n.S)()],key:"_requestInProgress",value:()=>!1},{kind:"field",decorators:[(0,n.S)()],key:"_password",value:()=>""},{kind:"field",decorators:[(0,n.S)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,a.I)("#email",!0)],key:"_emailField",value:void 0},{kind:"field",decorators:[(0,a.I)("#password",!0)],key:"_passwordField",value:void 0},{kind:"method",key:"render",value:function(){return i.dy`
      <hass-subpage
        .hass=${this.hass}
        .narrow=${this.narrow}
        .header=${this.hass.localize("ui.panel.config.cloud.register.title")}
      >
        <div class="content">
          <ha-config-section .isWide=${this.isWide}>
            <span slot="header"
              >${this.hass.localize("ui.panel.config.cloud.register.headline")}</span
            >
            <div slot="introduction">
              <p>
                ${this.hass.localize("ui.panel.config.cloud.register.information")}
              </p>
              <p>
                ${this.hass.localize("ui.panel.config.cloud.register.information2")}
              </p>
              <ul>
                <li>
                  ${this.hass.localize("ui.panel.config.cloud.register.feature_remote_control")}
                </li>
                <li>
                  ${this.hass.localize("ui.panel.config.cloud.register.feature_google_home")}
                </li>
                <li>
                  ${this.hass.localize("ui.panel.config.cloud.register.feature_amazon_alexa")}
                </li>
                <li>
                  ${this.hass.localize("ui.panel.config.cloud.register.feature_webhook_apps")}
                </li>
              </ul>
              <p>
                ${this.hass.localize("ui.panel.config.cloud.register.information3")}
                <a href="https://www.nabucasa.com" target="_blank"
                  >Nabu&nbsp;Casa,&nbsp;Inc</a
                >
                ${this.hass.localize("ui.panel.config.cloud.register.information3a")}
              </p>
              <p>
                ${this.hass.localize("ui.panel.config.cloud.register.information4")}
              </p>
              <ul>
                <li>
                  <a
                    href="https://www.nabucasa.com/tos/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ${this.hass.localize("ui.panel.config.cloud.register.link_terms_conditions")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nabucasa.com/privacy_policy/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ${this.hass.localize("ui.panel.config.cloud.register.link_privacy_policy")}
                  </a>
                </li>
              </ul>
            </div>
            <ha-card
              .header=${this.hass.localize("ui.panel.config.cloud.register.create_account")}
              ><div class="card-content register-form">
                ${this._error?i.dy`<ha-alert alert-type="error">${this._error}</ha-alert>`:""}
                <mwc-textfield
                  autofocus
                  id="email"
                  .label=${this.hass.localize("ui.panel.config.cloud.register.email_address")}
                  type="email"
                  required
                  .value=${this.email}
                  @keydown=${this._keyDown}
                  validationMessage=${this.hass.localize("ui.panel.config.cloud.register.email_error_msg")}
                ></mwc-textfield>
                <mwc-textfield
                  id="password"
                  label="Password"
                  .value=${this._password}
                  type="password"
                  minlength="8"
                  required
                  @keydown=${this._keyDown}
                  validationMessage=${this.hass.localize("ui.panel.config.cloud.register.password_error_msg")}
                ></mwc-textfield>
              </div>
              <div class="card-actions">
                <ha-progress-button
                  @click=${this._handleRegister}
                  .progress=${this._requestInProgress}
                  >${this.hass.localize("ui.panel.config.cloud.register.start_trial")}</ha-progress-button
                >
                <button
                  class="link"
                  .disabled=${this._requestInProgress}
                  @click=${this._handleResendVerifyEmail}
                >
                  ${this.hass.localize("ui.panel.config.cloud.register.resend_confirm_email")}
                </button>
              </div>
            </ha-card>
          </ha-config-section>
        </div>
      </hass-subpage>
    `}},{kind:"method",key:"_keyDown",value:function(e){"Enter"===e.key&&this._handleRegister()}},{kind:"method",key:"_handleRegister",value:async function(){const e=this._emailField,r=this._passwordField,t=e.value,i=r.value;if(!e.reportValidity())return r.reportValidity(),void e.focus();if(r.reportValidity()){this._requestInProgress=!0;try{await(0,c.bi)(this.hass,t,i),this._verificationEmailSent(t)}catch(e){this._password="",this._requestInProgress=!1,this._error=e&&e.body&&e.body.message?e.body.message:"Unknown error"}}else r.focus()}},{kind:"method",key:"_handleResendVerifyEmail",value:async function(){const e=this._emailField,r=e.value;if(e.reportValidity())try{await(0,c._t)(this.hass,r),this._verificationEmailSent(r)}catch(e){this._error=e&&e.body&&e.body.message?e.body.message:"Unknown error"}else e.focus()}},{kind:"method",key:"_verificationEmailSent",value:function(e){this._requestInProgress=!1,this._password="",(0,l.B)(this,"email-changed",{value:e}),(0,l.B)(this,"cloud-done",{flashMessage:this.hass.localize("ui.panel.config.cloud.register.account_created")})}},{kind:"get",static:!0,key:"styles",value:function(){return[d.Qx,i.iv`
        [slot="introduction"] {
          margin: -1em 0;
        }
        [slot="introduction"] a {
          color: var(--primary-color);
        }
        a {
          color: var(--primary-color);
        }
        paper-item {
          cursor: pointer;
        }
        h1 {
          margin: 0;
        }
        .register-form {
          display: flex;
          flex-direction: column;
        }
        .card-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `]}}]}}),i.oi)}}]);
//# sourceMappingURL=1b39b84f.js.map