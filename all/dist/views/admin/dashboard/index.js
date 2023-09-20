"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _hooks = require("@/hooks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Dashboard = function Dashboard() {
  (0, _hooks.useDocumentTitle)("Welcome | Admin Dashboard");
  (0, _hooks.useScrollTop)();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "loader"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "Administrator"));
};
var _default = Dashboard;
exports["default"] = _default;