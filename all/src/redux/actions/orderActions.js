// Importa las constantes de acciones
import {
  INITIATE_PAYPAL_PAYMENT,
  INITIATE_PAYPAL_PAYMENT_SUCCESS,
  INITIATE_PAYPAL_PAYMENT_FAILURE,
  EXECUTE_PAYPAL_PAYMENT,
  EXECUTE_PAYPAL_PAYMENT_SUCCESS,
  EXECUTE_PAYPAL_PAYMENT_FAILURE,
  CANCEL_PAYPAL_PAYMENT,
  CANCEL_PAYPAL_PAYMENT_SUCCESS,
  CANCEL_PAYPAL_PAYMENT_FAILURE,
  COMPLETE_PAYPAL_PAYMENT,
  COMPLETE_PAYPAL_PAYMENT_SUCCESS,
  COMPLETE_PAYPAL_PAYMENT_FAILURE,
} from "./constants"; // Asegúrate de proporcionar la ruta correcta a tus constantes

// Importa cualquier otra dependencia necesaria aquí

// Define las funciones de acción relacionadas con PayPal
export const initiatePaypalPayment = (data) => {
  return {
    type: INITIATE_PAYPAL_PAYMENT,
    payload: data,
  };
};

export const initiatePaypalPaymentSuccess = (response) => {
  return {
    type: INITIATE_PAYPAL_PAYMENT_SUCCESS,
    payload: response,
  };
};

export const initiatePaypalPaymentFailure = (error) => {
  return {
    type: INITIATE_PAYPAL_PAYMENT_FAILURE,
    payload: error,
  };
};

export const executePaypalPayment = (data) => {
  return {
    type: EXECUTE_PAYPAL_PAYMENT,
    payload: data,
  };
};

export const executePaypalPaymentSuccess = (response) => {
  return {
    type: EXECUTE_PAYPAL_PAYMENT_SUCCESS,
    payload: response,
  };
};

export const executePaypalPaymentFailure = (error) => {
  return {
    type: EXECUTE_PAYPAL_PAYMENT_FAILURE,
    payload: error,
  };
};

export const cancelPaypalPayment = (data) => {
  return {
    type: CANCEL_PAYPAL_PAYMENT,
    payload: data,
  };
};

export const cancelPaypalPaymentSuccess = (response) => {
  return {
    type: CANCEL_PAYPAL_PAYMENT_SUCCESS,
    payload: response,
  };
};

export const cancelPaypalPaymentFailure = (error) => {
  return {
    type: CANCEL_PAYPAL_PAYMENT_FAILURE,
    payload: error,
  };
};

export const completePaypalPayment = (data) => {
  return {
    type: COMPLETE_PAYPAL_PAYMENT,
    payload: data,
  };
};

export const completePaypalPaymentSuccess = (response) => {
  return {
    type: COMPLETE_PAYPAL_PAYMENT_SUCCESS,
    payload: response,
  };
};

export const completePaypalPaymentFailure = (error) => {
  return {
    type: COMPLETE_PAYPAL_PAYMENT_FAILURE,
    payload: error,
  };
};
