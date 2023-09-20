"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _common = require("@/components/common");
var _product = require("@/components/product");
var _hooks = require("@/hooks");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _miscActions = require("@/redux/actions/miscActions");
var _productActions = require("@/redux/actions/productActions");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable react/jsx-props-no-spreading */

var Search = function Search(_ref) {
  var match = _ref.match;
  var searchKey = match.params.searchKey;
  var dispatch = (0, _reactRedux.useDispatch)();
  var didMount = (0, _hooks.useDidMount)(true);
  var store = (0, _reactRedux.useSelector)(function (state) {
    return {
      isLoading: state.app.loading,
      products: state.products.searchedProducts.items,
      basket: state.basket,
      requestStatus: state.app.requestStatus
    };
  });
  (0, _react.useEffect)(function () {
    if (didMount && !store.isLoading) {
      dispatch((0, _productActions.searchProduct)(searchKey));
    }
  }, [searchKey]);
  (0, _react.useEffect)(function () {
    return function () {
      dispatch((0, _miscActions.setRequestStatus)(""));
    };
  }, []);
  if (store.requestStatus && !store.isLoading) {
    return /*#__PURE__*/_react["default"].createElement("main", {
      className: "content"
    }, /*#__PURE__*/_react["default"].createElement(_common.MessageDisplay, {
      message: store.requestStatus,
      desc: "Try using correct filters or keyword."
    }));
  }
  if (!store.requestStatus && !store.isLoading) {
    return /*#__PURE__*/_react["default"].createElement(_common.Boundary, null, /*#__PURE__*/_react["default"].createElement("main", {
      className: "content"
    }, /*#__PURE__*/_react["default"].createElement("section", {
      className: "product-list-wrapper product-list-search"
    }, !store.requestStatus && /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-list-header"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-list-header-title"
    }, /*#__PURE__*/_react["default"].createElement("h5", null, "Found ".concat(store.products.length, " ").concat(store.products.length > 1 ? "products" : "product", " with keyword ").concat(searchKey)))), /*#__PURE__*/_react["default"].createElement(_product.ProductGrid, {
      products: store.products
    }))));
  }
  return /*#__PURE__*/_react["default"].createElement("main", {
    className: "content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "loader"
  }, /*#__PURE__*/_react["default"].createElement("h4", null, "Searching Product..."), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_icons.LoadingOutlined, {
    style: {
      fontSize: "3rem"
    }
  })));
};
Search.propTypes = {
  match: _propTypes["default"].shape({
    params: _propTypes["default"].shape({
      searchKey: _propTypes["default"].string
    })
  }).isRequired
};
var _default = Search;
exports["default"] = _default;