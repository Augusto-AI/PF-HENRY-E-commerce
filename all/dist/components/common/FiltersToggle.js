"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _hooks = require("@/hooks");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _Filters = _interopRequireDefault(require("./Filters"));
var _Modal = _interopRequireDefault(require("./Modal"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var FiltersToggle = function FiltersToggle(_ref) {
  var children = _ref.children;
  var _useModal = (0, _hooks.useModal)(),
    isOpenModal = _useModal.isOpenModal,
    onOpenModal = _useModal.onOpenModal,
    onCloseModal = _useModal.onCloseModal;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "filters-toggle",
    onClick: onOpenModal,
    role: "presentation"
  }, children), /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
    isOpen: isOpenModal,
    onRequestClose: onCloseModal
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "filters-toggle-sub"
  }, /*#__PURE__*/_react["default"].createElement(_Filters["default"], {
    closeModal: onCloseModal
  })), /*#__PURE__*/_react["default"].createElement("button", {
    className: "modal-close-button",
    onClick: onCloseModal,
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-times-circle"
  }))));
};
FiltersToggle.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired
};
var _default = FiltersToggle;
exports["default"] = _default;