"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var useDocumentTitle = function useDocumentTitle(title) {
  (0, _react.useLayoutEffect)(function () {
    if (title) {
      document.title = title;
    } else {
      document.title = 'Salinaka - eCommerce React App';
    }
  }, [title]);
};
var _default = useDocumentTitle;
exports["default"] = _default;