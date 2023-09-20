"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _formik = require("@/components/formik");
var _formik2 = require("formik");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* eslint-disable jsx-a11y/label-has-associated-control */ /* eslint-disable no-else-return */
var CreditPayment = function CreditPayment() {
  var _useFormikContext = (0, _formik2.useFormikContext)(),
    values = _useFormikContext.values,
    setValues = _useFormikContext.setValues;
  var collapseContainerRef = (0, _react.useRef)(null);
  var cardInputRef = (0, _react.useRef)(null);
  var containerRef = (0, _react.useRef)(null);
  var checkboxContainerRef = (0, _react.useRef)(null);
  var toggleCollapse = function toggleCollapse() {
    var cn = containerRef.current;
    var cb = checkboxContainerRef.current;
    var cl = collapseContainerRef.current;
    if (cb && cn && cl) {
      if (values.type === 'credit') {
        cardInputRef.current.focus();
        cn.style.height = "".concat(cb.offsetHeight + cl.offsetHeight, "px");
      } else {
        cardInputRef.current.blur();
        cn.style.height = "".concat(cb.offsetHeight, "px");
      }
    }
  };
  (0, _react.useEffect)(function () {
    toggleCollapse();
  }, [values.type]);
  var onCreditModeChange = function onCreditModeChange(e) {
    if (e.target.checked) {
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        type: 'credit'
      }));
      toggleCollapse();
    }
  };
  var handleOnlyNumberInput = function handleOnlyNumberInput(e) {
    var key = e.nativeEvent.key;
    if (/\D/.test(key) && key !== 'Backspace') {
      e.preventDefault();
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-center"
  }, "Payment"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("span", {
    className: "d-block padding-s"
  }, "Payment Option"), /*#__PURE__*/_react["default"].createElement("div", {
    ref: containerRef,
    className: "checkout-fieldset-collapse ".concat(values.type === 'credit' ? 'is-selected-payment' : '')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-field margin-0"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-checkbox-field",
    ref: checkboxContainerRef
  }, /*#__PURE__*/_react["default"].createElement("input", {
    checked: values.type === 'credit',
    id: "modeCredit",
    name: "type" // the field name in formik I used is type
    ,
    onChange: onCreditModeChange,
    type: "radio"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "d-flex w-100",
    htmlFor: "modeCredit"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-flex-grow-1 margin-left-s"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "margin-0"
  }, "Credit Card"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-subtle d-block margin-top-s"
  }, "Pay with Visa, Master Card and other debit or credit card")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "payment-img payment-img-visa"
  }), "\xA0", /*#__PURE__*/_react["default"].createElement("div", {
    className: "payment-img payment-img-mastercard"
  }))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-collapse-sub",
    ref: collapseContainerRef
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "d-block padding-s text-center"
  }, "Accepted Cards"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-cards-accepted d-flex-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "payment-img payment-img-visa",
    title: "Visa"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "payment-img payment-img-express",
    title: "American Express"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "payment-img payment-img-mastercard",
    title: "Master Card"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "payment-img payment-img-maestro",
    title: "Maestro"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "payment-img payment-img-discover",
    title: "Discover"
  })), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-field margin-0"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-fieldset"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-field"
  }, /*#__PURE__*/_react["default"].createElement(_formik2.Field, {
    name: "name",
    type: "text",
    label: "* Name on Card",
    placeholder: "Jane Doe",
    component: _formik.CustomInput,
    style: {
      textTransform: 'capitalize'
    },
    inputRef: cardInputRef
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-field"
  }, /*#__PURE__*/_react["default"].createElement(_formik2.Field, {
    name: "cardnumber",
    type: "text",
    maxLength: 19,
    onKeyDown: handleOnlyNumberInput,
    label: "* Card Number",
    placeholder: "Enter your card number",
    component: _formik.CustomInput
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-fieldset"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-field"
  }, /*#__PURE__*/_react["default"].createElement(_formik2.Field, {
    name: "expiry",
    type: "date",
    label: "* Expiry Date",
    placeholder: "Enter your expiry date",
    component: _formik.CustomInput
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-field"
  }, /*#__PURE__*/_react["default"].createElement(_formik2.Field, {
    name: "ccv",
    type: "text",
    maxLength: 4,
    onKeyDown: handleOnlyNumberInput,
    label: "* CCV",
    placeholder: "****",
    component: _formik.CustomInput
  })))))));
};
var _default = CreditPayment;
exports["default"] = _default;