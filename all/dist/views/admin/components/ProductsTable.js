"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _ = require(".");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable react/forbid-prop-types */

var ProductsTable = function ProductsTable(_ref) {
  var filteredProducts = _ref.filteredProducts;
  return /*#__PURE__*/_react["default"].createElement("div", null, filteredProducts.length > 0 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-product grid-count-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-col"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/_react["default"].createElement("h5", null, "Name")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/_react["default"].createElement("h5", null, "Brand")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/_react["default"].createElement("h5", null, "Price")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/_react["default"].createElement("h5", null, "Date Added")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/_react["default"].createElement("h5", null, "Qty"))), filteredProducts.length === 0 ? new Array(10).fill({}).map(function (product, index) {
    return /*#__PURE__*/_react["default"].createElement(_.ProductItem
    // eslint-disable-next-line react/no-array-index-key
    , {
      key: "product-skeleton ".concat(index),
      product: product
    });
  }) : filteredProducts.map(function (product) {
    return /*#__PURE__*/_react["default"].createElement(_.ProductItem, {
      key: product.id,
      product: product
    });
  }));
};
ProductsTable.propTypes = {
  filteredProducts: _propTypes["default"].array.isRequired
};
var _default = ProductsTable;
exports["default"] = _default;