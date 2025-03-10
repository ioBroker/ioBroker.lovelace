"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["4279"],{46834:function(e,t,i){i.a(e,(async function(e,s){try{i.d(t,{Z:()=>a});var n=i(95559),o=i(68322),r=e([n,o]);[n,o]=r.then?(await r)():r;const l={allDaySlot:Boolean};var a=(0,n.rx)({name:"@fullcalendar/timegrid",initialView:"timeGridWeek",optionRefiners:l,views:{timeGrid:{component:o.AN,usesMinMaxTime:!0,allDaySlot:!0,slotDuration:"00:30:00",slotEventOverlap:!0},timeGridDay:{type:"timeGrid",duration:{days:1}},timeGridWeek:{type:"timeGrid",duration:{weeks:1}}}});s()}catch(l){s(l)}}))},68322:function(e,t,i){i.a(e,(async function(e,s){try{i.d(t,{AN:()=>Z});i(52247),i(71695),i(92745),i(61893),i(9359),i(70104),i(19423),i(47021);var n=i(66952),o=i(65054),r=i(35325),a=e([r,n]);[r,n]=a.then?(await a)():a;class d extends n.aY{getKeyInfo(){return{allDay:{},timed:{}}}getKeysForDateSpan(e){return e.allDay?["allDay"]:["timed"]}getKeysForEventDef(e){return e.allDay?(0,n.bP)(e)?["timed","allDay"]:["allDay"]:["timed"]}}const c=(0,n.x)({hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"short"});function f(e){let t=["fc-timegrid-slot","fc-timegrid-slot-label",e.isLabeled?"fc-scrollgrid-shrink":"fc-timegrid-slot-minor"];return(0,o.az)(n.V.Consumer,null,(i=>{if(!e.isLabeled)return(0,o.az)("td",{className:t.join(" "),"data-time":e.isoTimeStr});let{dateEnv:s,options:r,viewApi:a}=i,l=null==r.slotLabelFormat?c:Array.isArray(r.slotLabelFormat)?(0,n.x)(r.slotLabelFormat[0]):(0,n.x)(r.slotLabelFormat),d={level:0,time:e.time,date:s.toDate(e.date),view:a,text:s.format(e.date,l)};return(0,o.az)(n.C,{elTag:"td",elClasses:t,elAttrs:{"data-time":e.isoTimeStr},renderProps:d,generatorName:"slotLabelContent",customGenerator:r.slotLabelContent,defaultGenerator:h,classNameGenerator:r.slotLabelClassNames,didMount:r.slotLabelDidMount,willUnmount:r.slotLabelWillUnmount},(e=>(0,o.az)("div",{className:"fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"},(0,o.az)(e,{elTag:"div",elClasses:["fc-timegrid-slot-label-cushion","fc-scrollgrid-shrink-cushion"]}))))}))}function h(e){return e.text}class g extends n.B{render(){return this.props.slatMetas.map((e=>(0,o.az)("tr",{key:e.key},(0,o.az)(f,Object.assign({},e)))))}}const p=(0,n.x)({week:"short"}),u=5;class m extends n.be{constructor(){super(...arguments),this.allDaySplitter=new d,this.headerElRef=(0,o.Vf)(),this.rootElRef=(0,o.Vf)(),this.scrollerElRef=(0,o.Vf)(),this.state={slatCoords:null},this.handleScrollTopRequest=e=>{let t=this.scrollerElRef.current;t&&(t.scrollTop=e)},this.renderHeadAxis=(e,t="")=>{let{options:i}=this.context,{dateProfile:s}=this.props,r=s.renderRange,a=1===(0,n.bl)(r.start,r.end)?(0,n.b0)(this.context,r.start,"week"):{};return i.weekNumbers&&"day"===e?(0,o.az)(n.cq,{elTag:"th",elClasses:["fc-timegrid-axis","fc-scrollgrid-shrink"],elAttrs:{"aria-hidden":!0},date:r.start,defaultFormat:p},(e=>(0,o.az)("div",{className:["fc-timegrid-axis-frame","fc-scrollgrid-shrink-frame","fc-timegrid-axis-frame-liquid"].join(" "),style:{height:t}},(0,o.az)(e,{elTag:"a",elClasses:["fc-timegrid-axis-cushion","fc-scrollgrid-shrink-cushion","fc-scrollgrid-sync-inner"],elAttrs:a})))):(0,o.az)("th",{"aria-hidden":!0,className:"fc-timegrid-axis"},(0,o.az)("div",{className:"fc-timegrid-axis-frame",style:{height:t}}))},this.renderTableRowAxis=e=>{let{options:t,viewApi:i}=this.context,s={text:t.allDayText,view:i};return(0,o.az)(n.C,{elTag:"td",elClasses:["fc-timegrid-axis","fc-scrollgrid-shrink"],elAttrs:{"aria-hidden":!0},renderProps:s,generatorName:"allDayContent",customGenerator:t.allDayContent,defaultGenerator:v,classNameGenerator:t.allDayClassNames,didMount:t.allDayDidMount,willUnmount:t.allDayWillUnmount},(t=>(0,o.az)("div",{className:["fc-timegrid-axis-frame","fc-scrollgrid-shrink-frame",null==e?" fc-timegrid-axis-frame-liquid":""].join(" "),style:{height:e}},(0,o.az)(t,{elTag:"span",elClasses:["fc-timegrid-axis-cushion","fc-scrollgrid-shrink-cushion","fc-scrollgrid-sync-inner"]}))))},this.handleSlatCoords=e=>{this.setState({slatCoords:e})}}renderSimpleLayout(e,t,i){let{context:s,props:r}=this,a=[],l=(0,n.cc)(s.options);return e&&a.push({type:"header",key:"header",isSticky:l,chunk:{elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}}),t&&(a.push({type:"body",key:"all-day",chunk:{content:t}}),a.push({type:"body",key:"all-day-divider",outerContent:(0,o.az)("tr",{role:"presentation",className:"fc-scrollgrid-section"},(0,o.az)("td",{className:"fc-timegrid-divider "+s.theme.getClass("tableCellShaded")}))})),a.push({type:"body",key:"body",liquid:!0,expandRows:Boolean(s.options.expandRows),chunk:{scrollerElRef:this.scrollerElRef,content:i}}),(0,o.az)(n.ct,{elRef:this.rootElRef,elClasses:["fc-timegrid"],viewSpec:s.viewSpec},(0,o.az)(n.b$,{liquid:!r.isHeightAuto&&!r.forPrint,collapsibleWidth:r.forPrint,cols:[{width:"shrink"}],sections:a}))}renderHScrollLayout(e,t,i,s,r,a,l){let d=this.context.pluginHooks.scrollGridImpl;if(!d)throw new Error("No ScrollGrid implementation");let{context:c,props:f}=this,h=!f.forPrint&&(0,n.cc)(c.options),p=!f.forPrint&&(0,n.cb)(c.options),u=[];e&&u.push({type:"header",key:"header",isSticky:h,syncRowHeights:!0,chunks:[{key:"axis",rowContent:e=>(0,o.az)("tr",{role:"presentation"},this.renderHeadAxis("day",e.rowSyncHeights[0]))},{key:"cols",elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}]}),t&&(u.push({type:"body",key:"all-day",syncRowHeights:!0,chunks:[{key:"axis",rowContent:e=>(0,o.az)("tr",{role:"presentation"},this.renderTableRowAxis(e.rowSyncHeights[0]))},{key:"cols",content:t}]}),u.push({key:"all-day-divider",type:"body",outerContent:(0,o.az)("tr",{role:"presentation",className:"fc-scrollgrid-section"},(0,o.az)("td",{colSpan:2,className:"fc-timegrid-divider "+c.theme.getClass("tableCellShaded")}))}));let m=c.options.nowIndicator;return u.push({type:"body",key:"body",liquid:!0,expandRows:Boolean(c.options.expandRows),chunks:[{key:"axis",content:e=>(0,o.az)("div",{className:"fc-timegrid-axis-chunk"},(0,o.az)("table",{"aria-hidden":!0,style:{height:e.expandRows?e.clientHeight:""}},e.tableColGroupNode,(0,o.az)("tbody",null,(0,o.az)(g,{slatMetas:a}))),(0,o.az)("div",{className:"fc-timegrid-now-indicator-container"},(0,o.az)(n.ch,{unit:m?"minute":"day"},(e=>{let t=m&&l&&l.safeComputeTop(e);return"number"==typeof t?(0,o.az)(n.ck,{elClasses:["fc-timegrid-now-indicator-arrow"],elStyle:{top:t},isAxis:!0,date:e}):null}))))},{key:"cols",scrollerElRef:this.scrollerElRef,content:i}]}),p&&u.push({key:"footer",type:"footer",isSticky:!0,chunks:[{key:"axis",content:n.ca},{key:"cols",content:n.ca}]}),(0,o.az)(n.ct,{elRef:this.rootElRef,elClasses:["fc-timegrid"],viewSpec:c.viewSpec},(0,o.az)(d,{liquid:!f.isHeightAuto&&!f.forPrint,forPrint:f.forPrint,collapsibleWidth:!1,colGroups:[{width:"shrink",cols:[{width:"shrink"}]},{cols:[{span:s,minWidth:r}]}],sections:u}))}getAllDayMaxEventProps(){let{dayMaxEvents:e,dayMaxEventRows:t}=this.context.options;return!0!==e&&!0!==t||(e=void 0,t=u),{dayMaxEvents:e,dayMaxEventRows:t}}}function v(e){return e.text}class b{constructor(e,t,i){this.positions=e,this.dateProfile=t,this.slotDuration=i}safeComputeTop(e){let{dateProfile:t}=this;if((0,n.H)(t.currentRange,e)){let i=(0,n.q)(e),s=e.valueOf()-i.valueOf();if(s>=(0,n.bs)(t.slotMinTime)&&s<(0,n.bs)(t.slotMaxTime))return this.computeTimeTop((0,n.d)(s))}return null}computeDateTop(e,t){return t||(t=(0,n.q)(e)),this.computeTimeTop((0,n.d)(e.valueOf()-t.valueOf()))}computeTimeTop(e){let t,i,{positions:s,dateProfile:o}=this,r=s.els.length,a=(e.milliseconds-(0,n.bs)(o.slotMinTime))/(0,n.bs)(this.slotDuration);return a=Math.max(0,a),a=Math.min(r,a),t=Math.floor(a),t=Math.min(t,r-1),i=a-t,s.tops[t]+s.getHeight(t)*i}}class x extends n.B{render(){let{props:e,context:t}=this,{options:i}=t,{slatElRefs:s}=e;return(0,o.az)("tbody",null,e.slatMetas.map(((r,a)=>{let l={time:r.time,date:t.dateEnv.toDate(r.date),view:t.viewApi};return(0,o.az)("tr",{key:r.key,ref:s.createRef(r.key)},e.axis&&(0,o.az)(f,Object.assign({},r)),(0,o.az)(n.C,{elTag:"td",elClasses:["fc-timegrid-slot","fc-timegrid-slot-lane",!r.isLabeled&&"fc-timegrid-slot-minor"],elAttrs:{"data-time":r.isoTimeStr},renderProps:l,generatorName:"slotLaneContent",customGenerator:i.slotLaneContent,classNameGenerator:i.slotLaneClassNames,didMount:i.slotLaneDidMount,willUnmount:i.slotLaneWillUnmount}))})))}}class y extends n.B{constructor(){super(...arguments),this.rootElRef=(0,o.Vf)(),this.slatElRefs=new n.cf}render(){let{props:e,context:t}=this;return(0,o.az)("div",{ref:this.rootElRef,className:"fc-timegrid-slots"},(0,o.az)("table",{"aria-hidden":!0,className:t.theme.getClass("table"),style:{minWidth:e.tableMinWidth,width:e.clientWidth,height:e.minHeight}},e.tableColGroupNode,(0,o.az)(x,{slatElRefs:this.slatElRefs,axis:e.axis,slatMetas:e.slatMetas})))}componentDidMount(){this.updateSizing()}componentDidUpdate(){this.updateSizing()}componentWillUnmount(){this.props.onCoords&&this.props.onCoords(null)}updateSizing(){let{context:e,props:t}=this;if(t.onCoords&&null!==t.clientWidth){this.rootElRef.current.offsetHeight&&t.onCoords(new b(new n.ba(this.rootElRef.current,(i=this.slatElRefs.currentMap,t.slatMetas.map((e=>i[e.key]))),!1,!0),this.props.dateProfile,e.options.slotDuration))}var i}}function S(e,t){let i,s=[];for(i=0;i<t;i+=1)s.push([]);if(e)for(i=0;i<e.length;i+=1)s[e[i].col].push(e[i]);return s}function w(e,t){let i=[];if(e){for(let s=0;s<t;s+=1)i[s]={affectedInstances:e.affectedInstances,isEvent:e.isEvent,segs:[]};for(let t of e.segs)i[t.col].segs.push(t)}else for(let s=0;s<t;s+=1)i[s]=null;return i}class z extends n.B{render(){let{props:e}=this;return(0,o.az)(n.cr,{elClasses:["fc-timegrid-more-link"],elStyle:{top:e.top,bottom:e.bottom},allDayDate:null,moreCnt:e.hiddenSegs.length,allSegs:e.hiddenSegs,hiddenSegs:e.hiddenSegs,extraDateSpan:e.extraDateSpan,dateProfile:e.dateProfile,todayRange:e.todayRange,popoverContent:()=>L(e.hiddenSegs,e),defaultGenerator:C,forceTimed:!0},(e=>(0,o.az)(e,{elTag:"div",elClasses:["fc-timegrid-more-link-inner","fc-sticky"]})))}}function C(e){return e.shortText}function R(e,t,i){let s=new n.bA;null!=t&&(s.strictOrder=t),null!=i&&(s.maxStackCnt=i);let o=s.addSegs(e),r=(0,n.bE)(o),a=D(s);return a=P(a,1),{segRects:T(a),hiddenGroups:r}}function D(e){const{entriesByLevel:t}=e,i=H(((e,t)=>e+":"+t),((s,n)=>{let o=k(N(e,s,n),i),r=t[s][n];return[Object.assign(Object.assign({},r),{nextLevelNodes:o[0]}),r.thickness+o[1]]}));return k(t.length?{level:0,lateralStart:0,lateralEnd:t[0].length}:null,i)[0]}function k(e,t){if(!e)return[[],0];let{level:i,lateralStart:s,lateralEnd:n}=e,o=s,r=[];for(;o<n;)r.push(t(i,o)),o+=1;return r.sort(E),[r.map(M),r[0][1]]}function E(e,t){return t[1]-e[1]}function M(e){return e[0]}function N(e,t,i){let{levelCoords:s,entriesByLevel:o}=e,r=o[t][i],a=s[t]+r.thickness,l=s.length,d=t;for(;d<l&&s[d]<a;d+=1);for(;d<l;d+=1){let e,t=o[d],i=(0,n.bD)(t,r.span.start,n.bC),s=i[0]+i[1],a=s;for(;(e=t[a])&&e.span.start<r.span.end;)a+=1;if(s<a)return{level:d,lateralStart:s,lateralEnd:a}}return null}function P(e,t){const i=H(((e,t,i)=>(0,n.bB)(e)),((e,s,n)=>{let o,{nextLevelNodes:r,thickness:a}=e,l=a+n,d=a/l,c=[];if(r.length)for(let t of r)if(void 0===o){let e=i(t,s,l);o=e[0],c.push(e[1])}else{let e=i(t,o,0);c.push(e[1])}else o=t;let f=(o-s)*d;return[o-f,Object.assign(Object.assign({},e),{thickness:f,nextLevelNodes:c})]}));return e.map((e=>i(e,0,0)[1]))}function T(e){let t=[];const i=H(((e,t,i)=>(0,n.bB)(e)),((e,i,n)=>{let o=Object.assign(Object.assign({},e),{levelCoord:i,stackDepth:n,stackForward:0});return t.push(o),o.stackForward=s(e.nextLevelNodes,i+e.thickness,n+1)+1}));function s(e,t,s){let n=0;for(let o of e)n=Math.max(i(o,t,s),n);return n}return s(e,0,0),t}function H(e,t){const i={};return(...s)=>{let n=e(...s);return n in i?i[n]:i[n]=t(...s)}}function W(e,t,i=null,s=0){let n=[];if(i)for(let o=0;o<e.length;o+=1){let r=e[o],a=i.computeDateTop(r.start,t),l=Math.max(a+(s||0),i.computeDateTop(r.end,t));n.push({start:Math.round(a),end:Math.round(l)})}return n}function G(e,t,i,s){let n=[],o=[];for(let d=0;d<e.length;d+=1){let i=t[d];i?n.push({index:d,thickness:1,span:i}):o.push(e[d])}let{segRects:r,hiddenGroups:a}=R(n,i,s),l=[];for(let d of r)l.push({seg:e[d.index],rect:d});for(let d of o)l.push({seg:d,rect:null});return{segPlacements:l,hiddenGroups:a}}const O=(0,n.x)({hour:"numeric",minute:"2-digit",meridiem:!1});class A extends n.B{render(){return(0,o.az)(n.cj,Object.assign({},this.props,{elClasses:["fc-timegrid-event","fc-v-event",this.props.isShort&&"fc-timegrid-event-short"],defaultTimeFormat:O}))}}class I extends n.B{constructor(){super(...arguments),this.sortEventSegs=(0,n.z)(n.bR)}render(){let{props:e,context:t}=this,{options:i}=t,s=i.selectMirror,r=e.eventDrag&&e.eventDrag.segs||e.eventResize&&e.eventResize.segs||s&&e.dateSelectionSegs||[],a=e.eventDrag&&e.eventDrag.affectedInstances||e.eventResize&&e.eventResize.affectedInstances||{},l=this.sortEventSegs(e.fgEventSegs,i.eventOrder);return(0,o.az)(n.cl,{elTag:"td",elRef:e.elRef,elClasses:["fc-timegrid-col",...e.extraClassNames||[]],elAttrs:Object.assign({role:"gridcell"},e.extraDataAttrs),date:e.date,dateProfile:e.dateProfile,todayRange:e.todayRange,extraRenderProps:e.extraRenderProps},(t=>(0,o.az)("div",{className:"fc-timegrid-col-frame"},(0,o.az)("div",{className:"fc-timegrid-col-bg"},this.renderFillSegs(e.businessHourSegs,"non-business"),this.renderFillSegs(e.bgEventSegs,"bg-event"),this.renderFillSegs(e.dateSelectionSegs,"highlight")),(0,o.az)("div",{className:"fc-timegrid-col-events"},this.renderFgSegs(l,a,!1,!1,!1)),(0,o.az)("div",{className:"fc-timegrid-col-events"},this.renderFgSegs(r,{},Boolean(e.eventDrag),Boolean(e.eventResize),Boolean(s),"mirror")),(0,o.az)("div",{className:"fc-timegrid-now-indicator-container"},this.renderNowIndicator(e.nowIndicatorSegs)),(0,n.cm)(i)&&(0,o.az)(t,{elTag:"div",elClasses:["fc-timegrid-col-misc"]}))))}renderFgSegs(e,t,i,s,n,o){let{props:r}=this;return r.forPrint?L(e,r):this.renderPositionedFgSegs(e,t,i,s,n,o)}renderPositionedFgSegs(e,t,i,s,r,a){let{eventMaxStack:l,eventShortHeight:d,eventOrderStrict:c,eventMinHeight:f}=this.context.options,{date:h,slatCoords:g,eventSelection:p,todayRange:u,nowDate:m}=this.props,v=i||s||r,b=W(e,h,g,f),{segPlacements:x,hiddenGroups:y}=G(e,b,c,l);return(0,o.az)(o.HY,null,this.renderHiddenGroups(y,e),x.map((e=>{let{seg:l,rect:c}=e,f=l.eventRange.instance.instanceId,h=v||Boolean(!t[f]&&c),g=j(c&&c.span),b=!v&&c?this.computeSegHStyle(c):{left:0,right:0},x=Boolean(c)&&c.stackForward>0,y=Boolean(c)&&c.span.end-c.span.start<d;return(0,o.az)("div",{className:"fc-timegrid-event-harness"+(x?" fc-timegrid-event-harness-inset":""),key:a||f,style:Object.assign(Object.assign({visibility:h?"":"hidden"},g),b)},(0,o.az)(A,Object.assign({seg:l,isDragging:i,isResizing:s,isDateSelecting:r,isSelected:f===p,isShort:y},(0,n.bS)(l,u,m))))})))}renderHiddenGroups(e,t){let{extraDateSpan:i,dateProfile:s,todayRange:r,nowDate:a,eventSelection:l,eventDrag:d,eventResize:c}=this.props;return(0,o.az)(o.HY,null,e.map((e=>{let f=j(e.span),h=(g=e.entries,p=t,g.map((e=>p[e.index])));var g,p;return(0,o.az)(z,{key:(0,n.bw)((0,n.cs)(h)),hiddenSegs:h,top:f.top,bottom:f.bottom,extraDateSpan:i,dateProfile:s,todayRange:r,nowDate:a,eventSelection:l,eventDrag:d,eventResize:c})})))}renderFillSegs(e,t){let{props:i,context:s}=this,r=W(e,i.date,i.slatCoords,s.options.eventMinHeight).map(((s,r)=>{let a=e[r];return(0,o.az)("div",{key:(0,n.bT)(a.eventRange),className:"fc-timegrid-bg-harness",style:j(s)},"bg-event"===t?(0,o.az)(n.cp,Object.assign({seg:a},(0,n.bS)(a,i.todayRange,i.nowDate))):(0,n.co)(t))}));return(0,o.az)(o.HY,null,r)}renderNowIndicator(e){let{slatCoords:t,date:i}=this.props;return t?e.map(((e,s)=>(0,o.az)(n.ck,{key:s,elClasses:["fc-timegrid-now-indicator-line"],elStyle:{top:t.computeDateTop(e.start,i)},isAxis:!1,date:i}))):null}computeSegHStyle(e){let t,i,{isRtl:s,options:n}=this.context,o=n.slotEventOverlap,r=e.levelCoord,a=e.levelCoord+e.thickness;o&&(a=Math.min(1,r+2*(a-r))),s?(t=1-a,i=r):(t=r,i=1-a);let l={zIndex:e.stackDepth+1,left:100*t+"%",right:100*i+"%"};return o&&!e.stackForward&&(l[s?"marginLeft":"marginRight"]=20),l}}function L(e,{todayRange:t,nowDate:i,eventSelection:s,eventDrag:r,eventResize:a}){let l=(r?r.affectedInstances:null)||(a?a.affectedInstances:null)||{};return(0,o.az)(o.HY,null,e.map((e=>{let r=e.eventRange.instance.instanceId;return(0,o.az)("div",{key:r,style:{visibility:l[r]?"hidden":""}},(0,o.az)(A,Object.assign({seg:e,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:r===s,isShort:!1},(0,n.bS)(e,t,i))))})))}function j(e){return e?{top:e.start,bottom:-e.end}:{top:"",bottom:""}}class B extends n.B{constructor(){super(...arguments),this.splitFgEventSegs=(0,n.z)(S),this.splitBgEventSegs=(0,n.z)(S),this.splitBusinessHourSegs=(0,n.z)(S),this.splitNowIndicatorSegs=(0,n.z)(S),this.splitDateSelectionSegs=(0,n.z)(S),this.splitEventDrag=(0,n.z)(w),this.splitEventResize=(0,n.z)(w),this.rootElRef=(0,o.Vf)(),this.cellElRefs=new n.cf}render(){let{props:e,context:t}=this,i=t.options.nowIndicator&&e.slatCoords&&e.slatCoords.safeComputeTop(e.nowDate),s=e.cells.length,r=this.splitFgEventSegs(e.fgEventSegs,s),a=this.splitBgEventSegs(e.bgEventSegs,s),l=this.splitBusinessHourSegs(e.businessHourSegs,s),d=this.splitNowIndicatorSegs(e.nowIndicatorSegs,s),c=this.splitDateSelectionSegs(e.dateSelectionSegs,s),f=this.splitEventDrag(e.eventDrag,s),h=this.splitEventResize(e.eventResize,s);return(0,o.az)("div",{className:"fc-timegrid-cols",ref:this.rootElRef},(0,o.az)("table",{role:"presentation",style:{minWidth:e.tableMinWidth,width:e.clientWidth}},e.tableColGroupNode,(0,o.az)("tbody",{role:"presentation"},(0,o.az)("tr",{role:"row"},e.axis&&(0,o.az)("td",{"aria-hidden":!0,className:"fc-timegrid-col fc-timegrid-axis"},(0,o.az)("div",{className:"fc-timegrid-col-frame"},(0,o.az)("div",{className:"fc-timegrid-now-indicator-container"},"number"==typeof i&&(0,o.az)(n.ck,{elClasses:["fc-timegrid-now-indicator-arrow"],elStyle:{top:i},isAxis:!0,date:e.nowDate})))),e.cells.map(((t,i)=>(0,o.az)(I,{key:t.key,elRef:this.cellElRefs.createRef(t.key),dateProfile:e.dateProfile,date:t.date,nowDate:e.nowDate,todayRange:e.todayRange,extraRenderProps:t.extraRenderProps,extraDataAttrs:t.extraDataAttrs,extraClassNames:t.extraClassNames,extraDateSpan:t.extraDateSpan,fgEventSegs:r[i],bgEventSegs:a[i],businessHourSegs:l[i],nowIndicatorSegs:d[i],dateSelectionSegs:c[i],eventDrag:f[i],eventResize:h[i],slatCoords:e.slatCoords,eventSelection:e.eventSelection,forPrint:e.forPrint})))))))}componentDidMount(){this.updateCoords()}componentDidUpdate(){this.updateCoords()}updateCoords(){let{props:e}=this;var t;e.onColCoords&&null!==e.clientWidth&&e.onColCoords(new n.ba(this.rootElRef.current,(t=this.cellElRefs.currentMap,e.cells.map((e=>t[e.key]))),!0,!1))}}class F extends n.be{constructor(){super(...arguments),this.processSlotOptions=(0,n.z)(q),this.state={slatCoords:null},this.handleRootEl=e=>{e?this.context.registerInteractiveComponent(this,{el:e,isHitComboAllowed:this.props.isHitComboAllowed}):this.context.unregisterInteractiveComponent(this)},this.handleScrollRequest=e=>{let{onScrollTopRequest:t}=this.props,{slatCoords:i}=this.state;if(t&&i){if(e.time){let s=i.computeTimeTop(e.time);s=Math.ceil(s),s&&(s+=1),t(s)}return!0}return!1},this.handleColCoords=e=>{this.colCoords=e},this.handleSlatCoords=e=>{this.setState({slatCoords:e}),this.props.onSlatCoords&&this.props.onSlatCoords(e)}}render(){let{props:e,state:t}=this;return(0,o.az)("div",{className:"fc-timegrid-body",ref:this.handleRootEl,style:{width:e.clientWidth,minWidth:e.tableMinWidth}},(0,o.az)(y,{axis:e.axis,dateProfile:e.dateProfile,slatMetas:e.slatMetas,clientWidth:e.clientWidth,minHeight:e.expandRows?e.clientHeight:"",tableMinWidth:e.tableMinWidth,tableColGroupNode:e.axis?e.tableColGroupNode:null,onCoords:this.handleSlatCoords}),(0,o.az)(B,{cells:e.cells,axis:e.axis,dateProfile:e.dateProfile,businessHourSegs:e.businessHourSegs,bgEventSegs:e.bgEventSegs,fgEventSegs:e.fgEventSegs,dateSelectionSegs:e.dateSelectionSegs,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,todayRange:e.todayRange,nowDate:e.nowDate,nowIndicatorSegs:e.nowIndicatorSegs,clientWidth:e.clientWidth,tableMinWidth:e.tableMinWidth,tableColGroupNode:e.tableColGroupNode,slatCoords:t.slatCoords,onColCoords:this.handleColCoords,forPrint:e.forPrint}))}componentDidMount(){this.scrollResponder=this.context.createScrollResponder(this.handleScrollRequest)}componentDidUpdate(e){this.scrollResponder.update(e.dateProfile!==this.props.dateProfile)}componentWillUnmount(){this.scrollResponder.detach()}queryHit(e,t){let{dateEnv:i,options:s}=this.context,{colCoords:o}=this,{dateProfile:r}=this.props,{slatCoords:a}=this.state,{snapDuration:l,snapsPerSlot:d}=this.processSlotOptions(this.props.slotDuration,s.snapDuration),c=o.leftToIndex(e),f=a.positions.topToIndex(t);if(null!=c&&null!=f){let e=this.props.cells[c],s=a.positions.tops[f],h=a.positions.getHeight(f),g=(t-s)/h,p=f*d+Math.floor(g*d),u=this.props.cells[c].date,m=(0,n.bp)(r.slotMinTime,(0,n.bo)(l,p)),v=i.add(u,m),b=i.add(v,l);return{dateProfile:r,dateSpan:Object.assign({range:{start:v,end:b},allDay:!1},e.extraDateSpan),dayEl:o.els[c],rect:{left:o.lefts[c],right:o.rights[c],top:s,bottom:s+h},layer:0}}return null}}function q(e,t){let i=t||e,s=(0,n.bt)(e,i);return null===s&&(i=e,s=1),{snapDuration:i,snapsPerSlot:s}}class U extends n.bW{sliceRange(e,t){let i=[];for(let s=0;s<t.length;s+=1){let o=(0,n.o)(e,t[s]);o&&i.push({start:o.start,end:o.end,isStart:o.start.valueOf()===e.start.valueOf(),isEnd:o.end.valueOf()===e.end.valueOf(),col:s})}return i}}class V extends n.be{constructor(){super(...arguments),this.buildDayRanges=(0,n.z)(K),this.slicer=new U,this.timeColsRef=(0,o.Vf)()}render(){let{props:e,context:t}=this,{dateProfile:i,dayTableModel:s}=e,{nowIndicator:r,nextDayThreshold:a}=t.options,l=this.buildDayRanges(s,i,t.dateEnv);return(0,o.az)(n.ch,{unit:r?"minute":"day"},((n,d)=>(0,o.az)(F,Object.assign({ref:this.timeColsRef},this.slicer.sliceProps(e,i,null,t,l),{forPrint:e.forPrint,axis:e.axis,dateProfile:i,slatMetas:e.slatMetas,slotDuration:e.slotDuration,cells:s.cells[0],tableColGroupNode:e.tableColGroupNode,tableMinWidth:e.tableMinWidth,clientWidth:e.clientWidth,clientHeight:e.clientHeight,expandRows:e.expandRows,nowDate:n,nowIndicatorSegs:r&&this.slicer.sliceNowDate(n,i,a,t,l),todayRange:d,onScrollTopRequest:e.onScrollTopRequest,onSlatCoords:e.onSlatCoords}))))}}function K(e,t,i){let s=[];for(let n of e.headerDates)s.push({start:i.add(n,t.slotMinTime),end:i.add(n,t.slotMaxTime)});return s}const Y=[{hours:1},{minutes:30},{minutes:15},{seconds:30},{seconds:15}];function _(e,t,i,s,o){let r=new Date(0),a=e,l=(0,n.d)(0),d=i||Q(s),c=[];for(;(0,n.bs)(a)<(0,n.bs)(t);){let e=o.add(r,a),t=null!==(0,n.bt)(l,d);c.push({date:e,time:a,key:e.toISOString(),isoTimeStr:(0,n.bu)(e),isLabeled:t}),a=(0,n.bp)(a,s),l=(0,n.bp)(l,s)}return c}function Q(e){let t,i,s;for(t=Y.length-1;t>=0;t-=1)if(i=(0,n.d)(Y[t]),s=(0,n.bt)(i,e),null!==s&&s>1)return i;return e}class Z extends m{constructor(){super(...arguments),this.buildTimeColsModel=(0,n.z)($),this.buildSlatMetas=(0,n.z)(_)}render(){let{options:e,dateEnv:t,dateProfileGenerator:i}=this.context,{props:s}=this,{dateProfile:a}=s,l=this.buildTimeColsModel(a,i),d=this.allDaySplitter.splitProps(s),c=this.buildSlatMetas(a.slotMinTime,a.slotMaxTime,e.slotLabelInterval,e.slotDuration,t),{dayMinWidth:f}=e,h=!f,g=f,p=e.dayHeaders&&(0,o.az)(n.bK,{dates:l.headerDates,dateProfile:a,datesRepDistinctDays:!0,renderIntro:h?this.renderHeadAxis:null}),u=!1!==e.allDaySlot&&(t=>(0,o.az)(r.iz,Object.assign({},d.allDay,{dateProfile:a,dayTableModel:l,nextDayThreshold:e.nextDayThreshold,tableMinWidth:t.tableMinWidth,colGroupNode:t.tableColGroupNode,renderRowIntro:h?this.renderTableRowAxis:null,showWeekNumbers:!1,expandRows:!1,headerAlignElRef:this.headerElRef,clientWidth:t.clientWidth,clientHeight:t.clientHeight,forPrint:s.forPrint},this.getAllDayMaxEventProps()))),m=t=>(0,o.az)(V,Object.assign({},d.timed,{dayTableModel:l,dateProfile:a,axis:h,slotDuration:e.slotDuration,slatMetas:c,forPrint:s.forPrint,tableColGroupNode:t.tableColGroupNode,tableMinWidth:t.tableMinWidth,clientWidth:t.clientWidth,clientHeight:t.clientHeight,onSlatCoords:this.handleSlatCoords,expandRows:t.expandRows,onScrollTopRequest:this.handleScrollTopRequest}));return g?this.renderHScrollLayout(p,u,m,l.colCnt,f,c,this.state.slatCoords):this.renderSimpleLayout(p,u,m)}}function $(e,t){let i=new n.bO(e.renderRange,t);return new n.bV(i,!1)}(0,n.cw)('.fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:"\\00a0"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:"\\00a0-\\00a0"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-arrow,.fc .fc-timegrid-now-indicator-line{pointer-events:none}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}'),s()}catch(l){s(l)}}))},32424:function(e,t,i){i.d(t,{E:()=>o});var s=i(53907),n=i(18112);function o(e,t,i){const o=(0,n.Q)(e,null==i?void 0:i.in);return isNaN(t)?(0,s.L)((null==i?void 0:i.in)||e,NaN):t?(o.setDate(o.getDate()+t),o):o}},33054:function(e,t,i){i.d(t,{w:()=>n});var s=i(18112);function n(e,t){return(0,s.Q)(e,null==t?void 0:t.in).getDay()}},97836:function(e,t,i){i.d(t,{K:()=>o});i(71695),i(47021);var s=i(18492),n=i(7591);function o(e,t,i){const[o,r]=(0,s.d)(null==i?void 0:i.in,e,t);return+(0,n.b)(o)==+(0,n.b)(r)}},28866:function(e,t,i){i.d(t,{x:()=>o});i(71695),i(47021);var s=i(18492),n=i(29558);function o(e,t,i){const[o,r]=(0,s.d)(null==i?void 0:i.in,e,t);return+(0,n.z)(o,i)==+(0,n.z)(r,i)}},41001:function(e,t,i){i.d(t,{O:()=>o});var s=i(32424),n=i(33054);function o(e,t,i){let o=t-(0,n.w)(e,i);return o<=0&&(o+=7),(0,s.E)(e,o,i)}}}]);
//# sourceMappingURL=4279.7ca8caa19841ba7f.js.map