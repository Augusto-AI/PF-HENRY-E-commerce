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
var _react2 = require("redux-persist/integration/react");
var _AppRouter = _interopRequireDefault(require("@/routers/AppRouter"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable react/forbid-prop-types */

var App = function App(_ref) {
  var store = _ref.store,
    persistor = _ref.persistor;
  return /*#__PURE__*/_react["default"].createElement(_react.StrictMode, null, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_react2.PersistGate, {
    loading: /*#__PURE__*/_react["default"].createElement(_common.Preloader, null),
    persistor: persistor
  }, /*#__PURE__*/_react["default"].createElement(_AppRouter["default"], null))));
};
App.propTypes = {
  store: _propTypes["default"].any.isRequired,
  persistor: _propTypes["default"].any.isRequired
};
var _default = App;
exports["default"] = _default;