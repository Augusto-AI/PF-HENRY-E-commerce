"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
var _icons = require("@ant-design/icons");
var _common = require("@/components/common");
var _routes = require("@/constants/routes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Update route constant to ADD_USER

var UsersNavbar = function UsersNavbar(_ref) {
  var usersCount = _ref.usersCount,
    totalUsersCount = _ref.totalUsersCount;
  var history = (0, _reactRouterDom.useHistory)();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-admin-header"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "user-admin-header-title"
  }, "Users \xA0 (", "".concat(usersCount, " / ").concat(totalUsersCount), ")"), /*#__PURE__*/_react["default"].createElement(_common.SearchBar, null), "\xA0", /*#__PURE__*/_react["default"].createElement(_common.FiltersToggle, null, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button-muted button-small",
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement(_icons.FilterOutlined, null), "\xA0More Filters")), /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button-small",
    onClick: function onClick() {
      return history.push(_routes.REGISTER_USER);
    },
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement(_icons.PlusOutlined, null), "\xA0 Add New User"));
};
UsersNavbar.propTypes = {
  usersCount: _propTypes["default"].number.isRequired,
  totalUsersCount: _propTypes["default"].number.isRequired
};
var _default = UsersNavbar;
exports["default"] = _default;