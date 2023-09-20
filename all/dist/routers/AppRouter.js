"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.history = exports["default"] = void 0;
var _basket = require("@/components/basket");
var _common = require("@/components/common");
var ROUTES = _interopRequireWildcard(require("@/constants/routes"));
var _history = require("history");
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var view = _interopRequireWildcard(require("@/views"));
var _AdminRoute = _interopRequireDefault(require("./AdminRoute"));
var _ClientRoute = _interopRequireDefault(require("./ClientRoute"));
var _PublicRoute = _interopRequireDefault(require("./PublicRoute"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// Revert back to history v4.10.0 because
// v5.0 breaks navigation
var history = (0, _history.createBrowserHistory)();
exports.history = history;
var AppRouter = function AppRouter() {
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Router, {
    history: history
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_common.Navigation, null), /*#__PURE__*/_react["default"].createElement(_basket.Basket, null), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    component: view.Search,
    exact: true,
    path: ROUTES.SEARCH
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    component: view.Home,
    exact: true,
    path: ROUTES.HOME
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    component: view.Shop,
    exact: true,
    path: ROUTES.SHOP
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    component: view.FeaturedProducts,
    exact: true,
    path: ROUTES.FEATURED_PRODUCTS
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    component: view.RecommendedProducts,
    exact: true,
    path: ROUTES.RECOMMENDED_PRODUCTS
  }), /*#__PURE__*/_react["default"].createElement(_PublicRoute["default"], {
    component: view.SignUp,
    path: ROUTES.SIGNUP
  }), /*#__PURE__*/_react["default"].createElement(_PublicRoute["default"], {
    component: view.SignIn,
    exact: true,
    path: ROUTES.SIGNIN
  }), /*#__PURE__*/_react["default"].createElement(_PublicRoute["default"], {
    component: view.ForgotPassword,
    path: ROUTES.FORGOT_PASSWORD
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    component: view.ViewProduct,
    path: ROUTES.VIEW_PRODUCT
  }), /*#__PURE__*/_react["default"].createElement(_ClientRoute["default"], {
    component: view.UserAccount,
    exact: true,
    path: ROUTES.ACCOUNT
  }), /*#__PURE__*/_react["default"].createElement(_ClientRoute["default"], {
    component: view.EditAccount,
    exact: true,
    path: ROUTES.ACCOUNT_EDIT
  }), /*#__PURE__*/_react["default"].createElement(_ClientRoute["default"], {
    component: view.CheckOutStep1,
    path: ROUTES.CHECKOUT_STEP_1
  }), /*#__PURE__*/_react["default"].createElement(_ClientRoute["default"], {
    component: view.CheckOutSuccess,
    path: ROUTES.SUCCESS
  }), /*#__PURE__*/_react["default"].createElement(_ClientRoute["default"], {
    component: view.CheckOutStep2,
    path: ROUTES.CHECKOUT_STEP_2
  }), /*#__PURE__*/_react["default"].createElement(_ClientRoute["default"], {
    component: view.CheckOutStep3,
    path: ROUTES.CHECKOUT_STEP_3
  }), /*#__PURE__*/_react["default"].createElement(_AdminRoute["default"], {
    component: view.Dashboard,
    exact: true,
    path: ROUTES.ADMIN_DASHBOARD
  }), /*#__PURE__*/_react["default"].createElement(_AdminRoute["default"], {
    component: view.Products,
    path: ROUTES.ADMIN_PRODUCTS
  }), /*#__PURE__*/_react["default"].createElement(_AdminRoute["default"], {
    component: view.AddProduct,
    path: ROUTES.ADD_PRODUCT
  }), /*#__PURE__*/_react["default"].createElement(_AdminRoute["default"], {
    component: view.EditProduct,
    path: "".concat(ROUTES.EDIT_PRODUCT, "/:id")
  }), /*#__PURE__*/_react["default"].createElement(_PublicRoute["default"], {
    component: view.PageNotFound
  })), /*#__PURE__*/_react["default"].createElement(_common.Footer, null)));
};
var _default = AppRouter;
exports["default"] = _default;