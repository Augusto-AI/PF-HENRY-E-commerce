"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _hooks = require("@/hooks");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _productActions = require("@/redux/actions/productActions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ProductForm = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/ProductForm'));
  });
});
var EditProduct = function EditProduct(_ref) {
  var match = _ref.match;
  (0, _hooks.useDocumentTitle)('Edit Product | Salinaka');
  (0, _hooks.useScrollTop)();
  var _useProduct = (0, _hooks.useProduct)(match.params.id),
    product = _useProduct.product,
    error = _useProduct.error,
    isLoading = _useProduct.isLoading;
  var dispatch = (0, _reactRedux.useDispatch)();
  var onSubmitForm = function onSubmitForm(updates) {
    dispatch((0, _productActions.editProduct)(product.id, updates));
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-form-container"
  }, error && /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
    to: "/dashboard/products"
  }), /*#__PURE__*/_react["default"].createElement("h2", null, "Edit Product"), product && /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react["default"].createElement("div", {
      className: "loader",
      style: {
        minHeight: '80vh'
      }
    }, /*#__PURE__*/_react["default"].createElement("h6", null, "Loading ... "), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_icons.LoadingOutlined, null))
  }, /*#__PURE__*/_react["default"].createElement(ProductForm, {
    isLoading: isLoading,
    onSubmit: onSubmitForm,
    product: product
  })));
};
EditProduct.propTypes = {
  match: _propTypes["default"].shape({
    params: _propTypes["default"].shape({
      id: _propTypes["default"].string
    })
  }).isRequired
};
var _default = (0, _reactRouterDom.withRouter)(EditProduct);
exports["default"] = _default;