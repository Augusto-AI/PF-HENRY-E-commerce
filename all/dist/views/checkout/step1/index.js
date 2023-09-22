"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _basket = require("@/components/basket");
var _routes = require("@/constants/routes");
var _utils = require("@/helpers/utils");
var _hooks = require("@/hooks");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _components = require("../components");
var _withCheckout = _interopRequireDefault(require("../hoc/withCheckout"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var OrderSummary = function OrderSummary(_ref) {
  var basket = _ref.basket,
    subtotal = _ref.subtotal;
  (0, _hooks.useDocumentTitle)("Check Out Step 1 | PF HENRY & CO.");
  (0, _hooks.useScrollTop)();
  var dispatch = (0, _reactRedux.useDispatch)();
  var history = (0, _reactRouterDom.useHistory)();
  var onClickPrevious = function onClickPrevious() {
    return history.push("/");
  };
  var onClickNext = function onClickNext() {
    return history.push(_routes.CHECKOUT_STEP_2);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout"
  }, /*#__PURE__*/_react["default"].createElement(_components.StepTracker, {
    current: 1
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-step-1"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-center"
  }, "Order Summary"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "d-block text-center"
  }, "Review items in your basket."), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-items"
  }, basket.map(function (product) {
    return /*#__PURE__*/_react["default"].createElement(_basket.BasketItem, {
      basket: basket,
      dispatch: dispatch,
      key: product.id,
      product: product
    });
  })), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "basket-total text-right"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "basket-total-title"
  }, "Subtotal:"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "basket-total-amount"
  }, (0, _utils.displayMoney)(subtotal))), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-shipping-action"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button-muted",
    onClick: onClickPrevious,
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement(_icons.ShopOutlined, null), "\xA0 Continue Shopping"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "button",
    onClick: onClickNext,
    type: "submit"
  }, "Next Step \xA0", /*#__PURE__*/_react["default"].createElement(_icons.ArrowRightOutlined, null)))));
};
OrderSummary.propTypes = {
  basket: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  subtotal: _propTypes["default"].number.isRequired
};
var _default = (0, _withCheckout["default"])(OrderSummary);
exports["default"] = _default;