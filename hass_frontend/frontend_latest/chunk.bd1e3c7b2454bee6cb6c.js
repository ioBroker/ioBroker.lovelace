(self.webpackJsonp=self.webpackJsonp||[]).push([[76],{118:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(9),n=a(18);const s=Object(r.a)(e=>(class extends e{fire(e,t,a){return a=a||{},Object(n.a)(a.node||this,e,t,a)}}))},175:function(e,t,a){"use strict";var r=a(9);t.a=Object(r.a)(e=>(class extends e{static get properties(){return{hass:Object,localize:{type:Function,computed:"__computeLocalize(hass.localize)"}}}__computeLocalize(e){return e}}))},177:function(e,t,a){"use strict";var r=a(4),n=a(0);class s extends n.a{static get styles(){return n.c`
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
    `}render(){return n.f`
      ${this.header?n.f`
            <div class="card-header">${this.header}</div>
          `:n.f``}
      <slot></slot>
    `}}Object(r.b)([Object(n.g)()],s.prototype,"header",void 0),customElements.define("ha-card",s)},741:function(e,t,a){"use strict";a.r(t);a(206),a(220),a(150),a(144),a(153),a(143);var r=a(3),n=a(30),s=a(342),i=a.n(s),c=a(477),d=a.n(c),o=(a(129),a(177),a(95),a(226)),l=a(664),h=a(118);l.a.setLocalizer(l.a.momentLocalizer(i.a));const p="month";customElements.define("ha-big-calendar",class extends(Object(h.a)(n.a)){static get template(){return r.a`
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
    `}static get properties(){return{events:{type:Array,observer:"_update"}}}_update(e){const t=l.a.Views.values,a=o.default.createElement(l.a,{events:e,views:t,popup:!0,onNavigate:(e,t)=>this.fire("navigate",{date:e,viewName:t}),onView:e=>this.fire("view-changed",{viewName:e}),eventPropGetter:this._setEventStyle,defaultView:p,defaultDate:new Date});Object(o.render)(a,this.$.root)}_setEventStyle(e){const t={};return e.color&&(t.backgroundColor=e.color),{style:t}}});var u=a(175);const m="month";customElements.define("ha-panel-calendar",class extends(Object(u.a)(n.a)){static get template(){return r.a`
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
    `}static get properties(){return{hass:Object,currentView:{type:String,value:m},currentDate:{type:Object,value:new Date},events:{type:Array,value:[]},calendars:{type:Array,value:[]},selectedCalendars:{type:Array,value:[]},narrow:{type:Boolean,reflectToAttribute:!0}}}connectedCallback(){super.connectedCallback(),this._fetchCalendars()}_fetchCalendars(){this.hass.callApi("get","calendars").then(e=>{this.calendars=e,this.selectedCalendars=e.map(e=>e.entity_id)})}_fetchData(){const e=d.a.firstVisibleDay(this.currentDate).toISOString(),t=d.a.lastVisibleDay(this.currentDate).toISOString(),a=encodeURI(`?start=${e}&end=${t}`),r=this.selectedCalendars.map(e=>this.hass.callApi("get",`calendars/${e}${a}`));Promise.all(r).then(e=>{const t=[];e.forEach(e=>{e.forEach(e=>{e.start=new Date(e.start),e.end?e.end=new Date(e.end):e.end=null,t.push(e)})}),this.events=t})}_getDateRange(){let e,t;return"day"===this.currentView?(e=i()(this.currentDate).startOf("day"),t=i()(this.currentDate).startOf("day")):"week"===this.currentView?(e=i()(this.currentDate).startOf("isoWeek"),t=i()(this.currentDate).endOf("isoWeek")):"month"===this.currentView?(e=i()(this.currentDate).startOf("month").subtract(7,"days"),t=i()(this.currentDate).endOf("month").add(7,"days")):"agenda"===this.currentView&&(e=i()(this.currentDate).startOf("day"),t=i()(this.currentDate).endOf("day").add(1,"month")),[e.toISOString(),t.toISOString()]}_handleViewChanged(e){this.currentView=e.detail.viewName,this._fetchData()}_handleNavigate(e){this.currentDate=e.detail.date,this.currentView=e.detail.viewName,this._fetchData()}})}}]);
//# sourceMappingURL=chunk.bd1e3c7b2454bee6cb6c.js.map