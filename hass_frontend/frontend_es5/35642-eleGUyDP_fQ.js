"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[35642],{87171:function(t,e,s){var a,i,r,n,h,u=s(88962),c=s(33368),o=s(71650),l=s(82390),d=s(69205),b=s(70906),f=s(91808),m=s(68144),y=s(79932),_=s(82526),v=s(41826),g=s(18457),p=s(68307),j=s(74674),k=s(56007);(0,f.Z)([(0,y.Mo)("ha-climate-state")],(function(t,e){var s=function(e){(0,d.Z)(a,e);var s=(0,b.Z)(a);function a(){var e;(0,o.Z)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=s.call.apply(s,[this].concat(r)),t((0,l.Z)(e)),e}return(0,c.Z)(a)}(e);return{F:s,d:[{kind:"field",decorators:[(0,y.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,y.Cb)({attribute:!1})],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function(){var t=this._computeCurrentStatus();return(0,m.dy)(a||(a=(0,u.Z)(['<div class="target"> '," </div> ",""])),(0,k.rk)(this.stateObj.state)?this._localizeState():(0,m.dy)(i||(i=(0,u.Z)(['<span class="state-label"> '," ",' </span> <div class="unit">',"</div>"])),this._localizeState(),this.stateObj.attributes.preset_mode&&this.stateObj.attributes.preset_mode!==j.T1?(0,m.dy)(r||(r=(0,u.Z)(["- ",""])),(0,_.a)(this.hass.localize,this.stateObj,this.hass.locale,this.hass.entities,"preset_mode")):"",this._computeTarget()),t&&!(0,k.rk)(this.stateObj.state)?(0,m.dy)(n||(n=(0,u.Z)(['<div class="current"> ',': <div class="unit">',"</div> </div>"])),this.hass.localize("ui.card.climate.currently"),t):"")}},{kind:"method",key:"_computeCurrentStatus",value:function(){if(this.hass&&this.stateObj)return null!=this.stateObj.attributes.current_temperature&&null!=this.stateObj.attributes.current_humidity?"".concat((0,g.uf)(this.stateObj.attributes.current_temperature,this.hass.locale)," ").concat(this.hass.config.unit_system.temperature,"/\n      ").concat((0,g.uf)(this.stateObj.attributes.current_humidity,this.hass.locale)).concat((0,p.K)(this.hass.locale),"%"):null!=this.stateObj.attributes.current_temperature?"".concat((0,g.uf)(this.stateObj.attributes.current_temperature,this.hass.locale)," ").concat(this.hass.config.unit_system.temperature):null!=this.stateObj.attributes.current_humidity?"".concat((0,g.uf)(this.stateObj.attributes.current_humidity,this.hass.locale)).concat((0,p.K)(this.hass.locale),"%"):void 0}},{kind:"method",key:"_computeTarget",value:function(){return this.hass&&this.stateObj?null!=this.stateObj.attributes.target_temp_low&&null!=this.stateObj.attributes.target_temp_high?"".concat((0,g.uf)(this.stateObj.attributes.target_temp_low,this.hass.locale),"-").concat((0,g.uf)(this.stateObj.attributes.target_temp_high,this.hass.locale)," ").concat(this.hass.config.unit_system.temperature):null!=this.stateObj.attributes.temperature?"".concat((0,g.uf)(this.stateObj.attributes.temperature,this.hass.locale)," ").concat(this.hass.config.unit_system.temperature):null!=this.stateObj.attributes.target_humidity_low&&null!=this.stateObj.attributes.target_humidity_high?"".concat((0,g.uf)(this.stateObj.attributes.target_humidity_low,this.hass.locale),"-").concat((0,g.uf)(this.stateObj.attributes.target_humidity_high,this.hass.locale)," %"):null!=this.stateObj.attributes.humidity?"".concat((0,g.uf)(this.stateObj.attributes.humidity,this.hass.locale)," %"):"":""}},{kind:"method",key:"_localizeState",value:function(){if((0,k.rk)(this.stateObj.state))return this.hass.localize("state.default.".concat(this.stateObj.state));var t=(0,v.D1)(this.hass.localize,this.stateObj,this.hass.locale,this.hass.entities);return this.stateObj.attributes.hvac_action?"".concat((0,_.a)(this.hass.localize,this.stateObj,this.hass.locale,this.hass.entities,"hvac_action")," (").concat(t,")"):t}},{kind:"get",static:!0,key:"styles",value:function(){return(0,m.iv)(h||(h=(0,u.Z)([":host{display:flex;flex-direction:column;justify-content:center;white-space:nowrap}.target{color:var(--primary-text-color)}.current{color:var(--secondary-text-color)}.state-label{font-weight:700;text-transform:capitalize}.unit{display:inline-block;direction:ltr}"])))}}]}}),m.oi)},35642:function(t,e,s){s.r(e);var a,i,r,n=s(88962),h=s(33368),u=s(71650),c=s(82390),o=s(69205),l=s(70906),d=s(91808),b=s(68144),f=s(79932),m=(s(87171),s(53658)),y=(s(91476),s(75502));(0,d.Z)([(0,f.Mo)("hui-climate-entity-row")],(function(t,e){var s=function(e){(0,o.Z)(a,e);var s=(0,l.Z)(a);function a(){var e;(0,u.Z)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=s.call.apply(s,[this].concat(r)),t((0,c.Z)(e)),e}return(0,h.Z)(a)}(e);return{F:s,d:[{kind:"field",decorators:[(0,f.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,f.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(t){if(!t||!t.entity)throw new Error("Entity must be specified");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return(0,m.G2)(this,t)}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return b.Ld;var t=this.hass.states[this._config.entity];return t?(0,b.dy)(i||(i=(0,n.Z)([' <hui-generic-entity-row .hass="','" .config="','"> <ha-climate-state .hass="','" .stateObj="','"> </ha-climate-state> </hui-generic-entity-row> '])),this.hass,this._config,this.hass,t):(0,b.dy)(a||(a=(0,n.Z)([" <hui-warning> "," </hui-warning> "])),(0,y.i)(this.hass,this._config.entity))}},{kind:"get",static:!0,key:"styles",value:function(){return(0,b.iv)(r||(r=(0,n.Z)(["ha-climate-state{text-align:right}"])))}}]}}),b.oi)}}]);
//# sourceMappingURL=35642-eleGUyDP_fQ.js.map