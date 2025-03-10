export const __webpack_ids__=["45333"];export const __webpack_modules__={51784:function(a,e,i){i.d(e,{dJ:()=>m,zB:()=>p});var t=i(44249),n=i(72621),o=i(67840),l=i(88854),s=i(57243),d=i(15093);let r;o.A.addInitializer((async a=>{await a.updateComplete;const e=a;e.dialog.prepend(e.scrim),e.scrim.style.inset=0,e.scrim.style.zIndex=0;const{getOpenAnimation:i,getCloseAnimation:t}=e;e.getOpenAnimation=()=>{const a=i.call(void 0);return a.container=[...a.container??[],...a.dialog??[]],a.dialog=[],a},e.getCloseAnimation=()=>{const a=t.call(void 0);return a.container=[...a.container??[],...a.dialog??[]],a.dialog=[],a}}));(0,t.Z)([(0,d.Mo)("ha-md-dialog")],(function(a,e){class t extends e{constructor(){super(),a(this),this.addEventListener("cancel",this._handleCancel),"function"!=typeof HTMLDialogElement&&(this.addEventListener("open",this._handleOpen),r||(r=i.e("73854").then(i.bind(i,85893)))),void 0===this.animate&&(this.quick=!0),void 0===this.animate&&(this.quick=!0)}}return{F:t,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:"disable-cancel-action",type:Boolean})],key:"disableCancelAction",value:()=>!1},{kind:"field",key:"_polyfillDialogRegistered",value:()=>!1},{kind:"method",key:"_handleOpen",value:async function(a){if(a.preventDefault(),this._polyfillDialogRegistered)return;this._polyfillDialogRegistered=!0,this._loadPolyfillStylesheet("/static/polyfills/dialog-polyfill.css");const e=this.shadowRoot?.querySelector("dialog");(await r).default.registerDialog(e),this.removeEventListener("open",this._handleOpen),this.show()}},{kind:"method",key:"_loadPolyfillStylesheet",value:async function(a){const e=document.createElement("link");return e.rel="stylesheet",e.href=a,new Promise(((i,t)=>{e.onload=()=>i(),e.onerror=()=>t(new Error(`Stylesheet failed to load: ${a}`)),this.shadowRoot?.appendChild(e)}))}},{kind:"method",key:"_handleCancel",value:function(a){if(this.disableCancelAction){a.preventDefault();const e=this.shadowRoot?.querySelector("dialog .container");void 0!==this.animate&&e?.animate([{transform:"rotate(-1deg)","animation-timing-function":"ease-in"},{transform:"rotate(1.5deg)","animation-timing-function":"ease-out"},{transform:"rotate(0deg)","animation-timing-function":"ease-in"}],{duration:200,iterations:2})}}},{kind:"field",static:!0,key:"styles",value(){return[...(0,n.Z)(t,"styles",this),s.iv`:host{--md-dialog-container-color:var(--card-background-color);--md-dialog-headline-color:var(--primary-text-color);--md-dialog-supporting-text-color:var(--primary-text-color);--md-sys-color-scrim:#000000;--md-dialog-headline-weight:400;--md-dialog-headline-size:1.574rem;--md-dialog-supporting-text-size:1rem;--md-dialog-supporting-text-line-height:1.5rem}:host([type=alert]){min-width:320px}@media all and (max-width:450px),all and (max-height:500px){:host(:not([type=alert])){min-width:calc(100vw - env(safe-area-inset-right) - env(safe-area-inset-left));max-width:calc(100vw - env(safe-area-inset-right) - env(safe-area-inset-left));min-height:100%;max-height:100%;--md-dialog-container-shape:0}}::slotted(ha-dialog-header[slot=headline]){display:contents}.scroller{overflow:var(--dialog-content-overflow,auto)}slot[name=content]::slotted(*){padding:var(--dialog-content-padding,24px)}.scrim{z-index:10}`]}}]}}),o.A);const c={...l.I,dialog:[[[{transform:"translateY(50px)"},{transform:"translateY(0)"}],{duration:500,easing:"cubic-bezier(.3,0,0,1)"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}]]},h={...l.G,dialog:[[[{transform:"translateY(0)"},{transform:"translateY(50px)"}],{duration:150,easing:"cubic-bezier(.3,0,0,1)"}]],container:[[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]]},m=()=>window.matchMedia("all and (max-width: 450px), all and (max-height: 500px)").matches?c:l.I,p=()=>window.matchMedia("all and (max-width: 450px), all and (max-height: 500px)").matches?h:l.G},38315:function(a,e,i){i.r(e);var t=i(44249),n=i(57243),o=i(15093),l=i(36522),s=(i(95198),i(23334),i(13928),i(51784),i(19993),i(74633),i(37583),i(28008));(0,t.Z)([(0,o.Mo)("ha-dialog-new-backup")],(function(a,e){return{F:class extends e{constructor(...e){super(...e),a(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_opened",value:()=>!1},{kind:"field",decorators:[(0,o.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,o.IO)("ha-md-dialog")],key:"_dialog",value:void 0},{kind:"method",key:"showDialog",value:function(a){this._opened=!0,this._params=a}},{kind:"method",key:"closeDialog",value:function(){return this._dialog?.close(),!0}},{kind:"method",key:"_dialogClosed",value:function(){this._params.cancel&&this._params.cancel(),this._opened&&(0,l.B)(this,"dialog-closed",{dialog:this.localName}),this._opened=!1,this._params=void 0}},{kind:"method",key:"render",value:function(){return this._opened&&this._params?n.dy` <ha-md-dialog open @closed="${this._dialogClosed}"> <ha-dialog-header slot="headline"> <ha-icon-button slot="navigationIcon" @click="${this.closeDialog}" .label="${this.hass.localize("ui.common.close")}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}"></ha-icon-button> <span slot="title"> ${this.hass.localize("ui.panel.config.backup.dialogs.new.title")} </span> </ha-dialog-header> <div slot="content"> <ha-md-list innerRole="listbox" itemRoles="option" .innerAriaLabel="${this.hass.localize("ui.panel.config.backup.dialogs.new.options")}" rootTabbable dialogInitialFocus> <ha-md-list-item @click="${this._automatic}" type="button" .disabled="${!this._params.config.create_backup.password}"> <ha-svg-icon slot="start" .path="${"M18,11V12.5C21.19,12.5 23.09,16.05 21.33,18.71L20.24,17.62C21.06,15.96 19.85,14 18,14V15.5L15.75,13.25L18,11M18,22V20.5C14.81,20.5 12.91,16.95 14.67,14.29L15.76,15.38C14.94,17.04 16.15,19 18,19V17.5L20.25,19.75L18,22M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H14C13.36,20.45 12.86,19.77 12.5,19H5V8H19V10.59C19.71,10.7 20.39,10.94 21,11.31V5A2,2 0 0,0 19,3Z"}"></ha-svg-icon> <span slot="headline"> ${this.hass.localize("ui.panel.config.backup.dialogs.new.automatic.title")} </span> <span slot="supporting-text"> ${this.hass.localize("ui.panel.config.backup.dialogs.new.automatic.description")} </span> <ha-icon-next slot="end"></ha-icon-next> </ha-md-list-item> <ha-md-list-item @click="${this._manual}" type="button"> <ha-svg-icon slot="start" .path="${"M10,9A1,1 0 0,1 11,8A1,1 0 0,1 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M11,5A4,4 0 0,1 15,9C15,10.5 14.2,11.77 13,12.46V11.24C13.61,10.69 14,9.89 14,9A3,3 0 0,0 11,6A3,3 0 0,0 8,9C8,9.89 8.39,10.69 9,11.24V12.46C7.8,11.77 7,10.5 7,9A4,4 0 0,1 11,5Z"}"></ha-svg-icon> <span slot="headline"> ${this.hass.localize("ui.panel.config.backup.dialogs.new.manual.title")} </span> <span slot="supporting-text"> ${this.hass.localize("ui.panel.config.backup.dialogs.new.manual.description")} </span> <ha-icon-next slot="end"></ha-icon-next> </ha-md-list-item> </ha-md-list> </div> </ha-md-dialog> `:n.Ld}},{kind:"method",key:"_manual",value:async function(){this._params.submit?.("manual"),this.closeDialog()}},{kind:"method",key:"_automatic",value:async function(){this._params.submit?.("automatic"),this.closeDialog()}},{kind:"get",static:!0,key:"styles",value:function(){return[s.Qx,s.yu,n.iv`ha-md-dialog{--dialog-content-padding:0;max-width:500px}@media all and (max-width:450px),all and (max-height:500px){ha-md-dialog{max-width:none}div[slot=content]{margin-top:0}}ha-md-list{background:0 0}ha-icon-next{width:24px}`]}}]}}),n.oi)}};
//# sourceMappingURL=45333.6e3f3604c6d8275b.js.map