module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		10: 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react-single-page-navigation"
var external_react_single_page_navigation_ = __webpack_require__("sLs2");
var external_react_single_page_navigation_default = /*#__PURE__*/__webpack_require__.n(external_react_single_page_navigation_);

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__("wmQq");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__("cPsG");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "react-animate-on-scroll"
var external_react_animate_on_scroll_ = __webpack_require__("J8oA");
var external_react_animate_on_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_animate_on_scroll_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./src/components/Carousel.tsx
var __jsx = external_react_default.a.createElement;








const useStyles = Object(styles_["makeStyles"])(theme => ({
  background: {
    backgroundImage: `url("/assets/gallery1.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "64em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("/assets/nature.jpg")`,
      backgroundAttachment: "inherit"
    }
  },
  contactButton: {
    marginTop: "1em",
    marginLeft: "3em",
    border: "2px solid #2930c2",
    borderWidth: 3,
    textTransform: "none",
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "1.5rem",
    height: 80,
    padding: 8,
    marginRight: "8em",
    textDecoration: "none",
    // border: 'none',
    width: 250,
    // borderRadius: 6,
    // boxShadow: '0 3px 5px 2px #2594f5',
    cursor: 'pointer',
    color: '#2930c2',
    backgroundSize: '200%',
    backgroundColor: "#fff",
    transition: 'all 0.3s ease-out',
    '&:hover': {
      backgroundPosition: 'right',
      background: "#2930c2",
      color: '#fff'
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0
    } // fontFamily: "Pacifico",
    // fontSize: "1.5rem",
    // textTransform: "none",
    // color: "white",
    // borderRadius: 50,
    // height: 80,
    // width: 205,
    // backgroundColor: "#ff8c21",
    // marginRight: "8em",
    // marginLeft: "2em",
    // "&:hover": {
    //   backgroundColor: theme.palette.secondary.light
    // },
    // [theme.breakpoints.down("sm")]: {
    //   marginLeft: 0,
    //   marginRight: 0
    // }

  },
  btn: {
    background: "transparent"
  }
}));
function CallToAction() {
  const classes = useStyles();
  const theme = Object(styles_["useTheme"])();
  const matchesSM = useMediaQuery_default()(theme.breakpoints.down("sm"));
  return __jsx(Grid_default.a, {
    container: true,
    alignItems: "center",
    justify: matchesSM ? "center" : "space-between",
    className: classes.background,
    direction: matchesSM ? "column" : "row"
  }, __jsx(Grid_default.a, {
    item: true,
    style: {
      marginLeft: matchesSM ? 0 : "14em",
      textAlign: matchesSM ? "center" : "inherit"
    }
  }, __jsx(Grid_default.a, {
    container: true,
    direction: "column"
  }, __jsx(Grid_default.a, {
    item: true
  }, __jsx(external_react_animate_on_scroll_default.a, {
    animateIn: "bounceInLeft",
    animateOut: "bounceOutRight"
  }, __jsx(Typography_default.a, {
    variant: "h1",
    gutterBottom: true
  }, matchesSM && __jsx("br", null), "\u7559\u5B66\u306E\u3053\u3068\u306A\u3089", __jsx("br", null), __jsx("span", {
    style: {
      color: "#fff"
    }
  }, "\u30A8\u30AF\u30BB\u30EB\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9"), __jsx("br", null), "\u306B\u304A\u4EFB\u305B\u304F\u3060\u3055\u3044")), __jsx(external_react_animate_on_scroll_default.a, {
    animateIn: "bounceInLeft",
    animateOut: "bounceOutRight",
    delay: 800
  }, __jsx(Typography_default.a, {
    variant: "subtitle2",
    gutterBottom: true,
    style: {
      fontSize: matchesSM ? "1.25rem" : "1.5rem"
    }
  }, "\u307E\u305A\u306F\u4E00\u5EA6\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002")), __jsx(Grid_default.a, {
    container: true,
    justify: matchesSM ? "center" : undefined,
    item: true
  })))), __jsx(Grid_default.a, {
    item: true
  }, __jsx(external_react_animate_on_scroll_default.a, {
    animateIn: "fadeIn"
  }, "\u3000", __jsx(link_default.a, {
    href: "/contact"
  }, __jsx(Button_default.a, {
    variant: "contained",
    className: `${classes.btn} ${classes.contactButton}`
  }, "\u304A\u554F\u3044\u5408\u308F\u305B")))));
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/components/Loading.tsx
var Loading = __webpack_require__("Qb08");

// CONCATENATED MODULE: ./src/components/Cards.tsx
var Cards_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Cards_useStyles = Object(styles_["makeStyles"])(theme => Object(styles_["createStyles"])({
  papper: {
    height: "100%",
    maxWidth: '80%',
    margin: "8em 13em 15em 13em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80%",
      marginTop: "3rem",
      marginRight: "10%",
      marginLeft: "10%",
      marginBottom: "3rem"
    }
  },
  card: {
    margin: "3em 2em 3em 2em",
    height: "100%",
    maxHeight: "600px",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,  0, 0, 0.3)",
    border: "2px solid #f5f2eb",
    '&:hover': {
      boxShadow: "0 16px 70px -12.125px rgba(0, 0, 0, 0.3)"
    }
  },
  file: {
    marginRight: "2.5%",
    marginLeft: "2.5%",
    width: "95%",
    height: 160
  },
  switch: {
    marginTop: "5em"
  },
  pagination: {
    width: "100%",
    marginBottom: "3em"
  },
  description: {
    marginTop: "2rem",
    height: "100%",
    maxHeight: "400px"
  },
  box: {
    marginTop: "2rem"
  },
  text: {
    fontSize: "0.5em"
  }
})); // width:"100%"
// maxWidth:"600px"

function SwitchLabels(props) {
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    checkedA: true,
    checkedB: true
  });

  const handleChange = event => {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      [event.target.name]: event.target.checked
    }));
  };

  return Cards_jsx(core_["FormGroup"], {
    row: true
  }, Cards_jsx(core_["FormControlLabel"], {
    control: Cards_jsx(core_["Switch"], {
      onClick: props.toggleSortDate,
      checked: state.checkedA,
      onChange: handleChange,
      name: "checkedA"
    }),
    label: "Secondary"
  }), Cards_jsx(core_["FormControlLabel"], {
    control: Cards_jsx(core_["Switch"], {
      onClick: props.toggleListReverse,
      checked: state.checkedB,
      onChange: handleChange,
      name: "checkedB",
      color: "primary"
    }),
    label: "Primary"
  }));
}

function Cards({
  data,
  error,
  loading
}) {
  const {
    file
  } = Cards_useStyles();
  const classes = Cards_useStyles();
  const router = Object(router_["useRouter"])();
  const [page, setPage] = external_react_default.a.useState(0);
  const [rowsPerPage, setRowsPerPage] = external_react_default.a.useState(2);
  const {
    0: postList,
    1: setPostList
  } = Object(external_react_["useState"])([]);
  const {
    0: isOldestFirst,
    1: setisOldestFirst
  } = Object(external_react_["useState"])(true);
  const [open, setOpen] = external_react_default.a.useState(false);
  const {
    postId
  } = router.query; // const [loading,setLoading] = useState(false)

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }; // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };


  const sortByDate = () => {
    let newPostList = postList;

    if (isOldestFirst) {
      newPostList = postList.sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt));
    } else {
      newPostList = postList.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
    }

    setPostList(newPostList);
    setisOldestFirst(!isOldestFirst);
  };

  const toggleSortDate = () => {
    sortByDate();
  };

  const toggleListReverse = () => {
    let newPostList = postList.reverse();
    setPostList(newPostList);
  };

  Object(external_react_["useEffect"])(() => {
    if (!loading) {
      const postList = data.posts;
      setisOldestFirst(true);
      setPostList(postList);
    } // setLoading(!loading)

  }, [postList]);

  const ReadLimit = ({
    children,
    maxCharacter = 120
  }) => {
    const text = children;
    const resultString = text.slice(0, maxCharacter);
    return Cards_jsx(core_["Typography"], {
      style: {
        fontSize: "1rem"
      }
    }, resultString);
  };

  return Cards_jsx(core_["Paper"], {
    component: core_["Box"],
    style: {
      padding: "15px"
    },
    className: classes.papper,
    elevation: 3
  }, Cards_jsx(core_["Grid"], {
    item: true,
    className: classes.switch
  }, Cards_jsx(core_["Grid"], {
    item: true,
    container: true,
    direction: "row",
    justify: "center",
    lg: true
  }, Cards_jsx(external_react_animate_on_scroll_default.a, {
    animateIn: "fadeIn"
  }, Cards_jsx(core_["Typography"], {
    variant: "h1"
  }, "\u307F\u3093\u306A\u306E\u7559\u5B66\u4F53\u9A13\u8AC7"))), Cards_jsx(core_["Grid"], {
    item: true,
    container: true,
    direction: "row",
    justify: "flex-end",
    md: true
  }, Cards_jsx(SwitchLabels, {
    toggleListReverse: toggleListReverse,
    toggleSortDate: toggleSortDate
  }))), loading ? Cards_jsx(Loading["a" /* default */], null) : Cards_jsx(core_["Grid"], {
    container: true,
    spacing: 3,
    alignItems: "center",
    justify: "space-around"
  }, (rowsPerPage > 0 ? postList && postList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : postList).map(d => Cards_jsx(core_["Grid"], {
    key: d._id,
    item: true,
    className: classes.card,
    container: true,
    direction: "column",
    md: 4
  }, Cards_jsx(external_react_animate_on_scroll_default.a, {
    animateIn: "fadeIn",
    delay: 300
  }, Cards_jsx(core_["Grid"], {
    item: true
  }, Cards_jsx("img", {
    src: d.file,
    className: file,
    alt: ""
  })), Cards_jsx(core_["Grid"], {
    item: true,
    className: classes.description
  }, Cards_jsx(core_["Typography"], {
    variant: "h5",
    gutterBottom: true
  }, d.postTitle)), Cards_jsx(core_["Grid"], {
    item: true
  }, Cards_jsx(ReadLimit, null, d.description)), Cards_jsx(core_["Grid"], {
    className: classes.box,
    item: true,
    container: true,
    direction: "row",
    justify: "space-between"
  }, Cards_jsx(core_["Box"], {
    display: "inline-block"
  }, Cards_jsx(link_default.a, {
    href: `/card/[studentDialog]?studentDialog=${d._id}`,
    as: `/card/${d._id}`
  }, Cards_jsx(core_["Button"], {
    fullWidth: true,
    color: "primary",
    variant: "contained"
  }, "\u3082\u3063\u3068\u8AAD\u3080")))))))), Cards_jsx(core_["TableFooter"], null, Cards_jsx(core_["TableRow"], null, Cards_jsx(core_["TablePagination"], {
    rowsPerPageOptions: [2, 4, 6],
    colSpan: 2,
    count: postList.length,
    rowsPerPage: rowsPerPage,
    page: page,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage
  }))));
}

/* harmony default export */ var components_Cards = (Cards);
// EXTERNAL MODULE: external "@material-ui/core/Stepper"
var Stepper_ = __webpack_require__("UpG9");
var Stepper_default = /*#__PURE__*/__webpack_require__.n(Stepper_);

// EXTERNAL MODULE: external "@material-ui/core/Step"
var Step_ = __webpack_require__("OvFP");
var Step_default = /*#__PURE__*/__webpack_require__.n(Step_);

// EXTERNAL MODULE: external "@material-ui/core/StepLabel"
var StepLabel_ = __webpack_require__("EfMu");
var StepLabel_default = /*#__PURE__*/__webpack_require__.n(StepLabel_);

// CONCATENATED MODULE: ./src/components/StepperFnc.tsx
var StepperFnc_jsx = external_react_default.a.createElement;







const StepperFnc_useStyles = Object(styles_["makeStyles"])(theme => Object(styles_["createStyles"])({
  root: {
    width: '100%'
  },
  backButton: {
    marginRight: theme.spacing(4),
    marginLeft: "1em"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: "black"
  }
}));

function getSteps() {
  return ['お問い合わせ', 'オンライン面談', '留学時期、期間、留学先の決定', '留学事務手続きの開始', '渡航準備、オンラインオリエンテーション'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return '留学までのステップ１　留学内容、費用などの具体的な留学相談';

    case 1:
      return '留学までのステップ２　LINE, FBメッセンジャー、スカイプ等で留学の適性判断';

    case 2:
      return '留学までのステップ３　留学先の学校、期間、時期、費用等を決定';

    case 3:
      return '留学までのステップ４　学校入学、ホームステイ手続きから海外送金のご案内';

    case 4:
      return '留学までのステップ５　渡航手続き航空券の購入、渡航準備（健康診断、ビザ申請）からオンラインによる渡航前オリエンテーション';

    default:
      return 'Unknown stepIndex';
  }
}

function StepperFnc() {
  const classes = StepperFnc_useStyles();
  const [activeStep, setActiveStep] = external_react_default.a.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return StepperFnc_jsx("div", {
    className: classes.root
  }, StepperFnc_jsx(Stepper_default.a, {
    activeStep: activeStep,
    alternativeLabel: true
  }, steps.map(label => StepperFnc_jsx(Step_default.a, {
    key: label
  }, StepperFnc_jsx(StepLabel_default.a, null, label)))), StepperFnc_jsx("div", null, activeStep === steps.length ? StepperFnc_jsx("div", null, StepperFnc_jsx(Typography_default.a, {
    className: classes.instructions
  }, "\u7559\u5B66\u306E\u59CB\u307E\u308A\u3067\u3059", StepperFnc_jsx("img", {
    style: {
      marginTop: "10px",
      width: "28px",
      height: "28px"
    },
    src: '/assets/party.svg'
  })), StepperFnc_jsx(Button_default.a, {
    onClick: handleReset
  }, "\u30EA\u30BB\u30C3\u30C8")) : StepperFnc_jsx("div", {
    style: {
      marginLeft: "3em",
      marginTop: "1em"
    }
  }, StepperFnc_jsx(Typography_default.a, {
    className: classes.instructions
  }, getStepContent(activeStep)), StepperFnc_jsx("div", null, StepperFnc_jsx(Button_default.a, {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.backButton
  }, "\u623B\u308B"), StepperFnc_jsx(Button_default.a, {
    variant: "contained",
    color: "primary",
    onClick: handleNext
  }, activeStep === steps.length - 1 ? '終わり' : '次へ')))));
}
// EXTERNAL MODULE: external "react-lottie"
var external_react_lottie_ = __webpack_require__("iYUx");
var external_react_lottie_default = /*#__PURE__*/__webpack_require__.n(external_react_lottie_);

// EXTERNAL MODULE: ./public/assets/plane.json
var plane = __webpack_require__("31e9");

// EXTERNAL MODULE: ./public/assets/support.json
var support = __webpack_require__("rL3P");

// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__("Y8uC");
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);

// CONCATENATED MODULE: ./src/components/CallAnimation.tsx
var CallAnimation_jsx = external_react_default.a.createElement;










const CallAnimation_useStyles = Object(styles_["makeStyles"])(theme => Object(styles_["createStyles"])({
  // root: {
  //  marginTop:'7em'
  // },   
  animation: {
    maxWidth: "25em",
    // minWidth: "16em",
    marginTop: "2em",
    marginLeft: "12em",
    marginRight: "1em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "35em",
      margin: 0
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "25em",
      marginLeft: "5em",
      margin: 0
    }
  },
  desContainer: {
    height: "42rem",
    [theme.breakpoints.down("md")]: {
      height: "55rem",
      maxWidth: "768px",
      weidth: "100%"
    },
    [theme.breakpoints.down("xs")]: {
      height: "65rem",
      width: "100%",
      maxWidth: "35em"
    }
  },
  textContainer: {
    minWidth: "50em",
    marginTop: "5em",
    marginRight: "10em",
    marginBottom: "5em",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      minWidth: "30em",
      marginLeft: "0.5rem",
      marginRight: "0.5rem",
      marginTop: 0,
      marginBottom: 0
    }
  }
}));
const CallAnimation_defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: support,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const CallAnimation = () => {
  const classes = CallAnimation_useStyles();
  const theme = Object(styles_["useTheme"])();
  const matchesMD = useMediaQuery_default()(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery_default()(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery_default()(theme.breakpoints.down("xs"));
  return CallAnimation_jsx(external_react_default.a.Fragment, null, CallAnimation_jsx(Grid_default.a, {
    item: true
  }, CallAnimation_jsx(Grid_default.a, {
    container: true,
    className: classes.desContainer,
    justify: "space-around",
    alignItems: "center",
    direction: "row"
  }, CallAnimation_jsx(Hidden_default.a, {
    xsDown: true
  }, CallAnimation_jsx(Grid_default.a, {
    sm: true,
    item: true,
    className: classes.animation
  }, CallAnimation_jsx(external_react_animate_on_scroll_default.a, {
    animateIn: "bounceInLeft",
    animateOut: "bounceOutRight"
  }, CallAnimation_jsx(external_react_lottie_default.a, {
    options: CallAnimation_defaultOptions,
    height: "100%",
    width: "100%"
  })))), CallAnimation_jsx(Grid_default.a, {
    sm: true,
    item: true,
    className: classes.textContainer
  }, CallAnimation_jsx(Typography_default.a, {
    variant: "h4",
    align: "center"
  }, CallAnimation_jsx("span", {
    style: {
      marginRight: ".5rem"
    }
  }, "\u25CB"), "ExcelNZ\u7559\u5B66\u30B5\u30DD\u30FC\u30C8\u5185\u5BB9\u306E\u3054\u7D39\u4ECB"), CallAnimation_jsx(Typography_default.a, {
    variant: "h6",
    style: {
      marginLeft: matchesXS ? 0 : "8rem"
    }
  }, "\u73FE\u5730\u30AC\u30FC\u30C7\u30A3\u30A2\u30F3\u30B5\u30DD\u30FC\u30C8\u5185\u5BB9"), CallAnimation_jsx(Typography_default.a, {
    variant: "h6",
    style: {
      marginTop: '35px',
      marginLeft: matchesXS ? 0 : '7em',
      fontSize: "1.3em"
    }
  }, CallAnimation_jsx("span", {
    style: {
      border: "1px solid #0362fc"
    }
  }, "\u7559\u5B66\u624B\u7D9A\u304D\u4EE3\u884C/\u6E21\u822A\u6E96\u5099"), CallAnimation_jsx("span", {
    style: {
      marginLeft: "0.5rem",
      border: "1px solid #0362fc"
    }
  }, "\u5230\u7740\u5F8C"), " \u7A7A\u6E2F\u8FCE\u3048\u3001\u5230\u7740\u5F8C\u306E\u30AA\u30EA\u30A8\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\uFF08\u5B66\u6821\u751F\u6D3B\u3001NZ\u751F\u6D3B\u306B\u3064\u3044\u3066\u3001\u5730\u56F3\u306E\u898B\u65B9\u3001\u30D0\u30B9\u306E\u4E57\u308A\u65B9\u3001\u767B\u4E0B\u6821\u65B9\u6CD5\u306E\u78BA\u8A8D\u3001\u30D0\u30B9\u30AB\u30FC\u30C9\u8CFC\u5165\u3001\u643A\u5E2F\u96FB\u8A71\u306E\u4F7F\u3044\u65B9\u3001\u5B66\u751F\u30D3\u30B6\u7533\u8ACB\u53CA\u3073\u5065\u5EB7\u8A3A\u65AD\uFF08\u5B66\u751F\u30D3\u30B6\u7533\u8ACB\u306E\u5FC5\u8981\u304C\u3042\u308C\u3070\uFF09\u3001\u9280\u884C\u53E3\u5EA7\u958B\u8A2D\u3001\u4E21\u66FF\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u30D0\u30F3\u30AD\u30F3\u30B0\u306E\u8A2D\u5B9A\u3001\u9280\u884C\u53E3\u5EA7\u306E\u8A73\u7D30\u306E\u5831\u544A\uFF09\u3001\u521D\u767B\u6821\u65E5\u3000\u540C\u884C\u3001\u5236\u670D/\u6587\u623F\u5177\u8CFC\u5165\u30B5\u30DD\u30FC\u30C8", CallAnimation_jsx("br", null), CallAnimation_jsx("span", {
    style: {
      border: "1px solid #0362fc",
      marginRight: "0.5rem"
    }
  }, "\u7559\u5B66\u4E2D"), "\u5B66\u6821\u751F\u6D3B\u5168\u822C\u30B5\u30DD\u30FC\u30C8\u3001\u30DB\u30FC\u30E0\u30B9\u30C6\u30A4\u30B5\u30DD\u30FC\u30C8 \u75C5\u6C17\u3001\u602A\u6211\u3001\u4E8B\u6545\u3001\u7DCA\u6025\u707D\u5BB3\u6642\u306E24\u6642\u9593\u5BFE\u5FDC\u3001\u5FC5\u8981\u306A\u6642\u306E\u500B\u5225\u8A2A\u554F \u4FDD\u8B77\u8005\u3078\u8FD1\u6CC1\u5831\u544A\u30EC\u30DD\u30FC\u30C8\uFF08\u6708\u4E00\u56DE\uFF09 \u5B9A\u671F\u7684\u306A\u5B66\u6821\u8A2A\u554F(2\u9031\u9593\u306B\u4E00\u5EA6)\u3001\u5BB6\u5EAD\u8A2A\u554F\uFF081\u5B66\u671F\u307E\u305F\u306F\u5FC5\u8981\u306B\u5FDC\u3058\u3066\uFF09\u3001\u751F\u6D3B\u6307\u5C0E\u3001\u5B66\u7FD2\u6307\u5C0E", CallAnimation_jsx("br", null), "\u5B66\u671F\u306B\u4E00\u5EA6\u306E\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7\u306E\u958B\u50AC\uFF08\u8FD1\u6CC1\u5831\u544A\u3001\u5B66\u7FD2\u30FB\u751F\u6D3B\u30A2\u30C9\u30D0\u30A4\u30B9\u3001\u65E5\u672C\u98DF\u3001\u697D\u3057\u3044\u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3\u30FC\uFF09NCEA\u5BFE\u7B56\u4F1A\u306E\u958B\u50AC \u4F11\u6687\u4E2D\u306E\u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3\u30FC\u3084\u65C5\u884C\u306E\u30A2\u30EC\u30F3\u30B8\u3001\u30B9\u30AD\u30FC\u30C8\u30EA\u30C3\u30D7\u306E\u50AC\u884C\u306A\u3069 \u6210\u7E3E\u8868\u306E\u7FFB\u8A33\u3001\u4E09\u8005\u9762\u8AC7\u540C\u884C\u3001\u75C5\u6C17/\u602A\u6211\u306E\u969B\u306E\u533B\u7642\u6A5F\u95A2\u3078\u306E\u540C\u884C\u3001\u5E30\u56FD\u822A\u7A7A\u5238\u306E\u4E88\u7D04\u53CA\u3073\u65E5\u4ED8\u5909\u66F4\u3001\u6D77\u5916\u65C5\u884C\u4FDD\u967A\u306E\u7533\u8ACB\u4EE3\u884C\u3001 \u5E30\u56FD\u306E\u969B\u306E\u7A7A\u6E2F\u30B5\u30DD\u30FC\u30C8\u3001\u6B21\u5E74\u5EA6\u306E\u5B66\u8CBB\u7B49\u306E\u7D99\u7D9A\u624B\u7D9A\u304D\u30B5\u30DD\u30FC\u30C8\u3001\u5B66\u6821\u3078\u306E\u5404\u7A2E\u652F\u6255\u3044\u306E\u4EE3\u884C\uFF08\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u30D0\u30F3\u30AD\u30F3\u30B0\uFF09\u3001 \u9032\u8DEF\u76F8\u8AC7", CallAnimation_jsx("br", null), CallAnimation_jsx("span", {
    style: {
      border: "1px solid #0362fc",
      marginRight: "0.2rem"
    }
  }, "\u305D\u306E\u4ED6"), "\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u5B66\u6821\u3001\u30DB\u30FC\u30E0\u30B9\u30C6\u30A4\u3001\u4FDD\u8B77\u8005\u3068\u306E\u9023\u7D61\u3092\u53D6\u308A\u306A\u304C\u3089\u3001\u9023\u643A\u3057\u3066\u7559\u5B66\u751F\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002"))), CallAnimation_jsx(Hidden_default.a, {
    mdUp: true
  }, CallAnimation_jsx(Grid_default.a, {
    sm: true,
    item: true,
    className: classes.animation
  }, CallAnimation_jsx(external_react_animate_on_scroll_default.a, {
    animateIn: "bounceInLeft",
    animateOut: "bounceOutRight"
  }, CallAnimation_jsx(external_react_lottie_default.a, {
    options: CallAnimation_defaultOptions,
    height: "100%",
    width: "100%"
  }))))));
};

/* harmony default export */ var components_CallAnimation = (CallAnimation);
// EXTERNAL MODULE: external "react-text-loop"
var external_react_text_loop_ = __webpack_require__("IV1l");
var external_react_text_loop_default = /*#__PURE__*/__webpack_require__.n(external_react_text_loop_);

// CONCATENATED MODULE: ./src/components/Footer.tsx
var Footer_jsx = external_react_default.a.createElement;
 // import Link from "../Link";



 // import { NextPage } from 'next';


const Footer_useStyles = Object(styles_["makeStyles"])(theme => ({
  footer: {
    backgroundColor: "#1546d6",
    // backgroundColor:"#4b89dc",
    width: "100%",
    position: "relative",
    height: "15em"
  },
  mainContainer: {
    position: "absolute"
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none"
  },
  linkStyle: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
    "&:visited": {
      color: "#fff"
    }
  },
  gridItem: {
    margin: "4em"
  },
  icon: {
    height: "3em",
    width: "3em",
    [theme.breakpoints.down("xs")]: {
      height: "2em",
      width: "2em"
    }
  },
  socialContainer: {
    marginTop: "1em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em"
    }
  }
})); // interface IProps {
//   setValue:(value:number)=>void;
//   setSelectedNum:(selectedNum:number)=>void;
// }
//  const Footer:NextPage<IProps>= (props)=>{

