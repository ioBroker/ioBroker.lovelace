/*! For license information please see 78725-CLhtuzcFUgQ.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[78725],{79021:(t,e,o)=>{o.d(e,{Z:()=>a});var r=o(90394),i=o(34327),n=o(23682);function a(t,e){(0,n.Z)(2,arguments);var o=(0,i.Z)(t),a=(0,r.Z)(e);return isNaN(a)?new Date(NaN):a?(o.setDate(o.getDate()+a),o):o}},99307:(t,e,o)=>{o.d(e,{Z:()=>n});var r=o(34327),i=o(23682);function n(t,e){return(0,i.Z)(2,arguments),(0,r.Z)(t).getTime()-(0,r.Z)(e).getTime()}},30443:(t,e,o)=>{o.d(e,{Z:()=>n});var r=o(59429),i=o(23682);function n(t,e){(0,i.Z)(2,arguments);var o=(0,r.Z)(t),n=(0,r.Z)(e);return o.getTime()===n.getTime()}},85968:(t,e,o)=>{o.d(e,{Z:()=>n});var r=o(34327),i=o(23682);function n(t,e){(0,i.Z)(2,arguments);var o=(0,r.Z)(t),n=(0,r.Z)(e);return o.getFullYear()===n.getFullYear()}},29382:(t,e,o)=>{o.d(e,{d:()=>n});const r=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];r.map(i);function i(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}function n(t){for(const e of r)t.createProperty(e,{attribute:i(e),reflect:!0});t.addInitializer((t=>{const e={hostConnected(){t.setAttribute("role","presentation")}};t.addController(e)}))}},25962:(t,e,o)=>{o.d(e,{U:()=>b});var r=o(68144),i=o(87480),n=(o(1585),o(71851),o(79932)),a=o(83448),s=o(8067),d=o(32138),l=o(29382);function c(t){return t.currentTarget===t.target&&(t.composedPath()[0]===t.target&&(!t.target.disabled&&!function(t){const e=u;e&&(t.preventDefault(),t.stopImmediatePropagation());return async function(){u=!0,await null,u=!1}(),e}(t)))}let u=!1;var h,p=o(42767);class v extends r.oi{constructor(){super(),this.disabled=!1,this.trailingIcon=!1,this.hasIcon=!1,this.preventClickDefault=!1,this.showRipple=!1,this.handleActivationClick=t=>{c(t)&&this.buttonElement&&(this.focus(),function(t){const e=new MouseEvent("click",{bubbles:!0});t.dispatchEvent(e)}(this.buttonElement))},this.getRipple=()=>(this.showRipple=!0,this.ripple),this.renderRipple=()=>r.dy`<md-ripple class="md3-button__ripple" ?disabled="${this.disabled}"></md-ripple>`,r.sk||this.addEventListener("click",this.handleActivationClick)}focus(){var t;null===(t=this.buttonElement)||void 0===t||t.focus()}blur(){var t;null===(t=this.buttonElement)||void 0===t||t.blur()}render(){const t=this.disabled&&!this.href,e=this.href?d.i0`a`:d.i0`button`,{ariaLabel:o,ariaHasPopup:i,ariaExpanded:n}=this;return d.dy`
      <${e}
        class="md3-button ${(0,a.$)(this.getRenderClasses())}"
        ?disabled=${t}
        aria-label="${o||r.Ld}"
        aria-haspopup="${i||r.Ld}"
        aria-expanded="${n||r.Ld}"
        href=${this.href||r.Ld}
        target=${this.target||r.Ld}
        @click="${this.handleClick}"
        ${(0,p.H)(this.getRipple)}
      >
        ${this.renderFocusRing()}
        ${this.renderElevation()}
        ${(0,s.g)(this.showRipple,this.renderRipple)}
        ${this.renderOutline()}
        ${this.renderTouchTarget()}
        ${this.renderLeadingIcon()}
        ${this.renderLabel()}
        ${this.renderTrailingIcon()}
      </${e}>`}getRenderClasses(){return{"md3-button--icon-leading":!this.trailingIcon&&this.hasIcon,"md3-button--icon-trailing":this.trailingIcon&&this.hasIcon}}renderElevation(){return r.Ld}renderOutline(){return r.Ld}renderTouchTarget(){return r.dy` <span class="md3-button__touch"></span> `}renderFocusRing(){return r.dy`<md-focus-ring></md-focus-ring>`}renderLabel(){return r.dy`<span class="md3-button__label"><slot></slot></span>`}renderLeadingIcon(){return this.trailingIcon?r.Ld:this.renderIcon()}renderTrailingIcon(){return this.trailingIcon?this.renderIcon():r.Ld}renderIcon(){return r.dy`<slot name="icon" @slotchange="${this.handleSlotChange}"></slot>`}handleClick(t){this.preventClickDefault&&t.preventDefault()}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}h=v,(0,l.d)(h),v.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,i.__decorate)([(0,n.Cb)({type:Boolean,reflect:!0})],v.prototype,"disabled",void 0),(0,i.__decorate)([(0,n.Cb)()],v.prototype,"href",void 0),(0,i.__decorate)([(0,n.Cb)()],v.prototype,"target",void 0),(0,i.__decorate)([(0,n.Cb)({type:Boolean,attribute:"trailingicon"})],v.prototype,"trailingIcon",void 0),(0,i.__decorate)([(0,n.Cb)({type:Boolean})],v.prototype,"hasIcon",void 0),(0,i.__decorate)([(0,n.Cb)({type:Boolean})],v.prototype,"preventClickDefault",void 0),(0,i.__decorate)([(0,n.IO)(".md3-button")],v.prototype,"buttonElement",void 0),(0,i.__decorate)([(0,n.GC)("md-ripple")],v.prototype,"ripple",void 0),(0,i.__decorate)([(0,n.SB)()],v.prototype,"showRipple",void 0),(0,i.__decorate)([(0,n.NH)({slot:"icon",flatten:!0})],v.prototype,"assignedIcons",void 0);class b extends v{getRenderClasses(){return{...super.getRenderClasses(),"md3-button--outlined":!0}}renderOutline(){return r.dy`<span class="md3-button__outline"></span>`}}},46223:(t,e,o)=>{o.d(e,{W:()=>r});const r=o(68144).iv`:host{--_container-height:var(--md-outlined-button-container-height, 40px);--_container-shape:var(--md-outlined-button-container-shape, 9999px);--_disabled-label-text-color:var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity:var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color:var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity:var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color:var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-color:var(--md-outlined-button-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-state-layer-color:var(--md-outlined-button-focus-state-layer-color, var(--md-sys-color-primary, #6750a4));--_focus-state-layer-opacity:var(--md-outlined-button-focus-state-layer-opacity, 0.12);--_hover-label-text-color:var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-outline-color:var(--md-outlined-button-hover-outline-color, var(--md-sys-color-outline, #79747e));--_hover-state-layer-color:var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity:var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color:var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-type:var(--md-outlined-button-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_outline-color:var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width:var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color:var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color:var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color:var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity:var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_with-icon-disabled-icon-color:var(--md-outlined-button-with-icon-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_with-icon-disabled-icon-opacity:var(--md-outlined-button-with-icon-disabled-icon-opacity, 0.38);--_with-icon-focus-icon-color:var(--md-outlined-button-with-icon-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_with-icon-hover-icon-color:var(--md-outlined-button-with-icon-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_with-icon-icon-color:var(--md-outlined-button-with-icon-icon-color, var(--md-sys-color-primary, #6750a4));--_with-icon-icon-size:var(--md-outlined-button-with-icon-icon-size, 18px);--_with-icon-pressed-icon-color:var(--md-outlined-button-with-icon-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_spacing-leading:var(--md-outlined-button-spacing-leading, 24px);--_spacing-trailing:var(--md-outlined-button-spacing-trailing, 24px);--_with-icon-spacing-leading:var(--md-outlined-button-with-icon-spacing-leading, 16px);--_with-icon-spacing-trailing:var(--md-outlined-button-with-icon-spacing-trailing, 24px);--_with-trailing-icon-spacing-leading:var(--md-outlined-button-with-trailing-icon-spacing-leading, 24px);--_with-trailing-icon-spacing-trailing:var(--md-outlined-button-with-trailing-icon-spacing-trailing, 16px);--_container-shape-start-start:var( --md-outlined-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end:var( --md-outlined-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end:var( --md-outlined-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start:var( --md-outlined-button-container-shape-end-start, var(--_container-shape) )}.md3-button__outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.md3-button:active .md3-button__outline{border-color:var(--_pressed-outline-color)}.md3-button:disabled .md3-button__outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}.md3-button__outline,.md3-button__ripple{border-width:var(--_outline-width)}.md3-button__ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:transparent}`},76079:(t,e,o)=>{o.d(e,{W:()=>r});const r=o(68144).iv`:root{--md-filled-button-container-shape-start-start:12px;--md-filled-button-container-shape:8px}:host{display:inline-flex;outline:0;-webkit-tap-highlight-color:transparent;vertical-align:top;--md-ripple-hover-color:var(--_hover-state-layer-color);--md-ripple-focus-color:var(--_focus-state-layer-color);--md-ripple-pressed-color:var(--_pressed-state-layer-color);--md-ripple-hover-opacity:var(--_hover-state-layer-opacity);--md-ripple-focus-opacity:var(--_focus-state-layer-opacity);--md-ripple-pressed-opacity:var(--_pressed-state-layer-opacity);--md-focus-ring-shape-start-start:var(--_container-shape-start-start);--md-focus-ring-shape-start-end:var(--_container-shape-start-end);--md-focus-ring-shape-end-end:var(--_container-shape-end-end);--md-focus-ring-shape-end-start:var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.md3-button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-inline-size:64px;border:none;outline:0;user-select:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;inline-size:100%;position:relative;z-index:0;block-size:var(--_container-height);font:var(--_label-text-type);color:var(--_label-text-color);padding-inline-start:var(--_spacing-leading);padding-inline-end:var(--_spacing-trailing);gap:8px}.md3-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute}.md3-button::-moz-focus-inner{padding:0;border:0}.md3-button:hover{color:var(--_hover-label-text-color);cursor:pointer}.md3-button:focus{color:var(--_focus-label-text-color)}.md3-button:active{color:var(--_pressed-label-text-color);outline:0}.md3-button:disabled .md3-button__label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.md3-button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors:active){.md3-button::before{content:"";box-sizing:border-box;border:1px solid transparent;border-radius:inherit;inset:0;pointer-events:none;position:absolute}}.md3-button,.md3-button__ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.md3-button::after,.md3-button::before,.md3-button__ripple,md-elevation{z-index:-1}.md3-button--icon-leading{padding-inline-start:var(--_with-icon-spacing-leading);padding-inline-end:var(--_with-icon-spacing-trailing)}.md3-button--icon-trailing{padding-inline-start:var(--_with-trailing-icon-spacing-leading);padding-inline-end:var(--_with-trailing-icon-spacing-trailing)}.md3-link-button-wrapper{inline-size:100%}.md3-button ::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_with-icon-icon-color);font-size:var(--_with-icon-icon-size);inline-size:var(--_with-icon-icon-size);block-size:var(--_with-icon-icon-size)}.md3-button:hover ::slotted([slot=icon]){color:var(--_with-icon-hover-icon-color)}.md3-button:focus ::slotted([slot=icon]){color:var(--_with-icon-focus-icon-color)}.md3-button:active ::slotted([slot=icon]){color:var(--_with-icon-pressed-icon-color)}.md3-button:disabled ::slotted([slot=icon]){color:var(--_with-icon-disabled-icon-color);opacity:var(--_with-icon-disabled-icon-opacity)}.md3-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}`},1585:(t,e,o)=>{var r=o(87480),i=o(79932),n=o(68144);class a extends n.oi{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.htmlFor=null,this.currentControl=null}get control(){return this.hasAttribute("for")?this.htmlFor?this.getRootNode().querySelector(`#${this.htmlFor}`):null:this.currentControl||this.parentElement}attach(t){t!==this.currentControl&&(this.setCurrentControl(t),this.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.setAttribute("for","")}connectedCallback(){super.connectedCallback(),this.setCurrentControl(this.control)}disconnectedCallback(){super.disconnectedCallback(),this.setCurrentControl(null)}updated(t){if(t.has("htmlFor")){const{control:t}=this;t&&this.setCurrentControl(t)}}handleEvent(t){var e,o;if(!t[s]){switch(t.type){default:return;case"focusin":this.visible=null!==(e=null===(o=this.control)||void 0===o?void 0:o.matches(":focus-visible"))&&void 0!==e&&e;break;case"focusout":case"pointerdown":this.visible=!1}t[s]=!0}}setCurrentControl(t){for(const o of["focusin","focusout","pointerdown"]){var e;null===(e=this.currentControl)||void 0===e||e.removeEventListener(o,this),null==t||t.addEventListener(o,this)}this.currentControl=t}}(0,r.__decorate)([(0,i.Cb)({type:Boolean,reflect:!0})],a.prototype,"visible",void 0),(0,r.__decorate)([(0,i.Cb)({type:Boolean,reflect:!0})],a.prototype,"inward",void 0),(0,r.__decorate)([(0,i.Cb)({attribute:"for",reflect:!0})],a.prototype,"htmlFor",void 0);const s=Symbol("handledByFocusRing"),d=n.iv`:host{--_active-width:var(--md-focus-ring-active-width, 8px);--_color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));--_duration:var(--md-focus-ring-duration, 600ms);--_inward-offset:var(--md-focus-ring-inward-offset, 0px);--_outward-offset:var(--md-focus-ring-outward-offset, 2px);--_shape:var(--md-focus-ring-shape, 9999px);--_width:var(--md-focus-ring-width, 3px);--_shape-start-start:var(--md-focus-ring-shape-start-start, var(--_shape));--_shape-start-end:var(--md-focus-ring-shape-start-end, var(--_shape));--_shape-end-end:var(--md-focus-ring-shape-end-end, var(--_shape));--_shape-end-start:var(--md-focus-ring-shape-end-start, var(--_shape));animation-delay:0s,calc(var(--_duration)*.25);animation-duration:calc(var(--_duration)*.25),calc(var(--_duration)*.75);animation-timing-function:cubic-bezier(.2,0,0,1);box-sizing:border-box;color:var(--_color);display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--_shape-end-end) + var(--_outward-offset));border-end-start-radius:calc(var(--_shape-end-start) + var(--_outward-offset));border-start-end-radius:calc(var(--_shape-start-end) + var(--_outward-offset));border-start-start-radius:calc(var(--_shape-start-start) + var(--_outward-offset));inset:calc(-1*(var(--_outward-offset)));outline:var(--_width) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--_shape-end-end) - var(--_inward-offset));border-end-start-radius:calc(var(--_shape-end-start) - var(--_inward-offset));border-start-end-radius:calc(var(--_shape-start-end) - var(--_inward-offset));border-start-start-radius:calc(var(--_shape-start-start) - var(--_inward-offset));border:var(--_width) solid currentColor;inset:var(--_inward-offset)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--_active-width)}}@keyframes outward-shrink{from{outline-width:var(--_active-width)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--_active-width)}}@keyframes inward-shrink{from{border-width:var(--_active-width)}}@media(prefers-reduced-motion){:host{animation:none}}`;let l=class extends a{};l.styles=[d],l=(0,r.__decorate)([(0,i.Mo)("md-focus-ring")],l)},42767:(t,e,o)=>{o.d(e,{H:()=>a});var r=o(68144),i=o(57835);class n extends i.Xe{constructor(t){if(super(t),this.rippleGetter=async()=>null,t.type!==i.pX.ELEMENT)throw new Error("The `ripple` directive must be used on an element")}render(t){return r.Jb}async handleEvent(t){const e=await this.rippleGetter();if(e)switch(t.type){case"click":e.handleClick();break;case"contextmenu":e.handleContextmenu();break;case"pointercancel":e.handlePointercancel(t);break;case"pointerdown":await e.handlePointerdown(t);break;case"pointerenter":e.handlePointerenter(t);break;case"pointerleave":e.handlePointerleave(t);break;case"pointerup":e.handlePointerup(t)}}update(t,[e]){return this.element||(this.element=t.element,this.element.addEventListener("click",this),this.element.addEventListener("contextmenu",this),this.element.addEventListener("pointercancel",this),this.element.addEventListener("pointerdown",this),this.element.addEventListener("pointerenter",this),this.element.addEventListener("pointerleave",this),this.element.addEventListener("pointerup",this)),this.rippleGetter="function"==typeof e?e:()=>e,r.Jb}}const a=(0,i.XM)(n)},71851:(t,e,o)=>{var r=o(87480),i=o(79932),n=o(68144),a=o(83448);const s="cubic-bezier(0.2, 0, 0, 1)";var d;!function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"}(d||(d={}));class l extends n.oi{constructor(){super(...arguments),this.unbounded=!1,this.disabled=!1,this.hovered=!1,this.focused=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=d.INACTIVE,this.checkBoundsAfterContextMenu=!1}handlePointerenter(t){this.shouldReactToEvent(t)&&(this.hovered=!0)}handlePointerleave(t){this.shouldReactToEvent(t)&&(this.hovered=!1,this.state!==d.INACTIVE&&this.endPressAnimation())}handleFocusin(){this.focused=!0}handleFocusout(){this.focused=!1}handlePointerup(t){if(this.shouldReactToEvent(t)){if(this.state!==d.HOLDING)return this.state===d.TOUCH_DELAY?(this.state=d.WAITING_FOR_CLICK,void this.startPressAnimation(this.rippleStartEvent)):void 0;this.state=d.WAITING_FOR_CLICK}}async handlePointerdown(t){if(this.shouldReactToEvent(t)){if(this.rippleStartEvent=t,!this.isTouch(t))return this.state=d.WAITING_FOR_CLICK,void this.startPressAnimation(t);this.checkBoundsAfterContextMenu&&!this.inBounds(t)||(this.checkBoundsAfterContextMenu=!1,this.state=d.TOUCH_DELAY,await new Promise((t=>{setTimeout(t,150)})),this.state===d.TOUCH_DELAY&&(this.state=d.HOLDING,this.startPressAnimation(t)))}}handleClick(){this.disabled||(this.state!==d.WAITING_FOR_CLICK?this.state===d.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation()):this.endPressAnimation())}handlePointercancel(t){this.shouldReactToEvent(t)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}render(){const t={hovered:this.hovered,focused:this.focused,pressed:this.pressed,unbounded:this.unbounded};return n.dy`<div class="surface ${(0,a.$)(t)}"></div>`}update(t){t.has("disabled")&&this.disabled&&(this.hovered=!1,this.focused=!1,this.pressed=!1),super.update(t)}getDimensions(){var t;return(null!==(t=this.parentElement)&&void 0!==t?t:this).getBoundingClientRect()}determineRippleSize(){const{height:t,width:e}=this.getDimensions(),o=Math.max(t,e),r=Math.max(.35*o,75);let i=o,n=Math.floor(.2*o);i=Math.sqrt(e**2+t**2)+10,this.unbounded&&(n-=n%2),this.initialSize=n,this.rippleScale=""+(i+r)/n,this.rippleSize=`${this.initialSize}px`}getNormalizedPointerEventCoords(t){const{scrollX:e,scrollY:o}=window,{left:r,top:i}=this.getDimensions(),n=e+r,a=o+i,{pageX:s,pageY:d}=t;return{x:s-n,y:d-a}}getTranslationCoordinates(t){const{height:e,width:o}=this.getDimensions(),r={x:(o-this.initialSize)/2,y:(e-this.initialSize)/2};let i;return i=t instanceof PointerEvent?this.getNormalizedPointerEventCoords(t):{x:o/2,y:e/2},i={x:i.x-this.initialSize/2,y:i.y-this.initialSize/2},{startPoint:i,endPoint:r}}startPressAnimation(t){var e;if(!this.mdRoot)return;this.pressed=!0,null===(e=this.growAnimation)||void 0===e||e.cancel(),this.determineRippleSize();const{startPoint:o,endPoint:r}=this.getTranslationCoordinates(t),i=`${o.x}px, ${o.y}px`,n=`${r.x}px, ${r.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${i}) scale(1)`,`translate(${n}) scale(${this.rippleScale})`]},{pseudoElement:"::after",duration:450,easing:s,fill:"forwards"})}async endPressAnimation(){var t;this.state=d.INACTIVE;const e=this.growAnimation,o=null!==(t=null==e?void 0:e.currentTime)&&void 0!==t?t:1/0;o>=225?this.pressed=!1:(await new Promise((t=>{setTimeout(t,225-o)})),this.growAnimation===e&&(this.pressed=!1))}shouldReactToEvent(t){if(this.disabled||!t.isPrimary)return!1;if(this.rippleStartEvent&&this.rippleStartEvent.pointerId!==t.pointerId)return!1;if("pointerenter"===t.type||"pointerleave"===t.type)return!this.isTouch(t);const e=1===t.buttons;return this.isTouch(t)||e}inBounds({x:t,y:e}){const{top:o,left:r,bottom:i,right:n}=this.getBoundingClientRect();return t>=r&&t<=n&&e>=o&&e<=i}isTouch({pointerType:t}){return"touch"===t}}(0,r.__decorate)([(0,i.Cb)({type:Boolean,reflect:!0})],l.prototype,"unbounded",void 0),(0,r.__decorate)([(0,i.Cb)({type:Boolean,reflect:!0})],l.prototype,"disabled",void 0),(0,r.__decorate)([(0,i.SB)()],l.prototype,"hovered",void 0),(0,r.__decorate)([(0,i.SB)()],l.prototype,"focused",void 0),(0,r.__decorate)([(0,i.SB)()],l.prototype,"pressed",void 0),(0,r.__decorate)([(0,i.IO)(".surface")],l.prototype,"mdRoot",void 0);const c=n.iv`:host{--_focus-color:var(--md-ripple-focus-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-opacity:var(--md-ripple-focus-opacity, 0.12);--_hover-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity:var(--md-ripple-hover-opacity, 0.08);--_pressed-color:var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity:var(--md-ripple-pressed-opacity, 0.12);display:flex}:host([disabled]){opacity:0}.surface,:host{border-radius:inherit;position:absolute;inset:0;pointer-events:none;overflow:hidden}.surface{outline:0;-webkit-tap-highlight-color:transparent}.surface::after,.surface::before{position:absolute;opacity:0;pointer-events:none;content:""}.surface::before{background-color:var(--_hover-color);transition:opacity 15ms linear,background-color 15ms linear;inset:0}.surface::after{background:radial-gradient(closest-side,var(--_pressed-color) max(100% - 70px,65%),transparent 100%);transition:opacity 375ms linear;transform-origin:center center}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.focused::before{background-color:var(--_focus-color);opacity:var(--_focus-opacity);transition-duration:75ms}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}@media screen and (forced-colors:active){:host{display:none}}`;let u=class extends l{};u.styles=[c],u=(0,r.__decorate)([(0,i.Mo)("md-ripple")],u)},8067:(t,e,o)=>{function r(t,e,o){return t?e():null==o?void 0:o()}o.d(e,{g:()=>r})},32138:(t,e,o)=>{o.d(e,{dy:()=>l,i0:()=>a});var r=o(15304);const i=Symbol.for(""),n=t=>{if((null==t?void 0:t.r)===i)return null==t?void 0:t._$litStatic$},a=(t,...e)=>({_$litStatic$:e.reduce(((e,o,r)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[r+1]),t[0]),r:i}),s=new Map,d=t=>(e,...o)=>{const r=o.length;let i,a;const d=[],l=[];let c,u=0,h=!1;for(;u<r;){for(c=e[u];u<r&&void 0!==(a=o[u],i=n(a));)c+=i+e[++u],h=!0;u!==r&&l.push(a),d.push(c),u++}if(u===r&&d.push(e[r]),h){const t=d.join("$$lit$$");void 0===(e=s.get(t))&&(d.raw=d,s.set(t,e=d)),o=l}return t(e,...o)},l=d(r.dy);d(r.YP)}}]);
//# sourceMappingURL=78725-CLhtuzcFUgQ.js.map