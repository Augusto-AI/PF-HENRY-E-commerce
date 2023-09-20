"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _common = require("@/components/common");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactLoadingSkeleton = _interopRequireWildcard(require("react-loading-skeleton"));
var _reactRouterDom = require("react-router-dom");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ProductFeatured = function ProductFeatured(_ref) {
  var product = _ref.product;
  var history = (0, _reactRouterDom.useHistory)();
  var onClickItem = function onClickItem() {
    if (!product) return;
    history.push("/product/".concat(product.id));
  };
  return /*#__PURE__*/_react["default"].createElement(_reactLoadingSkeleton.SkeletonTheme, {
    color: "#e1e1e1",
    highlightColor: "#f2f2f2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-display",
    onClick: onClickItem,
    role: "presentation"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-display-img"
  }, product.image ? /*#__PURE__*/_react["default"].createElement(_common.ImageLoader, {
    className: "product-card-img",
    src: product.image
  }) : /*#__PURE__*/_react["default"].createElement(_reactLoadingSkeleton["default"], {
    width: "100%",
    height: "100%"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-display-details"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, product.name || /*#__PURE__*/_react["default"].createElement(_reactLoadingSkeleton["default"], {
    width: 80
  })), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-subtle text-italic"
  }, product.brand || /*#__PURE__*/_react["default"].createElement(_reactLoadingSkeleton["default"], {
    width: 40
  })))));
};
ProductFeatured.propTypes = {
  product: _propTypes["default"].shape({
    image: _propTypes["default"].string,
    name: _propTypes["default"].string,
    id: _propTypes["default"].string,
    brand: _propTypes["default"].string
  }).isRequired
};
var _default = ProductFeatured;
exports["default"] = _default;