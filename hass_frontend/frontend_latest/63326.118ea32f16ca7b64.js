export const __webpack_ids__=["63326"];export const __webpack_modules__={94616:function(e,o,a){a.d(o,{AC:()=>V,AV:()=>r,De:()=>u,H9:()=>C,LI:()=>l,LV:()=>p,Mc:()=>d,QD:()=>H,VU:()=>n,_Y:()=>t,_t:()=>c,bi:()=>s,dV:()=>g,dn:()=>h,u_:()=>i});const t=({hass:e,...o})=>e.callApi("POST","cloud/login",o),n=e=>e.callApi("POST","cloud/logout"),i=(e,o)=>e.callApi("POST","cloud/forgot_password",{email:o}),s=(e,o,a)=>e.callApi("POST","cloud/register",{email:o,password:a}),c=(e,o)=>e.callApi("POST","cloud/resend_confirm",{email:o}),l=e=>e.callWS({type:"cloud/status"}),r=(e,o)=>e.callWS({type:"cloud/cloudhook/create",webhook_id:o}),d=(e,o)=>e.callWS({type:"cloud/cloudhook/delete",webhook_id:o}),h=e=>e.callWS({type:"cloud/remote/connect"}),C=e=>e.callWS({type:"cloud/remote/disconnect"}),u=e=>e.callWS({type:"cloud/subscription"}),p=(e,o)=>e.callWS({type:"cloud/update_prefs",...o}),g=e=>e.callWS({type:"cloud/remove_data"}),H=(e,o,a)=>e.callWS({type:"cloud/google_assistant/entities/update",entity_id:o,disable_2fa:a}),V=e=>e.callApi("GET","cloud/support_package")},63860:function(e,o,a){a.d(o,{$0:()=>d,NT:()=>s,f4:()=>l,jo:()=>r,uD:()=>h});var t=a(62212),n=a(1416),i=a(22381);const s=e=>e.sendMessagePromise({type:"config/label_registry/list"}).then((e=>e.sort(((e,o)=>(0,n.$K)(e.name,o.name))))),c=(e,o)=>e.subscribeEvents((0,i.D)((()=>s(e).then((e=>o.setState(e,!0)))),500,!0),"label_registry_updated"),l=(e,o)=>(0,t.B)("_labelRegistry",s,c,e,o),r=(e,o)=>e.callWS({type:"config/label_registry/create",...o}),d=(e,o,a)=>e.callWS({type:"config/label_registry/update",label_id:o,...a}),h=(e,o)=>e.callWS({type:"config/label_registry/delete",label_id:o})},6736:function(e,o,a){a.d(o,{f:()=>s});var t=a(44249),n=a(72621),i=(a(9359),a(52924),a(15093));const s=e=>(0,t.Z)(null,(function(e,o){class a extends o{constructor(...o){super(...o),e(this)}}return{F:a,d:[{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,n.Z)(a,"connectedCallback",this,3)([]),this._checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,n.Z)(a,"disconnectedCallback",this,3)([]),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if((0,n.Z)(a,"updated",this,3)([e]),e.has("hass"))this._checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const o of e.keys())if(this.hassSubscribeRequiredHostProps.includes(o))return void this._checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"_checkSubscribed",value:function(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&!this.hassSubscribeRequiredHostProps?.some((e=>void 0===this[e]))&&(this.__unsubs=this.hassSubscribe())}}]}}),e)},82967:function(e,o,a){a.r(o),a.d(o,{configSections:()=>P});var t=a(44249),n=a(72621),i=(a(92745),a(60738)),s=a(15093),c=a(72344),l=a(62201),r=a(94616),d=a(30635),h=a(63318),C=a(63860),u=a(24312),p=a(6736);const g="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",H="M12,3A9,9 0 0,0 3,12H0L4,16L8,12H5A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19C10.5,19 9.09,18.5 7.94,17.7L6.5,19.14C8.04,20.3 9.94,21 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12Z",V="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z",f="M3 6H21V4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H7V18H3V6M13 12H9V13.78C8.39 14.33 8 15.11 8 16C8 16.89 8.39 17.67 9 18.22V20H13V18.22C13.61 17.67 14 16.88 14 16S13.61 14.33 13 13.78V12M11 17.5C10.17 17.5 9.5 16.83 9.5 16S10.17 14.5 11 14.5 12.5 15.17 12.5 16 11.83 17.5 11 17.5M22 8H16C15.5 8 15 8.5 15 9V19C15 19.5 15.5 20 16 20H22C22.5 20 23 19.5 23 19V9C23 8.5 22.5 8 22 8M21 18H17V10H21V18Z",b="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z",A="M18,6H13A2,2 0 0,0 11,8V10.28C10.41,10.62 10,11.26 10,12A2,2 0 0,0 12,14C13.11,14 14,13.1 14,12C14,11.26 13.6,10.62 13,10.28V8H16V16H8V8H10V6H8L6,6V18H18M20,20H4V4H20M20,2H4A2,2 0 0,0 2,4V20A2,2 0 0,0 4,22H20C21.11,22 22,21.1 22,20V4C22,2.89 21.11,2 20,2Z",m="M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5A2.5,2.5 0 0,0 10.5,1A2.5,2.5 0 0,0 8,3.5V5H4A2,2 0 0,0 2,7V10.8H3.5C5,10.8 6.2,12 6.2,13.5C6.2,15 5,16.2 3.5,16.2H2V20A2,2 0 0,0 4,22H7.8V20.5C7.8,19 9,17.8 10.5,17.8C12,17.8 13.2,19 13.2,20.5V22H17A2,2 0 0,0 19,20V16H20.5A2.5,2.5 0 0,0 23,13.5A2.5,2.5 0 0,0 20.5,11Z",y="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z",L="M11,13.5V21.5H3V13.5H11M12,2L17.5,11H6.5L12,2M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13Z",M="M12.5 7C12.5 5.89 13.39 5 14.5 5H18C19.1 5 20 5.9 20 7V9.16C18.84 9.57 18 10.67 18 11.97V14H12.5V7M6 11.96V14H11.5V7C11.5 5.89 10.61 5 9.5 5H6C4.9 5 4 5.9 4 7V9.15C5.16 9.56 6 10.67 6 11.96M20.66 10.03C19.68 10.19 19 11.12 19 12.12V15H5V12C5 10.9 4.11 10 3 10S1 10.9 1 12V17C1 18.1 1.9 19 3 19V21H5V19H19V21H21V19C22.1 19 23 18.1 23 17V12C23 10.79 21.91 9.82 20.66 10.03Z",k="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z",P={dashboard:[{path:"/config/integrations",translationKey:"devices",iconPath:f,iconColor:"#0D47A1",core:!0},{path:"/config/automation",translationKey:"automations",iconPath:y,iconColor:"#518C43",core:!0},{path:"/config/areas",translationKey:"areas",iconPath:M,iconColor:"#E48629",component:"zone"},{path:"/hassio",translationKey:"supervisor",iconPath:m,iconColor:"#F1C447",component:"hassio"},{path:"/config/lovelace/dashboards",translationKey:"dashboards",iconPath:k,iconColor:"#B1345C",component:"lovelace"},{path:"/config/voice-assistants",translationKey:"voice_assistants",iconPath:b,iconColor:"#3263C3"},{path:"/config/tags",translationKey:"tags",iconPath:A,iconColor:"#616161",component:"tag"},{path:"/config/person",translationKey:"people",iconPath:g,iconColor:"#5A87FA",component:["person","users"]},{path:"#external-app-configuration",translationKey:"companion",iconPath:"M9.82,12.5C9.84,12.33 9.86,12.17 9.86,12C9.86,11.83 9.84,11.67 9.82,11.5L10.9,10.69C11,10.62 11,10.5 10.96,10.37L9.93,8.64C9.87,8.53 9.73,8.5 9.62,8.53L8.34,9.03C8.07,8.83 7.78,8.67 7.47,8.54L7.27,7.21C7.27,7.09 7.16,7 7.03,7H5C4.85,7 4.74,7.09 4.72,7.21L4.5,8.53C4.21,8.65 3.92,8.83 3.65,9L2.37,8.5C2.25,8.47 2.12,8.5 2.06,8.63L1.03,10.36C0.97,10.5 1,10.61 1.1,10.69L2.18,11.5C2.16,11.67 2.15,11.84 2.15,12C2.15,12.17 2.17,12.33 2.19,12.5L1.1,13.32C1,13.39 1,13.53 1.04,13.64L2.07,15.37C2.13,15.5 2.27,15.5 2.38,15.5L3.66,15C3.93,15.18 4.22,15.34 4.53,15.47L4.73,16.79C4.74,16.91 4.85,17 5,17H7.04C7.17,17 7.28,16.91 7.29,16.79L7.5,15.47C7.8,15.35 8.09,15.17 8.36,15L9.64,15.5C9.76,15.53 9.89,15.5 9.95,15.37L11,13.64C11.04,13.53 11,13.4 10.92,13.32L9.82,12.5M6,13.75C5,13.75 4.2,12.97 4.2,12C4.2,11.03 5,10.25 6,10.25C7,10.25 7.8,11.03 7.8,12C7.8,12.97 7,13.75 6,13.75M17,1H7A2,2 0 0,0 5,3V6H7V4H17V20H7V18H5V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1Z",iconColor:"#8E24AA"},{path:"/config/system",translationKey:"system",iconPath:V,iconColor:"#301ABE",core:!0},{path:"/config/info",translationKey:"about",iconPath:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",iconColor:"#4A5963",core:!0}],backup:[{path:"/config/backup",translationKey:"ui.panel.config.backup.caption",iconPath:H,iconColor:"#4084CD",component:"backup"}],devices:[{component:"integrations",path:"/config/integrations",translationKey:"ui.panel.config.integrations.caption",iconPath:m,iconColor:"#2D338F",core:!0},{component:"devices",path:"/config/devices",translationKey:"ui.panel.config.devices.caption",iconPath:f,iconColor:"#2D338F",core:!0},{component:"entities",path:"/config/entities",translationKey:"ui.panel.config.entities.caption",iconPath:L,iconColor:"#2D338F",core:!0},{component:"helpers",path:"/config/helpers",translationKey:"ui.panel.config.helpers.caption",iconPath:"M21.71 20.29L20.29 21.71A1 1 0 0 1 18.88 21.71L7 9.85A3.81 3.81 0 0 1 6 10A4 4 0 0 1 2.22 4.7L4.76 7.24L5.29 6.71L6.71 5.29L7.24 4.76L4.7 2.22A4 4 0 0 1 10 6A3.81 3.81 0 0 1 9.85 7L21.71 18.88A1 1 0 0 1 21.71 20.29M2.29 18.88A1 1 0 0 0 2.29 20.29L3.71 21.71A1 1 0 0 0 5.12 21.71L10.59 16.25L7.76 13.42M20 2L16 4V6L13.83 8.17L15.83 10.17L18 8H20L22 4Z",iconColor:"#4D2EA4",core:!0}],automations:[{component:"automation",path:"/config/automation",translationKey:"ui.panel.config.automation.caption",iconPath:y,iconColor:"#518C43"},{component:"scene",path:"/config/scene",translationKey:"ui.panel.config.scene.caption",iconPath:"M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z",iconColor:"#518C43"},{component:"script",path:"/config/script",translationKey:"ui.panel.config.script.caption",iconPath:"M17.8,20C17.4,21.2 16.3,22 15,22H5C3.3,22 2,20.7 2,19V18H5L14.2,18C14.6,19.2 15.7,20 17,20H17.8M19,2C20.7,2 22,3.3 22,5V6H20V5C20,4.4 19.6,4 19,4C18.4,4 18,4.4 18,5V18H17C16.4,18 16,17.6 16,17V16H5V5C5,3.3 6.3,2 8,2H19M8,6V8H15V6H8M8,10V12H14V10H8Z",iconColor:"#518C43"},{component:"blueprint",path:"/config/blueprint",translationKey:"ui.panel.config.blueprint.caption",iconPath:"M2.53,19.65L3.87,20.21V11.18L1.44,17.04C1.03,18.06 1.5,19.23 2.53,19.65M22.03,15.95L17.07,4C16.76,3.23 16.03,2.77 15.26,2.75C15,2.75 14.73,2.79 14.47,2.9L7.1,5.95C6.35,6.26 5.89,7 5.87,7.75C5.86,8 5.91,8.29 6,8.55L11,20.5C11.29,21.28 12.03,21.74 12.81,21.75C13.07,21.75 13.33,21.7 13.58,21.6L20.94,18.55C21.96,18.13 22.45,16.96 22.03,15.95M7.88,8.75A1,1 0 0,1 6.88,7.75A1,1 0 0,1 7.88,6.75C8.43,6.75 8.88,7.2 8.88,7.75C8.88,8.3 8.43,8.75 7.88,8.75M5.88,19.75A2,2 0 0,0 7.88,21.75H9.33L5.88,13.41V19.75Z",iconColor:"#518C43"}],tags:[{component:"tag",path:"/config/tags",translationKey:"ui.panel.config.tag.caption",iconPath:A,iconColor:"#616161"}],voice_assistants:[{path:"/config/voice-assistants",translationKey:"ui.panel.config.dashboard.voice_assistants.main",iconPath:b,iconColor:"#3263C3"}],energy:[{component:"energy",path:"/config/energy",translationKey:"ui.panel.config.energy.caption",iconPath:"M11 15H6L13 1V9H18L11 23V15Z",iconColor:"#F1C447"}],lovelace:[{component:"lovelace",path:"/config/lovelace/dashboards",translationKey:"ui.panel.config.lovelace.caption",iconPath:k,iconColor:"#B1345C"}],persons:[{component:"person",path:"/config/person",translationKey:"ui.panel.config.person.caption",iconPath:g,iconColor:"#5A87FA"},{component:"users",path:"/config/users",translationKey:"ui.panel.config.users.caption",iconPath:"M22,4H14V7H10V4H2A2,2 0 0,0 0,6V20A2,2 0 0,0 2,22H22A2,2 0 0,0 24,20V6A2,2 0 0,0 22,4M8,9A2,2 0 0,1 10,11A2,2 0 0,1 8,13A2,2 0 0,1 6,11A2,2 0 0,1 8,9M12,17H4V16C4,14.67 6.67,14 8,14C9.33,14 12,14.67 12,16V17M20,18H14V16H20V18M20,14H14V12H20V14M20,10H14V8H20V10M13,6H11V2H13V6Z",iconColor:"#5A87FA",core:!0,advancedOnly:!0}],areas:[{component:"areas",path:"/config/areas",translationKey:"ui.panel.config.areas.caption",iconPath:M,iconColor:"#2D338F",core:!0},{component:"labels",path:"/config/labels",translationKey:"ui.panel.config.labels.caption",iconPath:"M17.63,5.84C17.27,5.33 16.67,5 16,5H5A2,2 0 0,0 3,7V17A2,2 0 0,0 5,19H16C16.67,19 17.27,18.66 17.63,18.15L22,12L17.63,5.84Z",iconColor:"#2D338F",core:!0},{component:"zone",path:"/config/zone",translationKey:"ui.panel.config.zone.caption",iconPath:"M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z",iconColor:"#E48629"}],general:[{path:"/config/general",translationKey:"core",iconPath:V,iconColor:"#653249",core:!0},{path:"/config/updates",translationKey:"updates",iconPath:"M21,10.12H14.22L16.96,7.3C14.23,4.6 9.81,4.5 7.08,7.2C4.35,9.91 4.35,14.28 7.08,17C9.81,19.7 14.23,19.7 16.96,17C18.32,15.65 19,14.08 19,12.1H21C21,14.08 20.12,16.65 18.36,18.39C14.85,21.87 9.15,21.87 5.64,18.39C2.14,14.92 2.11,9.28 5.62,5.81C9.13,2.34 14.76,2.34 18.27,5.81L21,3V10.12M12.5,8V12.25L16,14.33L15.28,15.54L11,13V8H12.5Z",iconColor:"#3B808E"},{path:"/config/repairs",translationKey:"repairs",iconPath:"M18,1.83C17.5,1.83 17,2 16.59,2.41C13.72,5.28 8,11 8,11L9.5,12.5L6,16H4L2,20L4,22L8,20V18L11.5,14.5L13,16C13,16 18.72,10.28 21.59,7.41C22.21,6.5 22.37,5.37 21.59,4.59L19.41,2.41C19,2 18.5,1.83 18,1.83M18,4L20,6L13,13L11,11L18,4Z",iconColor:"#5c995c"},{component:"logs",path:"/config/logs",translationKey:"logs",iconPath:"M18 7C16.9 7 16 7.9 16 9V15C16 16.1 16.9 17 18 17H20C21.1 17 22 16.1 22 15V11H20V15H18V9H22V7H18M2 7V17H8V15H4V7H2M11 7C9.9 7 9 7.9 9 9V15C9 16.1 9.9 17 11 17H13C14.1 17 15 16.1 15 15V9C15 7.9 14.1 7 13 7H11M11 9H13V15H11V9Z",iconColor:"#C65326",core:!0},{path:"/config/backup",translationKey:"backup",iconPath:H,iconColor:"#0D47A1",component:"backup"},{path:"/config/analytics",translationKey:"analytics",iconPath:L,iconColor:"#f1c447"},{path:"/config/network",translationKey:"network",iconPath:"M17,3A2,2 0 0,1 19,5V15A2,2 0 0,1 17,17H13V19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H7C5.89,17 5,16.1 5,15V5A2,2 0 0,1 7,3H17Z",iconColor:"#B1345C"},{path:"/config/storage",translationKey:"storage",iconPath:"M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z",iconColor:"#518C43",component:"hassio"},{path:"/config/hardware",translationKey:"hardware",iconPath:"M17,17H7V7H17M21,11V9H19V7C19,5.89 18.1,5 17,5H15V3H13V5H11V3H9V5H7C5.89,5 5,5.89 5,7V9H3V11H5V13H3V15H5V17A2,2 0 0,0 7,19H9V21H11V19H13V21H15V19H17A2,2 0 0,0 19,17V15H21V13H19V11M13,13H11V11H13M15,9H9V15H15V9Z",iconColor:"#301A8E",component:["hassio","hardware"]}],about:[{component:"info",path:"/config/info",translationKey:"ui.panel.config.info.caption",iconPath:"M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",iconColor:"#4A5963",core:!0}]};(0,t.Z)([(0,s.Mo)("ha-panel-config")],(function(e,o){class t extends o{constructor(...o){super(...o),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",key:"_entitiesContext",value(){return new i.HQ(this,{context:d.we,initialValue:[]})}},{kind:"field",key:"_labelsContext",value(){return new i.HQ(this,{context:d.TD,initialValue:[]})}},{kind:"method",key:"hassSubscribe",value:function(){return[(0,h.LM)(this.hass.connection,(e=>{this._entitiesContext.setValue(e)})),(0,C.f4)(this.hass.connection,(e=>{this._labelsContext.setValue(e)}))]}},{kind:"field",key:"routerOptions",value:()=>({defaultPage:"dashboard",routes:{analytics:{tag:"ha-config-section-analytics",load:()=>Promise.all([a.e("72206"),a.e("25618"),a.e("29570"),a.e("99287"),a.e("46687"),a.e("52968"),a.e("12561")]).then(a.bind(a,38963))},areas:{tag:"ha-config-areas",load:()=>Promise.all([a.e("72206"),a.e("91552"),a.e("25618"),a.e("78456"),a.e("56898"),a.e("42950"),a.e("99287"),a.e("41103"),a.e("71588"),a.e("90294"),a.e("61449"),a.e("18865"),a.e("88975"),a.e("10355"),a.e("65499"),a.e("69518"),a.e("46821")]).then(a.bind(a,61186))},"voice-assistants":{tag:"ha-config-voice-assistants",load:()=>a.e("84218").then(a.bind(a,8878))},automation:{tag:"ha-config-automation",load:()=>Promise.all([a.e("46379"),a.e("66031"),a.e("72206"),a.e("91552"),a.e("97983"),a.e("25618"),a.e("78456"),a.e("24199"),a.e("41258"),a.e("56898"),a.e("27506"),a.e("35671"),a.e("42950"),a.e("83895"),a.e("29570"),a.e("65505"),a.e("99287"),a.e("5080"),a.e("41103"),a.e("8795"),a.e("50408"),a.e("71588"),a.e("81465"),a.e("27024"),a.e("77756"),a.e("6900"),a.e("2981"),a.e("90294"),a.e("1037"),a.e("76945"),a.e("20979"),a.e("30751"),a.e("18865"),a.e("27090"),a.e("88975"),a.e("10355"),a.e("3049"),a.e("63055"),a.e("58529"),a.e("14560"),a.e("81441"),a.e("52358"),a.e("44251"),a.e("92691"),a.e("78823"),a.e("58867"),a.e("69518"),a.e("4192"),a.e("7193"),a.e("61628"),a.e("16108"),a.e("73856"),a.e("31674"),a.e("5318"),a.e("78507")]).then(a.bind(a,74784))},backup:{tag:"ha-config-backup",load:()=>Promise.all([a.e("46379"),a.e("66031"),a.e("72206"),a.e("91552"),a.e("97983"),a.e("25618"),a.e("78456"),a.e("56898"),a.e("35671"),a.e("42950"),a.e("83895"),a.e("29570"),a.e("65505"),a.e("99287"),a.e("5080"),a.e("41103"),a.e("8795"),a.e("50408"),a.e("71588"),a.e("81465"),a.e("27024"),a.e("77756"),a.e("6900"),a.e("92139"),a.e("32146"),a.e("7068"),a.e("47399"),a.e("49016"),a.e("4975"),a.e("18865"),a.e("88975"),a.e("10355"),a.e("63055"),a.e("58529"),a.e("14560"),a.e("81441"),a.e("52358"),a.e("79931"),a.e("44251"),a.e("65005"),a.e("60487"),a.e("3371"),a.e("92691"),a.e("38326"),a.e("10745"),a.e("16912"),a.e("70639"),a.e("92368"),a.e("37316"),a.e("72974"),a.e("63308"),a.e("65120")]).then(a.bind(a,13835))},blueprint:{tag:"ha-config-blueprint",load:()=>Promise.all([a.e("46379"),a.e("66031"),a.e("72206"),a.e("91552"),a.e("97983"),a.e("25618"),a.e("78456"),a.e("56898"),a.e("42950"),a.e("29570"),a.e("65505"),a.e("99287"),a.e("5080"),a.e("41103"),a.e("50408"),a.e("71588"),a.e("81465"),a.e("27024"),a.e("77756"),a.e("6900"),a.e("90294"),a.e("20979"),a.e("10355"),a.e("58529"),a.e("14560"),a.e("81441"),a.e("68999")]).then(a.bind(a,13568))},tags:{tag:"ha-config-tags",load:()=>Promise.all([a.e("46379"),a.e("66031"),a.e("72206"),a.e("91552"),a.e("97983"),a.e("25618"),a.e("78456"),a.e("56898"),a.e("42950"),a.e("29570"),a.e("65505"),a.e("99287"),a.e("5080"),a.e("41103"),a.e("50408"),a.e("71588"),a.e("81465"),a.e("27024"),a.e("77756"),a.e("6900"),a.e("42503"),a.e("10355"),a.e("58529"),a.e("14560"),a.e("81441"),a.e("79390")]).then(a.bind(a,7658))},cloud:{tag:"ha-config-cloud",load:()=>Promise.all([a.e("46379"),a.e("66031"),a.e("72206"),a.e("91552"),a.e("25618"),a.e("78456"),a.e("41258"),a.e("56898"),a.e("35671"),a.e("42950"),a.e("83895"),a.e("29570"),a.e("65505"),a.e("8795"),a.e("71588"),a.e("92139"),a.e("32146"),a.e("7068"),a.e("47399"),a.e("39291"),a.e("88482"),a.e("35749"),a.e("18865"),a.e("88975"),a.e("63055"),a.e("52358"),a.e("79931"),a.e("44251"),a.e("65005"),a.e("60487"),a.e("3371"),a.e("92691"),a.e("38326"),a.e("10745"),a.e("16912"),a.e("70639"),a.e("92368"),a.e("37316"),a.e("72974"),a.e("63308"),a.e("96540")]).then(a.bind(a,34480))},devices:{tag:"ha-config-devices",load:()=>Promise.all([a.e("46379"),a.e("66031"),a.e("72206"),a.e("91552"),a.e("97983"),a.e("25618"),a.e("78456"),a.e("56898"),a.e("42950"),a.e("29570"),a.e("65505"),a.e("99287"),a.e("5080"),a.e("41103"),a.e("50408"),a.e("71588"),a.e("81465"),a.e("27024"),a.e("77756"),a.e("6900"),a.e("92139"),a.e("47399"),a.e("90294"),a.e("76945"),a.e("45900"),a.e("90994"),a.e("18865"),a.e("88975"),a.e("10355"),a.e("58529"),a.e("14560"),a.e("81441"),a.e("16912"),a.e("92368"),a.e("37316"),a.e("65499"),a.e("58867"),a.e("84787"),a.e("1404")]).then(a.bind(a,39388))},system:{tag:"ha-config-system-navigation",load:()=>Promise.all([a.e("72206"),a.e("91552"),a.e("25618"),a.e("83895"),a.e("49016"),a.e("14392"),a.e("18546"),a.e("55593"),a.e("35453")]).then(a.bind(a,56604))},logs:{tag:"ha-config-logs",load:()=>Promise.all([a.e("46379"),a.e("66031"),a.e("72206"),a.e("91552"),a.e("25618"),a.e("78456"),a.e("56898"),a.e("42950"),a.e("65505"),a.e("5080"),a.e("50408"),a.e("837"),a.e("44020"),a.e("31664"),a.e("44380")]).then(a.bind(a,230))},info:{tag:"ha-config-info",load:()=>Promise.all([a.e("91552"),a.e("25618"),a.e("65519"),a.e("86996")]).then(a.bind(a,91021))},customize:"dashboard",dashboard:{tag:"ha-config-dashboard",load:()=>Promise.all([a.e("72206"),a.e("91552"),a.e("25618"),a.e("78456"),a.e("56898"),a.e("42950"),a.e("65505"),a.e("5080"),a.e("94611"),a.e("55899"),a.e("37460"),a.e("17895"),a.e("18948"),a.e("18865"),a.e("88975"),a.e("14324"),a.e("46226"),a.e("59866")]).then(a.bind(a,55955))},entities:{tag:"ha-config-entities",load:()=>Promise.all([a.e("46379"),a.e("66031"),a.e("72206"),a.e("91552"),a.e("97983"),a.e("25618"),a.e("78456"),a.e("56898"),a.e("42950"),a.e("29570"),a.e("65505"),a.e("99287"),a.e("5080"),a.e("50408"),a.e("81465"),a.e("27024"),a.e("77756"),a.e("6900"),a.e("57934"),a.e("90294"),a.e("76945"),a.e("18865"),a.e("10355"),a.e("58529"),a.e("14560"),a.e("81441"),a.e("58867"),a.e("84787"),a.e("27283")]).then(a.bind(a,89783))},energy:{tag:"ha-config-energy",load:()=>Promise.all([a.e("72206"),a.e("25618"),a.e("3134"),a.e("28612"),a.e("12767"),a.e("57934"),a.e("38206"),a.e("72743"),a.e("41608"),a.e("22118")]).then(a.bind(a,76600))},hardware:{tag:"ha-config-hardware",load:()=>Promise.all([a.e("72206"),a.e("91552"),a.e("25618"),a.e("42950"),a.e("14392"),a.e("20092"),a.e("87593"),a.e("55593"),a.e("65780")]).then(a.bind(a,40656))},integrations:{tag:"ha-config-integrations",load:()=>Promise.all([a.e("46379"),a.e("66031"),a.e("72206"),a.e("91552"),a.e("25618"),a.e("78456"),a.e("56898"),a.e("42950"),a.e("29570"),a.e("65505"),a.e("99287"),a.e("5080"),a.e("41103"),a.e("50408"),a.e("81465"),a.e("27024"),a.e("57934"),a.e("82600"),a.e("17679"),a.e("81656"),a.e("10355"),a.e("78036"),a.e("51825")]).then(a.bind(a,60473))},labels:{tag:"ha-config-labels",load:()=>Promise.all([a.e("46379"),a.e("66031"),a.e("72206"),a.e("91552"),a.e("97983"),a.e("25618"),a.e("78456"),a.e("56898"),a.e("42950"),a.e("29570"),a.e("65505"),a.e("99287"),a.e("5080"),a.e("41103"),a.e("50408"),a.e("81465"),a.e("27024"),a.e("77756"),a.e("6900"),a.e("78727"),a.e("10355"),a.e("58529"),a.e("14560"),a.e("81441"),a.e("43400")]).then(a.bind(a,58846))},lovelace:{tag:"ha-config-lovelace",load:()=>a.e("5626").then(a.bind(a,21646))},network:{tag:"ha-config-section-network",load:()=>Promise.all([a.e("46379"),a.e("66031"),a.e("72206"),a.e("91552"),a.e("25618"),a.e("78456"),a.e("56898"),a.e("29570"),a.e("7010"),a.e("15722"),a.e("76267"),a.e("16930")]).then(a.bind(a,59484))},person:{tag:"ha-config-person",load:()=>Promise.all([a.e("72206"),a.e("91552"),a.e("25618"),a.e("42950"),a.e("41103"),a.e("57934"),a.e("72324"),a.e("10355"),a.e("32294")]).then(a.bind(a,76429))},script:{tag:"ha-config-script",load:()=>Promise.all([a.e("46379"),a.e("66031"),a.e("72206"),a.e("91552"),a.e("97983"),a.e("25618"),a.e("78456"),a.e("24199"),a.e("41258"),a.e("56898"),a.e("27506"),a.e("35671"),a.e("42950"),a.e("83895"),a.e("29570"),a.e("65505"),a.e("99287"),a.e("5080"),a.e("41103"),a.e("8795"),a.e("50408"),a.e("71588"),a.e("81465"),a.e("27024"),a.e("77756"),a.e("6900"),a.e("2981"),a.e("90294"),a.e("1037"),a.e("76945"),a.e("20979"),a.e("30751"),a.e("18865"),a.e("27090"),a.e("88975"),a.e("10355"),a.e("3049"),a.e("63055"),a.e("58529"),a.e("14560"),a.e("81441"),a.e("52358"),a.e("44251"),a.e("92691"),a.e("78823"),a.e("58867"),a.e("69518"),a.e("4192"),a.e("7193"),a.e("61628"),a.e("16108"),a.e("73856"),a.e("31674"),a.e("5318"),a.e("47281")]).then(a.bind(a,35215))},scene:{tag:"ha-config-scene",load:()=>Promise.all([a.e("46379"),a.e("66031"),a.e("72206"),a.e("91552"),a.e("97983"),a.e("25618"),a.e("78456"),a.e("24199"),a.e("56898"),a.e("27506"),a.e("42950"),a.e("29570"),a.e("65505"),a.e("99287"),a.e("5080"),a.e("41103"),a.e("50408"),a.e("81465"),a.e("27024"),a.e("77756"),a.e("6900"),a.e("90294"),a.e("76945"),a.e("3797"),a.e("18865"),a.e("27090"),a.e("88975"),a.e("10355"),a.e("3049"),a.e("58529"),a.e("14560"),a.e("81441"),a.e("58867"),a.e("16108"),a.e("57267")]).then(a.bind(a,34796))},helpers:{tag:"ha-config-helpers",load:()=>Promise.all([a.e("46379"),a.e("66031"),a.e("72206"),a.e("91552"),a.e("97983"),a.e("25618"),a.e("78456"),a.e("56898"),a.e("42950"),a.e("29570"),a.e("65505"),a.e("99287"),a.e("5080"),a.e("41103"),a.e("50408"),a.e("81465"),a.e("27024"),a.e("77756"),a.e("6900"),a.e("57934"),a.e("90294"),a.e("17679"),a.e("18865"),a.e("10355"),a.e("58529"),a.e("14560"),a.e("81441"),a.e("58867"),a.e("16108"),a.e("78036"),a.e("35333")]).then(a.bind(a,46210))},storage:{tag:"ha-config-section-storage",load:()=>Promise.all([a.e("72206"),a.e("91552"),a.e("25618"),a.e("78456"),a.e("56898"),a.e("29570"),a.e("99287"),a.e("46687"),a.e("39904"),a.e("52968"),a.e("26876")]).then(a.bind(a,88383))},updates:{tag:"ha-config-section-updates",load:()=>Promise.all([a.e("72206"),a.e("91552"),a.e("97983"),a.e("25618"),a.e("78456"),a.e("56898"),a.e("29570"),a.e("37460"),a.e("18865"),a.e("88975"),a.e("14324"),a.e("10174")]).then(a.bind(a,3761))},repairs:{tag:"ha-config-repairs-dashboard",load:()=>Promise.all([a.e("72206"),a.e("25618"),a.e("42950"),a.e("29570"),a.e("65505"),a.e("5080"),a.e("55899"),a.e("17895"),a.e("46455"),a.e("46226"),a.e("924")]).then(a.bind(a,29782))},users:{tag:"ha-config-users",load:()=>Promise.all([a.e("46379"),a.e("66031"),a.e("72206"),a.e("97983"),a.e("25618"),a.e("42950"),a.e("29570"),a.e("65505"),a.e("99287"),a.e("5080"),a.e("41103"),a.e("50408"),a.e("81465"),a.e("27024"),a.e("77756"),a.e("6900"),a.e("82309"),a.e("10355"),a.e("58529"),a.e("14560"),a.e("81441"),a.e("86547")]).then(a.bind(a,89321))},zone:{tag:"ha-config-zone",load:()=>Promise.all([a.e("72206"),a.e("91552"),a.e("25618"),a.e("42950"),a.e("83895"),a.e("99287"),a.e("41103"),a.e("57934"),a.e("35637"),a.e("47686"),a.e("84776"),a.e("18865"),a.e("10355"),a.e("49554"),a.e("13197"),a.e("16849")]).then(a.bind(a,4507))},general:{tag:"ha-config-section-general",load:()=>Promise.all([a.e("46379"),a.e("66031"),a.e("72206"),a.e("91552"),a.e("25618"),a.e("78456"),a.e("41258"),a.e("56898"),a.e("35671"),a.e("29570"),a.e("7010"),a.e("39291"),a.e("17697"),a.e("55539")]).then(a.bind(a,61218))},zha:{tag:"zha-config-dashboard-router",load:()=>a.e("40734").then(a.bind(a,73780))},mqtt:{tag:"mqtt-config-panel",load:()=>Promise.all([a.e("46379"),a.e("66031"),a.e("72206"),a.e("91552"),a.e("25618"),a.e("78456"),a.e("41258"),a.e("56898"),a.e("35671"),a.e("18229"),a.e("59586")]).then(a.bind(a,46496))},zwave_js:{tag:"zwave_js-config-router",load:()=>a.e("49775").then(a.bind(a,33349))},matter:{tag:"matter-config-panel",load:()=>a.e("78634").then(a.bind(a,25233))},thread:{tag:"thread-config-panel",load:()=>Promise.all([a.e("91552"),a.e("25618"),a.e("78456"),a.e("56898"),a.e("12503"),a.e("62073")]).then(a.bind(a,6798))},bluetooth:{tag:"bluetooth-config-dashboard-router",load:()=>a.e("33287").then(a.bind(a,64891))},application_credentials:{tag:"ha-config-application-credentials",load:()=>Promise.all([a.e("46379"),a.e("66031"),a.e("72206"),a.e("91552"),a.e("97983"),a.e("25618"),a.e("78456"),a.e("56898"),a.e("42950"),a.e("29570"),a.e("65505"),a.e("99287"),a.e("5080"),a.e("41103"),a.e("50408"),a.e("81465"),a.e("27024"),a.e("77756"),a.e("6900"),a.e("1562"),a.e("10355"),a.e("58529"),a.e("14560"),a.e("81441"),a.e("37488")]).then(a.bind(a,4884))}}})},{kind:"field",decorators:[(0,s.SB)()],key:"_wideSidebar",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_wide",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_cloudStatus",value:void 0},{kind:"field",key:"_listeners",value:()=>[]},{kind:"method",key:"connectedCallback",value:function(){(0,n.Z)(t,"connectedCallback",this,3)([]),this._listeners.push((0,l.K)("(min-width: 1040px)",(e=>{this._wide=e}))),this._listeners.push((0,l.K)("(min-width: 1296px)",(e=>{this._wideSidebar=e})))}},{kind:"method",key:"disconnectedCallback",value:function(){for((0,n.Z)(t,"disconnectedCallback",this,3)([]);this._listeners.length;)this._listeners.pop()();h.w1.clear(),h.Mw.clear()}},{kind:"method",key:"firstUpdated",value:function(e){(0,n.Z)(t,"firstUpdated",this,3)([e]),this.hass.loadBackendTranslation("title"),this.hass.loadBackendTranslation("services"),(0,c.p)(this.hass,"cloud")&&(this._updateCloudStatus(),this.addEventListener("connection-status",(e=>{"connected"===e.detail&&this._updateCloudStatus()}))),this.addEventListener("ha-refresh-cloud-status",(()=>this._updateCloudStatus())),this.style.setProperty("--app-header-background-color","var(--sidebar-background-color)"),this.style.setProperty("--app-header-text-color","var(--sidebar-text-color)"),this.style.setProperty("--app-header-border-bottom","1px solid var(--divider-color)")}},{kind:"method",key:"updatePageEl",value:function(e){const o="docked"===this.hass.dockedSidebar?this._wideSidebar:this._wide;e.route=this.routeTail,e.hass=this.hass,e.showAdvanced=Boolean(this.hass.userData?.showAdvanced),e.isWide=o,e.narrow=this.narrow,e.cloudStatus=this._cloudStatus}},{kind:"method",key:"_updateCloudStatus",value:async function(){this._cloudStatus=await(0,r.LI)(this.hass),("connecting"===this._cloudStatus.cloud||this._cloudStatus.logged_in&&this._cloudStatus.prefs.remote_enabled&&!this._cloudStatus.remote_connected)&&setTimeout((()=>this._updateCloudStatus()),5e3)}}]}}),(0,p.f)(u.n))}};
//# sourceMappingURL=63326.118ea32f16ca7b64.js.map