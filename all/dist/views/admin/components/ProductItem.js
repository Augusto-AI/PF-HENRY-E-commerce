"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _common = require("@/components/common");
var _routes = require("@/constants/routes");
var _utils = require("@/helpers/utils");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireWildcard(require("react-loading-skeleton"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _productActions = require("@/redux/actions/productActions");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ProductItem = function ProductItem(_ref) {
  var product = _ref.product;
  var dispatch = (0, _reactRedux.useDispatch)();
  var history = (0, _reactRouterDom.useHistory)();
  var productRef = (0, _react.useRef)(null);
  var onClickEdit = function onClickEdit() {
    history.push("".concat(_routes.EDIT_PRODUCT, "/").concat(product.id));
  };
  var onDeleteProduct = function onDeleteProduct() {
    productRef.current.classList.toggle('item-active');
  };
  var onConfirmDelete = function onConfirmDelete() {
    dispatch((0, _productActions.removeProduct)(product.id));
    (0, _utils.displayActionMessage)('Item successfully deleted');
    productRef.current.classList.remove('item-active');
  };
  var onCancelDelete = function onCancelDelete() {
    productRef.current.classList.remove('item-active');
  };
  return /*#__PURE__*/_react["default"].createElement(_reactLoadingSkeleton.SkeletonTheme, {
    color: "#e1e1e1",
    highlightColor: "#f2f2f2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "item item-products ".concat(!product.id && 'item-loading'),
    ref: productRef
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-count-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-col item-img-wrapper"
  }, product.image ? /*#__PURE__*/_react["default"].createElement(_common.ImageLoader, {
    alt: product.name,
    className: "item-img",
    src: product.image
  }) : /*#__PURE__*/_react["default"].createElement(_reactLoadingSkeleton["default"], {
    width: 50,
    height: 30
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-overflow-ellipsis"
  }, product.name || /*#__PURE__*/_react["default"].createElement(_reactLoadingSkeleton["default"], {
    width: 50
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/_react["default"].createElement("span", null, product.brand || /*#__PURE__*/_react["default"].createElement(_reactLoadingSkeleton["default"], {
    width: 50
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/_react["default"].createElement("span", null, product.price ? (0, _utils.displayMoney)(product.price) : /*#__PURE__*/_react["default"].createElement(_reactLoadingSkeleton["default"], {
    width: 30
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/_react["default"].createElement("span", null, product.dateAdded ? (0, _utils.displayDate)(product.dateAdded) : /*#__PURE__*/_react["default"].createElement(_reactLoadingSkeleton["default"], {
    width: 30
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/_react["default"].createElement("span", null, product.maxQuantity || /*#__PURE__*/_react["default"].createElement(_reactLoadingSkeleton["default"], {
    width: 20
  })))), product.id && /*#__PURE__*/_react["default"].createElement("div", {
    className: "item-action"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button-border button-small",
    onClick: onClickEdit,
    type: "button"
  }, "Edit"), "\xA0", /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button-border button-small button-danger",
    onClick: onDeleteProduct,
    type: "button"
  }, "Delete"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "item-action-confirm"
  }, /*#__PURE__*/_react["default"].createElement("h5", null, "Are you sure you want to delete this?"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button-small button-border",
    onClick: onCancelDelete,
    type: "button"
  }, "No"), "\xA0", /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button-small button-danger",
    onClick: onConfirmDelete,
    type: "button"
  }, "Yes")))));
};
ProductItem.propTypes = {
  product: _propTypes["default"].shape({
    id: _propTypes["default"].string,
    name: _propTypes["default"].string,
    brand: _propTypes["default"].string,
    price: _propTypes["default"].number,
    maxQuantity: _propTypes["default"].number,
    description: _propTypes["default"].string,
    keywords: _propTypes["default"].arrayOf(_propTypes["default"].string),
    imageCollection: _propTypes["default"].arrayOf(_propTypes["default"].object),
    sizes: _propTypes["default"].arrayOf(_propTypes["default"].string),
    image: _propTypes["default"].string,
    imageUrl: _propTypes["default"].string,
    isFeatured: _propTypes["default"].bool,
    isRecommended: _propTypes["default"].bool,
    dateAdded: _propTypes["default"].number,
    availableColors: _propTypes["default"].arrayOf(_propTypes["default"].string)
  }).isRequired
};
var _default = (0, _reactRouterDom.withRouter)(ProductItem);
exports["default"] = _default;