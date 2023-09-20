"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _logoWordmark = _interopRequireDefault(require("../../../static/logo-wordmark.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Preloader = function Preloader() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "preloader"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "logo-symbol",
    viewBox: "0 0 41.25 41.25"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "20.62",
    cy: "20.62",
    r: "20.62"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    className: "fill-white",
    cx: "29.97",
    cy: "14.93",
    r: "6.58"
  })), /*#__PURE__*/_react["default"].createElement("img", {
    alt: "Salinaka logo wordmark",
    src: _logoWordmark["default"]
  }));
};
var _default = Preloader;
exports["default"] = _default;