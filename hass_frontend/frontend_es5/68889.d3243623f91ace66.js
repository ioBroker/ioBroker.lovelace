"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["68889"],{46467:function(e,t,i){i.a(e,(async function(e,a){try{i.d(t,{D_:()=>x,NC:()=>p,Nh:()=>v,U8:()=>S,WB:()=>m,mn:()=>u,p6:()=>l,ud:()=>g,yQ:()=>k});i(63434),i(9359),i(1331),i(96829);var n=i(16485),o=i(27486),r=i(20382),d=i(11104),s=e([n,d]);[n,d]=s.then?(await s)():s;(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric",timeZone:(0,d.f)(e.time_zone,t)})));const l=(e,t,i)=>c(t,i.time_zone).format(e),c=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",timeZone:(0,d.f)(e.time_zone,t)}))),u=(e,t,i)=>h(t,i.time_zone).format(e),h=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"short",day:"numeric",timeZone:(0,d.f)(e.time_zone,t)}))),m=(e,t,i)=>{var a,n,o,d;const s=f(t,i.time_zone);if(t.date_format===r.t6.language||t.date_format===r.t6.system)return s.format(e);const l=s.formatToParts(e),c=null===(a=l.find((e=>"literal"===e.type)))||void 0===a?void 0:a.value,u=null===(n=l.find((e=>"day"===e.type)))||void 0===n?void 0:n.value,h=null===(o=l.find((e=>"month"===e.type)))||void 0===o?void 0:o.value,m=null===(d=l.find((e=>"year"===e.type)))||void 0===d?void 0:d.value,g=l.at(l.length-1);let y="literal"===(null==g?void 0:g.type)?null==g?void 0:g.value:"";"bg"===t.language&&t.date_format===r.t6.YMD&&(y="");return{[r.t6.DMY]:`${u}${c}${h}${c}${m}${y}`,[r.t6.MDY]:`${h}${c}${u}${c}${m}${y}`,[r.t6.YMD]:`${m}${c}${h}${c}${u}${y}`}[t.date_format]},f=(0,o.Z)(((e,t)=>{const i=e.date_format===r.t6.system?void 0:e.language;return e.date_format===r.t6.language||(e.date_format,r.t6.system),new Intl.DateTimeFormat(i,{year:"numeric",month:"numeric",day:"numeric",timeZone:(0,d.f)(e.time_zone,t)})})),g=(e,t,i)=>y(t,i.time_zone).format(e),y=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{day:"numeric",month:"short",timeZone:(0,d.f)(e.time_zone,t)}))),p=(e,t,i)=>_(t,i.time_zone).format(e),_=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"long",year:"numeric",timeZone:(0,d.f)(e.time_zone,t)}))),v=(e,t,i)=>b(t,i.time_zone).format(e),b=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"long",timeZone:(0,d.f)(e.time_zone,t)}))),k=(e,t,i)=>w(t,i.time_zone).format(e),w=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",timeZone:(0,d.f)(e.time_zone,t)}))),x=(e,t,i)=>Z(t,i.time_zone).format(e),Z=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",timeZone:(0,d.f)(e.time_zone,t)}))),S=(e,t,i)=>z(t,i.time_zone).format(e),z=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"short",timeZone:(0,d.f)(e.time_zone,t)})));a()}catch(l){a(l)}}))},33570:function(e,t,i){i.a(e,(async function(e,a){try{i.d(t,{Vu:()=>u,Zs:()=>g,mr:()=>l,xO:()=>m});var n=i(16485),o=i(27486),r=i(11104),d=i(16922),s=e([n,r]);[n,r]=s.then?(await s)():s;const l=(e,t,i)=>c(t,i.time_zone).format(e),c=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",hourCycle:(0,d.y)(e)?"h12":"h23",timeZone:(0,r.f)(e.time_zone,t)}))),u=(e,t,i)=>h(t,i.time_zone).format(e),h=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{hour:(0,d.y)(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,d.y)(e)?"h12":"h23",timeZone:(0,r.f)(e.time_zone,t)}))),m=(e,t,i)=>f(t,i.time_zone).format(e),f=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",hour:(0,d.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,d.y)(e)?"h12":"h23",timeZone:(0,r.f)(e.time_zone,t)}))),g=(e,t,i)=>y(t,i.time_zone).format(e),y=(0,o.Z)(((e,t)=>new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"2-digit",hour12:!1,timeZone:(0,r.f)(e.time_zone,t)})));a()}catch(l){a(l)}}))},16922:function(e,t,i){i.d(t,{y:()=>o});i(19083),i(61006);var a=i(27486),n=i(20382);const o=(0,a.Z)((e=>{if(e.time_format===n.zt.language||e.time_format===n.zt.system){const t=e.time_format===n.zt.language?e.language:void 0;return new Date("January 1, 2023 22:00:00").toLocaleString(t).includes("10")}return e.time_format===n.zt.am_pm}))},87733:function(e,t,i){i.d(t,{f:()=>a});const a=e=>e.charAt(0).toUpperCase()+e.slice(1)},89133:function(e,t,i){i.a(e,(async function(e,a){try{i.d(t,{u:()=>s,z:()=>d});var n=i(16485),o=i(27486),r=e([n]);n=(r.then?(await r)():r)[0];const d=(e,t)=>l(e).format(t),s=(e,t)=>c(e).format(t),l=(0,o.Z)((e=>new Intl.ListFormat(e.language,{style:"long",type:"conjunction"}))),c=(0,o.Z)((e=>new Intl.ListFormat(e.language,{style:"long",type:"disjunction"})));a()}catch(d){a(d)}}))},54977:function(e,t,i){var a=i(61701),n=(i(71695),i(47021),i(57243)),o=i(50778);let r,d,s,l=e=>e;(0,a.Z)([(0,o.Mo)("ha-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,reflect:!0})],key:"raised",value(){return!1}},{kind:"field",static:!0,key:"styles",value(){return(0,n.iv)(r||(r=l`:host{background:var(--ha-card-background,var(--card-background-color,#fff));-webkit-backdrop-filter:var(--ha-card-backdrop-filter,none);backdrop-filter:var(--ha-card-backdrop-filter,none);box-shadow:var(--ha-card-box-shadow,none);box-sizing:border-box;border-radius:var(--ha-card-border-radius,12px);border-width:var(--ha-card-border-width,1px);border-style:solid;border-color:var(--ha-card-border-color,var(--divider-color,#e0e0e0));color:var(--primary-text-color);display:block;transition:all .3s ease-out;position:relative}:host([raised]){border:none;box-shadow:var(--ha-card-box-shadow,0px 2px 1px -1px rgba(0,0,0,.2),0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12))}.card-header,:host ::slotted(.card-header){color:var(--ha-card-header-color,var(--primary-text-color));font-family:var(--ha-card-header-font-family, inherit);font-size:var(--ha-card-header-font-size, 24px);letter-spacing:-.012em;line-height:48px;padding:12px 16px 16px;display:block;margin-block-start:0px;margin-block-end:0px;font-weight:400}:host ::slotted(.card-content:not(:first-child)),slot:not(:first-child)::slotted(.card-content){padding-top:0px;margin-top:-8px}:host ::slotted(.card-content){padding:16px}:host ::slotted(.card-actions){border-top:1px solid var(--divider-color,#e8e8e8);padding:5px 16px}`))}},{kind:"method",key:"render",value:function(){return(0,n.dy)(d||(d=l` ${0} <slot></slot> `),this.header?(0,n.dy)(s||(s=l`<h1 class="card-header">${0}</h1>`),this.header):n.Ld)}}]}}),n.oi)},62801:function(e,t,i){var a=i(61701),n=i(72621),o=(i(71695),i(9359),i(56475),i(19423),i(40251),i(22139),i(47021),i(57243)),r=i(50778),d=i(36522);let s,l=e=>e;(0,a.Z)([(0,r.Mo)("ha-sortable")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",key:"_sortable",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,attribute:"no-style"})],key:"noStyle",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:String,attribute:"draggable-selector"})],key:"draggableSelector",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:String,attribute:"handle-selector"})],key:"handleSelector",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:String,attribute:"filter"})],key:"filter",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:String})],key:"group",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,attribute:"invert-swap"})],key:"invertSwap",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"options",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"rollback",value(){return!0}},{kind:"method",key:"updated",value:function(e){e.has("disabled")&&(this.disabled?this._destroySortable():this._createSortable())}},{kind:"field",key:"_shouldBeDestroy",value(){return!1}},{kind:"method",key:"disconnectedCallback",value:function(){(0,n.Z)(a,"disconnectedCallback",this,3)([]),this._shouldBeDestroy=!0,setTimeout((()=>{this._shouldBeDestroy&&(this._destroySortable(),this._shouldBeDestroy=!1)}),1)}},{kind:"method",key:"connectedCallback",value:function(){(0,n.Z)(a,"connectedCallback",this,3)([]),this._shouldBeDestroy=!1,this.hasUpdated&&!this.disabled&&this._createSortable()}},{kind:"method",key:"createRenderRoot",value:function(){return this}},{kind:"method",key:"render",value:function(){return this.noStyle?o.Ld:(0,o.dy)(s||(s=l` <style>.sortable-fallback{display:none!important}.sortable-ghost{box-shadow:0 0 0 2px var(--primary-color);background:rgba(var(--rgb-primary-color),.25);border-radius:4px;opacity:.4}.sortable-drag{border-radius:4px;opacity:1;background:var(--card-background-color);box-shadow:0px 4px 8px 3px #00000026;cursor:grabbing}</style> `))}},{kind:"method",key:"_createSortable",value:async function(){if(this._sortable)return;const e=this.children[0];if(!e)return;const t=(await Promise.all([i.e("34153"),i.e("467")]).then(i.bind(i,59807))).default,a=Object.assign(Object.assign({scroll:!0,forceAutoScrollFallback:!0,scrollSpeed:20,animation:150},this.options),{},{onChoose:this._handleChoose,onStart:this._handleStart,onEnd:this._handleEnd,onUpdate:this._handleUpdate,onAdd:this._handleAdd,onRemove:this._handleRemove});this.draggableSelector&&(a.draggable=this.draggableSelector),this.handleSelector&&(a.handle=this.handleSelector),void 0!==this.invertSwap&&(a.invertSwap=this.invertSwap),this.group&&(a.group=this.group),this.filter&&(a.filter=this.filter),this._sortable=new t(e,a)}},{kind:"field",key:"_handleUpdate",value(){return e=>{(0,d.B)(this,"item-moved",{newIndex:e.newIndex,oldIndex:e.oldIndex})}}},{kind:"field",key:"_handleAdd",value(){return e=>{(0,d.B)(this,"item-added",{index:e.newIndex,data:e.item.sortableData})}}},{kind:"field",key:"_handleRemove",value(){return e=>{(0,d.B)(this,"item-removed",{index:e.oldIndex})}}},{kind:"field",key:"_handleEnd",value(){return async e=>{(0,d.B)(this,"drag-end"),this.rollback&&e.item.placeholder&&(e.item.placeholder.replaceWith(e.item),delete e.item.placeholder)}}},{kind:"field",key:"_handleStart",value(){return()=>{(0,d.B)(this,"drag-start")}}},{kind:"field",key:"_handleChoose",value(){return e=>{this.rollback&&(e.item.placeholder=document.createComment("sort-placeholder"),e.item.after(e.item.placeholder))}}},{kind:"method",key:"_destroySortable",value:function(){this._sortable&&(this._sortable.destroy(),this._sortable=void 0)}}]}}),o.oi)},51223:function(e,t,i){i.a(e,(async function(e,t){try{var a=i(61701),n=(i(71695),i(47021),i(57243)),o=i(50778),r=i(94571),d=i(59847),s=i(45729),l=(i(65981),i(37583),e([s]));s=(l.then?(await l)():l)[0];let c,u,h,m,f=e=>e;(0,a.Z)([(0,o.Mo)("ha-state-icon")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"stateValue",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"icon",value:void 0},{kind:"method",key:"render",value:function(){var e,t;const i=this.icon||this.stateObj&&(null===(e=this.hass)||void 0===e||null===(e=e.entities[this.stateObj.entity_id])||void 0===e?void 0:e.icon)||(null===(t=this.stateObj)||void 0===t?void 0:t.attributes.icon);if(i)return(0,n.dy)(c||(c=f`<ha-icon .icon="${0}"></ha-icon>`),i);if(!this.stateObj)return n.Ld;if(!this.hass)return this._renderFallback();const a=(0,s.gD)(this.hass,this.stateObj,this.stateValue).then((e=>e?(0,n.dy)(u||(u=f`<ha-icon .icon="${0}"></ha-icon>`),e):this._renderFallback()));return(0,n.dy)(h||(h=f`${0}`),(0,r.C)(a))}},{kind:"method",key:"_renderFallback",value:function(){const e=(0,d.N)(this.stateObj);return(0,n.dy)(m||(m=f` <ha-svg-icon .path="${0}"></ha-svg-icon> `),s.Ls[e]||s.Rb)}}]}}),n.oi);t()}catch(c){t(c)}}))},14473:function(e,t,i){i.d(t,{B$:()=>d,EQ:()=>y,Es:()=>c,Gd:()=>l,HF:()=>k,Ip:()=>b,J8:()=>Z,Kc:()=>v,Pl:()=>w,SC:()=>u,SQ:()=>f,W9:()=>_,Xm:()=>x,Yc:()=>s,r4:()=>m,sq:()=>g});i(71695),i(92745),i(9359),i(31526),i(70104),i(19423),i(47021);var a=i(83523),n=i(95262),o=i(68418),r=i(58776);const d="single",s=10,l=e=>{if("condition"in e&&Array.isArray(e.condition))return{condition:"and",conditions:e.condition};for(const t of["and","or","not"])if(t in e)return{condition:t,conditions:e[t]};return e},c=(e,t)=>{e.callService("automation","trigger",{entity_id:t,skip_condition:!0})},u=(e,t)=>e.callApi("DELETE",`config/automation/config/${t}`);let h;const m=(e,t)=>e.callApi("GET",`config/automation/config/${t}`),f=(e,t)=>e.callWS({type:"automation/config",entity_id:t}),g=(e,t,i)=>e.callApi("POST",`config/automation/config/${t}`,i),y=e=>{e=p(e);for(const t of["triggers","conditions","actions"]){const i=e[t];i&&!Array.isArray(i)&&(e[t]=[i])}return e},p=e=>("trigger"in e&&("triggers"in e||(e.triggers=e.trigger),delete e.trigger),"condition"in e&&("conditions"in e||(e.conditions=e.condition),delete e.condition),"action"in e&&("actions"in e||(e.actions=e.action),delete e.action),e.triggers&&(e.triggers=_(e.triggers)),e.actions&&(e.actions=(0,o.eR)(e.actions)),e),_=e=>e?Array.isArray(e)?e.map(_):("triggers"in e&&e.triggers&&(e.triggers=_(e.triggers)),"platform"in e&&("trigger"in e||(e.trigger=e.platform),delete e.platform),e):e,v=e=>{if(!e)return[];const t=[];return(0,n.r)(e).forEach((e=>{"triggers"in e?e.triggers&&t.push(...v(e.triggers)):t.push(e)})),t},b=(e,t)=>{h=e;const i=t?`?${(0,r.ou)({expanded:"1"})}`:"";(0,a.c)(`/config/automation/edit/new${i}`)},k=e=>{b(Object.assign(Object.assign({},e),{},{id:void 0,alias:void 0}))},w=()=>{const e=h;return h=void 0,e},x=(e,t,i,a)=>e.connection.subscribeMessage(t,{type:"subscribe_trigger",trigger:i,variables:a}),Z=(e,t,i)=>e.callWS({type:"test_condition",condition:t,variables:i})},47844:function(e,t,i){i.d(t,{T9:()=>m,kU:()=>r,i4:()=>c,sF:()=>n,z9:()=>k,nk:()=>l,Mw:()=>y,Ch:()=>s,Lr:()=>h,jU:()=>d,Xn:()=>g,r:()=>f,B:()=>_,ou:()=>b,zj:()=>v,qW:()=>o});i(19423),i(40251),i(88044),i(71695),i(47021);var a=i(43546);const n=66977!=i.j?[1,2,3,4,6,8]:null,o=2,r="hls",d="web_rtc",s=(e,t,i)=>`${e}&width=${t}&height=${i}`,l=e=>`/api/camera_proxy_stream/${e.entity_id}?token=${e.attributes.access_token}`,c=async(e,t,i,a)=>{const n=await(async(e,t,i,a,n,...o)=>{let r=a[e];r||(r=a[e]={});const d=r[n];if(d)return d;const s=i(a,n,...o);return r[n]=s,s.then((()=>setTimeout((()=>{r[n]=void 0}),t)),(()=>{r[n]=void 0})),s})("_cameraTmbUrl",9e3,u,e,t);return s(n,i,a)},u=async(e,t)=>{const i=await(0,a.iI)(e,`/api/camera_proxy/${t}`);return e.hassUrl(i.path)},h=async(e,t,i)=>{const a={type:"camera/stream",entity_id:t};i&&(a.format=i);const n=await e.callWS(a);return n.url=e.hassUrl(n.url),n},m=(e,t,i,a)=>e.connection.subscribeMessage(a,{type:"camera/webrtc/offer",entity_id:t,offer:i}),f=(e,t,i,a)=>e.callWS({type:"camera/webrtc/candidate",entity_id:t,session_id:i,candidate:a}),g=(e,t)=>e.callWS({type:"camera/get_prefs",entity_id:t}),y=(e,t,i)=>e.callWS(Object.assign({type:"camera/update_prefs",entity_id:t},i)),p="media-source://camera/",_=e=>e.startsWith(p),v=e=>e.substring(22),b=async(e,t)=>e.callWS({type:"camera/capabilities",entity_id:t}),k=async(e,t)=>e.callWS({type:"camera/webrtc/get_client_config",entity_id:t})},96194:function(e,t,i){i.d(t,{ON:()=>r,PX:()=>d,V_:()=>s,lz:()=>o,nZ:()=>n,rk:()=>c});var a=i(92636);const n="unavailable",o="unknown",r="on",d="off",s=[n,o],l=[n,o,d],c=(0,a.z)(s);(0,a.z)(l)},68418:function(e,t,i){i.d(t,{EH:()=>l,FI:()=>w,Kx:()=>h,Pw:()=>x,TL:()=>m,eM:()=>b,eR:()=>S,kC:()=>g,oE:()=>v,oR:()=>p,rg:()=>k,rq:()=>y,sf:()=>Z,vA:()=>c});i(71695),i(9359),i(70104),i(47021);var a=i(62900),n=i(92636),o=i(83523),r=i(14473);if(66977!=i.j)var d=i(97969);var s=i(58776);const l=99387==i.j?["single","restart","queued","parallel"]:null,c=(0,n.z)(["queued","parallel"]),u=(0,a.Ry)({alias:(0,a.jt)((0,a.Z_)()),continue_on_error:(0,a.jt)((0,a.O7)()),enabled:(0,a.jt)((0,a.O7)())}),h=(0,a.Ry)({entity_id:(0,a.jt)((0,a.G0)([(0,a.Z_)(),(0,a.IX)((0,a.Z_)())])),device_id:(0,a.jt)((0,a.G0)([(0,a.Z_)(),(0,a.IX)((0,a.Z_)())])),area_id:(0,a.jt)((0,a.G0)([(0,a.Z_)(),(0,a.IX)((0,a.Z_)())])),floor_id:(0,a.jt)((0,a.G0)([(0,a.Z_)(),(0,a.IX)((0,a.Z_)())])),label_id:(0,a.jt)((0,a.G0)([(0,a.Z_)(),(0,a.IX)((0,a.Z_)())]))}),m=(0,a.f0)(u,(0,a.Ry)({action:(0,a.jt)((0,a.Z_)()),service_template:(0,a.jt)((0,a.Z_)()),entity_id:(0,a.jt)((0,a.Z_)()),target:(0,a.jt)(h),data:(0,a.jt)((0,a.Ry)()),response_variable:(0,a.jt)((0,a.Z_)()),metadata:(0,a.jt)((0,a.Ry)())})),f=(0,a.f0)(u,(0,a.Ry)({action:(0,a.i0)("media_player.play_media"),target:(0,a.jt)((0,a.Ry)({entity_id:(0,a.jt)((0,a.Z_)())})),entity_id:(0,a.jt)((0,a.Z_)()),data:(0,a.Ry)({media_content_id:(0,a.Z_)(),media_content_type:(0,a.Z_)()}),metadata:(0,a.Ry)()})),g=(e,t,i)=>e.callService("script",t,i),y=e=>"off"===e.state||!!("on"===e.state&&c(e.attributes.mode)&&e.attributes.current<e.attributes.max),p=(e,t)=>e.callApi("DELETE",`config/script/config/${t}`);let _;const v=(e,t)=>e.callApi("GET",`config/script/config/${t}`),b=(e,t)=>e.callWS({type:"script/config",entity_id:t}),k=(e,t)=>{_=e;const i=t?`?${(0,s.ou)({expanded:"1"})}`:"";(0,o.c)(`/config/script/edit/new${i}`)},w=()=>{const e=_;return _=void 0,e},x=e=>"delay"in e?"delay":"wait_template"in e?"wait_template":["condition","and","or","not"].some((t=>t in e))?"check_condition":"event"in e?"fire_event":"device_id"in e?"device_action":"repeat"in e?"repeat":"choose"in e?"choose":"if"in e?"if":"wait_for_trigger"in e?"wait_for_trigger":"variables"in e?"variables":"stop"in e?"stop":"sequence"in e?"sequence":"parallel"in e?"parallel":"set_conversation_response"in e?"set_conversation_response":"action"in e||"service"in e?"metadata"in e&&(0,a.is)(e,f)?"play_media":"service":"unknown",Z=(e,t)=>{var i;const a=null===(i=e.services.script[(0,d.p)(t)])||void 0===i?void 0:i.fields;return void 0!==a&&Object.keys(a).length>0},S=e=>{if(!e)return e;if(Array.isArray(e))return e.map(S);if("service"in e&&("action"in e||(e.action=e.service),delete e.service),"scene"in e&&(e.action="scene.turn_on",e.target={entity_id:e.scene},delete e.scene),"sequence"in e)for(const i of e.sequence)S(i);const t=x(e);if("parallel"===t){S(e.parallel)}if("choose"===t){const t=e;if(Array.isArray(t.choose))for(const e of t.choose)S(e.sequence);else t.choose&&S(t.choose.sequence);t.default&&S(t.default)}if("repeat"===t){S(e.repeat.sequence)}if("if"===t){const t=e;S(t.then),t.else&&S(t.else)}if("wait_for_trigger"===t){const t=e;(0,r.W9)(t.wait_for_trigger)}return e}}}]);
//# sourceMappingURL=68889.d3243623f91ace66.js.map