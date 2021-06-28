/*! For license information please see chunk.73088873c87f10f281ad.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[3383],{94081:(e,t,r)=>{"use strict";r.d(t,{eZ:()=>s});const s=({finisher:e,descriptor:t})=>(r,s)=>{var i;if(void 0===s){const s=null!==(i=r.originalKey)&&void 0!==i?i:r.key,n=null!=t?{kind:"method",placement:"prototype",key:s,descriptor:t(r.key)}:{...r,key:s};return null!=e&&(n.finisher=function(t){e(t,s)}),n}{const i=r.constructor;void 0!==t&&Object.defineProperty(r,s,t(s)),null==e||e(i,s)}}},26861:(e,t,r)=>{"use strict";r.d(t,{M:()=>s});const s=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:r,elements:s}=t;return{kind:r,elements:s,finisher(t){window.customElements.define(e,t)}}})(e,t)},78137:(e,t,r)=>{"use strict";r.d(t,{h:()=>i});var s=r(94081);function i(e){return(0,s.eZ)({finisher:(t,r)=>{Object.assign(t.prototype[r],e)}})}},12445:(e,t,r)=>{"use strict";r.d(t,{C:()=>i});const s=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function i(e){return(t,r)=>void 0!==r?((e,t,r)=>{t.constructor.createProperty(r,e)})(e,t,r):s(e,t)}},56596:(e,t,r)=>{"use strict";r.d(t,{G:()=>i});var s=r(94081);function i(e){return(0,s.eZ)({descriptor:t=>({async get(){var t;return await this.updateComplete,null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)},enumerable:!0,configurable:!0})})}},96022:(e,t,r)=>{"use strict";r.d(t,{I:()=>i});var s=r(94081);function i(e,t){return(0,s.eZ)({descriptor:r=>{const s={get(){var t;return null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof r?Symbol():"__"+r;s.get=function(){var r;return void 0===this[t]&&(this[t]=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e)),this[t]}}return s}})}},20238:(e,t,r)=>{"use strict";r.d(t,{S:()=>i});var s=r(12445);function i(e){return(0,s.C)({...e,state:!0,attribute:!1})}},72774:(e,t,r)=>{"use strict";r.d(t,{K:()=>s});var s=function(){function e(e){void 0===e&&(e={}),this.adapter=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}()},65660:(e,t,r)=>{"use strict";r(65233);const s=r(50856).d`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;s.setAttribute("style","display: none;"),document.head.appendChild(s.content);var i=document.createElement("style");i.textContent="[hidden] { display: none !important; }",document.head.appendChild(i)},15495:(e,t,r)=>{"use strict";r(65233);const s=r(50856).d`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;s.setAttribute("style","display: none;"),document.head.appendChild(s.content)},1656:(e,t,r)=>{"use strict";r(65233),r(15495);const s=r(50856).d`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;s.setAttribute("style","display: none;"),document.head.appendChild(s.content)},54242:(e,t,r)=>{"use strict";r(65233);const s=r(50856).d`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;s.setAttribute("style","display: none;"),document.head.appendChild(s.content)},47686:(e,t,r)=>{"use strict";r(65233);if(!window.polymerSkipLoadingFontRoboto){const e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.crossOrigin="anonymous",e.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(e)}const s=r(50856).d`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`;s.setAttribute("style","display: none;"),document.head.appendChild(s.content)},37961:(e,t,r)=>{"use strict";var s=r(28426),i=r(76389),n=r(4507),a=r(36608);let o=(0,i.o)((e=>{let t=(0,a.SH)(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let r=t.path;if("items"==r){let r=t.base||[],s=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),s){let e=(0,n.c)(r,s);this.__applySplices(e)}this.__lastItems=r,this.__lastMulti=e}else if("items.splices"==t.path)this.__applySplices(t.value.indexSplices);else{let e=r.slice("items.".length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let r=0;r<e.length;r++){let s=e[r];t.forEach(((e,r)=>{e<s.index||(e>=s.index+s.removed.length?t.set(r,e+s.addedCount-s.removed.length):t.set(r,-1))}));for(let e=0;e<s.addedCount;e++){let r=s.index+e;t.has(this.items[r])&&t.set(this.items[r],r)}}this.__updateLinks();let r=0;t.forEach(((e,s)=>{e<0?(this.multi?this.splice("selected",r,1):this.selected=this.selectedItem=null,t.delete(s)):r++}))}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach((t=>{t>=0&&this.linkPaths("items."+t,"selected."+e++)}))}else this.__selectedMap.forEach((e=>{this.linkPaths("selected","items."+e),this.linkPaths("selectedItem","items."+e)}))}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach(((r,s)=>{t==e++&&this.deselect(s)}))}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths["items."+e];if(t)return parseInt(t.slice("selected.".length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let r;this.__selectedMap.delete(e),this.multi&&(r=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice("selected",r,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push("selected",t):this.selected=this.selectedItem=t)}}}))(s.H3);class l extends o{static get is(){return"array-selector"}}customElements.define(l.is,l)},5618:(e,t,r)=>{"use strict";var s=r(34816),i=r(10868),n=r(26539);const a=new s.ZP;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,r){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,r){},styleSubtree(e,t){a.processStyles(),(0,i.wW)(e,t)},styleElement(e){a.processStyles()},styleDocument(e){a.processStyles(),(0,i.wW)(document.body,e)},getComputedStyleValue:(e,t)=>(0,i.B7)(e,t),flushCustomStyles(){},nativeCss:n.rd,nativeShadow:n.WA,cssBuild:n.Cp,disableRuntime:n.jF}),window.ShadyCSS.CustomStyleInterface=a;var o=r(15392);const l="include",p=window.ShadyCSS.CustomStyleInterface;class d extends HTMLElement{constructor(){super(),this._style=null,p.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute(l);return t&&(e.removeAttribute(l),e.textContent=(0,o.jv)(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",d)},9024:(e,t,r)=>{"use strict";r(56646);var s=r(40729),i=r(18691),n=r(60995),a=r(74460);const o=(0,n._)((0,i.w)((0,s.q)(HTMLElement)));customElements.define("dom-bind",class extends o{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),a.XN)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){this.parentNode.insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver((()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()}));return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}})},26047:(e,t,r)=>{"use strict";var s=r(28426),i=r(52521),n=r(78956),a=r(93252),o=r(21683),l=r(4059);class p extends s.H3{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=n.d.debounce(this.__renderDebouncer,o.YA,(()=>this.__render())),(0,a.E)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback(),this.parentNode&&(this.parentNode.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||this.parentNode.host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){(0,a.y)()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let e=this.parentNode;if(e){if(!this.__ctor){let e=this.querySelector("template");if(!e){let e=new MutationObserver((()=>{if(!this.querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()}));return e.observe(this,{childList:!0}),!1}this.__ctor=(0,i.Uv)(e,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[(0,l.Jz)(e)]=!0))}})}if(this.__instance){this.__syncHostProperties();let t=this.__instance.children;if(t&&t.length){if(this.previousSibling!==t[t.length-1])for(let r,s=0;s<t.length&&(r=t[s]);s++)e.insertBefore(r,this)}}else this.__instance=new this.__ctor,e.insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let e=this.__invalidProps;if(e){for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=e[0].parentNode;if(t)for(let r,s=0;s<e.length&&(r=e[s]);s++)t.removeChild(r)}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(e)}}customElements.define(p.is,p)},42173:(e,t,r)=>{"use strict";var s=r(28426),i=r(52521),n=r(78956),a=r(93252),o=r(18691),l=r(4059),p=r(21683);const d=(0,o.w)(s.H3);class c extends d{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;let e=this.parentNode;for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){let e=this.template=this.querySelector("template");if(!e){let e=new MutationObserver((()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()}));return e.observe(this,{childList:!0}),!1}let t={};t[this.as]=!0,t[this.indexAs]=!0,t[this.itemsIndexAs]=!0,this.__ctor=(0,i.Uv)(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:t,forwardHostProp:function(e,t){let r=this.__instances;for(let s,i=0;i<r.length&&(s=r[i]);i++)s.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,r){if((0,l.wB)(this.as,t)){let s=e[this.itemsIndexAs];t==this.as&&(this.items[s]=r);let i=(0,l.Iu)(this.as,"items."+s,t);this.notifyPath(i,r)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,r=this.__getMethodHost();return function(){return r[t].apply(r,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame((()=>this.__renderChunk()))}__renderChunk(){let e=performance.now(),t=this._targetFrameTime/(e-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*t)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=e,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let r=0;r<t.length;r++)0===e.indexOf(t[r])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(e,t=0){this.__renderDebouncer=n.d.debounce(this.__renderDebouncer,t>0?p.Wc.after(t):p.YA,e.bind(this)),(0,a.E)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),(0,a.y)()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let e=this.items||[],t=new Array(e.length);for(let r=0;r<e.length;r++)t[r]=r;this.__filterFn&&(t=t.filter(((t,r,s)=>this.__filterFn(e[t],r,s)))),this.__sortFn&&t.sort(((t,r)=>this.__sortFn(e[t],e[r])));const r=this.__itemsIdxToInstIdx={};let s=0;const i=Math.min(t.length,this.__limit);for(;s<i;s++){let i=this.__instances[s],n=t[s],a=e[n];r[n]=s,i?(i._setPendingProperty(this.as,a),i._setPendingProperty(this.indexAs,s),i._setPendingProperty(this.itemsIndexAs,n),i._flushProperties()):this.__insertInstance(a,s,n)}for(let e=this.__instances.length-1;e>=s;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];for(let e=0;e<t.children.length;e++){let r=t.children[e];t.root.appendChild(r)}return t}__attachInstance(e,t){let r=this.__instances[e];t.insertBefore(r.root,this)}__detachAndRemoveInstance(e){let t=this.__detachInstance(e);t&&this.__pool.push(t),this.__instances.splice(e,1)}__stampInstance(e,t,r){let s={};return s[this.as]=e,s[this.indexAs]=t,s[this.itemsIndexAs]=r,new this.__ctor(s)}__insertInstance(e,t,r){let s=this.__pool.pop();s?(s._setPendingProperty(this.as,e),s._setPendingProperty(this.indexAs,t),s._setPendingProperty(this.itemsIndexAs,r),s._flushProperties()):s=this.__stampInstance(e,t,r);let i=this.__instances[t+1],n=i?i.children[0]:this;return this.parentNode.insertBefore(s.root,n),this.__instances[t]=s,s}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let r=e.slice(6),s=r.indexOf("."),i=s<0?r:r.substring(0,s);if(i==parseInt(i,10)){let e=s<0?"":r.substring(s+1);this.__handleObservedPaths(e);let n=this.__itemsIdxToInstIdx[i],a=this.__instances[n];if(a){let r=this.as+(e?"."+e:"");a._setPendingPropertyOrPath(r,t,!1,!0),a._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return(0,i.GJ)(this.template,e)}}customElements.define(c.is,c)},81850:(e,t,r)=>{"use strict";r.d(t,{x:()=>ue});var s=r(26539);class i{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function n(e){return a(function(e){let t=new i;t.start=0,t.end=e.length;let r=t;for(let s=0,n=e.length;s<n;s++)if(e[s]===p){r.rules||(r.rules=[]);let e=r,t=e.rules[e.rules.length-1]||null;r=new i,r.start=s+1,r.parent=e,r.previous=t,e.rules.push(r)}else e[s]===d&&(r.end=s+1,r=r.parent||t);return t}(e=e.replace(c.comments,"").replace(c.port,"")),e)}function a(e,t){let r=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=r.trim(),e.parent){let s=e.previous?e.previous.end:e.parent.start;r=t.substring(s,e.start-1),r=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(r),r=r.replace(c.multipleSpaces," "),r=r.substring(r.lastIndexOf(";")+1);let i=e.parsedSelector=e.selector=r.trim();e.atRule=0===i.indexOf(f),e.atRule?0===i.indexOf(u)?e.type=l.MEDIA_RULE:i.match(c.keyframesRule)&&(e.type=l.KEYFRAMES_RULE,e.keyframesName=e.selector.split(c.multipleSpaces).pop()):0===i.indexOf(h)?e.type=l.MIXIN_RULE:e.type=l.STYLE_RULE}let s=e.rules;if(s)for(let e,r=0,i=s.length;r<i&&(e=s[r]);r++)a(e,t);return e}function o(e,t,r=""){let s="";if(e.cssText||e.rules){let r=e.rules;if(r&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(h)}(r))for(let e,i=0,n=r.length;i<n&&(e=r[i]);i++)s=o(e,t,s);else s=t?e.cssText:function(e){return function(e){return e.replace(c.mixinApply,"").replace(c.varApply,"")}(e=function(e){return e.replace(c.customProp,"").replace(c.mixinProp,"")}(e))}(e.cssText),s=s.trim(),s&&(s="  "+s+"\n")}return s&&(e.selector&&(r+=e.selector+" "+p+"\n"),r+=s,e.selector&&(r+=d+"\n\n")),r}const l={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},p="{",d="}",c={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},h="--",u="@media",f="@";var _=r(60309);const m=new Set;function y(e){const t=e.textContent;if(!m.has(t)){m.add(t);const r=e.cloneNode(!0);document.head.appendChild(r)}}function g(e){return e.hasAttribute("shady-unscoped")}function b(e,t){return e?("string"==typeof e&&(e=n(e)),t&&w(e,t),o(e,s.rd)):""}function x(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=n(e.textContent)),e.__cssRules||null}function w(e,t,r,s){if(!e)return;let i=!1,n=e.type;if(s&&n===l.MEDIA_RULE){let t=e.selector.match(_.mA);t&&(window.matchMedia(t[1]).matches||(i=!0))}n===l.STYLE_RULE?t(e):r&&n===l.KEYFRAMES_RULE?r(e):n===l.MIXIN_RULE&&(i=!0);let a=e.rules;if(a&&!i)for(let e,i=0,n=a.length;i<n&&(e=a[i]);i++)w(e,t,r,s)}function v(e,t){let r=0;for(let s=t,i=e.length;s<i;s++)if("("===e[s])r++;else if(")"===e[s]&&0==--r)return s;return-1}function C(e,t){let r=e.indexOf("var(");if(-1===r)return t(e,"","","");let s=v(e,r+3),i=e.substring(r+4,s),n=e.substring(0,r),a=C(e.substring(s+1),t),o=i.indexOf(",");return-1===o?t(n,i.trim(),"",a):t(n,i.substring(0,o).trim(),i.substring(o+1).trim(),a)}window.ShadyDOM&&window.ShadyDOM.wrap;const P="css-build";function S(e){if(void 0!==s.Cp)return s.Cp;if(void 0===e.__cssBuild){const t=e.getAttribute(P);if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if(e[0]===P)return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}(e),e.__cssBuild=t}}return e.__cssBuild||""}function E(e){return""!==S(e)}var k=r(10868);const O=/;\s*/m,T=/^\s*(initial)|(inherit)\s*$/,A=/\s*!important/,N="_-_";class I{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let R=null;class M{constructor(){this._currentElement=null,this._measureElement=null,this._map=new I}detectMixin(e){return(0,k.OH)(e)}gatherStyles(e){const t=function(e){const t=[],r=e.querySelectorAll("style");for(let e=0;e<r.length;e++){const i=r[e];g(i)?s.WA||(y(i),i.parentNode.removeChild(i)):(t.push(i.textContent),i.parentNode.removeChild(i))}return t.join("").trim()}(e.content);if(t){const r=document.createElement("style");return r.textContent=t,e.content.insertBefore(r,e.content.firstChild),r}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const r=e._gatheredStyle;return r?this.transformStyle(r,t):null}transformStyle(e,t=""){let r=x(e);return this.transformRules(r,t),e.textContent=b(r),r}transformCustomStyle(e){let t=x(e);return w(t,(e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)})),e.textContent=b(t),t}transformRules(e,t){this._currentElement=t,w(e,(e=>{this.transformRule(e)})),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(_.CN,((e,r,s,i)=>this._produceCssProperties(e,r,s,i,t))),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const r={};let s=!1;return w(t,(t=>{s=s||t===e,s||t.selector===e.selector&&Object.assign(r,this._cssTextToMap(t.parsedCssText))})),r}_consumeCssProperties(e,t){let r=null;for(;r=_.$T.exec(e);){let s=r[0],i=r[1],n=r.index,a=n+s.indexOf("@apply"),o=n+s.length,l=e.slice(0,a),p=e.slice(o),d=t?this._fallbacksFromPreviousRules(t):{};Object.assign(d,this._cssTextToMap(l));let c=this._atApplyToCssProperties(i,d);e=`${l}${c}${p}`,_.$T.lastIndex=n+c.length}return e}_atApplyToCssProperties(e,t){e=e.replace(O,"");let r=[],s=this._map.get(e);if(s||(this._map.set(e,{}),s=this._map.get(e)),s){let i,n,a;this._currentElement&&(s.dependants[this._currentElement]=!0);const o=s.properties;for(i in o)a=t&&t[i],n=[i,": var(",e,N,i],a&&n.push(",",a.replace(A,"")),n.push(")"),A.test(o[i])&&n.push(" !important"),r.push(n.join(""))}return r.join("; ")}_replaceInitialOrInherit(e,t){let r=T.exec(t);return r&&(t=r[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let r,s,i=e.split(";"),n={};for(let e,a,o=0;o<i.length;o++)e=i[o],e&&(a=e.split(":"),a.length>1&&(r=a[0].trim(),s=a.slice(1).join(":"),t&&(s=this._replaceInitialOrInherit(r,s)),n[r]=s));return n}_invalidateMixinEntry(e){if(R)for(let t in e.dependants)t!==this._currentElement&&R(t)}_produceCssProperties(e,t,r,s,i){if(r&&C(r,((e,t)=>{t&&this._map.get(t)&&(s=`@apply ${t};`)})),!s)return e;let n=this._consumeCssProperties(""+s,i),a=e.slice(0,e.indexOf("--")),o=this._cssTextToMap(n,!0),l=o,p=this._map.get(t),d=p&&p.properties;d?l=Object.assign(Object.create(d),o):this._map.set(t,l);let c,h,u=[],f=!1;for(c in l)h=o[c],void 0===h&&(h="initial"),d&&!(c in d)&&(f=!0),u.push(`${t}_-_${c}: ${h}`);return f&&this._invalidateMixinEntry(p),p&&(p.properties=l),r&&(a=`${e};${a}`),`${a}${u.join("; ")};`}}M.prototype.detectMixin=M.prototype.detectMixin,M.prototype.transformStyle=M.prototype.transformStyle,M.prototype.transformCustomStyle=M.prototype.transformCustomStyle,M.prototype.transformRules=M.prototype.transformRules,M.prototype.transformRule=M.prototype.transformRule,M.prototype.transformTemplate=M.prototype.transformTemplate,M.prototype._separator=N,Object.defineProperty(M.prototype,"invalidCallback",{get:()=>R,set(e){R=e}});const L=M,D={},F="_applyShimCurrentVersion",z="_applyShimNextVersion",j="_applyShimValidatingVersion",H=Promise.resolve();function B(e){let t=D[e];t&&function(e){e[F]=e[F]||0,e[j]=e[j]||0,e[z]=(e[z]||0)+1}(t)}function q(e){return e[F]===e[z]}function $(e){return!q(e)&&e[j]===e[z]}function U(e){e[j]=e[z],e._validating||(e._validating=!0,H.then((function(){e[F]=e[z],e._validating=!1})))}r(34816);const Y=new L;class V{constructor(){this.customStyleInterface=null,Y.invalidCallback=B}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{Y.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame((()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()}))})}prepareTemplate(e,t){if(this.ensure(),E(e))return;D[t]=e;let r=Y.transformTemplate(e,t);e._styleAst=r}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let r=e[t],s=this.customStyleInterface.getStyleForCustomStyle(r);s&&Y.transformCustomStyle(s)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&(0,k.wW)(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,r="",s="";return t?t.indexOf("-")>-1?r=t:(s=t,r=e.getAttribute&&e.getAttribute("is")||""):(r=e.is,s=e.extends),{is:r,typeExtension:s}}(e),r=D[t];if((!r||!E(r))&&r&&!q(r)){$(r)||(this.prepareTemplate(r,t),U(r));let s=e.shadowRoot;if(s){let e=s.querySelector("style");e&&(e.__cssRules=r._styleAst,e.textContent=b(r._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new V;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,r,s){e.flushCustomStyles(),e.prepareTemplate(t,r)},prepareTemplateStyles(e,t,r){window.ShadyCSS.prepareTemplate(e,t,r)},prepareTemplateDom(e,t){},styleSubtree(t,r){e.flushCustomStyles(),e.styleSubtree(t,r)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>(0,k.B7)(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:s.rd,nativeShadow:s.WA,cssBuild:s.Cp,disableRuntime:s.jF},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=Y;var J=r(36608),W=r(60995),Z=r(63933),X=r(76389);const K=/:host\(:dir\((ltr|rtl)\)\)/g,G=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Q=[];let ee=null,te="";function re(){te=document.documentElement.getAttribute("dir")}function se(e){if(!e.__autoDirOptOut){e.setAttribute("dir",te)}}function ie(){re(),te=document.documentElement.getAttribute("dir");for(let e=0;e<Q.length;e++)se(Q[e])}const ne=(0,X.o)((e=>{ee||(re(),ee=new MutationObserver(ie),ee.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=(0,Z.Q)(e);class r extends t{static _processStyleText(e,t){return e=super._processStyleText(e,t),e=this._replaceDirInCssText(e)}static _replaceDirInCssText(e){let t=e;return t=t.replace(K,':host([dir="$1"])'),t=t.replace(G,':host([dir="$2"]) $1'),e!==t&&(this.__activateDir=!0),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(ee&&ee.takeRecords().length&&ie(),Q.push(this),se(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=Q.indexOf(this);e>-1&&Q.splice(e,1)}}}return r.__activateDir=!1,r}));r(87529);function ae(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?ae():window.addEventListener("DOMContentLoaded",ae);var oe=r(87156),le=r(81668),pe=r(78956),de=r(21683),ce=r(4059);let he=window.ShadyCSS;const ue=(0,X.o)((e=>{const t=ne((0,W._)((0,J.SH)(e))),r={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class s extends t{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this._applyListeners()}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(e,t,r,s){t!==r&&(super.attributeChangedCallback(e,t,r,s),this.attributeChanged(e,t,r))}attributeChanged(e,t,r){}_initializeProperties(){let e=Object.getPrototypeOf(this);e.hasOwnProperty("__hasRegisterFinished")||(e.__hasRegisterFinished=!0,this._registered()),super._initializeProperties(),this.root=this,this.created()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,r){this._propertyToAttribute(e,t,r)}serializeValueToAttribute(e,t,r){this._valueToNodeAttribute(r||this,e,t)}extend(e,t){if(!e||!t)return e||t;let r=Object.getOwnPropertyNames(t);for(let s,i=0;i<r.length&&(s=r[i]);i++){let r=Object.getOwnPropertyDescriptor(t,s);r&&Object.defineProperty(e,s,r)}return e}mixin(e,t){for(let r in t)e[r]=t[r];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,r){r=r||{},t=null==t?{}:t;let s=new Event(e,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});return s.detail=t,(r.node||this).dispatchEvent(s),s}listen(e,t,r){e=e||this;let s=this.__boundListeners||(this.__boundListeners=new WeakMap),i=s.get(e);i||(i={},s.set(e,i));let n=t+r;i[n]||(i[n]=this._addMethodEventListenerToNode(e,t,r,this))}unlisten(e,t,r){e=e||this;let s=this.__boundListeners&&this.__boundListeners.get(e),i=t+r,n=s&&s[i];n&&(this._removeEventListenerFromNode(e,t,n),s[i]=null)}setScrollDirection(e,t){(0,le.BP)(t||this,r[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=this.getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){window.ShadyDOM&&this.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return(0,oe.vz)(this).getEffectiveChildNodes()}queryDistributedElements(e){return(0,oe.vz)(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let r,s=0;r=e[s];s++)r.nodeType!==Node.COMMENT_NODE&&t.push(r.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?(0,oe.vz)(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){const t=this;return t!==e&&t.contains(e)&&t.getRootNode()===e.getRootNode()}isLocalDescendant(e){return this.root===e.getRootNode()}scopeSubtree(e,t){}getComputedStyleValue(e){return he.getComputedStyleValue(this,e)}debounce(e,t,r){return this._debouncers=this._debouncers||{},this._debouncers[e]=pe.d.debounce(this._debouncers[e],r>0?de.Wc.after(r):de.YA,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?de.Wc.run(e.bind(this),t):~de.YA.run(e.bind(this))}cancelAsync(e){e<0?de.YA.cancel(~e):de.Wc.cancel(e)}create(e,t){let r=document.createElement(e);if(t)if(r.setProperties)r.setProperties(t);else for(let e in t)r[e]=t[e];return r}elementMatches(e,t){return(0,oe.Ku)(t||this,e)}toggleAttribute(e,t){let r=this;return 3===arguments.length&&(r=arguments[2]),1==arguments.length&&(t=!r.hasAttribute(e)),t?(r.setAttribute(e,""),!0):(r.removeAttribute(e),!1)}toggleClass(e,t,r){r=r||this,1==arguments.length&&(t=!r.classList.contains(e)),t?r.classList.add(e):r.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,r,s){s=s||this,this.transform("translate3d("+e+","+t+","+r+")",s)}arrayDelete(e,t){let r;if(Array.isArray(e)){if(r=e.indexOf(t),r>=0)return e.splice(r,1)}else{if(r=(0,ce.U2)(this,e).indexOf(t),r>=0)return this.splice(e,r,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return s.prototype.is="",s}))},36608:(e,t,r)=>{"use strict";r.d(t,{SH:()=>c});r(56646);var s=r(74460),i=r(76389),n=r(15392),a=r(42687),o=r(21384),l=r(40729),p=r(24072);const d=(0,i.o)((e=>{const t=(0,p.e)(e);function r(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof i?t:null}function s(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const r=e.properties;r&&(t=function(e){const t={};for(let r in e){const s=e[r];t[r]="function"==typeof s?{type:s}:s}return t}(r))}e.__ownProperties=t}return e.__ownProperties}class i extends t{static get observedAttributes(){const e=this._properties;return e?Object.keys(e).map((e=>this.attributeNameForProperty(e))):[]}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=r(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=s(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=r(this);this.__properties=Object.assign({},e&&e._properties,s(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i})),c=(0,i.o)((e=>{const t=d((0,l.q)(e));return class extends t{static get polymerElementVersion(){return"3.0.5"}static _finalizeClass(){var e;super._finalizeClass(),this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&this.is&&(e=this.prototype,h.push(e));const t=((r=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",r))||(r.__ownObservers=r.hasOwnProperty(JSCompiler_renameProperty("observers",r))?r.observers:null),r.__ownObservers);var r;t&&this.createObservers(t,this._properties);let s=this.template;s&&("string"==typeof s?(console.error("template getter must return HTMLTemplateElement"),s=null):s=s.cloneNode(!0)),this.prototype._template=s}static createProperties(e){for(let n in e)t=this.prototype,r=n,s=e[n],i=e,s.computed&&(s.readOnly=!0),s.computed&&!t._hasReadOnlyEffect(r)&&t._createComputedProperty(r,s.computed,i),s.readOnly&&!t._hasReadOnlyEffect(r)&&t._createReadOnlyProperty(r,!s.computed),s.reflectToAttribute&&!t._hasReflectEffect(r)&&t._createReflectedProperty(r),s.notify&&!t._hasNotifyEffect(r)&&t._createNotifyingProperty(r),s.observer&&t._createPropertyObserver(r,s.observer,i[s.observer]),t._addPropertyToAttributeMap(r);var t,r,s,i}static createObservers(e,t){const r=this.prototype;for(let s=0;s<e.length;s++)r._createMethodObserver(e[s],t)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(e){let t=null;if(e&&(!s.XN||s.ZN)&&(t=o.t.import(e,"template"),s.XN&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=(0,a.iY)(e.url);else{const e=o.t.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=s.sM,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let r in t){let s=t[r];"value"in s&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[r]=s)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let r=e[t];if(!this.hasOwnProperty(t)){let e="function"==typeof r.value?r.value.call(this):r.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}static _processStyleText(e,t){return(0,a.Rq)(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const r=this.importPath;!function(e,t,r,s){const i=t.content.querySelectorAll("style"),a=(0,n.uT)(t),o=(0,n.lx)(r),l=t.content.firstElementChild;for(let r=0;r<o.length;r++){let i=o[r];i.textContent=e._processStyleText(i.textContent,s),t.content.insertBefore(i,l)}let p=0;for(let t=0;t<a.length;t++){let r=a[t],n=i[p];n!==r?(r=r.cloneNode(!0),n.parentNode.insertBefore(r,n)):p++,r.textContent=e._processStyleText(r.textContent,s)}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,r)}(this,t,e,r?(0,a.Kk)(r):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){if(this.attachShadow)return e?(this.shadowRoot||this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(e),this.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=(0,a.Kk)(this.importPath)),(0,a.Kk)(e,t)}static _parseTemplateContent(e,t,r){return t.dynamicFns=t.dynamicFns||this._properties,super._parseTemplateContent(e,t,r)}}}));const h=[]},60995:(e,t,r)=>{"use strict";r.d(t,{_:()=>n});r(56646);var s=r(76389),i=r(81668);const n=(0,s.o)((e=>class extends e{_addEventListenerToNode(e,t,r){(0,i.NH)(e,t,r)||super._addEventListenerToNode(e,t,r)}_removeEventListenerFromNode(e,t,r){(0,i.ys)(e,t,r)||super._removeEventListenerFromNode(e,t,r)}}))},18691:(e,t,r)=>{"use strict";r.d(t,{E:()=>n,w:()=>a});var s=r(76389);function i(e,t,r,s,i){let n;i&&(n="object"==typeof r&&null!==r,n&&(s=e.__dataTemp[t]));let a=s!==r&&(s==s||r==r);return n&&a&&(e.__dataTemp[t]=r),a}const n=(0,s.o)((e=>class extends e{_shouldPropertyChange(e,t,r){return i(this,e,t,r,!0)}})),a=(0,s.o)((e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,r){return i(this,e,t,r,this.mutableData)}}));n._mutablePropertyChange=i},24072:(e,t,r)=>{"use strict";r.d(t,{e:()=>n});r(56646);var s=r(76389);const i=r(21683).YA,n=(0,s.o)((e=>class extends e{static createProperties(e){const t=this.prototype;for(let r in e)r in t||t._createPropertyAccessor(r)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){const t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,r){let s=this.__data[e],i=this._shouldPropertyChange(e,t,s);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=s),this.__data[e]=t,this.__dataPending[e]=t),i}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,i.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const e=this.__data,t=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(e,t,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,r))}_shouldPropertiesChange(e,t,r){return Boolean(t)}_propertiesChanged(e,t,r){}_shouldPropertyChange(e,t,r){return r!==t&&(r==r||t==t)}attributeChangedCallback(e,t,r,s){t!==r&&this._attributeToProperty(e,r),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,r,s)}_attributeToProperty(e,t,r){if(!this.__serializing){const s=this.__dataAttributes,i=s&&s[e]||e;this[i]=this._deserializeValue(t,r||this.constructor.typeForProperty(i))}}_propertyToAttribute(e,t,r){this.__serializing=!0,r=arguments.length<3?this[e]:r,this._valueToNodeAttribute(this,r,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,r){const s=this._serializeValue(t);void 0===s?e.removeAttribute(r):e.setAttribute(r,s)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}))},63933:(e,t,r)=>{"use strict";r.d(t,{Q:()=>l});r(56646);var s=r(76389),i=r(67130),n=r(24072);const a={};let o=HTMLElement.prototype;for(;o;){let e=Object.getOwnPropertyNames(o);for(let t=0;t<e.length;t++)a[e[t]]=!0;o=Object.getPrototypeOf(o)}const l=(0,s.o)((e=>{const t=(0,n.e)(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor((0,i.z)(e[t]))}static attributeNameForProperty(e){return(0,i.n)(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const r=this;r.hasAttribute(e)||this._valueToNodeAttribute(r,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let r;switch(t){case Object:try{r=JSON.parse(e)}catch(t){r=e}break;case Array:try{r=JSON.parse(e)}catch(t){r=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:r=isNaN(e)?String(e):Number(e),r=new Date(r);break;default:r=super._deserializeValue(e,t)}return r}_definePropertyAccessor(e,t){!function(e,t){if(!a[t]){let r=e[t];void 0!==r&&(e.__data?e._setPendingProperty(t,r):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=r))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}}))},40729:(e,t,r)=>{"use strict";r.d(t,{q:()=>$});r(56646);var s=r(76389),i=r(4059),n=r(67130),a=r(63933);const o={"dom-if":!0,"dom-repeat":!0};function l(e){let t=e.getAttribute("is");if(t&&o[t]){let r=e;for(r.removeAttribute("is"),e=r.ownerDocument.createElement(t),r.parentNode.replaceChild(e,r),e.appendChild(r);r.attributes.length;)e.setAttribute(r.attributes[0].name,r.attributes[0].value),r.removeAttribute(r.attributes[0].name)}return e}function p(e,t){let r=t.parentInfo&&p(e,t.parentInfo);if(!r)return e;for(let e=r.firstChild,s=0;e;e=e.nextSibling)if(t.parentIndex===s++)return e}function d(e,t,r,s){s.id&&(t[s.id]=r)}function c(e,t,r){if(r.events&&r.events.length)for(let s,i=0,n=r.events;i<n.length&&(s=n[i]);i++)e._addMethodEventListenerToNode(t,s.name,s.value,e)}function h(e,t,r){r.templateInfo&&(t._templateInfo=r.templateInfo)}const u=(0,s.o)((e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let r=e._templateInfo={};r.nodeInfoList=[],r.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,r,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,r){return this._parseTemplateNode(e.content,t,r)}static _parseTemplateNode(e,t,r){let s,i=e;return"template"!=i.localName||i.hasAttribute("preserve-content")?"slot"===i.localName&&(t.hasInsertionPoint=!0):s=this._parseTemplateNestedTemplate(i,t,r)||s,i.firstChild&&(s=this._parseTemplateChildNodes(i,t,r)||s),i.hasAttributes&&i.hasAttributes()&&(s=this._parseTemplateNodeAttributes(i,t,r)||s),s}static _parseTemplateChildNodes(e,t,r){if("script"!==e.localName&&"style"!==e.localName)for(let s,i=e.firstChild,n=0;i;i=s){if("template"==i.localName&&(i=l(i)),s=i.nextSibling,i.nodeType===Node.TEXT_NODE){let r=s;for(;r&&r.nodeType===Node.TEXT_NODE;)i.textContent+=r.textContent,s=r.nextSibling,e.removeChild(r),r=s;if(t.stripWhiteSpace&&!i.textContent.trim()){e.removeChild(i);continue}}let a={parentIndex:n,parentInfo:r};this._parseTemplateNode(i,t,a)&&(a.infoIndex=t.nodeInfoList.push(a)-1),i.parentNode&&n++}}static _parseTemplateNestedTemplate(e,t,r){let s=this._parseTemplate(e,t);return(s.content=e.content.ownerDocument.createDocumentFragment()).appendChild(e.content),r.templateInfo=s,!0}static _parseTemplateNodeAttributes(e,t,r){let s=!1,i=Array.from(e.attributes);for(let n,a=i.length-1;n=i[a];a--)s=this._parseTemplateNodeAttribute(e,t,r,n.name,n.value)||s;return s}static _parseTemplateNodeAttribute(e,t,r,s,i){return"on-"===s.slice(0,3)?(e.removeAttribute(s),r.events=r.events||[],r.events.push({name:s.slice(3),value:i}),!0):"id"===s&&(r.id=i,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let t=this.constructor._parseTemplate(e),r=t.nodeInfoList,s=t.content||e.content,i=document.importNode(s,!0);i.__noInsertionPoint=!t.hasInsertionPoint;let n=i.nodeList=new Array(r.length);i.$={};for(let e,t=0,s=r.length;t<s&&(e=r[t]);t++){let r=n[t]=p(i,e);d(0,i.$,r,e),h(0,r,e),c(this,r,e)}return i=i,i}_addMethodEventListenerToNode(e,t,r,s){let i=function(e,t,r){return e=e._methodHost||e,function(t){e[r]?e[r](t,t.detail):console.warn("listener method `"+r+"` not defined")}}(s=s||e,0,r);return this._addEventListenerToNode(e,t,i),i}_addEventListenerToNode(e,t,r){e.addEventListener(t,r)}_removeEventListenerFromNode(e,t,r){e.removeEventListener(t,r)}}));var f=r(74460);let _=0;const m={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},y=/[A-Z]/;let g;function b(e,t){let r=e[t];if(r){if(!e.hasOwnProperty(t)){r=e[t]=Object.create(e[t]);for(let e in r){let t=r[e],s=r[e]=Array(t.length);for(let e=0;e<t.length;e++)s[e]=t[e]}}}else r=e[t]={};return r}function x(e,t,r,s,i,n){if(t){let a=!1,o=_++;for(let l in r)w(e,t,o,l,r,s,i,n)&&(a=!0);return a}return!1}function w(e,t,r,s,n,a,o,l){let p=!1,d=t[o?(0,i.Jz)(s):s];if(d)for(let t,i=0,c=d.length;i<c&&(t=d[i]);i++)t.info&&t.info.lastRun===r||o&&!v(s,t.trigger)||(t.info&&(t.info.lastRun=r),t.fn(e,s,n,a,t.info,o,l),p=!0);return p}function v(e,t){if(t){let r=t.name;return r==e||t.structured&&(0,i.jg)(r,e)||t.wildcard&&(0,i.SG)(r,e)}return!0}function C(e,t,r,s,i){let n="string"==typeof i.method?e[i.method]:i.method,a=i.property;n?n.call(e,e.__data[a],s[a]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function P(e,t,r){let s=(0,i.Jz)(t);if(s!==t){return S(e,(0,n.n)(s)+"-changed",r[t],t),!0}return!1}function S(e,t,r,s){let i={value:r,queueProperty:!0};s&&(i.path=s),e.dispatchEvent(new CustomEvent(t,{detail:i}))}function E(e,t,r,s,n,a){let o=(a?(0,i.Jz)(t):t)!=t?t:null,l=o?(0,i.U2)(e,o):e.__data[t];o&&void 0===l&&(l=r[t]),S(e,n.eventName,l,o)}function k(e,t,r,s,i){let n=e.__data[t];f.v1&&(n=(0,f.v1)(n,i.attrName,"attribute",e)),e._propertyToAttribute(t,i.attrName,n)}function O(e,t,r,s,i){let n=L(e,t,r,s,i),a=i.methodInfo;e.__dataHasAccessor&&e.__dataHasAccessor[a]?e._setPendingProperty(a,n,!0):e[a]=n}function T(e,t,r,s,i,a,o){r.bindings=r.bindings||[];let l={kind:s,target:i,parts:a,literal:o,isCompound:1!==a.length};if(r.bindings.push(l),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(l)){let{event:e,negate:t}=l.parts[0];l.listenerEvent=e||(0,n.n)(i)+"-changed",l.listenerNegate=t}let p=t.nodeInfoList.length;for(let r=0;r<l.parts.length;r++){let s=l.parts[r];s.compoundIndex=r,A(e,t,l,s,p)}}function A(e,t,r,s,i){if(!s.literal)if("attribute"===r.kind&&"-"===r.target[0])console.warn("Cannot set attribute "+r.target+' because "-" is not a valid attribute starting character');else{let n=s.dependencies,a={index:i,binding:r,part:s,evaluator:e};for(let r=0;r<n.length;r++){let s=n[r];"string"==typeof s&&(s=H(s),s.wildcard=!0),e._addTemplatePropertyEffect(t,s.rootProperty,{fn:N,info:a,trigger:s})}}}function N(e,t,r,s,n,a,o){let l=o[n.index],p=n.binding,d=n.part;if(a&&d.source&&t.length>d.source.length&&"property"==p.kind&&!p.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[p.target]){let s=r[t];t=(0,i.Iu)(d.source,p.target,t),l._setPendingPropertyOrPath(t,s,!1,!0)&&e._enqueueClient(l)}else{!function(e,t,r,s,i){i=function(e,t,r,s){if(r.isCompound){let i=e.__dataCompoundStorage[r.target];i[s.compoundIndex]=t,t=i.join("")}"attribute"!==r.kind&&("textContent"!==r.target&&("value"!==r.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,i,r,s),f.v1&&(i=(0,f.v1)(i,r.target,r.kind,t));if("attribute"==r.kind)e._valueToNodeAttribute(t,i,r.target);else{let s=r.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[s]?t[m.READ_ONLY]&&t[m.READ_ONLY][s]||t._setPendingProperty(s,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,s,i)}}(e,l,p,d,n.evaluator._evaluateBinding(e,d,t,r,s,a))}}function I(e,t){if(t.isCompound){let r=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),s=t.parts,i=new Array(s.length);for(let e=0;e<s.length;e++)i[e]=s[e].literal;let n=t.target;r[n]=i,t.literal&&"property"==t.kind&&(e[n]=t.literal)}}function R(e,t,r){if(r.listenerEvent){let s=r.parts[0];e.addEventListener(r.listenerEvent,(function(e){!function(e,t,r,s,n){let a,o=e.detail,l=o&&o.path;l?(s=(0,i.Iu)(r,s,l),a=o&&o.value):a=e.currentTarget[r],a=n?!a:a,t[m.READ_ONLY]&&t[m.READ_ONLY][s]||!t._setPendingPropertyOrPath(s,a,!0,Boolean(l))||o&&o.queueProperty||t._invalidateProperties()}(e,t,r.target,s.source,s.negate)}))}}function M(e,t,r,s,i,n){n=t.static||n&&("object"!=typeof n||n[t.methodName]);let a={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:n};for(let i,n=0;n<t.args.length&&(i=t.args[n]);n++)i.literal||e._addPropertyEffect(i.rootProperty,r,{fn:s,info:a,trigger:i});n&&e._addPropertyEffect(t.methodName,r,{fn:s,info:a})}function L(e,t,r,s,i){let n=e._methodHost||e,a=n[i.methodName];if(a){let s=e._marshalArgs(i.args,t,r);return a.apply(n,s)}i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}const D=[],F=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function z(e){let t="";for(let r=0;r<e.length;r++){t+=e[r].literal||""}return t}function j(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:D};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let r=H(e);return r.literal||(t.static=!1),r}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function H(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),r={name:t,value:"",literal:!1},s=t[0];switch("-"===s&&(s=t[1]),s>="0"&&s<="9"&&(s="#"),s){case"'":case'"':r.value=t.slice(1,-1),r.literal=!0;break;case"#":r.value=Number(t),r.literal=!0}return r.literal||(r.rootProperty=(0,i.Jz)(t),r.structured=(0,i.AZ)(t),r.structured&&(r.wildcard=".*"==t.slice(-2),r.wildcard&&(r.name=t.slice(0,-2)))),r}function B(e,t,r,s){let i=r+".splices";e.notifyPath(i,{indexSplices:s}),e.notifyPath(r+".length",t.length),e.__data[i]={indexSplices:null}}function q(e,t,r,s,i,n){B(e,t,r,[{index:s,addedCount:i,removed:n,object:t,type:"splice"}])}const $=(0,s.o)((e=>{const t=u((0,a.Q)(e));class r extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return m}_initializeProperties(){super._initializeProperties(),U.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[m.READ_ONLY];for(let r in e)t&&t[r]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[r]=this.__dataPending[r]=e[r])}_addPropertyEffect(e,t,r){this._createPropertyAccessor(e,t==m.READ_ONLY);let s=b(this,t)[e];s||(s=this[t][e]=[]),s.push(r)}_removePropertyEffect(e,t,r){let s=b(this,t)[e],i=s.indexOf(r);i>=0&&s.splice(i,1)}_hasPropertyEffect(e,t){let r=this[t];return Boolean(r&&r[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,m.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,m.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,m.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,m.COMPUTE)}_setPendingPropertyOrPath(e,t,r,s){if(s||(0,i.Jz)(Array.isArray(e)?e[0]:e)!==e){if(!s){let r=(0,i.U2)(this,e);if(!(e=(0,i.t8)(this,e,t))||!super._shouldPropertyChange(e,t,r))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,r))return function(e,t,r){let s=e.__dataLinkedPaths;if(s){let n;for(let a in s){let o=s[a];(0,i.SG)(a,t)?(n=(0,i.Iu)(a,o,t),e._setPendingPropertyOrPath(n,r,!0,!0)):(0,i.SG)(o,t)&&(n=(0,i.Iu)(o,a,t),e._setPendingPropertyOrPath(n,r,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,r);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,r){r===e[t]&&"object"!=typeof r||(e[t]=r)}_setPendingProperty(e,t,r){let s=this.__dataHasPaths&&(0,i.AZ)(e),n=s?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,n[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),s?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(s||this[m.NOTIFY]&&this[m.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=r),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let r=e[t];r.__dataEnabled?r.__dataPending&&r._flushProperties():r._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let r in e)!t&&this[m.READ_ONLY]&&this[m.READ_ONLY][r]||this._setPendingPropertyOrPath(r,e[r],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,r){let s=this.__dataHasPaths;this.__dataHasPaths=!1,function(e,t,r,s){let i=e[m.COMPUTE];if(i){let n=t;for(;x(e,i,n,r,s);)Object.assign(r,e.__dataOld),Object.assign(t,e.__dataPending),n=e.__dataPending,e.__dataPending=null}}(this,t,r,s);let i=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,r,s),this._flushClients(),x(this,this[m.REFLECT],t,r,s),x(this,this[m.OBSERVE],t,r,s),i&&function(e,t,r,s,i){let n,a,o=e[m.NOTIFY],l=_++;for(let a in t)t[a]&&(o&&w(e,o,l,a,r,s,i)||i&&P(e,a,r))&&(n=!0);n&&(a=e.__dataHost)&&a._invalidateProperties&&a._invalidateProperties()}(this,i,t,r,s),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,r){this[m.PROPAGATE]&&x(this,this[m.PROPAGATE],e,t,r);let s=this.__templateInfo;for(;s;)x(this,s.propertyEffects,e,t,r,s.nodeList),s=s.nextTemplateInfo}linkPaths(e,t){e=(0,i.Fv)(e),t=(0,i.Fv)(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=(0,i.Fv)(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let r={path:""};B(this,(0,i.U2)(this,e,r),r.path,t)}get(e,t){return(0,i.U2)(t||this,e)}set(e,t,r){r?(0,i.t8)(r,e,t):this[m.READ_ONLY]&&this[m.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let r={path:""},s=(0,i.U2)(this,e,r),n=s.length,a=s.push(...t);return t.length&&q(this,s,r.path,n,t.length,[]),a}pop(e){let t={path:""},r=(0,i.U2)(this,e,t),s=Boolean(r.length),n=r.pop();return s&&q(this,r,t.path,r.length,0,[n]),n}splice(e,t,r,...s){let n,a={path:""},o=(0,i.U2)(this,e,a);return t<0?t=o.length-Math.floor(-t):t&&(t=Math.floor(t)),n=2===arguments.length?o.splice(t):o.splice(t,r,...s),(s.length||n.length)&&q(this,o,a.path,t,s.length,n),n}shift(e){let t={path:""},r=(0,i.U2)(this,e,t),s=Boolean(r.length),n=r.shift();return s&&q(this,r,t.path,0,0,[n]),n}unshift(e,...t){let r={path:""},s=(0,i.U2)(this,e,r),n=s.unshift(...t);return t.length&&q(this,s,r.path,0,t.length,[]),n}notifyPath(e,t){let r;if(1==arguments.length){let s={path:""};t=(0,i.U2)(this,e,s),r=s.path}else r=Array.isArray(e)?(0,i.Fv)(e):e;this._setPendingPropertyOrPath(r,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var r;this._addPropertyEffect(e,m.READ_ONLY),t&&(this["_set"+(r=e,r[0].toUpperCase()+r.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,r){let s={property:e,method:t,dynamicFn:Boolean(r)};this._addPropertyEffect(e,m.OBSERVE,{fn:C,info:s,trigger:{name:e}}),r&&this._addPropertyEffect(t,m.OBSERVE,{fn:C,info:s,trigger:{name:t}})}_createMethodObserver(e,t){let r=j(e);if(!r)throw new Error("Malformed observer expression '"+e+"'");M(this,r,m.OBSERVE,L,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,m.NOTIFY,{fn:E,info:{eventName:(0,n.n)(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,m.REFLECT,{fn:k,info:{attrName:t}})}_createComputedProperty(e,t,r){let s=j(t);if(!s)throw new Error("Malformed computed expression '"+t+"'");M(this,s,m.COMPUTE,O,e,r)}_marshalArgs(e,t,r){const s=this.__data;let n=[];for(let a=0,o=e.length;a<o;a++){let o,l=e[a],p=l.name;if(l.literal?o=l.value:l.structured?(o=(0,i.U2)(s,p),void 0===o&&(o=r[p])):o=s[p],l.wildcard){let e=0===p.indexOf(t+"."),s=0===t.indexOf(p)&&!e;n[a]={path:s?t:p,value:s?r[t]:o,base:o}}else n[a]=o}return n}static addPropertyEffect(e,t,r){this.prototype._addPropertyEffect(e,t,r)}static createPropertyObserver(e,t,r){this.prototype._createPropertyObserver(e,t,r)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,r){this.prototype._createComputedProperty(e,t,r)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let r=this.constructor._parseTemplate(e),s=this.__templateInfo==r;if(!s)for(let e in r.propertyEffects)this._createPropertyAccessor(e);if(t&&(r=Object.create(r),r.wasPreBound=s,!s&&this.__templateInfo)){let e=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=e.nextTemplateInfo=r,r.previousTemplateInfo=e,r}return this.__templateInfo=r}static _addTemplatePropertyEffect(e,t,r){(e.hostProps=e.hostProps||{})[t]=!0;let s=e.propertyEffects=e.propertyEffects||{};(s[t]=s[t]||[]).push(r)}_stampTemplate(e){U.beginHosting(this);let t=super._stampTemplate(e);U.endHosting(this);let r=this._bindTemplate(e,!0);if(r.nodeList=t.nodeList,!r.wasPreBound){let e=r.childNodes=[];for(let r=t.firstChild;r;r=r.nextSibling)e.push(r)}return t.templateInfo=r,function(e,t){let{nodeList:r,nodeInfoList:s}=t;if(s.length)for(let t=0;t<s.length;t++){let i=s[t],n=r[t],a=i.bindings;if(a)for(let t=0;t<a.length;t++){let r=a[t];I(n,r),R(n,e,r)}n.__dataHost=e}}(this,r),this.__dataReady&&x(this,r.propertyEffects,this.__data,null,!1,r.nodeList),t}_removeBoundDom(e){let t=e.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;let r=t.childNodes;for(let e=0;e<r.length;e++){let t=r[e];t.parentNode.removeChild(t)}}static _parseTemplateNode(e,t,r){let s=super._parseTemplateNode(e,t,r);if(e.nodeType===Node.TEXT_NODE){let i=this._parseBindings(e.textContent,t);i&&(e.textContent=z(i)||" ",T(this,t,r,"text","textContent",i),s=!0)}return s}static _parseTemplateNodeAttribute(e,t,r,s,i){let a=this._parseBindings(i,t);if(a){let i=s,o="property";y.test(s)?o="attribute":"$"==s[s.length-1]&&(s=s.slice(0,-1),o="attribute");let l=z(a);return l&&"attribute"==o&&e.setAttribute(s,l),"input"===e.localName&&"value"===i&&e.setAttribute(i,""),e.removeAttribute(i),"property"===o&&(s=(0,n.z)(s)),T(this,t,r,o,s,a,l),!0}return super._parseTemplateNodeAttribute(e,t,r,s,i)}static _parseTemplateNestedTemplate(e,t,r){let s=super._parseTemplateNestedTemplate(e,t,r),i=r.templateInfo.hostProps;for(let e in i){T(this,t,r,"property","_host_"+e,[{mode:"{",source:e,dependencies:[e]}])}return s}static _parseBindings(e,t){let r,s=[],i=0;for(;null!==(r=F.exec(e));){r.index>i&&s.push({literal:e.slice(i,r.index)});let n=r[1][0],a=Boolean(r[2]),o=r[3].trim(),l=!1,p="",d=-1;"{"==n&&(d=o.indexOf("::"))>0&&(p=o.substring(d+2),o=o.substring(0,d),l=!0);let c=j(o),h=[];if(c){let{args:e,methodName:r}=c;for(let t=0;t<e.length;t++){let r=e[t];r.literal||h.push(r)}let s=t.dynamicFns;(s&&s[r]||c.static)&&(h.push(r),c.dynamicFn=!0)}else h.push(o);s.push({source:o,mode:n,negate:a,customEvent:l,signature:c,dependencies:h,event:p}),i=F.lastIndex}if(i&&i<e.length){let t=e.substring(i);t&&s.push({literal:t})}return s.length?s:null}static _evaluateBinding(e,t,r,s,n,a){let o;return o=t.signature?L(e,r,s,0,t.signature):r!=t.source?(0,i.U2)(e,t.source):a&&(0,i.AZ)(r)?(0,i.U2)(e,r):e.__data[r],t.negate&&(o=!o),o}}return g=r,r}));const U=new class{constructor(){this.stack=[]}registerHost(e){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(e)}}beginHosting(e){this.stack.push(e)}endHosting(e){let t=this.stack.length;t&&this.stack[t-1]==e&&this.stack.pop()}}},4507:(e,t,r)=>{"use strict";r.d(t,{c:()=>n});r(56646);function s(e,t,r){return{index:e,removed:t,addedCount:r}}function i(e,t,r,i,n,o){let l,p=0,d=0,c=Math.min(r-t,o-n);if(0==t&&0==n&&(p=function(e,t,r){for(let s=0;s<r;s++)if(!a(e[s],t[s]))return s;return r}(e,i,c)),r==e.length&&o==i.length&&(d=function(e,t,r){let s=e.length,i=t.length,n=0;for(;n<r&&a(e[--s],t[--i]);)n++;return n}(e,i,c-p)),n+=p,o-=d,(r-=d)-(t+=p)==0&&o-n==0)return[];if(t==r){for(l=s(t,[],0);n<o;)l.removed.push(i[n++]);return[l]}if(n==o)return[s(t,[],r-t)];let h=function(e){let t=e.length-1,r=e[0].length-1,s=e[t][r],i=[];for(;t>0||r>0;){if(0==t){i.push(2),r--;continue}if(0==r){i.push(3),t--;continue}let n,a=e[t-1][r-1],o=e[t-1][r],l=e[t][r-1];n=o<l?o<a?o:a:l<a?l:a,n==a?(a==s?i.push(0):(i.push(1),s=a),t--,r--):n==o?(i.push(3),t--,s=o):(i.push(2),r--,s=l)}return i.reverse(),i}(function(e,t,r,s,i,n){let o=n-i+1,l=r-t+1,p=new Array(o);for(let e=0;e<o;e++)p[e]=new Array(l),p[e][0]=e;for(let e=0;e<l;e++)p[0][e]=e;for(let r=1;r<o;r++)for(let n=1;n<l;n++)if(a(e[t+n-1],s[i+r-1]))p[r][n]=p[r-1][n-1];else{let e=p[r-1][n]+1,t=p[r][n-1]+1;p[r][n]=e<t?e:t}return p}(e,t,r,i,n,o));l=void 0;let u=[],f=t,_=n;for(let e=0;e<h.length;e++)switch(h[e]){case 0:l&&(u.push(l),l=void 0),f++,_++;break;case 1:l||(l=s(f,[],0)),l.addedCount++,f++,l.removed.push(i[_]),_++;break;case 2:l||(l=s(f,[],0)),l.addedCount++,f++;break;case 3:l||(l=s(f,[],0)),l.removed.push(i[_]),_++}return l&&u.push(l),u}function n(e,t){return i(e,0,e.length,t,0,t.length)}function a(e,t){return e===t}},56646:()=>{"use strict";window.JSCompiler_renameProperty=function(e,t){return e}},67130:(e,t,r)=>{"use strict";r.d(t,{z:()=>a,n:()=>o});r(56646);const s={},i=/-[a-z]/g,n=/([A-Z])/g;function a(e){return s[e]||(s[e]=e.indexOf("-")<0?e:e.replace(i,(e=>e[1].toUpperCase())))}function o(e){return s[e]||(s[e]=e.replace(n,"-$1").toLowerCase())}},78956:(e,t,r)=>{"use strict";r.d(t,{d:()=>s});r(56646),r(76389),r(21683);class s{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run((()=>{this._timer=null,this._callback()}))}cancel(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,r){return e instanceof s?e.cancel():e=new s,e.setConfig(t,r),e}}},20723:(e,t,r)=>{"use strict";r.d(t,{o:()=>a});r(56646);var s=r(4507),i=r(21683);function n(e){return"slot"===e.localName}class a{static getFlattenedNodes(e){return n(e)?(e=e).assignedNodes({flatten:!0}):Array.from(e.childNodes).map((e=>n(e)?(e=e).assignedNodes({flatten:!0}):[e])).reduce(((e,t)=>e.concat(t)),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){n(this._target)?this._listenSlots([this._target]):this._target.children&&(this._listenSlots(this._target.children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,(e=>{this._processMutations(e)})):(this._nativeChildrenObserver=new MutationObserver((e=>{this._processMutations(e)})),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){n(this._target)?this._unlistenSlots([this._target]):this._target.children&&(this._unlistenSlots(this._target.children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,i.YA.run((()=>this.flush())))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let r=e[t];r.addedNodes&&this._listenSlots(r.addedNodes),r.removedNodes&&this._unlistenSlots(r.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),r=(0,s.c)(t,this._effectiveNodes);for(let t,s=0;s<r.length&&(t=r[s]);s++)for(let r,s=0;s<t.removed.length&&(r=t.removed[s]);s++)e.removedNodes.push(r);for(let s,i=0;i<r.length&&(s=r[i]);i++)for(let r=s.index;r<s.index+s.addedCount;r++)e.addedNodes.push(t[r]);this._effectiveNodes=t;let i=!1;return(e.addedNodes.length||e.removedNodes.length)&&(i=!0,this.callback.call(this._target,e)),i}_listenSlots(e){for(let t=0;t<e.length;t++){let r=e[t];n(r)&&r.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let r=e[t];n(r)&&r.removeEventListener("slotchange",this._boundSchedule)}}}},93252:(e,t,r)=>{"use strict";r.d(t,{E:()=>i,y:()=>a});r(56646),r(78956);let s=[];const i=function(e){s.push(e)};function n(){const e=Boolean(s.length);for(;s.length;)try{s.shift().flush()}catch(e){setTimeout((()=>{throw e}))}return e}const a=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=n()}while(e||t)}},50856:(e,t,r)=>{"use strict";r.d(t,{d:()=>n});r(56646);class s{constructor(e){this.value=e.toString()}toString(){return this.value}}function i(e){if(e instanceof s)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}const n=function(e,...t){const r=document.createElement("template");return r.innerHTML=t.reduce(((t,r,n)=>t+function(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof s)return i(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}(r)+e[n+1]),e[0]),r}},76389:(e,t,r)=>{"use strict";r.d(t,{o:()=>n});r(56646);let s=0;function i(){}i.prototype.__mixinApplications,i.prototype.__mixinSet;const n=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let r=s++;return function(s){let i=s.__mixinSet;if(i&&i[r])return s;let n=t,a=n.get(s);a||(a=e(s),n.set(s,a));let o=Object.create(a.__mixinSet||i||null);return o[r]=!0,a.__mixinSet=o,a}}},4059:(e,t,r)=>{"use strict";r.d(t,{AZ:()=>s,Jz:()=>i,jg:()=>n,SG:()=>a,Iu:()=>o,wB:()=>l,Fv:()=>p,U2:()=>c,t8:()=>h});r(56646);function s(e){return e.indexOf(".")>=0}function i(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function n(e,t){return 0===e.indexOf(t+".")}function a(e,t){return 0===t.indexOf(e+".")}function o(e,t,r){return t+r.slice(e.length)}function l(e,t){return e===t||n(e,t)||a(e,t)}function p(e){if(Array.isArray(e)){let t=[];for(let r=0;r<e.length;r++){let s=e[r].toString().split(".");for(let e=0;e<s.length;e++)t.push(s[e])}return t.join(".")}return e}function d(e){return Array.isArray(e)?p(e).split("."):e.toString().split(".")}function c(e,t,r){let s=e,i=d(t);for(let e=0;e<i.length;e++){if(!s)return;s=s[i[e]]}return r&&(r.path=i.join(".")),s}function h(e,t,r){let s=e,i=d(t),n=i[i.length-1];if(i.length>1){for(let e=0;e<i.length-1;e++){if(s=s[i[e]],!s)return}s[n]=r}else s[t]=r;return i.join(".")}},42687:(e,t,r)=>{"use strict";r.d(t,{Kk:()=>o,Rq:()=>l,iY:()=>p});r(56646);let s,i,n=/(url\()([^)]*)(\))/g,a=/(^\/)|(^#)|(^[\w-\d]*:)/;function o(e,t){if(e&&a.test(e))return e;if(void 0===s){s=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",s="http://a/c%20d"===e.href}catch(e){}}return t||(t=document.baseURI||window.location.href),s?new URL(e,t).href:(i||(i=document.implementation.createHTMLDocument("temp"),i.base=i.createElement("base"),i.head.appendChild(i.base),i.anchor=i.createElement("a"),i.body.appendChild(i.anchor)),i.base.href=t,i.anchor.href=e,i.anchor.href||e)}function l(e,t){return e.replace(n,(function(e,r,s,i){return r+"'"+o(s.replace(/["']/g,""),t)+"'"+i}))}function p(e){return e.substring(0,e.lastIndexOf("/")+1)}},15392:(e,t,r)=>{"use strict";r.d(t,{uT:()=>d,lx:()=>c,jv:()=>u});var s=r(21384),i=r(42687);const n="shady-unscoped";function a(e){return s.t.import(e)}function o(e){let t=e.body?e.body:e;const r=(0,i.Rq)(t.textContent,e.baseURI),s=document.createElement("style");return s.textContent=r,s}function l(e){const t=e.trim().split(/\s+/),r=[];for(let e=0;e<t.length;e++)r.push(...p(t[e]));return r}function p(e){const t=a(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...h(t));const r=t.querySelector("template");r&&e.push(...d(r,t.assetpath)),t._styles=e}return t._styles}function d(e,t){if(!e._styles){const r=[],s=e.content.querySelectorAll("style");for(let e=0;e<s.length;e++){let n=s[e],a=n.getAttribute("include");a&&r.push(...l(a).filter((function(e,t,r){return r.indexOf(e)===t}))),t&&(n.textContent=(0,i.Rq)(n.textContent,t)),r.push(n)}e._styles=r}return e._styles}function c(e){let t=a(e);return t?h(t):[]}function h(e){const t=[],r=e.querySelectorAll("link[rel=import][type~=css]");for(let e=0;e<r.length;e++){let s=r[e];if(s.import){const e=s.import,r=s.hasAttribute(n);if(r&&!e._unscopedStyle){const t=o(e);t.setAttribute(n,""),e._unscopedStyle=t}else e._style||(e._style=o(e));t.push(r?e._unscopedStyle:e._style)}}return t}function u(e){let t=e.trim().split(/\s+/),r="";for(let e=0;e<t.length;e++)r+=f(t[e]);return r}function f(e){let t=a(e);if(t&&void 0===t._cssText){let e=_(t),r=t.querySelector("template");r&&(e+=function(e,t){let r="";const s=d(e,t);for(let e=0;e<s.length;e++){let t=s[e];t.parentNode&&t.parentNode.removeChild(t),r+=t.textContent}return r}(r,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}function _(e){let t="",r=h(e);for(let e=0;e<r.length;e++)t+=r[e].textContent;return t}},60309:(e,t,r)=>{"use strict";r.d(t,{CN:()=>s,$T:()=>i,mA:()=>n});const s=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,i=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,n=/@media\s(.*)/},10868:(e,t,r)=>{"use strict";r.d(t,{wW:()=>i,B7:()=>n,OH:()=>a});var s=r(60309);function i(e,t){for(let r in t)null===r?e.style.removeProperty(r):e.style.setProperty(r,t[r])}function n(e,t){const r=window.getComputedStyle(e).getPropertyValue(t);return r?r.trim():""}function a(e){const t=s.$T.test(e)||s.CN.test(e);return s.$T.lastIndex=0,s.CN.lastIndex=0,t}},34816:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>c});let s,i=null,n=window.HTMLImports&&window.HTMLImports.whenReady||null;function a(e){requestAnimationFrame((function(){n?n(e):(i||(i=new Promise((e=>{s=e})),"complete"===document.readyState?s():document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&s()}))),i.then((function(){e&&e()})))}))}const o="__seenByShadyCSS",l="__shadyCSSCachedStyle";let p=null,d=null;class c{constructor(){this.customStyles=[],this.enqueued=!1,a((()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()}))}enqueueDocumentValidation(){!this.enqueued&&d&&(this.enqueued=!0,a(d))}addCustomStyle(e){e[o]||(e[o]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[l])return e[l];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const r=e[t];if(r[l])continue;const s=this.getStyleForCustomStyle(r);if(s){const e=s.__appliedElement||s;p&&p(e),r[l]=e}}return e}}c.prototype.addCustomStyle=c.prototype.addCustomStyle,c.prototype.getStyleForCustomStyle=c.prototype.getStyleForCustomStyle,c.prototype.processStyles=c.prototype.processStyles,Object.defineProperties(c.prototype,{transformCallback:{get:()=>p,set(e){p=e}},validateCallback:{get:()=>d,set(e){let t=!1;d||(t=!0),d=e,t&&this.enqueueDocumentValidation()}}})},26539:(e,t,r)=>{"use strict";r.d(t,{WA:()=>s,Cp:()=>n,jF:()=>o,rd:()=>l});const s=!(window.ShadyDOM&&window.ShadyDOM.inUse);let i,n;function a(e){i=(!e||!e.shimcssproperties)&&(s||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(n=window.ShadyCSS.cssBuild);const o=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?i=window.ShadyCSS.nativeCss:window.ShadyCSS?(a(window.ShadyCSS),window.ShadyCSS=void 0):a(window.WebComponents&&window.WebComponents.flags);const l=i},55122:(e,t,r)=>{"use strict";r.d(t,{Xe:()=>n,pX:()=>s,XM:()=>i});const s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=e=>(...t)=>({_$litDirective$:e,values:t});class n{constructor(e){}T(e,t,r){this.Σdt=e,this.M=t,this.Σct=r}S(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},81471:(e,t,r)=>{"use strict";r.d(t,{$:()=>n});var s=r(99602),i=r(55122);const n=(0,i.XM)(class extends i.Xe{constructor(e){var t;if(super(e),e.type!==i.pX.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).filter((t=>e[t])).join(" ")}update(e,[t]){if(void 0===this.bt){this.bt=new Set;for(const e in t)t[e]&&this.bt.add(e);return this.render(t)}const r=e.element.classList;this.bt.forEach((e=>{e in t||(r.remove(e),this.bt.delete(e))}));for(const e in t){const s=!!t[e];s!==this.bt.has(e)&&(s?(r.add(e),this.bt.add(e)):(r.remove(e),this.bt.delete(e)))}return s.Jb}})}}]);
//# sourceMappingURL=chunk.73088873c87f10f281ad.js.map