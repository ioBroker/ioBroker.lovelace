"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[56217],{48091:function(e,t,n){n.d(t,{A8:function(){return r},Ax:function(){return c},Fc:function(){return o},G$:function(){return s},zq:function(){return l}});var i=n(99312),a=n(81043),r=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"application_credentials/config"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"application_credentials/config_entry",config_entry_id:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"application_credentials/list"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,n,a,r,c){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"application_credentials/create",domain:n,client_id:a,client_secret:r,name:c}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,i,a,r){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"application_credentials/delete",application_credentials_id:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},56217:function(e,t,n){n.r(t),n.d(t,{HaConfigApplicationCredentials:function(){return L}});var i,a,r,c,o,s,l,d,u=n(53709),p=n(99312),h=n(81043),f=n(88962),m=n(33368),v=n(71650),b=n(82390),_=n(69205),k=n(70906),g=n(91808),y=n(88771),Z=n(47838),x=n(68144),w=n(79932),C=n(83448),z=n(14516),S=(n(12171),n(36125),n(76865),n(52039),n(48091)),H=n(5986),A=n(26765),V=(n(24090),n(29311)),T=n(12343),L=(0,g.Z)([(0,w.Mo)("ha-config-application-credentials")],(function(e,t){var n,g,L=function(t){(0,_.Z)(i,t);var n=(0,k.Z)(i);function i(){var t;(0,v.Z)(this,i);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return t=n.call.apply(n,[this].concat(r)),e((0,b.Z)(t)),t}return(0,m.Z)(i)}(t);return{F:L,d:[{kind:"field",decorators:[(0,w.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,w.SB)()],key:"_applicationCredentials",value:function(){return[]}},{kind:"field",decorators:[(0,w.Cb)()],key:"isWide",value:void 0},{kind:"field",decorators:[(0,w.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,w.Cb)()],key:"route",value:void 0},{kind:"field",decorators:[(0,w.SB)()],key:"_selected",value:function(){return[]}},{kind:"field",decorators:[(0,w.IO)("hass-tabs-subpage-data-table",!0)],key:"_dataTable",value:void 0},{kind:"field",key:"_columns",value:function(){return(0,z.Z)((function(e,t){return{name:{title:t("ui.panel.config.application_credentials.picker.headers.name"),direction:"asc",grows:!0,template:function(e,t){return(0,x.dy)(i||(i=(0,f.Z)(["",""])),t.name)}},clientId:{title:t("ui.panel.config.application_credentials.picker.headers.client_id"),width:"30%",direction:"asc",hidden:e,template:function(e,t){return(0,x.dy)(a||(a=(0,f.Z)(["",""])),t.client_id)}},application:{title:t("ui.panel.config.application_credentials.picker.headers.application"),sortable:!0,width:"30%",direction:"asc",template:function(e,n){return(0,x.dy)(r||(r=(0,f.Z)(["",""])),(0,H.Lh)(t,n.domain))}}}}))}},{kind:"method",key:"firstUpdated",value:function(e){(0,y.Z)((0,Z.Z)(L.prototype),"firstUpdated",this).call(this,e),this._loadTranslations(),this._fetchApplicationCredentials()}},{kind:"method",key:"render",value:function(){return(0,x.dy)(c||(c=(0,f.Z)([' <hass-tabs-subpage-data-table .hass="','" .narrow="','" .route="','" backPath="/config" .tabs="','" .columns="','" .data="','" hasFab selectable @selection-changed="','"> ',' <ha-fab slot="fab" .label="','" extended @click="','"> <ha-svg-icon slot="icon" .path="','"></ha-svg-icon> </ha-fab> </hass-tabs-subpage-data-table> '])),this.hass,this.narrow,this.route,V.configSections.devices,this._columns(this.narrow,this.hass.localize),this._applicationCredentials,this._handleSelectionChanged,this._selected.length?(0,x.dy)(o||(o=(0,f.Z)([' <div class="','" slot="header"> <p class="selected-txt"> ',' </p> <div class="header-btns"> '," </div> </div> "])),(0,C.$)({"header-toolbar":this.narrow,"table-header":!this.narrow}),this.hass.localize("ui.panel.config.application_credentials.picker.selected","number",this._selected.length),this.narrow?(0,x.dy)(l||(l=(0,f.Z)([' <ha-icon-button class="warning" id="remove-btn" @click="','" .path="','" .label="','"></ha-icon-button> <ha-help-tooltip .label="','"> </ha-help-tooltip> '])),this._removeSelected,"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",this.hass.localize("ui.common.remove"),this.hass.localize("ui.panel.config.application_credentials.picker.remove_selected.button")):(0,x.dy)(s||(s=(0,f.Z)([' <mwc-button @click="','" class="warning">',"</mwc-button> "])),this._removeSelected,this.hass.localize("ui.panel.config.application_credentials.picker.remove_selected.button"))):x.Ld,this.hass.localize("ui.panel.config.application_credentials.picker.add_application_credential"),this._addApplicationCredential,"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z")}},{kind:"method",key:"_handleSelectionChanged",value:function(e){this._selected=e.detail.value}},{kind:"method",key:"_removeSelected",value:function(){var e,t=this;(0,A.g7)(this,{title:this.hass.localize("ui.panel.config.application_credentials.picker.remove_selected.confirm_title","number",this._selected.length),text:this.hass.localize("ui.panel.config.application_credentials.picker.remove_selected.confirm_text"),confirmText:this.hass.localize("ui.common.remove"),dismissText:this.hass.localize("ui.common.cancel"),confirm:(e=(0,h.Z)((0,p.Z)().mark((function e(){return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all(t._selected.map(function(){var e=(0,h.Z)((0,p.Z)().mark((function e(n){return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,S.zq)(t.hass,n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),(0,A.Ys)(t,{title:t.hass.localize("ui.panel.config.application_credentials.picker.remove_selected.error_title"),text:e.t0.message}),e.abrupt("return");case 9:t._dataTable.clearSelection(),t._fetchApplicationCredentials();case 11:case"end":return e.stop()}}),e,null,[[0,5]])}))),function(){return e.apply(this,arguments)})})}},{kind:"method",key:"_loadTranslations",value:(g=(0,h.Z)((0,p.Z)().mark((function e(){return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.hass.loadBackendTranslation("title",void 0,!0);case 2:case"end":return e.stop()}}),e,this)}))),function(){return g.apply(this,arguments)})},{kind:"method",key:"_fetchApplicationCredentials",value:(n=(0,h.Z)((0,p.Z)().mark((function e(){return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,S.Fc)(this.hass);case 2:this._applicationCredentials=e.sent;case 3:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{kind:"method",key:"_addApplicationCredential",value:function(){var e,t=this;(0,T.L)(this,{applicationCredentialAddedCallback:(e=(0,h.Z)((0,p.Z)().mark((function e(n){return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&(t._applicationCredentials=[].concat((0,u.Z)(t._applicationCredentials),[n]));case 1:case"end":return e.stop()}}),e)}))),function(t){return e.apply(this,arguments)})})}},{kind:"get",static:!0,key:"styles",value:function(){return(0,x.iv)(d||(d=(0,f.Z)([".table-header{display:flex;justify-content:space-between;align-items:center;height:56px;background-color:var(--mdc-text-field-fill-color,#f5f5f5);border-bottom:1px solid var(--mdc-text-field-idle-line-color,rgba(0,0,0,.42));box-sizing:border-box}.header-toolbar{display:flex;justify-content:space-between;align-items:center;color:var(--secondary-text-color);position:relative;top:-4px}.selected-txt{font-weight:700;padding-left:16px;padding-inline-start:16px;direction:var(--direction)}.table-header .selected-txt{margin-top:20px}.header-toolbar .selected-txt{font-size:16px}.header-toolbar .header-btns{margin-right:-12px}.header-btns{display:flex}.header-btns>ha-icon-button,.header-btns>mwc-button{margin:8px}ha-button-menu{margin-left:8px}"])))}}]}}),x.oi)},12343:function(e,t,n){n.d(t,{L:function(){return r}});var i=n(47181),a=function(){return Promise.all([n.e(79071),n.e(28597),n.e(2185),n.e(7270),n.e(18431),n.e(81312),n.e(89493)]).then(n.bind(n,89493))},r=function(e,t){(0,i.B)(e,"show-dialog",{dialogTag:"dialog-add-application-credential",dialogImport:a,dialogParams:t})}}}]);
//# sourceMappingURL=56217-UPqf8J_v3pA.js.map