"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["40615"],{89530:function(e,a,t){t.r(a),t.d(a,{ZHAAddGroupPage:()=>u});var i=t(61701),s=t(72621),n=(t(71695),t(9359),t(70104),t(23669),t(40251),t(47021),t(31622),t(57243)),d=t(50778),o=t(83523),r=(t(97206),t(74794));t(87979),t(98241),t(83166),t(33718);let h,l,c,p=e=>e,u=(0,i.Z)([(0,d.Mo)("zha-add-group-page")],(function(e,a){class t extends a{constructor(...a){super(...a),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"narrow",value(){return!1}},{kind:"field",decorators:[(0,d.Cb)({attribute:!1,type:Array})],key:"deviceEndpoints",value(){return[]}},{kind:"field",decorators:[(0,d.SB)()],key:"_processingAdd",value(){return!1}},{kind:"field",decorators:[(0,d.SB)()],key:"_groupName",value(){return""}},{kind:"field",decorators:[(0,d.SB)()],key:"_groupId",value:void 0},{kind:"field",decorators:[(0,d.IO)("zha-device-endpoint-data-table",!0)],key:"_zhaDevicesDataTable",value:void 0},{kind:"field",key:"_firstUpdatedCalled",value(){return!1}},{kind:"field",key:"_selectedDevicesToAdd",value(){return[]}},{kind:"method",key:"connectedCallback",value:function(){(0,s.Z)(t,"connectedCallback",this,3)([]),this.hass&&this._firstUpdatedCalled&&this._fetchData()}},{kind:"method",key:"firstUpdated",value:function(e){(0,s.Z)(t,"firstUpdated",this,3)([e]),this.hass&&this._fetchData(),this._firstUpdatedCalled=!0}},{kind:"method",key:"render",value:function(){return(0,n.dy)(h||(h=p` <hass-subpage .hass="${0}" .narrow="${0}" .header="${0}"> <ha-config-section .isWide="${0}"> <p slot="introduction"> ${0} </p> <ha-textfield type="string" .value="${0}" @change="${0}" .placeholder="${0}"></ha-textfield> <ha-textfield type="number" .value="${0}" @change="${0}" .placeholder="${0}"></ha-textfield> <div class="header"> ${0} </div> <zha-device-endpoint-data-table .hass="${0}" .deviceEndpoints="${0}" .narrow="${0}" selectable @selection-changed="${0}"> </zha-device-endpoint-data-table> <div class="buttons"> <mwc-button .disabled="${0}" @click="${0}" class="button"> ${0} ${0}</mwc-button> </div> </ha-config-section> </hass-subpage> `),this.hass,this.narrow,this.hass.localize("ui.panel.config.zha.groups.create_group"),!this.narrow,this.hass.localize("ui.panel.config.zha.groups.create_group_details"),this._groupName,this._handleNameChange,this.hass.localize("ui.panel.config.zha.groups.group_name_placeholder"),this._groupId,this._handleGroupIdChange,this.hass.localize("ui.panel.config.zha.groups.group_id_placeholder"),this.hass.localize("ui.panel.config.zha.groups.add_members"),this.hass,this.deviceEndpoints,this.narrow,this._handleAddSelectionChanged,!this._groupName||""===this._groupName||this._processingAdd,this._createGroup,this._processingAdd?(0,n.dy)(l||(l=p`<ha-circular-progress indeterminate size="small" .ariaLabel="${0}"></ha-circular-progress>`),this.hass.localize("ui.panel.config.zha.groups.creating_group")):"",this.hass.localize("ui.panel.config.zha.groups.create"))}},{kind:"method",key:"_fetchData",value:async function(){this.deviceEndpoints=await(0,r.pT)(this.hass)}},{kind:"method",key:"_handleAddSelectionChanged",value:function(e){this._selectedDevicesToAdd=e.detail.value}},{kind:"method",key:"_createGroup",value:async function(){this._processingAdd=!0;const e=this._selectedDevicesToAdd.map((e=>{const a=e.split("_");return{ieee:a[0],endpoint_id:a[1]}})),a=this._groupId?parseInt(this._groupId,10):void 0,t=await(0,r.Rp)(this.hass,this._groupName,a,e);this._selectedDevicesToAdd=[],this._processingAdd=!1,this._groupName="",this._zhaDevicesDataTable.clearSelection(),(0,o.c)(`/config/zha/group/${t.group_id}`,{replace:!0})}},{kind:"method",key:"_handleGroupIdChange",value:function(e){this._groupId=e.target.value}},{kind:"method",key:"_handleNameChange",value:function(e){this._groupName=e.target.value||""}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,n.iv)(c||(c=p`.header{font-family:var(--paper-font-display1_-_font-family);-webkit-font-smoothing:var(--paper-font-display1_-_-webkit-font-smoothing);font-size:var(--paper-font-display1_-_font-size);font-weight:var(--paper-font-display1_-_font-weight);letter-spacing:var(--paper-font-display1_-_letter-spacing);line-height:var(--paper-font-display1_-_line-height);opacity:var(--dark-primary-opacity)}.button{float:right}ha-config-section :last-child{padding-bottom:24px}.buttons{align-items:flex-end;padding:8px}.buttons .warning{--mdc-theme-primary:var(--error-color)}`))]}}]}}),n.oi)}}]);
//# sourceMappingURL=40615.c19e0c05a859871d.js.map