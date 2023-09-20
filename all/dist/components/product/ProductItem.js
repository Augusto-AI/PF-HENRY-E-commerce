"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _common = require("@/components/common");
var _utils = require("@/helpers/utils");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactLoadingSkeleton = _interopRequireWildcard(require("react-loading-skeleton"));
var _reactRouterDom = require("react-router-dom");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ProductItem = function ProductItem(_ref) {
  var product = _ref.product,
    isItemOnBasket = _ref.isItemOnBasket,
    addToBasket = _ref.addToBasket;
  var history = (0, _reactRouterDom.useHistory)();
  var onClickItem = function onClickItem() {
    if (!product) return;
    if (product.id) {
      history.push("/product/".concat(product.id));
    }
  };
  var itemOnBasket = isItemOnBasket ? isItemOnBasket(product.id) : false;
  var handleAddToBasket = function handleAddToBasket() {
    if (addToBasket) addToBasket(_objectSpread(_objectSpread({}, product), {}, {
      selectedSize: product.sizes[0]
    }));
  };
  return /*#__PURE__*/_react["default"].createElement(_reactLoadingSkeleton.SkeletonTheme, {
    color: "#e1e1e1",
    highlightColor: "#f2f2f2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-card ".concat(!product.id ? 'product-loading' : ''),
    style: {
      border: product && itemOnBasket ? '1px solid #a6a5a5' : '',
      boxShadow: product && itemOnBasket ? '0 10px 15px rgba(0, 0, 0, .07)' : 'none'
    }
  }, itemOnBasket && /*#__PURE__*/_react["default"].createElement(_icons.CheckOutlined, {
    className: "fa fa-check product-card-check"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-card-content",
    onClick: onClickItem,
    role: "presentation"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-card-img-wrapper"
  }, product.image ? /*#__PURE__*/_react["default"].createElement(_common.ImageLoader, {
    alt: product.name,
    className: "product-card-img",
    src: product.image
  }) : /*#__PURE__*/_react["default"].createElement(_reactLoadingSkeleton["default"], {
    width: "100%",
    height: "90%"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-details"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "product-card-name text-overflow-ellipsis margin-auto"
  }, product.name || /*#__PURE__*/_react["default"].createElement(_reactLoadingSkeleton["default"], {
    width: 80
  })), /*#__PURE__*/_react["default"].createElement("p", {
    className: "product-card-brand"
  }, product.brand || /*#__PURE__*/_react["default"].createElement(_reactLoadingSkeleton["default"], {
    width: 60
  })), /*#__PURE__*/_react["default"].createElement("h4", {
    className: "product-card-price"
  }, product.price ? (0, _utils.displayMoney)(product.price) : /*#__PURE__*/_react["default"].createElement(_reactLoadingSkeleton["default"], {
    width: 40
  })))), product.id && /*#__PURE__*/_react["default"].createElement("button", {
    className: "product-card-button button-small button button-block ".concat(itemOnBasket ? 'button-border button-border-gray' : ''),
    onClick: handleAddToBasket,
    type: "button"
  }, itemOnBasket ? 'Remove from basket' : 'Add to basket')));
};
ProductItem.defaultProps = {
  isItemOnBasket: undefined,
  addToBasket: undefined
};
ProductItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  product: _propTypes["default"].object.isRequired,
  isItemOnBasket: _propTypes["default"].func,
  addToBasket: _propTypes["default"].func
};
var _default = ProductItem;
exports["default"] = _default;