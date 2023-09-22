"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _icons = require("@ant-design/icons");
var _reactLoadingSkeleton = _interopRequireWildcard(require("react-loading-skeleton"));
var _utils = require("@/helpers/utils");
var _common = require("@/components/common");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var UserItem = function UserItem(_ref) {
  var user = _ref.user,
    isUserSelected = _ref.isUserSelected,
    selectUser = _ref.selectUser;
  var history = (0, _reactRouterDom.useHistory)();
  var onClickUser = function onClickUser() {
    if (!user) return;
    if (user.id) {
      history.push("/user/".concat(user.id));
    }
  };
  var userSelected = isUserSelected ? isUserSelected(user.id) : false;
  var handleSelectUser = function handleSelectUser() {
    if (selectUser) selectUser(user.id);
  };
  return /*#__PURE__*/_react["default"].createElement(_reactLoadingSkeleton.SkeletonTheme, {
    color: "#e1e1e1",
    highlightColor: "#f2f2f2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-card ".concat(!user.id ? "user-loading" : ""),
    style: {
      border: user && userSelected ? "1px solid #a6a5a5" : "",
      boxShadow: user && userSelected ? "0 10px 15px rgba(0, 0, 0, .07)" : "none"
    }
  }, userSelected && /*#__PURE__*/_react["default"].createElement(_icons.CheckOutlined, {
    className: "fa fa-check user-card-check"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-card-content",
    onClick: onClickUser,
    role: "presentation"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-card-img-wrapper"
  }, user.image ? /*#__PURE__*/_react["default"].createElement(_common.ImageLoader, {
    alt: user.name,
    className: "user-card-img",
    src: user.image
  }) : /*#__PURE__*/_react["default"].createElement(_reactLoadingSkeleton["default"], {
    width: "100%",
    height: "90%"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-details"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "user-card-name text-overflow-ellipsis margin-auto"
  }, user.name || /*#__PURE__*/_react["default"].createElement(_reactLoadingSkeleton["default"], {
    width: 80
  })), /*#__PURE__*/_react["default"].createElement("p", {
    className: "user-card-email"
  }, user.email || /*#__PURE__*/_react["default"].createElement(_reactLoadingSkeleton["default"], {
    width: 60
  })))), user.id && /*#__PURE__*/_react["default"].createElement("button", {
    className: "user-card-button button-small button button-block ".concat(userSelected ? "button-border button-border-gray" : ""),
    onClick: handleSelectUser,
    type: "button"
  }, userSelected ? "Deselect User" : "Select User")));
};
UserItem.defaultProps = {
  isUserSelected: undefined,
  selectUser: undefined
};
UserItem.propTypes = {
  user: _propTypes["default"].object.isRequired,
  isUserSelected: _propTypes["default"].func,
  selectUser: _propTypes["default"].func
};
var _default = UserItem;
exports["default"] = _default;