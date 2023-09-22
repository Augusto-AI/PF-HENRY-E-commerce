"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireWildcard(require("react-loading-skeleton"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _userActions = require("@/redux/actions/userActions");
var _utils = require("@/helpers/utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// Import your user-related actions

var UserItem = function UserItem(_ref) {
  var user = _ref.user;
  var dispatch = (0, _reactRedux.useDispatch)();
  var history = (0, _reactRouterDom.useHistory)();
  var userRef = (0, _react.useRef)(null);
  var onClickEdit = function onClickEdit() {
    // Implement navigation to edit user profile if needed
    // history.push(`/edit-user/${user.id}`);
  };
  var onDeleteUser = function onDeleteUser() {
    userRef.current.classList.toggle("item-active");
  };
  var onConfirmDelete = function onConfirmDelete() {
    dispatch(removeUser(user.id)); // Dispatch your remove user action
    (0, _utils.displayActionMessage)("User successfully deleted");
    userRef.current.classList.remove("item-active");
  };
  var onCancelDelete = function onCancelDelete() {
    userRef.current.classList.remove("item-active");
  };
  var onChangeRoleToAdmin = function onChangeRoleToAdmin() {
    dispatch((0, _userActions.changeUserRole)(user.id)); // Dispatch your change user role action
    (0, _utils.displayActionMessage)("User role changed to ADMIN");
  };
  return /*#__PURE__*/_react["default"].createElement(_reactLoadingSkeleton.SkeletonTheme, {
    color: "#e1e1e1",
    highlightColor: "#f2f2f2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "item item-users ".concat(!user.id && "item-loading"),
    ref: userRef
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-count-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-overflow-ellipsis"
  }, user.name || /*#__PURE__*/_react["default"].createElement(_reactLoadingSkeleton["default"], {
    width: 50
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/_react["default"].createElement("span", null, user.email || /*#__PURE__*/_react["default"].createElement(_reactLoadingSkeleton["default"], {
    width: 50
  })))), user.id && /*#__PURE__*/_react["default"].createElement("div", {
    className: "item-action"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button-border button-small",
    onClick: onClickEdit,
    type: "button"
  }, "Edit"), "\xA0", /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button-border button-small button-danger",
    onClick: onDeleteUser,
    type: "button"
  }, "Delete"), "\xA0", /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button-border button-small",
    onClick: onChangeRoleToAdmin,
    type: "button"
  }, "Change to ADMIN"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "item-action-confirm"
  }, /*#__PURE__*/_react["default"].createElement("h5", null, "Are you sure you want to delete this user?"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button-small button-border",
    onClick: onCancelDelete,
    type: "button"
  }, "No"), "\xA0", /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button-small button-danger",
    onClick: onConfirmDelete,
    type: "button"
  }, "Yes")))));
};
var _default = (0, _reactRouterDom.withRouter)(UserItem);
exports["default"] = _default;