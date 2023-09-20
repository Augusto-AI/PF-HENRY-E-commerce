"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _excluded = ["field", "form", "label"];
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CustomTextarea = function CustomTextarea(_ref) {
  var field = _ref.field,
    _ref$form = _ref.form,
    touched = _ref$form.touched,
    errors = _ref$form.errors,
    label = _ref.label,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "input-group"
  }, touched[field.name] && errors[field.name] ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "label-input label-error"
  }, errors[field.name]) : /*#__PURE__*/_react["default"].createElement("label", {
    className: "label-input",
    htmlFor: field.name
  }, label), /*#__PURE__*/_react["default"].createElement("textarea", _extends({
    name: field.name,
    cols: 30,
    rows: 4,
    id: field.name,
    className: "input-form ".concat(touched[field.name] && errors[field.name] && 'input-error')
  }, field, props)));
};
CustomTextarea.propTypes = {
  label: _propTypes["default"].string.isRequired,
  field: _propTypes["default"].object.isRequired,
  form: _propTypes["default"].object.isRequired
};
var _default = CustomTextarea;
exports["default"] = _default;