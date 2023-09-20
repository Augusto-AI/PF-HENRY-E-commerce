"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _hooks = require("@/hooks");
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _productActions = require("@/redux/actions/productActions");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ProductForm = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("../components/ProductForm"));
  });
});
var AddProduct = function AddProduct() {
  (0, _hooks.useScrollTop)();
  (0, _hooks.useDocumentTitle)("Add New Product | PF HENSRY & CO.");
  var isLoading = (0, _reactRedux.useSelector)(function (state) {
    return state.app.loading;
  });
  var dispatch = (0, _reactRedux.useDispatch)();
  var onSubmit = function onSubmit(product) {
    dispatch((0, _productActions.addProduct)(product));
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-form-container"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "Add New Product"), /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react["default"].createElement("div", {
      className: "loader",
      style: {
        minHeight: "80vh"
      }
    }, /*#__PURE__*/_react["default"].createElement("h6", null, "Loading ... "), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_icons.LoadingOutlined, null))
  }, /*#__PURE__*/_react["default"].createElement(ProductForm, {
    isLoading: isLoading,
    onSubmit: onSubmit,
    product: {
      name: "",
      brand: "",
      price: 0,
      maxQuantity: 0,
      description: "",
      keywords: [],
      sizes: [],
      image: "",
      isFeatured: false,
      isRecommended: false,
      availableColors: [],
      imageCollection: []
    }
  })));
};
var _default = (0, _reactRouterDom.withRouter)(AddProduct);
exports["default"] = _default;