"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[19449],{22098:(e,r,t)=>{var o=t(37500),i=t(33310);function n(){n=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,r){["method","field"].forEach((function(t){r.forEach((function(r){r.kind===t&&"own"===r.placement&&this.defineClassElement(e,r)}),this)}),this)},initializeClassElements:function(e,r){var t=e.prototype;["method","field"].forEach((function(o){r.forEach((function(r){var i=r.placement;if(r.kind===o&&("static"===i||"prototype"===i)){var n="static"===i?e:t;this.defineClassElement(n,r)}}),this)}),this)},defineClassElement:function(e,r){var t=r.descriptor;if("field"===r.kind){var o=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===o?void 0:o.call(e)}}Object.defineProperty(e,r.key,t)},decorateClass:function(e,r){var t=[],o=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!l(e))return t.push(e);var r=this.decorateElement(e,i);t.push(r.element),t.push.apply(t,r.extras),o.push.apply(o,r.finishers)}),this),!r)return{elements:t,finishers:o};var n=this.decorateConstructor(t,r);return o.push.apply(o,n.finishers),n.finishers=o,n},addElementPlacement:function(e,r,t){var o=r[e.placement];if(!t&&-1!==o.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");o.push(e.key)},decorateElement:function(e,r){for(var t=[],o=[],i=e.decorators,n=i.length-1;n>=0;n--){var a=r[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,i[n])(s)||s);e=l.element,this.addElementPlacement(e,r),l.finisher&&o.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],r);t.push.apply(t,d)}}return{element:e,finishers:o,extras:t}},decorateConstructor:function(e,r){for(var t=[],o=r.length-1;o>=0;o--){var i=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,r[o])(i)||i);if(void 0!==n.finisher&&t.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:t}},fromElementDescriptor:function(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r},toElementDescriptors:function(e){var r;if(void 0!==e)return(r=e,function(e){if(Array.isArray(e))return e}(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,r){if(e){if("string"==typeof e)return f(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,r):void 0}}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var r=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),r}),this)},toElementDescriptor:function(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=p(e.key),o=String(e.placement);if("static"!==o&&"prototype"!==o&&"own"!==o)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+o+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:r,key:t,placement:o,descriptor:Object.assign({},i)};return"field"!==r?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:c(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var r={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r},toClassDescriptor:function(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var t=c(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:t}},runClassFinishers:function(e,r){for(var t=0;t<r.length;t++){var o=(0,r[t])(e);if(void 0!==o){if("function"!=typeof o)throw new TypeError("Finishers must return a constructor.");e=o}}return e},disallowProperty:function(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}};return e}function a(e){var r,t=p(e.key);"method"===e.kind?r={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var o={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(o.decorators=e.decorators),"field"===e.kind&&(o.initializer=e.value),o}function s(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function l(e){return e.decorators&&e.decorators.length}function d(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function c(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function p(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,r||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}function f(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o}!function(e,r,t,o){var i=n();if(o)for(var c=0;c<o.length;c++)i=o[c](i);var p=r((function(e){i.initializeInstanceElements(e,f.elements)}),t),f=i.decorateClass(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},o=0;o<e.length;o++){var i,n=e[o];if("method"===n.kind&&(i=r.find(t)))if(d(n.descriptor)||d(i.descriptor)){if(l(n)||l(i))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");i.descriptor=n.descriptor}else{if(l(n)){if(l(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");i.decorators=n.decorators}s(n,i)}else r.push(n)}return r}(p.d.map(a)),e);i.initializeClassElements(p.F,f.elements),i.runClassFinishers(p.F,f.finishers)}([(0,i.Mo)("ha-card")],(function(e,r){return{F:class extends r{constructor(...r){super(...r),e(this)}},d:[{kind:"field",decorators:[(0,i.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,i.Cb)({type:Boolean,reflect:!0})],key:"raised",value:()=>!1},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`
      :host {
        background: var(
          --ha-card-background,
          var(--card-background-color, white)
        );
        box-shadow: var(--ha-card-box-shadow, none);
        box-sizing: border-box;
        border-radius: var(--ha-card-border-radius, 12px);
        border-width: var(--ha-card-border-width, 1px);
        border-style: solid;
        border-color: var(
          --ha-card-border-color,
          var(--divider-color, #e0e0e0)
        );
        color: var(--primary-text-color);
        display: block;
        transition: all 0.3s ease-out;
        position: relative;
      }

      :host([raised]) {
        border: none;
        box-shadow: var(
          --ha-card-box-shadow,
          0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.14),
          0px 1px 3px 0px rgba(0, 0, 0, 0.12)
        );
      }

      .card-header,
      :host ::slotted(.card-header) {
        color: var(--ha-card-header-color, --primary-text-color);
        font-family: var(--ha-card-header-font-family, inherit);
        font-size: var(--ha-card-header-font-size, 24px);
        letter-spacing: -0.012em;
        line-height: 48px;
        padding: 12px 16px 16px;
        display: block;
        margin-block-start: 0px;
        margin-block-end: 0px;
        font-weight: normal;
      }

      :host ::slotted(.card-content:not(:first-child)),
      slot:not(:first-child)::slotted(.card-content) {
        padding-top: 0px;
        margin-top: -8px;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid var(--divider-color, #e8e8e8);
        padding: 5px 16px;
      }
    `}},{kind:"method",key:"render",value:function(){return o.dy`
      ${this.header?o.dy`<h1 class="card-header">${this.header}</h1>`:o.dy``}
      <slot></slot>
    `}}]}}),o.oi)},17416:(e,r,t)=>{t.d(r,{c:()=>c});var o=t(37500),i=t(5986);const n=(e,r)=>{var t;return e.callApi("POST","config/config_entries/options/flow",{handler:r,show_advanced_options:Boolean(null===(t=e.userData)||void 0===t?void 0:t.showAdvanced)})},a=(e,r)=>e.callApi("GET",`config/config_entries/options/flow/${r}`),s=(e,r,t)=>e.callApi("POST",`config/config_entries/options/flow/${r}`,t),l=(e,r)=>e.callApi("DELETE",`config/config_entries/options/flow/${r}`);var d=t(52871);const c=(e,r,t)=>(0,d.w)(e,{startFlowHandler:r.entry_id,domain:r.domain,manifest:t},{loadDevicesAndAreas:!1,createFlow:async(e,t)=>{const[o]=await Promise.all([n(e,t),e.loadBackendTranslation("options",r.domain)]);return o},fetchFlow:async(e,t)=>{const[o]=await Promise.all([a(e,t),e.loadBackendTranslation("options",r.domain)]);return o},handleFlowStep:s,deleteFlow:l,renderAbortDescription(e,t){const i=e.localize(`component.${r.domain}.options.abort.${t.reason}`,t.description_placeholders);return i?o.dy`
              <ha-markdown
                breaks
                allowsvg
                .content=${i}
              ></ha-markdown>
            `:""},renderShowFormStepHeader:(e,t)=>e.localize(`component.${r.domain}.options.step.${t.step_id}.title`)||e.localize("ui.dialogs.options_flow.form.header"),renderShowFormStepDescription(e,t){const i=e.localize(`component.${r.domain}.options.step.${t.step_id}.description`,t.description_placeholders);return i?o.dy`
              <ha-markdown
                allowsvg
                breaks
                .content=${i}
              ></ha-markdown>
            `:""},renderShowFormStepFieldLabel:(e,t,o)=>e.localize(`component.${r.domain}.options.step.${t.step_id}.data.${o.name}`),renderShowFormStepFieldHelper(e,t,i){const n=e.localize(`component.${r.domain}.options.step.${t.step_id}.data_description.${i.name}`,t.description_placeholders);return n?o.dy`<ha-markdown breaks .content=${n}></ha-markdown>`:""},renderShowFormStepFieldError:(e,t,o)=>e.localize(`component.${r.domain}.options.error.${o}`,t.description_placeholders),renderExternalStepHeader:(e,r)=>"",renderExternalStepDescription:(e,r)=>"",renderCreateEntryDescription:(e,r)=>o.dy`
          <p>${e.localize("ui.dialogs.options_flow.success.description")}</p>
        `,renderShowFormProgressHeader:(e,t)=>e.localize(`component.${r.domain}.options.step.${t.step_id}.title`)||e.localize(`component.${r.domain}.title`),renderShowFormProgressDescription(e,t){const i=e.localize(`component.${r.domain}.options.progress.${t.progress_action}`,t.description_placeholders);return i?o.dy`
              <ha-markdown
                allowsvg
                breaks
                .content=${i}
              ></ha-markdown>
            `:""},renderMenuHeader:(e,t)=>e.localize(`component.${r.domain}.options.step.${t.step_id}.title`)||e.localize(`component.${r.domain}.title`),renderMenuDescription(e,t){const i=e.localize(`component.${r.domain}.options.step.${t.step_id}.description`,t.description_placeholders);return i?o.dy`
              <ha-markdown
                allowsvg
                breaks
                .content=${i}
              ></ha-markdown>
            `:""},renderMenuOption:(e,t,o)=>e.localize(`component.${r.domain}.options.step.${t.step_id}.menu_options.${o}`,t.description_placeholders),renderLoadingDescription:(e,t)=>e.localize(`component.${r.domain}.options.loading`)||("loading_flow"===t||"loading_step"===t?e.localize(`ui.dialogs.options_flow.loading.${t}`,{integration:(0,i.Lh)(e.localize,r.domain)}):"")})}}]);
//# sourceMappingURL=db3d6235.js.map