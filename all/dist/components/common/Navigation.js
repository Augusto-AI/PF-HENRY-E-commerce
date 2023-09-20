"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var ROUTE = _interopRequireWildcard(require("@/constants/routes"));
var _logoFull = _interopRequireDefault(require("@/images/logo-full.png"));
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _UserAvatar = _interopRequireDefault(require("@/views/account/components/UserAvatar"));
var _BasketToggle = _interopRequireDefault(require("../basket/BasketToggle"));
var _Badge = _interopRequireDefault(require("./Badge"));
var _FiltersToggle = _interopRequireDefault(require("./FiltersToggle"));
var _MobileNavigation = _interopRequireDefault(require("./MobileNavigation"));
var _SearchBar = _interopRequireDefault(require("./SearchBar"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable indent */
var Navigation = function Navigation() {
  var navbar = (0, _react.useRef)(null);
  var _useLocation = (0, _reactRouterDom.useLocation)(),
    pathname = _useLocation.pathname;
  var store = (0, _reactRedux.useSelector)(function (state) {
    return {
      basketLength: state.basket.length,
      user: state.auth,
      isAuthenticating: state.app.isAuthenticating,
      isLoading: state.app.loading
    };
  });
  var scrollHandler = function scrollHandler() {
    if (navbar.current && window.screen.width > 480) {
      if (window.pageYOffset >= 70) {
        navbar.current.classList.add('is-nav-scrolled');
      } else {
        navbar.current.classList.remove('is-nav-scrolled');
      }
    }
  };
  (0, _react.useEffect)(function () {
    window.addEventListener('scroll', scrollHandler);
    return function () {
      return window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  var onClickLink = function onClickLink(e) {
    if (store.isAuthenticating) e.preventDefault();
  };

  // disable the basket toggle to these pathnames
  var basketDisabledpathnames = [ROUTE.CHECKOUT_STEP_1, ROUTE.SUCCESS, ROUTE.CHECKOUT_STEP_2, ROUTE.CHECKOUT_STEP_3, ROUTE.SIGNIN, ROUTE.SIGNUP, ROUTE.FORGOT_PASSWORD];
  if (store.user && store.user.role === 'ADMIN') {
    return null;
  }
  if (window.screen.width <= 800) {
    return /*#__PURE__*/_react["default"].createElement(_MobileNavigation["default"]
    // eslint-disable-next-line react/jsx-props-no-spreading
    , _extends({}, store, {
      disabledPaths: basketDisabledpathnames,
      pathname: pathname
    }));
  }
  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: "navigation",
    ref: navbar
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "logo"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    onClick: onClickLink,
    to: "/"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    alt: "Logo",
    src: _logoFull["default"]
  }))), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "navigation-menu-main"
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
    activeClassName: "navigation-menu-active",
    exact: true,
    to: ROUTE.HOME
  }, "Home")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
    activeClassName: "navigation-menu-active",
    to: ROUTE.SHOP
  }, "Shop")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
    activeClassName: "navigation-menu-active",
    to: ROUTE.FEATURED_PRODUCTS
  }, "Featured")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
    activeClassName: "navigation-menu-active",
    to: ROUTE.RECOMMENDED_PRODUCTS
  }, "Recommended"))), (pathname === ROUTE.SHOP || pathname === ROUTE.SEARCH) && /*#__PURE__*/_react["default"].createElement(_FiltersToggle["default"], null, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button-muted button-small",
    type: "button"
  }, "Filters \xA0", /*#__PURE__*/_react["default"].createElement(_icons.FilterOutlined, null))), /*#__PURE__*/_react["default"].createElement(_SearchBar["default"], null), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "navigation-menu"
  }, /*#__PURE__*/_react["default"].createElement("li", {
    className: "navigation-menu-item"
  }, /*#__PURE__*/_react["default"].createElement(_BasketToggle["default"], null, function (_ref) {
    var onClickToggle = _ref.onClickToggle;
    return /*#__PURE__*/_react["default"].createElement("button", {
      className: "button-link navigation-menu-link basket-toggle",
      disabled: basketDisabledpathnames.includes(pathname),
      onClick: onClickToggle,
      type: "button"
    }, /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
      count: store.basketLength
    }, /*#__PURE__*/_react["default"].createElement(_icons.ShoppingOutlined, {
      style: {
        fontSize: '2.4rem'
      }
    })));
  })), store.user ? /*#__PURE__*/_react["default"].createElement("li", {
    className: "navigation-menu-item"
  }, /*#__PURE__*/_react["default"].createElement(_UserAvatar["default"], null)) : /*#__PURE__*/_react["default"].createElement("li", {
    className: "navigation-action"
  }, pathname !== ROUTE.SIGNUP && /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    className: "button button-small",
    onClick: onClickLink,
    to: ROUTE.SIGNUP
  }, "Sign Up"), pathname !== ROUTE.SIGNIN && /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    className: "button button-small button-muted margin-left-s",
    onClick: onClickLink,
    to: ROUTE.SIGNIN
  }, "Sign In"))));
};
var _default = Navigation;
exports["default"] = _default;