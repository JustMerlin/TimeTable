(this.webpackJsonp=this.webpackJsonp||[]).push([[32],{122:function(t,e,n){"use strict";n.r(e);var o=n(26),a=n(24),i=n(7),c=n(9),l=n(6),s=n(27),r=c.a.button,d=c.a.div,u=c.a.h1,m=(c.a.text,{}),p=Object(s.a)();function f(t,e){var n,o=t.getAttribute("data-".concat(e,"-action-label")),a=t.getAttribute("data-".concat(e,"-action-class"));return a+="cancel"===e?" btn--warn":" btn--".concat(e),o&&(n={title:o,cssClass:a}),n}function b(t,e,n){if(!t.classList.contains("js-instanciated")){t.classList.remove("js-instanciate"),t.classList.add("js-instanciated");var a=t.querySelector(".js-modal"),i=n||{},c=a.getAttribute("data-url")||i.url;c?(i.zIndex=p,function(t,e){var n=f(t,"primary"),o=f(t,"secondary"),a=f(t,"cancel");n&&(e.actions={primary:n}),o&&(e.actions?e.actions.secondary=o:e.actions={secondary:o}),a&&(e.actions?e.actions.cancel=a:e.actions={cancel:a})}(a,i),function(t,e,n){n.content={type:"iframe",attributes:{src:e}};var o=t.getAttribute("data-headingClass");o&&(n.headingClass=o);var a=t.getAttribute("data-contentClass");a&&(n.contentClass=a);var i=t.getAttribute("data-closelabel");i&&(n.i18n={close:i}),n.title=t.getAttribute("data-popintitle"),n.callee=t}(a,c,i)):(a.style.zIndex=p,i.content={type:"inline"},i.callee=a),p++,function(t,e){var n=new RegExp(/^\d+$/),o=t.getAttribute("data-popinheight");o&&(e.height="".concat(o).concat(n.test(o)?"px":""));var a=t.getAttribute("data-popinwidth");a&&(e.width="".concat(a).concat(n.test(a)?"px":""))}(a,i),"true"===a.getAttribute("data-disable-close")&&(i.hideOnWindowClick=!1),i.hideCloseBtn="true"===a.getAttribute("data-hide-close-btn");var l=o.a.getModal(i);return l&&(m[t.id]=l,t.modal=l,"true"===t.getAttribute("data-show-onload")&&l.show()),l}}function h(){[].forEach.call(document.querySelectorAll(".js-modalInstance"),(function(t){b(t)})),[].forEach.call(document.querySelectorAll("[data-modaltrigger]"),(function(t){!function(t){var e=t.getAttribute("data-modaltrigger");if(e){var n=m[e];if(n){var o=m["trigger--".concat(e)]||[];-1===o.indexOf(t)&&(t.addEventListener("click",(function(){return n.show()})),o.push(t),m["trigger--".concat(e)]=o)}}}(t)}))}function y(t){var e=t.type,n=t.label,o=t.classes,a=t.events;if(n)return r({type:"button",class:"btn btn--".concat(e).concat(o?" ".concat(o):""),children:n,events:a})}function v(t){var e=t.actionType,n=void 0===e?"secondary":e,o=t.buttons,i=void 0===o?[]:o;return d({class:"modal__footer-action modal__footer-action-".concat(n),children:Object(a.a)(i)})}function C(t){if(t.primaryActionLabel||t.secondaryActionLabel||t.cancelActionLabel)return d({class:"modal__footer js-modal__footer",children:[(o=t,a=o.primaryActionLabel,i=o.secondaryActionLabel,c=o.primaryActionClass,l=o.primaryActionClickCallback,v({actionType:"primary",buttons:[y({type:"secondary",label:i,classes:o.secondaryActionClass,events:{click:o.secondaryActionClickCallback}}),y({type:"primary",label:a,classes:c,events:{click:l}})]})),(e=t,n=e.cancelActionLabel,v({actionType:"secondary",buttons:[y({type:"warn",classes:e.cancelActionClass,label:n,events:{click:e.cancelActionClickCallback}})]}))]});var e,n,o,a,i,c,l}function g(t){return d({class:"modal__body js-modal__body",role:"document",children:[r({type:"button",class:"close close--rounded js-close","aria-label":t.MODAL_FERMER,children:"&times;"}),(a=t,i=a.id,c=a.titleKey,l=a.hideHeading,d({class:"modal__header js-modal__header".concat(l?" screen-reader-text":""),children:[u({id:"modal__title-".concat(i),class:"modal__title text--ellipsis",children:c})]})),(e=t,n=e.doBody,o=e.contentClasses,d({class:"modal__content ".concat(o||""," js-modal__content"),children:n||[]})),C(t)]});var e,n,o,a,i,c,l}function _(t){return d({class:"modal__dialog js-modal__dialog",children:[g(t)]})}function L(t){return d({class:"modal ".concat(t.overlay?"modal--mask":""," js-modal"),data:{"disable-close":t.disableClose,popinwidth:"".concat(t.width),popinheight:"".concat(t.height)},"aria-labelledby":"modalTitle".concat(t.id),role:"dialog",children:[_(t)]})}h(),Object(i.a)(h),document.showModal=function(t,e){var n=function(t){return d({id:t.id,class:"js-modalInstance hide sg-modal-container ".concat(t.className||""),"aria-hidden":!0,children:[L(t)]})}(t);document.querySelector("body").appendChild(n);var o=b(n,0,Object(l.a)(t,{onClose:function(){delete m[this.parentCallee.id],this.modalContext.parentNode.removeChild(this.modalContext),this.modalContext=null,this.parentCallee.parentNode.removeChild(this.parentCallee),this.parentCallee=null}}));o.show(),e(o)}},24:function(t,e,n){"use strict";function o(t,e=" "){const n=t.length;if(n>1){const o=t.slice();for(let t=n-1;t>0;t-=1)o.splice(t,0,document.createTextNode(e));return o}return t}n.d(e,"a",(function(){return o}))},26:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(37);function o(t,e,n,o=!1,a=!1){const i=new CustomEvent(e,{bubbles:o,cancelable:a,detail:n});t.dispatchEvent(i)}function a(t){return t&&"[object Function]"==={}.toString.call(t)}function i(){var t;return(t=document.querySelectorAll("*"),Array.prototype.slice.call(t||[])).reduce((function(t,e){if(e){const n=window.getComputedStyle(e,null),o=parseInt(n.getPropertyValue("z-index"),10);if(o>t&&(!e.classList||e.classList&&e.classList.contains&&!e.classList.contains("autocomplete-suggestions")&&!e.classList.contains("stats")&&!e.classList.contains("cke")))return o}return t}),0)}const c=function(){function t(t,e){return t.querySelector(".js-modal__"+e)}function e(t){return[].filter.call(t.querySelectorAll(["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",")),(function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)}))}function n(t){if(t){const e=this.modalContext.querySelector(".js-modal__title");if(e)e.textContent=t;else{const e=this.options.callee||this.parentCallee;if(e){const n=e.querySelector(".js-modal__title");n&&(n.textContent=t)}}}}function c(){const n=this,c=n.modalContext;!function(n){if("iframe"===n.options.content.type){const t=n.options.headingClass||"",e=n.options.contentClass||"",o=void 0===n.options.overlay||n.options.overlay?"modal--mask":"";n.modalContext.innerHTML=`<div class="modal js-modal ${o}" role="dialog" style="${function(t){let e="";t.zIndex&&(e=`z-index: ${t.zIndex};`);return e}(n.options)}">\n                    <div class="modal__dialog js-modal__dialog" style="${r(n.options)}">\n                        <div class="modal__body js-modal__body" role="document">\n                            <div class="modal__header js-modal__header ${t}"></div>\n                            <div class="modal__content ${e} js-modal__content"></div>\n                        </div>\n                    </div>\n                </div>`,n.options.actions&&(n.modalContext.querySelector(".js-modal__body").innerHTML+='<div class="modal__footer js-modal__footer"></div>')}"inline"!==n.options.content.type&&(function(e){const n=e.modalContext,o=t(n,"header");if(e.options.title){const t=document.createElement("h1");t.id="modalTitle"+e.guid,t.innerHTML=e.options.title,t.classList.add("modal__title"),t.classList.add("text--ellipsis"),t.classList.add("js-modal__title"),o.appendChild(t);n.querySelector(".js-modal").setAttribute("aria-labelledby",t.id)}if(!e.options.hideCloseBtn){const t=document.createElement("button");if(t){t.setAttribute("type","button"),t.className="close close--rounded js-close";const n=e.options.i18n&&e.options.i18n.close?e.options.i18n.close:"Close";t.setAttribute("aria-label",n),t.innerHTML="&times;",o.appendChild(t)}}}(n),n.options&&n.options.actions&&function(e,n){const o=document.createElement("div"),a=document.createElement("button"),i=t(e.modalContext,"footer");if(a.setAttribute("type","button"),a.classList.add("btn"),n.secondary||n.primary){if(o.className="modal__footer-action modal__footer-action-primary",n.secondary){const t=a.cloneNode();t.innerText=n.secondary.title,t.setAttribute("data-buttontype","secondary"),t.className="btn btn--secondary "+n.secondary.cssClass,o.appendChild(t),s(e,t,n.secondary.click)}n.primary&&(a.innerText=n.primary.title,a.setAttribute("data-buttontype","primary"),a.className="btn btn--primary "+n.primary.cssClass,o.appendChild(a),s(e,a,n.primary.click)),i.appendChild(o)}if(n.cancel){const t=o.cloneNode(),c=a.cloneNode();t.className="modal__footer-action modal__footer-action-secondary",c.innerText=n.cancel.title,c.setAttribute("data-buttontype","cancel"),c.className="btn btn--warn js-btn--warn "+n.cancel.cssClass,t.appendChild(c),i.appendChild(t),s(e,c,n.cancel.click)}}(n,n.options.actions));(function(e){e.options.callee&&(e.parentCallee=e.options.callee.parentNode);if(e.options.content&&"iframe"===e.options.content.type){const n=document.createElement(e.options.content.type);if(n.className="iframe iframe--fullwidth",e.options.content.attributes)for(let t in e.options.content.attributes)e.options.content.attributes.hasOwnProperty(t)&&n.setAttribute(t,e.options.content.attributes[t]);n.innerHTML=e.options.content.innerHTML||"",t(e.modalContext,"content").appendChild(n)}else e.modalContext.appendChild(e.options.callee),e.modalContext.querySelector(".js-modal__dialog").setAttribute("style",r(e.options))})(n),function(t){const n=t.modalContext,o=n.querySelector(".js-modal__body"),a=n.querySelector(".js-close"),i=d(o),c=i?i.querySelector(".js-btn--warn"):null;(void 0===t.options.hideOnWindowClick||t.options.hideOnWindowClick)&&n.firstChild.classList.contains("modal--mask")&&(n.querySelector(".js-modal__dialog").addEventListener("mousedown",t.modalbodyMousedown=function(){n.addEventListener("mouseup",(function e(o){o.target===n&&(t.ignoreClick=!0),n.removeEventListener("mouseup",e)}))}),n.addEventListener("click",t.overlayClick=function(e){o.contains(e.target)||t.ignoreClick||l(t),t.ignoreClick=!1},!1));(void 0===t.options.exitOnCancelClick||t.options.exitOnCancelClick)&&c&&c.addEventListener("click",t.cancelBtnClick=function(){l(t)},!1);document.addEventListener("keydown",t.keydownHandler=function(n){!function(t,n){const o=n.modalContext;if(!n.options.preventEscape&&("Escape"===t.key||27===t.keyCode))return l(n);if("iframe"!==n.options.content.type&&("Tab"===t.key||9===t.keyCode))(function(t,n){const o=e(t),a=o.indexOf(document.activeElement);n.shiftKey&&0===a?(o[o.length-1].focus(),n.preventDefault()):!n.shiftKey&&a===o.length-1&&o[0]&&(o[0].focus(),n.preventDefault())})(o,t)}(n,t)},!1),a&&a.addEventListener("click",t.closeBtnClick=function(){l(t)},!1)}(n)}(n),c.classList.add("modal--show"),c.classList.remove("hide"),c.removeAttribute("aria-hidden"),a(n.options.onShow)&&n.options.onShow.apply(n);const u=c.querySelector(".js-modal");u.style.zIndex||(u.style.zIndex=i()+1),function(t){const n=e(t),o=n.length;o&&(o>1?n[1].focus():n[0].focus())}(c);const m=n.parentCallee||document;document.querySelector("body").classList.add("no-scroll"),o(m,"modal:show",n)}function l(t=this){t.modalContext.classList.remove("modal--show"),a(t.options.onClose)&&t.options.onClose.apply(t);const e=t.parentCallee||document;!function(t){const e=t.modalContext;if(e){const n=e.querySelector(".js-modal__body"),o=e.querySelector(".js-close"),a=d(n),i=a?a.querySelector(".js-btn--warn"):null;o&&o.removeEventListener("click",t.closeBtnClick,!1),i&&i.removeEventListener("click",t.cancelBtnClick,!1),t.overlayClick&&e.removeEventListener("click",t.overlayClick,!1),t.modalbodyMousedown&&e.querySelector(".js-modal__dialog")&&e.querySelector(".js-modal__dialog").removeEventListener("mousedown",t.modalbodyMousedown,!1)}t.parentCallee&&t.options.callee&&t.parentCallee.appendChild(t.options.callee),e&&(e.innerHTML="",e.classList.add("hide")),document.removeEventListener("keydown",t.keydownHandler,!1)}(t),document.querySelector("body").classList.remove("no-scroll"),o(e,"modal:close",t)}function s(t,e,n){const a=t.modalContext;e.addEventListener("click",(function(){n&&n.call(t);o(t.parentCallee||document,"modal:action"+e.getAttribute("data-buttontype"),a.id)}))}function r(t){let e="";return t.width&&(e+="max-width: "+t.width+";"),t.height&&(e+="height: "+t.height+";"),e}function d(t){return t?[].filter.call(t.children,t=>t.classList.contains("js-modal__footer"))[0]:null}function u(t){return{options:t,guid:function(){let t="";for(let e=0;e<32;e++)e&&e%4==0&&(t+="-"),t+=Math.floor(16*Math.random()).toString(16).toUpperCase();return t}(),show:c,hide:l,setTitle:n}}return{getModal:function(t){let e,n;if(t){n=u(t),e=function(t){let e=document.createElement("div");return e.id="js-current-modal"+t.guid,e.className="js-current-modal hide",e.setAttribute("aria-hidden","true"),document.body.appendChild(e),e}(n),n.modalContext=e;let a=document;t.callee&&t.callee.parentNode&&(a=t.callee.parentNode),o(a,"modal:getModal",n)}return n||null}}}()},27:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n(5);function a(){return Object(o.a)(document.querySelectorAll("*")).reduce((function(t,e){if(e){const n=window.getComputedStyle(e,null),o=parseInt(n.getPropertyValue("z-index"),10);if(o>t&&(!e.classList||e.classList&&e.classList.contains&&!e.classList.contains("autocomplete-suggestions")&&!e.classList.contains("stats")&&!e.classList.contains("cke")))return o}return t}),0)}},37:function(t,e){try{var n=new window.CustomEvent("test");if(n.preventDefault(),!0!==n.defaultPrevented)throw new Error("Could not prevent default")}catch(t){var o=function(t,e){var n,o;return e=e||{bubbles:!1,cancelable:!1,detail:void 0},(n=document.createEvent("CustomEvent")).initCustomEvent(t,e.bubbles,e.cancelable,e.detail),o=n.preventDefault,n.preventDefault=function(){o.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},n};o.prototype=window.Event.prototype,window.CustomEvent=o}},5:function(t,e,n){"use strict";function o(t){return Array.prototype.slice.call(t||[])}n.d(e,"a",(function(){return o}))},6:function(t,e,n){"use strict";function o(){for(let t=1;t<arguments.length;t++)for(const e in arguments[t])if(arguments[t].hasOwnProperty(e)){const n=arguments[t][e];n&&n.constructor===Object?(arguments[0][e]=arguments[0][e]||{},o(arguments[0][e],n)):arguments[0][e]=n}return arguments[0]}n.d(e,"a",(function(){return o}))},7:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));const o=[];function a(){o.forEach((function(t){t()}))}const i=window.MutationObserver||window.WebKitMutationObserver;if(i){new i(a).observe(document.documentElement,{childList:!0,subtree:!0})}else document.addEventListener("DOMContentLoaded",a),document.addEventListener("DOMNodeInserted",a);function c(t){o.push(t)}},9:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const o={aria:(t,e)=>Object.keys(e).forEach((function(n){t.setAttribute("aria-"+n,e[n])})),data:(t,e)=>Object.keys(e).forEach((function(n){t.setAttribute("data-"+n,e[n])})),children:function(t,e){e.forEach?e.forEach((function(e){e&&(e.tagName||e.textContent)?t.appendChild(e):e&&(t.innerHTML+=e.toString())})):e.tagName?t.appendChild(e):t.innerHTML+=e.toString()},events:(t,e)=>Object.keys(e).forEach((function(n){e[n]&&t.addEventListener(n,(function(t){e[n](t)}))}))};function a(t){return e=>function(n){return function(t,e){if(e)return Object.keys(e).forEach((function(n){if(e[n])return o[n]?o[n](t,e[n]):t.setAttribute(n,e[n])})),t}(t.createElement(e.toUpperCase()),n)}}const i=function(t){const e=a(t),n={};return["a","abbr","address","article","aside","audio","b","blockquote","br","button","caption","cite","code","col","colgroup","dd","dfn","div","dl","dt","em","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","i","iframe","img","input","label","li","main","nav","ol","option","p","pre","section","select","source","span","strong","table","tbody","tfoot","td","th","thead","tr","track","ul","video"].forEach((function(t){n[t]=e(t)})),n.text=function(t){return e=>t.createTextNode(e)}(t),n}(document)}},[[122,0]]]);