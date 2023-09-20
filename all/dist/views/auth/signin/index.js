"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _common = require("@/components/common");
var _formik = require("@/components/formik");
var _routes = require("@/constants/routes");
var _formik2 = require("formik");
var _hooks = require("@/hooks");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _authActions = require("@/redux/actions/authActions");
var _miscActions = require("@/redux/actions/miscActions");
var Yup = _interopRequireWildcard(require("yup"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var SignInSchema = Yup.object().shape({
  email: Yup.string().email("Email is not valid.").required("Email is required."),
  password: Yup.string().required("Password is required.")
});
var SignIn = function SignIn(_ref) {
  var history = _ref.history;
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return {
        authStatus: state.app.authStatus,
        isAuthenticating: state.app.isAuthenticating
      };
    }),
    authStatus = _useSelector.authStatus,
    isAuthenticating = _useSelector.isAuthenticating;
  var dispatch = (0, _reactRedux.useDispatch)();
  (0, _hooks.useScrollTop)();
  (0, _hooks.useDocumentTitle)("Sign In | PF HENRY & CO.");
  (0, _react.useEffect)(function () {
    return function () {
      dispatch((0, _miscActions.setAuthStatus)(null));
      dispatch((0, _miscActions.setAuthenticating)(false));
    };
  }, []);
  var onSignUp = function onSignUp() {
    return history.push(_routes.SIGNUP);
  };
  var onSubmitForm = function onSubmitForm(form) {
    dispatch((0, _authActions.signIn)(form.email, form.password));
  };
  var onClickLink = function onClickLink(e) {
    if (isAuthenticating) e.preventDefault();
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "auth-content"
  }, (authStatus === null || authStatus === void 0 ? void 0 : authStatus.success) && /*#__PURE__*/_react["default"].createElement("div", {
    className: "loader"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "toast-success auth-success"
  }, authStatus.message, /*#__PURE__*/_react["default"].createElement(_icons.LoadingOutlined, null))), !(authStatus !== null && authStatus !== void 0 && authStatus.success) && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (authStatus === null || authStatus === void 0 ? void 0 : authStatus.message) && /*#__PURE__*/_react["default"].createElement("h5", {
    className: "text-center toast-error"
  }, authStatus === null || authStatus === void 0 ? void 0 : authStatus.message), /*#__PURE__*/_react["default"].createElement("div", {
    className: "auth ".concat((authStatus === null || authStatus === void 0 ? void 0 : authStatus.message) && !(authStatus !== null && authStatus !== void 0 && authStatus.success) && "input-error")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "auth-main"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Sign in to PF HENRY & CO."), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "auth-wrapper"
  }, /*#__PURE__*/_react["default"].createElement(_formik2.Formik, {
    initialValues: {
      email: "",
      password: ""
    },
    validateOnChange: true,
    validationSchema: SignInSchema,
    onSubmit: onSubmitForm
  }, function () {
    return /*#__PURE__*/_react["default"].createElement(_formik2.Form, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "auth-field"
    }, /*#__PURE__*/_react["default"].createElement(_formik2.Field, {
      disabled: isAuthenticating,
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "test@example.com",
      component: _formik.CustomInput
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "auth-field"
    }, /*#__PURE__*/_react["default"].createElement(_formik2.Field, {
      disabled: isAuthenticating,
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Your Password",
      component: _formik.CustomInput
    })), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
      className: "auth-field auth-action"
    }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
      onClick: onClickLink,
      style: {
        textDecoration: "underline"
      },
      to: _routes.FORGOT_PASSWORD
    }, /*#__PURE__*/_react["default"].createElement("span", null, "Forgot password?")), /*#__PURE__*/_react["default"].createElement("button", {
      className: "button auth-button",
      disabled: isAuthenticating,
      type: "submit"
    }, isAuthenticating ? "Signing In" : "Sign In", "\xA0", isAuthenticating ? /*#__PURE__*/_react["default"].createElement(_icons.LoadingOutlined, null) : /*#__PURE__*/_react["default"].createElement(_icons.ArrowRightOutlined, null))));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "auth-divider"
  }, /*#__PURE__*/_react["default"].createElement("h6", null, "OR")), /*#__PURE__*/_react["default"].createElement(_common.SocialLogin, {
    isLoading: isAuthenticating
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "auth-message"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "auth-info"
  }, /*#__PURE__*/_react["default"].createElement("strong", null, "Don't have an account?")), /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button-small button-border button-border-gray button-icon",
    disabled: isAuthenticating,
    onClick: onSignUp,
    type: "button"
  }, "Sign Up"))));
};
SignIn.propTypes = {
  history: _propTypes["default"].shape({
    push: _propTypes["default"].func
  }).isRequired
};
var _default = SignIn;
exports["default"] = _default;