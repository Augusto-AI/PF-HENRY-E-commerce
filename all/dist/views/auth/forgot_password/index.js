"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _hooks = require("@/hooks");
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _authActions = require("@/redux/actions/authActions");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ForgotPassword = function ForgotPassword() {
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return {
        isAuthenticating: state.app.isAuthenticating,
        authStatus: state.app.authStatus
      };
    }),
    authStatus = _useSelector.authStatus,
    isAuthenticating = _useSelector.isAuthenticating;
  var dispatch = (0, _reactRedux.useDispatch)();
  var didMount = (0, _hooks.useDidMount)();
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    forgotPWStatus = _useState2[0],
    setForgotPWStatus = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isSendingForgotPWRequest = _useState4[0],
    setIsSending = _useState4[1];
  var _useState5 = (0, _react.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    field = _useState6[0],
    setField = _useState6[1];
  (0, _hooks.useScrollTop)();
  (0, _hooks.useDocumentTitle)('Forgot Password | Salinaka');
  (0, _react.useEffect)(function () {
    if (didMount) {
      setForgotPWStatus(authStatus);
      setIsSending(isAuthenticating);
    }
  }, [authStatus, isAuthenticating]);
  var onEmailChange = function onEmailChange(value, error) {
    setField({
      email: value,
      error: error
    });
  };
  var onSubmitEmail = function onSubmitEmail() {
    if (!!field.email && !field.error) {
      dispatch((0, _authActions.resetPassword)(field.email));
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "forgot_password"
  }, (forgotPWStatus === null || forgotPWStatus === void 0 ? void 0 : forgotPWStatus.message) && /*#__PURE__*/_react["default"].createElement("h5", {
    className: "text-center ".concat(authStatus !== null && authStatus !== void 0 && authStatus.success ? 'toast-success' : 'toast-error')
  }, authStatus.message), /*#__PURE__*/_react["default"].createElement("h2", null, "Forgot Your Password?"), /*#__PURE__*/_react["default"].createElement("p", null, "Enter your email address and we will send you a password reset email."), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("input", {
    field: "email",
    required: true,
    className: "input-form",
    label: "* Email",
    maxLength: 40,
    onChange: onEmailChange,
    placeholder: "Enter your email",
    readOnly: isSendingForgotPWRequest || (authStatus === null || authStatus === void 0 ? void 0 : authStatus.success),
    type: "email",
    style: {
      width: '100%'
    }
  }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("button", {
    className: "button w-100-mobile",
    disabled: isSendingForgotPWRequest || (authStatus === null || authStatus === void 0 ? void 0 : authStatus.success),
    onClick: onSubmitEmail,
    type: "button"
  }, isSendingForgotPWRequest ? /*#__PURE__*/_react["default"].createElement(_icons.LoadingOutlined, null) : /*#__PURE__*/_react["default"].createElement(_icons.CheckOutlined, null), "\xA0", isSendingForgotPWRequest ? 'Sending Password Reset Email' : 'Send Password Reset Email'));
};
var _default = ForgotPassword;
exports["default"] = _default;