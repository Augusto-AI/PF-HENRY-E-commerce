"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _constants = require("@/constants/constants");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var initState = {
  lastRefKey: null,
  total: 0,
  items: []
};
var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    lastRefKey: null,
    total: 0,
    items: [],
    searchedProducts: initState
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _constants.GET_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        lastRefKey: action.payload.lastKey,
        total: action.payload.total,
        items: [].concat(_toConsumableArray(state.items), _toConsumableArray(action.payload.products))
      });
    case _constants.ADD_PRODUCT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: [].concat(_toConsumableArray(state.items), [action.payload])
      });
    case _constants.SEARCH_PRODUCT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        searchedProducts: {
          lastRefKey: action.payload.lastKey,
          total: action.payload.total,
          items: [].concat(_toConsumableArray(state.searchedProducts.items), _toConsumableArray(action.payload.products))
        }
      });
    case _constants.CLEAR_SEARCH_STATE:
      return _objectSpread(_objectSpread({}, state), {}, {
        searchedProducts: initState
      });
    case _constants.REMOVE_PRODUCT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: state.items.filter(function (product) {
          return product.id !== action.payload;
        })
      });
    case _constants.EDIT_PRODUCT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: state.items.map(function (product) {
          if (product.id === action.payload.id) {
            return _objectSpread(_objectSpread({}, product), action.payload.updates);
          }
          return product;
        })
      });
    default:
      return state;
  }
};
exports["default"] = _default;