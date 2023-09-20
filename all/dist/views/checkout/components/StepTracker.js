"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var StepTracker = function StepTracker(_ref) {
  var current = _ref.current;
  // eslint-disable-next-line no-nested-ternary
  var className = function className(step) {
    return current === step ? 'is-active-step' : step < current ? 'is-done-step' : '';
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-header"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "checkout-header-menu"
  }, /*#__PURE__*/_react["default"].createElement("li", {
    className: "checkout-header-list ".concat(className(1))
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-header-item"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-header-icon"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "checkout-header-step"
  }, "1")), /*#__PURE__*/_react["default"].createElement("h6", {
    className: "checkout-header-subtitle"
  }, "Order Summary"))), /*#__PURE__*/_react["default"].createElement("li", {
    className: "checkout-header-list ".concat(className(2))
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-header-item"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-header-icon"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "checkout-header-step"
  }, "2")), /*#__PURE__*/_react["default"].createElement("h6", {
    className: "checkout-header-subtitle"
  }, "Shipping Details"))), /*#__PURE__*/_react["default"].createElement("li", {
    className: "checkout-header-list ".concat(className(3))
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-header-item"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-header-icon"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "checkout-header-step"
  }, "3")), /*#__PURE__*/_react["default"].createElement("h6", {
    className: "checkout-header-subtitle"
  }, "Payment")))));
};
StepTracker.propTypes = {
  current: _propTypes["default"].number.isRequired
};
var _default = StepTracker;
exports["default"] = _default;