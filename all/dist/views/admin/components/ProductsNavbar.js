"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _common = require("@/components/common");
var _routes = require("@/constants/routes");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ProductsNavbar = function ProductsNavbar(props) {
  var productsCount = props.productsCount,
    totalProductsCount = props.totalProductsCount;
  var history = (0, _reactRouterDom.useHistory)();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-admin-header"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "product-admin-header-title"
  }, "Products \xA0 (", "".concat(productsCount, " / ").concat(totalProductsCount), ")"), /*#__PURE__*/_react["default"].createElement(_common.SearchBar, null), "\xA0", /*#__PURE__*/_react["default"].createElement(_common.FiltersToggle, null, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button-muted button-small",
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement(_icons.FilterOutlined, null), "\xA0More Filters")), /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button-small",
    onClick: function onClick() {
      return history.push(_routes.ADD_PRODUCT);
    },
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement(_icons.PlusOutlined, null), "\xA0 Add New Product"));
};
ProductsNavbar.propTypes = {
  productsCount: _propTypes["default"].number.isRequired,
  totalProductsCount: _propTypes["default"].number.isRequired
};
var _default = ProductsNavbar;
exports["default"] = _default;