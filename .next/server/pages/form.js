module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		9: 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("xu/r");


/***/ }),

/***/ "7Ofu":
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
/* harmony import */ var _node_modules_js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("p46w");
/* harmony import */ var _node_modules_js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vuC2");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("fflE");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_utilities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_link_ws__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("EN0U");
/* harmony import */ var apollo_link_ws__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_link_ws__WEBPACK_IMPORTED_MODULE_5__);







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

const setToken = async token => {
  try {
    authToken = token ? `Bearer ${token}` : null;
    _node_modules_js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('token', authToken, {
      expires: 7
    });
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
  }
};
/**
 * Set Token In Request
 * @param token
 */

const setTokenInRequest = async token => {
  try {
    authToken = token ? token : null;
    return authToken;
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
  }
};
/**
 * Destroy Token
 * For logout purpose
 */

const destroyToken = async () => {
  try {
    _node_modules_js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('token');
    authToken = null;
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
  }
};
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
    // Disables forceFetch on the server (so queries are only run once)
    link: Object(apollo_link__WEBPACK_IMPORTED_MODULE_3__["concat"])(authMiddleware, link),
    //createUploadLink
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]().restore(initialState)
  });
}

/***/ }),

/***/ "7fVs":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-ssr");

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "BPlj":
/***/ (function(module, exports) {

module.exports = require("apollo-upload-client");

/***/ }),

/***/ "EN0U":
/***/ (function(module, exports) {

module.exports = require("apollo-link-ws");

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "VxNu":
/***/ (function(module, exports) {

module.exports = require("formik-material-ui");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fflE":
/***/ (function(module, exports) {

module.exports = require("apollo-utilities");

/***/ }),

/***/ "j08L":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "mt21":
/***/ (function(module, exports) {

module.exports = require("material-ui-dropzone");

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "p46w":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "vaDH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initOnContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withApollo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8Bbg");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_apolloClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("7Ofu");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





let globalApolloClient = null;
/**
 * Installs the Apollo Client on NextPageContext
 * or NextAppContext. Useful if you want to use apolloClient
 * inside getStaticProps, getStaticPaths or getServerSideProps
 * @param {NextPageContext | NextAppContext} ctx
 */

const initOnContext = ctx => {
  const inAppContext = Boolean(ctx.ctx);

  if (false) {}

  const apolloClient = ctx.apolloClient || initApolloClient(ctx.apolloState || {}, inAppContext ? ctx.ctx : ctx);

  apolloClient.toJSON = () => null;

  ctx.apolloClient = apolloClient;

  if (inAppContext) {
    ctx.ctx.apolloClient = apolloClient;
  }

  return ctx;
};
/**
 * @param  {NormalizedCacheObject} initialState
 * @param  {NextPageContext} ctx
 */

const initApolloClient = (initialState, ctx) => {
  if (true) {
    return Object(_utils_apolloClient__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(initialState, ctx);
  } // Reuse client on the client-side


  if (!globalApolloClient) {
    globalApolloClient = Object(_utils_apolloClient__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(initialState, ctx);
  }

  return globalApolloClient;
};
/**
 * Creates a withApollo HOC
 * that provides the apolloContext
 * to a next.js Page or AppTree.
 * @param  {Object} withApolloOptions
 * @param  {Boolean} [withApolloOptions.ssr=false]
 * @returns {(PageComponent: ReactNode) => ReactNode}
 */


const withApollo = ({
  ssr = false
} = {}) => PageComponent => {
  const WithApollo = (_ref) => {
    let {
      apolloClient,
      apolloState
    } = _ref,
        pageProps = _objectWithoutProperties(_ref, ["apolloClient", "apolloState"]);

    let client;

    if (apolloClient) {
      // Happens on: getDataFromTree & next.js ssr
      client = apolloClient;
    } else {
      // Happens on: next.js csr
      client = initApolloClient(apolloState, undefined);
    }

    return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
      client: client
    }, __jsx(PageComponent, pageProps));
  }; // Set the correct displayName in development


  if (false) {}

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async ctx => {
      const inAppContext = Boolean(ctx.ctx);
      const {
        apolloClient
      } = initOnContext(ctx); // Run wrapped getInitialProps methods

      let pageProps = {};

      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      } else if (inAppContext) {
        pageProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(ctx);
      } // Only on the server:


      if (true) {
        const {
          AppTree
        } = ctx; // When redirecting, the response is finished.
        // No point in continuing to render

        if (ctx.res && ctx.res.finished) {
          return pageProps;
        } // Only if dataFromTree is enabled


        if (ssr && AppTree) {
          try {
            // Import `@apollo/react-ssr` dynamically.
            // We don't want to have this in our client bundle.
            const {
              getDataFromTree,
              getMarkupFromTree
            } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "7fVs", 7));
            let props;

            if (inAppContext) {
              props = _objectSpread(_objectSpread({}, pageProps), {}, {
                apolloClient
              });
            } else {
              props = {
                pageProps: _objectSpread(_objectSpread({}, pageProps), {}, {
                  apolloClient
                })
              };
            }

            await getMarkupFromTree({
              tree: __jsx(AppTree, props)
            }); // await getDataFromTree(<AppTree {...props} />)
          } catch (error) {
            console.error('Error while running `getDataFromTree`', error);
          }

          next_head__WEBPACK_IMPORTED_MODULE_2___default.a.rewind();
        }
      }

      return _objectSpread(_objectSpread({}, pageProps), {}, {
        apolloState: apolloClient.cache.extract(),
        // Provide the client for ssr. As soon as this payload
        // gets JSON.stringified it will remove itself.
        apolloClient: ctx.apolloClient
      });
    };
  }

  return WithApollo;
};

/***/ }),

/***/ "vuC2":
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xu/r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "formik-material-ui"
var external_formik_material_ui_ = __webpack_require__("VxNu");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./lib/withApolloData.tsx
var withApolloData = __webpack_require__("vaDH");

// EXTERNAL MODULE: ./components/DropZone.tsx
var DropZone = __webpack_require__("zwkh");

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./graphql/mutation/createPost.ts

const CREATE_POST = external_graphql_tag_default.a`
  mutation createPost($postInput: PostInput) {
    createPost(postInput: $postInput) {
       _id
       username
       description
       file
    }
  }
`;
/* harmony default export */ var mutation_createPost = (CREATE_POST);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__("4151");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__("Ms0O");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__("j08L");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);

