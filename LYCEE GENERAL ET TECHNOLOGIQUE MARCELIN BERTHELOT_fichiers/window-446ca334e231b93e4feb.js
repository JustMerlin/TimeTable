(this.webpackJsonp=this.webpackJsonp||[]).push([[52],{169:function(t,e){try{var n=new window.CustomEvent("test");if(n.preventDefault(),!0!==n.defaultPrevented)throw new Error("Could not prevent default")}catch(t){var i=function(t,e){var n,i;return e=e||{bubbles:!1,cancelable:!1,detail:void 0},(n=document.createEvent("CustomEvent")).initCustomEvent(t,e.bubbles,e.cancelable,e.detail),i=n.preventDefault,n.preventDefault=function(){i.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},n};i.prototype=window.Event.prototype,window.CustomEvent=i}},176:function(t,e,n){"use strict";function i(t,e){var n={root:t,type:e,disableClose:"true"===t.getAttribute("data-disable-close"),width:t.getAttribute("data-width"),height:t.getAttribute("data-height")};return t.getAttribute("data-minwidth")&&(n.minWidth=t.getAttribute("data-minwidth")),t.getAttribute("data-minheight")&&(n.minHeight=t.getAttribute("data-minheight")),t.getAttribute("data-maxwidth")&&(n.maxWidth=t.getAttribute("data-maxwidth")),t.getAttribute("data-maxheight")&&(n.maxHeight=t.getAttribute("data-maxheight")),n}n.r(e);var o=[{types:["window","modal","popover"],buildSettings:i},{types:"panel",buildSettings:function(t,e){var n=i(t,e);return n.height=n.height||"100%",n}}],a=n(44);n(169);function d(t,e,n,i=!1,o=!1){const a=new CustomEvent(e,{bubbles:i,cancelable:o,detail:n});t.dispatchEvent(a)}function r(){var t;return(t=document.querySelectorAll("*"),Array.prototype.slice.call(t||[])).reduce((function(t,e){if(e){const n=window.getComputedStyle(e,null),i=parseInt(n.getPropertyValue("z-index"),10);if(i>t&&(!e.classList||e.classList&&e.classList.contains&&!e.classList.contains("autocomplete-suggestions")&&!e.classList.contains("stats")&&!e.classList.contains("cke")))return i}return t}),0)}function s(t,e,n=!0){n?(e&&e.preventEvent||d(t,"window:beforeShow",{component:t.window,params:e}),t.setAttribute("aria-hidden","false"),t.classList.remove("hide")):(e&&e.preventEvent||d(t,"window:beforeHide",{component:t.window,params:e}),t.setAttribute("aria-hidden","true"),t.classList.add("hide"))}function c(t,e){e&&e.preventEvent||d(t,"window:beforeFocus",{component:t.window,params:e}),t.focus()}const u=t=>{const e=t.root,i={disableClose:!1,height:"auto",width:"auto",minWidth:"2rem",minHeight:"2rem"},o={},u={setFocusToFirstItem:c};let l,w;function h(t){!!function t(e,n){return e&&(n(e)?e:t(e.parentNode,n))}(t.target,t=>t&&t.classList&&t.classList.contains("js-window__content"))||g()}function f(t,e){return{width:Number.isInteger(t)?t+"px":t,height:Number.isInteger(e)?e+"px":e}}function m({width:t,height:n,maxWidth:i,maxHeight:o,minWidth:a,minHeight:r}){const s=e.window.getSizeElement()||e.querySelector(".js-window__content"),c=t||l.width||"auto",u=n||l.height||"auto",w=f(c,u),h=f(i||l.maxWidth||c,o||l.maxHeight||u),m=f(a||l.minWidth||c,r||l.minHeight||u);s.style.width=w.width,s.style.height=w.height,s.style["max-width"]=h.width,s.style["max-height"]=h.height,s.style["min-width"]=m.width,s.style["min-height"]=m.height,d(e,"window:size-changed",{component:e.window})}function p(t){l.zindex||(l.zindex=r(),e.style.zIndex=l.zindex),m(t),s(e,t),c(e,t),t&&t.preventEvent||d(e,"window:open",{component:e.window,params:t}),l.disableClose||document.body.addEventListener("mouseup",h)}function b(){return!e.classList.contains("hide")}function g(t){s(e,t,!1),t&&t.preventEvent||d(e,"window:close",{component:e.window,params:t}),l.disableClose||document.body.removeEventListener("mouseup",h)}function v(t){switch(t.key){case"Tab":!function(t,e){const n=(i=t,[].filter.call(i.querySelectorAll(["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",")),(function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)})));var i;const o=n.indexOf(document.activeElement);e.shiftKey&&0===o?(n[n.length-1].focus(),e.preventDefault()):!e.shiftKey&&o===n.length-1&&n[0]&&(n[0].focus(),e.preventDefault())}(e,t);break;case"Esc":case"Escape":l.disableClose||g()}}function y(t){t.target.closest(".js-window__close")&&g()}function E(t){e.window=t,e.addEventListener("click",y),e.addEventListener("keydown",v),d(e,"window:loaded",{component:e.window}),"true"===e.getAttribute("data-show-onload")&&p({preventEvent:!0})}function x(t){t.type&&n(71)("./window-"+t.type).then(n=>{(n=>{e.window=Object(a.a)({},e.window,n.default({root:e,api:u,loadedModules:o})),m(t)})(n)})}!function(){w={open:p,isOpened:b,close:g,withParams:x},l=Object(a.a)({},i,t);const d=[];"true"===e.getAttribute("data-move")&&d.push(n.e(1).then(n.bind(null,94)));const r=e.getAttribute("data-type");r&&d.push(n(71)("./window-"+r)),0===d.length?E(w):Promise.all(d).then(t=>{t.forEach(t=>{w=Object(a.a)({},w,t.default({root:e,api:u,loadedModules:o}))}),E(w)}),e.classList.add("js-initialized")}()};var l=n(7);function w(t){var e=t.getAttribute("data-windowtrigger");e&&(t.addEventListener("click",(function(n){var i=function(t){var e=Object.keys(t.dataset).reduce((function(e,n){var i=Number(t.dataset[n]);return e[n]=i||t.dataset[n],e}),{});return e.callee=t,e}(t),o=document.getElementById(e);n.stopImmediatePropagation(),o.window?o.window.open(i):o.addEventListener("window:loaded",(function(t){return t.detail.component.open(i)}),{once:!0})})),t.classList.add("js-initialized"))}function h(){[].forEach.call(document.querySelectorAll(".js-window:not(.js-initialized)"),(function(t){var e=function(t){var e={};return o.forEach((function(n){[].concat(n.types).forEach((function(i){e[i]=n.buildSettings(t,i)}))})),{getSettings:function(t){return t&&e[t]||null}}}(t),i=t.getAttribute("data-type"),a=e.getSettings(i);null!==a&&("true"===t.getAttribute("data-auto-responsive")&&n.e(55).then(n.bind(null,273)).then((function(n){n.default(t,e)})),u(a))})),[].forEach.call(document.querySelectorAll("[data-windowtrigger]:not(.js-initialized)"),(function(t){w(t)}))}h(),Object(l.a)(h)},44:function(t,e,n){"use strict";function i(){for(let t=1;t<arguments.length;t++)for(const e in arguments[t])if(arguments[t].hasOwnProperty(e)){const n=arguments[t][e];n&&n.constructor===Object?(arguments[0][e]=arguments[0][e]||{},i(arguments[0][e],n)):arguments[0][e]=n}return arguments[0]}n.d(e,"a",(function(){return i}))},7:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));const i=[];function o(){i.forEach((function(t){t()}))}const a=window.MutationObserver||window.WebKitMutationObserver;if(a){new a(o).observe(document.documentElement,{childList:!0,subtree:!0})}else document.addEventListener("DOMContentLoaded",o),document.addEventListener("DOMNodeInserted",o);function d(t){i.push(t)}},71:function(t,e,n){var i={"./window-modal":[95,4],"./window-modal.js":[95,4],"./window-move":[94,1],"./window-move.js":[94,1],"./window-panel":[96,2],"./window-panel.js":[96,2],"./window-popover":[98,3],"./window-popover.js":[98,3],"./window-window":[97,5],"./window-window.js":[97,5]};function o(t){if(!n.o(i,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[t],o=e[0];return n.e(e[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(i)},o.id=71,t.exports=o}},[[176,0]]]);