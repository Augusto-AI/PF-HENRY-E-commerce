"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ = require(".");
var _reactRedux = require("react-redux");
var _userActions = require("@/redux/actions/userActions");
var _utils = require("@/helpers/utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var UsersTable = function UsersTable(_ref) {
  var users = _ref.users;
  var dispatch = (0, _reactRedux.useDispatch)();
  var _onDeleteUser = function onDeleteUser(userId) {
    dispatch(removeUser(userId));
    (0, _utils.displayActionMessage)("User successfully deleted");
  };
  var _onChangeRoleToAdmin = function onChangeRoleToAdmin(userId) {
    dispatch((0, _userActions.changeUserRole)(userId));
    (0, _utils.displayActionMessage)("User role changed to ADMIN");
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, users.length > 0 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-user grid-count-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-col"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/_react["default"].createElement("h5", null, "Name")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/_react["default"].createElement("h5", null, "Email"))), users.length === 0 ? new Array(10).fill({}).map(function (user, index) {
    return /*#__PURE__*/_react["default"].createElement(_.UserItem, {
      key: "user-skeleton-".concat(index) // Provide a unique key
      ,
      user: user,
      onDeleteUser: function onDeleteUser() {
        return _onDeleteUser(user.id);
      },
      onChangeRoleToAdmin: function onChangeRoleToAdmin() {
        return _onChangeRoleToAdmin(user.id);
      }
    });
  }) : users.map(function (user) {
    return /*#__PURE__*/_react["default"].createElement(_.UserItem, {
      key: user.id // Use a unique attribute as the key
      ,
      user: user,
      onDeleteUser: function onDeleteUser() {
        return _onDeleteUser(user.id);
      },
      onChangeRoleToAdmin: function onChangeRoleToAdmin() {
        return _onChangeRoleToAdmin(user.id);
      }
    });
  }));
};
UsersTable.propTypes = {
  users: _propTypes["default"].array.isRequired
};
var _default = UsersTable;
exports["default"] = _default;