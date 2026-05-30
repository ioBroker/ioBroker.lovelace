"use strict";(self.rspackChunkhome_assistant_frontend=self.rspackChunkhome_assistant_frontend||[]).push([[12145],{9503:function(a,t,o){var e=o(40445),r=o(97577),i=o(5124),l=o(67576);let h,s=a=>a;class d extends r.A{get value(){var a;return null!==(a=this._value)&&void 0!==a?a:null}set value(a){this._value=a}static get styles(){return[r.A.styles,(0,i.AH)(h||(h=s`:host{--wa-form-control-toggle-size:var(--ha-checkbox-size, 20px);--wa-form-control-border-color:var(
            --ha-checkbox-border-color,
            var(--ha-color-border-neutral-normal)
          );--wa-form-control-background-color:var(
            --ha-checkbox-background-color,
            var(--wa-form-control-background-color)
          );--checked-icon-color:var(
            --ha-checkbox-checked-icon-color,
            var(--wa-color-brand-on-loud)
          );--wa-form-control-activated-color:var(
            --ha-checkbox-checked-background-color,
            var(--ha-color-fill-primary-loud-resting)
          );-webkit-tap-highlight-color:transparent;--checked-icon-scale:var(--ha-checkbox-checked-icon-scale, 0.9);--wa-form-control-required-content:var(
            --ha-checkbox-required-marker,
            var(--ha-input-required-marker, "*")
          );--wa-form-control-required-content-offset:var(
            --ha-checkbox-required-marker-offset,
            0.1rem
          )}[part~=base]{align-items:center;gap:var(--ha-space-2)}[part~=control]{border-radius:var(--ha-checkbox-border-radius,var(--ha-border-radius-sm));border-width:var(--ha-checkbox-border-width,var(--ha-border-width-md));margin-inline-end:0}[part~=label]{line-height:1}#hint{font-size:var(--ha-font-size-xs);color:var(--ha-color-text-secondary)}label:has(input:not(:disabled)):hover{--wa-form-control-border-color:var(
            --ha-checkbox-border-color-hover,
            var(--ha-checkbox-border-color, var(--ha-color-border-neutral-loud))
          )}label:has(input:not(:disabled)):hover [part~=control]{background-color:var(--ha-checkbox-background-color-hover,var(--ha-color-form-background-hover))}label:has(input:checked:not(:disabled)):hover [part~=control],label:has(input:indeterminate:not(:disabled)):hover [part~=control]{background-color:var(--ha-checkbox-checked-background-color-hover,var(--ha-color-fill-primary-loud-hover));border-color:var(--ha-checkbox-checked-background-color-hover,var(--ha-color-fill-primary-loud-hover))}`))]}}d=(0,e.Cg)([(0,l.EM)("ha-checkbox")],d)},20036:function(a,t,o){o.a(a,async function(a,e){try{o.r(t),o.d(t,{HaFormInteger:function(){return f}});o(62953);var r=o(40445),i=o(5124),l=o(67576),h=o(1087),s=(o(9503),o(3449),o(70759)),d=o(91485),c=a([s,d]);[s,d]=c.then?(await c)():c;let n,u,p,v,b,g,m=a=>a;class f extends i.WF{reportValidity(){const a=this._showSlider();return!(a&&this.schema.required&&isNaN(Number(this.data)))&&(!!a||(null===(t=null===(o=this._input)||void 0===o?void 0:o.reportValidity())||void 0===t||t));var t,o}_showSlider(){return void 0!==this.schema.valueMin&&void 0!==this.schema.valueMax&&this.schema.valueMax-this.schema.valueMin<256}render(){var a,t,o,e;return this._showSlider()?(0,i.qy)(n||(n=m` <div> ${0} <div class="flex"> ${0} <ha-slider labeled .value="${0}" .min="${0}" .max="${0}" .disabled="${0}" @change="${0}"></ha-slider> </div> ${0} </div> `),this.label,this.schema.required?"":(0,i.qy)(u||(u=m` <ha-checkbox @change="${0}" .checked="${0}" .disabled="${0}"></ha-checkbox> `),this._handleCheckboxChange,void 0!==this.data,this.disabled),this._value,this.schema.valueMin,this.schema.valueMax,this.disabled||void 0===this.data&&!this.schema.required,this._valueChanged,this.helper?(0,i.qy)(p||(p=m`<ha-input-helper-text .disabled="${0}">${0}</ha-input-helper-text>`),this.disabled,this.helper):i.s6):(0,i.qy)(v||(v=m` <ha-input type="number" inputMode="numeric" .label="${0}" .hint="${0}" .value="${0}" .disabled="${0}" .required="${0}" .autoValidate="${0}" .validationMessage="${0}" @input="${0}"> ${0} </ha-input> `),this.label,this.helper,null!==(a=null===(t=this.data)||void 0===t?void 0:t.toString())&&void 0!==a?a:"",this.disabled,this.schema.required,this.schema.required,this.schema.required?null===(o=this.localize)||void 0===o?void 0:o.call(this,"ui.common.error_required"):void 0,this._valueChanged,null!==(e=this.schema.description)&&void 0!==e&&e.suffix?(0,i.qy)(b||(b=m`<span slot="end">${0}</span>`),this.schema.description.suffix):i.s6)}updated(a){a.has("schema")&&this.toggleAttribute("own-margin",!("valueMin"in this.schema&&"valueMax"in this.schema||!this.schema.required))}get _value(){var a,t;return void 0!==this.data?this.data:this.schema.required?void 0!==(null===(a=this.schema.description)||void 0===a?void 0:a.suggested_value)&&null!==(null===(t=this.schema.description)||void 0===t?void 0:t.suggested_value)||this.schema.default||this.schema.valueMin||0:this.schema.valueMin||0}_handleCheckboxChange(a){let t;if(a.target.checked)for(const e of[this._lastValue,null===(o=this.schema.description)||void 0===o?void 0:o.suggested_value,this.schema.default,0]){var o;if(void 0!==e){t=e;break}}else this._lastValue=this.data;(0,h.r)(this,"value-changed",{value:t})}_valueChanged(a){const t=a.target,o=t.value;let e;if(""!==o&&(e=parseInt(String(o))),this.data===e){const a=void 0===e?"":String(e);return void(t.value!==a&&(t.value=a))}(0,h.r)(this,"value-changed",{value:e})}constructor(...a){super(...a),this.disabled=!1}}f.shadowRootOptions={...i.WF.shadowRootOptions,delegatesFocus:!0},f.styles=(0,i.AH)(g||(g=m`:host([own-margin]){margin-bottom:5px}.flex{display:flex;align-items:center;gap:var(--ha-space-3)}ha-slider{flex:1}ha-input-helper-text{margin-top:var(--ha-space-1)}`)),(0,r.Cg)([(0,l.MZ)({attribute:!1})],f.prototype,"localize",void 0),(0,r.Cg)([(0,l.MZ)({attribute:!1})],f.prototype,"schema",void 0),(0,r.Cg)([(0,l.MZ)({attribute:!1})],f.prototype,"data",void 0),(0,r.Cg)([(0,l.MZ)()],f.prototype,"label",void 0),(0,r.Cg)([(0,l.MZ)()],f.prototype,"helper",void 0),(0,r.Cg)([(0,l.MZ)({type:Boolean})],f.prototype,"disabled",void 0),(0,r.Cg)([(0,l.P)("ha-input, ha-slider",!0)],f.prototype,"_input",void 0),f=(0,r.Cg)([(0,l.EM)("ha-form-integer")],f),e()}catch(n){e(n)}})},3449:function(a,t,o){o(62953);var e=o(40445),r=o(5124),i=o(67576);let l,h,s=a=>a;class d extends r.WF{render(){return(0,r.qy)(l||(l=s`<slot></slot>`))}constructor(...a){super(...a),this.disabled=!1}}d.styles=(0,r.AH)(h||(h=s`:host{display:block;color:var(--mdc-text-field-label-ink-color,rgba(0,0,0,.6));font-size:var(--ha-font-size-s);padding-left:16px;padding-right:16px;padding-inline-start:16px;padding-inline-end:16px;letter-spacing:var(
        --mdc-typography-caption-letter-spacing,
        .0333333333em
      );line-height:normal}:host([disabled]){color:var(--mdc-text-field-disabled-ink-color,rgba(0,0,0,.6))}`)),(0,e.Cg)([(0,i.MZ)({type:Boolean,reflect:!0})],d.prototype,"disabled",void 0),d=(0,e.Cg)([(0,i.EM)("ha-input-helper-text")],d)},70759:function(a,t,o){o.a(a,async function(a,t){try{o(62953);var e=o(40445),r=o(60346),i=o(5124),l=o(67576),h=o(63091),s=a([r]);r=(s.then?(await s)():s)[0];let d,c=a=>a;class n extends r.A{connectedCallback(){super.connectedCallback(),this.dir=h.G.document.dir}static get styles(){return[r.A.styles,(0,i.AH)(d||(d=c`:host{--track-size:var(--ha-slider-track-size, 4px);--marker-height:calc(var(--ha-slider-track-size, 4px) / 2);--marker-width:calc(var(--ha-slider-track-size, 4px) / 2);--wa-color-surface-default:var(--card-background-color);--wa-color-neutral-fill-normal:var(
            --ha-slider-track-color,
            var(--disabled-color)
          );--wa-tooltip-background-color:var(
            --ha-tooltip-background-color,
            var(--secondary-background-color)
          );--wa-tooltip-content-color:var(
            --ha-tooltip-text-color,
            var(--primary-text-color)
          );--wa-tooltip-font-family:var(
            --ha-tooltip-font-family,
            var(--ha-font-family-body)
          );--wa-tooltip-font-size:var(
            --ha-tooltip-font-size,
            var(--ha-font-size-s)
          );--wa-tooltip-font-weight:var(
            --ha-tooltip-font-weight,
            var(--ha-font-weight-normal)
          );--wa-tooltip-line-height:var(
            --ha-tooltip-line-height,
            var(--ha-line-height-condensed)
          );--wa-tooltip-padding:var(--ha-tooltip-padding, var(--ha-space-2));--wa-tooltip-border-radius:var(
            --ha-tooltip-border-radius,
            var(--ha-border-radius-sm)
          );--wa-tooltip-arrow-size:var(--ha-tooltip-arrow-size, 0px);--wa-tooltip-border-width:0px;--wa-z-index-tooltip:1000;min-width:100px;min-inline-size:100px;width:200px}#slider{padding-block:14px;margin-block:-14px}#thumb{border:none;background-color:var(--ha-slider-thumb-color,var(--primary-color));overflow:hidden}#thumb:after{content:"";border-radius:50%;position:absolute;width:calc(var(--thumb-width) * 2 + 8px);height:calc(var(--thumb-height) * 2 + 8px);left:calc(-50% - 4px);top:calc(-50% - 4px);cursor:pointer}#slider:focus-visible:not(.disabled) #thumb,#slider:focus-visible:not(.disabled) #thumb-max,#slider:focus-visible:not(.disabled) #thumb-min{outline:var(--wa-focus-ring)}#track:after{content:"";position:absolute;top:calc(-50% - 4px);left:0;width:100%;height:calc(var(--track-size) * 2 + 8px);cursor:pointer}#indicator{background-color:var(--ha-slider-indicator-color,var(--primary-color))}:host([size=medium]){--thumb-width:20px;--thumb-height:20px}:host([size=small]){--thumb-width:16px;--thumb-height:16px}`))]}constructor(...a){super(...a),this.size="small",this.withTooltip=!0}}(0,e.Cg)([(0,l.MZ)({reflect:!0})],n.prototype,"size",void 0),(0,e.Cg)([(0,l.MZ)({type:Boolean,attribute:"with-tooltip"})],n.prototype,"withTooltip",void 0),n=(0,e.Cg)([(0,l.EM)("ha-slider")],n),t()}catch(d){t(d)}})},34127:function(a,t,o){o.a(a,async function(a,t){try{o(62953);var e=o(40445),r=o(52630),i=o(5124),l=o(67576),h=a([r]);r=(h.then?(await h)():h)[0];let s,d=a=>a;class c extends r.A{static get styles(){return[r.A.styles,(0,i.AH)(s||(s=d`:host{--wa-tooltip-background-color:var(
            --ha-tooltip-background-color,
            var(--ha-color-surface-default)
          );--wa-tooltip-content-color:var(
            --ha-tooltip-text-color,
            var(--primary-text-color)
          );--wa-tooltip-font-family:var(
            --ha-tooltip-font-family,
            var(--ha-font-family-body)
          );--wa-tooltip-font-size:var(
            --ha-tooltip-font-size,
            var(--ha-font-size-m)
          );--wa-tooltip-font-weight:var(
            --ha-tooltip-font-weight,
            var(--ha-font-weight-medium)
          );--wa-tooltip-line-height:var(
            --ha-tooltip-line-height,
            var(--ha-line-height-condensed)
          );--wa-tooltip-padding:var(--ha-tooltip-padding, var(--ha-space-2));--wa-tooltip-border-radius:var(
            --ha-tooltip-border-radius,
            var(--ha-border-radius-md)
          );--wa-tooltip-arrow-size:var(--ha-tooltip-arrow-size, 0px);--wa-tooltip-border-width:0px;--wa-z-index-tooltip:1000}.tooltip::part(popup){animation-duration:var(--ha-tooltip-animation-duration, 0)}.body{box-shadow:var(--ha-tooltip-box-shadow,var(--ha-box-shadow-m))}`))]}constructor(...a){super(...a),this.showDelay=350,this.hideDelay=150}}(0,e.Cg)([(0,l.MZ)({attribute:"show-delay",type:Number})],c.prototype,"showDelay",void 0),(0,e.Cg)([(0,l.MZ)({attribute:"hide-delay",type:Number})],c.prototype,"hideDelay",void 0),c=(0,e.Cg)([(0,l.EM)("ha-tooltip")],c),t()}catch(s){t(s)}})},69235:function(a,t,o){o.a(a,async function(a,t){try{o(3362),o(62953);"function"!=typeof window.ResizeObserver&&(window.ResizeObserver=(await o.e(71055).then(o.bind(o,52370))).default),t()}catch(e){t(e)}},1)}}]);