"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var useScrollTop = function useScrollTop() {
  (0, _react.useEffect)(function () {
    window.scrollTo(0, 0);
  }, []);
};
var _default = useScrollTop;
exports["default"] = _default;