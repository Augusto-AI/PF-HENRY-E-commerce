"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _basketActions = require("@/redux/actions/basketActions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var BasketItemControl = function BasketItemControl(_ref) {
  var product = _ref.product;
  var dispatch = (0, _reactRedux.useDispatch)();
  var onAddQty = function onAddQty() {
    if (product.quantity < product.maxQuantity) {
      dispatch((0, _basketActions.addQtyItem)(product.id));
    }
  };
  var onMinusQty = function onMinusQty() {
    if (product.maxQuantity >= product.quantity && product.quantity !== 0) {
      dispatch((0, _basketActions.minusQtyItem)(product.id));
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "basket-item-control"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button-border button-border-gray button-small basket-control basket-control-add",
    disabled: product.maxQuantity === product.quantity,
    onClick: onAddQty,
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement(_icons.PlusOutlined, {
    style: {
      fontSize: '9px'
    }
  })), /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button-border button-border-gray button-small basket-control basket-control-minus",
    disabled: product.quantity === 1,
    onClick: onMinusQty,
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement(_icons.MinusOutlined, {
    style: {
      fontSize: '9px'
    }
  })));
};
BasketItemControl.propTypes = {
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
var _default = BasketItemControl;
exports["default"] = _default;