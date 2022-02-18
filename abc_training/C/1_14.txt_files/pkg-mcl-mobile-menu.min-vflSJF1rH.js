define("prod_assets_web_modules/focus-trap-react",["react"],(function(e){"use strict";var t=(function(e){return e&&e.__esModule?e:{default:e}})(e),n=null;function o(e){e&&e.focus&&e!==document.activeElement&&(e.focus(),"input"===e.tagName.toLowerCase()&&e.select())}var r=(function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}})();function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=t.default,c=function(e,t){var r=[],a=null,i=null,u=null,c=!1,s=!1,p=null,f="string"==typeof e?document.querySelector(e):e,d=t||{};d.returnFocusOnDeactivate=!t||void 0===t.returnFocusOnDeactivate||t.returnFocusOnDeactivate,d.escapeDeactivates=!t||void 0===t.escapeDeactivates||t.escapeDeactivates;var l={activate:function(e){if(!c){var t={onActivate:e&&void 0!==e.onActivate?e.onActivate:d.onActivate};return c=!0,s=!1,u=document.activeElement,t.onActivate&&t.onActivate(),m(),l}},deactivate:v,pause:function(){!s&&c&&(s=!0,h())},unpause:function(){s&&c&&(s=!1,m())}};return l;function v(e){if(c){var t={returnFocus:e&&void 0!==e.returnFocus?e.returnFocus:d.returnFocusOnDeactivate,onDeactivate:e&&void 0!==e.onDeactivate?e.onDeactivate:d.onDeactivate};return h(),t.onDeactivate&&t.onDeactivate(),t.returnFocus&&setTimeout((function(){o(u)}),0),c=!1,s=!1,this}}function m(){if(c)return n&&n.pause(),n=l,O(),setTimeout((function(){o((function(){var e;if(!(e=null!==y("initialFocus")?y("initialFocus"):f.contains(document.activeElement)?document.activeElement:r[0]||y("fallbackFocus")))throw new Error("You can't have a focus-trap without at least one focusable element");return e})())}),0),document.addEventListener("focus",g,!0),document.addEventListener("click",E,!0),document.addEventListener("mousedown",b,!0),document.addEventListener("touchstart",b,!0),document.addEventListener("keydown",w,!0),l}function h(){if(c&&n===l)return document.removeEventListener("focus",g,!0),document.removeEventListener("click",E,!0),document.removeEventListener("mousedown",b,!0),document.removeEventListener("touchstart",b,!0),document.removeEventListener("keydown",w,!0),n=null,l}function y(e){var t=d[e],n=t;if(!t)return null;if("string"==typeof t&&!(n=document.querySelector(t)))throw new Error("`"+e+"` refers to no known node");if("function"==typeof t&&!(n=t()))throw new Error("`"+e+"` did not return a node");return n}function b(e){d.clickOutsideDeactivates&&!f.contains(e.target)&&v({returnFocus:!1})}function E(e){d.clickOutsideDeactivates||f.contains(e.target)||(e.preventDefault(),e.stopImmediatePropagation())}function g(e){f.contains(e.target)||(e.preventDefault(),e.stopImmediatePropagation(),"function"==typeof e.target.blur&&e.target.blur(),p&&(function(e){if(e.shiftKey)return o(i);o(a)})(p))}function w(e){"Tab"!==e.key&&9!==e.keyCode||(function(e){if(O(),e.target.hasAttribute("tabindex")&&Number(e.target.getAttribute("tabindex"))<0)return p=e;e.preventDefault();var t=r.indexOf(e.target);e.shiftKey?e.target===a||-1===r.indexOf(e.target)?o(i):o(r[t-1]):e.target===i?o(a):o(r[t+1])})(e),!1!==d.escapeDeactivates&&(function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode})(e)&&v()}function O(){r=(function(e,t){t=t||{};var n,o,r,a=e.ownerDocument||e,i=[],u=[],c=(function(e){var t=[];function n(o,r){if(o===e.documentElement)return!1;for(var a=0,i=t.length;a<i;a++)if(t[a][0]===o)return t[a][1];var u=!1;return"none"===(r=r||e.defaultView.getComputedStyle(o)).display?u=!0:o.parentNode&&(u=n(o.parentNode)),t.push([o,u]),u}return function(t){if(t===e.documentElement)return!1;var o=e.defaultView.getComputedStyle(t);return!!n(t,o)||"hidden"===o.visibility}})(a),s=["input","select","a[href]","textarea","button","[tabindex]"],p=e.querySelectorAll(s.join(","));if(t.includeContainer){var f=Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;s.some((function(t){return f.call(e,t)}))&&(p=Array.prototype.slice.apply(p)).unshift(e)}for(var d=0,l=p.length;d<l;d++)n=p[d],o=parseInt(n.getAttribute("tabindex"),10),(r=isNaN(o)?n.tabIndex:o)<0||"INPUT"===n.tagName&&"hidden"===n.type||n.disabled||c(n,a)||(0===r?i.push(n):u.push({index:d,tabIndex:r,node:n}));var v=u.sort((function(e,t){return e.tabIndex===t.tabIndex?e.index-t.index:e.tabIndex-t.tabIndex})).map((function(e){return e.node}));return Array.prototype.push.apply(v,i),v})(f),a=r[0],i=r[r.length-1]}},s=["active","paused","tag","focusTrapOptions","_createFocusTrap"],p=(function(e){function t(){var e,n,o;a(this,t);for(var r=arguments.length,u=Array(r),c=0;c<r;c++)u[c]=arguments[c];return n=o=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.setNode=function(e){o.node=e},i(o,n)}return(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(t,e),r(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof document&&(this.previouslyFocusedElement=document.activeElement)}},{key:"componentDidMount",value:function(){var e=this.props.focusTrapOptions,t={returnFocusOnDeactivate:!1};for(var n in e)e.hasOwnProperty(n)&&"returnFocusOnDeactivate"!==n&&(t[n]=e[n]);this.focusTrap=this.props._createFocusTrap(this.node,t),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause()}},{key:"componentDidUpdate",value:function(e){e.active&&!this.props.active?this.focusTrap.deactivate():!e.active&&this.props.active&&this.focusTrap.activate(),e.paused&&!this.props.paused?this.focusTrap.unpause():!e.paused&&this.props.paused&&this.focusTrap.pause()}},{key:"componentWillUnmount",value:function(){this.focusTrap.deactivate(),!1!==this.props.focusTrapOptions.returnFocusOnDeactivate&&this.previouslyFocusedElement&&this.previouslyFocusedElement.focus&&this.previouslyFocusedElement.focus()}},{key:"render",value:function(){var e={ref:this.setNode};for(var t in this.props)this.props.hasOwnProperty(t)&&-1===s.indexOf(t)&&(e[t]=this.props[t]);return u.createElement(this.props.tag,e,this.props.children)}}]),t})(u.Component);return p.defaultProps={active:!0,tag:"div",paused:!1,focusTrapOptions:{},_createFocusTrap:c},p}));
//# sourceMappingURL=pkg-mcl-mobile-menu.min.js-vflwdxH4G.map