/*! For license information please see 87828.c7f3c78e89cf9272.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["87828"],{97547:function(t,e,i){i.a(t,(async function(t,r){try{i.d(e,{c:()=>v,computeStateDisplay:()=>m});i(19083),i(19423),i(61006);var o=i(96194),s=i(20382),a=i(54363),n=i(46467),c=i(64214),l=i(33570),d=i(50602),u=i(87974),h=i(73850),f=t([a,d,n,l,c]);[a,d,n,l,c]=f.then?(await f)():f;const m=(t,e,i,r,o,s,a)=>{const n=null==s?void 0:s[e.entity_id];return v(t,i,r,o,n,e.entity_id,e.attributes,void 0!==a?a:e.state)},v=(t,e,i,r,f,m,v,_)=>{if(_===o.lz||_===o.nZ)return t(`state.default.${_}`);const g=(0,h.M)(m),b="counter"===g||"number"===g||"input_number"===g;if((0,d.sJ)(v,"sensor"===g?i:[])||b){if("duration"===v.device_class&&v.unit_of_measurement&&a.a_.includes(v.unit_of_measurement))try{return(0,a.LU)(e,_,v.unit_of_measurement,null==f?void 0:f.display_precision)}catch(p){}if("monetary"===v.device_class)try{return(0,d.uf)(_,e,Object.assign({style:"currency",currency:v.unit_of_measurement,minimumFractionDigits:2},(0,d.l4)({state:_,attributes:v},f)))}catch(p){}const i=(0,d.uf)(_,e,(0,d.l4)({state:_,attributes:v},f)),r=(null==f?void 0:f.translation_key)&&t(`component.${f.platform}.entity.${g}.${f.translation_key}.unit_of_measurement`)||v.unit_of_measurement;return r?`${i}${(0,u.L)(r,e)}${r}`:i}if(["date","input_datetime","time"].includes(g))try{const t=_.split(" ");if(2===t.length)return(0,c.o0)(new Date(t.join("T")),Object.assign(Object.assign({},e),{},{time_zone:s.c_.local}),r);if(1===t.length){if(_.includes("-"))return(0,n.p6)(new Date(`${_}T00:00`),Object.assign(Object.assign({},e),{},{time_zone:s.c_.local}),r);if(_.includes(":")){const t=new Date;return(0,l.mr)(new Date(`${t.toISOString().split("T")[0]}T${_}`),Object.assign(Object.assign({},e),{},{time_zone:s.c_.local}),r)}}return _}catch(y){return _}if(["button","conversation","event","image","input_button","notify","scene","stt","tag","tts","wake_word","datetime"].includes(g)||"sensor"===g&&"timestamp"===v.device_class)try{return(0,c.o0)(new Date(_),e,r)}catch(p){return _}return(null==f?void 0:f.translation_key)&&t(`component.${f.platform}.entity.${g}.${f.translation_key}.state.${_}`)||v.device_class&&t(`component.${g}.entity_component.${v.device_class}.state.${_}`)||t(`component.${g}.entity_component._.state.${_}`)||_};r()}catch(m){r(m)}}))},97206:function(t,e,i){i.r(e),i.d(e,{HaCircularProgress:()=>d});var r=i(61701),o=i(72621),s=(i(71695),i(47021),i(58795)),a=i(57243),n=i(50778);let c,l=t=>t,d=(0,r.Z)([(0,n.Mo)("ha-circular-progress")],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:"aria-label",type:String})],key:"ariaLabel",value(){return"Loading"}},{kind:"field",decorators:[(0,n.Cb)()],key:"size",value:void 0},{kind:"method",key:"updated",value:function(t){if((0,o.Z)(i,"updated",this,3)([t]),t.has("size"))switch(this.size){case"tiny":this.style.setProperty("--md-circular-progress-size","16px");break;case"small":this.style.setProperty("--md-circular-progress-size","28px");break;case"medium":this.style.setProperty("--md-circular-progress-size","48px");break;case"large":this.style.setProperty("--md-circular-progress-size","68px")}}},{kind:"field",static:!0,key:"styles",value(){return[...(0,o.Z)(i,"styles",this),(0,a.iv)(c||(c=l`:host{--md-sys-color-primary:var(--primary-color);--md-circular-progress-size:48px}`))]}}]}}),s.B)},77348:function(t,e,i){i.d(e,{H:()=>r});const r=5},6280:function(t,e,i){i.a(t,(async function(t,r){try{i.d(e,{Nu:()=>$,V3:()=>O,Vk:()=>h,YA:()=>x,xS:()=>m,zP:()=>C});i(19083),i(71695),i(92745),i(61893),i(84283),i(9359),i(56475),i(1331),i(31526),i(70104),i(52924),i(19423),i(11740),i(92519),i(42179),i(89256),i(24931),i(88463),i(57449),i(19814),i(61006),i(47021);var o=i(73850),s=i(97547),a=i(47194),n=t([s]);s=(n.then?(await n)():n)[0];const c=["climate","humidifier","water_heater"],l=["climate","humidifier","input_datetime","thermostat","water_heater","person","device_tracker"],d=["temperature","current_temperature","target_temp_low","target_temp_high","hvac_action","humidity","mode","action","current_humidity"],u=(t,e)=>!t.states[e]||l.includes((0,o.M)(e)),h=(t,e,i,r,o)=>{const s={type:"history/stream",entity_ids:o,start_time:i.toISOString(),end_time:r.toISOString(),minimal_response:!0,no_attributes:!o.some((e=>u(t,e)))},a=new f(t);return t.connection.subscribeMessage((t=>e(a.processMessage(t))),s)};class f{constructor(t,e){this.hass=void 0,this.hoursToShow=void 0,this.combinedHistory=void 0,this.hass=t,this.hoursToShow=e,this.combinedHistory={}}processMessage(t){if(!this.combinedHistory||!Object.keys(this.combinedHistory).length)return this.combinedHistory=t.states,this.combinedHistory;if(!Object.keys(t.states).length)return this.combinedHistory;const e=this.hoursToShow?((new Date).getTime()-3600*this.hoursToShow*1e3)/1e3:void 0,i={};for(const r of Object.keys(this.combinedHistory))i[r]=[];for(const r of Object.keys(t.states))i[r]=[];for(const r of Object.keys(i)){if(r in this.combinedHistory&&r in t.states){const e=this.combinedHistory[r],o=e[e.length-1];i[r]=e.concat(t.states[r]),t.states[r][0].lu<o.lu&&(i[r]=i[r].sort(((t,e)=>t.lu-e.lu)))}else r in this.combinedHistory?i[r]=this.combinedHistory[r]:i[r]=t.states[r];if(e&&r in this.combinedHistory){const t=i[r].filter((t=>t.lu<e));if(!t.length)continue;if(i[r]=i[r].filter((t=>t.lu>=e)),i[r].length&&i[r][0].lu===e)continue;const o=t[t.length-1];o.lu=e,i[r].unshift(o)}}return this.combinedHistory=i,this.combinedHistory}}const m=(t,e,i,r,o,s=!0,a=!0)=>{const n={type:"history/stream",entity_ids:r,start_time:new Date((new Date).getTime()-3600*i*1e3).toISOString(),minimal_response:s,significant_changes_only:a,no_attributes:null!=o?o:!r.some((e=>u(t,e)))},c=new f(t,i);return t.connection.subscribeMessage((t=>e(c.processMessage(t))),n)},v=(t,e)=>t.state===e.state&&(!t.attributes||!e.attributes||d.every((i=>t.attributes[i]===e.attributes[i]))),_=(t,e,i,r,o,n,c)=>{const l=[],d=n[0];for(const a of n){if(l.length>0&&a.s===l[l.length-1].state)continue;const n={};null!=c&&c.attributes.device_class&&(n.device_class=null==c?void 0:c.attributes.device_class),l.push({state_localize:(0,s.c)(t,e,[],i,r[o],o,Object.assign(Object.assign({},a.a||d.a),n),a.s),state:a.s,last_changed:1e3*(a.lc?a.lc:a.lu)})}return{name:(0,a.a)(o,(null==c?void 0:c.attributes)||d.a),entity_id:o,data:l}},g=(t,e,i,r)=>{const s=[];return Object.keys(i).forEach((t=>{const e=i[t],n=e[0],l=(0,o.M)(t),u=[];for(const i of e){let t;if(c.includes(l)){t={state:i.s,last_changed:1e3*i.lu,attributes:{}};for(const e of d)e in i.a&&(t.attributes[e]=i.a[e])}else t={state:i.s,last_changed:1e3*(i.lc?i.lc:i.lu),attributes:{}};u.length>1&&v(t,u[u.length-1])&&v(t,u[u.length-2])||u.push(t)}const h=t in r?r[t].attributes:"friendly_name"in n.a?n.a:void 0;s.push({domain:l,name:(0,a.a)(t,h||{}),entity_id:t,states:u})})),{unit:t,device_class:e,identifier:Object.keys(i).join(""),data:s}},b=["counter","input_number","number"],p=t=>b.includes(t),y=t=>"unit_of_measurement"in t||"state_class"in t,k=(t,e)=>null!=t.attributes.device_class&&e.includes(t.attributes.device_class),w=" ",x=(t,e,i,r,o=!1)=>{const s={};i.forEach((t=>{t in e&&(s[t]=e[t])}));const a={};Object.entries(s).forEach((([t,e])=>{const i=e.map((t=>({s:null!=t.mean?t.mean.toString():t.state.toString(),lc:t.start/1e3,a:{},lu:t.start/1e3})));a[t]=i}));const n=$(t,a,[],t.localize,r,o,!0);return((null==n?void 0:n.line)||[]).forEach((t=>{t.data.forEach((t=>{t.statistics=t.states,t.states=[]}))})),n},$=(t,e,i,r,s,a=!1,n=!1)=>{const c={},l=[],d={};if(new Set([...i,...Object.keys(e)]).forEach((i=>{i in e?d[i]=e[i]:t.states[i]&&(d[i]=[{s:t.states[i].state,a:t.states[i].attributes,lu:new Date(t.states[i].last_updated).getTime()/1e3}])})),!d)return{line:[],timeline:[]};Object.keys(d).forEach((e=>{var i;const u=d[e];if(0===u.length)return;const h=(0,o.M)(e),f=e in t.states?t.states[e]:void 0,m=f||p(h)?void 0:u.find((t=>t.a&&y(t.a)));let v;v=C(h,f,m,s,n)?(null==f?void 0:f.attributes.unit_of_measurement)||(null==m?void 0:m.a.unit_of_measurement)||w:{zone:r("ui.dialogs.more_info_control.zone.graph_unit"),climate:t.config.unit_system.temperature,humidifier:"%",water_heater:t.config.unit_system.temperature}[h];const g={climate:"temperature",humidifier:"humidity",water_heater:"temperature"}[h]||(null===(i=(null==f?void 0:f.attributes)||(null==m?void 0:m.a))||void 0===i?void 0:i.device_class),b=j(v,g,a);v?b&&b in c&&e in c[b]?c[b][e].push(...u):b&&(b in c||(c[b]={}),c[b][e]=u):l.push(_(r,t.locale,t.config,t.entities,e,u,f))}));return{line:Object.keys(c).map((e=>{const i=e.split("_"),r=i[0],o=i[1]||void 0;return g(r,o,c[e],t.states)})),timeline:l}},j=(t,e,i)=>i?`${t}_${e||""}`:t,C=(t,e,i,r,o=!1)=>o||p(t)||null!=e&&y(e.attributes)||null!=e&&"sensor"===t&&k(e,r)||null!=i,O=(t,e,i=!0)=>{if(!e)return t;const r=Object.assign(Object.assign({},t),{},{line:[]}),o={};for(const a of t.line){const t=j(a.unit,a.device_class,i);t&&(o[t]={historyItem:a})}for(const a of e.line){const t=j(a.unit,a.device_class,i);t&&(t in o?o[t].ltsItem=a:o[t]={ltsItem:a})}for(const{historyItem:a,ltsItem:n}of Object.values(o)){if(!a||!n){r.line.push(a||n);continue}const t=Object.assign(Object.assign({},a),{},{data:[]}),e=new Set([...a.data.map((t=>t.entity_id)),...n.data.map((t=>t.entity_id))]);for(const i of e){var s;const e=a.data.find((t=>t.entity_id===i)),r=n.data.find((t=>t.entity_id===i));if(!e||!r){t.data.push(e||r);continue}const o=(null===(s=e.states[0])||void 0===s?void 0:s.last_changed)||r.statistics[r.statistics.length-1].last_changed+1,c=[];for(const t of r.statistics){if(t.last_changed>=o)break;c.push(t)}t.data.push(0===c.length?e:Object.assign(Object.assign({},e),{},{statistics:c}))}r.line.push(t)}return r};r()}catch(c){r(c)}}))},54372:function(t,e,i){i.d(e,{g:()=>n});i(71695),i(92745),i(52805),i(9359),i(56475),i(31526),i(70104),i(48136),i(95078),i(11740),i(47021);var r=i(77348);const o=t=>t.reduce(((t,e)=>t+parseFloat(e.state)),0)/t.length,s=t=>parseFloat(t[t.length-1].state)||0,a=(t,e,i,a,n)=>{t.forEach((t=>{t.state=Number(t.state)})),t=t.filter((t=>!Number.isNaN(t.state)));const c=void 0!==(null==n?void 0:n.min)?n.min:Math.min(...t.map((t=>t.state))),l=void 0!==(null==n?void 0:n.max)?n.max:Math.max(...t.map((t=>t.state))),d=(new Date).getTime(),u=(t,i,r)=>{const o=d-new Date(i.last_changed).getTime();let s=Math.abs(o/36e5-e);return r?(s=60*(s-Math.floor(s)),s=Number((10*Math.round(s/10)).toString()[0])):s=Math.floor(s),t[s]||(t[s]=[]),t[s].push(i),t};if(t=t.reduce(((t,e)=>u(t,e,!1)),[]),a>1&&(t=t.map((t=>t.reduce(((t,e)=>u(t,e,!0)),[])))),t.length)return((t,e,i,a,n,c)=>{const l=[];let d=(c-n)/80;d=0!==d?d:80;let u=i/(e-(1===a?1:0));u=isFinite(u)?u:i;let h=t.filter(Boolean)[0];a>1&&(h=h.filter(Boolean)[0]);let f=[o(h),s(h)];const m=t=>80+r.H/2-(t-n)/d,v=(t,e,i=0,r=1)=>{if(r>1&&t)return t.forEach(((t,i)=>v(t,e,i,r-1)));const a=u*(e+i/6);t&&(f=[o(t),s(t)]);const n=m(t?f[0]:f[1]);return l.push([a,n])};for(let r=0;r<t.length;r+=1)v(t[r],r,0,a);return l.push([i,m(f[1])]),l})(t,e,i,a,c,l)},n=(t,e,i,r,o)=>{if(!t)return;const s=t.map((t=>({state:Number(t.s),last_changed:1e3*t.lu})));return a(s,e,i,r,o)}},33325:function(t,e,i){var r=i(61701),o=(i(71695),i(47021),i(57243)),s=i(50778),a=i(77348);i(9359),i(56475);let n,c,l,d,u=t=>t;(0,r.Z)([(0,s.Mo)("hui-graph-base")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,s.Cb)()],key:"coordinates",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_path",value:void 0},{kind:"method",key:"render",value:function(){return(0,o.dy)(n||(n=u` ${0} `),this._path?(0,o.YP)(c||(c=u`<svg width="100%" height="100%" viewBox="0 0 500 100"> <g> <mask id="fill"> <path class="fill" fill="white" d="${0} L 500, 100 L 0, 100 z"/> </mask> <rect height="100%" width="100%" id="fill-rect" fill="var(--accent-color)" mask="url(#fill)"></rect> <mask id="line"> <path fill="none" stroke="var(--accent-color)" stroke-width="${0}" stroke-linecap="round" stroke-linejoin="round" d="${0}"></path> </mask> <rect height="100%" width="100%" id="rect" fill="var(--accent-color)" mask="url(#line)"></rect> </g> </svg>`),this._path,a.H,this._path):(0,o.YP)(l||(l=u`<svg width="100%" height="100%" viewBox="0 0 500 100"></svg>`)))}},{kind:"method",key:"willUpdate",value:function(t){this.coordinates&&t.has("coordinates")&&(this._path=(t=>{if(!t.length)return"";let e,i,r="",o=t.filter(Boolean)[0];r+=`M ${o[0]},${o[1]}`;for(const l of t)e=l,s=o[0],a=o[1],n=e[0],c=e[1],i=[(s-n)/2+n,(a-c)/2+c],r+=` ${i[0]},${i[1]}`,r+=` Q${e[0]},${e[1]}`,o=e;var s,a,n,c;return r+=` ${e[0]},${e[1]}`,r})(this.coordinates))}},{kind:"field",static:!0,key:"styles",value(){return(0,o.iv)(d||(d=u`:host{display:flex;width:100%}.fill{opacity:.1}`))}}]}}),o.oi)},43403:function(t,e,i){i.a(t,(async function(t,r){try{i.r(e),i.d(e,{HuiGraphHeaderFooter:()=>x});var o=i(61701),s=i(72621),a=(i(52247),i(19083),i(71695),i(19423),i(40251),i(47021),i(57243)),n=i(50778),c=i(72344),l=i(73850),d=(i(97206),i(6280)),u=i(69223),h=i(54372),f=(i(33325),t([d]));d=(f.then?(await f)():f)[0];let m,v,_,g,b,p=t=>t;const y=6e4,k=60*y,w=["counter","input_number","number","sensor"];let x=(0,o.Z)([(0,n.Mo)("hui-graph-header-footer")],(function(t,e){class r extends e{constructor(...e){super(...e),t(this)}}return{F:r,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([i.e("46379"),i.e("24199"),i.e("78943"),i.e("27090"),i.e("3049"),i.e("67983")]).then(i.bind(i,84476)),document.createElement("hui-graph-footer-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(t,e,i){return{type:"graph",entity:(0,u.j)(t,1,e,i,w,(t=>!isNaN(Number(t.state))&&!!t.attributes.unit_of_measurement))[0]||""}}},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"type",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_coordinates",value:void 0},{kind:"field",key:"_error",value:void 0},{kind:"field",key:"_interval",value:void 0},{kind:"field",key:"_subscribed",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(t){if(null==t||!t.entity||!w.includes((0,l.M)(t.entity)))throw new Error("Specify an entity from within the sensor domain");const e=Object.assign({detail:1,hours_to_show:24},t);e.hours_to_show=Number(e.hours_to_show),e.detail=1===e.detail||2===e.detail?e.detail:1,this._config=e}},{kind:"method",key:"render",value:function(){return this._config&&this.hass?this._error?(0,a.dy)(m||(m=p`<div class="errors">${0}</div>`),this._error):this._coordinates?this._coordinates.length?(0,a.dy)(g||(g=p` <hui-graph-base .coordinates="${0}"></hui-graph-base> `),this._coordinates):(0,a.dy)(_||(_=p` <div class="container"> <div class="info">No state history found.</div> </div> `)):(0,a.dy)(v||(v=p` <div class="container"> <ha-circular-progress indeterminate size="small"></ha-circular-progress> </div> `)):a.Ld}},{kind:"method",key:"connectedCallback",value:function(){(0,s.Z)(r,"connectedCallback",this,3)([]),this.hasUpdated&&this._config&&this._subscribeHistory()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,s.Z)(r,"disconnectedCallback",this,3)([]),this._unsubscribeHistory()}},{kind:"method",key:"_subscribeHistory",value:function(){(0,c.p)(this.hass,"history")&&!this._subscribed&&this._config&&(this._subscribed=(0,d.xS)(this.hass,(t=>{this._subscribed&&this._config&&(this._coordinates=(0,h.g)(t[this._config.entity],this._config.hours_to_show,500,this._config.detail,this._config.limits)||[])}),this._config.hours_to_show,[this._config.entity]).catch((t=>{this._subscribed=void 0,this._error=t})),this._setRedrawTimer())}},{kind:"method",key:"_redrawGraph",value:function(){this._coordinates&&(this._coordinates=[...this._coordinates])}},{kind:"method",key:"_setRedrawTimer",value:function(){clearInterval(this._interval),this._interval=window.setInterval((()=>this._redrawGraph()),this._config.hours_to_show>24?k:y)}},{kind:"method",key:"_unsubscribeHistory",value:function(){clearInterval(this._interval),this._subscribed&&(this._subscribed.then((t=>null==t?void 0:t())),this._subscribed=void 0)}},{kind:"method",key:"updated",value:function(t){if(!this._config||!this.hass||!t.has("_config"))return;const e=t.get("_config");e&&this._subscribed&&e.entity===this._config.entity||(this._unsubscribeHistory(),this._subscribeHistory())}},{kind:"field",static:!0,key:"styles",value(){return(0,a.iv)(b||(b=p`ha-circular-progress{position:absolute;top:calc(50% - 14px)}.container{display:flex;justify-content:center;position:relative;padding-bottom:20%}.info{position:absolute;top:calc(50% - 16px);color:var(--secondary-text-color)}`))}}]}}),a.oi);r()}catch(m){r(m)}}))},58795:function(t,e,i){i.d(e,{B:()=>b});var r=i(9065),o=i(50778),s=i(57243),a=(i(71695),i(47021),i(35359)),n=i(13823);let c,l=t=>t;const d=(0,n.T)(s.oi);class u extends d{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){const{ariaLabel:t}=this;return(0,s.dy)(c||(c=l` <div class="progress ${0}" role="progressbar" aria-label="${0}" aria-valuemin="0" aria-valuemax="${0}" aria-valuenow="${0}">${0}</div> `),(0,a.$)(this.getRenderClasses()),t||s.Ld,this.max,this.indeterminate?s.Ld:this.value,this.renderIndicator())}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}}(0,r.__decorate)([(0,o.Cb)({type:Number})],u.prototype,"value",void 0),(0,r.__decorate)([(0,o.Cb)({type:Number})],u.prototype,"max",void 0),(0,r.__decorate)([(0,o.Cb)({type:Boolean})],u.prototype,"indeterminate",void 0),(0,r.__decorate)([(0,o.Cb)({type:Boolean,attribute:"four-color"})],u.prototype,"fourColor",void 0);let h,f,m=t=>t;class v extends u{renderIndicator(){return this.indeterminate?this.renderIndeterminateContainer():this.renderDeterminateContainer()}renderDeterminateContainer(){const t=100*(1-this.value/this.max);return(0,s.dy)(h||(h=m` <svg viewBox="0 0 4800 4800"> <circle class="track" pathLength="100"></circle> <circle class="active-track" pathLength="100" stroke-dashoffset="${0}"></circle> </svg> `),t)}renderIndeterminateContainer(){return(0,s.dy)(f||(f=m` <div class="spinner"> <div class="left"> <div class="circle"></div> </div> <div class="right"> <div class="circle"></div> </div> </div>`))}}let _;const g=(0,s.iv)(_||(_=(t=>t)`:host{--_active-indicator-color:var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width:var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color:var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color:var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color:var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color:var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size:var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;width:var(--_size);height:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.active-track,.circle,.left,.progress,.right,.spinner,.track,svg{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/ 100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset .5s cubic-bezier(0, 0, .2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1.568s}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4,0,0.2,1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/ 100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) transparent transparent;animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4,0,0.2,1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-.666s,0s}@media(forced-colors:active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}`));let b=class extends v{};b.styles=[g],b=(0,r.__decorate)([(0,o.Mo)("md-circular-progress")],b)}}]);
//# sourceMappingURL=87828.c7f3c78e89cf9272.js.map