"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _hooks = require("@/hooks");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _filterActions = require("@/redux/actions/filterActions");
var _selector = require("@/selectors/selector");
var _PriceRange = _interopRequireDefault(require("./PriceRange"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /* eslint-disable no-nested-ternary */
var Filters = function Filters(_ref) {
  var closeModal = _ref.closeModal;
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return {
        filter: state.filter,
        isLoading: state.app.loading,
        products: state.products.items
      };
    }),
    filter = _useSelector.filter,
    isLoading = _useSelector.isLoading,
    products = _useSelector.products;
  var _useState = (0, _react.useState)({
      brand: filter.brand,
      minPrice: filter.minPrice,
      maxPrice: filter.maxPrice,
      sortBy: filter.sortBy
    }),
    _useState2 = _slicedToArray(_useState, 2),
    field = _useState2[0],
    setFilter = _useState2[1];
  var dispatch = (0, _reactRedux.useDispatch)();
  var history = (0, _reactRouterDom.useHistory)();
  var didMount = (0, _hooks.useDidMount)();
  var max = (0, _selector.selectMax)(products);
  var min = (0, _selector.selectMin)(products);
  (0, _react.useEffect)(function () {
    if (didMount && window.screen.width <= 480) {
      history.push('/');
    }
    if (didMount && closeModal) closeModal();
    setFilter(filter);
    window.scrollTo(0, 0);
  }, [filter]);
  var onPriceChange = function onPriceChange(minVal, maxVal) {
    setFilter(_objectSpread(_objectSpread({}, field), {}, {
      minPrice: minVal,
      maxPrice: maxVal
    }));
  };
  var onBrandFilterChange = function onBrandFilterChange(e) {
    var val = e.target.value;
    setFilter(_objectSpread(_objectSpread({}, field), {}, {
      brand: val
    }));
  };
  var onSortFilterChange = function onSortFilterChange(e) {
    setFilter(_objectSpread(_objectSpread({}, field), {}, {
      sortBy: e.target.value
    }));
  };
  var onApplyFilter = function onApplyFilter() {
    var isChanged = Object.keys(field).some(function (key) {
      return field[key] !== filter[key];
    });
    if (field.minPrice > field.maxPrice) {
      return;
    }
    if (isChanged) {
      dispatch((0, _filterActions.applyFilter)(field));
    } else {
      closeModal();
    }
  };
  var onResetFilter = function onResetFilter() {
    var filterFields = ['brand', 'minPrice', 'maxPrice', 'sortBy'];
    if (filterFields.some(function (key) {
      return !!filter[key];
    })) {
      dispatch((0, _filterActions.resetFilter)());
    } else {
      closeModal();
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "filters"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "filters-field"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Brand"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), products.length === 0 && isLoading ? /*#__PURE__*/_react["default"].createElement("h5", {
    className: "text-subtle"
  }, "Loading Filter") : /*#__PURE__*/_react["default"].createElement("select", {
    className: "filters-brand",
    value: field.brand,
    disabled: isLoading || products.length === 0,
    onChange: onBrandFilterChange
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, "All Brands"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "salt"
  }, "Salt Maalat"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "betsin"
  }, "Betsin Maalat"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "black"
  }, "Black Kibal"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "sexbomb"
  }, "Sexbomb"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "filters-field"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Sort By"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("select", {
    className: "filters-sort-by d-block",
    value: field.sortBy,
    disabled: isLoading || products.length === 0,
    onChange: onSortFilterChange
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, "None"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "name-asc"
  }, "Name Ascending A - Z"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "name-desc"
  }, "Name Descending Z - A"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "price-desc"
  }, "Price High - Low"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "price-asc"
  }, "Price Low - High"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "filters-field"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Price Range"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), products.length === 0 && isLoading || max === 0 ? /*#__PURE__*/_react["default"].createElement("h5", {
    className: "text-subtle"
  }, "Loading Filter") : products.length === 1 ? /*#__PURE__*/_react["default"].createElement("h5", {
    className: "text-subtle"
  }, "No Price Range") : /*#__PURE__*/_react["default"].createElement(_PriceRange["default"], {
    min: min,
    max: max,
    initMin: field.minPrice,
    initMax: field.maxPrice,
    isLoading: isLoading,
    onPriceChange: onPriceChange,
    productsCount: products.length
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "filters-action"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "filters-button button button-small",
    disabled: isLoading || products.length === 0,
    onClick: onApplyFilter,
    type: "button"
  }, "Apply filters"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "filters-button button button-border button-small",
    disabled: isLoading || products.length === 0,
    onClick: onResetFilter,
    type: "button"
  }, "Reset filters")));
};
Filters.propTypes = {
  closeModal: _propTypes["default"].func.isRequired
};
var _default = (0, _reactRouterDom.withRouter)(Filters);
exports["default"] = _default;