"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _common = require("@/components/common");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _miscActions = require("@/redux/actions/miscActions");
var _productActions = require("@/redux/actions/productActions");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /* eslint-disable react/forbid-prop-types */
var ProductList = function ProductList(props) {
  var products = props.products,
    filteredProducts = props.filteredProducts,
    isLoading = props.isLoading,
    requestStatus = props.requestStatus,
    children = props.children;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isFetching = _useState2[0],
    setFetching = _useState2[1];
  var dispatch = (0, _reactRedux.useDispatch)();
  var fetchProducts = function fetchProducts() {
    setFetching(true);
    dispatch((0, _productActions.getProducts)(products.lastRefKey));
  };
  (0, _react.useEffect)(function () {
    if (products.items.length === 0 || !products.lastRefKey) {
      fetchProducts();
    }
    window.scrollTo(0, 0);
    return function () {
      return dispatch((0, _miscActions.setLoading)(false));
    };
  }, []);
  (0, _react.useEffect)(function () {
    setFetching(false);
  }, [products.lastRefKey]);
  if (filteredProducts.length === 0 && !isLoading) {
    return /*#__PURE__*/_react["default"].createElement(_common.MessageDisplay, {
      message: (requestStatus === null || requestStatus === void 0 ? void 0 : requestStatus.message) || 'No products found.'
    });
  }
  if (filteredProducts.length === 0 && requestStatus) {
    return /*#__PURE__*/_react["default"].createElement(_common.MessageDisplay, {
      message: (requestStatus === null || requestStatus === void 0 ? void 0 : requestStatus.message) || 'Something went wrong :(',
      action: fetchProducts,
      buttonLabel: "Try Again"
    });
  }
  return /*#__PURE__*/_react["default"].createElement(_common.Boundary, null, children, products.items.length < products.total && /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-flex-center padding-l"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button-small",
    disabled: isFetching,
    onClick: fetchProducts,
    type: "button"
  }, isFetching ? 'Fetching Items...' : 'Show More Items')));
};
ProductList.defaultProps = {
  requestStatus: null
};
ProductList.propTypes = {
  products: _propTypes["default"].object.isRequired,
  filteredProducts: _propTypes["default"].array.isRequired,
  isLoading: _propTypes["default"].bool.isRequired,
  requestStatus: _propTypes["default"].string,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired
};
var _default = ProductList;
exports["default"] = _default;