"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setShippingDetails = exports.setPaymentDetails = exports.resetCheckout = void 0;
var _constants = require("@/constants/constants");
var setShippingDetails = function setShippingDetails(details) {
  return {
    type: _constants.SET_CHECKOUT_SHIPPING_DETAILS,
    payload: details
  };
};
exports.setShippingDetails = setShippingDetails;
var setPaymentDetails = function setPaymentDetails(details) {
  return {
    type: _constants.SET_CHECKOUT_PAYMENT_DETAILS,
    payload: details
  };
};
exports.setPaymentDetails = setPaymentDetails;
var resetCheckout = function resetCheckout() {
  return {
    type: _constants.RESET_CHECKOUT
  };
};
exports.resetCheckout = resetCheckout;