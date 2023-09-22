"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initiatePaypalPaymentSuccess = exports.initiatePaypalPaymentFailure = exports.initiatePaypalPayment = exports.executePaypalPaymentSuccess = exports.executePaypalPaymentFailure = exports.executePaypalPayment = exports.completePaypalPaymentSuccess = exports.completePaypalPaymentFailure = exports.completePaypalPayment = exports.cancelPaypalPaymentSuccess = exports.cancelPaypalPaymentFailure = exports.cancelPaypalPayment = void 0;
var _constants = require("./constants");
// Importa las constantes de acciones

// Asegúrate de proporcionar la ruta correcta a tus constantes

// Importa cualquier otra dependencia necesaria aquí

// Define las funciones de acción relacionadas con PayPal
var initiatePaypalPayment = function initiatePaypalPayment(data) {
  return {
    type: _constants.INITIATE_PAYPAL_PAYMENT,
    payload: data
  };
};
exports.initiatePaypalPayment = initiatePaypalPayment;
var initiatePaypalPaymentSuccess = function initiatePaypalPaymentSuccess(response) {
  return {
    type: _constants.INITIATE_PAYPAL_PAYMENT_SUCCESS,
    payload: response
  };
};
exports.initiatePaypalPaymentSuccess = initiatePaypalPaymentSuccess;
var initiatePaypalPaymentFailure = function initiatePaypalPaymentFailure(error) {
  return {
    type: _constants.INITIATE_PAYPAL_PAYMENT_FAILURE,
    payload: error
  };
};
exports.initiatePaypalPaymentFailure = initiatePaypalPaymentFailure;
var executePaypalPayment = function executePaypalPayment(data) {
  return {
    type: _constants.EXECUTE_PAYPAL_PAYMENT,
    payload: data
  };
};
exports.executePaypalPayment = executePaypalPayment;
var executePaypalPaymentSuccess = function executePaypalPaymentSuccess(response) {
  return {
    type: _constants.EXECUTE_PAYPAL_PAYMENT_SUCCESS,
    payload: response
  };
};
exports.executePaypalPaymentSuccess = executePaypalPaymentSuccess;
var executePaypalPaymentFailure = function executePaypalPaymentFailure(error) {
  return {
    type: _constants.EXECUTE_PAYPAL_PAYMENT_FAILURE,
    payload: error
  };
};
exports.executePaypalPaymentFailure = executePaypalPaymentFailure;
var cancelPaypalPayment = function cancelPaypalPayment(data) {
  return {
    type: _constants.CANCEL_PAYPAL_PAYMENT,
    payload: data
  };
};
exports.cancelPaypalPayment = cancelPaypalPayment;
var cancelPaypalPaymentSuccess = function cancelPaypalPaymentSuccess(response) {
  return {
    type: _constants.CANCEL_PAYPAL_PAYMENT_SUCCESS,
    payload: response
  };
};
exports.cancelPaypalPaymentSuccess = cancelPaypalPaymentSuccess;
var cancelPaypalPaymentFailure = function cancelPaypalPaymentFailure(error) {
  return {
    type: _constants.CANCEL_PAYPAL_PAYMENT_FAILURE,
    payload: error
  };
};
exports.cancelPaypalPaymentFailure = cancelPaypalPaymentFailure;
var completePaypalPayment = function completePaypalPayment(data) {
  return {
    type: _constants.COMPLETE_PAYPAL_PAYMENT,
    payload: data
  };
};
exports.completePaypalPayment = completePaypalPayment;
var completePaypalPaymentSuccess = function completePaypalPaymentSuccess(response) {
  return {
    type: _constants.COMPLETE_PAYPAL_PAYMENT_SUCCESS,
    payload: response
  };
};
exports.completePaypalPaymentSuccess = completePaypalPaymentSuccess;
var completePaypalPaymentFailure = function completePaypalPaymentFailure(error) {
  return {
    type: _constants.COMPLETE_PAYPAL_PAYMENT_FAILURE,
    payload: error
  };
};
exports.completePaypalPaymentFailure = completePaypalPaymentFailure;