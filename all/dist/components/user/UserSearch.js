"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _filterActions = require("@/redux/actions/filterActions");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var UserSearch = function UserSearch() {
  var history = (0, _reactRouterDom.useHistory)();
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return {
        filter: state.filter,
        users: state.users.items,
        // Assuming this is your user data
        isLoading: state.app.loading,
        usersLength: state.users.length // Assuming you have a users array in your Redux state
      };
    }),
    usersLength = _useSelector.usersLength,
    filter = _useSelector.filter,
    users = _useSelector.users,
    isLoading = _useSelector.isLoading;
  var dispatch = (0, _reactRedux.useDispatch)();
  var searchInput = (0, _react.useRef)(null);
  var input = "";
  (0, _react.useEffect)(function () {
    searchInput.current.focus();
  }, []);
  var onSearchChange = function onSearchChange(e) {
    var val = e.target.value.trim();
    input = val;
    if (val === "" && usersLength !== 0) {
      dispatch((0, _filterActions.setTextFilter)(val));
      history.push("/");
    }
  };
  var onKeyUp = function onKeyUp(e) {
    if (e.keyCode === 13 && usersLength !== 0) {
      dispatch((0, _filterActions.setTextFilter)(input));
      history.push("/");
    }
  };
  var onClearRecentSearch = function onClearRecentSearch() {
    dispatch((0, _filterActions.clearRecentSearch)());
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-search"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-search-header"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    onClick: history.goBack,
    role: "presentation"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-chevron-left"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-search-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "user-search-input",
    onChange: onSearchChange,
    onKeyUp: onKeyUp,
    placeholder: "Search for user...",
    ref: searchInput,
    type: "text"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "searchbar-icon"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-search-body"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-search-recent"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-search-recent-header"
  }, /*#__PURE__*/_react["default"].createElement("h5", null, "Recent Searches"), /*#__PURE__*/_react["default"].createElement("h5", {
    onClick: onClearRecentSearch,
    style: {
      color: "red"
    },
    role: "presentation"
  }, "Clear")), filter.recent.map(function (item, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      _react["default"].createElement("div", {
        className: "pill-wrapper",
        key: "".concat(item).concat(index)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "pill padding-right-l"
      }, /*#__PURE__*/_react["default"].createElement("h5", {
        className: "pill-content margin-0",
        onClick: function onClick() {
          dispatch((0, _filterActions.setTextFilter)(item));
          history.push("/");
        },
        role: "presentation"
      }, item), /*#__PURE__*/_react["default"].createElement("div", {
        className: "pill-remove",
        onClick: function onClick() {
          return dispatch((0, _filterActions.removeSelectedRecent)(item));
        },
        role: "presentation"
      }, /*#__PURE__*/_react["default"].createElement("h5", {
        className: "text-subtle margin-0"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-times-circle"
      })))))
    );
  }), filter.recent.length === 0 && /*#__PURE__*/_react["default"].createElement("h5", {
    className: "text-subtle"
  }, "No recent searches")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-search-filter"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "margin-0"
  }, "Choose Filters"))));
};
var _default = UserSearch;
exports["default"] = _default;