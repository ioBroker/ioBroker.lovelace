"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["65005"],{67180:function(t,e,i){i.d(e,{Ef:()=>o,Pb:()=>v,TA:()=>a,gB:()=>u,h0:()=>s,zJ:()=>p});i(71695),i(9359),i(70104),i(47021);var r=i(34593);const o=2700,a=6500,s=t=>{const e=t/100;return[Math.round(l(e)),Math.round(n(e)),Math.round(d(e))]},l=t=>{if(t<=66)return 255;const e=329.698727446*(t-60)**-.1332047592;return(0,r.u)(e,0,255)},n=t=>{let e;return e=t<=66?99.4708025861*Math.log(t)-161.1195681661:288.1221695283*(t-60)**-.0755148492,(0,r.u)(e,0,255)},d=t=>{if(t>=66)return 255;if(t<=19)return 0;const e=138.5177312231*Math.log(t-10)-305.0447927307;return(0,r.u)(e,0,255)},c=(t,e)=>{const i=Math.max(...t),r=Math.max(...e);let o;return o=0===r?0:i/r,e.map((t=>Math.round(t*o)))},u=t=>0===t?1e6:Math.floor(1e6/t),h=t=>0===t?1e6:Math.floor(1e6/t),v=(t,e,i)=>{const[r,l,n,d,v]=t,p=h(null!=e?e:o),b=h(null!=i?i:a),m=p-b;let f;try{f=v/(d+v)}catch(M){f=.5}const k=b+f*m,g=k?u(k):0,[y,_,w]=s(g),x=Math.max(d,v)/255;return c([r,l,n,d,v],[r+y*x,l+_*x,n+w*x])},p=t=>{const[e,i,r,o]=t;return c([e,i,r,o],[e+o,i+o,r+o])}},34593:function(t,e,i){i.d(e,{Y:()=>o,u:()=>r});const r=(t,e,i)=>Math.min(Math.max(t,e),i),o=(t,e,i)=>{let r;return r=null!=e?Math.max(t,e):t,r=null!=i?Math.min(r,i):r,r}},45061:function(t,e,i){i.d(e,{K:()=>r});const r=t=>{switch(t.language){case"cs":case"de":case"fi":case"fr":case"sk":case"sv":return" ";default:return""}}},87974:function(t,e,i){i.d(e,{L:()=>o});var r=i(45061);const o=(t,e)=>"°"===t?"":e&&"%"===t?(0,r.K)(e):" "},54250:function(t,e,i){i.a(t,(async function(t,e){try{var r=i(61701),o=i(72621),a=(i(71695),i(11740),i(92519),i(42179),i(89256),i(24931),i(88463),i(57449),i(19814),i(47021),i(54380)),s=i(57243),l=i(50778),n=i(35359),d=i(69634),c=i(36522),u=i(50602),h=i(87974),v=t([u]);u=(v.then?(await v)():v)[0];let p,b,m,f,k,g=t=>t;const y=new Set(["ArrowRight","ArrowUp","ArrowLeft","ArrowDown","PageUp","PageDown","Home","End"]);(0,r.Z)([(0,l.Mo)("ha-control-slider")],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"locale",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,reflect:!0})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)()],key:"mode",value(){return"start"}},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,reflect:!0})],key:"vertical",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,attribute:"show-handle"})],key:"showHandle",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,attribute:"inverted"})],key:"inverted",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)({attribute:"tooltip-position"})],key:"tooltipPosition",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"unit",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:"tooltip-mode"})],key:"tooltipMode",value(){return"interaction"}},{kind:"field",decorators:[(0,l.Cb)({attribute:"touch-action"})],key:"touchAction",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Number})],key:"value",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Number})],key:"step",value(){return 1}},{kind:"field",decorators:[(0,l.Cb)({type:Number})],key:"min",value(){return 0}},{kind:"field",decorators:[(0,l.Cb)({type:Number})],key:"max",value(){return 100}},{kind:"field",decorators:[(0,l.SB)()],key:"pressed",value(){return!1}},{kind:"field",decorators:[(0,l.SB)()],key:"tooltipVisible",value(){return!1}},{kind:"field",key:"_mc",value:void 0},{kind:"method",key:"valueToPercentage",value:function(t){const e=(this.boundedValue(t)-this.min)/(this.max-this.min);return this.inverted?1-e:e}},{kind:"method",key:"percentageToValue",value:function(t){return(this.max-this.min)*(this.inverted?1-t:t)+this.min}},{kind:"method",key:"steppedValue",value:function(t){return Math.round(t/this.step)*this.step}},{kind:"method",key:"boundedValue",value:function(t){return Math.min(Math.max(t,this.min),this.max)}},{kind:"method",key:"firstUpdated",value:function(t){(0,o.Z)(i,"firstUpdated",this,3)([t]),this.setupListeners(),this.setAttribute("role","slider"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}},{kind:"method",key:"updated",value:function(t){if((0,o.Z)(i,"updated",this,3)([t]),t.has("value")){var e;const t=this.steppedValue(null!==(e=this.value)&&void 0!==e?e:0);this.setAttribute("aria-valuenow",t.toString()),this.setAttribute("aria-valuetext",this._formatValue(t))}if(t.has("min")&&this.setAttribute("aria-valuemin",this.min.toString()),t.has("max")&&this.setAttribute("aria-valuemax",this.max.toString()),t.has("vertical")){const t=this.vertical?"vertical":"horizontal";this.setAttribute("aria-orientation",t)}}},{kind:"method",key:"connectedCallback",value:function(){(0,o.Z)(i,"connectedCallback",this,3)([]),this.setupListeners()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,o.Z)(i,"disconnectedCallback",this,3)([]),this.destroyListeners()}},{kind:"field",decorators:[(0,l.IO)("#slider")],key:"slider",value:void 0},{kind:"method",key:"setupListeners",value:function(){if(this.slider&&!this._mc){var t;let e;this._mc=new a.dK(this.slider,{touchAction:null!==(t=this.touchAction)&&void 0!==t?t:this.vertical?"pan-x":"pan-y"}),this._mc.add(new a.Ce({threshold:10,direction:a.oM,enable:!0})),this._mc.add(new a.Uw({event:"singletap"})),this._mc.add(new a.i),this._mc.on("panstart",(()=>{this.disabled||(this.pressed=!0,this._showTooltip(),e=this.value)})),this._mc.on("pancancel",(()=>{this.disabled||(this.pressed=!1,this._hideTooltip(),this.value=e)})),this._mc.on("panmove",(t=>{if(this.disabled)return;const e=this._getPercentageFromEvent(t);this.value=this.percentageToValue(e);const i=this.steppedValue(this.value);(0,c.B)(this,"slider-moved",{value:i})})),this._mc.on("panend",(t=>{if(this.disabled)return;this.pressed=!1,this._hideTooltip();const e=this._getPercentageFromEvent(t);this.value=this.steppedValue(this.percentageToValue(e)),(0,c.B)(this,"slider-moved",{value:void 0}),(0,c.B)(this,"value-changed",{value:this.value})})),this._mc.on("singletap pressup",(t=>{if(this.disabled)return;const e=this._getPercentageFromEvent(t);this.value=this.steppedValue(this.percentageToValue(e)),(0,c.B)(this,"value-changed",{value:this.value})})),this.addEventListener("keydown",this._handleKeyDown),this.addEventListener("keyup",this._handleKeyUp)}}},{kind:"method",key:"destroyListeners",value:function(){this._mc&&(this._mc.destroy(),this._mc=void 0),this.removeEventListener("keydown",this._handleKeyDown),this.removeEventListener("keyup",this._handleKeyUp)}},{kind:"get",key:"_tenPercentStep",value:function(){return Math.max(this.step,(this.max-this.min)/10)}},{kind:"method",key:"_showTooltip",value:function(){null!=this._tooltipTimeout&&window.clearTimeout(this._tooltipTimeout),this.tooltipVisible=!0}},{kind:"method",key:"_hideTooltip",value:function(t){t?this._tooltipTimeout=window.setTimeout((()=>{this.tooltipVisible=!1}),t):this.tooltipVisible=!1}},{kind:"method",key:"_handleKeyDown",value:function(t){var e,i,r,o;if(y.has(t.code)){switch(t.preventDefault(),t.code){case"ArrowRight":case"ArrowUp":this.value=this.boundedValue((null!==(e=this.value)&&void 0!==e?e:0)+this.step);break;case"ArrowLeft":case"ArrowDown":this.value=this.boundedValue((null!==(i=this.value)&&void 0!==i?i:0)-this.step);break;case"PageUp":this.value=this.steppedValue(this.boundedValue((null!==(r=this.value)&&void 0!==r?r:0)+this._tenPercentStep));break;case"PageDown":this.value=this.steppedValue(this.boundedValue((null!==(o=this.value)&&void 0!==o?o:0)-this._tenPercentStep));break;case"Home":this.value=this.min;break;case"End":this.value=this.max}this._showTooltip(),(0,c.B)(this,"slider-moved",{value:this.value})}}},{kind:"field",key:"_tooltipTimeout",value:void 0},{kind:"method",key:"_handleKeyUp",value:function(t){y.has(t.code)&&(t.preventDefault(),this._hideTooltip(500),(0,c.B)(this,"value-changed",{value:this.value}))}},{kind:"field",key:"_getPercentageFromEvent",value(){return t=>{if(this.vertical){const e=t.center.y,i=t.target.getBoundingClientRect().top,r=t.target.clientHeight;return Math.max(Math.min(1,1-(e-i)/r),0)}const e=t.center.x,i=t.target.getBoundingClientRect().left,r=t.target.clientWidth;return Math.max(Math.min(1,(e-i)/r),0)}}},{kind:"method",key:"_formatValue",value:function(t){return`${(0,u.uf)(t,this.locale)}${this.unit?`${(0,h.L)(this.unit,this.locale)}${this.unit}`:""}`}},{kind:"method",key:"_renderTooltip",value:function(){var t,e,i;if("never"===this.tooltipMode)return s.Ld;const r=null!==(t=this.tooltipPosition)&&void 0!==t?t:this.vertical?"left":"top",o="always"===this.tooltipMode||this.tooltipVisible&&"interaction"===this.tooltipMode,a=this.steppedValue(null!==(e=this.value)&&void 0!==e?e:0);return(0,s.dy)(p||(p=g` <span aria-hidden="true" class="tooltip ${0}"> ${0} </span> `),(0,n.$)({visible:o,[r]:!0,[null!==(i=this.mode)&&void 0!==i?i:"start"]:!0,"show-handle":this.showHandle}),this._formatValue(a))}},{kind:"method",key:"render",value:function(){var t,e;return(0,s.dy)(b||(b=g` <div class="container${0}" style="${0}"> <div id="slider" class="slider"> <div class="slider-track-background"></div> <slot name="background"></slot> ${0} </div> ${0} </div> `),(0,n.$)({pressed:this.pressed}),(0,d.V)({"--value":`${this.valueToPercentage(null!==(t=this.value)&&void 0!==t?t:0)}`}),"cursor"===this.mode?null!=this.value?(0,s.dy)(m||(m=g` <div class="${0}"></div> `),(0,n.$)({"slider-track-cursor":!0})):null:(0,s.dy)(f||(f=g` <div class="${0}"></div> `),(0,n.$)({"slider-track-bar":!0,[null!==(e=this.mode)&&void 0!==e?e:"start"]:!0,"show-handle":this.showHandle})),this._renderTooltip())}},{kind:"field",static:!0,key:"styles",value(){return(0,s.iv)(k||(k=g`:host{display:block;--control-slider-color:var(--primary-color);--control-slider-background:var(--disabled-color);--control-slider-background-opacity:0.2;--control-slider-thickness:40px;--control-slider-border-radius:10px;--control-slider-tooltip-font-size:14px;height:var(--control-slider-thickness);width:100%;border-radius:var(--control-slider-border-radius);outline:0;transition:box-shadow 180ms ease-in-out}:host(:focus-visible){box-shadow:0 0 0 2px var(--control-slider-color)}:host([vertical]){width:var(--control-slider-thickness);height:100%}.container{position:relative;height:100%;width:100%;--handle-size:4px;--handle-margin:calc(var(--control-slider-thickness) / 8)}.tooltip{pointer-events:none;user-select:none;position:absolute;background-color:var(--clear-background-color);color:var(--primary-text-color);font-size:var(--control-slider-tooltip-font-size);border-radius:.8em;padding:.2em .4em;opacity:0;white-space:nowrap;box-shadow:0 2px 5px rgba(0,0,0,.2);transition:opacity 180ms ease-in-out,left 180ms ease-in-out,bottom 180ms ease-in-out;--handle-spacing:calc(2 * var(--handle-margin) + var(--handle-size));--slider-tooltip-margin:-4px;--slider-tooltip-range:100%;--slider-tooltip-offset:0px;--slider-tooltip-position:calc(
        min(
          max(
            var(--value) * var(--slider-tooltip-range) +
              var(--slider-tooltip-offset),
            0%
          ),
          100%
        )
      )}.tooltip.start{--slider-tooltip-offset:calc(-0.5 * (var(--handle-spacing)))}.tooltip.end{--slider-tooltip-offset:calc(0.5 * (var(--handle-spacing)))}.tooltip.cursor{--slider-tooltip-range:calc(100% - var(--handle-spacing));--slider-tooltip-offset:calc(0.5 * (var(--handle-spacing)))}.tooltip.show-handle{--slider-tooltip-range:calc(100% - var(--handle-spacing));--slider-tooltip-offset:calc(0.5 * (var(--handle-spacing)))}.tooltip.visible{opacity:1}.tooltip.top{transform:translate3d(-50%,-100%,0);top:var(--slider-tooltip-margin);left:50%}.tooltip.bottom{transform:translate3d(-50%,100%,0);bottom:var(--slider-tooltip-margin);left:50%}.tooltip.left{transform:translate3d(-100%,50%,0);bottom:50%;left:var(--slider-tooltip-margin)}.tooltip.right{transform:translate3d(100%,50%,0);bottom:50%;right:var(--slider-tooltip-margin)}:host(:not([vertical])) .tooltip.bottom,:host(:not([vertical])) .tooltip.top{left:var(--slider-tooltip-position)}:host([vertical]) .tooltip.left,:host([vertical]) .tooltip.right{bottom:var(--slider-tooltip-position)}.slider{position:relative;height:100%;width:100%;border-radius:var(--control-slider-border-radius);transform:translateZ(0);overflow:hidden;cursor:pointer}.slider *{pointer-events:none}.slider .slider-track-background{position:absolute;top:0;left:0;height:100%;width:100%;background:var(--control-slider-background);opacity:var(--control-slider-background-opacity)}::slotted([slot=background]){position:absolute;top:0;left:0;height:100%;width:100%}.slider .slider-track-bar{--border-radius:var(--control-slider-border-radius);--slider-size:100%;position:absolute;height:100%;width:100%;background-color:var(--control-slider-color);transition:transform 180ms ease-in-out,background-color 180ms ease-in-out}.slider .slider-track-bar.show-handle{--slider-size:calc(100% - 2 * var(--handle-margin) - var(--handle-size))}.slider .slider-track-bar::after{display:block;content:"";position:absolute;margin:auto;border-radius:var(--handle-size);background-color:#fff}.slider .slider-track-bar{top:0;left:0;transform:translate3d(calc((var(--value,0) - 1) * var(--slider-size)),0,0);border-radius:0 8px 8px 0}.slider .slider-track-bar:after{top:0;bottom:0;right:var(--handle-margin);height:50%;width:var(--handle-size)}.slider .slider-track-bar.end{right:0;left:initial;transform:translate3d(calc(var(--value,0) * var(--slider-size)),0,0);border-radius:8px 0 0 8px}.slider .slider-track-bar.end::after{right:initial;left:var(--handle-margin)}:host([vertical]) .slider .slider-track-bar{bottom:0;left:0;transform:translate3d(0,calc((1 - var(--value,0)) * var(--slider-size)),0);border-radius:8px 8px 0 0}:host([vertical]) .slider .slider-track-bar:after{top:var(--handle-margin);right:0;left:0;bottom:initial;width:50%;height:var(--handle-size)}:host([vertical]) .slider .slider-track-bar.end{top:0;bottom:initial;transform:translate3d(0,calc((0 - var(--value,0)) * var(--slider-size)),0);border-radius:0 0 8px 8px}:host([vertical]) .slider .slider-track-bar.end::after{top:initial;bottom:var(--handle-margin)}.slider .slider-track-cursor:after{display:block;content:"";background-color:var(--secondary-text-color);position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;border-radius:var(--handle-size)}.slider .slider-track-cursor{--cursor-size:calc(var(--control-slider-thickness) / 4);position:absolute;background-color:#fff;border-radius:var(--handle-size);transition:left 180ms ease-in-out,bottom 180ms ease-in-out;top:0;bottom:0;left:calc(var(--value,0) * (100% - var(--cursor-size)));width:var(--cursor-size);box-shadow:0 2px 5px rgba(0,0,0,.2)}.slider .slider-track-cursor:after{height:50%;width:var(--handle-size)}:host([vertical]) .slider .slider-track-cursor{top:initial;right:0;left:0;bottom:calc(var(--value,0) * (100% - var(--cursor-size)));height:var(--cursor-size);width:100%}:host([vertical]) .slider .slider-track-cursor:after{height:var(--handle-size);width:50%}.pressed .tooltip{transition:opacity 180ms ease-in-out}.pressed .slider-track-bar,.pressed .slider-track-cursor{transition:none}:host(:disabled) .slider{cursor:not-allowed}`))}}]}}),s.oi);e()}catch(p){e(p)}}))},90243:function(t,e,i){i.d(e,{Fe:()=>n,QM:()=>c,SQ:()=>o,Yk:()=>d,ZE:()=>a,cE:()=>h,e4:()=>p,kb:()=>u});i(19083),i(71695),i(92745),i(9359),i(52924),i(61006),i(47021);var r=i(67180);let o=66977!=i.j?function(t){return t[t.EFFECT=4]="EFFECT",t[t.FLASH=8]="FLASH",t[t.TRANSITION=32]="TRANSITION",t}({}):null,a=function(t){return t.UNKNOWN="unknown",t.ONOFF="onoff",t.BRIGHTNESS="brightness",t.COLOR_TEMP="color_temp",t.HS="hs",t.XY="xy",t.RGB="rgb",t.RGBW="rgbw",t.RGBWW="rgbww",t.WHITE="white",t}({});const s=[a.HS,a.XY,a.RGB,a.RGBW,a.RGBWW],l=[...s,a.COLOR_TEMP,a.BRIGHTNESS,a.WHITE],n=(t,e)=>{var i;return(null===(i=t.attributes.supported_color_modes)||void 0===i?void 0:i.includes(e))||!1},d=t=>{var e;return(null===(e=t.attributes.supported_color_modes)||void 0===e?void 0:e.some((t=>s.includes(t))))||!1},c=t=>{var e;return(null===(e=t.attributes.supported_color_modes)||void 0===e?void 0:e.some((t=>l.includes(t))))||!1},u=t=>d(t)||n(t,a.COLOR_TEMP),h=t=>t.attributes.color_mode===a.RGBWW?t.attributes.rgbww_color:t.attributes.color_mode===a.RGBW?t.attributes.rgbw_color:t.attributes.rgb_color,v=66977!=i.j?[{rgb_color:[127,172,255]},{rgb_color:[215,150,255]},{rgb_color:[255,158,243]},{rgb_color:[255,110,84]}]:null,p=t=>{const e=[],i=n(t,a.COLOR_TEMP),o=d(t);if(i){const i=t.attributes.min_color_temp_kelvin,r=(t.attributes.max_color_temp_kelvin-i)/3;for(let t=0;t<4;t++)e.push({color_temp_kelvin:Math.round(i+r*t)})}else if(o){const t=2e3,i=(6500-t)/3;for(let o=0;o<4;o++)e.push({rgb_color:(0,r.h0)(Math.round(t+i*o))})}return o&&e.push(...v),e}}}]);
//# sourceMappingURL=65005.600ce1e6e0acf572.js.map