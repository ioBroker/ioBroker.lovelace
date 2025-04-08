export const __webpack_ids__=["97305"];export const __webpack_modules__={46355:function(e,o,n){n.d(o,{D:()=>h,S:()=>_});n(9359),n(56475);var t=n(57243),r=n(75101),i=n(57816),a=n(91715),s=n(38572),c=n(76131),l=n(72548),d=n(91395),p=n(73192),g=n(72344),f=n(83523);const _=["zha","zwave_js","matter"],h=async(e,o,n,_)=>{if(_?.domain){const e=await o.loadBackendTranslation("title",_.domain);_.domain=(0,i.Lh)(e,_.domain)}if(_?.brand){const e=await(0,a.G)(o);_.brand=e.core.integration[_.brand]?.name||_.brand}if("zwave_js"===n){const i=_?.config_entry?void 0:(await(0,r.pB)(o,{domain:n})).filter((e=>!e.disabled_by));if(!(0,g.p)(o,"zwave_js")||!_?.config_entry&&!i?.length)return void(0,c.showConfirmationDialog)(e,{title:o.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee_title",{integration:"Z-Wave"}),text:o.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee",{integration:"Z-Wave",brand:_?.brand||_?.domain||"Z-Wave",supported_hardware_link:t.dy`<a href="${(0,p.R)(o,"/docs/z-wave/controllers")}" target="_blank" rel="noreferrer">${o.localize("ui.panel.config.integrations.config_flow.supported_hardware")}</a>`}),confirmText:o.localize("ui.panel.config.integrations.config_flow.proceed"),confirm:()=>{(0,s.t)(e,{startFlowHandler:"zwave_js"})}});(0,d.B)(e,{entry_id:_?.config_entry||i[0].entry_id})}else if("zha"===n){const i=_?.config_entry?void 0:(await(0,r.pB)(o,{domain:n})).filter((e=>!e.disabled_by));if(!(0,g.p)(o,"zha")||!_?.config_entry&&!i?.length)return void(0,c.showConfirmationDialog)(e,{title:o.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee_title",{integration:"Zigbee"}),text:o.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee",{integration:"Zigbee",brand:_?.brand||_?.domain||"Zigbee",supported_hardware_link:t.dy`<a href="${(0,p.R)(o,"/integrations/zha/#known-working-zigbee-radio-modules")}" target="_blank" rel="noreferrer">${o.localize("ui.panel.config.integrations.config_flow.supported_hardware")}</a>`}),confirmText:o.localize("ui.panel.config.integrations.config_flow.proceed"),confirm:()=>{(0,s.t)(e,{startFlowHandler:"zha"})}});(0,f.c)("/config/zha/add")}else if("matter"===n){const i=_?.config_entry?void 0:(await(0,r.pB)(o,{domain:n})).filter((e=>!e.disabled_by));if(!(0,g.p)(o,n)||!_?.config_entry&&!i?.length)return void(0,c.showConfirmationDialog)(e,{title:o.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee_title",{integration:"Matter"}),text:o.localize("ui.panel.config.integrations.config_flow.missing_matter",{integration:"Matter",brand:_?.brand||_?.domain||"Matter",supported_hardware_link:t.dy`<a href="${(0,p.R)(o,"/integrations/matter")}" target="_blank" rel="noreferrer">${o.localize("ui.panel.config.integrations.config_flow.supported_hardware")}</a>`}),confirmText:o.localize("ui.panel.config.integrations.config_flow.proceed"),confirm:()=>{(0,s.t)(e,{startFlowHandler:"matter"})}});(0,l.H)(e)}}},75101:function(e,o,n){n.d(o,{$H:()=>t,DJ:()=>s,LZ:()=>i,Nn:()=>g,Ny:()=>f,Pk:()=>h,Q4:()=>a,RQ:()=>l,SO:()=>d,T0:()=>_,aR:()=>r,iJ:()=>p,pB:()=>c});n(9359),n(56475),n(1331);const t=(e,o)=>e.callWS({type:"config_entries/subentries/list",entry_id:o}),r=(e,o,n)=>e.callWS({type:"config_entries/subentries/delete",entry_id:o,subentry_id:n}),i=["migration_error","setup_error","setup_retry"],a=["not_loaded","loaded","setup_error","setup_retry"],s=(e,o,n)=>{const t={type:"config_entries/subscribe"};return n&&n.type&&(t.type_filter=n.type),e.connection.subscribeMessage((e=>o(e)),t)},c=(e,o)=>{const n={};return o&&(o.type&&(n.type_filter=o.type),o.domain&&(n.domain=o.domain)),e.callWS({type:"config_entries/get",...n})},l=(e,o)=>e.callWS({type:"config_entries/get_single",entry_id:o}),d=(e,o,n)=>e.callWS({type:"config_entries/update",entry_id:o,...n}),p=(e,o)=>e.callApi("DELETE",`config/config_entries/entry/${o}`),g=(e,o)=>e.callApi("POST",`config/config_entries/entry/${o}/reload`),f=(e,o)=>e.callWS({type:"config_entries/disable",entry_id:o,disabled_by:"user"}),_=(e,o)=>e.callWS({type:"config_entries/disable",entry_id:o,disabled_by:null}),h=(e,o)=>{if(!o)return e;const n=e.find((e=>e.entry_id===o));if(!n)return e;return[n,...e.filter((e=>e.entry_id!==o))]}},15681:function(e,o,n){n.d(o,{D4:()=>d,D7:()=>h,Ky:()=>l,P3:()=>s,V3:()=>b,WW:()=>w,XO:()=>p,ZJ:()=>u,d4:()=>_,oi:()=>f,pV:()=>a,zO:()=>g});var t=n(62212),r=n(22381),i=n(57816);const a=["bluetooth","dhcp","discovery","hardware","hassio","homekit","integration_discovery","mqtt","ssdp","unignore","usb","zeroconf"],s=["reauth"],c={"HA-Frontend-Base":`${location.protocol}//${location.host}`},l=(e,o,n)=>e.callApi("POST","config/config_entries/flow",{handler:o,show_advanced_options:Boolean(e.userData?.showAdvanced),entry_id:n},c),d=(e,o)=>e.callApi("GET",`config/config_entries/flow/${o}`,void 0,c),p=(e,o,n)=>e.callApi("POST",`config/config_entries/flow/${o}`,n,c),g=(e,o,n)=>e.callWS({type:"config_entries/ignore_flow",flow_id:o,title:n}),f=(e,o)=>e.callApi("DELETE",`config/config_entries/flow/${o}`),_=(e,o)=>e.callApi("GET","config/config_entries/flow_handlers"+(o?`?type=${o}`:"")),h=e=>e.sendMessagePromise({type:"config_entries/flow/progress"}),m=(e,o)=>e.subscribeEvents((0,r.D)((()=>h(e).then((e=>o.setState(e,!0)))),500,!0),"config_entry_discovered"),u=e=>(0,t._)(e,"_configFlowProgress",h,m),b=(e,o)=>u(e.connection).subscribe(o),w=(e,o)=>o.context.title_placeholders&&0!==Object.keys(o.context.title_placeholders).length?e(`component.${o.handler}.config.flow_title`,o.context.title_placeholders)||("name"in o.context.title_placeholders?o.context.title_placeholders.name:(0,i.Lh)(e,o.handler)):(0,i.Lh)(e,o.handler)},91715:function(e,o,n){n.d(o,{G:()=>t,p:()=>r});const t=e=>e.callWS({type:"integration/descriptions"}),r=(e,o)=>{if(e){if(o in e){const n=e[o];if("integration_type"in n)return n}for(const n of Object.values(e))if("integrations"in n&&n.integrations&&o in n.integrations)return n.integrations[o]}}},38572:function(e,o,n){n.d(o,{t:()=>s});var t=n(57243),r=n(15681),i=n(57816),a=n(7956);const s=(e,o)=>(0,a.w)(e,o,{flowType:"config_flow",showDevices:!0,createFlow:async(e,n)=>{const[t]=await Promise.all([(0,r.Ky)(e,n,o.entryId),e.loadFragmentTranslation("config"),e.loadBackendTranslation("config",n),e.loadBackendTranslation("selector",n),e.loadBackendTranslation("title",n)]);return t},fetchFlow:async(e,o)=>{const n=await(0,r.D4)(e,o);return await e.loadFragmentTranslation("config"),await e.loadBackendTranslation("config",n.handler),await e.loadBackendTranslation("selector",n.handler),n},handleFlowStep:r.XO,deleteFlow:r.oi,renderAbortDescription(e,o){const n=e.localize(`component.${o.translation_domain||o.handler}.config.abort.${o.reason}`,o.description_placeholders);return n?t.dy` <ha-markdown allow-svg breaks .content="${n}"></ha-markdown> `:o.reason},renderShowFormStepHeader:(e,o)=>e.localize(`component.${o.translation_domain||o.handler}.config.step.${o.step_id}.title`,o.description_placeholders)||e.localize(`component.${o.handler}.title`),renderShowFormStepDescription(e,o){const n=e.localize(`component.${o.translation_domain||o.handler}.config.step.${o.step_id}.description`,o.description_placeholders);return n?t.dy` <ha-markdown allow-svg breaks .content="${n}"></ha-markdown> `:""},renderShowFormStepFieldLabel(e,o,n,t){if("expandable"===n.type)return e.localize(`component.${o.handler}.config.step.${o.step_id}.sections.${n.name}.name`);const r=t?.path?.[0]?`sections.${t.path[0]}.`:"";return e.localize(`component.${o.handler}.config.step.${o.step_id}.${r}data.${n.name}`)||n.name},renderShowFormStepFieldHelper(e,o,n,r){if("expandable"===n.type)return e.localize(`component.${o.translation_domain||o.handler}.config.step.${o.step_id}.sections.${n.name}.description`);const i=r?.path?.[0]?`sections.${r.path[0]}.`:"",a=e.localize(`component.${o.translation_domain||o.handler}.config.step.${o.step_id}.${i}data_description.${n.name}`,o.description_placeholders);return a?t.dy`<ha-markdown breaks .content="${a}"></ha-markdown>`:""},renderShowFormStepFieldError:(e,o,n)=>e.localize(`component.${o.translation_domain||o.translation_domain||o.handler}.config.error.${n}`,o.description_placeholders)||n,renderShowFormStepFieldLocalizeValue:(e,o,n)=>e.localize(`component.${o.handler}.selector.${n}`),renderShowFormStepSubmitButton:(e,o)=>e.localize(`component.${o.handler}.config.step.${o.step_id}.submit`)||e.localize("ui.panel.config.integrations.config_flow."+(!1===o.last_step?"next":"submit")),renderExternalStepHeader:(e,o)=>e.localize(`component.${o.handler}.config.step.${o.step_id}.title`)||e.localize("ui.panel.config.integrations.config_flow.external_step.open_site"),renderExternalStepDescription(e,o){const n=e.localize(`component.${o.translation_domain||o.handler}.config.${o.step_id}.description`,o.description_placeholders);return t.dy` <p> ${e.localize("ui.panel.config.integrations.config_flow.external_step.description")} </p> ${n?t.dy` <ha-markdown allow-svg breaks .content="${n}"></ha-markdown> `:""} `},renderCreateEntryDescription(e,o){const n=e.localize(`component.${o.translation_domain||o.handler}.config.create_entry.${o.description||"default"}`,o.description_placeholders);return t.dy` ${n?t.dy` <ha-markdown allow-svg breaks .content="${n}"></ha-markdown> `:""} <p> ${e.localize("ui.panel.config.integrations.config_flow.created_config",{name:o.title})} </p> `},renderShowFormProgressHeader:(e,o)=>e.localize(`component.${o.handler}.config.step.${o.step_id}.title`)||e.localize(`component.${o.handler}.title`),renderShowFormProgressDescription(e,o){const n=e.localize(`component.${o.translation_domain||o.handler}.config.progress.${o.progress_action}`,o.description_placeholders);return n?t.dy` <ha-markdown allow-svg breaks .content="${n}"></ha-markdown> `:""},renderMenuHeader:(e,o)=>e.localize(`component.${o.handler}.config.step.${o.step_id}.title`)||e.localize(`component.${o.handler}.title`),renderMenuDescription(e,o){const n=e.localize(`component.${o.translation_domain||o.handler}.config.step.${o.step_id}.description`,o.description_placeholders);return n?t.dy` <ha-markdown allow-svg breaks .content="${n}"></ha-markdown> `:""},renderMenuOption:(e,o,n)=>e.localize(`component.${o.translation_domain||o.handler}.config.step.${o.step_id}.menu_options.${n}`,o.description_placeholders),renderLoadingDescription(e,o,n,t){if("loading_flow"!==o&&"loading_step"!==o)return"";const r=t?.handler||n;return e.localize(`ui.panel.config.integrations.config_flow.loading.${o}`,{integration:r?(0,i.Lh)(e.localize,r):e.localize("ui.panel.config.integrations.config_flow.loading.fallback_title")})}})},7956:function(e,o,n){n.d(o,{w:()=>i});var t=n(36522);const r=()=>Promise.all([n.e("46379"),n.e("66031"),n.e("72206"),n.e("97983"),n.e("24199"),n.e("27506"),n.e("83895"),n.e("58640"),n.e("2981"),n.e("1562"),n.e("84503"),n.e("27090"),n.e("19882")]).then(n.bind(n,12656)),i=(e,o,n)=>{(0,t.B)(e,"show-dialog",{dialogTag:"dialog-data-entry-flow",dialogImport:r,dialogParams:{...o,flowConfig:n,dialogParentElement:e}})}},72548:function(e,o,n){n.d(o,{H:()=>i});var t=n(36522);const r=()=>Promise.all([n.e("46379"),n.e("66031"),n.e("72206"),n.e("97983"),n.e("25618"),n.e("42950"),n.e("65505"),n.e("5080"),n.e("23905"),n.e("87912")]).then(n.bind(n,25679)),i=e=>{(0,t.B)(e,"show-dialog",{dialogTag:"dialog-matter-add-device",dialogImport:r,dialogParams:{}})}},91395:function(e,o,n){n.d(o,{B:()=>i});var t=n(36522);const r=()=>Promise.all([n.e("46379"),n.e("66031"),n.e("72206"),n.e("91552"),n.e("97983"),n.e("25618"),n.e("78456"),n.e("56898"),n.e("83895"),n.e("29570"),n.e("71588"),n.e("7010"),n.e("20414"),n.e("87810")]).then(n.bind(n,10772)),i=(e,o)=>{(0,t.B)(e,"show-dialog",{dialogTag:"dialog-zwave_js-add-node",dialogImport:r,dialogParams:o})}},54876:function(e,o,n){n.r(o),n.d(o,{getMyRedirects:()=>_});var t=n(44249),r=n(72621),i=n(68203),a=n(57243),s=n(15093),c=n(72344),l=n(46355),d=n(83523),p=n(58776),g=n(57816),f=(n(34515),n(73192));const _=()=>({application_credentials:{redirect:"/config/application_credentials"},developer_assist:{redirect:"/developer-tools/assist"},developer_states:{redirect:"/developer-tools/state"},developer_services:{redirect:"/developer-tools/action"},developer_call_service:{redirect:"/developer-tools/action",params:{service:"string"}},developer_template:{redirect:"/developer-tools/template"},developer_events:{redirect:"/developer-tools/event"},developer_statistics:{redirect:"/developer-tools/statistics"},server_controls:{redirect:"/developer-tools/yaml"},calendar:{component:"calendar",redirect:"/calendar"},companion_app:{redirect:"#external-app-configuration"},config:{redirect:"/config/dashboard"},cloud:{component:"cloud",redirect:"/config/cloud"},config_flow_start:{redirect:"/config/integrations/dashboard/add",params:{domain:"string"}},brand:{redirect:"/config/integrations/dashboard/add",params:{brand:"string"}},integrations:{redirect:"/config/integrations"},integration:{redirect:"/config/integrations/integration",params:{domain:"string"}},config_mqtt:{component:"mqtt",redirect:"/config/mqtt"},config_zha:{component:"zha",redirect:"/config/zha/dashboard"},config_zwave_js:{component:"zwave_js",redirect:"/config/zwave_js/dashboard"},add_zigbee_device:{component:"zha",redirect:"/config/zha/add"},add_zwave_device:{component:"zwave_js",redirect:"/config/zwave_js/add"},add_matter_device:{component:"matter",redirect:"/config/matter/add"},config_bluetooth:{component:"bluetooth",redirect:"/config/bluetooth"},config_energy:{component:"energy",redirect:"/config/energy/dashboard"},devices:{redirect:"/config/devices/dashboard"},entities:{redirect:"/config/entities"},labels:{redirect:"/config/labels"},energy:{component:"energy",redirect:"/energy"},areas:{redirect:"/config/areas/dashboard"},blueprint_import:{component:"blueprint",redirect:"/config/blueprint/dashboard/import",params:{blueprint_url:"url"}},blueprints:{component:"blueprint",redirect:"/config/blueprint/dashboard"},automations:{component:"automation",redirect:"/config/automation/dashboard"},scenes:{component:"scene",redirect:"/config/scene/dashboard"},scripts:{component:"script",redirect:"/config/script/dashboard"},helpers:{redirect:"/config/helpers"},tags:{component:"tag",redirect:"/config/tags"},voice_assistants:{redirect:"/config/voice-assistants"},lovelace_dashboards:{component:"lovelace",redirect:"/config/lovelace/dashboards"},lovelace_resources:{component:"lovelace",redirect:"/config/lovelace/resources"},oauth:{redirect:"/auth/external/callback",navigate_outside_spa:!0,params:{error:"string?",code:"string?",state:"string"}},people:{component:"person",redirect:"/config/person"},zones:{component:"zone",redirect:"/config/zone"},users:{redirect:"/config/users"},general:{redirect:"/config/general"},logs:{redirect:"/config/logs",params:{provider:"string?"}},repairs:{component:"repairs",redirect:"/config/repairs"},info:{redirect:"/config/info"},system_health:{redirect:"/config/repairs?dialog=system-health"},hardware:{redirect:"/config/hardware"},storage:{redirect:"/config/storage"},network:{redirect:"/config/network"},analytics:{redirect:"/config/analytics"},updates:{redirect:"/config/updates"},system_dashboard:{redirect:"/config/system"},customize:{redirect:"/config/dashboard"},profile:{redirect:"/profile"},logbook:{component:"logbook",redirect:"/logbook"},history:{component:"history",redirect:"/history"},media_browser:{component:"media_source",redirect:"/media-browser"},backup:{component:"backup",redirect:"/config/backup"},backup_list:{component:"backup",redirect:"/config/backup/backups"},backup_config:{component:"backup",redirect:"/config/backup/settings"},supervisor_snapshots:{component:"backup",redirect:"/config/backup"},supervisor_backups:{component:"backup",redirect:"/config/backup"},supervisor_system:{redirect:"/config/system"},supervisor_logs:{redirect:"/config/logs?provider=supervisor"},supervisor_info:{redirect:"/config/info"},hacs_repository:{component:"hacs",redirect:"/hacs/_my_redirect/hacs_repository",params:{owner:"string",repository:"string",category:"string?"}}});(0,t.Z)([(0,s.Mo)("ha-panel-my")],(function(e,o){class n extends o{constructor(...o){super(...o),e(this)}}return{F:n,d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_error",value:void 0},{kind:"field",key:"_redirect",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,r.Z)(n,"connectedCallback",this,3)([]);const e=this.route.path.substring(1),o=(0,c.p)(this.hass,"hassio");if(this._redirect=(e=>_()?.[e])(e),e.startsWith("supervisor")&&void 0===this._redirect)return o?void(0,d.c)(`/hassio/_my_redirect/${e}${window.location.search}`,{replace:!0}):void(this._error="no_supervisor");if(!this._redirect)return void(this._error="not_supported");if("#external-app-configuration"===this._redirect.redirect)return this.hass.auth.external?.config.hasSettingsScreen?void this.hass.auth.external.fireMessage({type:"config_screen/show"}):void(this._error="not_app");if(this._redirect.component&&!(0,c.p)(this.hass,this._redirect.component)){this.hass.loadBackendTranslation("title",this._redirect.component),this._error="no_component";const e=this._redirect.component;if(l.S.includes(e)){const o=(0,p.Q2)();this.hass.loadFragmentTranslation("config").then().then((()=>{(0,l.D)(this,this.hass,e,{domain:o.domain,brand:o.brand})}))}return}let t;try{t=this._createRedirectUrl()}catch(e){return void(this._error="url_error")}this._redirect.navigate_outside_spa?location.assign(t):(0,d.c)(t,{replace:!0})}},{kind:"method",key:"render",value:function(){if(this._error){let e;switch(this._error){case"not_supported":e=this.hass.localize("ui.panel.my.not_supported",{link:a.dy`<a target="_blank" rel="noreferrer noopener" href="https://my.home-assistant.io/faq.html#supported-pages">${this.hass.localize("ui.panel.my.faq_link")}</a>`})||"This redirect is not supported.";break;case"no_component":e=this.hass.localize("ui.panel.my.component_not_loaded",{integration:a.dy`<a target="_blank" rel="noreferrer noopener" href="${(0,f.R)(this.hass,`/integrations/${this._redirect.component}`)}">${(0,g.Lh)(this.hass.localize,this._redirect.component)}</a>`})||"This redirect is not supported.";break;case"no_supervisor":e=this.hass.localize("ui.panel.my.no_supervisor",{docs_link:a.dy`<a target="_blank" rel="noreferrer noopener" href="${(0,f.R)(this.hass,"/installation")}">${this.hass.localize("ui.panel.my.documentation")}</a>`});break;case"not_app":e=this.hass.localize("ui.panel.my.not_app",{link:a.dy`<a target="_blank" rel="noreferrer noopener" href="https://companion.home-assistant.io/download">${this.hass.localize("ui.panel.my.download_app")}</a>`});break;case"url_error":e=this.hass.localize("ui.panel.my.url_error");break;default:e=this.hass.localize("ui.panel.my.error")||"Unknown error"}return a.dy`<hass-error-screen .error="${e}" .hass="${this.hass}"></hass-error-screen>`}return a.Ld}},{kind:"method",key:"_createRedirectUrl",value:function(){const e=this._createRedirectParams();return`${this._redirect.redirect}${e}`}},{kind:"method",key:"_createRedirectParams",value:function(){const e=(0,p.Q2)();if(!this._redirect.params&&!Object.keys(e).length)return"";const o={};for(const[n,t]of Object.entries(this._redirect.params||{}))if(e[n]||!t.endsWith("?")){if(!e[n]||!this._checkParamType(t,e[n]))throw Error();o[n]=e[n]}return`?${(0,p.ou)(o)}`}},{kind:"method",key:"_checkParamType",value:function(e,o){return"string"===e||"string?"===e||"url"===e&&(o&&o===(0,i.sanitizeUrl)(o))}}]}}),a.oi)},73192:function(e,o,n){n.d(o,{R:()=>t});const t=(e,o)=>`https://www.iobroker.net/#${e.language&&e.language.split("-")[0]||"en"}/adapters/adapterref/iobroker.lovelace/README.md#`}};
//# sourceMappingURL=97305.6ab5f4d51a5830ce.js.map