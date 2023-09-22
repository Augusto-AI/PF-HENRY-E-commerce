"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _icons = require("@ant-design/icons");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _filterActions = require("@/redux/actions/filterActions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Import the correct action

var UserAppliedFilters = function UserAppliedFilters(_ref) {
  var filteredUsersCount = _ref.filteredUsersCount;
  var filter = (0, _reactRedux.useSelector)(function (state) {
    return state.userFilter;
  }, _reactRedux.shallowEqual);
  var fields = ["name", "email", "role"];
  var isFiltered = fields.some(function (key) {
    return !!filter[key];
  });
  var dispatch = (0, _reactRedux.useDispatch)();
  var onRemoveNameFilter = function onRemoveNameFilter() {
    dispatch((0, _filterActions.applyFilter)({
      name: ""
    })); // Use the correct action here
  };

  var onRemoveEmailFilter = function onRemoveEmailFilter() {
    dispatch((0, _filterActions.applyFilter)({
      email: ""
    })); // Use the correct action here
  };

  var onRemoveRoleFilter = function onRemoveRoleFilter() {
    dispatch((0, _filterActions.applyFilter)({
      role: ""
    })); // Use the correct action here
  };

  return !isFiltered ? null : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-list-header"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-list-header-title"
  }, /*#__PURE__*/_react["default"].createElement("h5", null, filteredUsersCount > 0 && "Found ".concat(filteredUsersCount, " ").concat(filteredUsersCount > 1 ? "users" : "user")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-applied-filters"
  }, filter.name && /*#__PURE__*/_react["default"].createElement("div", {
    className: "pill-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "d-block"
  }, "Name"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pill padding-right-l"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "pill-content margin-0"
  }, filter.name), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pill-remove",
    onClick: onRemoveNameFilter,
    role: "presentation"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "margin-0 text-subtle"
  }, /*#__PURE__*/_react["default"].createElement(_icons.CloseCircleOutlined, null))))), filter.email && /*#__PURE__*/_react["default"].createElement("div", {
    className: "pill-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "d-block"
  }, "Email"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pill padding-right-l"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "pill-content margin-0"
  }, filter.email), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pill-remove",
    onClick: onRemoveEmailFilter,
    role: "presentation"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "margin-0 text-subtle"
  }, /*#__PURE__*/_react["default"].createElement(_icons.CloseCircleOutlined, null))))), filter.role && /*#__PURE__*/_react["default"].createElement("div", {
    className: "pill-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "d-block"
  }, "Role"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pill padding-right-l"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "pill-content margin-0"
  }, filter.role), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pill-remove",
    onClick: onRemoveRoleFilter,
    role: "presentation"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "margin-0 text-subtle"
  }, /*#__PURE__*/_react["default"].createElement(_icons.CloseCircleOutlined, null)))))));
};
UserAppliedFilters.defaultProps = {
  filteredUsersCount: 0
};
UserAppliedFilters.propTypes = {
  filteredUsersCount: _propTypes["default"].number
};
var _default = UserAppliedFilters;
exports["default"] = _default;