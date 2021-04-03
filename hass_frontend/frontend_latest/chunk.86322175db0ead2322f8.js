/*! For license information please see chunk.86322175db0ead2322f8.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[3245,3122],{63207:(e,t,i)=>{"use strict";i(65660),i(15112);var r=i(9672),n=i(87156),o=i(50856),s=i(65233);(0,r.k)({_template:o.d`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:s.XY.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&(0,n.vz)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,(0,n.vz)(this.root).appendChild(this._img))}})},15112:(e,t,i)=>{"use strict";i.d(t,{P:()=>n});i(65233);var r=i(9672);class n{constructor(e){n[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return n.types[e]&&n.types[e][t]}set value(e){var t=this.type,i=this.key;t&&i&&(t=n.types[t]=n.types[t]||{},null==e?delete t[i]:t[i]=e)}get list(){if(this.type){var e=n.types[this.type];return e?Object.keys(e).map((function(e){return o[this.type][e]}),this):[]}}byKey(e){return this.key=e,this.value}}n[" "]=function(){},n.types={};var o=n.types;(0,r.k)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,i){var r=new n({type:e,key:t});return void 0!==i&&i!==r.value?r.value=i:this.value!==r.value&&(this.value=r.value),r},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new n({type:this.type,key:e}).value}})},58993:(e,t,i)=>{"use strict";i.d(t,{yh:()=>r,U2:()=>s,t8:()=>a,ZH:()=>c});class r{constructor(e="keyval-store",t="keyval"){this.storeName=t,this._dbp=new Promise(((i,r)=>{const n=indexedDB.open(e,1);n.onerror=()=>r(n.error),n.onsuccess=()=>i(n.result),n.onupgradeneeded=()=>{n.result.createObjectStore(t)}}))}_withIDBStore(e,t){return this._dbp.then((i=>new Promise(((r,n)=>{const o=i.transaction(this.storeName,e);o.oncomplete=()=>r(),o.onabort=o.onerror=()=>n(o.error),t(o.objectStore(this.storeName))}))))}}let n;function o(){return n||(n=new r),n}function s(e,t=o()){let i;return t._withIDBStore("readonly",(t=>{i=t.get(e)})).then((()=>i.result))}function a(e,t,i=o()){return i._withIDBStore("readwrite",(i=>{i.put(t,e)}))}function c(e=o()){return e._withIDBStore("readwrite",(e=>{e.clear()}))}},25516:(e,t,i)=>{"use strict";i.d(t,{i:()=>r});const r=e=>t=>({kind:"method",placement:"prototype",key:t.key,descriptor:{set(e){this[`__${String(t.key)}`]=e},get(){return this[`__${String(t.key)}`]},enumerable:!0,configurable:!0},finisher(i){const r=i.prototype.connectedCallback;i.prototype.connectedCallback=function(){if(r.call(this),this[t.key]){const i=this.renderRoot.querySelector(e);if(!i)return;i.scrollTop=this[t.key]}}}})},27269:(e,t,i)=>{"use strict";i.d(t,{p:()=>r});const r=e=>e.substr(e.indexOf(".")+1)},91741:(e,t,i)=>{"use strict";i.d(t,{C:()=>n});var r=i(27269);const n=e=>void 0===e.attributes.friendly_name?(0,r.p)(e.entity_id).replace(/_/g," "):e.attributes.friendly_name||""},85415:(e,t,i)=>{"use strict";i.d(t,{q:()=>r,w:()=>n});const r=(e,t)=>e<t?-1:e>t?1:0,n=(e,t)=>r(e.toLowerCase(),t.toLowerCase())},54909:(e,t,i)=>{"use strict";var r=i(50856),n=i(28426),o=i(26765),s=i(11052);i(98762);class a extends((0,s.I)(n.H3)){static get template(){return r.d`
      <ha-progress-button
        id="progress"
        progress="[[progress]]"
        on-click="buttonTapped"
        tabindex="0"
        ><slot></slot
      ></ha-progress-button>
    `}static get properties(){return{hass:{type:Object},progress:{type:Boolean,value:!1},domain:{type:String},service:{type:String},serviceData:{type:Object,value:{}},confirmation:{type:String}}}callService(){this.progress=!0;const e=this,t={domain:this.domain,service:this.service,serviceData:this.serviceData};this.hass.callService(this.domain,this.service,this.serviceData).then((function(){e.progress=!1,e.$.progress.actionSuccess(),t.success=!0}),(function(){e.progress=!1,e.$.progress.actionError(),t.success=!1})).then((function(){e.fire("hass-service-called",t)}))}buttonTapped(){this.confirmation?(0,o.g7)(this,{text:this.confirmation,confirm:()=>this.callService()}):this.callService()}}customElements.define("ha-call-service-button",a)},73728:(e,t,i)=>{"use strict";i.d(t,{pV:()=>s,P3:()=>a,Ky:()=>l,D4:()=>d,XO:()=>h,zO:()=>p,oi:()=>u,d4:()=>f,D7:()=>m,ZJ:()=>y,V3:()=>g,WW:()=>w});var r=i(95282),n=i(38346),o=i(5986);const s=["unignore","dhcp","homekit","ssdp","zeroconf","discovery","mqtt"],a=["reauth"],c={"HA-Frontend-Base":`${location.protocol}//${location.host}`},l=(e,t)=>{var i;return e.callApi("POST","config/config_entries/flow",{handler:t,show_advanced_options:Boolean(null===(i=e.userData)||void 0===i?void 0:i.showAdvanced)},c)},d=(e,t)=>e.callApi("GET",`config/config_entries/flow/${t}`,void 0,c),h=(e,t,i)=>e.callApi("POST",`config/config_entries/flow/${t}`,i,c),p=(e,t,i)=>e.callWS({type:"config_entries/ignore_flow",flow_id:t,title:i}),u=(e,t)=>e.callApi("DELETE",`config/config_entries/flow/${t}`),f=e=>e.callApi("GET","config/config_entries/flow_handlers"),m=e=>e.sendMessagePromise({type:"config_entries/flow/progress"}),v=(e,t)=>e.subscribeEvents((0,n.D)((()=>m(e).then((e=>t.setState(e,!0)))),500,!0),"config_entry_discovered"),y=e=>(0,r._)(e,"_configFlowProgress",m,v),g=(e,t)=>y(e.connection).subscribe(t),w=(e,t)=>{const i=t.context.title_placeholders||{},r=Object.keys(i);if(0===r.length)return(0,o.Lh)(e,t.handler);const n=[];return r.forEach((e=>{n.push(e),n.push(i[e])})),e(`component.${t.handler}.config.flow_title`,...n)}},57292:(e,t,i)=>{"use strict";i.d(t,{jL:()=>s,y_:()=>a,t1:()=>c,q4:()=>h});var r=i(95282),n=i(91741),o=i(38346);const s=(e,t,i)=>e.name_by_user||e.name||i&&((e,t)=>{for(const i of t||[]){const t="string"==typeof i?i:i.entity_id,r=e.states[t];if(r)return(0,n.C)(r)}})(t,i)||t.localize("ui.panel.config.devices.unnamed_device"),a=(e,t)=>e.filter((e=>e.area_id===t)),c=(e,t,i)=>e.callWS({type:"config/device_registry/update",device_id:t,...i}),l=e=>e.sendMessagePromise({type:"config/device_registry/list"}),d=(e,t)=>e.subscribeEvents((0,o.D)((()=>l(e).then((e=>t.setState(e,!0)))),500,!0),"device_registry_updated"),h=(e,t)=>(0,r.B)("_dr",l,d,e,t)},5986:(e,t,i)=>{"use strict";i.d(t,{H0:()=>r,Lh:()=>n,F3:()=>o,t4:()=>s});const r=(e,t)=>t.issue_tracker||`https://github.com/home-assistant/home-assistant/issues?q=is%3Aissue+is%3Aopen+label%3A%22integration%3A+${e}%22`,n=(e,t,i)=>e(`component.${t}.title`)||(null==i?void 0:i.name)||t,o=e=>e.callWS({type:"manifest/list"}),s=(e,t)=>e.callWS({type:"manifest/get",integration:t})},91810:(e,t,i)=>{"use strict";i.d(t,{YJ:()=>r,ID:()=>n,Kk:()=>o,$c:()=>s,WI:()=>a,vY:()=>c,uZ:()=>l,cC:()=>d,e8:()=>h,Jl:()=>p,Lm:()=>u,ol:()=>f,x1:()=>m});const r=["ProtocolInfo","Probe","WakeUp","ManufacturerSpecific1","NodeInfo","NodePlusInfo","ManufacturerSpecific2","Versions","Instances","Static","CacheLoad","Associations","Neighbors","Session","Dynamic","Configuration","Complete"],n=["driverAllNodesQueried","driverAllNodesQueriedSomeDead","driverAwakeNodesQueried"],o=["starting","started","Ready","driverReady"],s=["Offline","stopped","driverFailed","driverReset","driverRemoved","driverAllNodesOnFire"],a=function(e){if(!e)return;const t=e.identifiers.find((e=>"ozw"===e[0]));if(!t)return;const i=t[1].split(".");return{node_id:parseInt(i[1]),ozw_instance:parseInt(i[0])}},c=e=>e.callWS({type:"ozw/get_instances"}),l=(e,t)=>e.callWS({type:"ozw/network_status",ozw_instance:t}),d=(e,t)=>e.callWS({type:"ozw/network_statistics",ozw_instance:t}),h=(e,t)=>e.callWS({type:"ozw/get_nodes",ozw_instance:t}),p=(e,t,i)=>e.callWS({type:"ozw/node_status",ozw_instance:t,node_id:i}),u=(e,t,i)=>e.callWS({type:"ozw/node_metadata",ozw_instance:t,node_id:i}),f=(e,t,i)=>e.callWS({type:"ozw/get_config_parameters",ozw_instance:t,node_id:i}),m=(e,t=!0)=>e.callWS({type:"ozw/migrate_zwave",dry_run:t})},60633:(e,t,i)=>{"use strict";i.d(t,{N8:()=>r,E0:()=>n,PH:()=>o,BM:()=>s,HV:()=>a,MI:()=>c,qc:()=>l,fQ:()=>d});const r=0,n=5,o=7,s=10,a=e=>e.callWS({type:"zwave/network_status"}),c=e=>e.callWS({type:"zwave/start_ozw_config_flow"}),l=e=>e.callWS({type:"zwave/get_migration_config"}),d=(e,t)=>e.callApi("GET",`zwave/config/${t}`)},2852:(e,t,i)=>{"use strict";i.d(t,{t:()=>l});var r=i(15652),n=i(85415),o=i(35359),s=i(73728),a=i(5986),c=i(52871);const l=(e,t)=>(0,c.w)(e,t,{loadDevicesAndAreas:!0,getFlowHandlers:async e=>{const[t]=await Promise.all([(0,s.d4)(e),e.loadBackendTranslation("title",void 0,!0)]);return t.sort(((t,i)=>(0,n.w)((0,a.Lh)(e.localize,t),(0,a.Lh)(e.localize,i))))},createFlow:async(e,t)=>{const[i]=await Promise.all([(0,s.Ky)(e,t),e.loadBackendTranslation("config",t)]);return i},fetchFlow:async(e,t)=>{const i=await(0,s.D4)(e,t);return await e.loadBackendTranslation("config",i.handler),i},handleFlowStep:s.XO,deleteFlow:s.oi,renderAbortDescription(e,t){const i=(0,o.I)(e.localize,`component.${t.handler}.config.abort.${t.reason}`,t.description_placeholders);return i?r.dy`
            <ha-markdown allowsvg breaks .content=${i}></ha-markdown>
          `:""},renderShowFormStepHeader:(e,t)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.title`)||e.localize(`component.${t.handler}.title`),renderShowFormStepDescription(e,t){const i=(0,o.I)(e.localize,`component.${t.handler}.config.step.${t.step_id}.description`,t.description_placeholders);return i?r.dy`
            <ha-markdown allowsvg breaks .content=${i}></ha-markdown>
          `:""},renderShowFormStepFieldLabel:(e,t,i)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.data.${i.name}`),renderShowFormStepFieldError:(e,t,i)=>e.localize(`component.${t.handler}.config.error.${i}`),renderExternalStepHeader:(e,t)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.title`)||e.localize("ui.panel.config.integrations.config_flow.external_step.open_site"),renderExternalStepDescription(e,t){const i=(0,o.I)(e.localize,`component.${t.handler}.config.${t.step_id}.description`,t.description_placeholders);return r.dy`
        <p>
          ${e.localize("ui.panel.config.integrations.config_flow.external_step.description")}
        </p>
        ${i?r.dy`
              <ha-markdown
                allowsvg
                breaks
                .content=${i}
              ></ha-markdown>
            `:""}
      `},renderCreateEntryDescription(e,t){const i=(0,o.I)(e.localize,`component.${t.handler}.config.create_entry.${t.description||"default"}`,t.description_placeholders);return r.dy`
        ${i?r.dy`
              <ha-markdown
                allowsvg
                breaks
                .content=${i}
              ></ha-markdown>
            `:""}
        <p>
          ${e.localize("ui.panel.config.integrations.config_flow.created_config","name",t.title)}
        </p>
      `},renderShowFormProgressHeader:(e,t)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.title`)||e.localize(`component.${t.handler}.title`),renderShowFormProgressDescription(e,t){const i=(0,o.I)(e.localize,`component.${t.handler}.config.progress.${t.progress_action}`,t.description_placeholders);return i?r.dy`
            <ha-markdown allowsvg breaks .content=${i}></ha-markdown>
          `:""}})},52871:(e,t,i)=>{"use strict";i.d(t,{w:()=>o});var r=i(47181);const n=()=>Promise.all([i.e(5009),i.e(2955),i.e(8161),i.e(9543),i.e(8374),i.e(8200),i.e(879),i.e(5906),i.e(5829),i.e(1480),i.e(4018),i.e(3322),i.e(7818),i.e(6509),i.e(8101),i.e(8331),i.e(4940),i.e(4482)]).then(i.bind(i,27234)),o=(e,t,i)=>{(0,r.B)(e,"show-dialog",{dialogTag:"dialog-data-entry-flow",dialogImport:n,dialogParams:{...t,flowConfig:i}})}},60010:(e,t,i)=>{"use strict";var r=i(15652),n=i(81471),o=i(25516);i(2315),i(48932);function s(){s=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!l(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&r.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);i.push.apply(i,l)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?u(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=p(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:h(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=h(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function a(e){var t,i=p(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function c(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function l(e){return e.decorators&&e.decorators.length}function d(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function h(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function p(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}!function(e,t,i,r){var n=s();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var h=t((function(e){n.initializeInstanceElements(e,p.elements)}),i),p=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(d(o.descriptor)||d(n.descriptor)){if(l(o)||l(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(l(o)){if(l(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}c(o,n)}else t.push(o)}return t}(h.d.map(a)),e);n.initializeClassElements(h.F,p.elements),n.runClassFinishers(h.F,p.finishers)}([(0,r.Mo)("hass-subpage")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"showBackButton",value:()=>!0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"hassio",value:()=>!1},{kind:"field",decorators:[(0,o.i)(".content")],key:"_savedScrollPos",value:void 0},{kind:"method",key:"render",value:function(){return r.dy`
      <div class="toolbar">
        <ha-icon-button-arrow-prev
          .hass=${this.hass}
          @click=${this._backTapped}
          class=${(0,n.$)({hidden:!this.showBackButton})}
        ></ha-icon-button-arrow-prev>

        <div class="main-title">${this.header}</div>
        <slot name="toolbar-icon"></slot>
      </div>
      <div class="content" @scroll=${this._saveScrollPos}><slot></slot></div>
    `}},{kind:"method",decorators:[(0,r.hO)({passive:!0})],key:"_saveScrollPos",value:function(e){this._savedScrollPos=e.target.scrollTop}},{kind:"method",key:"_backTapped",value:function(){history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`
      :host {
        display: block;
        height: 100%;
        background-color: var(--primary-background-color);
      }

      :host([narrow]) {
        width: 100%;
        position: fixed;
      }

      .toolbar {
        display: flex;
        align-items: center;
        font-size: 20px;
        height: var(--header-height);
        padding: 0 16px;
        pointer-events: none;
        background-color: var(--app-header-background-color);
        font-weight: 400;
        color: var(--app-header-text-color, white);
        border-bottom: var(--app-header-border-bottom, none);
        box-sizing: border-box;
      }

      ha-icon-button-arrow-prev,
      ::slotted([slot="toolbar-icon"]) {
        pointer-events: auto;
      }

      ha-icon-button-arrow-prev.hidden {
        visibility: hidden;
      }

      .main-title {
        margin: 0 0 0 24px;
        line-height: 20px;
        flex-grow: 1;
      }

      .content {
        position: relative;
        width: 100%;
        height: calc(100% - 1px - var(--header-height));
        overflow-y: auto;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }
    `}}]}}),r.oi)},41896:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ZwaveMigration:()=>_});i(53268),i(12730),i(53918),i(10983),i(31206);var r=i(15652),n=(i(94132),i(54909),i(22098),i(16509),i(60633)),o=i(11654),s=(i(88165),i(60010),i(2852)),a=i(91810),c=i(83849),l=i(26765),d=i(91741),h=i(57292),p=i(7323);function u(){u=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!v(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&r.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);i.push.apply(i,l)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?k(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=w(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:g(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=g(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function f(e){var t,i=w(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function m(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function v(e){return e.decorators&&e.decorators.length}function y(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function g(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function w(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}let _=function(e,t,i,r){var n=u();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),i),a=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(y(o.descriptor)||y(n.descriptor)){if(v(o)||v(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(v(o)){if(v(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}m(o,n)}else t.push(o)}return t}(s.d.map(f)),e);return n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,r.Mo)("zwave-migration")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({type:Object})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Object})],key:"route",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"isWide",value:void 0},{kind:"field",decorators:[(0,r.sz)()],key:"_networkStatus",value:void 0},{kind:"field",decorators:[(0,r.sz)()],key:"_step",value:()=>0},{kind:"field",decorators:[(0,r.sz)()],key:"_stoppingNetwork",value:()=>!1},{kind:"field",decorators:[(0,r.sz)()],key:"_migrationConfig",value:void 0},{kind:"field",decorators:[(0,r.sz)()],key:"_migrationData",value:void 0},{kind:"field",decorators:[(0,r.sz)()],key:"_migratedZwaveEntities",value:void 0},{kind:"field",decorators:[(0,r.sz)()],key:"_deviceNameLookup",value:()=>({})},{kind:"field",key:"_unsub",value:void 0},{kind:"field",key:"_unsubDevices",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){this._unsubscribe(),this._unsubDevices&&(this._unsubDevices(),this._unsubDevices=void 0)}},{kind:"method",key:"render",value:function(){return r.dy`
      <hass-subpage
        .hass=${this.hass}
        .narrow=${this.narrow}
        .route=${this.route}
        back-path="/config/zwave"
      >
        <ha-config-section .narrow=${this.narrow} .isWide=${this.isWide}>
          <div slot="header">
            ${this.hass.localize("ui.panel.config.zwave.migration.ozw.header")}
          </div>

          <div slot="introduction">
            ${this.hass.localize("ui.panel.config.zwave.migration.ozw.introduction")}
          </div>
          ${(0,p.p)(this.hass,"hassio")||(0,p.p)(this.hass,"mqtt")?r.dy`
                ${0===this._step?r.dy`
                      <ha-card class="content" header="Introduction">
                        <div class="card-content">
                          <p>
                            This wizard will walk through the following steps to
                            migrate from the legacy Z-Wave integration to
                            OpenZWave.
                          </p>
                          <ol>
                            <li>Stop the Z-Wave network</li>
                            <li>
                              <i
                                >If running ioBroker Core in Docker or in
                                Python venv:</i
                              >
                              Configure and start OZWDaemon
                            </li>
                            <li>Set up the OpenZWave integration</li>
                            <li>
                              Migrate entities and devices to the new
                              integration
                            </li>
                            <li>Remove legacy Z-Wave integration</li>
                          </ol>
                          <p>
                            <b>
                              Please take a backup or a snapshot of your
                              environment before proceeding.
                            </b>
                          </p>
                        </div>
                        <div class="card-actions">
                          <mwc-button @click=${this._continue}>
                            Continue
                          </mwc-button>
                        </div>
                      </ha-card>
                    `:""}
                ${1===this._step?r.dy`
                      <ha-card class="content" header="Stop Z-Wave Network">
                        <div class="card-content">
                          <p>
                            We need to stop the Z-Wave network to perform the
                            migration. ioBroker will not be able to
                            control Z-Wave devices while the network is stopped.
                          </p>
                          ${this._stoppingNetwork?r.dy`
                                <div class="flex-container">
                                  <ha-circular-progress
                                    active
                                  ></ha-circular-progress>
                                  <div><p>Stopping Z-Wave Network...</p></div>
                                </div>
                              `:""}
                        </div>
                        <div class="card-actions">
                          <mwc-button @click=${this._stopNetwork}>
                            Stop Network
                          </mwc-button>
                        </div>
                      </ha-card>
                    `:""}
                ${2===this._step?r.dy`
                      <ha-card class="content" header="Set up OZWDaemon">
                        <div class="card-content">
                          <p>
                            Now it's time to set up the OZW integration.
                          </p>
                          ${(0,p.p)(this.hass,"hassio")?r.dy`
                                <p>
                                  The OZWDaemon runs in a ioBroker addon
                                  that will be setup next. Make sure to check
                                  the checkbox for the addon.
                                </p>
                              `:r.dy`
                                <p>
                                  If you're using ioBroker Core in Docker
                                  or a Python venv, see the
                                  <a
                                    href="https://github.com/OpenZWave/qt-openzwave/blob/master/README.md"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    OZWDaemon readme
                                  </a>
                                  for setup instructions.
                                </p>
                                <p>
                                  Here's the current Z-Wave configuration.
                                  You'll need these values when setting up OZW
                                  daemon.
                                </p>
                                ${this._migrationConfig?r.dy` <blockquote>
                                      USB Path:
                                      ${this._migrationConfig.usb_path}<br />
                                      Network Key:
                                      ${this._migrationConfig.network_key}
                                    </blockquote>`:""}
                                <p>
                                  Once OZWDaemon is installed, running, and
                                  connected to the MQTT broker click Continue to
                                  set up the OpenZWave integration and migrate
                                  your devices and entities.
                                </p>
                              `}
                        </div>
                        <div class="card-actions">
                          <mwc-button @click=${this._setupOzw}>
                            Continue
                          </mwc-button>
                        </div>
                      </ha-card>
                    `:""}
                ${3===this._step?r.dy`
                      <ha-card
                        class="content"
                        header="Migrate devices and entities"
                      >
                        <div class="card-content">
                          <p>
                            Now it's time to migrate your devices and entities
                            from the legacy Z-Wave integration to the OZW
                            integration, to make sure all your UI and
                            automations keep working.
                          </p>
                          ${this._migrationData?r.dy`
                                <p>Below is a list of what will be migrated.</p>
                                ${this._migratedZwaveEntities.length!==this._migrationData.zwave_entity_ids.length?r.dy`<h3 class="warning">
                                        Not all entities can be migrated! The
                                        following entities will not be migrated
                                        and might need manual adjustments to
                                        your config:
                                      </h3>
                                      <ul>
                                        ${this._migrationData.zwave_entity_ids.map((e=>this._migratedZwaveEntities.includes(e)?"":r.dy`<li>
                                                  ${(0,d.C)(this.hass.states[e])}
                                                  (${e})
                                                </li>`))}
                                      </ul>`:""}
                                ${Object.keys(this._migrationData.migration_device_map).length?r.dy`<h3>Devices that will be migrated:</h3>
                                      <ul>
                                        ${Object.keys(this._migrationData.migration_device_map).map((e=>r.dy`<li>
                                              ${this._deviceNameLookup[e]||e}
                                            </li>`))}
                                      </ul>`:""}
                                ${Object.keys(this._migrationData.migration_entity_map).length?r.dy`<h3>
                                        Entities that will be migrated:
                                      </h3>
                                      <ul>
                                        ${Object.keys(this._migrationData.migration_entity_map).map((e=>r.dy`<li>
                                            ${(0,d.C)(this.hass.states[e])}
                                            (${e})
                                          </li>`))}
                                      </ul>`:""}
                              `:r.dy` <div class="flex-container">
                                <p>Loading migration data...</p>
                                <ha-circular-progress active>
                                </ha-circular-progress>
                              </div>`}
                        </div>
                        <div class="card-actions">
                          <mwc-button @click=${this._doMigrate}>
                            Migrate
                          </mwc-button>
                        </div>
                      </ha-card>
                    `:""}
                ${4===this._step?r.dy`<ha-card class="content" header="Done!">
                      <div class="card-content">
                        That was all! You are now migrated to the new OZW
                        integration, check if all your devices and entities are
                        back the way they where, if not all entities could be
                        migrated you might have to change those manually.
                      </div>
                      <div class="card-actions">
                        <mwc-button @click=${this._navigateOzw}>
                          Go to OZW config panel
                        </mwc-button>
                      </div>
                    </ha-card>`:""}
              `:r.dy`
                <ha-card class="content" header="MQTT Required">
                  <div class="card-content">
                    <p>
                      OpenZWave requires MQTT. Please setup an MQTT broker and
                      the MQTT integration to proceed with the migration.
                    </p>
                  </div>
                </ha-card>
              `}
        </ha-config-section>
      </hass-subpage>
    `}},{kind:"method",key:"_getMigrationConfig",value:async function(){this._migrationConfig=await(0,n.qc)(this.hass)}},{kind:"method",key:"_unsubscribe",value:async function(){this._unsub&&((await this._unsub)(),this._unsub=void 0)}},{kind:"method",key:"_continue",value:function(){this._step++}},{kind:"method",key:"_stopNetwork",value:async function(){var e;this._stoppingNetwork=!0,await this._getNetworkStatus(),(null===(e=this._networkStatus)||void 0===e?void 0:e.state)!==n.N8?(this._unsub=this.hass.connection.subscribeEvents((()=>this._networkStopped()),"zwave.network_stop"),this.hass.callService("zwave","stop_network")):this._networkStopped()}},{kind:"method",key:"_setupOzw",value:async function(){var e;const t=await(0,n.MI)(this.hass);if((0,p.p)(this.hass,"ozw"))return this._getMigrationData(),void(this._step=3);(0,s.t)(this,{continueFlowId:t.flow_id,dialogClosedCallback:()=>{(0,p.p)(this.hass,"ozw")&&(this._getMigrationData(),this._step=3)},showAdvanced:null===(e=this.hass.userData)||void 0===e?void 0:e.showAdvanced}),this.hass.loadBackendTranslation("title","ozw",!0)}},{kind:"method",key:"_getMigrationData",value:async function(){try{this._migrationData=await(0,a.x1)(this.hass,!0)}catch(e){return void(0,l.Ys)(this,{title:"Failed to get migration data!",text:"unknown_command"===e.code?"Restart ioBroker and try again.":e.message})}this._migratedZwaveEntities=Object.keys(this._migrationData.migration_entity_map),Object.keys(this._migrationData.migration_device_map).length&&this._fetchDevices()}},{kind:"method",key:"_fetchDevices",value:function(){this._unsubDevices=(0,h.q4)(this.hass.connection,(e=>{if(!this._migrationData)return;const t=Object.keys(this._migrationData.migration_device_map),i={};e.forEach((e=>{t.includes(e.id)&&(i[e.id]=(0,h.jL)(e,this.hass))})),this._deviceNameLookup=i}))}},{kind:"method",key:"_doMigrate",value:async function(){(await(0,a.x1)(this.hass,!1)).migrated?this._step=4:(0,l.Ys)(this,{title:"Migration failed!"})}},{kind:"method",key:"_navigateOzw",value:function(){(0,c.c)(this,"/config/ozw")}},{kind:"method",key:"_networkStopped",value:function(){this._unsubscribe(),this._getMigrationConfig(),this._stoppingNetwork=!1,this._step=2}},{kind:"method",key:"_getNetworkStatus",value:async function(){this._networkStatus=await(0,n.HV)(this.hass)}},{kind:"get",static:!0,key:"styles",value:function(){return[o.Qx,r.iv`
        .content {
          margin-top: 24px;
        }

        .flex-container {
          display: flex;
          align-items: center;
        }

        .flex-container ha-circular-progress {
          margin-right: 20px;
        }

        blockquote {
          display: block;
          background-color: var(--secondary-background-color);
          color: var(--primary-text-color);
          padding: 8px;
          margin: 8px 0;
          font-size: 0.9em;
          font-family: monospace;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }
      `]}}]}}),r.oi)}}]);
//# sourceMappingURL=chunk.86322175db0ead2322f8.js.map