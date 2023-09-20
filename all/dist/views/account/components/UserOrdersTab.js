"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Just add this feature if you want :P

var UserOrdersTab = function UserOrdersTab() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "loader",
    style: {
      minHeight: '80vh'
    }
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "My Orders"), /*#__PURE__*/_react["default"].createElement("strong", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-subtle"
  }, "You don't have any orders")));
};
var _default = UserOrdersTab;
exports["default"] = _default;