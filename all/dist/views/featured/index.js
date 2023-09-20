"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _common = require("@/components/common");
var _product = require("@/components/product");
var _hooks = require("@/hooks");
var _bannerGuy = _interopRequireDefault(require("@/images/banner-guy.png"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var FeaturedProducts = function FeaturedProducts() {
  (0, _hooks.useDocumentTitle)('Featured Products | Salinaka');
  (0, _hooks.useScrollTop)();
  var _useFeaturedProducts = (0, _hooks.useFeaturedProducts)(),
    featuredProducts = _useFeaturedProducts.featuredProducts,
    fetchFeaturedProducts = _useFeaturedProducts.fetchFeaturedProducts,
    isLoading = _useFeaturedProducts.isLoading,
    error = _useFeaturedProducts.error;
  return /*#__PURE__*/_react["default"].createElement("main", {
    className: "content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "featured"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "banner"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "banner-desc"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "Featured Products")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "banner-img"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _bannerGuy["default"],
    alt: ""
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "display"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-display-grid"
  }, error && !isLoading ? /*#__PURE__*/_react["default"].createElement(_common.MessageDisplay, {
    message: error,
    action: fetchFeaturedProducts,
    buttonLabel: "Try Again"
  }) : /*#__PURE__*/_react["default"].createElement(_product.ProductShowcaseGrid, {
    products: featuredProducts,
    skeletonCount: 6
  })))));
};
var _default = FeaturedProducts;
exports["default"] = _default;