"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _hooks = require("@/hooks");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _ProductItem = _interopRequireDefault(require("./ProductItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ProductGrid = function ProductGrid(_ref) {
  var products = _ref.products;
  var _useBasket = (0, _hooks.useBasket)(),
    addToBasket = _useBasket.addToBasket,
    isItemOnBasket = _useBasket.isItemOnBasket;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-grid"
  }, products.length === 0 ? new Array(12).fill({}).map(function (product, index) {
    return /*#__PURE__*/_react["default"].createElement(_ProductItem["default"]
    // eslint-disable-next-line react/no-array-index-key
    , {
      key: "product-skeleton ".concat(index),
      product: product
    });
  }) : products.map(function (product) {
    return /*#__PURE__*/_react["default"].createElement(_ProductItem["default"], {
      key: product.id,
      isItemOnBasket: isItemOnBasket,
      addToBasket: addToBasket,
      product: product
    });
  }));
};
ProductGrid.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  products: _propTypes["default"].array.isRequired
};
var _default = ProductGrid;
exports["default"] = _default;