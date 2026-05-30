"use strict";(self.rspackChunkhome_assistant_frontend=self.rspackChunkhome_assistant_frontend||[]).push([[16113],{20676:function(t,o,a){a.a(t,async function(t,i){try{a.r(o),a.d(o,{HaFormFloat:function(){return v}});a(74423),a(27495),a(25440),a(62953);var e=a(40445),r=a(5124),s=a(67576),n=a(1087),l=a(91485),d=t([l]);l=(d.then?(await d)():d)[0];let h,p,u,c=t=>t;class v extends r.WF{reportValidity(){var t,o;return null===(t=null===(o=this._input)||void 0===o?void 0:o.reportValidity())||void 0===t||t}render(){var t,o,a;return(0,r.qy)(h||(h=c` <ha-input type="number" inputMode="decimal" step="any" .label="${0}" .hint="${0}" .value="${0}" .disabled="${0}" .required="${0}" .autoValidate="${0}" .validationMessage="${0}" @input="${0}"> ${0} </ha-input> `),this.label,this.helper,void 0!==this.data?this.data:"",this.disabled,this.schema.required,this.schema.required,this.schema.required?null===(t=this.localize)||void 0===t?void 0:t.call(this,"ui.common.error_required"):void 0,this._handleInput,null!==(o=this.schema.description)&&void 0!==o&&o.suffix?(0,r.qy)(p||(p=c`<span slot="end">${0}</span>`),null===(a=this.schema.description)||void 0===a?void 0:a.suffix):r.s6)}updated(t){t.has("schema")&&this.toggleAttribute("own-margin",!!this.schema.required)}_handleInput(t){var o;const a=(null!==(o=t.target.value)&&void 0!==o?o:"").replace(",",".");let i;a.endsWith(".")||a.includes(".")&&a.endsWith("0")||"-"!==a&&"-0"!==a&&(""!==a&&(i=parseFloat(a),isNaN(i)&&(i=void 0)),this.data!==i&&(0,n.r)(this,"value-changed",{value:i}))}constructor(...t){super(...t),this.disabled=!1}}v.shadowRootOptions={...r.WF.shadowRootOptions,delegatesFocus:!0},v.styles=(0,r.AH)(u||(u=c`:host([own-margin]){margin-bottom:5px}`)),(0,e.Cg)([(0,s.MZ)({attribute:!1})],v.prototype,"localize",void 0),(0,e.Cg)([(0,s.MZ)({attribute:!1})],v.prototype,"schema",void 0),(0,e.Cg)([(0,s.MZ)({attribute:!1})],v.prototype,"data",void 0),(0,e.Cg)([(0,s.MZ)()],v.prototype,"label",void 0),(0,e.Cg)([(0,s.MZ)()],v.prototype,"helper",void 0),(0,e.Cg)([(0,s.MZ)({type:Boolean})],v.prototype,"disabled",void 0),(0,e.Cg)([(0,s.P)("ha-input",!0)],v.prototype,"_input",void 0),v=(0,e.Cg)([(0,s.EM)("ha-form-float")],v),i()}catch(h){i(h)}})},34127:function(t,o,a){a.a(t,async function(t,o){try{a(62953);var i=a(40445),e=a(52630),r=a(5124),s=a(67576),n=t([e]);e=(n.then?(await n)():n)[0];let l,d=t=>t;class h extends e.A{static get styles(){return[e.A.styles,(0,r.AH)(l||(l=d`:host{--wa-tooltip-background-color:var(
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
          );--wa-tooltip-arrow-size:var(--ha-tooltip-arrow-size, 0px);--wa-tooltip-border-width:0px;--wa-z-index-tooltip:1000}.tooltip::part(popup){animation-duration:var(--ha-tooltip-animation-duration, 0)}.body{box-shadow:var(--ha-tooltip-box-shadow,var(--ha-box-shadow-m))}`))]}constructor(...t){super(...t),this.showDelay=350,this.hideDelay=150}}(0,i.Cg)([(0,s.MZ)({attribute:"show-delay",type:Number})],h.prototype,"showDelay",void 0),(0,i.Cg)([(0,s.MZ)({attribute:"hide-delay",type:Number})],h.prototype,"hideDelay",void 0),h=(0,i.Cg)([(0,s.EM)("ha-tooltip")],h),o()}catch(l){o(l)}})},69235:function(t,o,a){a.a(t,async function(t,o){try{a(3362),a(62953);"function"!=typeof window.ResizeObserver&&(window.ResizeObserver=(await a.e(71055).then(a.bind(a,52370))).default),o()}catch(i){o(i)}},1)}}]);