export const __webpack_ids__=["92691"];export const __webpack_modules__={54363:function(t,e,r){r.a(t,(async function(t,n){try{r.d(e,{$k:()=>c,K:()=>p,LU:()=>g,a_:()=>f,h6:()=>d});var i=r(16485),s=r(27486),o=r(34618),a=t([i]);i=(a.then?(await a)():a)[0];const u=t=>t<10?`0${t}`:t,c=(t,e)=>{const r=e.days||0,n=e.hours||0,i=e.minutes||0,s=e.seconds||0,o=e.milliseconds||0;return r>0?`${Intl.NumberFormat(t.language,{style:"unit",unit:"day",unitDisplay:"long"}).format(r)} ${n}:${u(i)}:${u(s)}`:n>0?`${n}:${u(i)}:${u(s)}`:i>0?`${i}:${u(s)}`:s>0?Intl.NumberFormat(t.language,{style:"unit",unit:"second",unitDisplay:"long"}).format(s):o>0?Intl.NumberFormat(t.language,{style:"unit",unit:"millisecond",unitDisplay:"long"}).format(o):null},l=(0,s.Z)((t=>new Intl.DurationFormat(t.language,{style:"long"}))),d=(t,e)=>l(t).format(e),_=(0,s.Z)((t=>new Intl.DurationFormat(t.language,{style:"digital",hoursDisplay:"auto"}))),p=(t,e)=>_(t).format(e),f=["min","h","d"],h=(0,s.Z)((t=>new Intl.DurationFormat(t.language,{style:"narrow",daysDisplay:"always"}))),m=(0,s.Z)((t=>new Intl.DurationFormat(t.language,{style:"narrow",hoursDisplay:"always"}))),y=(0,s.Z)((t=>new Intl.DurationFormat(t.language,{style:"narrow",minutesDisplay:"always"}))),g=(t,e,r,n)=>{const i=void 0!==n?(0,o.N)(parseFloat(e),n):parseFloat(e);switch(r){case"d":{const e=Math.floor(i),r={days:e,hours:Math.floor(24*(i-e))};return h(t).format(r)}case"h":{const e=Math.floor(i),r={hours:e,minutes:Math.floor(60*(i-e))};return m(t).format(r)}case"min":{const e=Math.floor(i),r={minutes:e,seconds:Math.floor(60*(i-e))};return y(t).format(r)}default:throw new Error("Invalid duration unit")}};n()}catch(t){n(t)}}))},16755:function(t,e,r){r.d(e,{v:()=>n});r(9359),r(31526),r(92519),r(42179),r(89256),r(24931),r(88463),r(57449),r(19814),r(32517);const n=t=>e=>{const r=String(e.key);return{...e,kind:"method",descriptor:{set(t){const e=this[`__transform_${r}`],n=this._transformers.get(r);this[`__transform_${r}`]=n?n.call(this,t):t,this[`__original_${r}`]=t,this.requestUpdate(r,e)},get(){return this[`__transform_${r}`]},enumerable:!0,configurable:!0},finisher(r){if(r.prototype._transformers){if(!r.prototype.hasOwnProperty("_transformers")){const t=r.prototype._transformers;r.prototype._transformers=new Map,t.forEach(((t,e)=>r.prototype._transformers.set(e,t)))}}else{r.prototype._transformers=new Map,r.prototype._watching=new Map;const t=r.prototype.willUpdate;r.prototype.willUpdate=function(e){t.call(this,e);const r=new Set;e.forEach(((t,e)=>{const n=this._watching.get(e);void 0!==n&&n.forEach((t=>r.add(t)))})),r.forEach((t=>{this[t]=this[`__original_${String(t)}`]}))}}r.prototype._transformers.set(e.key,t.transformer),t.watch&&t.watch.forEach((t=>{let n=r.prototype._watching.get(t);n||(n=new Set,r.prototype._watching.set(t,n)),n.add(e.key)})),r.createProperty(e.key,{noAccessor:!0,hasChanged:(t,e)=>!((t,e)=>{if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){if(t.constructor!==e.constructor)return!1;let r,n;if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(r=n;0!=r--;)if(t[r]!==e[r])return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(r of t.entries())if(!e.has(r[0]))return!1;for(r of t.entries())if(r[1]!==e.get(r[0]))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(r of t.entries())if(!e.has(r[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!==e.length)return!1;for(r=n;0!=r--;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const i=Object.keys(t);if(n=i.length,n!==Object.keys(e).length)return!1;for(r=n;0!=r--;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;for(r=n;0!=r--;){const n=i[r];if(t[n]!==e[n])return!1}return!0}return t!=t&&e!=e})(t,e),...t.propertyOptions})}}}},88128:function(t,e,r){r.d(e,{P:()=>n});const n=t=>t.preventDefault()},25904:function(t,e,r){r.a(t,(async function(t,n){try{r.d(e,{computeAttributeNameDisplay:()=>g,computeAttributeValueDisplay:()=>y});r(9359),r(70104),r(52924);var i=r(59519),s=r(49319),o=r(92091),a=r(46467),u=r(64214),c=r(50602),l=r(87733),d=r(28281),_=r(41404),p=r(87974),f=r(73850),h=r(59847),m=t([c,i,u,a]);[c,i,u,a]=m.then?(await m)():m;const y=(t,e,r,n,l,m,g)=>{const b=void 0!==g?g:e.attributes[m];if(null==b)return t("state.default.unknown");if("number"==typeof b){const t=(0,h.N)(e),o=i.Ht[t]?.[m],a=o?o(b,r):(0,c.uf)(b,r);let u=i.F_[t]?.[m];return"weather"===t?u=(0,s.pv)(n,e,m):i.ig.has(m)&&(u=n.unit_system.temperature),u?`${a}${(0,p.L)(u,r)}${u}`:a}if("string"==typeof b&&(0,d.J)(b,!0)){if((0,_.W)(b)){const t=new Date(b);if((0,o.Z)(t))return(0,u.E8)(t,r,n)}const t=new Date(b);if((0,o.Z)(t))return(0,a.p6)(t,r,n)}if(Array.isArray(b)&&b.some((t=>t instanceof Object))||!Array.isArray(b)&&b instanceof Object)return JSON.stringify(b);if(Array.isArray(b))return b.map((i=>y(t,e,r,n,l,m,i))).join(", ");const v=e.entity_id,w=(0,f.M)(v),$=e.attributes.device_class,k=l[v],x=k?.translation_key;return x&&t(`component.${k.platform}.entity.${w}.${x}.state_attributes.${m}.state.${b}`)||$&&t(`component.${w}.entity_component.${$}.state_attributes.${m}.state.${b}`)||t(`component.${w}.entity_component._.state_attributes.${m}.state.${b}`)||b},g=(t,e,r,n)=>{const i=e.entity_id,s=e.attributes.device_class,o=(0,f.M)(i),a=r[i],u=a?.translation_key;return u&&t(`component.${a.platform}.entity.${o}.${u}.state_attributes.${n}.name`)||s&&t(`component.${o}.entity_component.${s}.state_attributes.${n}.name`)||t(`component.${o}.entity_component._.state_attributes.${n}.name`)||(0,l.f)(n.replace(/_/g," ").replace(/\bid\b/g,"ID").replace(/\bip\b/g,"IP").replace(/\bmac\b/g,"MAC").replace(/\bgps\b/g,"GPS"))};n()}catch(t){n(t)}}))},28281:function(t,e,r){r.d(e,{J:()=>o});const n="^\\d{4}-(0[1-9]|1[0-2])-([12]\\d|0[1-9]|3[01])",i=new RegExp(n+"$"),s=new RegExp(n),o=(t,e=!1)=>e?s.test(t):i.test(t)},41404:function(t,e,r){r.d(e,{W:()=>i});const n=/^\d{4}-(0[1-9]|1[0-2])-([12]\d|0[1-9]|3[01])[T| ](((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)(\8[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)$/,i=t=>n.test(t)},45801:function(t,e,r){var n=r(44249),i=r(72621),s=r(57243),o=r(15093),a=r(35359),u=r(69634),c=r(59847),l=r(4242);(0,n.Z)([(0,o.Mo)("ha-user-badge")],(function(t,e){class r extends e{constructor(...e){super(...e),t(this)}}return{F:r,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"user",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_personPicture",value:void 0},{kind:"field",key:"_personEntityId",value:void 0},{kind:"method",key:"willUpdate",value:function(t){if((0,i.Z)(r,"willUpdate",this,3)([t]),t.has("user"))return void this._getPersonPicture();const e=t.get("hass");if(this._personEntityId&&e&&this.hass.states[this._personEntityId]!==e.states[this._personEntityId]){const t=this.hass.states[this._personEntityId];t?this._personPicture=t.attributes.entity_picture:this._getPersonPicture()}else!this._personEntityId&&e&&this._getPersonPicture()}},{kind:"method",key:"render",value:function(){if(!this.hass||!this.user)return s.Ld;const t=this._personPicture;if(t)return s.dy`<div style="${(0,u.V)({backgroundImage:`url(${this.hass.hassUrl(t)})`})}" class="picture"></div>`;const e=(0,l.fm)(this.user.name);return s.dy`<div class="initials ${(0,a.$)({long:e.length>2})}"> ${e} </div>`}},{kind:"method",key:"_getPersonPicture",value:function(){if(this._personEntityId=void 0,this._personPicture=void 0,this.hass&&this.user)for(const t of Object.values(this.hass.states))if(t.attributes.user_id===this.user.id&&"person"===(0,c.N)(t)){this._personEntityId=t.entity_id,this._personPicture=t.attributes.entity_picture;break}}},{kind:"field",static:!0,key:"styles",value:()=>s.iv`:host{display:contents}.picture{width:40px;height:40px;background-size:cover;border-radius:50%}.initials{display:inline-block;box-sizing:border-box;width:40px;line-height:40px;border-radius:50%;text-align:center;background-color:var(--light-primary-color);text-decoration:none;color:var(--text-light-primary-color,var(--primary-text-color));overflow:hidden}.initials.long{font-size:80%}`}]}}),s.oi)},59519:function(t,e,r){r.a(t,(async function(t,n){try{r.d(e,{F_:()=>u,Ht:()=>c,ig:()=>a,wk:()=>o});r(92519),r(42179),r(89256),r(24931),r(88463),r(57449),r(19814);var i=r(54363),s=t([i]);i=(s.then?(await s)():s)[0];const o=["entity_id","assumed_state","attribution","custom_ui_more_info","custom_ui_state_card","device_class","editable","emulated_hue_name","emulated_hue","entity_picture","event_types","friendly_name","haaska_hidden","haaska_name","icon","initial_state","last_reset","restored","state_class","supported_features","unit_of_measurement","available_tones"],a=new Set(["temperature","current_temperature","target_temperature","target_temp_temp","target_temp_high","target_temp_low","target_temp_step","min_temp","max_temp"]),u={climate:{humidity:"%",current_humidity:"%",target_humidity_low:"%",target_humidity_high:"%",target_humidity_step:"%",min_humidity:"%",max_humidity:"%"},cover:{current_position:"%",current_tilt_position:"%"},fan:{percentage:"%"},humidifier:{humidity:"%",current_humidity:"%",min_humidity:"%",max_humidity:"%"},light:{color_temp:"mired",max_mireds:"mired",min_mireds:"mired",color_temp_kelvin:"K",min_color_temp_kelvin:"K",max_color_temp_kelvin:"K",brightness:"%"},sun:{azimuth:"°",elevation:"°"},vacuum:{battery_level:"%"},valve:{current_position:"%"},sensor:{battery_level:"%"},media_player:{volume_level:"%"}},c={light:{brightness:t=>Math.round(t/255*100).toString()},media_player:{volume_level:t=>Math.round(100*t).toString(),media_duration:(t,e)=>{const r=Math.floor(t/3600),n=Math.floor(t%3600/60),s=t%60;return(0,i.K)(e,{hours:r,minutes:n,seconds:s})}}};n()}catch(t){n(t)}}))}};
//# sourceMappingURL=92691.d8369f606d4896ac.js.map