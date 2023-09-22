"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Route = _interopRequireWildcard(require("@/constants/routes"));
var _logoFull = _interopRequireDefault(require("@/images/logo-full.png"));
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Footer = function Footer() {
  var _useLocation = (0, _reactRouterDom.useLocation)(),
    pathname = _useLocation.pathname;
  var visibleOnlyPath = [Route.HOME, Route.SHOP];
  return !visibleOnlyPath.includes(pathname) ? null : /*#__PURE__*/_react["default"].createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "footer-col-1"
  }, /*#__PURE__*/_react["default"].createElement("strong", null, /*#__PURE__*/_react["default"].createElement("span", null, "Developed by", " ", /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://www.linkedin.com/in/augusto-herrera-velasquez-36679060/"
  }, "Augusto Herrera")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "footer-col-2"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    alt: "Footer logo",
    className: "footer-logo",
    src: _logoFull["default"]
  }), /*#__PURE__*/_react["default"].createElement("h5", null, "\xA9\xA0", new Date().getFullYear())), /*#__PURE__*/_react["default"].createElement("div", {
    className: "footer-col-3"
  }, /*#__PURE__*/_react["default"].createElement("strong", null, /*#__PURE__*/_react["default"].createElement("span", null, "Fork this project on GitHub \xA0", /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://github.com/Augusto-AI/PF-HENRY-E-commerce"
  }, "HERE")))));
};
var _default = Footer;
exports["default"] = _default;