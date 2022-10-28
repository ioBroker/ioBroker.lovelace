"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[80736],{21780:(e,r,i)=>{i.d(r,{f:()=>t});const t=e=>e.charAt(0).toUpperCase()+e.slice(1)},45339:(e,r,i)=>{i.d(r,{wC:()=>n,Ur:()=>a,F$:()=>l,iU:()=>d,eJ:()=>c,EB:()=>p,$X:()=>m});var t=i(97330),o=i(38346);const n={critical:1,error:2,warning:3},s=e=>e.sendMessagePromise({type:"repairs/list_issues"}),a=async(e,r,i)=>e.callWS({type:"repairs/ignore_issue",issue_id:r.issue_id,domain:r.domain,ignore:i}),l=(e,r,i)=>e.callApi("POST","repairs/issues/fix",{handler:r,issue_id:i}),d=(e,r)=>e.callApi("GET",`repairs/issues/fix/${r}`),c=(e,r,i)=>e.callApi("POST",`repairs/issues/fix/${r}`,i),p=(e,r)=>e.callApi("DELETE",`repairs/issues/fix/${r}`),u=(e,r)=>e.subscribeEvents((0,o.D)((()=>s(e).then((e=>r.setState(e,!0)))),500,!0),"repairs_issue_registry_updated"),m=(e,r)=>(0,t.B)("_repairsIssueRegistry",s,u,e,r)},52871:(e,r,i)=>{i.d(r,{w:()=>n});var t=i(47181);const o=()=>Promise.all([i.e(29563),i.e(98985),i.e(24103),i.e(88278),i.e(6294),i.e(41985),i.e(85084),i.e(78874),i.e(45507),i.e(49842),i.e(51644),i.e(1548),i.e(49075),i.e(82789),i.e(77135),i.e(77576),i.e(12545),i.e(26272),i.e(13701),i.e(29925),i.e(4940),i.e(68101),i.e(48536)]).then(i.bind(i,93990)),n=(e,r,i)=>{(0,t.B)(e,"show-dialog",{dialogTag:"dialog-data-entry-flow",dialogImport:o,dialogParams:{...r,flowConfig:i,dialogParentElement:e}})}},80736:(e,r,i)=>{i.a(e,(async e=>{i(24103);var r=i(37500),t=i(33310),o=i(5435),n=i(21780),s=(i(9381),i(22098),i(73366),i(52039),i(5986)),a=(i(60010),i(11254)),l=i(60904),d=i(33807),c=e([o]);function p(){p=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,r){["method","field"].forEach((function(i){r.forEach((function(r){r.kind===i&&"own"===r.placement&&this.defineClassElement(e,r)}),this)}),this)},initializeClassElements:function(e,r){var i=e.prototype;["method","field"].forEach((function(t){r.forEach((function(r){var o=r.placement;if(r.kind===t&&("static"===o||"prototype"===o)){var n="static"===o?e:i;this.defineClassElement(n,r)}}),this)}),this)},defineClassElement:function(e,r){var i=r.descriptor;if("field"===r.kind){var t=r.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===t?void 0:t.call(e)}}Object.defineProperty(e,r.key,i)},decorateClass:function(e,r){var i=[],t=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!f(e))return i.push(e);var r=this.decorateElement(e,o);i.push(r.element),i.push.apply(i,r.extras),t.push.apply(t,r.finishers)}),this),!r)return{elements:i,finishers:t};var n=this.decorateConstructor(i,r);return t.push.apply(t,n.finishers),n.finishers=t,n},addElementPlacement:function(e,r,i){var t=r[e.placement];if(!i&&-1!==t.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");t.push(e.key)},decorateElement:function(e,r){for(var i=[],t=[],o=e.decorators,n=o.length-1;n>=0;n--){var s=r[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[n])(a)||a);e=l.element,this.addElementPlacement(e,r),l.finisher&&t.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],r);i.push.apply(i,d)}}return{element:e,finishers:t,extras:i}},decorateConstructor:function(e,r){for(var i=[],t=r.length-1;t>=0;t--){var o=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,r[t])(o)||o);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){e=n.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r},toElementDescriptors:function(e){var r;if(void 0!==e)return(r=e,function(e){if(Array.isArray(e))return e}(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,r){if(e){if("string"==typeof e)return v(e,r);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?v(e,r):void 0}}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var r=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),r}),this)},toElementDescriptor:function(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var i=w(e.key),t=String(e.placement);if("static"!==t&&"prototype"!==t&&"own"!==t)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+t+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:r,key:i,placement:t,descriptor:Object.assign({},o)};return"field"!==r?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:y(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var r={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r},toClassDescriptor:function(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=y(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,r){for(var i=0;i<r.length;i++){var t=(0,r[i])(e);if(void 0!==t){if("function"!=typeof t)throw new TypeError("Finishers must return a constructor.");e=t}}return e},disallowProperty:function(e,r,i){if(void 0!==e[r])throw new TypeError(i+" can't have a ."+r+" property.")}};return e}function u(e){var r,i=w(e.key);"method"===e.kind?r={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var t={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(t.decorators=e.decorators),"field"===e.kind&&(t.initializer=e.value),t}function m(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function f(e){return e.decorators&&e.decorators.length}function h(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function y(e,r){var i=e[r];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+r+"' to be a function");return i}function w(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var t=i.call(e,r||"default");if("object"!=typeof t)return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}function v(e,r){(null==r||r>e.length)&&(r=e.length);for(var i=0,t=new Array(r);i<r;i++)t[i]=e[i];return t}o=(c.then?await c:c)[0];!function(e,r,i,t){var o=p();if(t)for(var n=0;n<t.length;n++)o=t[n](o);var s=r((function(e){o.initializeInstanceElements(e,a.elements)}),i),a=o.decorateClass(function(e){for(var r=[],i=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},t=0;t<e.length;t++){var o,n=e[t];if("method"===n.kind&&(o=r.find(i)))if(h(n.descriptor)||h(o.descriptor)){if(f(n)||f(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(f(n)){if(f(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}m(n,o)}else r.push(n)}return r}(s.d.map(u)),e);o.initializeClassElements(s.F,a.elements),o.runClassFinishers(s.F,a.finishers)}([(0,t.Mo)("ha-config-repairs")],(function(e,i){return{F:class extends i{constructor(...r){super(...r),e(this)}},d:[{kind:"field",decorators:[(0,t.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,t.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,t.Cb)({attribute:!1})],key:"repairsIssues",value:void 0},{kind:"field",decorators:[(0,t.Cb)({type:Number})],key:"total",value:void 0},{kind:"method",key:"render",value:function(){var e;if(null===(e=this.repairsIssues)||void 0===e||!e.length)return r.dy``;const i=this.repairsIssues;return r.dy`
      <div class="title">
        ${this.hass.localize("ui.panel.config.repairs.title",{count:this.total||this.repairsIssues.length})}
      </div>
      <mwc-list>
        ${i.map((e=>{var i;return r.dy`
            <ha-list-item
              twoline
              graphic="medium"
              .hasMeta=${!this.narrow}
              .issue=${e}
              class=${e.ignored?"ignored":""}
              @click=${this._openShowMoreDialog}
            >
              <img
                loading="lazy"
                src=${(0,a.X1)({domain:e.issue_domain||e.domain,type:"icon",useFallback:!0,darkOptimized:null===(i=this.hass.themes)||void 0===i?void 0:i.darkMode})}
                .title=${(0,s.Lh)(this.hass.localize,e.domain)}
                referrerpolicy="no-referrer"
                slot="graphic"
              />
              <span
                >${this.hass.localize(`component.${e.domain}.issues.${e.translation_key||e.issue_id}.title`,e.translation_placeholders||{})}</span
              >
              <span slot="secondary" class="secondary">
                ${"critical"===e.severity||"error"===e.severity?r.dy`<span class="error"
                      >${this.hass.localize(`ui.panel.config.repairs.${e.severity}`)}</span
                    >`:""}
                ${"critical"!==e.severity&&"error"!==e.severity||!e.created?"":" - "}
                ${e.created?(0,n.f)((0,o.G)(new Date(e.created),this.hass.locale)):""}
                ${e.ignored?` - ${this.hass.localize("ui.panel.config.repairs.dialog.ignored_in_version_short",{version:e.dismissed_version})}`:""}
              </span>
              ${this.narrow?"":r.dy`<ha-icon-next slot="meta"></ha-icon-next>`}
            </ha-list-item>
          `}))}
      </mwc-list>
    `}},{kind:"method",key:"_openShowMoreDialog",value:function(e){const r=e.currentTarget.issue;r.is_fixable?(0,l.w)(this,r):(0,d.W)(this,{issue:r})}},{kind:"field",static:!0,key:"styles",value:()=>r.iv`
    :host {
      --mdc-list-vertical-padding: 0;
    }
    .title {
      font-size: 16px;
      padding: 16px;
      padding-bottom: 0;
    }
    .ignored {
      opacity: var(--light-secondary-opacity);
    }
    ha-list-item {
      --mdc-list-item-graphic-size: 40px;
    }
    button.show-more {
      color: var(--primary-color);
      text-align: left;
      cursor: pointer;
      background: none;
      border-width: initial;
      border-style: none;
      border-color: initial;
      border-image: initial;
      padding: 16px;
      font: inherit;
    }
    button.show-more:focus {
      outline: none;
      text-decoration: underline;
    }
    ha-list-item {
      cursor: pointer;
      font-size: 16px;
    }
    .error {
      color: var(--error-color);
    }
  `}]}}),r.oi)}))},60904:(e,r,i)=>{i.d(r,{w:()=>a});var t=i(37500),o=i(5986),n=i(45339),s=i(52871);const a=(e,r,i)=>(0,s.w)(e,{startFlowHandler:r.domain,domain:r.domain,dialogClosedCallback:i},{loadDevicesAndAreas:!1,createFlow:async(e,i)=>{const[t]=await Promise.all([(0,n.F$)(e,i,r.issue_id),e.loadBackendTranslation("issues",r.domain)]);return t},fetchFlow:async(e,i)=>{const[t]=await Promise.all([(0,n.iU)(e,i),e.loadBackendTranslation("issues",r.domain)]);return t},handleFlowStep:n.eJ,deleteFlow:n.EB,renderAbortDescription(e,i){const o=e.localize(`component.${r.domain}.issues.abort.${i.reason}`,i.description_placeholders);return o?t.dy`
              <ha-markdown
                breaks
                allowsvg
                .content=${o}
              ></ha-markdown>
            `:""},renderShowFormStepHeader:(e,i)=>e.localize(`component.${r.domain}.issues.${r.translation_key||r.issue_id}.fix_flow.step.${i.step_id}.title`,i.description_placeholders)||e.localize("ui.dialogs.repair_flow.form.header"),renderShowFormStepDescription(e,i){const o=e.localize(`component.${r.domain}.issues.${r.translation_key||r.issue_id}.fix_flow.step.${i.step_id}.description`,i.description_placeholders);return o?t.dy`
              <ha-markdown
                allowsvg
                breaks
                .content=${o}
              ></ha-markdown>
            `:""},renderShowFormStepFieldLabel:(e,i,t)=>e.localize(`component.${r.domain}.issues.${r.translation_key||r.issue_id}.fix_flow.step.${i.step_id}.data.${t.name}`),renderShowFormStepFieldHelper(e,i,o){const n=e.localize(`component.${r.domain}.issues.${r.translation_key||r.issue_id}.fix_flow.step.${i.step_id}.data_description.${o.name}`,i.description_placeholders);return n?t.dy`<ha-markdown breaks .content=${n}></ha-markdown>`:""},renderShowFormStepFieldError:(e,i,t)=>e.localize(`component.${r.domain}.issues.${r.translation_key||r.issue_id}.fix_flow.error.${t}`,i.description_placeholders),renderExternalStepHeader:(e,r)=>"",renderExternalStepDescription:(e,r)=>"",renderCreateEntryDescription:(e,r)=>t.dy`
          <p>${e.localize("ui.dialogs.repair_flow.success.description")}</p>
        `,renderShowFormProgressHeader:(e,i)=>e.localize(`component.${r.domain}.issues.step.${r.translation_key||r.issue_id}.fix_flow.${i.step_id}.title`)||e.localize(`component.${r.domain}.title`),renderShowFormProgressDescription(e,i){const o=e.localize(`component.${r.domain}.issues.${r.translation_key||r.issue_id}.fix_flow.progress.${i.progress_action}`,i.description_placeholders);return o?t.dy`
              <ha-markdown
                allowsvg
                breaks
                .content=${o}
              ></ha-markdown>
            `:""},renderMenuHeader:(e,i)=>e.localize(`component.${r.domain}.issues.${r.translation_key||r.issue_id}.fix_flow.step.${i.step_id}.title`)||e.localize(`component.${r.domain}.title`),renderMenuDescription(e,i){const o=e.localize(`component.${r.domain}.issues.${r.translation_key||r.issue_id}.fix_flow.step.${i.step_id}.description`,i.description_placeholders);return o?t.dy`
              <ha-markdown
                allowsvg
                breaks
                .content=${o}
              ></ha-markdown>
            `:""},renderMenuOption:(e,i,t)=>e.localize(`component.${r.domain}.issues.${r.translation_key||r.issue_id}.fix_flow.step.${i.step_id}.menu_issues.${t}`,i.description_placeholders),renderLoadingDescription:(e,i)=>e.localize(`component.${r.domain}.issues.${r.translation_key||r.issue_id}.fix_flow.loading`)||("loading_flow"===i||"loading_step"===i?e.localize(`ui.dialogs.repair_flow.loading.${i}`,{integration:(0,o.Lh)(e.localize,r.domain)}):"")})},33807:(e,r,i)=>{i.d(r,{W:()=>n});var t=i(47181);const o=()=>Promise.all([i.e(85084),i.e(86603),i.e(29925),i.e(4940),i.e(14921)]).then(i.bind(i,14921)),n=(e,r)=>{(0,t.B)(e,"show-dialog",{dialogTag:"dialog-repairs-issue",dialogImport:o,dialogParams:r})}},11254:(e,r,i)=>{i.d(r,{X1:()=>t,RU:()=>o,u4:()=>n,zC:()=>s});const t=e=>`https://brands.home-assistant.io/${e.brand?"brands/":""}${e.useFallback?"_/":""}${e.domain}/${e.darkOptimized?"dark_":""}${e.type}.png`,o=e=>`https://brands.home-assistant.io/hardware/${e.category}/${e.darkOptimized?"dark_":""}${e.manufacturer}${e.model?`_${e.model}`:""}.png`,n=e=>e.split("/")[4],s=e=>e.startsWith("https://brands.home-assistant.io/")}}]);
//# sourceMappingURL=d01efa00.js.map