(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[226],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},3391:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(c){a=!0,s=c}finally{try{r||null==i.return||i.return()}finally{if(a)throw s}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return a}})},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),a=n(6860),s=n(379),o=n(8206);e.exports=function(e){return r(e)||a(e)||s(e)||o()}},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(s.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},s=n(3367);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,s=e.hasQuery,o=void 0!==s&&s;return n||a&&o}},7947:function(e,t,n){"use strict";var r=n(9713);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var s,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=r?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294)),i=(s=n(617))&&s.__esModule?s:{default:s},c=n(3367),u=n(4287),l=n(7845);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var s=!0,o=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){o=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?s=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?s=!1:t.add(a.type);break;case"meta":for(var c=0,u=h.length;c<u;c++){var l=h[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?s=!1:n.add(l);else{var f=a.props[l],d=r[l]||new Set;"name"===l&&o||!d.has(f)?(d.add(f),r[l]=d):s=!1}}}return s}}()).reverse().map((function(e,n){var s=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,o.default.cloneElement(e,i)}return o.default.cloneElement(e,{key:s})}))}function v(e){var t=e.children,n=(0,o.useContext)(c.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}v.rewind=function(){};var y=v;t.default=y},617:function(e,t,n){"use strict";var r=n(319),a=n(4575),s=n(3913),o=(n(1506),n(2205)),i=n(8585),c=n(9754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),f=function(e){o(n,e);var t=u(n);function n(e){var s;return a(this,n),(s=t.call(this,e))._hasHeadManager=void 0,s.emitChange=function(){s._hasHeadManager&&s.props.headManager.updateHead(s.props.reduceComponentsToState(r(s.props.headManager.mountedInstances),s.props))},s._hasHeadManager=s.props.headManager&&s.props.headManager.mountedInstances,s}return s(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},2256:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return p},default:function(){return h}});var r=n(5893),a=n(3391),s=n(7757),o=n.n(s);function i(e,t,n,r,a,s,o){try{var i=e[s](o),c=i.value}catch(u){return void n(u)}i.done?t(c):Promise.resolve(c).then(r,a)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function o(e){i(s,r,a,o,c,"next",e)}function c(e){i(s,r,a,o,c,"throw",e)}o(void 0)}))}}var u=n(7294),l=n(3062),f=n(9008),d=function(){var e=c(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/alpha/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=!0,h=function(e){var t=e.country;console.log(t);var n=u.useState([]),s=(0,a.Z)(n,2),i=s[0],p=s[1],h=function(){var e=c(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.borders.map((function(e){return d(e)})));case 2:n=e.sent,p(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u.useEffect((function(){h()}),[]),console.log(i),(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(f.default,{children:(0,r.jsx)("title",{children:t.name})}),(0,r.jsxs)("div",{className:"container justify-content-center py-4",children:[(0,r.jsx)("h3",{className:"display-6",children:t.name}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-lg-7 py-4",children:(0,r.jsx)("img",{className:"border",src:t.flag,alt:t.name,width:"100%"})}),(0,r.jsxs)("div",{className:"col-lg-5 px-5 py-2",children:[(0,r.jsxs)("p",{className:"fs-5",children:[(0,r.jsx)("strong",{children:"Native Name:"})," ",t.nativeName]}),(0,r.jsxs)("p",{className:"fs-5",children:[(0,r.jsx)("strong",{children:"Capital:"})," ",t.capital]}),(0,r.jsxs)("p",{className:"fs-5",children:[(0,r.jsx)("strong",{children:"Population:"})," ",t.population]}),(0,r.jsxs)("p",{className:"fs-5",children:[(0,r.jsx)("strong",{children:"Region:"})," ",t.region]}),(0,r.jsxs)("p",{className:"fs-5",children:[(0,r.jsx)("strong",{children:"Sub-region:"})," ",t.subregion]}),(0,r.jsxs)("p",{className:"fs-5",children:[(0,r.jsx)("strong",{children:"Area:"})," ",t.area," "]}),(0,r.jsxs)("p",{className:"fs-5",children:[(0,r.jsx)("strong",{children:"Country Code:"})," +",t.callingCodes]}),(0,r.jsxs)("p",{className:"fs-5",children:[(0,r.jsx)("strong",{children:"Languages:"})," ",t.languages.map((function(e){return e.name})).join(", ")]}),(0,r.jsxs)("p",{className:"fs-5",children:[(0,r.jsx)("strong",{children:"Currencies:"})," ",t.currencies.map((function(e){return e.name})).join(", ")]}),(0,r.jsxs)("p",{className:"fs-5",children:[(0,r.jsx)("strong",{children:"Timezones:"})," ",t.timezones]})]}),(0,r.jsx)("div",{className:"container justify-content-center py-3 border",children:(0,r.jsx)("div",{className:"row",children:i.map((function(e){var t=e.flag,n=e.name;return(0,r.jsxs)("div",{className:"col-lg-4 py-3 px-2",children:[(0,r.jsxs)("div",{className:"fs-4 display-3 py-3",children:[" ",n]}),(0,r.jsx)("img",{className:"border",src:t,alt:n,width:"100%",height:"auto"})]})}))})})]})]})]})}},3062:function(e,t,n){"use strict";var r=n(5893),a=(n(7294),n(9008));t.Z=function(e){var t=e.children;return(0,r.jsxs)("div",{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:"Home"}),(0,r.jsx)("meta",{charset:"UTF-8"}),(0,r.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x",crossorigin:"anonymous"}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.7.0/css/all.css"}),(0,r.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js",integrity:"sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4",crossorigin:"anonymous"})]}),(0,r.jsx)("main",{className:"container",children:t})]})}},4362:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/country/[id]",function(){return n(2256)}])},9008:function(e,t,n){e.exports=n(7947)}},function(e){e.O(0,[774,888,179],(function(){return t=4362,e(e.s=t);var t}));var t=e.O();_N_E=t}]);