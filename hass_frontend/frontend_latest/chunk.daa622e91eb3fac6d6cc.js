/*! For license information please see chunk.daa622e91eb3fac6d6cc.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[4018],{99697:(e,r,i)=>{"use strict";i.d(r,{D:()=>d});function t(e,r,i,t){var c,o=arguments.length,s=o<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,i):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,r,i,t);else for(var n=e.length-1;n>=0;n--)(c=e[n])&&(s=(o<3?c(s):o>3?c(r,i,s):c(r,i))||s);return o>3&&s&&Object.defineProperty(r,i,s),s}var c=i(15652),o=i(81471),s=i(49629),n=i(79865);class a extends c.oi{constructor(){super(...arguments),this.indeterminate=!1,this.progress=0,this.density=0,this.closed=!1,this.ariaLabel=""}open(){this.closed=!1}close(){this.closed=!0}render(){const e={"mdc-circular-progress--closed":this.closed,"mdc-circular-progress--indeterminate":this.indeterminate},r=48+4*this.density,i={width:r+"px",height:r+"px"};return c.dy`
      <div
        class="mdc-circular-progress ${(0,o.$)(e)}"
        style="${(0,n.V)(i)}"
        role="progressbar"
        aria-label="${this.ariaLabel}"
        aria-valuemin="0"
        aria-valuemax="1"
        aria-valuenow="${(0,s.o)(this.indeterminate?void 0:this.progress)}">
        ${this.renderDeterminateContainer()}
        ${this.renderIndeterminateContainer()}
      </div>`}renderDeterminateContainer(){const e=48+4*this.density,r=e/2,i=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,t=6.2831852*i,o=(1-this.progress)*t,s=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return c.dy`
      <div class="mdc-circular-progress__determinate-container">
        <svg class="mdc-circular-progress__determinate-circle-graphic"
             viewBox="0 0 ${e} ${e}">
          <circle class="mdc-circular-progress__determinate-track"
                  cx="${r}" cy="${r}" r="${i}"
                  stroke-width="${s}"></circle>
          <circle class="mdc-circular-progress__determinate-circle"
                  cx="${r}" cy="${r}" r="${i}"
                  stroke-dasharray="${6.2831852*i}"
                  stroke-dashoffset="${o}"
                  stroke-width="${s}"></circle>
        </svg>
      </div>`}renderIndeterminateContainer(){return c.dy`
      <div class="mdc-circular-progress__indeterminate-container">
        <div class="mdc-circular-progress__spinner-layer">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
      </div>`}renderIndeterminateSpinnerLayer(){const e=48+4*this.density,r=e/2,i=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,t=6.2831852*i,o=.5*t,s=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return c.dy`
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${e} ${e}">
            <circle cx="${r}" cy="${r}" r="${i}"
                    stroke-dasharray="${t}"
                    stroke-dashoffset="${o}"
                    stroke-width="${s}"></circle>
          </svg>
        </div><div class="mdc-circular-progress__gap-patch">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${e} ${e}">
            <circle cx="${r}" cy="${r}" r="${i}"
                    stroke-dasharray="${t}"
                    stroke-dashoffset="${o}"
                    stroke-width="${.8*s}"></circle>
          </svg>
        </div><div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${e} ${e}">
            <circle cx="${r}" cy="${r}" r="${i}"
                    stroke-dasharray="${t}"
                    stroke-dashoffset="${o}"
                    stroke-width="${s}"></circle>
          </svg>
        </div>`}update(e){super.update(e),e.has("progress")&&(this.progress>1&&(this.progress=1),this.progress<0&&(this.progress=0))}}t([(0,c.Cb)({type:Boolean,reflect:!0})],a.prototype,"indeterminate",void 0),t([(0,c.Cb)({type:Number,reflect:!0})],a.prototype,"progress",void 0),t([(0,c.Cb)({type:Number,reflect:!0})],a.prototype,"density",void 0),t([(0,c.Cb)({type:Boolean,reflect:!0})],a.prototype,"closed",void 0),t([(0,c.Cb)({type:String})],a.prototype,"ariaLabel",void 0);const l=c.iv`.mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color, transparent)}`;let d=class extends a{};d.styles=l,d=t([(0,c.Mo)("mwc-circular-progress")],d)},68646:(e,r,i)=>{"use strict";i.d(r,{B:()=>s});var t=i(90877),c=(i(66702),i(98734)),o=i(15652);class s extends o.oi{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.label="",this.shouldRenderRipple=!1,this.rippleHandlers=new c.A((()=>(this.shouldRenderRipple=!0,this.ripple)))}renderRipple(){return this.shouldRenderRipple?o.dy`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}focus(){const e=this.buttonElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.buttonElement;e&&(this.rippleHandlers.endFocus(),e.blur())}render(){return o.dy`<button
        class="mdc-icon-button"
        aria-label="${this.label||this.icon}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}">
      ${this.renderRipple()}
    <i class="material-icons">${this.icon}</i>
    <span class="default-slot-container">
        <slot></slot>
    </span>
  </button>`}handleRippleMouseDown(e){const r=()=>{window.removeEventListener("mouseup",r),this.handleRippleDeactivate()};window.addEventListener("mouseup",r),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}(0,t.gn)([(0,o.Cb)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),(0,t.gn)([(0,o.Cb)({type:String})],s.prototype,"icon",void 0),(0,t.gn)([(0,o.Cb)({type:String})],s.prototype,"label",void 0),(0,t.gn)([(0,o.IO)("button")],s.prototype,"buttonElement",void 0),(0,t.gn)([(0,o.GC)("mwc-ripple")],s.prototype,"ripple",void 0),(0,t.gn)([(0,o.sz)()],s.prototype,"shouldRenderRipple",void 0),(0,t.gn)([(0,o.hO)({passive:!0})],s.prototype,"handleRippleMouseDown",null),(0,t.gn)([(0,o.hO)({passive:!0})],s.prototype,"handleRippleTouchStart",null)},81383:(e,r,i)=>{"use strict";i.d(r,{o:()=>t});const t=i(15652).iv`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}:host{display:inline-block;outline:none;--mdc-ripple-color: currentcolor}:host([disabled]){pointer-events:none}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc((var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2)}.mdc-icon-button>i{position:absolute;top:0;padding-top:inherit}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`},25230:(e,r,i)=>{"use strict";var t=i(90877),c=i(15652),o=i(68646),s=i(81383);let n=class extends o.B{};n.styles=s.o,n=(0,t.gn)([(0,c.Mo)("mwc-icon-button")],n)},90877:(e,r,i)=>{"use strict";i.d(r,{gn:()=>t});function t(e,r,i,t){var c,o=arguments.length,s=o<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,i):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,r,i,t);else for(var n=e.length-1;n>=0;n--)(c=e[n])&&(s=(o<3?c(s):o>3?c(r,i,s):c(r,i))||s);return o>3&&s&&Object.defineProperty(r,i,s),s}},49629:(e,r,i)=>{"use strict";i.d(r,{o:()=>o});var t=i(94707);const c=new WeakMap,o=(0,t.XM)((e=>r=>{const i=c.get(r);if(void 0===e&&r instanceof t._l){if(void 0!==i||!c.has(r)){const e=r.committer.name;r.committer.element.removeAttribute(e)}}else e!==i&&r.setValue(e);c.set(r,e)}))}}]);
//# sourceMappingURL=chunk.daa622e91eb3fac6d6cc.js.map