(self.webpackJsonp=self.webpackJsonp||[]).push([[87],{172:function(e,t,r){"use strict";var a=r(8);t.a=Object(a.a)(e=>(class extends e{static get properties(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}__computeLocalize(e){return e}}))},174:function(e,t,r){"use strict";var a=r(0);function i(e){var t,r=c(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var a={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(a.decorators=e.decorators),"field"===e.kind&&(a.initializer=e.value),a}function n(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function s(e){return e.decorators&&e.decorators.length}function o(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function l(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function c(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}let d=function(e,t,r,a){var d=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(r){t.forEach(function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach(function(a){t.forEach(function(t){var i=t.placement;if(t.kind===a&&("static"===i||"prototype"===i)){var n="static"===i?e:r;this.defineClassElement(n,t)}},this)},this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var a=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===a?void 0:a.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],a=[],i={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,i)},this),e.forEach(function(e){if(!s(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),a.push.apply(a,t.finishers)},this),!t)return{elements:r,finishers:a};var n=this.decorateConstructor(r,t);return a.push.apply(a,n.finishers),n.finishers=a,n},addElementPlacement:function(e,t,r){var a=t[e.placement];if(!r&&-1!==a.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");a.push(e.key)},decorateElement:function(e,t){for(var r=[],a=[],i=e.decorators,n=i.length-1;n>=0;n--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var o=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,i[n])(o)||o);e=l.element,this.addElementPlacement(e,t),l.finisher&&a.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:a,extras:r}},decorateConstructor:function(e,t){for(var r=[],a=t.length-1;a>=0;a--){var i=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[a])(i)||i);if(void 0!==n.finisher&&r.push(n.finisher),void 0!==n.elements){e=n.elements;for(var s=0;s<e.length-1;s++)for(var o=s+1;o<e.length;o++)if(e[s].key===e[o].key&&e[s].placement===e[o].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=c(e.key),a=String(e.placement);if("static"!==a&&"prototype"!==a&&"own"!==a)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+a+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:r,placement:a,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),r=l(e,"finisher"),a=this.toElementDescriptors(e.extras);return{element:t,finisher:r,extras:a}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=l(e,"finisher"),a=this.toElementDescriptors(e.elements);return{elements:a,finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var a=(0,t[r])(e);if(void 0!==a){if("function"!=typeof a)throw new TypeError("Finishers must return a constructor.");e=a}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(a)for(var p=0;p<a.length;p++)d=a[p](d);var h=t(function(e){d.initializeInstanceElements(e,u.elements)},r),u=d.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===l.key&&e.placement===l.placement},a=0;a<e.length;a++){var i,l=e[a];if("method"===l.kind&&(i=t.find(r)))if(o(l.descriptor)||o(i.descriptor)){if(s(l)||s(i))throw new ReferenceError("Duplicated methods ("+l.key+") can't be decorated.");i.descriptor=l.descriptor}else{if(s(l)){if(s(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+l.key+").");i.decorators=l.decorators}n(l,i)}else t.push(l)}return t}(h.d.map(i)),e);return d.initializeClassElements(h.F,u.elements),d.runClassFinishers(h.F,u.finishers)}(null,function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[Object(a.f)()],key:"header",value:void 0},{kind:"get",static:!0,key:"styles",value:function(){return a.c`
      :host {
        background: var(
          --ha-card-background,
          var(--paper-card-background-color, white)
        );
        border-radius: var(--ha-card-border-radius, 2px);
        box-shadow: var(
          --ha-card-box-shadow,
          0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 1px 5px 0 rgba(0, 0, 0, 0.12),
          0 3px 1px -2px rgba(0, 0, 0, 0.2)
        );
        color: var(--primary-text-color);
        display: block;
        transition: all 0.3s ease-out;
        position: relative;
      }

      .card-header,
      :host ::slotted(.card-header) {
        color: var(--ha-card-header-color, --primary-text-color);
        font-family: var(--ha-card-header-font-family, inherit);
        font-size: var(--ha-card-header-font-size, 24px);
        letter-spacing: -0.012em;
        line-height: 32px;
        padding: 24px 16px 16px;
        display: block;
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
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
      }
    `}},{kind:"method",key:"render",value:function(){return a.e`
      ${this.header?a.e`
            <div class="card-header">${this.header}</div>
          `:a.e``}
      <slot></slot>
    `}}]}},a.a);customElements.define("ha-card",d)},176:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var a=r(8),i=r(13);const n=Object(a.a)(e=>(class extends e{fire(e,t,r){return r=r||{},Object(i.a)(r.node||this,e,t,r)}}))},775:function(e,t,r){"use strict";r.r(t);r(203),r(217),r(147),r(141),r(150),r(140);var a=r(4),i=r(30),n=r(386),s=r.n(n),o=r(517),l=r.n(o),c=(r(125),r(174),r(92),r(235)),d=r(684),p=r(176);d.a.setLocalizer(d.a.momentLocalizer(s.a));const h="month";customElements.define("ha-big-calendar",class extends(Object(p.a)(i.a)){static get template(){return a.a`
      <link
        rel="stylesheet"
        href="/static/panels/calendar/react-big-calendar.css"
      />
      <style>
        div#root {
          height: 100%;
          width: 100%;
        }
      </style>
      <div id="root"></div>
    `}static get properties(){return{events:{type:Array,observer:"_update"}}}_update(e){const t=d.a.Views.values,r=c.default.createElement(d.a,{events:e,views:t,popup:!0,onNavigate:(e,t)=>this.fire("navigate",{date:e,viewName:t}),onView:e=>this.fire("view-changed",{viewName:e}),eventPropGetter:this._setEventStyle,defaultView:h,defaultDate:new Date});Object(c.render)(r,this.$.root)}_setEventStyle(e){const t={};return e.color&&(t.backgroundColor=e.color),{style:t}}});var u=r(172);const f="month";customElements.define("ha-panel-calendar",class extends(Object(u.a)(i.a)){static get template(){return a.a`
      <style include="iron-flex ha-style">
        .content {
          padding: 16px;
          @apply --layout-horizontal;
        }

        ha-big-calendar {
          min-height: 500px;
          min-width: 100%;
        }

        #calendars {
          padding-right: 16px;
          width: 15%;
          min-width: 170px;
        }

        paper-item {
          cursor: pointer;
        }

        div.all_calendars {
          ￼height: 20px;
          ￼text-align: center;
        }

        .iron-selected {
          background-color: #e5e5e5;
          font-weight: normal;
        }

        :host([narrow]) .content {
          flex-direction: column;
        }
        :host([narrow]) #calendars {
          margin-bottom: 24px;
          width: 100%;
        }
      </style>

      <app-header-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-menu-button
              hass="[[hass]]"
              narrow="[[narrow]]"
            ></ha-menu-button>
            <div main-title>[[localize('panel.calendar')]]</div>
          </app-toolbar>
        </app-header>

        <div class="flex content">
          <div id="calendars" class="layout vertical wrap">
            <ha-card header="Calendars">
              <paper-listbox
                id="calendar_list"
                multi
                on-selected-items-changed="_fetchData"
                selected-values="{{selectedCalendars}}"
                attr-for-selected="item-name"
              >
                <template is="dom-repeat" items="[[calendars]]">
                  <paper-item item-name="[[item.entity_id]]">
                    <span
                      class="calendar_color"
                      style$="background-color: [[item.color]]"
                    ></span>
                    <span class="calendar_color_spacer"></span> [[item.name]]
                  </paper-item>
                </template>
              </paper-listbox>
            </ha-card>
          </div>
          <div class="flex layout horizontal wrap">
            <ha-big-calendar
              default-date="[[currentDate]]"
              default-view="[[currentView]]"
              on-navigate="_handleNavigate"
              on-view="_handleViewChanged"
              events="[[events]]"
            >
            </ha-big-calendar>
          </div>
        </div>
      </app-header-layout>
    `}static get properties(){return{hass:Object,currentView:{type:String,value:f},currentDate:{type:Object,value:new Date},events:{type:Array,value:[]},calendars:{type:Array,value:[]},selectedCalendars:{type:Array,value:[]},narrow:{type:Boolean,reflectToAttribute:!0}}}connectedCallback(){super.connectedCallback(),this._fetchCalendars()}_fetchCalendars(){this.hass.callApi("get","calendars").then(e=>{this.calendars=e,this.selectedCalendars=e.map(e=>e.entity_id)})}_fetchData(){const e=l.a.firstVisibleDay(this.currentDate).toISOString(),t=l.a.lastVisibleDay(this.currentDate).toISOString(),r=encodeURI(`?start=${e}&end=${t}`),a=this.selectedCalendars.map(e=>this.hass.callApi("get",`calendars/${e}${r}`));Promise.all(a).then(e=>{const t=[];e.forEach(e=>{e.forEach(e=>{e.start=new Date(e.start),e.end?e.end=new Date(e.end):e.end=null,t.push(e)})}),this.events=t})}_getDateRange(){let e,t;return"day"===this.currentView?(e=s()(this.currentDate).startOf("day"),t=s()(this.currentDate).startOf("day")):"week"===this.currentView?(e=s()(this.currentDate).startOf("isoWeek"),t=s()(this.currentDate).endOf("isoWeek")):"month"===this.currentView?(e=s()(this.currentDate).startOf("month").subtract(7,"days"),t=s()(this.currentDate).endOf("month").add(7,"days")):"agenda"===this.currentView&&(e=s()(this.currentDate).startOf("day"),t=s()(this.currentDate).endOf("day").add(1,"month")),[e.toISOString(),t.toISOString()]}_handleViewChanged(e){this.currentView=e.detail.viewName,this._fetchData()}_handleNavigate(e){this.currentDate=e.detail.date,this.currentView=e.detail.viewName,this._fetchData()}})}}]);
//# sourceMappingURL=chunk.b5e77a0f84276ee0c4b6.js.map