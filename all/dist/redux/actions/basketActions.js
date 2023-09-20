"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setBasketItems = exports.removeFromBasket = exports.minusQtyItem = exports.clearBasket = exports.addToBasket = exports.addQtyItem = void 0;
var _constants = require("@/constants/constants");
var setBasketItems = function setBasketItems() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return {
    type: _constants.SET_BASKET_ITEMS,
    payload: items
  };
};
exports.setBasketItems = setBasketItems;
var addToBasket = function addToBasket(product) {
  return {
    type: _constants.ADD_TO_BASKET,
    payload: product
  };
};
exports.addToBasket = addToBasket;
var removeFromBasket = function removeFromBasket(id) {
  return {
    type: _constants.REMOVE_FROM_BASKET,
    payload: id
  };
};
exports.removeFromBasket = removeFromBasket;
var clearBasket = function clearBasket() {
  return {
    type: _constants.CLEAR_BASKET
  };
};
exports.clearBasket = clearBasket;
var addQtyItem = function addQtyItem(id) {
  return {
    type: _constants.ADD_QTY_ITEM,
    payload: id
  };
};
exports.addQtyItem = addQtyItem;
var minusQtyItem = function minusQtyItem(id) {
  return {
    type: _constants.MINUS_QTY_ITEM,
    payload: id
  };
};
exports.minusQtyItem = minusQtyItem;