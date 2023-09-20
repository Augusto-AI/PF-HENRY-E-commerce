"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _common = require("@/components/common");
var _product = require("@/components/product");
var _routes = require("@/constants/routes");
var _utils = require("@/helpers/utils");
var _hooks = require("@/hooks");
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactSelect = _interopRequireDefault(require("react-select"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ViewProduct = function ViewProduct() {
  var _useParams = (0, _reactRouterDom.useParams)(),
    id = _useParams.id;
  var _useProduct = (0, _hooks.useProduct)(id),
    product = _useProduct.product,
    isLoading = _useProduct.isLoading,
    error = _useProduct.error;
  var _useBasket = (0, _hooks.useBasket)(id),
    addToBasket = _useBasket.addToBasket,
    isItemOnBasket = _useBasket.isItemOnBasket;
  (0, _hooks.useScrollTop)();
  (0, _hooks.useDocumentTitle)("View ".concat((product === null || product === void 0 ? void 0 : product.name) || "Item"));
  var _useState = (0, _react.useState)((product === null || product === void 0 ? void 0 : product.image) || ""),
    _useState2 = _slicedToArray(_useState, 2),
    selectedImage = _useState2[0],
    setSelectedImage = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedSize = _useState4[0],
    setSelectedSize = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedColor = _useState6[0],
    setSelectedColor = _useState6[1];
  var _useRecommendedProduc = (0, _hooks.useRecommendedProducts)(6),
    recommendedProducts = _useRecommendedProduc.recommendedProducts,
    fetchRecommendedProducts = _useRecommendedProduc.fetchRecommendedProducts,
    isLoadingFeatured = _useRecommendedProduc.isLoading,
    errorFeatured = _useRecommendedProduc.error;
  var colorOverlay = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    setSelectedImage(product === null || product === void 0 ? void 0 : product.image);
  }, [product]);
  var onSelectedSizeChange = function onSelectedSizeChange(newValue) {
    setSelectedSize(newValue.value);
  };
  var onSelectedColorChange = function onSelectedColorChange(color) {
    setSelectedColor(color);
    if (colorOverlay.current) {
      colorOverlay.current.value = color;
    }
  };
  var handleAddToBasket = function handleAddToBasket() {
    addToBasket(_objectSpread(_objectSpread({}, product), {}, {
      selectedColor: selectedColor,
      selectedSize: selectedSize || product.sizes[0]
    }));
  };
  return /*#__PURE__*/_react["default"].createElement("main", {
    className: "content"
  }, isLoading && /*#__PURE__*/_react["default"].createElement("div", {
    className: "loader"
  }, /*#__PURE__*/_react["default"].createElement("h4", null, "Loading Product..."), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_icons.LoadingOutlined, {
    style: {
      fontSize: "3rem"
    }
  })), error && /*#__PURE__*/_react["default"].createElement(_common.MessageDisplay, {
    message: error
  }), product && !isLoading && /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-view"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: _routes.SHOP
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "button-link d-inline-flex"
  }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowLeftOutlined, null), "\xA0 Back to shop")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-modal"
  }, product.imageCollection.length !== 0 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-modal-image-collection"
  }, product.imageCollection.map(function (image) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-modal-image-collection-wrapper",
      key: image.id,
      onClick: function onClick() {
        return setSelectedImage(image.url);
      },
      role: "presentation"
    }, /*#__PURE__*/_react["default"].createElement(_common.ImageLoader, {
      className: "product-modal-image-collection-img",
      src: image.url
    }));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-modal-image-wrapper"
  }, selectedColor && /*#__PURE__*/_react["default"].createElement("input", {
    type: "color",
    disabled: true,
    ref: colorOverlay,
    id: "color-overlay"
  }), /*#__PURE__*/_react["default"].createElement(_common.ImageLoader, {
    alt: product.name,
    className: "product-modal-image",
    src: selectedImage
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-modal-details"
  }, /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-subtle"
  }, product.brand), /*#__PURE__*/_react["default"].createElement("h1", {
    className: "margin-top-0"
  }, product.name), /*#__PURE__*/_react["default"].createElement("span", null, product.description), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "divider"
  }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-subtle"
  }, "Lens Width and Frame Size"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], {
    placeholder: "--Select Size--",
    onChange: onSelectedSizeChange,
    options: product.sizes.sort(function (a, b) {
      return a < b ? -1 : 1;
    }).map(function (size) {
      return {
        label: "".concat(size, " mm"),
        value: size
      };
    }),
    styles: {
      menu: function menu(provided) {
        return _objectSpread(_objectSpread({}, provided), {}, {
          zIndex: 10
        });
      }
    }
  })), /*#__PURE__*/_react["default"].createElement("br", null), product.availableColors.length >= 1 && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-subtle"
  }, "Choose Color"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_common.ColorChooser, {
    availableColors: product.availableColors,
    onSelectedColorChange: onSelectedColorChange
  })), /*#__PURE__*/_react["default"].createElement("h1", null, (0, _utils.displayMoney)(product.price)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-modal-action"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button-small ".concat(isItemOnBasket(product.id) ? "button-border button-border-gray" : ""),
    onClick: handleAddToBasket,
    type: "button"
  }, isItemOnBasket(product.id) ? "Remove From Basket" : "Add To Basket")))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: "10rem"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "display-header"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "Recommended"), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: _routes.RECOMMENDED_PRODUCTS
  }, "See All")), errorFeatured && !isLoadingFeatured ? /*#__PURE__*/_react["default"].createElement(_common.MessageDisplay, {
    message: error,
    action: fetchRecommendedProducts,
    buttonLabel: "Try Again"
  }) : /*#__PURE__*/_react["default"].createElement(_product.ProductShowcaseGrid, {
    products: recommendedProducts,
    skeletonCount: 3
  }))));
};
var _default = ViewProduct;
exports["default"] = _default;