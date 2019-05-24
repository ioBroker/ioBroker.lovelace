/*! For license information please see chunk.8607827244e1721fb05c.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{116:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(5);var i=a(53),r=a(35);const n=[i.a,r.a,{hostAttributes:{role:"option",tabindex:"0"}}]},135:function(e,t,a){"use strict";a(5),a(46),a(136);var i=a(6),r=a(4),n=a(116);Object(i.a)({_template:r.a`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[n.a]})},136:function(e,t,a){"use strict";a(46),a(55),a(44),a(52);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(i.content)},174:function(e,t,a){"use strict";a(5),a(46),a(44),a(52);var i=a(6),r=a(4);Object(i.a)({_template:r.a`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,is:"paper-item-body"})},197:function(e,t,a){"use strict";a(5),a(83);const i=a(4).a`
<dom-module id="paper-material-styles">
  <template>
    <style>
      html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      .paper-material {
        @apply --paper-material;
      }
      .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }

      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */
      :host {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material) {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]) {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]) {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]) {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]) {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`;i.setAttribute("style","display: none;"),document.head.appendChild(i.content)},224:function(e,t,a){"use strict";a(5);var i=a(6);Object(i.a)({is:"app-route",properties:{route:{type:Object,notify:!0},pattern:{type:String},data:{type:Object,value:function(){return{}},notify:!0},autoActivate:{type:Boolean,value:!1},_queryParamsUpdating:{type:Boolean,value:!1},queryParams:{type:Object,value:function(){return{}},notify:!0},tail:{type:Object,value:function(){return{path:null,prefix:null,__queryParams:null}},notify:!0},active:{type:Boolean,notify:!0,readOnly:!0},_matched:{type:String,value:""}},observers:["__tryToMatch(route.path, pattern)","__updatePathOnDataChange(data.*)","__tailPathChanged(tail.path)","__routeQueryParamsChanged(route.__queryParams)","__tailQueryParamsChanged(tail.__queryParams)","__queryParamsChanged(queryParams.*)"],created:function(){this.linkPaths("route.__queryParams","tail.__queryParams"),this.linkPaths("tail.__queryParams","route.__queryParams")},__routeQueryParamsChanged:function(e){if(e&&this.tail){if(this.tail.__queryParams!==e&&this.set("tail.__queryParams",e),!this.active||this._queryParamsUpdating)return;var t={},a=!1;for(var i in e)t[i]=e[i],!a&&this.queryParams&&e[i]===this.queryParams[i]||(a=!0);for(var i in this.queryParams)if(a||!(i in e)){a=!0;break}if(!a)return;this._queryParamsUpdating=!0,this.set("queryParams",t),this._queryParamsUpdating=!1}},__tailQueryParamsChanged:function(e){e&&this.route&&this.route.__queryParams!=e&&this.set("route.__queryParams",e)},__queryParamsChanged:function(e){this.active&&!this._queryParamsUpdating&&this.set("route.__"+e.path,e.value)},__resetProperties:function(){this._setActive(!1),this._matched=null},__tryToMatch:function(){if(this.route){var e=this.route.path,t=this.pattern;if(this.autoActivate&&""===e&&(e="/"),t)if(e){for(var a=e.split("/"),i=t.split("/"),r=[],n={},p=0;p<i.length;p++){var o=i[p];if(!o&&""!==o)break;var l=a.shift();if(!l&&""!==l)return void this.__resetProperties();if(r.push(l),":"==o.charAt(0))n[o.slice(1)]=l;else if(o!==l)return void this.__resetProperties()}this._matched=r.join("/");var s={};this.active||(s.active=!0);var h=this.route.prefix+this._matched,d=a.join("/");for(var c in a.length>0&&(d="/"+d),this.tail&&this.tail.prefix===h&&this.tail.path===d||(s.tail={prefix:h,path:d,__queryParams:this.route.__queryParams}),s.data=n,this._dataInUrl={},n)this._dataInUrl[c]=n[c];this.setProperties?this.setProperties(s,!0):this.__setMulti(s)}else this.__resetProperties()}},__tailPathChanged:function(e){if(this.active){var t=e,a=this._matched;t&&("/"!==t.charAt(0)&&(t="/"+t),a+=t),this.set("route.path",a)}},__updatePathOnDataChange:function(){if(this.route&&this.active){var e=this.__getLink({});e!==this.__getLink(this._dataInUrl)&&this.set("route.path",e)}},__getLink:function(e){var t={tail:null};for(var a in this.data)t[a]=this.data[a];for(var a in e)t[a]=e[a];var i=this.pattern.split("/").map(function(e){return":"==e[0]&&(e=t[e.slice(1)]),e},this);return t.tail&&t.tail.path&&(i.length>0&&"/"===t.tail.path.charAt(0)?i.push(t.tail.path.slice(1)):i.push(t.tail.path)),i.join("/")},__setMulti:function(e){for(var t in e)this._propertySetter(t,e[t]);void 0!==e.data&&(this._pathEffector("data",this.data),this._notifyChange("data")),void 0!==e.active&&(this._pathEffector("active",this.active),this._notifyChange("active")),void 0!==e.tail&&(this._pathEffector("tail",this.tail),this._notifyChange("tail"))}})},226:function(e,t,a){"use strict";a(5),a(46),a(105),a(197),a(55),a(44);var i=a(53),r=a(35),n=a(66);const p={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var e=1;this.disabled?e=0:this.active||this.pressed?e=4:this.receivedFocusFromKeyboard&&(e=3),this._setElevation(e)},_computeKeyboardClass:function(e){this.toggleClass("keyboard-focus",e)},_spaceKeyDownHandler:function(e){i.b._spaceKeyDownHandler.call(this,e),this.hasRipple()&&this.getRipple().ripples.length<1&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(e){i.b._spaceKeyUpHandler.call(this,e),this.hasRipple()&&this._ripple.uiUpAction()}},o=[i.a,r.a,n.a,p];var l=a(6);const s=a(4).a`
  <style include="paper-material-styles">
    :host {
      @apply --layout-vertical;
      @apply --layout-center-center;

      background: var(--paper-fab-background, var(--accent-color));
      border-radius: 50%;
      box-sizing: border-box;
      color: var(--text-primary-color);
      cursor: pointer;
      height: 56px;
      min-width: 0;
      outline: none;
      padding: 16px;
      position: relative;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      width: 56px;
      z-index: 0;

      /* NOTE: Both values are needed, since some phones require the value \`transparent\`. */
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-tap-highlight-color: transparent;

      @apply --paper-fab;
    }

    [hidden] {
      display: none !important;
    }

    :host([mini]) {
      width: 40px;
      height: 40px;
      padding: 8px;

      @apply --paper-fab-mini;
    }

    :host([disabled]) {
      color: var(--paper-fab-disabled-text, var(--paper-grey-500));
      background: var(--paper-fab-disabled-background, var(--paper-grey-300));

      @apply --paper-fab-disabled;
    }

    iron-icon {
      @apply --paper-fab-iron-icon;
    }

    span {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;

      @apply --paper-fab-label;
    }

    :host(.keyboard-focus) {
      background: var(--paper-fab-keyboard-focus-background, var(--paper-pink-900));
    }

    :host([elevation="1"]) {
      @apply --paper-material-elevation-1;
    }

    :host([elevation="2"]) {
      @apply --paper-material-elevation-2;
    }

    :host([elevation="3"]) {
      @apply --paper-material-elevation-3;
    }

    :host([elevation="4"]) {
      @apply --paper-material-elevation-4;
    }

    :host([elevation="5"]) {
      @apply --paper-material-elevation-5;
    }
  </style>

  <iron-icon id="icon" hidden\$="{{!_computeIsIconFab(icon, src)}}" src="[[src]]" icon="[[icon]]"></iron-icon>
  <span hidden\$="{{_computeIsIconFab(icon, src)}}">{{label}}</span>
`;s.setAttribute("strip-whitespace",""),Object(l.a)({_template:s,is:"paper-fab",behaviors:[o],properties:{src:{type:String,value:""},icon:{type:String,value:""},mini:{type:Boolean,value:!1,reflectToAttribute:!0},label:{type:String,observer:"_labelChanged"}},_labelChanged:function(){this.setAttribute("aria-label",this.label)},_computeIsIconFab:function(e,t){return e.length>0||t.length>0}})},614:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var i=a(15),r=a(11);const n=new WeakMap,p=Object(r.f)((...e)=>t=>{let a=n.get(t);void 0===a&&(a={values:[]},n.set(t,a));const r=a.values;a.values=e;for(let n=0;n<e.length&&!(void 0!==a.lastRenderedIndex&&n>a.lastRenderedIndex);n++){const p=e[n];if(Object(i.h)(p)||"function"!=typeof p.then){t.setValue(p),a.lastRenderedIndex=n;break}void 0!==a.lastRenderedIndex&&"function"==typeof p.then&&p===r[n]||(a.lastRenderedIndex=void 0,Promise.resolve(p).then(e=>{const i=a.values.indexOf(p);i>-1&&(void 0===a.lastRenderedIndex||i<a.lastRenderedIndex)&&(a.lastRenderedIndex=i,t.setValue(e),t.commit())}))}})}}]);
//# sourceMappingURL=chunk.8607827244e1721fb05c.js.map