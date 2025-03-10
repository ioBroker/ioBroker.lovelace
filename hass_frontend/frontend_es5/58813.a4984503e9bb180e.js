/*! For license information please see 58813.a4984503e9bb180e.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["58813"],{45228:function(t,o,n){function e(t,o){if(t.closest)return t.closest(o);for(var n=t;n;){if(i(n,o))return n;n=n.parentElement}return null}function i(t,o){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,o)}n.d(o,{oq:()=>e,wB:()=>i})},74269:function(t,o,n){var e=n(9065),i=n(50778),c=(n(71695),n(47021),n(16060),n(4428)),r=n(91532),d=n(57243),s=n(20552);let a,l,u,p=t=>t;class b extends d.oi{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.shouldRenderRipple=!1,this.rippleHandlers=new r.A((()=>(this.shouldRenderRipple=!0,this.ripple)))}renderRipple(){return this.shouldRenderRipple?(0,d.dy)(a||(a=p` <mwc-ripple .disabled="${0}" unbounded> </mwc-ripple>`),this.disabled):""}focus(){const t=this.buttonElement;t&&(this.rippleHandlers.startFocus(),t.focus())}blur(){const t=this.buttonElement;t&&(this.rippleHandlers.endFocus(),t.blur())}render(){return(0,d.dy)(l||(l=p`<button class="mdc-icon-button mdc-icon-button--display-flex" aria-label="${0}" aria-haspopup="${0}" ?disabled="${0}" @focus="${0}" @blur="${0}" @mousedown="${0}" @mouseenter="${0}" @mouseleave="${0}" @touchstart="${0}" @touchend="${0}" @touchcancel="${0}">${0} ${0} <span><slot></slot></span> </button>`),this.ariaLabel||this.icon,(0,s.o)(this.ariaHasPopup),this.disabled,this.handleRippleFocus,this.handleRippleBlur,this.handleRippleMouseDown,this.handleRippleMouseEnter,this.handleRippleMouseLeave,this.handleRippleTouchStart,this.handleRippleDeactivate,this.handleRippleDeactivate,this.renderRipple(),this.icon?(0,d.dy)(u||(u=p`<i class="material-icons">${0}</i>`),this.icon):"")}handleRippleMouseDown(t){const o=()=>{window.removeEventListener("mouseup",o),this.handleRippleDeactivate()};window.addEventListener("mouseup",o),this.rippleHandlers.startPress(t)}handleRippleTouchStart(t){this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}(0,e.__decorate)([(0,i.Cb)({type:Boolean,reflect:!0})],b.prototype,"disabled",void 0),(0,e.__decorate)([(0,i.Cb)({type:String})],b.prototype,"icon",void 0),(0,e.__decorate)([c.L,(0,i.Cb)({type:String,attribute:"aria-label"})],b.prototype,"ariaLabel",void 0),(0,e.__decorate)([c.L,(0,i.Cb)({type:String,attribute:"aria-haspopup"})],b.prototype,"ariaHasPopup",void 0),(0,e.__decorate)([(0,i.IO)("button")],b.prototype,"buttonElement",void 0),(0,e.__decorate)([(0,i.GC)("mwc-ripple")],b.prototype,"ripple",void 0),(0,e.__decorate)([(0,i.SB)()],b.prototype,"shouldRenderRipple",void 0),(0,e.__decorate)([(0,i.hO)({passive:!0})],b.prototype,"handleRippleMouseDown",null),(0,e.__decorate)([(0,i.hO)({passive:!0})],b.prototype,"handleRippleTouchStart",null);let h;const m=(0,d.iv)(h||(h=(t=>t)`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:400;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:48px;max-width:48px}@media screen and (forced-colors:active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:100%;width:100%}}@media screen and (forced-colors:active)and (forced-colors:active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors:active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors:active)and (forced-colors:active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%,-50%)}.mdc-icon-button:disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38))}.mdc-icon-button img,.mdc-icon-button svg{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:0;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%,-50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:0;position:absolute;top:0;width:100%}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:0;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%,-50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:0;position:absolute;top:0;width:100%}:host{display:inline-block;outline:0}:host([disabled]){pointer-events:none}.mdc-icon-button ::slotted(*),.mdc-icon-button i,.mdc-icon-button img,.mdc-icon-button svg{display:block}:host{--mdc-ripple-color:currentcolor;-webkit-tap-highlight-color:transparent}.mdc-icon-button,:host{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size,48px);height:var(--mdc-icon-button-size,48px);padding:calc((var(--mdc-icon-button-size,48px) - var(--mdc-icon-size,24px))/ 2)}.mdc-icon-button ::slotted(*),.mdc-icon-button i,.mdc-icon-button img,.mdc-icon-button svg{display:block;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px)}`));let f=class extends b{};f.styles=[m],f=(0,e.__decorate)([(0,i.Mo)("mwc-icon-button")],f)},30338:function(t,o,n){var e=n(97934),i=n(71998),c=n(4576),r=n(36760);t.exports=function(t,o){o&&"string"==typeof t||i(t);var n=r(t);return c(i(void 0!==n?e(n,t):t))}},60933:function(t,o,n){var e=n(40810),i=n(57877),c=n(63983),r=n(12360),d=n(13053),s=n(47645);e({target:"Array",proto:!0},{flatMap:function(t){var o,n=r(this),e=d(n);return c(t),(o=s(n,0)).length=i(o,n,n,e,0,1,t,arguments.length>1?arguments[1]:void 0),o}})},32126:function(t,o,n){n(35709)("flatMap")},25677:function(t,o,n){var e=n(40810),i=n(97934),c=n(63983),r=n(71998),d=n(4576),s=n(30338),a=n(79995),l=n(14181),u=n(92288),p=a((function(){for(var t,o,n=this.iterator,e=this.mapper;;){if(o=this.inner)try{if(!(t=r(i(o.next,o.iterator))).done)return t.value;this.inner=null}catch(c){l(n,"throw",c)}if(t=r(i(this.next,n)),this.done=!!t.done)return;try{this.inner=s(e(t.value,this.counter++),!1)}catch(c){l(n,"throw",c)}}}));e({target:"Iterator",proto:!0,real:!0,forced:u},{flatMap:function(t){return r(this),c(t),new p(d(this),{mapper:t,inner:null})}})},13809:function(t,o,n){n.d(o,{j:()=>c});n(71695),n(47021);var e=n(18492),i=n(78052);function c(t,o,n){const[c,d]=(0,e.d)(null==n?void 0:n.in,t,o),s=r(c,d),a=Math.abs((0,i.w)(c,d));c.setDate(c.getDate()-s*a);const l=s*(a-Number(r(c,d)===-s));return 0===l?0:l}function r(t,o){const n=t.getFullYear()-o.getFullYear()||t.getMonth()-o.getMonth()||t.getDate()-o.getDate()||t.getHours()-o.getHours()||t.getMinutes()-o.getMinutes()||t.getSeconds()-o.getSeconds()||t.getMilliseconds()-o.getMilliseconds();return n<0?-1:n>0?1:n}},94763:function(t,o,n){n.d(o,{p:()=>c});var e=n(34151),i=n(13809);function c(t,o,n){const c=(0,i.j)(t,o,n)/7;return(0,e.u)(null==n?void 0:n.roundingMethod)(c)}},69634:function(t,o,n){n.d(o,{V:()=>e.V});var e=n(11386)}}]);
//# sourceMappingURL=58813.a4984503e9bb180e.js.map