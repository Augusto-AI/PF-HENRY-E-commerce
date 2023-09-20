"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _formik = require("formik");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactPhoneInput = _interopRequireDefault(require("react-phone-input-2"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /* eslint-disable react/forbid-prop-types */
var CustomMobileInput = function CustomMobileInput(props) {
  var _useField = (0, _formik.useField)(props),
    _useField2 = _slicedToArray(_useField, 3),
    field = _useField2[0],
    meta = _useField2[1],
    helpers = _useField2[2];
  var label = props.label,
    placeholder = props.placeholder,
    defaultValue = props.defaultValue;
  var touched = meta.touched,
    error = meta.error;
  var setValue = helpers.setValue;
  var handleChange = function handleChange(value, data) {
    var mob = {
      dialCode: data.dialCode,
      countryCode: data.countryCode,
      country: data.name,
      value: value
    };
    setValue(mob);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "input-group"
  }, touched && error ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "label-input label-error"
  }, (error === null || error === void 0 ? void 0 : error.value) || (error === null || error === void 0 ? void 0 : error.dialCode)) : /*#__PURE__*/_react["default"].createElement("label", {
    className: "label-input",
    htmlFor: field.name
  }, label), /*#__PURE__*/_react["default"].createElement(_reactPhoneInput["default"], {
    name: field.name,
    country: "ph",
    inputClass: "input-form d-block",
    style: {
      border: touched && error ? '1px solid red' : '1px solid #cacaca'
    },
    inputExtraProps: {
      required: true
    },
    onChange: handleChange,
    placeholder: placeholder,
    value: defaultValue.value
  }));
};
CustomMobileInput.defaultProps = {
  label: 'Mobile Number',
  placeholder: '09254461351'
};
CustomMobileInput.propTypes = {
  label: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  defaultValue: _propTypes["default"].object.isRequired
};
var _default = CustomMobileInput;
exports["default"] = _default;