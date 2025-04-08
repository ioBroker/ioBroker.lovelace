export const __webpack_ids__=["50617"];export const __webpack_modules__={72344:function(e,t,i){i.d(t,{p:()=>a});const a=(e,t)=>e&&e.config.components.includes(t)},17803:function(e,t,i){i.d(t,{I:()=>a,_:()=>n});const a=(e,t,i,a)=>{const[n,o,r]=e.split(".",3);return Number(n)>t||Number(n)===t&&(void 0===a?Number(o)>=i:Number(o)>i)||void 0!==a&&Number(n)===t&&Number(o)===i&&Number(r)>=a},n=e=>e.includes("dev")},73358:function(e,t,i){i.d(t,{AF:()=>r,Kk:()=>c,PS:()=>a,a5:()=>o,gD:()=>h,iY:()=>d,lC:()=>u,ot:()=>m,tj:()=>s,uo:()=>l,zF:()=>n});i(92519),i(42179),i(89256),i(24931),i(88463),i(57449),i(19814);const a=66977!=i.j?["alert","button","climate","cover","configurator","event","input_button","input_select","input_number","input_text","humidifier","lawn_mower","lock","media_player","number","scene","script","select","timer","text","update","vacuum","water_heater"]:null,n=99387==i.j?["sensor","binary_sensor","calendar","camera","device_tracker","image","weather"]:null,o=99387==i.j?["assist_satellite","conversation","stt","tts"]:null,r=["automation","button","cover","date","datetime","fan","group","humidifier","input_boolean","input_button","input_datetime","input_number","input_select","input_text","light","lock","media_player","number","scene","script","select","switch","text","time","vacuum","valve"],s=["closed","locked","off"],l="on",u="off",c=new Set(["fan","input_boolean","light","switch","group","automation","humidifier","valve"]),d=new Set(["camera","image","media_player"]),m="°C",h="°F"},64214:function(e,t,i){i.a(e,(async function(e,a){try{i.d(t,{DG:()=>f,E8:()=>_,Fu:()=>v,NR:()=>w,W0:()=>h,o0:()=>d,yD:()=>y});var n=i(16485),o=i(27486),r=i(46467),s=i(33570),l=i(11104),u=i(16922),c=e([n,l,r,s]);[n,l,r,s]=c.then?(await c)():c;const d=(e,t,i)=>m(t,i.time_zone).format(e),m=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:(0,u.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,u.y)(e)?"h12":"h23",timeZone:(0,l.f)(e.time_zone,t)}))),h=e=>p().format(e),p=(0,o.Z)((()=>new Intl.DateTimeFormat(void 0,{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}))),f=(e,t,i)=>g(t,i.time_zone).format(e),g=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"short",day:"numeric",hour:(0,u.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,u.y)(e)?"h12":"h23",timeZone:(0,l.f)(e.time_zone,t)}))),y=(e,t,i)=>b(t,i.time_zone).format(e),b=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"short",day:"numeric",hour:(0,u.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,u.y)(e)?"h12":"h23",timeZone:(0,l.f)(e.time_zone,t)}))),v=(e,t,i)=>(new Date).getFullYear()===e.getFullYear()?y(e,t,i):f(e,t,i),_=(e,t,i)=>k(t,i.time_zone).format(e),k=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:(0,u.y)(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,u.y)(e)?"h12":"h23",timeZone:(0,l.f)(e.time_zone,t)}))),w=(e,t,i)=>`${(0,r.WB)(e,t,i)}, ${(0,s.mr)(e,t,i)}`;a()}catch(e){a(e)}}))},11104:function(e,t,i){i.a(e,(async function(e,a){try{i.d(t,{Q:()=>l,f:()=>u});var n=i(16485),o=i(20382),r=e([n]);n=(r.then?(await r)():r)[0];const s=Intl.DateTimeFormat?.().resolvedOptions?.().timeZone,l=s??"UTC",u=(e,t)=>e===o.c_.local&&s?l:t;a()}catch(e){a(e)}}))},97969:function(e,t,i){i.d(t,{p:()=>a});const a=e=>e.substr(e.indexOf(".")+1)},47194:function(e,t,i){i.d(t,{C:()=>o,a:()=>n});var a=i(97969);const n=(e,t)=>void 0===t.friendly_name?(0,a.p)(e).replace(/_/g," "):(t.friendly_name??"").toString(),o=e=>n(e.entity_id,e.attributes)},50602:function(e,t,i){i.a(e,(async function(e,a){try{i.d(t,{SL:()=>l,l4:()=>m,sJ:()=>u,uf:()=>d});var n=i(16485),o=i(20382),r=i(34618),s=e([n]);n=(s.then?(await s)():s)[0];const l=e=>u(e.attributes),u=(e,t)=>!!e.unit_of_measurement||!!e.state_class||(t||[]).includes(e.device_class||""),c=e=>{switch(e.number_format){case o.y4.comma_decimal:return["en-US","en"];case o.y4.decimal_comma:return["de","es","it"];case o.y4.space_comma:return["fr","sv","cs"];case o.y4.system:return;default:return e.language}},d=(e,t,i)=>{const a=t?c(t):void 0;return Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},t?.number_format===o.y4.none||Number.isNaN(Number(e))?Number.isNaN(Number(e))||""===e||t?.number_format!==o.y4.none?"string"==typeof e?e:`${(0,r.N)(e,i?.maximumFractionDigits).toString()}${"currency"===i?.style?` ${i.currency}`:""}`:new Intl.NumberFormat("en-US",h(e,{...i,useGrouping:!1})).format(Number(e)):new Intl.NumberFormat(a,h(e,i)).format(Number(e))},m=(e,t)=>{const i=t?.display_precision;return null!=i?{maximumFractionDigits:i,minimumFractionDigits:i}:Number.isInteger(Number(e?.attributes?.step))&&Number.isInteger(Number(e?.state))?{maximumFractionDigits:0}:void 0},h=(e,t)=>{const i={maximumFractionDigits:2,...t};if("string"!=typeof e)return i;if(!t||void 0===t.minimumFractionDigits&&void 0===t.maximumFractionDigits){const t=e.indexOf(".")>-1?e.split(".")[1].length:0;i.minimumFractionDigits=t,i.maximumFractionDigits=t}return i};a()}catch(e){a(e)}}))},22381:function(e,t,i){i.d(t,{D:()=>a});const a=(e,t,i=!1)=>{let a;const n=(...n)=>{const o=i&&!a;clearTimeout(a),a=window.setTimeout((()=>{a=void 0,e(...n)}),t),o&&e(...n)};return n.cancel=()=>{clearTimeout(a)},n}},37394:function(e,t,i){i.d(t,{n:()=>n});class a extends Error{constructor(e,...t){super(...t),this.timeout=void 0,Error.captureStackTrace&&Error.captureStackTrace(this,a),this.name="TimeoutError",this.timeout=e,this.message=`Timed out in ${e} ms.`}}const n=(e,t)=>{const i=new Promise(((t,i)=>{setTimeout((()=>{i(new a(e))}),e)}));return Promise.race([t,i])}},29073:function(e,t,i){i.d(t,{u:()=>d});var a=i(44249),n=i(72621),o=(i(9359),i(31526),i(70104),i(57243)),r=i(15093),s=i(29567),l=i(36522);i(99426),i(66671);const u={boolean:()=>Promise.all([i.e("29570"),i.e("79350")]).then(i.bind(i,8353)),constant:()=>i.e("69654").then(i.bind(i,5606)),float:()=>Promise.all([i.e("46379"),i.e("66031"),i.e("62022")]).then(i.bind(i,53203)),grid:()=>i.e("45036").then(i.bind(i,20018)),expandable:()=>i.e("42653").then(i.bind(i,91624)),integer:()=>Promise.all([i.e("46379"),i.e("66031"),i.e("42950"),i.e("29570"),i.e("65505"),i.e("92139"),i.e("94320"),i.e("42849")]).then(i.bind(i,96116)),multi_select:()=>Promise.all([i.e("46379"),i.e("66031"),i.e("91552"),i.e("78456"),i.e("56898"),i.e("42950"),i.e("29570"),i.e("65505"),i.e("5080"),i.e("50408"),i.e("13204"),i.e("99562")]).then(i.bind(i,84545)),positive_time_period_dict:()=>Promise.all([i.e("46379"),i.e("66031"),i.e("91552"),i.e("78456"),i.e("41258"),i.e("56898"),i.e("35671"),i.e("71139"),i.e("31352")]).then(i.bind(i,15063)),select:()=>Promise.all([i.e("46379"),i.e("66031"),i.e("91552"),i.e("78456"),i.e("24199"),i.e("41258"),i.e("56898"),i.e("27506"),i.e("35671"),i.e("42950"),i.e("29570"),i.e("65505"),i.e("7010"),i.e("62524"),i.e("5409"),i.e("47818"),i.e("69638")]).then(i.bind(i,62706)),string:()=>Promise.all([i.e("46379"),i.e("66031"),i.e("36620")]).then(i.bind(i,8327)),optional_actions:()=>i.e("85230").then(i.bind(i,26709))},c=(e,t)=>e?!t.name||t.flatten?e:e[t.name]:null;let d=(0,a.Z)([(0,r.Mo)("ha-form")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"error",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"warning",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"computeError",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"computeWarning",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"computeLabel",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"computeHelper",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"localizeValue",value:void 0},{kind:"method",key:"getFormProperties",value:function(){return{}}},{kind:"method",key:"focus",value:async function(){await this.updateComplete;const e=this.renderRoot.querySelector(".root");if(e)for(const t of e.children)if("HA-ALERT"!==t.tagName){t instanceof o.fl&&await t.updateComplete,t.focus();break}}},{kind:"method",key:"willUpdate",value:function(e){e.has("schema")&&this.schema&&this.schema.forEach((e=>{"selector"in e||u[e.type]?.()}))}},{kind:"method",key:"render",value:function(){return o.dy` <div class="root" part="root"> ${this.error&&this.error.base?o.dy` <ha-alert alert-type="error"> ${this._computeError(this.error.base,this.schema)} </ha-alert> `:""} ${this.schema.map((e=>{const t=((e,t)=>e&&t.name?e[t.name]:null)(this.error,e),i=((e,t)=>e&&t.name?e[t.name]:null)(this.warning,e);return o.dy` ${t?o.dy` <ha-alert own-margin alert-type="error"> ${this._computeError(t,e)} </ha-alert> `:i?o.dy` <ha-alert own-margin alert-type="warning"> ${this._computeWarning(i,e)} </ha-alert> `:""} ${"selector"in e?o.dy`<ha-selector .schema="${e}" .hass="${this.hass}" .name="${e.name}" .selector="${e.selector}" .value="${c(this.data,e)}" .label="${this._computeLabel(e,this.data)}" .disabled="${e.disabled||this.disabled||!1}" .placeholder="${e.required?"":e.default}" .helper="${this._computeHelper(e)}" .localizeValue="${this.localizeValue}" .required="${e.required||!1}" .context="${this._generateContext(e)}"></ha-selector>`:(0,s.h)(this.fieldElementName(e.type),{schema:e,data:c(this.data,e),label:this._computeLabel(e,this.data),helper:this._computeHelper(e),disabled:this.disabled||e.disabled||!1,hass:this.hass,localize:this.hass?.localize,computeLabel:this.computeLabel,computeHelper:this.computeHelper,localizeValue:this.localizeValue,context:this._generateContext(e),...this.getFormProperties()})} `}))} </div> `}},{kind:"method",key:"fieldElementName",value:function(e){return`ha-form-${e}`}},{kind:"method",key:"_generateContext",value:function(e){if(!e.context)return;const t={};for(const[i,a]of Object.entries(e.context))t[i]=this.data[a];return t}},{kind:"method",key:"createRenderRoot",value:function(){const e=(0,n.Z)(i,"createRenderRoot",this,3)([]);return this.addValueChangedListener(e),e}},{kind:"method",key:"addValueChangedListener",value:function(e){e.addEventListener("value-changed",(e=>{e.stopPropagation();const t=e.target.schema;if(e.target===this)return;const i=!t.name||"flatten"in t&&t.flatten?e.detail.value:{[t.name]:e.detail.value};this.data={...this.data,...i},(0,l.B)(this,"value-changed",{value:this.data})}))}},{kind:"method",key:"_computeLabel",value:function(e,t){return this.computeLabel?this.computeLabel(e,t):e?e.name:""}},{kind:"method",key:"_computeHelper",value:function(e){return this.computeHelper?this.computeHelper(e):""}},{kind:"method",key:"_computeError",value:function(e,t){return Array.isArray(e)?o.dy`<ul> ${e.map((e=>o.dy`<li> ${this.computeError?this.computeError(e,t):e} </li>`))} </ul>`:this.computeError?this.computeError(e,t):e}},{kind:"method",key:"_computeWarning",value:function(e,t){return this.computeWarning?this.computeWarning(e,t):e}},{kind:"field",static:!0,key:"styles",value:()=>o.iv`.root>*{display:block}.root>:not([own-margin]):not(:last-child){margin-bottom:24px}ha-alert[own-margin]{margin-bottom:4px}`}]}}),o.oi)},70579:function(e,t,i){i.a(e,(async function(e,a){try{i.r(t),i.d(t,{HaLocationSelector:()=>d});var n=i(44249),o=i(57243),r=i(15093),s=i(27486),l=i(36522),u=i(5346),c=(i(29073),e([u]));u=(c.then?(await c)():c)[0];let d=(0,n.Z)([(0,r.Mo)("ha-selector-location")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Object})],key:"value",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",key:"_schema",value:()=>(0,s.Z)(((e,t)=>[{name:"",type:"grid",schema:[{name:"latitude",required:!0,selector:{number:{step:"any"}}},{name:"longitude",required:!0,selector:{number:{step:"any"}}}]},...e?[{name:"radius",required:!0,default:1e3,disabled:!!t,selector:{number:{min:0,step:1,mode:"box"}}}]:[]]))},{kind:"method",key:"willUpdate",value:function(){this.value||(this.value={latitude:this.hass.config.latitude,longitude:this.hass.config.longitude,radius:this.selector.location?.radius?1e3:void 0})}},{kind:"method",key:"render",value:function(){return o.dy` <p>${this.label?this.label:""}</p> <ha-locations-editor class="flex" .hass="${this.hass}" .helper="${this.helper}" .locations="${this._location(this.selector,this.value)}" @location-updated="${this._locationChanged}" @radius-updated="${this._radiusChanged}" pin-on-click></ha-locations-editor> <ha-form .hass="${this.hass}" .schema="${this._schema(this.selector.location?.radius,this.selector.location?.radius_readonly)}" .data="${this.value}" .computeLabel="${this._computeLabel}" .disabled="${this.disabled}" @value-changed="${this._valueChanged}"></ha-form> `}},{kind:"field",key:"_location",value(){return(0,s.Z)(((e,t)=>{const i=getComputedStyle(this),a=e.location?.radius?i.getPropertyValue("--zone-radius-color")||i.getPropertyValue("--accent-color"):void 0;return[{id:"location",latitude:!t||isNaN(t.latitude)?this.hass.config.latitude:t.latitude,longitude:!t||isNaN(t.longitude)?this.hass.config.longitude:t.longitude,radius:e.location?.radius?t?.radius||1e3:void 0,radius_color:a,icon:e.location?.icon||e.location?.radius?"mdi:map-marker-radius":"mdi:map-marker",location_editable:!0,radius_editable:!!e.location?.radius&&!e.location?.radius_readonly}]}))}},{kind:"method",key:"_locationChanged",value:function(e){const[t,i]=e.detail.location;(0,l.B)(this,"value-changed",{value:{...this.value,latitude:t,longitude:i}})}},{kind:"method",key:"_radiusChanged",value:function(e){const t=Math.round(e.detail.radius);(0,l.B)(this,"value-changed",{value:{...this.value,radius:t}})}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const t=e.detail.value,i=Math.round(e.detail.value.radius);(0,l.B)(this,"value-changed",{value:{latitude:t.latitude,longitude:t.longitude,...this.selector.location?.radius&&!this.selector.location?.radius_readonly?{radius:i}:{}}})}},{kind:"field",key:"_computeLabel",value(){return e=>e.name?this.hass.localize(`ui.components.selectors.location.${e.name}`):""}},{kind:"field",static:!0,key:"styles",value:()=>o.iv`ha-locations-editor{display:block;height:400px;margin-bottom:16px}p{margin-top:0}`}]}}),o.oi);a()}catch(e){a(e)}}))},38042:function(e,t,i){if(i.d(t,{n:()=>n}),66977!=i.j)var a=i(62212);const n=(e,t,i,n,o)=>{const r=`${i}-optimistic`;return{...(0,a._)(t,i,n,(async(e,i)=>{const a=o?o(t,i):void 0;return t[r]=i,()=>{a&&a.then((e=>e())),t[r]=void 0}})),async save(i){const a=t[r];let n;a&&(n=a.state,a.setState(i,!0));try{return await e(t,i)}catch(e){throw a&&a.setState(n,!0),e}}}}},80027:function(e,t,i){if(i.d(t,{DS:()=>o,Fl:()=>n,rP:()=>r,tp:()=>s}),66977!=i.j)var a=i(38042);const n=async(e,t)=>(await e.sendMessagePromise({type:"frontend/get_user_data",key:t})).value,o=async(e,t,i)=>e.sendMessagePromise({type:"frontend/set_user_data",key:t,value:i}),r=(e,t)=>(0,a.n)(((i,a)=>o(e,t,a)),e,`_frontendUserData-${t}`,(()=>n(e,t))),s=(e,t,i)=>r(e,t).subscribe(i)},20382:function(e,t,i){if(i.d(t,{FS:()=>l,Jb:()=>c,Tt:()=>u,c_:()=>r,oJ:()=>d,t6:()=>s,y4:()=>n,zt:()=>o}),66977!=i.j)var a=i(80027);let n=function(e){return e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none",e}({}),o=function(e){return e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24",e}({}),r=function(e){return e.local="local",e.server="server",e}({}),s=function(e){return e.language="language",e.system="system",e.DMY="DMY",e.MDY="MDY",e.YMD="YMD",e}({}),l=function(e){return e.language="language",e.monday="monday",e.tuesday="tuesday",e.wednesday="wednesday",e.thursday="thursday",e.friday="friday",e.saturday="saturday",e.sunday="sunday",e}({});const u=e=>(0,a.Fl)(e.connection,"language"),c=(e,t)=>(0,a.DS)(e.connection,"language",t),d=async(e,t,i,a,n)=>(await e.callWS({type:"frontend/get_translations",language:t,category:i,integration:a,config_flow:n})).resources},69919:function(e,t,i){i.a(e,(async function(e,a){try{i.d(t,{EX:()=>h,Fj:()=>w,M$:()=>P,SO:()=>p,Sk:()=>g,TN:()=>S,UJ:()=>y,Ym:()=>C,hF:()=>f});i(9359),i(56475),i(70104);var n=i(73358);if(99387==i.j)var o=i(73850);if(99387==i.j)var r=i(59847);var s=i(75278),l=i(50602),u=i(1416);if(99387==i.j)var c=i(76131);if(99387==i.j)var d=i(72473);var m=e([l]);l=(m.then?(await m)():m)[0];let h=function(e){return e[e.INSTALL=1]="INSTALL",e[e.SPECIFIC_VERSION=2]="SPECIFIC_VERSION",e[e.PROGRESS=4]="PROGRESS",e[e.BACKUP=8]="BACKUP",e[e.RELEASE_NOTES=16]="RELEASE_NOTES",e}({});const p=e=>(0,s.e)(e,h.PROGRESS)&&null!==e.attributes.update_percentage,f=(e,t=!1)=>(e.state===n.uo||t&&Boolean(e.attributes.skipped_version))&&(0,s.e)(e,h.INSTALL),g=e=>!!e.attributes.in_progress,y=(e,t)=>e.callWS({type:"update/release_notes",entity_id:t}),b="ioBroker Core",v="ioBroker Supervisor",_="ioBroker Operating System",k=(e,t)=>Object.values(e).filter((e=>"update"===(0,r.N)(e))).sort(((e,i)=>e.attributes.title===b?-3:i.attributes.title===b?3:e.attributes.title===_?-2:i.attributes.title===_?2:e.attributes.title===v?-1:i.attributes.title===v?1:(0,u.fe)(e.attributes.title||e.attributes.friendly_name||"",i.attributes.title||i.attributes.friendly_name||"",t))),w=(e,t=!1)=>k(e).filter((e=>f(e,t))),P=async(e,t)=>{const i=k(t.states,t.locale.language).map((e=>e.entity_id));if(!i.length)return void(0,c.showAlertDialog)(e,{title:t.localize("ui.panel.config.updates.no_update_entities.title"),text:t.localize("ui.panel.config.updates.no_update_entities.description"),warning:!0});(0,d.C)(e,{message:t.localize("ui.panel.config.updates.checking_updates")});let a=0;const n=await t.connection.subscribeEvents((i=>{"update"===(0,o.M)(i.data.entity_id)&&(a++,(0,d.C)(e,{message:t.localize("ui.panel.config.updates.updates_refreshed",{count:a})}))}),"state_changed");await t.callService("homeassistant","update_entity",{entity_id:i}),await new Promise((e=>{setTimeout(e,15e3)})),n(),0===a&&(0,d.C)(e,{message:t.localize("ui.panel.config.updates.no_new_updates")})},C=(e,t)=>{const i=e.state,a=e.attributes;if("off"===i){return a.latest_version&&a.skipped_version===a.latest_version?a.latest_version:t.formatEntityState(e)}if("on"===i&&g(e)){return(0,s.e)(e,h.PROGRESS)&&null!==a.update_percentage?t.localize("ui.card.update.installing_with_progress",{progress:(0,l.uf)(a.update_percentage,t.locale,{maximumFractionDigits:a.display_precision,minimumFractionDigits:a.display_precision})}):t.localize("ui.card.update.installing")}return t.formatEntityState(e)},S=(e,t)=>{const i=e.entity_id,a=t[i]?.domain;if("hassio"!==a)return"generic";const n=e.attributes.title||"";return n===b?"home_assistant":[b,v,_].includes(n)?"generic":"addon"};a()}catch(e){a(e)}}))},76131:function(e,t,i){i.r(t),i.d(t,{loadGenericDialog:()=>n,showAlertDialog:()=>r,showConfirmationDialog:()=>s,showPromptDialog:()=>l});var a=i(36522);const n=()=>Promise.all([i.e("46379"),i.e("66031"),i.e("25618"),i.e("7442"),i.e("73201"),i.e("19145")]).then(i.bind(i,79740)),o=(e,t,i)=>new Promise((o=>{const r=t.cancel,s=t.confirm;(0,a.B)(e,"show-dialog",{dialogTag:"dialog-box",dialogImport:n,dialogParams:{...t,...i,cancel:()=>{o(!!i?.prompt&&null),r&&r()},confirm:e=>{o(!i?.prompt||e),s&&s(e)}}})})),r=(e,t)=>o(e,t),s=(e,t)=>o(e,t,{confirmation:!0}),l=(e,t)=>o(e,t,{prompt:!0})},16485:function(e,t,i){i.a(e,(async function(e,t){try{i(92745);var a=i(61449),n=i(40574),o=i(30532),r=i(41674),s=i(49722),l=i(76632),u=i(7884),c=i(35185),d=i(60933),m=i(44180),h=i(49447);const e=async()=>{const e=(0,m.sS)(),t=[];(0,o.shouldPolyfill)()&&await Promise.all([i.e("80210"),i.e("74055")]).then(i.bind(i,98133)),(0,s.shouldPolyfill)()&&await Promise.all([i.e("83895"),i.e("75297"),i.e("80210"),i.e("60251")]).then(i.bind(i,59095)),(0,a.shouldPolyfill)(e)&&t.push(Promise.all([i.e("83895"),i.e("75297"),i.e("68250")]).then(i.bind(i,80561)).then((()=>(0,h.H)()))),(0,d.shouldPolyfill)()&&t.push(Promise.all([i.e("83895"),i.e("75297"),i.e("65578")]).then(i.bind(i,97995))),(0,n.shouldPolyfill)(e)&&t.push(Promise.all([i.e("83895"),i.e("75297"),i.e("59826")]).then(i.bind(i,31514))),(0,r.shouldPolyfill)(e)&&t.push(Promise.all([i.e("83895"),i.e("75297"),i.e("23649")]).then(i.bind(i,93840))),(0,l.shouldPolyfill)(e)&&t.push(Promise.all([i.e("83895"),i.e("75297"),i.e("42831")]).then(i.bind(i,29559))),(0,u.shouldPolyfill)(e)&&t.push(Promise.all([i.e("83895"),i.e("75297"),i.e("57377")]).then(i.bind(i,39030)).then((()=>i.e("61236").then(i.t.bind(i,4121,23))))),(0,c.shouldPolyfill)(e)&&t.push(Promise.all([i.e("83895"),i.e("75297"),i.e("13870")]).then(i.bind(i,74546))),0!==t.length&&await Promise.all(t).then((()=>(0,h.n)(e)))};await e(),t()}catch(e){t(e)}}),1)},62212:function(e,t,i){i.d(t,{B:()=>o,_:()=>n});var a=i(98330);const n=(e,t,i,n,o={unsubGrace:!0})=>{if(e[t])return e[t];let r,s,l=0,u=(0,a.M)();const c=()=>{if(!i)throw new Error("Collection does not support refresh");return i(e).then((e=>u.setState(e,!0)))},d=()=>c().catch((t=>{if(e.connected)throw t})),m=()=>{s=void 0,r&&r.then((e=>{e()})),u.clearState(),e.removeEventListener("ready",c),e.removeEventListener("disconnected",h)},h=()=>{s&&(clearTimeout(s),m())};return e[t]={get state(){return u.state},refresh:c,subscribe(t){l++,1===l&&(()=>{if(void 0!==s)return clearTimeout(s),void(s=void 0);n&&(r=n(e,u)),i&&(e.addEventListener("ready",d),d()),e.addEventListener("disconnected",h)})();const a=u.subscribe(t);return void 0!==u.state&&setTimeout((()=>t(u.state)),0),()=>{a(),l--,l||(o.unsubGrace?s=setTimeout(m,5e3):m())}}},e[t]},o=(e,t,i,a,o)=>n(a,e,t,i).subscribe(o)},98330:function(e,t,i){i.d(t,{M:()=>a});i(92745);const a=e=>{let t=[];function i(i,a){e=a?i:Object.assign(Object.assign({},e),i);let n=t;for(let t=0;t<n.length;t++)n[t](e)}return{get state(){return e},action(t){function a(e){i(e,!1)}return function(){let i=[e];for(let e=0;e<arguments.length;e++)i.push(arguments[e]);let n=t.apply(this,i);if(null!=n)return n instanceof Promise?n.then(a):a(n)}},setState:i,clearState(){e=void 0},subscribe:e=>(t.push(e),()=>{!function(e){let i=[];for(let a=0;a<t.length;a++)t[a]===e?e=null:i.push(t[a]);t=i}(e)})}}}};
//# sourceMappingURL=50617.32fcae12e7ec5d7d.js.map