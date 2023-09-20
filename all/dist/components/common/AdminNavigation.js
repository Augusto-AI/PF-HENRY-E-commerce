"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _routes = require("@/constants/routes");
var _logoFull = _interopRequireDefault(require("@/images/logo-full.png"));
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _UserAvatar = _interopRequireDefault(require("@/views/account/components/UserAvatar"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var AdminNavigation = function AdminNavigation() {
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return {
        isAuthenticating: state.app.isAuthenticating,
        profile: state.profile
      };
    }),
    isAuthenticating = _useSelector.isAuthenticating,
    profile = _useSelector.profile;
  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: "navigation navigation-admin"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "logo"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: _routes.ADMIN_DASHBOARD,
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    alt: "Logo",
    src: _logoFull["default"]
  }), /*#__PURE__*/_react["default"].createElement("h3", null, "DASHBOARD"))), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "navigation-menu"
  }, /*#__PURE__*/_react["default"].createElement("li", {
    className: "navigation-menu-item"
  }, /*#__PURE__*/_react["default"].createElement(_UserAvatar["default"], {
    isAuthenticating: isAuthenticating,
    profile: profile
  }))));
};
var _default = AdminNavigation;
exports["default"] = _default;