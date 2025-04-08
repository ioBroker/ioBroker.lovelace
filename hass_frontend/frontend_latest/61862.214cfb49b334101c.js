export const __webpack_ids__=["61862"];export const __webpack_modules__={95262:function(e,t,i){function n(e){return null==e||Array.isArray(e)?e:[e]}i.d(t,{r:()=>n})},75011:function(e,t,i){i.d(t,{I:()=>a,k:()=>n});i(92519),i(42179),i(89256),i(24931),i(88463),i(57449),i(19814);const n=new Set(["primary","accent","disabled","red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","light-grey","grey","dark-grey","blue-grey","black","white"]);function a(e){return n.has(e)?`var(--${e}-color)`:e}},46467:function(e,t,i){i.a(e,(async function(e,n){try{i.d(t,{D_:()=>T,NC:()=>g,Nh:()=>v,U8:()=>$,WB:()=>u,mn:()=>h,p6:()=>l,ud:()=>y,yQ:()=>w});i(9359),i(1331);var a=i(16485),o=i(27486),r=i(20382),s=i(11104),d=e([a,s]);[a,s]=d.then?(await d)():d;(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric",timeZone:(0,s.f)(e.time_zone,t)})));const l=(e,t,i)=>c(t,i.time_zone).format(e),c=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",timeZone:(0,s.f)(e.time_zone,t)}))),h=(e,t,i)=>m(t,i.time_zone).format(e),m=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"short",day:"numeric",timeZone:(0,s.f)(e.time_zone,t)}))),u=(e,t,i)=>{const n=p(t,i.time_zone);if(t.date_format===r.t6.language||t.date_format===r.t6.system)return n.format(e);const a=n.formatToParts(e),o=a.find((e=>"literal"===e.type))?.value,s=a.find((e=>"day"===e.type))?.value,d=a.find((e=>"month"===e.type))?.value,l=a.find((e=>"year"===e.type))?.value,c=a.at(a.length-1);let h="literal"===c?.type?c?.value:"";"bg"===t.language&&t.date_format===r.t6.YMD&&(h="");return{[r.t6.DMY]:`${s}${o}${d}${o}${l}${h}`,[r.t6.MDY]:`${d}${o}${s}${o}${l}${h}`,[r.t6.YMD]:`${l}${o}${d}${o}${s}${h}`}[t.date_format]},p=(0,o.Z)(((e,t)=>{const i=e.date_format===r.t6.system?void 0:e.language;return e.date_format===r.t6.language||(e.date_format,r.t6.system),new Intl.DateTimeFormat(i,{year:"numeric",month:"numeric",day:"numeric",timeZone:(0,s.f)(e.time_zone,t)})})),y=(e,t,i)=>_(t,i.time_zone).format(e),_=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{day:"numeric",month:"short",timeZone:(0,s.f)(e.time_zone,t)}))),g=(e,t,i)=>f(t,i.time_zone).format(e),f=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"long",year:"numeric",timeZone:(0,s.f)(e.time_zone,t)}))),v=(e,t,i)=>b(t,i.time_zone).format(e),b=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"long",timeZone:(0,s.f)(e.time_zone,t)}))),w=(e,t,i)=>k(t,i.time_zone).format(e),k=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",timeZone:(0,s.f)(e.time_zone,t)}))),T=(e,t,i)=>I(t,i.time_zone).format(e),I=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",timeZone:(0,s.f)(e.time_zone,t)}))),$=(e,t,i)=>D(t,i.time_zone).format(e),D=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"short",timeZone:(0,s.f)(e.time_zone,t)})));n()}catch(e){n(e)}}))},64214:function(e,t,i){i.a(e,(async function(e,n){try{i.d(t,{DG:()=>u,E8:()=>f,Fu:()=>g,NR:()=>b,o0:()=>h,yD:()=>y});var a=i(16485),o=i(27486),r=i(46467),s=i(33570),d=i(11104),l=i(16922),c=e([a,d,r,s]);[a,d,r,s]=c.then?(await c)():c;const h=(e,t,i)=>m(t,i.time_zone).format(e),m=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:(0,l.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,l.y)(e)?"h12":"h23",timeZone:(0,d.f)(e.time_zone,t)}))),u=((0,o.Z)((()=>new Intl.DateTimeFormat(void 0,{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}))),(e,t,i)=>p(t,i.time_zone).format(e)),p=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"short",day:"numeric",hour:(0,l.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,l.y)(e)?"h12":"h23",timeZone:(0,d.f)(e.time_zone,t)}))),y=(e,t,i)=>_(t,i.time_zone).format(e),_=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"short",day:"numeric",hour:(0,l.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,l.y)(e)?"h12":"h23",timeZone:(0,d.f)(e.time_zone,t)}))),g=(e,t,i)=>(new Date).getFullYear()===e.getFullYear()?y(e,t,i):u(e,t,i),f=(e,t,i)=>v(t,i.time_zone).format(e),v=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:(0,l.y)(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,l.y)(e)?"h12":"h23",timeZone:(0,d.f)(e.time_zone,t)}))),b=(e,t,i)=>`${(0,r.WB)(e,t,i)}, ${(0,s.mr)(e,t,i)}`;n()}catch(e){n(e)}}))},33570:function(e,t,i){i.a(e,(async function(e,n){try{i.d(t,{Vu:()=>h,Zs:()=>y,mr:()=>l,xO:()=>u});var a=i(16485),o=i(27486),r=i(11104),s=i(16922),d=e([a,r]);[a,r]=d.then?(await d)():d;const l=(e,t,i)=>c(t,i.time_zone).format(e),c=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",hourCycle:(0,s.y)(e)?"h12":"h23",timeZone:(0,r.f)(e.time_zone,t)}))),h=(e,t,i)=>m(t,i.time_zone).format(e),m=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{hour:(0,s.y)(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,s.y)(e)?"h12":"h23",timeZone:(0,r.f)(e.time_zone,t)}))),u=(e,t,i)=>p(t,i.time_zone).format(e),p=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",hour:(0,s.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,s.y)(e)?"h12":"h23",timeZone:(0,r.f)(e.time_zone,t)}))),y=(e,t,i)=>_(t,i.time_zone).format(e),_=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"2-digit",hour12:!1,timeZone:(0,r.f)(e.time_zone,t)})));n()}catch(e){n(e)}}))},94947:function(e,t,i){i.a(e,(async function(e,n){try{i.d(t,{G:()=>l});var a=i(16485),o=i(27486),r=i(27046),s=e([a,r]);[a,r]=s.then?(await s)():s;const d=(0,o.Z)((e=>new Intl.RelativeTimeFormat(e.language,{numeric:"auto"}))),l=(e,t,i,n=!0)=>{const a=(0,r.W)(e,i,t);return n?d(t).format(a.value,a.unit):Intl.NumberFormat(t.language,{style:"unit",unit:a.unit,unitDisplay:"long"}).format(Math.abs(a.value))};n()}catch(e){n(e)}}))},11104:function(e,t,i){i.a(e,(async function(e,n){try{i.d(t,{f:()=>l});var a=i(16485),o=i(20382),r=e([a]);a=(r.then?(await r)():r)[0];const s=Intl.DateTimeFormat?.().resolvedOptions?.().timeZone,d=s??"UTC",l=(e,t)=>e===o.c_.local&&s?d:t;n()}catch(e){n(e)}}))},31064:function(e,t,i){i.d(t,{T:()=>a});const n=/^(\w+)\.(\w+)$/,a=e=>n.test(e)},87733:function(e,t,i){i.d(t,{f:()=>n});const n=e=>e.charAt(0).toUpperCase()+e.slice(1)},35830:function(e,t,i){i.d(t,{q:()=>n});const n=e=>{const t=window.location.pathname;return e?t+"?"+e:t}},27046:function(e,t,i){i.a(e,(async function(e,n){try{i.d(t,{W:()=>h});var a=i(13809),o=i(29558),r=i(94763),s=i(19631);const d=1e3,l=60,c=60*l;function h(e,t=Date.now(),i,n={}){const h={...m,...n||{}},u=(+e-+t)/d;if(Math.abs(u)<h.second)return{value:Math.round(u),unit:"second"};const p=u/l;if(Math.abs(p)<h.minute)return{value:Math.round(p),unit:"minute"};const y=u/c;if(Math.abs(y)<h.hour)return{value:Math.round(y),unit:"hour"};const _=new Date(e),g=new Date(t);_.setHours(0,0,0,0),g.setHours(0,0,0,0);const f=(0,a.j)(_,g);if(0===f)return{value:Math.round(y),unit:"hour"};if(Math.abs(f)<h.day)return{value:f,unit:"day"};const v=(0,s.Bt)(i),b=(0,o.z)(_,{weekStartsOn:v}),w=(0,o.z)(g,{weekStartsOn:v}),k=(0,r.p)(b,w);if(0===k)return{value:f,unit:"day"};if(Math.abs(k)<h.week)return{value:k,unit:"week"};const T=_.getFullYear()-g.getFullYear(),I=12*T+_.getMonth()-g.getMonth();return 0===I?{value:k,unit:"week"}:Math.abs(I)<h.month||0===T?{value:I,unit:"month"}:{value:Math.round(T),unit:"year"}}const m={second:45,minute:45,hour:22,day:5,week:4,month:11};n()}catch(u){n(u)}}))},93826:function(e,t,i){i.d(t,{P:()=>n});const n=(e,t,i=!0,n=!0)=>{let a,o=0;const r=(...r)=>{const s=()=>{o=!1===i?0:Date.now(),a=void 0,e(...r)},d=Date.now();o||!1!==i||(o=d);const l=t-(d-o);l<=0||l>t?(a&&(clearTimeout(a),a=void 0),o=d,e(...r)):a||!1===n||(a=window.setTimeout(s,l))};return r.cancel=()=>{clearTimeout(a),a=void 0,o=0},r}},7285:function(e,t,i){i.d(t,{M:()=>l});var n=i(44249),a=i(72621),o=i(65703),r=i(46289),s=i(57243),d=i(15093);let l=(0,n.Z)([(0,d.Mo)("ha-list-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,a.Z)(i,"renderRipple",this,3)([])}},{kind:"get",static:!0,key:"styles",value:function(){return[r.W,s.iv`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-inline-start:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px));padding-inline-end:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)!important}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)!important}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center;flex-shrink:0}:host([graphic=icon]:not([twoline])) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,20px)!important}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`,"rtl"===document.dir?s.iv`span.material-icons:first-of-type,span.material-icons:last-of-type{direction:rtl!important;--direction:rtl}`:s.iv``]}}]}}),o.K)},30043:function(e,t,i){var n=i(44249),a=i(72621),o=i(19799),r=i(23111),s=i(57243),d=i(15093);(0,n.Z)([(0,d.Mo)("ha-ripple")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:"attachableTouchController",value(){return new o.J(this,this._onTouchControlChange.bind(this))}},{kind:"method",key:"attach",value:function(e){(0,a.Z)(i,"attach",this,3)([e]),this.attachableTouchController.attach(e)}},{kind:"method",key:"detach",value:function(){(0,a.Z)(i,"detach",this,3)([]),this.attachableTouchController.detach()}},{kind:"field",key:"_handleTouchEnd",value(){return()=>{this.disabled||(0,a.Z)(i,"endPressAnimation",this,3)([])}}},{kind:"method",key:"_onTouchControlChange",value:function(e,t){e?.removeEventListener("touchend",this._handleTouchEnd),t?.addEventListener("touchend",this._handleTouchEnd)}},{kind:"field",static:!0,key:"styles",value(){return[...(0,a.Z)(i,"styles",this),s.iv`:host{--md-ripple-hover-opacity:var(--ha-ripple-hover-opacity, 0.08);--md-ripple-pressed-opacity:var(--ha-ripple-pressed-opacity, 0.12);--md-ripple-hover-color:var(
          --ha-ripple-hover-color,
          var(--ha-ripple-color, var(--secondary-text-color))
        );--md-ripple-pressed-color:var(
          --ha-ripple-pressed-color,
          var(--ha-ripple-color, var(--secondary-text-color))
        )}`]}}]}}),r.M)},43546:function(e,t,i){i.d(t,{Cp:()=>r,TZ:()=>s,W2:()=>o,YY:()=>l,iI:()=>a,j2:()=>d,oT:()=>n});i(9359),i(70104);const n=e=>e.map((e=>{if("string"!==e.type)return e;switch(e.name){case"username":return{...e,autocomplete:"username",autofocus:!0};case"password":return{...e,autocomplete:"current-password"};case"code":return{...e,autocomplete:"one-time-code",autofocus:!0};default:return e}})),a=(e,t)=>e.callWS({type:"auth/sign_path",path:t}),o=async(e,t,i,n)=>e.callWS({type:"config/auth_provider/homeassistant/create",user_id:t,username:i,password:n}),r=(e,t,i)=>e.callWS({type:"config/auth_provider/homeassistant/change_password",current_password:t,new_password:i}),s=(e,t,i)=>e.callWS({type:"config/auth_provider/homeassistant/admin_change_password",user_id:t,password:i}),d=(e,t,i)=>e.callWS({type:"config/auth_provider/homeassistant/admin_change_username",user_id:t,username:i}),l=(e,t,i)=>e.callWS({type:"auth/delete_all_refresh_tokens",token_type:t,delete_current_token:i})},99650:function(e,t,i){i.d(t,{B:()=>v,Ch:()=>l,Lr:()=>u,Mw:()=>g,T9:()=>p,Xn:()=>_,i4:()=>h,jU:()=>d,kU:()=>s,nk:()=>c,ou:()=>w,qW:()=>r,r:()=>y,sF:()=>o,z9:()=>k,zj:()=>b});var n=i(86190),a=i(43546);const o=[1,2,3,4,6,8],r=2,s="hls",d="web_rtc",l=(e,t,i)=>`${e}&width=${t}&height=${i}`,c=e=>`/api/camera_proxy_stream/${e.entity_id}?token=${e.attributes.access_token}`,h=async(e,t,i,a)=>{const o=await(0,n.U)("_cameraTmbUrl",9e3,m,e,t);return l(o,i,a)},m=async(e,t)=>{const i=await(0,a.iI)(e,`/api/camera_proxy/${t}`);return e.hassUrl(i.path)},u=async(e,t,i)=>{const n={type:"camera/stream",entity_id:t};i&&(n.format=i);const a=await e.callWS(n);return a.url=e.hassUrl(a.url),a},p=(e,t,i,n)=>e.connection.subscribeMessage(n,{type:"camera/webrtc/offer",entity_id:t,offer:i}),y=(e,t,i,n)=>e.callWS({type:"camera/webrtc/candidate",entity_id:t,session_id:i,candidate:n}),_=(e,t)=>e.callWS({type:"camera/get_prefs",entity_id:t}),g=(e,t,i)=>e.callWS({type:"camera/update_prefs",entity_id:t,...i}),f="media-source://camera/",v=e=>e.startsWith(f),b=e=>e.substring(22),w=async(e,t)=>e.callWS({type:"camera/capabilities",entity_id:t}),k=async(e,t)=>e.callWS({type:"camera/webrtc/get_client_config",entity_id:t})},75101:function(e,t,i){i.d(t,{$H:()=>n,DJ:()=>s,LZ:()=>o,Nn:()=>m,Ny:()=>u,Pk:()=>y,Q4:()=>r,RQ:()=>l,SO:()=>c,T0:()=>p,aR:()=>a,iJ:()=>h,pB:()=>d});i(9359),i(56475),i(1331);const n=(e,t)=>e.callWS({type:"config_entries/subentries/list",entry_id:t}),a=(e,t,i)=>e.callWS({type:"config_entries/subentries/delete",entry_id:t,subentry_id:i}),o=["migration_error","setup_error","setup_retry"],r=["not_loaded","loaded","setup_error","setup_retry"],s=(e,t,i)=>{const n={type:"config_entries/subscribe"};return i&&i.type&&(n.type_filter=i.type),e.connection.subscribeMessage((e=>t(e)),n)},d=(e,t)=>{const i={};return t&&(t.type&&(i.type_filter=t.type),t.domain&&(i.domain=t.domain)),e.callWS({type:"config_entries/get",...i})},l=(e,t)=>e.callWS({type:"config_entries/get_single",entry_id:t}),c=(e,t,i)=>e.callWS({type:"config_entries/update",entry_id:t,...i}),h=(e,t)=>e.callApi("DELETE",`config/config_entries/entry/${t}`),m=(e,t)=>e.callApi("POST",`config/config_entries/entry/${t}/reload`),u=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:"user"}),p=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:null}),y=(e,t)=>{if(!t)return e;const i=e.find((e=>e.entry_id===t));if(!i)return e;return[i,...e.filter((e=>e.entry_id!==t))]}},95276:function(e,t,i){i.d(t,{$G:()=>m,$g:()=>l,CV:()=>p,He:()=>h,LO:()=>d,cA:()=>c,fC:()=>u,uo:()=>y,wL:()=>s});i(9359),i(56475),i(70104);var n=i(73850),a=i(47194),o=i(96194),r=i(1416);let s=function(e){return e.NeedsAction="needs_action",e.Completed="completed",e}({}),d=function(e){return e.NONE="none",e.ALPHA_ASC="alpha_asc",e.ALPHA_DESC="alpha_desc",e.DUEDATE_ASC="duedate_asc",e.DUEDATE_DESC="duedate_desc",e}({}),l=function(e){return e[e.CREATE_TODO_ITEM=1]="CREATE_TODO_ITEM",e[e.DELETE_TODO_ITEM=2]="DELETE_TODO_ITEM",e[e.UPDATE_TODO_ITEM=4]="UPDATE_TODO_ITEM",e[e.MOVE_TODO_ITEM=8]="MOVE_TODO_ITEM",e[e.SET_DUE_DATE_ON_ITEM=16]="SET_DUE_DATE_ON_ITEM",e[e.SET_DUE_DATETIME_ON_ITEM=32]="SET_DUE_DATETIME_ON_ITEM",e[e.SET_DESCRIPTION_ON_ITEM=64]="SET_DESCRIPTION_ON_ITEM",e}({});const c=e=>Object.keys(e.states).filter((t=>"todo"===(0,n.M)(t)&&!(0,o.rk)(e.states[t].state))).map((t=>({...e.states[t],entity_id:t,name:(0,a.C)(e.states[t])}))).sort(((t,i)=>(0,r.$K)(t.name,i.name,e.locale.language))),h=(e,t,i)=>e.connection.subscribeMessage(i,{type:"todo/item/subscribe",entity_id:t}),m=(e,t,i)=>e.callService("todo","update_item",{item:i.uid,rename:i.summary,status:i.status,description:i.description,due_datetime:i.due?.includes("T")?i.due:void 0,due_date:void 0===i.due||i.due?.includes("T")?void 0:i.due},{entity_id:t}),u=(e,t,i)=>e.callService("todo","add_item",{item:i.summary,description:i.description||void 0,due_datetime:i.due?.includes("T")?i.due:void 0,due_date:void 0===i.due||i.due?.includes("T")?void 0:i.due},{entity_id:t}),p=(e,t,i)=>e.callService("todo","remove_item",{item:i},{entity_id:t}),y=(e,t,i,n)=>e.callWS({type:"todo/item/move",entity_id:t,uid:i,previous_uid:n})},96530:function(e,t,i){i.d(t,{X:()=>o,y:()=>a});var n=i(92636);const a=["input_boolean","input_button","input_text","input_number","input_datetime","input_select","counter","timer","schedule"],o=(0,n.z)(a)},62037:function(e,t,i){i.a(e,(async function(e,n){try{i.d(t,{Do:()=>b,Z6:()=>v,l$:()=>f});i(92519),i(42179),i(89256),i(24931),i(88463),i(57449),i(19814);var a=i(28113),o=i(49e3),r=(i(3613),i(49025),i(3709)),s=i(49461),d=i(27526),l=i(88374),c=i(59913),h=i(40598),m=i(53251),u=i(50625),p=i(40249),y=e([a,o,r,s,d,l,c,h,m,u]);[a,o,r,s,d,l,c,h,m,u]=y.then?(await y)():y;const _=new Set(["entity","entities","button","entity-button","glance","grid","section","light","sensor","thermostat","weather-forecast","tile","heading"]),g={"alarm-panel":()=>Promise.all([i.e("46379"),i.e("84269")]).then(i.bind(i,40036)),area:()=>Promise.all([i.e("79931"),i.e("37910")]).then(i.bind(i,82820)),calendar:()=>Promise.all([i.e("41103"),i.e("49016"),i.e("78018"),i.e("45898"),i.e("49312")]).then(i.bind(i,18377)),conditional:()=>i.e("8715").then(i.bind(i,22194)),"empty-state":()=>i.e("18248").then(i.bind(i,98962)),"energy-compare":()=>Promise.all([i.e("3134"),i.e("28612"),i.e("12767"),i.e("72743"),i.e("15590")]).then(i.bind(i,54586)),"energy-carbon-consumed-gauge":()=>Promise.all([i.e("99287"),i.e("3134"),i.e("28612"),i.e("12767"),i.e("72743"),i.e("32654")]).then(i.bind(i,67790)),"energy-date-selection":()=>Promise.all([i.e("46379"),i.e("3134"),i.e("28612"),i.e("12767"),i.e("11012"),i.e("72743"),i.e("27232"),i.e("62058")]).then(i.bind(i,23893)),"energy-devices-graph":()=>Promise.all([i.e("3134"),i.e("28612"),i.e("12767"),i.e("72743"),i.e("87593"),i.e("87969")]).then(i.bind(i,18709)),"energy-devices-detail-graph":()=>Promise.all([i.e("3134"),i.e("28612"),i.e("12767"),i.e("41163"),i.e("72743"),i.e("87593"),i.e("63697")]).then(i.bind(i,36681)),"energy-distribution":()=>Promise.all([i.e("3134"),i.e("28612"),i.e("12767"),i.e("72743"),i.e("16160")]).then(i.bind(i,93892)),"energy-gas-graph":()=>Promise.all([i.e("3134"),i.e("28612"),i.e("12767"),i.e("41163"),i.e("72743"),i.e("87593"),i.e("61217")]).then(i.bind(i,74257)),"energy-water-graph":()=>Promise.all([i.e("3134"),i.e("28612"),i.e("12767"),i.e("41163"),i.e("72743"),i.e("87593"),i.e("19764")]).then(i.bind(i,52081)),"energy-grid-neutrality-gauge":()=>Promise.all([i.e("99287"),i.e("3134"),i.e("28612"),i.e("12767"),i.e("72743"),i.e("90564")]).then(i.bind(i,4117)),"energy-solar-consumed-gauge":()=>Promise.all([i.e("3134"),i.e("28612"),i.e("12767"),i.e("72743"),i.e("84464")]).then(i.bind(i,33637)),"energy-self-sufficiency-gauge":()=>Promise.all([i.e("99287"),i.e("3134"),i.e("28612"),i.e("12767"),i.e("72743"),i.e("43752")]).then(i.bind(i,70477)),"energy-solar-graph":()=>Promise.all([i.e("3134"),i.e("28612"),i.e("12767"),i.e("41163"),i.e("72743"),i.e("87593"),i.e("85745")]).then(i.bind(i,63)),"energy-sources-table":()=>Promise.all([i.e("3134"),i.e("28612"),i.e("12767"),i.e("66018"),i.e("72743"),i.e("21483")]).then(i.bind(i,74549)),"energy-usage-graph":()=>Promise.all([i.e("3134"),i.e("28612"),i.e("12767"),i.e("41163"),i.e("72743"),i.e("87593"),i.e("51171")]).then(i.bind(i,32672)),"energy-sankey":()=>Promise.all([i.e("3134"),i.e("28612"),i.e("12767"),i.e("50382"),i.e("3707"),i.e("72743"),i.e("87593"),i.e("64409")]).then(i.bind(i,10782)),"entity-filter":()=>i.e("94369").then(i.bind(i,91308)),error:()=>i.e("37269").then(i.bind(i,53257)),gauge:()=>i.e("40389").then(i.bind(i,10188)),"history-graph":()=>Promise.all([i.e("50382"),i.e("77535"),i.e("87593"),i.e("6473"),i.e("34815")]).then(i.bind(i,26799)),"horizontal-stack":()=>i.e("94618").then(i.bind(i,41023)),humidifier:()=>i.e("6892").then(i.bind(i,18344)),iframe:()=>i.e("47473").then(i.bind(i,28528)),logbook:()=>Promise.all([i.e("65499"),i.e("3098")]).then(i.bind(i,18573)),map:()=>Promise.all([i.e("35637"),i.e("49554"),i.e("13740")]).then(i.bind(i,11823)),markdown:()=>Promise.all([i.e("2981"),i.e("34172")]).then(i.bind(i,91713)),clock:()=>i.e("64153").then(i.bind(i,91502)),"media-control":()=>Promise.all([i.e("24061"),i.e("59105")]).then(i.bind(i,78793)),"picture-elements":()=>Promise.all([i.e("79931"),i.e("3371"),i.e("10745"),i.e("71683")]).then(i.bind(i,31221)),"picture-entity":()=>Promise.all([i.e("79931"),i.e("14517")]).then(i.bind(i,54529)),"picture-glance":()=>Promise.all([i.e("79931"),i.e("99457")]).then(i.bind(i,57733)),picture:()=>i.e("23339").then(i.bind(i,69773)),"plant-status":()=>i.e("63519").then(i.bind(i,84255)),"recovery-mode":()=>Promise.all([i.e("5080"),i.e("50408"),i.e("837"),i.e("31664"),i.e("39124")]).then(i.bind(i,34713)),"todo-list":()=>Promise.all([i.e("46379"),i.e("41258"),i.e("2981"),i.e("81119")]).then(i.bind(i,33841)),"shopping-list":()=>Promise.all([i.e("46379"),i.e("41258"),i.e("2981"),i.e("81119"),i.e("91480")]).then(i.bind(i,28081)),starting:()=>i.e("32197").then(i.bind(i,50957)),"statistics-graph":()=>Promise.all([i.e("3134"),i.e("28612"),i.e("12767"),i.e("72743"),i.e("51062")]).then(i.bind(i,56615)),statistic:()=>Promise.all([i.e("3134"),i.e("28612"),i.e("12767"),i.e("72743"),i.e("92692")]).then(i.bind(i,98578)),"vertical-stack":()=>i.e("13157").then(i.bind(i,73753))},f=e=>(0,p.Xm)("card",e,_,g,void 0,void 0),v=e=>(0,p.Tw)("card",e,_,g,void 0,void 0),b=e=>(0,p.ED)(e,"card",_,g);n()}catch(e){n(e)}}))},64830:function(e,t,i){i.d(t,{Q:()=>r,t:()=>o});var n=i(40249);const a={picture:()=>i.e("64167").then(i.bind(i,75142)),buttons:()=>Promise.all([i.e("59821"),i.e("65970")]).then(i.bind(i,46667)),graph:()=>i.e("87828").then(i.bind(i,43403))},o=e=>(0,n.Tw)("header-footer",e,void 0,a,void 0,void 0),r=e=>(0,n.ED)(e,"header-footer",void 0,a)},39305:function(e,t,i){i.a(e,(async function(e,n){try{i.r(t);var a=i(44249),o=i(72621),r=(i(9359),i(70104),i(18672)),s=(i(2060),i(57243)),d=i(15093),l=i(27486),c=i(72344),h=i(68958),m=i(36522),u=i(47194),p=i(75278),y=i(83523),_=i(35830),g=i(58776),f=(i(59826),i(20130),i(23334),i(7285),i(43344),i(51223)),v=(i(37583),i(47593),i(75101)),b=i(63318),w=i(57816),k=i(95276),T=i(38572),I=i(76131),$=i(91163),D=i(28008),E=i(11734),M=i(4026),x=e([f,E]);[f,E]=x.then?(await x)():x;const Z="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",C="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10M17,11H15V9H17V11M13,11H11V9H13V11M9,11H7V9H9V11Z",z="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",A="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",P="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",S="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";(0,a.Z)([(0,d.Mo)("ha-panel-todo")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,reflect:!0})],key:"mobile",value:()=>!1},{kind:"field",decorators:[(0,h.t)({key:"selectedTodoEntity",state:!0})],key:"_entityId",value:void 0},{kind:"field",key:"_headerHeight",value:()=>56},{kind:"field",key:"_showPaneController",value(){return new r.Z(this,{callback:e=>e[0]?.contentRect.width>750})}},{kind:"field",key:"_mql",value:void 0},{kind:"field",key:"_conversation",value(){return(0,l.Z)((e=>(0,c.p)(this.hass,"conversation")))}},{kind:"method",key:"connectedCallback",value:function(){(0,o.Z)(i,"connectedCallback",this,3)([]),this._mql=window.matchMedia("(max-width: 450px), all and (max-height: 500px)"),this._mql.addListener(this._setIsMobile),this.mobile=this._mql.matches;const e=getComputedStyle(this);this._headerHeight=Number(e.getPropertyValue("--header-height").replace("px",""))}},{kind:"method",key:"disconnectedCallback",value:function(){(0,o.Z)(i,"disconnectedCallback",this,3)([]),this._mql?.removeListener(this._setIsMobile),this._mql=void 0}},{kind:"field",key:"_setIsMobile",value(){return e=>{this.mobile=e.matches}}},{kind:"method",key:"willUpdate",value:function(e){if((0,o.Z)(i,"willUpdate",this,3)([e]),!this.hasUpdated){this.hass.loadFragmentTranslation("lovelace");const e=(0,g.io)("entity_id");e?this._entityId=e:(this._entityId&&!(this._entityId in this.hass.states)&&(this._entityId=void 0),this._entityId||(this._entityId=(0,k.cA)(this.hass)[0]?.entity_id))}!e.has("_entityId")&&this.hasUpdated||this._setupTodoElement()}},{kind:"method",key:"_setupTodoElement",value:function(){this._entityId?(0,y.c)((0,_.q)((0,g.ou)({entity_id:this._entityId})),{replace:!0}):(0,y.c)((0,_.q)(""),{replace:!0})}},{kind:"field",key:"_cardConfig",value:()=>(0,l.Z)((e=>({type:"todo-list",entity:e})))},{kind:"method",key:"render",value:function(){const e=this._entityId?this.hass.entities[this._entityId]:void 0,t=this._entityId?this.hass.states[this._entityId]:void 0,i=this._showPaneController.value??!this.narrow,n=(0,k.cA)(this.hass).map((e=>s.dy`<ha-list-item graphic="icon" @click="${this._handleEntityPicked}" .entityId="${e.entity_id}" .activated="${e.entity_id===this._entityId}"> <ha-state-icon .stateObj="${e}" .hass="${this.hass}" slot="graphic"></ha-state-icon>${e.name} </ha-list-item> `));return s.dy` <ha-two-pane-top-app-bar-fixed .pane="${i}" footer> <ha-menu-button slot="navigationIcon" .hass="${this.hass}" .narrow="${this.narrow}"></ha-menu-button> <div slot="title"> ${i?this.hass.localize("panel.todo"):s.dy`<ha-button-menu class="lists" activatable fixed .noAnchor="${this.mobile}" .y="${this.mobile?this._headerHeight/2:this._headerHeight/4}" .x="${this.mobile?0:void 0}"> <ha-button slot="trigger"> <div> ${this._entityId?t?(0,u.C)(t):this._entityId:""} </div> <ha-svg-icon slot="trailingIcon" .path="${Z}"></ha-svg-icon> </ha-button> ${n} ${this.hass.user?.is_admin?s.dy`<li divider role="separator"></li> <ha-list-item graphic="icon" @click="${this._addList}"> <ha-svg-icon .path="${S}" slot="graphic"></ha-svg-icon> ${this.hass.localize("ui.panel.todo.create_list")} </ha-list-item>`:s.Ld} </ha-button-menu>`} </div> <mwc-list slot="pane" activatable>${n}</mwc-list> ${i&&this.hass.user?.is_admin?s.dy`<ha-list-item graphic="icon" slot="pane-footer" @click="${this._addList}"> <ha-svg-icon .path="${S}" slot="graphic"></ha-svg-icon> ${this.hass.localize("ui.panel.todo.create_list")} </ha-list-item>`:s.Ld} <ha-button-menu slot="actionItems"> <ha-icon-button slot="trigger" .label="${""}" .path="${A}"></ha-icon-button> ${this._conversation(this.hass.config.components)?s.dy`<ha-list-item graphic="icon" @click="${this._showMoreInfoDialog}" .disabled="${!this._entityId}"> <ha-svg-icon .path="${P}" slot="graphic"> </ha-svg-icon> ${this.hass.localize("ui.panel.todo.information")} </ha-list-item>`:s.Ld} <li divider role="separator"></li> <ha-list-item graphic="icon" @click="${this._showVoiceCommandDialog}"> <ha-svg-icon .path="${C}" slot="graphic"> </ha-svg-icon> ${this.hass.localize("ui.panel.todo.assist")} </ha-list-item> ${"local_todo"===e?.platform?s.dy` <li divider role="separator"></li> <ha-list-item graphic="icon" @click="${this._deleteList}" class="warning" .disabled="${!this._entityId}"> <ha-svg-icon .path="${z}" slot="graphic" class="warning"> </ha-svg-icon> ${this.hass.localize("ui.panel.todo.delete_list")} </ha-list-item>`:s.Ld} </ha-button-menu> <div id="columns"> <div class="column"> ${this._entityId?s.dy` <hui-card .hass="${this.hass}" .config="${this._cardConfig(this._entityId)}"></hui-card> `:s.Ld} </div> </div> ${t&&(0,p.e)(t,k.$g.CREATE_TODO_ITEM)?s.dy`<ha-fab .label="${this.hass.localize("ui.panel.todo.add_item")}" extended @click="${this._addItem}"> <ha-svg-icon slot="icon" .path="${S}"></ha-svg-icon> </ha-fab>`:s.Ld} </ha-two-pane-top-app-bar-fixed> `}},{kind:"method",key:"_handleEntityPicked",value:function(e){this._entityId=e.currentTarget.entityId}},{kind:"method",key:"_addList",value:async function(){(0,T.t)(this,{startFlowHandler:"local_todo",showAdvanced:this.hass.userData?.showAdvanced,manifest:await(0,w.t4)(this.hass,"local_todo")})}},{kind:"method",key:"_showMoreInfoDialog",value:function(){this._entityId&&(0,m.B)(this,"hass-more-info",{entityId:this._entityId})}},{kind:"method",key:"_deleteList",value:async function(){if(!this._entityId)return;const e=await(0,b.L3)(this.hass,this._entityId);if("local_todo"!==e.platform)return;const t=e.config_entry_id;if(!t)return;if(!await(0,I.showConfirmationDialog)(this,{title:this.hass.localize("ui.panel.todo.delete_confirm_title",{name:this._entityId in this.hass.states?(0,u.C)(this.hass.states[this._entityId]):this._entityId}),text:this.hass.localize("ui.panel.todo.delete_confirm_text"),confirmText:this.hass.localize("ui.common.delete"),dismissText:this.hass.localize("ui.common.cancel"),destructive:!0}))return;const i=await(0,v.iJ)(this.hass,t);this._entityId=(0,k.cA)(this.hass)[0]?.entity_id,i.require_restart&&(0,I.showAlertDialog)(this,{text:this.hass.localize("ui.panel.todo.restart_confirm")})}},{kind:"method",key:"_showVoiceCommandDialog",value:function(){(0,$._)(this,this.hass,{pipeline_id:"last_used"})}},{kind:"method",key:"_addItem",value:function(){(0,M.B)(this,{entity:this._entityId})}},{kind:"get",static:!0,key:"styles",value:function(){return[D.Qx,s.iv`:host{display:block}#columns{display:flex;flex-direction:row;justify-content:center;margin:8px;padding-bottom:70px}.column{flex:1 0 0;max-width:500px;min-width:0}:host([mobile]) .lists{--mdc-menu-min-width:100vw}:host(:not([mobile])) .lists ha-list-item{max-width:calc(100vw - 120px)}:host([mobile]) ha-button-menu{--mdc-shape-medium:0 0 var(--mdc-shape-medium) var(--mdc-shape-medium)}ha-button-menu{max-width:100%}ha-button-menu ha-button{--button-slot-container-overflow:hidden;max-width:100%;--mdc-theme-primary:currentColor;--mdc-typography-button-text-transform:none;--mdc-typography-button-font-size:var(
            --mdc-typography-headline6-font-size,
            1.25rem
          );--mdc-typography-button-font-weight:var(
            --mdc-typography-headline6-font-weight,
            500
          );--mdc-typography-button-letter-spacing:var(
            --mdc-typography-headline6-letter-spacing,
            0.0125em
          );--mdc-typography-button-line-height:var(
            --mdc-typography-headline6-line-height,
            2rem
          );--button-height:40px}ha-button-menu ha-button div{text-overflow:ellipsis;width:100%;overflow:hidden;white-space:nowrap;display:block}ha-fab{position:fixed;right:16px;bottom:16px;inset-inline-end:16px;inset-inline-start:initial}`]}}]}}),s.oi);n()}catch(e){n(e)}}))},4026:function(e,t,i){i.d(t,{B:()=>o});var n=i(36522);const a=()=>Promise.all([i.e("46379"),i.e("97983"),i.e("41258"),i.e("3134"),i.e("28612"),i.e("58640"),i.e("3561"),i.e("68069")]).then(i.bind(i,54712)),o=(e,t)=>{(0,n.B)(e,"show-dialog",{dialogTag:"dialog-todo-item-editor",dialogImport:a,dialogParams:t})}}};
//# sourceMappingURL=61862.214cfb49b334101c.js.map