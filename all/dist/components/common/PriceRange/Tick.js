"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Tick = function Tick(_ref) {
  var tick = _ref.tick,
    count = _ref.count,
    format = _ref.format;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'absolute',
      marginTop: 17,
      width: 1,
      height: 5,
      backgroundColor: 'rgb(200,200,200)',
      left: "".concat(tick.percent, "%")
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'absolute',
      marginTop: 25,
      fontSize: 10,
      textAlign: 'center',
      marginLeft: "".concat(-(100 / count) / 2, "%"),
      width: "".concat(100 / count, "%"),
      left: "".concat(tick.percent, "%")
    }
  }, format(tick.value)));
};
Tick.propTypes = {
  tick: _propTypes["default"].shape({
    id: _propTypes["default"].string.isRequired,
    value: _propTypes["default"].number.isRequired,
    percent: _propTypes["default"].number.isRequired
  }).isRequired,
  count: _propTypes["default"].number.isRequired,
  format: _propTypes["default"].func
};
Tick.defaultProps = {
  format: function format(d) {
    return d;
  }
};
var _default = Tick;
exports["default"] = _default;