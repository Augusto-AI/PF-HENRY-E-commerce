"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _hooks = require("@/hooks");
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../add_product/index"));
var _index2 = _interopRequireDefault(require("../products/index"));
var _UsersList = _interopRequireDefault(require("../../../components/user/UsersList"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Dashboard = function Dashboard() {
  (0, _hooks.useDocumentTitle)("Welcome | Admin Dashboard");
  (0, _hooks.useScrollTop)();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "loader"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "Administrator"), /*#__PURE__*/_react["default"].createElement(_index2["default"], null), /*#__PURE__*/_react["default"].createElement(_UsersList["default"], null));
};
var _default = Dashboard;
exports["default"] = _default;