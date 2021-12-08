(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 694:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/component/Layout.js
var Layout = __webpack_require__(62);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./src/component/CountriesTable.js




var d = new Date();

const CountriesTable = ({
  countries
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: countries.map(country => /*#__PURE__*/jsx_runtime_.jsx("div", {
      class: "container justify-content-center col-lg-8 py-4",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "py-3",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "card shadow-sm",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row g-0",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-md-5 px-3 py-3",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "border",
                src: country.flags.map(({
                  name
                }) => name).join(", "),
                alt: country.name,
                width: "100%"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-md-7",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "card-body",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  className: "d-block",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
                    children: "Name: "
                  }), country.name]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  className: "d-block",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
                    children: "Currency:"
                  }), " ", country.currencies.map(({
                    name
                  }) => name).join(", ")]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  className: "d-block",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
                    children: "Capital:"
                  }), " ", country.capital]
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "btn btn-outline-primary col-md-6 rounded-0 mx-2",
                  target: "_blank",
                  role: "button",
                  href: `https://maps.google.com/?q=${country.latlng}`,
                  children: "Show Map"
                }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: `/country/${country.alpha3Code}`,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "btn btn-outline-primary col-md-5 rounded-0",
                    role: "button",
                    children: "Details"
                  })
                })]
              })
            })]
          })
        })
      })
    }))
  });
};

/* harmony default export */ var component_CountriesTable = (CountriesTable);
;// CONCATENATED MODULE: ./pages/index.js






function Home({
  countries
}) {
  console.log(countries);
  const [keyword, setKeyword] = external_react_default().useState("");
  const filterCountries = countries.filter(country => country.name.toLowerCase().includes(keyword) || country.region.toLowerCase().includes(keyword) || country.subregion.toLowerCase().includes(keyword));

  const onInputChange = e => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        charset: "UTF-8"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x",
        crossorigin: "anonymous"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.7.0/css/all.css"
      }), /*#__PURE__*/jsx_runtime_.jsx("script", {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js",
        integrity: "sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4",
        crossorigin: "anonymous"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container justify-content-center col-lg-8 py-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "display-6",
        children: " Countries "
      }), /*#__PURE__*/jsx_runtime_.jsx("form", {
        className: "border",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "d-flex",
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "search",
            className: "form-control me-5 border-0 ",
            id: "search_input",
            placeholder: "Search Countries",
            "aria-label": "Search",
            onChange: onInputChange
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "btn btn-large",
            type: "submit",
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "fa fa-search"
            })
          })]
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(component_CountriesTable, {
      countries: filterCountries
    })]
  });
}
const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v3.1/all");
  const countries = await res.json();
  return {
    props: {
      countries
    }
  };
};

/***/ }),

/***/ 417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,62], function() { return __webpack_exec__(694); });
module.exports = __webpack_exports__;

})();