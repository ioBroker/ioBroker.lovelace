"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[55928],{16094:(e,t,a)=>{a.a(e,(async e=>{var t=a(19828),r=a(39244),s=a(8046),n=a(84594),i=a(59699),o=a(79021),c=a(33651),u=a(32182),l=a(50234),d=a(27605),h=a(99307),m=a(55061),p=a(77714),f=a(14650),w=a(4535),y=a(35040),b=a(70288),x=a(67611),Z=a(45589),g=a(91052),k=a(7605),D=a(72949),v=a(59429),O=a(59401),S=a(13250),P=a(24892),C=a(69388),_=a(17815),F=a(65621),E=a(89898),M=a(93752),T=a(59281),L=a(1905),q=a(4223),V=a(70451),N=a(12198),j=a(44583),B=a(49684),H=e([N,B,j]);[N,B,j]=H.then?await H:H;const W={datetime:"datetime",datetimeseconds:"datetimeseconds",millisecond:"millisecond",second:"second",minute:"minute",hour:"hour",day:"day",date:"date",weekday:"weekday",week:"week",month:"month",monthyear:"monthyear",quarter:"quarter",year:"year"};t.IQ._date.override({formats:()=>W,parse:e=>e instanceof Date?e.getTime():e,format:function(e,t){switch(t){case"datetime":return(0,j.o0)(new Date(e),this.options.locale);case"datetimeseconds":return(0,j.E8)(new Date(e),this.options.locale);case"millisecond":case"second":return(0,B.Vu)(new Date(e),this.options.locale);case"minute":case"hour":return(0,B.mr)(new Date(e),this.options.locale);case"weekday":return(0,N.D_)(new Date(e),this.options.locale);case"date":case"week":case"quarter":return(0,N.p6)(new Date(e),this.options.locale);case"day":return(0,N.mn)(new Date(e),this.options.locale);case"month":return(0,N.Nh)(new Date(e),this.options.locale);case"monthyear":return(0,N.NC)(new Date(e),this.options.locale);case"year":return(0,N.yQ)(new Date(e),this.options.locale);default:return""}},add:(e,t,a)=>{switch(a){case"millisecond":return(0,r.Z)(e,t);case"second":return(0,s.Z)(e,t);case"minute":return(0,n.Z)(e,t);case"hour":return(0,i.Z)(e,t);case"day":return(0,o.Z)(e,t);case"week":return(0,c.Z)(e,t);case"month":return(0,u.Z)(e,t);case"quarter":return(0,l.Z)(e,t);case"year":return(0,d.Z)(e,t);default:return e}},diff:(e,t,a)=>{switch(a){case"millisecond":return(0,h.Z)(e,t);case"second":return(0,m.Z)(e,t);case"minute":return(0,p.Z)(e,t);case"hour":return(0,f.Z)(e,t);case"day":return(0,w.Z)(e,t);case"week":return(0,y.Z)(e,t);case"month":return(0,b.Z)(e,t);case"quarter":return(0,x.Z)(e,t);case"year":return(0,Z.Z)(e,t);default:return 0}},startOf:(e,t,a)=>{switch(t){case"second":return(0,g.Z)(e);case"minute":return(0,k.Z)(e);case"hour":return(0,D.Z)(e);case"day":return(0,v.Z)(e);case"week":return(0,O.Z)(e);case"isoWeek":return(0,O.Z)(e,{weekStartsOn:+a});case"month":return(0,S.Z)(e);case"quarter":return(0,P.Z)(e);case"year":return(0,C.Z)(e);default:return e}},endOf:(e,t)=>{switch(t){case"second":return(0,_.Z)(e);case"minute":return(0,F.Z)(e);case"hour":return(0,E.Z)(e);case"day":return(0,M.Z)(e);case"week":return(0,T.Z)(e);case"month":return(0,L.Z)(e);case"quarter":return(0,q.Z)(e);case"year":return(0,V.Z)(e);default:return e}}})}))},24667:(e,t,a)=>{a.d(t,{F:()=>u});var r,s,n,i=a(19828),o=a(15838),c=a(74790);class u extends i.ZL{draw(e){super.draw(e);const t=this.options,{x:a,y:r,base:s,width:n,text:i}=this.getProps(["x","y","base","width","text"]);if(!i)return;e.beginPath();const u=e.measureText(i);if(0===u.width||u.width+(t.textPad||4)+2>n)return;const l=t.textColor||t.backgroundColor&&((0,c.T2)((0,o.wK)(t.backgroundColor))>.5?"#000":"#fff");e.fillStyle=l,e.lineWidth=0,e.strokeStyle=l,e.textBaseline="middle",e.fillText(i,a-n/2+(t.textPad||4),r+(s-r)/2)}tooltipPosition(e){const{x:t,y:a,base:r}=this.getProps(["x","y","base"],e);return{x:t,y:a+(r-a)/2}}}n="textbar",(s="id")in(r=u)?Object.defineProperty(r,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[s]=n},37672:(e,t,a)=>{a.d(t,{C:()=>i});var r=a(19828);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t,a,r){const s=a.parse(e.start,r),n=a.parse(e.end,r),i=Math.min(s,n),o=Math.max(s,n);let c=i,u=o;return Math.abs(i)>Math.abs(o)&&(c=o,u=i),t[a.axis]=u,t._custom={barStart:c,barEnd:u,start:s,end:n,min:i,max:o},t}class i extends r.vn{parseObjectData(e,t,a,r){const s=e.iScale,i=e.vScale,o=s.getLabels(),c=s===i,u=[];let l,d,h,m;for(l=a,d=a+r;l<d;++l)m=t[l],h={},h[s.axis]=c||s.parse(o[l],l),u.push(n(m,h,i,l));return u}getLabelAndValue(e){const t=this._cachedMeta,{vScale:a}=t,r=this.getDataset().data[e];return{label:a.getLabelForValue(this.index)||"",value:r.label||""}}updateElements(e,t,a,r){const s=this._cachedMeta.vScale,n=this._cachedMeta.iScale,i=this.getDataset(),o=this.resolveDataElementOptions(t,r),c=this.getSharedOptions(o),u=this.includeOptions(r,c),l=s.isHorizontal();this.updateSharedOptions(c,r,o);for(let o=t;o<t+a;o++){const t=i.data[o],a=s.getPixelForValue(this.index),d=n.getPixelForValue(t.start.getTime()),h=n.getPixelForValue(t.end.getTime())-d,m=10,p={horizontal:l,x:d+h/2,y:a-m,width:h,height:0,base:a+m,text:t.label};u&&(p.options=c||this.resolveDataElementOptions(o,r),p.options={...p.options,backgroundColor:t.color}),this.updateElement(e[o],o,p,r)}}removeHoverStyle(e,t,a){}setHoverStyle(e,t,a){}}s(i,"id","timeline"),s(i,"defaults",{dataElementType:"textbar",dataElementOptions:["text","textColor","textPadding"],elements:{showText:!0,textPadding:4,minBarWidth:1},layout:{padding:{left:0,right:0,top:0,bottom:0}}}),s(i,"overrides",{maintainAspectRatio:!1,plugins:{legend:{display:!1}}})},79260:(e,t,a)=>{a.d(t,{C:()=>n});var r=a(19828);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class n extends r.FB{determineDataLimits(){const e=this.options,t=this._adapter,a=e.time.unit||"day";let{min:r,max:s}=this.getUserBounds();const n=this.chart;n.data.datasets.forEach(((e,a)=>{if(n.isDatasetVisible(a))for(const a of e.data){let e=t.parse(a.start,this),n=t.parse(a.end,this);e>n&&([e,n]=[n,e]),r>e&&e&&(r=e),s<n&&n&&(s=n)}})),r=isFinite(r)&&!isNaN(r)?r:+t.startOf(Date.now(),a),s=isFinite(s)&&!isNaN(s)?s:+t.endOf(Date.now(),a),this.min=Math.min(r,s-1),this.max=Math.max(r+1,s)}}s(n,"id","timeline"),s(n,"defaults",{position:"bottom",tooltips:{mode:"nearest"},ticks:{autoSkip:!0}})},55928:(e,t,a)=>{a.a(e,(async e=>{a.r(t),a.d(t,{Chart:()=>r.kL});var r=a(19828),s=a(24667),n=a(37672),i=a(79260),o=a(16094),c=e([o]);o=(c.then?await c:c)[0],r.kL.register(r.u,r.Dx,r.De,r.Gu,r.FB,r.f$,r.ST,r.vn,r.ZL,r.od,r.jn,s.F,i.C,n.C,r.uw)}))}}]);