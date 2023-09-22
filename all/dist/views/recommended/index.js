"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _common = require("@/components/common");
var _product = require("@/components/product");
var _hooks = require("@/hooks");
var _bannerGirl = _interopRequireDefault(require("@/images/banner-girl-1.png"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var RecommendedProducts = function RecommendedProducts() {
  (0, _hooks.useDocumentTitle)("Recommended Products | HP HENRY & CO.");
  (0, _hooks.useScrollTop)();
  var _useRecommendedProduc = (0, _hooks.useRecommendedProducts)(),
    recommendedProducts = _useRecommendedProduc.recommendedProducts,
    fetchRecommendedProducts = _useRecommendedProduc.fetchRecommendedProducts,
    isLoading = _useRecommendedProduc.isLoading,
    error = _useRecommendedProduc.error;
  return /*#__PURE__*/_react["default"].createElement("main", {
    className: "content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "featured"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "banner"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "banner-desc"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "Recommended Products")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "banner-img"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _bannerGirl["default"],
    alt: ""
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "display"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-display-grid"
  }, error && !isLoading ? /*#__PURE__*/_react["default"].createElement(_common.MessageDisplay, {
    message: error,
    action: fetchRecommendedProducts,
    buttonLabel: "Try Again"
  }) : /*#__PURE__*/_react["default"].createElement(_product.ProductShowcaseGrid, {
    products: recommendedProducts,
    skeletonCount: 6
  })))));
};
var _default = RecommendedProducts;
exports["default"] = _default;