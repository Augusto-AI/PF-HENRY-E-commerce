"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _common = require("@/components/common");
var _routes = require("@/constants/routes");
var _utils = require("@/helpers/utils");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable indent */

var UserProfile = function UserProfile(props) {
  var profile = (0, _reactRedux.useSelector)(function (state) {
    return state.profile;
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-profile"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-profile-block"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-profile-banner"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-profile-banner-wrapper"
  }, /*#__PURE__*/_react["default"].createElement(_common.ImageLoader, {
    alt: "Banner",
    className: "user-profile-banner-img",
    src: profile.banner
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-profile-avatar-wrapper"
  }, /*#__PURE__*/_react["default"].createElement(_common.ImageLoader, {
    alt: "Avatar",
    className: "user-profile-img",
    src: profile.avatar
  })), /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button-small user-profile-edit",
    onClick: function onClick() {
      return props.history.push(_routes.ACCOUNT_EDIT);
    },
    type: "button"
  }, "Edit Account")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-profile-details"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "user-profile-name"
  }, profile.fullname), /*#__PURE__*/_react["default"].createElement("span", null, "Email"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("h5", null, profile.email), /*#__PURE__*/_react["default"].createElement("span", null, "Address"), /*#__PURE__*/_react["default"].createElement("br", null), profile.address ? /*#__PURE__*/_react["default"].createElement("h5", null, profile.address) : /*#__PURE__*/_react["default"].createElement("h5", {
    className: "text-subtle text-italic"
  }, "Address not set"), /*#__PURE__*/_react["default"].createElement("span", null, "Mobile"), /*#__PURE__*/_react["default"].createElement("br", null), profile.mobile ? /*#__PURE__*/_react["default"].createElement("h5", null, profile.mobile.value) : /*#__PURE__*/_react["default"].createElement("h5", {
    className: "text-subtle text-italic"
  }, "Mobile not set"), /*#__PURE__*/_react["default"].createElement("span", null, "Date Joined"), /*#__PURE__*/_react["default"].createElement("br", null), profile.dateJoined ? /*#__PURE__*/_react["default"].createElement("h5", null, (0, _utils.displayDate)(profile.dateJoined)) : /*#__PURE__*/_react["default"].createElement("h5", {
    className: "text-subtle text-italic"
  }, "Not available"))));
};
UserProfile.propTypes = {
  history: _propTypes["default"].shape({
    push: _propTypes["default"].func
  }).isRequired
};
var _default = (0, _reactRouterDom.withRouter)(UserProfile);
exports["default"] = _default;