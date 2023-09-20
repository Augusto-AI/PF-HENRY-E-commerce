"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _filterActions = require("@/redux/actions/filterActions");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /* eslint-disable react/no-array-index-key */
var SearchBar = function SearchBar() {
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchInput = _useState2[0],
    setSearchInput = _useState2[1];
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return {
        filter: state.filter,
        isLoading: state.app.loading
      };
    }),
    filter = _useSelector.filter,
    isLoading = _useSelector.isLoading;
  var searchbarRef = (0, _react.useRef)(null);
  var history = (0, _reactRouterDom.useHistory)();
  var dispatch = (0, _reactRedux.useDispatch)();
  var isMobile = window.screen.width <= 800;
  var onSearchChange = function onSearchChange(e) {
    var val = e.target.value.trimStart();
    setSearchInput(val);
  };
  var onKeyUp = function onKeyUp(e) {
    if (e.keyCode === 13) {
      // dispatch(setTextFilter(searchInput));
      e.target.blur();
      searchbarRef.current.classList.remove('is-open-recent-search');
      if (isMobile) {
        history.push('/');
      }
      history.push("/search/".concat(searchInput.trim().toLowerCase()));
    }
  };
  var recentSearchClickHandler = function recentSearchClickHandler(e) {
    var searchBar = e.target.closest('.searchbar');
    if (!searchBar) {
      searchbarRef.current.classList.remove('is-open-recent-search');
      document.removeEventListener('click', recentSearchClickHandler);
    }
  };
  var onFocusInput = function onFocusInput(e) {
    e.target.select();
    if (filter.recent.length !== 0) {
      searchbarRef.current.classList.add('is-open-recent-search');
      document.addEventListener('click', recentSearchClickHandler);
    }
  };
  var onClickRecentSearch = function onClickRecentSearch(keyword) {
    // dispatch(setTextFilter(keyword));
    searchbarRef.current.classList.remove('is-open-recent-search');
    history.push("/search/".concat(keyword.trim().toLowerCase()));
  };
  var onClearRecent = function onClearRecent() {
    dispatch((0, _filterActions.clearRecentSearch)());
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "searchbar",
    ref: searchbarRef
  }, /*#__PURE__*/_react["default"].createElement(_icons.SearchOutlined, {
    className: "searchbar-icon"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    className: "search-input searchbar-input",
    onChange: onSearchChange,
    onKeyUp: onKeyUp,
    onFocus: onFocusInput,
    placeholder: "Search product...",
    readOnly: isLoading,
    type: "text",
    value: searchInput
  }), filter.recent.length !== 0 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "searchbar-recent"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "searchbar-recent-header"
  }, /*#__PURE__*/_react["default"].createElement("h5", null, "Recent Search"), /*#__PURE__*/_react["default"].createElement("h5", {
    className: "searchbar-recent-clear text-subtle",
    onClick: onClearRecent,
    role: "presentation"
  }, "Clear")), filter.recent.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "searchbar-recent-wrapper",
      key: "search-".concat(item, "-").concat(index)
    }, /*#__PURE__*/_react["default"].createElement("h5", {
      className: "searchbar-recent-keyword margin-0",
      onClick: function onClick() {
        return onClickRecentSearch(item);
      },
      role: "presentation"
    }, item), /*#__PURE__*/_react["default"].createElement("span", {
      className: "searchbar-recent-button text-subtle",
      onClick: function onClick() {
        return dispatch((0, _filterActions.removeSelectedRecent)(item));
      },
      role: "presentation"
    }, "X"));
  }))));
};
var _default = SearchBar;
exports["default"] = _default;