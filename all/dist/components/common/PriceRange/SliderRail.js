"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable react/jsx-props-no-spreading */
var railOuterStyle = {
  position: 'absolute',
  transform: 'translate(0%, -50%)',
  width: '100%',
  height: 42,
  borderRadius: 7,
  cursor: 'pointer'
  // border: '1px solid grey',
};

var railInnerStyle = {
  position: 'absolute',
  width: '100%',
  height: 14,
  transform: 'translate(0%, -50%)',
  borderRadius: 7,
  pointerEvents: 'none',
  backgroundColor: '#d0d0d0'
};
var SliderRail = function SliderRail(_ref) {
  var getRailProps = _ref.getRailProps;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", _extends({
    style: railOuterStyle
  }, getRailProps())), /*#__PURE__*/_react["default"].createElement("div", {
    style: railInnerStyle
  }));
};
SliderRail.propTypes = {
  getRailProps: _propTypes["default"].func.isRequired
};
var _default = SliderRail;
exports["default"] = _default;