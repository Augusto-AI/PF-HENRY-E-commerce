"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _utils = require("@/helpers/utils");
var _reactRedux = require("react-redux");
var _basketActions = require("@/redux/actions/basketActions");
var useBasket = function useBasket() {
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return {
        basket: state.basket
      };
    }),
    basket = _useSelector.basket;
  var dispatch = (0, _reactRedux.useDispatch)();
  var isItemOnBasket = function isItemOnBasket(id) {
    return !!basket.find(function (item) {
      return item.id === id;
    });
  };
  var addToBasket = function addToBasket(product) {
    if (isItemOnBasket(product.id)) {
      dispatch((0, _basketActions.removeFromBasket)(product.id));
      (0, _utils.displayActionMessage)('Item removed from basket', 'info');
    } else {
      dispatch((0, _basketActions.addToBasket)(product));
      (0, _utils.displayActionMessage)('Item added to basket', 'success');
    }
  };
  return {
    basket: basket,
    isItemOnBasket: isItemOnBasket,
    addToBasket: addToBasket
  };
};
var _default = useBasket;
exports["default"] = _default;