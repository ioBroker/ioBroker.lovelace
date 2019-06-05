(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{709:function(e,t,a){"use strict";a.r(t);a(181),a(201),a(140),a(136),a(167),a(144),a(135);var r=a(3),n=a(21),i=a(320),s=a.n(i),l=a(447),c=a.n(l),d=(a(117),a(88),a(217)),o=a(643),h=a(73);o.a.setLocalizer(o.a.momentLocalizer(s.a));const p="month";customElements.define("ha-big-calendar",class extends(Object(h.a)(n.a)){static get template(){return r.a`
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
    `}static get properties(){return{events:{type:Array,observer:"_update"}}}_update(e){const t=o.a.Views.values,a=d.default.createElement(o.a,{events:e,views:t,popup:!0,onNavigate:(e,t)=>this.fire("navigate",{date:e,viewName:t}),onView:e=>this.fire("view-changed",{viewName:e}),eventPropGetter:this._setEventStyle,defaultView:p,defaultDate:new Date});Object(d.render)(a,this.$.root)}_setEventStyle(e){const t={};return e.color&&(t.backgroundColor=e.color),{style:t}}});var u=a(110);const m="month";customElements.define("ha-panel-calendar",class extends(Object(u.a)(n.a)){static get template(){return r.a`
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
            <ha-menu-button></ha-menu-button>
            <div main-title>[[localize('panel.calendar')]]</div>
          </app-toolbar>
        </app-header>

        <div class="flex content">
          <div id="calendars" class="layout vertical wrap">
            <paper-card heading="Calendars">
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
            </paper-card>
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
    `}static get properties(){return{hass:Object,currentView:{type:String,value:m},currentDate:{type:Object,value:new Date},events:{type:Array,value:[]},calendars:{type:Array,value:[]},selectedCalendars:{type:Array,value:[]},narrow:{type:Boolean,reflectToAttribute:!0}}}connectedCallback(){super.connectedCallback(),this._fetchCalendars()}_fetchCalendars(){this.hass.callApi("get","calendars").then(e=>{this.calendars=e,this.selectedCalendars=e.map(e=>e.entity_id)})}_fetchData(){const e=c.a.firstVisibleDay(this.currentDate).toISOString(),t=c.a.lastVisibleDay(this.currentDate).toISOString(),a=encodeURI(`?start=${e}&end=${t}`),r=this.selectedCalendars.map(e=>this.hass.callApi("get",`calendars/${e}${a}`));Promise.all(r).then(e=>{const t=[];e.forEach(e=>{e.forEach(e=>{e.start=new Date(e.start),e.end?e.end=new Date(e.end):e.end=null,t.push(e)})}),this.events=t})}_getDateRange(){let e,t;return"day"===this.currentView?(e=s()(this.currentDate).startOf("day"),t=s()(this.currentDate).startOf("day")):"week"===this.currentView?(e=s()(this.currentDate).startOf("isoWeek"),t=s()(this.currentDate).endOf("isoWeek")):"month"===this.currentView?(e=s()(this.currentDate).startOf("month").subtract(7,"days"),t=s()(this.currentDate).endOf("month").add(7,"days")):"agenda"===this.currentView&&(e=s()(this.currentDate).startOf("day"),t=s()(this.currentDate).endOf("day").add(1,"month")),[e.toISOString(),t.toISOString()]}_handleViewChanged(e){this.currentView=e.detail.viewName,this._fetchData()}_handleNavigate(e){this.currentDate=e.detail.date,this.currentView=e.detail.viewName,this._fetchData()}})}}]);