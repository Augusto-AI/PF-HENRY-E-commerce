"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Track = function Track(_ref) {
  var source = _ref.source,
    target = _ref.target,
    getTrackProps = _ref.getTrackProps,
    disabled = _ref.disabled;
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    style: {
      position: 'absolute',
      transform: 'translate(0%, -50%)',
      height: 14,
      zIndex: 1,
      backgroundColor: disabled ? '#ffd993' : '#ffa500',
      borderRadius: 7,
      cursor: 'pointer',
      left: "".concat(source.percent, "%"),
      width: "".concat(target.percent - source.percent, "%")
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
  }, getTrackProps()));
};
Track.propTypes = {
  source: _propTypes["default"].shape({
    id: _propTypes["default"].string.isRequired,
    value: _propTypes["default"].number.isRequired,
    percent: _propTypes["default"].number.isRequired
  }).isRequired,
  target: _propTypes["default"].shape({
    id: _propTypes["default"].string.isRequired,
    value: _propTypes["default"].number.isRequired,
    percent: _propTypes["default"].number.isRequired
  }).isRequired,
  getTrackProps: _propTypes["default"].func.isRequired,
  disabled: _propTypes["default"].bool
};
Track.defaultProps = {
  disabled: false
};
var _default = Track;
exports["default"] = _default;