(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"9ONQ":function(e,t,r){"use strict";r.r(t);var n=r("iVi/");function o(e,t){void 0===t&&(t={});var r=function(e){if(e&&"j"===e[0]&&":"===e[1])return e.substr(2);return e}(e);if(function(e,t){return"undefined"===typeof t&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}(r,t.doNotParse))try{return JSON.parse(r)}catch(n){}return e}var i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=function(){function e(e,t){var r=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(e,t){return"string"===typeof e?n.parse(e,t):"object"===typeof e&&null!==e?e:{}}(e,t),new Promise((function(){r.HAS_DOCUMENT_COOKIE="object"===typeof document&&"string"===typeof document.cookie})).catch((function(){}))}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=n.parse(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,r){return void 0===t&&(t={}),this._updateBrowserValues(r),o(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var r={};for(var n in this.cookies)r[n]=o(this.cookies[n],e);return r},e.prototype.set=function(e,t,r){var o;"object"===typeof t&&(t=JSON.stringify(t)),this.cookies=i(i({},this.cookies),((o={})[e]=t,o)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=n.serialize(e,t,r)),this._emitChange({name:e,value:t,options:r})},e.prototype.remove=function(e,t){var r=t=i(i({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=i({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=n.serialize(e,"",r)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}();t.default=a},FpJU:function(e,t,r){"use strict";r.d(t,"a",(function(){return J}));var n=r("o0o1"),o=r.n(n),i=r("HaE+"),a=r("1OyB"),s=r("vuIU");function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=r("U8pU"),p=r("JX7q");function f(e,t){return!t||"object"!==Object(u.a)(t)&&"function"!==typeof t?Object(p.a)(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=r("rePB"),d=r("q1tI"),v=r.n(d),y=r("nOHt"),O=r.n(y),b=r("Ma5Y"),m=r.n(b),g=(r("Ff2n"),r("8Kt/"),r("VX74"),r("K/JX"),r("dMq0"),r("vcXL"),r("p46w"),r("1jQf")),w=r("RRgQ"),j=r("wMyy"),x=r("mrSG"),E=r("b0dj"),S=r("dQau"),k=r("lrf4"),_={http:{includeQuery:!0,includeExtensions:!1},headers:{accept:"*/*","content-type":"application/json"},options:{method:"POST"}},C=function(e,t,r){var n=new Error(r);throw n.name="ServerError",n.response=e,n.statusCode=e.status,n.result=t,n},P=function(e,t){var r;try{r=JSON.stringify(e)}catch(o){var n=new k.a(2);throw n.parseError=o,n}return r},N=function(e){void 0===e&&(e={});var t=e.uri,r=void 0===t?"/graphql":t,n=e.fetch,o=e.includeExtensions,i=e.useGETForQueries,a=Object(x.f)(e,["uri","fetch","includeExtensions","useGETForQueries"]);!function(e){if(!e&&"undefined"===typeof fetch)throw new k.a(1)}(n),n||(n=fetch);var s={http:{includeExtensions:o},options:a.fetchOptions,credentials:a.credentials,headers:a.headers};return new g.a((function(e){var t=function(e,t){return e.getContext().uri||("function"===typeof t?t(e):t||"/graphql")}(e,r),o=e.getContext(),a={};if(o.clientAwareness){var c=o.clientAwareness,u=c.name,p=c.version;u&&(a["apollographql-client-name"]=u),p&&(a["apollographql-client-version"]=p)}var f,l=Object(x.a)({},a,o.headers),h={http:o.http,options:o.fetchOptions,credentials:o.credentials,headers:l},d=function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var o=Object(x.a)({},t.options,{headers:t.headers,credentials:t.credentials}),i=t.http;r.forEach((function(e){o=Object(x.a)({},o,e.options,{headers:Object(x.a)({},o.headers,e.headers)}),e.credentials&&(o.credentials=e.credentials),i=Object(x.a)({},i,e.http)}));var a=e.operationName,s=e.extensions,c=e.variables,u=e.query,p={operationName:a,variables:c};return i.includeExtensions&&(p.extensions=s),i.includeQuery&&(p.query=Object(S.print)(u)),{options:o,body:p}}(e,_,s,h),v=d.options,y=d.body;if(!v.signal){var O=function(){if("undefined"===typeof AbortController)return{controller:!1,signal:!1};var e=new AbortController;return{controller:e,signal:e.signal}}(),b=O.controller,m=O.signal;(f=b)&&(v.signal=m)}if(i&&!e.query.definitions.some((function(e){return"OperationDefinition"===e.kind&&"mutation"===e.operation}))&&(v.method="GET"),"GET"===v.method){var w=function(e,t){var r=[],n=function(e,t){r.push(e+"="+encodeURIComponent(t))};"query"in t&&n("query",t.query);t.operationName&&n("operationName",t.operationName);if(t.variables){var o=void 0;try{o=P(t.variables)}catch(k){return{parseError:k}}n("variables",o)}if(t.extensions){var i=void 0;try{i=P(t.extensions)}catch(k){return{parseError:k}}n("extensions",i)}var a="",s=e,c=e.indexOf("#");-1!==c&&(a=e.substr(c),s=e.substr(0,c));var u=-1===s.indexOf("?")?"?":"&";return{newURI:s+u+r.join("&")+a}}(t,y),j=w.newURI,k=w.parseError;if(k)return Object(g.d)(k);t=j}else try{v.body=P(y)}catch(k){return Object(g.d)(k)}return new E.a((function(r){var o;return n(t,v).then((function(t){return e.setContext({response:t}),t})).then((o=e,function(e){return e.text().then((function(t){try{return JSON.parse(t)}catch(n){var r=n;return r.name="ServerParseError",r.response=e,r.statusCode=e.status,r.bodyText=t,Promise.reject(r)}})).then((function(t){return e.status>=300&&C(e,t,"Response not successful: Received status code "+e.status),Array.isArray(t)||t.hasOwnProperty("data")||t.hasOwnProperty("errors")||C(e,t,"Server response was missing for query '"+(Array.isArray(o)?o.map((function(e){return e.operationName})):o.operationName)+"'."),t}))})).then((function(e){return r.next(e),r.complete(),e})).catch((function(e){"AbortError"!==e.name&&(e.result&&e.result.errors&&e.result.data&&r.next(e.result),r.error(e))})),function(){f&&f.abort()}}))}))};var T=function(e){function t(t){return e.call(this,N(t).request)||this}return Object(x.c)(t,e),t}(g.a);v.a.createElement;var q=null,A=(new g.a((function(e,t){return e.setContext({headers:{authorization:q||null}}),e.authToken=q,t(e)})),new j.a({uri:"wss://excelnz.herokuapp.com/graphql",lazy:!0,options:{reconnect:!0,timeout:3e4}})),I=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,q=t||null,e.abrupt("return",q);case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),U=new T({uri:"http://excelnz.herokuapp.com/graphql",credentials:"same-origin",fetch:!1,fetchOptions:{mode:"cors"}});Object(g.e)((function(e){var t=e.query,r=Object(w.l)(t),n=r.kind,o=r.operation;return"OperationDefinition"===n&&"subscription"===o}),A,U);var D=d.createElement;function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){Object(h.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}var H=function(e){var t=m()(e),r=t.token,n=t.userId;return console.log("logs:",e),e.req&&!r?(e.res.writeHead(307,{Location:"/"}),void e.res.end()):(r||O.a.push("/"),{token:r,userId:n})},J=function(e){var t,r,n;return r=t=function(t){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(n,t);var r=M(n);function n(){return Object(a.a)(this,n),r.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return D(e,this.props)}}],[{key:"getInitialProps",value:function(){var t=Object(i.a)(o.a.mark((function t(r){var n,i,a,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=H(r),i=n.token,a=n.userId,t.next=3,I(i);case 3:if(t.t0=e.getInitialProps,!t.t0){t.next=8;break}return t.next=7,e.getInitialProps(r);case 7:t.t0=t.sent;case 8:return s=t.t0,t.abrupt("return",L(L({},s),{},{token:i,userId:a}));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),n}(d.Component),Object(h.a)(t,"displayName","withAuthSync(".concat((n=e).displayName||n.name||"Component",")")),r}},Ma5Y:function(e,t,r){var n=r("9ONQ");n=n.default||n,e.exports=function(e,t){var r=e.req&&e.req.headers&&e.req.headers.cookie;return new n(r).getAll(t)}},"iVi/":function(e,t,r){"use strict";t.parse=function(e,t){if("string"!==typeof e)throw new TypeError("argument str must be a string");for(var r={},o=t||{},a=e.split(i),c=o.decode||n,u=0;u<a.length;u++){var p=a[u],f=p.indexOf("=");if(!(f<0)){var l=p.substr(0,f).trim(),h=p.substr(++f,p.length).trim();'"'==h[0]&&(h=h.slice(1,-1)),void 0==r[l]&&(r[l]=s(h,c))}}return r},t.serialize=function(e,t,r){var n=r||{},i=n.encode||o;if("function"!==typeof i)throw new TypeError("option encode is invalid");if(!a.test(e))throw new TypeError("argument name is invalid");var s=i(t);if(s&&!a.test(s))throw new TypeError("argument val is invalid");var c=e+"="+s;if(null!=n.maxAge){var u=n.maxAge-0;if(isNaN(u))throw new Error("maxAge should be a Number");c+="; Max-Age="+Math.floor(u)}if(n.domain){if(!a.test(n.domain))throw new TypeError("option domain is invalid");c+="; Domain="+n.domain}if(n.path){if(!a.test(n.path))throw new TypeError("option path is invalid");c+="; Path="+n.path}if(n.expires){if("function"!==typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");c+="; Expires="+n.expires.toUTCString()}n.httpOnly&&(c+="; HttpOnly");n.secure&&(c+="; Secure");if(n.sameSite){switch("string"===typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return c};var n=decodeURIComponent,o=encodeURIComponent,i=/; */,a=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function s(e,t){try{return t(e)}catch(r){return e}}},lrf4:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return a}));var n=r("mrSG"),o=Object.setPrototypeOf,i=void 0===o?function(e,t){return e.__proto__=t,e}:o,a=function(e){function t(r){void 0===r&&(r="Invariant Violation");var n=e.call(this,"number"===typeof r?"Invariant Violation: "+r+" (see https://github.com/apollographql/invariant-packages)":r)||this;return n.framesToPop=1,n.name="Invariant Violation",i(n,t.prototype),n}return Object(n.c)(t,e),t}(Error);function s(e,t){if(!e)throw new a(t)}function c(e){return function(){return console[e].apply(console,arguments)}}!function(e){e.warn=c("warn"),e.error=c("error")}(s||(s={}));var u={env:{}};if("object"===typeof e)u=e;else try{Function("stub","process = stub")(u)}catch(p){}}).call(this,r("8oxB"))},vcXL:function(e,t,r){"use strict";var n=self.fetch.bind(self);e.exports=n,e.exports.default=e.exports}}]);