// CONCATENATED MODULE: ./pages/form.tsx
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const useStyles = Object(styles_["makeStyles"])(theme => Object(styles_["createStyles"])({
  root: {
    backgroundColor: "#f1f3f7",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='360' height='360' viewBox='0 0 360 360'%3E%3Cpath fill='%232e549d' fill-opacity='0.4' d='M0 85.02l4.62-4.27a49.09 49.09 0 0 0 7.33 3.74l-1.2 10.24 2.66.87 5.05-9c2.62.65 5.34 1.08 8.12 1.28L28.6 98h2.8l2.02-10.12c2.74-.2 5.46-.62 8.12-1.28l5.05 8.99 2.66-.86-1.2-10.24c2.55-1.03 5-2.29 7.33-3.74l7.58 7 2.26-1.65-4.3-9.38a48.3 48.3 0 0 0 5.8-5.8l9.38 4.3 1.65-2.26-7-7.58a49.09 49.09 0 0 0 3.74-7.33l10.24 1.2.87-2.66-9-5.05a48.07 48.07 0 0 0 1.28-8.12L88 41.4v-2.8l-10.12-2.02c-.2-2.74-.62-5.46-1.28-8.12l8.99-5.05-.86-2.66-10.24 1.2c-1.03-2.55-2.29-5-3.74-7.33l7-7.58-1.65-2.26-9.38 4.3a48.3 48.3 0 0 0-5.8-5.8L62.42 0h2.16l-1.25 2.72a50.31 50.31 0 0 1 3.95 3.95l9.5-4.36 3.52 4.85-7.08 7.68c.94 1.6 1.79 3.27 2.54 4.98l10.38-1.21 1.85 5.7-9.11 5.12c.39 1.8.68 3.65.87 5.52L90 37v6l-10.25 2.05a49.9 49.9 0 0 1-.87 5.52l9.11 5.12-1.85 5.7-10.38-1.21c-.75 1.7-1.6 3.37-2.54 4.98l7.08 7.68-3.52 4.85-9.5-4.36a50.31 50.31 0 0 1-3.95 3.95l4.36 9.5-4.85 3.52-7.68-7.08c-1.6.94-3.27 1.79-4.98 2.54l1.21 10.38-5.7 1.85-5.12-9.11c-1.8.39-3.65.68-5.52.87L33 100h-6l-2.05-10.25a49.9 49.9 0 0 1-5.52-.87l-5.12 9.11-5.7-1.85 1.21-10.38c-1.7-.75-3.37-1.6-4.98-2.54L0 87.68v-2.66zM0 52.7V27.3l8.38 4.84a22.96 22.96 0 0 0 0 15.72L0 52.7zm0-39.16A39.91 39.91 0 0 1 26 .2v17.15a22.98 22.98 0 0 0-13.62 7.86L0 18.06v-4.52zm0 52.92v-4.52l12.38-7.15A22.98 22.98 0 0 0 26 62.65V79.8A39.91 39.91 0 0 1 0 66.46zM34 79.8V62.65a22.98 22.98 0 0 0 13.62-7.86l14.85 8.58A39.97 39.97 0 0 1 34 79.8zm32.48-23.36l-14.86-8.58a22.96 22.96 0 0 0 0-15.72l14.86-8.58A39.86 39.86 0 0 1 70 40a39.9 39.9 0 0 1-3.52 16.44zm-4.01-39.8L47.62 25.2A22.98 22.98 0 0 0 34 17.35V.2a39.97 39.97 0 0 1 28.47 16.43v.01zM0 50.38l5.98-3.45a25.01 25.01 0 0 1 0-13.88L0 29.6v20.78zm.5-34.35l11.48 6.63c3.27-3.4 7.44-5.8 12.02-6.94V2.47A37.96 37.96 0 0 0 .5 16.04v-.01zm0 47.92A37.96 37.96 0 0 0 24 77.53V64.28a24.97 24.97 0 0 1-12.02-6.95L.5 63.96v-.01zM36 77.53a37.96 37.96 0 0 0 23.5-13.57l-11.48-6.63A24.97 24.97 0 0 1 36 64.28v13.25zm29.5-23.96a37.91 37.91 0 0 0 0-27.14l-11.48 6.63a25.01 25.01 0 0 1 0 13.88l11.49 6.63h-.01zm-6-37.53A37.96 37.96 0 0 0 36 2.47v13.25c4.66 1.15 8.8 3.6 12.02 6.95l11.48-6.63zM30 54a14 14 0 1 1 0-28 14 14 0 0 1 0 28zm0-2a12 12 0 1 0 0-24 12 12 0 0 0 0 24zm0-2a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm77.47 45.17l-1.62-5.97 5.67-2.06 2.61 5.64c1.09-.25 2.2-.44 3.33-.58l.52-6.2h6.04l.52 6.2c1.13.14 2.24.33 3.33.58l2.6-5.64 5.68 2.06-1.62 5.97c1.02.51 2 1.07 2.95 1.69l4.35-4.38 4.62 3.88-3.53 5c.8.84 1.53 1.71 2.23 2.62l5.52-2.6 3.02 5.23-4.98 3.46c.46 1.06.86 2.14 1.2 3.25l6.02-.54 1.05 5.94-5.84 1.54c.07 1.16.07 2.32 0 3.48l5.84 1.54-1.05 5.94-6.02-.54c-.34 1.1-.74 2.2-1.2 3.25l4.98 3.46-3.02 5.22-5.52-2.6c-.7.92-1.44 1.8-2.23 2.62l3.53 5-4.62 3.89-4.35-4.38a30.2 30.2 0 0 1-2.95 1.69l1.62 5.97-5.67 2.06-2.61-5.64c-1.09.25-2.2.44-3.33.58l-.52 6.2h-6.04l-.52-6.2a30.27 30.27 0 0 1-3.33-.58l-2.6 5.64-5.68-2.06 1.62-5.97c-1.01-.5-2-1.07-2.95-1.69l-4.35 4.38-4.62-3.88 3.53-5a32.5 32.5 0 0 1-2.23-2.62l-5.52 2.6-3.02-5.23 4.98-3.46a29.66 29.66 0 0 1-1.2-3.25l-6.02.54-1.05-5.94 5.84-1.54a30.28 30.28 0 0 1 0-3.48l-5.84-1.54 1.05-5.94 6.02.54c.34-1.1.74-2.2 1.2-3.25l-4.98-3.46 3.02-5.22 5.52 2.6c.7-.92 1.44-1.8 2.23-2.62l-3.53-5 4.62-3.89 4.35 4.38a30.2 30.2 0 0 1 2.95-1.69zm15.2-1.12l-.5-6.05h-2.34l-.5 6.05c-2.18.13-4.3.5-6.32 1.1l-2.54-5.5-2.2.8 1.6 5.85a27.97 27.97 0 0 0-5.56 3.21l-4.27-4.3-1.79 1.5 3.5 4.95a28.14 28.14 0 0 0-4.12 4.92l-5.5-2.59-1.16 2.02 4.98 3.46a27.8 27.8 0 0 0-2.2 6.03l-6.03-.55-.4 2.3 5.86 1.54a28.3 28.3 0 0 0 0 6.42l-5.87 1.55.4 2.3 6.05-.56a27.8 27.8 0 0 0 2.2 6.03l-5 3.47 1.17 2.02 5.49-2.59a28.14 28.14 0 0 0 4.12 4.92l-3.5 4.96 1.79 1.5 4.27-4.31a27.97 27.97 0 0 0 5.56 3.21l-1.6 5.85 2.2.8 2.54-5.5c2.02.6 4.14.97 6.32 1.1l.5 6.05h2.34l.5-6.05c2.18-.13 4.3-.5 6.32-1.1l2.54 5.5 2.2-.8-1.6-5.85a27.97 27.97 0 0 0 5.56-3.21l4.27 4.3 1.79-1.5-3.5-4.95a28.14 28.14 0 0 0 4.12-4.92l5.5 2.59 1.16-2.02-4.98-3.46a27.8 27.8 0 0 0 2.2-6.03l6.03.55.4-2.3-5.86-1.54a28.3 28.3 0 0 0 0-6.42l5.87-1.55-.4-2.3-6.05.56a27.8 27.8 0 0 0-2.2-6.03l4.99-3.46-1.17-2.02-5.49 2.59a28.14 28.14 0 0 0-4.12-4.92l3.5-4.96-1.79-1.5-4.27 4.31a27.97 27.97 0 0 0-5.56-3.21l1.6-5.85-2.2-.8-2.54 5.5c-2.02-.6-4.14-.97-6.32-1.1l.01-.01zM121 128a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-18a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm8.49 3.51a5 5 0 1 1 6.95-7.2 5 5 0 0 1-6.95 7.2zM133 120a5 5 0 1 1 10 0 5 5 0 0 1-10 0zm-3.51 8.49a5 5 0 1 1 7.2 6.95 5 5 0 0 1-7.2-6.95zM121 132a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm-8.49-3.51a5 5 0 1 1-6.95 7.2 5 5 0 0 1 6.95-7.2zM109 120a5 5 0 1 1-10 0 5 5 0 0 1 10 0zm3.51-8.49a5 5 0 1 1-7.2-6.95 5 5 0 0 1 7.2 6.95zM121 106a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9.9 4.1a3 3 0 1 0 4.39-4.09 3 3 0 0 0-4.39 4.09zm4.1 9.9a3 3 0 1 0 6 0 3 3 0 0 0-6 0zm-4.1 9.9a3 3 0 1 0 4.09 4.39 3 3 0 0 0-4.09-4.39zM121 134a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-9.9-4.1a3 3 0 1 0-4.39 4.09 3 3 0 0 0 4.39-4.09zM107 120a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm4.1-9.9a3 3 0 1 0-4.09-4.39 3 3 0 0 0 4.09 4.39zm129.42-6.95v.01c.87.07 1.74.17 2.6.3l1.5-3.91 1.94-3.64 3.89.97v4.13l-.5 4.13c.83.28 1.64.59 2.44.93l2.42-3.43 2.76-3.07 3.54 1.88-1 4-1.49 3.89c.73.47 1.45.97 2.15 1.49l3.19-2.76 3.42-2.3 2.97 2.67-1.93 3.65-2.38 3.4c.6.64 1.2 1.3 1.76 1.99l3.68-1.94 3.85-1.48 2.29 3.28-2.7 3.11-3.12 2.82c.43.76.84 1.53 1.22 2.32l4.04-1 4.1-.5 1.43 3.73-3.37 2.37-3.7 1.98c.23.84.44 1.68.62 2.54l4.17.01 4.1.5.48 3.97-3.85 1.48-4.06 1.02c.03.87.03 1.75 0 2.62l4.06 1.02 3.85 1.48-.48 3.97-4.1.51h-4.17c-.18.86-.39 1.71-.63 2.54l3.7 1.98 3.38 2.37-1.43 3.73-4.1-.5-4.04-1c-.38.79-.79 1.56-1.22 2.32l3.13 2.82 2.7 3.11-2.3 3.28-3.85-1.48-3.68-1.95a37 37 0 0 1-1.76 2l2.38 3.41 1.93 3.64-2.97 2.67-3.42-2.3-3.19-2.76a40.1 40.1 0 0 1-2.15 1.48l1.48 3.9 1 4-3.53 1.88-2.76-3.07-2.42-3.43c-.8.33-1.61.65-2.45.93l.5 4.13v4.13l-3.88.97-1.94-3.65-1.5-3.9c-.86.13-1.73.23-2.6.31L240 187l-1 4h-4l-1-4-.52-4.16a37.6 37.6 0 0 1-2.6-.3l-1.5 3.91-1.94 3.64-3.89-.97v-4.13l.5-4.13c-.83-.28-1.64-.59-2.44-.93l-2.42 3.43-2.76 3.07-3.54-1.88 1-4 1.49-3.89c-.74-.47-1.45-.97-2.15-1.49l-3.19 2.76-3.42 2.3-2.97-2.67 1.93-3.65 2.38-3.4c-.61-.65-1.2-1.31-1.76-1.99l-3.68 1.94-3.85 1.48-2.29-3.28 2.7-3.11 3.12-2.82c-.43-.76-.84-1.53-1.22-2.32l-4.04 1-4.1.5-1.43-3.73 3.37-2.37 3.7-1.98c-.23-.84-.44-1.68-.62-2.54l-4.17-.01-4.1-.5-.48-3.97 3.85-1.48 4.06-1.02c-.03-.87-.03-1.75 0-2.62l-4.06-1.02-3.85-1.48.48-3.97 4.1-.51h4.17c.18-.86.39-1.71.63-2.54l-3.7-1.98-3.38-2.37 1.43-3.73 4.1.5 4.04 1c.38-.79.79-1.56 1.22-2.32l-3.13-2.82-2.7-3.11 2.3-3.28 3.85 1.48 3.68 1.95a37 37 0 0 1 1.76-2l-2.38-3.41-1.93-3.64 2.97-2.67 3.42 2.3 3.19 2.76c.7-.52 1.41-1.02 2.15-1.48l-1.48-3.9-1-4 3.53-1.88 2.76 3.07 2.42 3.43c.8-.33 1.61-.65 2.45-.93l-.5-4.13v-4.13l3.88-.97 1.94 3.65 1.5 3.9c.86-.13 1.73-.23 2.6-.31L234 99l1-4h4l1 4 .52 4.15zm-14.3 3.4c-1.83.54-3.6 1.21-5.3 2l-3.5-4.97-1.38-1.53-.88.47.5 2 2.16 5.67a38.09 38.09 0 0 0-4.66 3.22l-4.61-4-1.71-1.15-.75.67.97 1.82 3.47 4.98a38.22 38.22 0 0 0-3.79 4.28l-5.37-2.84-1.92-.74-.57.82 1.35 1.56 4.52 4.09a37.9 37.9 0 0 0-2.64 5l-5.89-1.45-2.04-.25-.36.94 1.69 1.18 5.36 2.87a37.74 37.74 0 0 0-1.35 5.5l-6.08.01-2.04.25-.12 1 1.92.73 5.9 1.5a38.54 38.54 0 0 0 0 5.65l-5.9 1.49-1.92.74.12.99 2.04.25 6.08.01c.31 1.86.77 3.7 1.35 5.5l-5.36 2.87-1.7 1.18.37.94 2.04-.25 5.9-1.46a37.9 37.9 0 0 0 2.63 5.01l-4.52 4.1-1.35 1.55.57.82 1.92-.74 5.37-2.84a38.22 38.22 0 0 0 3.8 4.28l-3.48 4.98-.97 1.82.75.67 1.7-1.15 4.62-4a38.09 38.09 0 0 0 4.66 3.22l-2.17 5.67-.5 2 .89.47 1.38-1.53 3.5-4.98c1.7.8 3.47 1.47 5.3 2l-.73 6.04v2.06l.97.24.97-1.82 2.2-5.68c1.83.36 3.7.6 5.62.68L236 187l.5 2h1l.5-2 .75-6.04a38.2 38.2 0 0 0 5.62-.68l2.2 5.68.97 1.82.97-.24v-2.06l-.73-6.03c1.83-.54 3.6-1.21 5.3-2l3.5 4.97 1.38 1.53.88-.47-.5-2-2.16-5.67a38.09 38.09 0 0 0 4.66-3.22l4.61 4 1.71 1.15.75-.67-.97-1.82-3.47-4.98a38.22 38.22 0 0 0 3.79-4.28l5.37 2.84 1.92.74.57-.82-1.35-1.56-4.52-4.09c1-1.6 1.88-3.27 2.64-5l5.89 1.45 2.04.25.36-.94-1.69-1.18-5.36-2.87a37.4 37.4 0 0 0 1.35-5.5l6.08-.01 2.04-.25.12-1-1.92-.73-5.9-1.5c.14-1.88.14-3.77 0-5.65l5.9-1.49 1.92-.74-.12-.99-2.04-.25-6.08-.01a37.4 37.4 0 0 0-1.35-5.5l5.36-2.87 1.7-1.18-.37-.94-2.04.25-5.9 1.46a37.9 37.9 0 0 0-2.63-5.01l4.52-4.1 1.35-1.55-.57-.82-1.92.74-5.37 2.84a38.22 38.22 0 0 0-3.8-4.28l3.48-4.98.97-1.82-.75-.67-1.7 1.15-4.62 4a38.09 38.09 0 0 0-4.66-3.22l2.17-5.67.5-2-.89-.47-1.38 1.53-3.5 4.98c-1.7-.8-3.47-1.47-5.3-2l.73-6.04v-2.06l-.97-.24-.97 1.82-2.2 5.68c-1.83-.36-3.7-.6-5.62-.68L238 99l-.5-2h-1l-.5 2-.75 6.04c-1.92.09-3.8.32-5.62.68l-2.2-5.68-.97-1.82-.97.24v2.06l.73 6.03zm-5.85 5.65A34.82 34.82 0 0 1 236 108v6a28.8 28.8 0 0 0-12.63 3.39l-3-5.2v.01zm2.8.83l1 1.74a30.8 30.8 0 0 1 9.83-2.63v-2.01a32.8 32.8 0 0 0-10.83 2.9zm-4.53.17l3 5.2a29.12 29.12 0 0 0-9.24 9.24l-5.2-3a35.18 35.18 0 0 1 11.44-11.44zm-.67 2.84a33.19 33.19 0 0 0-7.93 7.93l1.74 1a31.18 31.18 0 0 1 7.2-7.2l-1.01-1.73zm-11.77 10.33h-.01l5.2 3A28.8 28.8 0 0 0 208 142h-6a34.82 34.82 0 0 1 4.2-15.63zm.83 2.8a32.8 32.8 0 0 0-2.9 10.83h2.01a30.8 30.8 0 0 1 2.63-9.83l-1.74-1zM202.01 144h6.01c.15 4.41 1.3 8.73 3.38 12.63l-5.2 3a34.82 34.82 0 0 1-4.19-15.63zm2.12 2a32.8 32.8 0 0 0 2.9 10.84l1.74-1a30.8 30.8 0 0 1-2.63-9.84h-2.01zm3.07 15.36l5.2-3c2.34 3.74 5.5 6.9 9.24 9.24l-3 5.2a35.18 35.18 0 0 1-11.44-11.44zm2.84.67a33.19 33.19 0 0 0 7.93 7.93l1-1.74a31.18 31.18 0 0 1-7.2-7.2l-1.73 1.01zm10.33 11.77v.01l3-5.2A28.85 28.85 0 0 0 236 172v6a34.82 34.82 0 0 1-15.63-4.2zm2.8-.83a32.8 32.8 0 0 0 10.83 2.9v-2.01a30.8 30.8 0 0 1-9.83-2.63l-1 1.74zm14.83 5.02v-6.01c4.41-.15 8.73-1.3 12.63-3.38l3 5.2a34.82 34.82 0 0 1-15.63 4.19zm2-2.12a32.8 32.8 0 0 0 10.84-2.9l-1-1.74a30.8 30.8 0 0 1-9.84 2.63v2.01zm15.36-3.07l-3-5.2c3.74-2.34 6.9-5.5 9.24-9.24l5.2 3a35.18 35.18 0 0 1-11.44 11.44zm.67-2.84a33.19 33.19 0 0 0 7.93-7.93l-1.74-1a31.18 31.18 0 0 1-7.2 7.2l1.01 1.73zm11.77-10.33h.01l-5.2-3A28.85 28.85 0 0 0 266 144h6a34.82 34.82 0 0 1-4.2 15.63zm-.83-2.8a32.8 32.8 0 0 0 2.9-10.83h-2.01a30.8 30.8 0 0 1-2.63 9.83l1.74 1zm5.02-14.83h-6.01a28.85 28.85 0 0 0-3.38-12.63l5.2-3a34.82 34.82 0 0 1 4.19 15.63zm-2.12-2a32.8 32.8 0 0 0-2.9-10.84l-1.74 1a30.8 30.8 0 0 1 2.63 9.84h2.01zm-3.07-15.36l-5.2 3a29.12 29.12 0 0 0-9.24-9.24l3-5.2a35.18 35.18 0 0 1 11.44 11.44zm-2.84-.67a33.19 33.19 0 0 0-7.93-7.93l-1 1.74a31.18 31.18 0 0 1 7.2 7.2l1.73-1.01zM238 108a34.82 34.82 0 0 1 15.63 4.19l-3 5.2a28.85 28.85 0 0 0-12.63-3.38V108zm12.84 5.02a32.8 32.8 0 0 0-10.84-2.9v2.01a30.8 30.8 0 0 1 9.83 2.63l1-1.74h.01zM237 156a13 13 0 1 1 0-26 13 13 0 0 1 0 26zm0-2a11 11 0 1 0 0-22 11 11 0 0 0 0 22zM137.54 0h56.92l-.74 1.03c.57.7 1.12 1.4 1.64 2.14l7.75-2.9 2 3.46-6.38 5.25c.37.82.72 1.65 1.03 2.5l8.22-.8 1.04 3.86-7.52 3.43c.15.88.26 1.77.35 2.67L210 22v4l-8.15 1.36c-.09.9-.2 1.8-.35 2.67l7.52 3.43-1.04 3.86-8.22-.8c-.31.85-.66 1.68-1.03 2.5l6.38 5.25-2 3.46-7.75-2.9c-.52.74-1.07 1.45-1.64 2.14l4.8 6.73-2.82 2.83-6.73-4.8c-.7.56-1.4 1.11-2.14 1.63l2.9 7.75-3.46 2-5.25-6.38c-.82.37-1.65.72-2.5 1.03l.8 8.22-3.86 1.04-3.43-7.52c-.88.15-1.77.26-2.67.35L168 68h-4l-1.36-8.15c-.9-.09-1.8-.2-2.67-.35l-3.43 7.52-3.86-1.04.8-8.22c-.85-.31-1.68-.66-2.5-1.03l-5.25 6.38-3.46-2 2.9-7.75a36.15 36.15 0 0 1-2.14-1.64l-6.73 4.8-2.83-2.82 4.8-6.73c-.56-.7-1.11-1.4-1.63-2.14l-7.75 2.9-2-3.46 6.38-5.25c-.37-.82-.72-1.65-1.03-2.5l-8.22.8-1.04-3.86 7.52-3.43c-.15-.88-.26-1.77-.35-2.67L122 26v-4l8.15-1.36c.09-.9.2-1.8.35-2.67l-7.52-3.43 1.04-3.86 8.22.8c.31-.85.66-1.68 1.03-2.5l-6.38-5.25 2-3.46 7.75 2.9c.52-.74 1.07-1.45 1.64-2.14L137.54 0zm2.43 0l.83 1.17a34.14 34.14 0 0 0-3.38 4.4l-7.63-2.86-.33.58 6.29 5.18a33.79 33.79 0 0 0-2.13 5.12l-8.1-.78-.18.64 7.42 3.37a34.02 34.02 0 0 0-.72 5.5L124 23.68v.66l8.04 1.34c.1 1.88.33 3.72.72 5.5l-7.42 3.38.18.64 8.1-.78a33.88 33.88 0 0 0 2.13 5.12l-6.29 5.18.33.58 7.63-2.86c1 1.56 2.14 3.03 3.38 4.4l-4.73 6.63.47.47 6.63-4.73a34.14 34.14 0 0 0 4.4 3.38l-2.86 7.63.58.33 5.18-6.29c1.63.84 3.35 1.56 5.12 2.13l-.78 8.1.64.18 3.37-7.42c1.79.39 3.63.63 5.5.72l1.35 8.04h.66l1.34-8.04c1.88-.1 3.72-.33 5.5-.72l3.38 7.42.64-.18-.78-8.1a33.88 33.88 0 0 0 5.12-2.13l5.18 6.29.58-.33-2.86-7.63c1.56-1 3.03-2.14 4.4-3.38l6.63 4.73.47-.47-4.73-6.63a34.14 34.14 0 0 0 3.38-4.4l7.63 2.86.33-.58-6.29-5.18a33.79 33.79 0 0 0 2.13-5.12l8.1.78.18-.64-7.42-3.37c.39-1.79.63-3.63.72-5.5l8.04-1.35v-.66l-8.04-1.34c-.1-1.88-.33-3.72-.72-5.5l7.42-3.38-.18-.64-8.1.78a33.79 33.79 0 0 0-2.13-5.12l6.29-5.18-.33-.58-7.63 2.86c-1-1.56-2.14-3.03-3.38-4.4l.83-1.17h-52.06V0zm-2.82 27h14.15A15.02 15.02 0 0 0 163 38.7v14.15A29.01 29.01 0 0 1 137.15 27zm12.57-27H163v9.3A15.02 15.02 0 0 0 151.3 21h-14.15a28.99 28.99 0 0 1 12.57-21zM169 52.85V38.7A15.02 15.02 0 0 0 180.7 27h14.15A29.01 29.01 0 0 1 169 52.85zM182.28 0a28.99 28.99 0 0 1 12.57 21H180.7A15.02 15.02 0 0 0 169 9.3V0h13.28zm-42.82 29A27.03 27.03 0 0 0 161 50.54V40.25A17.04 17.04 0 0 1 149.75 29h-10.29zm14.16-29a27.04 27.04 0 0 0-14.16 19h10.29A17.04 17.04 0 0 1 161 7.75V0h-7.38zM171 50.54A27.03 27.03 0 0 0 192.54 29h-10.29A17.04 17.04 0 0 1 171 40.25v10.29zM178.38 0H171v7.75A17.04 17.04 0 0 1 182.25 19h10.29a27.04 27.04 0 0 0-14.16-19zM166 34a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-39.51 176.15l-10.67-7.95 6-10.4 12.23 5.27a23.97 23.97 0 0 1 8.4-4.86L144 177h12l1.55 13.21a23.97 23.97 0 0 1 8.4 4.86l12.23-5.27 6 10.4-10.67 7.95a24 24 0 0 1 0 9.7l10.67 7.95-6 10.4-12.23-5.27a23.97 23.97 0 0 1-8.4 4.86L156 249h-12l-1.55-13.21a23.97 23.97 0 0 1-8.4-4.86l-12.23 5.27-6-10.4 10.67-7.95a24.1 24.1 0 0 1 0-9.7zm29.25-16.4l-1.5-12.75h-8.48l-1.5 12.76c-3.75 1-7.1 2.99-9.79 5.65l-11.8-5.08-4.23 7.34 10.3 7.68c-.98 3.7-.98 7.6 0 11.3l-10.3 7.68 4.23 7.34 11.8-5.08a22.1 22.1 0 0 0 9.8 5.65l1.5 12.76h8.47l1.5-12.76c3.75-1 7.1-2.99 9.79-5.65l11.8 5.08 4.23-7.34-10.3-7.68c.98-3.7.98-7.6 0-11.3l10.3-7.68-4.23-7.34-11.8 5.08a21.98 21.98 0 0 0-9.8-5.65l.01-.01zM150 225a12 12 0 1 1 0-24 12 12 0 0 1 0 24zm0-2a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm3.53 67.72l4.26.07.51 1.93-3.65 2.19c.11.63.2 1.27.25 1.92L159 298v2l-4.1 1.17c-.05.65-.14 1.29-.25 1.92l3.65 2.2-.51 1.92-4.26.07c-.22.61-.47 1.21-.74 1.8l2.96 3.05-1 1.74-4.13-1.04a24.1 24.1 0 0 1-1.18 1.54l2.07 3.72-1.42 1.42-3.72-2.07c-.5.41-1.01.8-1.54 1.18l1.04 4.13-1.74 1-3.05-2.96c-.59.27-1.19.52-1.8.74l-.07 4.26-1.93.51-2.19-3.65c-.63.11-1.27.2-1.92.25L132 327h-2l-1.17-4.1c-.65-.05-1.29-.14-1.92-.25l-2.2 3.65-1.92-.51-.07-4.26c-.61-.22-1.21-.47-1.8-.74l-3.05 2.96-1.74-1 1.04-4.13a24.1 24.1 0 0 1-1.54-1.18l-3.72 2.07-1.42-1.42 2.07-3.72c-.41-.5-.8-1.01-1.18-1.54l-4.13 1.04-1-1.74 2.96-3.05c-.27-.59-.52-1.19-.74-1.8l-4.26-.07-.51-1.93 3.65-2.19c-.11-.63-.2-1.27-.25-1.92L103 300v-2l4.1-1.17c.05-.65.14-1.29.25-1.92l-3.65-2.2.51-1.92 4.26-.07c.22-.61.47-1.21.74-1.8l-2.96-3.05 1-1.74 4.13 1.04c.38-.53.77-1.04 1.18-1.54l-2.07-3.72 1.42-1.42 3.72 2.07c.5-.41 1.01-.8 1.54-1.18l-1.04-4.13 1.74-1 3.05 2.96c.59-.27 1.19-.52 1.8-.74l.07-4.26 1.93-.51 2.19 3.65c.63-.11 1.27-.2 1.92-.25L130 271h2l1.17 4.1c.65.05 1.29.14 1.92.25l2.2-3.65 1.92.51.07 4.26c.61.22 1.21.47 1.8.74l3.05-2.96 1.74 1-1.04 4.13c.53.38 1.04.77 1.54 1.18l3.72-2.07 1.42 1.42-2.07 3.72c.41.5.8 1.01 1.18 1.54l4.13-1.04 1 1.74-2.96 3.05c.27.59.52 1.19.74 1.8zM109 299a22 22 0 1 0 44 0 22 22 0 0 0-44 0zm27.11-10.86l-3 5.22a6 6 0 0 0-4.21 0l-3.01-5.22a11.95 11.95 0 0 1 10.22 0zm1.74 1a12 12 0 0 1 5.1 8.86h-6.01a6.01 6.01 0 0 0-2.1-3.64l3-5.22h.01zm-13.7 0l3.02 5.22a6.01 6.01 0 0 0-2.1 3.64h-6.03a12 12 0 0 1 5.11-8.86zm-5.1 10.86h6.01a6.01 6.01 0 0 0 2.1 3.64l-3 5.22a12 12 0 0 1-5.12-8.86h.01zm6.84 9.86l3-5.22a6 6 0 0 0 4.21 0l3.01 5.22a11.95 11.95 0 0 1-10.22 0zm11.96-1l-3.02-5.22a6.01 6.01 0 0 0 2.1-3.64h6.03a12 12 0 0 1-5.11 8.86zm-4.68-19.62a10.04 10.04 0 0 0-4.34 0l1.05 1.82c.74-.1 1.5-.1 2.24 0l1.05-1.82zm5.2 3l-1.05 1.82c.46.59.84 1.24 1.12 1.94h2.1a9.99 9.99 0 0 0-2.17-3.76zm-14.74 0a9.99 9.99 0 0 0-2.17 3.76h2.1c.28-.7.66-1.35 1.12-1.94l-1.05-1.82zm-2.17 9.76a9.99 9.99 0 0 0 2.17 3.76l1.05-1.82a8.01 8.01 0 0 1-1.12-1.94h-2.1zm7.37 6.76c1.43.32 2.91.32 4.34 0l-1.05-1.82c-.74.1-1.5.1-2.24 0l-1.05 1.82zm9.54-3a9.99 9.99 0 0 0 2.17-3.76h-2.1c-.28.7-.66 1.35-1.12 1.94l1.05 1.82zM127 299a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm2 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm15 0a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm-6.5 11.26a4 4 0 1 1 4 6.93 4 4 0 0 1-4-6.93zm-13 0a4 4 0 1 1-4 6.93 4 4 0 0 1 4-6.93zM118 299a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm6.5-11.26a4 4 0 1 1-4-6.93 4 4 0 0 1 4 6.93zm13 0a4 4 0 1 1 4-6.93 4 4 0 0 1-4 6.93zM146 299a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm-7.5 12.99a2 2 0 1 0 1.66 3.64 2 2 0 0 0-1.66-3.64zm-15 0a2 2 0 1 0-2.15 3.38 2 2 0 0 0 2.15-3.38zM116 299a2 2 0 1 0-4 0 2 2 0 0 0 4 0zm7.5-12.99a2 2 0 1 0-1.66-3.64 2 2 0 0 0 1.66 3.64zm15 0a2 2 0 1 0 2.15-3.38 2 2 0 0 0-2.15 3.38zm103.8-61.7l-.8-8.22 5.8-1.55 3.42 7.52c2.26-.43 4.57-.74 6.92-.9L259 213h6l1.36 8.16c2.35.16 4.66.47 6.92.9l3.42-7.52 5.8 1.55-.8 8.22c2.21.77 4.37 1.66 6.45 2.68l5.25-6.38 5.2 3-2.9 7.74a60.25 60.25 0 0 1 5.53 4.25l6.73-4.8 4.24 4.24-4.8 6.73a60.25 60.25 0 0 1 4.25 5.53l7.74-2.9 3 5.2-6.38 5.25a59.62 59.62 0 0 1 2.68 6.45l8.22-.8 1.55 5.8-7.52 3.42c.43 2.26.74 4.57.9 6.92L330 278v6l-8.16 1.36a60.03 60.03 0 0 1-.9 6.92l7.52 3.42-1.55 5.8-8.22-.8a59.62 59.62 0 0 1-2.68 6.45l6.38 5.25-3 5.2-7.74-2.9a60.25 60.25 0 0 1-4.25 5.53l4.8 6.73-4.24 4.24-6.73-4.8a60.25 60.25 0 0 1-5.53 4.25l2.9 7.74-5.2 3-5.25-6.38a59.62 59.62 0 0 1-6.45 2.68l.8 8.22-5.8 1.55-3.42-7.52c-2.26.43-4.57.74-6.92.9L265 349h-6l-1.36-8.16a60.03 60.03 0 0 1-6.92-.9l-3.42 7.52-5.8-1.55.8-8.22a59.62 59.62 0 0 1-6.45-2.68l-5.25 6.38-5.2-3 2.9-7.74a60.25 60.25 0 0 1-5.53-4.25l-6.73 4.8-4.24-4.24 4.8-6.73a60.25 60.25 0 0 1-4.25-5.53l-7.74 2.9-3-5.2 6.38-5.25a59.62 59.62 0 0 1-2.68-6.45l-8.22.8-1.55-5.8 7.52-3.42c-.43-2.29-.73-4.6-.9-6.92L194 284v-6l8.16-1.36c.16-2.35.47-4.66.9-6.92l-7.52-3.42 1.55-5.8 8.22.8c.77-2.2 1.66-4.35 2.68-6.45l-6.38-5.25 3-5.2 7.74 2.9a60.25 60.25 0 0 1 4.25-5.53l-4.8-6.73 4.24-4.24 6.73 4.8a60.25 60.25 0 0 1 5.53-4.25l-2.9-7.74 5.2-3 5.25 6.38a59.62 59.62 0 0 1 6.45-2.68zm2.12 1.4c-3.15 1-6.19 2.27-9.08 3.77l-5.19-6.3-2.3 1.33 2.86 7.65a58.24 58.24 0 0 0-7.79 5.98l-6.65-4.75-1.88 1.88 4.75 6.65a58.24 58.24 0 0 0-5.98 7.79l-7.65-2.86-1.33 2.3 6.3 5.2a57.64 57.64 0 0 0-3.77 9.07l-8.12-.79-.69 2.58 7.43 3.38a58 58 0 0 0-1.27 9.73l-8.06 1.35v2.66l8.06 1.35c.15 3.32.58 6.58 1.27 9.73l-7.43 3.38.7 2.58 8.11-.79c1 3.15 2.27 6.19 3.77 9.08l-6.3 5.19 1.33 2.3 7.65-2.86a58.24 58.24 0 0 0 5.98 7.79l-4.75 6.65 1.88 1.88 6.65-4.75a60.3 60.3 0 0 0 7.79 5.98l-2.86 7.65 2.3 1.33 5.2-6.3a56.99 56.99 0 0 0 9.07 3.77l-.79 8.12 2.58.69 3.38-7.43c3.15.69 6.4 1.12 9.73 1.27l1.35 8.06h2.66l1.35-8.06c3.32-.15 6.58-.58 9.73-1.27l3.38 7.43 2.58-.7-.79-8.11c3.15-1 6.19-2.27 9.08-3.77l5.19 6.3 2.3-1.33-2.86-7.65a58.24 58.24 0 0 0 7.79-5.98l6.65 4.75 1.88-1.88-4.75-6.65a60.3 60.3 0 0 0 5.98-7.79l7.65 2.86 1.33-2.3-6.3-5.2a56.99 56.99 0 0 0 3.77-9.07l8.12.79.69-2.58-7.43-3.38a58 58 0 0 0 1.27-9.73l8.06-1.35v-2.66l-8.06-1.35a58.04 58.04 0 0 0-1.27-9.73l7.43-3.38-.7-2.58-8.11.79c-1-3.15-2.27-6.19-3.77-9.08l6.3-5.19-1.33-2.3-7.65 2.86a58.24 58.24 0 0 0-5.98-7.79l4.75-6.65-1.88-1.88-6.65 4.75a58.24 58.24 0 0 0-7.79-5.98l2.86-7.65-2.3-1.33-5.2 6.3a57.64 57.64 0 0 0-9.07-3.77l.79-8.12-2.58-.69-3.38 7.43a58 58 0 0 0-9.73-1.27l-1.35-8.06h-2.66l-1.35 8.06c-3.32.15-6.58.58-9.73 1.27l-3.38-7.43-2.58.7.79 8.11zm4.58 50.1a13.96 13.96 0 0 0 0 10.39l-33.88 19.55A52.77 52.77 0 0 1 209 281c0-8.94 2.21-17.37 6.12-24.75L249 275.8v.01zm2-3.47l-33.87-19.56A52.97 52.97 0 0 1 260 228.04v39.1a13.99 13.99 0 0 0-9 5.2zm0 17.32a13.99 13.99 0 0 0 9 5.2v39.1a52.97 52.97 0 0 1-42.87-24.74L251 289.66zm13 5.2a13.99 13.99 0 0 0 9-5.2l33.87 19.56A52.97 52.97 0 0 1 264 333.96v-39.1zm11-8.66a13.96 13.96 0 0 0 0-10.4l33.88-19.55A52.77 52.77 0 0 1 315 281c0 8.94-2.21 17.37-6.12 24.75L275 286.2zm-2-13.86a13.99 13.99 0 0 0-9-5.2v-39.1a52.97 52.97 0 0 1 42.87 24.74L273 272.34zm-57.04-13.3A50.8 50.8 0 0 0 211 281a50.8 50.8 0 0 0 4.96 21.96l30.62-17.68c-.78-2.8-.78-5.76 0-8.56l-30.62-17.68zm4-6.93l30.62 17.68a16.08 16.08 0 0 1 7.42-4.29v-35.35a50.96 50.96 0 0 0-38.04 21.96zm0 57.78A50.96 50.96 0 0 0 258 331.85V296.5a15.98 15.98 0 0 1-7.42-4.29l-30.62 17.68zM266 331.85a50.96 50.96 0 0 0 38.04-21.96l-30.62-17.68a16.08 16.08 0 0 1-7.42 4.29v35.35zm42.04-28.89A50.8 50.8 0 0 0 313 281a50.8 50.8 0 0 0-4.96-21.96l-30.62 17.68c.78 2.8.78 5.76 0 8.56l30.62 17.68zm-4-50.85A50.96 50.96 0 0 0 266 230.15v35.35c2.86.74 5.41 2.25 7.42 4.29l30.62-17.68zM262 290a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm0-2a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM0 242.64l2.76.4 4.75 2.27a38.2 38.2 0 0 1 2.85-3.4l-3.06-4.28-1.69-5.11 3.07-2.58 4.74 2.55 3.69 3.76a37.96 37.96 0 0 1 3.84-2.22l-1.42-5.07.17-5.38 3.76-1.37 3.6 4.02 2.17 4.79c1.42-.34 2.88-.6 4.37-.77L34 225l2-5h4l2 5 .4 5.25c1.49.17 2.95.43 4.37.77l2.18-4.8 3.59-4 3.76 1.36.17 5.38-1.42 5.07c1.33.67 2.6 1.41 3.84 2.22l3.69-3.76 4.74-2.55 3.07 2.58-1.69 5.11-3.06 4.29a38.2 38.2 0 0 1 2.85 3.4l4.75-2.28 5.33-.77 2 3.46-3.33 4.23-4.34 2.98c.59 1.36 1.1 2.75 1.52 4.17l5.23-.52 5.27 1.1.7 3.94-4.58 2.84-5.1 1.31a38.6 38.6 0 0 1 0 4.44l5.1 1.3 4.58 2.85-.7 3.93-5.27 1.1-5.23-.5a36.3 36.3 0 0 1-1.52 4.16l4.34 2.98 3.33 4.23-2 3.46-5.33-.77-4.75-2.27a38.2 38.2 0 0 1-2.85 3.4l3.06 4.28 1.69 5.11-3.07 2.58-4.74-2.55-3.69-3.76a37.96 37.96 0 0 1-3.84 2.22l1.42 5.07-.17 5.38-3.76 1.37-3.6-4.02-2.17-4.79c-1.42.34-2.88.6-4.37.77L42 311l-2 5h-4l-2-5-.4-5.25a37.87 37.87 0 0 1-4.37-.77l-2.18 4.8-3.59 4-3.76-1.36-.17-5.38 1.42-5.07c-1.32-.66-2.6-1.4-3.84-2.22l-3.69 3.76-4.74 2.55-3.07-2.58 1.69-5.11 3.06-4.29a38.2 38.2 0 0 1-2.85-3.4l-4.75 2.28-2.76.4v-8.17l3.1-2.13a37.72 37.72 0 0 1-1.52-4.17l-1.58.16v-8.82l.06-.01a38.6 38.6 0 0 1 0-4.44l-.06-.01v-8.82l1.58.16c.43-1.43.94-2.82 1.52-4.17L0 250.8v-8.17.01zm0 1.87v3.89l5.62 3.84a35.74 35.74 0 0 0-2.55 7.02l-3.07-.3v4.75l2.2.56a36.42 36.42 0 0 0 0 7.46l-2.2.56v4.75l3.07-.3a35.2 35.2 0 0 0 2.55 7.02L0 287.6v3.89l1.76-.26 6.41-3.07c1.4 2.06 3 3.98 4.8 5.71l-4.14 5.78-1.01 3.07 1.22 1.03 2.85-1.52 4.98-5.08c2 1.45 4.16 2.7 6.45 3.73l-1.9 6.84.1 3.23 1.5.55 2.15-2.4 2.94-6.48a35.9 35.9 0 0 0 7.34 1.3L36 311l1.2 3h1.6l1.2-3 .55-7.09a35.9 35.9 0 0 0 7.34-1.29l2.94 6.47 2.15 2.4 1.5-.54.1-3.23-1.9-6.84a35.96 35.96 0 0 0 6.45-3.73l4.98 5.08 2.85 1.52 1.22-1.03-1-3.07-4.15-5.78a35.8 35.8 0 0 0 4.8-5.7l6.4 3.06 3.2.46.8-1.38-2-2.54-5.85-4.01c1.1-2.24 1.95-4.6 2.55-7.02l7.07.7 3.16-.66.28-1.58-2.75-1.7-6.88-1.77c.26-2.48.26-4.98 0-7.46l6.88-1.77 2.75-1.7-.28-1.58-3.16-.66-7.07.7a35.74 35.74 0 0 0-2.55-7.02l5.86-4 2-2.55-.8-1.38-3.2.46-6.41 3.07c-1.4-2.06-3-3.98-4.8-5.71l4.14-5.78 1.01-3.07-1.22-1.03-2.85 1.52-4.98 5.08c-2-1.45-4.16-2.7-6.45-3.73l1.9-6.84-.1-3.23-1.5-.55-2.15 2.4-2.94 6.48a35.9 35.9 0 0 0-7.34-1.3L40 225l-1.2-3h-1.6l-1.2 3-.55 7.09c-2.48.17-4.94.6-7.34 1.29l-2.94-6.47-2.15-2.4-1.5.54-.1 3.23 1.9 6.84a35.96 35.96 0 0 0-6.45 3.73l-4.98-5.08-2.85-1.52-1.22 1.03 1 3.07 4.15 5.78a36.18 36.18 0 0 0-4.8 5.7l-6.4-3.06L0 244.5v.01zM38 272a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-26a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm24 24a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm-24 24a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm-24-24a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm24-26a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm26 26a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm-26 26a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-26-26a2 2 0 1 0-4 0 2 2 0 0 0 4 0zm3.37 22.63a12 12 0 1 1 16.17-17.74 12 12 0 0 1-16.17 17.74zm0-45.26a12 12 0 1 1 17.74 16.17 12 12 0 0 1-17.74-16.17zm45.26 0a12 12 0 1 1-16.17 17.74 12 12 0 0 1 16.17-17.74zm0 45.26a12 12 0 1 1-17.74-16.17 12 12 0 0 1 17.74 16.17zm-15.56-29.7a10 10 0 1 0 14.39-13.9 10 10 0 0 0-14.39 13.9zm0 14.14a10 10 0 1 0 13.9 14.39 10 10 0 0 0-13.9-14.39zm-14.14 0a10 10 0 1 0-14.39 13.9 10 10 0 0 0 14.39-13.9zm0-14.14a10 10 0 1 0-13.9-14.39 10 10 0 0 0 13.9 14.39zm230.9-245.4l-.08-4.18 1.93-.52 2.04 3.67c1.07-.2 2.16-.35 3.26-.43L270 10h2l1.02 4.07c1.1.08 2.2.22 3.26.43l2.04-3.67 1.93.52-.07 4.19a27 27 0 0 1 3.04 1.26l2.91-3.01 1.74 1-1.16 4.03c.91.62 1.78 1.29 2.61 2l3.6-2.15 1.41 1.41-2.16 3.6c.72.83 1.4 1.7 2 2.6l4.04-1.15 1 1.74-3.01 2.91c.48.98.9 2 1.26 3.04l4.2-.07.5 1.93-3.66 2.04c.2 1.07.35 2.16.43 3.26L303 41v2l-4.07 1.02a26.9 26.9 0 0 1-.43 3.26l3.67 2.04-.52 1.93-4.19-.07a27.82 27.82 0 0 1-1.26 3.04l3.01 2.91-1 1.74-4.03-1.16c-.62.91-1.29 1.78-2 2.61l2.15 3.6-1.41 1.41-3.6-2.16c-.83.72-1.7 1.4-2.6 2l1.15 4.04-1.74 1-2.91-3.01a27 27 0 0 1-3.04 1.26l.07 4.2-1.93.5-2.04-3.66c-1.07.2-2.16.35-3.26.43L272 74h-2l-1.02-4.07a26.9 26.9 0 0 1-3.26-.43l-2.04 3.67-1.93-.52.07-4.19a27.82 27.82 0 0 1-3.04-1.26l-2.91 3.01-1.74-1 1.16-4.03c-.9-.62-1.78-1.29-2.61-2l-3.6 2.15-1.41-1.41 2.16-3.6c-.72-.83-1.4-1.7-2-2.6l-4.04 1.15-1-1.74 3.01-2.91a27 27 0 0 1-1.26-3.04l-4.2.07-.5-1.93 3.66-2.04c-.2-1.07-.35-2.16-.43-3.26L239 43v-2l4.07-1.02c.08-1.1.22-2.2.43-3.26l-3.67-2.04.52-1.93 4.19.07a27 27 0 0 1 1.26-3.04l-3.01-2.91 1-1.74 4.03 1.16c.62-.91 1.29-1.78 2-2.61l-2.15-3.6 1.41-1.41 3.6 2.16c.83-.72 1.7-1.4 2.6-2l-1.15-4.04 1.74-1 2.91 3.01a27 27 0 0 1 3.04-1.26l.01-.01zM271 68a26 26 0 1 0 0-52 26 26 0 0 0 0 52zm0-9a17 17 0 1 1 0-34 17 17 0 0 1 0 34zm0-2a15 15 0 1 0 0-30 15 15 0 0 0 0 30zm0-8a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm9 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm-9 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-9-9a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm47.93 53.79l-1.8-3.91 1.63-1.18 3.15 2.92c.4-.17.82-.3 1.25-.4L315 89h2l.84 4.21c.43.1.85.24 1.25.4l3.15-2.9 1.62 1.17-1.8 3.9c.3.33.55.69.78 1.06l4.26-.5.62 1.9-3.75 2.1c.04.44.04.87 0 1.31l3.75 2.1-.62 1.9-4.26-.5c-.23.38-.49.74-.77 1.06l1.8 3.91-1.63 1.18-3.15-2.92c-.4.17-.82.3-1.25.4L317 113h-2l-.84-4.21c-.43-.1-.85-.24-1.25-.4l-3.15 2.9-1.62-1.17 1.8-3.9a8.03 8.03 0 0 1-.78-1.06l-4.26.5-.62-1.9 3.75-2.1a8.1 8.1 0 0 1 0-1.31l-3.75-2.1.62-1.9 4.26.5c.23-.38.49-.74.77-1.06zM316 106a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM75.73 179.2l-.6-2.1 1.74-1 1.51 1.57a9.93 9.93 0 0 1 2.1-.55L81 175h2l.53 2.12c.72.1 1.42.3 2.09.55l1.51-1.56 1.74 1-.6 2.1c.56.45 1.07.96 1.52 1.52l2.1-.6 1 1.74-1.56 1.51c.25.67.44 1.37.55 2.1L94 186v2l-2.12.53a9.9 9.9 0 0 1-.55 2.09l1.56 1.51-1 1.74-2.1-.6a9.93 9.93 0 0 1-1.52 1.52l.6 2.1-1.74 1-1.51-1.56c-.67.25-1.37.44-2.1.55L83 199h-2l-.53-2.12c-.71-.1-1.42-.3-2.09-.55l-1.51 1.56-1.74-1 .6-2.1a9.93 9.93 0 0 1-1.52-1.52l-2.1.6-1-1.74 1.56-1.51a9.93 9.93 0 0 1-.55-2.1L70 188v-2l2.12-.53c.1-.72.3-1.42.55-2.09l-1.56-1.51 1-1.74 2.1.6c.45-.56.96-1.07 1.52-1.52v-.01zm2.15.94a8.04 8.04 0 0 0-2.74 2.74l-.14.25a7.96 7.96 0 0 0 0 7.74l.14.25a8.04 8.04 0 0 0 2.74 2.74l.25.14a7.96 7.96 0 0 0 7.74 0l.25-.14a8.04 8.04 0 0 0 2.74-2.74l.14-.25a7.96 7.96 0 0 0 0-7.74l-.14-.25a8.04 8.04 0 0 0-2.74-2.74l-.25-.14a7.96 7.96 0 0 0-7.74 0l-.25.14zM82 193a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm278 3.18l-3.8 5.6-7.18-3.51 2.6-8.07a32.15 32.15 0 0 1-3.07-2.46l-7.27 4.35-5.04-6.22 5.82-6.26c-.64-1.13-1.2-2.3-1.7-3.52l-8.45.73-1.8-7.8 7.95-3.07a32.5 32.5 0 0 1 0-3.9l-7.95-3.07 1.8-7.8 8.45.73a31.7 31.7 0 0 1 1.7-3.52l-5.82-6.26 5.04-6.22 7.27 4.35c.97-.88 2-1.7 3.07-2.46l-2.6-8.07 7.19-3.5 3.79 5.59v64.36zm0-3.53v-57.3l-4.46-6.58-4.1 2 2.53 7.87a30.14 30.14 0 0 0-5.13 4.1l-7.08-4.24-2.88 3.55 5.65 6.09a29.87 29.87 0 0 0-2.82 5.86l-8.24-.7-1.03 4.46 7.73 2.99a30.34 30.34 0 0 0 0 6.5l-7.73 3 1.03 4.45 8.24-.7a29.87 29.87 0 0 0 2.82 5.86l-5.65 6.1 2.88 3.54 7.08-4.23a30.14 30.14 0 0 0 5.13 4.09l-2.54 7.86 4.11 2 4.46-6.57zm0-51.57v5.71l-3.56-3.8a24.94 24.94 0 0 1 3.56-1.91zm0 22.68l-14.17 6.64c-2.5-9.5.77-19.57 8.38-25.78l5.79 10.5v8.64zm0 23.16a25.08 25.08 0 0 1-13.32-13.9l13.32-2.55v16.45zm0-43.64l-.39.2.39.4v-.6zm0 18.29v-2.35l-6.3-11.44a22.93 22.93 0 0 0-6.43 19.76l12.73-5.97zm0 23.15v-12.23l-10.47 2.01A23.1 23.1 0 0 0 360 182.72zM0 129.82l1 1.46a31.8 31.8 0 0 1 3.8-.86L6 122h8l1.2 8.42c1.3.21 2.57.5 3.8.86l4.8-7.06 7.18 3.51-2.6 8.07c1.07.76 2.1 1.58 3.07 2.46l7.27-4.35 5.04 6.22-5.82 6.26c.64 1.13 1.2 2.3 1.7 3.52l8.45-.73 1.8 7.8-7.95 3.07c.08 1.3.08 2.6 0 3.9l7.95 3.07-1.8 7.8-8.45-.73a33.5 33.5 0 0 1-1.7 3.52l5.82 6.26-5.04 6.22-7.27-4.35c-.97.88-2 1.7-3.07 2.46l2.6 8.07-7.19 3.5-4.78-7.05c-1.24.36-2.51.65-3.8.86L14 202H6l-1.2-8.42a31.8 31.8 0 0 1-3.8-.86l-1 1.46v-64.36zm0 3.53v57.3l.2-.29c2.02.7 4.15 1.2 6.34 1.44l1.17 8.2h4.58l1.17-8.2c2.2-.25 4.32-.74 6.35-1.44l4.65 6.87 4.1-2-2.53-7.87a30.14 30.14 0 0 0 5.13-4.1l7.08 4.24 2.88-3.55-5.65-6.09c1.14-1.83 2.1-3.8 2.82-5.86l8.24.7 1.03-4.46-7.73-2.99a30.7 30.7 0 0 0 0-6.5l7.73-3-1.03-4.45-8.24.7a29.87 29.87 0 0 0-2.82-5.86l5.65-6.1-2.88-3.54-7.08 4.23a30.14 30.14 0 0 0-5.13-4.09l2.54-7.86-4.11-2-4.65 6.86a29.82 29.82 0 0 0-6.35-1.44l-1.17-8.2H7.7l-1.17 8.2c-2.2.25-4.32.74-6.35 1.44l-.19-.29H0zm34.17 35.05l-16.26-7.62a7.94 7.94 0 0 0-.8-2.44l8.68-15.72a24.95 24.95 0 0 1 8.38 25.78zm-.85 2.63a25.01 25.01 0 0 1-21.94 15.93l2.23-17.82a8.3 8.3 0 0 0 2.07-1.5l17.64 3.39zM0 139.08A24.92 24.92 0 0 1 10 137c5 0 9.65 1.47 13.56 4l-12.28 13.1a8.06 8.06 0 0 0-2.56 0L0 144.8v-5.72zm0 22.68v-8.65l2.88 5.23c-.4.77-.66 1.59-.79 2.44l-2.09.98zm0 23.16v-16.45l4.32-.83c.6.6 1.3 1.11 2.07 1.5l2.23 17.82c-2.97-.16-5.9-.85-8.62-2.04zM10 156a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM0 141.28v.6l9.48 10.13c.35-.02.7-.02 1.04 0l9.87-10.54A22.9 22.9 0 0 0 10 139c-3.58 0-6.98.82-10 2.28zm0 18.29l.34-.16c.09-.34.2-.67.32-.99l-.66-1.2v2.35zm0 23.15c1.97.95 4.1 1.63 6.34 1.99l-1.8-14.33a11.6 11.6 0 0 1-.83-.6l-3.71.7v12.24zm13.66 1.99a23.03 23.03 0 0 0 16.8-12.21l-14.17-2.72c-.27.21-.55.42-.84.6l-1.79 14.33zm19.07-19.17a22.93 22.93 0 0 0-6.42-19.75l-6.97 12.63c.12.32.23.65.32.99l13.07 6.13zM137.54 360l-4.07-5.7 2.83-2.83 6.73 4.8c.7-.56 1.4-1.11 2.14-1.63l-2.9-7.75 3.46-2 5.25 6.38c.82-.37 1.65-.72 2.5-1.03l-.8-8.22 3.86-1.04 3.43 7.52c.88-.15 1.77-.26 2.67-.35L164 340h4l1.36 8.15c.9.09 1.8.2 2.67.35l3.43-7.52 3.86 1.04-.8 8.22c.85.31 1.68.66 2.5 1.03l5.25-6.38 3.46 2-2.9 7.75c.74.52 1.45 1.07 2.14 1.64l6.73-4.8 2.83 2.82-4.07 5.7h-56.92zm2.43 0h52.06l3.9-5.46-.47-.47-6.63 4.73a34.14 34.14 0 0 0-4.4-3.38l2.86-7.63-.58-.33-5.18 6.29a33.79 33.79 0 0 0-5.12-2.13l.78-8.1-.64-.18-3.37 7.42a34.02 34.02 0 0 0-5.5-.72l-1.35-8.04h-.66l-1.34 8.04c-1.88.1-3.72.33-5.5.72l-3.38-7.42-.64.18.78 8.1a33.88 33.88 0 0 0-5.12 2.13l-5.18-6.29-.58.33 2.86 7.63c-1.56 1-3.03 2.14-4.4 3.38l-6.63-4.73-.47.47 3.9 5.46zm9.75 0a28.83 28.83 0 0 1 13.28-4.85V360h-13.28zm32.56 0H169v-4.85c4.9.5 9.42 2.22 13.28 4.85zm-28.66 0H161v-2.54a26.8 26.8 0 0 0-7.38 2.54zm24.76 0a26.8 26.8 0 0 0-7.38-2.54V360h7.38zM358.79 0h-1.21l1.5 3.28a48.3 48.3 0 0 0-5.8 5.8l-9.38-4.3-1.65 2.26 7 7.58a47.84 47.84 0 0 0-3.74 7.33l-10.24-1.2-.86 2.66 8.99 5.05a47.91 47.91 0 0 0-1.28 8.12L332 38.6v2.8l10.12 2.02c.2 2.78.63 5.5 1.28 8.12l-9 5.05.87 2.66 10.24-1.2c1.04 2.54 2.29 5 3.74 7.33l-7 7.58 1.65 2.26 9.38-4.3a48.3 48.3 0 0 0 5.8 5.8l-4.3 9.38 2.26 1.65 2.96-2.73v2.66l-2.84 2.62-4.85-3.52 4.36-9.5a50.31 50.31 0 0 1-3.95-3.95l-9.5 4.36-3.52-4.85 7.08-7.68a49.83 49.83 0 0 1-2.54-4.98l-10.38 1.21-1.85-5.7 9.11-5.12a49.9 49.9 0 0 1-.87-5.52L330 43v-6l10.25-2.05c.19-1.87.48-3.72.87-5.52l-9.11-5.12 1.85-5.7 10.38 1.21c.75-1.71 1.6-3.37 2.54-4.98l-7.08-7.68 3.52-4.85 9.5 4.36a50.31 50.31 0 0 1 3.95-3.95L355.42 0h3.37zM360 52.7l-6.48 3.74A39.86 39.86 0 0 1 350 40a39.9 39.9 0 0 1 3.52-16.44L360 27.3v25.4zm0-39.16v4.52l-2.47-1.43c.77-1.07 1.6-2.1 2.47-3.09zm0 52.92c-.87-.99-1.7-2.02-2.47-3.1l2.47-1.42v4.52zm0-16.07V29.61l-5.5-3.18a37.91 37.91 0 0 0 0 27.14l5.5-3.18zM62.42 360h2.16l3.11-6.78-4.85-3.52-7.68 7.08a49.83 49.83 0 0 0-4.98-2.54l1.21-10.38-5.7-1.85-5.12 9.11a49.9 49.9 0 0 0-5.52-.87L33 340h-6l-2.05 10.25c-1.85.19-3.7.48-5.52.87l-5.12-9.11-5.7 1.85 1.21 10.38c-1.71.75-3.37 1.6-4.98 2.54L0 352.32v5.17-2.5l4.62 4.26a47.84 47.84 0 0 1 7.33-3.74l-1.2-10.24 2.66-.86 5.05 8.99a47.91 47.91 0 0 1 8.12-1.28L28.6 342h2.8l2.02 10.12c2.78.2 5.5.63 8.12 1.28l5.05-9 2.66.87-1.2 10.24c2.54 1.04 5 2.29 7.33 3.74l7.58-7 2.26 1.65-2.8 6.1zM360 244.51l-1.44-.2-.8 1.38 2 2.54.24.17v-3.89zm0 14.45l-4-.4-3.16.66-.28 1.58 2.75 1.7 4.69 1.2v-4.74zm0 13.33l-4.7 1.2-2.74 1.71.28 1.58 3.16.66 4-.4v-4.75zm0 15.31l-.24.17-2 2.54.8 1.38 1.44-.2v-3.89zm0 5.76l-2.57.37-2-3.46 3.33-4.23 1.24-.85v8.17zm0-14.31l-3.65.36-5.27-1.1-.7-3.94 4.58-2.84 5.04-1.3v8.82zm0-13.28l-5.04-1.3-4.58-2.84.7-3.93 5.27-1.1 3.65.35v8.82zm0-14.96l-1.24-.85-3.33-4.23 2-3.46 2.57.37v8.17zm0 101.5V360h-4.58l-3.11-6.78 4.85-3.52 2.84 2.62v-.01zm0 2.67l-2.96-2.73-2.26 1.65 2.8 6.1H360v-5.02z'%3E%3C/path%3E%3C/svg%3E")`,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: "100vh",
    position: 'relative',
    textAlign: 'center',
    overflowX: 'hidden'
  },
  rootin: {
    position: 'absolute',
    marginTop: '8rem',
    width: '80%',
    marginRight: '10%',
    marginLeft: '10%',
    marginBottom: '8rem',
    height: "620px",
    backgroundColor: "#fff",
    border: `1px solid black` // boxShadow: `-7px 6px 39px 0px rgba(0,0,0,0.75)`

  },
  formContainer: {
    width: "100%",
    marginTop: "2rem",
    // marginRight:'17.5%',
    marginLeft: '2rem',
    marginRight: '2rem',
    marginBottom: "2rem"
  },
  userFieled: {
    marginTop: "1rem",
    width: "90%",
    marginRight: "1rem"
  },
  descriptionField: {
    marginTop: "1rem",
    marginBottom: "1rem",
    width: "90%"
  },
  btn: {
    width: "30%",
    marginRight: "37%",
    marginLeft: "33%",
    marginTop: "2rem",
    height: "40px"
  },
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    color: "#fff"
  }
}));

