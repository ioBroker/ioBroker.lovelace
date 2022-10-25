"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[12120],{72436:(t,e,n)=>{n.d(e,{Z:()=>v});n(15182);var i=n(39060),s=n(87480),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,s.__extends)(e,t),e.prototype.render=function(){var t=this.props,e=t.dayDate,n=t.todayRange,a=this.context,o=a.theme,l=a.dateEnv,d=a.options,h=a.viewApi,c=(0,i.iCZ)(e,n),u=d.listDayFormat?l.format(e,d.listDayFormat):"",g=d.listDaySideFormat?l.format(e,d.listDaySideFormat):"",p=d.navLinks?(0,i.Euv)(e):null,f=(0,s.__assign)({date:l.toDate(e),view:h,text:u,sideText:g,navLinkData:p},c),v=["fc-list-day"].concat((0,i.yLW)(c,o));return(0,i.azq)(i.QJ3,{hookProps:f,classNames:d.dayHeaderClassNames,content:d.dayHeaderContent,defaultContent:r,didMount:d.dayHeaderDidMount,willUnmount:d.dayHeaderWillUnmount},(function(t,n,s,a){return(0,i.azq)("tr",{ref:t,className:v.concat(n).join(" "),"data-date":(0,i.SVl)(e)},(0,i.azq)("th",{colSpan:3},(0,i.azq)("div",{className:"fc-list-day-cushion "+o.getClass("tableCellShaded"),ref:s},a)))}))},e}(i.H6J);function r(t){var e=t.navLinkData?{"data-navlink":t.navLinkData,tabIndex:0}:{};return(0,i.azq)(i.HYg,null,t.text&&(0,i.azq)("a",(0,s.__assign)({className:"fc-list-day-text"},e),t.text),t.sideText&&(0,i.azq)("a",(0,s.__assign)({className:"fc-list-day-side-text"},e),t.sideText))}var o=(0,i.SPZ)({hour:"numeric",minute:"2-digit",meridiem:"short"}),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,s.__extends)(e,t),e.prototype.render=function(){var t=this.props,e=this.context,n=t.seg,s=e.options.eventTimeFormat||o;return(0,i.azq)(i.Vsx,{seg:n,timeText:"",disableDragging:!0,disableResizing:!0,defaultContent:d,isPast:t.isPast,isFuture:t.isFuture,isToday:t.isToday,isSelected:t.isSelected,isDragging:t.isDragging,isResizing:t.isResizing,isDateSelecting:t.isDateSelecting},(function(t,a,r,o,l){return(0,i.azq)("tr",{className:["fc-list-event",l.event.url?"fc-event-forced-url":""].concat(a).join(" "),ref:t},function(t,e,n){var s=n.options;if(!1!==s.displayEventTime){var a=t.eventRange.def,r=t.eventRange.instance,o=!1,l=void 0;if(a.allDay?o=!0:(0,i.p7j)(t.eventRange.range)?t.isStart?l=(0,i.r39)(t,e,n,null,null,r.range.start,t.end):t.isEnd?l=(0,i.r39)(t,e,n,null,null,t.start,r.range.end):o=!0:l=(0,i.r39)(t,e,n),o){var d={text:n.options.allDayText,view:n.viewApi};return(0,i.azq)(i.QJ3,{hookProps:d,classNames:s.allDayClassNames,content:s.allDayContent,defaultContent:h,didMount:s.allDayDidMount,willUnmount:s.allDayWillUnmount},(function(t,e,n,s){return(0,i.azq)("td",{className:["fc-list-event-time"].concat(e).join(" "),ref:t},s)}))}return(0,i.azq)("td",{className:"fc-list-event-time"},l)}return null}(n,s,e),(0,i.azq)("td",{className:"fc-list-event-graphic"},(0,i.azq)("span",{className:"fc-list-event-dot",style:{borderColor:l.borderColor||l.backgroundColor}})),(0,i.azq)("td",{className:"fc-list-event-title",ref:r},o))}))},e}(i.H6J);function d(t){var e=t.event,n=e.url,a=n?{href:n}:{};return(0,i.azq)("a",(0,s.__assign)({},a),e.title)}function h(t){return t.text}var c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.computeDateVars=(0,i.HPs)(g),e.eventStoreToSegs=(0,i.HPs)(e._eventStoreToSegs),e.setRootEl=function(t){t?e.context.registerInteractiveComponent(e,{el:t}):e.context.unregisterInteractiveComponent(e)},e}return(0,s.__extends)(e,t),e.prototype.render=function(){var t=this,e=this.props,n=this.context,s=["fc-list",n.theme.getClass("table"),!1!==n.options.stickyHeaderDates?"fc-list-sticky":""],a=this.computeDateVars(e.dateProfile),r=a.dayDates,o=a.dayRanges,l=this.eventStoreToSegs(e.eventStore,e.eventUiBases,o);return(0,i.azq)(i.xS$,{viewSpec:n.viewSpec,elRef:this.setRootEl},(function(n,a){return(0,i.azq)("div",{ref:n,className:s.concat(a).join(" ")},(0,i.azq)(i.Ttm,{liquid:!e.isHeightAuto,overflowX:e.isHeightAuto?"visible":"hidden",overflowY:e.isHeightAuto?"visible":"auto"},l.length>0?t.renderSegList(l,r):t.renderEmptyMessage()))}))},e.prototype.renderEmptyMessage=function(){var t=this.context,e=t.options,n=t.viewApi,s={text:e.noEventsText,view:n};return(0,i.azq)(i.QJ3,{hookProps:s,classNames:e.noEventsClassNames,content:e.noEventsContent,defaultContent:u,didMount:e.noEventsDidMount,willUnmount:e.noEventsWillUnmount},(function(t,e,n,s){return(0,i.azq)("div",{className:["fc-list-empty"].concat(e).join(" "),ref:t},(0,i.azq)("div",{className:"fc-list-empty-cushion",ref:n},s))}))},e.prototype.renderSegList=function(t,e){var n=this.context,r=n.theme,o=n.options,d=function(t){var e,n,i=[];for(e=0;e<t.length;e+=1)(i[(n=t[e]).dayIndex]||(i[n.dayIndex]=[])).push(n);return i}(t);return(0,i.azq)(i.wh8,{unit:"day"},(function(t,n){for(var h=[],c=0;c<d.length;c+=1){var u=d[c];if(u){var g=e[c].toISOString();h.push((0,i.azq)(a,{key:g,dayDate:e[c],todayRange:n}));for(var p=0,f=u=(0,i.hak)(u,o.eventOrder);p<f.length;p++){var v=f[p];h.push((0,i.azq)(l,(0,s.__assign)({key:g+":"+v.eventRange.instance.instanceId,seg:v,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:!1},(0,i.jHR)(v,n,t))))}}}return(0,i.azq)("table",{className:"fc-list-table "+r.getClass("table")},(0,i.azq)("tbody",null,h))}))},e.prototype._eventStoreToSegs=function(t,e,n){return this.eventRangesToSegs((0,i.y$4)(t,e,this.props.dateProfile.activeRange,this.context.options.nextDayThreshold).fg,n)},e.prototype.eventRangesToSegs=function(t,e){for(var n=[],i=0,s=t;i<s.length;i++){var a=s[i];n.push.apply(n,this.eventRangeToSegs(a,e))}return n},e.prototype.eventRangeToSegs=function(t,e){var n,s,a,r=this.context.dateEnv,o=this.context.options.nextDayThreshold,l=t.range,d=t.def.allDay,h=[];for(n=0;n<e.length;n+=1)if((s=(0,i.cMs)(l,e[n]))&&(a={component:this,eventRange:t,start:s.start,end:s.end,isStart:t.isStart&&s.start.valueOf()===l.start.valueOf(),isEnd:t.isEnd&&s.end.valueOf()===l.end.valueOf(),dayIndex:n},h.push(a),!a.isEnd&&!d&&n+1<e.length&&l.end<r.add(e[n+1].start,o))){a.end=l.end,a.isEnd=!0;break}return h},e}(i.IdW);function u(t){return t.text}function g(t){for(var e=(0,i.b7Q)(t.renderRange.start),n=t.renderRange.end,s=[],a=[];e<n;)s.push(e),a.push({start:e,end:(0,i.E4D)(e,1)}),e=(0,i.E4D)(e,1);return{dayDates:s,dayRanges:a}}var p={listDayFormat:f,listDaySideFormat:f,noEventsClassNames:i.yRu,noEventsContent:i.yRu,noEventsDidMount:i.yRu,noEventsWillUnmount:i.yRu};function f(t){return!1===t?null:(0,i.SPZ)(t)}const v=(0,i.rxu)({optionRefiners:p,views:{list:{component:c,buttonTextKey:"list",listDayFormat:{month:"long",day:"numeric",year:"numeric"}},listDay:{type:"list",duration:{days:1},listDayFormat:{weekday:"long"}},listWeek:{type:"list",duration:{weeks:1},listDayFormat:{weekday:"long"},listDaySideFormat:{month:"long",day:"numeric",year:"numeric"}},listMonth:{type:"list",duration:{month:1},listDaySideFormat:{weekday:"long"}},listYear:{type:"list",duration:{year:1},listDaySideFormat:{weekday:"long"}}}})},38034:(t,e,n)=>{var i=n(87480),s=n(37500),a=n(33310);class r extends s.oi{constructor(){super(),this.min=0,this.max=100,this.step=1,this.startAngle=135,this.arcLength=270,this.handleSize=6,this.handleZoom=1.5,this.readonly=!1,this.disabled=!1,this.dragging=!1,this.rtl=!1,this._scale=1,this.dragEnd=this.dragEnd.bind(this),this.drag=this.drag.bind(this),this._keyStep=this._keyStep.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("mouseup",this.dragEnd),document.addEventListener("touchend",this.dragEnd,{passive:!1}),document.addEventListener("mousemove",this.drag),document.addEventListener("touchmove",this.drag,{passive:!1}),document.addEventListener("keydown",this._keyStep)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mouseup",this.dragEnd),document.removeEventListener("touchend",this.dragEnd),document.removeEventListener("mousemove",this.drag),document.removeEventListener("touchmove",this.drag),document.removeEventListener("keydown",this._keyStep)}get _start(){return this.startAngle*Math.PI/180}get _len(){return Math.min(this.arcLength*Math.PI/180,2*Math.PI-.01)}get _end(){return this._start+this._len}get _showHandle(){return!this.readonly&&(null!=this.value||null!=this.high&&null!=this.low)}_angleInside(t){let e=(this.startAngle+this.arcLength/2-t+180+360)%360-180;return e<this.arcLength/2&&e>-this.arcLength/2}_angle2xy(t){return this.rtl?{x:-Math.cos(t),y:Math.sin(t)}:{x:Math.cos(t),y:Math.sin(t)}}_xy2angle(t,e){return this.rtl&&(t=-t),(Math.atan2(e,t)-this._start+2*Math.PI)%(2*Math.PI)}_value2angle(t){const e=((t=Math.min(this.max,Math.max(this.min,t)))-this.min)/(this.max-this.min);return this._start+e*this._len}_angle2value(t){return Math.round((t/this._len*(this.max-this.min)+this.min)/this.step)*this.step}get _boundaries(){const t=this._angle2xy(this._start),e=this._angle2xy(this._end);let n=1;this._angleInside(270)||(n=Math.max(-t.y,-e.y));let i=1;this._angleInside(90)||(i=Math.max(t.y,e.y));let s=1;this._angleInside(180)||(s=Math.max(-t.x,-e.x));let a=1;return this._angleInside(0)||(a=Math.max(t.x,e.x)),{up:n,down:i,left:s,right:a,height:n+i,width:s+a}}_mouse2value(t){const e=t.type.startsWith("touch")?t.touches[0].clientX:t.clientX,n=t.type.startsWith("touch")?t.touches[0].clientY:t.clientY,i=this.shadowRoot.querySelector("svg").getBoundingClientRect(),s=this._boundaries,a=e-(i.left+s.left*i.width/s.width),r=n-(i.top+s.up*i.height/s.height),o=this._xy2angle(a,r);return this._angle2value(o)}dragStart(t){if(!this._showHandle||this.disabled)return;let e,n=t.target;if(this._rotation&&"focus"!==this._rotation.type)return;if(n.classList.contains("shadowpath"))if("touchstart"===t.type&&(e=window.setTimeout((()=>{this._rotation&&(this._rotation.cooldown=void 0)}),200)),null==this.low)n=this.shadowRoot.querySelector("#value");else{const e=this._mouse2value(t);n=Math.abs(e-this.low)<Math.abs(e-this.high)?this.shadowRoot.querySelector("#low"):this.shadowRoot.querySelector("#high")}if(n.classList.contains("overflow")&&(n=n.nextElementSibling),!n.classList.contains("handle"))return;n.setAttribute("stroke-width",String(2*this.handleSize*this.handleZoom*this._scale));const i="high"===n.id?this.low:this.min,s="low"===n.id?this.high:this.max;this._rotation={handle:n,min:i,max:s,start:this[n.id],type:t.type,cooldown:e},this.dragging=!0}_cleanupRotation(){const t=this._rotation.handle;t.setAttribute("stroke-width",String(2*this.handleSize*this._scale)),this._rotation=void 0,this.dragging=!1,t.blur()}dragEnd(t){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;const e=this._rotation.handle;this._cleanupRotation();let n=new CustomEvent("value-changed",{detail:{[e.id]:this[e.id]},bubbles:!0,composed:!0});this.dispatchEvent(n),this.low&&this.low>=.99*this.max?this._reverseOrder=!0:this._reverseOrder=!1}drag(t){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;if(this._rotation.cooldown)return window.clearTimeout(this._rotation.cooldown),void this._cleanupRotation();if("focus"===this._rotation.type)return;t.preventDefault();const e=this._mouse2value(t);this._dragpos(e)}_dragpos(t){if(t<this._rotation.min||t>this._rotation.max)return;const e=this._rotation.handle;this[e.id]=t;let n=new CustomEvent("value-changing",{detail:{[e.id]:t},bubbles:!0,composed:!0});this.dispatchEvent(n)}_keyStep(t){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;const e=this._rotation.handle;"ArrowLeft"!==t.key&&"ArrowDown"!==t.key||(t.preventDefault(),this.rtl?this._dragpos(this[e.id]+this.step):this._dragpos(this[e.id]-this.step)),"ArrowRight"!==t.key&&"ArrowUp"!==t.key||(t.preventDefault(),this.rtl?this._dragpos(this[e.id]-this.step):this._dragpos(this[e.id]+this.step)),"Home"===t.key&&(t.preventDefault(),this._dragpos(this.min)),"End"===t.key&&(t.preventDefault(),this._dragpos(this.max))}updated(t){if(this.shadowRoot.querySelector(".slider")){const t=window.getComputedStyle(this.shadowRoot.querySelector(".slider"));if(t&&t.strokeWidth){const e=parseFloat(t.strokeWidth);if(e>this.handleSize*this.handleZoom){const t=this._boundaries,n=`\n          ${e/2*Math.abs(t.up)}px\n          ${e/2*Math.abs(t.right)}px\n          ${e/2*Math.abs(t.down)}px\n          ${e/2*Math.abs(t.left)}px`;this.shadowRoot.querySelector("svg").style.margin=n}}}if(this.shadowRoot.querySelector("svg")&&void 0===this.shadowRoot.querySelector("svg").style.vectorEffect){t.has("_scale")&&1!=this._scale&&this.shadowRoot.querySelector("svg").querySelectorAll("path").forEach((t=>{if(t.getAttribute("stroke-width"))return;const e=parseFloat(getComputedStyle(t).getPropertyValue("stroke-width"));t.style.strokeWidth=e*this._scale+"px"}));const e=this.shadowRoot.querySelector("svg").getBoundingClientRect(),n=Math.max(e.width,e.height);this._scale=2/n}}_renderArc(t,e){const n=e-t,i=this._angle2xy(t),s=this._angle2xy(e+.001);return`\n      M ${i.x} ${i.y}\n      A 1 1,\n        0,\n        ${n>Math.PI?"1":"0"} ${this.rtl?"0":"1"},\n        ${s.x} ${s.y}\n    `}_renderHandle(t){const e=this._value2angle(this[t]),n=this._angle2xy(e),i={value:this.valueLabel,low:this.lowLabel,high:this.highLabel}[t]||"";return s.YP`
      <g class="${t} handle">
        <path
          id=${t}
          class="overflow"
          d="
          M ${n.x} ${n.y}
          L ${n.x+.001} ${n.y+.001}
          "
          vector-effect="non-scaling-stroke"
          stroke="rgba(0,0,0,0)"
          stroke-width="${4*this.handleSize*this._scale}"
          />
        <path
          id=${t}
          class="handle"
          d="
          M ${n.x} ${n.y}
          L ${n.x+.001} ${n.y+.001}
          "
          vector-effect="non-scaling-stroke"
          stroke-width="${2*this.handleSize*this._scale}"
          tabindex="0"
          @focus=${this.dragStart}
          @blur=${this.dragEnd}
          role="slider"
          aria-valuemin=${this.min}
          aria-valuemax=${this.max}
          aria-valuenow=${this[t]}
          aria-disabled=${this.disabled}
          aria-label=${i||""}
          />
        </g>
      `}render(){const t=this._boundaries;return s.dy`
      <svg
        @mousedown=${this.dragStart}
        @touchstart=${this.dragStart}
        xmln="http://www.w3.org/2000/svg"
        viewBox="${-t.left} ${-t.up} ${t.width} ${t.height}"
        style="margin: ${this.handleSize*this.handleZoom}px;"
        ?disabled=${this.disabled}
        focusable="false"
      >
        <g class="slider">
          <path
            class="path"
            d=${this._renderArc(this._start,this._end)}
            vector-effect="non-scaling-stroke"
          />
          <path
            class="bar"
            vector-effect="non-scaling-stroke"
            d=${this._renderArc(this._value2angle(null!=this.low?this.low:this.min),this._value2angle(null!=this.high?this.high:this.value))}
          />
          <path
            class="shadowpath"
            d=${this._renderArc(this._start,this._end)}
            vector-effect="non-scaling-stroke"
            stroke="rgba(0,0,0,0)"
            stroke-width="${3*this.handleSize*this._scale}"
            stroke-linecap="butt"
          />
        </g>

        <g class="handles">
          ${this._showHandle?null!=this.low?this._reverseOrder?s.YP`${this._renderHandle("high")} ${this._renderHandle("low")}`:s.YP`${this._renderHandle("low")} ${this._renderHandle("high")}`:s.YP`${this._renderHandle("value")}`:""}
        </g>
      </svg>
    `}static get styles(){return s.iv`
      :host {
        display: inline-block;
        width: 100%;
      }
      svg {
        overflow: visible;
        display: block;
      }
      path {
        transition: stroke 1s ease-out, stroke-width 200ms ease-out;
      }
      .slider {
        fill: none;
        stroke-width: var(--round-slider-path-width, 3);
        stroke-linecap: var(--round-slider-linecap, round);
      }
      .path {
        stroke: var(--round-slider-path-color, lightgray);
      }
      .bar {
        stroke: var(--round-slider-bar-color, deepskyblue);
      }
      svg[disabled] .bar {
        stroke: var(--round-slider-disabled-bar-color, darkgray);
      }
      g.handles {
        stroke: var(
          --round-slider-handle-color,
          var(--round-slider-bar-color, deepskyblue)
        );
        stroke-linecap: round;
        cursor: var(--round-slider-handle-cursor, pointer);
      }
      g.low.handle {
        stroke: var(--round-slider-low-handle-color);
      }
      g.high.handle {
        stroke: var(--round-slider-high-handle-color);
      }
      svg[disabled] g.handles {
        stroke: var(--round-slider-disabled-bar-color, darkgray);
      }
      .handle:focus {
        outline: unset;
      }
    `}}(0,i.__decorate)([(0,a.Cb)({type:Number})],r.prototype,"value",void 0),(0,i.__decorate)([(0,a.Cb)({type:Number})],r.prototype,"high",void 0),(0,i.__decorate)([(0,a.Cb)({type:Number})],r.prototype,"low",void 0),(0,i.__decorate)([(0,a.Cb)({type:Number})],r.prototype,"min",void 0),(0,i.__decorate)([(0,a.Cb)({type:Number})],r.prototype,"max",void 0),(0,i.__decorate)([(0,a.Cb)({type:Number})],r.prototype,"step",void 0),(0,i.__decorate)([(0,a.Cb)({type:Number})],r.prototype,"startAngle",void 0),(0,i.__decorate)([(0,a.Cb)({type:Number})],r.prototype,"arcLength",void 0),(0,i.__decorate)([(0,a.Cb)({type:Number})],r.prototype,"handleSize",void 0),(0,i.__decorate)([(0,a.Cb)({type:Number})],r.prototype,"handleZoom",void 0),(0,i.__decorate)([(0,a.Cb)({type:Boolean})],r.prototype,"readonly",void 0),(0,i.__decorate)([(0,a.Cb)({type:Boolean})],r.prototype,"disabled",void 0),(0,i.__decorate)([(0,a.Cb)({type:Boolean,reflect:!0})],r.prototype,"dragging",void 0),(0,i.__decorate)([(0,a.Cb)({type:Boolean})],r.prototype,"rtl",void 0),(0,i.__decorate)([(0,a.Cb)()],r.prototype,"valueLabel",void 0),(0,i.__decorate)([(0,a.Cb)()],r.prototype,"lowLabel",void 0),(0,i.__decorate)([(0,a.Cb)()],r.prototype,"highLabel",void 0),(0,i.__decorate)([(0,a.SB)()],r.prototype,"_scale",void 0),customElements.define("round-slider",r)},15182:t=>{t.exports='\n:root {\n  --fc-list-event-dot-width: 10px;\n  --fc-list-event-hover-bg-color: #f5f5f5;\n}\n.fc-theme-standard .fc-list {\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd);\n  }\n.fc {\n\n  /* message when no events */\n\n}\n.fc .fc-list-empty {\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center; /* vertically aligns fc-list-empty-inner */\n  }\n.fc .fc-list-empty-cushion {\n    margin: 5em 0;\n  }\n.fc {\n\n  /* table within the scroller */\n  /* ---------------------------------------------------------------------------------------------------- */\n\n}\n.fc .fc-list-table {\n    width: 100%;\n    border-style: hidden; /* kill outer border on theme */\n  }\n.fc .fc-list-table tr > * {\n    border-left: 0;\n    border-right: 0;\n  }\n.fc .fc-list-sticky .fc-list-day > * { /* the cells */\n      position: sticky;\n      top: 0;\n      background: #fff;\n      background: var(--fc-page-bg-color, #fff); /* for when headers are styled to be transparent and sticky */\n    }\n.fc .fc-list-table th {\n    padding: 0; /* uses an inner-wrapper instead... */\n  }\n.fc .fc-list-table td,\n  .fc .fc-list-day-cushion {\n    padding: 8px 14px;\n  }\n.fc {\n\n\n  /* date heading rows */\n  /* ---------------------------------------------------------------------------------------------------- */\n\n}\n.fc .fc-list-day-cushion:after {\n  content: "";\n  clear: both;\n  display: table; /* clear floating */\n    }\n.fc-theme-standard .fc-list-day-cushion {\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n  }\n.fc-direction-ltr .fc-list-day-text,\n.fc-direction-rtl .fc-list-day-side-text {\n  float: left;\n}\n.fc-direction-ltr .fc-list-day-side-text,\n.fc-direction-rtl .fc-list-day-text {\n  float: right;\n}\n/* make the dot closer to the event title */\n.fc-direction-ltr .fc-list-table .fc-list-event-graphic { padding-right: 0 }\n.fc-direction-rtl .fc-list-table .fc-list-event-graphic { padding-left: 0 }\n.fc .fc-list-event.fc-event-forced-url {\n    cursor: pointer; /* whole row will seem clickable */\n  }\n.fc .fc-list-event:hover td {\n    background-color: #f5f5f5;\n    background-color: var(--fc-list-event-hover-bg-color, #f5f5f5);\n  }\n.fc {\n\n  /* shrink certain cols */\n\n}\n.fc .fc-list-event-graphic,\n  .fc .fc-list-event-time {\n    white-space: nowrap;\n    width: 1px;\n  }\n.fc .fc-list-event-dot {\n    display: inline-block;\n    box-sizing: content-box;\n    width: 0;\n    height: 0;\n    border: 5px solid #3788d8;\n    border: calc(var(--fc-list-event-dot-width, 10px) / 2) solid var(--fc-event-border-color, #3788d8);\n    border-radius: 5px;\n    border-radius: calc(var(--fc-list-event-dot-width, 10px) / 2);\n  }\n.fc {\n\n  /* reset <a> styling */\n\n}\n.fc .fc-list-event-title a {\n    color: inherit;\n    text-decoration: none;\n  }\n.fc {\n\n  /* underline link when hovering over any part of row */\n\n}\n.fc .fc-list-event.fc-event-forced-url:hover a {\n    text-decoration: underline;\n  }\n'}}]);
//# sourceMappingURL=9ab86c62.js.map