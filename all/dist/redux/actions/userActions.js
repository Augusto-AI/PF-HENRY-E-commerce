"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerUser = exports.getUser = exports.editUser = exports.deleteUser = exports.addUser = void 0;
var _constants = require("@/constants/constants");
// insert in profile array
var registerUser = function registerUser(user) {
  return {
    type: _constants.REGISTER_USER,
    payload: user
  };
};
exports.registerUser = registerUser;
var getUser = function getUser(uid) {
  return {
    type: _constants.GET_USER,
    payload: uid
  };
};

// different from registerUser -- only inserted in admins' users array not in profile array
exports.getUser = getUser;
var addUser = function addUser(user) {
  return {
    type: _constants.ADD_USER,
    payload: user
  };
};
exports.addUser = addUser;
var editUser = function editUser(updates) {
  return {
    type: _constants.EDIT_USER,
    payload: updates
  };
};
exports.editUser = editUser;
var deleteUser = function deleteUser(id) {
  return {
    type: _constants.DELETE_USER,
    payload: id
  };
};
exports.deleteUser = deleteUser;