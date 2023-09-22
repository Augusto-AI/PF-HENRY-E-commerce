"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _routes = require("@/constants/routes");
var _formik = require("formik");
var _utils = require("@/helpers/utils");
var _hooks = require("@/hooks");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var Yup = _interopRequireWildcard(require("yup"));
var _components = require("../components");
var _withCheckout = _interopRequireDefault(require("../hoc/withCheckout"));
var _CreditPayment = _interopRequireDefault(require("./CreditPayment"));
var _PayPalPayment = _interopRequireDefault(require("./PayPalPayment"));
var _Total = _interopRequireDefault(require("./Total"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var FormSchema = Yup.object().shape({
  name: Yup.string().min(4, "Name should be at least 4 characters.").required("Name is required"),
  cardnumber: Yup.string().min(13, "Card number should be 13-19 digits long").max(19, "Card number should only be 13-19 digits long").required("Card number is required."),
  expiry: Yup.date().required("Credit card expiry is required."),
  ccv: Yup.string().min(3, "CCV length should be 3-4 digit").max(4, "CCV length should only be 3-4 digit").required("CCV is required."),
  type: Yup.string().required("Please select paymend mode")
});
var Payment = function Payment(_ref) {
  var shipping = _ref.shipping,
    payment = _ref.payment,
    subtotal = _ref.subtotal;
  (0, _hooks.useDocumentTitle)("Check Out Final Step | PF HENRY & CO.");
  (0, _hooks.useScrollTop)();
  var initFormikValues = {
    name: payment.name || "",
    cardnumber: payment.cardnumber || "",
    expiry: payment.expiry || "",
    ccv: payment.ccv || "",
    type: payment.type || "paypal"
  };
  var onConfirm = function onConfirm() {
    (0, _utils.displayActionMessage)("Feature not ready yet :)", "info");
  };
  if (!shipping || !shipping.isDone) {
    return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
      to: _routes.CHECKOUT_STEP_1
    });
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout"
  }, /*#__PURE__*/_react["default"].createElement(_components.StepTracker, {
    current: 3
  }), /*#__PURE__*/_react["default"].createElement(_formik.Formik, {
    initialValues: initFormikValues,
    validateOnChange: true,
    validationSchema: FormSchema,
    validate: function validate(form) {
      if (form.type === "paypal") {
        (0, _utils.displayActionMessage)("Feature not ready yet :)", "info");
      }
    },
    onSubmit: onConfirm
  }, function () {
    return /*#__PURE__*/_react["default"].createElement(_formik.Form, {
      className: "checkout-step-3"
    }, /*#__PURE__*/_react["default"].createElement(_PayPalPayment["default"], {
      subtotal: subtotal
    }), /*#__PURE__*/_react["default"].createElement(_Total["default"], {
      subtotal: subtotal
    }));
  }));
};
Payment.propTypes = {
  shipping: _propTypes["default"].shape({
    isDone: _propTypes["default"].bool,
    isInternational: _propTypes["default"].bool
  }).isRequired,
  payment: _propTypes["default"].shape({
    name: _propTypes["default"].string,
    cardnumber: _propTypes["default"].string,
    expiry: _propTypes["default"].string,
    ccv: _propTypes["default"].string,
    type: _propTypes["default"].string
  }).isRequired,
  subtotal: _propTypes["default"].number.isRequired
};
var _default = (0, _withCheckout["default"])(Payment);
exports["default"] = _default;