"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["76075"],{95262:function(e,i,t){function n(e){return null==e||Array.isArray(e)?e:[e]}t.d(i,{r:()=>n})},92636:function(e,i,t){t.d(i,{z:()=>n});t(19083),t(61006);const n=e=>(i,t)=>e.includes(i,t)},14473:function(e,i,t){t.d(i,{B$:()=>a,EQ:()=>y,Es:()=>l,Gd:()=>d,HF:()=>b,Ip:()=>w,J8:()=>A,Kc:()=>h,Pl:()=>j,SC:()=>u,SQ:()=>p,W9:()=>v,Xm:()=>E,Yc:()=>c,r4:()=>f,sq:()=>_});t(71695),t(92745),t(9359),t(31526),t(70104),t(19423),t(47021);var n=t(83523),s=t(95262),r=t(68418),o=t(58776);const a="single",c=10,d=e=>{if("condition"in e&&Array.isArray(e.condition))return{condition:"and",conditions:e.condition};for(const i of["and","or","not"])if(i in e)return{condition:i,conditions:e[i]};return e},l=(e,i)=>{e.callService("automation","trigger",{entity_id:i,skip_condition:!0})},u=(e,i)=>e.callApi("DELETE",`config/automation/config/${i}`);let g;const f=(e,i)=>e.callApi("GET",`config/automation/config/${i}`),p=(e,i)=>e.callWS({type:"automation/config",entity_id:i}),_=(e,i,t)=>e.callApi("POST",`config/automation/config/${i}`,t),y=e=>{e=m(e);for(const i of["triggers","conditions","actions"]){const t=e[i];t&&!Array.isArray(t)&&(e[i]=[t])}return e},m=e=>("trigger"in e&&("triggers"in e||(e.triggers=e.trigger),delete e.trigger),"condition"in e&&("conditions"in e||(e.conditions=e.condition),delete e.condition),"action"in e&&("actions"in e||(e.actions=e.action),delete e.action),e.triggers&&(e.triggers=v(e.triggers)),e.actions&&(e.actions=(0,r.eR)(e.actions)),e),v=e=>e?Array.isArray(e)?e.map(v):("triggers"in e&&e.triggers&&(e.triggers=v(e.triggers)),"platform"in e&&("trigger"in e||(e.trigger=e.platform),delete e.platform),e):e,h=e=>{if(!e)return[];const i=[];return(0,s.r)(e).forEach((e=>{"triggers"in e?e.triggers&&i.push(...h(e.triggers)):i.push(e)})),i},w=(e,i)=>{g=e;const t=i?`?${(0,o.ou)({expanded:"1"})}`:"";(0,n.c)(`/config/automation/edit/new${t}`)},b=e=>{w(Object.assign(Object.assign({},e),{},{id:void 0,alias:void 0}))},j=()=>{const e=g;return g=void 0,e},E=(e,i,t,n)=>e.connection.subscribeMessage(i,{type:"subscribe_trigger",trigger:t,variables:n}),A=(e,i,t)=>e.callWS({type:"test_condition",condition:i,variables:t})},68418:function(e,i,t){t.d(i,{EH:()=>d,FI:()=>j,Kx:()=>g,Pw:()=>E,TL:()=>f,eM:()=>w,eR:()=>Z,kC:()=>_,oE:()=>h,oR:()=>m,rg:()=>b,rq:()=>y,sf:()=>A,vA:()=>l});t(71695),t(9359),t(70104),t(47021);var n=t(62900),s=t(92636),r=t(83523),o=t(14473),a=t(97969),c=t(58776);const d=["single","restart","queued","parallel"],l=(0,s.z)(["queued","parallel"]),u=(0,n.Ry)({alias:(0,n.jt)((0,n.Z_)()),continue_on_error:(0,n.jt)((0,n.O7)()),enabled:(0,n.jt)((0,n.O7)())}),g=(0,n.Ry)({entity_id:(0,n.jt)((0,n.G0)([(0,n.Z_)(),(0,n.IX)((0,n.Z_)())])),device_id:(0,n.jt)((0,n.G0)([(0,n.Z_)(),(0,n.IX)((0,n.Z_)())])),area_id:(0,n.jt)((0,n.G0)([(0,n.Z_)(),(0,n.IX)((0,n.Z_)())])),floor_id:(0,n.jt)((0,n.G0)([(0,n.Z_)(),(0,n.IX)((0,n.Z_)())])),label_id:(0,n.jt)((0,n.G0)([(0,n.Z_)(),(0,n.IX)((0,n.Z_)())]))}),f=(0,n.f0)(u,(0,n.Ry)({action:(0,n.jt)((0,n.Z_)()),service_template:(0,n.jt)((0,n.Z_)()),entity_id:(0,n.jt)((0,n.Z_)()),target:(0,n.jt)(g),data:(0,n.jt)((0,n.Ry)()),response_variable:(0,n.jt)((0,n.Z_)()),metadata:(0,n.jt)((0,n.Ry)())})),p=(0,n.f0)(u,(0,n.Ry)({action:(0,n.i0)("media_player.play_media"),target:(0,n.jt)((0,n.Ry)({entity_id:(0,n.jt)((0,n.Z_)())})),entity_id:(0,n.jt)((0,n.Z_)()),data:(0,n.Ry)({media_content_id:(0,n.Z_)(),media_content_type:(0,n.Z_)()}),metadata:(0,n.Ry)()})),_=(e,i,t)=>e.callService("script",i,t),y=e=>"off"===e.state||!!("on"===e.state&&l(e.attributes.mode)&&e.attributes.current<e.attributes.max),m=(e,i)=>e.callApi("DELETE",`config/script/config/${i}`);let v;const h=(e,i)=>e.callApi("GET",`config/script/config/${i}`),w=(e,i)=>e.callWS({type:"script/config",entity_id:i}),b=(e,i)=>{v=e;const t=i?`?${(0,c.ou)({expanded:"1"})}`:"";(0,r.c)(`/config/script/edit/new${t}`)},j=()=>{const e=v;return v=void 0,e},E=e=>"delay"in e?"delay":"wait_template"in e?"wait_template":["condition","and","or","not"].some((i=>i in e))?"check_condition":"event"in e?"fire_event":"device_id"in e?"device_action":"repeat"in e?"repeat":"choose"in e?"choose":"if"in e?"if":"wait_for_trigger"in e?"wait_for_trigger":"variables"in e?"variables":"stop"in e?"stop":"sequence"in e?"sequence":"parallel"in e?"parallel":"set_conversation_response"in e?"set_conversation_response":"action"in e||"service"in e?"metadata"in e&&(0,n.is)(e,p)?"play_media":"service":"unknown",A=(e,i)=>{var t;const n=null===(t=e.services.script[(0,a.p)(i)])||void 0===t?void 0:t.fields;return void 0!==n&&Object.keys(n).length>0},Z=e=>{if(!e)return e;if(Array.isArray(e))return e.map(Z);if("service"in e&&("action"in e||(e.action=e.service),delete e.service),"scene"in e&&(e.action="scene.turn_on",e.target={entity_id:e.scene},delete e.scene),"sequence"in e)for(const t of e.sequence)Z(t);const i=E(e);if("parallel"===i){Z(e.parallel)}if("choose"===i){const i=e;if(Array.isArray(i.choose))for(const e of i.choose)Z(e.sequence);else i.choose&&Z(i.choose.sequence);i.default&&Z(i.default)}if("repeat"===i){Z(e.repeat.sequence)}if("if"===i){const i=e;Z(i.then),i.else&&Z(i.else)}if("wait_for_trigger"===i){const i=e;(0,o.W9)(i.wait_for_trigger)}return e}},41259:function(e,i,t){t.r(i),t.d(i,{addExternalBarCodeListener:()=>c,attachExternalToApp:()=>a});t(71695),t(9359),t(31526),t(92519),t(42179),t(89256),t(24931),t(88463),t(57449),t(19814),t(47021);var n=t(36522),s=t(5111),r=t(14473);const o=new Set,a=e=>{window.addEventListener("haptic",(i=>e.hass.auth.external.fireMessage({type:"haptic",payload:{hapticType:i.detail}}))),e.hass.auth.external.addCommandHandler((i=>d(e,i)))},c=e=>(o.add(e),()=>{o.delete(e)}),d=(e,i)=>{const t=e.hass.auth.external;if("restart"===i.command)e.hass.connection.reconnect(!0),t.fireMessage({id:i.id,type:"result",success:!0,result:null});else if("notifications/show"===i.command)(0,n.B)(e,"hass-show-notifications"),t.fireMessage({id:i.id,type:"result",success:!0,result:null});else if("sidebar/toggle"===i.command){var a;if(null!==(a=s.E.history.state)&&void 0!==a&&a.open)return t.fireMessage({id:i.id,type:"result",success:!1,error:{code:"not_allowed",message:"dialog open"}}),!0;(0,n.B)(e,"hass-toggle-menu"),t.fireMessage({id:i.id,type:"result",success:!0,result:null})}else if("sidebar/show"===i.command){var c;if(null!==(c=s.E.history.state)&&void 0!==c&&c.open)return t.fireMessage({id:i.id,type:"result",success:!1,error:{code:"not_allowed",message:"dialog open"}}),!0;(0,n.B)(e,"hass-toggle-menu",{open:!0}),t.fireMessage({id:i.id,type:"result",success:!0,result:null})}else if("automation/editor/show"===i.command){var d;(0,r.Ip)(null===(d=i.payload)||void 0===d?void 0:d.config),t.fireMessage({id:i.id,type:"result",success:!0,result:null})}else if("improv/discovered_device"===i.command)(0,n.B)(window,"improv-discovered-device",i.payload),t.fireMessage({id:i.id,type:"result",success:!0,result:null});else if("improv/device_setup_done"===i.command)(0,n.B)(window,"improv-device-setup-done"),t.fireMessage({id:i.id,type:"result",success:!0,result:null});else if("bar_code/scan_result"===i.command)o.forEach((e=>e(i))),t.fireMessage({id:i.id,type:"result",success:!0,result:null});else{if("bar_code/aborted"!==i.command)return!1;o.forEach((e=>e(i))),t.fireMessage({id:i.id,type:"result",success:!0,result:null})}return!0}}}]);
//# sourceMappingURL=76075.e21c40a3b6f0f379.js.map