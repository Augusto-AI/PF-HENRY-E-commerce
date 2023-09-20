"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchProductSuccess = exports.searchProduct = exports.removeProductSuccess = exports.removeProduct = exports.getProductsSuccess = exports.getProducts = exports.editProductSuccess = exports.editProduct = exports.clearSearchState = exports.cancelGetProducts = exports.addProductSuccess = exports.addProduct = void 0;
var _constants = require("@/constants/constants");
var getProducts = function getProducts(lastRef) {
  return {
    type: _constants.GET_PRODUCTS,
    payload: lastRef
  };
};
exports.getProducts = getProducts;
var getProductsSuccess = function getProductsSuccess(products) {
  return {
    type: _constants.GET_PRODUCTS_SUCCESS,
    payload: products
  };
};
exports.getProductsSuccess = getProductsSuccess;
var cancelGetProducts = function cancelGetProducts() {
  return {
    type: _constants.CANCEL_GET_PRODUCTS
  };
};
exports.cancelGetProducts = cancelGetProducts;
var addProduct = function addProduct(product) {
  return {
    type: _constants.ADD_PRODUCT,
    payload: product
  };
};
exports.addProduct = addProduct;
var searchProduct = function searchProduct(searchKey) {
  return {
    type: _constants.SEARCH_PRODUCT,
    payload: {
      searchKey: searchKey
    }
  };
};
exports.searchProduct = searchProduct;
var searchProductSuccess = function searchProductSuccess(products) {
  return {
    type: _constants.SEARCH_PRODUCT_SUCCESS,
    payload: products
  };
};
exports.searchProductSuccess = searchProductSuccess;
var clearSearchState = function clearSearchState() {
  return {
    type: _constants.CLEAR_SEARCH_STATE
  };
};
exports.clearSearchState = clearSearchState;
var addProductSuccess = function addProductSuccess(product) {
  return {
    type: _constants.ADD_PRODUCT_SUCCESS,
    payload: product
  };
};
exports.addProductSuccess = addProductSuccess;
var removeProduct = function removeProduct(id) {
  return {
    type: _constants.REMOVE_PRODUCT,
    payload: id
  };
};
exports.removeProduct = removeProduct;
var removeProductSuccess = function removeProductSuccess(id) {
  return {
    type: _constants.REMOVE_PRODUCT_SUCCESS,
    payload: id
  };
};
exports.removeProductSuccess = removeProductSuccess;
var editProduct = function editProduct(id, updates) {
  return {
    type: _constants.EDIT_PRODUCT,
    payload: {
      id: id,
      updates: updates
    }
  };
};
exports.editProduct = editProduct;
var editProductSuccess = function editProductSuccess(updates) {
  return {
    type: _constants.EDIT_PRODUCT_SUCCESS,
    payload: updates
  };
};
exports.editProductSuccess = editProductSuccess;