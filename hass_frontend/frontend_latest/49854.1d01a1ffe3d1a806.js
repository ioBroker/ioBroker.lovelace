export const __rspack_esm_id=49854;export const __rspack_esm_ids=[49854];export const __webpack_modules__={60057(t,e,i){var a=i(97377);i.d(e,{},{H:(t,e)=>{const{latitude:i,longitude:r,gps_accuracy:o}=t.attributes;if("number"==typeof i&&"number"==typeof r)return{latitude:i,longitude:r,gpsAccuracy:o};if("person"!==(0,a.t)(t))return;const n=t.attributes.in_zones;if(!Array.isArray(n)||0===n.length)return;const s=((t,e)=>{for(const i of t){const t=e[i];if(t&&!t.attributes.passive&&"number"==typeof t.attributes.latitude&&"number"==typeof t.attributes.longitude)return t}})(n,e);return s?{latitude:s.attributes.latitude,longitude:s.attributes.longitude}:void 0}})},51139(t,e,i){i(47144),i(8021),i(89542),i(86596),i(25102),i(47508);var a=i(25071),r=i(5792);const o={light:"/static/map/light.json",dark:"/static/map/dark.json"},n=`${r.ZV}/raster/{z}/{x}/{y}.png?token={token}`;let s;const l=()=>(()=>{if(void 0===s)try{const t=document.createElement("canvas").getContext("webgl2");s=Boolean(t),t?.getExtension("WEBGL_lose_context")?.loseContext()}catch{s=!1}return s})()&&"function"==typeof BigInt,c=t=>new URL(t,location.href).href,d=new Map,h=async t=>{const e=t.shipped&&o[t.shipped],a=e?JSON.parse(await(t=>{let e=d.get(t);return e||(e=fetch(t).then(t=>t.text()).finally(()=>d.delete(t)),d.set(t,e)),e})(e)):await(await i.e(60532).then(i.bind(i,94335))).buildMapStyle(t.palette,t.options??{},t.baseColors);return"string"==typeof a.sprite?a.sprite=c(a.sprite):Array.isArray(a.sprite)&&(a.sprite=a.sprite.map(t=>({...t,url:c(t.url)}))),a};let p=!1;const u=t=>{p||(p=!0,t(new URL("/frontend_latest/maplibre-gl-worker.20260930.3.js",location.href).href))};let m=!1;const b=t=>{m||(m=!0,t(new URL("/static/map/mapbox-gl-rtl-text.js",location.href).href,!0).catch(()=>{}))},g=(t,e,i)=>{const a=t.tileLayer((0,r.bK)(n),{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',maxZoom:20,maxNativeZoom:19,referrerPolicy:void 0,token:i??""}).addTo(e);let o=!1,s=0;a.on("tileerror",()=>{o=!0,Date.now()-s<3e4||(s=Date.now(),(0,r.Oc)())});const l=(0,r.Xx)(t=>{a.options.token=t,o&&(o=!1,a.redraw())});return e.on("unload",l),{setMapStyle:()=>{}}};i.d(e,{},{MK:h,V4:async(t,e,o,n,s=!1)=>{if(!s&&l()){let s;try{const[{maplibreGL:l},c]=await Promise.all([Promise.all([i.e(54730),i.e(35166),i.e(88580)]).then(i.bind(i,2797)),Promise.all([i.e(54730),i.e(69688)]).then(i.bind(i,46513))]);u(c.setWorkerUrl),b(c.setRTLTextPlugin),s=await(async(t,e,i,o,n)=>{let s;try{s=t({style:await h(o),transformRequest:t=>({...(0,r.rG)(t),referrerPolicy:void 0})}),s.addTo(i)}catch{if(s)try{s.remove()}catch{}return}let l=o,c=o,d=0,p=!0,u=!1,m=n;const b=s.getMaplibreMap();let f,y=!1;const _=()=>{y&&k()},v=()=>{p=!1,document.removeEventListener("visibilitychange",_);try{s.remove()}catch{}g(e,i,m)},k=()=>{clearTimeout(f),p&&!document.hidden&&(f=window.setTimeout(v,2e3))};b.on("webglcontextlost",()=>{y=!0,k()}),b.on("webglcontextrestored",()=>{y=!1,clearTimeout(f)}),document.addEventListener("visibilitychange",_),i.on("unload",()=>{clearTimeout(f),document.removeEventListener("visibilitychange",_)});const w=t=>{const e=++d;h(t).then(i=>{e===d&&(l=t,s.getMaplibreMap()?.setStyle(i))}).catch(()=>{e===d&&(c=l)})};let M=0;b.on("error",t=>{const e=t.error?.status;void 0!==e&&403!==e&&404!==e||Date.now()-M<3e4||(M=Date.now(),u=!0,(0,r.Oc)())});const x=(0,r.Xx)(t=>{m=t,p&&u&&(u=!1,w(c))});return i.on("unload",x),{setMapStyle:t=>{p&&!(0,a.b)(t,c)&&(c=t,w(t))}}})(l,t,e,o,n)}catch{}if(s)return s}return g(t,e,n)},W$:u,jV:l,vM:b})},55659(t,e,i){i.d(e,{},{rx:t=>{const e=document.createElement("div");e.className="editable-circle-resize",e.tabIndex=0,e.setAttribute("role","slider"),e.setAttribute("aria-valuemin","1"),e.setAttribute("aria-valuemax",String(1e5)),t&&e.setAttribute("aria-label",t);const i=document.createElement("div");return i.className="editable-circle-resize-dot",e.appendChild(i),e},xr:"\n  .editable-circle-center {\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    background: var(--primary-color);\n    border: 2px solid var(--card-background-color, #fff);\n    box-sizing: border-box;\n    box-shadow: var(--ha-box-shadow-s);\n  }\n  .editable-circle-resize {\n    width: 24px;\n    height: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: ew-resize;\n  }\n  .editable-circle-resize-dot {\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    background: var(--card-background-color, #fff);\n    border: 2px solid var(--primary-color);\n    box-sizing: border-box;\n    box-shadow: var(--ha-box-shadow-s);\n  }\n"})},86233(t,e,i){const a=6371008.8,r=t=>t*Math.PI/180,o=t=>180*t/Math.PI,n=(t,e,i)=>{const n=e/a,s=r(t[0]),l=r(i),c=Math.asin(Math.sin(s)*Math.cos(n)+Math.cos(s)*Math.sin(n)*Math.cos(l)),d=Math.atan2(Math.sin(l)*Math.sin(n)*Math.cos(s),Math.cos(n)-Math.sin(s)*Math.sin(c));return[o(c),t[1]+o(d)]},s=85.051129,l=([t,e],i)=>{const a=Math.sin(r(Math.max(-85.051129,Math.min(s,t))));return{x:(e/360+.5)*i,y:(.5-Math.log((1+a)/(1-a))/(4*Math.PI))*i}};i.d(e,{},{RO:(t,e)=>n(t,e,90),Rn:(t,e)=>{const i=e/a,n=Math.max(-90,t[0]-o(i)),s=Math.min(90,t[0]+o(i)),l=Math.sin(i)/Math.cos(r(t[0]));if(n<=-90||s>=90||Math.abs(l)>=1)return[[n,-180],[s,180]];const c=o(Math.asin(l));return[[n,t[1]-c],[s,t[1]+c]]},S_:(t,e)=>{const i=r(e[0]-t[0]),a=r(e[1]-t[1]),o=Math.sin(i/2)**2+Math.cos(r(t[0]))*Math.cos(r(e[0]))*Math.sin(a/2)**2;return 12742017.6*Math.asin(Math.sqrt(o))},bM:n,kb:(t,e,i)=>{const a=256*2**i,r=l(t,a),o=l(e,a),n=Math.abs(r.x-o.x);return Math.hypot(Math.min(n,a-n),r.y-o.y)}})},28006(t,e,i){i.d(e,{jJ:()=>r,u8:()=>a,l6:()=>s,kR:()=>p,vA:()=>h});i(97700),i(47144),i(89542);const a=["default","colorful","natural","muted","gray","toner"],r="default",o={default:{palette:"colorful",colors:{background:"#f5efe5",land:"#f5efe5",water:"#b8daec",labelWater:"#5487aa",natureWood:"#cfe4bc",natureGrass:"#e2eed8",naturePark:"#cfe4bc",natureLeisure:"#e2eed8",natureAgriculture:"#e8efe1",natureWetland:"#e5ecdf",natureSand:"#f3eadd",natureRock:"#f3eadd",glacier:"#faf6f0",areaResidential:"#f1e9da",areaCommercial:"#f7e0d8",areaIndustrial:"#f0e7cb",areaWaste:"#eee3d3",areaBurial:"#f1e9da",siteParking:"#efe7d6",siteSports:"#cfe4bc26",building:"#eadec7",buildingBg:"#e0cdae",roadStreet:"#fcfaf8",roadStreetBg:"#e9dbc4",roadTrunk:"#ffe7be",roadTrunkBg:"#ebd09f",roadMotorway:"#f1d6a5",roadMotorwayBg:"#e8bd6e",transitRail:"#ece0cb",transitSubway:"#ece2cf",transitCycle:"#f3eee2",transitFoot:"#f3eee2",boundary:"#dbc49f",boundaryDisputed:"#e5d7bd",label:"#4b473c",labelHalo:"#faf8f5cc",labelSymbol:"#8f8774",labelPoi:"#8f877466",labelShield:"#fbf8f3",labelHousenumber:"#8f87744d"},colorsDark:{background:"#191b2c",land:"#191b2c",water:"#27357a",labelWater:"#9cc0f0",natureWood:"#254948",natureGrass:"#213b39",naturePark:"#28504b",natureLeisure:"#213532",natureAgriculture:"#203233",natureWetland:"#253337",natureSand:"#2a2c3d",natureRock:"#2a2c3d",glacier:"#2a2c3d",areaResidential:"#1d2034",areaCommercial:"#29213a",areaIndustrial:"#242431",areaWaste:"#1d2034",areaBurial:"#1d2034",siteParking:"#1d2034",siteSports:"#25413926",building:"#21243c",buildingBg:"#2a2e4a",roadStreet:"#2b3052",roadStreetBg:"#1a1d33",roadTrunk:"#383e67",roadTrunkBg:"#22263f",roadMotorway:"#454d7d",roadMotorwayBg:"#2a2f4c",transitRail:"#2c3150",transitSubway:"#2c3150",transitCycle:"#2b3052",transitFoot:"#2b3052",boundary:"#3b4068",boundaryDisputed:"#3b4068",label:"#e7ecf8",labelHalo:"#12141fcc",labelSymbol:"#959dbd",labelPoi:"#959dbd66",labelShield:"#191b2c",labelHousenumber:"#959dbd4d"}},colorful:{palette:"colorful"},natural:{palette:"natural"},muted:{palette:"muted"},gray:{palette:"gray"},toner:{palette:"toner"}},n=t=>a.includes(t),s=t=>"object"==typeof t&&null!==t,l=["colors","recolor","text","icon","layers"],c=t=>t.replace(/_([a-z])/g,(t,e)=>e.toUpperCase()),d=t=>Array.isArray(t)?t.map(d):t&&"object"==typeof t?Object.fromEntries(Object.entries(t).map(([t,e])=>[c(t),d(e)])):t,h=(t,e)=>{const i=n(e)&&e!==r?e:void 0,a=s(t)?{...t}:{};return delete a.base,Object.keys(a).length?{...i&&{base:i},...a}:i},p=(t,e,i)=>{const a=s(t)?t:void 0,h=a?a.base:t,p=n(h)?h:r,u=((t,e)=>{const{palette:i}=o[t];return e?`${i}-dark`:i})(p,e),m=a?((t,e)=>{const i=t,a={};for(const t of l){const e=i[t]??i[c(t)];void 0!==e&&(a[c(t)]=d(e))}const r=i.colors_dark;return e&&void 0!==r&&(a.colors=d(r)),a})(a,e):{},b=Object.keys(m).length>0,{colors:g,colorsDark:f}=o[p],y=(e?f:g)??g;if((y||i)&&(m.colors={...y,...i,...m.colors}),!Object.keys(m).length)return{palette:u};const _=y?{baseColors:y}:{};return p===r&&(!i&&!b)?{palette:u,options:m,..._,shipped:e?"dark":"light"}:{palette:u,options:m,..._}}},71760(t,e,i){i(47144),i(21927),i(25744),i(89542),i(99686);const a={"--ha-color-map-land":["background","land"],"--ha-color-map-water":["water"],"--ha-color-map-green":["naturePark","natureWood","natureGrass","natureLeisure","natureWetland","siteSports"],"--ha-color-map-area":["areaResidential","areaCommercial","areaIndustrial","areaWaste","areaBurial","siteParking","natureAgriculture","natureSand","natureRock"],"--ha-color-map-building":["building"],"--ha-color-map-building-outline":["buildingBg"],"--ha-color-map-road":["roadStreet"],"--ha-color-map-road-major":["roadMotorway","roadTrunk"],"--ha-color-map-road-outline":["roadStreetBg","roadTrunkBg","roadMotorwayBg"],"--ha-color-map-transit":["transitRail","transitSubway","transitCycle","transitFoot"],"--ha-color-map-boundary":["boundary","boundaryDisputed"],"--ha-color-map-label":["label"],"--ha-color-map-label-halo":["labelHalo"],"--ha-color-map-label-secondary":["labelSymbol","labelPoi","labelHousenumber"]},r={siteSports:.15,labelHalo:.8,labelPoi:.4,labelHousenumber:.3},o=/^#([0-9a-f]{3,8})$/i,n=/^rgba?\(([^)]+)\)$/i,s=/^color\(srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+))?\s*\)$/i,l=t=>{const e=t.match(o);if(e){const t=e[1],i=3===t.length||4===t.length,a=e=>i?parseInt(t[e]+t[e],16):parseInt(t.slice(2*e,2*e+2),16);if(3===t.length||4===t.length||6===t.length||8===t.length){const e=4===t.length||8===t.length?a(3)/255:1;return[a(0),a(1),a(2),e]}return}const i=t.match(n);if(i){const t=i[1].split(/[,\s/]+/).filter(Boolean).map(Number);if(t.length<3||t.slice(0,3).some(Number.isNaN))return;return[t[0],t[1],t[2],t[3]??1]}const a=t.match(s);if(a){const t=t=>Math.round(255*Number(t));return[t(a[1]),t(a[2]),t(a[3]),Number(a[4]??1)]}},c=[1,2,3,1],d=(t,e)=>{const i=document.createElement("span");i.style.cssText="display:none;color:rgb(1, 2, 3)";const a=document.createElement("span");a.style.color=`var(${e})`,i.append(a),t.append(i);const r=l(getComputedStyle(a).color);return i.remove(),r&&r.every((t,e)=>t===c[e])?void 0:r};i.d(e,{},{Q:t=>{const e=getComputedStyle(t);let i;for(const[o,n]of Object.entries(a)){const a=e.getPropertyValue(o).trim();if(!a)continue;const s=l(a)??d(t,o);if(!s)continue;i??={};const[c,h,p,u]=s;for(const t of n){const e=Math.round(u*(r[t]??1)*1e3)/1e3;i[t]=`rgba(${c},${h},${p},${e})`}}return i}})},52573(t,e,i){i(47144),i(25744),i(8021);const a="haMapA11y",r=t=>{const e=t.dataset[a];void 0!==e&&(e.split(" ").filter(Boolean).forEach(e=>t.removeAttribute(e)),delete t.dataset[a])};i.d(e,{},{I:r,l:(t,e,i)=>{r(t);const o=[];!e||t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")||(t.setAttribute("aria-label",e),o.push("aria-label")),t.hasAttribute("role")||(i?(t.setAttribute("role","button"),o.push("role")):e?(t.setAttribute("role","img"),o.push("role")):(t.setAttribute("aria-hidden","true"),o.push("aria-hidden"))),i&&!t.hasAttribute("tabindex")&&(t.tabIndex=0,o.push("tabindex")),t.dataset[a]=o.join(" ")}})},7952(t,e,i){var a=i(65541),r=i.n(a);i.d(e,{},{D:t=>r()(t,{whiteList:{},stripIgnoreTag:!0,stripIgnoreTagBody:!0})})},14279(t,e,i){i.a(t,async function(t,a){try{var r=i(89797),o=i(20686),n=i(32379),s=i(66543),l=i(70465),c=i(86075),d=i(32323),h=t([d]);d=(h.then?(await h)():h)[0];const p=1.25,u=12,m=Math.round(u*Math.SQRT2/2),b=4,g=10,f=(t,e)=>{const i=e?Math.round(t*p):t,a=i+m+b+g;return{size:[i,a],anchor:[i/2,a-g/2]}};class y extends o.WF{render(){return o.qy` <div part="marker" class="marker ${this.entityPicture?"picture":""}" style=${(0,s.W)({"--ha-marker-selected-color":this.entityColor})};> ${this.entityPicture?o.qy`<div part="picture" class="entity-picture" style=${(0,s.W)({"background-image":`url(${this.entityPicture})`})};></div>`:this.showIcon&&this.entityId?o.qy`<ha-state-icon .stateObj=${this._stateObj}></ha-state-icon>`:this.entityUnit?o.qy` ${this.entityName} <span class="unit" style="display:${this.entityUnit?"initial":"none"}">${this.entityUnit}</span> `:this.entityName} </div> ${this.floating?o.qy`<div class="tail"></div> <div class="dot"></div>`:o.s6} `}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._badgeTap),this.addEventListener("keydown",this._handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._badgeTap),this.removeEventListener("keydown",this._handleKeydown)}constructor(...t){super(...t),this.showIcon=!1,this.selected=!1,this.floating=!1,this._handleKeydown=t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._badgeTap(t))},this._badgeTap=t=>{t.stopPropagation(),this.entityId&&(0,c.r)(this,"hass-more-info",{entityId:this.entityId})}}}y.styles=o.AH`:host([floating]){filter:var(--ha-cluster-shadow,drop-shadow(0 1px 3px #0000001f));pointer-events:none;flex-direction:column;align-items:center;display:flex}:host([floating]) .marker,:host([floating]) .tail{pointer-events:auto}:host([floating]) .marker{z-index:1;position:relative}.marker{text-align:center;box-sizing:border-box;width:var(--ha-marker-size,48px);height:var(--ha-marker-size,48px);font-size:var(--ha-marker-font-size,var(--ha-font-size-xl));border-radius:var(--ha-marker-border-radius,50%);border:var(--ha-marker-border-width,3px) solid var(--ha-marker-color,var(--card-background-color,#fff));color:var(--primary-text-color);background-color:var(--ha-marker-background,var(--card-background-color));justify-content:center;align-items:center;display:flex}.marker.picture{overflow:hidden}:host([selected]) .marker{width:calc(var(--ha-marker-size,48px) * var(--ha-marker-selected-scale,${p}));height:calc(var(--ha-marker-size,48px) * var(--ha-marker-selected-scale,${p}))}:host([selected]:not([floating])) .marker{outline:3px solid var(--ha-marker-selected-color,var(--primary-color))}.tail{width:${u}px;height:${u}px;margin-top:${-u/2}px;margin-bottom:${m-u/2}px;background:var(--ha-marker-color,var(--card-background-color,#fff));border-radius:2px;transform:rotate(45deg)}.dot{width:${g}px;height:${g}px;margin-top:${b}px;background:var(--ha-marker-color,var(--card-background-color,#fff));border-radius:50%}:host(:not([selected])) .dot{visibility:hidden}.entity-picture{background-size:cover;width:100%;height:100%}.unit{margin-left:2px}`,(0,r.Cg)([(0,n.MZ)({attribute:"entity-id",reflect:!0})],y.prototype,"entityId",void 0),(0,r.Cg)([(0,n.wk)(),(0,l.fI)({entityIdPath:["entityId"]})],y.prototype,"_stateObj",void 0),(0,r.Cg)([(0,n.MZ)({attribute:"entity-name"})],y.prototype,"entityName",void 0),(0,r.Cg)([(0,n.MZ)({attribute:"entity-unit"})],y.prototype,"entityUnit",void 0),(0,r.Cg)([(0,n.MZ)({attribute:"entity-picture"})],y.prototype,"entityPicture",void 0),(0,r.Cg)([(0,n.MZ)({attribute:"entity-color"})],y.prototype,"entityColor",void 0),(0,r.Cg)([(0,n.MZ)({attribute:"show-icon",type:Boolean})],y.prototype,"showIcon",void 0),(0,r.Cg)([(0,n.MZ)({type:Boolean,reflect:!0})],y.prototype,"selected",void 0),(0,r.Cg)([(0,n.MZ)({type:Boolean,reflect:!0})],y.prototype,"floating",void 0),y=(0,r.Cg)([(0,n.EM)("ha-entity-marker")],y),i.d(e,{},{i:f}),a()}catch(t){a(t)}})},25581(t,e,i){i.a(t,async function(t,a){try{i(97700),i(47144),i(25744),i(8021),i(89542),i(25102),i(47508),i(24791),i(77809),i(92653);var r=i(89797),o=i(58012),n=i(20686),s=i(32379),l=i(19741),c=i(98878),d=i(37151),h=i(6694),p=(i(60666),i(11808)),u=i(86075),m=i(97377),b=i(65942),g=i(60057),f=i(51139),y=i(86233),_=i(28006),v=i(71760),k=i(55659),w=i(89275),M=i(52573),x=i(62727),z=i(25071),C=i(7952),E=i(66572),P=i(5792),L=i(37019),S=i(14279),F=t([L,d,h,S]);[L,d,h,S]=F.then?(await F)():F;const A=250,$=3e3,T=t=>"string"==typeof t?t:t.entity_id,H=["name","state","attribute","icon"],R=(t,e)=>t.element===e.element&&t.title===e.title&&t.color===e.color&&t.locationEditable===e.locationEditable&&t.radiusEditable===e.radiusEditable&&t.activatable===e.activatable&&t.elementSize?.[0]===e.elementSize?.[0]&&t.elementSize?.[1]===e.elementSize?.[1],Z=t=>({addDraggableMarker:(e,i,a)=>{let r=i,o=t.addMarker(e,r,a);return{get location(){return r},clusterData:a.clusterData,setLocation:i=>{o.remove(),r=i,o=t.addMarker(e,r,a)},remove:()=>o.remove()}},addEditableCircle:(e,i)=>{const a=i.centerElement??document.createElement("div");let r;if(i.centerElement||(a.className="editable-circle-center"),i.onClick){const t=t=>{t.stopPropagation(),i.onClick()},e=t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),i.onClick())};a.addEventListener("click",t),a.addEventListener("keydown",e),r=()=>{a.removeEventListener("click",t),a.removeEventListener("keydown",e)}}let o={center:e,radius:i.radius},n=[];const s=()=>{n=[t.addCircle(o.center,{radius:o.radius,color:i.color}),t.addMarker(a,o.center,{size:i.centerSize??[16,16],interactive:!!i.onClick,title:i.title,nativeTitle:i.nativeTitle})]};return s(),{get center(){return o.center},get radius(){return o.radius},update:(t,e)=>{n.forEach(t=>t.remove()),o={center:t,radius:e},s()},remove:()=>{r?.(),n.forEach(t=>t.remove())}}}}),I=32,B=6,D=4,O=12,N=4,j=28,W=99,U=10,V=Math.round(U*Math.SQRT2/2),q=2,G=40,K=160,X=2.5,Q=10,J=t=>{const e=t.replace(".","-");return`marker, picture, marker: marker-${e}, picture: picture-${e}`},Y=(t,e,i=!0)=>{const a=e&&i?t.get(e):void 0;if(a&&!a.isConnected)return a;const r=document.createElement("ha-entity-marker");return e&&(r.setAttribute("exportparts",J(e)),t.set(e,r)),r};class tt extends n.mN{connectedCallback(){this._pauseAutoFit=!1,document.addEventListener("visibilitychange",this._handleVisibilityChange),this._handleVisibilityChange(),super.connectedCallback(),this._loadMap(),this._attachObserver()}_watchRegistry(){!this._registryConsumer&&this.entities?.length&&(this._registryConsumer=new c.T(this,E.ih,t=>{this._entityReg=t}))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this._handleVisibilityChange),this._engine?.destroy(),this._engine=void 0,this._setupAttempt++,this._startingEngine?.destroy(),this._startingEngine=void 0,this._loading=!1,clearTimeout(this._drawnFallback),this._entityHandles=[],this._entityMarkers.clear(),this._clusterAvatars.clear(),this._zoneHandles=[],this._zoneCircleHandles=[],this._pathHandles=[],this._removeEditableLocations(),this._focusPoints=[],this._focusZonePoints=[],this._pendingFit=void 0,this._hasFitted=!1,this._loaded=!1,this._resizeObserver&&this._resizeObserver.unobserve(this)}update(t){if(super.update(t),!this._loaded)return;let e=!1;const i=t.get("_states");if(t.has("_loaded")||t.has("entities"))this._drawEntities(),e=!this._pauseAutoFit;else if(this._loaded&&i&&this.entities)for(const t of this.entities)if(i[T(t)]!==this._states[T(t)]){this._drawEntities(),e=!this._pauseAutoFit;break}(t.has("clusterMarkers")||t.has("_entityReg"))&&this._drawEntities(),t.has("fitPadding")&&!(0,z.b)(t.get("fitPadding"),this.fitPadding)&&(e=!this._pauseAutoFit),t.has("zoomPosition")&&this._engine?.setZoomControlPosition(this.zoomPosition);const a=t.get("_config");if((t.has("_loaded")||t.has("scaleRuler")||t.has("_config")&&a?.unit_system?.length!==this._config?.unit_system?.length)&&this._drawScaleRuler(),t.has("_loaded")||t.has("paths")){this._drawPaths();const e=t.get("paths");!!e?.length!=!!this.paths?.length&&this._engine?.refreshClusters()}t.has("_loaded")||t.has("editableLocations")?this._drawEditableLocations()&&(e=!0):t.has("_i18n")&&this._editableHandles.size&&(this._removeEditableLocations(),this._drawEditableLocations()),t.has("_loaded")&&this._pendingFit?this._runPendingFit():(t.has("_loaded")||this.autoFit&&e)&&this.fitMap(),t.has("zoom")&&this._withProgrammaticFit(()=>{this._engine.setZoom(this.zoom)}),t.has("mapStyle")&&this._engine?.setMapStyle(this._resolvedMapStyle);const r=t.get("_ui");(t.has("themeMode")||t.has("_ui")&&(!r||r.themes!==this._ui.themes))&&(this._updateMapAppearance(),this._drawEntities(),this._drawPaths(),this._editableHandles.size&&(this._removeEditableLocations(),this._drawEditableLocations()))}get _darkMode(){return"dark"===this.themeMode||"auto"===this.themeMode&&Boolean(this._ui?.themes?.darkMode)}_readThemeColors(){const t=Boolean(this._ui?.themes?.darkMode),e=this._darkMode===t?(0,v.Q)(this):void 0;(0,z.b)(e,this._themeColors)||(this._themeColors=e)}get _resolvedMapStyle(){return this._resolveMapStyle(this.mapStyle,this._darkMode,this._themeColors)}_updateMapAppearance(){this._readThemeColors();const t=this._mapElement;t&&(t.classList.toggle("clickable",this.clickable),t.classList.toggle("dark",this._darkMode),t.classList.toggle("drawn",this._mapDrawn),t.classList.toggle("space",this._vectorEngine&&this._mapDrawn),t.classList.toggle("forced-dark","dark"===this.themeMode),t.classList.toggle("forced-light","light"===this.themeMode),this._engine?.setMapStyle(this._resolvedMapStyle))}_markDrawn(t){t!==this._setupAttempt||this._mapDrawn||(clearTimeout(this._drawnFallback),this._mapDrawn=!0,this._updateMapAppearance())}get _vectorEngine(){return!this._forceLeaflet&&(0,f.jV)()}async _createEngine(){if(!this._vectorEngine){return new((await Promise.all([i.e(35166),i.e(8200)]).then(i.bind(i,859))).LeafletMapEngine)}return new((await i.e(41645).then(i.bind(i,64988))).MapLibreMapEngine)}async _loadMap(){const t=this._forceLeaflet||!(0,f.jV)();try{await this._setUpEngine()}catch(e){if(!this.isConnected)return;if(t)throw e;this._forceLeaflet=!0,await this._loadMap()}}async _setUpEngine(){if(this._loading)return;this.shadowRoot.getElementById("map")?.remove();const t=document.createElement("div");t.id="map",t.classList.toggle("dark",this._darkMode),this.shadowRoot.append(t),this._loading=!0,this._mapDrawn=!1,clearTimeout(this._drawnFallback);const e=++this._setupAttempt;let i;try{const a=this._connection?await(0,P.pW)(this._connection.connection):void 0;this._readThemeColors();const r=this._forceLeaflet;if(i=await this._createEngine(),e!==this._setupAttempt)return;if(this._startingEngine=i,this._drawnFallback=window.setTimeout(()=>this._markDrawn(e),$),await i.init(t,{center:[this._config?.latitude??52.3731339,this._config?.longitude??4.8903147],zoom:this.zoom,mapStyle:this._resolvedMapStyle,token:a,rasterOnly:this._forceLeaflet,zoomControlPosition:this.zoomPosition,events:{click:t=>this._handleEngineClick(t),zoomStart:()=>{this._isProgrammaticFit||(this._pauseAutoFit=!0)},moveStart:()=>{this._isProgrammaticFit||(this._pauseAutoFit=!0)},fatal:()=>this._handleEngineFatal(),drawn:()=>this._markDrawn(e)}}),!this.isConnected||e!==this._setupAttempt)return;if(this._forceLeaflet&&!r)throw new Error("Map engine failed during setup");this._engine=i,this._updateMapAppearance(),this._loaded=!0,(0,u.r)(this,"editing-available-changed",{available:!!i.editing})}finally{e===this._setupAttempt&&(this._loading=!1,this._startingEngine=void 0),i&&i!==this._engine&&i.destroy()}}_handleEngineFatal(){this._forceLeaflet||(this._forceLeaflet=!0,this._loading?this._startingEngine?.destroy():(this._engine?.destroy(),this._engine=void 0,this._entityHandles=[],this._zoneHandles=[],this._zoneCircleHandles=[],this._pathHandles=[],this._removeEditableLocations(),this._focusPoints=[],this._focusZonePoints=[],this._pendingFit=void 0,this._hasFitted=!1,this._loaded=!1,this._loadMap()))}_handleEngineClick(t){0===this._clickCount&&setTimeout(()=>{1===this._clickCount&&(0,u.r)(this,"map-clicked",{location:t}),this._clickCount=0},250),this._clickCount++}_withProgrammaticFit(t){this._isProgrammaticFit=!0,t(),setTimeout(()=>{this._isProgrammaticFit=!1},A)}fitMap(t){if(t?.unpause_autofit&&(this._pauseAutoFit=!1),!this._engine||!this._config)return;if(this._deferIfUnsized(()=>this.fitMap(t)))return;const e=this.fitZones||!this._focusPoints.length?this._focusZonePoints:[];if(!this._focusPoints.length&&!e.length&&!this.editableLocations?.length)return this._withProgrammaticFit(()=>{this._engine.setView([this._config.latitude,this._config.longitude],t?.zoom||this.zoom)}),void(this._hasFitted=!0);const i=[...this._focusPoints,...e],a=this.editableLocations??[],r=a.filter(t=>!1!==t.fit);(r.length?r:a).forEach(t=>{t.radius?i.push(...(0,y.Rn)(t.location,t.radius)):i.push(t.location)}),this._withProgrammaticFit(()=>{this._engine.fitBounds(i,{maxZoom:t?.zoom||this.zoom,pad:t?.pad??.5,padding:t?.padding??this.fitPadding,animate:this._hasFitted})}),this._hasFitted=!0}_deferIfUnsized(t){return this._engine.hasUsableSize()?(this._pendingFit=void 0,!1):(this._pendingFit=t,!0)}_runPendingFit(){if(this._pendingFit&&this._engine&&this._engine.hasUsableSize()){const t=this._pendingFit;this._pendingFit=void 0,t()}}panTo(t){this._engine?.panTo(t)}containsLocation(t){return this._engine?.containsLocation(t)??!1}setView(t,e){this._engine?(this._pendingFit=void 0,this._engine.setView(t,e)):this._pendingFit=()=>this.setView(t,e)}getView(){return this._engine?.getView()}fitBounds(t,e){this._pauseAutoFit=!0,this._engine?this._deferIfUnsized(()=>this.fitBounds(t,e))||(this._withProgrammaticFit(()=>{this._engine.fitBounds(t,{maxZoom:e?.zoom||this.zoom,pad:e?.pad??.5,animate:this._hasFitted,padding:e?.padding,fly:e?.fly})}),this._hasFitted=!0):this._pendingFit=()=>this.fitBounds(t,e)}_drawEditableLocations(){const t=this._engine;if(!t)return!1;const e=Z(t),i=t.editing??e,a=new Set((this.editableLocations??[]).map(t=>t.id));let r=!1;for(const[t,e]of this._editableHandles)a.has(t)||(e.cleanup?.(),e.handle.remove(),this._editableHandles.delete(t),r=!0);if(!this.editableLocations)return r;const o=getComputedStyle(this).getPropertyValue("--accent-color");for(const t of this.editableLocations){const{id:a}=t,n=t.title??this._i18n?.localize("ui.components.map.location"),s=!!t.element&&!!t.title,l=this._editableHandles.get(a),c=t.radius?"circle":"marker";if(l&&l.kind===c&&R(l.source,t)){"circle"===l.kind?l.handle.update(t.location,t.radius):l.handle.setLocation(t.location),l.source=t;continue}if(l?(l.cleanup?.(),l.handle.remove()):r=!0,"circle"===c){const e=i.addEditableCircle(t.location,{radius:t.radius,color:t.color||o,centerElement:t.element,centerSize:t.elementSize,title:n,nativeTitle:!s,moveable:t.locationEditable,resizable:t.radiusEditable,resizeLabel:t.title?this._i18n?.localize("ui.components.map.radius_of",{name:t.title}):this._i18n?.localize("ui.components.map.radius"),onMove:t=>(0,u.r)(this,"editable-location-moved",{id:a,location:t}),onResize:t=>(0,u.r)(this,"editable-location-resized",{id:a,radius:t}),onClick:t.activatable?()=>(0,u.r)(this,"editable-location-clicked",{id:a}):void 0});this._editableHandles.set(a,{kind:c,source:t,handle:e,cleanup:s?this._attachTooltip(t.element,t.title):void 0});continue}const d=t.element??document.createElement("div");t.element||(d.className="editable-circle-center");let h,p=!1;if(t.activatable){const t=()=>{p=!1},e=t=>{t.stopPropagation(),p||(0,u.r)(this,"editable-location-clicked",{id:a})},i=t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),(0,u.r)(this,"editable-location-clicked",{id:a}))};d.addEventListener("pointerdown",t),d.addEventListener("click",e),d.addEventListener("keydown",i),h=()=>{d.removeEventListener("pointerdown",t),d.removeEventListener("click",e),d.removeEventListener("keydown",i)}}const m=(t.locationEditable?i:e).addDraggableMarker(d,t.location,{size:t.elementSize??[16,16],interactive:!0,focusable:!!t.activatable,title:n,nativeTitle:!s,onDragEnd:t=>{p=!0,(0,u.r)(this,"editable-location-moved",{id:a,location:t})}}),b=s?this._attachTooltip(t.element,t.title):void 0;this._editableHandles.set(a,{kind:c,source:t,cleanup:()=>{h?.(),b?.()},handle:m})}return r}_attachTooltip(t,e){t.id||="ha-map-editable-"+this._tooltipCount++;const i=document.createElement("ha-tooltip");return i.for=t.id,i.textContent=e,this.shadowRoot.append(i),()=>i.remove()}_removeEditableLocations(){for(const t of this._editableHandles.values())t.cleanup?.(),t.handle.remove();this._editableHandles.clear()}_computePathTooltip(t,e){let i;return i=t.fullDatetime?(0,d.r6)(e.timestamp,this._i18n.locale,this._config):(0,o.c)(e.timestamp)?(0,h.ie)(e.timestamp,this._i18n.locale,this._config):(0,h.Xs)(e.timestamp,this._i18n.locale,this._config),`${(0,C.D)(t.name??"")}<br>${i}`}_drawPaths(){if(!this._i18n||!this._config||!this._engine)return;const t=this.paths??[];if(this._pathHandles.splice(t.length).forEach(t=>t.remove()),!t.length)return;const e=getComputedStyle(this).getPropertyValue("--dark-primary-color");t.forEach((t,i)=>{let a,r;t.gradualOpacity&&(a=t.gradualOpacity/(t.points.length-2),r=1-t.gradualOpacity);const o=[],n=[];for(let e=0;e<t.points.length-1;e++){const i=t.gradualOpacity?r+e*a:void 0,s=t.points[e],l=t.points[e+1];if(n.push({location:s.point,opacity:i,tooltipHtml:this._computePathTooltip(t,s)}),Math.abs(s.point[1]-l.point[1])<=180)o.push({points:[s.point,l.point],opacity:i});else{const t=(l.point[1]-s.point[1]+540)%360-180;let e;e=0===t?(s.point[0]+l.point[0])/2:s.point[0]+(l.point[0]-s.point[0])*(s.point[1]>0?180-s.point[1]:-180-s.point[1])/t;const a=[e,s.point[1]>0?180:-180],r=[e,l.point[1]>0?180:-180];o.push({points:[s.point,a],opacity:i}),o.push({points:[r,l.point],opacity:i})}}const s=t.points.length-1;if(s>=0){const e=t.gradualOpacity?r+s*a:void 0;n.push({location:t.points[s].point,opacity:e,tooltipHtml:this._computePathTooltip(t,t.points[s])})}const l={color:t.color||e,segments:o,markers:n},c=this._pathHandles[i];c?c.update(l):this._pathHandles.push(this._engine.addPath(l))})}_drawEntities(){const t=this._states,e=this._engine;if(!t||!e)return;this._entityHandles.forEach(t=>t.remove()),this._entityHandles=[],this._focusPoints=[],this._zoneHandles.forEach(t=>t.remove()),this._zoneHandles=[],this._focusZonePoints=[];let i=0;if(!this.entities)return this._zoneCircleHandles.splice(0).forEach(t=>t.remove()),this._entityMarkers.clear(),this._clusterAvatars.clear(),void e.setClustering(null);this._watchRegistry();const a=getComputedStyle(this),r={};this._zonePositions={},this._zoneRadii={};for(const e of this.entities){const i=t[T(e)];!i||"zone"!==(0,m.t)(i)||!this.renderPassive&&i.attributes.passive||(r["zone.home"===i.entity_id?"home":(0,b.u)(i)]=i.entity_id,"number"==typeof i.attributes.latitude&&"number"==typeof i.attributes.longitude&&(this._zonePositions[i.entity_id]=[i.attributes.latitude,i.attributes.longitude],"number"==typeof i.attributes.radius&&(this._zoneRadii[i.entity_id]=i.attributes.radius)))}const o=new Set;for(const n of this.entities){const s=t[T(n)];if(!s)continue;const l="string"!=typeof n?n.name:void 0,c=l??(0,b.u)(s),{passive:d,icon:h,radius:p,entity_picture:f}=s.attributes,_=(0,g.H)(s,t);if(!_)continue;const{latitude:v,longitude:k,gpsAccuracy:M}=_,z=[v,k];if("zone"===(0,m.t)(s)){if(d&&!this.renderPassive)continue;const t="string"!=typeof n&&n.hide_radius,r=!d&&"string"!=typeof n&&n.color?n.color:(0,w.YG)(s.entity_id,!!d,this._entityReg,a);if(!t&&p){const t={radius:p,color:r},a=this._zoneCircleHandles[i];a?a.update(z,t):this._zoneCircleHandles.push(e.addCircle(z,t)),i++}const o=(0,x.x5)({color:r,icon:h,name:c});if(this.interactiveZones){const t=t=>{t.stopPropagation(),(0,u.r)(this,"hass-more-info",{entityId:s.entity_id})};o.addEventListener("click",t),o.addEventListener("keydown",e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),t(e))})}this._zoneHandles.push(e.addMarker(o,z,{size:[36,36],interactive:this.interactiveZones,title:c})),"string"!=typeof n&&!1===n.focus||(!t&&p?this._focusZonePoints.push(...(0,y.Rn)(z,p)):this._focusZonePoints.push(z));continue}const C="string"!=typeof n&&"state"===n.label_mode?this._formatters.formatEntityState(s):"string"!=typeof n&&"attribute"===n.label_mode&&void 0!==n.attribute?this._formatters.formatEntityAttributeValue(s,n.attribute):l??c.split(" ").map(t=>t[0]).join("").substr(0,3),E=T(n),P=Y(this._entityMarkers,E,!o.has(E));o.add(E),P.showIcon="string"!=typeof n&&"icon"===n.label_mode,P.entityId=E,P.entityName=C,P.entityUnit="string"!=typeof n&&n.unit&&"attribute"===n.label_mode?n.unit:"",P.entityPicture=!f||"string"!=typeof n&&n.label_mode?"":this._connection.hassUrl(f);const L=("string"!=typeof n?n.color:void 0)||(0,w.lb)(E,this._entityReg,a);P.entityColor=L,P.selected="string"!=typeof n&&(n.selected??!1),P.floating=!0;const F={entityId:E,title:c,picture:P.entityPicture||void 0,label:C,showIcon:P.showIcon,unit:P.entityUnit??"",color:L,selected:P.selected,zoneId:["person","device_tracker"].includes((0,m.t)(s))?r[s.state]??this._zoneContaining(z):void 0},A=M||(P.selected?X:0),$=A>0&&!("string"!=typeof n&&n.hide_accuracy);this._entityHandles.push(e.addMarker(P,z,{...(0,S.i)(this._getMarkerSize(a),P.selected),title:c,cluster:!P.selected,raised:P.selected,clusterData:F,decoration:$?{radius:A,color:L,outline:A>Q}:void 0})),"string"!=typeof n&&!1===n.focus||this._focusPoints.push(z)}this._zoneCircleHandles.splice(i).forEach(t=>t.remove());const n=new Set(this.entities.map(T));for(const t of[this._entityMarkers,this._clusterAvatars])for(const e of t.keys())n.has(e)||t.delete(e);e.setClustering(this.clusterMarkers?{radius:G,iconBuilder:this._createClusterBubble,groupKey:t=>t.clusterData?.zoneId,groupRadius:K}:null)}_zoneContaining(t){let e,i=1/0;for(const[a,r]of Object.entries(this._zoneRadii))r<i&&(0,y.S_)(t,this._zonePositions[a])<=r&&(e=a,i=r);return e}_drawScaleRuler(){this._engine?.setScaleRuler(this.scaleRuler?{metric:"km"===this._config?.unit_system?.length}:null)}_getMarkerSize(t){const e=t.getPropertyValue("--ha-marker-size"),i=parseFloat(e);return Number.isNaN(i)?48:i}async _attachObserver(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(()=>{this._engine?.invalidateSize(),this._runPendingFit()})),this._resizeObserver.observe(this)}constructor(...t){super(...t),this.clickable=!1,this.autoFit=!1,this.renderPassive=!1,this.interactiveZones=!1,this.fitZones=!1,this.zoomPosition="topleft",this._zonePositions={},this._zoneRadii={},this.themeMode="auto",this.zoom=14,this.clusterMarkers=!0,this.scaleRuler=!1,this._loaded=!1,this._editableHandles=new Map,this._entityReg=[],this._entityHandles=[],this._tooltipCount=0,this._entityMarkers=new Map,this._clusterAvatars=new Map,this._zoneHandles=[],this._zoneCircleHandles=[],this._pathHandles=[],this._focusPoints=[],this._focusZonePoints=[],this._clickCount=0,this._isProgrammaticFit=!1,this._pauseAutoFit=!1,this._handleVisibilityChange=async()=>{document.hidden||setTimeout(()=>{this._pauseAutoFit=!1},500)},this._resolveMapStyle=(0,l.A)(_.kR),this._mapDrawn=!1,this._loading=!1,this._forceLeaflet=!1,this._setupAttempt=0,this._hasFitted=!1,this._createClusterBubble=(t,e,i,a=!1)=>{const r=t.map(t=>t.clusterData),o=a||r.length<=N?r:r.slice(0,N-1),n=r.length-o.length,s=!!this.paths?.length,l=document.createElement("div");l.className="cluster-bubble";const c=new Set;for(const t of o){const e=Y(this._clusterAvatars,t?.entityId,!c.has(t?.entityId??""));t?.entityId&&c.add(t.entityId),e.entityId=t?.entityId,e.entityName=t?.label??"",e.entityUnit=t?.unit??"",e.showIcon=t?.showIcon??!1,e.entityPicture=t?.picture??"",e.entityColor=t?.color,s?(e.style.setProperty("--ha-marker-color",t?.color??"var(--primary-color)"),e.style.setProperty("--ha-marker-border-width","2px")):(e.style.removeProperty("--ha-marker-color"),e.style.removeProperty("--ha-marker-border-width")),e.selected=t?.selected??!1,(0,M.I)(e),a&&(0,M.l)(e,t?.title,!0),l.appendChild(e)}const d=a?Math.max(1,Math.floor((this.offsetWidth-2*O-2*B+D)/(I+D))):o.length,h=Math.min(o.length,d),p=Math.ceil(o.length/d);let u=h*I+(h-1)*D+2*B;if(n>0){const t=document.createElement("span");t.className="more",t.textContent=n>W?`${W}+`:`+${n}`,l.appendChild(t),u+=j+D}const m=p*I+(p-1)*D+2*B+V,b=document.createElement("div");b.className="cluster-marker";const g=document.createElement("div");g.className="cluster-bubble-tail",b.append(l,g);const f=i?this._zonePositions[i]:void 0;return{element:b,size:[u,m],location:f,anchor:[u/2,m+(f?18+q:9)]}}}}tt.styles=n.AH`
    :host {
      display: block;
      height: 300px;
    }
    #map {
      height: 100%;
      /* The map arrives in one piece: the container carries the cartography's
         own ground, and fades in with the markers once a frame is drawn */
      background-color: #f4efe6;
      /* Hidden rather than transparent: the controls and markers in here are
         not to be clicked or tabbed to before they are on screen */
      visibility: hidden;
      opacity: 0;
      transition: opacity var(--ha-animation-duration-fast, 150ms) ease-in;
      /* A cluster bubble and its tail cast a single shadow around their
         combined silhouette (drop-shadow on the wrapper), so no shadow seam
         appears between the bubble and its tail. */
      --ha-cluster-shadow: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.08))
        drop-shadow(0 1px 3px rgba(0, 0, 0, 0.12));
    }
    #map.drawn {
      visibility: visible;
      opacity: 1;
    }
    #map.clickable {
      cursor: pointer;
    }
    .maplibregl-marker {
      transition:
        opacity var(--ha-animation-duration-fast),
        visibility var(--ha-animation-duration-fast);
    }
    .maplibregl-marker-covered {
      visibility: hidden;
      pointer-events: none;
    }
    /* A zone fades in once the bubble over it is opaque, not through it */
    .zone-circle:not(.maplibregl-marker-covered) {
      transition-delay: var(--ha-animation-duration-fast);
    }
    #map.dark {
      background: #191b2c;
      --ha-cluster-shadow: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4))
        drop-shadow(0 1px 3px rgba(0, 0, 0, 0.5));
    }
    #map.forced-dark {
      color: #ffffff;
      --map-filter: invert(0.9) hue-rotate(170deg) brightness(1.5) contrast(1.2)
        saturate(0.3);
    }
    #map.forced-light {
      background: #ffffff;
      color: #000000;
      --map-filter: invert(0);
    }
    /* Zoomed out the sky fades out and the globe is left on a transparent
       canvas, so what surrounds it is this element. The same sky in both
       themes, day or night: a glow where the sphere sits at the widest zoom
       out -- MapLibre's own atmosphere carries the edge from there in -- over
       a gradient that lightens towards the top. */
    #map.space {
      --ha-map-space-glow: rgba(255, 255, 255, 0.95);
      --ha-map-space-haze: rgba(255, 255, 255, 0.45);
      --ha-map-space-fade: rgba(255, 255, 255, 0);
      --ha-map-space-high: #dbe8f8;
      --ha-map-space-low: #7aa5d3;
      background-color: var(--ha-map-space-low);
      background-image:
        radial-gradient(
          circle at 50% 50%,
          var(--ha-map-space-glow) 18%,
          var(--ha-map-space-haze) 24%,
          var(--ha-map-space-fade) 34%
        ),
        linear-gradient(
          180deg,
          var(--ha-map-space-high) 0%,
          var(--ha-map-space-low) 100%
        );
      background-repeat: no-repeat;
    }
    #map.space.dark {
      --ha-map-space-glow: rgba(126, 158, 224, 0.5);
      --ha-map-space-haze: rgba(86, 110, 170, 0.22);
      --ha-map-space-fade: rgba(86, 110, 170, 0);
      --ha-map-space-high: #141a30;
      --ha-map-space-low: #05060f;
    }
    #map.clickable:active,
    #map:active {
      cursor: grabbing;
    }
    /* The tail is a rotated square whose upper half sits under the bubble;
       drawn behind it, so it never covers an avatar's frame or selected ring */
    .cluster-bubble-tail {
      position: relative;
      z-index: -1;
    }
    /* Only the raster fallback is inverted for dark mode, the vector style
       ships its own dark cartography. */
    .leaflet-tile-pane .leaflet-tile {
      filter: var(--map-filter);
    }
    /* The Leaflet fallback with WebGL2 renders vectors through the adapter
       without MapLibre's stylesheet; these are the only two rules its canvas
       needs. */
    .maplibregl-map {
      position: relative;
      overflow: hidden;
    }
    .maplibregl-canvas {
      position: absolute;
      top: 0;
      left: 0;
    }
    .maplibregl-ctrl-bottom-left,
    .maplibregl-ctrl-bottom-right {
      /* Lets a card keep the attribution and scale clear of an overlay */
      margin-bottom: var(--ha-map-bottom-inset, 0);
    }
    .maplibregl-ctrl-top-left,
    .maplibregl-ctrl-bottom-left {
      margin-left: var(--ha-map-left-inset, 0);
    }
    .maplibregl-ctrl-top-right,
    .maplibregl-ctrl-bottom-right {
      margin-right: var(--ha-map-right-inset, 0);
    }
    .dark .maplibregl-ctrl.maplibregl-ctrl-group {
      background-color: #1c1c1c;
    }
    .dark .maplibregl-ctrl-group button + button {
      border-top-color: #313131;
    }
    .dark .maplibregl-ctrl button .maplibregl-ctrl-icon {
      filter: invert(1);
    }
    /* Not inherited from the page, which may be in the other mode */
    .maplibregl-ctrl.maplibregl-ctrl-attrib {
      color: #000000;
    }
    .dark .maplibregl-ctrl.maplibregl-ctrl-attrib {
      background-color: rgba(28, 28, 28, 0.6);
      color: #ffffff;
    }
    .dark .maplibregl-ctrl-attrib.maplibregl-compact {
      background-color: #1c1c1c;
    }
    .dark .maplibregl-ctrl-attrib a {
      color: rgba(255, 255, 255, 0.85);
    }
    .dark .maplibregl-ctrl-attrib-button {
      filter: invert(1);
    }
    /* MapLibre's stylesheet, linked into this root, wins on equal specificity */
    .maplibregl-popup-content {
      padding: 8px !important;
      font-size: var(--ha-font-size-s);
      font-family: var(--ha-font-family-body);
      background: rgba(80, 80, 80, 0.9) !important;
      color: white !important;
      border-radius: var(--ha-border-radius-sm) !important;
      box-shadow: none !important;
      text-align: center;
    }
    .maplibregl-popup-anchor-bottom .maplibregl-popup-tip {
      border-top-color: rgba(80, 80, 80, 0.9) !important;
    }
    .maplibregl-popup-anchor-top .maplibregl-popup-tip {
      border-bottom-color: rgba(80, 80, 80, 0.9) !important;
    }
    .maplibregl-ctrl-bottom-left {
      direction: ltr;
    }
    .dark .leaflet-bar a {
      background-color: #1c1c1c;
      color: #ffffff;
    }
    .dark .leaflet-bar a:hover {
      background-color: #313131;
    }
    ${(0,n.iz)(k.xr)}
    .named-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      color: var(--primary-text-color);
    }
    .leaflet-pane {
      z-index: 0 !important;
    }
    .cluster-marker {
      display: flex;
      flex-direction: column;
      align-items: center;
      isolation: isolate;
      filter: var(--ha-cluster-shadow);
    }
    /* The wrapper carries the shadow around the bubble-plus-tail outline, so
       the bubble itself drops its own to avoid a seam at the tail. */
    .cluster-marker .cluster-bubble {
      filter: none;
    }
    .cluster-bubble-tail {
      width: ${U}px;
      height: ${U}px;
      margin-top: ${-U/2}px;
      border-radius: 2px;
      background: var(--card-background-color, #fff);
      transform: rotate(45deg);
    }
    .cluster-bubble {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      max-width: 100%;
      gap: ${D}px;
      padding: ${B}px;
      box-sizing: border-box;
      background: var(--card-background-color, #fff);
      border-radius: 14px;
      filter: var(--ha-cluster-shadow);
      --ha-marker-size: ${I}px;
      --ha-marker-selected-scale: 1;
      --ha-marker-color: transparent;
      --ha-marker-border-width: 1px;
      --ha-marker-font-size: var(--ha-font-size-s);
      /* distinguish letter tiles from the bubble background */
      --ha-marker-background: var(--ha-color-fill-neutral-quiet-resting);
    }
    .cluster-bubble .more {
      flex: none;
      width: ${j}px;
      height: ${I}px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background: var(--ha-color-fill-neutral-quiet-resting, #f0f0f0);
      color: var(--primary-text-color, #212121);
      font-size: var(--ha-font-size-s);
      font-weight: var(--ha-font-weight-medium);
    }
    /* Markers are rounded squares to match the cluster bubble avatars */
    ha-entity-marker {
      --ha-marker-border-radius: var(--ha-border-radius-lg);
    }
    .cluster-bubble ha-entity-marker {
      flex: none;
      --ha-marker-border-radius: 10px;
    }
    ${(0,n.iz)(x.Nr)}
    .leaflet-bottom {
      /* Lets a card keep the attribution and scale clear of an overlay */
      margin-bottom: var(--ha-map-bottom-inset, 0);
    }
    .leaflet-left {
      margin-left: var(--ha-map-left-inset, 0);
    }
    .leaflet-right {
      margin-right: var(--ha-map-right-inset, 0);
    }
    .leaflet-control,
    .leaflet-top,
    .leaflet-bottom {
      z-index: 1 !important;
    }
    .leaflet-control-scale {
      cursor: unset !important;
    }
    .leaflet-control-scale-line {
      --scale-ruler-color: var(--ha-color-on-surface-default);
      --scale-ruler-surface: var(--ha-color-surface-default);
      font-size: var(--ha-font-size-s);
      font-family: var(--ha-font-family-body);
      color: var(--scale-ruler-color) !important;
      background: color-mix(
        in srgb,
        var(--scale-ruler-surface) 80%,
        transparent
      ) !important;
      text-shadow: none !important;
      direction: ltr;
    }
    /* the theme tokens follow the page, so forced modes need the opposite values */
    #map.forced-light .leaflet-control-scale-line {
      --scale-ruler-color: var(--ha-color-neutral-05);
      --scale-ruler-surface: var(--ha-color-white);
    }
    #map.forced-dark .leaflet-control-scale-line {
      --scale-ruler-color: var(--ha-color-neutral-95);
      --scale-ruler-surface: var(--ha-color-neutral-10);
    }
    .leaflet-left .leaflet-control-scale {
      margin-left: 10px !important;
    }
    .leaflet-bottom .leaflet-control-scale {
      margin-bottom: 10px !important;
    }
    .leaflet-tooltip {
      padding: 8px;
      font-size: var(--ha-font-size-s);
      background: rgba(80, 80, 80, 0.9) !important;
      color: white !important;
      border-radius: var(--ha-border-radius-sm);
      box-shadow: none !important;
      text-align: center;
    }

    ha-icon {
      --mdc-icon-size: calc(var(--ha-marker-size, 48px) / 2);
    }
  `,(0,r.Cg)([(0,s.wk)(),(0,c.F)({context:E.iN,subscribe:!0})],tt.prototype,"_states",void 0),(0,r.Cg)([(0,s.wk)(),(0,c.F)({context:E.WF,subscribe:!0}),(0,p.p)({transformer:({config:t})=>t})],tt.prototype,"_config",void 0),(0,r.Cg)([(0,s.wk)(),(0,c.F)({context:E.EK,subscribe:!0})],tt.prototype,"_ui",void 0),(0,r.Cg)([(0,s.wk)(),(0,c.F)({context:E.D5,subscribe:!0})],tt.prototype,"_i18n",void 0),(0,r.Cg)([(0,s.wk)(),(0,c.F)({context:E.p0,subscribe:!0})],tt.prototype,"_formatters",void 0),(0,r.Cg)([(0,s.wk)(),(0,c.F)({context:E.Wq,subscribe:!0})],tt.prototype,"_connection",void 0),(0,r.Cg)([(0,s.MZ)({attribute:!1})],tt.prototype,"entities",void 0),(0,r.Cg)([(0,s.MZ)({attribute:!1})],tt.prototype,"paths",void 0),(0,r.Cg)([(0,s.MZ)({attribute:!1})],tt.prototype,"editableLocations",void 0),(0,r.Cg)([(0,s.MZ)({type:Boolean})],tt.prototype,"clickable",void 0),(0,r.Cg)([(0,s.MZ)({attribute:"auto-fit",type:Boolean})],tt.prototype,"autoFit",void 0),(0,r.Cg)([(0,s.MZ)({attribute:"render-passive",type:Boolean})],tt.prototype,"renderPassive",void 0),(0,r.Cg)([(0,s.MZ)({attribute:"interactive-zones",type:Boolean})],tt.prototype,"interactiveZones",void 0),(0,r.Cg)([(0,s.MZ)({attribute:"fit-zones",type:Boolean})],tt.prototype,"fitZones",void 0),(0,r.Cg)([(0,s.MZ)({attribute:!1})],tt.prototype,"fitPadding",void 0),(0,r.Cg)([(0,s.MZ)({attribute:"zoom-position"})],tt.prototype,"zoomPosition",void 0),(0,r.Cg)([(0,s.MZ)({attribute:"theme-mode",type:String})],tt.prototype,"themeMode",void 0),(0,r.Cg)([(0,s.MZ)({attribute:!1})],tt.prototype,"mapStyle",void 0),(0,r.Cg)([(0,s.MZ)({type:Number})],tt.prototype,"zoom",void 0),(0,r.Cg)([(0,s.MZ)({attribute:"cluster-markers",type:Boolean})],tt.prototype,"clusterMarkers",void 0),(0,r.Cg)([(0,s.MZ)({attribute:"scale-ruler",type:Boolean})],tt.prototype,"scaleRuler",void 0),(0,r.Cg)([(0,s.wk)()],tt.prototype,"_loaded",void 0),(0,r.Cg)([(0,s.P)("#map")],tt.prototype,"_mapElement",void 0),(0,r.Cg)([(0,s.wk)()],tt.prototype,"_entityReg",void 0),tt=(0,r.Cg)([(0,s.EM)("ha-map")],tt),i.d(e,{},{$:H}),a()}catch(t){a(t)}})},5792(t,e,i){i(24791),i(77809),i(92653);var a=i(42006),r=i(81541);const o="X-Map-Tiles-Token",n=[0,400,1e3],s=[2e3,5e3,1e4,15e3];let l,c,d,h,p,u,m,b;const g=new Set,f=async t=>{const e=await t.sendMessagePromise({type:"map_tiles/access_token"});e.token!==l&&(l=e.token,g.forEach(t=>t(l)))},y=async(t,e)=>{for(const i of e){if(l)return;i&&await(0,r.l)(i);try{return void await f(t)}catch{}}},_=()=>{if(!m)return;const t=m;f(t).then(()=>v(t)).catch(()=>{})},v=t=>{l&&!p&&(p=setInterval(()=>{f(m??t).catch(()=>{})},12e5)),u!==t&&(u?.removeEventListener("ready",_),u=t,t.addEventListener("ready",_))},k=()=>(c??location.origin).replace(/\/+$/,"");i.d(e,{ZV:()=>a.Z},{Oc:()=>m?(b??=f(m).catch(()=>{}).finally(()=>{b=void 0}),b):Promise.resolve(),Xx:t=>(g.add(t),()=>g.delete(t)),bK:t=>t.startsWith("/")?`${k()}${t}`:t,pW:async t=>{if(m=t,c=t.options.auth?.data.hassUrl,l||(d??=y(t,n).finally(()=>{d=void 0}),await d),l)return v(t),l;h??=y(t,s).then(()=>v(t)).finally(()=>{h=void 0})},rG:t=>{let e;try{e=new URL(t,k())}catch{return{url:t}}if(!e.pathname.startsWith(`${a.Z}/`))return{url:e.href};const i=new URL(`${k()}${e.pathname}${e.search}`);return l?i.origin===location.origin?{url:i.href,headers:{[o]:l}}:(i.searchParams.set("token",l),{url:i.href}):{url:i.href}}})}};