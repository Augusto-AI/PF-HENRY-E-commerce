"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _authReducer = _interopRequireDefault(require("./authReducer"));
var _basketReducer = _interopRequireDefault(require("./basketReducer"));
var _checkoutReducer = _interopRequireDefault(require("./checkoutReducer"));
var _filterReducer = _interopRequireDefault(require("./filterReducer"));
var _miscReducer = _interopRequireDefault(require("./miscReducer"));
var _productReducer = _interopRequireDefault(require("./productReducer"));
var _profileReducer = _interopRequireDefault(require("./profileReducer"));
var _userReducer = _interopRequireDefault(require("./userReducer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var rootReducer = {
  products: _productReducer["default"],
  basket: _basketReducer["default"],
  auth: _authReducer["default"],
  profile: _profileReducer["default"],
  filter: _filterReducer["default"],
  users: _userReducer["default"],
  checkout: _checkoutReducer["default"],
  app: _miscReducer["default"]
};
var _default = rootReducer;
exports["default"] = _default;