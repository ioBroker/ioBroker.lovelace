(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["9368"],{95262:function(t,e,i){"use strict";function n(t){return null==t||Array.isArray(t)?t:[t]}i.d(e,{r:()=>n})},75011:function(t,e,i){"use strict";i.d(e,{I:()=>a,k:()=>n});i(71695),i(92519),i(42179),i(89256),i(24931),i(88463),i(57449),i(19814),i(47021);const n=new Set(["primary","accent","disabled","red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","light-grey","grey","dark-grey","blue-grey","black","white"]);function a(t){return n.has(t)?`var(--${t}-color)`:t}},46467:function(t,e,i){"use strict";i.a(t,(async function(t,n){try{i.d(e,{D_:()=>T,NC:()=>g,Nh:()=>f,U8:()=>$,WB:()=>m,mn:()=>u,p6:()=>l,ud:()=>y,yQ:()=>w});i(63434),i(9359),i(1331),i(96829);var a=i(16485),o=i(27486),s=i(20382),r=i(11104),d=t([a,r]);[a,r]=d.then?(await d)():d;(0,o.Z)(((t,e)=>new Intl.DateTimeFormat(t.language,{weekday:"long",month:"long",day:"numeric",timeZone:(0,r.f)(t.time_zone,e)})));const l=(t,e,i)=>c(e,i.time_zone).format(t),c=(0,o.Z)(((t,e)=>new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",timeZone:(0,r.f)(t.time_zone,e)}))),u=(t,e,i)=>h(e,i.time_zone).format(t),h=(0,o.Z)(((t,e)=>new Intl.DateTimeFormat(t.language,{year:"numeric",month:"short",day:"numeric",timeZone:(0,r.f)(t.time_zone,e)}))),m=(t,e,i)=>{var n,a,o,r;const d=p(e,i.time_zone);if(e.date_format===s.t6.language||e.date_format===s.t6.system)return d.format(t);const l=d.formatToParts(t),c=null===(n=l.find((t=>"literal"===t.type)))||void 0===n?void 0:n.value,u=null===(a=l.find((t=>"day"===t.type)))||void 0===a?void 0:a.value,h=null===(o=l.find((t=>"month"===t.type)))||void 0===o?void 0:o.value,m=null===(r=l.find((t=>"year"===t.type)))||void 0===r?void 0:r.value,y=l.at(l.length-1);let _="literal"===(null==y?void 0:y.type)?null==y?void 0:y.value:"";"bg"===e.language&&e.date_format===s.t6.YMD&&(_="");return{[s.t6.DMY]:`${u}${c}${h}${c}${m}${_}`,[s.t6.MDY]:`${h}${c}${u}${c}${m}${_}`,[s.t6.YMD]:`${m}${c}${h}${c}${u}${_}`}[e.date_format]},p=(0,o.Z)(((t,e)=>{const i=t.date_format===s.t6.system?void 0:t.language;return t.date_format===s.t6.language||(t.date_format,s.t6.system),new Intl.DateTimeFormat(i,{year:"numeric",month:"numeric",day:"numeric",timeZone:(0,r.f)(t.time_zone,e)})})),y=(t,e,i)=>_(e,i.time_zone).format(t),_=(0,o.Z)(((t,e)=>new Intl.DateTimeFormat(t.language,{day:"numeric",month:"short",timeZone:(0,r.f)(t.time_zone,e)}))),g=(t,e,i)=>v(e,i.time_zone).format(t),v=(0,o.Z)(((t,e)=>new Intl.DateTimeFormat(t.language,{month:"long",year:"numeric",timeZone:(0,r.f)(t.time_zone,e)}))),f=(t,e,i)=>b(e,i.time_zone).format(t),b=(0,o.Z)(((t,e)=>new Intl.DateTimeFormat(t.language,{month:"long",timeZone:(0,r.f)(t.time_zone,e)}))),w=(t,e,i)=>k(e,i.time_zone).format(t),k=(0,o.Z)(((t,e)=>new Intl.DateTimeFormat(t.language,{year:"numeric",timeZone:(0,r.f)(t.time_zone,e)}))),T=(t,e,i)=>I(e,i.time_zone).format(t),I=(0,o.Z)(((t,e)=>new Intl.DateTimeFormat(t.language,{weekday:"long",timeZone:(0,r.f)(t.time_zone,e)}))),$=(t,e,i)=>D(e,i.time_zone).format(t),D=(0,o.Z)(((t,e)=>new Intl.DateTimeFormat(t.language,{weekday:"short",timeZone:(0,r.f)(t.time_zone,e)})));n()}catch(l){n(l)}}))},64214:function(t,e,i){"use strict";i.a(t,(async function(t,n){try{i.d(e,{DG:()=>y,E8:()=>b,Fu:()=>f,NR:()=>k,W0:()=>m,o0:()=>u,yD:()=>g});var a=i(16485),o=i(27486),s=i(46467),r=i(33570),d=i(11104),l=i(16922),c=t([a,d,s,r]);[a,d,s,r]=c.then?(await c)():c;const u=(t,e,i)=>h(e,i.time_zone).format(t),h=(0,o.Z)(((t,e)=>new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",hour:(0,l.y)(t)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,l.y)(t)?"h12":"h23",timeZone:(0,d.f)(t.time_zone,e)}))),m=t=>p().format(t),p=(0,o.Z)((()=>new Intl.DateTimeFormat(void 0,{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}))),y=(t,e,i)=>_(e,i.time_zone).format(t),_=(0,o.Z)(((t,e)=>new Intl.DateTimeFormat(t.language,{year:"numeric",month:"short",day:"numeric",hour:(0,l.y)(t)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,l.y)(t)?"h12":"h23",timeZone:(0,d.f)(t.time_zone,e)}))),g=(t,e,i)=>v(e,i.time_zone).format(t),v=(0,o.Z)(((t,e)=>new Intl.DateTimeFormat(t.language,{month:"short",day:"numeric",hour:(0,l.y)(t)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,l.y)(t)?"h12":"h23",timeZone:(0,d.f)(t.time_zone,e)}))),f=(t,e,i)=>(new Date).getFullYear()===t.getFullYear()?g(t,e,i):y(t,e,i),b=(t,e,i)=>w(e,i.time_zone).format(t),w=(0,o.Z)(((t,e)=>new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",hour:(0,l.y)(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,l.y)(t)?"h12":"h23",timeZone:(0,d.f)(t.time_zone,e)}))),k=(t,e,i)=>`${(0,s.WB)(t,e,i)}, ${(0,r.mr)(t,e,i)}`;n()}catch(u){n(u)}}))},33570:function(t,e,i){"use strict";i.a(t,(async function(t,n){try{i.d(e,{Vu:()=>u,Zs:()=>y,mr:()=>l,xO:()=>m});var a=i(16485),o=i(27486),s=i(11104),r=i(16922),d=t([a,s]);[a,s]=d.then?(await d)():d;const l=(t,e,i)=>c(e,i.time_zone).format(t),c=(0,o.Z)(((t,e)=>new Intl.DateTimeFormat(t.language,{hour:"numeric",minute:"2-digit",hourCycle:(0,r.y)(t)?"h12":"h23",timeZone:(0,s.f)(t.time_zone,e)}))),u=(t,e,i)=>h(e,i.time_zone).format(t),h=(0,o.Z)(((t,e)=>new Intl.DateTimeFormat(t.language,{hour:(0,r.y)(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,r.y)(t)?"h12":"h23",timeZone:(0,s.f)(t.time_zone,e)}))),m=(t,e,i)=>p(e,i.time_zone).format(t),p=(0,o.Z)(((t,e)=>new Intl.DateTimeFormat(t.language,{weekday:"long",hour:(0,r.y)(t)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,r.y)(t)?"h12":"h23",timeZone:(0,s.f)(t.time_zone,e)}))),y=(t,e,i)=>_(e,i.time_zone).format(t),_=(0,o.Z)(((t,e)=>new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"2-digit",hour12:!1,timeZone:(0,s.f)(t.time_zone,e)})));n()}catch(l){n(l)}}))},94947:function(t,e,i){"use strict";i.a(t,(async function(t,n){try{i.d(e,{G:()=>l});var a=i(16485),o=i(27486),s=i(27046),r=t([a,s]);[a,s]=r.then?(await r)():r;const d=(0,o.Z)((t=>new Intl.RelativeTimeFormat(t.language,{numeric:"auto"}))),l=(t,e,i,n=!0)=>{const a=(0,s.W)(t,i,e);return n?d(e).format(a.value,a.unit):Intl.NumberFormat(e.language,{style:"unit",unit:a.unit,unitDisplay:"long"}).format(Math.abs(a.value))};n()}catch(d){n(d)}}))},11104:function(t,e,i){"use strict";i.a(t,(async function(t,n){try{i.d(e,{f:()=>h});var a,o,s,r=i(16485),d=i(20382),l=t([r]);r=(l.then?(await l)():l)[0];const c=null===(a=Intl.DateTimeFormat)||void 0===a||null===(o=(s=a.call(Intl)).resolvedOptions)||void 0===o?void 0:o.call(s).timeZone,u=null!=c?c:"UTC",h=(t,e)=>t===d.c_.local&&c?u:e;n()}catch(c){n(c)}}))},31064:function(t,e,i){"use strict";i.d(e,{T:()=>a});i(19134),i(5740);const n=/^(\w+)\.(\w+)$/,a=t=>n.test(t)},87733:function(t,e,i){"use strict";i.d(e,{f:()=>n});const n=t=>t.charAt(0).toUpperCase()+t.slice(1)},35830:function(t,e,i){"use strict";i.d(e,{q:()=>n});const n=t=>{const e=window.location.pathname;return t?e+"?"+t:e}},27046:function(t,e,i){"use strict";i.a(t,(async function(t,n){try{i.d(e,{W:()=>m});i(19423);var a=i(13809),o=i(29558),s=i(94763),r=i(19631),d=t([r]);r=(d.then?(await d)():d)[0];const c=1e3,u=60,h=60*u;function m(t,e=Date.now(),i,n={}){const d=Object.assign(Object.assign({},p),n||{}),l=(+t-+e)/c;if(Math.abs(l)<d.second)return{value:Math.round(l),unit:"second"};const m=l/u;if(Math.abs(m)<d.minute)return{value:Math.round(m),unit:"minute"};const y=l/h;if(Math.abs(y)<d.hour)return{value:Math.round(y),unit:"hour"};const _=new Date(t),g=new Date(e);_.setHours(0,0,0,0),g.setHours(0,0,0,0);const v=(0,a.j)(_,g);if(0===v)return{value:Math.round(y),unit:"hour"};if(Math.abs(v)<d.day)return{value:v,unit:"day"};const f=(0,r.Bt)(i),b=(0,o.z)(_,{weekStartsOn:f}),w=(0,o.z)(g,{weekStartsOn:f}),k=(0,s.p)(b,w);if(0===k)return{value:v,unit:"day"};if(Math.abs(k)<d.week)return{value:k,unit:"week"};const T=_.getFullYear()-g.getFullYear(),I=12*T+_.getMonth()-g.getMonth();return 0===I?{value:k,unit:"week"}:Math.abs(I)<d.month||0===T?{value:I,unit:"month"}:{value:Math.round(T),unit:"year"}}const p={second:45,minute:45,hour:22,day:5,week:4,month:11};n()}catch(l){n(l)}}))},93826:function(t,e,i){"use strict";i.d(e,{P:()=>n});i(71695),i(47021);const n=(t,e,i=!0,n=!0)=>{let a,o=0;const s=(...s)=>{const r=()=>{o=!1===i?0:Date.now(),a=void 0,t(...s)},d=Date.now();o||!1!==i||(o=d);const l=e-(d-o);l<=0||l>e?(a&&(clearTimeout(a),a=void 0),o=d,t(...s)):a||!1===n||(a=window.setTimeout(r,l))};return s.cancel=()=>{clearTimeout(a),a=void 0,o=0},s}},7285:function(t,e,i){"use strict";i.d(e,{M:()=>m});var n=i(61701),a=i(72621),o=(i(71695),i(47021),i(65703)),s=i(46289),r=i(57243),d=i(50778);let l,c,u,h=t=>t,m=(0,n.Z)([(0,d.Mo)("ha-list-item")],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,a.Z)(i,"renderRipple",this,3)([])}},{kind:"get",static:!0,key:"styles",value:function(){return[s.W,(0,r.iv)(l||(l=h`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-inline-start:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px));padding-inline-end:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)!important}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)!important}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center;flex-shrink:0}:host([graphic=icon]:not([twoline])) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,20px)!important}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`)),"rtl"===document.dir?(0,r.iv)(c||(c=h`span.material-icons:first-of-type,span.material-icons:last-of-type{direction:rtl!important;--direction:rtl}`)):(0,r.iv)(u||(u=h``))]}}]}}),o.K)},30043:function(t,e,i){"use strict";var n=i(61701),a=i(72621),o=(i(71695),i(47021),i(19799)),s=i(23111),r=i(57243),d=i(50778);let l,c=t=>t;(0,n.Z)([(0,d.Mo)("ha-ripple")],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",key:"attachableTouchController",value(){return new o.J(this,this._onTouchControlChange.bind(this))}},{kind:"method",key:"attach",value:function(t){(0,a.Z)(i,"attach",this,3)([t]),this.attachableTouchController.attach(t)}},{kind:"method",key:"detach",value:function(){(0,a.Z)(i,"detach",this,3)([]),this.attachableTouchController.detach()}},{kind:"field",key:"_handleTouchEnd",value(){return()=>{this.disabled||(0,a.Z)(i,"endPressAnimation",this,3)([])}}},{kind:"method",key:"_onTouchControlChange",value:function(t,e){null==t||t.removeEventListener("touchend",this._handleTouchEnd),null==e||e.addEventListener("touchend",this._handleTouchEnd)}},{kind:"field",static:!0,key:"styles",value(){return[...(0,a.Z)(i,"styles",this),(0,r.iv)(l||(l=c`:host{--md-ripple-hover-opacity:var(--ha-ripple-hover-opacity, 0.08);--md-ripple-pressed-opacity:var(--ha-ripple-pressed-opacity, 0.12);--md-ripple-hover-color:var(
          --ha-ripple-hover-color,
          var(--ha-ripple-color, var(--secondary-text-color))
        );--md-ripple-pressed-color:var(
          --ha-ripple-pressed-color,
          var(--ha-ripple-color, var(--secondary-text-color))
        )}`))]}}]}}),s.M)},43546:function(t,e,i){"use strict";i.d(e,{Cp:()=>s,TZ:()=>r,W2:()=>o,YY:()=>l,iI:()=>a,j2:()=>d,oT:()=>n});i(19083),i(9359),i(70104),i(77439),i(19423),i(40251),i(97499),i(61006);const n=t=>t.map((t=>{if("string"!==t.type)return t;switch(t.name){case"username":return Object.assign(Object.assign({},t),{},{autocomplete:"username",autofocus:!0});case"password":return Object.assign(Object.assign({},t),{},{autocomplete:"current-password"});case"code":return Object.assign(Object.assign({},t),{},{autocomplete:"one-time-code",autofocus:!0});default:return t}})),a=(t,e)=>t.callWS({type:"auth/sign_path",path:e}),o=async(t,e,i,n)=>t.callWS({type:"config/auth_provider/homeassistant/create",user_id:e,username:i,password:n}),s=(t,e,i)=>t.callWS({type:"config/auth_provider/homeassistant/change_password",current_password:e,new_password:i}),r=(t,e,i)=>t.callWS({type:"config/auth_provider/homeassistant/admin_change_password",user_id:e,password:i}),d=(t,e,i)=>t.callWS({type:"config/auth_provider/homeassistant/admin_change_username",user_id:e,username:i}),l=(t,e,i)=>t.callWS({type:"auth/delete_all_refresh_tokens",token_type:e,delete_current_token:i})},75101:function(t,e,i){"use strict";i.d(e,{$H:()=>n,DJ:()=>r,LZ:()=>o,Nn:()=>h,Ny:()=>m,Pk:()=>y,Q4:()=>s,RQ:()=>l,SO:()=>c,T0:()=>p,aR:()=>a,iJ:()=>u,pB:()=>d});i(71695),i(9359),i(56475),i(1331),i(19423),i(47021);const n=(t,e)=>t.callWS({type:"config_entries/subentries/list",entry_id:e}),a=(t,e,i)=>t.callWS({type:"config_entries/subentries/delete",entry_id:e,subentry_id:i}),o=["migration_error","setup_error","setup_retry"],s=["not_loaded","loaded","setup_error","setup_retry"],r=(t,e,i)=>{const n={type:"config_entries/subscribe"};return i&&i.type&&(n.type_filter=i.type),t.connection.subscribeMessage((t=>e(t)),n)},d=(t,e)=>{const i={};return e&&(e.type&&(i.type_filter=e.type),e.domain&&(i.domain=e.domain)),t.callWS(Object.assign({type:"config_entries/get"},i))},l=(t,e)=>t.callWS({type:"config_entries/get_single",entry_id:e}),c=(t,e,i)=>t.callWS(Object.assign({type:"config_entries/update",entry_id:e},i)),u=(t,e)=>t.callApi("DELETE",`config/config_entries/entry/${e}`),h=(t,e)=>t.callApi("POST",`config/config_entries/entry/${e}/reload`),m=(t,e)=>t.callWS({type:"config_entries/disable",entry_id:e,disabled_by:"user"}),p=(t,e)=>t.callWS({type:"config_entries/disable",entry_id:e,disabled_by:null}),y=(t,e)=>{if(!e)return t;const i=t.find((t=>t.entry_id===e));if(!i)return t;return[i,...t.filter((t=>t.entry_id!==e))]}},95276:function(t,e,i){"use strict";i.d(e,{$G:()=>h,$g:()=>l,CV:()=>p,He:()=>u,LO:()=>d,cA:()=>c,fC:()=>m,uo:()=>y,wL:()=>r});i(63721),i(19083),i(61893),i(9359),i(56475),i(70104),i(19423),i(40251),i(61006);var n=i(73850),a=i(47194),o=i(96194),s=i(1416);let r=function(t){return t.NeedsAction="needs_action",t.Completed="completed",t}({}),d=function(t){return t.NONE="none",t.ALPHA_ASC="alpha_asc",t.ALPHA_DESC="alpha_desc",t.DUEDATE_ASC="duedate_asc",t.DUEDATE_DESC="duedate_desc",t}({}),l=function(t){return t[t.CREATE_TODO_ITEM=1]="CREATE_TODO_ITEM",t[t.DELETE_TODO_ITEM=2]="DELETE_TODO_ITEM",t[t.UPDATE_TODO_ITEM=4]="UPDATE_TODO_ITEM",t[t.MOVE_TODO_ITEM=8]="MOVE_TODO_ITEM",t[t.SET_DUE_DATE_ON_ITEM=16]="SET_DUE_DATE_ON_ITEM",t[t.SET_DUE_DATETIME_ON_ITEM=32]="SET_DUE_DATETIME_ON_ITEM",t[t.SET_DESCRIPTION_ON_ITEM=64]="SET_DESCRIPTION_ON_ITEM",t}({});const c=t=>Object.keys(t.states).filter((e=>"todo"===(0,n.M)(e)&&!(0,o.rk)(t.states[e].state))).map((e=>Object.assign(Object.assign({},t.states[e]),{},{entity_id:e,name:(0,a.C)(t.states[e])}))).sort(((e,i)=>(0,s.$)(e.name,i.name,t.locale.language))),u=(t,e,i)=>t.connection.subscribeMessage(i,{type:"todo/item/subscribe",entity_id:e}),h=(t,e,i)=>{var n,a;return t.callService("todo","update_item",{item:i.uid,rename:i.summary,status:i.status,description:i.description,due_datetime:null!==(n=i.due)&&void 0!==n&&n.includes("T")?i.due:void 0,due_date:void 0===i.due||null!==(a=i.due)&&void 0!==a&&a.includes("T")?void 0:i.due},{entity_id:e})},m=(t,e,i)=>{var n,a;return t.callService("todo","add_item",{item:i.summary,description:i.description||void 0,due_datetime:null!==(n=i.due)&&void 0!==n&&n.includes("T")?i.due:void 0,due_date:void 0===i.due||null!==(a=i.due)&&void 0!==a&&a.includes("T")?void 0:i.due},{entity_id:e})},p=(t,e,i)=>t.callService("todo","remove_item",{item:i},{entity_id:e}),y=(t,e,i,n)=>t.callWS({type:"todo/item/move",entity_id:e,uid:i,previous_uid:n})},96530:function(t,e,i){"use strict";i.d(e,{X:()=>o,y:()=>a});var n=i(92636);const a=["input_boolean","input_button","input_text","input_number","input_datetime","input_select","counter","timer","schedule"],o=(0,n.z)(a)},39305:function(t,e,i){"use strict";i.a(t,(async function(t,n){try{i.r(e);var a=i(61701),o=i(72621),s=(i(71695),i(9359),i(70104),i(40251),i(19134),i(97003),i(47021),i(18672)),r=(i(2060),i(57243)),d=i(50778),l=i(27486),c=i(72344),u=i(68958),h=i(36522),m=i(47194),p=i(75278),y=i(83523),_=i(35830),g=i(58776),v=(i(59826),i(20130),i(23334),i(7285),i(43344),i(51223)),f=(i(37583),i(47593),i(75101)),b=i(63318),w=i(57816),k=i(95276),T=i(38572),I=i(76131),$=i(91163),D=i(28008),E=i(11734),M=i(4026),Z=t([v,E,s]);[v,E,s]=Z.then?(await Z)():Z;let x,A,C,z,O,H,L,S,F,V,W=t=>t;const N="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",P="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10M17,11H15V9H17V11M13,11H11V9H13V11M9,11H7V9H9V11Z",j="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",U="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",R="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",B="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";(0,a.Z)([(0,d.Mo)("ha-panel-todo")],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,reflect:!0})],key:"narrow",value(){return!1}},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,reflect:!0})],key:"mobile",value(){return!1}},{kind:"field",decorators:[(0,u.t)({key:"selectedTodoEntity",state:!0})],key:"_entityId",value:void 0},{kind:"field",key:"_headerHeight",value(){return 56}},{kind:"field",key:"_showPaneController",value(){return new s.Z(this,{callback:t=>{var e;return(null===(e=t[0])||void 0===e?void 0:e.contentRect.width)>750}})}},{kind:"field",key:"_mql",value:void 0},{kind:"field",key:"_conversation",value(){return(0,l.Z)((t=>(0,c.p)(this.hass,"conversation")))}},{kind:"method",key:"connectedCallback",value:function(){(0,o.Z)(i,"connectedCallback",this,3)([]),this._mql=window.matchMedia("(max-width: 450px), all and (max-height: 500px)"),this._mql.addListener(this._setIsMobile),this.mobile=this._mql.matches;const t=getComputedStyle(this);this._headerHeight=Number(t.getPropertyValue("--header-height").replace("px",""))}},{kind:"method",key:"disconnectedCallback",value:function(){var t;(0,o.Z)(i,"disconnectedCallback",this,3)([]),null===(t=this._mql)||void 0===t||t.removeListener(this._setIsMobile),this._mql=void 0}},{kind:"field",key:"_setIsMobile",value(){return t=>{this.mobile=t.matches}}},{kind:"method",key:"willUpdate",value:function(t){if((0,o.Z)(i,"willUpdate",this,3)([t]),!this.hasUpdated){this.hass.loadFragmentTranslation("lovelace");const t=(0,g.io)("entity_id");var e;if(t)this._entityId=t;else if(this._entityId&&!(this._entityId in this.hass.states)&&(this._entityId=void 0),!this._entityId)this._entityId=null===(e=(0,k.cA)(this.hass)[0])||void 0===e?void 0:e.entity_id}!t.has("_entityId")&&this.hasUpdated||this._setupTodoElement()}},{kind:"method",key:"_setupTodoElement",value:function(){this._entityId?(0,y.c)((0,_.q)((0,g.ou)({entity_id:this._entityId})),{replace:!0}):(0,y.c)((0,_.q)(""),{replace:!0})}},{kind:"field",key:"_cardConfig",value(){return(0,l.Z)((t=>({type:"todo-list",entity:t})))}},{kind:"method",key:"render",value:function(){var t,e,i;const n=this._entityId?this.hass.entities[this._entityId]:void 0,a=this._entityId?this.hass.states[this._entityId]:void 0,o=null!==(t=this._showPaneController.value)&&void 0!==t?t:!this.narrow,s=(0,k.cA)(this.hass).map((t=>(0,r.dy)(x||(x=W`<ha-list-item graphic="icon" @click="${0}" .entityId="${0}" .activated="${0}"> <ha-state-icon .stateObj="${0}" .hass="${0}" slot="graphic"></ha-state-icon>${0} </ha-list-item> `),this._handleEntityPicked,t.entity_id,t.entity_id===this._entityId,t,this.hass,t.name)));return(0,r.dy)(A||(A=W` <ha-two-pane-top-app-bar-fixed .pane="${0}" footer> <ha-menu-button slot="navigationIcon" .hass="${0}" .narrow="${0}"></ha-menu-button> <div slot="title"> ${0} </div> <mwc-list slot="pane" activatable>${0}</mwc-list> ${0} <ha-button-menu slot="actionItems"> <ha-icon-button slot="trigger" .label="${0}" .path="${0}"></ha-icon-button> ${0} <li divider role="separator"></li> <ha-list-item graphic="icon" @click="${0}"> <ha-svg-icon .path="${0}" slot="graphic"> </ha-svg-icon> ${0} </ha-list-item> ${0} </ha-button-menu> <div id="columns"> <div class="column"> ${0} </div> </div> ${0} </ha-two-pane-top-app-bar-fixed> `),o,this.hass,this.narrow,o?this.hass.localize("panel.todo"):(0,r.dy)(C||(C=W`<ha-button-menu class="lists" activatable fixed .noAnchor="${0}" .y="${0}" .x="${0}"> <ha-button slot="trigger"> <div> ${0} </div> <ha-svg-icon slot="trailingIcon" .path="${0}"></ha-svg-icon> </ha-button> ${0} ${0} </ha-button-menu>`),this.mobile,this.mobile?this._headerHeight/2:this._headerHeight/4,this.mobile?0:void 0,this._entityId?a?(0,m.C)(a):this._entityId:"",N,s,null!==(e=this.hass.user)&&void 0!==e&&e.is_admin?(0,r.dy)(z||(z=W`<li divider role="separator"></li> <ha-list-item graphic="icon" @click="${0}"> <ha-svg-icon .path="${0}" slot="graphic"></ha-svg-icon> ${0} </ha-list-item>`),this._addList,B,this.hass.localize("ui.panel.todo.create_list")):r.Ld),s,o&&null!==(i=this.hass.user)&&void 0!==i&&i.is_admin?(0,r.dy)(O||(O=W`<ha-list-item graphic="icon" slot="pane-footer" @click="${0}"> <ha-svg-icon .path="${0}" slot="graphic"></ha-svg-icon> ${0} </ha-list-item>`),this._addList,B,this.hass.localize("ui.panel.todo.create_list")):r.Ld,"",U,this._conversation(this.hass.config.components)?(0,r.dy)(H||(H=W`<ha-list-item graphic="icon" @click="${0}" .disabled="${0}"> <ha-svg-icon .path="${0}" slot="graphic"> </ha-svg-icon> ${0} </ha-list-item>`),this._showMoreInfoDialog,!this._entityId,R,this.hass.localize("ui.panel.todo.information")):r.Ld,this._showVoiceCommandDialog,P,this.hass.localize("ui.panel.todo.assist"),"local_todo"===(null==n?void 0:n.platform)?(0,r.dy)(L||(L=W` <li divider role="separator"></li> <ha-list-item graphic="icon" @click="${0}" class="warning" .disabled="${0}"> <ha-svg-icon .path="${0}" slot="graphic" class="warning"> </ha-svg-icon> ${0} </ha-list-item>`),this._deleteList,!this._entityId,j,this.hass.localize("ui.panel.todo.delete_list")):r.Ld,this._entityId?(0,r.dy)(S||(S=W` <hui-card .hass="${0}" .config="${0}"></hui-card> `),this.hass,this._cardConfig(this._entityId)):r.Ld,a&&(0,p.e)(a,k.$g.CREATE_TODO_ITEM)?(0,r.dy)(F||(F=W`<ha-fab .label="${0}" extended @click="${0}"> <ha-svg-icon slot="icon" .path="${0}"></ha-svg-icon> </ha-fab>`),this.hass.localize("ui.panel.todo.add_item"),this._addItem,B):r.Ld)}},{kind:"method",key:"_handleEntityPicked",value:function(t){this._entityId=t.currentTarget.entityId}},{kind:"method",key:"_addList",value:async function(){var t;(0,T.t)(this,{startFlowHandler:"local_todo",showAdvanced:null===(t=this.hass.userData)||void 0===t?void 0:t.showAdvanced,manifest:await(0,w.t4)(this.hass,"local_todo")})}},{kind:"method",key:"_showMoreInfoDialog",value:function(){this._entityId&&(0,h.B)(this,"hass-more-info",{entityId:this._entityId})}},{kind:"method",key:"_deleteList",value:async function(){var t;if(!this._entityId)return;const e=await(0,b.L3)(this.hass,this._entityId);if("local_todo"!==e.platform)return;const i=e.config_entry_id;if(!i)return;if(!(await(0,I.showConfirmationDialog)(this,{title:this.hass.localize("ui.panel.todo.delete_confirm_title",{name:this._entityId in this.hass.states?(0,m.C)(this.hass.states[this._entityId]):this._entityId}),text:this.hass.localize("ui.panel.todo.delete_confirm_text"),confirmText:this.hass.localize("ui.common.delete"),dismissText:this.hass.localize("ui.common.cancel"),destructive:!0})))return;const n=await(0,f.iJ)(this.hass,i);this._entityId=null===(t=(0,k.cA)(this.hass)[0])||void 0===t?void 0:t.entity_id,n.require_restart&&(0,I.showAlertDialog)(this,{text:this.hass.localize("ui.panel.todo.restart_confirm")})}},{kind:"method",key:"_showVoiceCommandDialog",value:function(){(0,$._)(this,this.hass,{pipeline_id:"last_used"})}},{kind:"method",key:"_addItem",value:function(){(0,M.B)(this,{entity:this._entityId})}},{kind:"get",static:!0,key:"styles",value:function(){return[D.Qx,(0,r.iv)(V||(V=W`:host{display:block}#columns{display:flex;flex-direction:row;justify-content:center;margin:8px;padding-bottom:70px}.column{flex:1 0 0;max-width:500px;min-width:0}:host([mobile]) .lists{--mdc-menu-min-width:100vw}:host(:not([mobile])) .lists ha-list-item{max-width:calc(100vw - 120px)}:host([mobile]) ha-button-menu{--mdc-shape-medium:0 0 var(--mdc-shape-medium) var(--mdc-shape-medium)}ha-button-menu{max-width:100%}ha-button-menu ha-button{--button-slot-container-overflow:hidden;max-width:100%;--mdc-theme-primary:currentColor;--mdc-typography-button-text-transform:none;--mdc-typography-button-font-size:var(
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
          );--button-height:40px}ha-button-menu ha-button div{text-overflow:ellipsis;width:100%;overflow:hidden;white-space:nowrap;display:block}ha-fab{position:fixed;right:16px;bottom:16px;inset-inline-end:16px;inset-inline-start:initial}`))]}}]}}),r.oi);n()}catch(x){n(x)}}))},4026:function(t,e,i){"use strict";i.d(e,{B:()=>o});i(71695),i(40251),i(47021);var n=i(36522);const a=()=>Promise.all([i.e("46379"),i.e("97983"),i.e("41258"),i.e("3134"),i.e("28612"),i.e("3561"),i.e("63019")]).then(i.bind(i,54712)),o=(t,e)=>{(0,n.B)(t,"show-dialog",{dialogTag:"dialog-todo-item-editor",dialogImport:a,dialogParams:e})}},22152:function(){Element.prototype.toggleAttribute||(Element.prototype.toggleAttribute=function(t,e){return void 0!==e&&(e=!!e),this.hasAttribute(t)?!!e||(this.removeAttribute(t),!1):!1!==e&&(this.setAttribute(t,""),!0)})}}]);
//# sourceMappingURL=9368.18ae2fc382352b3b.js.map