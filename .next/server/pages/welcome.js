module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KY5q");


/***/ }),

/***/ "3i/4":
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "BPlj":
/***/ (function(module, exports) {

module.exports = require("apollo-upload-client");

/***/ }),

/***/ "EN0U":
/***/ (function(module, exports) {

module.exports = require("apollo-link-ws");

/***/ }),

/***/ "FpJU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export auth */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withAuthSync; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("3i/4");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apolloClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cNYH");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const getDisplayName = Component => Component.displayName || Component.name || 'Component';

const auth = ctx => {
  const {
    token,
    userId
  } = next_cookies__WEBPACK_IMPORTED_MODULE_2___default()(ctx);

  if (ctx.req && !token) {
    ctx.res.writeHead(302, {
      Location: '/'
    });
    ctx.res.end();
    return;
  }

  if (!token) {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
  }

  return {
    token,
    userId
  };
};
const withAuthSync = WrappedComponent => {
  var _class, _temp;

  return _temp = _class = class extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    static async getInitialProps(ctx) {
      const {
        token,
        userId
      } = auth(ctx);
      await Object(_apolloClient__WEBPACK_IMPORTED_MODULE_3__[/* setTokenInRequest */ "d"])(token);
      const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));
      return _objectSpread(_objectSpread({}, componentProps), {}, {
        token,
        userId
      });
    }

    render() {
      return __jsx(WrappedComponent, this.props);
    }

  }, _defineProperty(_class, "displayName", `withAuthSync(${getDisplayName(WrappedComponent)})`), _temp;
};

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "KY5q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("FpJU");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // import Footer from '../src/components/Footer';



const Welcome = () => {
  return __jsx("div", {
    className: "jsx-3858546864" + " " + 'container'
  }, __jsx("h1", {
    className: "jsx-3858546864" + " " + 'heading'
  }, "404\u30A8\u30E9\u30FC \u3000\u30EA\u30AF\u30A8\u30B9\u30C8\u3057\u305F\u30EA\u30F3\u30AF\u306F\u3042\u308A\u307E\u305B\u3093"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3376572489"
  }, [".container.jsx-3858546864{height:100%;min-height:100vh;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;}", ".cardContainer.jsx-3858546864{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:wrap row;-ms-flex-flow:wrap row;flex-flow:wrap row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".heading.jsx-3858546864{color:white;text-align:center;font-size:5rem;padding:6rem 0rem;}"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2853978320"
  }, ["h1,h2{margin:0;font-family:Candara;}", "body{margin:0;padding:0;height:100%;min-height:100vh;font-family:Candara;background:#355c7d;background:-webkit-linear-gradient( to right, #c06c84, #6c5b7b, #355c7d );background:linear-gradient(to right,#c06c84,#6c5b7b,#355c7d);}"]));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_src_utils_auth__WEBPACK_IMPORTED_MODULE_2__[/* withAuthSync */ "a"])(Welcome));

/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cNYH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setTokenInRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return destroyToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createApolloClient; });
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Oyez");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oz4i");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vuC2");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("fflE");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_utilities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_link_ws__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("EN0U");
/* harmony import */ var apollo_link_ws__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_link_ws__WEBPACK_IMPORTED_MODULE_5__);
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};








const {
  createUploadLink
} = __webpack_require__("BPlj");

let authToken = null;
const authMiddleware = new apollo_link__WEBPACK_IMPORTED_MODULE_3__["ApolloLink"]((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: authToken || null
    }
  }); // Add onto payload for WebSocket authentication

  operation.authToken = authToken;
  return forward(operation);
});
const webSocketLink = false ? undefined : null;
/**
 * Set Token
 * @param token
 */

const setToken = token => __awaiter(void 0, void 0, void 0, function* () {
  try {
    authToken = token ? `Bearer ${token}` : null;
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('token', authToken, {
      expires: 7
    });
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
  }
});
/**
 * Set Token In Request
 * @param token
 */

const setTokenInRequest = token => __awaiter(void 0, void 0, void 0, function* () {
  try {
    authToken = token ? token : null;
    return authToken;
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
  }
});
/**
 * Destroy Token
 * For logout purpose
 */

const destroyToken = () => __awaiter(void 0, void 0, void 0, function* () {
  try {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('token');
    authToken = null;
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
  }
});
const isBrowser = false;
const httpLink = createUploadLink({
  uri: "http://localhost:4020/graphql",
  credentials: "same-origin",
  fetch: !isBrowser && fetch
});
const link = false ? undefined : httpLink;
/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 */

function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser,
    link: Object(apollo_link__WEBPACK_IMPORTED_MODULE_3__["concat"])(authMiddleware, link),
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]().restore(initialState)
  });
}

/***/ }),

/***/ "fflE":
/***/ (function(module, exports) {

module.exports = require("apollo-utilities");

/***/ }),

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "vuC2":
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ })

/******/ });