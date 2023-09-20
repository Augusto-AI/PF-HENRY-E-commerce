"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Badge = function Badge(_ref) {
  var count = _ref.count,
    children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "badge"
  }, children, count >= 1 && /*#__PURE__*/_react["default"].createElement("span", {
    className: "badge-count"
  }, count));
};
Badge.propTypes = {
  count: _propTypes["default"].number.isRequired,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired
};
var _default = Badge;
exports["default"] = _default;