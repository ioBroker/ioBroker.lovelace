"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["47473"],{74564:function(t,e,o){o.d(e,{Z:()=>r});o(52247),o(95078),o(19134),o(97499),o(97003);const i=t=>{const e=parseFloat(t);if(isNaN(e))throw new Error(`${t} is not a number`);return e};function r(t){if(!t)return null;try{if(t.endsWith("%"))return{w:100,h:i(t.substr(0,t.length-1))};const e=t.replace(":","x").split("x");return 0===e.length?null:1===e.length?{w:i(e[0]),h:1}:{w:i(e[0]),h:i(e[1])}}catch(e){}return null}},28528:function(t,e,o){o.r(e),o.d(e,{HuiIframeCard:()=>p});var i=o(61701),r=(o(52247),o(71695),o(49278),o(40251),o(19134),o(11740),o(97003),o(47021),o(72700),o(8038),o(71513),o(75656),o(50100),o(18084),o(57243)),n=o(50778),a=o(20552),l=o(69634),s=o(74564),c=(o(99426),o(54977),o(39583));let u,f,d,h=t=>t,p=(0,i.Z)([(0,n.Mo)("hui-iframe-card")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await o.e("67521").then(o.bind(o,2849)),document.createElement("hui-iframe-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(){return{type:"iframe",url:"https://www.home-assistant.io",aspect_ratio:"50%"}}},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"layout",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){if(!this._config)return 5;return 1+(this._config.aspect_ratio?Number(this._config.aspect_ratio.replace("%","")):50)/25}},{kind:"method",key:"setConfig",value:function(t){if(!t.url)throw new Error("URL required");this._config=t}},{kind:"method",key:"render",value:function(){var t;if(!this._config||!this.hass)return r.Ld;let e="";if(!("panel"===this.layout||"grid"===this.layout))if(this._config.aspect_ratio){const t=(0,s.Z)(this._config.aspect_ratio);t&&t.w>0&&t.h>0&&(e=`${(100*t.h/t.w).toFixed(2)}%`)}else e="50%";const o=new URL(this._config.url,location.toString()).protocol;if("https:"===location.protocol&&"https:"!==o)return(0,r.dy)(u||(u=h` <ha-alert alert-type="error"> ${0} </ha-alert> `),this.hass.localize("ui.panel.lovelace.cards.iframe.error_secure_context",{target_protocol:o,context_protocol:location.protocol}));let i="";this._config.allow_open_top_navigation&&(i+="allow-top-navigation-by-user-activation");const n=this._config.disable_sandbox?void 0:`${i} ${c.A}`;return(0,r.dy)(f||(f=h` <ha-card .header="${0}"> <div id="root" style="${0}"> <iframe title="${0}" src="${0}" sandbox="${0}" allow="${0}"></iframe> </div> </ha-card> `),this._config.title,(0,l.V)({"padding-top":e}),(0,a.o)(this._config.title),this._config.url,(0,a.o)(n),null!==(t=this._config.allow)&&void 0!==t?t:"fullscreen")}},{kind:"method",key:"getGridOptions",value:function(){return{columns:"full",rows:4,min_columns:3,min_rows:2}}},{kind:"field",static:!0,key:"styles",value(){return(0,r.iv)(d||(d=h`ha-card{overflow:hidden;width:100%;height:100%;display:flex;flex-direction:column}#root{width:100%;height:100%;position:relative}iframe{position:absolute;border:none;width:100%;height:100%;top:0;left:0}`))}}]}}),r.oi)},39583:function(t,e,o){o.d(e,{A:()=>i});const i="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts allow-modals allow-downloads"},86256:function(t,e,o){var i=o(88045),r=o(72616),n=o(95011),a=RangeError;t.exports=function(t){var e=r(n(this)),o="",l=i(t);if(l<0||l===1/0)throw new a("Wrong number of repetitions");for(;l>0;(l>>>=1)&&(e+=e))1&l&&(o+=e);return o}},35638:function(t,e,o){var i=o(72878);t.exports=i(1..valueOf)},49278:function(t,e,o){var i=o(40810),r=o(72878),n=o(88045),a=o(35638),l=o(86256),s=o(29660),c=RangeError,u=String,f=Math.floor,d=r(l),h=r("".slice),p=r(1..toFixed),g=function(t,e,o){return 0===e?o:e%2==1?g(t,e-1,o*t):g(t*t,e/2,o)},w=function(t,e,o){for(var i=-1,r=o;++i<6;)r+=e*t[i],t[i]=r%1e7,r=f(r/1e7)},v=function(t,e){for(var o=6,i=0;--o>=0;)i+=t[o],t[o]=f(i/e),i=i%e*1e7},_=function(t){for(var e=6,o="";--e>=0;)if(""!==o||0===e||0!==t[e]){var i=u(t[e]);o=""===o?i:o+d("0",7-i.length)+i}return o};i({target:"Number",proto:!0,forced:s((function(){return"0.000"!==p(8e-5,3)||"1"!==p(.9,0)||"1.25"!==p(1.255,2)||"1000000000000000128"!==p(0xde0b6b3a7640080,0)}))||!s((function(){p({})}))},{toFixed:function(t){var e,o,i,r,l=a(this),s=n(t),f=[0,0,0,0,0,0],p="",m="0";if(s<0||s>20)throw new c("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return u(l);if(l<0&&(p="-",l=-l),l>1e-21)if(o=(e=function(t){for(var e=0,o=t;o>=4096;)e+=12,o/=4096;for(;o>=2;)e+=1,o/=2;return e}(l*g(2,69,1))-69)<0?l*g(2,-e,1):l/g(2,e,1),o*=4503599627370496,(e=52-e)>0){for(w(f,0,o),i=s;i>=7;)w(f,1e7,0),i-=7;for(w(f,g(10,i,1),0),i=e-1;i>=23;)v(f,1<<23),i-=23;v(f,1<<i),w(f,1,1),v(f,2),m=_(f)}else w(f,0,o),w(f,1<<-e,0),m=_(f)+d("0",s);return m=s>0?p+((r=m.length)<=s?"0."+d("0",s-r)+m:h(m,0,r-s)+"."+h(m,r-s)):p+m}})}}]);
//# sourceMappingURL=47473.3f877c86614685e4.js.map