const Footer = () => {
  const classes = Footer_useStyles(); //   const [date , setDate] = useState();
  //  const getYear = () =>  setDate(new Date().getFullYear())
  //  useEffect(() => {
  //   getYear();
  // }, [])

  return Footer_jsx("footer", {
    className: classes.footer
  }, Footer_jsx(Hidden_default.a, {
    mdDown: true
  }, Footer_jsx(Grid_default.a, {
    container: true,
    justify: "center",
    className: classes.mainContainer
  }, Footer_jsx(Grid_default.a, {
    item: true,
    className: classes.gridItem
  }, Footer_jsx(Grid_default.a, {
    container: true,
    direction: "column",
    spacing: 2,
    style: {
      margin: 0
    }
  }, Footer_jsx(Grid_default.a, {
    item: true // onClick={() => props.setValue(0)}
    // href="/"
    ,
    className: classes.linkStyle
  }, Footer_jsx(link_default.a, {
    href: "/home"
  }, Footer_jsx("a", {
    style: {
      color: "#fff"
    }
  }, "\u30DB\u30FC\u30E0"))))), Footer_jsx(Grid_default.a, {
    item: true,
    className: classes.gridItem
  }, Footer_jsx(Grid_default.a, {
    container: true,
    direction: "column",
    spacing: 2,
    style: {
      margin: 0
    }
  }, Footer_jsx(Grid_default.a, {
    item: true // onClick={() => props.setValue(0)}
    // href="/"
    ,
    className: classes.link
  }, Footer_jsx(link_default.a, {
    href: "/login"
  }, Footer_jsx("a", {
    style: {
      color: "#fff"
    }
  }, "\u3054\u62C5\u5F53\u8005\u69D8"))))), Footer_jsx(Grid_default.a, {
    item: true,
    className: classes.gridItem
  }, Footer_jsx(Grid_default.a, {
    item: true,
    container: true,
    direction: "column",
    spacing: 2,
    style: {
      margin: 0
    } // component={Link}
    // href="/contact"
    ,
    className: classes.link
  }, Footer_jsx(Grid_default.a, {
    item: true
  }, Footer_jsx(link_default.a, {
    href: "/contact"
  }, Footer_jsx("a", {
    style: {
      color: "#fff"
    }
  }, "\u304A\u554F\u3044\u5408\u308F\u305B"))), Footer_jsx(Grid_default.a, {
    item: true
  }, "nzsuport@gmail.com"), Footer_jsx(Grid_default.a, {
    item: true
  }, "(+64)999-999-99"))), Footer_jsx(Grid_default.a, {
    item: true,
    className: classes.gridItem
  }, Footer_jsx(Grid_default.a, {
    container: true,
    direction: "column",
    spacing: 2,
    style: {
      margin: 0
    }
  }, Footer_jsx(Grid_default.a, {
    item: true,
    className: classes.link
  }, "SNS\u30EA\u30F3\u30AF"), Footer_jsx(Grid_default.a, {
    container: true,
    spacing: 2,
    className: classes.link
  }, Footer_jsx(Grid_default.a, {
    item: true,
    component: "a",
    href: "https://www.facebook.com",
    rel: "noopener noreferrer",
    target: "_blank"
  }, Footer_jsx("img", {
    alt: "facebook logo",
    src: "/assets/facebook.svg",
    className: classes.icon
  })), Footer_jsx(Grid_default.a, {
    item: true,
    component: "a",
    href: "https://www.twitter.com",
    rel: "noopener noreferrer",
    target: "_blank"
  }, Footer_jsx("img", {
    alt: "twitter logo",
    src: "/assets/twitter.svg",
    className: classes.icon
  })), Footer_jsx(Grid_default.a, {
    item: true,
    component: "a",
    href: "https://www.instagram.com",
    rel: "noopener noreferrer",
    target: "_blank"
  }, Footer_jsx("img", {
    alt: "instagram logo",
    src: "/assets/instagram.svg",
    className: classes.icon
  }))))))));
};

/* harmony default export */ var components_Footer = (Footer);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./src/graphql/query/posts.ts

const GET_POSTS = external_graphql_tag_default.a`
  {
    posts {
      _id
      username
      description
      file
      postTitle
    }
  }
`;
/* harmony default export */ var posts = (GET_POSTS);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./src/components/UseStickey.tsx


function useSticky() {
  const {
    0: isSticky,
    1: setSticky
  } = Object(external_react_["useState"])(false);
  const element = Object(external_react_["useRef"])(null);

  const handleScroll = () => {
    if (!element.current) return;

    if (window.scrollY > element.current.getBoundingClientRect().bottom) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const debounce = (func, wait = 80, immediate = true) => {
    let timeOut;
    return () => {
      let context = this,
          args = arguments;

      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };

      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  Object(external_react_["useEffect"])(() => {
    window.addEventListener("scroll", debounce(handleScroll));
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, [debounce, handleScroll]);
  return {
    isSticky,
    element
  };
}

/* harmony default export */ var UseStickey = (useSticky);
// EXTERNAL MODULE: external "react-intersection-observer"
var external_react_intersection_observer_ = __webpack_require__("p1tF");

// CONCATENATED MODULE: ./src/components/PhotoGallery.tsx
var PhotoGallery_jsx = external_react_default.a.createElement;





const PhotoGallery = () => {
  // const { scrollY } = useViewportScroll();
  // const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  // const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const [ref, inView, entry] = Object(external_react_intersection_observer_["useInView"])({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: false
  });
  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0
    },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
  };
  return PhotoGallery_jsx(external_react_default.a.Fragment, null, PhotoGallery_jsx(Hidden_default.a, {
    smDown: true
  }, PhotoGallery_jsx("div", {
    className: "galleryBody"
  }, PhotoGallery_jsx("div", {
    className: "galleryText"
  }, "\u30A8\u30AF\u30BB\u30EBNZ", PhotoGallery_jsx("br", null), "\u30D5\u30A9\u30C8\u30AE\u30E3\u30E9\u30EA\u30FC"), PhotoGallery_jsx("ul", {
    className: "gallery"
  }, PhotoGallery_jsx(external_framer_motion_["motion"].li, {
    animate: inView ? 'visible' : 'hidden',
    variants: variants,
    transition: {
      duration: 1,
      ease: 'easeOut'
    },
    ref: ref,
    className: "gallery__item"
  }, PhotoGallery_jsx("figure", null, PhotoGallery_jsx("a", {
    href: "#"
  }, PhotoGallery_jsx("img", {
    src: "/assets/gallery1.jpg",
    alt: ""
  }), PhotoGallery_jsx("figcaption", null, PhotoGallery_jsx("span", null, "NZ land label"))))), PhotoGallery_jsx(external_framer_motion_["motion"].li, {
    animate: inView ? 'visible' : 'hidden',
    variants: variants,
    transition: {
      duration: 1,
      ease: 'easeOut'
    },
    ref: ref,
    className: "gallery__item"
  }, PhotoGallery_jsx("figure", null, PhotoGallery_jsx("a", {
    href: "#"
  }, PhotoGallery_jsx("img", {
    src: "/assets/gallery2.jpg",
    alt: ""
  }), PhotoGallery_jsx("figcaption", null, PhotoGallery_jsx("span", null, "NZ land label"))))), PhotoGallery_jsx(external_framer_motion_["motion"].li, {
    animate: inView ? 'visible' : 'hidden',
    variants: variants,
    transition: {
      duration: 5,
      ease: 'easeOut'
    },
    ref: ref,
    className: "gallery__item"
  }, PhotoGallery_jsx("figure", null, PhotoGallery_jsx("a", {
    href: "#"
  }, PhotoGallery_jsx("img", {
    src: "/assets/gallery3.jpg",
    alt: ""
  }), PhotoGallery_jsx("figcaption", null, PhotoGallery_jsx("span", null, "NZ land label"))))), PhotoGallery_jsx(external_framer_motion_["motion"].li, {
    animate: inView ? 'visible' : 'hidden',
    variants: variants,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    },
    ref: ref,
    className: "gallery__item"
  }, PhotoGallery_jsx("figure", null, PhotoGallery_jsx("a", {
    href: "#"
  }, PhotoGallery_jsx("img", {
    src: "/assets/gallery4.jpg",
    alt: ""
  }), PhotoGallery_jsx("figcaption", null, PhotoGallery_jsx("span", null, "NZ land label"))))), PhotoGallery_jsx(external_framer_motion_["motion"].li, {
    animate: inView ? 'visible' : 'hidden',
    variants: variants,
    transition: {
      duration: 2.5,
      ease: 'easeOut'
    },
    ref: ref,
    className: "gallery__item"
  }, PhotoGallery_jsx("figure", null, PhotoGallery_jsx("a", {
    href: "#"
  }, PhotoGallery_jsx("img", {
    src: "/assets/gallery5.jpg",
    alt: ""
  }), PhotoGallery_jsx("figcaption", null, PhotoGallery_jsx("span", null, "NZ land label"))))), PhotoGallery_jsx(external_framer_motion_["motion"].li, {
    animate: inView ? 'visible' : 'hidden',
    variants: variants,
    transition: {
      duration: 3.5,
      ease: 'easeOut'
    },
    ref: ref,
    className: "gallery__item"
  }, PhotoGallery_jsx("figure", null, PhotoGallery_jsx("a", {
    href: "#"
  }, PhotoGallery_jsx("img", {
    src: "/assets/gallery6.jpg",
    alt: ""
  }), PhotoGallery_jsx("figcaption", null, PhotoGallery_jsx("span", null, "NZ land label"))))), PhotoGallery_jsx(external_framer_motion_["motion"].li, {
    animate: inView ? 'visible' : 'hidden',
    variants: variants,
    transition: {
      duration: 3.5,
      ease: 'easeOut'
    },
    ref: ref,
    className: "gallery__item"
  }, PhotoGallery_jsx("figure", null, PhotoGallery_jsx("a", {
    href: "#"
  }, PhotoGallery_jsx("img", {
    src: "/assets/gallery7.jpg",
    alt: ""
  }), PhotoGallery_jsx("figcaption", null, PhotoGallery_jsx("span", null, "NZ land label"))))), PhotoGallery_jsx(external_framer_motion_["motion"].li, {
    animate: inView ? 'visible' : 'hidden',
    variants: variants,
    transition: {
      duration: 3,
      ease: 'easeOut'
    },
    ref: ref,
    className: "gallery__item"
  }, PhotoGallery_jsx("figure", null, PhotoGallery_jsx("a", {
    href: "#"
  }, PhotoGallery_jsx("img", {
    src: "/assets/gallery8.jpg",
    alt: ""
  }), PhotoGallery_jsx("figcaption", null, PhotoGallery_jsx("span", null, "NZ land label"))))), PhotoGallery_jsx(external_framer_motion_["motion"].li, {
    animate: inView ? 'visible' : 'hidden',
    variants: variants,
    transition: {
      duration: 3,
      ease: 'easeOut'
    },
    ref: ref,
    className: "gallery__item"
  }, PhotoGallery_jsx("figure", null, PhotoGallery_jsx("a", {
    href: "#"
  }, PhotoGallery_jsx("img", {
    src: "/assets/gallery9.jpg",
    alt: ""
  }), PhotoGallery_jsx("figcaption", null, PhotoGallery_jsx("span", null, "NZ land label")))))))), PhotoGallery_jsx(Hidden_default.a, {
    lgUp: true
  }, PhotoGallery_jsx("div", {
    className: "galleryBody"
  }, PhotoGallery_jsx("ul", {
    className: "gallery"
  }, PhotoGallery_jsx("li", {
    className: "gallery__item"
  }, PhotoGallery_jsx("figure", null, PhotoGallery_jsx("a", {
    href: "#"
  }, PhotoGallery_jsx("img", {
    src: "/assets/gallery1.jpg",
    alt: ""
  }), PhotoGallery_jsx("figcaption", null, PhotoGallery_jsx("span", null, "NZ land label"))))), PhotoGallery_jsx("li", {
    className: "gallery__item"
  }, PhotoGallery_jsx("figure", null, PhotoGallery_jsx("a", {
    href: "#"
  }, PhotoGallery_jsx("img", {
    src: "/assets/gallery2.jpg",
    alt: ""
  }), PhotoGallery_jsx("figcaption", null, PhotoGallery_jsx("span", null, "NZ land label"))))), PhotoGallery_jsx("li", {
    className: "gallery__item"
  }, PhotoGallery_jsx("figure", null, PhotoGallery_jsx("a", {
    href: "#"
  }, PhotoGallery_jsx("img", {
    src: "/assets/gallery3.jpg",
    alt: ""
  }), PhotoGallery_jsx("figcaption", null, PhotoGallery_jsx("span", null, "NZ land label"))))), PhotoGallery_jsx("li", {
    className: "gallery__item"
  }, PhotoGallery_jsx("figure", null, PhotoGallery_jsx("a", {
    href: "#"
  }, PhotoGallery_jsx("img", {
    src: "/assets/gallery4.jpg",
    alt: ""
  }), PhotoGallery_jsx("figcaption", null, PhotoGallery_jsx("span", null, "NZ land label"))))), PhotoGallery_jsx("li", {
    className: "gallery__item"
  }, PhotoGallery_jsx("figure", null, PhotoGallery_jsx("a", {
    href: "#"
  }, PhotoGallery_jsx("img", {
    src: "https://source.unsplash.com/user/brina_blum/800x600",
    alt: ""
  }), PhotoGallery_jsx("figcaption", null, PhotoGallery_jsx("span", null, "NZ land label"))))), PhotoGallery_jsx("li", {
    className: "gallery__item"
  }, PhotoGallery_jsx("figure", null, PhotoGallery_jsx("a", {
    href: "#"
  }, PhotoGallery_jsx("img", {
    src: "https://source.unsplash.com/user/kharaoke/800x600",
    alt: ""
  }), PhotoGallery_jsx("figcaption", null, PhotoGallery_jsx("span", null, "NZ land label"))))), PhotoGallery_jsx("li", {
    className: "gallery__item"
  }, PhotoGallery_jsx("figure", null, PhotoGallery_jsx("a", {
    href: "#"
  }, PhotoGallery_jsx("img", {
    src: "https://source.unsplash.com/user/mikeenerio/800x600",
    alt: ""
  }), PhotoGallery_jsx("figcaption", null, PhotoGallery_jsx("span", null, "NZ land label"))))), PhotoGallery_jsx("li", {
    className: "gallery__item"
  }, PhotoGallery_jsx("figure", null, PhotoGallery_jsx("a", {
    href: "#"
  }, PhotoGallery_jsx("img", {
    src: "https://source.unsplash.com/user/jontyson/800x600",
    alt: ""
  }), PhotoGallery_jsx("figcaption", null, PhotoGallery_jsx("span", null, "NZ land label"))))), PhotoGallery_jsx("li", {
    className: "gallery__item"
  }, PhotoGallery_jsx("figure", null, PhotoGallery_jsx("a", {
    href: "#"
  }, PhotoGallery_jsx("img", {
    src: "https://source.unsplash.com/user/joshkahen/800x600",
    alt: ""
  }), PhotoGallery_jsx("figcaption", null, PhotoGallery_jsx("span", null, "NZ land label")))))))));
};

/* harmony default export */ var components_PhotoGallery = (PhotoGallery);
// EXTERNAL MODULE: ./lib/withApolloData.tsx
var withApolloData = __webpack_require__("vaDH");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// CONCATENATED MODULE: ./src/components/MainPhoto.tsx
var MainPhoto_jsx = external_react_default.a.createElement;


const MainPhoto = () => {
  return MainPhoto_jsx(external_react_default.a.Fragment, null, MainPhoto_jsx("div", null, MainPhoto_jsx("div", {
    className: "pure-g"
  }, MainPhoto_jsx("div", {
    className: "photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"
  }, MainPhoto_jsx("img", {
    src: "/assets/A.jpg",
    alt: "Street"
  }), MainPhoto_jsx("aside", {
    className: "photo-box-caption"
  }, MainPhoto_jsx("span", null, "\u81EA\u5206\u3092\u898B\u3064\u3051\u3088\u3046"))), MainPhoto_jsx("div", {
    className: "text-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"
  }, MainPhoto_jsx("div", {
    className: "l-box"
  }, MainPhoto_jsx("h1", {
    className: "text-box-head"
  }, "\u81EA\u5206\u3092\u898B\u3064\u3051\u3088\u3046\u2212\u3053\u3053\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9\u3067"), MainPhoto_jsx("p", {
    className: "text-box-subhead"
  }, "\u58EE\u5927\u3067\u5305\u5BB9\u529B\u304C\u3042\u308A\u3001\u7F8E\u3057\u304F\u512A\u3057\u3055\u306B\u6EA2\u308C\u308B\u8C4A\u304B\u306A\u81EA\u7136\u3068\u4EBA\u306E\u56FD\u3001\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9\u3067 \u3001\u672C\u5F53\u306E\u81EA\u5206\u3092\u898B\u3064\u3051\u3088\u3046\u3002\u6642\u9593\u304C\u3086\u3063\u304F\u308A\u6D41\u308C\u308B\u7A7A\u9593\u3067\u3001\u4ECA\u307E\u3067\u6C17\u304C\u3064\u304B\u306A\u304B\u3063\u305F\u3053\u3068 \u3001\u898B\u3048\u306A\u304B\u3063\u305F\u666F\u8272\u304C\u5FC5\u305A\u898B\u3064\u304B\u308B\u306F\u305A\u3002\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9\u306F\u3001\u3042\u306A\u305F\u306E\u8A2A\u554F\u3092\u5F85\u3063\u3066 \u3044\u307E\u3059\u3002"))), MainPhoto_jsx("div", {
    className: "photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"
  }, MainPhoto_jsx("img", {
    src: "/assets/B.jpg/",
    alt: "Sheep"
  }), MainPhoto_jsx("aside", {
    className: "photo-box-caption"
  }, MainPhoto_jsx("span", null, "\u4E16\u754C\u5E02\u6C11"))), MainPhoto_jsx("div", {
    className: "text-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"
  }, MainPhoto_jsx("div", {
    className: "l-box"
  }, MainPhoto_jsx("h1", {
    className: "text-box-head"
  }, "\u8F1D\u304F\u500B\u6027\u3001\u4E16\u754C\u306E\u3072\u3068\u308A\u2212\u3053\u3068\u3070\u3067\u7E4B\u304C\u308B\u300C\u4E16\u754C\u5E02\u6C11\u300D"), MainPhoto_jsx("p", {
    className: "text-box-subhead"
  }, "\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9\u306F\u591A\u69D8\u6027\u3092\u5C0A\u91CD\u3057\u3001\u5927\u5207\u306B\u3059\u308B\u56FD\u3002\u4E16\u754C\u306E\u5171\u901A\u8A9E\u3067\u3042\u308B\u300C\u82F1\u8A9E\u300D\u3067 \u305D\u308C\u305E\u308C\u306E\u9055\u3044\u306E\u4E2D\u306B\u3082\u5171\u901A\u306E\u4FA1\u5024\u89B3\u3092\u5171\u6709\u51FA\u6765\u305F\u3089\u3001\u306A\u3093\u3068\u7D20\u6674\u3089\u3057\u3044\u3067\u3057\u3087\u3046\u3002", MainPhoto_jsx("br", null), "\u79C1\u305F\u3061\u306F\u65E5\u672C\u4EBA\u3001\u305D\u3057\u3066\u300C\u4E16\u754C\u5E02\u6C11\u300D\u3002"))), MainPhoto_jsx("div", {
    className: "text-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"
  }, MainPhoto_jsx("div", {
    className: "l-box"
  }, MainPhoto_jsx("h1", {
    className: "text-box-head"
  }, "\u65B0\u3057\u3044\u74B0\u5883\u2212\u65B0\u3057\u3044\u5BB6\u65CF"), MainPhoto_jsx("p", {
    className: "text-box-subhead"
  }, "\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9\u3068\u3044\u3046\u56FD\u3067\u4EBA\u3005\u3068\u306E\u65B0\u3057\u3044\u51FA\u4F1A\u3044\u306F\u3001\u672C\u5F53\u306B\u30EF\u30AF\u30EF\u30AF\u3059\u308B\u3082\u306E\u3067\u3059 \u3002\u7279\u306B\u4E00\u7DD2\u306B\u751F\u6D3B\u3092\u3059\u308B\u30DB\u30B9\u30C8\u30D5\u30A1\u30DF\u30EA\u30FC\u306F\u3001\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9\u306E\u5BB6\u65CF\u3068\u3057\u3066\u3001\u51FA\u4F1A\u3063 \u305F\u305D\u306E\u65E5\u304B\u3089\u3001\u3042\u306A\u305F\u3092\u5BB6\u65CF\u306E\u4E00\u54E1\u3068\u3057\u3066\u3001\u6E29\u304B\u304F\u53D7\u3051\u5165\u308C\u3066\u304F\u308C\u308B\u3053\u3068\u3067\u3057\u3087\u3046\u3002 \u3059\u3079\u3066\u306E\u30DB\u30B9\u30C8\u30D5\u30A1\u30DF\u30EA\u30FC\u306F\u3001\u901A\u5B66\u3059\u308B\u5B66\u6821\u304B\u3089\u6559\u80B2\u7701\u306E\u53B3\u3057\u3044\u57FA\u6E96\u306E\u3082\u3068\u8CAC\u4EFB\u3092\u6301\u3063 \u3066\u7D39\u4ECB\u3055\u308C\u308B\u3054\u5BB6\u5EAD\u3067\u3059\u3002"))), MainPhoto_jsx("div", {
    className: "photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"
  }, MainPhoto_jsx("img", {
    src: "/assets/C.jpg",
    alt: "City"
  }), MainPhoto_jsx("aside", {
    className: "photo-box-caption"
  }, MainPhoto_jsx("span", null, "\u65B0\u3057\u3044\u5BB6\u65CF"))), MainPhoto_jsx("div", {
    className: "text-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"
  }, MainPhoto_jsx("div", {
    className: "l-box"
  }, MainPhoto_jsx("h1", {
    className: "text-box-head"
  }, "\u4E8C\u4EBA\u4E09\u811A\u3001\u4E00\u7DD2\u306B\u672A\u6765\u3092\u5207\u308A\u958B\u3053\u3046"), MainPhoto_jsx("p", {
    className: "text-box-subhead"
  }, "Excel NZ\u306F\u3001\u3042\u306A\u305F\u306E\u7559\u5B66\u3092\u6700\u521D\u304B\u3089\u6700\u5F8C\u307E\u3067\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002\u56F0\u3063\u305F\u3068\u304D\u306E\u8AB0\u304B\u306B\u306A \u308B\u3053\u3068\u4EE5\u4E0A\u306B\u3001\u4EBA\u3068\u4EBA\u306E\u95A2\u4FC2\u4F5C\u308A\u3092\u5927\u5207\u306B\u3057\u3066\u3001\u5171\u306B\u7559\u5B66\u3092\u4E57\u308A\u5207\u308B\u30B5\u30DD\u30FC\u30C8\u3092\u5FC3\u304C\u3051 \u3066\u3044\u307E\u3059\u3002\u4E16\u754C\u3092\u821E\u53F0\u306B\u30B0\u30ED\u30FC\u30D0\u30EB\u793E\u4F1A\u306B\u751F\u304D\u308B\u3042\u306A\u305F\u3092\u5FDC\u63F4\u3057\u307E\u3059\u3002"))), MainPhoto_jsx("div", {
    className: "photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"
  }, MainPhoto_jsx("img", {
    src: "/assets/D.jpg",
    alt: "country"
  }), MainPhoto_jsx("aside", {
    className: "photo-box-caption"
  }, MainPhoto_jsx("span", null, "\u4E8C\u4EBA\u4E09\u811A"))))));
};

/* harmony default export */ var components_MainPhoto = (MainPhoto);
// CONCATENATED MODULE: ./src/components/about.tsx
var about_jsx = external_react_default.a.createElement;







