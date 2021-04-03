(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[6839],{66839:(e,t,s)=>{"use strict";s.r(t);s(53918);var i=s(55317),r=(s(32296),s(30879),s(15652)),o=s(47181),n=(s(90806),s(52039),s(22814)),a=s(41682),l=s(77097),d=s(26765),c=s(11654);function h(){h=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(s){t.forEach((function(t){t.kind===s&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var s=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var r=t.placement;if(t.kind===i&&("static"===r||"prototype"===r)){var o="static"===r?e:s;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var s=t.descriptor;if("field"===t.kind){var i=t.initializer;s={enumerable:s.enumerable,writable:s.writable,configurable:s.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,s)},decorateClass:function(e,t){var s=[],i=[],r={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,r)}),this),e.forEach((function(e){if(!m(e))return s.push(e);var t=this.decorateElement(e,r);s.push(t.element),s.push.apply(s,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:s,finishers:i};var o=this.decorateConstructor(s,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,s){var i=t[e.placement];if(!s&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var s=[],i=[],r=e.decorators,o=r.length-1;o>=0;o--){var n=t[e.placement];n.splice(n.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,r[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);s.push.apply(s,d)}}return{element:e,finishers:i,extras:s}},decorateConstructor:function(e,t){for(var s=[],i=t.length-1;i>=0;i--){var r=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(r)||r);if(void 0!==o.finisher&&s.push(o.finisher),void 0!==o.elements){e=o.elements;for(var n=0;n<e.length-1;n++)for(var a=n+1;a<e.length;a++)if(e[n].key===e[a].key&&e[n].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[n].key+")")}}return{elements:e,finishers:s}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?g(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var s=y(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:s,placement:i,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:v(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var s=v(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:s}},runClassFinishers:function(e,t){for(var s=0;s<t.length;s++){var i=(0,t[s])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,s){if(void 0!==e[t])throw new TypeError(s+" can't have a ."+t+" property.")}};return e}function p(e){var t,s=y(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:s,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function u(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function m(e){return e.decorators&&e.decorators.length}function f(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function v(e,t){var s=e[t];if(void 0!==s&&"function"!=typeof s)throw new TypeError("Expected '"+t+"' to be a function");return s}function y(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var i=s.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,i=new Array(t);s<t;s++)i[s]=e[s];return i}!function(e,t,s,i){var r=h();if(i)for(var o=0;o<i.length;o++)r=i[o](r);var n=t((function(e){r.initializeInstanceElements(e,a.elements)}),s),a=r.decorateClass(function(e){for(var t=[],s=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var r,o=e[i];if("method"===o.kind&&(r=t.find(s)))if(f(o.descriptor)||f(r.descriptor)){if(m(o)||m(r))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");r.descriptor=o.descriptor}else{if(m(o)){if(m(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");r.decorators=o.decorators}u(o,r)}else t.push(o)}return t}(n.d.map(p)),e);r.initializeClassElements(n.F,a.elements),r.runClassFinishers(n.F,a.finishers)}([(0,r.Mo)("dialog-hassio-snapshot")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"supervisor",value:void 0},{kind:"field",decorators:[(0,r.sz)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,r.sz)()],key:"_onboarding",value:()=>!1},{kind:"field",decorators:[(0,r.sz)()],key:"_snapshot",value:void 0},{kind:"field",decorators:[(0,r.sz)()],key:"_folders",value:void 0},{kind:"field",decorators:[(0,r.sz)()],key:"_addons",value:void 0},{kind:"field",decorators:[(0,r.sz)()],key:"_dialogParams",value:void 0},{kind:"field",decorators:[(0,r.sz)()],key:"_snapshotPassword",value:void 0},{kind:"field",decorators:[(0,r.sz)()],key:"_restoreHass",value:()=>!0},{kind:"method",key:"showDialog",value:async function(e){var t,s,i,r;this._snapshot=await(0,l.Ju)(this.hass,e.slug),this._folders=(e=>{const t=[];return e.includes("homeassistant")&&t.push({slug:"homeassistant",name:"ioBroker configuration",checked:!0}),e.includes("ssl")&&t.push({slug:"ssl",name:"SSL",checked:!0}),e.includes("share")&&t.push({slug:"share",name:"Share",checked:!0}),e.includes("addons/local")&&t.push({slug:"addons/local",name:"Local add-ons",checked:!0}),t})(null===(t=this._snapshot)||void 0===t?void 0:t.folders).sort(((e,t)=>e.name>t.name?1:-1)),this._addons=(r=null===(s=this._snapshot)||void 0===s?void 0:s.addons,r.map((e=>({slug:e.slug,name:e.name,version:e.version,checked:!0})))).sort(((e,t)=>e.name>t.name?1:-1)),this._dialogParams=e,this._onboarding=null!==(i=e.onboarding)&&void 0!==i&&i,this.supervisor=e.supervisor,this._snapshot.homeassistant||(this._restoreHass=!1)}},{kind:"method",key:"render",value:function(){return this._dialogParams&&this._snapshot?r.dy`
      <ha-dialog open @closing=${this._closeDialog} .heading=${!0}>
        <div slot="heading">
          <ha-header-bar>
            <span slot="title">
              ${this._computeName}
            </span>
            <mwc-icon-button slot="actionItems" dialogAction="cancel">
              <ha-svg-icon .path=${i.r5M}></ha-svg-icon>
            </mwc-icon-button>
          </ha-header-bar>
        </div>
        <div class="details">
          ${"full"===this._snapshot.type?"Full snapshot":"Partial snapshot"}
          (${this._computeSize})<br />
          ${this._formatDatetime(this._snapshot.date)}
        </div>
        ${this._snapshot.homeassistant?r.dy`<div>ioBroker:</div>
              <paper-checkbox
                .checked=${this._restoreHass}
                @change="${e=>{this._restoreHass=e.target.checked}}"
              >
                ioBroker ${this._snapshot.homeassistant}
              </paper-checkbox>`:""}
        ${this._folders.length?r.dy`
              <div>Folders:</div>
              <paper-dialog-scrollable class="no-margin-top">
                ${this._folders.map((e=>r.dy`
                    <paper-checkbox
                      .checked=${e.checked}
                      @change="${t=>this._updateFolders(e,t.target.checked)}"
                    >
                      ${e.name}
                    </paper-checkbox>
                  `))}
              </paper-dialog-scrollable>
            `:""}
        ${this._addons.length?r.dy`
              <div>Add-on:</div>
              <paper-dialog-scrollable class="no-margin-top">
                ${this._addons.map((e=>r.dy`
                    <paper-checkbox
                      .checked=${e.checked}
                      @change="${t=>this._updateAddons(e,t.target.checked)}"
                    >
                      ${e.name}
                    </paper-checkbox>
                  `))}
              </paper-dialog-scrollable>
            `:""}
        ${this._snapshot.protected?r.dy`
              <paper-input
                autofocus=""
                label="Password"
                type="password"
                @value-changed=${this._passwordInput}
                .value=${this._snapshotPassword}
              ></paper-input>
            `:""}
        ${this._error?r.dy` <p class="error">Error: ${this._error}</p> `:""}

        <div class="button-row" slot="primaryAction">
          <mwc-button @click=${this._partialRestoreClicked}>
            <ha-svg-icon .path=${i.BBX} class="icon"></ha-svg-icon>
            Restore Selected
          </mwc-button>
          ${this._onboarding?"":r.dy`
                <mwc-button @click=${this._deleteClicked}>
                  <ha-svg-icon .path=${i.x9U} class="icon warning">
                  </ha-svg-icon>
                  <span class="warning">Delete Snapshot</span>
                </mwc-button>
              `}
        </div>
        <div class="button-row" slot="secondaryAction">
          ${"full"===this._snapshot.type?r.dy`
                <mwc-button @click=${this._fullRestoreClicked}>
                  <ha-svg-icon .path=${i.BBX} class="icon"></ha-svg-icon>
                  Restore Everything
                </mwc-button>
              `:""}
          ${this._onboarding?"":r.dy`<mwc-button @click=${this._downloadClicked}>
                <ha-svg-icon .path=${i.OGU} class="icon"></ha-svg-icon>
                Download Snapshot
              </mwc-button>`}
        </div>
      </ha-dialog>
    `:r.dy``}},{kind:"get",static:!0,key:"styles",value:function(){return[c.Qx,c.yu,r.iv`
        paper-checkbox {
          display: block;
          margin: 4px;
        }
        mwc-button ha-svg-icon {
          margin-right: 4px;
        }
        .button-row {
          display: grid;
          gap: 8px;
          margin-right: 8px;
        }
        .details {
          color: var(--secondary-text-color);
        }
        .warning,
        .error {
          color: var(--error-color);
        }
        .buttons li {
          list-style-type: none;
        }
        .buttons .icon {
          margin-right: 16px;
        }
        .no-margin-top {
          margin-top: 0;
        }
        ha-header-bar {
          --mdc-theme-on-primary: var(--primary-text-color);
          --mdc-theme-primary: var(--mdc-theme-surface);
          flex-shrink: 0;
        }
        /* overrule the ha-style-dialog max-height on small screens */
        @media all and (max-width: 450px), all and (max-height: 500px) {
          ha-header-bar {
            --mdc-theme-primary: var(--app-header-background-color);
            --mdc-theme-on-primary: var(--app-header-text-color, white);
          }
        }
      `]}},{kind:"method",key:"_updateFolders",value:function(e,t){this._folders=this._folders.map((s=>(s.slug===e.slug&&(s.checked=t),s)))}},{kind:"method",key:"_updateAddons",value:function(e,t){this._addons=this._addons.map((s=>(s.slug===e.slug&&(s.checked=t),s)))}},{kind:"method",key:"_passwordInput",value:function(e){this._snapshotPassword=e.detail.value}},{kind:"method",key:"_partialRestoreClicked",value:async function(){if(void 0!==this.supervisor&&"running"!==this.supervisor.info.state)return void await(0,d.Ys)(this,{title:"Could not restore snapshot",text:`Restoring a snapshot is not possible right now because the system is in ${this.supervisor.info.state} state.`});if(!await(0,d.g7)(this,{title:"Are you sure you want partially to restore this snapshot?",confirmText:"restore",dismissText:"cancel"}))return;const e=this._addons.filter((e=>e.checked)).map((e=>e.slug)),t=this._folders.filter((e=>e.checked)).map((e=>e.slug)),s={homeassistant:this._restoreHass,addons:e,folders:t};this._snapshot.protected&&(s.password=this._snapshotPassword),this._onboarding?((0,o.B)(this,"restoring"),fetch(`/api/hassio/snapshots/${this._snapshot.slug}/restore/partial`,{method:"POST",body:JSON.stringify(s)}),this._closeDialog()):this.hass.callApi("POST",`hassio/snapshots/${this._snapshot.slug}/restore/partial`,s).then((()=>{alert("Snapshot restored!"),this._closeDialog()}),(e=>{this._error=e.body.message}))}},{kind:"method",key:"_fullRestoreClicked",value:async function(){if(void 0!==this.supervisor&&"running"!==this.supervisor.info.state)return void await(0,d.Ys)(this,{title:"Could not restore snapshot",text:`Restoring a snapshot is not possible right now because the system is in ${this.supervisor.info.state} state.`});if(!await(0,d.g7)(this,{title:"Are you sure you want to wipe your system and restore this snapshot?",confirmText:"restore",dismissText:"cancel"}))return;const e=this._snapshot.protected?{password:this._snapshotPassword}:void 0;this._onboarding?((0,o.B)(this,"restoring"),fetch(`/api/hassio/snapshots/${this._snapshot.slug}/restore/full`,{method:"POST",body:JSON.stringify(e)}),this._closeDialog()):this.hass.callApi("POST",`hassio/snapshots/${this._snapshot.slug}/restore/full`,e).then((()=>{alert("Snapshot restored!"),this._closeDialog()}),(e=>{this._error=e.body.message}))}},{kind:"method",key:"_deleteClicked",value:async function(){await(0,d.g7)(this,{title:"Are you sure you want to delete this snapshot?",confirmText:"delete",dismissText:"cancel"})&&this.hass.callApi("POST",`hassio/snapshots/${this._snapshot.slug}/remove`).then((()=>{this._dialogParams.onDelete&&this._dialogParams.onDelete(),this._closeDialog()}),(e=>{this._error=e.body.message}))}},{kind:"method",key:"_downloadClicked",value:async function(){let e;try{e=await(0,n.iI)(this.hass,`/api/hassio/snapshots/${this._snapshot.slug}/download`)}catch(e){return void alert(`Error: ${(0,a.js)(e)}`)}if(window.location.href.includes("ui.nabu.casa")){if(!await(0,d.g7)(this,{title:"Potential slow download",text:"Downloading snapshots over the Nabu Casa URL will take some time, it is recomended to use your local URL instead, do you want to continue?",confirmText:"continue",dismissText:"cancel"}))return}const t=this._computeName.replace(/[^a-z0-9]+/gi,"_"),s=document.createElement("a");s.href=e.path,s.download=`Hass_io_${t}.tar`,this.shadowRoot.appendChild(s),s.click(),this.shadowRoot.removeChild(s)}},{kind:"get",key:"_computeName",value:function(){return this._snapshot?this._snapshot.name||this._snapshot.slug:"Unnamed snapshot"}},{kind:"get",key:"_computeSize",value:function(){return Math.ceil(10*this._snapshot.size)/10+" MB"}},{kind:"method",key:"_formatDatetime",value:function(e){return new Date(e).toLocaleDateString(navigator.language,{weekday:"long",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}},{kind:"method",key:"_closeDialog",value:function(){this._dialogParams=void 0,this._snapshot=void 0,this._snapshotPassword="",this._folders=[],this._addons=[]}}]}}),r.oi)}}]);
//# sourceMappingURL=chunk.dca099e59e9f741670b3.js.map