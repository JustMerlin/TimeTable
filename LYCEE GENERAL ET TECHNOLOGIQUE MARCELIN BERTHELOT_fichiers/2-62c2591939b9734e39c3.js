(this.webpackJsonp=this.webpackJsonp||[]).push([[2],{254:function(t,e,n){"use strict";function o(){let t="";for(let e=0;e<32;e++)e&&e%4==0&&(t+="-"),t+=Math.floor(16*Math.random()).toString(16).toUpperCase();return t}n.d(e,"a",(function(){return o}))},96:function(t,e,n){"use strict";n.r(e);var o=n(44),i=n(254);e.default=t=>{const e=t.root,n=e.querySelector(".js-window__content"),s={direction:"auto",threshold:10};let a,c;function l(t){if(e.classList.contains("window--panel")){const o=t.direction||a.direction||"auto";if(c=t.callee||c||a.callee||document.body,"auto"===o){const t=function(t,e){const n=t.getBoundingClientRect(),o=e.getBoundingClientRect();return!(n.top>o.bottom||n.right<o.left||n.bottom<o.top||n.left>o.right)}(n,c),o=!e.classList.contains("window--panel-left");t&&(e.classList.toggle("window--panel-left",o),e.classList.toggle("window--panel-right",!o))}}}function r({detail:t}){const n=t?t.params:{};c=n.callee,l(n||{}),a.api.setFocusToFirstItem(e,{preventEvent:!0})}function d(){c&&(c.focus(),c=null)}return t.loadedModules.panel||(a=Object(o.a)({},s,t),a.guid=Object(i.a)(),"true"===e.getAttribute("data-auto-pos")&&(e.addEventListener("window:beforeFocus",r),e.addEventListener("window:close",d),e.addEventListener("window:size-changed",l),"true"===e.getAttribute("data-show-onload")&&r()),t.loadedModules.panel=!0),{updatePosition:l,getSizeElement:()=>e.querySelector(".js-window__content")}}}}]);