"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _routes = require("@/constants/routes");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _authActions = require("@/redux/actions/authActions");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable indent */

var UserNav = function UserNav() {
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return {
        profile: state.profile,
        isAuthenticating: state.app.isAuthenticating
      };
    }),
    profile = _useSelector.profile,
    isAuthenticating = _useSelector.isAuthenticating;
  var userNav = (0, _react.useRef)(null);
  var dispatch = (0, _reactRedux.useDispatch)();
  var toggleDropdown = function toggleDropdown(e) {
    var closest = e.target.closest('div.user-nav');
    try {
      if (!closest && userNav.current.classList.contains('user-sub-open')) {
        userNav.current.classList.remove('user-sub-open');
      }
    } catch (err) {
      console.log(err);
    }
  };
  (0, _react.useEffect)(function () {
    document.addEventListener('click', toggleDropdown);
    return function () {
      return document.removeEventListener('click', toggleDropdown);
    };
  }, []);
  var onClickNav = function onClickNav() {
    userNav.current.classList.toggle('user-sub-open');
  };
  return isAuthenticating ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-nav"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Signing Out"), "\xA0", /*#__PURE__*/_react["default"].createElement(_icons.LoadingOutlined, null)) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-nav",
    onClick: onClickNav,
    onKeyDown: function onKeyDown() {},
    ref: userNav,
    role: "button",
    tabIndex: 0
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "text-overflow-ellipsis"
  }, profile.fullname && profile.fullname.split(' ')[0]), /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-nav-img-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    alt: "",
    className: "user-nav-img",
    src: profile.avatar
  })), /*#__PURE__*/_react["default"].createElement(_icons.DownOutlined, {
    style: {
      fontSize: '1.2rem',
      marginLeft: '1rem'
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-nav-sub"
  }, profile.role !== 'ADMIN' && /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: _routes.ACCOUNT,
    className: "user-nav-sub-link"
  }, "View Account", /*#__PURE__*/_react["default"].createElement(_icons.UserOutlined, null)), /*#__PURE__*/_react["default"].createElement("h6", {
    className: "user-nav-sub-link margin-0 d-flex",
    onClick: function onClick() {
      return dispatch((0, _authActions.signOut)());
    },
    role: "presentation"
  }, "Sign Out", /*#__PURE__*/_react["default"].createElement(_icons.LogoutOutlined, null))));
};
UserNav.propType = {
  profile: _propTypes["default"].object.isRequired
};
var _default = (0, _reactRouterDom.withRouter)(UserNav);
exports["default"] = _default;