"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["86547"],{20612:function(e,t,i){i.a(e,(async function(e,t){try{var s=i(61701),a=(i(71695),i(47021),i(57243)),o=i(50778),n=(i(37583),i(56032)),l=e([n]);n=(l.then?(await l)():l)[0];let r,d,c=e=>e;(0,s.Z)([(0,o.Mo)("ha-data-table-icon")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)()],key:"tooltip",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"path",value:void 0},{kind:"method",key:"render",value:function(){return(0,a.dy)(r||(r=c` <ha-tooltip .content="${0}"> <ha-svg-icon .path="${0}"></ha-svg-icon> </ha-tooltip> `),this.tooltip,this.path)}},{kind:"field",static:!0,key:"styles",value(){return(0,a.iv)(d||(d=c`:host{display:inline-block;position:relative}ha-svg-icon{color:var(--secondary-text-color)}`))}}]}}),a.oi);t()}catch(r){t(r)}}))},20130:function(e,t,i){var s=i(61701),a=i(72621),o=(i(71695),i(47021),i(39785)),n=i(52876),l=i(50778),r=i(57243),d=i(5111);let c,h,u,p=e=>e;(0,s.Z)([(0,l.Mo)("ha-fab")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"firstUpdated",value:function(e){(0,a.Z)(i,"firstUpdated",this,3)([e]),this.style.setProperty("--mdc-theme-secondary","var(--primary-color)")}},{kind:"field",static:!0,key:"styles",value(){return[n.W,(0,r.iv)(c||(c=p`:host .mdc-fab--extended .mdc-fab__icon{margin-inline-start:-8px;margin-inline-end:12px;direction:var(--direction)}:disabled{--mdc-theme-secondary:var(--disabled-text-color);pointer-events:none}`)),"rtl"===d.E.document.dir?(0,r.iv)(h||(h=p`:host .mdc-fab--extended .mdc-fab__icon{direction:rtl}`)):(0,r.iv)(u||(u=p``))]}}]}}),o._)},56032:function(e,t,i){i.a(e,(async function(e,t){try{var s=i(61701),a=(i(71695),i(47021),i(80519)),o=i(1261),n=i(57243),l=i(50778),r=i(85605),d=e([a]);a=(d.then?(await d)():d)[0];let c,h=e=>e;(0,r.jx)("tooltip.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:150,easing:"ease"}}),(0,r.jx)("tooltip.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:400,easing:"ease"}});(0,s.Z)([(0,l.Mo)("ha-tooltip")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",static:!0,key:"styles",value(){return[o.Z,(0,n.iv)(c||(c=h`:host{--sl-tooltip-background-color:var(--secondary-background-color);--sl-tooltip-color:var(--primary-text-color);--sl-tooltip-font-family:Roboto,sans-serif;--sl-tooltip-font-size:12px;--sl-tooltip-font-weight:normal;--sl-tooltip-line-height:1;--sl-tooltip-padding:8px;--sl-tooltip-border-radius:var(--ha-tooltip-border-radius, 4px);--sl-tooltip-arrow-size:var(--ha-tooltip-arrow-size, 8px);--sl-z-index-tooltip:var(--ha-tooltip-z-index, 1000)}`))]}}]}}),a.Z);t()}catch(c){t(c)}}))},4242:function(e,t,i){i.d(t,{CE:()=>a,FH:()=>c,Nq:()=>l,Pb:()=>s,fm:()=>d,h8:()=>r,r4:()=>n,uh:()=>o});i(92745),i(9359),i(70104),i(19423),i(40251),i(81804);const s="system-admin",a="system-users",o=async e=>e.callWS({type:"config/auth/list"}),n=async(e,t,i,s)=>e.callWS({type:"config/auth/create",name:t,group_ids:i,local_only:s}),l=async(e,t,i)=>e.callWS(Object.assign(Object.assign({},i),{},{type:"config/auth/update",user_id:t})),r=async(e,t)=>e.callWS({type:"config/auth/delete",user_id:t}),d=e=>e?e.trim().split(" ").slice(0,3).map((e=>e.substring(0,1))).join(""):"?",c=(e,t,i)=>{const s=[],a=t=>e.localize(`ui.panel.config.users.${t}`);return t.is_owner&&s.push(["M12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2M12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4S20 7.58 20 12C20 16.42 16.42 20 12 20M8 14L7 8L10 10L12 7L14 10L17 8L16 14H8M8.56 16C8.22 16 8 15.78 8 15.44V15H16V15.44C16 15.78 15.78 16 15.44 16H8.56Z",a("is_owner")]),i&&t.system_generated&&s.push(["M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z",a("is_system")]),t.local_only&&s.push(["M12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12 16.4 20 12 20M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M11 14H13V17H16V12H18L12 7L6 12H8V17H11V14",a("is_local")]),t.is_active||s.push(["M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z",a("is_not_active")]),s}},89321:function(e,t,i){i.a(e,(async function(e,s){try{i.r(t),i.d(t,{HaConfigUsers:()=>S});var a=i(61701),o=i(72621),n=(i(71695),i(84283),i(9359),i(56475),i(1331),i(31526),i(70104),i(19423),i(40251),i(47021),i(57243)),l=i(50778),r=i(27486),d=i(20612),c=(i(20130),i(37583),i(4242)),h=i(76131),u=i(38419),p=i(82967),f=i(77419),y=i(46623),m=i(68958),g=e([d,u]);[d,u]=g.then?(await g)():g;let v,b,_,k,C,w,$,H=e=>e;const x="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",P="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";let S=(0,a.Z)([(0,l.Mo)("ha-config-users")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:"is-wide",type:Boolean})],key:"isWide",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"narrow",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_users",value(){return[]}},{kind:"field",decorators:[(0,m.t)({key:"users-table-sort",state:!1,subscribe:!1})],key:"_activeSorting",value:void 0},{kind:"field",decorators:[(0,m.t)({key:"users-table-grouping",state:!1,subscribe:!1})],key:"_activeGrouping",value:void 0},{kind:"field",decorators:[(0,m.t)({key:"users-table-column-order",state:!1,subscribe:!1})],key:"_activeColumnOrder",value:void 0},{kind:"field",decorators:[(0,m.t)({key:"users-table-hidden-columns",state:!1,subscribe:!1})],key:"_activeHiddenColumns",value:void 0},{kind:"field",decorators:[(0,m.t)({storage:"sessionStorage",key:"users-table-search",state:!0,subscribe:!1})],key:"_filter",value(){return""}},{kind:"field",decorators:[(0,m.t)({key:"users-table-collapsed",state:!1,subscribe:!1})],key:"_activeCollapsed",value:void 0},{kind:"field",key:"_columns",value(){return(0,r.Z)(((e,t)=>({name:{title:t("ui.panel.config.users.picker.headers.name"),main:!0,sortable:!0,filterable:!0,direction:"asc",flex:2},username:{title:t("ui.panel.config.users.picker.headers.username"),sortable:!0,filterable:!0,direction:"asc",template:e=>(0,n.dy)(v||(v=H`${0}`),e.username||"—")},group:{title:t("ui.panel.config.users.picker.headers.group"),sortable:!0,filterable:!0,groupable:!0,direction:"asc"},is_active:{title:this.hass.localize("ui.panel.config.users.picker.headers.is_active"),type:"icon",sortable:!0,filterable:!0,hidden:e,template:e=>e.is_active?(0,n.dy)(b||(b=H`<ha-svg-icon .path="${0}"></ha-svg-icon>`),x):""},system_generated:{title:this.hass.localize("ui.panel.config.users.picker.headers.system"),type:"icon",sortable:!0,filterable:!0,hidden:e,template:e=>e.system_generated?(0,n.dy)(_||(_=H`<ha-svg-icon .path="${0}"></ha-svg-icon>`),x):""},local_only:{title:this.hass.localize("ui.panel.config.users.picker.headers.local"),type:"icon",sortable:!0,filterable:!0,hidden:e,template:e=>e.local_only?(0,n.dy)(k||(k=H`<ha-svg-icon .path="${0}"></ha-svg-icon>`),x):""},icons:{title:"",label:this.hass.localize("ui.panel.config.users.picker.headers.icon"),type:"icon",sortable:!1,filterable:!1,minWidth:"104px",hidden:!e,showNarrow:!0,template:e=>{const t=(0,c.FH)(this.hass,e,!1);return(0,n.dy)(C||(C=H`${0}`),t.map((([e,t])=>(0,n.dy)(w||(w=H`<ha-data-table-icon .path="${0}" .tooltip="${0}"></ha-data-table-icon>`),e,t))))}}})))}},{kind:"method",key:"firstUpdated",value:function(e){(0,o.Z)(i,"firstUpdated",this,3)([e]),this._fetchUsers()}},{kind:"method",key:"render",value:function(){return(0,n.dy)($||($=H` <hass-tabs-subpage-data-table .hass="${0}" .narrow="${0}" .route="${0}" back-path="/config" .tabs="${0}" .columns="${0}" .data="${0}" .columnOrder="${0}" .hiddenColumns="${0}" @columns-changed="${0}" .initialGroupColumn="${0}" .initialCollapsedGroups="${0}" .initialSorting="${0}" @sorting-changed="${0}" @grouping-changed="${0}" @collapsed-changed="${0}" .filter="${0}" @search-changed="${0}" @row-click="${0}" has-fab clickable> <ha-fab slot="fab" .label="${0}" extended @click="${0}"> <ha-svg-icon slot="icon" .path="${0}"></ha-svg-icon> </ha-fab> </hass-tabs-subpage-data-table> `),this.hass,this.narrow,this.route,p.configSections.persons,this._columns(this.narrow,this.hass.localize),this._userData(this._users,this.hass.localize),this._activeColumnOrder,this._activeHiddenColumns,this._handleColumnsChanged,this._activeGrouping,this._activeCollapsed,this._activeSorting,this._handleSortingChanged,this._handleGroupingChanged,this._handleCollapseChanged,this._filter,this._handleSearchChange,this._editUser,this.hass.localize("ui.panel.config.users.picker.add_user"),this._addUser,P)}},{kind:"field",key:"_userData",value(){return(0,r.Z)(((e,t)=>e.map((e=>Object.assign(Object.assign({},e),{},{name:e.name||t("ui.panel.config.users.editor.unnamed_user"),group:t(`groups.${e.group_ids[0]}`)})))))}},{kind:"method",key:"_fetchUsers",value:async function(){this._users=await(0,c.uh)(this.hass),this._users.forEach((e=>{e.is_owner&&e.group_ids.unshift("owner")}))}},{kind:"method",key:"_editUser",value:function(e){const t=e.detail.id,i=this._users.find((e=>e.id===t));i&&(0,y.g)(this,{entry:i,replaceEntry:e=>{this._users=this._users.map((t=>t.id===e.id?e:t))},updateEntry:async e=>{const t=await(0,c.Nq)(this.hass,i.id,e);this._users=this._users.map((e=>e===i?t.user:e))},removeEntry:async()=>{if(!(await(0,h.showConfirmationDialog)(this,{title:this.hass.localize("ui.panel.config.users.editor.confirm_user_deletion_title",{name:i.name}),text:this.hass.localize("ui.panel.config.users.editor.confirm_user_deletion_text"),dismissText:this.hass.localize("ui.common.cancel"),confirmText:this.hass.localize("ui.common.delete"),destructive:!0})))return!1;try{return await(0,c.h8)(this.hass,i.id),this._users=this._users.filter((e=>e!==i)),!0}catch(e){return!1}}})}},{kind:"method",key:"_addUser",value:function(){(0,f.G)(this,{userAddedCallback:async e=>{e&&(this._users=[...this._users,e])}})}},{kind:"method",key:"_handleSortingChanged",value:function(e){this._activeSorting=e.detail}},{kind:"method",key:"_handleGroupingChanged",value:function(e){this._activeGrouping=e.detail.value}},{kind:"method",key:"_handleCollapseChanged",value:function(e){this._activeCollapsed=e.detail.value}},{kind:"method",key:"_handleSearchChange",value:function(e){this._filter=e.detail.value}},{kind:"method",key:"_handleColumnsChanged",value:function(e){this._activeColumnOrder=e.detail.columnOrder,this._activeHiddenColumns=e.detail.hiddenColumns}}]}}),n.oi);s()}catch(v){s(v)}}))},77419:function(e,t,i){i.d(t,{G:()=>o});i(71695),i(40251),i(47021);var s=i(36522);const a=()=>Promise.all([i.e("5604"),i.e("36265")]).then(i.bind(i,78845)),o=(e,t)=>{(0,s.B)(e,"show-dialog",{dialogTag:"dialog-add-user",dialogImport:a,dialogParams:t})}},46623:function(e,t,i){i.d(t,{g:()=>o});i(71695),i(40251),i(47021);var s=i(36522);const a=()=>Promise.all([i.e("15903"),i.e("88443")]).then(i.bind(i,20742)),o=(e,t)=>{(0,s.B)(e,"show-dialog",{dialogTag:"dialog-user-detail",dialogImport:a,dialogParams:t})}},16485:function(e,t,i){i.a(e,(async function(e,t){try{i(71695),i(92745),i(40251),i(47021);var s=i(61449),a=i(40574),o=i(30532),n=i(41674),l=i(49722),r=i(76632),d=i(7884),c=i(35185),h=i(65401),u=i(44180),p=i(49447);const e=async()=>{const e=(0,u.sS)(),t=[];(0,o.shouldPolyfill)()&&await Promise.all([i.e("80210"),i.e("74055")]).then(i.bind(i,98133)),(0,l.shouldPolyfill)()&&await Promise.all([i.e("2142"),i.e("75297"),i.e("80210"),i.e("60251")]).then(i.bind(i,59095)),(0,s.shouldPolyfill)(e)&&t.push(Promise.all([i.e("2142"),i.e("75297"),i.e("68250")]).then(i.bind(i,80561)).then((()=>(0,p.H)()))),(0,h.shouldPolyfill)()&&t.push(Promise.all([i.e("2142"),i.e("75297"),i.e("65578")]).then(i.bind(i,97995))),(0,a.shouldPolyfill)(e)&&t.push(Promise.all([i.e("2142"),i.e("75297"),i.e("59826")]).then(i.bind(i,31514))),(0,n.shouldPolyfill)(e)&&t.push(Promise.all([i.e("2142"),i.e("75297"),i.e("23649")]).then(i.bind(i,93840))),(0,r.shouldPolyfill)(e)&&t.push(Promise.all([i.e("2142"),i.e("75297"),i.e("42831")]).then(i.bind(i,29559))),(0,d.shouldPolyfill)(e)&&t.push(Promise.all([i.e("2142"),i.e("75297"),i.e("57377")]).then(i.bind(i,39030)).then((()=>i.e("61236").then(i.t.bind(i,4121,23))))),(0,c.shouldPolyfill)(e)&&t.push(Promise.all([i.e("2142"),i.e("75297"),i.e("13870")]).then(i.bind(i,74546))),0!==t.length&&await Promise.all(t).then((()=>(0,p.n)(e)))};await e(),t()}catch(f){t(f)}}),1)}}]);
//# sourceMappingURL=86547.4d8f2598cc7afc04.js.map