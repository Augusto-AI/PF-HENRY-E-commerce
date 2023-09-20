"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _common = require("@/components/common");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _excluded = ["isAuth", "role", "component"];
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var AdminRoute = function AdminRoute(_ref) {
  var isAuth = _ref.isAuth,
    role = _ref.role,
    Component = _ref.component,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, _extends({}, rest, {
    component: function component(props) {
      return isAuth && role === 'ADMIN' ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_common.AdminNavigation, null), /*#__PURE__*/_react["default"].createElement("main", {
        className: "content-admin"
      }, /*#__PURE__*/_react["default"].createElement(_common.AdminSideBar, null), /*#__PURE__*/_react["default"].createElement("div", {
        className: "content-admin-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(Component, props)))) : /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
        to: "/"
      });
    }
  }));
};
var mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth;
  return {
    isAuth: !!auth,
    role: (auth === null || auth === void 0 ? void 0 : auth.role) || ''
  };
};
AdminRoute.defaultProps = {
  isAuth: false,
  role: 'USER'
};
AdminRoute.propTypes = {
  isAuth: _propTypes["default"].bool,
  role: _propTypes["default"].string,
  component: _propTypes["default"].func.isRequired,
  // eslint-disable-next-line react/require-default-props
  rest: _propTypes["default"].any
};
var _default = (0, _reactRedux.connect)(mapStateToProps)(AdminRoute);
exports["default"] = _default;