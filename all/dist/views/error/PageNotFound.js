"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _hooks = require("@/hooks");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PageNotFound = function PageNotFound(_ref) {
  var history = _ref.history;
  (0, _hooks.useScrollTop)();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "page-not-found"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, ":( Page you are looking for doesn't exists."), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("button", {
    className: "button",
    onClick: history.goBack,
    type: "button"
  }, "Go back"));
};
PageNotFound.propTypes = {
  history: _propTypes["default"].shape({
    goBack: _propTypes["default"].func
  }).isRequired
};
var _default = PageNotFound;
exports["default"] = _default;