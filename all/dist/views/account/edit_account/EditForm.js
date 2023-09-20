"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _formik = require("@/components/formik");
var _routes = require("@/constants/routes");
var _formik2 = require("formik");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var EditForm = function EditForm(_ref) {
  var isLoading = _ref.isLoading,
    authProvider = _ref.authProvider;
  var history = (0, _reactRouterDom.useHistory)();
  var _useFormikContext = (0, _formik2.useFormikContext)(),
    values = _useFormikContext.values,
    submitForm = _useFormikContext.submitForm;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-profile-details"
  }, /*#__PURE__*/_react["default"].createElement(_formik2.Field, {
    disabled: isLoading,
    name: "fullname",
    type: "text",
    label: "* Full Name",
    placeholder: "Enter your full name",
    component: _formik.CustomInput,
    style: {
      textTransform: 'capitalize'
    }
  }), /*#__PURE__*/_react["default"].createElement(_formik2.Field, {
    disabled: authProvider !== 'password' || isLoading,
    name: "email",
    type: "email",
    label: "* Email Address",
    placeholder: "test@example.com",
    component: _formik.CustomInput
  }), /*#__PURE__*/_react["default"].createElement(_formik2.Field, {
    disabled: isLoading,
    name: "address",
    type: "text",
    label: "Address (Will be used for checkout)",
    placeholder: "#245 Brgy. Maligalig, Arayat Pampanga, Philippines",
    component: _formik.CustomInput,
    style: {
      textTransform: 'capitalize'
    }
  }), /*#__PURE__*/_react["default"].createElement(_formik.CustomMobileInput, {
    defaultValue: values.mobile,
    name: "mobile",
    disabled: isLoading,
    label: "Mobile Number (Will be used for checkout)"
  }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "edit-user-action"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button-muted w-100-mobile",
    disabled: isLoading,
    onClick: function onClick() {
      return history.push(_routes.ACCOUNT);
    },
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowLeftOutlined, null), "\xA0 Back to Profile"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "button w-100-mobile",
    disabled: isLoading,
    onClick: submitForm,
    type: "button"
  }, isLoading ? /*#__PURE__*/_react["default"].createElement(_icons.LoadingOutlined, null) : /*#__PURE__*/_react["default"].createElement(_icons.CheckOutlined, null), "\xA0", isLoading ? 'Updating Profile' : 'Update Profile')));
};
EditForm.propTypes = {
  isLoading: _propTypes["default"].bool.isRequired,
  authProvider: _propTypes["default"].string.isRequired
};
var _default = EditForm;
exports["default"] = _default;