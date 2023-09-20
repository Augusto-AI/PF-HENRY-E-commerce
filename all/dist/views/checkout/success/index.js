"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Success = function Success() {
  var successContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    marginLeft: '20px'
  };
  var successMessageStyle = {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
    marginLeft: '500px'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: successContainerStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: successMessageStyle
  }, /*#__PURE__*/React.createElement("p", null, "Your payment has been made!")));
};
var _default = Success;
exports["default"] = _default;