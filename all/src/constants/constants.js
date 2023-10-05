//*---------------------------------------------PRODUCTS

export const GET_PRODUCTS = "GET_PRODUCTS";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const SEARCH_PRODUCT_SUCCESS = "SEARCH_PRODUCT_SUCCESS";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const ADD_PRODUCT = "ADD_PRODUCT"; //*---------------------*Este son New products del Dash
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const REMOVE_PRODUCT_SUCCESS = "REMOVE_PRODUCT_SUCCESS";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const EDIT_PRODUCT_SUCCESS = "EDIT_PRODUCT_SUCCESS";
export const CANCEL_GET_PRODUCTS = "CANCEL_GET_PRODUCTS";
export const CLEAR_SEARCH_STATE = "CLEAR_SEARCH_STATE";
export const SET_LAST_REF_KEY = "SET_LAST_REF_KEY";

//*--------------------------------------------DARKMODE

export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const SET_ORDER_STATUS = "SET_ORDER_STATUS";
export const SET_ORDER_CANCELED = "SET_ORDER_CANCELED";

//*----------------------------------------------BASKET
export const SUBTRACT_PIECES = "SUBTRACT_PIECES";

export const SET_BASKET_ITEMS = "SET_BASKET_ITEMS";
export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
export const CLEAR_BASKET = "CLEAR_BASKET";
export const ADD_QTY_ITEM = "ADD_QTY_ITEM";
export const MINUS_QTY_ITEM = "MINUS_QTY_ITEM";
export const DECREASE_ITEM_QUANTITY = "DECREASE_ITEM_QUANTITY";
export const LOAD_BASKET_SUCCESS = "LOAD_BASKET_SUCCESS";
export const LOAD_BASKET_FAILURE = "LOAD_BASKET_FAILURE";

//*------------------------------------------SHIPPING

export const SET_CHECKOUT_SHIPPING_DETAILS = "SET_CHECKOUT_SHIPPING_DETAILS";
export const SET_CHECKOUT_PAYMENT_DETAILS = "SET_CHECKOUT_PAYMENT_DETAILS";
export const RESET_CHECKOUT = "RESET_CHECKOUT";
export const SET_PURCHASED_ITEMS = "SET_PURCHASED_ITEMS";

//*-------------------------------------------LOGINS

export const SIGNIN = "SIGNIN";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNUP = "SIGNUP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNOUT = "SIGNOUT";
export const SIGNOUT_SUCCESS = "SIGNOUT_SUCCESS";
export const SET_AUTH_STATUS = "SET_AUTH_STATUS";
export const SIGNIN_WITH_GOOGLE = "SIGNIN_WITH_GOOGLE";
export const SIGNIN_WITH_FACEBOOK = "SIGNIN_WITH_FACEBOOK";
export const SIGNIN_WITH_GITHUB = "SIGNIN_WITH_GITHUB";
export const SIGNIN_WITH_MICROSOFT = "SIGNIN_WITH_MICROSOFT";
export const ON_AUTHSTATE_CHANGED = "ON_AUTHSTATE_CHANGED";
export const SET_AUTH_PERSISTENCE = "SET_AUTH_PERSISTENCE";
export const ON_AUTHSTATE_SUCCESS = "ON_AUTHSTATE_SUCCESS";
export const ON_AUTHSTATE_FAIL = "ON_AUTHSTATE_FAIL";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const CLEAR_AUTH_STATUS = "CLEAR_AUTH_STATUS";
export const SET_SUSPENDED_MESSAGE = "SET_SUSPENDED_MESSAGE";

//*------------------------------------------PROFILE

export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const SET_PROFILE = "SET_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const CLEAR_PROFILE = "CLEAR_PROFILE";

//*------------------------------------------FILTROS

export const SET_TEXT_FILTER = "SET_TEXT_FILTER";
export const SET_BRAND_FILTER = "SET_BRAND_FILTER";
export const SET_MIN_PRICE_FILTER = "SET_MIN_PRICE_FILTER";
export const SET_MAX_PRICE_FILTER = "SET_MAX_PRICE_FILTER";
export const RESET_FILTER = "RESET_FILTER";
export const APPLY_FILTER = "APPLY_FILTER";
export const CLEAR_RECENT_SEARCH = "CLEAR_RECENT_SEARCH";
export const REMOVE_SELECTED_RECENT = "REMOVE_SELECTED_RECENT";

//*--------------------------------------------USERS

export const REGISTER_USER = "REGISTER_USER";
export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const EDIT_USER = "EDIT_USER";
export const PROMOTE_TO_ADMIN = "PROMOTE_TO_ADMIN";
export const ADMIN_USERS = "ADMIN_USERS"; //*---------------------------*Este son Users de Dash

//*--------------------------------------------PAYPAL

export const LOADING = "LOADING";
export const IS_AUTHENTICATING = "IS_AUTHENTICATING";
export const SET_REQUEST_STATUS = "SET_REQUEST_STATUS";

export const INITIATE_PAYPAL_PAYMENT = "INITIATE_PAYPAL_PAYMENT";
export const INITIATE_PAYPAL_PAYMENT_SUCCESS =
  "INITIATE_PAYPAL_PAYMENT_SUCCESS";
export const INITIATE_PAYPAL_PAYMENT_FAILURE =
  "INITIATE_PAYPAL_PAYMENT_FAILURE";

export const EXECUTE_PAYPAL_PAYMENT = "EXECUTE_PAYPAL_PAYMENT";
export const EXECUTE_PAYPAL_PAYMENT_SUCCESS = "EXECUTE_PAYPAL_PAYMENT_SUCCESS";
export const EXECUTE_PAYPAL_PAYMENT_FAILURE = "EXECUTE_PAYPAL_PAYMENT_FAILURE";

export const CANCEL_PAYPAL_PAYMENT = "CANCEL_PAYPAL_PAYMENT";
export const CANCEL_PAYPAL_PAYMENT_SUCCESS = "CANCEL_PAYPAL_PAYMENT_SUCCESS";
export const CANCEL_PAYPAL_PAYMENT_FAILURE = "CANCEL_PAYPAL_PAYMENT_FAILURE";

export const COMPLETE_PAYPAL_PAYMENT = "COMPLETE_PAYPAL_PAYMENT";
export const COMPLETE_PAYPAL_PAYMENT_SUCCESS =
  "COMPLETE_PAYPAL_PAYMENT_SUCCESS";
export const COMPLETE_PAYPAL_PAYMENT_FAILURE =
  "COMPLETE_PAYPAL_PAYMENT_FAILURE";

//*--------------------------------------------REVIEWS

export const GET_REVIEWS = "GET_REVIEWS";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const ADD_REVIEW = "ADD_REVIEW";

//*------------------------------------------ORDERS

export const GET_ORDERS = "GET_ORDERS";
export const ADD_ORDER = "ADD_ORDER";
export const DELETE_ORDER = "DELETE_ORDER";
export const EDIT_ORDER = "EDIT_ORDER";
export const ORDER_STATUS = "ORDER_STATUS";
export const ORDER_STATUS_SUCCESS = "ORDER_STATUS_SUCCESS";
export const ORDER_STATUS_FAILURE = "ORDER_STATUS_FAILURE";
export const CANCEL_ORDER = "CANCEL_ORDER";
