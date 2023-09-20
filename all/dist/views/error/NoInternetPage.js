"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _hooks = require("@/hooks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var NoInternet = function NoInternet() {
  (0, _hooks.useScrollTop)();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "page-not-found"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, ":( No Internet Connection."), /*#__PURE__*/_react["default"].createElement("p", null, "Please check you network connectivity and try again."), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("button", {
    className: "button",
    onClick: function onClick() {
      return window.location.reload(true);
    },
    type: "button"
  }, "Try Again"));
};
var _default = NoInternet;
exports["default"] = _default;