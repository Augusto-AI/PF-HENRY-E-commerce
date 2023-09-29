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
  GET_ORDERS,
  CANCEL_ORDER,
  EDIT_ORDER,
  ADD_ORDER,
} from "@/constants/constants";

//*---------------------------------ORDERS ACTIONS
// Define las funciones de acción relacionadas con Orders

export const getOrdersSuccess = (ordersData) => {
  return {
    type: GET_ORDERS,
    payload: ordersData,
  };
};

// Define la acción para cancelar una orden exitosamente
export const cancelOrderSuccess = (orderId) => {
  return {
    type: CANCEL_ORDER,
    payload: orderId,
  };
};

// Define la acción para editar una orden exitosamente
export const editOrderSuccess = (orderData) => {
  return {
    type: EDIT_ORDER,
    payload: orderData,
  };
};

// Define la acción para agregar una orden exitosamente
export const addOrderSuccess = (orderData) => {
  return {
    type: ADD_ORDER,
    payload: orderData,
  };
};

//*--------------------------------------------------PAYPÀL ACTIONS
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
