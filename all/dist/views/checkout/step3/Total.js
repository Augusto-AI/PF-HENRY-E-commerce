"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _routes = require("@/constants/routes");
var _formik = require("formik");
var _utils = require("@/helpers/utils");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _checkoutActions = require("@/redux/actions/checkoutActions");
var _excluded = ["cardnumber", "ccv"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Total = function Total(_ref) {
  var isInternational = _ref.isInternational,
    subtotal = _ref.subtotal;
  var _useFormikContext = (0, _formik.useFormikContext)(),
    values = _useFormikContext.values,
    submitForm = _useFormikContext.submitForm;
  var history = (0, _reactRouterDom.useHistory)();
  var dispatch = (0, _reactRedux.useDispatch)();
  var onClickBack = function onClickBack() {
    // destructure to only select left fields omitting cardnumber and ccv
    var cardnumber = values.cardnumber,
      ccv = values.ccv,
      rest = _objectWithoutProperties(values, _excluded);
    dispatch((0, _checkoutActions.setPaymentDetails)(_objectSpread({}, rest))); // save payment details
    history.push(_routes.CHECKOUT_STEP_2);
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "basket-total text-right"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "basket-total-title"
  }, "Total:"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "basket-total-amount"
  }, (0, _utils.displayMoney)(subtotal + (isInternational ? 50 : 0)))), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-shipping-action"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button-muted",
    onClick: function onClick() {
      return onClickBack(values);
    },
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowLeftOutlined, null), "\xA0 Go Back")));
};
Total.propTypes = {
  isInternational: _propTypes["default"].bool.isRequired,
  subtotal: _propTypes["default"].number.isRequired
};
var _default = Total;
exports["default"] = _default;