"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /* eslint-disable jsx-a11y/label-has-associated-control */ /* eslint-disable react/forbid-prop-types */
var InputColor = function InputColor(props) {
  var _form$values$name;
  var name = props.name,
    form = props.form,
    push = props.push,
    remove = props.remove;
  var _React$useState = _react["default"].useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    selectedColor = _React$useState2[0],
    setSelectedColor = _React$useState2[1];
  var handleColorChange = function handleColorChange(e) {
    var val = e.target.value;
    setSelectedColor(val);
  };
  var handleAddSelectedColor = function handleAddSelectedColor() {
    if (!form.values[name].includes(selectedColor)) {
      push(selectedColor);
      setSelectedColor('');
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "input-group product-form-field"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-flex"
  }, form.touched[name] && form.errors[name] ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "label-input label-error"
  }, form.errors[name]) : /*#__PURE__*/_react["default"].createElement("label", {
    className: "label-input",
    htmlFor: name
  }, "Available Colors"), selectedColor && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "color-item",
    style: {
      background: selectedColor
    }
  }), /*#__PURE__*/_react["default"].createElement("h4", {
    className: "text-link",
    onClick: handleAddSelectedColor,
    style: {
      textDecoration: 'underline'
    },
    role: "presentation"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-check"
  }), "Add Selected Color"))), /*#__PURE__*/_react["default"].createElement("input", {
    name: name,
    type: "color",
    onChange: handleColorChange,
    id: name
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-form-field"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "d-block padding-s"
  }, "Selected Color(s)"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "color-chooser"
  }, (_form$values$name = form.values[name]) === null || _form$values$name === void 0 ? void 0 : _form$values$name.map(function (color, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: color,
      onClick: function onClick() {
        return remove(index);
      },
      className: "color-item color-item-deletable",
      title: "Remove ".concat(color),
      style: {
        backgroundColor: color
      },
      role: "presentation"
    });
  }))));
};
InputColor.propTypes = {
  name: _propTypes["default"].string.isRequired,
  form: _propTypes["default"].shape({
    values: _propTypes["default"].object,
    touched: _propTypes["default"].object,
    errors: _propTypes["default"].object
  }).isRequired,
  push: _propTypes["default"].func.isRequired,
  remove: _propTypes["default"].func.isRequired
};
var _default = InputColor;
exports["default"] = _default;