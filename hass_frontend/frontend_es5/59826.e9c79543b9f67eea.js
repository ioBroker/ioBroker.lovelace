"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["59826"],{51339:function(e,a,t){t(52247),t(19134),t(5740),Object.defineProperty(a,"__esModule",{value:!0}),a.CanonicalCodeForDisplayNames=function(e,a){if("language"===e)return(0,r.CanonicalizeLocaleList)([a])[0];if("region"===e){if(t=a,!i.test(t))throw RangeError("invalid region");return a.toUpperCase()}var t;if("script"===e){if(c=a,!l.test(c))throw RangeError("invalid script");return"".concat(a[0].toUpperCase()).concat(a.slice(1).toLowerCase())}var c;if("calendar"===e){if(!function(e){return o.test(e)}(a))throw RangeError("invalid calendar");return a.toLowerCase()}if("dateTimeField"===e){if(!(0,n.IsValidDateTimeFieldCode)(a))throw RangeError("invalid dateTimeField");return a}if((0,r.invariant)("currency"===e,"invalid type"),!(0,r.IsWellFormedCurrencyCode)(a))throw RangeError("invalid currency");return a.toUpperCase()};var r=t(9556),n=t(87694),i=/^([a-z]{2}|[0-9]{3})$/i,l=/^[a-z]{4}$/i,o=/^[a-z0-9]{3,8}([-_][a-z0-9]{3,8})*$/i},87694:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.IsValidDateTimeFieldCode=function(e){return t.indexOf(e)>=0};var t=["era","year","quarter","month","weekOfYear","weekday","day","dayPeriod","hour","minute","second","timeZoneName"]},46607:function(e,a,t){t(63721),t(52247),t(71695),t(19134),t(5740),t(11740),t(92519),t(42179),t(89256),t(24931),t(88463),t(57449),t(19814),t(97003),t(46692),t(47021),Object.defineProperty(a,"__esModule",{value:!0}),a.DisplayNames=void 0;var r=t(9065),n=t(9556),i=t(51339),l=t(87694),o=t(75233),c=function(){function e(a,t){if(void 0===this.constructor)throw TypeError("Constructor Intl.DisplayNames requires 'new'");var r=(0,n.CanonicalizeLocaleList)(a);t=(0,n.GetOptionsObject)(t);var i=Object.create(null),l=e.localeData,c=(0,n.GetOption)(t,"localeMatcher","string",["lookup","best fit"],"best fit");i.localeMatcher=c;var s=(0,o.ResolveLocale)(Array.from(e.availableLocales),r,i,[],e.localeData,e.getDefaultLocale),d=(0,n.GetOption)(t,"style","string",["narrow","short","long"],"long");u(this,"style",d);var f=(0,n.GetOption)(t,"type","string",["language","region","script","currency","calendar","dateTimeField"],void 0);if(void 0===f)throw TypeError('Intl.DisplayNames constructor requires "type" option');u(this,"type",f),u(this,"fallback",(0,n.GetOption)(t,"fallback","string",["code","none"],"code")),u(this,"locale",s.locale);var p=s.dataLocale,v=l[p];(0,n.invariant)(!!v,"Missing locale data for ".concat(p)),u(this,"localeData",v),(0,n.invariant)(void 0!==v,"locale data for ".concat(s.locale," does not exist."));var y=v.types;(0,n.invariant)("object"==typeof y&&null!=y,"invalid types data");var g=y[f];(0,n.invariant)("object"==typeof g&&null!=g,"invalid typeFields data");var b=(0,n.GetOption)(t,"languageDisplay","string",["dialect","standard"],"dialect");if("language"===f){u(this,"languageDisplay",b);var h=y[f][b];(0,n.invariant)("object"==typeof h&&null!=h,"invalid language typeFields data")}var m="language"===f?y[f][b][d]:y[f][d];(0,n.invariant)("object"==typeof m&&null!=m,"invalid styleFields data"),u(this,"fields",m)}return e.supportedLocalesOf=function(a,t){return(0,n.SupportedLocales)(e.availableLocales,(0,n.CanonicalizeLocaleList)(a),t)},e.__addLocaleData=function(){for(var a=[],t=0;t<arguments.length;t++)a[t]=arguments[t];for(var r=0,n=a;r<n.length;r++){var i=n[r],l=i.data,o=i.locale,c=new Intl.Locale(o).minimize().toString();e.localeData[o]=e.localeData[c]=l,e.availableLocales.add(c),e.availableLocales.add(o),e.__defaultLocale||(e.__defaultLocale=c)}},e.prototype.of=function(e){f(this,"of");var a=d(this,"type"),t=(0,n.ToString)(e);if(!function(e,a){switch(e){case"language":return/^[a-z]{2,3}(-[a-z]{4})?(-([a-z]{2}|\d{3}))?(-([a-z\d]{5,8}|\d[a-z\d]{3}))*$/i.test(a);case"region":return/^([a-z]{2}|\d{3})$/i.test(a);case"script":return/^[a-z]{4}$/i.test(a);case"currency":return(0,n.IsWellFormedCurrencyCode)(a);case"calendar":return/^[a-z0-9]{3,8}([-_][a-z0-9]{3,8})*$/i.test(a);case"dateTimeField":return(0,l.IsValidDateTimeFieldCode)(a)}}(a,t))throw RangeError("invalid code for Intl.DisplayNames.prototype.of");var r,o=(0,n.getMultiInternalSlots)(s,this,"localeData","style","fallback"),c=o.localeData,u=o.style,p=o.fallback,v=(0,i.CanonicalCodeForDisplayNames)(a,t);if("language"===a){r=function(e,a,t,r,n){var i=a.types.language[e],l=i[t][r]||i.long[r];if(void 0!==l)return l;var o=/-([a-z]{2}|\d{3})\b/i.exec(r);if(o){var c=r.substring(0,o.index)+r.substring(o.index+o[0].length),s=o[1],d=i[t][c]||i.long[c];if(void 0===d||!s)return d;var u=a.types.region,f=u[t][s]||u.long[s];if(f||"code"===n)return a.patterns.locale.replace("{0}",d).replace("{1}",f||s)}}(d(this,"languageDisplay"),c,u,v,p)}else{var y=c.types[a];r=y[u][v]||y.long[v]}return void 0!==r?r:"code"===p?t:void 0},e.prototype.resolvedOptions=function(){return f(this,"resolvedOptions"),r.__assign({},(0,n.getMultiInternalSlots)(s,this,"locale","style","type","fallback","languageDisplay"))},e.getDefaultLocale=function(){return e.__defaultLocale},e.localeData={},e.availableLocales=new Set,e.__defaultLocale="",e.polyfilled=!0,e}();a.DisplayNames=c;try{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c.prototype,Symbol.toStringTag,{value:"Intl.DisplayNames",configurable:!0,enumerable:!1,writable:!1}),Object.defineProperty(c,"length",{value:2,writable:!1,enumerable:!1,configurable:!0})}catch(p){}var s=new WeakMap;function d(e,a){return(0,n.getInternalSlot)(s,e,a)}function u(e,a,t){(0,n.setInternalSlot)(s,e,a,t)}function f(e,a){if(!(e instanceof c))throw TypeError("Method Intl.DisplayNames.prototype.".concat(a," called on incompatible receiver"))}},31514:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0});var r=t(46607);Object.defineProperty(Intl,"DisplayNames",{value:r.DisplayNames,enumerable:!1,writable:!0,configurable:!0})}}]);
//# sourceMappingURL=59826.e9c79543b9f67eea.js.map