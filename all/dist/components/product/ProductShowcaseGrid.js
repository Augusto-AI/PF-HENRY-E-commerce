"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _product = require("@/components/product");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable react/forbid-prop-types */

var ProductShowcase = function ProductShowcase(_ref) {
  var products = _ref.products,
    skeletonCount = _ref.skeletonCount;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-display-grid"
  }, products.length === 0 ? new Array(skeletonCount).fill({}).map(function (product, index) {
    return /*#__PURE__*/_react["default"].createElement(_product.FeaturedProduct
    // eslint-disable-next-line react/no-array-index-key
    , {
      key: "product-skeleton ".concat(index),
      product: product
    });
  }) : products.map(function (product) {
    return /*#__PURE__*/_react["default"].createElement(_product.FeaturedProduct, {
      key: product.id,
      product: product
    });
  }));
};
ProductShowcase.defaultProps = {
  skeletonCount: 4
};
ProductShowcase.propTypes = {
  products: _propTypes["default"].array.isRequired,
  skeletonCount: _propTypes["default"].number
};
var _default = ProductShowcase;
exports["default"] = _default;