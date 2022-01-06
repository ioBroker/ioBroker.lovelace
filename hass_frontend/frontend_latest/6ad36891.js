/*! For license information please see 6ad36891.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[43835],{65660:(e,t,r)=>{r(94604);const n=r(50856).d`
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
</custom-style>`;n.setAttribute("style","display: none;"),document.head.appendChild(n.content);var s=document.createElement("style");s.textContent="[hidden] { display: none !important; }",document.head.appendChild(s)},15495:(e,t,r)=>{r(94604);const n=r(50856).d`
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
`;n.setAttribute("style","display: none;"),document.head.appendChild(n.content)},1656:(e,t,r)=>{r(94604),r(15495);const n=r(50856).d`
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
</custom-style>`;n.setAttribute("style","display: none;"),document.head.appendChild(n.content)},43835:(e,t,r)=>{r(65660),r(15495),r(1656),r(54242),r(47686)},54242:(e,t,r)=>{r(94604);const n=r(50856).d`
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
</custom-style>`;n.setAttribute("style","display: none;"),document.head.appendChild(n.content)},47686:(e,t,r)=>{r(94604);if(!window.polymerSkipLoadingFontRoboto){const e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.crossOrigin="anonymous",e.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(e)}const n=r(50856).d`<custom-style>
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
</custom-style>`;n.setAttribute("style","display: none;"),document.head.appendChild(n.content)},5618:(e,t,r)=>{var n=r(34816),s=r(10868),i=r(26539);const o=new n.ZP;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,r){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,r){},styleSubtree(e,t){o.processStyles(),(0,s.wW)(e,t)},styleElement(e){o.processStyles()},styleDocument(e){o.processStyles(),(0,s.wW)(document.body,e)},getComputedStyleValue:(e,t)=>(0,s.B7)(e,t),flushCustomStyles(){},nativeCss:i.rd,nativeShadow:i.WA,cssBuild:i.Cp,disableRuntime:i.jF}),window.ShadyCSS.CustomStyleInterface=o;var a=r(15392);const l="include",p=window.ShadyCSS.CustomStyleInterface;class d extends HTMLElement{constructor(){super(),this._style=null,p.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute(l);return t&&(e.removeAttribute(l),e.textContent=(0,a.jv)(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",d)},21384:(e,t,r)=>{r.d(t,{t:()=>p});r(56646);var n=r(42687),s=r(74460);let i={},o={};function a(e,t){i[e]=o[e.toLowerCase()]=t}function l(e){return i[e]||o[e.toLowerCase()]}class p extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let r=l(e);return r&&t?r.querySelector(t):r}return null}attributeChangedCallback(e,t,r,n){t!==r&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=(0,n.Kk)(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=(0,n.iY)(t)}return this.__assetpath}register(e){if(e=e||this.id){if(s.XN&&void 0!==l(e))throw a(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,a(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}p.prototype.modules=i,customElements.define("dom-module",p)},42173:(e,t,r)=>{var n=r(28426),s=r(52521),i=r(78956),o=r(93252),a=r(18691),l=r(4059),p=r(21683),d=r(62276),c=r(6226),h=r(74460);const u=(0,a.w)(n.H3);class _ extends u{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!h.dJ,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),(0,c.N)()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=(0,d.r)((0,d.r)(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){const e=this;let t=this.template=e._templateInfo?e:this.querySelector("template");if(!t){let e=new MutationObserver((()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()}));return e.observe(this,{childList:!0}),!1}let r={};r[this.as]=!0,r[this.indexAs]=!0,r[this.itemsIndexAs]=!0,this.__ctor=(0,s.Uv)(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:r,forwardHostProp:function(e,t){let r=this.__instances;for(let n,s=0;s<r.length&&(n=r[s]);s++)n.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,r){if((0,l.wB)(this.as,t)){let n=e[this.itemsIndexAs];t==this.as&&(this.items[n]=r);let s=(0,l.Iu)(this.as,`${JSCompiler_renameProperty("items",this)}.${n}`,t);this.notifyPath(s,r)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,r=this.__getMethodHost();return function(){return r[t].apply(r,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let r=0;r<t.length;r++)0===e.indexOf(t[r])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||("items"===e.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,t=0){this.__renderDebouncer=i.dx.debounce(this.__renderDebouncer,t>0?p.Wc.after(t):p.YA,e.bind(this)),(0,o.E)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),(0,o.y)()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const t=this.__sortAndFilterItems(e),r=this.__calculateLimit(t.length);this.__updateInstances(e,r,t),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame((()=>this.__continueChunking()))),this._setRenderedItemCount(this.__instances.length),h.dJ&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let t=new Array(e.length);for(let r=0;r<e.length;r++)t[r]=r;return this.__filterFn&&(t=t.filter(((t,r,n)=>this.__filterFn(e[t],r,n)))),this.__sortFn&&t.sort(((t,r)=>this.__sortFn(e[t],e[r]))),t}__calculateLimit(e){let t=e;const r=this.__instances.length;if(this.initialCount){let n;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(t=Math.min(e,this.initialCount),n=Math.max(t-r,0),this.__chunkCount=n||1):(n=Math.min(Math.max(e-r,0),this.__chunkCount),t=Math.min(r+n,e)),this.__shouldMeasureChunk=n===this.__chunkCount,this.__shouldContinueChunking=t<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,t}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,t=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*t)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,t,r){const n=this.__itemsIdxToInstIdx={};let s;for(s=0;s<t;s++){let t=this.__instances[s],i=r[s],o=e[i];n[i]=s,t?(t._setPendingProperty(this.as,o),t._setPendingProperty(this.indexAs,s),t._setPendingProperty(this.itemsIndexAs,i),t._flushProperties()):this.__insertInstance(o,s,i)}for(let e=this.__instances.length-1;e>=s;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const r=(0,d.r)(t.root);for(let e=0;e<t.children.length;e++){let n=t.children[e];r.appendChild(n)}return t}__attachInstance(e,t){let r=this.__instances[e];t.insertBefore(r.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,t,r){let n={};return n[this.as]=e,n[this.indexAs]=t,n[this.itemsIndexAs]=r,new this.__ctor(n)}__insertInstance(e,t,r){const n=this.__stampInstance(e,t,r);let s=this.__instances[t+1],i=s?s.children[0]:this;return(0,d.r)((0,d.r)(this).parentNode).insertBefore(n.root,i),this.__instances[t]=n,n}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let r=e.slice(6),n=r.indexOf("."),s=n<0?r:r.substring(0,n);if(s==parseInt(s,10)){let e=n<0?"":r.substring(n+1);this.__handleObservedPaths(e);let i=this.__itemsIdxToInstIdx[s],o=this.__instances[i];if(o){let r=this.as+(e?"."+e:"");o._setPendingPropertyOrPath(r,t,!1,!0),o._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return(0,s.GJ)(this.template,e)}}customElements.define(_.is,_)},33367:(e,t,r)=>{r.d(t,{w:()=>u});var n=r(18890),s=r(74460);const i={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},o={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},a=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},o);function l(e,t,r,n){!function(e,t,r){const n=e._noAccessors,s=Object.getOwnPropertyNames(e);for(let i=0;i<s.length;i++){let o=s[i];if(!(o in r))if(n)t[o]=e[o];else{let r=Object.getOwnPropertyDescriptor(e,o);r&&(r.configurable=!0,Object.defineProperty(t,o,r))}}}(t,e,n);for(let e in i)t[e]&&(r[e]=r[e]||[],r[e].push(t[e]))}function p(e,t,r){t=t||[];for(let n=e.length-1;n>=0;n--){let s=e[n];s?Array.isArray(s)?p(s,t):t.indexOf(s)<0&&(!r||r.indexOf(s)<0)&&t.unshift(s):console.warn("behavior is null, check for missing or 404 import")}return t}function d(e,t){for(const r in t){const n=e[r],s=t[r];e[r]=!("value"in s)&&n&&"value"in n?Object.assign({value:n.value},s):s}}const c=(0,n.x)(HTMLElement);function h(e,t,r){let n;const i={};class c extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(n)for(let e,t=0;t<n.length;t++)e=n[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const t={};if(n)for(let e=0;e<n.length;e++)d(t,n[e].properties);return d(t,e.properties),t}static get observers(){let t=[];if(n)for(let e,r=0;r<n.length;r++)e=n[r],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=i.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=c.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){const t=Object.getPrototypeOf(this);t===e&&(e.__hasRegisterFinished=!0),super._registered(),s.nL&&!Object.hasOwnProperty(e,"__hasCopiedProperties")&&(e.__hasCopiedProperties=!0,h(e));let r=i.beforeRegister;if(r)for(let e=0;e<r.length;e++)r[e].call(t);if(r=i.registered,r)for(let e=0;e<r.length;e++)r[e].call(t)}}_applyListeners(){super._applyListeners();const e=i.listeners;if(e)for(let t=0;t<e.length;t++){const r=e[t];if(r)for(let e in r)this._addMethodEventListenerToNode(this,e,r[e])}}_ensureAttributes(){const e=i.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const r=e[t];for(let e in r)this._ensureAttribute(e,r[e])}super._ensureAttributes()}ready(){super.ready();let e=i.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=i.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=i.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,r){super.attributeChanged();let n=i.attributeChanged;if(n)for(let s=0;s<n.length;s++)n[s].call(this,e,t,r)}}if(r){Array.isArray(r)||(r=[r]);let e=t.prototype.behaviors;n=p(r,null,e),c.prototype.behaviors=e?e.concat(r):n}const h=t=>{n&&function(e,t,r){for(let n=0;n<t.length;n++)l(e,t[n],r,a)}(t,n,i),l(t,e,i,o)};return s.nL||h(c.prototype),c.generatedFrom=e,c}const u=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let r=t?t(c):c;return r=h(e,r,e.behaviors),r.is=r.prototype.is=e.is,r}},18890:(e,t,r)=>{r.d(t,{x:()=>Ce});var n=r(26539);class s{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function i(e){return o(function(e){let t=new s;t.start=0,t.end=e.length;let r=t;for(let n=0,i=e.length;n<i;n++)if(e[n]===p){r.rules||(r.rules=[]);let e=r,t=e.rules[e.rules.length-1]||null;r=new s,r.start=n+1,r.parent=e,r.previous=t,e.rules.push(r)}else e[n]===d&&(r.end=n+1,r=r.parent||t);return t}(e=e.replace(c.comments,"").replace(c.port,"")),e)}function o(e,t){let r=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=r.trim(),e.parent){let n=e.previous?e.previous.end:e.parent.start;r=t.substring(n,e.start-1),r=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(r),r=r.replace(c.multipleSpaces," "),r=r.substring(r.lastIndexOf(";")+1);let s=e.parsedSelector=e.selector=r.trim();e.atRule=0===s.indexOf(_),e.atRule?0===s.indexOf(u)?e.type=l.MEDIA_RULE:s.match(c.keyframesRule)&&(e.type=l.KEYFRAMES_RULE,e.keyframesName=e.selector.split(c.multipleSpaces).pop()):0===s.indexOf(h)?e.type=l.MIXIN_RULE:e.type=l.STYLE_RULE}let n=e.rules;if(n)for(let e,r=0,s=n.length;r<s&&(e=n[r]);r++)o(e,t);return e}function a(e,t,r=""){let n="";if(e.cssText||e.rules){let r=e.rules;if(r&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(h)}(r))for(let e,s=0,i=r.length;s<i&&(e=r[s]);s++)n=a(e,t,n);else n=t?e.cssText:function(e){return function(e){return e.replace(c.mixinApply,"").replace(c.varApply,"")}(e=function(e){return e.replace(c.customProp,"").replace(c.mixinProp,"")}(e))}(e.cssText),n=n.trim(),n&&(n="  "+n+"\n")}return n&&(e.selector&&(r+=e.selector+" "+p+"\n"),r+=n,e.selector&&(r+=d+"\n\n")),r}const l={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},p="{",d="}",c={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},h="--",u="@media",_="@";var f=r(60309);const m=new Set;function y(e){const t=e.textContent;if(!m.has(t)){m.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e)}}function g(e){return e.hasAttribute("shady-unscoped")}function b(e,t){return e?("string"==typeof e&&(e=i(e)),t&&v(e,t),a(e,n.rd)):""}function w(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=i(e.textContent)),e.__cssRules||null}function v(e,t,r,n){if(!e)return;let s=!1,i=e.type;if(n&&i===l.MEDIA_RULE){let t=e.selector.match(f.mA);t&&(window.matchMedia(t[1]).matches||(s=!0))}i===l.STYLE_RULE?t(e):r&&i===l.KEYFRAMES_RULE?r(e):i===l.MIXIN_RULE&&(s=!0);let o=e.rules;if(o&&!s)for(let e,s=0,i=o.length;s<i&&(e=o[s]);s++)v(e,t,r,n)}function P(e,t){let r=0;for(let n=t,s=e.length;n<s;n++)if("("===e[n])r++;else if(")"===e[n]&&0==--r)return n;return-1}function C(e,t){let r=e.indexOf("var(");if(-1===r)return t(e,"","","");let n=P(e,r+3),s=e.substring(r+4,n),i=e.substring(0,r),o=C(e.substring(n+1),t),a=s.indexOf(",");return-1===a?t(i,s.trim(),"",o):t(i,s.substring(0,a).trim(),s.substring(a+1).trim(),o)}window.ShadyDOM&&window.ShadyDOM.wrap;const x="css-build";function S(e){if(void 0!==n.Cp)return n.Cp;if(void 0===e.__cssBuild){const t=e.getAttribute(x);if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if(e[0]===x)return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}(e),e.__cssBuild=t}}return e.__cssBuild||""}function E(e){return""!==S(e)}var O=r(10868);const A=/;\s*/m,T=/^\s*(initial)|(inherit)\s*$/,N=/\s*!important/,k="_-_";class I{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let M=null;class D{constructor(){this._currentElement=null,this._measureElement=null,this._map=new I}detectMixin(e){return(0,O.OH)(e)}gatherStyles(e){const t=function(e){const t=[],r=e.querySelectorAll("style");for(let e=0;e<r.length;e++){const s=r[e];g(s)?n.WA||(y(s),s.parentNode.removeChild(s)):(t.push(s.textContent),s.parentNode.removeChild(s))}return t.join("").trim()}(e.content);if(t){const r=document.createElement("style");return r.textContent=t,e.content.insertBefore(r,e.content.firstChild),r}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const r=e._gatheredStyle;return r?this.transformStyle(r,t):null}transformStyle(e,t=""){let r=w(e);return this.transformRules(r,t),e.textContent=b(r),r}transformCustomStyle(e){let t=w(e);return v(t,(e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)})),e.textContent=b(t),t}transformRules(e,t){this._currentElement=t,v(e,(e=>{this.transformRule(e)})),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(f.CN,((e,r,n,s)=>this._produceCssProperties(e,r,n,s,t))),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const r={};let n=!1;return v(t,(t=>{n=n||t===e,n||t.selector===e.selector&&Object.assign(r,this._cssTextToMap(t.parsedCssText))})),r}_consumeCssProperties(e,t){let r=null;for(;r=f.$T.exec(e);){let n=r[0],s=r[1],i=r.index,o=i+n.indexOf("@apply"),a=i+n.length,l=e.slice(0,o),p=e.slice(a),d=t?this._fallbacksFromPreviousRules(t):{};Object.assign(d,this._cssTextToMap(l));let c=this._atApplyToCssProperties(s,d);e=`${l}${c}${p}`,f.$T.lastIndex=i+c.length}return e}_atApplyToCssProperties(e,t){e=e.replace(A,"");let r=[],n=this._map.get(e);if(n||(this._map.set(e,{}),n=this._map.get(e)),n){let s,i,o;this._currentElement&&(n.dependants[this._currentElement]=!0);const a=n.properties;for(s in a)o=t&&t[s],i=[s,": var(",e,k,s],o&&i.push(",",o.replace(N,"")),i.push(")"),N.test(a[s])&&i.push(" !important"),r.push(i.join(""))}return r.join("; ")}_replaceInitialOrInherit(e,t){let r=T.exec(t);return r&&(t=r[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let r,n,s=e.split(";"),i={};for(let e,o,a=0;a<s.length;a++)e=s[a],e&&(o=e.split(":"),o.length>1&&(r=o[0].trim(),n=o.slice(1).join(":"),t&&(n=this._replaceInitialOrInherit(r,n)),i[r]=n));return i}_invalidateMixinEntry(e){if(M)for(let t in e.dependants)t!==this._currentElement&&M(t)}_produceCssProperties(e,t,r,n,s){if(r&&C(r,((e,t)=>{t&&this._map.get(t)&&(n=`@apply ${t};`)})),!n)return e;let i=this._consumeCssProperties(""+n,s),o=e.slice(0,e.indexOf("--")),a=this._cssTextToMap(i,!0),l=a,p=this._map.get(t),d=p&&p.properties;d?l=Object.assign(Object.create(d),a):this._map.set(t,l);let c,h,u=[],_=!1;for(c in l)h=a[c],void 0===h&&(h="initial"),d&&!(c in d)&&(_=!0),u.push(`${t}_-_${c}: ${h}`);return _&&this._invalidateMixinEntry(p),p&&(p.properties=l),r&&(o=`${e};${o}`),`${o}${u.join("; ")};`}}D.prototype.detectMixin=D.prototype.detectMixin,D.prototype.transformStyle=D.prototype.transformStyle,D.prototype.transformCustomStyle=D.prototype.transformCustomStyle,D.prototype.transformRules=D.prototype.transformRules,D.prototype.transformRule=D.prototype.transformRule,D.prototype.transformTemplate=D.prototype.transformTemplate,D.prototype._separator=k,Object.defineProperty(D.prototype,"invalidCallback",{get:()=>M,set(e){M=e}});const R=D,L={},F="_applyShimCurrentVersion",H="_applyShimNextVersion",z="_applyShimValidatingVersion",j=Promise.resolve();function B(e){let t=L[e];t&&function(e){e[F]=e[F]||0,e[z]=e[z]||0,e[H]=(e[H]||0)+1}(t)}function U(e){return e[F]===e[H]}function $(e){return!U(e)&&e[z]===e[H]}function Y(e){e[z]=e[H],e._validating||(e._validating=!0,j.then((function(){e[F]=e[H],e._validating=!1})))}r(34816);const q=new R;class J{constructor(){this.customStyleInterface=null,q.invalidCallback=B}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{q.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame((()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()}))})}prepareTemplate(e,t){if(this.ensure(),E(e))return;L[t]=e;let r=q.transformTemplate(e,t);e._styleAst=r}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let r=e[t],n=this.customStyleInterface.getStyleForCustomStyle(r);n&&q.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&(0,O.wW)(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,r="",n="";return t?t.indexOf("-")>-1?r=t:(n=t,r=e.getAttribute&&e.getAttribute("is")||""):(r=e.is,n=e.extends),{is:r,typeExtension:n}}(e),r=L[t];if((!r||!E(r))&&r&&!U(r)){$(r)||(this.prepareTemplate(r,t),Y(r));let n=e.shadowRoot;if(n){let e=n.querySelector("style");e&&(e.__cssRules=r._styleAst,e.textContent=b(r._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new J;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,r,n){e.flushCustomStyles(),e.prepareTemplate(t,r)},prepareTemplateStyles(e,t,r){window.ShadyCSS.prepareTemplate(e,t,r)},prepareTemplateDom(e,t){},styleSubtree(t,r){e.flushCustomStyles(),e.styleSubtree(t,r)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>(0,O.B7)(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:n.rd,nativeShadow:n.WA,cssBuild:n.Cp,disableRuntime:n.jF},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=q;var V=r(36608),X=r(60995),W=r(63933),G=r(76389);const Z=/:host\(:dir\((ltr|rtl)\)\)/g,K=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Q=/:dir\((?:ltr|rtl)\)/,ee=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),te=[];let re=null,ne="";function se(){ne=document.documentElement.getAttribute("dir")}function ie(e){if(!e.__autoDirOptOut){e.setAttribute("dir",ne)}}function oe(){se(),ne=document.documentElement.getAttribute("dir");for(let e=0;e<te.length;e++)ie(te[e])}const ae=(0,G.o)((e=>{ee||re||(se(),re=new MutationObserver(oe),re.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=(0,W.Q)(e);class r extends t{static _processStyleText(e,r){return e=t._processStyleText.call(this,e,r),!ee&&Q.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(Z,':host([dir="$1"])'),t=t.replace(K,':host([dir="$2"]) $1'),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(re&&re.takeRecords().length&&oe(),te.push(this),ie(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=te.indexOf(this);e>-1&&te.splice(e,1)}}}return r.__activateDir=!1,r}));r(87529);function le(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?le():window.addEventListener("DOMContentLoaded",le);var pe=r(87156),de=r(81668),ce=r(78956),he=r(21683),ue=r(4059),_e=r(62276);r(56646);const fe=window.ShadyDOM,me=window.ShadyCSS;function ye(e,t){return(0,_e.r)(e).getRootNode()===t}var ge=r(74460),be=r(16777),we=r(65412);const ve="disable-upgrade";let Pe=window.ShadyCSS;const Ce=(0,G.o)((e=>{const t=(0,X._)((0,V.SH)(e)),r=V.PP?t:ae(t),n=(0,be.X)(r),s={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class i extends r{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(e,t,r){(this.__dataAttributes&&this.__dataAttributes[e]||e===ve)&&this.attributeChangedCallback(e,t,r,null)}setAttribute(e,t){if(ge.j8&&!this._legacyForceObservedAttributes){const r=this.getAttribute(e);super.setAttribute(e,t),this.__attributeReaction(e,r,String(t))}else super.setAttribute(e,t)}removeAttribute(e){if(ge.j8&&!this._legacyForceObservedAttributes){const t=this.getAttribute(e);super.removeAttribute(e),this.__attributeReaction(e,t,null)}else super.removeAttribute(e)}static get observedAttributes(){return ge.j8&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],(0,we.z2)(this.prototype)),this.__observedAttributes):n.call(this).concat(ve)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(e,t,r,n){t!==r&&(e==ve?this.__isUpgradeDisabled&&null==r&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,(0,_e.r)(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(e,t,r,n),this.attributeChanged(e,t,r)))}attributeChanged(e,t,r){}_initializeProperties(){if(ge.nL&&this.hasAttribute(ve))this.__isUpgradeDisabled=!0;else{let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),ge.j8&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const e=this.attributes;for(let t=0,r=e.length;t<r;t++){const r=e[t];this.__attributeReaction(r.name,null,r.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,r){this._propertyToAttribute(e,t,r)}serializeValueToAttribute(e,t,r){this._valueToNodeAttribute(r||this,e,t)}extend(e,t){if(!e||!t)return e||t;let r=Object.getOwnPropertyNames(t);for(let n,s=0;s<r.length&&(n=r[s]);s++){let r=Object.getOwnPropertyDescriptor(t,n);r&&Object.defineProperty(e,n,r)}return e}mixin(e,t){for(let r in t)e[r]=t[r];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,r){r=r||{},t=null==t?{}:t;let n=new Event(e,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});n.detail=t;let s=r.node||this;return(0,_e.r)(s).dispatchEvent(n),n}listen(e,t,r){e=e||this;let n=this.__boundListeners||(this.__boundListeners=new WeakMap),s=n.get(e);s||(s={},n.set(e,s));let i=t+r;s[i]||(s[i]=this._addMethodEventListenerToNode(e,t,r,this))}unlisten(e,t,r){e=e||this;let n=this.__boundListeners&&this.__boundListeners.get(e),s=t+r,i=n&&n[s];i&&(this._removeEventListenerFromNode(e,t,i),n[s]=null)}setScrollDirection(e,t){(0,de.BP)(t||this,s[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=(0,_e.r)(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=(0,pe.vz)(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return(0,pe.vz)(this).getEffectiveChildNodes()}queryDistributedElements(e){return(0,pe.vz)(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let r,n=0;r=e[n];n++)r.nodeType!==Node.COMMENT_NODE&&t.push(r.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?(0,pe.vz)(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){const t=this;return t!==e&&(0,_e.r)(t).contains(e)&&(0,_e.r)(t).getRootNode()===(0,_e.r)(e).getRootNode()}isLocalDescendant(e){return this.root===(0,_e.r)(e).getRootNode()}scopeSubtree(e,t=!1){return function(e,t=!1){if(!fe||!me)return null;if(!fe.handlesDynamicScoping)return null;const r=me.ScopingShim;if(!r)return null;const n=r.scopeForNode(e),s=(0,_e.r)(e).getRootNode(),i=e=>{if(!ye(e,s))return;const t=Array.from(fe.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let e=0;e<t.length;e++){const i=t[e];if(!ye(i,s))continue;const o=r.currentScopeForNode(i);o!==n&&(""!==o&&r.unscopeNode(i,o),r.scopeNode(i,n))}};if(i(e),t){const t=new MutationObserver((e=>{for(let t=0;t<e.length;t++){const r=e[t];for(let e=0;e<r.addedNodes.length;e++){const t=r.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&i(t)}}}));return t.observe(e,{childList:!0,subtree:!0}),t}return null}(e,t)}getComputedStyleValue(e){return Pe.getComputedStyleValue(this,e)}debounce(e,t,r){return this._debouncers=this._debouncers||{},this._debouncers[e]=ce.dx.debounce(this._debouncers[e],r>0?he.Wc.after(r):he.YA,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?he.Wc.run(e.bind(this),t):~he.YA.run(e.bind(this))}cancelAsync(e){e<0?he.YA.cancel(~e):he.Wc.cancel(e)}create(e,t){let r=document.createElement(e);if(t)if(r.setProperties)r.setProperties(t);else for(let e in t)r[e]=t[e];return r}elementMatches(e,t){return(0,pe.Ku)(t||this,e)}toggleAttribute(e,t){let r=this;return 3===arguments.length&&(r=arguments[2]),1==arguments.length&&(t=!r.hasAttribute(e)),t?((0,_e.r)(r).setAttribute(e,""),!0):((0,_e.r)(r).removeAttribute(e),!1)}toggleClass(e,t,r){r=r||this,1==arguments.length&&(t=!r.classList.contains(e)),t?r.classList.add(e):r.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,r,n){n=n||this,this.transform("translate3d("+e+","+t+","+r+")",n)}arrayDelete(e,t){let r;if(Array.isArray(e)){if(r=e.indexOf(t),r>=0)return e.splice(r,1)}else{if(r=(0,ue.U2)(this,e).indexOf(t),r>=0)return this.splice(e,r,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return i.prototype.is="",i}))},72419:(e,t,r)=>{var n=r(18691);let s;s=n.E._mutablePropertyChange;Boolean},9672:(e,t,r)=>{var n=r(33367);r(56646);const s=function(e){let t;return t="function"==typeof e?e:s.Class(e),e._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=e._legacyForceObservedAttributes),customElements.define(t.is,t),t};s.Class=n.w},87156:(e,t,r)=>{r.d(t,{Ku:()=>a,vz:()=>h});r(56646);var n=r(62276),s=(r(74460),r(20723));r(93252),r(78956);const i=Element.prototype,o=i.matches||i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector,a=function(e,t){return o.call(e,t)};class l{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new s.o(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if((0,n.r)(this.node).contains(e))return!0;let t=e,r=e.ownerDocument;for(;t&&t!==r&&t!==this.node;)t=(0,n.r)(t).parentNode||(0,n.r)(t).host;return t===this.node}getOwnerRoot(){return(0,n.r)(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?(0,n.r)(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=(0,n.r)(this.node).assignedSlot;for(;t;)e.push(t),t=(0,n.r)(t).assignedSlot;return e}importNode(e,t){let r=this.node instanceof Document?this.node:this.node.ownerDocument;return(0,n.r)(r).importNode(e,t)}getEffectiveChildNodes(){return s.o.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),r=[];for(let n,s=0,i=t.length;s<i&&(n=t[s]);s++)n.nodeType===Node.ELEMENT_NODE&&a(n,e)&&r.push(n);return r}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function p(e,t){for(let r=0;r<t.length;r++){let n=t[r];Object.defineProperty(e,n,{get:function(){return this.node[n]},configurable:!0})}}class d{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}l.prototype.cloneNode,l.prototype.appendChild,l.prototype.insertBefore,l.prototype.removeChild,l.prototype.replaceChild,l.prototype.setAttribute,l.prototype.removeAttribute,l.prototype.querySelector,l.prototype.querySelectorAll,l.prototype.parentNode,l.prototype.firstChild,l.prototype.lastChild,l.prototype.nextSibling,l.prototype.previousSibling,l.prototype.firstElementChild,l.prototype.lastElementChild,l.prototype.nextElementSibling,l.prototype.previousElementSibling,l.prototype.childNodes,l.prototype.children,l.prototype.classList,l.prototype.textContent,l.prototype.innerHTML;let c=l;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(l.prototype).forEach((t=>{"activeElement"!=t&&(e.prototype[t]=l.prototype[t])})),p(e.prototype,["classList"]),c=e,Object.defineProperties(d.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&h(e).getOwnerRoot(),r=this.path;for(let e=0;e<r.length;e++){const n=r[e];if(h(n).getOwnerRoot()===t)return n}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let r=0;r<t.length;r++){let n=t[r];e[n]=function(){return this.node[n].apply(this.node,arguments)}}}(l.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),p(l.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(let r=0;r<t.length;r++){let n=t[r];Object.defineProperty(e,n,{get:function(){return this.node[n]},set:function(e){this.node[n]=e},configurable:!0})}}(l.prototype,["textContent","innerHTML","className"]);const h=function(e){if((e=e||document)instanceof c)return e;if(e instanceof d)return e;let t=e.__domApi;return t||(t=e instanceof Event?new d(e):new c(e),e.__domApi=t),t}},37692:(e,t,r)=>{r(52521)},16777:(e,t,r)=>{r.d(t,{X:()=>a});var n=r(36608),s=r(76389),i=r(62276);const o="disable-upgrade",a=e=>{for(;e;){const t=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor}return()=>[]};(0,s.o)((e=>{const t=(0,n.SH)(e);let r=a(t);return class extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return r.call(this).concat(o)}_initializeProperties(){this.hasAttribute(o)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}attributeChangedCallback(e,t,r,n){e==o?this.__isUpgradeDisabled&&null==r&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,(0,i.r)(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(e,t,r,n)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}}))},36608:(e,t,r)=>{r.d(t,{SH:()=>_,PP:()=>u});r(56646);var n=r(74460),s=r(76389),i=r(15392),o=r(42687),a=r(21384),l=r(40729),p=r(65412),d=r(24072);const c=(0,s.o)((e=>{const t=(0,d.e)(e);function r(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof s?t:null}function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const r=e.properties;r&&(t=function(e){const t={};for(let r in e){const n=e[r];t[r]="function"==typeof n?{type:n}:n}return t}(r))}e.__ownProperties=t}return e.__ownProperties}class s extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){(0,p.z2)(this.prototype);const e=this._properties;this.__observedAttributes=e?Object.keys(e).map((e=>this.prototype._addPropertyToAttributeMap(e))):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=r(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=n(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=r(this);this.__properties=Object.assign({},e&&e._properties,n(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){(0,p.Gd)(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return s}));var h=r(62276);const u=window.ShadyCSS&&window.ShadyCSS.cssBuild,_=(0,s.o)((e=>{const t=c((0,l.q)(e));return class extends t{static get polymerElementVersion(){return"3.4.1"}static _finalizeClass(){t._finalizeClass.call(this);const e=((r=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",r))||(r.__ownObservers=r.hasOwnProperty(JSCompiler_renameProperty("observers",r))?r.observers:null),r.__ownObservers);var r;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):n.nL||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let i in e)t=this.prototype,r=i,n=e[i],s=e,n.computed&&(n.readOnly=!0),n.computed&&(t._hasReadOnlyEffect(r)?console.warn(`Cannot redefine computed property '${r}'.`):t._createComputedProperty(r,n.computed,s)),n.readOnly&&!t._hasReadOnlyEffect(r)?t._createReadOnlyProperty(r,!n.computed):!1===n.readOnly&&t._hasReadOnlyEffect(r)&&console.warn(`Cannot make readOnly property '${r}' non-readOnly.`),n.reflectToAttribute&&!t._hasReflectEffect(r)?t._createReflectedProperty(r):!1===n.reflectToAttribute&&t._hasReflectEffect(r)&&console.warn(`Cannot make reflected property '${r}' non-reflected.`),n.notify&&!t._hasNotifyEffect(r)?t._createNotifyingProperty(r):!1===n.notify&&t._hasNotifyEffect(r)&&console.warn(`Cannot make notify property '${r}' non-notify.`),n.observer&&t._createPropertyObserver(r,n.observer,s[n.observer]),t._addPropertyToAttributeMap(r);var t,r,n,s}static createObservers(e,t){const r=this.prototype;for(let n=0;n<e.length;n++)r._createMethodObserver(e[n],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){const e=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=void 0!==e?e:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(e){let t=null;if(e&&(!n.XN||n.ZN)&&(t=a.t.import(e,"template"),n.XN&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=(0,o.iY)(e.url);else{const e=a.t.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=n.sM,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let r in t){let n=t[r];"value"in n&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[r]=n)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let r=e[t];if(this._canApplyPropertyDefault(t)){let e="function"==typeof r.value?r.value.call(this):r.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return(0,o.Rq)(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const r=this.importPath;!function(e,t,r,s){if(!u){const n=t.content.querySelectorAll("style"),o=(0,i.uT)(t),a=(0,i.lx)(r),l=t.content.firstElementChild;for(let r=0;r<a.length;r++){let n=a[r];n.textContent=e._processStyleText(n.textContent,s),t.content.insertBefore(n,l)}let p=0;for(let t=0;t<o.length;t++){let r=o[t],i=n[p];i!==r?(r=r.cloneNode(!0),i.parentNode.insertBefore(r,i)):p++,r.textContent=e._processStyleText(r.textContent,s)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,r),n.md&&u&&n.FV){const r=t.content.querySelectorAll("style");if(r){let t="";Array.from(r).forEach((e=>{t+=e.textContent,e.parentNode.removeChild(e)})),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}(this,t,e,r?(0,o.Kk)(r):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=(0,h.r)(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),n.Hr&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=(0,o.Kk)(this.importPath)),(0,o.Kk)(e,t)}static _parseTemplateContent(e,r,n){return r.dynamicFns=r.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,r,n)}static _addTemplatePropertyEffect(e,r,s){return!n.a2||r in this._properties||s.info.part.signature&&s.info.part.signature.static||s.info.part.hostProp||e.nestedTemplate||console.warn(`Property '${r}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,r,s)}}}))},60995:(e,t,r)=>{r.d(t,{_:()=>i});r(56646);var n=r(76389),s=r(81668);const i=(0,n.o)((e=>class extends e{_addEventListenerToNode(e,t,r){(0,s.NH)(e,t,r)||super._addEventListenerToNode(e,t,r)}_removeEventListenerFromNode(e,t,r){(0,s.ys)(e,t,r)||super._removeEventListenerFromNode(e,t,r)}}))},18691:(e,t,r)=>{r.d(t,{E:()=>i,w:()=>o});var n=r(76389);function s(e,t,r,n,s){let i;s&&(i="object"==typeof r&&null!==r,i&&(n=e.__dataTemp[t]));let o=n!==r&&(n==n||r==r);return i&&o&&(e.__dataTemp[t]=r),o}const i=(0,n.o)((e=>class extends e{_shouldPropertyChange(e,t,r){return s(this,e,t,r,!0)}})),o=(0,n.o)((e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,r){return s(this,e,t,r,this.mutableData)}}));i._mutablePropertyChange=s},24072:(e,t,r)=>{r.d(t,{e:()=>a});r(56646);var n=r(76389),s=r(21683),i=r(62276);const o=s.YA,a=(0,n.o)((e=>class extends e{static createProperties(e){const t=this.prototype;for(let r in e)r in t||t._createPropertyAccessor(r)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,r){let n=this.__data[e],s=this._shouldPropertyChange(e,t,n);return s&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=n),this.__data[e]=t,this.__dataPending[e]=t),s}_isPropertyPending(e){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,o.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const e=this.__data,t=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(e,t,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,r)),this.__dataCounter--}_shouldPropertiesChange(e,t,r){return Boolean(t)}_propertiesChanged(e,t,r){}_shouldPropertyChange(e,t,r){return r!==t&&(r==r||t==t)}attributeChangedCallback(e,t,r,n){t!==r&&this._attributeToProperty(e,r),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,r,n)}_attributeToProperty(e,t,r){if(!this.__serializing){const n=this.__dataAttributes,s=n&&n[e]||e;this[s]=this._deserializeValue(t,r||this.constructor.typeForProperty(s))}}_propertyToAttribute(e,t,r){this.__serializing=!0,r=arguments.length<3?this[e]:r,this._valueToNodeAttribute(this,r,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,r){const n=this._serializeValue(t);"class"!==r&&"name"!==r&&"slot"!==r||(e=(0,i.r)(e)),void 0===n?e.removeAttribute(r):e.setAttribute(r,n)}_serializeValue(e){return"boolean"==typeof e?e?"":void 0:null!=e?e.toString():void 0}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}))},63933:(e,t,r)=>{r.d(t,{Q:()=>l});r(56646);var n=r(76389),s=r(67130),i=r(24072);const o={};let a=HTMLElement.prototype;for(;a;){let e=Object.getOwnPropertyNames(a);for(let t=0;t<e.length;t++)o[e[t]]=!0;a=Object.getPrototypeOf(a)}const l=(0,n.o)((e=>{const t=(0,i.e)(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor((0,s.z)(e[t]))}static attributeNameForProperty(e){return(0,s.n)(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const r=this;r.hasAttribute(e)||this._valueToNodeAttribute(r,t,e)}_serializeValue(e){if("object"==typeof e){if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}}return super._serializeValue(e)}_deserializeValue(e,t){let r;switch(t){case Object:try{r=JSON.parse(e)}catch(t){r=e}break;case Array:try{r=JSON.parse(e)}catch(t){r=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:r=isNaN(e)?String(e):Number(e),r=new Date(r);break;default:r=super._deserializeValue(e,t)}return r}_definePropertyAccessor(e,t){!function(e,t){if(!o[t]){let r=e[t];void 0!==r&&(e.__data?e._setPendingProperty(t,r):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=r))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}}))},40729:(e,t,r)=>{r.d(t,{q:()=>K});r(56646);var n=r(62276),s=r(76389),i=r(4059),o=r(67130),a=r(63933);const l={"dom-if":!0,"dom-repeat":!0};let p=!1,d=!1;function c(e){(function(){if(!p){p=!0;const e=document.createElement("textarea");e.placeholder="a",d=e.placeholder===e.textContent}return d})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function h(e){let t=e.getAttribute("is");if(t&&l[t]){let r=e;for(r.removeAttribute("is"),e=r.ownerDocument.createElement(t),r.parentNode.replaceChild(e,r),e.appendChild(r);r.attributes.length;)e.setAttribute(r.attributes[0].name,r.attributes[0].value),r.removeAttribute(r.attributes[0].name)}return e}function u(e,t){let r=t.parentInfo&&u(e,t.parentInfo);if(!r)return e;for(let e=r.firstChild,n=0;e;e=e.nextSibling)if(t.parentIndex===n++)return e}function _(e,t,r,n){n.id&&(t[n.id]=r)}function f(e,t,r){if(r.events&&r.events.length)for(let n,s=0,i=r.events;s<i.length&&(n=i[s]);s++)e._addMethodEventListenerToNode(t,n.name,n.value,e)}function m(e,t,r,n){r.templateInfo&&(t._templateInfo=r.templateInfo,t._parentTemplateInfo=n)}const y=(0,s.o)((e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let r=e._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=Boolean(t),r.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,r,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,r){return this._parseTemplateNode(e.content,t,r)}static _parseTemplateNode(e,t,r){let n=!1,s=e;return"template"!=s.localName||s.hasAttribute("preserve-content")?"slot"===s.localName&&(t.hasInsertionPoint=!0):n=this._parseTemplateNestedTemplate(s,t,r)||n,c(s),s.firstChild&&this._parseTemplateChildNodes(s,t,r),s.hasAttributes&&s.hasAttributes()&&(n=this._parseTemplateNodeAttributes(s,t,r)||n),n||r.noted}static _parseTemplateChildNodes(e,t,r){if("script"!==e.localName&&"style"!==e.localName)for(let n,s=e.firstChild,i=0;s;s=n){if("template"==s.localName&&(s=h(s)),n=s.nextSibling,s.nodeType===Node.TEXT_NODE){let r=n;for(;r&&r.nodeType===Node.TEXT_NODE;)s.textContent+=r.textContent,n=r.nextSibling,e.removeChild(r),r=n;if(t.stripWhiteSpace&&!s.textContent.trim()){e.removeChild(s);continue}}let o={parentIndex:i,parentInfo:r};this._parseTemplateNode(s,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),s.parentNode&&i++}}static _parseTemplateNestedTemplate(e,t,r){let n=e,s=this._parseTemplate(n,t);return(s.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),r.templateInfo=s,!0}static _parseTemplateNodeAttributes(e,t,r){let n=!1,s=Array.from(e.attributes);for(let i,o=s.length-1;i=s[o];o--)n=this._parseTemplateNodeAttribute(e,t,r,i.name,i.value)||n;return n}static _parseTemplateNodeAttribute(e,t,r,n,s){return"on-"===n.slice(0,3)?(e.removeAttribute(n),r.events=r.events||[],r.events.push({name:n.slice(3),value:s}),!0):"id"===n&&(r.id=s,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let r=(t=t||this.constructor._parseTemplate(e)).nodeInfoList,n=t.content||e.content,s=document.importNode(n,!0);s.__noInsertionPoint=!t.hasInsertionPoint;let i=s.nodeList=new Array(r.length);s.$={};for(let e,n=0,o=r.length;n<o&&(e=r[n]);n++){let r=i[n]=u(s,e);_(0,s.$,r,e),m(0,r,e,t),f(this,r,e)}return s=s,s}_addMethodEventListenerToNode(e,t,r,n){let s=function(e,t,r){return e=e._methodHost||e,function(t){e[r]?e[r](t,t.detail):console.warn("listener method `"+r+"` not defined")}}(n=n||e,0,r);return this._addEventListenerToNode(e,t,s),s}_addEventListenerToNode(e,t,r){e.addEventListener(t,r)}_removeEventListenerFromNode(e,t,r){e.removeEventListener(t,r)}}));var g=r(74460);let b=0;const w=[],v={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},P="__computeInfo",C=/[A-Z]/;function x(e,t,r){let n=e[t];if(n){if(!e.hasOwnProperty(t)&&(n=e[t]=Object.create(e[t]),r))for(let e in n){let t=n[e],r=n[e]=Array(t.length);for(let e=0;e<t.length;e++)r[e]=t[e]}}else n=e[t]={};return n}function S(e,t,r,n,s,o){if(t){let a=!1;const l=b++;for(let p in r){let d=t[s?(0,i.Jz)(p):p];if(d)for(let t,i=0,c=d.length;i<c&&(t=d[i]);i++)t.info&&t.info.lastRun===l||s&&!O(p,t.trigger)||(t.info&&(t.info.lastRun=l),t.fn(e,p,r,n,t.info,s,o),a=!0)}return a}return!1}function E(e,t,r,n,s,o,a,l){let p=!1,d=t[a?(0,i.Jz)(n):n];if(d)for(let t,i=0,c=d.length;i<c&&(t=d[i]);i++)t.info&&t.info.lastRun===r||a&&!O(n,t.trigger)||(t.info&&(t.info.lastRun=r),t.fn(e,n,s,o,t.info,a,l),p=!0);return p}function O(e,t){if(t){let r=t.name;return r==e||!(!t.structured||!(0,i.jg)(r,e))||!(!t.wildcard||!(0,i.SG)(r,e))}return!0}function A(e,t,r,n,s){let i="string"==typeof s.method?e[s.method]:s.method,o=s.property;i?i.call(e,e.__data[o],n[o]):s.dynamicFn||console.warn("observer method `"+s.method+"` not defined")}function T(e,t,r){let n=(0,i.Jz)(t);if(n!==t){return N(e,(0,o.n)(n)+"-changed",r[t],t),!0}return!1}function N(e,t,r,s){let i={value:r,queueProperty:!0};s&&(i.path=s),(0,n.r)(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function k(e,t,r,n,s,o){let a=(o?(0,i.Jz)(t):t)!=t?t:null,l=a?(0,i.U2)(e,a):e.__data[t];a&&void 0===l&&(l=r[t]),N(e,s.eventName,l,a)}function I(e,t,r,n,s){let i=e.__data[t];g.v1&&(i=(0,g.v1)(i,s.attrName,"attribute",e)),e._propertyToAttribute(t,s.attrName,i)}function M(e,t,r,n){let s=e[v.COMPUTE];if(s)if(g.ls){b++;const i=function(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const r=e[v.COMPUTE];let n,{counts:s,ready:i,total:o}=function(e){const t=e.__computeInfo,r={},n=e[v.COMPUTE],s=[];let i=0;for(let e in t){const n=t[e];i+=r[e]=n.args.filter((e=>!e.literal)).length+(n.dynamicFn?1:0)}for(let e in n)t[e]||s.push(e);return{counts:r,ready:s,total:i}}(e);for(;n=i.shift();){t.set(n,t.size);const e=r[n];e&&e.forEach((e=>{const t=e.info.methodInfo;--o,0==--s[t]&&i.push(t)}))}if(0!==o){const t=e;console.warn(`Computed graph for ${t.localName} incomplete; circular?`)}e.constructor.__orderedComputedDeps=t}return t}(e),o=[];for(let e in t)R(e,s,o,i,n);let a;for(;a=o.shift();)L(e,"",t,r,a)&&R(a.methodInfo,s,o,i,n);Object.assign(r,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let i=t;for(;S(e,s,i,r,n);)Object.assign(r,e.__dataOld),Object.assign(t,e.__dataPending),i=e.__dataPending,e.__dataPending=null}}const D=(e,t,r)=>{let n=0,s=t.length-1,i=-1;for(;n<=s;){const o=n+s>>1,a=r.get(t[o].methodInfo)-r.get(e.methodInfo);if(a<0)n=o+1;else{if(!(a>0)){i=o;break}s=o-1}}i<0&&(i=s+1),t.splice(i,0,e)},R=(e,t,r,n,s)=>{const o=t[s?(0,i.Jz)(e):e];if(o)for(let t=0;t<o.length;t++){const i=o[t];i.info.lastRun===b||s&&!O(e,i.trigger)||(i.info.lastRun=b,D(i.info,r,n))}};function L(e,t,r,n,s){let i=$(e,t,r,n,s);if(i===w)return!1;let o=s.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,i,!0):(e[o]=i,!1)}function F(e,t,r,n,s,i,a){r.bindings=r.bindings||[];let l={kind:n,target:s,parts:i,literal:a,isCompound:1!==i.length};if(r.bindings.push(l),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(l)){let{event:e,negate:t}=l.parts[0];l.listenerEvent=e||(0,o.n)(s)+"-changed",l.listenerNegate=t}let p=t.nodeInfoList.length;for(let r=0;r<l.parts.length;r++){let n=l.parts[r];n.compoundIndex=r,H(e,t,l,n,p)}}function H(e,t,r,n,s){if(!n.literal)if("attribute"===r.kind&&"-"===r.target[0])console.warn("Cannot set attribute "+r.target+' because "-" is not a valid attribute starting character');else{let i=n.dependencies,o={index:s,binding:r,part:n,evaluator:e};for(let r=0;r<i.length;r++){let n=i[r];"string"==typeof n&&(n=X(n),n.wildcard=!0),e._addTemplatePropertyEffect(t,n.rootProperty,{fn:z,info:o,trigger:n})}}}function z(e,t,r,n,s,o,a){let l=a[s.index],p=s.binding,d=s.part;if(o&&d.source&&t.length>d.source.length&&"property"==p.kind&&!p.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[p.target]){let n=r[t];t=(0,i.Iu)(d.source,p.target,t),l._setPendingPropertyOrPath(t,n,!1,!0)&&e._enqueueClient(l)}else{let i=s.evaluator._evaluateBinding(e,d,t,r,n,o);i!==w&&function(e,t,r,n,s){s=function(e,t,r,n){if(r.isCompound){let s=e.__dataCompoundStorage[r.target];s[n.compoundIndex]=t,t=s.join("")}"attribute"!==r.kind&&("textContent"!==r.target&&("value"!==r.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,s,r,n),g.v1&&(s=(0,g.v1)(s,r.target,r.kind,t));if("attribute"==r.kind)e._valueToNodeAttribute(t,s,r.target);else{let n=r.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[n]?t[v.READ_ONLY]&&t[v.READ_ONLY][n]||t._setPendingProperty(n,s)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,n,s)}}(e,l,p,d,i)}}function j(e,t){if(t.isCompound){let r=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),s=t.parts,i=new Array(s.length);for(let e=0;e<s.length;e++)i[e]=s[e].literal;let o=t.target;r[o]=i,t.literal&&"property"==t.kind&&("className"===o&&(e=(0,n.r)(e)),e[o]=t.literal)}}function B(e,t,r){if(r.listenerEvent){let n=r.parts[0];e.addEventListener(r.listenerEvent,(function(e){!function(e,t,r,n,s){let o,a=e.detail,l=a&&a.path;l?(n=(0,i.Iu)(r,n,l),o=a&&a.value):o=e.currentTarget[r],o=s?!o:o,t[v.READ_ONLY]&&t[v.READ_ONLY][n]||!t._setPendingPropertyOrPath(n,o,!0,Boolean(l))||a&&a.queueProperty||t._invalidateProperties()}(e,t,r.target,n.source,n.negate)}))}}function U(e,t,r,n,s,i){i=t.static||i&&("object"!=typeof i||i[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:s,dynamicFn:i};for(let s,i=0;i<t.args.length&&(s=t.args[i]);i++)s.literal||e._addPropertyEffect(s.rootProperty,r,{fn:n,info:o,trigger:s});return i&&e._addPropertyEffect(t.methodName,r,{fn:n,info:o}),o}function $(e,t,r,n,s){let i=e._methodHost||e,o=i[s.methodName];if(o){let n=e._marshalArgs(s.args,t,r);return n===w?w:o.apply(i,n)}s.dynamicFn||console.warn("method `"+s.methodName+"` not defined")}const Y=[],q=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function J(e){let t="";for(let r=0;r<e.length;r++){t+=e[r].literal||""}return t}function V(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:Y};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let r=X(e);return r.literal||(t.static=!1),r}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function X(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),r={name:t,value:"",literal:!1},n=t[0];switch("-"===n&&(n=t[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':r.value=t.slice(1,-1),r.literal=!0;break;case"#":r.value=Number(t),r.literal=!0}return r.literal||(r.rootProperty=(0,i.Jz)(t),r.structured=(0,i.AZ)(t),r.structured&&(r.wildcard=".*"==t.slice(-2),r.wildcard&&(r.name=t.slice(0,-2)))),r}function W(e,t,r){let n=(0,i.U2)(e,r);return void 0===n&&(n=t[r]),n}function G(e,t,r,n){const s={indexSplices:n};g.HY&&!e._overrideLegacyUndefined&&(t.splices=s),e.notifyPath(r+".splices",s),e.notifyPath(r+".length",t.length),g.HY&&!e._overrideLegacyUndefined&&(s.indexSplices=[])}function Z(e,t,r,n,s,i){G(e,t,r,[{index:n,addedCount:s,removed:i,object:t,type:"splice"}])}const K=(0,s.o)((e=>{const t=y((0,a.Q)(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return v}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Q.length){let e=Q[Q.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[v.READ_ONLY];for(let r in e)t&&t[r]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[r]=this.__dataPending[r]=e[r])}_addPropertyEffect(e,t,r){this._createPropertyAccessor(e,t==v.READ_ONLY);let n=x(this,t,!0)[e];n||(n=this[t][e]=[]),n.push(r)}_removePropertyEffect(e,t,r){let n=x(this,t,!0)[e],s=n.indexOf(r);s>=0&&n.splice(s,1)}_hasPropertyEffect(e,t){let r=this[t];return Boolean(r&&r[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,v.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,v.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,v.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,v.COMPUTE)}_setPendingPropertyOrPath(e,t,r,n){if(n||(0,i.Jz)(Array.isArray(e)?e[0]:e)!==e){if(!n){let r=(0,i.U2)(this,e);if(!(e=(0,i.t8)(this,e,t))||!super._shouldPropertyChange(e,t,r))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,r))return function(e,t,r){let n=e.__dataLinkedPaths;if(n){let s;for(let o in n){let a=n[o];(0,i.SG)(o,t)?(s=(0,i.Iu)(o,a,t),e._setPendingPropertyOrPath(s,r,!0,!0)):(0,i.SG)(a,t)&&(s=(0,i.Iu)(a,o,t),e._setPendingPropertyOrPath(s,r,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,r);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,r){r===e[t]&&"object"!=typeof r||("className"===t&&(e=(0,n.r)(e)),e[t]=r)}_setPendingProperty(e,t,r){let n=this.__dataHasPaths&&(0,i.AZ)(e),s=n?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,s[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),n?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(n||this[v.NOTIFY]&&this[v.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=r),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let r=e[t];r.__dataEnabled?r.__dataPending&&r._flushProperties():r._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let r in e)!t&&this[v.READ_ONLY]&&this[v.READ_ONLY][r]||this._setPendingPropertyOrPath(r,e[r],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,r){let n,s=this.__dataHasPaths;this.__dataHasPaths=!1,M(this,t,r,s),n=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,r,s),this._flushClients(),S(this,this[v.REFLECT],t,r,s),S(this,this[v.OBSERVE],t,r,s),n&&function(e,t,r,n,s){let i,o,a=e[v.NOTIFY],l=b++;for(let o in t)t[o]&&(a&&E(e,a,l,o,r,n,s)||s&&T(e,o,r))&&(i=!0);i&&(o=e.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}(this,n,t,r,s),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,r){this[v.PROPAGATE]&&S(this,this[v.PROPAGATE],e,t,r),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,r)}_runEffectsForTemplate(e,t,r,n){const s=(t,n)=>{S(this,e.propertyEffects,t,r,n,e.nodeList);for(let s=e.firstChild;s;s=s.nextSibling)this._runEffectsForTemplate(s,t,r,n)};e.runEffects?e.runEffects(s,t,n):s(t,n)}linkPaths(e,t){e=(0,i.Fv)(e),t=(0,i.Fv)(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=(0,i.Fv)(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let r={path:""};G(this,(0,i.U2)(this,e,r),r.path,t)}get(e,t){return(0,i.U2)(t||this,e)}set(e,t,r){r?(0,i.t8)(r,e,t):this[v.READ_ONLY]&&this[v.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let r={path:""},n=(0,i.U2)(this,e,r),s=n.length,o=n.push(...t);return t.length&&Z(this,n,r.path,s,t.length,[]),o}pop(e){let t={path:""},r=(0,i.U2)(this,e,t),n=Boolean(r.length),s=r.pop();return n&&Z(this,r,t.path,r.length,0,[s]),s}splice(e,t,r,...n){let s,o={path:""},a=(0,i.U2)(this,e,o);return t<0?t=a.length-Math.floor(-t):t&&(t=Math.floor(t)),s=2===arguments.length?a.splice(t):a.splice(t,r,...n),(n.length||s.length)&&Z(this,a,o.path,t,n.length,s),s}shift(e){let t={path:""},r=(0,i.U2)(this,e,t),n=Boolean(r.length),s=r.shift();return n&&Z(this,r,t.path,0,0,[s]),s}unshift(e,...t){let r={path:""},n=(0,i.U2)(this,e,r),s=n.unshift(...t);return t.length&&Z(this,n,r.path,0,t.length,[]),s}notifyPath(e,t){let r;if(1==arguments.length){let n={path:""};t=(0,i.U2)(this,e,n),r=n.path}else r=Array.isArray(e)?(0,i.Fv)(e):e;this._setPendingPropertyOrPath(r,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var r;this._addPropertyEffect(e,v.READ_ONLY),t&&(this["_set"+(r=e,r[0].toUpperCase()+r.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,r){let n={property:e,method:t,dynamicFn:Boolean(r)};this._addPropertyEffect(e,v.OBSERVE,{fn:A,info:n,trigger:{name:e}}),r&&this._addPropertyEffect(t,v.OBSERVE,{fn:A,info:n,trigger:{name:t}})}_createMethodObserver(e,t){let r=V(e);if(!r)throw new Error("Malformed observer expression '"+e+"'");U(this,r,v.OBSERVE,$,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,v.NOTIFY,{fn:k,info:{eventName:(0,o.n)(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,v.REFLECT,{fn:I,info:{attrName:t}})}_createComputedProperty(e,t,r){let n=V(t);if(!n)throw new Error("Malformed computed expression '"+t+"'");const s=U(this,n,v.COMPUTE,L,e,r);x(this,P)[e]=s}_marshalArgs(e,t,r){const n=this.__data,s=[];for(let o=0,a=e.length;o<a;o++){let{name:a,structured:l,wildcard:p,value:d,literal:c}=e[o];if(!c)if(p){const e=(0,i.SG)(a,t),s=W(n,r,e?t:a);d={path:e?t:a,value:s,base:e?(0,i.U2)(n,a):s}}else d=l?W(n,r,a):n[a];if(g.HY&&!this._overrideLegacyUndefined&&void 0===d&&e.length>1)return w;s[o]=d}return s}static addPropertyEffect(e,t,r){this.prototype._addPropertyEffect(e,t,r)}static createPropertyObserver(e,t,r){this.prototype._createPropertyObserver(e,t,r)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,r){this.prototype._createComputedProperty(e,t,r)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let r=this.constructor._parseTemplate(e),n=this.__preBoundTemplateInfo==r;if(!n)for(let e in r.propertyEffects)this._createPropertyAccessor(e);if(t)if(r=Object.create(r),r.wasPreBound=n,this.__templateInfo){const t=e._parentTemplateInfo||this.__templateInfo,n=t.lastChild;r.parent=t,t.lastChild=r,r.previousSibling=n,n?n.nextSibling=r:t.firstChild=r}else this.__templateInfo=r;else this.__preBoundTemplateInfo=r;return r}static _addTemplatePropertyEffect(e,t,r){(e.hostProps=e.hostProps||{})[t]=!0;let n=e.propertyEffects=e.propertyEffects||{};(n[t]=n[t]||[]).push(r)}_stampTemplate(e,t){t=t||this._bindTemplate(e,!0),Q.push(this);let r=super._stampTemplate(e,t);if(Q.pop(),t.nodeList=r.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=r.firstChild;t;t=t.nextSibling)e.push(t)}return r.templateInfo=t,function(e,t){let{nodeList:r,nodeInfoList:n}=t;if(n.length)for(let t=0;t<n.length;t++){let s=n[t],i=r[t],o=s.bindings;if(o)for(let t=0;t<o.length;t++){let r=o[t];j(i,r),B(i,e,r)}i.__dataHost=e}}(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),r}_removeBoundDom(e){const t=e.templateInfo,{previousSibling:r,nextSibling:s,parent:i}=t;r?r.nextSibling=s:i&&(i.firstChild=s),s?s.previousSibling=r:i&&(i.lastChild=r),t.nextSibling=t.previousSibling=null;let o=t.childNodes;for(let e=0;e<o.length;e++){let t=o[e];(0,n.r)((0,n.r)(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,r,n){let s=t._parseTemplateNode.call(this,e,r,n);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,r);t&&(e.textContent=J(t)||" ",F(this,r,n,"text","textContent",t),s=!0)}return s}static _parseTemplateNodeAttribute(e,r,n,s,i){let a=this._parseBindings(i,r);if(a){let t=s,i="property";C.test(s)?i="attribute":"$"==s[s.length-1]&&(s=s.slice(0,-1),i="attribute");let l=J(a);return l&&"attribute"==i&&("class"==s&&e.hasAttribute("class")&&(l+=" "+e.getAttribute(s)),e.setAttribute(s,l)),"attribute"==i&&"disable-upgrade$"==t&&e.setAttribute(s,""),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===i&&(s=(0,o.z)(s)),F(this,r,n,i,s,a,l),!0}return t._parseTemplateNodeAttribute.call(this,e,r,n,s,i)}static _parseTemplateNestedTemplate(e,r,n){let s=t._parseTemplateNestedTemplate.call(this,e,r,n);const i=e.parentNode,o=n.templateInfo,a="dom-if"===i.localName,l="dom-repeat"===i.localName;g.gx&&(a||l)&&(i.removeChild(e),(n=n.parentInfo).templateInfo=o,n.noted=!0,s=!1);let p=o.hostProps;if(g.ew&&a)p&&(r.hostProps=Object.assign(r.hostProps||{},p),g.gx||(n.parentInfo.noted=!0));else{let e="{";for(let t in p){F(this,r,n,"property","_host_"+t,[{mode:e,source:t,dependencies:[t],hostProp:!0}])}}return s}static _parseBindings(e,t){let r,n=[],s=0;for(;null!==(r=q.exec(e));){r.index>s&&n.push({literal:e.slice(s,r.index)});let i=r[1][0],o=Boolean(r[2]),a=r[3].trim(),l=!1,p="",d=-1;"{"==i&&(d=a.indexOf("::"))>0&&(p=a.substring(d+2),a=a.substring(0,d),l=!0);let c=V(a),h=[];if(c){let{args:e,methodName:r}=c;for(let t=0;t<e.length;t++){let r=e[t];r.literal||h.push(r)}let n=t.dynamicFns;(n&&n[r]||c.static)&&(h.push(r),c.dynamicFn=!0)}else h.push(a);n.push({source:a,mode:i,negate:o,customEvent:l,signature:c,dependencies:h,event:p}),s=q.lastIndex}if(s&&s<e.length){let t=e.substring(s);t&&n.push({literal:t})}return n.length?n:null}static _evaluateBinding(e,t,r,n,s,o){let a;return a=t.signature?$(e,r,n,0,t.signature):r!=t.source?(0,i.U2)(e,t.source):o&&(0,i.AZ)(r)?(0,i.U2)(e,r):e.__data[r],t.negate&&(a=!a),a}}})),Q=[]},4507:(e,t,r)=>{r.d(t,{c:()=>i});r(56646);function n(e,t,r){return{index:e,removed:t,addedCount:r}}function s(e,t,r,s,i,a){let l,p=0,d=0,c=Math.min(r-t,a-i);if(0==t&&0==i&&(p=function(e,t,r){for(let n=0;n<r;n++)if(!o(e[n],t[n]))return n;return r}(e,s,c)),r==e.length&&a==s.length&&(d=function(e,t,r){let n=e.length,s=t.length,i=0;for(;i<r&&o(e[--n],t[--s]);)i++;return i}(e,s,c-p)),i+=p,a-=d,(r-=d)-(t+=p)==0&&a-i==0)return[];if(t==r){for(l=n(t,[],0);i<a;)l.removed.push(s[i++]);return[l]}if(i==a)return[n(t,[],r-t)];let h=function(e){let t=e.length-1,r=e[0].length-1,n=e[t][r],s=[];for(;t>0||r>0;){if(0==t){s.push(2),r--;continue}if(0==r){s.push(3),t--;continue}let i,o=e[t-1][r-1],a=e[t-1][r],l=e[t][r-1];i=a<l?a<o?a:o:l<o?l:o,i==o?(o==n?s.push(0):(s.push(1),n=o),t--,r--):i==a?(s.push(3),t--,n=a):(s.push(2),r--,n=l)}return s.reverse(),s}(function(e,t,r,n,s,i){let a=i-s+1,l=r-t+1,p=new Array(a);for(let e=0;e<a;e++)p[e]=new Array(l),p[e][0]=e;for(let e=0;e<l;e++)p[0][e]=e;for(let r=1;r<a;r++)for(let i=1;i<l;i++)if(o(e[t+i-1],n[s+r-1]))p[r][i]=p[r-1][i-1];else{let e=p[r-1][i]+1,t=p[r][i-1]+1;p[r][i]=e<t?e:t}return p}(e,t,r,s,i,a));l=void 0;let u=[],_=t,f=i;for(let e=0;e<h.length;e++)switch(h[e]){case 0:l&&(u.push(l),l=void 0),_++,f++;break;case 1:l||(l=n(_,[],0)),l.addedCount++,_++,l.removed.push(s[f]),f++;break;case 2:l||(l=n(_,[],0)),l.addedCount++,_++;break;case 3:l||(l=n(_,[],0)),l.removed.push(s[f]),f++}return l&&u.push(l),u}function i(e,t){return s(e,0,e.length,t,0,t.length)}function o(e,t){return e===t}},21683:(e,t,r)=>{r.d(t,{Wc:()=>p,YA:()=>d});r(56646);let n=0,s=0,i=[],o=0,a=!1,l=document.createTextNode("");new window.MutationObserver((function(){a=!1;const e=i.length;for(let t=0;t<e;t++){let e=i[t];if(e)try{e()}catch(e){setTimeout((()=>{throw e}))}}i.splice(0,e),s+=e})).observe(l,{characterData:!0});const p={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},d={run:e=>(a||(a=!0,l.textContent=o++),i.push(e),n++),cancel(e){const t=e-s;if(t>=0){if(!i[t])throw new Error("invalid async handle: "+e);i[t]=null}}}},56646:()=>{window.JSCompiler_renameProperty=function(e,t){return e}},67130:(e,t,r)=>{r.d(t,{z:()=>o,n:()=>a});r(56646);const n={},s=/-[a-z]/g,i=/([A-Z])/g;function o(e){return n[e]||(n[e]=e.indexOf("-")<0?e:e.replace(s,(e=>e[1].toUpperCase())))}function a(e){return n[e]||(n[e]=e.replace(i,"-$1").toLowerCase())}},78956:(e,t,r)=>{r.d(t,{dx:()=>n,Ex:()=>i,Jk:()=>o});r(56646),r(76389),r(21683);class n{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run((()=>{this._timer=null,s.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),s.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,r){return e instanceof n?e._cancelAsync():e=new n,e.setConfig(t,r),e}}let s=new Set;const i=function(e){s.add(e)},o=function(){const e=Boolean(s.size);return s.forEach((e=>{try{e.flush()}catch(e){setTimeout((()=>{throw e}))}})),e}},20723:(e,t,r)=>{r.d(t,{o:()=>a});r(56646);var n=r(4507),s=r(21683),i=r(62276);function o(e){return"slot"===e.localName}let a=class{static getFlattenedNodes(e){const t=(0,i.r)(e);return o(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map((e=>o(e)?(e=e,(0,i.r)(e).assignedNodes({flatten:!0})):[e])).reduce(((e,t)=>e.concat(t)),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){o(this._target)?this._listenSlots([this._target]):(0,i.r)(this._target).children&&(this._listenSlots((0,i.r)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,(e=>{this._processMutations(e)})):(this._nativeChildrenObserver=new MutationObserver((e=>{this._processMutations(e)})),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){o(this._target)?this._unlistenSlots([this._target]):(0,i.r)(this._target).children&&(this._unlistenSlots((0,i.r)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,s.YA.run((()=>this.flush())))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let r=e[t];r.addedNodes&&this._listenSlots(r.addedNodes),r.removedNodes&&this._unlistenSlots(r.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),r=(0,n.c)(t,this._effectiveNodes);for(let t,n=0;n<r.length&&(t=r[n]);n++)for(let r,n=0;n<t.removed.length&&(r=t.removed[n]);n++)e.removedNodes.push(r);for(let n,s=0;s<r.length&&(n=r[s]);s++)for(let r=n.index;r<n.index+n.addedCount;r++)e.addedNodes.push(t[r]);this._effectiveNodes=t;let s=!1;return(e.addedNodes.length||e.removedNodes.length)&&(s=!0,this.callback.call(this._target,e)),s}_listenSlots(e){for(let t=0;t<e.length;t++){let r=e[t];o(r)&&r.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let r=e[t];o(r)&&r.removeEventListener("slotchange",this._boundSchedule)}}}},93252:(e,t,r)=>{r.d(t,{E:()=>n.Ex,y:()=>s});r(56646);var n=r(78956);const s=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=(0,n.Jk)()}while(e||t)}},81668:(e,t,r)=>{r.d(t,{NH:()=>M,ys:()=>D,BP:()=>L});r(56646);var n=r(21683),s=r(78956),i=r(74460),o=r(62276);let a="string"==typeof document.head.style.touchAction,l="__polymerGestures",p="__polymerGesturesHandled",d="__polymerGesturesTouchAction",c=["mousedown","mousemove","mouseup","click"],h=[0,1,4,2],u=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function _(e){return c.indexOf(e)>-1}let f=!1;function m(e){if(!_(e)&&"touchend"!==e)return a&&f&&i.f6?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){f=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let y=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const g=[],b={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},w={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function v(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let r=e.getRootNode();if(e.id){let n=r.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<n.length;e++)t.push(n[e])}}return t}let P=function(e){let t=e.sourceCapabilities;var r;if((!t||t.firesTouchEvents)&&(e[p]={skip:!0},"click"===e.type)){let t=!1,n=A(e);for(let e=0;e<n.length;e++){if(n[e].nodeType===Node.ELEMENT_NODE)if("label"===n[e].localName)g.push(n[e]);else if(r=n[e],b[r.localName]){let r=v(n[e]);for(let e=0;e<r.length;e++)t=t||g.indexOf(r[e])>-1}if(n[e]===S.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function C(e){let t=y?["click"]:c;for(let r,n=0;n<t.length;n++)r=t[n],e?(g.length=0,document.addEventListener(r,P,!0)):document.removeEventListener(r,P,!0)}function x(e){let t=e.type;if(!_(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!u&&(t=h[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let S={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function E(e,t,r){e.movefn=t,e.upfn=r,document.addEventListener("mousemove",t),document.addEventListener("mouseup",r)}function O(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}i.z2&&document.addEventListener("touchend",(function(e){if(!i.z2)return;S.mouse.mouseIgnoreJob||C(!0),S.mouse.target=A(e)[0],S.mouse.mouseIgnoreJob=s.dx.debounce(S.mouse.mouseIgnoreJob,n.Wc.after(2500),(function(){C(),S.mouse.target=null,S.mouse.mouseIgnoreJob=null}))}),!!f&&{passive:!0});const A=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],T={},N=[];function k(e){const t=A(e);return t.length>0?t[0]:e.target}function I(e){let t,r=e.type,n=e.currentTarget[l];if(!n)return;let s=n[r];if(s){if(!e[p]&&(e[p]={},"touch"===r.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===r&&1===e.touches.length&&(S.touch.id=t.identifier),S.touch.id!==t.identifier)return;a||"touchstart"!==r&&"touchmove"!==r||function(e){let t=e.changedTouches[0],r=e.type;if("touchstart"===r)S.touch.x=t.clientX,S.touch.y=t.clientY,S.touch.scrollDecided=!1;else if("touchmove"===r){if(S.touch.scrollDecided)return;S.touch.scrollDecided=!0;let r=function(e){let t="auto",r=A(e);for(let e,n=0;n<r.length;n++)if(e=r[n],e[d]){t=e[d];break}return t}(e),n=!1,s=Math.abs(S.touch.x-t.clientX),i=Math.abs(S.touch.y-t.clientY);e.cancelable&&("none"===r?n=!0:"pan-x"===r?n=i>s:"pan-y"===r&&(n=s>i)),n?e.preventDefault():H("track")}}(e)}if(t=e[p],!t.skip){for(let r,n=0;n<N.length;n++)r=N[n],s[r.name]&&!t[r.name]&&r.flow&&r.flow.start.indexOf(e.type)>-1&&r.reset&&r.reset();for(let n,i=0;i<N.length;i++)n=N[i],s[n.name]&&!t[n.name]&&(t[n.name]=!0,n[r](e))}}}function M(e,t,r){return!!T[t]&&(function(e,t,r){let n=T[t],s=n.deps,i=n.name,o=e[l];o||(e[l]=o={});for(let t,r,n=0;n<s.length;n++)t=s[n],y&&_(t)&&"click"!==t||(r=o[t],r||(o[t]=r={_count:0}),0===r._count&&e.addEventListener(t,I,m(t)),r[i]=(r[i]||0)+1,r._count=(r._count||0)+1);e.addEventListener(t,r),n.touchAction&&L(e,n.touchAction)}(e,t,r),!0)}function D(e,t,r){return!!T[t]&&(function(e,t,r){let n=T[t],s=n.deps,i=n.name,o=e[l];if(o)for(let t,r,n=0;n<s.length;n++)t=s[n],r=o[t],r&&r[i]&&(r[i]=(r[i]||1)-1,r._count=(r._count||1)-1,0===r._count&&e.removeEventListener(t,I,m(t)));e.removeEventListener(t,r)}(e,t,r),!0)}function R(e){N.push(e);for(let t=0;t<e.emits.length;t++)T[e.emits[t]]=e}function L(e,t){a&&e instanceof HTMLElement&&n.YA.run((()=>{e.style.touchAction=t})),e[d]=t}function F(e,t,r){let n=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=r,(0,o.r)(e).dispatchEvent(n),n.defaultPrevented){let e=r.preventer||r.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function H(e){let t=function(e){for(let t,r=0;r<N.length;r++){t=N[r];for(let r,n=0;n<t.emits.length;n++)if(r=t.emits[n],r===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function z(e,t,r,n){t&&F(t,e,{x:r.clientX,y:r.clientY,sourceEvent:r,preventer:n,prevent:function(e){return H(e)}})}function j(e,t,r){if(e.prevent)return!1;if(e.started)return!0;let n=Math.abs(e.x-t),s=Math.abs(e.y-r);return n>=5||s>=5}function B(e,t,r){if(!t)return;let n,s=e.moves[e.moves.length-2],i=e.moves[e.moves.length-1],o=i.x-e.x,a=i.y-e.y,l=0;s&&(n=i.x-s.x,l=i.y-s.y),F(t,"track",{state:e.state,x:r.clientX,y:r.clientY,dx:o,dy:a,ddx:n,ddy:l,sourceEvent:r,hover:function(){return function(e,t){let r=document.elementFromPoint(e,t),n=r;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let s=n;if(n=n.shadowRoot.elementFromPoint(e,t),s===n)break;n&&(r=n)}return r}(r.clientX,r.clientY)}})}function U(e,t,r){let n=Math.abs(t.clientX-e.x),s=Math.abs(t.clientY-e.y),i=k(r||t);!i||w[i.localName]&&i.hasAttribute("disabled")||(isNaN(n)||isNaN(s)||n<=25&&s<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=k(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let r=t.getBoundingClientRect(),n=e.pageX,s=e.pageY;return!(n>=r.left&&n<=r.right&&s>=r.top&&s<=r.bottom)}return!1}(t))&&(e.prevent||F(i,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:r}))}R({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){O(this.info)},mousedown:function(e){if(!x(e))return;let t=k(e),r=this;E(this.info,(function(e){x(e)||(z("up",t,e),O(r.info))}),(function(e){x(e)&&z("up",t,e),O(r.info)})),z("down",t,e)},touchstart:function(e){z("down",k(e),e.changedTouches[0],e)},touchend:function(e){z("up",k(e),e.changedTouches[0],e)}}),R({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,O(this.info)},mousedown:function(e){if(!x(e))return;let t=k(e),r=this,n=function(e){let n=e.clientX,s=e.clientY;j(r.info,n,s)&&(r.info.state=r.info.started?"mouseup"===e.type?"end":"track":"start","start"===r.info.state&&H("tap"),r.info.addMove({x:n,y:s}),x(e)||(r.info.state="end",O(r.info)),t&&B(r.info,t,e),r.info.started=!0)};E(this.info,n,(function(e){r.info.started&&n(e),O(r.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=k(e),r=e.changedTouches[0],n=r.clientX,s=r.clientY;j(this.info,n,s)&&("start"===this.info.state&&H("tap"),this.info.addMove({x:n,y:s}),B(this.info,t,r),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=k(e),r=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:r.clientX,y:r.clientY}),B(this.info,t,r))}}),R({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){x(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){x(e)&&U(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){U(this.info,e.changedTouches[0],e)}})},6226:(e,t,r)=>{r.d(t,{N:()=>i});var n=r(74460);let s=!1;function i(){if(n.nL&&!n.my){if(!s){s=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}},50856:(e,t,r)=>{r.d(t,{d:()=>i});r(56646);class n{constructor(e){this.value=e.toString()}toString(){return this.value}}function s(e){if(e instanceof n)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}const i=function(e,...t){const r=document.createElement("template");return r.innerHTML=t.reduce(((t,r,i)=>t+function(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof n)return s(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}(r)+e[i+1]),e[0]),r}},76389:(e,t,r)=>{r.d(t,{o:()=>i});r(56646);let n=0;function s(){}s.prototype.__mixinApplications,s.prototype.__mixinSet;const i=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let r=n++;return function(n){let s=n.__mixinSet;if(s&&s[r])return n;let i=t,o=i.get(n);if(!o){o=e(n),i.set(n,o);let t=Object.create(o.__mixinSet||s||null);t[r]=!0,o.__mixinSet=t}return o}}},4059:(e,t,r)=>{r.d(t,{AZ:()=>n,Jz:()=>s,jg:()=>i,SG:()=>o,Iu:()=>a,wB:()=>l,Fv:()=>p,U2:()=>c,t8:()=>h});r(56646);function n(e){return e.indexOf(".")>=0}function s(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function i(e,t){return 0===e.indexOf(t+".")}function o(e,t){return 0===t.indexOf(e+".")}function a(e,t,r){return t+r.slice(e.length)}function l(e,t){return e===t||i(e,t)||o(e,t)}function p(e){if(Array.isArray(e)){let t=[];for(let r=0;r<e.length;r++){let n=e[r].toString().split(".");for(let e=0;e<n.length;e++)t.push(n[e])}return t.join(".")}return e}function d(e){return Array.isArray(e)?p(e).split("."):e.toString().split(".")}function c(e,t,r){let n=e,s=d(t);for(let e=0;e<s.length;e++){if(!n)return;n=n[s[e]]}return r&&(r.path=s.join(".")),n}function h(e,t,r){let n=e,s=d(t),i=s[s.length-1];if(s.length>1){for(let e=0;e<s.length-1;e++){if(n=n[s[e]],!n)return}n[i]=r}else n[t]=r;return s.join(".")}},87529:(e,t,r)=>{r(56646)},42687:(e,t,r)=>{r.d(t,{Kk:()=>a,Rq:()=>l,iY:()=>p});r(56646);let n,s,i=/(url\()([^)]*)(\))/g,o=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function a(e,t){if(e&&o.test(e))return e;if("//"===e)return e;if(void 0===n){n=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",n="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),n)try{return new URL(e,t).href}catch(t){return e}return s||(s=document.implementation.createHTMLDocument("temp"),s.base=s.createElement("base"),s.head.appendChild(s.base),s.anchor=s.createElement("a"),s.body.appendChild(s.anchor)),s.base.href=t,s.anchor.href=e,s.anchor.href||e}function l(e,t){return e.replace(i,(function(e,r,n,s){return r+"'"+a(n.replace(/["']/g,""),t)+"'"+s}))}function p(e){return e.substring(0,e.lastIndexOf("/")+1)}},74460:(e,t,r)=>{r.d(t,{my:()=>s,FV:()=>i,sM:()=>o,v1:()=>a,f6:()=>l,XN:()=>p,ZN:()=>d,nL:()=>c,a2:()=>h,Hr:()=>u,HY:()=>_,ls:()=>f,z2:()=>m,gx:()=>y,ew:()=>g,dJ:()=>b,j8:()=>w,md:()=>v});r(56646);var n=r(42687);const s=!window.ShadyDOM||!window.ShadyDOM.inUse,i=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback,s&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch(e){return!1}})());let o=window.Polymer&&window.Polymer.rootPath||(0,n.iY)(document.baseURI||window.location.href);let a=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let l=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1;let p=window.Polymer&&window.Polymer.strictTemplatePolicy||!1;let d=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1;let c=window.Polymer&&window.Polymer.legacyOptimizations||!1;let h=window.Polymer&&window.Polymer.legacyWarnings||!1;let u=window.Polymer&&window.Polymer.syncInitialRender||!1;let _=window.Polymer&&window.Polymer.legacyUndefined||!1;let f=window.Polymer&&window.Polymer.orderedComputed||!1;let m=!0;let y=window.Polymer&&window.Polymer.removeNestedTemplates||!1;let g=window.Polymer&&window.Polymer.fastDomIf||!1;let b=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;let w=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1;let v=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1},15392:(e,t,r)=>{r.d(t,{uT:()=>d,lx:()=>c,jv:()=>u});var n=r(21384),s=r(42687);const i="shady-unscoped";function o(e){return n.t.import(e)}function a(e){let t=e.body?e.body:e;const r=(0,s.Rq)(t.textContent,e.baseURI),n=document.createElement("style");return n.textContent=r,n}function l(e){const t=e.trim().split(/\s+/),r=[];for(let e=0;e<t.length;e++)r.push(...p(t[e]));return r}function p(e){const t=o(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...h(t));const r=t.querySelector("template");r&&e.push(...d(r,t.assetpath)),t._styles=e}return t._styles}function d(e,t){if(!e._styles){const r=[],n=e.content.querySelectorAll("style");for(let e=0;e<n.length;e++){let i=n[e],o=i.getAttribute("include");o&&r.push(...l(o).filter((function(e,t,r){return r.indexOf(e)===t}))),t&&(i.textContent=(0,s.Rq)(i.textContent,t)),r.push(i)}e._styles=r}return e._styles}function c(e){let t=o(e);return t?h(t):[]}function h(e){const t=[],r=e.querySelectorAll("link[rel=import][type~=css]");for(let e=0;e<r.length;e++){let n=r[e];if(n.import){const e=n.import,r=n.hasAttribute(i);if(r&&!e._unscopedStyle){const t=a(e);t.setAttribute(i,""),e._unscopedStyle=t}else e._style||(e._style=a(e));t.push(r?e._unscopedStyle:e._style)}}return t}function u(e){let t=e.trim().split(/\s+/),r="";for(let e=0;e<t.length;e++)r+=_(t[e]);return r}function _(e){let t=o(e);if(t&&void 0===t._cssText){let e=f(t),r=t.querySelector("template");r&&(e+=function(e,t){let r="";const n=d(e,t);for(let e=0;e<n.length;e++){let t=n[e];t.parentNode&&t.parentNode.removeChild(t),r+=t.textContent}return r}(r,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}function f(e){let t="",r=h(e);for(let e=0;e<r.length;e++)t+=r[e].textContent;return t}},65412:(e,t,r)=>{r.d(t,{Gd:()=>n,z2:()=>i});function n(){0}const s=[];function i(e){s.push(e)}},52521:(e,t,r)=>{r.d(t,{aZ:()=>h,Uv:()=>w,GJ:()=>v});r(56646);var n=r(40729),s=r(18691),i=r(74460),o=r(62276);let a=null;function l(){return a}l.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:l,writable:!0}});const p=(0,n.q)(l),d=(0,s.E)(p);const c=(0,n.q)(class{});function h(e,t){for(let r=0;r<t.length;r++){let n=t[r];if(Boolean(e)!=Boolean(n.__hideTemplateChildren__))if(n.nodeType===Node.TEXT_NODE)e?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if("slot"===n.localName)if(e)n.__polymerReplaced__=document.createComment("hidden-slot"),(0,o.r)((0,o.r)(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const e=n.__polymerReplaced__;e&&(0,o.r)((0,o.r)(e).parentNode).replaceChild(n,e)}else n.style&&(e?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=e,n._showHideChildren&&n._showHideChildren(e)}}class u extends c{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let r=this.__templatizeOptions;(e&&r.instanceProps||!r.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,r){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,(e=>{e.model=this,r(e)}));else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(e,t,r)}}_showHideChildren(e){h(e,this.children)}_setUnmanagedPropertyToNode(e,t,r){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=r:super._setUnmanagedPropertyToNode(e,t,r)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}u.prototype.__dataHost,u.prototype.__templatizeOptions,u.prototype._methodHost,u.prototype.__templatizeOwner,u.prototype.__hostProps;const _=(0,s.E)(u);function f(e){let t=e.__dataHost;return t&&t._methodHost||t}function m(e,t,r){let n=r.mutableData?_:u;w.mixin&&(n=w.mixin(n));let s=class extends n{};return s.prototype.__templatizeOptions=r,s.prototype._bindTemplate(e),function(e,t,r,n){let s=r.hostProps||{};for(let t in n.instanceProps){delete s[t];let r=n.notifyInstanceProp;r&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:b(t,r)})}if(n.forwardHostProp&&t.__dataHost)for(let t in s)r.hasHostProps||(r.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,r){e.__dataHost._setPendingPropertyOrPath("_host_"+t,r[t],!0,!0)}})}(s,e,t,r),s}function y(e,t,r,n){let s=r.forwardHostProp;if(s&&t.hasHostProps){const c="template"==e.localName;let h=t.templatizeTemplateClass;if(!h){if(c){let e=r.mutableData?d:p;class n extends e{}h=t.templatizeTemplateClass=n}else{const r=e.constructor;class n extends r{}h=t.templatizeTemplateClass=n}let o=t.hostProps;for(let e in o)h.prototype._addPropertyEffect("_host_"+e,h.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:g(e,s)}),h.prototype._createNotifyingProperty("_host_"+e);i.a2&&n&&function(e,t,r){const n=r.constructor._properties,{propertyEffects:s}=e,{instanceProps:i}=t;for(let e in s)if(!(n[e]||i&&i[e])){const t=s[e];for(let r=0;r<t.length;r++){const{part:n}=t[r].info;if(!n.signature||!n.signature.static){console.warn(`Property '${e}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(t,r,n)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),c)l=h,a=o=e,Object.setPrototypeOf(o,l.prototype),new l,a=null,e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,h.prototype);const r=t.hostProps;for(let t in r)if(t="_host_"+t,t in e){const r=e[t];delete e[t],e.__data[t]=r}}}var o,l}function g(e,t){return function(e,r,n){t.call(e.__templatizeOwner,r.substring("_host_".length),n[r])}}function b(e,t){return function(e,r,n){t.call(e.__templatizeOwner,e,r,n[r])}}function w(e,t,r){if(i.XN&&!f(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(r=r||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let n=(t?t.constructor:u)._parseTemplate(e),s=n.templatizeInstanceClass;s||(s=m(e,n,r),n.templatizeInstanceClass=s);const o=f(e);y(e,n,r,o);let a=class extends s{};return a.prototype._methodHost=o,a.prototype.__dataHost=e,a.prototype.__templatizeOwner=t,a.prototype.__hostProps=n.hostProps,a=a,a}function v(e,t){let r;for(;t;)if(r=t.__dataHost?t:t.__templatizeInstance){if(r.__dataHost==e)return r;t=r.__dataHost}else t=(0,o.r)(t).parentNode;return null}},62276:(e,t,r)=>{r.d(t,{r:()=>n});const n=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e},28426:(e,t,r)=>{r.d(t,{H3:()=>s});var n=r(36608);r(50856);const s=(0,n.SH)(HTMLElement)},94604:(e,t,r)=>{var n=r(18890),s=(r(9672),r(37692),r(56646),r(40729)),i=r(18691),o=r(60995),a=r(74460),l=r(62276),p=r(6226);const d=(0,o._)((0,i.w)((0,s.q)(HTMLElement)));customElements.define("dom-bind",class extends d{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),a.XN)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,r,n){this.mutableData=!0}connectedCallback(){(0,p.N)()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){(0,l.r)((0,l.r)(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver((()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()}));return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});r(42173);var c=r(28426),h=r(78956),u=r(93252),_=r(21683),f=r(4059),m=r(52521);class y extends c.H3{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=h.dx.debounce(this.__renderDebouncer,_.YA,(()=>this.__render())),(0,u.E)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=(0,l.r)(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||(0,l.r)(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),(0,p.N)()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const e=this;let t=e._templateInfo?e:(0,l.r)(e).querySelector("template");if(!t){let e=new MutationObserver((()=>{if(!(0,l.r)(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()}));return e.observe(this,{childList:!0}),!1}this.__template=t}return!0}__ensureInstance(){let e=(0,l.r)(this).parentNode;if(this.__hasInstance()){let t=this.__getInstanceNodes();if(t&&t.length){if((0,l.r)(this).previousSibling!==t[t.length-1])for(let r,n=0;n<t.length&&(r=t[n]);n++)(0,l.r)(e).insertBefore(r,this)}}else{if(!e)return!1;if(!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){(0,u.y)()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),a.dJ&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}const g=a.ew?class extends y{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const t=this.__dataHost||this;if(a.XN&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const r=t._bindTemplate(this.__template,!0);r.runEffects=(e,t,r)=>{let n=this.__syncInfo;if(this.if)n&&(this.__syncInfo=null,this._showHideChildren(),t=Object.assign(n.changedProps,t)),e(t,r);else if(this.__instance)if(n||(n=this.__syncInfo={runEffects:e,changedProps:{}}),r)for(const e in t){const t=(0,f.Jz)(e);n.changedProps[t]=this.__dataHost[t]}else Object.assign(n.changedProps,t)},this.__instance=t._stampTemplate(this.__template,r),(0,l.r)(e).insertBefore(this.__instance,this)}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,(0,m.aZ)(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}}:class extends y{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=(0,m.Uv)(this.__template,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[(0,f.Jz)(e)]=!0))}})),this.__instance=new this.__ctor,(0,l.r)(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=(0,l.r)(e[0]).parentNode;if(t){t=(0,l.r)(t);for(let r,n=0;n<e.length&&(r=e[n]);n++)t.removeChild(r)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__instance._flushProperties()}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}};customElements.define(g.is,g);var b=r(76389),w=r(4507),v=r(36608);let P=(0,b.o)((e=>{let t=(0,v.SH)(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let r=t.path;if(r==JSCompiler_renameProperty("items",this)){let r=t.base||[],n=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),n){let e=(0,w.c)(r,n);this.__applySplices(e)}this.__lastItems=r,this.__lastMulti=e}else if(t.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(t.value.indexSplices);else{let e=r.slice(`${JSCompiler_renameProperty("items",this)}.`.length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let r=0;r<e.length;r++){let n=e[r];t.forEach(((e,r)=>{e<n.index||(e>=n.index+n.removed.length?t.set(r,e+n.addedCount-n.removed.length):t.set(r,-1))}));for(let e=0;e<n.addedCount;e++){let r=n.index+e;t.has(this.items[r])&&t.set(this.items[r],r)}}this.__updateLinks();let r=0;t.forEach(((e,n)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),r,1):this.selected=this.selectedItem=null,t.delete(n)):r++}))}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach((t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)}))}else this.__selectedMap.forEach((e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)}))}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach(((r,n)=>{t==e++&&this.deselect(n)}))}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let r;this.__selectedMap.delete(e),this.multi&&(r=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),r,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})),C=P(c.H3);class x extends C{static get is(){return"array-selector"}static get template(){return null}}customElements.define(x.is,x);r(5618),r(72419),r(50856);(0,n.x)(HTMLElement).prototype},60309:(e,t,r)=>{r.d(t,{CN:()=>n,$T:()=>s,mA:()=>i});const n=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,s=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,i=/@media\s(.*)/},10868:(e,t,r)=>{r.d(t,{wW:()=>s,B7:()=>i,OH:()=>o});var n=r(60309);function s(e,t){for(let r in t)null===r?e.style.removeProperty(r):e.style.setProperty(r,t[r])}function i(e,t){const r=window.getComputedStyle(e).getPropertyValue(t);return r?r.trim():""}function o(e){const t=n.$T.test(e)||n.CN.test(e);return n.$T.lastIndex=0,n.CN.lastIndex=0,t}},34816:(e,t,r)=>{r.d(t,{ZP:()=>c});let n,s=null,i=window.HTMLImports&&window.HTMLImports.whenReady||null;function o(e){requestAnimationFrame((function(){i?i(e):(s||(s=new Promise((e=>{n=e})),"complete"===document.readyState?n():document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&n()}))),s.then((function(){e&&e()})))}))}const a="__seenByShadyCSS",l="__shadyCSSCachedStyle";let p=null,d=null;class c{constructor(){this.customStyles=[],this.enqueued=!1,o((()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()}))}enqueueDocumentValidation(){!this.enqueued&&d&&(this.enqueued=!0,o(d))}addCustomStyle(e){e[a]||(e[a]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[l])return e[l];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const r=e[t];if(r[l])continue;const n=this.getStyleForCustomStyle(r);if(n){const e=n.__appliedElement||n;p&&p(e),r[l]=e}}return e}}c.prototype.addCustomStyle=c.prototype.addCustomStyle,c.prototype.getStyleForCustomStyle=c.prototype.getStyleForCustomStyle,c.prototype.processStyles=c.prototype.processStyles,Object.defineProperties(c.prototype,{transformCallback:{get:()=>p,set(e){p=e}},validateCallback:{get:()=>d,set(e){let t=!1;d||(t=!0),d=e,t&&this.enqueueDocumentValidation()}}})},26539:(e,t,r)=>{r.d(t,{WA:()=>n,Cp:()=>i,jF:()=>a,rd:()=>l});const n=!(window.ShadyDOM&&window.ShadyDOM.inUse);let s,i;function o(e){s=(!e||!e.shimcssproperties)&&(n||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(i=window.ShadyCSS.cssBuild);const a=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?s=window.ShadyCSS.nativeCss:window.ShadyCSS?(o(window.ShadyCSS),window.ShadyCSS=void 0):o(window.WebComponents&&window.WebComponents.flags);const l=s}}]);
//# sourceMappingURL=6ad36891.js.map