"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _formik = require("formik");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _creatable = _interopRequireDefault(require("react-select/creatable"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /* eslint-disable react/forbid-prop-types */
var CustomCreatableSelect = function CustomCreatableSelect(props) {
  var _useField = (0, _formik.useField)(props),
    _useField2 = _slicedToArray(_useField, 3),
    field = _useField2[0],
    meta = _useField2[1],
    helpers = _useField2[2];
  var options = props.options,
    defaultValue = props.defaultValue,
    label = props.label,
    placeholder = props.placeholder,
    isMulti = props.isMulti,
    type = props.type,
    iid = props.iid;
  var touched = meta.touched,
    error = meta.error;
  var setValue = helpers.setValue;
  var handleChange = function handleChange(newValue) {
    if (Array.isArray(newValue)) {
      var arr = newValue.map(function (fieldKey) {
        return fieldKey.value;
      });
      setValue(arr);
    } else {
      setValue(newValue.value);
    }
  };
  var handleKeyDown = function handleKeyDown(e) {
    if (type === 'number') {
      var key = e.nativeEvent.key;
      if (/\D/.test(key) && key !== 'Backspace') {
        e.preventDefault();
      }
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "input-group"
  }, touched && error ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "label-input label-error"
  }, error) : /*#__PURE__*/_react["default"].createElement("label", {
    className: "label-input",
    htmlFor: field.name
  }, label), /*#__PURE__*/_react["default"].createElement(_creatable["default"], {
    isMulti: isMulti,
    placeholder: placeholder,
    name: field.name,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    defaultValue: defaultValue,
    options: options,
    instanceId: iid,
    styles: {
      menu: function menu(provided) {
        return _objectSpread(_objectSpread({}, provided), {}, {
          zIndex: 10
        });
      },
      container: function container(provided) {
        return _objectSpread(_objectSpread({}, provided), {}, {
          marginBottom: '1.2rem'
        });
      },
      control: function control(provided) {
        return _objectSpread(_objectSpread({}, provided), {}, {
          border: touched && error ? '1px solid red' : '1px solid #cacaca'
        });
      }
    }
  }));
};
CustomCreatableSelect.defaultProps = {
  isMulti: false,
  placeholder: '',
  iid: '',
  options: [],
  type: 'string'
};
CustomCreatableSelect.propTypes = {
  options: _propTypes["default"].arrayOf(_propTypes["default"].object),
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].array]).isRequired,
  label: _propTypes["default"].string.isRequired,
  placeholder: _propTypes["default"].string,
  isMulti: _propTypes["default"].bool,
  type: _propTypes["default"].string,
  iid: _propTypes["default"].string
};
var _default = CustomCreatableSelect;
exports["default"] = _default;