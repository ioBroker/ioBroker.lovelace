"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["21483"],{17705:function(t,e,a){a.d(e,{Cj:()=>h,F7:()=>l,Hs:()=>w,Kd:()=>p,Kj:()=>m,Nw:()=>b,PA:()=>c,Py:()=>o,Qm:()=>C,Z0:()=>$,_Y:()=>_,_m:()=>d,dL:()=>i,dO:()=>k,hN:()=>u,h_:()=>n,j2:()=>v,q6:()=>y,uR:()=>r});a(19083),a(71695),a(9359),a(52924),a(61006),a(47021);var s=a(47194);let l=function(t){return t[t.NONE=0]="NONE",t[t.ARITHMETIC=1]="ARITHMETIC",t[t.CIRCULAR=2]="CIRCULAR",t}({});const c=99387==a.j?["entity_not_recorded","entity_no_longer_recorded","state_class_removed","units_changed","mean_type_changed","no_state"]:null,d=t=>t.sendMessagePromise({type:"recorder/info"}),r=(t,e)=>t.callWS({type:"recorder/list_statistic_ids",statistic_type:e}),o=(t,e)=>t.callWS({type:"recorder/get_statistics_metadata",statistic_ids:e}),i=(t,e,a,s,l="hour",c,d)=>t.callWS({type:"recorder/statistics_during_period",start_time:e.toISOString(),end_time:null==a?void 0:a.toISOString(),statistic_ids:s,period:l,units:c,types:d}),_=(t,e,a,s)=>t.callWS({type:"recorder/statistic_during_period",statistic_id:e,units:s,fixed_period:a.fixed_period?{start_time:a.fixed_period.start instanceof Date?a.fixed_period.start.toISOString():a.fixed_period.start,end_time:a.fixed_period.end instanceof Date?a.fixed_period.end.toISOString():a.fixed_period.end}:void 0,calendar:a.calendar,rolling_window:a.rolling_window}),n=t=>t.callWS({type:"recorder/validate_statistics"}),h=(t,e,a)=>t.callWS({type:"recorder/update_statistics_metadata",statistic_id:e,unit_of_measurement:a}),u=(t,e)=>t.callWS({type:"recorder/clear_statistics",statistic_ids:e}),m=t=>{let e=null;if(!t)return null;for(const a of t)null!==a.change&&void 0!==a.change&&(null===e?e=a.change:e+=a.change);return e},y=(t,e)=>{let a=null;for(const s of e){if(!(s in t))continue;const e=m(t[s]);null!==e&&(null===a?a=e:a+=e)}return a},b=(t,e)=>t.some((t=>void 0!==t[e]&&null!==t[e])),f=["mean","min","max"],g=["sum","state","change"],$=(t,e)=>!(!f.includes(e)||t.mean_type===l.NONE)||!(!g.includes(e)||!t.has_sum),v=(t,e,a,s,l)=>{const c=new Date(a).toISOString();return t.callWS({type:"recorder/adjust_sum_statistics",statistic_id:e,start_time:c,adjustment:s,adjustment_unit_of_measurement:l})},p=(t,e,a)=>{const l=t.states[e];return l?(0,s.C)(l):(null==a?void 0:a.name)||e},k=(t,e,a)=>{let s;var l;e&&(s=null===(l=t.states[e])||void 0===l?void 0:l.attributes.unit_of_measurement);return void 0===s?null==a?void 0:a.statistics_unit_of_measurement:s},w=t=>t.includes(":"),C=t=>t.callWS({type:"recorder/update_statistics_issues"})},6736:function(t,e,a){a.d(e,{f:()=>d});var s=a(61701),l=a(72621),c=(a(19083),a(71695),a(9359),a(52924),a(40251),a(61006),a(47021),a(50778));const d=t=>(0,s.Z)(null,(function(t,e){class a extends e{constructor(...e){super(...e),t(this)}}return{F:a,d:[{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,l.Z)(a,"connectedCallback",this,3)([]),this._checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,l.Z)(a,"disconnectedCallback",this,3)([]),this.__unsubs){for(;this.__unsubs.length;){const t=this.__unsubs.pop();t instanceof Promise?t.then((t=>t())):t()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(t){if((0,l.Z)(a,"updated",this,3)([t]),t.has("hass"))this._checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const e of t.keys())if(this.hassSubscribeRequiredHostProps.includes(e))return void this._checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"_checkSubscribed",value:function(){var t;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(t=this.hassSubscribeRequiredHostProps)&&void 0!==t&&t.some((t=>void 0===this[t]))||(this.__unsubs=this.hassSubscribe())}}]}}),t)},20548:function(t,e,a){a.d(e,{H:()=>c});a(81804);var s=a(11259),l=a(4643);function c(t,e,a,c,d,r){const o=t.getPropertyValue(d+"-"+r).trim(),i=o.length>0?o:t.getPropertyValue(d).trim();let _=(0,s.Rq)(i);return 0===o.length&&r&&(_=(0,s.CO)((0,s.p3)(e?(0,l.C)((0,s.Rw)((0,s.wK)(_)),r):(0,l.W)((0,s.Rw)((0,s.wK)(_)),r)))),c?_+=a?"32":"7F":a&&(_+="7F"),_}},74549:function(t,e,a){a.a(t,(async function(t,s){try{a.r(e),a.d(e,{HuiEnergySourcesTableCard:()=>wt});var l=a(61701),c=(a(71695),a(9359),a(70104),a(52924),a(47021),a(23985)),d=a(57243),r=a(50778),o=a(35359),i=a(69634),_=a(50602),n=a(20548),h=(a(54977),a(1118)),u=a(17705),m=a(6736),y=a(93331),b=a(36522),f=t([h,_]);[h,_]=f.then?(await f)():f;let g,$,v,p,k,w,C,S,M,K,H,j,W,x,I,R,z,P,O,N,V,E,q,T,Z,A,B,F,L,U,D,J,Q,Y,G,X,tt,et,at,st,lt,ct,dt,rt,ot,it,_t,nt,ht,ut,mt,yt,bt,ft,gt,$t,vt,pt=t=>t;const kt={grid_return:"--energy-grid-return-color",grid_consumption:"--energy-grid-consumption-color",battery_in:"--energy-battery-in-color",battery_out:"--energy-battery-out-color",solar:"--energy-solar-color",gas:"--energy-gas-color",water:"--energy-water-color"};let wt=(0,l.Z)([(0,r.Mo)("hui-energy-sources-table-card")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_data",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value(){return["_config"]}},{kind:"method",key:"hassSubscribe",value:function(){var t;return[(0,h.UB)(this.hass,{key:null===(t=this._config)||void 0===t?void 0:t.collection_key}).subscribe((t=>{this._data=t}))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(t){this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return(0,y.SN)(this,t)||t.size>1||!t.has("hass")}},{kind:"method",key:"render",value:function(){var t,e,a,s,l,c,r,m,y,b,f;if(!this.hass||!this._config)return d.Ld;if(!this._data)return(0,d.dy)(g||(g=pt`${0}`),this.hass.localize("ui.panel.lovelace.cards.energy.loading"));let vt=0,wt=0,Ct=0,St=0,Mt=0,Kt=0,Ht=0,jt=0,Wt=!1,xt=!1,It=!1,Rt=0,zt=0,Pt=0,Ot=0,Nt=0,Vt=0,Et=0,qt=0;const Tt=(0,h.Jj)(this._data.prefs),Zt=getComputedStyle(this),At=(null===(t=Tt.grid)||void 0===t?void 0:t[0].flow_from.some((t=>t.stat_cost||t.entity_energy_price||t.number_energy_price)))||(null===(e=Tt.grid)||void 0===e?void 0:e[0].flow_to.some((t=>t.stat_compensation||t.entity_energy_price||t.number_energy_price)))||(null===(a=Tt.gas)||void 0===a?void 0:a.some((t=>t.stat_cost||t.entity_energy_price||t.number_energy_price)))||(null===(s=Tt.water)||void 0===s?void 0:s.some((t=>t.stat_cost||t.entity_energy_price||t.number_energy_price))),Bt=(0,h.vE)(this.hass,this._data.prefs,this._data.statsMetadata),Ft=(0,h.b)(this.hass),Lt=void 0!==this._data.statsCompare;return(0,d.dy)($||($=pt` <ha-card> ${0} <div class="mdc-data-table"> <div class="mdc-data-table__table-container"> <table class="mdc-data-table__table" aria-label="Energy sources"> <thead> <tr class="mdc-data-table__header-row"> <th class="mdc-data-table__header-cell"></th> <th class="mdc-data-table__header-cell" role="columnheader" scope="col"> ${0} </th> ${0} <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col"> ${0} </th> ${0} </tr> </thead> <tbody class="mdc-data-table__content"> ${0} ${0} ${0} ${0} ${0} ${0} ${0} ${0} ${0} ${0} ${0} </tbody> </table> </div> </div> </ha-card>`),this._config.title?(0,d.dy)(v||(v=pt`<h1 class="card-header">${0}</h1>`),this._config.title):"",this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.source"),Lt?(0,d.dy)(p||(p=pt`<th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col"> ${0} </th> ${0}`),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.previous_energy"),At?(0,d.dy)(k||(k=pt`<th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col"> ${0} </th>`),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.previous_cost")):""):"",this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.energy"),At?(0,d.dy)(w||(w=pt` <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col"> ${0} </th>`),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.cost")):"",null===(l=Tt.solar)||void 0===l?void 0:l.map(((t,e)=>{var a;const s=(0,u.Kj)(this._data.stats[t.stat_energy_from])||0;Ct+=s;const l=Lt&&(0,u.Kj)(this._data.statsCompare[t.stat_energy_from])||0;return Pt+=l,(0,d.dy)(C||(C=pt`<tr class="mdc-data-table__row ${0}" @click="${0}" .entity="${0}"> <td class="mdc-data-table__cell cell-bullet"> <div class="bullet" style="${0}"></div> </td> <th class="mdc-data-table__cell" scope="row"> ${0} </th> ${0} <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} kWh </td> ${0} </tr>`),(0,o.$)({clickable:!(0,u.Hs)(t.stat_energy_from)}),this._handleMoreInfo,t.stat_energy_from,(0,i.V)({borderColor:(0,n.H)(Zt,this.hass.themes.darkMode,!1,!1,kt.solar,e),backgroundColor:(0,n.H)(Zt,this.hass.themes.darkMode,!0,!1,kt.solar,e)}),(0,u.Kd)(this.hass,t.stat_energy_from,null===(a=this._data)||void 0===a?void 0:a.statsMetadata[t.stat_energy_from]),Lt?(0,d.dy)(S||(S=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} kWh </td> ${0}`),(0,_.uf)(l,this.hass.locale),At?(0,d.dy)(M||(M=pt`<td class="mdc-data-table__cell"></td>`)):""):"",(0,_.uf)(s,this.hass.locale),At?(0,d.dy)(K||(K=pt`<td class="mdc-data-table__cell"></td>`)):"")})),Tt.solar?(0,d.dy)(H||(H=pt`<tr class="mdc-data-table__row total"> <td class="mdc-data-table__cell"></td> <th class="mdc-data-table__cell" scope="row"> ${0} </th> ${0} <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} kWh </td> ${0} </tr>`),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.solar_total"),Lt?(0,d.dy)(j||(j=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} kWh </td> ${0}`),(0,_.uf)(Pt,this.hass.locale),At?(0,d.dy)(W||(W=pt`<td class="mdc-data-table__cell"></td>`)):""):"",(0,_.uf)(Ct,this.hass.locale),At?(0,d.dy)(x||(x=pt`<td class="mdc-data-table__cell"></td>`)):""):"",null===(c=Tt.battery)||void 0===c?void 0:c.map(((t,e)=>{var a,s;const l=(0,u.Kj)(this._data.stats[t.stat_energy_from])||0,c=(0,u.Kj)(this._data.stats[t.stat_energy_to])||0;St+=l-c;const r=Lt&&(0,u.Kj)(this._data.statsCompare[t.stat_energy_from])||0,h=Lt&&(0,u.Kj)(this._data.statsCompare[t.stat_energy_to])||0;return Ot+=r-h,(0,d.dy)(I||(I=pt`<tr class="mdc-data-table__row ${0}" @click="${0}" .entity="${0}"> <td class="mdc-data-table__cell cell-bullet"> <div class="bullet" style="${0}"></div> </td> <th class="mdc-data-table__cell" scope="row"> ${0} </th> ${0} <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} kWh </td> ${0} </tr> <tr class="mdc-data-table__row ${0}" @click="${0}" .entity="${0}"> <td class="mdc-data-table__cell cell-bullet"> <div class="bullet" style="${0}"></div> </td> <th class="mdc-data-table__cell" scope="row"> ${0} </th> ${0} <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} kWh </td> ${0} </tr>`),(0,o.$)({clickable:!(0,u.Hs)(t.stat_energy_from)}),this._handleMoreInfo,t.stat_energy_from,(0,i.V)({borderColor:(0,n.H)(Zt,this.hass.themes.darkMode,!1,!1,kt.battery_out,e),backgroundColor:(0,n.H)(Zt,this.hass.themes.darkMode,!0,!1,kt.battery_out,e)}),(0,u.Kd)(this.hass,t.stat_energy_from,null===(a=this._data)||void 0===a?void 0:a.statsMetadata[t.stat_energy_from]),Lt?(0,d.dy)(R||(R=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} kWh </td> ${0}`),(0,_.uf)(r,this.hass.locale),At?(0,d.dy)(z||(z=pt`<td class="mdc-data-table__cell"></td>`)):""):"",(0,_.uf)(l,this.hass.locale),At?(0,d.dy)(P||(P=pt`<td class="mdc-data-table__cell"></td>`)):"",(0,o.$)({clickable:!(0,u.Hs)(t.stat_energy_to)}),this._handleMoreInfo,t.stat_energy_to,(0,i.V)({borderColor:(0,n.H)(Zt,this.hass.themes.darkMode,!1,!1,kt.battery_in,e),backgroundColor:(0,n.H)(Zt,this.hass.themes.darkMode,!0,!1,kt.battery_in,e)}),(0,u.Kd)(this.hass,t.stat_energy_to,null===(s=this._data)||void 0===s?void 0:s.statsMetadata[t.stat_energy_to]),Lt?(0,d.dy)(O||(O=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} kWh </td> ${0}`),(0,_.uf)(-1*h,this.hass.locale),At?(0,d.dy)(N||(N=pt`<td class="mdc-data-table__cell"></td>`)):""):"",(0,_.uf)(-1*c,this.hass.locale),At?(0,d.dy)(V||(V=pt`<td class="mdc-data-table__cell"></td>`)):"")})),Tt.battery?(0,d.dy)(E||(E=pt`<tr class="mdc-data-table__row total"> <td class="mdc-data-table__cell"></td> <th class="mdc-data-table__cell" scope="row"> ${0} </th> ${0} <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} kWh </td> ${0} </tr>`),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.battery_total"),Lt?(0,d.dy)(q||(q=pt` <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} kWh </td> ${0}`),(0,_.uf)(Ot,this.hass.locale),At?(0,d.dy)(T||(T=pt`<td class="mdc-data-table__cell"></td>`)):""):"",(0,_.uf)(St,this.hass.locale),At?(0,d.dy)(Z||(Z=pt`<td class="mdc-data-table__cell"></td>`)):""):"",null===(r=Tt.grid)||void 0===r?void 0:r.map((t=>(0,d.dy)(A||(A=pt`${0} ${0}`),t.flow_from.map(((t,e)=>{var a;const s=(0,u.Kj)(this._data.stats[t.stat_energy_from])||0;vt+=s;const l=Lt&&(0,u.Kj)(this._data.statsCompare[t.stat_energy_from])||0;Rt+=l;const c=t.stat_cost||this._data.info.cost_sensors[t.stat_energy_from],r=c?(0,u.Kj)(this._data.stats[c])||0:null;null!==r&&(Wt=!0,wt+=r);const h=Lt&&c?(0,u.Kj)(this._data.statsCompare[c])||0:null;return null!==h&&(zt+=h),(0,d.dy)(B||(B=pt`<tr class="mdc-data-table__row ${0}" @click="${0}" .entity="${0}"> <td class="mdc-data-table__cell cell-bullet"> <div class="bullet" style="${0}"></div> </td> <th class="mdc-data-table__cell" scope="row"> ${0} </th> ${0} <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} kWh </td> ${0} </tr>`),(0,o.$)({clickable:!(0,u.Hs)(t.stat_energy_from)}),this._handleMoreInfo,t.stat_energy_from,(0,i.V)({borderColor:(0,n.H)(Zt,this.hass.themes.darkMode,!1,!1,kt.grid_consumption,e),backgroundColor:(0,n.H)(Zt,this.hass.themes.darkMode,!0,!1,kt.grid_consumption,e)}),(0,u.Kd)(this.hass,t.stat_energy_from,null===(a=this._data)||void 0===a?void 0:a.statsMetadata[t.stat_energy_from]),Lt?(0,d.dy)(F||(F=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} kWh </td> ${0}`),(0,_.uf)(l,this.hass.locale),At?(0,d.dy)(L||(L=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} </td>`),null!==h?(0,_.uf)(h,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",(0,_.uf)(s,this.hass.locale),At?(0,d.dy)(U||(U=pt` <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} </td>`),null!==r?(0,_.uf)(r,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):"")})),t.flow_to.map(((t,e)=>{var a;const s=-1*((0,u.Kj)(this._data.stats[t.stat_energy_to])||0);vt+=s;const l=t.stat_compensation||this._data.info.cost_sensors[t.stat_energy_to],c=l?-1*((0,u.Kj)(this._data.stats[l])||0):null;null!==c&&(Wt=!0,wt+=c);const r=-1*(Lt&&(0,u.Kj)(this._data.statsCompare[t.stat_energy_to])||0);Rt+=r;const h=Lt&&l?-1*((0,u.Kj)(this._data.statsCompare[l])||0):null;return null!==h&&(zt+=h),(0,d.dy)(D||(D=pt`<tr class="mdc-data-table__row ${0}" @click="${0}" .entity="${0}"> <td class="mdc-data-table__cell cell-bullet"> <div class="bullet" style="${0}"></div> </td> <th class="mdc-data-table__cell" scope="row"> ${0} </th> ${0} <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} kWh </td> ${0} </tr>`),(0,o.$)({clickable:!(0,u.Hs)(t.stat_energy_to)}),this._handleMoreInfo,t.stat_energy_to,(0,i.V)({borderColor:(0,n.H)(Zt,this.hass.themes.darkMode,!1,!1,kt.grid_return,e),backgroundColor:(0,n.H)(Zt,this.hass.themes.darkMode,!0,!1,kt.grid_return,e)}),(0,u.Kd)(this.hass,t.stat_energy_to,null===(a=this._data)||void 0===a?void 0:a.statsMetadata[t.stat_energy_to]),Lt?(0,d.dy)(J||(J=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} kWh </td> ${0}`),(0,_.uf)(r,this.hass.locale),At?(0,d.dy)(Q||(Q=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} </td>`),null!==h?(0,_.uf)(h,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",(0,_.uf)(s,this.hass.locale),At?(0,d.dy)(Y||(Y=pt` <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} </td>`),null!==c?(0,_.uf)(c,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):"")}))))),Tt.grid&&(null!==(m=Tt.grid)&&void 0!==m&&null!==(m=m[0].flow_from)&&void 0!==m&&m.length||null!==(y=Tt.grid)&&void 0!==y&&null!==(y=y[0].flow_to)&&void 0!==y&&y.length)?(0,d.dy)(G||(G=pt` <tr class="mdc-data-table__row total"> <td class="mdc-data-table__cell"></td> <th class="mdc-data-table__cell" scope="row"> ${0} </th> ${0} <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} kWh </td> ${0} </tr>`),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.grid_total"),Lt?(0,d.dy)(X||(X=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} kWh </td> ${0}`),(0,_.uf)(Rt,this.hass.locale),At?(0,d.dy)(tt||(tt=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} </td>`),Wt?(0,_.uf)(zt,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",(0,_.uf)(vt,this.hass.locale),At?(0,d.dy)(et||(et=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} </td>`),Wt?(0,_.uf)(wt,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",null===(b=Tt.gas)||void 0===b?void 0:b.map(((t,e)=>{var a;const s=(0,u.Kj)(this._data.stats[t.stat_energy_from])||0;Mt+=s;const l=Lt&&(0,u.Kj)(this._data.statsCompare[t.stat_energy_from])||0;Nt+=l;const c=t.stat_cost||this._data.info.cost_sensors[t.stat_energy_from],r=c?(0,u.Kj)(this._data.stats[c])||0:null;null!==r&&(xt=!0,Kt+=r);const h=Lt&&c?(0,u.Kj)(this._data.statsCompare[c])||0:null;return null!==h&&(Vt+=h),(0,d.dy)(at||(at=pt`<tr class="mdc-data-table__row ${0}" @click="${0}" .entity="${0}"> <td class="mdc-data-table__cell cell-bullet"> <div class="bullet" style="${0}"></div> </td> <th class="mdc-data-table__cell" scope="row"> ${0} </th> ${0} <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} ${0} </td> ${0} </tr>`),(0,o.$)({clickable:!(0,u.Hs)(t.stat_energy_from)}),this._handleMoreInfo,t.stat_energy_from,(0,i.V)({borderColor:(0,n.H)(Zt,this.hass.themes.darkMode,!1,!1,kt.gas,e),backgroundColor:(0,n.H)(Zt,this.hass.themes.darkMode,!0,!1,kt.gas,e)}),(0,u.Kd)(this.hass,t.stat_energy_from,null===(a=this._data)||void 0===a?void 0:a.statsMetadata[t.stat_energy_from]),Lt?(0,d.dy)(st||(st=pt` <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} ${0} </td> ${0}`),(0,_.uf)(l,this.hass.locale),Bt,At?(0,d.dy)(lt||(lt=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} </td>`),null!==h?(0,_.uf)(h,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",(0,_.uf)(s,this.hass.locale),Bt,At?(0,d.dy)(ct||(ct=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} </td>`),null!==r?(0,_.uf)(r,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):"")})),Tt.gas?(0,d.dy)(dt||(dt=pt`<tr class="mdc-data-table__row total"> <td class="mdc-data-table__cell"></td> <th class="mdc-data-table__cell" scope="row"> ${0} </th> ${0} <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} ${0} </td> ${0} </tr>`),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.gas_total"),Lt?(0,d.dy)(rt||(rt=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} ${0} </td> ${0}`),(0,_.uf)(Nt,this.hass.locale),Bt,At?(0,d.dy)(ot||(ot=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} </td>`),xt?(0,_.uf)(Vt,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",(0,_.uf)(Mt,this.hass.locale),Bt,At?(0,d.dy)(it||(it=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} </td>`),xt?(0,_.uf)(Kt,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",null===(f=Tt.water)||void 0===f?void 0:f.map(((t,e)=>{var a;const s=(0,u.Kj)(this._data.stats[t.stat_energy_from])||0;Ht+=s;const l=Lt&&(0,u.Kj)(this._data.statsCompare[t.stat_energy_from])||0;Et+=l;const c=t.stat_cost||this._data.info.cost_sensors[t.stat_energy_from],r=c?(0,u.Kj)(this._data.stats[c])||0:null;null!==r&&(It=!0,jt+=r);const h=Lt&&c?(0,u.Kj)(this._data.statsCompare[c])||0:null;return null!==h&&(qt+=h),(0,d.dy)(_t||(_t=pt`<tr class="mdc-data-table__row ${0}" @click="${0}" .entity="${0}"> <td class="mdc-data-table__cell cell-bullet"> <div class="bullet" style="${0}"></div> </td> <th class="mdc-data-table__cell" scope="row"> ${0} </th> ${0} <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} ${0} </td> ${0} </tr>`),(0,o.$)({clickable:!(0,u.Hs)(t.stat_energy_from)}),this._handleMoreInfo,t.stat_energy_from,(0,i.V)({borderColor:(0,n.H)(Zt,this.hass.themes.darkMode,!1,!1,kt.water,e),backgroundColor:(0,n.H)(Zt,this.hass.themes.darkMode,!0,!1,kt.water,e)}),(0,u.Kd)(this.hass,t.stat_energy_from,null===(a=this._data)||void 0===a?void 0:a.statsMetadata[t.stat_energy_from]),Lt?(0,d.dy)(nt||(nt=pt` <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} ${0} </td> ${0}`),(0,_.uf)(l,this.hass.locale),Ft,At?(0,d.dy)(ht||(ht=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} </td>`),null!==h?(0,_.uf)(h,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",(0,_.uf)(s,this.hass.locale),Ft,At?(0,d.dy)(ut||(ut=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} </td>`),null!==r?(0,_.uf)(r,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):"")})),Tt.water?(0,d.dy)(mt||(mt=pt`<tr class="mdc-data-table__row total"> <td class="mdc-data-table__cell"></td> <th class="mdc-data-table__cell" scope="row"> ${0} </th> ${0} <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} ${0} </td> ${0} </tr>`),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.water_total"),Lt?(0,d.dy)(yt||(yt=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} ${0} </td> ${0}`),(0,_.uf)(Et,this.hass.locale),Ft,At?(0,d.dy)(bt||(bt=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} </td>`),It?(0,_.uf)(qt,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",(0,_.uf)(Ht,this.hass.locale),Ft,At?(0,d.dy)(ft||(ft=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} </td>`),It?(0,_.uf)(jt,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",[xt,It,Wt].filter(Boolean).length>1?(0,d.dy)(gt||(gt=pt`<tr class="mdc-data-table__row total"> <td class="mdc-data-table__cell"></td> <th class="mdc-data-table__cell" scope="row"> ${0} </th> ${0} <td class="mdc-data-table__cell"></td> <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} </td> </tr>`),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.total_costs"),Lt?(0,d.dy)($t||($t=pt`<td class="mdc-data-table__cell"></td> <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> ${0} </td>`),(0,_.uf)(Vt+zt+qt,this.hass.locale,{style:"currency",currency:this.hass.config.currency})):"",(0,_.uf)(Kt+wt+jt,this.hass.locale,{style:"currency",currency:this.hass.config.currency})):"")}},{kind:"method",key:"_handleMoreInfo",value:function(t){var e;const a=null===(e=t.currentTarget)||void 0===e?void 0:e.entity;a&&!(0,u.Hs)(a)&&(0,b.B)(this,"hass-more-info",{entityId:a})}},{kind:"get",static:!0,key:"styles",value:function(){return(0,d.iv)(vt||(vt=pt`${0} .mdc-data-table{width:100%;border:0}.mdc-data-table__cell,.mdc-data-table__header-cell{color:var(--primary-text-color);border-bottom-color:var(--divider-color);text-align:var(--float-start)}.mdc-data-table__row:not(.mdc-data-table__row--selected):hover{background-color:rgba(var(--rgb-primary-text-color),.04)}.clickable{cursor:pointer}.total{--mdc-typography-body2-font-weight:500}.total .mdc-data-table__cell{border-top:1px solid var(--divider-color)}ha-card{height:100%;overflow:hidden}.card-header{padding-bottom:0}.content{padding:16px}.has-header{padding-top:0}.cell-bullet{width:32px;padding-right:0;padding-inline-end:0;padding-inline-start:16px;direction:var(--direction)}.bullet{border-width:1px;border-style:solid;border-radius:4px;height:16px;width:32px}.mdc-data-table__cell--numeric{direction:ltr}`),(0,d.$m)(c))}}]}}),(0,m.f)(d.oi));s()}catch(g){s(g)}}))}}]);
//# sourceMappingURL=21483.c76b99bcb7f79048.js.map