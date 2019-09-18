(self.webpackJsonp=self.webpackJsonp||[]).push([[52],{199:function(t,n,e){"use strict";var r=e(203);e.d(n,"a",(function(){return a}));var a=Object(r.a)({types:{"entity-id":function(t){return"string"!=typeof t?"entity id should be a string":!!t.includes(".")||"entity id should be in the format 'domain.entity'"},icon:function(t){return"string"!=typeof t?"icon should be a string":!!t.includes(":")||"icon should be in the format 'mdi:icon'"}}})},203:function(t,n,e){"use strict";e.d(n,"a",(function(){return $}));class r extends TypeError{static format(t){const{type:n,path:e,value:r}=t;return`Expected a value of type \`${n}\`${e.length?` for \`${e.join(".")}\``:""} but received \`${JSON.stringify(r)}\`.`}constructor(t){super(r.format(t));const{data:n,path:e,value:a,reason:i,type:o,errors:c=[]}=t;this.data=n,this.path=e,this.value=a,this.reason=i,this.type=o,this.errors=c,c.length||c.push(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack}}var a=Object.prototype.toString,i=function(t){if(void 0===t)return"undefined";if(null===t)return"null";var n=typeof t;if("boolean"===n)return"boolean";if("string"===n)return"string";if("number"===n)return"number";if("symbol"===n)return"symbol";if("function"===n)return"GeneratorFunction"===o(t)?"generatorfunction":"function";if(function(t){return Array.isArray?Array.isArray(t):t instanceof Array}(t))return"array";if(function(t){if(t.constructor&&"function"==typeof t.constructor.isBuffer)return t.constructor.isBuffer(t);return!1}(t))return"buffer";if(function(t){try{if("number"==typeof t.length&&"function"==typeof t.callee)return!0}catch(n){if(-1!==n.message.indexOf("callee"))return!0}return!1}(t))return"arguments";if(function(t){return t instanceof Date||"function"==typeof t.toDateString&&"function"==typeof t.getDate&&"function"==typeof t.setDate}(t))return"date";if(function(t){return t instanceof Error||"string"==typeof t.message&&t.constructor&&"number"==typeof t.constructor.stackTraceLimit}(t))return"error";if(function(t){return t instanceof RegExp||"string"==typeof t.flags&&"boolean"==typeof t.ignoreCase&&"boolean"==typeof t.multiline&&"boolean"==typeof t.global}(t))return"regexp";switch(o(t)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(function(t){return"function"==typeof t.throw&&"function"==typeof t.return&&"function"==typeof t.next}(t))return"generator";switch(n=a.call(t)){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return n.slice(8,-1).toLowerCase().replace(/\s/g,"")};function o(t){return t.constructor?t.constructor.name:null}const c="@@__STRUCT__@@",s="@@__KIND__@@";function u(t){return!(!t||!t[c])}function f(t,n){return"function"==typeof t?t(n):t}var l=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t};class p{constructor(t,n,e){this.name=t,this.type=n,this.validate=e}}function d(t,n,e){if(u(t))return t[s];if(t instanceof p)return t;switch(i(t)){case"array":return t.length>1?w(t,n,e):v(t,n,e);case"function":return y(t,n,e);case"object":return g(t,n,e);case"string":{let r,a=!0;if(t.endsWith("?")&&(a=!1,t=t.slice(0,-1)),t.includes("|")){r=j(t.split(/\s*\|\s*/g),n,e)}else if(t.includes("&")){r=E(t.split(/\s*&\s*/g),n,e)}else r=m(t,n,e);return a||(r=b(r,void 0,e)),r}}throw new Error(`Invalid schema: ${t}`)}function h(t,n,e){if("array"!==i(t))throw new Error(`Invalid schema: ${t}`);const r=t.map(t=>{try{return JSON.stringify(t)}catch(n){return String(t)}}).join(" | ");return new p("enum",r,(e=f(n))=>t.includes(e)?[void 0,e]:[{data:e,path:[],value:e,type:r}])}function y(t,n,e){if("function"!==i(t))throw new Error(`Invalid schema: ${t}`);return new p("function","<function>",(e=f(n),r)=>{const a=t(e,r);let o,c={path:[],reason:null};switch(i(a)){case"boolean":o=a;break;case"string":o=!1,c.reason=a;break;case"object":o=!1,c=l({},c,a);break;default:throw new Error(`Invalid result: ${a}`)}return o?[void 0,e]:[l({type:"<function>",value:e,data:e},c)]})}function v(t,n,e){if("array"!==i(t)||1!==t.length)throw new Error(`Invalid schema: ${t}`);const r=m("array",void 0,e),a=d(t[0],void 0,e),o=`[${a.type}]`;return new p("list",o,(t=f(n))=>{const[e,i]=r.validate(t);if(e)return e.type=o,[e];t=i;const c=[],s=[];for(let n=0;n<t.length;n++){const e=t[n],[r,i]=a.validate(e);if(r){(r.errors||[r]).forEach(e=>{e.path=[n].concat(e.path),e.data=t,c.push(e)})}else s[n]=i}return c.length?[l({},c[0],{errors:c})]:[void 0,s]})}function g(t,n,e){if("object"!==i(t))throw new Error(`Invalid schema: ${t}`);const r=m("object",void 0,e),a=[],o={};for(const i in t){a.push(i);const n=d(t[i],void 0,e);o[i]=n}const c=`{${a.join()}}`;return new p("object",c,(t=f(n))=>{const[e]=r.validate(t);if(e)return e.type=c,[e];const a=[],i={},s=Object.keys(t),u=Object.keys(o);return new Set(s.concat(u)).forEach(e=>{let r=t[e];const c=o[e];if(void 0===r){r=f(n&&n[e],t)}if(!c){const n={data:t,path:[e],value:r};return void a.push(n)}const[s,u]=c.validate(r,t);if(s){(s.errors||[s]).forEach(n=>{n.path=[e].concat(n.path),n.data=t,a.push(n)})}else(e in t||void 0!==u)&&(i[e]=u)}),a.length?[l({},a[0],{errors:a})]:[void 0,i]})}function b(t,n,e){return j([t,"undefined"],n,e)}function m(t,n,e){if("string"!==i(t))throw new Error(`Invalid schema: ${t}`);const{types:r}=e,a=r[t];if("function"!==i(a))throw new Error(`Invalid type: ${t}`);const o=y(a,n),c=t;return new p("scalar",c,t=>{const[n,e]=o.validate(t);return n?(n.type=c,[n]):[void 0,e]})}function w(t,n,e){if("array"!==i(t))throw new Error(`Invalid schema: ${t}`);const r=t.map(t=>d(t,void 0,e)),a=m("array",void 0,e),o=`[${r.map(t=>t.type).join()}]`;return new p("tuple",o,(t=f(n))=>{const[e]=a.validate(t);if(e)return e.type=o,[e];const i=[],c=[],s=Math.max(t.length,r.length);for(let n=0;n<s;n++){const e=r[n],a=t[n];if(!e){const e={data:t,path:[n],value:a};c.push(e);continue}const[o,s]=e.validate(a);if(o){(o.errors||[o]).forEach(e=>{e.path=[n].concat(e.path),e.data=t,c.push(e)})}else i[n]=s}return c.length?[l({},c[0],{errors:c})]:[void 0,i]})}function j(t,n,e){if("array"!==i(t))throw new Error(`Invalid schema: ${t}`);const r=t.map(t=>d(t,void 0,e)),a=r.map(t=>t.type).join(" | ");return new p("union",a,(t=f(n))=>{const e=[];for(const n of r){const[r,a]=n.validate(t);if(!r)return[void 0,a];e.push(r)}return e[0].type=a,e})}function E(t,n,e){if("array"!==i(t))throw new Error(`Invalid schema: ${t}`);const r=t.map(t=>d(t,void 0,e)),a=r.map(t=>t.type).join(" & ");return new p("intersection",a,(t=f(n))=>{let e=t;for(const n of r){const[t,r]=n.validate(e);if(t)return t.type=a,[t];e=r}return[void 0,e]})}const O={any:d,dict:function(t,n,e){if("array"!==i(t)||2!==t.length)throw new Error(`Invalid schema: ${t}`);const r=m("object",void 0,e),a=d(t[0],void 0,e),o=d(t[1],void 0,e),c=`dict<${a.type},${o.type}>`;return new p("dict",c,t=>{const e=f(n);t=e?l({},e,t):t;const[i]=r.validate(t);if(i)return i.type=c,[i];const s={},u=[];for(let n in t){const e=t[n],[r,i]=a.validate(n);if(r){(r.errors||[r]).forEach(e=>{e.path=[n].concat(e.path),e.data=t,u.push(e)});continue}n=i;const[c,f]=o.validate(e);if(c){(c.errors||[c]).forEach(e=>{e.path=[n].concat(e.path),e.data=t,u.push(e)})}else s[n]=f}return u.length?[l({},u[0],{errors:u})]:[void 0,s]})},enum:h,enums:function(t,n,e){return v([h(t,void 0)],n,e)},function:y,instance:function(t,n,e){const r=`instance<${t.name}>`;return new p("instance",r,(e=f(n))=>e instanceof t?[void 0,e]:[{data:e,path:[],value:e,type:r}])},interface:function(t,n,e){if("object"!==i(t))throw new Error(`Invalid schema: ${t}`);const r=m("object",void 0,e),a=[],o={};for(const i in t){a.push(i);const n=d(t[i],void 0,e);o[i]=n}const c=`{${a.join()}}`;return new p("interface",c,(t=f(n))=>{const[e]=r.validate(t);if(e)return e.type=c,[e];const a=[],i=t;for(const r in o){let e=t[r];const c=o[r];if(void 0===e){e=f(n&&n[r],t)}const[s,u]=c.validate(e,t);if(s){(s.errors||[s]).forEach(n=>{n.path=[r].concat(n.path),n.data=t,a.push(n)})}else(r in t||void 0!==u)&&(i[r]=u)}return a.length?[l({},a[0],{errors:a})]:[void 0,i]})},lazy:function(t,n,e){if("function"!==i(t))throw new Error(`Invalid schema: ${t}`);let r,a;return r=new p("lazy","lazy...",n=>(a=t(),r.name=a.kind,r.type=a.type,r.validate=a.validate,r.validate(n)))},list:v,literal:function(t,n,e){const r=`literal: ${JSON.stringify(t)}`;return new p("literal",r,(e=f(n))=>e===t?[void 0,e]:[{data:e,path:[],value:e,type:r}])},object:g,optional:b,partial:function(t,n,e){if("object"!==i(t))throw new Error(`Invalid schema: ${t}`);const r=m("object",void 0,e),a=[],o={};for(const i in t){a.push(i);const n=d(t[i],void 0,e);o[i]=n}const c=`{${a.join()},...}`;return new p("partial",c,(t=f(n))=>{const[e]=r.validate(t);if(e)return e.type=c,[e];const a=[],i={};for(const r in o){let e=t[r];const c=o[r];if(void 0===e){e=f(n&&n[r],t)}const[s,u]=c.validate(e,t);if(s){(s.errors||[s]).forEach(n=>{n.path=[r].concat(n.path),n.data=t,a.push(n)})}else(r in t||void 0!==u)&&(i[r]=u)}return a.length?[l({},a[0],{errors:a})]:[void 0,i]})},scalar:m,tuple:w,union:j,intersection:E,dynamic:function(t,n,e){if("function"!==i(t))throw new Error(`Invalid schema: ${t}`);return new p("dynamic","dynamic...",(e=f(n),r)=>{const a=t(e,r);if("function"!==i(a))throw new Error(`Invalid schema: ${a}`);const[o,c]=a.validate(e);return o?[o]:[void 0,c]})}},_={any:t=>void 0!==t};function $(t={}){const n=l({},_,t.types||{});function e(t,e,a={}){u(t)&&(t=t.schema);const i=O.any(t,e,l({},a,{types:n}));function o(t){if(this instanceof o)throw new Error("Invalid `new` keyword!");return o.assert(t)}return Object.defineProperty(o,c,{value:!0}),Object.defineProperty(o,s,{value:i}),o.kind=i.name,o.type=i.type,o.schema=t,o.defaults=e,o.options=a,o.assert=t=>{const[n,e]=i.validate(t);if(n)throw new r(n);return e},o.test=t=>{const[n]=i.validate(t);return!n},o.validate=t=>{const[n,e]=i.validate(t);return n?[new r(n)]:[void 0,e]},o}return Object.keys(O).forEach(t=>{const r=O[t];e[t]=(t,a,i)=>{return e(r(t,a,l({},i,{types:n})),a,i)}}),e}["arguments","array","boolean","buffer","error","float32array","float64array","function","generatorfunction","int16array","int32array","int8array","map","null","number","object","promise","regexp","set","string","symbol","uint16array","uint32array","uint8array","uint8clampedarray","undefined","weakmap","weakset"].forEach(t=>{_[t]=n=>i(n)===t}),_.date=t=>"date"===i(t)&&!isNaN(t);$()},205:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r,a=e(0),i=e(1),o=Object(i.f)(r||(r=Object(a.f)(["\n  <style>\n    paper-toggle-button {\n      padding-top: 16px;\n    }\n    .side-by-side {\n      display: flex;\n    }\n    .side-by-side > * {\n      flex: 1;\n      padding-right: 4px;\n    }\n    .suffix {\n      margin: 0 8px;\n    }\n  </style>\n"],["\n  <style>\n    paper-toggle-button {\n      padding-top: 16px;\n    }\n    .side-by-side {\n      display: flex;\n    }\n    .side-by-side > * {\n      flex: 1;\n      padding-right: 4px;\n    }\n    .suffix {\n      margin: 0 8px;\n    }\n  </style>\n"])))},688:function(t,n,e){"use strict";e.r(n),e.d(n,"HuiIframeCardEditor",(function(){return l}));var r,a,i=e(0),o=e(1),c=(e(93),e(199)),s=e(18),u=e(205),f=Object(c.a)({type:"string",title:"string?",url:"string?",aspect_ratio:"string?"}),l=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return Object(i.d)(n,t),n.prototype.setConfig=function(t){t=f(t),this._config=t},Object.defineProperty(n.prototype,"_title",{get:function(){return this._config.title||""},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_url",{get:function(){return this._config.url||""},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_aspect_ratio",{get:function(){return this._config.aspect_ratio||""},enumerable:!0,configurable:!0}),n.prototype.render=function(){return this.hass?Object(o.f)(a||(a=Object(i.f)(["\n      ",'\n      <div class="card-config">\n        <div class="side-by-side">\n          <paper-input\n            label="Title"\n            .value="','"\n            .configValue="','"\n            @value-changed="','"\n          ></paper-input>\n          <paper-input\n            label="Aspect Ratio"\n            type="number"\n            .value="','"\n            .configValue="','"\n            @value-changed="','"\n          ></paper-input>\n        </div>\n        <paper-input\n          label="Url"\n          .value="','"\n          .configValue="','"\n          @value-changed="','"\n        ></paper-input>\n      </div>\n    '],["\n      ",'\n      <div class="card-config">\n        <div class="side-by-side">\n          <paper-input\n            label="Title"\n            .value="','"\n            .configValue="','"\n            @value-changed="','"\n          ></paper-input>\n          <paper-input\n            label="Aspect Ratio"\n            type="number"\n            .value="','"\n            .configValue="','"\n            @value-changed="','"\n          ></paper-input>\n        </div>\n        <paper-input\n          label="Url"\n          .value="','"\n          .configValue="','"\n          @value-changed="','"\n        ></paper-input>\n      </div>\n    '])),u.a,this._title,"title",this._valueChanged,Number(this._aspect_ratio.replace("%","")),"aspect_ratio",this._valueChanged,this._url,"url",this._valueChanged):Object(o.f)(r||(r=Object(i.f)([""],[""])))},n.prototype._valueChanged=function(t){var n;if(this._config&&this.hass){var e=t.target,r=e.value;"aspect_ratio"===e.configValue&&e.value&&(r+="%"),this["_"+e.configValue]!==r&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config=Object(i.a)(Object(i.a)({},this._config),((n={})[e.configValue]=r,n))),Object(s.a)(this,"config-changed",{config:this._config}))}},Object(i.c)([Object(o.g)()],n.prototype,"hass",void 0),Object(i.c)([Object(o.g)()],n.prototype,"_config",void 0),n=Object(i.c)([Object(o.d)("hui-iframe-card-editor")],n)}(o.a)}}]);
//# sourceMappingURL=chunk.9b9d2020490843866d2b.js.map