const about_useStyles = Object(styles_["makeStyles"])(theme => ({
  mainContainer: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      padding: 0
    }
  },
  boxContainer: {
    backgroundColor: "#fff",
    padding: "2em",
    marginRight: "1em",
    // boxShadow:`-7px 7px 22px -6px rgba(0,0,0,0.76)`,
    boxShadow: `0 15px 20px -15px rgba(0, 0, 0, 0.3), 0 55px 50px -35px rgba(0, 0, 0, 0.3)`,
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      padding: 0,
      boxShadow: "none"
    }
  },
  boxContainer2: {
    backgroundColor: "#fff",
    padding: "2em",
    //boxShadow:`-7px 7px 22px -6px rgba(0,0,0,0.76)`,
    boxShadow: `0 15px 20px -15px rgba(0, 0, 0, 0.3), 0 55px 50px -35px rgba(0, 0, 0, 0.3)`,
    //web
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      padding: 0,
      boxShadow: "none"
    }
  },
  secondContainer: {
    height: "30em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
      height: "35em"
    },
    [theme.breakpoints.down("xs")]: {
      height: "45em",
      marginTop: "34em"
    }
  },
  galleryContainer: {
    width: "78%",
    marginRight: "12%",
    marginLeft: "10%",
    marginBottom: "1em",
    // marginTop:"2.5rem",
    boxShadow: `0 15px 20px -15px rgba(0, 0, 0, 0.3), 0 55px 50px -35px rgba(0, 0, 0, 0.3)`,
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      width: "100%",
      maxWidth: "31rem",
      boxShadow: "none"
    }
  },
  infoContainer: {
    backgroundColor: "#fff",
    height: "100%",
    minHeight: "25em",
    boxShadow: `0 15px 20px -15px rgba(0, 0, 0, 0.3), 0 55px 50px -35px rgba(0, 0, 0, 0.3)`,
    marginTop: "8em",
    minWidth: "16em",
    marginRight: "10em",
    marginLeft: "14em",
    // marginBottom: "8em",
    // '&::before':{
    //   content: "",
    //   position: "absolute",
    //   width: "85%",
    //   height: "94%",
    //   top: 0,
    //   left: 0,
    //   zIndex:2,
    //   transform:`translate(-9px, -6px)`,
    //   background: "#3F51B5",
    //   opacity:0.7,
    // },
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      padding: 0,
      maxWidth: "31rem",
      width: "100%",
      boxShadow: "none"
    }
  }
}));
function About() {
  const classes = about_useStyles();
  const theme = Object(styles_["useTheme"])();
  const matchesMD = useMediaQuery_default()(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery_default()(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery_default()(theme.breakpoints.down("xs"));
  return about_jsx(Grid_default.a, {
    container: true,
    className: classes.mainContainer,
    direction: "column"
  }, about_jsx(external_react_animate_on_scroll_default.a, {
    animateIn: "bounceInRight",
    animateOut: "bounceOutLeft"
  }, about_jsx(Grid_default.a, {
    item: true
  }, about_jsx(Grid_default.a, {
    container: true,
    className: classes.secondContainer,
    justify: "space-around",
    alignItems: "flex-start",
    direction: "column"
  }, about_jsx(Grid_default.a, {
    sm: true,
    item: true,
    className: classes.infoContainer
  }, about_jsx(Typography_default.a, {
    align: "center",
    style: {
      color: "black",
      marginTop: "2rem",
      marginRight: matchesXS ? 0 : "1rem",
      marginLeft: matchesXS ? 0 : "1rem",
      fontFamily: `Playfair Display, serif`,
      fontSize: "1.35rem"
    }
  }, "\u30A8\u30AF\u30BB\u30EB\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9\u306F"), about_jsx(Typography_default.a, {
    align: "center",
    style: {
      marginTop: ".5rem",
      marginRight: matchesXS ? 0 : "1rem",
      marginLeft: matchesXS ? 0 : "1rem"
    }
  }, about_jsx("span", {
    style: {
      backgroundColor: "#e33509",
      color: "#fff",
      fontFamily: `Playfair Display, serif`,
      fontSize: "2.2rem",
      marginLeft: "0.5rem"
    }
  }, "\u30AD\u30DF\u306E\u30DB\u30F3\u30AD\u3092\u672C\u6C17\u3067\u5FDC\u63F4\u3057\u307E\u3059\uFF01")), about_jsx(Typography_default.a, {
    variant: "h6",
    style: {
      marginTop: '40px',
      marginBottom: '4em',
      marginLeft: "2em",
      marginRight: "2em"
    }
  }, "\u81EA\u7136\u8C4A\u304B\u306A\u7F8E\u3057\u3044\u56FD\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9\u306E\u4E2D\u3067\u3082\u3001\u7279\u306B\u306E\u3069\u304B\u3067\u4E14\u3064\u8FD1\u4EE3\u7684\u306A\u8857\u30AF\u30E9\u30A4\u30B9\u30C8\u30C1\u30E3\u30FC\u30C1\u3067 \u7559\u5B66\u3092\u6210\u529F\u306B\u5C0E\u304F\u7D4C\u9A13\u8C4A\u5BCC\u306A\u30B5\u30DD\u30FC\u30C8\u3068\u81EA\u7ACB\u3068\u81EA\u4FE1\u3092\u80B2\u3066\u308B\u89AA\u8EAB\u306A\u95A2\u308F\u308A\u3067\u3001 \u7559\u5B66\u751F\u306E\u30DB\u30F3\u30AD\u3092\u672C\u6C17\u3067\u5FDC\u63F4\u3057\u307E\u3059\uFF01 \u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9\u3001\u30AF\u30E9\u30A4\u30B9\u30C8\u30C1\u30E3\u30FC\u30C1\u3067\u306E\u3001\u4E2D\u5B66\u3001\u9AD8\u6821\u3001\u5927\u5B66\u3001\u8A9E\u5B66\u5B66\u6821\u3001\u5C02\u9580\u5B66\u6821\u7559\u5B66\u3092\u3001\u6210\u529F\u306B\u5C0E\u304F \u7D4C\u9A13\u8C4A\u5BCC\u306A\u7559\u5B66\u30B5\u30DD\u30FC\u30C8\u3001\u305D\u3057\u3066 \u5165\u5B66\u624B\u7D9A\u304D\u304B\u3089\u3001\u6E21\u822A\u6E96\u5099\u3001\u5230\u7740\u5F8C\u306E\u30AA\u30EA\u30A8\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\u3001\u5B66\u6821\u751F\u6D3B\u3001\u30DB\u30FC\u30E0\u30B9\u30C6\u30A4\u306E\u7559\u5B66\u5168\u822C \u6700\u521D\u304B\u3089\u6700\u5F8C\u307E\u3067\u5B89\u5FC3\u306B\u30B5\u30DD\u30FC\u30C8\u3044\u305F\u3057\u307E\u3059\u3002 \u3054\u6C17\u8EFD\u306B\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002"))))), about_jsx(Grid_default.a, {
    item: true
  }, about_jsx(external_react_animate_on_scroll_default.a, {
    animateIn: "bounceInLeft",
    animateOut: "bounceOutRight",
    delay: 400
  }, about_jsx(Grid_default.a, {
    item: true,
    container: true,
    className: classes.galleryContainer
  }, about_jsx(components_MainPhoto, null)))));
}
// EXTERNAL MODULE: ./src/graphql/query/notices.ts
var notices = __webpack_require__("GTNI");

// EXTERNAL MODULE: ./src/components/ButtonArrow.tsx
var ButtonArrow = __webpack_require__("9wSV");

// EXTERNAL MODULE: ./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js
var scrollAnimation_min = __webpack_require__("NGwb");
var scrollAnimation_min_default = /*#__PURE__*/__webpack_require__.n(scrollAnimation_min);

// CONCATENATED MODULE: ./pages/index.tsx
var pages_jsx = external_react_default.a.createElement;


 // import { debounce } from "lodash";
















 // import ListPost from '../src/components/ListPost'










 // import MainPhoto from '../src/components/MainPhoto'

function ElevationScroll(props) {
  const {
    children
  } = props;
  const trigger = Object(core_["useScrollTrigger"])({
    disableHysteresis: true,
    threshold: 0
  });
  return /*#__PURE__*/external_react_default.a.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const pages_useStyles = Object(styles_["makeStyles"])(theme => Object(styles_["createStyles"])({
  root: {
    marginTop: '7em'
  },
  animation: {
    maxWidth: "25em",
    minWidth: "16em",
    marginTop: "2em",
    marginBottom: "5em",
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      marginLeft: "5rem"
    }
  },
  mainContainer: {
    width: "100%"
  },
  supportContainer: {
    width: "100%",
    height: "45em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
      height: "25em",
      maxWidth: "768px",
      weidth: "100%"
    }
  },
  secondContainer: {
    height: "20em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
      height: "25em"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "4em",
      height: "45em"
    }
  },
  thirdContainer: {
    marginTop: "4em",
    height: "20em",
    weidth: "20em",
    [theme.breakpoints.down("md")]: {
      height: "25em",
      weidth: "100%"
    },
    [theme.breakpoints.down("xs")]: {
      height: "28em",
      weidth: "100%"
    }
  },
  rowContainer: {
    zIndex: 100,
    marginTop: "2.5em",
    paddingTop: "2em",
    paddingLeft: "10em",
    paddingRight: "12.5em",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      marign: 0
    },
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      marign: 0
    }
  },
  boxContainer: {
    backgroundColor: "#fff",
    padding: "2em",
    marginRight: "1em",
    marginBottom: "1rem",
    height: "100%",
    maxHeight: "60rem",
    boxShadow: `-7px 7px 22px -6px rgba(0,0,0,0.76)`,
    [theme.breakpoints.down("md")]: {
      marginBottom: ".5em"
    },
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      boxShadow: "none"
    }
  },
  boxContainer2: {
    backgroundColor: "#fff",
    padding: "2em",
    height: "100%",
    maxHeight: "60rem",
    boxShadow: `-7px 7px 22px -6px rgba(0,0,0,0.76)`,
    [theme.breakpoints.down("md")]: {
      marginBottom: ".5em"
    },
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      boxShadow: "none"
    }
  },
  checkContainer: {
    height: "35rem",
    marginTop: "9rem",
    maxWidth: "80%",
    marginLeft: "10em",
    [theme.breakpoints.down("md")]: {
      height: "45em",
      maxWidth: "768px",
      weidth: "100%",
      marginLeft: 0
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "2rem",
      marginRight: 0,
      marginBottom: "3rem",
      weidth: "100%",
      maxWidth: "31rem"
    }
  },
  titleText: {
    fontSize: "1.7rem",
    marginLeft: "1.4em",
    marginBottom: "2em",
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      fontSize: "1.5rem"
    }
  },
  checkboard: {
    height: "5em",
    marginRight: "3em",
    marginLeft: "3em",
    width: "5rem"
  },
  btn: {
    // -webkit-box-shadow: -4px 6px 5px 0px rgba(0,0,0,0.75);
    // -moz-box-shadow: -4px 6px 5px 0px rgba(0,0,0,0.75);
    // boxShadow: "-2px 3px 1px 2px",
    marginTop: "1em",
    marginLeft: "3em",
    border: "2px solid #2930c2",
    borderWidth: 3,
    textTransform: "none",
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "1.5rem",
    height: 80,
    padding: 8,
    textDecoration: "none",
    // border: 'none',
    width: 250,
    // borderRadius: 6,
    // boxShadow: '0 3px 5px 2px #2594f5',
    cursor: 'pointer',
    color: '#2930c2',
    backgroundSize: '200%',
    backgroundColor: "#fff",
    transition: 'all 0.3s ease-out',
    '&:hover': {
      backgroundPosition: 'right',
      background: "#2930c2",
      color: '#fff'
    } // [theme.breakpoints.down("md")]: {
    //   marginBottom: "2em"
    // }

  },
  btn1: {
    backgroundImage: 'linear-gradient(to left,#03478a, #3498db, #1e8bf7 )'
  },
  desContainer: {
    height: "25rem",
    marginTop: "1em",
    marginLeft: "10em",
    width: "80%",
    [theme.breakpoints.down("md")]: {
      height: "35rem",
      maxWidth: "768px",
      weidth: "100%"
    },
    [theme.breakpoints.down("xs")]: {
      height: "47rem",
      width: "100%",
      margin: 0,
      marginLeft: 0
    }
  },
  textContainer: {
    minWidth: "30em",
    marginRight: "3em",
    maxHeight: "25em",
    [theme.breakpoints.down("md")]: {
      maxHeight: "30em",
      maxWidth: "768px",
      weidth: "100%"
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
      width: "100%"
    }
  },
  // photoContainer: {
  //   height:"70rem",
  //   paddingLeft: "5em",
  //   paddingRight: "5em",
  //   [theme.breakpoints.down("sm")]: {
  //     paddingLeft: "1.5em",
  //     paddingRight: "1.5em"
  //   },
  // },
  bannerContainer: {
    height: "8rem",
    [theme.breakpoints.down("xs")]: {
      height: "6rem"
    }
  },
  bannerContainer2: {
    height: "6.5rem",
    [theme.breakpoints.down("xs")]: {
      height: "3.5rem"
    }
  },
  primaryContainer: {
    height: "100%",
    maxHeight: "157rem",
    paddingTop: "310px",
    paddingBottom: "30px",
    [theme.breakpoints.down("md")]: {
      height: "100%",
      maxHeight: "157rem",
      maxWidth: "768px",
      weidth: "100%"
    },
    [theme.breakpoints.down("xs")]: {
      maxHeight: "355rem",
      height: "100%",
      weidth: "100%",
      maxWidth: "31.5rem",
      marginTop: 0,
      paddingBottom: "6rem",
      paddingTop: 0
    }
  },
  flowContainer: {
    // position:"relative",
    // width:"100%",
    height: "20em",
    width: "83em",
    marginLeft: "3em",
    marginBottom: "5em",
    [theme.breakpoints.down("md")]: {
      height: "30em",
      maxWidth: "768px",
      weidth: "100%",
      marginLeft: 0,
      marginRight: 0
    },
    [theme.breakpoints.down("xs")]: {
      height: "60em",
      marginTop: "1em",
      marginBottom: 0,
      weidth: "100%",
      maxWidth: "31rem"
    }
  },
  flow: {
    marginLeft: "12em",
    width: "60%",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      maxWidth: "768px",
      weidth: "100%"
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: 0
    }
  },
  imageContainer: {
    marginLeft: "10em",
    marginTop: "2em",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      maxWidth: "768px",
      weidth: "100%"
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "3em"
    }
  },
  svg: {
    backgroundColor: "#00b7ff",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='540' height='450' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E")`
  },
  underline: {
    padding: 0,
    backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 0.3em",
    backgroundPosition: "0 88%",
    transition: "background-size 0.25s ease-in",
    '&:hover': {
      backgroundSize: "100% 88%"
    }
  }
}));

