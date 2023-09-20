"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _filterActions = require("@/redux/actions/filterActions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable no-nested-ternary */

var ProductAppliedFilters = function ProductAppliedFilters(_ref) {
  var filteredProductsCount = _ref.filteredProductsCount;
  var filter = (0, _reactRedux.useSelector)(function (state) {
    return state.filter;
  }, _reactRedux.shallowEqual);
  var fields = ['brand', 'minPrice', 'maxPrice', 'sortBy', 'keyword'];
  var isFiltered = fields.some(function (key) {
    return !!filter[key];
  });
  var dispatch = (0, _reactRedux.useDispatch)();
  var onRemoveKeywordFilter = function onRemoveKeywordFilter() {
    dispatch((0, _filterActions.applyFilter)({
      keyword: ''
    }));
  };
  var onRemovePriceRangeFilter = function onRemovePriceRangeFilter() {
    dispatch((0, _filterActions.applyFilter)({
      minPrice: 0,
      maxPrice: 0
    }));
  };
  var onRemoveBrandFilter = function onRemoveBrandFilter() {
    dispatch((0, _filterActions.applyFilter)({
      brand: ''
    }));
  };
  var onRemoveSortFilter = function onRemoveSortFilter() {
    dispatch((0, _filterActions.applyFilter)({
      sortBy: ''
    }));
  };
  return !isFiltered ? null : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-list-header"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-list-header-title"
  }, /*#__PURE__*/_react["default"].createElement("h5", null, filteredProductsCount > 0 && "Found ".concat(filteredProductsCount, " ").concat(filteredProductsCount > 1 ? 'products' : 'product')))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-applied-filters"
  }, filter.keyword && /*#__PURE__*/_react["default"].createElement("div", {
    className: "pill-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "d-block"
  }, "Keyword"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pill padding-right-l"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "pill-content margin-0"
  }, filter.keyword), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pill-remove",
    onClick: onRemoveKeywordFilter,
    role: "presentation"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "margin-0 text-subtle"
  }, /*#__PURE__*/_react["default"].createElement(_icons.CloseCircleOutlined, null))))), filter.brand && /*#__PURE__*/_react["default"].createElement("div", {
    className: "pill-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "d-block"
  }, "Brand"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pill padding-right-l"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "pill-content margin-0"
  }, filter.brand), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pill-remove",
    onClick: onRemoveBrandFilter,
    role: "presentation"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "margin-0 text-subtle"
  }, /*#__PURE__*/_react["default"].createElement(_icons.CloseCircleOutlined, null))))), (!!filter.minPrice || !!filter.maxPrice) && /*#__PURE__*/_react["default"].createElement("div", {
    className: "pill-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "d-block"
  }, "Price Range"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pill padding-right-l"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "pill-content margin-0"
  }, "$", filter.minPrice, "- $", filter.maxPrice), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pill-remove",
    onClick: onRemovePriceRangeFilter,
    role: "presentation"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "margin-0 text-subtle"
  }, /*#__PURE__*/_react["default"].createElement(_icons.CloseCircleOutlined, null))))), filter.sortBy && /*#__PURE__*/_react["default"].createElement("div", {
    className: "pill-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "d-block"
  }, "Sort By"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pill padding-right-l"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "pill-content margin-0"
  }, filter.sortBy === 'price-desc' ? 'Price High - Low' : filter.sortBy === 'price-asc' ? 'Price Low - High' : filter.sortBy === 'name-desc' ? 'Name Z - A' : 'Name A - Z'), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pill-remove",
    onClick: onRemoveSortFilter,
    role: "presentation"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "margin-0 text-subtle"
  }, /*#__PURE__*/_react["default"].createElement(_icons.CloseCircleOutlined, null)))))));
};
ProductAppliedFilters.defaultProps = {
  filteredProductsCount: 0
};
ProductAppliedFilters.propTypes = {
  filteredProductsCount: _propTypes["default"].number
};
var _default = ProductAppliedFilters;
exports["default"] = _default;