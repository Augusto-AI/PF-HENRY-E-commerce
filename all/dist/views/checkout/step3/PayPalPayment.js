"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _formik = require("formik");
var _react = _interopRequireDefault(require("react"));
var _Paypal = _interopRequireDefault(require("./Paypal"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable jsx-a11y/label-has-associated-control */

var PayPalPayment = function PayPalPayment(_ref) {
  var subtotal = _ref.subtotal;
  var _useFormikContext = (0, _formik.useFormikContext)(),
    values = _useFormikContext.values,
    setValues = _useFormikContext.setValues;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: " ".concat(values.type === 'paypal' ? 'is-selected-payment' : '')
  }, /*#__PURE__*/_react["default"].createElement(_Paypal["default"], {
    subtotal: subtotal
  }));
};
var _default = PayPalPayment;
exports["default"] = _default;