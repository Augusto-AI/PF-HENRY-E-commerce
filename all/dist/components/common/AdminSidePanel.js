"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _routes = require("@/constants/routes");
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var SideNavigation = function SideNavigation() {
  return /*#__PURE__*/_react["default"].createElement("aside", {
    className: "sidenavigation"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "sidenavigation-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "sidenavigation-item"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
    activeClassName: "sidenavigation-menu-active",
    className: "sidenavigation-menu",
    to: _routes.ADMIN_PRODUCTS
  }, "Products")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "sidenavigation-item"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "sidenavigation-menu my-0"
  }, "Users"))));
};
var _default = SideNavigation;
exports["default"] = _default;