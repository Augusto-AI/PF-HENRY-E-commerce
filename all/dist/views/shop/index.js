"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _product = require("@/components/product");
var _hooks = require("@/hooks");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _selector = require("@/selectors/selector");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable react/jsx-props-no-spreading */

var Shop = function Shop() {
  (0, _hooks.useDocumentTitle)("Shop | HP HENRY & CO.");
  (0, _hooks.useScrollTop)();
  var store = (0, _reactRedux.useSelector)(function (state) {
    return {
      filteredProducts: (0, _selector.selectFilter)(state.products.items, state.filter),
      products: state.products,
      requestStatus: state.app.requestStatus,
      isLoading: state.app.loading
    };
  }, _reactRedux.shallowEqual);
  return /*#__PURE__*/_react["default"].createElement("main", {
    className: "content"
  }, /*#__PURE__*/_react["default"].createElement("section", {
    className: "product-list-wrapper"
  }, /*#__PURE__*/_react["default"].createElement(_product.AppliedFilters, {
    filteredProductsCount: store.filteredProducts.length
  }), /*#__PURE__*/_react["default"].createElement(_product.ProductList, store, /*#__PURE__*/_react["default"].createElement(_product.ProductGrid, {
    products: store.filteredProducts
  }))));
};
var _default = Shop;
exports["default"] = _default;