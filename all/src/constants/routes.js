//*----------------------------------APP FLOW

export const HOME = "/";
export const SHOP = "/shop";
export const FEATURED_PRODUCTS = "/featured";
export const RECOMMENDED_PRODUCTS = "/recommended";

//*-----------------------------------ACCOUNT

export const ACCOUNT = "/account";
export const ACCOUNT_EDIT = "/account/edit";
export const ADMIN_DASHBOARD = "/dashboard/admin";

//*-----------------------------------------DASHBOARD/PRODUCT

export const ADMIN_PRODUCTS = "/admin/products"; //*--------------------*Produsts del Dash
export const ADD_PRODUCT = "/admin/add"; //*----------------------------*New Porducts del Dash
export const EDIT_PRODUCT = "/admin/edit";
export const ADMIN_ADD_PRODUCT = "/dashboard/add-product";

//*-----------------------------------------DASHBOARD/USERS

export const ADMIN_USERS = "/admin/users"; //*----------------------------*Users del Dash
export const ADD_USER = "/admin/add_user";
export const GET_USER = "/admin/get_user";
export const GET_USERS = "/admin/get_users";
export const PROMOTE_TO_ADMIN = "/admin/users-role";
export const REGISTER_USER = "/admin/register-user";

//*--------------------------------------------DASHBOARD/ORDERS

export const ADD_ORDER = "/admin/orders";
export const ADMIN_ORDERS = "/dasboard/orders"; //*-------------------------*Orders del Dash
export const MY_ORDERS = "/my-orders";

//*--------------------------------------------DASHBOARD/REVIEW

export const ADD_REVIEW = "/admin/review"; //*-------------------------------*Reviewsd del Dash

//*--------------------------------------------SEARCH

export const SEARCH = "/search/:searchKey";

//*------------------------------------AUTHENTICATION

export const SIGNIN = "/signin";
export const SIGNOUT = "/signout";
export const SIGNUP = "/signup";
export const FORGOT_PASSWORD = "/forgot_password";
// En tus constantes
export const ROUTE_SIGNIN = "/signin";

// Luego, puedes usar ROUTE_SIGNIN donde lo necesites en tu aplicación

//*------------------------------------------CHECKOUT

export const CHECKOUT_STEP_1 = "/checkout/step1";
export const CHECKOUT_STEP_2 = "/checkout/step2";
export const CHECKOUT_STEP_3 = "/checkout/step3";
export const VIEW_PRODUCT = `/product/:id`;
export const SUCCESS = "/success";

//*------------------------------------------ABOUT

export const ABOUT = "/about";

// routes.js

// Otras rutas aquí...
