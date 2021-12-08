/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/countrycards";
exports.ids = ["pages/countrycards"];
exports.modules = {

/***/ "./pages/countrycards.js":
/*!*******************************!*\
  !*** ./pages/countrycards.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/shruti/country-app-nextjs/pages/countrycards.js\";\n\nconst getStaticProps = async () => {\n  const res = await fetch('https://restcountries.eu/rest/v2/all');\n  const countries = await JSON.stringify(res);\n  return {\n    props: {\n      countries\n    }\n  };\n};\n\nconst CountryCards = ({\n  countries\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: countries.map(country => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      class: \"container justify-content-center col-lg-8 py-4\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"py-3\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"card shadow-sm\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row g-0\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"col-md-5 px-3 py-3\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"border\",\n                src: country.flag,\n                alt: country.name,\n                width: \"100%\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 21,\n                columnNumber: 33\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 20,\n              columnNumber: 29\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"col-md-7\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-body\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                  className: \"d-block\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: \"Name: \"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 25,\n                    columnNumber: 60\n                  }, undefined), country.name]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 25,\n                  columnNumber: 37\n                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                  className: \"d-block\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: \"Currency:\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 26,\n                    columnNumber: 60\n                  }, undefined), \" \", country.currencies.map(({\n                    name\n                  }) => name).join(\", \")]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 26,\n                  columnNumber: 37\n                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                  className: \"d-block\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: \"Capital:\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 27,\n                    columnNumber: 60\n                  }, undefined), \" \", country.capital]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 27,\n                  columnNumber: 37\n                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                  className: \"btn btn-outline-primary col-md-6 rounded-0 mx-2\",\n                  target: \"_blank\",\n                  role: \"button\",\n                  href: `https://maps.google.com/?q=${country.latlng}`,\n                  children: \"Show Map\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 28,\n                  columnNumber: 37\n                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                  href: `/country/${country.alpha3Code}`,\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"btn btn-outline-primary col-md-5 rounded-0\",\n                    role: \"button\",\n                    children: \"Details\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 29,\n                    columnNumber: 83\n                  }, undefined)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 29,\n                  columnNumber: 37\n                }, undefined)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 24,\n                columnNumber: 33\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 23,\n              columnNumber: 29\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 25\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 42\n    }, undefined))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryCards);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3VudHJ5LWFwcC8uL3BhZ2VzL2NvdW50cnljYXJkcy5qcz9iYmEyIl0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZmV0Y2giLCJjb3VudHJpZXMiLCJKU09OIiwic3RyaW5naWZ5IiwicHJvcHMiLCJDb3VudHJ5Q2FyZHMiLCJtYXAiLCJjb3VudHJ5IiwiZmxhZyIsIm5hbWUiLCJjdXJyZW5jaWVzIiwiam9pbiIsImNhcGl0YWwiLCJsYXRsbmciLCJhbHBoYTNDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxjQUFjLEdBQUcsWUFBVztBQUNyQyxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLHNDQUFELENBQXZCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLE1BQU1DLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixHQUFmLENBQXhCO0FBQ0EsU0FBTTtBQUNGSyxTQUFLLEVBQUU7QUFDSEg7QUFERztBQURMLEdBQU47QUFLRCxDQVJJOztBQVVQLE1BQU1JLFlBQVksR0FBRyxDQUFDO0FBQUVKO0FBQUYsQ0FBRCxLQUFtQjtBQUNwQyxzQkFDSTtBQUFBLGNBQ0tBLFNBQVMsQ0FBQ0ssR0FBVixDQUFlQyxPQUFELGlCQUFjO0FBQUssV0FBSyxFQUFDLGdEQUFYO0FBQUEsNkJBQ3pCO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLGdCQUFmO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFDLFNBQWY7QUFBQSxvQ0FDSTtBQUFLLHVCQUFTLEVBQUMsb0JBQWY7QUFBQSxxQ0FDSTtBQUFLLHlCQUFTLEVBQUMsUUFBZjtBQUF3QixtQkFBRyxFQUFFQSxPQUFPLENBQUNDLElBQXJDO0FBQTJDLG1CQUFHLEVBQUVELE9BQU8sQ0FBQ0UsSUFBeEQ7QUFBOEQscUJBQUssRUFBQztBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUlJO0FBQUssdUJBQVMsRUFBQyxVQUFmO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFDLFdBQWY7QUFBQSx3Q0FDSTtBQUFHLDJCQUFTLEVBQUMsU0FBYjtBQUFBLDBDQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFBdkIsRUFBK0NGLE9BQU8sQ0FBQ0UsSUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKLGVBRUk7QUFBRywyQkFBUyxFQUFDLFNBQWI7QUFBQSwwQ0FBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQXZCLE9BQW1ERixPQUFPLENBQUNHLFVBQVIsQ0FBbUJKLEdBQW5CLENBQXVCLENBQUM7QUFBRUc7QUFBRixtQkFBRCxLQUFjQSxJQUFyQyxFQUEyQ0UsSUFBM0MsQ0FBZ0QsSUFBaEQsQ0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZKLGVBR0k7QUFBRywyQkFBUyxFQUFDLFNBQWI7QUFBQSwwQ0FBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQXZCLE9BQWtESixPQUFPLENBQUNLLE9BQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFISixlQUlJO0FBQUcsMkJBQVMsRUFBQyxpREFBYjtBQUErRCx3QkFBTSxFQUFDLFFBQXRFO0FBQWdGLHNCQUFJLEVBQUMsUUFBckY7QUFBOEYsc0JBQUksRUFBRyw4QkFBNkJMLE9BQU8sQ0FBQ00sTUFBTyxFQUFqSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKSixlQUtJLDhEQUFDLElBQUQ7QUFBTSxzQkFBSSxFQUFHLFlBQVdOLE9BQU8sQ0FBQ08sVUFBVyxFQUEzQztBQUFBLHlDQUE4QztBQUFHLDZCQUFTLEVBQUMsNENBQWI7QUFBMEQsd0JBQUksRUFBQyxRQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEeUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBNUI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUF5QkgsQ0ExQkQ7O0FBMkJBLCtEQUFlVCxZQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY291bnRyeWNhcmRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+e1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3Jlc3Rjb3VudHJpZXMuZXUvcmVzdC92Mi9hbGwnKVxuICAgIGNvbnN0IGNvdW50cmllcyA9IGF3YWl0IEpTT04uc3RyaW5naWZ5KHJlcyk7XG4gICAgcmV0dXJue1xuICAgICAgICBwcm9wczogeyBcbiAgICAgICAgICAgIGNvdW50cmllcyxcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG5jb25zdCBDb3VudHJ5Q2FyZHMgPSAoeyBjb3VudHJpZXMgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Y291bnRyaWVzLm1hcCgoY291bnRyeSkgPT4gKDxkaXYgY2xhc3M9XCJjb250YWluZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBjb2wtbGctOCBweS00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGctMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTUgcHgtMyBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYm9yZGVyXCIgc3JjPXtjb3VudHJ5LmZsYWd9IGFsdD17Y291bnRyeS5uYW1lfSB3aWR0aD1cIjEwMCVcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkLWJsb2NrXCI+PHN0cm9uZz5OYW1lOiA8L3N0cm9uZz57Y291bnRyeS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImQtYmxvY2tcIj48c3Ryb25nPkN1cnJlbmN5Ojwvc3Ryb25nPiB7Y291bnRyeS5jdXJyZW5jaWVzLm1hcCgoeyBuYW1lIH0pID0+IG5hbWUpLmpvaW4oXCIsIFwiKX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkLWJsb2NrXCI+PHN0cm9uZz5DYXBpdGFsOjwvc3Ryb25nPiB7Y291bnRyeS5jYXBpdGFsfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGNvbC1tZC02IHJvdW5kZWQtMCBteC0yXCIgdGFyZ2V0PVwiX2JsYW5rXCIgIHJvbGU9XCJidXR0b25cIiBocmVmPXtgaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vP3E9JHtjb3VudHJ5LmxhdGxuZ31gfT5TaG93IE1hcDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY291bnRyeS8ke2NvdW50cnkuYWxwaGEzQ29kZX1gfT48YSBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBjb2wtbWQtNSByb3VuZGVkLTBcIiByb2xlPVwiYnV0dG9uXCI+RGV0YWlsczwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQ291bnRyeUNhcmRzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/countrycards.js\n");

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_interopRequireDefault_js-node_modules_next_dist_cl-3e6c6e","vendors-node_modules_next_image_js"], function() { return __webpack_exec__("./pages/countrycards.js"); });
module.exports = __webpack_exports__;

})();