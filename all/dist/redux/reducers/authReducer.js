"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _constants = require("@/constants/constants");
var initState = null;
// {
// id: 'test-123',
// role: 'ADMIN',
// provider: 'password'
// };
var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _constants.SIGNIN_SUCCESS:
      return {
        id: action.payload.id,
        role: action.payload.role,
        provider: action.payload.provider
      };
    case _constants.SIGNOUT_SUCCESS:
      return null;
    default:
      return state;
  }
};
exports["default"] = _default;