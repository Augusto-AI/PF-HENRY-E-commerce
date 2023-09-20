"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _common = require("@/components/common");
var _product = require("@/components/product");
var _routes = require("@/constants/routes");
var _hooks = require("@/hooks");
var _bannerGirl = _interopRequireDefault(require("@/images/banner-girl.png"));
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Home = function Home() {
  (0, _hooks.useDocumentTitle)('Salinaka | Home');
  (0, _hooks.useScrollTop)();
  var _useFeaturedProducts = (0, _hooks.useFeaturedProducts)(6),
    featuredProducts = _useFeaturedProducts.featuredProducts,
    fetchFeaturedProducts = _useFeaturedProducts.fetchFeaturedProducts,
    isLoadingFeatured = _useFeaturedProducts.isLoading,
    errorFeatured = _useFeaturedProducts.error;
  var _useRecommendedProduc = (0, _hooks.useRecommendedProducts)(6),
    recommendedProducts = _useRecommendedProduc.recommendedProducts,
    fetchRecommendedProducts = _useRecommendedProduc.fetchRecommendedProducts,
    isLoadingRecommended = _useRecommendedProduc.isLoading,
    errorRecommended = _useRecommendedProduc.error;
  return /*#__PURE__*/_react["default"].createElement("main", {
    className: "content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "home"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "banner"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "banner-desc"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-thin"
  }, /*#__PURE__*/_react["default"].createElement("strong", null, "See"), "\xA0everything with\xA0", /*#__PURE__*/_react["default"].createElement("strong", null, "Clarity")), /*#__PURE__*/_react["default"].createElement("p", null, "Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts\u2014we\u2019ve got your eyes covered."), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: _routes.SHOP,
    className: "button"
  }, "Shop Now \xA0", /*#__PURE__*/_react["default"].createElement(_icons.ArrowRightOutlined, null))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "banner-img"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _bannerGirl["default"],
    alt: ""
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "display"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "display-header"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "Featured Products"), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: _routes.FEATURED_PRODUCTS
  }, "See All")), errorFeatured && !isLoadingFeatured ? /*#__PURE__*/_react["default"].createElement(_common.MessageDisplay, {
    message: errorFeatured,
    action: fetchFeaturedProducts,
    buttonLabel: "Try Again"
  }) : /*#__PURE__*/_react["default"].createElement(_product.ProductShowcaseGrid, {
    products: featuredProducts,
    skeletonCount: 6
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "display"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "display-header"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "Recommended Products"), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: _routes.RECOMMENDED_PRODUCTS
  }, "See All")), errorRecommended && !isLoadingRecommended ? /*#__PURE__*/_react["default"].createElement(_common.MessageDisplay, {
    message: errorRecommended,
    action: fetchRecommendedProducts,
    buttonLabel: "Try Again"
  }) : /*#__PURE__*/_react["default"].createElement(_product.ProductShowcaseGrid, {
    products: recommendedProducts,
    skeletonCount: 6
  }))));
};
var _default = Home;
exports["default"] = _default;