const Home = props => {
  const {
    data,
    error,
    loading
  } = Object(react_hooks_["useQuery"])(posts); // console.log('pdata',data)

  const {
    data: dataN,
    loading: loadingN,
    error: errorN
  } = Object(react_hooks_["useQuery"])(notices["a" /* default */]);
  let message = 'Posts';
  const classes = pages_useStyles();
  if (loadingN) message = 'Loading...';
  if (errorN) message = `Error! ${errorN}`;
  if (dataN && dataN.notices.length <= 0) message = 'No Posts';
  console.log('pdata', data);
  const theme = Object(styles_["useTheme"])();
  const matchesMD = useMediaQuery_default()(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery_default()(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery_default()(theme.breakpoints.down("xs"));
  const defaultHeaderClassName = "calsses.main_h";
  const {
    0: headerClassName,
    1: setHeaderClassName
  } = Object(external_react_["useState"])(defaultHeaderClassName);
  const {
    0: color,
    1: setColor
  } = Object(external_react_["useState"])(['red', 'blue', '#00ff00']);
  const {
    0: randomColor,
    1: setRandomColor
  } = Object(external_react_["useState"])(""); // const [visibleSection, setVisibleSection] = useState('');

  const [isOpened, setIsOpened] = external_react_default.a.useState(false);
  const {
    0: status,
    1: setStatus
  } = Object(external_react_["useState"])('close');
  const {
    0: selected,
    1: setSelected
  } = Object(external_react_["useState"])(""); // const [isSticky, setSticky] = useState(false)

  Object(external_react_["useEffect"])(() => {
    setHeaderClassName(`${isOpened ? "open-nav" : ""}`);
  }, [isOpened]);
  Object(external_react_["useEffect"])(() => {
    getColor();
  }, []);

  const getColor = () => {
    const colorItem = color[Math.floor(Math.random() * color.length)];
    setRandomColor(colorItem);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: plane,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }

    return a;
  };

  const words = ["親身に", // "信頼のコミュニケーション",
  // "留学生をサポート",
  "いつでも", "きめ細やかに"];

  const ReadLimit = ({
    children,
    maxCharacter = 200
  }) => {
    const text = children;
    const {
      0: isShrinked,
      1: setIsShrinked
    } = Object(external_react_["useState"])(true); // const resultString = text.slice(0, maxCharacter);

    const resultString = isShrinked ? text.slice(0, maxCharacter) : text;

    function toggleIsShrinked() {
      // e.stopPropagation();
      setIsShrinked(!isShrinked);
    }

    return pages_jsx(core_["Typography"], {
      style: {
        fontSize: "1rem"
      }
    }, resultString, pages_jsx(core_["Button"], {
      style: {
        marginLeft: "0.5rem"
      },
      variant: "outlined",
      onClick: toggleIsShrinked,
      color: "primary"
    }, isShrinked ? "もっと読む" : "縮める"));
  };

  const screens = [{
    index: "section1",
    title: "EXCELNZ",
    color: "#ff0055"
  }, {
    index: "section2",
    title: "留学成功の鍵",
    color: "#1835f5"
  }, {
    index: "section3",
    title: "サポート内容",
    color: "#22cc88"
  }, {
    index: "section4",
    title: "留学適性判断",
    color: "#ffaa00"
  }, {
    index: "section5",
    title: "留学体験談",
    color: "#ff0055"
  }, {
    index: "section6",
    title: "ギャラリー",
    color: "#0099ff"
  }, {
    index: "section7",
    title: "お問い合わせ",
    color: "#7c18f5"
  }];
  const {
    isSticky,
    element
  } = UseStickey();
  return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(ElevationScroll, null, pages_jsx(external_react_single_page_navigation_default.a, {
    elements: {
      section1: {},
      section2: {},
      section3: {},
      section4: {},
      section5: {},
      section6: {},
      section7: {}
    }
  }, ({
    refs,
    goTo,
    activeElement
  }) => pages_jsx(core_["Grid"], {
    container: true,
    direction: "column",
    className: classes.mainContainer
  }, pages_jsx("header", {
    className: `${headerClassName} ${isSticky ? "navbar1 navbar-sticky" : "navbar1"}`,
    ref: element
  }, pages_jsx("div", {
    className: "row"
  }, pages_jsx("a", {
    onClick: () => router_default.a.push('/home'),
    className: "logo",
    href: "#"
  }, pages_jsx("img", {
    src: "/assets/logo.png",
    alt: ""
  })), pages_jsx("div", {
    className: "mobile-wrapper",
    role: "button",
    onClick: () => {
      setStatus(status === 'open' ? 'close' : 'open'), setIsOpened(!isOpened);
    }
  }, pages_jsx("span", {
    className: status
  }), pages_jsx("span", {
    className: status
  }), pages_jsx("span", {
    className: status
  })), pages_jsx("header", null, pages_jsx(external_framer_motion_["AnimateSharedLayout"], null, pages_jsx("nav", null, pages_jsx("ul", {
    style: {
      transform: "translateZ(0)"
    }
  }, screens.map(({
    title,
    color,
    index
  }, i) => pages_jsx(external_framer_motion_["motion"].li, {
    animate: true,
    key: i,
    className: `title ${index === selected || activeElement === index ? "selected" : " "}` // id={`title ${activeElement === index && "selected"}`}
    ,
    style: {
      color: index === selected || activeElement === index ? color : "#333"
    } //@ts-ignore 
    ,
    onClick: () => {
      setSelected(activeElement === index && index), goTo(index);
    }
  }, index === selected && pages_jsx(external_framer_motion_["motion"].a, {
    layoutId: "underline",
    className: "underline",
    style: {
      backgroundColor: color
    }
  }), activeElement === index && pages_jsx(external_framer_motion_["motion"].a, {
    layoutId: "underline",
    className: "underline",
    style: {
      backgroundColor: color
    }
  }), title)))))))), pages_jsx("div", {
    className: "hero"
  }, pages_jsx(scrollAnimation_min_default.a, {
    animateIn: "fadeIn"
  }, pages_jsx("h1", null, pages_jsx("span", null, "\u30A8\u30AF\u30BB\u30EB\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9"), pages_jsx("br", null), pages_jsx("div", {
    className: "reveals-main"
  }, "\u3042\u306A\u305F\u306E\u5927\u5207\u306A\u7559\u5B66\u3092", pages_jsx("div", {
    style: {
      color: randomColor
    }
  }, pages_jsx(external_react_text_loop_default.a, {
    interval: 2000,
    children: shuffle(words)
  })), "\u30B5\u30DD\u30FC\u30C8\u3044\u305F\u3057\u307E\u3059\u3002")), pages_jsx("a", {
    className: "container",
    href: "#"
  }, pages_jsx("span", {
    className: "chevron"
  }), pages_jsx("span", {
    className: "chevron"
  }), pages_jsx("span", {
    className: "chevron"
  }), pages_jsx("span", {
    className: "chevron"
  }), pages_jsx("span", {
    className: "text"
  }, "\u4E0B\u306B\u30C9\u30E9\u30C3\u30AF\u3057\u3066\u307F\u3066")))), pages_jsx("section", {
    className: "news"
  }, pages_jsx("div", {
    className: "news_inner"
  }, pages_jsx("h2", null, pages_jsx("img", {
    src: "/assets/bell.svg",
    style: {
      width: "30px",
      height: "35px",
      paddingRight: "2px"
    }
  }), "\u304A\u77E5\u3089\u305B"), pages_jsx("div", {
    className: "news_box"
  }, loadingN ? pages_jsx(Loading["a" /* default */], null) : dataN && dataN.notices.map(n => pages_jsx("blockquote", null, pages_jsx("dl", null, pages_jsx("dt", null, pages_jsx("time", null, external_moment_default()(n.createdAt).format("YYYY/MM/DD"))), pages_jsx("dd", null, n.body))))))), pages_jsx(core_["Grid"], {
    item: true
  }, pages_jsx(core_["Grid"], {
    item: true,
    container: true,
    direction: "row",
    className: classes.primaryContainer //  style={{ backgroundColor:"#e6e7eb"}}
    ,
    style: {
      background: `linear-gradient( to bottom, #0045ad ,#D5E2F2)`
    } // style={{
    // backgroundImage:`linear-gradient(rgba(36,70,105,.74), rgba(36,70,105,.74)), 
    // url('assets/NZTram.jpg')`,
    // }}

  }, pages_jsx(core_["Grid"], {
    ref: refs.section1
  }, pages_jsx(About, null)), pages_jsx(core_["Grid"], {
    ref: refs.section2
  }, pages_jsx(core_["Grid"], {
    item: true,
    container: true,
    direction: "column",
    className: classes.rowContainer
  }, pages_jsx(scrollAnimation_min_default.a, {
    animateIn: "bounceInRight",
    animateOut: "bounceOutLeft"
  }, pages_jsx(core_["Grid"], {
    item: true,
    className: "talk-bubble tri-right border round btm-left-in",
    style: {
      marginBottom: "1em",
      marginTop: "1em"
    }
  }, pages_jsx(core_["Grid"], {
    item: true,
    container: true,
    className: "talktext"
  }, pages_jsx("p", null, " \xA0\u6B63\u3057\u3044\u7559\u5B66\u6210\u529F\u306E\uFF13\u3064\u306E\u9375\xA0"), pages_jsx("span", null, pages_jsx("img", {
    src: "/assets/key.svg",
    style: {
      height: "30px",
      width: "30px"
    }
  }))))), pages_jsx(core_["Grid"], {
    item: true,
    container: true,
    justify: matchesMD ? "center" : "center"
  }, pages_jsx(core_["Grid"], {
    item: true,
    container: true,
    direction: "column",
    md: true,
    alignItems: matchesMD ? "center" : "center",
    className: classes.boxContainer
  }, pages_jsx(core_["Grid"], {
    item: true
  }, pages_jsx(core_["Typography"], {
    variant: "h5"
  }, "\u2460\u6B63\u3057\u3044\u7559\u5B66\u5148\u3092\u9078\u3076\u2212\u3069\u3046\u3057\u3066\u30AF\u30E9\u30A4\u30B9\u30C8\u30C1\u30E3\u30FC\u30C1\u306A\u306E\uFF1F"), pages_jsx(core_["Grid"], {
    item: true,
    container: true,
    justify: "center",
    style: {
      paddingTop: ".7em"
    }
  }, pages_jsx(scrollAnimation_min_default.a, {
    animateIn: "fadeIn",
    animateOut: "fadeOut"
  }, pages_jsx("img", {
    src: "/assets/earth.svg",
    alt: "choose place for abroad",
    style: {
      maxWidth: matchesMD ? 80 : 100
    }
  })))), pages_jsx(core_["Grid"], {
    item: true,
    style: {
      paddingTop: "2em"
    }
  }, pages_jsx(core_["Typography"], {
    variant: "caption"
  }, pages_jsx(ReadLimit, null, "\u653F\u6CBB\u3001\u6CBB\u5B89\u304C\u5B89\u5B9A\u3057\u3001\u7559\u5B66\u751F\u306B\u5BFE\u3059\u308B\u7406\u89E3\u3068\u30B5\u30DD\u30FC\u30C8\u304C\u5145\u5B9F\u3057\u305F\u56FD\u3001\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9 \u30F3\u30C9\u3002\u4E16\u754C\u521D\u3001\u653F\u5E9C\u306B\u3088\u308B\u300C\u7559\u5B66\u751F\u306E\u751F\u6D3B\u4FDD\u969C\u306B\u95A2\u3059\u308B\u670D\u52D9\u898F\u7A0B\u300D\u304C\u8A2D\u7F6E\u3055\u308C\u3066\u304A \u308A\u3001\u7559\u5B66\u751F\u306E\u5B89\u5168\u3068\u6A29\u5229\u304C\u5B88\u3089\u308C\u3066\u3044\u307E\u3059\u3002\u307E\u305F\u6559\u80B2\u5148\u9032\u56FD\u3068\u3057\u3066\u30012017\u5E74\u30A8\u30B3\u30CE \u30DF\u30B9\u30C8\u82F1\u8A8C\u3067\u306F\u3001\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9\u306F\u672A\u6765\u6559\u80B2\u6307\u6570\uFF08Education Future Skill\uFF09\u4E16 \u754C\uFF11\u4F4D\u306B\u8A55\u4FA1\u3055\u308C\u307E\u3057\u305F\u3002\u4E16\u754C\u30AF\u30E9\u30B9\u306E\u6559\u80B2\u3092\u53D7\u3051\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002 \u305D\u3057\u3066\u3001\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9\u306E\u7B2C\u4E8C\u306E\u90FD\u5E02\u300140\u4E07\u4EBA\u304C\u66AE\u3089\u3059\u30AF\u30E9\u30A4\u30B9\u30C8\u30C1\u30E3\u30FC\u30C1 \u306F\u3001\u30D0\u30B9\u30B7\u30B9\u30C6\u30E0\u304C\u6574\u3063\u3066\u3044\u3066\u3001\u5B66\u6821\u3001\u6587\u5316\u65BD\u8A2D\u3001\u516C\u5171\u65BD\u8A2D\u3001\u516C\u5712\u3084\u30D3\u30FC\u30C1\u3078 \u306E\u30A2\u30AF\u30BB\u30B9\u304C\u7C21\u5358\u3067\u3059\u3002\u90FD\u4F1A\u3067\u3042\u308A\u306A\u304C\u3089\u81EA\u7136\u3092\u611F\u3058\u308B\u3053\u3068\u304C\u51FA\u6765\u308B\u8857\u3001\u591A\u69D8 \u6027\u306B\u67D4\u8EDF\u3067\u4EBA\u3005\u304C\u89AA\u5207\u306A\u8857\u3001\u305D\u308C\u304C\u30AF\u30E9\u30A4\u30B9\u30C8\u30C1\u30E3\u30FC\u30C1\u3067\u3059\u3002 \u3053\u3053\u30AF\u30E9\u30A4\u30B9\u30C8\u30C1\u30E3\u30FC\u30C1\u3067\u3001\u300C\u30A2\u30CA\u30BF\u6D41\u300D\u306E\u7559\u5B66\u3092\u3054\u63D0\u6848\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u307E\u3059 \u3002\uFF08\u53C2\u8003)")))), pages_jsx(core_["Grid"], {
    item: true,
    container: true,
    direction: "column",
    md: true,
    alignItems: matchesMD ? "center" : "center",
    className: classes.boxContainer
  }, pages_jsx(core_["Grid"], {
    item: true
  }, pages_jsx(core_["Typography"], {
    variant: "h5"
  }, "\u2461\u6B63\u3057\u3044\u5B66\u6821\u3092\u9078\u3076\u2212\u500B\u6027\u306B\u5408\u3063\u305F\u5B66\u6821\u9078\u3073"), pages_jsx(core_["Grid"], {
    item: true,
    container: true,
    justify: "center",
    style: {
      paddingTop: "1em"
    }
  }, pages_jsx(scrollAnimation_min_default.a, {
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    delay: 1000
  }, pages_jsx("img", {
    src: "/assets/school.svg",
    alt: "choose school",
    style: {
      maxWidth: matchesMD ? 80 : 100,
      paddingTop: "30px"
    }
  })))), pages_jsx(core_["Grid"], {
    item: true,
    style: {
      paddingTop: "2em"
    }
  }, pages_jsx(core_["Typography"], {
    variant: "caption"
  }, pages_jsx(ReadLimit, null, "\u6B63\u3057\u3044\u5B66\u6821\u3092\u9078\u3076\u2212\u500B\u6027\u306B\u5408\u3063\u305F\u5B66\u6821\u9078\u3073 \u81EA\u5206\u306B\u5408\u3063\u305F\u5B66\u6821\u9078\u3073\u306F\u3001\u7559\u5B66\u74B0\u5883\u306E\u6C7A\u3081\u624B\u3067\u3059\u3002 \u7559\u5B66\u751F\u4E00\u4EBA\u3072\u3068\u308A\u306E\u7279\u6027\u3001\u76EE\u7684/\u30B4\u30FC\u30EB\u306B\u5408\u3063\u305F\u6821\u98A8\u3001\u30AB\u30EA\u30AD\u30E5\u30E9\u30E0\u3092\u8003\u616E\u3057\u3001\u8A71\u3057 \u5408\u3044\u306A\u304C\u3089\u5B66\u6821\u9078\u3073\u3092\u3057\u307E\u3059\u3002 \u4E2D\u9AD8\u6821\u7559\u5B66\u306E\u5834\u5408\u3001\u516C\u7ACB\u3001\u79C1\u7ACB\uFF08\u30DF\u30C3\u30B7\u30E7\u30F3\u7CFB\u3082\u542B\u3080\uFF09\u3001\u5171\u5B66\u3001\u7537\u5B50\u6821\u3001\u5973\u5B50\u6821\u3001\u30A2\u30AB\u30C7\u30DF\u30C3\u30AF\u6821\u3001\u30E9\u30B0\u30D3\u30FC\u5F37\u8C6A\u6821\u3001\u305D\u306E\u4ED6\u30B9\u30DD\u30FC\u30C4\u3084\u97F3\u697D\u306B\u529B\u3092\u5165\u308C\u305F\u5B66\u6821\u304B\u3089\u8003\u616E\u3057\u3066\u9078\u3073\u307E\u3059\u3002 \u307E\u305F\u3001\u5927\u5B66\u3001\u5C02\u9580\u5B66\u6821\u3001\u8A9E\u5B66\u5B66\u6821\u306A\u3069\u3001\u3042\u306A\u305F\u306E\u76EE\u7684/\u30B4\u30FC\u30EB\u3001\u82F1\u8A9E\u529B\u306B\u5408\u3063\u305F\u5B66\u6821\u3092\u3054\u7D39\u4ECB\u3044\u305F\u3057\u307E\u3059\u3002\u5E74\u9F62\u306F\u554F\u3044\u307E\u305B\u3093\u3002\u81EA\u5206\u306B\u5408\u3063\u305F\u5B66\u6821\u304C\u898B\u3064\u304B\u308B\u306F\u305A\u3002 \u5FC5\u8981\u306A\u82F1\u8A9E\u529B\u306F\u3001\u6E21\u822A\u307E\u3067\u306B\u3001\u4E2D\u5B66\u751F\u306F\u82F1\u691C\uFF13\u7D1A\u30EC\u30D9\u30EB\u3001\u9AD8\u6821\u751F\u306F\u6E96\uFF12\u7D1A\u30EC\u30D9\u30EB\u3044\u4EE5\u4E0A\u306E\u82F1\u8A9E\u529B\u304C\u3042\u308B\u3053\u3068\u304C\u671B\u307E\u308C\u307E\u3059\u3002\u8A9E\u5B66\u5B66\u6821\u7559\u5B66\u306F\u3001\u73FE\u6BB5\u968E\u3067\u306E\u82F1\u8A9E\u529B\u304B\u3089\u3001\u7559\u5B66\u3092\u59CB\u3081\u308B\u3053\u3068\u304C\u51FA\u6765\u307E\u3059\u3002\u5927\u5B66\u3001\u5C02\u9580\u5B66\u7559\u5B66\u306B\u304A\u304D\u307E\u3057\u3066\u306F\u3001\u307E\u305A\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002")))), pages_jsx(core_["Grid"], {
    item: true,
    container: true,
    direction: "column",
    md: true,
    alignItems: matchesMD ? "center" : "center",
    justify: "center",
    className: classes.boxContainer2
  }, pages_jsx(core_["Grid"], {
    item: true
  }, pages_jsx(core_["Typography"], {
    variant: "h5"
  }, "\u2462\u6B63\u3057\u3044\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u3092\u9078\u3076\u2212\u3069\u3046\u3057\u3066Excel NZ\u306A\u306E\u304B"), pages_jsx(scrollAnimation_min_default.a, {
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    delay: 2000
  }, pages_jsx(core_["Grid"], {
    item: true,
    container: true,
    justify: "center",
    style: {
      paddingTop: "1em"
    }
  }, pages_jsx("img", {
    src: "/assets/search.svg",
    alt: "search company",
    style: {
      maxWidth: matchesMD ? 80 : 100,
      paddingTop: "30px"
    }
  })))), pages_jsx(core_["Grid"], {
    item: true,
    style: {
      paddingTop: "2em"
    }
  }, pages_jsx(core_["Typography"], {
    variant: "caption"
  }, pages_jsx(ReadLimit, null, "\u4E00\u8A00\u306B\u7559\u5B66\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u3068\u8A00\u3063\u3066\u3082\u3001\u30B5\u30FC\u30D3\u30B9/\u696D\u52D9\u5185\u5BB9\u3001\u6599\u91D1\u4F53\u5236\u3082\u69D8\u3005\u3067\u3059\u3002 Excel NZ\u306E\u4E3B\u306A\u30B5\u30FC\u30D3\u30B9/\u696D\u52D9\u5185\u5BB9\u306F\u3001\u73FE\u5730\u30AC\u30FC\u30C7\u30A3\u30A2\u30F3\u30B5\u30DD\u30FC\u30C8\u696D\u52D9\u3067\u3059\u3002\u30AC\u30FC\u30C7\u30A3\u30A2\u30F3\u3068 \u306F\u3001\u8EAB\u5143\u5F15\u53D7\u4EBA\u306E\u3053\u3068\u3067\u3059\u3002\u7559\u5B66\u751F\u306E\u77E2\u9762\u306B\u7ACB\u3064\u5B58\u5728\u3067\u3059\u3002 \u72EC\u81EA\u306E\u30AA\u30EA\u30A8\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\u3084\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u6301\u3061\u3001\u82F1\u8A9E\u306E\u7FD2\u5F97\u53CA\u3073\u30B3\u30DF\u30E5\u30B1\u30FC \u30B7\u30E7\u30F3\u529B\u306E\u5411\u4E0A\u306E\u307F\u306B\u7559\u307E\u3089\u305A\u3001\u4EBA\u3068\u3057\u3066\u81EA\u4FE1\u3068\u30B0\u30ED\u30FC\u30D0\u30EB\u306A\u8996\u91CE\u3092\u6301\u3061\u3001\u56FD\u5883\u3092\u8D85\u3048\u305F\u4E16 \u754C\u3092\u821E\u53F0\u306B\u751F\u304D\u308B\u529B\u3001\u4EBA\u9593\u6027\u3092\u80B2\u3080\u30B5\u30DD\u30FC\u30C8\u3092\u76EE\u6307\u3057\u307E\u3059\u3002Excel NZ\u306F\u3001\u4E00\u4EBA\u3072\u3068\u308A\u306E\u7559 \u5B66\u3092\u3001\u73FE\u5730\u30AF\u30E9\u30A4\u30B9\u30C8\u30C1\u30E3\u30FC\u30C1\u3067\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002\u307E\u305F\u7559\u5B66\u751F\u3001\u4FDD\u8B77\u8005\u3001\u5B66\u6821\u3068\u3001\u3057\u3063\u304B\u308A \u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u53D6\u308A\u306A\u304C\u3089\u3001\u6559\u80B2\u7684\u914D\u616E\u3092\u6301\u3063\u3066\u7559\u5B66\u751F\u306B\u95A2\u308F\u3063\u3066\u3044\u304D\u307E\u3059\u3002 Excel NZ\u306E\u30E2\u30C3\u30C8\u30FC\u306F\u3001\u300C\u3082\u3057\u3001\u81EA\u5206\u306E\u5B50\u4F9B\u304C\u7559\u5B66\u3092\u3057\u3066\u3001\u3053\u3093\u306A\u5927\u4EBA\u304C\u8EAB\u8FD1\u306B\u3044\u3066\u6B32\u3057\u3044 \u3001\u3068\u3044\u3046\u5927\u4EBA\u3067\u3044\u308B\u300D\u3068\u3044\u3046\u3053\u3068\u3002\u52B1\u307E\u3057\u3001\u6559\u3048\u3001\u5C0E\u304D\u3001\u6642\u306B\u306F\u53F1\u308A\u3001\u6642\u306B\u306F\u7518\u3084\u304B\u3059\u3001\u696D \u52D9\u5185\u5BB9\u306B\u73FE\u308C\u306A\u3044\u300C\u4FE1\u983C\u51FA\u6765\u308B\u4EBA\u300D\u3067\u3042\u308B\u3053\u3068\u3092\u304A\u7D04\u675F\u3044\u305F\u3057\u307E\u3059\u3002"))))))))), pages_jsx(core_["Grid"], {
    item: true,
    ref: refs.section3
  }, pages_jsx(core_["Grid"], {
    container: true,
    className: classes.desContainer,
    justify: "flex-start",
    alignItems: "center",
    direction: "row"
  }, pages_jsx(core_["Grid"], {
    sm: true,
    item: true,
    className: classes.textContainer
  }, pages_jsx(core_["Typography"], {
    variant: "h3"
  }, pages_jsx("span", {
    style: {
      color: "#4981eb",
      marginRight: matchesXS ? 0 : ".5rem"
    }
  }, "\u25A0"), "Excel NZ\u306E\u4E3B\u306A\u3054\u63D0\u4F9B\u30B5\u30FC\u30D3\u30B9"), pages_jsx(core_["Typography"], {
    variant: "h6",
    style: {
      marginTop: '20px',
      marginLeft: matchesXS ? "1rem" : "2rem"
    }
  }, pages_jsx("br", null), "\u2212\u4E2D\u5B66\u3001\u9AD8\u6821\u751F\u6B63\u898F\u7559\u5B66\u6848\u5185\u3001\u53CA\u3073\u73FE\u5730\u7559\u5B66\u30B5\u30DD\u30FC\u30C8", pages_jsx("br", null), "\u2212\u82F1\u8A9E\u7FD2\u5F97\u306E\u70BA\u306E\u8A9E\u5B66\u7559\u5B66\u6848\u5185\u3001\u53CA\u3073\u73FE\u5730\u7559\u5B66\u30B5\u30DD\u30FC\u30C8", pages_jsx("br", null), "\u2212\u9AD8\u6821\u5352\u696D\u5F8C\u3001\u9032\u8DEF\u3068\u3057\u3066\u306E\u5927\u5B66\u3001\u5404\u7A2E\u5C02\u9580\u5B66\u6821\u306E\u7559\u5B66\u6848\u5185\u3001\u53CA\u3073", pages_jsx("br", null), "\u73FE\u5730\u7559\u5B66\u30B5\u30DD\u30FC\u30C8 \u30FB\u305D\u306E\u4ED6\u30B5\u30FC\u30D3\u30B9", pages_jsx("br", null), "\u2212\u7121\u6599\u5404\u7A2E\u5B66\u6821\u7533\u3057\u8FBC\u307F\u4EE3\u884C\u3001\u6D77\u5916\u65C5\u884C\u4FDD\u967A\u52A0\u5165\u4EE3\u884C")), pages_jsx(scrollAnimation_min_default.a, {
    animateIn: "bounceInLeft",
    animateOut: "bounceOutRight"
  }, pages_jsx(core_["Grid"], {
    sm: true,
    item: true,
    className: classes.animation
  }, pages_jsx(external_react_lottie_default.a, {
    options: defaultOptions,
    height: "100%",
    width: "100%"
  }))))), pages_jsx(components_CallAnimation, null), pages_jsx(core_["Grid"], {
    item: true,
    ref: refs.section4
  }, pages_jsx(core_["Grid"], {
    item: true
  }, pages_jsx(core_["Grid"], {
    item: true,
    container: true,
    className: classes.supportContainer
  }, pages_jsx(core_["Grid"], {
    container: true,
    className: classes.checkContainer
  }, pages_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: classes.titleText
  }, pages_jsx(core_["Typography"], {
    variant: "h3"
  }, pages_jsx("span", {
    style: {
      color: "#4981eb",
      marginRight: ".5rem"
    }
  }, " \u25A0 "), "1\u3064\u3067\u3082\u5F53\u3066\u306F\u307E\u3063\u305F\u4EBA\u306F \u4ECA\u3059\u3050\u76F8\u8AC7")), pages_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    container: true
  }, pages_jsx(core_["Grid"], {
    item: true,
    xs: true,
    container: true,
    direction: "column"
  }, pages_jsx(Hidden_default.a, {
    xsDown: true
  }, pages_jsx(core_["Grid"], {
    item: true,
    className: classes.checkboard,
    xs: 1
  }, pages_jsx(scrollAnimation_min_default.a, {
    animateIn: "flipInY",
    animateOut: "flipOutY"
  }, pages_jsx("img", {
    src: "/assets/clipboard.svg",
    style: {
      height: "6rem",
      width: "6rem"
    },
    alt: "clip"
  })))), pages_jsx(core_["Grid"], {
    item: true,
    xs: 11
  }, pages_jsx(core_["Grid"], {
    item: true,
    xs: true,
    container: true,
    direction: "column"
  }, pages_jsx(core_["Grid"], {
    item: true,
    xs: 12
  }, pages_jsx(core_["Grid"], {
    item: true,
    xs: true,
    container: true,
    direction: "row"
  }, pages_jsx(core_["Grid"], {
    item: true,
    xs: 1
  }, pages_jsx(scrollAnimation_min_default.a, {
    animateIn: "bounceInLeft",
    animateOut: "bounceOutRight"
  }, pages_jsx("img", {
    src: "/assets/checkmark.svg",
    style: {
      height: matchesXS ? "2.5rem" : "3rem",
      width: matchesXS ? "2.5rem" : "3rem"
    },
    alt: "clip"
  }))), pages_jsx(core_["Grid"], {
    item: true,
    xs: 11,
    style: {
      fontSize: matchesXS ? "1.2rem" : "1.3em"
    }
  }, "\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9\u306B\u8208\u5473\u304C\u3042\u308A\u3001\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9\u306B\u7559\u5B66\u3057\u3066\u307F\u305F\u3044\u3002"))), pages_jsx(core_["Grid"], {
    item: true,
    xs: 12
  }, pages_jsx(core_["Grid"], {
    item: true,
    xs: true,
    container: true,
    direction: "row"
  }, pages_jsx(core_["Grid"], {
    item: true,
    xs: 1
  }, pages_jsx(scrollAnimation_min_default.a, {
    animateIn: "bounceInRight",
    animateOut: "bounceOutLeft"
  }, pages_jsx("img", {
    src: "/assets/checkmark.svg",
    style: {
      height: matchesXS ? "2.5rem" : "3rem",
      width: matchesXS ? "2.5rem" : "3rem"
    },
    alt: "clip"
  }))), pages_jsx(core_["Grid"], {
    item: true,
    xs: 11,
    style: {
      fontSize: matchesXS ? "1.2rem" : "1.3em"
    }
  }, "\u7559\u5B66\u3092\u901A\u3057\u3066\u3001\u3044\u308D\u3093\u306A\u3053\u3068\u306B\u6311\u6226\u3057\u3066\u307F\u305F\u3044\u3002"))), pages_jsx(core_["Grid"], {
    item: true,
    xs: 12
  }, pages_jsx(core_["Grid"], {
    item: true,
    xs: true,
    container: true,
    direction: "row"
  }, pages_jsx(core_["Grid"], {
    item: true,
    xs: 1
  }, pages_jsx(scrollAnimation_min_default.a, {
    animateIn: "bounceInLeft",
    animateOut: "bounceOutRight"
  }, pages_jsx("img", {
    src: "/assets/checkmark.svg",
    style: {
      height: matchesXS ? "2.5rem" : "3rem",
      width: matchesXS ? "2.5rem" : "3rem"
    },
    alt: "clip"
  }))), pages_jsx(core_["Grid"], {
    item: true,
    xs: 11,
    style: {
      fontSize: matchesXS ? "1.2rem" : "1.3em"
    }
  }, "\u7559\u5B66\u3092\u901A\u3057\u3066\u3001\u82F1\u8A9E\u3068\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u529B\u3092\u8EAB\u306B\u3064\u3051\u305F\u3044\u3002"))), pages_jsx(core_["Grid"], {
    item: true,
    xs: 12
  }, pages_jsx(core_["Grid"], {
    item: true,
    xs: true,
    container: true,
    direction: "row"
  }, pages_jsx(core_["Grid"], {
    item: true,
    xs: 1
  }, pages_jsx(scrollAnimation_min_default.a, {
    animateIn: "bounceInRight",
    animateOut: "bounceOutLeft"
  }, pages_jsx("img", {
    src: "/assets/checkmark.svg",
    style: {
      height: matchesXS ? "2.5rem" : "3rem",
      width: matchesXS ? "2.5rem" : "3rem"
    },
    alt: "clip"
  }))), pages_jsx(core_["Grid"], {
    item: true,
    xs: 11,
    style: {
      fontSize: matchesXS ? "1.2rem" : "1.3em"
    }
  }, "\u7559\u5B66\u3092\u901A\u3057\u3066\u3001\u591A\u69D8\u6027\u3092\u808C\u3067\u611F\u3058\u3001\u30B0\u30ED\u30FC\u30D0\u30EB\u306A\u611F\u899A\u3092\u898B\u306B\u3064\u3051\u3066", pages_jsx("br", null), "\u4EBA\u3068\u3057\u3066\u5927\u304D\u304F\u6210\u9577\u3057\u305F\u3044\u3002"))))), pages_jsx(Hidden_default.a, {
    mdDown: true
  }, pages_jsx(scrollAnimation_min_default.a, {
    animateIn: "fadeIn",
    delay: 500
  }, "\u3000", pages_jsx(link_default.a, {
    href: "/contact"
  }, pages_jsx(core_["Button"], {
    variant: "contained",
    className: classes.btn
  }, pages_jsx("span", {
    style: {
      marginRight: 3
    }
  }, "\u304A\u554F\u3044\u5408\u308F\u305B"), pages_jsx(ButtonArrow["a" /* default */], {
    width: 35,
    height: 35,
    fill: "#fff"
  }))))))))))), pages_jsx(core_["Grid"], {
    item: true
  }, pages_jsx(core_["Grid"], {
    container: true,
    justify: "space-around",
    className: classes.flowContainer,
    alignItems: matchesXS ? "center" : "flex-start",
    direction: "column"
  }, pages_jsx(core_["Grid"], {
    sm: true,
    item: true,
    className: classes.imageContainer
  }, pages_jsx(scrollAnimation_min_default.a, {
    animateIn: "bounceInLeft",
    animateOut: "bounceOutRight"
  }, pages_jsx("img", {
    src: "/assets/preparation.jpg",
    style: {
      height: "200px",
      width: "300px",
      overflow: "hidden",
      borderRadius: "90%"
    },
    alt: "image prepare"
  }))), pages_jsx(core_["Grid"], {
    sm: true,
    item: true,
    className: classes.flow
  }, pages_jsx(core_["Typography"], {
    variant: "h4",
    align: "left"
  }, pages_jsx("span", {
    style: {
      marginRight: ".5rem"
    }
  }, "\u25CB"), "\u3054\u6E21\u822A\u307E\u3067\u306E\u6D41\u308C"), pages_jsx(StepperFnc, null)))), pages_jsx(core_["Grid"], {
    item: true,
    container: true,
    direction: "column",
    className: classes.bannerContainer,
    justify: "center",
    style: {
      backgroundColor: "#2b0aad"
    }
  }), pages_jsx(core_["Grid"], {
    item: true,
    ref: refs.section5,
    className: classes.svg
  }, pages_jsx(components_Cards, {
    data: data,
    error: error,
    loading: loading
  })), pages_jsx(core_["Grid"], {
    item: true,
    ref: refs.section6
  }, pages_jsx(components_PhotoGallery, null)), pages_jsx(core_["Grid"], {
    item: true,
    container: true,
    direction: "column",
    className: classes.bannerContainer,
    justify: "center",
    style: {
      backgroundColor: "#2b0aad"
    }
  }), pages_jsx(core_["Grid"], {
    item: true,
    ref: refs.section7
  }, pages_jsx(CallToAction, null)), pages_jsx(core_["Grid"], {
    item: true
  }, pages_jsx(components_Footer, null))))));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(withApolloData["a" /* withApollo */])({
  ssr: true
})(Home));

/***/ }),

