"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _authActions = require("@/redux/actions/authActions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var SocialLogin = function SocialLogin(_ref) {
  var isLoading = _ref.isLoading;
  var dispatch = (0, _reactRedux.useDispatch)();
  var onSignInWithGoogle = function onSignInWithGoogle() {
    dispatch((0, _authActions.signInWithGoogle)());
  };
  var onSignInWithFacebook = function onSignInWithFacebook() {
    dispatch((0, _authActions.signInWithFacebook)());
  };
  var onSignInWithGithub = function onSignInWithGithub() {
    dispatch((0, _authActions.signInWithGithub)());
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "auth-provider"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button auth-provider-button provider-facebook",
    disabled: isLoading,
    onClick: onSignInWithFacebook,
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement(_icons.FacebookOutlined, null), "Continue with Facebook"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "button auth-provider-button provider-google",
    disabled: isLoading,
    onClick: onSignInWithGoogle,
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement(_icons.GoogleOutlined, null), "Continue with Google"));
};
SocialLogin.propTypes = {
  isLoading: _propTypes["default"].bool.isRequired
};
var _default = SocialLogin;
exports["default"] = _default;