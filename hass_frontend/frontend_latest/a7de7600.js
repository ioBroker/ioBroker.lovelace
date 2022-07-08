"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[16938],{73826:(e,t,r)=>{r.d(t,{f:()=>p});var a=r(33310);function s(e,t,r,a){var s=l();if(a)for(var d=0;d<a.length;d++)s=a[d](s);var u=t((function(e){s.initializeInstanceElements(e,h.elements)}),r),h=s.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===l.key&&e.placement===l.placement},a=0;a<e.length;a++){var s,l=e[a];if("method"===l.kind&&(s=t.find(r)))if(n(l.descriptor)||n(s.descriptor)){if(o(l)||o(s))throw new ReferenceError("Duplicated methods ("+l.key+") can't be decorated.");s.descriptor=l.descriptor}else{if(o(l)){if(o(s))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+l.key+").");s.decorators=l.decorators}c(l,s)}else t.push(l)}return t}(u.d.map(i)),e);return s.initializeClassElements(u.F,h.elements),s.runClassFinishers(u.F,h.finishers)}function l(){l=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(a){t.forEach((function(t){var s=t.placement;if(t.kind===a&&("static"===s||"prototype"===s)){var l="static"===s?e:r;this.defineClassElement(l,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var a=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===a?void 0:a.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],a=[],s={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,s)}),this),e.forEach((function(e){if(!o(e))return r.push(e);var t=this.decorateElement(e,s);r.push(t.element),r.push.apply(r,t.extras),a.push.apply(a,t.finishers)}),this),!t)return{elements:r,finishers:a};var l=this.decorateConstructor(r,t);return a.push.apply(a,l.finishers),l.finishers=a,l},addElementPlacement:function(e,t,r){var a=t[e.placement];if(!r&&-1!==a.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");a.push(e.key)},decorateElement:function(e,t){for(var r=[],a=[],s=e.decorators,l=s.length-1;l>=0;l--){var i=t[e.placement];i.splice(i.indexOf(e.key),1);var c=this.fromElementDescriptor(e),o=this.toElementFinisherExtras((0,s[l])(c)||c);e=o.element,this.addElementPlacement(e,t),o.finisher&&a.push(o.finisher);var n=o.extras;if(n){for(var d=0;d<n.length;d++)this.addElementPlacement(n[d],t);r.push.apply(r,n)}}return{element:e,finishers:a,extras:r}},decorateConstructor:function(e,t){for(var r=[],a=t.length-1;a>=0;a--){var s=this.fromClassDescriptor(e),l=this.toClassDescriptor((0,t[a])(s)||s);if(void 0!==l.finisher&&r.push(l.finisher),void 0!==l.elements){e=l.elements;for(var i=0;i<e.length-1;i++)for(var c=i+1;c<e.length;c++)if(e[i].key===e[c].key&&e[i].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[i].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=u(e.key),a=String(e.placement);if("static"!==a&&"prototype"!==a&&"own"!==a)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+a+'"');var s=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var l={kind:t,key:r,placement:a,descriptor:Object.assign({},s)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(s,"get","The property descriptor of a field descriptor"),this.disallowProperty(s,"set","The property descriptor of a field descriptor"),this.disallowProperty(s,"value","The property descriptor of a field descriptor"),l.initializer=e.initializer),l},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:d(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=d(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var a=(0,t[r])(e);if(void 0!==a){if("function"!=typeof a)throw new TypeError("Finishers must return a constructor.");e=a}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function i(e){var t,r=u(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var a={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(a.decorators=e.decorators),"field"===e.kind&&(a.initializer=e.value),a}function c(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function o(e){return e.decorators&&e.decorators.length}function n(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function d(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function m(e,t,r){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(a){var s=Object.getOwnPropertyDescriptor(a,t);return s.get?s.get.call(r):s.value}},m(e,t,r||e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}const p=e=>s(null,(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){m(f(r.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if(m(f(r.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if(m(f(r.prototype),"updated",this).call(this,e),e.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const t of e.keys())if(this.hassSubscribeRequiredHostProps.includes(t))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var e;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(e=this.hassSubscribeRequiredHostProps)&&void 0!==e&&e.some((e=>void 0===this[e]))||(this.__unsubs=this.hassSubscribe())}}]}}),e)},16938:(e,t,r)=>{r.a(e,(async e=>{r.r(t),r.d(t,{HuiEnergySourcesTableCard:()=>E});var a=r(40521),s=r(37500),l=r(33310),i=r(70483),c=r(15838),o=r(89525),n=r(91741),d=r(18457),u=r(5372),h=(r(22098),r(55424)),m=r(58763),f=r(73826),p=e([m,h,u]);function _(){_=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(a){t.forEach((function(t){var s=t.placement;if(t.kind===a&&("static"===s||"prototype"===s)){var l="static"===s?e:r;this.defineClassElement(l,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var a=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===a?void 0:a.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],a=[],s={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,s)}),this),e.forEach((function(e){if(!v(e))return r.push(e);var t=this.decorateElement(e,s);r.push(t.element),r.push.apply(r,t.extras),a.push.apply(a,t.finishers)}),this),!t)return{elements:r,finishers:a};var l=this.decorateConstructor(r,t);return a.push.apply(a,l.finishers),l.finishers=a,l},addElementPlacement:function(e,t,r){var a=t[e.placement];if(!r&&-1!==a.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");a.push(e.key)},decorateElement:function(e,t){for(var r=[],a=[],s=e.decorators,l=s.length-1;l>=0;l--){var i=t[e.placement];i.splice(i.indexOf(e.key),1);var c=this.fromElementDescriptor(e),o=this.toElementFinisherExtras((0,s[l])(c)||c);e=o.element,this.addElementPlacement(e,t),o.finisher&&a.push(o.finisher);var n=o.extras;if(n){for(var d=0;d<n.length;d++)this.addElementPlacement(n[d],t);r.push.apply(r,n)}}return{element:e,finishers:a,extras:r}},decorateConstructor:function(e,t){for(var r=[],a=t.length-1;a>=0;a--){var s=this.fromClassDescriptor(e),l=this.toClassDescriptor((0,t[a])(s)||s);if(void 0!==l.finisher&&r.push(l.finisher),void 0!==l.elements){e=l.elements;for(var i=0;i<e.length-1;i++)for(var c=i+1;c<e.length;c++)if(e[i].key===e[c].key&&e[i].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[i].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?$(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=k(e.key),a=String(e.placement);if("static"!==a&&"prototype"!==a&&"own"!==a)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+a+'"');var s=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var l={kind:t,key:r,placement:a,descriptor:Object.assign({},s)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(s,"get","The property descriptor of a field descriptor"),this.disallowProperty(s,"set","The property descriptor of a field descriptor"),this.disallowProperty(s,"value","The property descriptor of a field descriptor"),l.initializer=e.initializer),l},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:w(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=w(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var a=(0,t[r])(e);if(void 0!==a){if("function"!=typeof a)throw new TypeError("Finishers must return a constructor.");e=a}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function y(e){var t,r=k(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var a={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(a.decorators=e.decorators),"field"===e.kind&&(a.initializer=e.value),a}function b(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function v(e){return e.decorators&&e.decorators.length}function g(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function w(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function k(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}[m,h,u]=p.then?await p:p;let E=function(e,t,r,a){var s=_();if(a)for(var l=0;l<a.length;l++)s=a[l](s);var i=t((function(e){s.initializeInstanceElements(e,c.elements)}),r),c=s.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===l.key&&e.placement===l.placement},a=0;a<e.length;a++){var s,l=e[a];if("method"===l.kind&&(s=t.find(r)))if(g(l.descriptor)||g(s.descriptor)){if(v(l)||v(s))throw new ReferenceError("Duplicated methods ("+l.key+") can't be decorated.");s.descriptor=l.descriptor}else{if(v(l)){if(v(s))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+l.key+").");s.decorators=l.decorators}b(l,s)}else t.push(l)}return t}(i.d.map(y)),e);return s.initializeClassElements(i.F,c.elements),s.runClassFinishers(i.F,c.finishers)}([(0,l.Mo)("hui-energy-sources-table-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_data",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"hassSubscribe",value:function(){var e;return[(0,h.UB)(this.hass,{key:null===(e=this._config)||void 0===e?void 0:e.collection_key}).subscribe((e=>{this._data=e}))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"render",value:function(){var e,t,r,a,l,u,f;if(!this.hass||!this._config)return s.dy``;if(!this._data)return s.dy`${this.hass.localize("ui.panel.lovelace.cards.energy.loading")}`;let p=0,_=0,y=0,b=0,v=0,g=0,w=0,k=0,$=0,E=0,C=0,P=0;const S=(0,h.Jj)(this._data.prefs),j=getComputedStyle(this),D=j.getPropertyValue("--energy-solar-color").trim(),A=j.getPropertyValue("--energy-battery-out-color").trim(),x=j.getPropertyValue("--energy-battery-in-color").trim(),z=j.getPropertyValue("--energy-grid-return-color").trim(),O=j.getPropertyValue("--energy-grid-consumption-color").trim(),T=j.getPropertyValue("--energy-gas-color").trim(),K=(null===(e=S.grid)||void 0===e?void 0:e[0].flow_from.some((e=>e.stat_cost||e.entity_energy_price||e.number_energy_price)))||(null===(t=S.grid)||void 0===t?void 0:t[0].flow_to.some((e=>e.stat_compensation||e.entity_energy_price||e.number_energy_price)))||(null===(r=S.gas)||void 0===r?void 0:r.some((e=>e.stat_cost||e.entity_energy_price||e.number_energy_price))),R=(0,h.vE)(this.hass,this._data.prefs,this._data.statsMetadata)||"",F=void 0!==this._data.statsCompare;return s.dy` <ha-card>
      ${this._config.title?s.dy`<h1 class="card-header">${this._config.title}</h1>`:""}
      <div class="mdc-data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="Energy sources">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell"></th>
                <th
                  class="mdc-data-table__header-cell"
                  role="columnheader"
                  scope="col"
                >
                  ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.source")}
                </th>
                ${F?s.dy`<th
                        class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
                        role="columnheader"
                        scope="col"
                      >
                        ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.previous_energy")}
                      </th>
                      ${K?s.dy`<th
                            class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
                            role="columnheader"
                            scope="col"
                          >
                            ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.previous_cost")}
                          </th>`:""}`:""}
                <th
                  class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
                  role="columnheader"
                  scope="col"
                >
                  ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.energy")}
                </th>
                ${K?s.dy` <th
                      class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
                      role="columnheader"
                      scope="col"
                    >
                      ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.cost")}
                    </th>`:""}
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${null===(a=S.solar)||void 0===a?void 0:a.map(((e,t)=>{const r=this.hass.states[e.stat_energy_from],a=(0,m.Kj)(this._data.stats[e.stat_energy_from])||0;y+=a;const l=F&&(0,m.Kj)(this._data.statsCompare[e.stat_energy_from])||0;$+=l;const u=t>0?this.hass.themes.darkMode?(0,o.C)((0,c.Rw)((0,c.wK)(D)),t):(0,o.W)((0,c.Rw)((0,c.wK)(D)),t):void 0,h=u?(0,c.CO)((0,c.p3)(u)):D;return s.dy`<tr class="mdc-data-table__row">
                  <td class="mdc-data-table__cell cell-bullet">
                    <div
                      class="bullet"
                      style=${(0,i.V)({borderColor:h,backgroundColor:h+"7F"})}
                    ></div>
                  </td>
                  <th class="mdc-data-table__cell" scope="row">
                    ${r?(0,n.C)(r):e.stat_energy_from}
                  </th>
                  ${F?s.dy`<td
                          class="mdc-data-table__cell mdc-data-table__cell--numeric"
                        >
                          ${(0,d.uf)(l,this.hass.locale)} kWh
                        </td>
                        ${K?s.dy`<td class="mdc-data-table__cell"></td>`:""}`:""}
                  <td
                    class="mdc-data-table__cell mdc-data-table__cell--numeric"
                  >
                    ${(0,d.uf)(a,this.hass.locale)} kWh
                  </td>
                  ${K?s.dy`<td class="mdc-data-table__cell"></td>`:""}
                </tr>`}))}
              ${S.solar?s.dy`<tr class="mdc-data-table__row total">
                    <td class="mdc-data-table__cell"></td>
                    <th class="mdc-data-table__cell" scope="row">
                      Solar total
                    </th>
                    ${F?s.dy`<td
                            class="mdc-data-table__cell mdc-data-table__cell--numeric"
                          >
                            ${(0,d.uf)($,this.hass.locale)}
                            kWh
                          </td>
                          ${K?s.dy`<td class="mdc-data-table__cell"></td>`:""}`:""}
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,d.uf)(y,this.hass.locale)} kWh
                    </td>
                    ${K?s.dy`<td class="mdc-data-table__cell"></td>`:""}
                  </tr>`:""}
              ${null===(l=S.battery)||void 0===l?void 0:l.map(((e,t)=>{const r=this.hass.states[e.stat_energy_from],a=this.hass.states[e.stat_energy_to],l=(0,m.Kj)(this._data.stats[e.stat_energy_from])||0,u=(0,m.Kj)(this._data.stats[e.stat_energy_to])||0;b+=l-u;const h=F&&(0,m.Kj)(this._data.statsCompare[e.stat_energy_from])||0,f=F&&(0,m.Kj)(this._data.statsCompare[e.stat_energy_to])||0;E+=h-f;const p=t>0?this.hass.themes.darkMode?(0,o.C)((0,c.Rw)((0,c.wK)(A)),t):(0,o.W)((0,c.Rw)((0,c.wK)(A)),t):void 0,_=p?(0,c.CO)((0,c.p3)(p)):A,y=t>0?this.hass.themes.darkMode?(0,o.C)((0,c.Rw)((0,c.wK)(x)),t):(0,o.W)((0,c.Rw)((0,c.wK)(x)),t):void 0,v=y?(0,c.CO)((0,c.p3)(y)):x;return s.dy`<tr class="mdc-data-table__row">
                    <td class="mdc-data-table__cell cell-bullet">
                      <div
                        class="bullet"
                        style=${(0,i.V)({borderColor:_,backgroundColor:_+"7F"})}
                      ></div>
                    </td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${r?(0,n.C)(r):e.stat_energy_from}
                    </th>
                    ${F?s.dy`<td
                            class="mdc-data-table__cell mdc-data-table__cell--numeric"
                          >
                            ${(0,d.uf)(h,this.hass.locale)}
                            kWh
                          </td>
                          ${K?s.dy`<td class="mdc-data-table__cell"></td>`:""}`:""}
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,d.uf)(l,this.hass.locale)} kWh
                    </td>
                    ${K?s.dy`<td class="mdc-data-table__cell"></td>`:""}
                  </tr>
                  <tr class="mdc-data-table__row">
                    <td class="mdc-data-table__cell cell-bullet">
                      <div
                        class="bullet"
                        style=${(0,i.V)({borderColor:v,backgroundColor:v+"7F"})}
                      ></div>
                    </td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${a?(0,n.C)(a):e.stat_energy_from}
                    </th>
                    ${F?s.dy`<td
                            class="mdc-data-table__cell mdc-data-table__cell--numeric"
                          >
                            ${(0,d.uf)(-1*f,this.hass.locale)}
                            kWh
                          </td>
                          ${K?s.dy`<td class="mdc-data-table__cell"></td>`:""}`:""}
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,d.uf)(-1*u,this.hass.locale)} kWh
                    </td>
                    ${K?s.dy`<td class="mdc-data-table__cell"></td>`:""}
                  </tr>`}))}
              ${S.battery?s.dy`<tr class="mdc-data-table__row total">
                    <td class="mdc-data-table__cell"></td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.battery_total")}
                    </th>
                    ${F?s.dy` <td
                            class="mdc-data-table__cell mdc-data-table__cell--numeric"
                          >
                            ${(0,d.uf)(E,this.hass.locale)}
                            kWh
                          </td>
                          ${K?s.dy`<td class="mdc-data-table__cell"></td>`:""}`:""}
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,d.uf)(b,this.hass.locale)} kWh
                    </td>
                    ${K?s.dy`<td class="mdc-data-table__cell"></td>`:""}
                  </tr>`:""}
              ${null===(u=S.grid)||void 0===u?void 0:u.map((e=>s.dy`${e.flow_from.map(((e,t)=>{const r=this.hass.states[e.stat_energy_from],a=(0,m.Kj)(this._data.stats[e.stat_energy_from])||0;p+=a;const l=F&&(0,m.Kj)(this._data.statsCompare[e.stat_energy_from])||0;w+=l;const u=e.stat_cost||this._data.info.cost_sensors[e.stat_energy_from],h=u?(0,m.Kj)(this._data.stats[u])||0:null;null!==h&&(_+=h);const f=F&&u?(0,m.Kj)(this._data.statsCompare[u])||0:null;null!==f&&(k+=f);const y=t>0?this.hass.themes.darkMode?(0,o.C)((0,c.Rw)((0,c.wK)(O)),t):(0,o.W)((0,c.Rw)((0,c.wK)(O)),t):void 0,b=y?(0,c.CO)((0,c.p3)(y)):O;return s.dy`<tr class="mdc-data-table__row">
                    <td class="mdc-data-table__cell cell-bullet">
                      <div
                        class="bullet"
                        style=${(0,i.V)({borderColor:b,backgroundColor:b+"7F"})}
                      ></div>
                    </td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${r?(0,n.C)(r):e.stat_energy_from}
                    </th>
                    ${F?s.dy`<td
                            class="mdc-data-table__cell mdc-data-table__cell--numeric"
                          >
                            ${(0,d.uf)(l,this.hass.locale)} kWh
                          </td>
                          ${K?s.dy`<td
                                class="mdc-data-table__cell mdc-data-table__cell--numeric"
                              >
                                ${null!==f?(0,d.uf)(f,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""}
                              </td>`:""}`:""}
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,d.uf)(a,this.hass.locale)} kWh
                    </td>
                    ${K?s.dy` <td
                          class="mdc-data-table__cell mdc-data-table__cell--numeric"
                        >
                          ${null!==h?(0,d.uf)(h,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""}
                        </td>`:""}
                  </tr>`}))}
                ${e.flow_to.map(((e,t)=>{const r=this.hass.states[e.stat_energy_to],a=-1*((0,m.Kj)(this._data.stats[e.stat_energy_to])||0);p+=a;const l=e.stat_compensation||this._data.info.cost_sensors[e.stat_energy_to],u=l?-1*((0,m.Kj)(this._data.stats[l])||0):null;null!==u&&(_+=u);const h=-1*(F&&(0,m.Kj)(this._data.statsCompare[e.stat_energy_to])||0);w+=h;const f=F&&l?-1*((0,m.Kj)(this._data.statsCompare[l])||0):null;null!==f&&(k+=f);const y=t>0?this.hass.themes.darkMode?(0,o.C)((0,c.Rw)((0,c.wK)(z)),t):(0,o.W)((0,c.Rw)((0,c.wK)(z)),t):void 0,b=y?(0,c.CO)((0,c.p3)(y)):z;return s.dy`<tr class="mdc-data-table__row">
                    <td class="mdc-data-table__cell cell-bullet">
                      <div
                        class="bullet"
                        style=${(0,i.V)({borderColor:b,backgroundColor:b+"7F"})}
                      ></div>
                    </td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${r?(0,n.C)(r):e.stat_energy_to}
                    </th>
                    ${F?s.dy`<td
                            class="mdc-data-table__cell mdc-data-table__cell--numeric"
                          >
                            ${(0,d.uf)(h,this.hass.locale)} kWh
                          </td>
                          ${K?s.dy`<td
                                class="mdc-data-table__cell mdc-data-table__cell--numeric"
                              >
                                ${null!==f?(0,d.uf)(f,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""}
                              </td>`:""}`:""}
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,d.uf)(a,this.hass.locale)} kWh
                    </td>
                    ${K?s.dy` <td
                          class="mdc-data-table__cell mdc-data-table__cell--numeric"
                        >
                          ${null!==u?(0,d.uf)(u,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""}
                        </td>`:""}
                  </tr>`}))}`))}
              ${S.grid?s.dy` <tr class="mdc-data-table__row total">
                    <td class="mdc-data-table__cell"></td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.grid_total")}
                    </th>
                    ${F?s.dy`<td
                            class="mdc-data-table__cell mdc-data-table__cell--numeric"
                          >
                            ${(0,d.uf)(w,this.hass.locale)}
                            kWh
                          </td>
                          ${K?s.dy`<td
                                class="mdc-data-table__cell mdc-data-table__cell--numeric"
                              >
                                ${(0,d.uf)(k,this.hass.locale,{style:"currency",currency:this.hass.config.currency})}
                              </td>`:""}`:""}
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,d.uf)(p,this.hass.locale)} kWh
                    </td>
                    ${K?s.dy`<td
                          class="mdc-data-table__cell mdc-data-table__cell--numeric"
                        >
                          ${(0,d.uf)(_,this.hass.locale,{style:"currency",currency:this.hass.config.currency})}
                        </td>`:""}
                  </tr>`:""}
              ${null===(f=S.gas)||void 0===f?void 0:f.map(((e,t)=>{const r=this.hass.states[e.stat_energy_from],a=(0,m.Kj)(this._data.stats[e.stat_energy_from])||0;v+=a;const l=F&&(0,m.Kj)(this._data.statsCompare[e.stat_energy_from])||0;C+=l;const u=e.stat_cost||this._data.info.cost_sensors[e.stat_energy_from],h=u?(0,m.Kj)(this._data.stats[u])||0:null;null!==h&&(g+=h);const f=F&&u?(0,m.Kj)(this._data.statsCompare[u])||0:null;null!==f&&(P+=f);const p=t>0?this.hass.themes.darkMode?(0,o.C)((0,c.Rw)((0,c.wK)(T)),t):(0,o.W)((0,c.Rw)((0,c.wK)(T)),t):void 0,_=p?(0,c.CO)((0,c.p3)(p)):T;return s.dy`<tr class="mdc-data-table__row">
                  <td class="mdc-data-table__cell cell-bullet">
                    <div
                      class="bullet"
                      style=${(0,i.V)({borderColor:_,backgroundColor:_+"7F"})}
                    ></div>
                  </td>
                  <th class="mdc-data-table__cell" scope="row">
                    ${r?(0,n.C)(r):e.stat_energy_from}
                  </th>
                  ${F?s.dy` <td
                          class="mdc-data-table__cell mdc-data-table__cell--numeric"
                        >
                          ${(0,d.uf)(l,this.hass.locale)}
                          ${R}
                        </td>
                        ${K?s.dy`<td
                              class="mdc-data-table__cell mdc-data-table__cell--numeric"
                            >
                              ${null!==f?(0,d.uf)(f,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""}
                            </td>`:""}`:""}
                  <td
                    class="mdc-data-table__cell mdc-data-table__cell--numeric"
                  >
                    ${(0,d.uf)(a,this.hass.locale)} ${R}
                  </td>
                  ${K?s.dy`<td
                        class="mdc-data-table__cell mdc-data-table__cell--numeric"
                      >
                        ${null!==h?(0,d.uf)(h,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""}
                      </td>`:""}
                </tr>`}))}
              ${S.gas?s.dy`<tr class="mdc-data-table__row total">
                    <td class="mdc-data-table__cell"></td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.gas_total")}
                    </th>
                    ${F?s.dy`<td
                            class="mdc-data-table__cell mdc-data-table__cell--numeric"
                          >
                            ${(0,d.uf)(C,this.hass.locale)}
                            ${R}
                          </td>
                          ${K?s.dy`<td
                                class="mdc-data-table__cell mdc-data-table__cell--numeric"
                              >
                                ${(0,d.uf)(P,this.hass.locale,{style:"currency",currency:this.hass.config.currency})}
                              </td>`:""}`:""}
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,d.uf)(v,this.hass.locale)} ${R}
                    </td>
                    ${K?s.dy`<td
                          class="mdc-data-table__cell mdc-data-table__cell--numeric"
                        >
                          ${(0,d.uf)(g,this.hass.locale,{style:"currency",currency:this.hass.config.currency})}
                        </td>`:""}
                  </tr>`:""}
              ${g&&_?s.dy`<tr class="mdc-data-table__row total">
                    <td class="mdc-data-table__cell"></td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.total_costs")}
                    </th>
                    ${F?s.dy`${K?s.dy`<td class="mdc-data-table__cell"></td>`:""}
                          <td
                            class="mdc-data-table__cell mdc-data-table__cell--numeric"
                          >
                            ${(0,d.uf)(P+k,this.hass.locale,{style:"currency",currency:this.hass.config.currency})}
                          </td>`:""}
                    <td class="mdc-data-table__cell"></td>
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      ${(0,d.uf)(g+_,this.hass.locale,{style:"currency",currency:this.hass.config.currency})}
                    </td>
                  </tr>`:""}
            </tbody>
          </table>
        </div>
      </div>
    </ha-card>`}},{kind:"get",static:!0,key:"styles",value:function(){return s.iv`
      ${(0,s.$m)(a)}
      .mdc-data-table {
        width: 100%;
        border: 0;
      }
      .mdc-data-table__header-cell,
      .mdc-data-table__cell {
        color: var(--primary-text-color);
        border-bottom-color: var(--divider-color);
      }
      .mdc-data-table__row:not(.mdc-data-table__row--selected):hover {
        background-color: rgba(var(--rgb-primary-text-color), 0.04);
      }
      .total {
        --mdc-typography-body2-font-weight: 500;
      }
      .total .mdc-data-table__cell {
        border-top: 1px solid var(--divider-color);
      }
      ha-card {
        height: 100%;
      }
      .card-header {
        padding-bottom: 0;
      }
      .content {
        padding: 16px;
      }
      .has-header {
        padding-top: 0;
      }
      .cell-bullet {
        width: 32px;
        padding-right: 0;
      }
      .bullet {
        border-width: 1px;
        border-style: solid;
        border-radius: 4px;
        height: 16px;
        width: 32px;
      }
    `}}]}}),(0,f.f)(s.oi))}))}}]);
//# sourceMappingURL=a7de7600.js.map