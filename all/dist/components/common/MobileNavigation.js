"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _basket = require("@/components/basket");
var _routes = require("@/constants/routes");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _UserAvatar = _interopRequireDefault(require("@/views/account/components/UserAvatar"));
var _Badge = _interopRequireDefault(require("./Badge"));
var _FiltersToggle = _interopRequireDefault(require("./FiltersToggle"));
var _SearchBar = _interopRequireDefault(require("./SearchBar"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Navigation = function Navigation(props) {
  var isAuthenticating = props.isAuthenticating,
    basketLength = props.basketLength,
    disabledPaths = props.disabledPaths,
    user = props.user;
  var _useLocation = (0, _reactRouterDom.useLocation)(),
    pathname = _useLocation.pathname;
  var onClickLink = function onClickLink(e) {
    if (isAuthenticating) e.preventDefault();
  };
  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: "mobile-navigation"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mobile-navigation-main"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mobile-navigation-logo"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    onClick: onClickLink,
    to: _routes.HOME
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "PF HENRY"))), /*#__PURE__*/_react["default"].createElement(_basket.BasketToggle, null, function (_ref) {
    var onClickToggle = _ref.onClickToggle;
    return /*#__PURE__*/_react["default"].createElement("button", {
      className: "button-link navigation-menu-link basket-toggle",
      onClick: onClickToggle,
      disabled: disabledPaths.includes(pathname),
      type: "button"
    }, /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
      count: basketLength
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fa fa-shopping-bag",
      style: {
        fontSize: "2rem"
      }
    })));
  }), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "mobile-navigation-menu"
  }, user ? /*#__PURE__*/_react["default"].createElement("li", {
    className: "mobile-navigation-item"
  }, /*#__PURE__*/_react["default"].createElement(_UserAvatar["default"], null)) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, pathname !== _routes.SIGNIN && /*#__PURE__*/_react["default"].createElement("li", {
    className: "mobile-navigation-item"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    className: "navigation-menu-link",
    onClick: onClickLink,
    to: _routes.SIGNIN
  }, "Sign In"))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mobile-navigation-sec"
  }, /*#__PURE__*/_react["default"].createElement(_SearchBar["default"], null), /*#__PURE__*/_react["default"].createElement(_FiltersToggle["default"], null, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button-link button-small",
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-filter"
  })))));
};
Navigation.propTypes = {
  isAuthenticating: _propTypes["default"].bool.isRequired,
  basketLength: _propTypes["default"].number.isRequired,
  disabledPaths: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  user: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].object]).isRequired
};
var _default = Navigation;
exports["default"] = _default;