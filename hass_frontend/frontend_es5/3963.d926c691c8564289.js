"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["3963"],{92636:function(e,t,i){i.d(t,{z:()=>a});i(19083),i(61006);const a=e=>(t,i)=>e.includes(t,i)},86431:function(e,t,i){i.d(t,{jL:()=>n,wZ:()=>r});i(71695),i(81804),i(47021);var a=i(47194);const n=e=>{var t;return null===(t=e.name_by_user||e.name)||void 0===t?void 0:t.trim()},r=(e,t,i)=>n(e)||i&&s(t,i)||t.localize("ui.panel.config.devices.unnamed_device",{type:t.localize(`ui.panel.config.devices.type.${e.entry_type||"device"}`)}),s=(e,t)=>{for(const i of t||[]){const t="string"==typeof i?i:i.entity_id,n=e.states[t];if(n)return(0,a.C)(n)}}},59847:function(e,t,i){i.d(t,{N:()=>n});var a=i(73850);const n=e=>(0,a.M)(e.entity_id)},75278:function(e,t,i){i.d(t,{e:()=>a});const a=(e,t)=>n(e.attributes,t),n=(e,t)=>!!(e.supported_features&t)},50602:function(e,t,i){i.a(e,(async function(e,a){try{i.d(t,{SL:()=>c,l4:()=>f,sJ:()=>d,uf:()=>u});var n=i(16485),r=(i(19083),i(19423),i(11740),i(61006),i(20382)),s=i(34618),o=e([n]);n=(o.then?(await o)():o)[0];const c=e=>d(e.attributes),d=(e,t)=>!!e.unit_of_measurement||!!e.state_class||(t||[]).includes(e.device_class||""),l=e=>{switch(e.number_format){case r.y4.comma_decimal:return["en-US","en"];case r.y4.decimal_comma:return["de","es","it"];case r.y4.space_comma:return["fr","sv","cs"];case r.y4.system:return;default:return e.language}},u=(e,t,i)=>{const a=t?l(t):void 0;return Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},(null==t?void 0:t.number_format)===r.y4.none||Number.isNaN(Number(e))?Number.isNaN(Number(e))||""===e||(null==t?void 0:t.number_format)!==r.y4.none?"string"==typeof e?e:`${(0,s.N)(e,null==i?void 0:i.maximumFractionDigits).toString()}${"currency"===(null==i?void 0:i.style)?` ${i.currency}`:""}`:new Intl.NumberFormat("en-US",p(e,Object.assign(Object.assign({},i),{},{useGrouping:!1}))).format(Number(e)):new Intl.NumberFormat(a,p(e,i)).format(Number(e))},f=(e,t)=>{var i;const a=null==t?void 0:t.display_precision;return null!=a?{maximumFractionDigits:a,minimumFractionDigits:a}:Number.isInteger(Number(null==e||null===(i=e.attributes)||void 0===i?void 0:i.step))&&Number.isInteger(Number(null==e?void 0:e.state))?{maximumFractionDigits:0}:void 0},p=(e,t)=>{const i=Object.assign({maximumFractionDigits:2},t);if("string"!=typeof e)return i;if(!t||void 0===t.minimumFractionDigits&&void 0===t.maximumFractionDigits){const t=e.indexOf(".")>-1?e.split(".")[1].length:0;i.minimumFractionDigits=t,i.maximumFractionDigits=t}return i};a()}catch(c){a(c)}}))},34618:function(e,t,i){i.d(t,{N:()=>a});const a=(e,t=2)=>Math.round(e*10**t)/10**t},99426:function(e,t,i){i.r(t);var a=i(61701),n=(i(71695),i(47021),i(57243)),r=i(50778),s=i(35359),o=i(36522);i(23334),i(37583);let c,d,l,u,f=e=>e;const p={info:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",warning:"M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16",error:"M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",success:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"};(0,a.Z)([(0,r.Mo)("ha-alert")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)()],key:"title",value(){return""}},{kind:"field",decorators:[(0,r.Cb)({attribute:"alert-type"})],key:"alertType",value(){return"info"}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"dismissable",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"narrow",value(){return!1}},{kind:"method",key:"render",value:function(){return(0,n.dy)(c||(c=f` <div class="issue-type ${0}" role="alert"> <div class="icon ${0}"> <slot name="icon"> <ha-svg-icon .path="${0}"></ha-svg-icon> </slot> </div> <div class="${0}"> <div class="main-content"> ${0} <slot></slot> </div> <div class="action"> <slot name="action"> ${0} </slot> </div> </div> </div> `),(0,s.$)({[this.alertType]:!0}),this.title?"":"no-title",p[this.alertType],(0,s.$)({content:!0,narrow:this.narrow}),this.title?(0,n.dy)(d||(d=f`<div class="title">${0}</div>`),this.title):n.Ld,this.dismissable?(0,n.dy)(l||(l=f`<ha-icon-button @click="${0}" label="Dismiss alert" .path="${0}"></ha-icon-button>`),this._dismissClicked,"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"):n.Ld)}},{kind:"method",key:"_dismissClicked",value:function(){(0,o.B)(this,"alert-dismissed-clicked")}},{kind:"field",static:!0,key:"styles",value(){return(0,n.iv)(u||(u=f`.issue-type{position:relative;padding:8px;display:flex}.issue-type::after{position:absolute;top:0;right:0;bottom:0;left:0;opacity:.12;pointer-events:none;content:"";border-radius:4px}.icon{z-index:1}.icon.no-title{align-self:center}.content{display:flex;justify-content:space-between;align-items:center;width:100%;text-align:var(--float-start)}.content.narrow{flex-direction:column;align-items:flex-end}.action{z-index:1;width:min-content;--mdc-theme-primary:var(--primary-text-color)}.main-content{overflow-wrap:anywhere;word-break:break-word;margin-left:8px;margin-right:0;margin-inline-start:8px;margin-inline-end:0}.title{margin-top:2px;font-weight:700}.action ha-icon-button,.action mwc-button{--mdc-theme-primary:var(--primary-text-color);--mdc-icon-button-size:36px}.issue-type.info>.icon{color:var(--info-color)}.issue-type.info::after{background-color:var(--info-color)}.issue-type.warning>.icon{color:var(--warning-color)}.issue-type.warning::after{background-color:var(--warning-color)}.issue-type.error>.icon{color:var(--error-color)}.issue-type.error::after{background-color:var(--error-color)}.issue-type.success>.icon{color:var(--success-color)}.issue-type.success::after{background-color:var(--success-color)}:host ::slotted(ul){margin:0;padding-inline-start:20px}`))}}]}}),n.oi)},34273:function(e,t,i){var a=i(61701),n=i(72621),r=(i(71695),i(9359),i(31526),i(47021),i(22997),i(57243)),s=i(50778),o=i(5111),c=i(76525);let d,l,u=e=>e;(0,a.Z)([(0,s.Mo)("ha-button-menu")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:c.gA,value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"corner",value(){return"BOTTOM_START"}},{kind:"field",decorators:[(0,s.Cb)({attribute:"menu-corner"})],key:"menuCorner",value(){return"START"}},{kind:"field",decorators:[(0,s.Cb)({type:Number})],key:"x",value(){return null}},{kind:"field",decorators:[(0,s.Cb)({type:Number})],key:"y",value(){return null}},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"multi",value(){return!1}},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"activatable",value(){return!1}},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"fixed",value(){return!1}},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"no-anchor"})],key:"noAnchor",value(){return!1}},{kind:"field",decorators:[(0,s.IO)("mwc-menu",!0)],key:"_menu",value:void 0},{kind:"get",key:"items",value:function(){var e;return null===(e=this._menu)||void 0===e?void 0:e.items}},{kind:"get",key:"selected",value:function(){var e;return null===(e=this._menu)||void 0===e?void 0:e.selected}},{kind:"method",key:"focus",value:function(){var e,t;null!==(e=this._menu)&&void 0!==e&&e.open?this._menu.focusItemAtIndex(0):null===(t=this._triggerButton)||void 0===t||t.focus()}},{kind:"method",key:"render",value:function(){return(0,r.dy)(d||(d=u` <div @click="${0}"> <slot name="trigger" @slotchange="${0}"></slot> </div> <mwc-menu .corner="${0}" .menuCorner="${0}" .fixed="${0}" .multi="${0}" .activatable="${0}" .y="${0}" .x="${0}"> <slot></slot> </mwc-menu> `),this._handleClick,this._setTriggerAria,this.corner,this.menuCorner,this.fixed,this.multi,this.activatable,this.y,this.x)}},{kind:"method",key:"firstUpdated",value:function(e){(0,n.Z)(i,"firstUpdated",this,3)([e]),"rtl"===o.E.document.dir&&this.updateComplete.then((()=>{this.querySelectorAll("mwc-list-item").forEach((e=>{const t=document.createElement("style");t.innerHTML="span.material-icons:first-of-type { margin-left: var(--mdc-list-item-graphic-margin, 32px) !important; margin-right: 0px !important;}",e.shadowRoot.appendChild(t)}))}))}},{kind:"method",key:"_handleClick",value:function(){this.disabled||(this._menu.anchor=this.noAnchor?null:this,this._menu.show())}},{kind:"get",key:"_triggerButton",value:function(){return this.querySelector('ha-icon-button[slot="trigger"], mwc-button[slot="trigger"]')}},{kind:"method",key:"_setTriggerAria",value:function(){this._triggerButton&&(this._triggerButton.ariaHasPopup="menu")}},{kind:"field",static:!0,key:"styles",value(){return(0,r.iv)(l||(l=u`:host{display:inline-block;position:relative}::slotted([disabled]){color:var(--disabled-text-color)}`))}}]}}),r.oi)},54977:function(e,t,i){var a=i(61701),n=(i(71695),i(47021),i(57243)),r=i(50778);let s,o,c,d=e=>e;(0,a.Z)([(0,r.Mo)("ha-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"raised",value(){return!1}},{kind:"field",static:!0,key:"styles",value(){return(0,n.iv)(s||(s=d`:host{background:var(--ha-card-background,var(--card-background-color,#fff));-webkit-backdrop-filter:var(--ha-card-backdrop-filter,none);backdrop-filter:var(--ha-card-backdrop-filter,none);box-shadow:var(--ha-card-box-shadow,none);box-sizing:border-box;border-radius:var(--ha-card-border-radius,12px);border-width:var(--ha-card-border-width,1px);border-style:solid;border-color:var(--ha-card-border-color,var(--divider-color,#e0e0e0));color:var(--primary-text-color);display:block;transition:all .3s ease-out;position:relative}:host([raised]){border:none;box-shadow:var(--ha-card-box-shadow,0px 2px 1px -1px rgba(0,0,0,.2),0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12))}.card-header,:host ::slotted(.card-header){color:var(--ha-card-header-color,var(--primary-text-color));font-family:var(--ha-card-header-font-family, inherit);font-size:var(--ha-card-header-font-size, 24px);letter-spacing:-.012em;line-height:48px;padding:12px 16px 16px;display:block;margin-block-start:0px;margin-block-end:0px;font-weight:400}:host ::slotted(.card-content:not(:first-child)),slot:not(:first-child)::slotted(.card-content){padding-top:0px;margin-top:-8px}:host ::slotted(.card-content){padding:16px}:host ::slotted(.card-actions){border-top:1px solid var(--divider-color,#e8e8e8);padding:5px 16px}`))}},{kind:"method",key:"render",value:function(){return(0,n.dy)(o||(o=d` ${0} <slot></slot> `),this.header?(0,n.dy)(c||(c=d`<h1 class="card-header">${0}</h1>`),this.header):n.Ld)}}]}}),n.oi)},13928:function(e,t,i){i.r(t),i.d(t,{HaIconNext:()=>o});var a=i(61701),n=(i(71695),i(47021),i(50778)),r=i(5111),s=i(37583);let o=(0,a.Z)([(0,n.Mo)("ha-icon-next")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)()],key:"path",value(){return"rtl"===r.E.document.dir?"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z":"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"}}]}}),s.HaSvgIcon)},65981:function(e,t,i){i.r(t),i.d(t,{HaIcon:()=>C});var a=i(61701),n=i(72621),r=(i(19083),i(71695),i(40251),i(61006),i(47021),i(57243)),s=i(50778),o=i(36522),c=i(22381),d=i(80654),l=(i(92745),i(9359),i(31526),i(27608)),u=i(27486),f=i(37394);const p=JSON.parse('{"version":"7.4.47","parts":[{"file":"7a7139d465f1f41cb26ab851a17caa21a9331234"},{"start":"account-supervisor-circle-","file":"9561286c4c1021d46b9006596812178190a7cc1c"},{"start":"alpha-r-c","file":"eb466b7087fb2b4d23376ea9bc86693c45c500fa"},{"start":"arrow-decision-o","file":"4b3c01b7e0723b702940c5ac46fb9e555646972b"},{"start":"baby-f","file":"2611401d85450b95ab448ad1d02c1a432b409ed2"},{"start":"battery-hi","file":"89bcd31855b34cd9d31ac693fb073277e74f1f6a"},{"start":"blur-r","file":"373709cd5d7e688c2addc9a6c5d26c2d57c02c48"},{"start":"briefcase-account-","file":"a75956cf812ee90ee4f656274426aafac81e1053"},{"start":"calendar-question-","file":"3253f2529b5ebdd110b411917bacfacb5b7063e6"},{"start":"car-lig","file":"74566af3501ad6ae58ad13a8b6921b3cc2ef879d"},{"start":"cellphone-co","file":"7677f1cfb2dd4f5562a2aa6d3ae43a2e6997b21a"},{"start":"circle-slice-2","file":"70d08c50ec4522dd75d11338db57846588263ee2"},{"start":"cloud-co","file":"141d2bfa55ca4c83f4bae2812a5da59a84fec4ff"},{"start":"cog-s","file":"5a640365f8e47c609005d5e098e0e8104286d120"},{"start":"cookie-l","file":"dd85b8eb8581b176d3acf75d1bd82e61ca1ba2fc"},{"start":"currency-eur-","file":"15362279f4ebfc3620ae55f79d2830ad86d5213e"},{"start":"delete-o","file":"239434ab8df61237277d7599ebe066c55806c274"},{"start":"draw-","file":"5605918a592070803ba2ad05a5aba06263da0d70"},{"start":"emoticon-po","file":"a838cfcec34323946237a9f18e66945f55260f78"},{"start":"fan","file":"effd56103b37a8c7f332e22de8e4d67a69b70db7"},{"start":"file-question-","file":"b2424b50bd465ae192593f1c3d086c5eec893af8"},{"start":"flask-off-","file":"3b76295cde006a18f0301dd98eed8c57e1d5a425"},{"start":"food-s","file":"1c6941474cbeb1755faaaf5771440577f4f1f9c6"},{"start":"gamepad-u","file":"c6efe18db6bc9654ae3540c7dee83218a5450263"},{"start":"google-f","file":"df341afe6ad4437457cf188499cb8d2df8ac7b9e"},{"start":"head-c","file":"282121c9e45ed67f033edcc1eafd279334c00f46"},{"start":"home-pl","file":"27e8e38fc7adcacf2a210802f27d841b49c8c508"},{"start":"inbox-","file":"0f0316ec7b1b7f7ce3eaabce26c9ef619b5a1694"},{"start":"key-v","file":"ea33462be7b953ff1eafc5dac2d166b210685a60"},{"start":"leaf-circle-","file":"33db9bbd66ce48a2db3e987fdbd37fb0482145a4"},{"start":"lock-p","file":"b89e27ed39e9d10c44259362a4b57f3c579d3ec8"},{"start":"message-s","file":"7b5ab5a5cadbe06e3113ec148f044aa701eac53a"},{"start":"moti","file":"01024d78c248d36805b565e343dd98033cc3bcaf"},{"start":"newspaper-variant-o","file":"22a6ec4a4fdd0a7c0acaf805f6127b38723c9189"},{"start":"on","file":"c73d55b412f394e64632e2011a59aa05e5a1f50d"},{"start":"paw-ou","file":"3f669bf26d16752dc4a9ea349492df93a13dcfbf"},{"start":"pigg","file":"0c24edb27eb1c90b6e33fc05f34ef3118fa94256"},{"start":"printer-pos-sy","file":"41a55cda866f90b99a64395c3bb18c14983dcf0a"},{"start":"read","file":"c7ed91552a3a64c9be88c85e807404cf705b7edf"},{"start":"robot-vacuum-variant-o","file":"917d2a35d7268c0ea9ad9ecab2778060e19d90e0"},{"start":"sees","file":"6e82d9861d8fac30102bafa212021b819f303bdb"},{"start":"shoe-f","file":"e2fe7ce02b5472301418cc90a0e631f187b9f238"},{"start":"snowflake-m","file":"a28ba9f5309090c8b49a27ca20ff582a944f6e71"},{"start":"st","file":"7e92d03f095ec27e137b708b879dfd273bd735ab"},{"start":"su","file":"61c74913720f9de59a379bdca37f1d2f0dc1f9db"},{"start":"tag-plus-","file":"8f3184156a4f38549cf4c4fffba73a6a941166ae"},{"start":"timer-a","file":"baab470d11cfb3a3cd3b063ee6503a77d12a80d0"},{"start":"transit-d","file":"8561c0d9b1ac03fab360fd8fe9729c96e8693239"},{"start":"vector-arrange-b","file":"c9a3439257d4bab33d3355f1f2e11842e8171141"},{"start":"water-ou","file":"02dbccfb8ca35f39b99f5a085b095fc1275005a0"},{"start":"webc","file":"57bafd4b97341f4f2ac20a609d023719f23a619c"},{"start":"zip","file":"65ae094e8263236fa50486584a08c03497a38d93"}]}'),h=(0,u.Z)((async()=>{const e=(0,l.MT)("hass-icon-db","mdi-icon-store");{const t=await(0,l.U2)("_version",e);t?t!==p.version&&(await(0,l.ZH)(e),(0,l.t8)("_version",p.version,e)):(0,l.t8)("_version",p.version,e)}return e})),m=["mdi","hass","hassio","hademo"];let b=[];i(37583);let v,y,g,k=e=>e;const _={},w={},x=(0,c.D)((()=>(async e=>{const t=Object.keys(e),i=await Promise.all(Object.values(e));(await h())("readwrite",(a=>{i.forEach(((i,n)=>{Object.entries(i).forEach((([e,t])=>{a.put(t,e)})),delete e[t[n]]}))}))})(w)),2e3),$={};let C=(0,a.Z)([(0,s.Mo)("ha-icon")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[(0,s.Cb)()],key:"icon",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_path",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_secondaryPath",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_viewBox",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_legacy",value(){return!1}},{kind:"method",key:"willUpdate",value:function(e){(0,n.Z)(a,"willUpdate",this,3)([e]),e.has("icon")&&(this._path=void 0,this._secondaryPath=void 0,this._viewBox=void 0,this._loadIcon())}},{kind:"method",key:"render",value:function(){return this.icon?this._legacy?(0,r.dy)(v||(v=k` <iron-icon .icon="${0}"></iron-icon>`),this.icon):(0,r.dy)(y||(y=k`<ha-svg-icon .path="${0}" .secondaryPath="${0}" .viewBox="${0}"></ha-svg-icon>`),this._path,this._secondaryPath,this._viewBox):r.Ld}},{kind:"method",key:"_loadIcon",value:async function(){if(!this.icon)return;const e=this.icon,[t,a]=this.icon.split(":",2);let n,r=a;if(!t||!r)return;if(!m.includes(t)){const i=d.g[t];return i?void(i&&"function"==typeof i.getIcon&&this._setCustomPath(i.getIcon(r),e)):void(this._legacy=!0)}if(this._legacy=!1,r in _){const e=_[r];let i;e.newName?(i=`Icon ${t}:${r} was renamed to ${t}:${e.newName}, please change your config, it will be removed in version ${e.removeIn}.`,r=e.newName):i=`Icon ${t}:${r} was removed from MDI, please replace this icon with an other icon in your config, it will be removed in version ${e.removeIn}.`,console.warn(i),(0,o.B)(this,"write_log",{level:"warning",message:i})}if(r in $)return void(this._path=$[r]);if("home-assistant"===r){const t=(await i.e("48348").then(i.bind(i,30511))).mdiHomeAssistant;return this.icon===e&&(this._path=t),void($[r]=t)}try{n=await(e=>new Promise(((t,i)=>{if(b.push([e,t,i]),b.length>1)return;const a=h();(0,f.n)(1e3,(async()=>{(await a)("readonly",(e=>{for(const[t,i,a]of b)(0,l.RV)(e.get(t)).then((e=>i(e))).catch((e=>a(e)));b=[]}))})()).catch((e=>{for(const[,,t]of b)t(e);b=[]}))})))(r)}catch(u){n=void 0}if(n)return this.icon===e&&(this._path=n),void($[r]=n);const s=(e=>{let t;for(const i of p.parts){if(void 0!==i.start&&e<i.start)break;t=i}return t.file})(r);if(s in w)return void this._setPath(w[s],r,e);const c=fetch(`/static/mdi/${s}.json`).then((e=>e.json()));w[s]=c,this._setPath(c,r,e),x()}},{kind:"method",key:"_setCustomPath",value:async function(e,t){const i=await e;this.icon===t&&(this._path=i.path,this._secondaryPath=i.secondaryPath,this._viewBox=i.viewBox)}},{kind:"method",key:"_setPath",value:async function(e,t,i){const a=await e;this.icon===i&&(this._path=a[t]),$[t]=a[t]}},{kind:"field",static:!0,key:"styles",value(){return(0,r.iv)(g||(g=k`:host{fill:currentcolor}`))}}]}}),r.oi)},7285:function(e,t,i){i.d(t,{M:()=>p});var a=i(61701),n=i(72621),r=(i(71695),i(47021),i(65703)),s=i(46289),o=i(57243),c=i(50778);let d,l,u,f=e=>e,p=(0,a.Z)([(0,c.Mo)("ha-list-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,n.Z)(i,"renderRipple",this,3)([])}},{kind:"get",static:!0,key:"styles",value:function(){return[s.W,(0,o.iv)(d||(d=f`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-inline-start:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px));padding-inline-end:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)!important}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)!important}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center;flex-shrink:0}:host([graphic=icon]:not([twoline])) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,20px)!important}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`)),"rtl"===document.dir?(0,o.iv)(l||(l=f`span.material-icons:first-of-type,span.material-icons:last-of-type{direction:rtl!important;--direction:rtl}`)):(0,o.iv)(u||(u=f``))]}}]}}),r.K)},17170:function(e,t,i){i.a(e,(async function(e,a){try{i.r(t),i.d(t,{HaSpinner:()=>p});var n=i(61701),r=i(72621),s=(i(71695),i(47021),i(97677)),o=i(43580),c=i(57243),d=i(50778),l=e([s]);s=(l.then?(await l)():l)[0];let u,f=e=>e,p=(0,n.Z)([(0,d.Mo)("ha-spinner")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)()],key:"size",value:void 0},{kind:"method",key:"updated",value:function(e){if((0,r.Z)(i,"updated",this,3)([e]),e.has("size"))switch(this.size){case"tiny":this.style.setProperty("--ha-spinner-size","16px");break;case"small":this.style.setProperty("--ha-spinner-size","28px");break;case"medium":this.style.setProperty("--ha-spinner-size","48px");break;case"large":this.style.setProperty("--ha-spinner-size","68px");break;case void 0:this.style.removeProperty("--ha-progress-ring-size")}}},{kind:"field",static:!0,key:"styles",value(){return[o.Z,(0,c.iv)(u||(u=f`:host{--indicator-color:var(
          --ha-spinner-indicator-color,
          var(--primary-color)
        );--track-color:var(--ha-spinner-divider-color, var(--divider-color));--track-width:4px;--speed:3.5s;font-size:var(--ha-spinner-size, 48px)}`))]}}]}}),s.Z);a()}catch(u){a(u)}}))},51223:function(e,t,i){i.a(e,(async function(e,t){try{var a=i(61701),n=(i(71695),i(47021),i(57243)),r=i(50778),s=i(94571),o=i(59847),c=i(45729),d=(i(65981),i(37583),e([c]));c=(d.then?(await d)():d)[0];let l,u,f,p,h=e=>e;(0,a.Z)([(0,r.Mo)("ha-state-icon")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"stateValue",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"icon",value:void 0},{kind:"method",key:"render",value:function(){var e,t;const i=this.icon||this.stateObj&&(null===(e=this.hass)||void 0===e||null===(e=e.entities[this.stateObj.entity_id])||void 0===e?void 0:e.icon)||(null===(t=this.stateObj)||void 0===t?void 0:t.attributes.icon);if(i)return(0,n.dy)(l||(l=h`<ha-icon .icon="${0}"></ha-icon>`),i);if(!this.stateObj)return n.Ld;if(!this.hass)return this._renderFallback();const a=(0,c.gD)(this.hass,this.stateObj,this.stateValue).then((e=>e?(0,n.dy)(u||(u=h`<ha-icon .icon="${0}"></ha-icon>`),e):this._renderFallback()));return(0,n.dy)(f||(f=h`${0}`),(0,s.C)(a))}},{kind:"method",key:"_renderFallback",value:function(){const e=(0,o.N)(this.stateObj);return(0,n.dy)(p||(p=h` <ha-svg-icon .path="${0}"></ha-svg-icon> `),c.Ls[e]||c.Rb)}}]}}),n.oi);t()}catch(l){t(l)}}))},43546:function(e,t,i){i.d(t,{Cp:()=>s,TZ:()=>o,W2:()=>r,YY:()=>d,iI:()=>n,j2:()=>c,oT:()=>a});i(19083),i(9359),i(70104),i(77439),i(19423),i(40251),i(97499),i(61006);const a=e=>e.map((e=>{if("string"!==e.type)return e;switch(e.name){case"username":return Object.assign(Object.assign({},e),{},{autocomplete:"username",autofocus:!0});case"password":return Object.assign(Object.assign({},e),{},{autocomplete:"current-password"});case"code":return Object.assign(Object.assign({},e),{},{autocomplete:"one-time-code",autofocus:!0});default:return e}})),n=(e,t)=>e.callWS({type:"auth/sign_path",path:t}),r=async(e,t,i,a)=>e.callWS({type:"config/auth_provider/homeassistant/create",user_id:t,username:i,password:a}),s=(e,t,i)=>e.callWS({type:"config/auth_provider/homeassistant/change_password",current_password:t,new_password:i}),o=(e,t,i)=>e.callWS({type:"config/auth_provider/homeassistant/admin_change_password",user_id:t,password:i}),c=(e,t,i)=>e.callWS({type:"config/auth_provider/homeassistant/admin_change_username",user_id:t,username:i}),d=(e,t,i)=>e.callWS({type:"auth/delete_all_refresh_tokens",token_type:t,delete_current_token:i})},47844:function(e,t,i){i.d(t,{T9:()=>p,kU:()=>s,i4:()=>l,sF:()=>n,z9:()=>_,nk:()=>d,Mw:()=>b,Ch:()=>c,Lr:()=>f,jU:()=>o,Xn:()=>m,r:()=>h,B:()=>y,ou:()=>k,zj:()=>g,qW:()=>r});i(19423),i(40251),i(88044),i(71695),i(47021);var a=i(43546);const n=[1,2,3,4,6,8],r=2,s="hls",o="web_rtc",c=(e,t,i)=>`${e}&width=${t}&height=${i}`,d=e=>`/api/camera_proxy_stream/${e.entity_id}?token=${e.attributes.access_token}`,l=async(e,t,i,a)=>{const n=await(async(e,t,i,a,n,...r)=>{let s=a[e];s||(s=a[e]={});const o=s[n];if(o)return o;const c=i(a,n,...r);return s[n]=c,c.then((()=>setTimeout((()=>{s[n]=void 0}),t)),(()=>{s[n]=void 0})),c})("_cameraTmbUrl",9e3,u,e,t);return c(n,i,a)},u=async(e,t)=>{const i=await(0,a.iI)(e,`/api/camera_proxy/${t}`);return e.hassUrl(i.path)},f=async(e,t,i)=>{const a={type:"camera/stream",entity_id:t};i&&(a.format=i);const n=await e.callWS(a);return n.url=e.hassUrl(n.url),n},p=(e,t,i,a)=>e.connection.subscribeMessage(a,{type:"camera/webrtc/offer",entity_id:t,offer:i}),h=(e,t,i,a)=>e.callWS({type:"camera/webrtc/candidate",entity_id:t,session_id:i,candidate:a}),m=(e,t)=>e.callWS({type:"camera/get_prefs",entity_id:t}),b=(e,t,i)=>e.callWS(Object.assign({type:"camera/update_prefs",entity_id:t},i)),v="media-source://camera/",y=e=>e.startsWith(v),g=e=>e.substring(22),k=async(e,t)=>e.callWS({type:"camera/capabilities",entity_id:t}),_=async(e,t)=>e.callWS({type:"camera/webrtc/get_client_config",entity_id:t})},80654:function(e,t,i){i.d(t,{g:()=>s});const a=window;"customIconsets"in a||(a.customIconsets={});const n=a.customIconsets,r=window;"customIcons"in r||(r.customIcons={});const s=new Proxy(r.customIcons,{get:(e,t)=>{var i;return null!==(i=e[t])&&void 0!==i?i:n[t]?{getIcon:n[t]}:void 0}})},96194:function(e,t,i){i.d(t,{ON:()=>s,PX:()=>o,V_:()=>c,lz:()=>r,nZ:()=>n,rk:()=>l});var a=i(92636);const n="unavailable",r="unknown",s="on",o="off",c=[n,r],d=[n,r,o],l=(0,a.z)(c);(0,a.z)(d)},69919:function(e,t,i){i.a(e,(async function(e,a){try{i.d(t,{EX:()=>p,Fj:()=>w,M$:()=>x,SO:()=>h,Sk:()=>b,TN:()=>C,UJ:()=>v,Ym:()=>$,hF:()=>m});i(19083),i(61893),i(9359),i(56475),i(70104),i(40251);var n=i(73358),r=i(73850),s=i(59847),o=i(75278),c=i(50602),d=i(1416),l=i(76131),u=i(72473),f=e([c]);c=(f.then?(await f)():f)[0];let p=function(e){return e[e.INSTALL=1]="INSTALL",e[e.SPECIFIC_VERSION=2]="SPECIFIC_VERSION",e[e.PROGRESS=4]="PROGRESS",e[e.BACKUP=8]="BACKUP",e[e.RELEASE_NOTES=16]="RELEASE_NOTES",e}({});const h=e=>(0,o.e)(e,p.PROGRESS)&&null!==e.attributes.update_percentage,m=(e,t=!1)=>(e.state===n.uo||t&&Boolean(e.attributes.skipped_version))&&(0,o.e)(e,p.INSTALL),b=e=>!!e.attributes.in_progress,v=(e,t)=>e.callWS({type:"update/release_notes",entity_id:t}),y="ioBroker Core",g="ioBroker Supervisor",k="ioBroker Operating System",_=(e,t)=>Object.values(e).filter((e=>"update"===(0,s.N)(e))).sort(((e,i)=>e.attributes.title===y?-3:i.attributes.title===y?3:e.attributes.title===k?-2:i.attributes.title===k?2:e.attributes.title===g?-1:i.attributes.title===g?1:(0,d.fe)(e.attributes.title||e.attributes.friendly_name||"",i.attributes.title||i.attributes.friendly_name||"",t))),w=(e,t=!1)=>_(e).filter((e=>m(e,t))),x=async(e,t)=>{const i=_(t.states,t.locale.language).map((e=>e.entity_id));if(!i.length)return void(0,l.showAlertDialog)(e,{title:t.localize("ui.panel.config.updates.no_update_entities.title"),text:t.localize("ui.panel.config.updates.no_update_entities.description"),warning:!0});(0,u.C)(e,{message:t.localize("ui.panel.config.updates.checking_updates")});let a=0;const n=await t.connection.subscribeEvents((i=>{"update"===(0,r.M)(i.data.entity_id)&&(a++,(0,u.C)(e,{message:t.localize("ui.panel.config.updates.updates_refreshed",{count:a})}))}),"state_changed");await t.callService("homeassistant","update_entity",{entity_id:i}),await new Promise((e=>{setTimeout(e,15e3)})),n(),0===a&&(0,u.C)(e,{message:t.localize("ui.panel.config.updates.no_new_updates")})},$=(e,t)=>{const i=e.state,a=e.attributes;if("off"===i){return a.latest_version&&a.skipped_version===a.latest_version?a.latest_version:t.formatEntityState(e)}if("on"===i&&b(e)){return(0,o.e)(e,p.PROGRESS)&&null!==a.update_percentage?t.localize("ui.card.update.installing_with_progress",{progress:(0,c.uf)(a.update_percentage,t.locale,{maximumFractionDigits:a.display_precision,minimumFractionDigits:a.display_precision})}):t.localize("ui.card.update.installing")}return t.formatEntityState(e)},C=(e,t)=>{var i;if("hassio"!==(null===(i=t[e.entity_id])||void 0===i?void 0:i.domain))return"generic";const a=e.attributes.title||"";return a===y?"home_assistant":[y,g,k].includes(a)?"generic":"addon"};a()}catch(p){a(p)}}))},73728:function(e,t,i){i.a(e,(async function(e,t){try{var a=i(61701),n=(i(71695),i(9359),i(56475),i(1331),i(70104),i(47021),i(31622),i(2060),i(57243)),r=i(50778),s=i(20552),o=i(27486),c=i(36522),d=i(86431),l=i(5460),u=(i(99426),i(13928),i(7285),i(17170)),f=i(71857),p=i(63318),h=i(6736),m=e([l,u]);[l,u]=m.then?(await m)():m;let b,v,y,g,k,_,w=e=>e;(0,a.Z)([(0,r.Mo)("ha-config-updates")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"narrow",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"updateEntities",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"total",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_devices",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_entities",value:void 0},{kind:"method",key:"hassSubscribe",value:function(){return[(0,f.q4)(this.hass.connection,(e=>{this._devices=e})),(0,p.LM)(this.hass.connection,(e=>{this._entities=e.filter((e=>null!==e.device_id))}))]}},{kind:"field",key:"getDeviceEntry",value(){return(0,o.Z)((e=>{var t;return null===(t=this._devices)||void 0===t?void 0:t.find((t=>t.id===e))}))}},{kind:"field",key:"getEntityEntry",value(){return(0,o.Z)((e=>{var t;return null===(t=this._entities)||void 0===t?void 0:t.find((t=>t.entity_id===e))}))}},{kind:"method",key:"render",value:function(){var e;if(null===(e=this.updateEntities)||void 0===e||!e.length)return n.Ld;const t=this.updateEntities;return(0,n.dy)(b||(b=w` <div class="title"> ${0} </div> <mwc-list> ${0} </mwc-list> `),this.hass.localize("ui.panel.config.updates.title",{count:this.total||this.updateEntities.length}),t.map((e=>{const t=this.getEntityEntry(e.entity_id),i=t&&t.device_id?this.getDeviceEntry(t.device_id):void 0;return(0,n.dy)(v||(v=w` <ha-list-item twoline graphic="medium" class="${0}" .entity_id="${0}" .hasMeta="${0}" @click="${0}"> <state-badge slot="graphic" .title="${0}" .hass="${0}" .stateObj="${0}" class="${0}"></state-badge> ${0} <span>${0}</span> <span slot="secondary"> ${0} ${0} ${0} </span> ${0} </ha-list-item> `),(0,s.o)(e.attributes.skipped_version?"skipped":void 0),e.entity_id,!this.narrow,this._openMoreInfo,e.attributes.title||e.attributes.friendly_name,this.hass,e,(0,s.o)(this.narrow&&e.attributes.in_progress?"updating":void 0),this.narrow&&e.attributes.in_progress?(0,n.dy)(y||(y=w`<ha-spinner slot="graphic" class="absolute" size="small" .ariaLabel="${0}"></ha-spinner>`),this.hass.localize("ui.panel.config.updates.update_in_progress")):"",i?(0,d.wZ)(i,this.hass):e.attributes.friendly_name,e.attributes.title,e.attributes.latest_version,e.attributes.skipped_version?`(${this.hass.localize("ui.panel.config.updates.skipped")})`:"",this.narrow?"":e.attributes.in_progress?(0,n.dy)(g||(g=w`<div slot="meta"> <ha-spinner size="small" .ariaLabel="${0}"></ha-spinner> </div>`),this.hass.localize("ui.panel.config.updates.update_in_progress")):(0,n.dy)(k||(k=w`<ha-icon-next slot="meta"></ha-icon-next>`)))})))}},{kind:"method",key:"_openMoreInfo",value:function(e){(0,c.B)(this,"hass-more-info",{entityId:e.currentTarget.entity_id})}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,n.iv)(_||(_=w`:host{--mdc-list-vertical-padding:0}.title{font-size:16px;padding:16px;padding-bottom:0}.skipped{background:var(--secondary-background-color)}ha-list-item{--mdc-list-item-graphic-size:40px}ha-icon-next{color:var(--secondary-text-color);height:24px;width:24px}button.show-more{color:var(--primary-color);text-align:left;cursor:pointer;background:0 0;border-width:initial;border-style:none;border-color:initial;border-image:initial;padding:16px;font:inherit}button.show-more:focus{outline:0;text-decoration:underline}ha-list-item{cursor:pointer;font-size:16px}ha-spinner.absolute{position:absolute;width:28px;height:28px}state-badge.updating{opacity:.5}`))]}}]}}),(0,h.f)(n.oi));t()}catch(b){t(b)}}))},30511:function(e,t,i){i.r(t),i.d(t,{mdiHomeAssistant:()=>a});const a="m12.151 1.5882c-.3262 0-.6523.1291-.8996.3867l-8.3848 8.7354c-.0619.0644-.1223.1368-.1807.2154-.0588.0789-.1151.1638-.1688.2534-.2593.4325-.4552.9749-.5232 1.4555-.0026.018-.0076.0369-.0094.0548-.0121.0987-.0184.1944-.0184.2857v8.0124a1.2731 1.2731 0 001.2731 1.2731h7.8313l-3.4484-3.593a1.7399 1.7399 0 111.0803-1.125l2.6847 2.7972v-10.248a1.7399 1.7399 0 111.5276-0v7.187l2.6702-2.782a1.7399 1.7399 0 111.0566 1.1505l-3.7269 3.8831v2.7299h8.174a1.2471 1.2471 0 001.2471-1.2471v-8.0375c0-.0912-.0059-.1868-.0184-.2855-.0603-.4935-.2636-1.0617-.5326-1.5105-.0537-.0896-.1101-.1745-.1684-.253-.0588-.079-.1191-.1513-.181-.2158l-8.3848-8.7363c-.2473-.2577-.5735-.3866-.8995-.3864"},73192:function(e,t,i){i.d(t,{R:()=>a});const a=(e,t)=>`https://www.iobroker.net/#${e.language&&e.language.split("-")[0]||"en"}/adapters/adapterref/iobroker.lovelace/README.md#`}}]);
//# sourceMappingURL=3963.d926c691c8564289.js.map