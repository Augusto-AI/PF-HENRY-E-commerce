"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _hooks = require("@/hooks");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Error = function Error(_ref) {
  var history = _ref.history;
  (0, _hooks.useScrollTop)();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "page-not-found"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, ":( An error has occured. Please try again."), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("button", {
    className: "button",
    onClick: function onClick() {
      return history.push('/');
    },
    type: "button"
  }, "Try Again"));
};
Error.propTypes = {
  history: _propTypes["default"].shape({
    push: _propTypes["default"].func
  }).isRequired
};
var _default = Error;
exports["default"] = _default;