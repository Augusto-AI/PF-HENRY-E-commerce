"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _reactCompoundSlider = require("react-compound-slider");
var _Handle = _interopRequireDefault(require("./Handle"));
var _SliderRail = _interopRequireDefault(require("./SliderRail"));
var _Tick = _interopRequireDefault(require("./Tick"));
var _Track = _interopRequireDefault(require("./Track"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var sliderStyle = {
  position: 'relative',
  width: '100%'
};
var PriceRange = function PriceRange(_ref) {
  var min = _ref.min,
    max = _ref.max,
    initMin = _ref.initMin,
    initMax = _ref.initMax,
    productsCount = _ref.productsCount,
    onPriceChange = _ref.onPriceChange;
  var _useState = (0, _react.useState)({
      domain: [min, max],
      values: [initMin || min, initMax || max],
      update: [min, max].slice(),
      inputMin: initMin || min,
      inputMax: initMax || max,
      inputError: false,
      reversed: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var onUpdate = function onUpdate(update) {
    setState(function () {
      return _objectSpread(_objectSpread({}, state), {}, {
        update: update,
        inputMin: update[0],
        inputMax: update[1]
      });
    });
  };
  var onChange = function onChange(values) {
    setState(function () {
      return _objectSpread(_objectSpread({}, state), {}, {
        values: values,
        inputMin: values[0],
        inputMax: values[1]
      });
    });
    if (values[0] < values[1]) onPriceChange.apply(void 0, _toConsumableArray(values));
  };
  var inputClassName = function inputClassName() {
    return state.inputError ? 'price-range-input price-input-error' : 'price-range-input';
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: 120,
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "price-range-control"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: inputClassName(),
    disabled: productsCount === 0,
    max: max,
    min: min,
    type: "number",
    readOnly: true,
    value: state.inputMin
  }), "\u2014", /*#__PURE__*/_react["default"].createElement("input", {
    className: inputClassName(),
    disabled: productsCount === 0,
    max: max,
    min: min,
    type: "number",
    readOnly: true,
    value: state.inputMax
  })), /*#__PURE__*/_react["default"].createElement(_reactCompoundSlider.Slider, {
    mode: 1,
    step: 1,
    domain: state.domain,
    rootStyle: sliderStyle,
    onUpdate: onUpdate,
    onChange: onChange,
    values: state.values
  }, /*#__PURE__*/_react["default"].createElement(_reactCompoundSlider.Rail, null, function (_ref2) {
    var getRailProps = _ref2.getRailProps;
    return /*#__PURE__*/_react["default"].createElement(_SliderRail["default"], {
      getRailProps: getRailProps
    });
  }), /*#__PURE__*/_react["default"].createElement(_reactCompoundSlider.Handles, null, function (_ref3) {
    var handles = _ref3.handles,
      activeHandleID = _ref3.activeHandleID,
      getHandleProps = _ref3.getHandleProps;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "slider-handles"
    }, handles.map(function (handle) {
      return /*#__PURE__*/_react["default"].createElement(_Handle["default"], {
        key: handle.id,
        handle: handle,
        domain: state.domain,
        isActive: handle.id === activeHandleID,
        getHandleProps: getHandleProps
      });
    }));
  }), /*#__PURE__*/_react["default"].createElement(_reactCompoundSlider.Tracks, {
    left: false,
    right: false
  }, function (_ref4) {
    var tracks = _ref4.tracks,
      getTrackProps = _ref4.getTrackProps;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "slider-tracks"
    }, tracks.map(function (_ref5) {
      var id = _ref5.id,
        source = _ref5.source,
        target = _ref5.target;
      return /*#__PURE__*/_react["default"].createElement(_Track["default"], {
        key: id,
        source: source,
        target: target,
        getTrackProps: getTrackProps
      });
    }));
  }), /*#__PURE__*/_react["default"].createElement(_reactCompoundSlider.Ticks, {
    count: 5
  }, function (_ref6) {
    var ticks = _ref6.ticks;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "slider-ticks"
    }, ticks.map(function (tick) {
      return /*#__PURE__*/_react["default"].createElement(_Tick["default"], {
        key: tick.id,
        tick: tick,
        count: ticks.length
      });
    }));
  })));
};
PriceRange.defaultProps = {
  initMin: undefined,
  initMax: undefined
};
PriceRange.propTypes = {
  initMin: _propTypes["default"].number,
  initMax: _propTypes["default"].number,
  min: _propTypes["default"].number.isRequired,
  max: _propTypes["default"].number.isRequired,
  productsCount: _propTypes["default"].number.isRequired,
  onPriceChange: _propTypes["default"].func.isRequired
};
var _default = PriceRange;
exports["default"] = _default;