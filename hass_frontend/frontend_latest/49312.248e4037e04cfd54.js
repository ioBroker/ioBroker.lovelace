export const __webpack_ids__=["49312"];export const __webpack_modules__={50875:function(e,t,a){a.d(t,{Eu:()=>r,hZ:()=>d,o9:()=>o});var i=a(27486),n=a(11259);const s=["#4269d0","#f4bd4a","#ff725c","#6cc5b0","#a463f2","#ff8ab7","#9c6b4e","#97bbf5","#01ab63","#9498a0","#094bad","#c99000","#d84f3e","#49a28f","#048732","#d96895","#8043ce","#7599d1","#7a4c31","#74787f","#6989f4","#ffd444","#ff957c","#8fe9d3","#62cc71","#ffadda","#c884ff","#badeff","#bf8b6d","#b6bac2","#927acc","#97ee3f","#bf3947","#9f5b00","#f48758","#8caed6","#f2b94f","#eff26e","#e43872","#d9b100","#9d7a00","#698cff","#d9d9d9","#00d27e","#d06800","#009f82","#c49200","#cbe8ff","#fecddf","#c27eb6","#8cd2ce","#c4b8d9","#f883b0","#a49100","#f48800","#27d0df","#a04a9b"];function r(e){return s[e%s.length]}function d(e,t){const a=t.getPropertyValue(`--graph-color-${e+1}`)||r(e);return(0,n.Rq)(a)}const o=(0,i.Z)((e=>s.map(((t,a)=>d(a,e)))),((e,t)=>e[0].getPropertyValue("--graph-color-1")===t[0].getPropertyValue("--graph-color-1")))},20130:function(e,t,a){var i=a(44249),n=a(72621),s=a(39785),r=a(52876),d=a(15093),o=a(57243),l=a(5111);(0,i.Z)([(0,d.Mo)("ha-fab")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"method",key:"firstUpdated",value:function(e){(0,n.Z)(a,"firstUpdated",this,3)([e]),this.style.setProperty("--mdc-theme-secondary","var(--primary-color)")}},{kind:"field",static:!0,key:"styles",value:()=>[r.W,o.iv`:host .mdc-fab--extended .mdc-fab__icon{margin-inline-start:-8px;margin-inline-end:12px;direction:var(--direction)}:disabled{--mdc-theme-secondary:var(--disabled-text-color);pointer-events:none}`,"rtl"===l.E.document.dir?o.iv`:host .mdc-fab--extended .mdc-fab__icon{direction:rtl}`:o.iv``]}]}}),s._)},18377:function(e,t,a){a.a(e,(async function(e,i){try{a.r(t),a.d(t,{HuiCalendarCard:()=>g});var n=a(44249),s=a(72621),r=(a(9359),a(70104),a(57243)),d=a(15093),o=a(50875),l=a(82393),c=a(47194),h=a(22381),f=(a(54977),a(91106)),u=a(22289),v=a(69223),y=(a(62577),e([u]));u=(y.then?(await y)():y)[0];let g=(0,n.Z)([(0,d.Mo)("hui-calendar-card")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([a.e("46379"),a.e("24199"),a.e("27506"),a.e("27090"),a.e("3049"),a.e("76135")]).then(a.bind(a,61190)),document.createElement("hui-calendar-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,a){return{entities:(0,v.j)(e,2,t,a,["calendar"])}}},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_events",value:()=>[]},{kind:"field",decorators:[(0,d.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_calendars",value:()=>[]},{kind:"field",decorators:[(0,d.SB)()],key:"_eventDisplay",value:()=>"list-item"},{kind:"field",decorators:[(0,d.SB)()],key:"_narrow",value:()=>!1},{kind:"field",decorators:[(0,d.SB)()],key:"_error",value(){}},{kind:"field",key:"_startDate",value:void 0},{kind:"field",key:"_endDate",value:void 0},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"method",key:"setConfig",value:function(e){if(!e.entities?.length)throw new Error("Entities must be specified");if(!Array.isArray(e.entities))throw new Error("Entities need to be an array");this._calendars=e.entities.map(((e,t)=>({entity_id:e,backgroundColor:(0,o.Eu)(t)}))),this._config?.entities!==e.entities&&this._fetchCalendarEvents(),this._config={initial_view:"dayGridMonth",...e}}},{kind:"method",key:"getCardSize",value:function(){return this._config?.header?1:11}},{kind:"method",key:"connectedCallback",value:function(){(0,s.Z)(i,"connectedCallback",this,3)([]),this.updateComplete.then((()=>this._attachObserver()))}},{kind:"method",key:"disconnectedCallback",value:function(){(0,s.Z)(i,"disconnectedCallback",this,3)([]),this._resizeObserver&&this._resizeObserver.disconnect()}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass||!this._calendars.length)return r.Ld;return r.dy` <ha-card> <div class="header">${this._config.title}</div> <ha-full-calendar .narrow="${this._narrow}" .events="${this._events}" .hass="${this.hass}" .views="${["dayGridMonth","dayGridDay","listWeek"]}" .initialView="${this._config.initial_view}" .eventDisplay="${this._eventDisplay}" .error="${this._error}" @view-changed="${this._handleViewChanged}"></ha-full-calendar> </ha-card> `}},{kind:"method",key:"updated",value:function(e){if((0,s.Z)(i,"updated",this,3)([e]),!this._config||!this.hass)return;const t=e.get("hass"),a=e.get("_config");(!t||!a||e.has("hass")&&t.themes!==this.hass.themes||e.has("_config")&&a.theme!==this._config.theme)&&(0,l.R)(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"_handleViewChanged",value:function(e){this._eventDisplay="dayGridMonth"===e.detail.view?"list-item":"auto",this._startDate=e.detail.start,this._endDate=e.detail.end,this._fetchCalendarEvents()}},{kind:"method",key:"_fetchCalendarEvents",value:async function(){if(!this._startDate||!this._endDate)return;this._error=void 0;const e=await(0,f.GL)(this.hass,this._startDate,this._endDate,this._calendars);if(this._events=e.events,e.errors.length>0){const t=e.errors.map((e=>this.hass.states[e]?(0,c.C)(this.hass.states[e]):e)).join(", ");this._error=`${this.hass.localize("ui.components.calendar.event_retrieval_error")} ${t}`}}},{kind:"method",key:"_measureCard",value:function(){const e=this.shadowRoot.querySelector("ha-card");e&&(this._narrow=e.offsetWidth<870)}},{kind:"method",key:"_attachObserver",value:async function(){this._resizeObserver||(this._resizeObserver=new ResizeObserver((0,h.D)((()=>this._measureCard()),250,!1)));const e=this.shadowRoot.querySelector("ha-card");e&&this._resizeObserver.observe(e)}},{kind:"field",static:!0,key:"styles",value:()=>r.iv`ha-card{position:relative;padding:0 8px 8px;box-sizing:border-box;height:100%}.header{color:var(--ha-card-header-color,var(--primary-text-color));font-size:var(--ha-card-header-font-size, 24px);line-height:1.2;padding-top:16px;padding-left:8px;padding-inline-start:8px;direction:var(--direction)}ha-full-calendar{--calendar-height:400px}`}]}}),r.oi);i()}catch(e){i(e)}}))},95927:function(e,t,a){a.a(e,(async function(e,i){try{a.d(t,{Z:()=>d});var n=a(95559),s=a(35325),r=e([n,s]);[n,s]=r.then?(await r)():r;var d=(0,n.rx)({name:"@fullcalendar/daygrid",initialView:"dayGridMonth",views:{dayGrid:{component:s.Nt,dateProfileGeneratorClass:s.XK},dayGridDay:{type:"dayGrid",duration:{days:1}},dayGridWeek:{type:"dayGrid",duration:{weeks:1}},dayGridMonth:{type:"dayGrid",duration:{months:1},fixedWeekCount:!0},dayGridYear:{type:"dayGrid",duration:{years:1}}}});i()}catch(e){i(e)}}))},13711:function(e,t,a){a.a(e,(async function(e,i){try{a.d(t,{Z:()=>o});var n=a(95559),s=a(55885),r=a(66952),d=e([r,n,s]);[r,n,s]=d.then?(await d)():d;const l={listDayFormat:c,listDaySideFormat:c,noEventsClassNames:r.n,noEventsContent:r.n,noEventsDidMount:r.n,noEventsWillUnmount:r.n};function c(e){return!1===e?null:(0,r.x)(e)}var o=(0,n.rx)({name:"@fullcalendar/list",optionRefiners:l,views:{list:{component:s.B,buttonTextKey:"list",listDayFormat:{month:"long",day:"numeric",year:"numeric"}},listDay:{type:"list",duration:{days:1},listDayFormat:{weekday:"long"}},listWeek:{type:"list",duration:{weeks:1},listDayFormat:{weekday:"long"},listDaySideFormat:{month:"long",day:"numeric",year:"numeric"}},listMonth:{type:"list",duration:{month:1},listDaySideFormat:{weekday:"long"}},listYear:{type:"list",duration:{year:1},listDaySideFormat:{weekday:"long"}}}});i()}catch(h){i(h)}}))},55885:function(e,t,a){a.a(e,(async function(e,i){try{a.d(t,{B:()=>v});a(92745);var n=a(66952),s=a(65054),r=e([n]);n=(r.then?(await r)():r)[0];class d extends n.B{constructor(){super(...arguments),this.state={textId:(0,n.a5)()}}render(){let{theme:e,dateEnv:t,options:a,viewApi:i}=this.context,{cellId:r,dayDate:d,todayRange:l}=this.props,{textId:c}=this.state,h=(0,n.a_)(d,l),f=a.listDayFormat?t.format(d,a.listDayFormat):"",u=a.listDaySideFormat?t.format(d,a.listDaySideFormat):"",v=Object.assign({date:t.toDate(d),view:i,textId:c,text:f,sideText:u,navLinkAttrs:(0,n.b0)(this.context,d),sideNavLinkAttrs:(0,n.b0)(this.context,d,"day",!1)},h);return(0,s.az)(n.C,{elTag:"tr",elClasses:["fc-list-day",...(0,n.aZ)(h,e)],elAttrs:{"data-date":(0,n.bv)(d)},renderProps:v,generatorName:"dayHeaderContent",customGenerator:a.dayHeaderContent,defaultGenerator:o,classNameGenerator:a.dayHeaderClassNames,didMount:a.dayHeaderDidMount,willUnmount:a.dayHeaderWillUnmount},(t=>(0,s.az)("th",{scope:"colgroup",colSpan:3,id:r,"aria-labelledby":c},(0,s.az)(t,{elTag:"div",elClasses:["fc-list-day-cushion",e.getClass("tableCellShaded")]}))))}}function o(e){return(0,s.az)(s.HY,null,e.text&&(0,s.az)("a",Object.assign({id:e.textId,className:"fc-list-day-text"},e.navLinkAttrs),e.text),e.sideText&&(0,s.az)("a",Object.assign({"aria-hidden":!0,className:"fc-list-day-side-text"},e.sideNavLinkAttrs),e.sideText))}const l=(0,n.x)({hour:"numeric",minute:"2-digit",meridiem:"short"});class c extends n.B{render(){let{props:e,context:t}=this,{options:a}=t,{seg:i,timeHeaderId:r,eventHeaderId:d,dateHeaderId:o}=e,c=a.eventTimeFormat||l;return(0,s.az)(n.cn,Object.assign({},e,{elTag:"tr",elClasses:["fc-list-event",i.eventRange.def.url&&"fc-event-forced-url"],defaultGenerator:()=>h(i,t),seg:i,timeText:"",disableDragging:!0,disableResizing:!0}),((e,a)=>(0,s.az)(s.HY,null,f(i,c,t,r,o),(0,s.az)("td",{"aria-hidden":!0,className:"fc-list-event-graphic"},(0,s.az)("span",{className:"fc-list-event-dot",style:{borderColor:a.borderColor||a.backgroundColor}})),(0,s.az)(e,{elTag:"td",elClasses:["fc-list-event-title"],elAttrs:{headers:`${d} ${o}`}}))))}}function h(e,t){let a=(0,n.bU)(e,t);return(0,s.az)("a",Object.assign({},a),e.eventRange.def.title)}function f(e,t,a,i,r){let{options:d}=a;if(!1!==d.displayEventTime){let o,l=e.eventRange.def,c=e.eventRange.instance,h=!1;if(l.allDay?h=!0:(0,n.az)(e.eventRange.range)?e.isStart?o=(0,n.bQ)(e,t,a,null,null,c.range.start,e.end):e.isEnd?o=(0,n.bQ)(e,t,a,null,null,e.start,c.range.end):h=!0:o=(0,n.bQ)(e,t,a),h){let e={text:a.options.allDayText,view:a.viewApi};return(0,s.az)(n.C,{elTag:"td",elClasses:["fc-list-event-time"],elAttrs:{headers:`${i} ${r}`},renderProps:e,generatorName:"allDayContent",customGenerator:d.allDayContent,defaultGenerator:u,classNameGenerator:d.allDayClassNames,didMount:d.allDayDidMount,willUnmount:d.allDayWillUnmount})}return(0,s.az)("td",{className:"fc-list-event-time"},o)}return null}function u(e){return e.text}class v extends n.be{constructor(){super(...arguments),this.computeDateVars=(0,n.z)(g),this.eventStoreToSegs=(0,n.z)(this._eventStoreToSegs),this.state={timeHeaderId:(0,n.a5)(),eventHeaderId:(0,n.a5)(),dateHeaderIdRoot:(0,n.a5)()},this.setRootEl=e=>{e?this.context.registerInteractiveComponent(this,{el:e}):this.context.unregisterInteractiveComponent(this)}}render(){let{props:e,context:t}=this,{dayDates:a,dayRanges:i}=this.computeDateVars(e.dateProfile),r=this.eventStoreToSegs(e.eventStore,e.eventUiBases,i);return(0,s.az)(n.ct,{elRef:this.setRootEl,elClasses:["fc-list",t.theme.getClass("table"),!1!==t.options.stickyHeaderDates?"fc-list-sticky":""],viewSpec:t.viewSpec},(0,s.az)(n.cd,{liquid:!e.isHeightAuto,overflowX:e.isHeightAuto?"visible":"hidden",overflowY:e.isHeightAuto?"visible":"auto"},r.length>0?this.renderSegList(r,a):this.renderEmptyMessage()))}renderEmptyMessage(){let{options:e,viewApi:t}=this.context,a={text:e.noEventsText,view:t};return(0,s.az)(n.C,{elTag:"div",elClasses:["fc-list-empty"],renderProps:a,generatorName:"noEventsContent",customGenerator:e.noEventsContent,defaultGenerator:y,classNameGenerator:e.noEventsClassNames,didMount:e.noEventsDidMount,willUnmount:e.noEventsWillUnmount},(e=>(0,s.az)(e,{elTag:"div",elClasses:["fc-list-empty-cushion"]})))}renderSegList(e,t){let{theme:a,options:i}=this.context,{timeHeaderId:r,eventHeaderId:o,dateHeaderIdRoot:l}=this.state,h=p(e);return(0,s.az)(n.ch,{unit:"day"},((e,f)=>{let u=[];for(let a=0;a<h.length;a+=1){let v=h[a];if(v){let h=(0,n.bv)(t[a]),y=l+"-"+h;u.push((0,s.az)(d,{key:h,cellId:y,dayDate:t[a],todayRange:f})),v=(0,n.bR)(v,i.eventOrder);for(let t of v)u.push((0,s.az)(c,Object.assign({key:h+":"+t.eventRange.instance.instanceId,seg:t,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:!1,timeHeaderId:r,eventHeaderId:o,dateHeaderId:y},(0,n.bS)(t,f,e))))}}return(0,s.az)("table",{className:"fc-list-table "+a.getClass("table")},(0,s.az)("thead",null,(0,s.az)("tr",null,(0,s.az)("th",{scope:"col",id:r},i.timeHint),(0,s.az)("th",{scope:"col","aria-hidden":!0}),(0,s.az)("th",{scope:"col",id:o},i.eventHint))),(0,s.az)("tbody",null,u))}))}_eventStoreToSegs(e,t,a){return this.eventRangesToSegs((0,n.af)(e,t,this.props.dateProfile.activeRange,this.context.options.nextDayThreshold).fg,a)}eventRangesToSegs(e,t){let a=[];for(let i of e)a.push(...this.eventRangeToSegs(i,t));return a}eventRangeToSegs(e,t){let a,i,s,{dateEnv:r}=this.context,{nextDayThreshold:d}=this.context.options,o=e.range,l=e.def.allDay,c=[];for(a=0;a<t.length;a+=1)if(i=(0,n.o)(o,t[a]),i&&(s={component:this,eventRange:e,start:i.start,end:i.end,isStart:e.isStart&&i.start.valueOf()===o.start.valueOf(),isEnd:e.isEnd&&i.end.valueOf()===o.end.valueOf(),dayIndex:a},c.push(s),!s.isEnd&&!l&&a+1<t.length&&o.end<r.add(t[a+1].start,d))){s.end=o.end,s.isEnd=!0;break}return c}}function y(e){return e.text}function g(e){let t=(0,n.q)(e.renderRange.start),a=e.renderRange.end,i=[],s=[];for(;t<a;)i.push(t),s.push({start:t,end:(0,n.t)(t,1)}),t=(0,n.t)(t,1);return{dayDates:i,dayRanges:s}}function p(e){let t,a,i=[];for(t=0;t<e.length;t+=1)a=e[t],(i[a.dayIndex]||(i[a.dayIndex]=[])).push(a);return i}(0,n.cw)(':root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:"";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}'),i()}catch(m){i(m)}}))}};
//# sourceMappingURL=49312.248e4037e04cfd54.js.map