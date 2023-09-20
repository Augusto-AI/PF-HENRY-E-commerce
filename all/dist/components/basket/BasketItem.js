"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _basket = require("@/components/basket");
var _common = require("@/components/common");
var _utils = require("@/helpers/utils");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _basketActions = require("@/redux/actions/basketActions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var BasketItem = function BasketItem(_ref) {
  var product = _ref.product;
  var dispatch = (0, _reactRedux.useDispatch)();
  var onRemoveFromBasket = function onRemoveFromBasket() {
    return dispatch((0, _basketActions.removeFromBasket)(product.id));
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "basket-item"
  }, /*#__PURE__*/_react["default"].createElement(_basket.BasketItemControl, {
    product: product
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "basket-item-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "basket-item-img-wrapper"
  }, /*#__PURE__*/_react["default"].createElement(_common.ImageLoader, {
    alt: product.name,
    className: "basket-item-img",
    src: product.image
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "basket-item-details"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/product/".concat(product.id),
    onClick: function onClick() {
      return document.body.classList.remove("is-basket-open");
    }
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "underline basket-item-name"
  }, product.name)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "basket-item-specs"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "spec-title"
  }, "Cantidad"), /*#__PURE__*/_react["default"].createElement("h5", {
    className: "my-0"
  }, product.quantity)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "spec-title"
  }, "Tama\xF1o"), /*#__PURE__*/_react["default"].createElement("h5", {
    className: "my-0"
  }, product.selectedSize, " mm")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "spec-title"
  }, "Color"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      backgroundColor: product.selectedColor || product.availableColors[0],
      width: "15px",
      height: "15px",
      borderRadius: "50%"
    }
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "basket-item-price"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "my-0"
  }, (0, _utils.displayMoney)(product.price * product.quantity))), /*#__PURE__*/_react["default"].createElement("button", {
    className: "basket-item-remove button button-border button-border-gray button-small",
    onClick: onRemoveFromBasket,
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement(_icons.CloseOutlined, null))));
};
BasketItem.propTypes = {
  product: _propTypes["default"].shape({
    id: _propTypes["default"].string,
    name: _propTypes["default"].string,
    brand: _propTypes["default"].string,
    price: _propTypes["default"].number,
    quantity: _propTypes["default"].number,
    maxQuantity: _propTypes["default"].number,
    description: _propTypes["default"].string,
    keywords: _propTypes["default"].arrayOf(_propTypes["default"].string),
    selectedSize: _propTypes["default"].string,
    selectedColor: _propTypes["default"].string,
    imageCollection: _propTypes["default"].arrayOf(_propTypes["default"].string),
    sizes: _propTypes["default"].arrayOf(_propTypes["default"].number),
    image: _propTypes["default"].string,
    imageUrl: _propTypes["default"].string,
    isFeatured: _propTypes["default"].bool,
    isRecommended: _propTypes["default"].bool,
    availableColors: _propTypes["default"].arrayOf(_propTypes["default"].string)
  }).isRequired
};
var _default = BasketItem;
exports["default"] = _default;