const PostForm = () => {
  const [createPost, {
    data
  }] = Object(react_hooks_["useMutation"])(mutation_createPost);
  const classes = useStyles(); // const [route,setRoute] = useState(false);
  // useEffect(() => {
  //   if(route){
  //     Router.reload();
  //   }
  // });

  const handleDrawerClose = () => {
    router_default.a.push('/dashboard');
  };

  return __jsx(external_formik_["Formik"], {
    initialValues: {
      username: '',
      postTitle: '',
      description: '',
      file: null
    },
    validate: values => {
      console.log('value', values);
      const errors = {};

      if (!values.username) {
        errors.username = '入力必須です';
      }

      if (!values.postTitle) {
        errors.postTitle = '入力必須です';
      }

      if (!values.description) {
        errors.description = '入力必須です';
      }

      return errors;
    },
    onSubmit: async (values, {
      setSubmitting
    }) => {
      try {
        event.preventDefault();
        await createPost({
          variables: {
            postInput: _objectSpread({}, values)
          }
        }), external_react_toastify_["toast"].success('ポストが作成されました');
        router_default.a.push('/dashboard');
        setSubmitting(false);
      } catch (error) {
        external_react_toastify_["toast"].error('サーバーエラーのためデータ送信できませんでした');
      }
    }
  }, ({
    submitForm,
    isSubmitting
  }) => __jsx(external_react_default.a.Fragment, null, __jsx(AppBar_default.a, {
    className: classes.appBar
  }, __jsx(Toolbar_default.a, null, __jsx(IconButton_default.a, {
    edge: "start",
    color: "inherit",
    "aria-label": "close"
  }, __jsx(Close_default.a, {
    onClick: handleDrawerClose
  })), __jsx(Typography_default.a, {
    variant: "h6",
    className: classes.title
  }, "\u30DD\u30B9\u30C8\u306E\u4F5C\u6210"))), __jsx(core_["Grid"], {
    className: classes.root
  }, __jsx(Paper_default.a, {
    className: classes.rootin
  }, __jsx(external_formik_["Form"], {
    className: classes.formContainer
  }, __jsx(core_["Grid"], {
    item: true,
    xs: 12,
    container: true,
    direction: "column"
  }, __jsx(core_["Grid"], {
    item: true,
    xs: true,
    container: true,
    direction: "row"
  }, __jsx(core_["Grid"], {
    item: true,
    xs: 6
  }, __jsx(core_["Grid"], {
    item: true,
    xs: true,
    container: true,
    direction: "row",
    className: classes.userFieled
  }, __jsx(external_formik_["Field"], {
    component: external_formik_material_ui_["TextField"],
    name: "username",
    type: "text",
    label: "Username",
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true
  }), __jsx("br", null), __jsx(external_formik_["Field"], {
    component: external_formik_material_ui_["TextField"],
    name: "postTitle",
    type: "text",
    label: "PostTitle",
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true
  }), __jsx(external_formik_["Field"], {
    component: DropZone["a" /* default */],
    name: "file",
    type: "file",
    label: "Imgae file",
    variant: "outlined",
    margin: "small",
    required: true
  }))), __jsx(core_["Grid"], {
    item: true,
    xs: 6
  }, __jsx(core_["Grid"], {
    item: true,
    xs: true,
    container: true,
    direction: "column",
    className: classes.descriptionField
  }, __jsx(external_formik_["Field"], {
    component: external_formik_material_ui_["TextField"],
    type: "text",
    label: "Description",
    name: "description",
    variant: "outlined",
    margin: "normal",
    multiline: true,
    rows: 16,
    required: true,
    fullWidth: true
  }))), isSubmitting && __jsx(core_["LinearProgress"], null), __jsx("br", null), __jsx(core_["Button"], {
    className: classes.btn,
    variant: "contained",
    color: "primary",
    disabled: isSubmitting,
    onClick: submitForm
  }, "Submit"))))))));
};

/* harmony default export */ var pages_form = __webpack_exports__["default"] = (Object(withApolloData["a" /* withApollo */])({
  ssr: true
})(PostForm));

/***/ }),

/***/ "zwkh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var material_ui_dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mt21");
/* harmony import */ var material_ui_dropzone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_ui_dropzone__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const DropZone = (_ref) => {
  let {
    field: {
      name
    },
    form: {
      setFieldValue
    }
  } = _ref,
      props = _objectWithoutProperties(_ref, ["field", "form"]);

  return __jsx(material_ui_dropzone__WEBPACK_IMPORTED_MODULE_1__["DropzoneArea"], _extends({
    acceptedFiles: ['image/jpeg', 'image/png', 'image/bmp'],
    dropzoneText: "イメージをここに貼り付けて",
    onDrop: ([file]) => {
      setFieldValue(name, file);
    }
  }, props));
};

/* harmony default export */ __webpack_exports__["a"] = (DropZone);

/***/ })

/******/ });