/***/ "2D7x":
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
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('token', authToken, {
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
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('token');
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

/***/ "2Hsl":
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ "31e9":
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.6.2\",\"fr\":25,\"ip\":0,\"op\":103,\"w\":480,\"h\":480,\"nm\":\"Plane\",\"ddd\":0,\"assets\":[{\"id\":\"comp_0\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Wing FG\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":57,\"s\":[225.975,237.21,0],\"to\":[0,-2.333,0],\"ti\":[0,2.333,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":76,\"s\":[225.975,223.21,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":81,\"s\":[225.975,223.21,0],\"to\":[0,2.333,0],\"ti\":[0,-2.333,0]},{\"t\":96,\"s\":[225.975,237.21,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[84.412,12.84,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":32,\"s\":[1,1,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":36,\"s\":[113,113,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":38,\"s\":[93,93,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":39,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":57,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":76,\"s\":[100,-100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":81,\"s\":[100,-100,100]},{\"t\":96,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[71.912,-34.34],[-28.769,34.34],[-71.912,34.34],[-23.296,-34.34]],\"c\":false},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.209387865254,0.209387835334,0.209387850294,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.981041941923,0.904883530561,0.63951439951,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fond 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[84.412,46.84],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":32,\"op\":102,\"st\":-14,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Trainée BG\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":32,\"s\":[0]},{\"t\":37,\"s\":[100]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-33.013,80.179,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[25.409,2,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[2,2],[48.817,2]],\"c\":false},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.209387865254,0.209387835334,0.209387850294,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[2,2],[48.817,2]],\"c\":true},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.981041941923,0.904883530561,0.63951439951,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fond 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":37,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":44,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":50,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":51,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":58,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":64,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":65,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":71,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":77,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":78,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":85,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":91,\"s\":[0]},{\"t\":92,\"s\":[100]}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":37,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":50,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":51,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":64,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":65,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":77,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":78,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":91,\"s\":[0]},{\"t\":92,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":3,\"nm\":\"Réduire les tracés 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":31,\"op\":102,\"st\":-14,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Avion Lignes\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[252.834,206.479,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[197.249,58.665,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-20.259,0],[0,6.443],[21.272,0],[0,0],[11.505,7.515],[-1.012,-6.841],[-4.218,-8.537]],\"o\":[[0,0],[20.253,0],[0,-6.446],[0,0],[-16.205,0],[-4.265,-2.784],[0.799,5.359],[5.721,11.581]],\"v\":[[-146.998,43.665],[127.689,42.943],[182.249,19.003],[128.702,-5.676],[-114.392,-5.676],[-160.939,-34.894],[-181.237,-36.824],[-166.299,32.084]],\"c\":true},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.209387865254,0.209387835334,0.209387850294,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":6,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[197.249,58.665],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":14,\"s\":[0]},{\"t\":34,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Réduire les tracés 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":14,\"op\":102,\"st\":-14,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":0,\"nm\":\"Hublots et ligne J\",\"refId\":\"comp_1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":57,\"s\":[240,240,0],\"to\":[0,-2.333,0],\"ti\":[0,2.333,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":76,\"s\":[240,226,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":81,\"s\":[240,226,0],\"to\":[0,2.333,0],\"ti\":[0,-2.333,0]},{\"t\":96,\"s\":[240,240,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[240,240,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"w\":480,\"h\":480,\"ip\":0,\"op\":105,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Ligne R1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[88.626,191.837,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[13.166,15.833,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[9.167,-11.834],[-9.167,11.834]],\"c\":false},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.826309922162,0.322295394598,0.199811703551,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":8,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[13.166,15.833],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":34,\"s\":[100]},{\"t\":39,\"s\":[0]}],\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Réduire les tracés 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":34,\"op\":102,\"st\":-14,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"Ligne R2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[95.878,207.362,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[16.394,21.418,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[12.394,-17.418],[-12.394,17.418]],\"c\":false},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.826309922162,0.322295394598,0.199811703551,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":8,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[16.394,21.418],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":32,\"s\":[100]},{\"t\":37,\"s\":[0]}],\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Réduire les tracés 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":32,\"op\":102,\"st\":-14,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"Avion Fond\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":14,\"s\":[0]},{\"t\":34,\"s\":[100]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[251.312,207.522,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[182.5,43.553,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-3.036,-5.062],[-20.259,0],[0,6.443],[21.271,0],[0,0],[11.506,7.514],[-1.012,-6.84]],\"o\":[[0,0],[20.254,0],[0,-6.446],[0,0],[-16.205,0],[-4.265,-2.785],[1.02,6.84]],\"v\":[[-158.466,39.389],[127.689,43.304],[182.25,19.364],[128.702,-5.316],[-114.393,-5.316],[-160.94,-34.533],[-181.238,-36.463]],\"c\":true},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.981041941923,0.904883530561,0.63951439951,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fond 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[182.5,43.554],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":11,\"op\":102,\"st\":-14,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":4,\"nm\":\"Wing back\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":57,\"s\":[202.929,211.945,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":76,\"s\":[202.929,244.945,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":81,\"s\":[202.929,244.945,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"t\":96,\"s\":[202.929,211.945,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[58.867,48.027,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":38,\"s\":[0,0,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":42,\"s\":[113,113,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":44,\"s\":[96,96,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":45,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":57,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":76,\"s\":[100,-100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":81,\"s\":[100,-100,100]},{\"t\":96,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[48.867,15.918],[-16.905,-19.027],[-48.867,-19.027],[-12.707,19.027]],\"c\":true},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.209387865254,0.209387835334,0.209387850294,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.981041941923,0.904883530561,0.63951439951,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fond 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[58.867,29.027],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":37,\"op\":102,\"st\":-14,\"bm\":0},{\"ddd\":0,\"ind\":9,\"ty\":4,\"nm\":\"Trainée HP\",\"parent\":8,\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":36,\"s\":[0]},{\"t\":44,\"s\":[100]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-8.409,11.72,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[9.818,2,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[88.496,88.496,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[2,2],[17.636,2]],\"c\":false},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.209387865254,0.209387835334,0.209387850294,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":44,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":49,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":54,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":55,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":60,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":65,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":66,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":71,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":76,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":77,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":82,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":87,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":88,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":93,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":98,\"s\":[0]},{\"t\":99,\"s\":[100]}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":44,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":54,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":55,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":65,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":66,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":76,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":77,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":87,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":88,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":98,\"s\":[0]},{\"t\":99,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Réduire les tracés 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":36,\"op\":102,\"st\":-14,\"bm\":0}]},{\"id\":\"comp_1\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Hublot 12\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[115.226,226.611,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[4.5,5.785,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":51,\"s\":[0,0,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":54,\"s\":[112,112,100]},{\"t\":55,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[4.5,7.071],[4.5,4.5]],\"c\":false},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.209387865254,0.209387835334,0.209387850294,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":9,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":51,\"op\":105,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Hublot 11\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[135.226,226.611,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[4.5,5.785,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":49,\"s\":[0,0,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":52,\"s\":[112,112,100]},{\"t\":53,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[4.5,7.071],[4.5,4.5]],\"c\":false},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.209387865254,0.209387835334,0.209387850294,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":9,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":49,\"op\":105,\"st\":-1,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Hublot 10\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[155.226,226.611,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[4.5,5.785,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":47,\"s\":[0,0,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":50,\"s\":[112,112,100]},{\"t\":51,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[4.5,7.071],[4.5,4.5]],\"c\":false},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.209387865254,0.209387835334,0.209387850294,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":9,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":47,\"op\":105,\"st\":-3,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Hublot 9\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[175.226,226.611,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[4.5,5.785,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":45,\"s\":[0,0,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":48,\"s\":[112,112,100]},{\"t\":49,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[4.5,7.071],[4.5,4.5]],\"c\":false},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.209387865254,0.209387835334,0.209387850294,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":9,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":45,\"op\":105,\"st\":-5,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Hublot 8\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[215.226,226.611,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[4.5,5.785,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":43,\"s\":[0,0,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":46,\"s\":[112,112,100]},{\"t\":47,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[4.5,7.071],[4.5,4.5]],\"c\":false},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.209387865254,0.209387835334,0.209387850294,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":9,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":43,\"op\":105,\"st\":-7,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"Hublot 7\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[235.226,226.611,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[4.5,5.785,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":41,\"s\":[0,0,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":44,\"s\":[112,112,100]},{\"t\":45,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[4.5,7.071],[4.5,4.5]],\"c\":false},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.209387865254,0.209387835334,0.209387850294,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":9,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":41,\"op\":105,\"st\":-11,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"Hublot 6\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[255.226,226.611,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[4.5,5.785,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":39,\"s\":[0,0,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":42,\"s\":[112,112,100]},{\"t\":43,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[4.5,7.071],[4.5,4.5]],\"c\":false},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.209387865254,0.209387835334,0.209387850294,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":9,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":39,\"op\":105,\"st\":-11,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":4,\"nm\":\"Hublot 5\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[275.226,226.611,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[4.5,5.785,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":37,\"s\":[0,0,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":40,\"s\":[112,112,100]},{\"t\":41,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[4.5,7.071],[4.5,4.5]],\"c\":false},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.209387865254,0.209387835334,0.209387850294,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":9,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":37,\"op\":105,\"st\":-13,\"bm\":0},{\"ddd\":0,\"ind\":9,\"ty\":4,\"nm\":\"Hublot 4\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[315.226,226.611,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[4.5,5.785,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":35,\"s\":[0,0,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":38,\"s\":[112,112,100]},{\"t\":39,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[4.5,7.071],[4.5,4.5]],\"c\":false},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.209387865254,0.209387835334,0.209387850294,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":9,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":35,\"op\":105,\"st\":-15,\"bm\":0},{\"ddd\":0,\"ind\":10,\"ty\":4,\"nm\":\"Hublot 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[335.226,226.611,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[4.5,5.785,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":33,\"s\":[0,0,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":36,\"s\":[112,112,100]},{\"t\":37,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[4.5,7.071],[4.5,4.5]],\"c\":false},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.209387865254,0.209387835334,0.209387850294,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":9,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":33,\"op\":105,\"st\":-17,\"bm\":0},{\"ddd\":0,\"ind\":11,\"ty\":4,\"nm\":\"Hublot 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[356.226,226.611,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[4.5,5.785,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":31,\"s\":[0,0,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":34,\"s\":[112,112,100]},{\"t\":35,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[4.5,7.071],[4.5,4.5]],\"c\":false},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.209387865254,0.209387835334,0.209387850294,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":9,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":31,\"op\":105,\"st\":-19,\"bm\":0},{\"ddd\":0,\"ind\":12,\"ty\":4,\"nm\":\"Hublot\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[375.226,226.611,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[4.5,5.785,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":29,\"s\":[0,0,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":32,\"s\":[112,112,100]},{\"t\":33,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[4.5,7.071],[4.5,4.5]],\"c\":false},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.209387865254,0.209387835334,0.209387850294,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":9,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":29,\"op\":105,\"st\":-21,\"bm\":0},{\"ddd\":0,\"ind\":13,\"ty\":4,\"nm\":\"Ligne Jaune\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[254.419,235.143,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[168.568,4.272,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[164.568,-0.272],[-164.568,0.272]],\"c\":false},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.948002534754,0.734069106158,0.095917959774,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":8,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[168.568,4.272],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":25,\"s\":[0]},{\"t\":52,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Réduire les tracés 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":25,\"op\":105,\"st\":-11,\"bm\":0}]}],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Nuage FG5\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":5,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":13,\"s\":[88]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":21,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":25,\"s\":[92]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":39,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":48,\"s\":[86]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":55,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":62,\"s\":[94]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":70,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":80,\"s\":[92]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":85,\"s\":[100]},{\"t\":102,\"s\":[2]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":15,\"s\":[290.068,383.013,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":26,\"s\":[290.068,384.013,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":38,\"s\":[290.068,383.013,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":50,\"s\":[290.068,382.013,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":62,\"s\":[290.068,383.013,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":73,\"s\":[290.068,384.013,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":85,\"s\":[290.068,383.013,0],\"to\":[-72.333,0.5,0],\"ti\":[72.333,-0.5,0]},{\"t\":102,\"s\":[-143.932,386.013,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[11.915,3,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[20.829,3],[3,3]],\"c\":false},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.209387865254,0.209387835334,0.209387850294,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":6,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":20,\"s\":[0]},{\"t\":24,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Réduire les tracés 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":0,\"op\":105,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Nuage FG4\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":5,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":13,\"s\":[88]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":21,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":25,\"s\":[92]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":39,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":48,\"s\":[86]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":55,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":62,\"s\":[94]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":70,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":80,\"s\":[92]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":85,\"s\":[100]},{\"t\":102,\"s\":[2]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":15,\"s\":[368.511,343.181,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":26,\"s\":[368.511,344.181,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":38,\"s\":[368.511,343.181,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":50,\"s\":[368.511,342.181,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":62,\"s\":[368.511,343.181,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":73,\"s\":[368.511,344.181,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":85,\"s\":[368.511,343.181,0],\"to\":[-72.333,0.5,0],\"ti\":[72.333,-0.5,0]},{\"t\":102,\"s\":[-65.489,346.181,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[69.683,54.831,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-13.057,0],[0,21.999],[21.992,0],[2.136,-19.982]],\"o\":[[0,0],[21.992,0],[0,-21.999],[-20.555,0],[0,0]],\"v\":[[-54.683,39.518],[14.856,39.831],[54.683,0],[14.856,-39.831],[-24.74,-4.283]],\"c\":false},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.209387865254,0.209387835334,0.209387850294,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":6,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[69.683,54.831],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":15,\"s\":[100]},{\"t\":20,\"s\":[0]}],\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Réduire les tracés 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":0,\"op\":105,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Nuage FG3\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":5,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":13,\"s\":[88]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":21,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":25,\"s\":[92]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":39,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":48,\"s\":[86]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":55,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":62,\"s\":[94]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":70,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":80,\"s\":[92]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":85,\"s\":[100]},{\"t\":102,\"s\":[2]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":15,\"s\":[310.578,305.518,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":26,\"s\":[310.578,306.518,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":38,\"s\":[310.578,305.518,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":50,\"s\":[310.578,304.518,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":62,\"s\":[310.578,305.518,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":73,\"s\":[310.578,306.518,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":85,\"s\":[310.578,305.518,0],\"to\":[-72.333,0.5,0],\"ti\":[72.333,-0.5,0]},{\"t\":102,\"s\":[-123.422,308.518,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[65.319,30.171,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-40.306,0],[0,0]],\"o\":[[0,0],[31.827,0],[0,0]],\"v\":[[-50.318,15.171],[-0.568,-15.171],[50.318,5.773]],\"c\":false},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.209387865254,0.209387835334,0.209387850294,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":6,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[65.318,30.171],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":10,\"s\":[0]},{\"t\":15,\"s\":[99]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Réduire les tracés 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":0,\"op\":105,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Nuage FG2\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":5,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":13,\"s\":[88]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":21,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":25,\"s\":[92]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":39,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":48,\"s\":[86]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":55,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":62,\"s\":[94]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":70,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":80,\"s\":[92]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":85,\"s\":[100]},{\"t\":102,\"s\":[2]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":15,\"s\":[229.331,360.034,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":26,\"s\":[229.331,359.034,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":38,\"s\":[229.331,360.034,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":50,\"s\":[229.331,361.034,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":62,\"s\":[229.331,360.034,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":73,\"s\":[229.331,359.034,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":85,\"s\":[229.331,360.034,0],\"to\":[-72.333,-0.167,0],\"ti\":[72.333,0.167,0]},{\"t\":102,\"s\":[-204.669,359.034,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[52.912,36.798,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[12.786,0],[0,-24.077]],\"o\":[[-7.976,-8.764],[-24.078,0],[0,0]],\"v\":[[37.913,-7.498],[5.684,-21.798],[-37.913,21.798]],\"c\":false},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.209387865254,0.209387835334,0.209387850294,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":6,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[52.912,36.798],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":5,\"s\":[100]},{\"t\":10,\"s\":[0]}],\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Réduire les tracés 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":0,\"op\":105,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Nuage FG1\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":5,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":13,\"s\":[88]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":21,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":25,\"s\":[92]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":39,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":48,\"s\":[86]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":55,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":62,\"s\":[94]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":70,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":80,\"s\":[92]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":85,\"s\":[100]},{\"t\":102,\"s\":[2]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":15,\"s\":[153.675,359.876,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":26,\"s\":[153.675,358.876,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":38,\"s\":[153.675,359.876,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":50,\"s\":[153.675,360.876,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":62,\"s\":[153.675,359.876,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":73,\"s\":[153.675,358.876,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":85,\"s\":[153.675,359.876,0],\"to\":[-72.333,-0.167,0],\"ti\":[72.333,0.167,0]},{\"t\":102,\"s\":[-280.325,358.876,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[66.998,53.188,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[18.118,0],[6.513,-14.29],[0.402,0],[0,-14.414],[-14.413,0],[0,0]],\"o\":[[-5.595,-16.219],[-16.731,0],[-0.402,-0.019],[-14.413,0],[0,14.412],[0,0],[0,0]],\"v\":[[51.999,-10.304],[12.919,-38.188],[-24.706,-13.944],[-25.904,-14.003],[-51.999,12.091],[-25.904,38.188],[-6.174,38.188]],\"c\":false},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.209387865254,0.209387835334,0.209387850294,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":6,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[66.998,53.188],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[100]},{\"t\":5,\"s\":[0]}],\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Réduire les tracés 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":0,\"op\":105,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":0,\"nm\":\"AVION FULL\",\"refId\":\"comp_0\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":85,\"s\":[100]},{\"t\":102,\"s\":[2]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":15,\"s\":[251,256,0],\"to\":[-0.267,-11.564,0],\"ti\":[-0.204,-8.825,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":36,\"s\":[251.278,250.041,0],\"to\":[0.178,7.71,0],\"ti\":[0.529,22.916,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":59,\"s\":[251,256,0],\"to\":[-0.5,-21.667,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":75,\"s\":[295,234,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":79,\"s\":[295,234,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.914},\"o\":{\"x\":0.302,\"y\":0.472},\"t\":81,\"s\":[281.6,234,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"t\":85.8955078125,\"s\":[591,234,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[252.417,250.615,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":60,\"s\":[100,100,100]},{\"t\":75,\"s\":[55,55,100]}],\"ix\":6}},\"ao\":0,\"w\":480,\"h\":480,\"ip\":0,\"op\":105,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"Nuage BKG\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":5,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":13,\"s\":[88]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":21,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":25,\"s\":[92]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":39,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":48,\"s\":[86]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":55,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":62,\"s\":[94]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":70,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":80,\"s\":[92]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":85,\"s\":[100]},{\"t\":102,\"s\":[2]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":15,\"s\":[274.087,147.664,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":25.943,\"s\":[274.087,146.664,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":37.98,\"s\":[274.087,147.664,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":50.02,\"s\":[274.087,148.664,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":62.057,\"s\":[274.087,147.664,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":73,\"s\":[274.087,146.664,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":85,\"s\":[274.087,147.664,0],\"to\":[-62.167,-0.833,0],\"ti\":[62.167,0.833,0]},{\"t\":102,\"s\":[-98.913,142.664,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[83.414,52.912,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[19.477,0.369],[0,3.732],[9.853,0],[2.847,-1.928],[13.539,0],[2.569,-20.937]],\"o\":[[-1.433,-19.194],[1.964,-2.864],[0,-9.859],[-3.7,0],[-7.755,-9.886],[-21.634,0],[0,0]],\"v\":[[68.415,37.912],[31.676,3.188],[34.79,-6.872],[16.945,-24.721],[6.96,-21.667],[-26.382,-37.912],[-68.415,-0.758]],\"c\":false},\"ix\":2},\"nm\":\"Tracé 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.209387865254,0.209387835334,0.209387850294,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":6,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Contour 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[83.415,52.912],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformer \"}],\"nm\":\"Groupe 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":11,\"s\":[100]},{\"t\":28,\"s\":[1]}],\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Réduire les tracés 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":0,\"op\":105,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

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

/***/ "9wSV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Arrow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Arrow(props) {
  return __jsx("svg", {
    className: props.class,
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width,
    height: props.height,
    fill: props.fill,
    viewBox: "0 0 18 18"
  }, __jsx("path", {
    d: "M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z"
  }));
}

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

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

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "EN0U":
/***/ (function(module, exports) {

module.exports = require("apollo-link-ws");

/***/ }),

/***/ "EfMu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/StepLabel");

/***/ }),

/***/ "GTNI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GET_NOTICES = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
{
  notices{
    _id
    body
    createdAt
  }
}
`;
/* harmony default export */ __webpack_exports__["a"] = (GET_NOTICES);

/***/ }),

/***/ "IV1l":
/***/ (function(module, exports) {

module.exports = require("react-text-loop");

/***/ }),

/***/ "J8oA":
/***/ (function(module, exports) {

module.exports = require("react-animate-on-scroll");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "NGwb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _lodashThrottle = __webpack_require__("ywLQ");

var _lodashThrottle2 = _interopRequireDefault(_lodashThrottle);

var _propTypes = __webpack_require__("rf6O");

var _propTypes2 = _interopRequireDefault(_propTypes);

var ScrollAnimation = (function (_Component) {
  _inherits(ScrollAnimation, _Component);

  function ScrollAnimation(props) {
    _classCallCheck(this, ScrollAnimation);

    _get(Object.getPrototypeOf(ScrollAnimation.prototype), "constructor", this).call(this, props);
    this.serverSide = typeof window === "undefined";
    this.listener = (0, _lodashThrottle2["default"])(this.handleScroll.bind(this), 50);
    this.visibility = {
      onScreen: false,
      inViewport: false
    };

    this.state = {
      classes: "animated",
      style: {
        animationDuration: this.props.duration + "s",
        opacity: this.props.initiallyVisible ? 1 : 0
      }
    };
  }

  _createClass(ScrollAnimation, [{
    key: "getElementTop",
    value: function getElementTop(elm) {
      var yPos = 0;
      while (elm && elm.offsetTop !== undefined && elm.clientTop !== undefined) {
        yPos += elm.offsetTop + elm.clientTop;
        elm = elm.offsetParent;
      }
      return yPos;
    }
  }, {
    key: "getScrollPos",
    value: function getScrollPos() {
      if (this.scrollableParent.pageYOffset !== undefined) {
        return this.scrollableParent.pageYOffset;
      }
      return this.scrollableParent.scrollTop;
    }
  }, {
    key: "getScrollableParentHeight",
    value: function getScrollableParentHeight() {
      if (this.scrollableParent.innerHeight !== undefined) {
        return this.scrollableParent.innerHeight;
      }
      return this.scrollableParent.clientHeight;
    }
  }, {
    key: "getViewportTop",
    value: function getViewportTop() {
      return this.getScrollPos() + this.props.offset;
    }
  }, {
    key: "getViewportBottom",
    value: function getViewportBottom() {
      return this.getScrollPos() + this.getScrollableParentHeight() - this.props.offset;
    }
  }, {
    key: "isInViewport",
    value: function isInViewport(y) {
      return y >= this.getViewportTop() && y <= this.getViewportBottom();
    }
  }, {
    key: "isAboveViewport",
    value: function isAboveViewport(y) {
      return y < this.getViewportTop();
    }
  }, {
    key: "isBelowViewport",
    value: function isBelowViewport(y) {
      return y > this.getViewportBottom();
    }
  }, {
    key: "inViewport",
    value: function inViewport(elementTop, elementBottom) {
      return this.isInViewport(elementTop) || this.isInViewport(elementBottom) || this.isAboveViewport(elementTop) && this.isBelowViewport(elementBottom);
    }
  }, {
    key: "onScreen",
    value: function onScreen(elementTop, elementBottom) {
      return !this.isAboveScreen(elementBottom) && !this.isBelowScreen(elementTop);
    }
  }, {
    key: "isAboveScreen",
    value: function isAboveScreen(y) {
      return y < this.getScrollPos();
    }
  }, {
    key: "isBelowScreen",
    value: function isBelowScreen(y) {
      return y > this.getScrollPos() + this.getScrollableParentHeight();
    }
  }, {
    key: "getVisibility",
    value: function getVisibility() {
      var elementTop = this.getElementTop(this.node) - this.getElementTop(this.scrollableParent);
      var elementBottom = elementTop + this.node.clientHeight;
      return {
        inViewport: this.inViewport(elementTop, elementBottom),
        onScreen: this.onScreen(elementTop, elementBottom)
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.serverSide) {
        var parentSelector = this.props.scrollableParentSelector;
        this.scrollableParent = parentSelector ? document.querySelector(parentSelector) : window;
        if (this.scrollableParent && this.scrollableParent.addEventListener) {
          this.scrollableParent.addEventListener("scroll", this.listener);
        } else {
          console.warn("Cannot find element by locator: " + this.props.scrollableParentSelector);
        }
        if (this.props.animatePreScroll) {
          this.handleScroll();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.delayedAnimationTimeout);
      clearTimeout(this.callbackTimeout);
      if (window && window.removeEventListener) {
        window.removeEventListener("scroll", this.listener);
      }
    }
  }, {
    key: "visibilityHasChanged",
    value: function visibilityHasChanged(previousVis, currentVis) {
      return previousVis.inViewport !== currentVis.inViewport || previousVis.onScreen !== currentVis.onScreen;
    }
  }, {
    key: "animate",
    value: function animate(animation, callback) {
      var _this = this;

      this.delayedAnimationTimeout = setTimeout(function () {
        _this.animating = true;
        _this.setState({
          classes: "animated " + animation,
          style: {
            animationDuration: _this.props.duration + "s"
          }
        });
        _this.callbackTimeout = setTimeout(callback, _this.props.duration * 1000);
      }, this.props.delay);
    }
  }, {
    key: "animateIn",
    value: function animateIn(callback) {
      var _this2 = this;

      this.animate(this.props.animateIn, function () {
        if (!_this2.props.animateOnce) {
          _this2.setState({
            style: {
              animationDuration: _this2.props.duration + "s",
              opacity: 1
            }
          });
          _this2.animating = false;
        }
        var vis = _this2.getVisibility();
        if (callback) {
          callback(vis);
        }
      });
    }
  }, {
    key: "animateOut",
    value: function animateOut(callback) {
      var _this3 = this;

      this.animate(this.props.animateOut, function () {
        _this3.setState({
          classes: "animated",
          style: {
            animationDuration: _this3.props.duration + "s",
            opacity: 0
          }
        });
        var vis = _this3.getVisibility();
        if (vis.inViewport && _this3.props.animateIn) {
          _this3.animateIn(_this3.props.afterAnimatedIn);
        } else {
          _this3.animating = false;
        }

        if (callback) {
          callback(vis);
        }
      });
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      if (!this.animating) {
        var currentVis = this.getVisibility();
        if (this.visibilityHasChanged(this.visibility, currentVis)) {
          clearTimeout(this.delayedAnimationTimeout);
          if (!currentVis.onScreen) {
            this.setState({
              classes: "animated",
              style: {
                animationDuration: this.props.duration + "s",
                opacity: this.props.initiallyVisible ? 1 : 0
              }
            });
          } else if (currentVis.inViewport && this.props.animateIn) {
            this.animateIn(this.props.afterAnimatedIn);
          } else if (currentVis.onScreen && this.visibility.inViewport && this.props.animateOut && this.state.style.opacity === 1) {
            this.animateOut(this.props.afterAnimatedOut);
          }
          this.visibility = currentVis;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var classes = this.props.className ? this.props.className + " " + this.state.classes : this.state.classes;
      return _react2["default"].createElement(
        "div",
        { ref: function (node) {
            _this4.node = node;
          }, className: classes, style: Object.assign({}, this.state.style, this.props.style) },
        this.props.children
      );
    }
  }]);

  return ScrollAnimation;
})(_react.Component);

exports["default"] = ScrollAnimation;

ScrollAnimation.defaultProps = {
  offset: 150,
  duration: 1,
  initiallyVisible: false,
  delay: 0,
  animateOnce: false,
  animatePreScroll: true
};

ScrollAnimation.propTypes = {
  animateIn: _propTypes2["default"].string,
  animateOut: _propTypes2["default"].string,
  offset: _propTypes2["default"].number,
  duration: _propTypes2["default"].number,
  delay: _propTypes2["default"].number,
  initiallyVisible: _propTypes2["default"].bool,
  animateOnce: _propTypes2["default"].bool,
  style: _propTypes2["default"].object,
  scrollableParentSelector: _propTypes2["default"].string,
  className: _propTypes2["default"].string,
  animatePreScroll: _propTypes2["default"].bool
};
module.exports = exports["default"];

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "OvFP":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Step");

/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "Qb08":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Hsl");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Loading = () => {
  //other logic
  return __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "Puff",
    color: "#00BFFF",
    height: 100,
    width: 100,
    timeout: 6000 //3 secs

  });
};

/* harmony default export */ __webpack_exports__["a"] = (Loading);

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "UpG9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Stepper");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "Y8uC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cPsG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "fflE":
/***/ (function(module, exports) {

module.exports = require("apollo-utilities");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "iYUx":
/***/ (function(module, exports) {

module.exports = require("react-lottie");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "p1tF":
/***/ (function(module, exports) {

module.exports = require("react-intersection-observer");

/***/ }),

/***/ "rL3P":
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.5.7\",\"fr\":60,\"ip\":0,\"op\":350,\"w\":426,\"h\":426,\"nm\":\"gears\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Layer 2 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"t\":349,\"s\":[360]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[48.94,264.534,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[36.225,36.22,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":55.992,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":175,\"s\":[76,76,100]},{\"t\":295.9921875,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.866,-6.86],[0,0],[2.148,3.154],[3.382,1.044],[0,0],[-4.198,-6.163]],\"o\":[[0,0],[0.265,-3.533],[-2.152,-3.154],[0,0],[6.7,1.705],[4.201,6.162]],\"v\":[[29.148,3.663],[16.16,1.201],[13.396,-9.128],[4.79,-15.48],[7.249,-28.471],[24.281,-16.549]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[6.162,-4.2],[6.857,0.867],[0,0],[-3.158,2.151],[-1.047,3.386],[0,0]],\"o\":[[-6.162,4.2],[0,0],[3.532,0.264],[3.155,-2.149],[0,0],[-1.701,6.701]],\"v\":[[16.549,24.28],[-3.661,29.147],[-1.202,16.159],[9.128,13.392],[15.482,4.789],[28.465,7.248]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[4.196,6.163],[-0.861,6.86],[0,0],[-2.15,-3.153],[-3.386,-1.043]],\"o\":[[-6.702,-1.703],[-4.201,-6.161],[0,0],[-0.264,3.531],[2.15,3.155],[0,0]],\"v\":[[-7.249,28.468],[-24.279,16.547],[-29.148,-3.664],[-16.16,-1.202],[-13.393,9.126],[-4.79,15.477]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.91,-2.799],[2.797,-1.909],[1.906,2.797],[-2.798,1.906]],\"o\":[[1.904,2.798],[-2.799,1.906],[-1.906,-2.8],[2.797,-1.91]],\"v\":[[5.072,-3.454],[3.454,5.068],[-5.068,3.454],[-3.454,-5.067]],\"c\":true},\"ix\":2},\"nm\":\"Path 4\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":4,\"ty\":\"sh\",\"ix\":5,\"ks\":{\"a\":0,\"k\":{\"i\":[[-6.162,4.198],[-6.862,-0.863],[0,0],[3.154,-2.151],[1.047,-3.383],[0,0]],\"o\":[[6.164,-4.2],[0,0],[-3.534,-0.264],[-3.158,2.149],[0,0],[1.704,-6.699]],\"v\":[[-16.548,-24.28],[3.665,-29.15],[1.202,-16.159],[-9.126,-13.392],[-15.482,-4.791],[-28.469,-7.251]],\"c\":true},\"ix\":2},\"nm\":\"Path 5\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":5,\"ty\":\"sh\",\"ix\":6,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.907,-0.439],[0,0],[0.227,0.374],[0,0],[0.565,0.832],[0.832,-0.564],[0,0],[0.417,0.488],[0,0],[0.697,0.729],[0.725,-0.698],[0,0],[0.402,0.34],[0,0],[0.799,0.608],[0.61,-0.802],[0,0],[0.508,0.304],[0,0],[0.892,0.468],[0.468,-0.893],[0,0],[0.575,0.225],[0,0],[0.956,0.318],[0.321,-0.954],[0,0],[0.266,0.065],[0,0],[0.99,0.188],[0.189,-0.994],[0,0],[0.325,0.034],[0,0],[1.009,0.05],[0.051,-1.007],[0,0],[0.528,-0.027],[0,0],[1.002,-0.106],[-0.107,-1.005],[0,0],[0.581,-0.125],[0,0],[0.971,-0.269],[-0.268,-0.971],[0,0],[0.571,-0.229],[0,0],[0.915,-0.425],[-0.424,-0.916],[0,0],[0.515,-0.311],[0,0],[0.834,-0.568],[-0.566,-0.833],[0,0],[0.297,-0.245],[0,0],[0.742,-0.68],[-0.685,-0.743],[0,0],[0.351,-0.392],[0,0],[0.629,-0.79],[-0.792,-0.63],[0,0],[0.316,-0.502],[0,0],[0.49,-0.881],[-0.881,-0.492],[0,0],[0.24,-0.567],[0,0],[0.339,-0.95],[-0.949,-0.342],[0,0],[0.125,-0.517],[0,0],[0.187,-0.991],[-0.991,-0.187],[0,0],[0.04,-0.482],[0,0],[0.037,-1.008],[-1.008,-0.034],[0,0],[-0.031,-0.525],[0,0],[-0.121,-1],[-1.002,0.122],[0,0],[-0.135,-0.578],[0,0],[-0.283,-0.969],[-0.966,0.284],[0,0],[-0.239,-0.568],[0,0],[-0.44,-0.907],[-0.908,0.439],[0,0],[-0.225,-0.374],[0,0],[-0.564,-0.834],[-0.832,0.569],[0,0],[-0.416,-0.484],[0,0],[-0.697,-0.726],[-0.729,0.698],[0,0],[-0.399,-0.34],[0,0],[-0.803,-0.609],[-0.61,0.801],[0,0],[-0.51,-0.304],[0,0],[-0.891,-0.471],[-0.472,0.892],[0,0],[-0.57,-0.223],[0,0],[-0.957,-0.317],[-0.317,0.957],[0,0],[-0.268,-0.065],[0,0],[-0.992,-0.187],[-0.186,0.991],[0,0],[-0.322,-0.035],[0,0],[-1.008,-0.05],[-0.052,1.009],[0,0],[-0.528,0.026],[0,0],[-1,0.112],[0.111,1.001],[0,0],[-0.581,0.128],[0,0],[-0.969,0.268],[0.27,0.97],[0,0],[-0.573,0.23],[0,0],[-0.916,0.423],[0.43,0.916],[0,0],[-0.514,0.312],[0,0],[-0.832,0.568],[0.568,0.834],[0,0],[-0.294,0.241],[0,0],[-0.743,0.678],[0.681,0.742],[0,0],[-0.351,0.395],[0,0],[-0.626,0.789],[0.791,0.626],[0,0],[-0.314,0.502],[0,0],[-0.493,0.879],[0.879,0.491],[0,0],[-0.237,0.567],[0,0],[-0.342,0.952],[0.949,0.344],[0,0],[-0.128,0.519],[0,0],[-0.19,0.99],[0.989,0.189],[0,0],[-0.043,0.483],[0,0],[-0.035,1.008],[1.01,0.034],[0,0],[0.034,0.524],[0,0],[0.122,1],[1.001,-0.122],[0,0],[0.133,0.58],[0,0],[0.283,0.967],[0.968,-0.285],[0,0],[0.235,0.569],[0,0],[0.44,0.907]],\"o\":[[0,0],[-0.21,-0.379],[0,0],[0.832,-0.566],[-0.57,-0.834],[0,0],[-0.395,-0.517],[0,0],[0.727,-0.698],[-0.698,-0.727],[0,0],[-0.385,-0.36],[0,0],[0.611,-0.805],[-0.806,-0.611],[0,0],[-0.494,-0.334],[0,0],[0.467,-0.891],[-0.891,-0.472],[0,0],[-0.559,-0.258],[0,0],[0.32,-0.956],[-0.957,-0.318],[0,0],[-0.263,-0.071],[0,0],[0.191,-0.989],[-0.993,-0.187],[0,0],[-0.323,-0.042],[0,0],[0.053,-1.009],[-1.006,-0.048],[0,0],[-0.527,0.002],[0,0],[-0.111,-1],[-1.002,0.108],[0,0],[-0.588,0.096],[0,0],[-0.27,-0.973],[-0.973,0.268],[0,0],[-0.579,0.195],[0,0],[-0.424,-0.914],[-0.915,0.427],[0,0],[-0.521,0.278],[0,0],[-0.567,-0.834],[-0.833,0.567],[0,0],[-0.306,0.235],[0,0],[-0.683,-0.743],[-0.74,0.681],[0,0],[-0.368,0.379],[0,0],[-0.787,-0.628],[-0.625,0.788],[0,0],[-0.343,0.487],[0,0],[-0.881,-0.492],[-0.492,0.88],[0,0],[-0.273,0.554],[0,0],[-0.947,-0.337],[-0.343,0.948],[0,0],[-0.151,0.512],[0,0],[-0.993,-0.186],[-0.19,0.99],[0,0],[-0.065,0.48],[0,0],[-1.006,-0.035],[-0.033,1.008],[0,0],[0.012,0.526],[0,0],[-1.003,0.123],[0.123,1.001],[0,0],[0.101,0.583],[0,0],[-0.964,0.282],[0.285,0.965],[0,0],[0.207,0.579],[0,0],[-0.908,0.441],[0.434,0.91],[0,0],[0.209,0.38],[0,0],[-0.831,0.566],[0.57,0.833],[0,0],[0.394,0.516],[0,0],[-0.725,0.699],[0.698,0.727],[0,0],[0.385,0.359],[0,0],[-0.611,0.804],[0.799,0.608],[0,0],[0.49,0.333],[0,0],[-0.469,0.891],[0.892,0.471],[0,0],[0.561,0.258],[0,0],[-0.321,0.956],[0.955,0.318],[0,0],[0.263,0.072],[0,0],[-0.186,0.992],[0.993,0.188],[0,0],[0.319,0.042],[0,0],[-0.051,1.008],[1.004,0.048],[0,0],[0.524,-0.001],[0,0],[0.111,1.002],[1.005,-0.107],[0,0],[0.588,-0.096],[0,0],[0.272,0.972],[0.97,-0.27],[0,0],[0.579,-0.198],[0,0],[0.425,0.916],[0.915,-0.425],[0,0],[0.526,-0.28],[0,0],[0.567,0.83],[0.836,-0.568],[0,0],[0.308,-0.236],[0,0],[0.682,0.742],[0.739,-0.681],[0,0],[0.371,-0.378],[0,0],[0.789,0.626],[0.63,-0.789],[0,0],[0.344,-0.484],[0,0],[0.879,0.492],[0.491,-0.882],[0,0],[0.27,-0.554],[0,0],[0.95,0.341],[0.34,-0.948],[0,0],[0.151,-0.512],[0,0],[0.992,0.188],[0.192,-0.989],[0,0],[0.065,-0.479],[0,0],[1.008,0.035],[0.031,-1.007],[0,0],[-0.01,-0.525],[0,0],[1.002,-0.125],[-0.124,-1],[0,0],[-0.103,-0.584],[0,0],[0.965,-0.284],[-0.283,-0.97],[0,0],[-0.204,-0.578],[0,0],[0.909,-0.44],[-0.439,-0.909]],\"v\":[[29.949,-16.488],[29.232,-16.142],[28.583,-17.271],[29.238,-17.719],[29.719,-20.253],[27.184,-20.736],[26.527,-20.286],[25.305,-21.787],[25.882,-22.339],[25.932,-24.92],[23.352,-24.971],[22.777,-24.42],[21.598,-25.472],[22.077,-26.103],[21.725,-28.66],[19.165,-28.309],[18.689,-27.676],[17.187,-28.633],[17.557,-29.337],[16.794,-31.801],[14.327,-31.04],[13.958,-30.341],[12.258,-31.066],[12.51,-31.816],[11.357,-34.124],[9.046,-32.97],[8.796,-32.21],[7.999,-32.42],[8.146,-33.203],[6.696,-35.337],[4.559,-33.879],[4.413,-33.1],[3.445,-33.212],[3.486,-34.009],[1.752,-35.922],[-0.163,-34.187],[-0.201,-33.399],[-1.781,-33.354],[-1.865,-34.138],[-3.876,-35.755],[-5.495,-33.741],[-5.408,-32.956],[-7.161,-32.621],[-7.372,-33.382],[-9.619,-34.653],[-10.889,-32.408],[-10.678,-31.641],[-12.404,-31.005],[-12.742,-31.724],[-15.167,-32.61],[-16.053,-30.184],[-15.719,-29.464],[-17.27,-28.582],[-17.717,-29.238],[-20.253,-29.719],[-20.734,-27.184],[-20.288,-26.528],[-21.191,-25.804],[-21.729,-26.393],[-24.309,-26.506],[-24.417,-23.926],[-23.889,-23.345],[-24.966,-22.189],[-25.581,-22.679],[-28.147,-22.386],[-27.852,-19.821],[-27.24,-19.333],[-28.229,-17.849],[-28.919,-18.234],[-31.402,-17.53],[-30.699,-15.046],[-30.001,-14.659],[-30.766,-12.98],[-31.514,-13.251],[-33.848,-12.146],[-32.747,-9.812],[-32.001,-9.543],[-32.419,-7.999],[-33.201,-8.149],[-35.333,-6.693],[-33.88,-4.56],[-33.098,-4.411],[-33.262,-2.967],[-34.055,-2.994],[-35.942,-1.232],[-34.18,0.655],[-33.385,0.683],[-33.32,2.261],[-34.105,2.359],[-35.695,4.392],[-33.66,5.982],[-32.872,5.885],[-32.512,7.629],[-33.275,7.853],[-34.51,10.12],[-32.245,11.356],[-31.49,11.134],[-30.829,12.856],[-31.536,13.198],[-32.383,15.636],[-29.949,16.487],[-29.232,16.141],[-28.583,17.271],[-29.238,17.719],[-29.721,20.253],[-27.184,20.733],[-26.527,20.285],[-25.307,21.785],[-25.882,22.337],[-25.93,24.918],[-23.348,24.971],[-22.779,24.42],[-21.6,25.472],[-22.076,26.102],[-21.723,28.66],[-19.167,28.309],[-18.684,27.677],[-17.184,28.634],[-17.555,29.335],[-16.794,31.801],[-14.326,31.04],[-13.956,30.342],[-12.262,31.063],[-12.508,31.815],[-11.354,34.124],[-9.048,32.968],[-8.792,32.208],[-7.999,32.42],[-8.146,33.2],[-6.695,35.334],[-4.559,33.881],[-4.411,33.1],[-3.449,33.212],[-3.484,34.009],[-1.749,35.922],[0.163,34.184],[0.202,33.397],[1.781,33.354],[1.865,34.135],[3.877,35.751],[5.493,33.743],[5.41,32.955],[7.161,32.618],[7.37,33.381],[9.618,34.654],[10.89,32.406],[10.68,31.642],[12.41,31.003],[12.743,31.722],[15.169,32.609],[16.049,30.182],[15.717,29.464],[17.27,28.58],[17.717,29.238],[20.253,29.718],[20.734,27.182],[20.286,26.526],[21.188,25.806],[21.729,26.392],[24.311,26.506],[24.419,23.926],[23.887,23.343],[24.965,22.186],[25.581,22.678],[28.145,22.386],[27.852,19.821],[27.24,19.331],[28.227,17.849],[28.921,18.234],[31.402,17.53],[30.699,15.047],[30.003,14.657],[30.766,12.977],[31.514,13.248],[33.85,12.145],[32.749,9.81],[32.001,9.543],[32.421,7.997],[33.201,8.146],[35.335,6.691],[33.883,4.558],[33.1,4.41],[33.264,2.965],[34.053,2.992],[35.945,1.23],[34.18,-0.656],[33.385,-0.683],[33.316,-2.259],[34.107,-2.358],[35.695,-4.395],[33.66,-5.983],[32.872,-5.886],[32.514,-7.632],[33.275,-7.855],[34.51,-10.119],[32.245,-11.357],[31.49,-11.137],[30.831,-12.859],[31.535,-13.2],[32.387,-15.638]],\"c\":true},\"ix\":2},\"nm\":\"Path 6\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.877636000689,0.071133363013,0.05528792961,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[36.225,36.22],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":8,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":350,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Layer 3 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"t\":349,\"s\":[360]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[82.579,212.602,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[22.823,22.822,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":55.992,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":175,\"s\":[108,108,100]},{\"t\":295.9921875,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.437,-3.054],[0,0],[1.174,1.054],[1.453,0.161],[0,0],[-2.474,-2.223]],\"o\":[[0,0],[-0.319,-1.431],[-1.177,-1.055],[0,0],[3.082,0.103],[2.476,2.22]],\"v\":[[13.501,-1.967],[7.136,-1.623],[4.897,-5.458],[0.841,-7.27],[0.494,-13.636],[9.118,-10.165]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.223,-2.475],[3.055,-0.435],[0,0],[-1.055,1.175],[-0.16,1.456],[0,0]],\"o\":[[-2.222,2.476],[0,0],[1.432,-0.32],[1.055,-1.175],[0,0],[-0.105,3.083]],\"v\":[[10.16,9.059],[1.96,13.44],[1.617,7.076],[5.454,4.836],[7.265,0.779],[13.632,0.435]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.473,2.223],[0.437,3.056],[0,0],[-1.176,-1.054],[-1.458,-0.162],[0,0]],\"o\":[[-2.48,-2.22],[0,0],[0.32,1.433],[1.175,1.054],[0,0],[-3.082,-0.104]],\"v\":[[-9.062,10.1],[-13.448,1.9],[-7.081,1.556],[-4.841,5.393],[-0.785,7.205],[-0.442,13.572]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.566,-1.407],[1.408,-1.568],[1.567,1.407],[-1.405,1.567]],\"o\":[[1.569,1.408],[-1.408,1.568],[-1.569,-1.406],[1.408,-1.568]],\"v\":[[2.573,-2.872],[2.864,2.514],[-2.519,2.806],[-2.813,-2.579]],\"c\":true},\"ix\":2},\"nm\":\"Path 4\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":4,\"ty\":\"sh\",\"ix\":5,\"ks\":{\"a\":0,\"k\":{\"i\":[[-2.223,2.475],[-3.055,0.438],[0,0],[1.054,-1.175],[0.163,-1.459],[0,0]],\"o\":[[2.22,-2.477],[0,0],[-1.431,0.322],[-1.053,1.177],[0,0],[0.102,-3.083]],\"v\":[[-10.104,-9.123],[-1.907,-13.508],[-1.562,-7.143],[-5.399,-4.902],[-7.211,-0.844],[-13.576,-0.5]],\"c\":true},\"ix\":2},\"nm\":\"Path 5\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":5,\"ty\":\"sh\",\"ix\":6,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.597,1.433],[-1.313,1.707],[3.137,0.441],[2.234,-0.117],[0.17,2.252],[2.641,-2.037],[1.529,-1.704],[1.707,1.518],[0.375,-3.189],[-0.123,-2.266],[2.208,-0.21],[-2.061,-2.573],[-1.629,-1.462],[1.227,-1.7],[-3.097,-0.358],[-2.092,0.114],[-0.432,-1.957],[-2.527,1.963],[-1.366,1.521],[-1.678,-1.039],[-0.422,3.054],[0.111,2.065],[-2,0.396],[1.934,2.588]],\"o\":[[-1.631,-1.462],[-2.781,-1.765],[0.029,2.217],[-2.266,0.125],[-3.129,0.72],[1.696,1.537],[-1.528,1.702],[-1.739,2.849],[2.254,-0.076],[0.119,2.234],[0.779,3.068],[1.553,-1.49],[1.602,1.433],[2.782,1.643],[0.176,-2.029],[2.066,-0.112],[2.987,-0.75],[-1.215,-1.559],[1.37,-1.524],[1.681,-2.724],[-1.99,-0.215],[-0.113,-2.093],[-0.693,-3.037],[-1.56,1.405]],\"v\":[[12.72,-13.639],[12.2,-19.264],[3.218,-22.572],[-0.71,-18.37],[-5.081,-22.212],[-13.853,-18.072],[-13.553,-12.215],[-19.405,-11.883],[-22.573,-2.715],[-18.28,1.216],[-22.036,5.575],[-17.774,14.147],[-12.13,14.056],[-11.529,19.58],[-2.611,22.572],[1.302,18.784],[5.587,22.044],[13.96,17.964],[14.142,12.633],[19.423,11.873],[22.573,3.106],[18.872,-0.799],[22.216,-5.099],[18.276,-13.642]],\"c\":true},\"ix\":2},\"nm\":\"Path 6\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.969150917203,0.172262692919,0.182716519225,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[22.823,22.822],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":8,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":350,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Layer 6 Outlines\",\"parent\":10,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"t\":349,\"s\":[-360]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[28.522,29.867,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[70.064,70.063,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-12.826,17.251],[-17.25,-12.826],[12.828,-17.252],[17.252,12.826]],\"o\":[[12.826,-17.251],[17.252,12.825],[-12.828,17.251],[-17.249,-12.826]],\"v\":[[-31.36,-23.348],[23.101,-31.36],[31.111,23.1],[-23.348,31.111]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[-3.039,-1.18],[0,0],[0,0],[0,0],[-2.924,0.043],[0,0],[0,0],[0,0],[-2.801,1.191],[0,0],[0,0],[0,0],[-2.251,2.318],[0,0],[0,0],[0,0],[-1.074,2.589],[0,0],[0,0],[0,0],[0.053,3.384],[0,0],[0,0],[0,0],[1.041,2.555],[0,0],[0,0],[0,0],[2.961,2.739],[0,0],[0,0],[0,0],[3.056,1.102],[0,0],[0,0],[0,0],[2.911,-0.113],[0,0],[0,0],[0,0],[2.763,-1.254],[0,0],[0,0],[0,0],[2.182,-2.365],[0,0],[0,0],[0,0],[1.005,-2.604],[0,0],[0,0],[0,0],[-0.13,-3.37],[0,0],[0,0],[0,0],[-1.1,-2.518],[0,0],[0,0],[0,0],[-2.151,-2.087]],\"o\":[[0,0],[0,0],[2.88,1.698],[0,0],[0,0],[0,0],[2.915,0.379],[0,0],[0,0],[0,0],[2.93,-0.758],[0,0],[0,0],[0,0],[2.529,-1.891],[0,0],[0,0],[0,0],[1.453,-2.469],[0,0],[0,0],[0,0],[0.517,-3.369],[0,0],[0,0],[0,0],[-0.691,-2.662],[0,0],[0,0],[0,0],[-2.311,-3.171],[0,0],[0,0],[0,0],[-2.904,-1.618],[0,0],[0,0],[0,0],[-2.911,-0.304],[0,0],[0,0],[0,0],[-2.9,0.827],[0,0],[0,0],[0,0],[-2.469,1.948],[0,0],[0,0],[0,0],[-1.387,2.493],[0,0],[0,0],[0,0],[-0.43,3.367],[0,0],[0,0],[0,0],[0.753,2.628],[0,0],[0,0],[0,0],[1.786,2.329],[0,0]],\"v\":[[-47.614,51.292],[-37.05,59.148],[-31.145,52.637],[-22.256,56.941],[-23.741,65.762],[-10.942,68.866],[-8.05,60.566],[0.72,61.068],[2.65,69.814],[15.679,67.896],[15.251,59.109],[23.863,56.182],[28.961,63.54],[40.292,56.824],[36.566,48.867],[43.742,42.548],[51.291,47.369],[59.149,36.801],[52.64,30.896],[56.431,23.298],[65.214,24.98],[68.603,12.255],[60.372,9.178],[61.066,-0.968],[69.814,-2.898],[67.898,-15.926],[59.113,-15.497],[56.521,-23.332],[63.935,-28.323],[57.382,-39.742],[49.39,-36.137],[41.474,-45.024],[46.004,-52.554],[35.438,-60.41],[29.564,-53.637],[20.613,-57.721],[21.841,-66.413],[9.044,-69.514],[6.286,-60.994],[-2.459,-61.277],[-4.579,-69.814],[-17.607,-67.898],[-16.97,-58.958],[-25.481,-55.836],[-30.671,-62.921],[-42.001,-56.206],[-38.028,-48.187],[-45.023,-41.719],[-52.553,-46.251],[-60.407,-35.684],[-53.637,-29.812],[-57.222,-22.16],[-65.896,-23.588],[-69.292,-10.862],[-60.83,-7.911],[-61.276,2.21],[-69.814,4.331],[-67.898,17.357],[-58.959,16.721],[-56.174,24.45],[-63.341,29.549],[-56.784,40.967],[-48.704,37.105],[-42.797,43.74]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.270827409333,0.698474360447,0.556916599648,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[70.064,70.064],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":350,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Layer 12 Outlines\",\"parent\":12,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"t\":349,\"s\":[-360]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[22.66,30.427,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[57.463,57.459,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-11.287,15.175],[-15.176,-11.282],[11.282,-15.177],[15.177,11.283]],\"o\":[[11.283,-15.178],[15.176,11.286],[-11.283,15.177],[-15.176,-11.285]],\"v\":[[-27.491,-20.412],[20.419,-27.463],[27.467,20.45],[-20.446,27.498]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-4.336,-3.221],[2.891,-4.581],[-7.956,-0.38],[-5.571,0.818],[-0.939,-5.599],[-6.146,5.714],[-3.436,4.619],[-4.636,-3.406],[-0.203,8.076],[0.828,5.644],[-5.48,1.039],[5.741,5.976],[4.418,3.287],[-2.683,4.546],[7.836,0.182],[5.219,-0.765],[1.527,4.799],[5.882,-5.5],[3.069,-4.129],[4.453,2.219],[0.352,-7.745],[-0.757,-5.142],[4.912,-1.454],[-5.439,-6.034]],\"o\":[[4.418,3.286],[7.373,3.78],[-0.583,-5.55],[5.646,-0.831],[7.676,-2.521],[-4.594,-3.459],[3.435,-4.619],[3.703,-7.532],[-5.635,0.712],[-0.82,-5.571],[-2.655,-7.507],[-3.557,4.092],[-4.334,-3.22],[-7.344,-3.473],[0.024,5.124],[-5.142,0.758],[-7.314,2.568],[3.406,3.622],[-3.07,4.131],[-3.574,7.216],[5.035,0.081],[0.769,5.219],[2.431,7.451],[3.58,-3.878]],\"v\":[[-28.661,37.027],[-26.063,50.999],[-2.803,57.209],[6.066,45.773],[17.898,54.388],[38.915,41.996],[36.81,27.396],[51.396,25.21],[57.213,1.515],[45.557,-7.334],[53.952,-19.122],[41.309,-39.611],[27.18,-38.075],[24.406,-51.776],[1.374,-57.209],[-7.554,-46.822],[-19.032,-53.994],[-39.069,-41.841],[-38.294,-28.446],[-51.346,-25.328],[-57.213,-2.641],[-47.041,6.284],[-54.416,17.828],[-42.583,38.317]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.877636000689,0.071133363013,0.05528792961,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[57.463,57.459],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":350,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Layer 11 Outlines\",\"parent\":11,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"t\":349,\"s\":[360]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[22.009,33.438,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[57.463,57.459,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-11.289,15.175],[-15.177,-11.282],[11.281,-15.177],[15.176,11.282]],\"o\":[[11.281,-15.177],[15.176,11.286],[-11.285,15.177],[-15.176,-11.284]],\"v\":[[-27.49,-20.412],[20.42,-27.463],[27.467,20.45],[-20.445,27.498]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-4.336,-3.22],[2.89,-4.582],[-7.955,-0.38],[-5.571,0.819],[-0.939,-5.6],[-6.146,5.714],[-3.436,4.618],[-4.636,-3.406],[-0.204,8.076],[0.83,5.643],[-5.48,1.038],[5.741,5.975],[4.416,3.286],[-2.683,4.545],[7.836,0.182],[5.218,-0.766],[1.527,4.799],[5.881,-5.5],[3.071,-4.129],[4.454,2.219],[0.352,-7.745],[-0.756,-5.143],[4.912,-1.454],[-5.44,-6.034]],\"o\":[[4.417,3.286],[7.373,3.779],[-0.582,-5.55],[5.644,-0.831],[7.677,-2.521],[-4.595,-3.459],[3.435,-4.62],[3.704,-7.531],[-5.635,0.712],[-0.82,-5.572],[-2.656,-7.508],[-3.556,4.091],[-4.334,-3.221],[-7.345,-3.473],[0.024,5.124],[-5.141,0.757],[-7.314,2.567],[3.406,3.622],[-3.068,4.13],[-3.574,7.216],[5.036,0.08],[0.77,5.219],[2.43,7.452],[3.581,-3.878]],\"v\":[[-28.66,37.027],[-26.062,51],[-2.803,57.209],[6.067,45.773],[17.897,54.388],[38.916,41.996],[36.809,27.397],[51.396,25.21],[57.213,1.516],[45.555,-7.333],[53.953,-19.121],[41.308,-39.61],[27.18,-38.074],[24.406,-51.775],[1.375,-57.209],[-7.554,-46.821],[-19.031,-53.993],[-39.068,-41.841],[-38.295,-28.445],[-51.346,-25.328],[-57.213,-2.64],[-47.041,6.285],[-54.416,17.828],[-42.583,38.317]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.935248939664,0.716499478209,0.14682116041,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[57.463,57.459],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":350,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"Layer 8 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[360]},{\"t\":349,\"s\":[0]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[230.666,164.271,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[36.222,36.224,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":55.992,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":175,\"s\":[75,75,100]},{\"t\":295.9921875,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.426,6.765],[0,0],[-3.064,-2.277],[-3.539,0.119],[0,0],[5.984,4.448]],\"o\":[[0,0],[0.906,3.424],[3.064,2.278],[0,0],[-6.89,0.584],[-5.983,-4.449]],\"v\":[[-28.742,6.073],[-15.665,4.149],[-9.671,13.005],[0.536,16.195],[2.462,29.273],[-17.533,23.58]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-4.452,5.983],[-6.765,1.427],[0,0],[2.28,-3.065],[-0.122,-3.542],[0,0]],\"o\":[[4.449,-5.986],[0,0],[-3.427,0.903],[-2.276,3.065],[0,0],[-0.583,-6.89]],\"v\":[[-23.581,-17.531],[-6.072,-28.743],[-4.146,-15.663],[-13.007,-9.67],[-16.191,0.537],[-29.273,2.461]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-5.982,-4.449],[-1.427,-6.765],[0,0],[3.065,2.279],[3.543,-0.118]],\"o\":[[6.886,-0.583],[5.984,4.45],[0,0],[-0.904,-3.423],[-3.063,-2.276],[0,0]],\"v\":[[-2.46,-29.273],[17.533,-23.579],[28.743,-6.073],[15.663,-4.15],[9.672,-13.007],[-0.538,-16.197]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.719,2.021],[-2.021,2.716],[-2.718,-2.02],[2.022,-2.717]],\"o\":[[-2.717,-2.021],[2.024,-2.719],[2.717,2.021],[-2.021,2.719]],\"v\":[[-3.658,4.921],[-4.923,-3.658],[3.66,-4.922],[4.922,3.658]],\"c\":true},\"ix\":2},\"nm\":\"Path 4\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":4,\"ty\":\"sh\",\"ix\":5,\"ks\":{\"a\":0,\"k\":{\"i\":[[4.45,-5.984],[6.768,-1.426],[0,0],[-2.277,3.064],[0.119,3.539],[0,0]],\"o\":[[-4.451,5.984],[0,0],[3.426,-0.905],[2.278,-3.065],[0,0],[0.583,6.888]],\"v\":[[23.579,17.532],[6.072,28.743],[4.148,15.663],[13.006,9.671],[16.195,-0.537],[29.275,-2.46]],\"c\":true},\"ix\":2},\"nm\":\"Path 5\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":5,\"ty\":\"sh\",\"ix\":6,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.716,0.712],[0,0],[-0.334,-0.278],[0,0],[-0.812,-0.6],[-0.602,0.808],[0,0],[-0.553,-0.322],[0,0],[-0.897,-0.457],[-0.458,0.898],[0,0],[-0.484,-0.191],[0,0],[-0.959,-0.311],[-0.313,0.959],[0,0],[-0.58,-0.121],[0,0],[-0.998,-0.152],[-0.154,0.999],[0,0],[-0.613,-0.024],[0,0],[-1.006,0.013],[0.009,1.007],[0,0],[-0.272,0.024],[0,0],[-0.997,0.147],[0.146,0.998],[0,0],[-0.313,0.073],[0,0],[-0.969,0.283],[0.283,0.967],[0,0],[-0.49,0.2],[0,0],[-0.911,0.43],[0.432,0.911],[0,0],[-0.51,0.31],[0,0],[-0.832,0.571],[0.574,0.831],[0,0],[-0.463,0.404],[0,0],[-0.726,0.7],[0.698,0.725],[0,0],[-0.381,0.459],[0,0],[-0.6,0.809],[0.81,0.602],[0,0],[-0.199,0.328],[0,0],[-0.478,0.885],[0.885,0.479],[0,0],[-0.202,0.486],[0,0],[-0.334,0.951],[0.952,0.333],[0,0],[-0.135,0.577],[0,0],[-0.178,0.992],[0.995,0.177],[0,0],[-0.042,0.611],[0,0],[-0.012,1.01],[1.006,0.012],[0,0],[0.047,0.532],[0,0],[0.149,0.997],[0.993,-0.148],[0,0],[0.12,0.47],[0,0],[0.297,0.962],[0.959,-0.297],[0,0],[0.203,0.487],[0,0],[0.443,0.905],[0.906,-0.445],[0,0],[0.317,0.504],[0,0],[0.583,0.82],[0.822,-0.584],[0,0],[0.411,0.458],[0,0],[0.712,0.714],[0.715,-0.712],[0,0],[0.336,0.279],[0,0],[0.813,0.601],[0.603,-0.809],[0,0],[0.555,0.322],[0,0],[0.896,0.457],[0.458,-0.899],[0,0],[0.491,0.19],[0,0],[0.958,0.312],[0.311,-0.958],[0,0],[0.58,0.122],[0,0],[0.998,0.153],[0.154,-0.997],[0,0],[0.613,0.027],[0,0],[1.009,-0.012],[-0.012,-1.009],[0,0],[0.276,-0.024],[0,0],[0.996,-0.148],[-0.147,-0.997],[0,0],[0.315,-0.076],[0,0],[0.969,-0.283],[-0.283,-0.97],[0,0],[0.489,-0.198],[0,0],[0.912,-0.431],[-0.429,-0.913],[0,0],[0.505,-0.311],[0,0],[0.827,-0.571],[-0.574,-0.83],[0,0],[0.467,-0.404],[0,0],[0.729,-0.7],[-0.698,-0.725],[0,0],[0.383,-0.46],[0,0],[0.599,-0.809],[-0.811,-0.6],[0,0],[0.201,-0.329],[0,0],[0.479,-0.887],[-0.887,-0.48],[0,0],[0.201,-0.484],[0,0],[0.334,-0.952],[-0.953,-0.335],[0,0],[0.136,-0.579],[0,0],[0.176,-0.99],[-0.993,-0.177],[0,0],[0.036,-0.613],[0,0],[0.016,-1.009],[-1.007,-0.013],[0,0],[-0.049,-0.531],[0,0],[-0.148,-0.998],[-0.997,0.146],[0,0],[-0.117,-0.472],[0,0],[-0.295,-0.964],[-0.962,0.297],[0,0],[-0.203,-0.486],[0,0],[-0.443,-0.905],[-0.905,0.444],[0,0],[-0.316,-0.504],[0,0],[-0.584,-0.822],[-0.824,0.584],[0,0],[-0.414,-0.46],[0,0],[-0.713,-0.712]],\"o\":[[0,0],[0.319,0.289],[0,0],[-0.603,0.81],[0.807,0.603],[0,0],[0.542,0.357],[0,0],[-0.459,0.897],[0.9,0.46],[0,0],[0.48,0.214],[0,0],[-0.313,0.958],[0.96,0.313],[0,0],[0.575,0.154],[0,0],[-0.154,0.994],[0.997,0.155],[0,0],[0.615,0.06],[0,0],[0.012,1.007],[1.01,-0.012],[0,0],[0.269,-0.016],[0,0],[0.149,0.997],[0.996,-0.148],[0,0],[0.319,-0.066],[0,0],[0.281,0.967],[0.967,-0.283],[0,0],[0.5,-0.173],[0,0],[0.428,0.912],[0.911,-0.429],[0,0],[0.523,-0.28],[0,0],[0.572,0.83],[0.832,-0.573],[0,0],[0.484,-0.376],[0,0],[0.705,0.725],[0.723,-0.7],[0,0],[0.403,-0.434],[0,0],[0.808,0.602],[0.6,-0.809],[0,0],[0.215,-0.324],[0,0],[0.887,0.48],[0.477,-0.887],[0,0],[0.226,-0.478],[0,0],[0.952,0.336],[0.334,-0.952],[0,0],[0.164,-0.571],[0,0],[0.992,0.176],[0.179,-0.991],[0,0],[0.074,-0.61],[0,0],[1.005,0.01],[0.01,-1.008],[0,0],[-0.021,-0.535],[0,0],[0.997,-0.147],[-0.144,-0.997],[0,0],[-0.101,-0.477],[0,0],[0.96,-0.298],[-0.295,-0.964],[0,0],[-0.183,-0.493],[0,0],[0.902,-0.443],[-0.443,-0.905],[0,0],[-0.291,-0.516],[0,0],[0.819,-0.584],[-0.585,-0.822],[0,0],[-0.384,-0.479],[0,0],[0.712,-0.712],[-0.709,-0.714],[0,0],[-0.32,-0.288],[0,0],[0.603,-0.809],[-0.808,-0.602],[0,0],[-0.539,-0.359],[0,0],[0.458,-0.897],[-0.898,-0.459],[0,0],[-0.481,-0.214],[0,0],[0.314,-0.96],[-0.958,-0.314],[0,0],[-0.575,-0.154],[0,0],[0.157,-0.997],[-0.995,-0.154],[0,0],[-0.612,-0.06],[0,0],[-0.012,-1.008],[-1.006,0.014],[0,0],[-0.277,0.017],[0,0],[-0.146,-0.998],[-0.999,0.145],[0,0],[-0.319,0.065],[0,0],[-0.283,-0.968],[-0.964,0.283],[0,0],[-0.498,0.173],[0,0],[-0.43,-0.912],[-0.908,0.429],[0,0],[-0.522,0.282],[0,0],[-0.574,-0.829],[-0.83,0.571],[0,0],[-0.483,0.375],[0,0],[-0.699,-0.725],[-0.724,0.7],[0,0],[-0.404,0.436],[0,0],[-0.811,-0.601],[-0.603,0.808],[0,0],[-0.214,0.322],[0,0],[-0.888,-0.479],[-0.478,0.887],[0,0],[-0.225,0.478],[0,0],[-0.954,-0.333],[-0.334,0.952],[0,0],[-0.162,0.573],[0,0],[-0.99,-0.177],[-0.179,0.994],[0,0],[-0.073,0.611],[0,0],[-1.009,-0.013],[-0.009,1.008],[0,0],[0.026,0.535],[0,0],[-1,0.146],[0.145,0.998],[0,0],[0.098,0.476],[0,0],[-0.964,0.297],[0.299,0.963],[0,0],[0.182,0.495],[0,0],[-0.904,0.444],[0.446,0.906],[0,0],[0.291,0.519],[0,0],[-0.822,0.585],[0.584,0.821],[0,0],[0.386,0.481],[0,0],[-0.713,0.712],[0.711,0.716]],\"v\":[[-22.908,25.377],[-22.34,24.815],[-21.363,25.669],[-21.833,26.305],[-21.456,28.86],[-18.902,28.485],[-18.43,27.848],[-16.788,28.865],[-17.148,29.574],[-16.354,32.029],[-13.898,31.236],[-13.533,30.527],[-12.081,31.135],[-12.324,31.889],[-11.154,34.189],[-8.852,33.02],[-8.607,32.267],[-6.874,32.679],[-6.992,33.465],[-5.467,35.545],[-3.385,34.018],[-3.266,33.237],[-1.426,33.366],[-1.415,34.158],[0.43,35.961],[2.234,34.114],[2.229,33.312],[3.046,33.252],[3.161,34.042],[5.234,35.581],[6.773,33.509],[6.658,32.722],[7.607,32.512],[7.831,33.279],[10.098,34.517],[11.333,32.254],[11.113,31.494],[12.594,30.935],[12.932,31.648],[15.359,32.519],[16.23,30.089],[15.891,29.372],[17.436,28.483],[17.887,29.135],[20.424,29.601],[20.891,27.06],[20.439,26.409],[21.865,25.24],[22.417,25.811],[25.001,25.855],[25.044,23.272],[24.492,22.702],[25.669,21.361],[26.309,21.834],[28.861,21.459],[28.484,18.905],[27.848,18.432],[28.462,17.453],[29.165,17.833],[31.641,17.096],[30.904,14.622],[30.21,14.246],[30.85,12.801],[31.594,13.062],[33.922,11.948],[32.805,9.621],[32.066,9.357],[32.516,7.633],[33.292,7.772],[35.409,6.293],[33.93,4.176],[33.146,4.036],[33.32,2.203],[34.116,2.212],[35.962,0.406],[34.158,-1.44],[33.361,-1.448],[33.253,-3.046],[34.039,-3.162],[35.579,-5.234],[33.512,-6.775],[32.723,-6.658],[32.402,-8.078],[33.163,-8.31],[34.366,-10.592],[32.09,-11.8],[31.326,-11.567],[30.745,-13.036],[31.46,-13.384],[32.294,-15.827],[29.852,-16.663],[29.141,-16.314],[28.229,-17.846],[28.874,-18.305],[29.305,-20.851],[26.755,-21.28],[26.115,-20.822],[24.928,-22.234],[25.484,-22.789],[25.49,-25.37],[22.906,-25.377],[22.344,-24.817],[21.361,-25.67],[21.833,-26.307],[21.458,-28.86],[18.906,-28.485],[18.432,-27.848],[16.788,-28.866],[17.152,-29.575],[16.354,-32.029],[13.9,-31.235],[13.536,-30.528],[12.077,-31.136],[12.324,-31.888],[11.154,-34.189],[8.855,-33.02],[8.605,-32.267],[6.874,-32.681],[6.993,-33.463],[5.467,-35.545],[3.385,-34.019],[3.266,-33.239],[1.426,-33.368],[1.415,-34.157],[-0.432,-35.962],[-2.232,-34.114],[-2.223,-33.313],[-3.046,-33.255],[-3.163,-34.04],[-5.232,-35.58],[-6.773,-33.509],[-6.658,-32.722],[-7.605,-32.511],[-7.831,-33.279],[-10.096,-34.517],[-11.335,-32.251],[-11.111,-31.496],[-12.59,-30.937],[-12.928,-31.648],[-15.359,-32.518],[-16.23,-30.088],[-15.893,-29.373],[-17.434,-28.483],[-17.885,-29.136],[-20.423,-29.601],[-20.887,-27.062],[-20.441,-26.409],[-21.867,-25.24],[-22.421,-25.81],[-25.001,-25.853],[-25.044,-23.273],[-24.49,-22.702],[-25.669,-21.36],[-26.305,-21.835],[-28.857,-21.458],[-28.482,-18.906],[-27.846,-18.431],[-28.464,-17.454],[-29.167,-17.833],[-31.639,-17.095],[-30.902,-14.621],[-30.208,-14.246],[-30.848,-12.802],[-31.59,-13.064],[-33.921,-11.948],[-32.803,-9.619],[-32.066,-9.359],[-32.514,-7.633],[-33.292,-7.771],[-35.408,-6.296],[-33.93,-4.176],[-33.146,-4.037],[-33.316,-2.202],[-34.113,-2.21],[-35.964,-0.406],[-34.156,1.44],[-33.363,1.448],[-33.255,3.046],[-34.038,3.163],[-35.579,5.235],[-33.508,6.775],[-32.721,6.658],[-32.404,8.079],[-33.16,8.311],[-34.37,10.594],[-32.087,11.8],[-31.322,11.565],[-30.742,13.035],[-31.458,13.385],[-32.294,15.827],[-29.852,16.663],[-29.141,16.313],[-28.23,17.846],[-28.874,18.305],[-29.301,20.851],[-26.757,21.281],[-26.117,20.823],[-24.928,22.235],[-25.484,22.789],[-25.488,25.369]],\"c\":true},\"ix\":2},\"nm\":\"Path 6\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.309430051317,0.444750886805,0.097836767458,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[36.222,36.224],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":8,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":350,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"Layer 5 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"t\":349,\"s\":[-360]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[376.994,230.868,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[23.194,23.204,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":55.992,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":175,\"s\":[131,131,100]},{\"t\":295.9921875,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.412,2.743],[0,0],[-1.453,-0.613],[-1.431,0.325],[0,0],[3.065,1.29]],\"o\":[[0,0],[0.768,1.247],[1.458,0.612],[0,0],[-2.948,0.913],[-3.069,-1.29]],\"v\":[[-12.109,6.238],[-6.208,3.829],[-2.837,6.721],[1.592,7.107],[3.998,13.009],[-5.286,12.552]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.293,3.066],[-2.745,1.41],[0,0],[0.613,-1.456],[-0.324,-1.428],[0,0]],\"o\":[[1.287,-3.066],[0,0],[-1.246,0.771],[-0.612,1.455],[0,0],[-0.912,-2.946]],\"v\":[[-12.557,-5.275],[-6.243,-12.097],[-3.838,-6.196],[-6.73,-2.824],[-7.115,1.602],[-13.018,4.009]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[-3.068,-1.29],[-1.41,-2.743],[0,0],[1.455,0.612],[1.43,-0.324],[0,0]],\"o\":[[3.067,1.288],[0,0],[-0.77,-1.251],[-1.453,-0.611],[0,0],[2.948,-0.911]],\"v\":[[5.268,-12.547],[12.089,-6.233],[6.188,-3.824],[2.817,-6.718],[-1.609,-7.103],[-4.018,-13.006]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.944,0.816],[-0.815,1.943],[-1.942,-0.817],[0.815,-1.942]],\"o\":[[-1.942,-0.817],[0.816,-1.942],[1.942,0.814],[-0.818,1.942]],\"v\":[[-1.488,3.518],[-3.523,-1.477],[1.468,-3.513],[3.507,1.48]],\"c\":true},\"ix\":2},\"nm\":\"Path 4\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":4,\"ty\":\"sh\",\"ix\":5,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.286,-3.066],[2.742,-1.412],[0,0],[-0.617,1.455],[0.324,1.432],[0,0]],\"o\":[[-1.29,3.067],[0,0],[1.25,-0.772],[0.606,-1.456],[0,0],[0.911,2.949]],\"v\":[[12.541,5.278],[6.227,12.102],[3.817,6.201],[6.714,2.828],[7.098,-1.599],[12.999,-4.007]],\"c\":true},\"ix\":2},\"nm\":\"Path 5\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":5,\"ty\":\"sh\",\"ix\":6,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.981,-0.833],[0.681,-2.042],[-3.105,0.609],[-2.072,0.844],[-0.895,-2.072],[-1.83,2.788],[-0.886,2.112],[-2.11,-0.874],[0.688,3.137],[0.854,2.101],[-2.019,0.921],[2.786,1.758],[2.017,0.848],[-0.603,2.012],[3.041,-0.675],[1.94,-0.792],[1.05,1.708],[1.75,-2.682],[0.796,-1.887],[1.928,0.434],[-0.602,-3.024],[-0.779,-1.915],[1.76,-1.029],[-2.675,-1.813]],\"o\":[[2.014,0.849],[3.203,0.759],[-0.752,-2.086],[2.101,-0.857],[2.722,-1.704],[-2.099,-0.897],[0.885,-2.109],[0.714,-3.261],[-2.105,0.81],[-0.843,-2.073],[-1.74,-2.645],[-0.982,1.916],[-1.981,-0.831],[-3.165,-0.64],[0.496,1.974],[-1.91,0.78],[-2.574,1.684],[1.657,1.075],[-0.791,1.885],[-0.691,3.124],[1.951,-0.448],[0.793,1.942],[1.644,2.643],[1.011,-1.838]],\"v\":[[-7.55,17.012],[-5.222,22.158],[4.346,22.345],[6.684,17.088],[12.072,19.29],[19.006,12.509],[16.809,7.072],[22.23,4.843],[22.225,-4.857],[16.882,-7.165],[19.006,-12.514],[12.175,-19.221],[6.869,-17.287],[4.495,-22.314],[-4.911,-22.222],[-7.372,-17.363],[-12.486,-19.041],[-19.062,-12.447],[-17.493,-7.348],[-22.234,-4.905],[-22.342,4.41],[-17.568,6.89],[-19.32,12.048],[-12.801,18.833]],\"c\":true},\"ix\":2},\"nm\":\"Path 6\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.456919322294,0.175225904876,0.094110526291,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[23.193,23.204],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":8,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":350,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":4,\"nm\":\"Layer 7 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"t\":349,\"s\":[-360]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[374.171,297.603,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[38.297,38.297,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":55.992,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":175,\"s\":[81,81,100]},{\"t\":295.9921875,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.507,7.153],[0,0],[-3.24,-2.409],[-3.744,0.128],[0,0],[6.333,4.706]],\"o\":[[0,0],[0.956,3.622],[3.24,2.408],[0,0],[-7.285,0.614],[-6.329,-4.706]],\"v\":[[-30.402,6.425],[-16.567,4.389],[-10.23,13.757],[0.566,17.128],[2.602,30.963],[-18.548,24.941]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-4.707,6.329],[-7.155,1.509],[0,0],[2.411,-3.243],[-0.127,-3.745],[0,0]],\"o\":[[4.707,-6.331],[0,0],[-3.621,0.958],[-2.412,3.238],[0,0],[-0.617,-7.286]],\"v\":[[-24.941,-18.543],[-6.425,-30.401],[-4.39,-16.568],[-13.757,-10.226],[-17.129,0.569],[-30.964,2.603]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-6.327,-4.706],[-1.509,-7.155],[0,0],[3.241,2.41],[3.744,-0.126]],\"o\":[[7.287,-0.614],[6.33,4.707],[0,0],[-0.961,-3.622],[-3.238,-2.407],[0,0]],\"v\":[[-2.604,-30.962],[18.539,-24.94],[30.4,-6.423],[16.567,-4.389],[10.227,-13.757],[-0.568,-17.13]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.878,2.137],[-2.134,2.873],[-2.875,-2.136],[2.138,-2.874]],\"o\":[[-2.87,-2.138],[2.142,-2.874],[2.874,2.138],[-2.135,2.875]],\"v\":[[-3.875,5.206],[-5.209,-3.869],[3.869,-5.206],[5.202,3.869]],\"c\":true},\"ix\":2},\"nm\":\"Path 4\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":4,\"ty\":\"sh\",\"ix\":5,\"ks\":{\"a\":0,\"k\":{\"i\":[[4.707,-6.329],[7.156,-1.51],[0,0],[-2.409,3.24],[0.13,3.744],[0,0]],\"o\":[[-4.706,6.329],[0,0],[3.621,-0.958],[2.413,-3.24],[0,0],[0.612,7.284]],\"v\":[[24.936,18.542],[6.421,30.4],[4.387,16.566],[13.753,10.227],[17.125,-0.568],[30.963,-2.602]],\"c\":true},\"ix\":2},\"nm\":\"Path 5\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":5,\"ty\":\"sh\",\"ix\":6,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.757,0.753],[0,0],[-0.355,-0.296],[0,0],[-0.853,-0.634],[-0.632,0.856],[0,0],[-0.586,-0.341],[0,0],[-0.95,-0.486],[-0.484,0.949],[0,0],[-0.522,-0.199],[0,0],[-1.014,-0.33],[-0.333,1.013],[0,0],[-0.614,-0.129],[0,0],[-1.051,-0.161],[-0.162,1.055],[0,0],[-0.649,-0.026],[0,0],[-1.063,0.012],[0.015,1.068],[0,0],[-0.289,0.026],[0,0],[-1.055,0.155],[0.155,1.053],[0,0],[-0.332,0.078],[0,0],[-1.027,0.299],[0.299,1.025],[0,0],[-0.515,0.211],[0,0],[-0.962,0.454],[0.457,0.964],[0,0],[-0.535,0.33],[0,0],[-0.877,0.603],[0.606,0.879],[0,0],[-0.495,0.428],[0,0],[-0.764,0.741],[0.74,0.767],[0,0],[-0.408,0.486],[0,0],[-0.635,0.856],[0.858,0.637],[0,0],[-0.215,0.348],[0,0],[-0.51,0.936],[0.943,0.506],[0,0],[-0.213,0.512],[0,0],[-0.353,1.007],[1.007,0.354],[0,0],[-0.142,0.61],[0,0],[-0.185,1.051],[1.05,0.189],[0,0],[-0.041,0.647],[0,0],[-0.011,1.066],[1.069,0.013],[0,0],[0.051,0.561],[0,0],[0.156,1.052],[1.058,-0.155],[0,0],[0.123,0.499],[0,0],[0.315,1.02],[1.016,-0.315],[0,0],[0.219,0.515],[0,0],[0.466,0.96],[0.955,-0.47],[0,0],[0.334,0.532],[0,0],[0.621,0.87],[0.87,-0.616],[0,0],[0.435,0.486],[0,0],[0.754,0.755],[0.757,-0.752],[0,0],[0.356,0.293],[0,0],[0.852,0.636],[0.637,-0.857],[0,0],[0.586,0.34],[0,0],[0.95,0.485],[0.487,-0.949],[0,0],[0.517,0.204],[0,0],[1.013,0.332],[0.332,-1.013],[0,0],[0.611,0.131],[0,0],[1.049,0.163],[0.166,-1.056],[0,0],[0.648,0.027],[0,0],[1.066,-0.012],[-0.014,-1.066],[0,0],[0.287,-0.025],[0,0],[1.055,-0.157],[-0.157,-1.057],[0,0],[0.332,-0.076],[0,0],[1.021,-0.297],[-0.297,-1.026],[0,0],[0.521,-0.209],[0,0],[0.965,-0.457],[-0.456,-0.966],[0,0],[0.541,-0.329],[0,0],[0.875,-0.605],[-0.602,-0.875],[0,0],[0.495,-0.428],[0,0],[0.768,-0.739],[-0.744,-0.767],[0,0],[0.404,-0.488],[0,0],[0.637,-0.856],[-0.852,-0.634],[0,0],[0.212,-0.348],[0,0],[0.509,-0.937],[-0.936,-0.506],[0,0],[0.215,-0.515],[0,0],[0.351,-1.005],[-1.006,-0.354],[0,0],[0.14,-0.61],[0,0],[0.187,-1.05],[-1.051,-0.187],[0,0],[0.041,-0.647],[0,0],[0.011,-1.067],[-1.066,-0.014],[0,0],[-0.051,-0.563],[0,0],[-0.155,-1.055],[-1.055,0.156],[0,0],[-0.123,-0.498],[0,0],[-0.315,-1.017],[-1.021,0.313],[0,0],[-0.219,-0.511],[0,0],[-0.473,-0.957],[-0.956,0.468],[0,0],[-0.338,-0.533],[0,0],[-0.617,-0.87],[-0.867,0.618],[0,0],[-0.434,-0.486],[0,0],[-0.755,-0.756]],\"o\":[[0,0],[0.34,0.304],[0,0],[-0.635,0.854],[0.858,0.636],[0,0],[0.575,0.379],[0,0],[-0.489,0.948],[0.949,0.485],[0,0],[0.513,0.227],[0,0],[-0.333,1.014],[1.013,0.331],[0,0],[0.609,0.164],[0,0],[-0.159,1.051],[1.057,0.162],[0,0],[0.645,0.062],[0,0],[0.01,1.064],[1.068,-0.015],[0,0],[0.291,-0.019],[0,0],[0.156,1.055],[1.052,-0.155],[0,0],[0.336,-0.069],[0,0],[0.297,1.027],[1.022,-0.301],[0,0],[0.528,-0.186],[0,0],[0.453,0.964],[0.963,-0.457],[0,0],[0.549,-0.296],[0,0],[0.609,0.877],[0.883,-0.606],[0,0],[0.514,-0.396],[0,0],[0.741,0.767],[0.767,-0.742],[0,0],[0.426,-0.456],[0,0],[0.852,0.635],[0.637,-0.857],[0,0],[0.228,-0.341],[0,0],[0.936,0.506],[0.506,-0.937],[0,0],[0.235,-0.506],[0,0],[1.004,0.356],[0.356,-1.006],[0,0],[0.176,-0.604],[0,0],[1.05,0.187],[0.186,-1.05],[0,0],[0.079,-0.648],[0,0],[1.066,0.011],[0.015,-1.066],[0,0],[-0.026,-0.564],[0,0],[1.052,-0.157],[-0.154,-1.056],[0,0],[-0.103,-0.504],[0,0],[1.018,-0.314],[-0.313,-1.018],[0,0],[-0.192,-0.522],[0,0],[0.955,-0.47],[-0.472,-0.955],[0,0],[-0.304,-0.546],[0,0],[0.87,-0.617],[-0.62,-0.867],[0,0],[-0.404,-0.508],[0,0],[0.754,-0.754],[-0.75,-0.758],[0,0],[-0.34,-0.308],[0,0],[0.637,-0.854],[-0.855,-0.636],[0,0],[-0.573,-0.379],[0,0],[0.486,-0.951],[-0.949,-0.486],[0,0],[-0.51,-0.226],[0,0],[0.332,-1.014],[-1.013,-0.331],[0,0],[-0.609,-0.161],[0,0],[0.166,-1.054],[-1.055,-0.161],[0,0],[-0.649,-0.065],[0,0],[-0.013,-1.067],[-1.07,0.013],[0,0],[-0.289,0.02],[0,0],[-0.157,-1.055],[-1.056,0.154],[0,0],[-0.334,0.066],[0,0],[-0.298,-1.024],[-1.023,0.3],[0,0],[-0.529,0.186],[0,0],[-0.457,-0.963],[-0.965,0.455],[0,0],[-0.553,0.299],[0,0],[-0.604,-0.878],[-0.881,0.605],[0,0],[-0.51,0.396],[0,0],[-0.744,-0.767],[-0.766,0.745],[0,0],[-0.424,0.461],[0,0],[-0.851,-0.636],[-0.636,0.856],[0,0],[-0.228,0.341],[0,0],[-0.94,-0.506],[-0.504,0.938],[0,0],[-0.237,0.505],[0,0],[-1.003,-0.355],[-0.359,1.005],[0,0],[-0.177,0.603],[0,0],[-1.046,-0.185],[-0.188,1.049],[0,0],[-0.079,0.644],[0,0],[-1.067,-0.011],[-0.013,1.065],[0,0],[0.022,0.564],[0,0],[-1.052,0.155],[0.154,1.053],[0,0],[0.103,0.501],[0,0],[-1.018,0.314],[0.314,1.019],[0,0],[0.193,0.521],[0,0],[-0.959,0.47],[0.467,0.956],[0,0],[0.307,0.55],[0,0],[-0.867,0.617],[0.619,0.868],[0,0],[0.407,0.507],[0,0],[-0.76,0.753],[0.75,0.755]],\"v\":[[-24.229,26.84],[-23.633,26.247],[-22.593,27.151],[-23.093,27.824],[-22.699,30.523],[-19.999,30.126],[-19.498,29.452],[-17.755,30.529],[-18.138,31.281],[-17.298,33.877],[-14.703,33.036],[-14.319,32.286],[-12.773,32.928],[-13.037,33.728],[-11.798,36.161],[-9.362,34.924],[-9.105,34.127],[-7.27,34.565],[-7.4,35.396],[-5.787,37.595],[-3.582,35.98],[-3.453,35.154],[-1.507,35.29],[-1.498,36.128],[0.454,38.035],[2.362,36.079],[2.354,35.234],[3.221,35.169],[3.344,36.003],[5.534,37.632],[7.164,35.441],[7.041,34.608],[8.043,34.386],[8.282,35.196],[10.68,36.508],[11.987,34.112],[11.753,33.312],[13.316,32.72],[13.672,33.473],[16.242,34.395],[17.164,31.822],[16.807,31.066],[18.44,30.124],[18.916,30.815],[21.598,31.308],[22.094,28.622],[21.617,27.931],[23.125,26.696],[23.709,27.299],[26.438,27.345],[26.487,24.614],[25.901,24.008],[27.151,22.592],[27.826,23.093],[30.522,22.696],[30.125,19.995],[29.452,19.494],[30.106,18.458],[30.848,18.862],[33.464,18.081],[32.682,15.465],[31.952,15.068],[32.625,13.54],[33.414,13.815],[35.875,12.636],[34.695,10.175],[33.912,9.897],[34.388,8.073],[35.209,8.219],[37.449,6.657],[35.884,4.417],[35.059,4.271],[35.239,2.328],[36.081,2.338],[38.032,0.429],[36.121,-1.524],[35.284,-1.533],[35.168,-3.222],[36.002,-3.343],[37.631,-5.535],[35.438,-7.166],[34.609,-7.043],[34.272,-8.545],[35.072,-8.79],[36.347,-11.204],[33.936,-12.481],[33.13,-12.233],[32.515,-13.788],[33.272,-14.156],[34.157,-16.742],[31.573,-17.624],[30.817,-17.256],[29.858,-18.875],[30.535,-19.362],[30.989,-22.054],[28.297,-22.508],[27.619,-22.022],[26.364,-23.516],[26.953,-24.102],[26.957,-26.832],[24.227,-26.841],[23.631,-26.246],[22.592,-27.148],[23.091,-27.825],[22.695,-30.524],[19.994,-30.126],[19.493,-29.453],[17.754,-30.529],[18.136,-31.279],[17.295,-33.877],[14.698,-33.036],[14.317,-32.288],[12.776,-32.933],[13.034,-33.729],[11.796,-36.162],[9.362,-34.925],[9.102,-34.128],[7.27,-34.566],[7.393,-35.393],[5.783,-37.596],[3.578,-35.98],[3.452,-35.155],[1.506,-35.291],[1.496,-36.127],[-0.457,-38.035],[-2.367,-36.081],[-2.355,-35.234],[-3.221,-35.172],[-3.343,-36.004],[-5.537,-37.631],[-7.165,-35.441],[-7.043,-34.608],[-8.046,-34.388],[-8.284,-35.197],[-10.677,-36.509],[-11.99,-34.111],[-11.754,-33.313],[-13.32,-32.721],[-13.672,-33.472],[-16.246,-34.393],[-17.166,-31.823],[-16.81,-31.067],[-18.445,-30.125],[-18.921,-30.815],[-21.601,-31.308],[-22.099,-28.623],[-21.621,-27.93],[-23.131,-26.694],[-23.711,-27.298],[-26.443,-27.346],[-26.488,-24.614],[-25.906,-24.011],[-27.15,-22.592],[-27.828,-23.093],[-30.527,-22.696],[-30.13,-19.997],[-29.453,-19.494],[-30.108,-18.46],[-30.849,-18.862],[-33.468,-18.082],[-32.687,-15.466],[-31.954,-15.067],[-32.631,-13.539],[-33.418,-13.815],[-35.875,-12.638],[-34.699,-10.175],[-33.916,-9.897],[-34.39,-8.074],[-35.215,-8.221],[-37.449,-6.657],[-35.886,-4.418],[-35.059,-4.269],[-35.242,-2.329],[-36.084,-2.34],[-38.034,-0.429],[-36.125,1.524],[-35.285,1.531],[-35.173,3.224],[-36.004,3.345],[-37.632,5.537],[-35.445,7.164],[-34.609,7.043],[-34.273,8.544],[-35.076,8.791],[-36.351,11.203],[-33.936,12.481],[-33.132,12.232],[-32.517,13.784],[-33.273,14.157],[-34.154,16.74],[-31.574,17.624],[-30.82,17.254],[-29.857,18.875],[-30.541,19.362],[-30.994,22.054],[-28.303,22.506],[-27.623,22.024],[-26.367,23.517],[-26.951,24.103],[-26.959,26.834]],\"c\":true},\"ix\":2},\"nm\":\"Path 6\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.270827409333,0.698474360447,0.556916599648,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[38.297,38.297],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":8,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":350,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":9,\"ty\":4,\"nm\":\"Layer 4 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"t\":349,\"s\":[-360]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[245.504,314.475,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[29.136,29.152,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.779,3.453],[0,0],[-1.834,-0.77],[-1.802,0.406],[0,0],[3.857,1.623]],\"o\":[[0,0],[0.97,1.569],[1.833,0.772],[0,0],[-3.711,1.146],[-3.86,-1.626]],\"v\":[[-15.246,7.853],[-7.815,4.824],[-3.568,8.463],[2.004,8.952],[5.037,16.381],[-6.654,15.804]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.624,3.861],[-3.454,1.778],[0,0],[0.774,-1.833],[-0.408,-1.803],[0,0]],\"o\":[[1.623,-3.861],[0,0],[-1.571,0.968],[-0.772,1.832],[0,0],[-1.144,-3.711]],\"v\":[[-15.811,-6.64],[-7.861,-15.231],[-4.83,-7.798],[-8.473,-3.554],[-8.958,2.019],[-16.391,5.049]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[-3.86,-1.623],[-1.776,-3.454],[0,0],[1.832,0.77],[1.802,-0.406],[0,0]],\"o\":[[3.862,1.623],[0,0],[-0.969,-1.572],[-1.83,-0.77],[0,0],[3.709,-1.147]],\"v\":[[6.634,-15.797],[15.223,-7.847],[7.793,-4.815],[3.545,-8.458],[-2.027,-8.944],[-5.057,-16.375]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.442,1.027],[-1.028,2.446],[-2.447,-1.031],[1.027,-2.445]],\"o\":[[-2.446,-1.028],[1.028,-2.445],[2.44,1.028],[-1.027,2.445]],\"v\":[[-1.87,4.43],[-4.438,-1.857],[1.853,-4.422],[4.414,1.864]],\"c\":true},\"ix\":2},\"nm\":\"Path 4\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":4,\"ty\":\"sh\",\"ix\":5,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.624,-3.861],[3.451,-1.778],[0,0],[-0.771,1.828],[0.408,1.802],[0,0]],\"o\":[[-1.622,3.859],[0,0],[1.568,-0.97],[0.774,-1.836],[0,0],[1.147,3.712]],\"v\":[[15.79,6.648],[7.84,15.238],[4.809,7.806],[8.449,3.563],[8.936,-2.012],[16.368,-5.043]],\"c\":true},\"ix\":2},\"nm\":\"Path 5\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":5,\"ty\":\"sh\",\"ix\":6,\"ks\":{\"a\":0,\"k\":{\"i\":[[-2.492,-1.05],[0.857,-2.57],[-3.91,0.767],[-2.607,1.064],[-1.128,-2.609],[-2.303,3.511],[-1.113,2.657],[-2.659,-1.099],[0.868,3.95],[1.078,2.644],[-2.537,1.161],[3.507,2.216],[2.54,1.068],[-0.763,2.531],[3.83,-0.849],[2.445,-0.997],[1.318,2.149],[2.199,-3.378],[1,-2.374],[2.43,0.544],[-0.755,-3.805],[-0.985,-2.411],[2.215,-1.292],[-3.366,-2.282]],\"o\":[[2.543,1.07],[4.037,0.959],[-0.946,-2.628],[2.642,-1.079],[3.429,-2.142],[-2.645,-1.13],[1.117,-2.657],[0.898,-4.104],[-2.657,1.021],[-1.066,-2.611],[-2.191,-3.331],[-1.237,2.414],[-2.491,-1.047],[-3.984,-0.81],[0.623,2.488],[-2.41,0.983],[-3.245,2.121],[2.086,1.351],[-1,2.376],[-0.873,3.932],[2.457,-0.562],[0.994,2.444],[2.074,3.333],[1.275,-2.313]],\"v\":[[-9.51,21.419],[-6.574,27.896],[5.473,28.135],[8.418,21.514],[15.198,24.286],[23.93,15.749],[21.16,8.906],[27.989,6.098],[27.983,-6.115],[21.258,-9.02],[23.928,-15.754],[15.331,-24.201],[8.649,-21.764],[5.663,-28.092],[-6.18,-27.978],[-9.279,-21.859],[-15.718,-23.973],[-23.999,-15.669],[-22.023,-9.252],[-27.994,-6.174],[-28.132,5.552],[-22.115,8.676],[-24.322,15.166],[-16.119,23.711]],\"c\":true},\"ix\":2},\"nm\":\"Path 6\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.456919322294,0.175225904876,0.094110526291,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[29.136,29.152],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":8,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":350,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":10,\"ty\":4,\"nm\":\"Layer 13 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[156.736,274.386,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[28.561,36.009,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":55.992,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":175,\"s\":[81,81,100]},{\"t\":295.9921875,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[2.747,7.462],[1.298,-7.421],[-1.259,-7.462],[-2.747,7.462]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.557575659658,0,0.004664095243,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[28.374,64.062],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.42,-0.449],[0.57,0.448],[-0.49,0.58],[-0.979,-0.021],[-0.241,-0.322]],\"o\":[[-0.42,0.449],[-0.57,-0.451],[0.257,-0.303],[0.881,0.021],[0.509,0.677]],\"v\":[[1.414,1.635],[-1.252,1.696],[-2.121,-1.841],[0.127,-1.751],[2.102,-1.77]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.557575659658,0,0.004664095243,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[28.278,55.235],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.798,3.45],[7.961,0],[2.12,-4.071],[0,0],[-1.629,-3.001],[0,0],[0,0],[-1.391,0.696],[-0.174,0.695],[-2.742,1.226],[-3.8,-0.044],[-1.252,-0.558],[-0.176,-0.695],[-1.393,-0.696],[0,0],[0,0],[-0.258,0.478],[0,0]],\"o\":[[-2.108,-4.046],[-7.962,0],[-1.8,3.449],[0,0],[0.26,0.479],[0,0],[0,0],[1.392,-0.696],[0.174,-0.696],[1.231,-0.551],[3.864,0.044],[2.741,1.227],[0.172,0.698],[1.39,0.695],[0,0],[0,0],[1.633,-3.001],[0,0]],\"v\":[[16.605,-7.374],[0.82,-14.943],[-16.602,-7.569],[-18.236,7.178],[-14.908,7.373],[-14.255,13.638],[-12.949,14.748],[-12.363,8.091],[-10.73,4.96],[-8.904,-1.761],[0.036,0],[8.906,-1.566],[10.734,5.155],[12.365,8.287],[12.954,14.943],[14.255,13.834],[14.908,7.569],[18.236,7.373]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.100101388669,0.10010137371,0.10010138119,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[27.746,15.193],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,2.466],[-2.52,1.389],[0,0],[0,0],[0,0],[-2.145,-1.387],[-0.179,-2.637]],\"o\":[[0,0],[0,0],[0,-2.464],[2.516,-1.388],[0,0],[0,0],[0,0],[2.146,1.389],[0.18,2.636]],\"v\":[[24.951,13.965],[-24.607,13.865],[-28.311,-3.423],[-25.338,-8.411],[-10.083,-13.965],[-0.362,-4.782],[8.281,-13.965],[25.087,-8.382],[28.131,-2.912]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[28.56,57.802],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-4.003],[3.984,-3.047],[1.121,1.036],[0.406,6.311],[-0.426,4.903],[-5,0],[-0.324,-9.179]],\"o\":[[0,5.929],[-0.787,0.602],[-4.76,-4.406],[-0.292,-4.527],[0.813,-9.369],[5.35,0],[0.17,4.78]],\"v\":[[14.425,5.024],[2.886,20.692],[-4.292,20.331],[-14.413,5.024],[-14.413,-8.746],[0.208,-21.367],[14.669,-6.642]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.940977926815,0.736902154661,0.582743386661,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[27.886,24.488],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[1.99,-0.817],[-1.177,-0.785],[0,0]],\"o\":[[0,0],[-2.707,1.109],[1.246,0.833],[0,0]],\"v\":[[2.878,-1.326],[-0.171,-4.656],[0.868,4.64],[2.603,5.057]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.940977926815,0.736902154661,0.582743386661,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[10.771,25.868],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-1.992,-0.817],[1.175,-0.785],[0,0]],\"o\":[[0,0],[2.706,1.109],[-1.25,0.833],[0,0]],\"v\":[[-2.878,-1.326],[0.173,-4.656],[-0.866,4.64],[-2.603,5.057]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.940977926815,0.736902154661,0.582743386661,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[44.473,25.868],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[6.526,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[-6.525,0],[0,0],[0,0],[0,0]],\"v\":[[8.027,1.523],[0.977,9.962],[-8.027,1.785],[-6.331,-9.962],[5.936,-9.962]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.891316552256,0.625856646369,0.496961675906,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[27.654,44.926],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":350,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":11,\"ty\":4,\"nm\":\"Layer 10 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[296.686,239.014,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[24.395,34.192,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":55.992,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":175,\"s\":[84,84,100]},{\"t\":295.9921875,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-3.191,1.835],[-0.156,3.044],[0,0],[-1.916,5.662],[0,0],[-1.135,-1.592],[2.112,3.667],[5.759,-0.368],[4.422,-7.241],[0,0],[-6.263,-1.871]],\"o\":[[0,0],[3.706,-2.133],[0.34,4.782],[0,0],[1.153,3.834],[0,0],[0.607,-4.17],[-2.786,-4.832],[-3.055,-1.576],[-4.425,7.243],[0,0],[-3.414,-6.056]],\"v\":[[-10.582,2.096],[-3.219,-0.706],[1.826,-7.934],[-1.11,-1.305],[6.314,-7.331],[14.385,0.289],[17.26,-0.374],[15.714,-13.173],[3.647,-20.118],[-13.442,-14.855],[-16.941,7.593],[-8.654,22.096]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.300187054802,0.122107554417,0.012864046471,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[22.648,22.346],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0.018,2.269],[-2.132,1.294],[-3.328,1.255],[-6.444,0.054],[-0.928,4.17],[-1.045,-0.719],[-0.174,-2.424]],\"o\":[[0,0],[0,0],[-0.019,-2.269],[1.288,-0.781],[0.504,3.038],[6.446,-0.052],[3.691,1.183],[1.84,1.263],[0.172,2.425]],\"v\":[[21.388,11.026],[-20.841,11.281],[-24.125,-4.601],[-21.632,-9.211],[-11.674,-11.281],[0.083,-2.89],[11.227,-10.988],[21.333,-9.538],[23.973,-4.527]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.877636000689,0.071133363013,0.05528792961,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[24.395,56.854],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.033,-3.683],[3.643,-2.833],[1.037,0.945],[0.422,5.803],[-0.353,4.513],[-4.598,0.037],[-0.371,-8.443]],\"o\":[[0.045,5.455],[-0.719,0.56],[-4.413,-4.02],[-0.303,-4.165],[0.678,-8.63],[4.928,-0.041],[0.193,4.398]],\"v\":[[13.332,4.521],[2.832,19.027],[-3.775,18.75],[-13.203,4.741],[-13.309,-7.929],[0.049,-19.654],[13.469,-6.215]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.940977926815,0.736902154661,0.582743386661,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[23.691,24.545],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-1.839,-0.738],[1.079,-0.732],[0,0]],\"o\":[[0,0],[2.501,1.001],[-1.144,0.775],[0,0]],\"v\":[[-2.641,-1.213],[0.14,-4.299],[-0.745,4.262],[-2.337,4.657]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.940977926815,0.736902154661,0.582743386661,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[38.967,25.712],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.536,-1.606],[3.467,-0.028],[1.176,2.215],[0,0],[0,0],[0,0]],\"o\":[[0,0],[-0.738,2.196],[-3.881,0.033],[-0.642,-1.211],[0,0],[0,0],[0,0]],\"v\":[[7.23,-0.974],[13.428,3.059],[0.683,11.49],[-13.322,2.318],[-7.544,-0.611],[-6.07,-11.433],[5.218,-11.523]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.891316552256,0.625856646369,0.496961675906,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[23.82,45.674],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[2.292,-3.862],[0,0],[-0.04,3.884],[0,0]],\"o\":[[0,0],[-1.156,1.95],[0,0],[0.044,-4.404],[0,0]],\"v\":[[3.964,-7.383],[1.44,7.049],[-3.964,12.058],[-1.678,-2.132],[-1.999,-12.058]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.300187054802,0.122107554417,0.012864046471,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[35.887,32.157],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[1.109,-1.371],[2.179,1.742]],\"o\":[[0,0],[0,0],[-2.145,2.34],[-2.173,-1.743]],\"v\":[[-10.678,-8.433],[11.498,-8.615],[11.621,6.275],[-10.558,6.458]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.150519651525,0.070345022164,0.04451935338,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[22.209,35.922],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":350,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":12,\"ty\":4,\"nm\":\"Capa 1 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[139.494,130.429,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[23.675,33.427,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":55.992,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":175,\"s\":[126,126,100]},{\"t\":295.9921875,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-6.924,2.762],[-1.577,1.689],[0,0],[-1.066,-1.571],[1.971,3.605],[5.6,-0.234],[4.448,-6.938],[0,0]],\"o\":[[6.413,-2.556],[2.898,4.239],[0,0],[-1.168,-5.616],[-2.604,-4.751],[-2.935,-1.595],[-4.449,6.939],[0,0]],\"v\":[[-4.838,8.753],[6.125,3.148],[13.801,10.718],[16.607,10.135],[15.379,-2.326],[3.808,-9.327],[-12.901,-4.577],[-15.887,9.07]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.100101388669,0.10010137371,0.10010138119,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[22.806,11.765],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-0.031,2.202],[-2.1,1.212],[-3.258,1.148],[0,0],[-6.26,-0.084],[0,0],[-2.688,-0.926],[-1.007,-0.72],[-0.115,-2.357]],\"o\":[[0,0],[0,0],[0.029,-2.204],[1.266,-0.732],[2.148,-0.759],[0,0],[6.259,0.085],[0,0],[3.558,1.228],[1.756,1.265],[0.117,2.359]],\"v\":[[20.471,12.678],[-20.542,12.031],[-23.395,-3.46],[-20.875,-7.884],[-11.161,-9.682],[-8.182,-12.678],[-0.247,-4.362],[7.018,-12.471],[11.068,-8.914],[20.859,-7.291],[23.309,-2.37]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.997606165269,0.650831514246,0.127642358518,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[23.675,53.926],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.051,-3.578],[3.597,-2.672],[0.988,0.94],[0.288,5.646],[-0.441,4.376],[-4.469,-0.061],[-0.175,-8.207]],\"o\":[[-0.07,5.299],[-0.71,0.531],[-4.201,-3.996],[-0.207,-4.048],[0.84,-8.364],[4.783,0.065],[0.092,4.274]],\"v\":[[12.795,4.713],[2.297,18.573],[-4.115,18.166],[-12.973,4.362],[-12.807,-7.942],[0.414,-19.045],[13.156,-5.709]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.940977926815,0.736902154661,0.582743386661,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[23.663,24.016],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-1.772,-0.754],[1.062,-0.688],[0,0]],\"o\":[[0,0],[2.406,1.025],[-1.127,0.727],[0,0]],\"v\":[[-2.587,-1.197],[0.181,-4.135],[-0.862,4.161],[-2.417,4.511]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.940977926815,0.736902154661,0.582743386661,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[38.469,25.473],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[5.83,0.08],[0,0],[0,0],[0,0]],\"o\":[[0,0],[-5.832,-0.08],[0,0],[0,0],[0,0]],\"v\":[[7.175,1.451],[0.775,8.908],[-7.175,1.49],[-5.516,-8.988],[5.448,-8.837]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.891316552256,0.625856646369,0.496961675906,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[23.155,42.334],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.927,-2.325],[1.276,0.338],[-1.424,0.113],[-1.5,-0.849],[0.457,-1.101],[-1.045,-0.176],[0.682,-0.801],[0.315,-1.326],[-0.924,-0.861],[0.014,1.306],[0.659,0.144],[-0.446,-2.367],[-1.076,-2.164],[-0.144,1.808],[0.522,-0.885],[-2.894,3.76],[-0.275,-2.411],[0.921,-2.56],[-0.422,5.412],[0.036,-0.85],[-0.367,0.547],[-1.057,0.961],[0,0]],\"o\":[[-0.037,2.624],[-0.436,1.097],[-1.046,-0.278],[-2.043,-0.091],[-1.272,-0.216],[0.769,-0.84],[0.287,1.27],[-0.869,1.02],[-0.252,1.049],[0.901,0.833],[-0.532,0.397],[-0.349,-2.312],[0.373,1.989],[1.445,-0.644],[0.239,0.876],[3.032,-3.828],[-0.348,2.326],[0.301,2.637],[3.044,-2.281],[0.609,0.442],[0.487,-0.197],[0.68,-1.017],[0,0],[0,0]],\"v\":[[-2.663,-13.417],[-2.516,-5.206],[-5.099,-3.141],[-5.29,-5.434],[-5.864,-0.853],[-8.38,1.514],[-5.341,0.32],[-6.923,2.941],[-8.496,6.125],[-8.337,9.604],[-6.136,8.507],[-7.964,9.008],[-5.075,7.926],[-6.483,13.417],[-3.363,9.496],[-3.595,13.032],[-0.88,0.038],[-1.194,7.22],[-1.725,13.302],[4.314,7.885],[5.299,9.954],[7.907,7.781],[9.261,4.497],[4.171,-12.701]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.100101388669,0.10010137371,0.10010138119,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[9.602,33.007],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.918,-2.094],[-1.365,0.268],[1.508,0.137],[1.614,-0.716],[-0.457,-0.992],[1.11,-0.13],[-0.707,-0.732],[-0.301,-1.188],[1.006,-0.741],[-0.051,1.162],[-0.698,0.112],[0.536,-2.094],[1.202,-1.897],[0.104,1.614],[-0.529,-0.8],[2.964,3.423],[0.354,-2.138],[-0.906,-2.301],[0.303,4.827],[-0.017,-0.757],[0.373,0.494],[1.094,0.884]],\"o\":[[-0.031,2.333],[0.433,0.986],[1.115,-0.219],[2.168,-0.027],[1.353,-0.159],[-0.793,-0.768],[-0.337,1.121],[0.89,0.93],[0.24,0.942],[-0.975,0.718],[0.555,0.366],[0.435,-2.048],[-0.449,1.761],[-1.513,-0.611],[-0.277,0.774],[-3.11,-3.486],[0.302,2.079],[-0.387,2.338],[-3.164,-2.109],[-0.655,0.378],[-0.514,-0.189],[-0.693,-0.924],[0,0]],\"v\":[[2.54,-11.993],[2.976,-4.679],[5.661,-2.775],[5.923,-4.809],[6.408,-0.718],[9.015,1.454],[5.826,0.313],[7.435,2.687],[9.017,5.559],[8.755,8.65],[6.448,7.617],[8.371,8.11],[5.343,7.071],[6.686,11.993],[3.483,8.421],[3.636,11.575],[1.138,2.921],[1.247,6.339],[1.645,11.765],[-4.189,5.492],[-5.706,8.602],[-8.413,6.598],[-9.761,3.641]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.100101388669,0.10010137371,0.10010138119,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[36.799,36.223],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":350,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLs2":
/***/ (function(module, exports) {

module.exports = require("react-single-page-navigation");

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
/* harmony import */ var _src_utils_apolloClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2D7x");

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
    return Object(_src_utils_apolloClient__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(initialState, ctx);
  } // Reuse client on the client-side


  if (!globalApolloClient) {
    globalApolloClient = Object(_src_utils_apolloClient__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(initialState, ctx);
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

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "vuC2":
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wmQq":
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "ywLQ":
/***/ (function(module, exports) {

module.exports = require("lodash.throttle");

/***/ })

/******/ });