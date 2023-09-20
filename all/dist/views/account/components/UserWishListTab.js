"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Just add this feature if you want :P

var UserWishListTab = function UserWishListTab() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "loader",
    style: {
      minHeight: '80vh'
    }
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "My Wish List"), /*#__PURE__*/_react["default"].createElement("strong", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-subtle"
  }, "You don't have a wish list")));
};
var _default = UserWishListTab;
exports["default"] = _default;