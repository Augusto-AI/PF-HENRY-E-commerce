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
var _excluded = ["isAuth", "role", "component", "path"];
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var PublicRoute = function PublicRoute(_ref) {
  var isAuth = _ref.isAuth,
    role = _ref.role,
    Component = _ref.component,
    path = _ref.path,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, _extends({}, rest, {
    // eslint-disable-next-line consistent-return
    render: function render(props) {
      // eslint-disable-next-line react/prop-types
      var _ref2 = props.location.state || {
          from: {
            pathname: '/'
          }
        },
        from = _ref2.from;
      if (isAuth && role === 'ADMIN') {
        return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
          to: _routes.ADMIN_DASHBOARD
        });
      }
      if (isAuth && role === 'USER' && (path === _routes.SIGNIN || path === _routes.SIGNUP)) {
        return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
          to: from
        });
      }
      return /*#__PURE__*/_react["default"].createElement("main", {
        className: "content"
      }, /*#__PURE__*/_react["default"].createElement(Component, props));
    }
  }));
};
PublicRoute.defaultProps = {
  isAuth: false,
  role: 'USER',
  path: '/'
};
PublicRoute.propTypes = {
  isAuth: _propTypes["default"].bool,
  role: _propTypes["default"].string,
  component: _propTypes["default"].func.isRequired,
  path: _propTypes["default"].string,
  // eslint-disable-next-line react/require-default-props
  rest: _propTypes["default"].any
};
var mapStateToProps = function mapStateToProps(_ref3) {
  var auth = _ref3.auth;
  return {
    isAuth: !!auth,
    role: (auth === null || auth === void 0 ? void 0 : auth.role) || ''
  };
};
var _default = (0, _reactRedux.connect)(mapStateToProps)(PublicRoute);
exports["default"] = _default;