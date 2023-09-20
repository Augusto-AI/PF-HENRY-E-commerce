"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _formik = require("formik");
var _utils = require("@/helpers/utils");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ShippingTotal = function ShippingTotal(_ref) {
  var subtotal = _ref.subtotal;
  var _useFormikContext = (0, _formik.useFormikContext)(),
    values = _useFormikContext.values;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-total d-flex-end padding-right-m"
  }, /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "basket-total-amount text-subtle text-right margin-0"
  }, (0, _utils.displayMoney)(subtotal)))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "d-block margin-0 padding-right-s text-right"
  }, "Total: \xA0")), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "basket-total-amount text-right"
  }, (0, _utils.displayMoney)(Number(subtotal) + (values.isInternational ? 50 : 0))))))));
};
ShippingTotal.propTypes = {
  subtotal: _propTypes["default"].number.isRequired
};
var _default = ShippingTotal;
exports["default"] = _default;