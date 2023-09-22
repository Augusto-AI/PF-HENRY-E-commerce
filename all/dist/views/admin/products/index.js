"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _common = require("@/components/common");
var _product = require("@/components/product");
var _hooks = require("@/hooks");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _selector = require("@/selectors/selector");
var _components = require("../components");
var _ProductsTable = _interopRequireDefault(require("../components/ProductsTable"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable react/jsx-props-no-spreading */

var Products = function Products() {
  (0, _hooks.useDocumentTitle)("Product List | HENRY & CO. Admin");
  (0, _hooks.useScrollTop)();
  var store = (0, _reactRedux.useSelector)(function (state) {
    return {
      filteredProducts: (0, _selector.selectFilter)(state.products.items, state.filter),
      requestStatus: state.app.requestStatus,
      isLoading: state.app.loading,
      products: state.products
    };
  });
  return /*#__PURE__*/_react["default"].createElement(_common.Boundary, null, /*#__PURE__*/_react["default"].createElement(_components.ProductsNavbar, {
    productsCount: store.products.items.length,
    totalProductsCount: store.products.total
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-admin-items"
  }, /*#__PURE__*/_react["default"].createElement(_product.ProductList, store, /*#__PURE__*/_react["default"].createElement(_product.AppliedFilters, {
    filter: store.filter
  }), /*#__PURE__*/_react["default"].createElement(_ProductsTable["default"], {
    filteredProducts: store.filteredProducts
  }))));
};
var _default = (0, _reactRouterDom.withRouter)(Products);
exports["default"] = _default;