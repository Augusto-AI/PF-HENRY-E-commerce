"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _common = require("@/components/common");
var _routes = require("@/constants/routes");
var _formik = require("formik");
var _hooks = require("@/hooks");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _checkoutActions = require("@/redux/actions/checkoutActions");
var Yup = _interopRequireWildcard(require("yup"));
var _components = require("../components");
var _withCheckout = _interopRequireDefault(require("../hoc/withCheckout"));
var _ShippingForm = _interopRequireDefault(require("./ShippingForm"));
var _ShippingTotal = _interopRequireDefault(require("./ShippingTotal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-nested-ternary */

var FormSchema = Yup.object().shape({
  fullname: Yup.string().required('Full name is required.').min(2, 'Full name must be at least 2 characters long.').max(60, 'Full name must only be less than 60 characters.'),
  email: Yup.string().email('Email is not valid.').required('Email is required.'),
  address: Yup.string().required('Shipping address is required.'),
  mobile: Yup.object().shape({
    country: Yup.string(),
    countryCode: Yup.string(),
    dialCode: Yup.string().required('Mobile number is required'),
    value: Yup.string().required('Mobile number is required')
  }).required('Mobile number is required.'),
  isInternational: Yup["boolean"](),
  isDone: Yup["boolean"]()
});
var ShippingDetails = function ShippingDetails(_ref) {
  var profile = _ref.profile,
    shipping = _ref.shipping,
    subtotal = _ref.subtotal;
  (0, _hooks.useDocumentTitle)('Check Out Step 2 | Salinaka');
  (0, _hooks.useScrollTop)();
  var dispatch = (0, _reactRedux.useDispatch)();
  var history = (0, _reactRouterDom.useHistory)();
  var initFormikValues = {
    fullname: shipping.fullname || profile.fullname || '',
    email: shipping.email || profile.email || '',
    address: shipping.address || profile.address || '',
    mobile: shipping.mobile || profile.mobile || {},
    isInternational: shipping.isInternational || false,
    isDone: shipping.isDone || false
  };
  var onSubmitForm = function onSubmitForm(form) {
    dispatch((0, _checkoutActions.setShippingDetails)({
      fullname: form.fullname,
      email: form.email,
      address: form.address,
      mobile: form.mobile,
      isInternational: form.isInternational,
      isDone: true
    }));
    history.push(_routes.CHECKOUT_STEP_3);
  };
  return /*#__PURE__*/_react["default"].createElement(_common.Boundary, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout"
  }, /*#__PURE__*/_react["default"].createElement(_components.StepTracker, {
    current: 2
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-step-2"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-center"
  }, "Shipping Details"), /*#__PURE__*/_react["default"].createElement(_formik.Formik, {
    initialValues: initFormikValues,
    validateOnChange: true,
    validationSchema: FormSchema,
    onSubmit: onSubmitForm
  }, function () {
    return /*#__PURE__*/_react["default"].createElement(_formik.Form, null, /*#__PURE__*/_react["default"].createElement(_ShippingForm["default"], null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_ShippingTotal["default"], {
      subtotal: subtotal
    }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
      className: "checkout-shipping-action"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "button button-muted",
      onClick: function onClick() {
        return history.push(_routes.CHECKOUT_STEP_1);
      },
      type: "button"
    }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowLeftOutlined, null), "\xA0 Go Back"), /*#__PURE__*/_react["default"].createElement("button", {
      className: "button button-icon",
      type: "submit"
    }, "Next Step \xA0", /*#__PURE__*/_react["default"].createElement(_icons.ArrowRightOutlined, null))));
  }))));
};
ShippingDetails.propTypes = {
  subtotal: _propTypes["default"].number.isRequired,
  profile: _propTypes["default"].shape({
    fullname: _propTypes["default"].string,
    email: _propTypes["default"].string,
    address: _propTypes["default"].string,
    mobile: _propTypes["default"].object
  }).isRequired,
  shipping: _propTypes["default"].shape({
    fullname: _propTypes["default"].string,
    email: _propTypes["default"].string,
    address: _propTypes["default"].string,
    mobile: _propTypes["default"].object,
    isInternational: _propTypes["default"].bool,
    isDone: _propTypes["default"].bool
  }).isRequired
};
var _default = (0, _withCheckout["default"])(ShippingDetails);
exports["default"] = _default;