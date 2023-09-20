"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setRequestStatus = exports.setLoading = exports.setAuthenticating = exports.setAuthStatus = void 0;
var _constants = require("@/constants/constants");
var setLoading = function setLoading() {
  var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return {
    type: _constants.LOADING,
    payload: bool
  };
};
exports.setLoading = setLoading;
var setAuthenticating = function setAuthenticating() {
  var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return {
    type: _constants.IS_AUTHENTICATING,
    payload: bool
  };
};
exports.setAuthenticating = setAuthenticating;
var setRequestStatus = function setRequestStatus(status) {
  return {
    type: _constants.SET_REQUEST_STATUS,
    payload: status
  };
};
exports.setRequestStatus = setRequestStatus;
var setAuthStatus = function setAuthStatus() {
  var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    type: _constants.SET_AUTH_STATUS,
    payload: status
  };
};
exports.setAuthStatus = setAuthStatus;