"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[43283],{49915:function(e,t,n){var i,r,a,o,l,s,u,c=n(88962),h=n(33368),d=n(71650),f=n(82390),v=n(69205),g=n(70906),m=n(91808),y=n(34541),k=n(47838),p=(n(97393),n(76843),n(46349),n(70320),n(37313),n(68144)),_=n(95260),b=n(47501),x=n(18457),Z=n(68307),w=n(96151),C=n(88027),M=function(e,t,n){return 180*(0,C.Ff)((0,C.Fv)(e,t,n),t,n)/100};(0,m.Z)([(0,_.Mo)("ha-gauge")],(function(e,t){var n=function(t){(0,v.Z)(i,t);var n=(0,g.Z)(i);function i(){var t;(0,d.Z)(this,i);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=n.call.apply(n,[this].concat(a)),e((0,f.Z)(t)),t}return(0,h.Z)(i)}(t);return{F:n,d:[{kind:"field",decorators:[(0,_.Cb)({type:Number})],key:"min",value:function(){return 0}},{kind:"field",decorators:[(0,_.Cb)({type:Number})],key:"max",value:function(){return 100}},{kind:"field",decorators:[(0,_.Cb)({type:Number})],key:"value",value:function(){return 0}},{kind:"field",decorators:[(0,_.Cb)({attribute:!1})],key:"formatOptions",value:void 0},{kind:"field",decorators:[(0,_.Cb)({type:String})],key:"valueText",value:void 0},{kind:"field",decorators:[(0,_.Cb)()],key:"locale",value:void 0},{kind:"field",decorators:[(0,_.Cb)({type:Boolean})],key:"needle",value:void 0},{kind:"field",decorators:[(0,_.Cb)()],key:"levels",value:void 0},{kind:"field",decorators:[(0,_.Cb)()],key:"label",value:function(){return""}},{kind:"field",decorators:[(0,_.SB)()],key:"_angle",value:function(){return 0}},{kind:"field",decorators:[(0,_.SB)()],key:"_updated",value:function(){return!1}},{kind:"field",decorators:[(0,_.SB)()],key:"_segment_label",value:function(){return""}},{kind:"method",key:"firstUpdated",value:function(e){var t=this;(0,y.Z)((0,k.Z)(n.prototype),"firstUpdated",this).call(this,e),(0,w.T)((function(){t._updated=!0,t._angle=M(t.value,t.min,t.max),t._segment_label=t.getSegmentLabel(),t._rescale_svg()}))}},{kind:"method",key:"updated",value:function(e){(0,y.Z)((0,k.Z)(n.prototype),"updated",this).call(this,e),this._updated&&(e.has("value")||e.has("label")||e.has("_segment_label"))&&(this._angle=M(this.value,this.min,this.max),this._segment_label=this.getSegmentLabel(),this._rescale_svg())}},{kind:"method",key:"render",value:function(){var e=this;return(0,p.YP)(i||(i=(0,c.Z)([' <svg viewBox="-50 -50 100 50" class="gauge"> '," "," ",'  </svg> <svg class="text"> <text class="value-text"> ',""," </text> </svg>"])),this.needle&&this.levels?"":(0,p.YP)(r||(r=(0,c.Z)(['<path class="dial" d="M -40 0 A 40 40 0 0 1 40 0"></path>']))),this.levels?this.levels.sort((function(e,t){return e.level-t.level})).map((function(t,n){var i;if(0===n&&t.level!==e.min){var r=M(e.min,e.min,e.max);i=(0,p.YP)(a||(a=(0,c.Z)(['<path stroke="var(--info-color)" class="level" d="M\n                          ',"\n                          ",'\n                         A 40 40 0 0 1 40 0\n                        "></path>'])),0-40*Math.cos(r*Math.PI/180),0-40*Math.sin(r*Math.PI/180))}var l=M(t.level,e.min,e.max);return(0,p.YP)(o||(o=(0,c.Z)(["",'<path stroke="','" class="level" d="M\n                        ',"\n                        ",'\n                       A 40 40 0 0 1 40 0\n                      "></path>'])),i,t.stroke,0-40*Math.cos(l*Math.PI/180),0-40*Math.sin(l*Math.PI/180))})):"",this.needle?(0,p.YP)(l||(l=(0,c.Z)(['<path class="needle" d="M -25 -2.5 L -47.5 0 L -25 2.5 z" style="','"> </path>'])),(0,b.V)({transform:"rotate(".concat(this._angle,"deg)")})):(0,p.YP)(s||(s=(0,c.Z)(['<path class="value" d="M -40 0 A 40 40 0 1 0 40 0" style="','"></path>'])),(0,b.V)({transform:"rotate(".concat(this._angle,"deg)")})),this._segment_label?this._segment_label:this.valueText||(0,x.uf)(this.value,this.locale,this.formatOptions),this._segment_label?"":"%"===this.label?(0,Z.K)(this.locale)+"%":" ".concat(this.label))}},{kind:"method",key:"_rescale_svg",value:function(){var e=this.shadowRoot.querySelector(".text"),t=e.querySelector("text").getBBox();e.setAttribute("viewBox","".concat(t.x," ").concat(t.y," ").concat(t.width," ").concat(t.height))}},{kind:"method",key:"getSegmentLabel",value:function(){if(this.levels){this.levels.sort((function(e,t){return e.level-t.level}));for(var e=this.levels.length-1;e>=0;e--)if(this.value>=this.levels[e].level)return this.levels[e].label}return""}},{kind:"get",static:!0,key:"styles",value:function(){return(0,p.iv)(u||(u=(0,c.Z)([":host{position:relative}.dial{fill:none;stroke:var(--primary-background-color);stroke-width:15}.value{fill:none;stroke-width:15;stroke:var(--gauge-color);transition:all 1s ease 0s}.needle{fill:var(--primary-text-color);transition:all 1s ease 0s}.level{fill:none;stroke-width:15}.gauge{display:block}.text{position:absolute;max-height:40%;max-width:55%;left:50%;bottom:-6%;transform:translate(-50%,0%)}.value-text{font-size:50px;fill:var(--primary-text-color);text-anchor:middle;direction:ltr}"])))}}]}}),p.oi)},43283:function(e,t,n){n.r(t),n.d(t,{DEFAULT_MAX:function(){return I},DEFAULT_MIN:function(){return F},severityMap:function(){return z}});var i,r,a,o,l,s=n(40039),u=n(53709),c=n(88962),h=n(99312),d=n(81043),f=n(33368),v=n(71650),g=n(82390),m=n(69205),y=n(70906),k=n(91808),p=n(34541),_=n(47838),b=(n(97393),n(51358),n(46798),n(47084),n(5239),n(98490),n(76843),n(51467),n(85717),n(22859),n(37313),n(65974),n(46349),n(70320),n(68144)),x=n(95260),Z=n(47501),w=n(62877),C=n(47181),M=n(91741),N=n(84627),S=n(18457),P=(n(22098),n(49915),n(56007)),A=n(15688),B=n(53658),L=n(75502),F=0,I=100,z={red:"var(--error-color)",green:"var(--success-color)",yellow:"var(--warning-color)",normal:"var(--info-color)"};(0,k.Z)([(0,x.Mo)("hui-gauge-card")],(function(e,t){var k,E=function(t){(0,m.Z)(i,t);var n=(0,y.Z)(i);function i(){var t;(0,v.Z)(this,i);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=n.call.apply(n,[this].concat(a)),e((0,g.Z)(t)),t}return(0,f.Z)(i)}(t);return{F:E,d:[{kind:"method",static:!0,key:"getConfigElement",value:(k=(0,d.Z)((0,h.Z)().mark((function e(){return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(68331),n.e(22115)]).then(n.bind(n,97345));case 2:return e.abrupt("return",document.createElement("hui-gauge-card-editor"));case 3:case"end":return e.stop()}}),e)}))),function(){return k.apply(this,arguments)})},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,n){return{type:"gauge",entity:(0,A.j)(e,1,t,n,["counter","input_number","number","sensor"],(function(e){return!isNaN(Number(e.state))}))[0]||""}}},{kind:"field",decorators:[(0,x.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,x.SB)()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 4}},{kind:"method",key:"setConfig",value:function(e){if(!e.entity)throw new Error("Entity must be specified");if(!(0,N.T)(e.entity))throw new Error("Invalid entity");this._config=Object.assign({min:F,max:I},e)}},{kind:"method",key:"render",value:function(){var e,t;if(!this._config||!this.hass)return b.Ld;var n=this.hass.states[this._config.entity];if(!n)return(0,b.dy)(i||(i=(0,c.Z)([" <hui-warning> "," </hui-warning> "])),(0,L.i)(this.hass,this._config.entity));var l=Number(n.state);if(n.state===P.nZ)return(0,b.dy)(r||(r=(0,c.Z)([" <hui-warning>","</hui-warning> "])),this.hass.localize("ui.panel.lovelace.warning.entity_unavailable",{entity:this._config.entity}));if(isNaN(l))return(0,b.dy)(a||(a=(0,c.Z)([" <hui-warning>","</hui-warning> "])),this.hass.localize("ui.panel.lovelace.warning.entity_non_numeric",{entity:this._config.entity}));var s=null!==(e=this._config.name)&&void 0!==e?e:(0,M.C)(n);return(0,b.dy)(o||(o=(0,c.Z)([' <ha-card @click="','" tabindex="0"> <ha-gauge .min="','" .max="','" .value="','" .formatOptions="','" .locale="','" .label="','" style="','" .needle="','" .levels="','"></ha-gauge> <div class="name" .title="','">',"</div> </ha-card> "])),this._handleClick,this._config.min,this._config.max,n.state,(0,S.l4)(n,this.hass.entities[n.entity_id]),this.hass.locale,this._config.unit||(null===(t=this.hass)||void 0===t?void 0:t.states[this._config.entity].attributes.unit_of_measurement)||"",(0,Z.V)({"--gauge-color":this._computeSeverity(l)}),this._config.needle,this._config.needle?this._severityLevels():void 0,s,s)}},{kind:"method",key:"shouldUpdate",value:function(e){return(0,B.G2)(this,e)}},{kind:"method",key:"updated",value:function(e){if((0,p.Z)((0,_.Z)(E.prototype),"updated",this).call(this,e),this._config&&this.hass){var t=e.get("hass"),n=e.get("_config");t&&n&&t.themes===this.hass.themes&&n.theme===this._config.theme||(0,w.R)(this,this.hass.themes,this._config.theme)}}},{kind:"method",key:"_computeSeverity",value:function(e){if(!this._config.needle){var t=this._config.segments;if(t){t=(0,u.Z)(t).sort((function(e,t){return e.from-t.from}));for(var n=0;n<t.length;n++){var i,r=t[n];if(r&&e>=r.from&&(n+1===t.length||e<(null===(i=t[n+1])||void 0===i?void 0:i.from)))return r.color}return z.normal}var a=this._config.severity;if(!a)return z.normal;var o,l=Object.keys(a).map((function(e){return[e,a[e]]})),c=(0,s.Z)(l);try{for(c.s();!(o=c.n()).done;){var h=o.value;if(null==z[h[0]]||isNaN(h[1]))return z.normal}}catch(d){c.e(d)}finally{c.f()}return l.sort((function(e,t){return e[1]-t[1]})),e>=l[0][1]&&e<l[1][1]?z[l[0][0]]:e>=l[1][1]&&e<l[2][1]?z[l[1][0]]:e>=l[2][1]?z[l[2][0]]:z.normal}}},{kind:"method",key:"_severityLevels",value:function(){var e=this._config.segments;if(e)return e.map((function(e){return{level:null==e?void 0:e.from,stroke:null==e?void 0:e.color,label:null==e?void 0:e.label}}));var t=this._config.severity;return t?Object.keys(t).map((function(e){return{level:t[e],stroke:z[e]}})):[{level:0,stroke:z.normal}]}},{kind:"method",key:"_handleClick",value:function(){(0,C.B)(this,"hass-more-info",{entityId:this._config.entity})}},{kind:"get",static:!0,key:"styles",value:function(){return(0,b.iv)(l||(l=(0,c.Z)(["ha-card{cursor:pointer;height:100%;overflow:hidden;padding:16px;display:flex;align-items:center;justify-content:center;flex-direction:column;box-sizing:border-box}ha-card:focus{outline:0}ha-gauge{width:100%;max-width:250px}.name{text-align:center;line-height:initial;color:var(--primary-text-color);width:100%;font-size:15px;margin-top:8px}"])))}}]}}),b.oi)},88027:function(e,t,n){n.d(t,{Ff:function(){return r},Fv:function(){return i},IU:function(){return a}});var i=function(e,t,n){return isNaN(e)||isNaN(t)||isNaN(n)?0:e>n?n:e<t?t:e},r=function(e,t,n){return 100*(e-t)/(n-t)},a=function(e){return Math.round(10*e)/10}}}]);
//# sourceMappingURL=43283.h7c9EwUz_3U.js.map