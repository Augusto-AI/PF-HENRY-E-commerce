"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var MessageDisplay = function MessageDisplay(_ref) {
  var message = _ref.message,
    description = _ref.description,
    buttonLabel = _ref.buttonLabel,
    action = _ref.action;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "loader"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-center",
    style: {
      wordBreak: 'break-all'
    }
  }, message || 'Message'), description && /*#__PURE__*/_react["default"].createElement("span", null, description), /*#__PURE__*/_react["default"].createElement("br", null), action && /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button-small",
    onClick: action,
    type: "button"
  }, buttonLabel || 'Okay'));
};
MessageDisplay.defaultProps = {
  description: undefined,
  buttonLabel: 'Okay',
  action: undefined
};
MessageDisplay.propTypes = {
  message: _propTypes["default"].string.isRequired,
  description: _propTypes["default"].string,
  buttonLabel: _propTypes["default"].string,
  action: _propTypes["default"].func
};
var _default = MessageDisplay;
exports["default"] = _default;