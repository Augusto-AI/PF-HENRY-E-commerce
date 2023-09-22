"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _icons = require("@ant-design/icons");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _authActions = require("@/redux/actions/authActions");
var _routes = require("@/constants/routes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /* eslint-disable indent */
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
    var closest = e.target.closest(".user-nav");
    try {
      if (!closest && userNav.current.classList.contains("user-sub-open")) {
        userNav.current.classList.remove("user-sub-open");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   document.addEventListener("click", toggleDropdown);

  //   return () => document.removeEventListener("click", toggleDropdown);
  // }, []);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isUserSubOpen = _useState2[0],
    setIsUserSubOpen = _useState2[1];
  var onClickNav = function onClickNav() {
    setIsUserSubOpen(!isUserSubOpen);
  };
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: "user-nav ".concat(isUserSubOpen ? "user-sub-open" : ""),
    onClick: onClickNav,
    onKeyDown: function onKeyDown() {},
    ref: userNav,
    role: "button",
    tabIndex: 0
  }, isAuthenticating ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, "Signing Out"), "\xA0", /*#__PURE__*/_react["default"].createElement(_icons.LoadingOutlined, null)) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "text-overflow-ellipsis"
  }, profile.fullname && profile.fullname.split(" ")[0]), /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-nav-img-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    alt: "",
    className: "user-nav-img",
    src: profile.avatar
  })), /*#__PURE__*/_react["default"].createElement(_icons.DownOutlined, {
    style: {
      fontSize: "1.2rem",
      marginLeft: "1rem"
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-nav-sub"
  }, profile.role !== "ADMIN" && /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: _routes.ACCOUNT,
    className: "user-nav-sub-link"
  }, "View Account", /*#__PURE__*/_react["default"].createElement(_icons.UserOutlined, null)), /*#__PURE__*/_react["default"].createElement("h6", {
    className: "user-nav-sub-link margin-0 d-flex",
    onClick: function onClick() {
      return dispatch((0, _authActions.signOut)());
    },
    role: "presentation"
  }, "Sign Out", /*#__PURE__*/_react["default"].createElement(_icons.LogoutOutlined, null)))));
};
UserNav.propTypes = {
  profile: _propTypes["default"].object.isRequired
};
var _default = (0, _reactRouterDom.withRouter)(UserNav);
exports["default"] = _default;