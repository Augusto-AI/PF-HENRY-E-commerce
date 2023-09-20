"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _routes = require("@/constants/routes");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _excluded = ["isAuth", "role", "component"];
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var PrivateRoute = function PrivateRoute(_ref) {
  var isAuth = _ref.isAuth,
    role = _ref.role,
    Component = _ref.component,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, _extends({}, rest, {
    component: function component(props) {
      if (isAuth && role === 'USER') {
        return /*#__PURE__*/_react["default"].createElement("main", {
          className: "content"
        }, /*#__PURE__*/_react["default"].createElement(Component, props));
      }
      if (isAuth && role === 'ADMIN') {
        return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
          to: _routes.ADMIN_DASHBOARD
        });
      }
      return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
        to: {
          pathname: _routes.SIGNIN,
          // eslint-disable-next-line react/prop-types
          state: {
            from: props.location
          }
        }
      });
    }
  }));
};
PrivateRoute.defaultProps = {
  isAuth: false,
  role: 'USER'
};
PrivateRoute.propTypes = {
  isAuth: _propTypes["default"].bool,
  role: _propTypes["default"].string,
  component: _propTypes["default"].func.isRequired,
  // eslint-disable-next-line react/require-default-props
  rest: _propTypes["default"].any
};
var mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth;
  return {
    isAuth: !!auth,
    role: (auth === null || auth === void 0 ? void 0 : auth.role) || ''
  };
};
var _default = (0, _reactRedux.connect)(mapStateToProps)(PrivateRoute);
exports["default"] = _default;