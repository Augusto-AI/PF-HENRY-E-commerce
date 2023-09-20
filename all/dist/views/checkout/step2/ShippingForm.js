"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _formik = require("@/components/formik");
var _formik2 = require("formik");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable jsx-a11y/label-has-associated-control */

var ShippingForm = function ShippingForm() {
  var _useFormikContext = (0, _formik2.useFormikContext)(),
    values = _useFormikContext.values;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-shipping-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-shipping-form"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-fieldset"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-block checkout-field"
  }, /*#__PURE__*/_react["default"].createElement(_formik2.Field, {
    name: "fullname",
    type: "text",
    label: "* Full Name",
    placeholder: "Enter your full name",
    component: _formik.CustomInput,
    style: {
      textTransform: 'capitalize'
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-block checkout-field"
  }, /*#__PURE__*/_react["default"].createElement(_formik2.Field, {
    name: "email",
    type: "email",
    label: "* Email Address",
    placeholder: "Enter your email address",
    component: _formik.CustomInput
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-fieldset"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-block checkout-field"
  }, /*#__PURE__*/_react["default"].createElement(_formik2.Field, {
    name: "address",
    type: "text",
    label: "* Shipping Address",
    placeholder: "Enter full shipping address",
    component: _formik.CustomInput
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-block checkout-field"
  }, /*#__PURE__*/_react["default"].createElement(_formik.CustomMobileInput, {
    name: "mobile",
    defaultValue: values.mobile
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-fieldset"
  })));
};
var _default = ShippingForm;
exports["default"] = _default;