"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _routes = require("@/constants/routes");
var _utils = require("@/helpers/utils");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable no-nested-ternary */
var withCheckout = function withCheckout(Component) {
  return (0, _reactRouterDom.withRouter)(function (props) {
    var state = (0, _reactRedux.useSelector)(function (store) {
      return {
        isAuth: !!store.auth.id && !!store.auth.role,
        basket: store.basket,
        shipping: store.checkout.shipping,
        payment: store.checkout.payment,
        profile: store.profile
      };
    });
    var shippingFee = state.shipping.isInternational ? 50 : 0;
    var subtotal = (0, _utils.calculateTotal)(state.basket.map(function (product) {
      return product.price * product.quantity;
    }));
    if (!state.isAuth) {
      return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
        to: _routes.SIGNIN
      });
    }
    if (state.basket.length === 0) {
      return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
        to: "/"
      });
    }
    if (state.isAuth && state.basket.length !== 0) {
      return /*#__PURE__*/_react["default"].createElement(Component
      // eslint-disable-next-line react/jsx-props-no-spreading
      , _extends({}, props, {
        basket: state.basket,
        payment: state.payment,
        profile: state.profile,
        shipping: state.shipping,
        subtotal: Number(subtotal + shippingFee)
      }));
    }
    return null;
  });
};
var _default = withCheckout;
exports["default"] = _default;