"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _hooks = require("@/hooks");
var _react = _interopRequireWildcard(require("react"));
var _UserTab = _interopRequireDefault(require("../components/UserTab"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; } /* eslint-disable react/no-multi-comp */
var UserAccountTab = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("../components/UserAccountTab"));
  });
});
var UserWishListTab = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("../components/UserWishListTab"));
  });
});
var UserOrdersTab = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("../components/UserOrdersTab"));
  });
});
var Loader = function Loader() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "loader",
    style: {
      minHeight: "80vh"
    }
  }, /*#__PURE__*/_react["default"].createElement(_icons.LoadingOutlined, null), /*#__PURE__*/_react["default"].createElement("h6", null, "Loading ... "));
};
var UserAccount = function UserAccount() {
  (0, _hooks.useScrollTop)();
  (0, _hooks.useDocumentTitle)("My Account | PF HENRY & CO.");
  return /*#__PURE__*/_react["default"].createElement(_UserTab["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
    index: 0,
    label: "Account"
  }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react["default"].createElement(Loader, null)
  }, /*#__PURE__*/_react["default"].createElement(UserAccountTab, null))), /*#__PURE__*/_react["default"].createElement("div", {
    index: 1,
    label: "My Wish List"
  }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react["default"].createElement(Loader, null)
  }, /*#__PURE__*/_react["default"].createElement(UserWishListTab, null))), /*#__PURE__*/_react["default"].createElement("div", {
    index: 2,
    label: "My Orders"
  }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react["default"].createElement(Loader, null)
  }, /*#__PURE__*/_react["default"].createElement(UserOrdersTab, null))));
};
var _default = UserAccount;
exports["default"] = _default;